# METODI PER LE STRINGHE

# 1. Metodi di modifica e formattazione
s=" CaSa blyat"
#s.upper()   # converte tutti i caratteri di s in maiuscolo
#s.lower()   # converte tutti i caratteri di s in minuscolo
#s.capitalize()     # converte il primo carattere di s in maiuscolo e tutti gli altri in minuscolo
s.title()   # converte tutte le parole in maiuscolo, con s "frase"
print(s)
s.strip()   # rimuove tutti gli spazi iniziali e finali
s.lstrip()  # rimuove tutti gli spazi iniziali (left)
s.rstrip()  # rimuove tutti gli spazi finali (right)
s.replace(new, old)     # sostituisce tutte le occorrenze di old con new

# 2. Metodi di ricerca
s.find(sub, start, end)     # restituisce indice prima occorrenza di sub o -1 se non trovato; start ed end sono opzionali
                            # sub=sottostringa da ricercare
s.index(sub, start, end)    # come find ma lancia eccezione se non trovato
s.rfind(sub, start, end)    # come find ma cerca da destra
s.rindex(sub, start, end)   # come index ma cerca da destra
s.count(sub, start, end)    # restituisce numero di occorrenze di sub
s.startswith(prefix, start, end)    # verifica se la stringa comincia con prefix 
s.endswith(suffix, start, end)      # verifica se la stringa termina con suffix

# 3. Metodi di divisione e unione
s.split(sep=None)   # divide la stringa in una lista di sottostringhe in base a sep che di default è " "
s.rsplit(sep)   # come split ma inizia la divisione da destra
s.partition(sep)    # divide la stringa in 3 parti: prima di sep, sep e dopo di sep
s.rpartition(sep)   # divide la stringa in 3 parti: dopo di sep, sep e prima di sep
s.join(iterable)    # unisce gli elementi di iterable in una stringa, separati dalla stringa chiamante 
                    # (s diventa il separatore della nuova stringa)
                    
# 4. Metodi di verifica 
s.isalpha()     # restituisce True se contiene solo lettere
s.isdigit()     # restituisce True se contiene solo cifre
s.isalnum()     # restituisce True se contiene solo lettere e cifre
s.islower()     # restituisce True se contiene solo caratteri minuscoli
s.isupper()     # restituisce True se contiene solo caratteri maiuscoli
