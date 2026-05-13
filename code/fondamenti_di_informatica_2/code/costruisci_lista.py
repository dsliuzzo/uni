'''
Funzione costruisci_ista che riceve una lista di interi L1 e restituisce una lista L2 di pari lunghezza , il cui 
generico elemento i-esimo vale: 
- se la media degli elementi di L1 con indice maggiore o uguale a i è maggiore o uguale a L1[i], allora L2[i] è 
  pari a tale media
- altrimenti L2[i] è uguale alla differenza tra la somma degli elementi di sinistra di L1[i] e la somma degli elementi
  a destra di L1[i]
'''
#''' permette di commentare più righe contemporaneamente

def costruisci_lista(L1):
    L2 = [0]*len(L1)
    for i in range(len(L1)):
        somma = sum(L1[i:])
        n_elementi = len(L1)-i+1
        media = somma/n_elementi
        if media >= L1[i]:
            L2.append(media)
        else:
            somma_sinistra = sum(L1[:i])
            somma_destra = somma - L1[i]    # sum(L1[i+1:])
            L2.append(somma_sinistra-somma_destra)
    return L2
