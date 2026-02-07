#scrivi una funzione che verifica che una stringa sia palindroma

def pal(s):
    i=0
    j=len(s)-1
    s=s.lower()
    while(i<j):
        if(s[i]!=s[j]):
            return False
        i+=1
        j-=1
    return True

print(pal("Anna"))