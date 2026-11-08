#!/usr/bin/env python3
"""Generatore di GIF animate dei protocolli di rete, nello stile di Protocol Explorer
(https://protocol-explorer-alpha.vercel.app/), con sfondo nero.

Uso:  python3 gen.py <scena> [uscita.gif]
Le scene stanno in SCENES (in fondo al file). Richiede pycairo e ffmpeg.
"""
import math, os, shutil, subprocess, sys, tempfile
import cairo

W, H = 800, 540          # dimensioni GIF
SCENE_H = 420            # altezza area animazione (sotto c'è la didascalia)
FPS = 12
FONT = "Noto Sans Mono"

BLUE = (0.36, 0.50, 1.00)
BLUE_DIM = (0.25, 0.33, 0.62)
FACE_TOP = (0.06, 0.08, 0.17)
FACE_L = (0.03, 0.04, 0.10)
FACE_R = (0.045, 0.06, 0.13)
TEXT = (0.90, 0.92, 0.97)
TEXT_DIM = (0.55, 0.62, 0.80)
TONES = {
    "slate":  (0.62, 0.66, 0.74),
    "amber":  (0.98, 0.75, 0.20),
    "violet": (0.62, 0.50, 1.00),
    "green":  (0.30, 0.85, 0.50),
    "navy":   (0.40, 0.55, 1.00),
    "red":    (1.00, 0.40, 0.40),
}


# ---------------------------------------------------------------- utilità
def ease(t):
    t = max(0.0, min(1.0, t))
    return t * t * (3 - 2 * t)


def lerp(a, b, t):
    return a + (b - a) * t


def rrect(c, x, y, w, h, r):
    c.new_sub_path()
    c.arc(x + w - r, y + r, r, -math.pi / 2, 0)
    c.arc(x + w - r, y + h - r, r, 0, math.pi / 2)
    c.arc(x + r, y + h - r, r, math.pi / 2, math.pi)
    c.arc(x + r, y + r, r, math.pi, 3 * math.pi / 2)
    c.close_path()


def font(c, size, bold=False):
    c.select_font_face(FONT, cairo.FONT_SLANT_NORMAL,
                       cairo.FONT_WEIGHT_BOLD if bold else cairo.FONT_WEIGHT_NORMAL)
    c.set_font_size(size)


def text(c, s, x, y, size, col, bold=False, align="l", alpha=1.0):
    font(c, size, bold)
    w = c.text_extents(s).x_advance
    if align == "c":
        x -= w / 2
    elif align == "r":
        x -= w
    c.set_source_rgba(*col, alpha)
    c.move_to(x, y)
    c.show_text(s)
    return w


def tw(c, s, size, bold=False):
    font(c, size, bold)
    return c.text_extents(s).x_advance


# ---------------------------------------------------------------- isometria
class Iso:
    """Proiezione isometrica attorno a un'ancora (ax, ay) in coordinate scena."""
    def __init__(self, ax, ay, s):
        self.ax, self.ay, self.s = ax, ay, s

    def p(self, x, y, z=0):
        return (self.ax + (x - y) * 0.866 * self.s,
                self.ay + (x + y) * 0.5 * self.s - z * self.s)

    def poly(self, c, pts, fill=None, stroke=BLUE, lw=None):
        c.move_to(*self.p(*pts[0]))
        for q in pts[1:]:
            c.line_to(*self.p(*q))
        c.close_path()
        if fill:
            c.set_source_rgb(*fill)
            c.fill_preserve()
        c.set_source_rgb(*stroke)
        c.stroke()

    def line(self, c, a, b, col=BLUE):
        c.move_to(*self.p(*a))
        c.line_to(*self.p(*b))
        c.set_source_rgb(*col)
        c.stroke()

    def box(self, c, x0, y0, z0, w, d, h):
        x1, y1, z1 = x0 + w, y0 + d, z0 + h
        self.poly(c, [(x1, y0, z0), (x1, y1, z0), (x1, y1, z1), (x1, y0, z1)], FACE_R)   # faccia +x
        self.poly(c, [(x0, y1, z0), (x1, y1, z0), (x1, y1, z1), (x0, y1, z1)], FACE_L)   # faccia +y
        self.poly(c, [(x0, y0, z1), (x1, y0, z1), (x1, y1, z1), (x0, y1, z1)], FACE_TOP)  # sopra


def shadow(c, x, y, rx, ry):
    c.save()
    c.translate(x, y)
    c.scale(rx, ry)
    g = cairo.RadialGradient(0, 0, 0, 0, 0, 1)
    g.add_color_stop_rgba(0, 0.15, 0.22, 0.55, 0.35)
    g.add_color_stop_rgba(1, 0, 0, 0, 0)
    c.set_source(g)
    c.arc(0, 0, 1, 0, 2 * math.pi)
    c.fill()
    c.restore()


# ---------------------------------------------------------------- icone
def draw_laptop(c, x, y):
    shadow(c, x + 10, y + 8, 95, 38)
    iso = Iso(x, y, 58)
    w, d = 1.5, 1.05
    iso.box(c, -w / 2, -d / 2, 0, w, d, 0.08)
    # tastiera
    kx0, kx1, ky0, ky1 = -0.45, 0.25, -0.38, 0.38
    iso.poly(c, [(kx0, ky0, .08), (kx1, ky0, .08), (kx1, ky1, .08), (kx0, ky1, .08)], FACE_L, BLUE_DIM)
    for i in range(1, 4):
        xx = lerp(kx0, kx1, i / 4)
        iso.line(c, (xx, ky0, .08), (xx, ky1, .08), BLUE_DIM)
    for i in range(1, 8):
        yy = lerp(ky0, ky1, i / 8)
        iso.line(c, (kx0, yy, .08), (kx1, yy, .08), BLUE_DIM)
    iso.poly(c, [(.36, -.2, .08), (.62, -.2, .08), (.62, .2, .08), (.36, .2, .08)], None, BLUE_DIM)
    # schermo (pannello sul bordo posteriore, leggermente inclinato)
    t = 0.22
    xb = -w / 2
    pts = [(xb, -d / 2, .08), (xb, d / 2, .08), (xb - t, d / 2, 1.05), (xb - t, -d / 2, 1.05)]
    iso.poly(c, pts, FACE_R)
    m = 0.07
    inner = [(xb - t * 0.12, -d / 2 + m, .16), (xb - t * 0.12, d / 2 - m, .16),
             (xb - t * 0.93, d / 2 - m, 0.98), (xb - t * 0.93, -d / 2 + m, 0.98)]
    iso.poly(c, inner, (0.05, 0.08, 0.2), BLUE_DIM)
    # righe di "codice" sullo schermo
    for k, (a, b) in enumerate([(.1, .7), (.1, .5), (.1, .8), (.1, .4), (.1, .6)]):
        zz = 0.85 - k * 0.13
        xx = xb - t * (zz - .08) / .97
        iso.line(c, (xx, -d / 2 + m + a * (d - 2 * m), zz), (xx, -d / 2 + m + b * (d - 2 * m), zz), BLUE_DIM)


def draw_router(c, x, y):
    shadow(c, x + 6, y + 6, 80, 32)
    iso = Iso(x, y, 58)
    w, d, h = 1.3, 0.95, 0.5
    iso.box(c, -w / 2, -d / 2, 0, w, d, h)
    # antenna
    iso.line(c, (-.4, -.3, h), (-.4, -.3, h + 1.0))
    ax, ay = iso.p(-.4, -.3, h + 1.0)
    c.arc(ax, ay, 3.5, 0, 2 * math.pi)
    c.set_source_rgb(*BLUE)
    c.fill()
    # led sul tetto
    for i in range(4):
        y0 = -0.32 + i * 0.18
        iso.poly(c, [(.38, y0, h), (.5, y0, h), (.5, y0 + .1, h), (.38, y0 + .1, h)], BLUE, BLUE)
    # fessura sulla faccia +x
    iso.poly(c, [(w / 2, -.3, .12), (w / 2, .35, .12), (w / 2, .35, .36), (w / 2, -.3, .36)], None, BLUE)
    # porte sulla faccia +y
    iso.poly(c, [(-.15, d / 2, .12), (.12, d / 2, .12), (.12, d / 2, .34), (-.15, d / 2, .34)], None, BLUE)
    cx, cy = iso.p(-.42, d / 2, .24)
    c.arc(cx, cy, 6, 0, 2 * math.pi)
    c.set_source_rgb(*BLUE)
    c.stroke()


def draw_server(c, x, y):
    shadow(c, x + 6, y + 6, 85, 34)
    iso = Iso(x, y, 58)
    w, d, h = 1.15, 1.15, 1.9
    iso.box(c, -w / 2, -d / 2, 0, w, d, h)
    n = 5
    for i in range(1, n):
        z = h * i / n
        iso.line(c, (w / 2, -d / 2, z), (w / 2, d / 2, z))
        iso.line(c, (-w / 2, d / 2, z), (w / 2, d / 2, z))
    for i in range(n):
        z0 = h * i / n + 0.12
        iso.poly(c, [(w / 2, -.3, z0), (w / 2, .1, z0), (w / 2, .1, z0 + .14), (w / 2, -.3, z0 + .14)], None, BLUE_DIM)
        iso.poly(c, [(-.2, d / 2, z0), (.2, d / 2, z0), (.2, d / 2, z0 + .14), (-.2, d / 2, z0 + .14)], None, BLUE_DIM)
        lx, ly = iso.p(w / 2, .3, z0 + .07)
        c.arc(lx, ly, 2.5, 0, 2 * math.pi)
        c.set_source_rgb(*BLUE)
        c.fill()


def draw_cloud(c, x, y):
    shadow(c, x, y + 30, 90, 26)
    circles = [(-48, 6, 30), (-14, -16, 38), (30, -10, 34), (54, 12, 26), (-20, 20, 30), (20, 20, 30)]
    lw = c.get_line_width()
    c.set_source_rgb(*BLUE)
    for cx, cy, r in circles:
        c.arc(x + cx, y + cy, r + lw / 2, 0, 2 * math.pi)
        c.fill()
    c.set_source_rgb(*FACE_R)
    for cx, cy, r in circles:
        c.arc(x + cx, y + cy, r - lw / 2, 0, 2 * math.pi)
        c.fill()
    # globo
    gx, gy, r = x + 2, y + 2, 17
    c.set_source_rgb(*BLUE)
    c.arc(gx, gy, r, 0, 2 * math.pi)
    c.stroke()
    c.save()
    c.translate(gx, gy)
    c.scale(0.45, 1)
    c.arc(0, 0, r, 0, 2 * math.pi)
    c.restore()
    c.stroke()
    for dy in (-r * 0.5, 0, r * 0.5):
        hw = math.sqrt(r * r - dy * dy)
        c.move_to(gx - hw, gy + dy)
        c.line_to(gx + hw, gy + dy)
    c.move_to(gx, gy - r)
    c.line_to(gx, gy + r)
    c.stroke()


ICONS = {"laptop": draw_laptop, "router": draw_router, "server": draw_server, "cloud": draw_cloud}
# punto da cui partono/arrivano i link, altezza della cima (per i badge), posizione etichetta
ICON_META = {
    "laptop": dict(hub=(0, -15), top=-90, label=(-150, 40)),
    "router": dict(hub=(0, -15), top=-110, label=(0, 58)),
    "server": dict(hub=(0, -45), top=-150, label=(0, 62)),
    "cloud":  dict(hub=(0, 0), top=-80, label=(0, 70)),
}


# ---------------------------------------------------------------- sfondo
def draw_grid(c, cam):
    """Griglia isometrica grigio scuro che sfuma verso i bordi; sfondo nero puro."""
    cx, cy, s = cam
    g = cairo.ImageSurface(cairo.FORMAT_ARGB32, W, SCENE_H)
    gc = cairo.Context(g)
    gc.translate(W / 2, SCENE_H / 2)
    gc.scale(s, s)
    gc.translate(-cx, -cy)
    gc.set_line_width(1.0 / s)
    gc.set_source_rgb(0.19, 0.19, 0.21)
    step = 42
    span = 2000
    k = math.tan(math.radians(30))
    for i in range(-60, 61):
        b = i * step / math.cos(math.radians(30))
        for sign in (1, -1):
            gc.move_to(-span, sign * k * -span + b)
            gc.line_to(span, sign * k * span + b)
    gc.stroke()
    mask = cairo.RadialGradient(0, 0, 0, 0, 0, 1)
    mask.add_color_stop_rgba(0.0, 0, 0, 0, 1)
    mask.add_color_stop_rgba(0.45, 0, 0, 0, 0.9)
    mask.add_color_stop_rgba(1.0, 0, 0, 0, 0)
    c.save()
    c.set_source_surface(g, 0, 0)
    c.translate(W / 2, SCENE_H / 2)
    c.scale(W * 0.55, SCENE_H * 0.62)
    c.mask(mask)
    c.restore()


# ---------------------------------------------------------------- scena
class Scene:
    def __init__(self, d):
        self.d = d
        self.nodes = d["nodes"]
        self.frames = d["frames"]
        self.t = 0.0
        self.cam_keys = []      # (t0, dur, frame)
        self.shows = {}         # nodo -> t
        self.packets = []
        self.notes = []
        self.captions = []      # (t, idx)
        self.relabels = []      # (t, nodo, sub)
        self.build()
        self.T = self.t

    # --- costruzione timeline
    def build(self):
        d = self.d
        self.cam_keys.append((0, 0, d["start"]["frame"]))
        for n in d["start"]["nodes"]:
            self.shows[n] = -1
        self.t = 1.0
        for i, st in enumerate(d["steps"]):
            self.captions.append((self.t - 0.3, i))
            self.t += 0.6
            for ev in st["events"]:
                self.event(ev)
            self.t += st.get("hold", 2.2)
        self.t += 1.0

    def event(self, ev):
        k = ev["type"]
        if k == "show":
            for n in ev["nodes"]:
                self.shows[n] = self.t
            if "frame" in ev:
                self.cam_keys.append((self.t, 1.2, ev["frame"]))
            self.t += 1.3
        elif k == "packet":
            path = ev.get("via") or [ev["from"], ev["to"]]
            dur = ev.get("dur", 1.4 + 0.5 * (len(path) - 1))
            self.packets.append(dict(t0=self.t, dur=dur, path=path, color=ev["color"],
                                     label=ev["label"], lines=ev["lines"], linger=1.0))
            self.t += dur + ev.get("after", 0.9)
        elif k == "note":
            self.notes.append(dict(t0=self.t, at=ev["at"], text=ev["text"], tone=ev["tone"],
                                   t1=None))
            self.t += ev.get("after", 1.0)
        elif k == "relabel":
            self.relabels.append((self.t, ev["node"], ev["sub"]))
        elif k == "wait":
            self.t += ev["dur"]

    # --- stato a un istante
    def camera(self, t):
        cur = self.frames[self.cam_keys[0][2]]
        for t0, dur, f in self.cam_keys[1:]:
            if t < t0:
                break
            nxt = self.frames[f]
            e = ease((t - t0) / dur) if dur else 1
            cur = tuple(lerp(a, b, e) for a, b in zip(cur, nxt))
        return cur

    def step_at(self, t):
        idx = None
        for t0, i in self.captions:
            if t >= t0:
                idx = i
        return idx

    def node_alpha(self, n, t):
        if n not in self.shows:
            return 0
        return ease((t - self.shows[n]) / 0.6)

    def hub(self, n):
        nd = self.nodes[n]
        hx, hy = ICON_META[nd["icon"]]["hub"]
        return nd["pos"][0] + hx, nd["pos"][1] + hy

    # --- disegno
    def render(self, t, path):
        surf = cairo.ImageSurface(cairo.FORMAT_RGB24, W, H)
        c = cairo.Context(surf)
        c.set_source_rgb(0, 0, 0)
        c.paint()
        cam = self.camera(t)
        draw_grid(c, cam)
        cx, cy, s = cam

        def to_screen(x, y):
            return (W / 2 + (x - cx) * s, SCENE_H / 2 + (y - cy) * s)

        c.save()
        c.rectangle(0, 0, W, SCENE_H)
        c.clip()

        # link tratteggiati
        for a, b in self.d["links"]:
            al = min(self.node_alpha(a, t), self.node_alpha(b, t))
            if al <= 0:
                continue
            p, q = to_screen(*self.hub(a)), to_screen(*self.hub(b))
            c.set_dash([6, 6])
            c.set_line_width(1.6)
            c.set_source_rgba(*BLUE_DIM, 0.8 * al)
            c.move_to(*p)
            c.line_to(*q)
            c.stroke()
            c.set_dash([])

        # nodi (in ordine di profondità: y crescente)
        for n in sorted(self.nodes, key=lambda n: self.nodes[n]["pos"][1]):
            al = self.node_alpha(n, t)
            if al <= 0:
                continue
            nd = self.nodes[n]
            c.push_group()
            c.save()
            c.translate(W / 2, SCENE_H / 2)
            c.scale(s, s)
            c.translate(-cx, -cy)
            c.set_line_width(1.7 / s)
            c.set_line_join(cairo.LINE_JOIN_ROUND)
            ICONS[nd["icon"]](c, *nd["pos"])
            c.restore()
            c.pop_group_to_source()
            c.paint_with_alpha(al)

        # etichette dei nodi (dopo le icone, con alone nero, dimensione fissa)
        for n, nd in self.nodes.items():
            al = self.node_alpha(n, t)
            if al <= 0:
                continue
            lx, ly = ICON_META[nd["icon"]]["label"]
            sx, sy = to_screen(nd["pos"][0] + lx, nd["pos"][1] + ly)
            sub = nd["sub"]
            for t0, nn, newsub in self.relabels:
                if nn == n and t >= t0:
                    sub = newsub
            align = "l" if lx < 0 else "c"
            rows = [(nd["name"], 15, TEXT, True, sy)] + \
                   [(line, 13, TEXT_DIM, False, sy + 17 + 15 * k) for k, line in enumerate(sub.split("\n"))]
            c.push_group()
            for s_, size, col, bold, yy in rows:
                font(c, size, bold)
                wd = c.text_extents(s_).x_advance
                xx = sx - (wd / 2 if align == "c" else 0)
                c.move_to(xx, yy)
                c.text_path(s_)
                c.set_source_rgb(0, 0, 0)
                c.set_line_width(5)
                c.stroke()
                text(c, s_, xx, yy, size, col, bold=bold)
            c.pop_group_to_source()
            c.paint_with_alpha(al)

        # pacchetti
        for pk in self.packets:
            u = (t - pk["t0"]) / pk["dur"]
            if u < 0 or u > 1 + pk["linger"] / pk["dur"]:
                continue
            pts = [to_screen(*self.hub(n)) for n in pk["path"]]
            segs = [math.dist(pts[i], pts[i + 1]) for i in range(len(pts) - 1)]
            L = sum(segs)
            dist = ease(min(u, 1)) * L
            col = TONES[pk["color"]]
            fade = 1.0 if u <= 1 else max(0, 1 - (u - 1) * pk["dur"] / pk["linger"])
            # scia colorata sul tratto percorso
            c.set_line_width(2.4)
            c.set_source_rgba(*col, 0.7 * fade)
            c.move_to(*pts[0])
            acc = 0
            px, py = pts[0]
            for i, sl in enumerate(segs):
                if acc + sl >= dist:
                    f = (dist - acc) / sl if sl else 0
                    px = lerp(pts[i][0], pts[i + 1][0], f)
                    py = lerp(pts[i][1], pts[i + 1][1], f)
                    c.line_to(px, py)
                    break
                c.line_to(*pts[i + 1])
                acc += sl
                px, py = pts[i + 1]
            c.stroke()
            # pallino con alone
            g = cairo.RadialGradient(px, py, 0, px, py, 22)
            g.add_color_stop_rgba(0, *col, 0.55 * fade)
            g.add_color_stop_rgba(1, *col, 0)
            c.set_source(g)
            c.arc(px, py, 22, 0, 2 * math.pi)
            c.fill()
            c.set_source_rgba(*col, fade)
            c.arc(px, py, 6.5, 0, 2 * math.pi)
            c.fill()
            c.set_source_rgba(1, 1, 1, 0.9 * fade)
            c.arc(px, py, 2.5, 0, 2 * math.pi)
            c.fill()
            card(c, px, py - 18, pk["label"], pk["lines"], col, fade)

        # note sopra i nodi
        for nt in self.notes:
            dt = t - nt["t0"]
            if dt < 0:
                continue
            # la nota resta fino alla fine del passo
            end = min([t0 for t0, _ in self.captions if t0 > nt["t0"]] + [self.T - 0.5])
            if t > end:
                continue
            al = ease(dt / 0.35) * (1 - ease((t - end + 0.4) / 0.4))
            nd = self.nodes[nt["at"]]
            x, y = to_screen(nd["pos"][0], nd["pos"][1] + ICON_META[nd["icon"]]["top"] / max(s, 0.01) * 0 + 0)
            x, y = to_screen(*nd["pos"])
            y += ICON_META[nd["icon"]]["top"] * s - 6
            badge(c, x, y, nt["text"], TONES[nt["tone"]], al)
        c.restore()

        caption(c, self, t)

        # dissolvenza inizio/fine per il loop
        fa = min(ease(t / 0.5), ease((self.T - t) / 0.6))
        if fa < 1:
            c.set_source_rgba(0, 0, 0, 1 - fa)
            c.paint()
        surf.write_to_png(path)


def card(c, x, y, title, lines, col, al):
    pad = 8
    tws = [tw(c, title, 12, True)] + [tw(c, l, 12.5) for l in lines]
    w = max(tws) + 2 * pad
    hh = 20
    h = hh + 8 + 17 * len(lines)
    x0 = max(6, min(W - w - 6, x - w / 2))
    y0 = max(6, y - h)
    c.push_group()
    rrect(c, x0, y0, w, h, 4)
    c.set_source_rgba(0.04, 0.05, 0.10, 0.95)
    c.fill_preserve()
    c.set_source_rgb(*[v * 0.75 for v in col])
    c.set_line_width(1.2)
    c.stroke()
    c.save()
    rrect(c, x0, y0, w, h, 4)
    c.clip()
    c.rectangle(x0, y0, w, hh)
    c.set_source_rgb(*col)
    c.fill()
    c.restore()
    text(c, title, x0 + w / 2, y0 + 14.5, 12, (0.03, 0.03, 0.06), bold=True, align="c")
    for k, l in enumerate(lines):
        text(c, l, x0 + pad, y0 + hh + 17 + 17 * k - 2, 12.5, TEXT)
    c.pop_group_to_source()
    c.paint_with_alpha(al)


def badge(c, x, y, s, col, al):
    w = tw(c, s, 12, True) + 26
    h = 24
    x0 = max(6, min(W - w - 6, x - w / 2))
    y0 = max(6, y - h)
    c.push_group()
    rrect(c, x0, y0, w, h, 12)
    c.set_source_rgba(*[v * 0.18 for v in col], 1)
    c.fill_preserve()
    c.set_source_rgb(*col)
    c.set_line_width(1.3)
    c.stroke()
    c.arc(x0 + 12, y0 + h / 2, 3.5, 0, 2 * math.pi)
    c.fill()
    text(c, s, x0 + 20, y0 + 16.5, 12, col, bold=True)
    c.pop_group_to_source()
    c.paint_with_alpha(al)


def caption(c, sc, t):
    y0 = SCENE_H
    c.set_source_rgb(0.16, 0.18, 0.26)
    c.rectangle(24, y0 + 2, W - 48, 1)
    c.fill()
    i = sc.step_at(t)
    head = sc.d["name"]
    text(c, head, W - 24, y0 + 26, 13, BLUE, bold=True, align="r")
    if i is None:
        text(c, sc.d.get("intro", ""), 24, y0 + 26, 13, TEXT_DIM, bold=True)
        return
    st = sc.d["steps"][i]
    t0 = [a for a, b in sc.captions if b == i][0]
    al = ease((t - t0) / 0.4)
    text(c, f"PASSO {i + 1} DI {len(sc.d['steps'])}", 24, y0 + 26, 13, BLUE, bold=True, alpha=al)
    text(c, st["title"], 24, y0 + 56, 22, TEXT, bold=True, alpha=al)
    text(c, st["desc"], 24, y0 + 80, 14, TEXT_DIM, alpha=al)
    text(c, st["facts"], 24, y0 + 104, 12.5, (0.62, 0.70, 0.95), alpha=al)


# ---------------------------------------------------------------- scene
def P(frm, to, color, label, lines, **kw):
    return dict(type="packet", **{"from": frm}, to=to, color=color, label=label, lines=lines, **kw)


SCENES = {
    # Dati dello scenario "IP · Addressing & Routing" di Protocol Explorer.
    "ip": dict(
        name="IP · INDIRIZZAMENTO E INSTRADAMENTO",
        intro="",
        nodes={
            "client":   dict(icon="laptop", pos=(-225, 100), name="Client", sub="192.168.1.10"),
            "router":   dict(icon="router", pos=(-45, -10), name="Router", sub="192.168.1.1"),
            "internet": dict(icon="cloud",  pos=(105, 100),  name="Internet", sub="11 router"),
            "web":      dict(icon="server", pos=(255, 15), name="Web Server", sub="203.0.113.10"),
        },
        links=[("client", "router"), ("router", "internet"), ("internet", "web")],
        # cx, cy, zoom
        frames={"client": (-245, 40, 1.9), "local": (-140, 35, 1.45), "full": (5, 30, 0.9)},
        start=dict(nodes=["client"], frame="client"),
        steps=[
            dict(title="Locale o no?",
                 desc="Il laptop confronta l'indirizzo di destinazione con la propria subnet.",
                 facts="Laptop 192.168.1.10/24 · rete locale 192.168.1.0 – .255 · gateway 192.168.1.1",
                 events=[dict(type="note", at="client", text="203.0.113.10 NON È LOCALE", tone="amber"),
                         dict(type="show", nodes=["router"], frame="local")]),
            dict(title="Trova il router",
                 desc="ARP traduce l'IP del gateway nel suo indirizzo MAC.",
                 facts="Chiede: chi ha 192.168.1.1? · inviato in broadcast · impara il MAC del router",
                 events=[P("client", "router", "slate", "ARP REQUEST", ["chi ha 192.168.1.1?", "rispondi a 192.168.1.10"]),
                         P("router", "client", "slate", "ARP REPLY", ["192.168.1.1 è a", "00:00:5e:00:53:01"])]),
            dict(title="Invio del pacchetto",
                 desc="L'header IP porta sorgente, destinazione, TTL e protocollo trasportato.",
                 facts="192.168.1.10 → 203.0.113.10 · TTL 128 · protocollo 6 (TCP, SYN verso la porta 443)",
                 events=[P("client", "router", "amber", "PACCHETTO IP", ["192.168.1.10 → 203.0.113.10", "TTL 128 · protocollo TCP"], dur=1.8)]),
            dict(title="NAT, poi hop by hop",
                 desc="Il router mette il suo IP pubblico come sorgente; ogni router decrementa il TTL.",
                 facts="Nuova sorgente 198.51.100.7:40112 · esce con TTL 127 · arriva con TTL 116 (11 hop)",
                 events=[dict(type="relabel", node="router", sub="192.168.1.1\n198.51.100.7 (pubblico)"),
                         dict(type="show", nodes=["internet", "web"], frame="full"),
                         P("router", "web", "amber", "PACCHETTO IP", ["198.51.100.7 → 203.0.113.10", "TTL 127 · dopo il NAT"],
                           via=["router", "internet", "web"], dur=3.0, after=0.3),
                         dict(type="note", at="web", text="ARRIVATO CON TTL 116", tone="green")]),
            dict(title="La risposta torna indietro",
                 desc="Il router cerca la porta nella tabella NAT e riscrive la destinazione.",
                 facts="Inviata a 198.51.100.7:40112 · consegnata a 192.168.1.10:52344 · TTL 64 → 52 (12 router)",
                 hold=3.2,
                 events=[P("web", "router", "violet", "RISPOSTA", ["203.0.113.10 → 198.51.100.7", "TTL 64 · SYN-ACK"],
                           via=["web", "internet", "router"], dur=3.0, after=0.3),
                         dict(type="note", at="router", text="NAT: 40112 → 192.168.1.10", tone="navy", after=1.4),
                         P("router", "client", "violet", "RISPOSTA", ["203.0.113.10 → 192.168.1.10", "TTL 52 · dopo il NAT"], dur=1.8)]),
        ],
    ),
}


def main():
    name = sys.argv[1] if len(sys.argv) > 1 else "ip"
    out = os.path.abspath(sys.argv[2] if len(sys.argv) > 2 else f"{name}.gif")
    only = sys.argv[3] if len(sys.argv) > 3 else None   # es. "12.5" = salva solo quel fotogramma in PNG
    sc = Scene(SCENES[name])
    if only:
        sc.render(float(only), out)
        return
    tmp = tempfile.mkdtemp()
    n = int(sc.T * FPS)
    for i in range(n):
        sc.render(i / FPS, os.path.join(tmp, f"f{i:04d}.png"))
    subprocess.run(["ffmpeg", "-v", "error", "-y", "-framerate", str(FPS), "-i", os.path.join(tmp, "f%04d.png"),
                    "-vf", "split[a][b];[a]palettegen=max_colors=128:stats_mode=full[p];[b][p]paletteuse=dither=none",
                    "-loop", "0", out], check=True)
    shutil.rmtree(tmp)
    print(f"{out}: {n} fotogrammi, {sc.T:.1f} s, {os.path.getsize(out) / 1e6:.2f} MB")


if __name__ == "__main__":
    main()
