import linkedList as L

l = L.ListaConcatenata()
l.aggiungi_in_coda(10)
l.aggiungi_in_coda(2)
l.aggiungi_in_coda(3)
l.aggiungi_in_coda(4)
l.aggiungi_in_coda(5)
l.aggiungi_in_coda(6)
l.rimuovi_posizione(3)

print(l)
# usare il __getitem__() in questo modo è incredibilmente inefficiente
# da bocciatura
# la linked list non è utilizzata per accessi casuali
'''
for i in range(0, l._lunghezza):
    print(l[i])
'''
# tipicamente si fornisce anche la possibilità di iterare in maniera efficiente, associando un altra classe che si chiama iteratore
# iteratore : un oggetto che al suo interno contiene l'informazione di qual è il nodo corrente che stiamo scorrendo sulla lista (nodo corrente), che all'inizio punta alla testa della lista
# l'iteratore ha almeno il metodo __next__, che restituisce il valore puntato da nodo corrente e fa andare avanti nodo corrente
# hasnext(), verifica se l'elemento corrente ha un next
# dunder method __iter__() 

it = iter(l)
print('[', end='')
while not it.finito():
    # next restituisce il valore corrente e aggiorna l'iteratore
    print(next(it), end='')
    if not it.finito():
        print('->', end='')
print(']')

# utilizzare il for funziona se c'è l'iteratore o il getitem, dando priorità al all'iteratore
# quindi se non c'è nessuno di questi due metodi non funzionerà
# se è presente solo __getitem__() funzionerà ma sarà incredibilmente inefficiente
# se invece è presente __iter__() è efficiente
'''
for valore in l:
    print(valore, end=' ') #lancia exception?'
'''

# in teoria possiamo creare un campo all'interno di linkedlist un campo che rappresenta l'iteratore, ma non possiamo creare più iteratore in quel modo, quindi sarebbe molto più complicata. Non potremmo nemmeno richiamare il next come dunder method, perchè non richiamerebbe lo stesso

# metodo con il for
'''
i = 0
for valore in l:
    if i%2 == 0:
        print(valore)
    i+=1
'''
# metodo con il while
it = iter(l)
i = 0
print('[', end='')
while not it.finito():
    # ci sono più varianti di cazzata
    # val va usato per fare il successivo il qualsiasi caso
    val=next(it)
    if i%2 == 0:
        print(val, end='')
        if not it.finito():
            print('->', end='')
    i+=1
print(']')

# funzione che prende una lista di stringa e restituisce la concatenazione di tutti gli elementi
l1 = L.ListaConcatenata()
l1.aggiungi_in_coda('ciao0')
l1.aggiungi_in_coda('ciao1')
l1.aggiungi_in_coda('ciao2')
def concatena(ls):
    it1 = iter(ls)
    res = ''
    while not it1.finito():
        res = res + next(it1)
    return res
'''
def concatena_for(ls):
    res=''
    for valore in ls:
        res = res + valore
    return res


print(concatena_for(l1))
'''
# prende in argomento due liste di stringhe, restituisce true se le due liste sono uguali in ogni posizione
def compara(ls1, ls2):
    if len(ls1) != len(ls2):
        return False
    it1 = iter(ls1)
    it2 = iter(ls2)
    while not it1.finito():
        if next(it1) != next(it2):
            return False
    return True
# per fare questa stessa funzione non posso usare il for, al massimo devo usare entrambi
# tipicamente il for si usa se dobbiamo scandire solo quella, altrimenti per funzioni più complicati usiamo il while
ls1 = L.ListaConcatenata()
ls1.aggiungi_in_coda('ciao0')
ls1.aggiungi_in_coda('ciao1')
ls1.aggiungi_in_coda('ciao2')
ls1.aggiungi_in_coda('ciao3')
ls2 = L.ListaConcatenata()
ls2.aggiungi_in_coda('ciao0')
ls2.aggiungi_in_coda('ciao1')
ls2.aggiungi_in_coda('ciao2')
ls2.aggiungi_in_coda('ciao3')
print(compara(ls1, ls2))

def somma(l):
    it = iter(l)
    return sommaRic(it)
def sommaRic(it):
    if it.finito():
        return 0
    return next(it) + sommaRic(it)
print(somma)

# scrivi max e min che utilizza l'iteratore