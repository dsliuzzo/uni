'''
def leggiMatrice(numR, numC):
    m=[]
    for r in range(0, numR):
        riga=[]
        for c in range(0, numC):
            n=int(input("Riga "+str(r)+" Colonna "+str(c)+": "))
            riga.append(n)
        m.append(riga)
    return m

matrix=leggiMatrice(3,3)
print(matrix)
'''

# una lista di liste è una matrice solo se hanno la stessa lunghezza, altrimenti è solo una lista di liste

# estrai diagonale principale da una matrice quadrata
def estrai_diag(m, i, j):
    # caso base
    if j==len(m)-1:
        return [m[i][j]]
    return [m[i][j]] + estrai_diag(m, i+1, j+1)

def estrai_diagonale(m):
    if len(m)!=len(m[0]):
        print('ERRORE: inserire una matrice quadrata')
        return
    return estrai_diag(m, 0, 0)

# estrai la cornice da una matrice
def estrai_corn(m, i, j):
    if j==0 and i==0:
        return m[0] + estrai_corn(m, i+1, len(m)-1)
    if i==len(m)-1 and j==len(m)-1:
        return inversa(m[len(m)-1]) + estrai_corn(m, i-1, 0)
    if i>0 and i<len(m)-1 and j==len(m)-1:
        return [m[i][j]] + estrai_corn(m, i+1, len(m)-1)
    if i>1 and i<len(m)-1 and j==0:
        return [m[i][j]] + estrai_corn(m, i-1, 0)
    if i==1 and j==0:
        return [m[i][j]]
    
    
def inversa(l):
    return inversaIndx(l, len(l)-1)
    
def inversaIndx(l, i):
    if i==0:
        return [l[i]]
    return [l[i]] + inversaIndx(l, i-1)

def estrai_cornice(m):
    if len(m)!=len(m[0]):
        print('ERRORE: inserire una matrice quadrata')
        return
    return estrai_corn(m, 0, 0)

m=[[1, 2, 3, 4 ],
   [5, 6, 7, 8 ],
   [9, 10,11,12],
   [13,14,15,16]]
print(estrai_cornice(m))