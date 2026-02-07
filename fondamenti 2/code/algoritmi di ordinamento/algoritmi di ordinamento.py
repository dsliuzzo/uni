from albero import AlberoBinarioRicerca as abr

def selection_sort(l):
    ret = []
    for _ in range(len(l)):
        ret.append(min(l))
        l.remove(min(l))
    return ret

def bubble_sort(l):
    change = True
    while change:
        change = False
        for i in range(len(l)-1):
            if l[i] > l[i+1]:
                l[i], l[i+1] = l[i+1], l[i]
                change = True
    return l

def insertion_sort(l):
    for i in range(1, len(l)):
        for j in range(i, 0, -1):
            if l[j] < l[j-1]:
                l[j], l[j-1] = l[j-1], l[j]
    return l

def merge_sort(l):
    if len(l) <= 1:
        return l
    l1 = l[:len(l)//2]
    l2 = l[len(l)//2:]
    ret1 = merge_sort(l1)
    ret2 = merge_sort(l2)
    return merge(ret1, ret2)
def merge(l1, l2):
    i1 = i2 = 0
    ret = []
    while i1 < len(l1) and i2 < len(l2):
        if l1[i1] < l2[i2]:
            ret.append(l1[i1])
            i1 += 1
        else:
            ret.append(l2[i2])
            i2 += 1
    if i1 == len(l1):
        ret.extend(l2[i2:])
    else:
        ret.extend(l1[i1:])
    return ret

def quick_sort(l):
    _quick_sort(l, 0, len(l)-1)
    return l
def _quick_sort(l, inizio, fine):
    if inizio < fine:
        p = partition(l, inizio, fine)
        _quick_sort(l, inizio, p)
        _quick_sort(l, p+1, len(l)-1)
def partition(l, inizio, fine):
    p = pivot(l, inizio, fine)
    i = inizio
    j = fine
    while i < j:
        while l[i] < l[p]:
            i += 1
        while l[j] > l[p]:
            j -= 1
        if i < j:
            l[i], l[j] = l[j], l[i]
    return j
def pivot(l, i, j): # restituisce l'indice del pivot con la mediana di 3
    val = [l[i], l[(j-i)//2], l[j]]
    val.remove(max(val))
    val.remove(min(val))
    if val[0] == l[i]:
        return i
    elif val[0] == l[j]:
        return j
    else:
        return (j-i)//2

def heap_sort(l):
    creazione_heap(l)
    l[0], l[len(l)-1] = l[len(l)-1], l[0]
    for i in range(len(l)-2, -1, -1):
        heapify(l, i)
        l[0], l[i] = l[i], l[0]
    return l
def heapify(l, i):
    for k in range(0, i):
        if k*2+1 <= i and l[k] < l[k*2+1]:
            l[k], l[k*2+1] = l[k*2+1], l[k]
        if k*2+2 <= i and l[k] < l[k*2+2]:
            l[k], l[k*2+2] = l[k*2+2], l[k]
def creazione_heap(l):
    for i in range(len(l)-1, -1, -1):
        if 2*i+2 < len(l) and l[i] < l[2*i+2]:
            l[i], l[2 * i + 2] = l[2 * i + 2], l[i]
        if 2*i+1 < len(l) and l[i] < l[2*i+1]:
            l[i], l[2 * i + 1] = l[2 * i + 1], l[i]

def abr_sort(l):
    a = abr()
    for val in l:
        a.aggiungi_Ite(val)
    return a.visita_in_order()




lista = [5,6,2,3,4,7,9,1,8]
print(lista)
print(heap_sort(lista))