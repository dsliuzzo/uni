# scrivere un metodo ricorsivo che calcola la somma degli elementi di una lista
def sommaIndx(l, i):
    if i==len(l):
        return 0
    return l[i]+sommaIndx(l,i+1)
def somma(l):
    return somma(l,0)

# scrivere un metodo ricorsivo che calcola la somma degli elementi in posizione pari in una lista
def sommaPariIndx(l, i):
    if i>=len(l):
        return 0
    return l[i]+sommaPariIndx(l, i+2)
def sommaPari(l):
    return sommaPariIndx(l, 0)

# scrivere un metodo ricorsivo che calcola la somma degli elementi di valore pari di una lista
def sommaElementiIndx(l, i):
    if i==len(l):
        return 0
    if l[i]%2==0:
        return l[i]+sommaElementiIndx(l, i+1)
    else:
        return sommaElementiIndx(l, i+1)
def sommaElementi(l):
    return sommaElementiIndx(l, 0)

# scrivere un metodo ricorsivo che scrive all'inverso il contenuto di una lista
# problema enorme: append modifica la lista originale
# usiamo quindi +, che però concatena solo due liste, quindi devo utilizzare le doppie parentesi quadre per unirle
def inversaIndx(l, i):
    if i==-1:
        return []
    return [l[i]] + inversaIndx(l, i-1)
def inversa(l):
    return inversaIndx(l, len(l)-1)

# stampa lista inversa
def printInversaIndx(l, i):
    if i==-1:
        return
    print(l[i], end=' ')
    printInversaIndx(l, i-1)
    return
def printInversa(l):
    printInversaIndx(l,len(l)-1)

# lista inversa che si basa sull'eliminare elementi dalla lista per poi ripristinarli (utilizzo il pop per poter passare solo la lista alla funzione, alla ricorsione passerò la lista a cui ho eliminato l'ultimo elemento utilizzando il pop, così non è troppo oneroso), dovrò però riaggiungere l'elemento eliminato in quanto la modifica della lista è a livello globale e modificherebbe anche la lista al di fuori della funzione, che rimarrebbe vuota
def inversa2(l):
    if len(l)>0:
        print(l[len(l)-1], end=' ')
        n = l.pop(len(l)-1)
        inversa2(l)
        l.append(n)
        


lista = [1,2,3,4,5]
inversa2(lista)
print(lista)