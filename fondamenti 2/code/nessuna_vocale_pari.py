# Funzione nessuna_vocale_pari che riceve una stringa e restituisce True se la stringa non contiene vocali in posizione
# pari, False altrimenti

def nessuna_vocale_pari(s):
    vocali="aeiou"
    for i in range(0, len(s), 2):
        if s[i].lower() in vocali:
            return False
    return True

def nessuna_vocale_pari_v2(s):
    vocali="aeiou"
    return all(s[i].lower not in vocali for i in range(0, len(s), 2))
# Quest'ultima riga di codice verifica se ogni elemento in posizione pari della stringa s non sia una vocale: se è
# verificata, la funzione restituisce True, altrimenti False

# Keywords all e any: 
# - all(iterabile): si utilizza per verificare se la condizione sia valida per OGNI elemento dell'iterabile
# - any(iterabile): si utilizza per verificare se la condizione sia valida per ALMENO un elemento dell'iterabile

def nessuna_vocale_pari_v3(s):
    vocali="aeiou"
    return all(c.lower() not in vocali for c in s[::2])

# s[start : end : step] = è possibile specificare all'interno delle parentesi quadre l'indice di inizio, di fine e la
# distanza da un carattere all'altro della sottostringa che ci interessa utilizzare a partire dalla stringa originale:
# tutto ciò è detto SLICING.
# Di default, start=0, end=len(s), step=1

# Esempio:
s="Buongiorno"
print(s[0:len(s):1]) # = print(s)
print(s[3:6])   # Risultato: ngi
print(s[::2])   # Risultato: Bogon