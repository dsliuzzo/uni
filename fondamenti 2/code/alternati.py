# Funzione alternati che prende in input una lista e restituisce True se e solo se contiene valori alternati 
# pari e dispari (no elementi pari/dispari consecutivi)

def alternati(l):
    prec_pari = l[0]%2==0
    for i in range(1, len(l)):
        if (l[i]%2==0 and prec_pari) or (l[i]%2!=0 and not prec_pari):
            return False
        prec_pari = not prec_pari
    return True