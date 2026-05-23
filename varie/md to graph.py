#!/usr/bin/env python3
"""
md_tree.py — Genera un albero HTML interattivo dai titoli di file Markdown.

Modalità file     → inserisci percorso di un .md
Modalità cartella → inserisci percorso di una cartella
                    Produce un unico HTML con tutti gli alberi affiancati.
"""

import re
from pathlib import Path


# ── Parser ────────────────────────────────────────────────────────────────────

def parse_headings(md_text: str) -> list[dict]:
    headings = []
    for line in md_text.splitlines():
        m = re.match(r'^(#{1,6})\s+(.+)', line)
        if m:
            headings.append({"level": len(m.group(1)), "title": m.group(2).strip()})
    return headings


def build_tree(filename: str, headings: list[dict]) -> dict:
    root = {"title": filename, "children": []}
    stack = [root]
    for h in headings:
        node = {"title": h["title"], "children": [], "level": h["level"]}
        while len(stack) > 1 and stack[-1].get("level", 0) >= h["level"]:
            stack.pop()
        stack[-1]["children"].append(node)
        stack.append(node)
    return root


def count_nodes(n: dict) -> int:
    return 1 + sum(count_nodes(c) for c in n.get("children", []))


# ── Node renderer ─────────────────────────────────────────────────────────────

LEVEL_COLORS = {
    1: "var(--h1-color)",
    2: "var(--h2-color)",
    3: "var(--h3-color)",
    4: "var(--h4-color)",
    5: "var(--h5-color)",
    6: "var(--h6-color)",
}


def render_node(node: dict, is_root: bool = False) -> str:
    children = node.get("children", [])
    level = node.get("level", 0)
    has_children = bool(children)

    node_class = "node root" if is_root else ("node" if has_children else "node leaf")
    color = LEVEL_COLORS.get(level, "var(--text)")
    chip = "" if is_root else f'<span class="chip chip-{min(level, 6)}"></span>'
    toggle = '<span class="toggle-icon">&#9662;</span>' if has_children else ""
    text_style = "" if is_root else f' style="color:{color}"'

    label = f'{chip}<span{text_style}>{node["title"]}</span>{toggle}'
    node_html = f'<div class="{node_class}">{label}</div>'
    li_attr = ' data-has-children="true"' if has_children else ""
    inner = ("<ul>" + "".join(render_node(c) for c in children) + "</ul>") if children else ""
    return f"<li{li_attr}>{node_html}{inner}</li>"


# ── Shared CSS / JS ───────────────────────────────────────────────────────────

COMMON_STYLE = """<style>
  @import url('https://fonts.googleapis.com/css2?family=Sono:wght@300;500;700&family=IBM+Plex+Mono:wght@400;600&display=swap');
  :root {
    --bg:#0d0f12; --surface:#161920; --border:#252a34;
    --accent:#5af0b0; --accent2:#7c6fff;
    --text:#e2e8f0; --muted:#64748b;
    --node-bg:#1a1f2b; --node-hover:#202636; --line:#2e3848;
    --radius:8px;
    --font-main:'Sono',monospace; --font-mono:'IBM Plex Mono',monospace;
    --h1-color:#9d68d3; --h2-color:#d15896;
    --h3-color:#379ad3; --h4-color:#8df7e7;
    --h5-color:#ec4899;  --h6-color:#22d3ee;
  }
  *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
  body{background:var(--bg);color:var(--text);font-family:var(--font-main);
       min-height:100vh;display:flex;flex-direction:column;align-items:center;
       padding:2rem 1rem 4rem}
  ul.tree,ul.tree ul{list-style:none;padding-left:0}
  ul.tree ul{position:relative;padding-left:2rem;margin-top:.25rem}
  ul.tree ul::before{content:'';position:absolute;left:.85rem;top:0;bottom:.75rem;
                     width:1px;background:var(--line)}
  ul.tree ul>li{position:relative}
  ul.tree ul>li::before{content:'';position:absolute;left:-1.15rem;top:1.1rem;
                        width:.9rem;height:1px;background:var(--line)}
  .node{display:inline-flex;align-items:center;gap:.5rem;background:var(--node-bg);
        border:1px solid var(--border);border-radius:var(--radius);
        padding:.45rem .85rem;margin:.22rem 0;cursor:pointer;user-select:none;
        transition:background .15s,border-color .15s,transform .1s;
        font-size:.88rem;font-weight:500;max-width:360px;word-break:break-word}
  .node:hover{background:var(--node-hover);border-color:var(--accent2);transform:translateX(2px)}
  .node.root{font-family:var(--font-mono);font-size:.82rem;font-weight:600;
             color:var(--accent);border-color:var(--accent);background:#0d1f18}
  .chip{display:inline-block;width:6px;height:6px;border-radius:50%;flex-shrink:0}
  .chip-1{background:var(--h1-color)} .chip-2{background:var(--h2-color)}
  .chip-3{background:var(--h3-color)} .chip-4{background:var(--h4-color)}
  .chip-5{background:var(--h5-color)} .chip-6{background:var(--h6-color)}
  .toggle-icon{font-size:.7rem;color:var(--muted);flex-shrink:0;transition:transform .2s}
  li.closed>.toggle-icon{transform:rotate(-90deg)}
  li.closed>ul{display:none}
  .node.leaf{cursor:default}
  .node.leaf:hover{transform:none;border-color:var(--border)}
  button{font-family:var(--font-mono);cursor:pointer;
         background:transparent;border:1px solid var(--border);
         color:var(--muted);border-radius:var(--radius);
         padding:.3rem .7rem;font-size:.73rem;
         transition:border-color .2s,color .2s}
  button:hover{border-color:var(--accent);color:var(--accent)}
</style>"""

COMMON_SCRIPT = """<script>
function setExpanded(root, expand){
  root.querySelectorAll('li[data-has-children="true"]').forEach(li=>{
    li.classList.toggle('closed',!expand);
    const ic=li.querySelector(':scope>.node>.toggle-icon');
    if(ic) ic.textContent=expand?'▾':'▸';
  });
}
function colToggle(btn){
  const tree=btn.closest('.col').querySelector('.tree');
  const open=!tree.querySelector('li.closed');
  setExpanded(tree,!open);
  btn.textContent=open?'espandi':'comprimi';
}
document.querySelectorAll('.node:not(.leaf)').forEach(node=>{
  node.addEventListener('click',()=>{
    const li=node.parentElement;
    li.classList.toggle('closed');
    const ic=node.querySelector('.toggle-icon');
    if(ic) ic.textContent=li.classList.contains('closed')?'▸':'▾';
  });
});
</script>"""


# ── Single-file HTML ──────────────────────────────────────────────────────────

def generate_single_html(tree: dict, filename: str) -> str:
    h = count_nodes(tree) - 1
    return f"""<!DOCTYPE html>
<html lang="it"><head><meta charset="UTF-8">
<title>MD Tree — {filename}</title>
{COMMON_STYLE}
</head><body>
<header style="width:100%;max-width:900px;margin-bottom:2rem;display:flex;
  align-items:baseline;gap:1rem;border-bottom:1px solid var(--border);padding-bottom:1rem">
  <h1 style="font-family:var(--font-mono);font-size:1rem;color:var(--accent);font-weight:600">
    \U0001f4c4 {filename}</h1>
  <span style="font-size:.8rem;color:var(--muted)">{h} titoli</span>
  <button style="margin-left:auto" onclick="toggleAllSingle(this)">espandi tutto</button>
</header>
<div style="width:100%;max-width:900px;overflow-x:auto">
  <ul class="tree" id="st">{render_node(tree, is_root=True)}</ul>
</div>
{COMMON_SCRIPT}
<script>
function toggleAllSingle(btn){{
  const tree=document.getElementById('st');
  const open=!tree.querySelector('li.closed');
  setExpanded(tree,!open);
  btn.textContent=open?'espandi tutto':'comprimi tutto';
}}
</script>
</body></html>"""


# ── Folder HTML (multi-column) ────────────────────────────────────────────────

def generate_folder_html(trees: list[tuple[str, dict]], folder_name: str) -> str:
    total = sum(count_nodes(t) - 1 for _, t in trees)

    cols = ""
    for i, (fname, tree) in enumerate(trees):
        h = count_nodes(tree) - 1
        cols += f"""
  <div class="col">
    <div class="col-hdr">
      <span class="col-title">\U0001f4c4 {fname}</span>
      <span class="col-count">{h} titoli</span>
      <button onclick="colToggle(this)">espandi</button>
    </div>
    <div class="col-body">
      <ul class="tree" id="tree{i}">{render_node(tree, is_root=True)}</ul>
    </div>
  </div>"""

    return f"""<!DOCTYPE html>
<html lang="it"><head><meta charset="UTF-8">
<title>MD Trees — {folder_name}</title>
{COMMON_STYLE}
<style>
  body{{align-items:flex-start;padding:1.5rem 1rem 4rem}}
  .page-hdr{{width:100%;display:flex;align-items:center;gap:1rem;
             border-bottom:1px solid var(--border);padding-bottom:1rem;margin-bottom:1.5rem}}
  .page-hdr h1{{font-family:var(--font-mono);font-size:1rem;color:var(--accent);font-weight:600}}
  .page-hdr span{{font-size:.8rem;color:var(--muted)}}
  .columns{{display:flex;flex-wrap:wrap;gap:1.25rem;width:100%;align-items:flex-start}}
  .col{{flex:1 1 260px;min-width:220px;max-width:400px;
        background:var(--surface);border:1px solid var(--border);
        border-radius:12px;padding:.9rem .9rem 1rem;display:flex;
        flex-direction:column;gap:.6rem}}
  .col-hdr{{display:flex;align-items:center;gap:.5rem;
            border-bottom:1px solid var(--border);padding-bottom:.5rem;flex-wrap:wrap}}
  .col-title{{font-family:var(--font-mono);font-size:.78rem;font-weight:600;
              color:var(--accent);flex:1;min-width:0;
              white-space:nowrap;overflow:hidden;text-overflow:ellipsis}}
  .col-count{{font-size:.7rem;color:var(--muted);white-space:nowrap}}
  .col-body{{overflow-x:auto}}
</style>
</head><body>

<div class="page-hdr">
  <h1>\U0001f4c1 {folder_name}</h1>
  <span>{len(trees)} file · {total} titoli</span>
  <button style="margin-left:auto" onclick="globalToggle(this)">espandi tutto</button>
</div>

<div class="columns">{cols}
</div>

{COMMON_SCRIPT}
<script>
let gExp=false;
function globalToggle(btn){{
  gExp=!gExp;
  document.querySelectorAll('.col').forEach(col=>{{
    const tree=col.querySelector('.tree');
    const b=col.querySelector('button');
    setExpanded(tree,gExp);
    if(b) b.textContent=gExp?'comprimi':'espandi';
  }});
  btn.textContent=gExp?'comprimi tutto':'espandi tutto';
}}
</script>
</body></html>"""


# ── Main ──────────────────────────────────────────────────────────────────────

def main():
    path_str = input("Percorso (file .md o cartella): ").strip().strip('"').strip("'")
    path = Path(path_str)

    if not path.exists():
        print(f"❌ Percorso non trovato: {path}")
        return

    if path.is_dir():
        md_files = sorted(path.glob("*.md")) + sorted(path.glob("*.markdown"))
        if not md_files:
            print("⚠️  Nessun file Markdown trovato.")
            return

        trees = []
        for md in md_files:
            text = md.read_text(encoding="utf-8")
            headings = parse_headings(text)
            if not headings:
                print(f"   ⚠️  {md.name}: nessun titolo, saltato.")
                continue
            trees.append((md.name, build_tree(md.name, headings)))
            print(f"   ✔  {md.name} ({len(headings)} titoli)")

        if not trees:
            print("❌ Nessun albero generato.")
            return

        html = generate_folder_html(trees, path.name)
        out = path / "trees.html"
        out.write_text(html, encoding="utf-8")
        print(f"\n✅ {len(trees)} alberi → {out}")

    elif path.is_file():
        if path.suffix.lower() not in {".md", ".markdown"}:
            print("⚠️  Non sembra un Markdown, continuo...")
        text = path.read_text(encoding="utf-8")
        headings = parse_headings(text)
        if not headings:
            print("⚠️  Nessun titolo trovato.")
            return
        tree = build_tree(path.name, headings)
        html = generate_single_html(tree, path.name)
        out = path.with_suffix(".tree.html")
        out.write_text(html, encoding="utf-8")
        print(f"✅ {out}  ({len(headings)} titoli)")

    else:
        print("❌ Percorso non valido.")


if __name__ == "__main__":
    main()