#!/usr/bin/env python3
"""
random_heading.py
Scorre ricorsivamente i file .md in una cartella, raccoglie gli heading
(# title, ## subtitle, ### subsubtitle) e ne estrae uno a caso,
filtrando per i livelli scelti dall'utente a runtime.
"""

import argparse
import random
import re
import sys
from pathlib import Path

# Regex per gli heading ATX: '#', '##', '###' seguiti da spazio e testo
HEADING_RE = re.compile(r'^(#{1,3})\s+(.*\S)\s*$')

LEVEL_NAMES = {1: "title", 2: "subtitle", 3: "subsubtitle"}


def raccogli_heading(cartella: Path):
    """
    Scorre tutti i .md sotto 'cartella' e ritorna un dict:
    { percorso_file: [(livello, testo_heading), ...] }
    """
    heading_per_file = {}
    for file_md in cartella.rglob("*.md"):
        try:
            testo = file_md.read_text(encoding="utf-8")
        except (UnicodeDecodeError, OSError) as e:
            print(f"Attenzione: salto {file_md} ({e})", file=sys.stderr)
            continue

        heading_file = []
        in_code_block = False
        for riga in testo.splitlines():
            # Ignora gli heading dentro i blocchi di codice ```...```
            if riga.strip().startswith("```"):
                in_code_block = not in_code_block
                continue
            if in_code_block:
                continue

            match = HEADING_RE.match(riga)
            if match:
                livello = len(match.group(1))
                testo_heading = match.group(2)
                heading_file.append((livello, testo_heading))

        if heading_file:
            heading_per_file[file_md] = heading_file

    return heading_per_file


def chiedi_cartella() -> Path:
    """Prompt interattivo: chiede il percorso della cartella da scorrere."""
    try:
        risposta = input("Inserisci il percorso della cartella con i file .md: ").strip()
    except EOFError:
        print(
            "\nErrore: nessun input disponibile (stdin non collegato a un terminale).\n"
            "Esegui lo script da un terminale vero, non con 'Apri con'.",
            file=sys.stderr,
        )
        sys.exit(1)

    if not risposta:
        print("Errore: percorso vuoto.", file=sys.stderr)
        sys.exit(1)

    # Rimuove eventuali virgolette (capita copiando il percorso da Esplora file)
    risposta = risposta.strip('"').strip("'")
    return Path(risposta).expanduser().resolve()


def chiedi_livelli() -> set[int]:
    """Prompt interattivo: chiede quali livelli includere."""
    print("Quali livelli vuoi includere nel pool?")
    print("  1 = title (#)")
    print("  2 = subtitle (##)")
    print("  3 = subsubtitle (###)")
    try:
        risposta = input("Inserisci i numeri separati da spazio o virgola (es: 1 3) [default: 1 2 3]: ").strip()
    except EOFError:
        print(
            "\nErrore: nessun input disponibile (stdin non collegato a un terminale).\n"
            "Esegui lo script da un terminale vero, non con 'Apri con'.",
            file=sys.stderr,
        )
        sys.exit(1)

    if not risposta:
        return {1, 2, 3}

    numeri = re.split(r"[,\s]+", risposta)
    livelli = set()
    for n in numeri:
        if n in ("1", "2", "3"):
            livelli.add(int(n))
        else:
            print(f"Valore ignorato (non valido): {n}", file=sys.stderr)

    if not livelli:
        print("Nessun livello valido inserito, uso il default (1 2 3).", file=sys.stderr)
        return {1, 2, 3}

    return livelli


def main():
    parser = argparse.ArgumentParser(
        description="Estrae un heading Markdown casuale da una cartella di file .md"
    )
    parser.add_argument(
        "cartella",
        type=str,
        nargs="?",
        default=None,
        help="Percorso della cartella da scorrere (se omesso, viene richiesto a runtime)",
    )
    args = parser.parse_args()

    if args.cartella:
        cartella = Path(args.cartella).expanduser().resolve()
    else:
        cartella = chiedi_cartella()

    if not cartella.is_dir():
        print(f"Errore: '{cartella}' non è una cartella valida.", file=sys.stderr)
        sys.exit(1)

    livelli_scelti = chiedi_livelli()

    heading_per_file = raccogli_heading(cartella)

    # Filtro per livello e scarto i file che restano senza heading validi
    pool_per_file = {}
    for file_md, lista_heading in heading_per_file.items():
        filtrati = [h for h in lista_heading if h[0] in livelli_scelti]
        if filtrati:
            pool_per_file[file_md] = filtrati

    if not pool_per_file:
        print("Nessun heading trovato per i livelli selezionati.", file=sys.stderr)
        sys.exit(1)

    totale_heading = sum(len(v) for v in pool_per_file.values())
    file_attivi = list(pool_per_file.keys())

    print(
        f"\nTrovati {totale_heading} heading in {len(file_attivi)} file. "
        "Premi Invio per il prossimo, 'q' + Invio per uscire.\n"
    )

    while file_attivi:
        try:
            comando = input("> ").strip().lower()
        except EOFError:
            break

        if comando == "q":
            break

        # Primo step: scelgo un file a caso (ogni file ha la stessa probabilità,
        # indipendentemente da quanti heading contiene)
        file_scelto = random.choice(file_attivi)
        heading_file = pool_per_file[file_scelto]

        # Secondo step: scelgo un heading a caso dentro quel file
        idx = random.randrange(len(heading_file))
        livello, testo = heading_file.pop(idx)

        # Se il file si è esaurito, lo rimuovo dal pool dei file attivi
        if not heading_file:
            del pool_per_file[file_scelto]
            file_attivi.remove(file_scelto)

        print(f"[{LEVEL_NAMES[livello]}] {testo}")
        print(f"File: {file_scelto}\n")

    if not file_attivi:
        print("Heading esauriti: hai pescato tutto il pool disponibile.")

    # Tiene aperta la finestra se lanciato con doppio click / "Apri con"
    if sys.stdin.isatty():
        try:
            input("\nPremi Invio per uscire...")
        except EOFError:
            pass


if __name__ == "__main__":
    main()
