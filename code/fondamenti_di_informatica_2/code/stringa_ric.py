# verificare se un carattere è presente nella stringa

def cerca(s, c):
    for i in range(0, len(s)):
        if s[i]==c:
            return True
    return False

# Se voglio creare questo algoritmo in modo ricorsivo faccio come su prolog, devo gestire la stringa eliminando un carattere alla volta
# il caso limite sarà la stringa vuota
# invece di modificare la stringa passo l'indice e modifico l'indice, che sarà l'indice di partenza del mio confronto

def cerca1(s, c, i):
    # caso base / tappo
    if i==len(s):
        return False
    # caso affermativo e ricorsione
    return s[i]==c or cerca1(s, c, i+1)

# per avere lo 0 di default
def cerca2(s, c):
    return cerca1(s, c, 0)

# praticamente notazione testa coda modificando la stringa, partendo dal secondo elemento per passarlo alla ricorsione
# inefficienza al max, copia la stringa su un'altra stringa senza il primo elemento
def cerca3(s, c):
    if len(s)==0:
        return False
    if c==s[0]:
        return True
    return cerca3(s[1:], c)

parola = 'ABEFAGCD'
print('La lettera H è presente nella parola? ', cerca1(parola, 'H', 0))