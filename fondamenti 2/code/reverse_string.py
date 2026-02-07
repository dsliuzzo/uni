#scrivi una funzione che prende in ingresso una stringa e la stampa inversa

def inversa(s):
    for i in range(1, len(s)+1):
        print(s[i*(-1)], end='')
        
s="ciao"
inversa(s)