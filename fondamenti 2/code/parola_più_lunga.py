# Funzione parola_piu_lunga che riceve una stringa (frase) e restituisce la parola più lunga presente nella frase

def parola_piu_lunga(s):
    parole = s.split()
    max_tmp=0
    parola_max=""
    for p in parole:
        if len(p)>max_tmp:
            max_tmp=len(p)
            parola_max=p
    return parola_max

def parola_piu_lunga_v2(s):
    parole=s.split() #split divide la stringa in una lista di stringhe divise da un sep che di default è ' '
    return max(parole)
# Keyword max(iterabile): dato un iterabile come argomento, restituisce l'elemento più grande contenuto in esso

s= "Ciao come stai tutto bene"
print(parola_piu_lunga(s))
print(parola_piu_lunga_v2(s))