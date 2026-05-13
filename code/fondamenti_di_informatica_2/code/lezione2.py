#leggere una sequenza di numero e fermarsi quando leggiamo un numero uguale al precedente
b = True
n1 = int(input("Inserisci un numero: "))
while b:
    n=int(input("Inserisci un numero: "))
    b = n != n1 #utilizzo il confronto come risultato da inserire nella booleana, senza bisogno di fare un confronto con if
    n1=n

#Scrivere una stringa s e poi stampare un singolo carattere con s[n]
#s[:n] stamperà la stringa dal primo carattere fino all'nesimo carattere, solo la parte finale s[n:], sottostringa specificando un range s[n:m]
#funzione len() ti da la grandezza della stringa