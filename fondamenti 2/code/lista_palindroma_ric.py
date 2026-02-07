# verificare se una lista è palindroma

def pal(l, i, j):
    if i>j:
        return True
    return l[i]==l[j] and pal(l, i+1, j-1)

def palindroma(l):
    return pal(l, 0, len(l)-1)

print('lista palindroma? ', palindroma('ciao'))