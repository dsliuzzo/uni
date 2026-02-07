#scrivi una funzione che prende in ingresso 2 stringhe e restituisce True se il numero delle posizioni in cui coincidono è maggiore della metà della lunghezza della stringa più corta

def verifica(s1, s2):
    c=0
    if(len(s1)<len(s2)):
        n=int(len(s1)/2)
        for i in range(0, len(s1)):
            if(s1[i]==s2[i]):
                c+=1
    else:
        n=int(len(s2)/2)
        for i in range(0, len(s2)):
            if(s1[i]==s2[i]):
                c+=1
    if(c>n):
        return True
    else:
        return False

s1="c123000"
s2="cia"
print(verifica(s1,s2))