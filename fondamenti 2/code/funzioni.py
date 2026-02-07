#prende in argomento due numeri e stampa su schermo il minimo
def minimo(a, b):
    if a<b:
        return a
    return b

#contaoccorrenze di un determinato carattere c nella stringa s
def contaoccorrenze(s, c):
    count=0
    for i in range(0, len(s)):
        if s[i]==c:
            count+=1
    return count

#se la funzione non ha ritorno è una procedura
#i passaggi sono effettuati per valore non per riferimento
#le funzioni lavorano sul record di attivazione nello stack, ma ogni variabile in realtà è un puntatore alla variabile effettivamente creata nell'heap, per questo posso modificare il suo valore senza problemi anche dopo averla definita