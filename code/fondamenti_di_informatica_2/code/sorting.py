def merge_sort(lista):
    n = len(lista)
    # tappo della ricorsione, la lista è composta da un solo elemento => è già ordinata quindi il return sarà composto da quel solo elemento che verrà restituito al metodo chiamante che lo unirà ad un altro elemento e ordinerà il risultato. Continuerà a succedere questo finchè non si ritorna alla lista originale ordinata
    # utilizziamo il minore uguale così da gestire il caso in cui la sottolista è composta da 0 elementi, è il caso in cui il numero di elementi della lista è dispari quindi dopo la divisione una delle due liste risulta essere vuota
    if n <= 1:
        return lista
    # divido la lista in due metà
    prima_metà = lista[:n//2]
    seconda_metà = lista[n//2:]
    # riordino con chiamata ricorsiva singolarmente le singole sottoliste
    prima_metà_ordinata = merge_sort(prima_metà)
    seconda_metà_ordinata = merge_sort(seconda_metà)
    # unisco tramite metodo accessorio le due sottoliste una volta che sono state ordinate
    return merge(prima_metà_ordinata, seconda_metà_ordinata)

# metodo di supporto che confronta le due liste e le unisce
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
    # siamo arrivati al caso in cui uno dei due iteratori ha superato la grandezza delle sottoliste
    if i1 == len(lista1):
        ret.extend(lista2[i2:])
    else:
        ret.extend(lista1[i1:])
    return ret


def quick_sort_ric(lista, inizio, fine):
    if inizio < fine:
        p = partizione(lista, inizio, fine)
        # richiamo quick sort sulle due partizioni che si sono create, nella stessa lista, ma a sinistra di p saranno tutti minori, a destra saranno tutti maggiori
        quick_sort_ric(lista, inizio, p-1)
        quick_sort_ric(lista, p+1, fine)

# creo una partizione, scelgo un pivot (in questo caso la fine della lista), scandaglio la lista e riordino la lista in modo da avere a sinistra di p (che sostituirò con il pivot) tutti gli elementi minori e a destra tutti gli elementi maggiori.
def partizione(lista, inizio, fine):
    pivot = lista[fine]
    pos_libera = inizio
    for i in range(inizio, fine):
        if lista[i] <= pivot:
            scambia(lista, i, pos_libera)
            pos_libera += 1
    scambia(lista, pos_libera, fine)
    return pos_libera

# con il merge sort abbiamo la certezza che la divisione avvenga a metà e l'albero avrà un numero ottimo di livelli, mentre con il quick sort tutto dipende da come viene scelto il pivot, quindi potrebbero capitare dei casi in cui l'albero del quick sort risulta essere non bilanciato e quindi è più sconveniente (come velocità) rispetto al merge sort, ma rimane il fatto che non vengono allocati nuovi array quindi in memoria pccuperemo meno spazio.
# Statisticamente però non conoscendo gli elementi contenuti nella lista è meglio utilizzare il quick sort
# nel caso migliore la sua complessità è logaritmica (n log_2 n) contenendo anche lo spazio occupato in memoria (utilizzando l'array di origine stesso), ma nel caso peggiore la sua complessità è quadratica (quando l'array è già ordinato)
def scambia(lista, i, j):
    t = lista[i]
    lista[i] = j
    j = t
