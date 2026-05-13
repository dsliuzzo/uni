#leggi una sequenza di numeri e restituisci la media finchè non metto -1

n = 0
i = 0
media = 0
while(n==0 or n!=-1):
    n = int(input('Inserisci un numero: '))
    if n==-1:
        break
    else:
        i=i+1
        media=media+n
media=media/i
print(int(media))
