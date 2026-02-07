# Funzione rollup che riceve una lista l di lunghezza n (con n pari) e restituisce una nuova lista di lunghezza n/2
# il cui i-esimo elemento è pari a l[2*i]+l[2*i+1]

def rollup(l):
    res = []
    for i in range(len(l)//2): #// permette la divisione per interi
        res.append(l[2*i]+l[2*i+1]) #append aggiunge un valore alla fine di una lista
    return res

def rollup_v2(l):
    res = [0]*(len(l)//2)   # inizializza la lista con tutti gli elementi 0 con numero di elementi pari a len(l)//2
    for i in range(len(res)):
        res[i]=l[2*i]+l[2*i+1]
    return res
