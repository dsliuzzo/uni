# ricorsivamente un algoritmo che calcola il massimo in una lista di interi

#calcola il massimo a partire da una certa posizione i
def maxindx(l, i):
    if i==len(l)-1 or l[i]>maxindx(l, i+1):
        return l[i]
    return maxindx(l, i+1)

# setta il default di posizione da cui partire a 0
def massimo(l):
    return maxindx(l, 0)

lista = 5, 2, 3, 4, 5
print('Il massimo è: ', massimo(lista))
