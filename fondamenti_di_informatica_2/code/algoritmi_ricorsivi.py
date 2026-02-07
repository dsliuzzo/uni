def ricerca_binaria_ric(lista, valore, inizio, fine):
    if fine > inizio:
        return False
    centro = (inizio + fine) // 2
    if lista[centro] == valore:
        return True
    if lista[centro] < valore:
        return ricerca_binaria_ric(lista, valore, centro + 1, fine)
    return ricerca_binaria_ric(lista, valore, inizio, centro - 1)

def ricerca_binaria(lista, valore):
    return ricerca_binaria_ric(lista, valore, 0, len(lista) - 1)

def merge_sort(lista):
    n = len(lista)
    if n == 1:
        return lista
    prima_meta = lista[:n // 2]
    seconda_meta = lista[n // 2:]
    prima_meta_ordinata = merge_sort(prima_meta)
    seconda_meta_ordinata = merge_sort(seconda_meta)
    return merge(prima_meta_ordinata, seconda_meta_ordinata)

def merge(lista1, lista2):
    ret = []
    i1 = 0
    i2 = 0
    while i1 < len(lista1) and i2 < len(lista2):
        if lista1[i1] <= lista2[i2]:
            ret.append(lista1[i1])
            i1 += 1
        else:
            ret.append(lista2[i2])
            i2 += 1
    if i1 == len(lista1):
        ret.extend(lista2[i2:])
    else:
        ret.extend(lista1[i1:])
    return ret

def quick_sort_ric(lista, inizio, fine):
    if inizio < fine:
        p = partiziona(lista, inizio, fine)
        quick_sort_ric(lista, inizio, p - 1)
        quick_sort_ric(lista, p + 1, fine)

def partiziona(lista, inizio, fine):
    pivot = lista[fine]
    pos_libera = inizio
    for i in range(inizio, fine):
        if lista[i] <= pivot:
            scambia(lista, i, pos_libera)
            pos_libera += 1
    scambia(lista, pos_libera, fine)
    return pos_libera

def scambia(lista, i, j):
    t = lista[i]
    lista[i] = lista[j]
    lista[j] = t
    
def quick_sort(lista):
    quick_sort_ric(lista, 0, len(lista) - 1)
