#appunti 
#fondamenti1 
Questi algoritmi prendono in input un array e la sua dimensione, restituendo lo stesso array ordinato.

Questo è possibile perché inserendo un array come parametro la funzione non copierà effettivamente i valori contenuti, ma prenderà solamente l’indirizzo dello stack in cui l’array è contenuto. In tal modo ogni modifica che avviene all’interno dell’array avrà validità anche al di fuori della funzione, contrariamente a quanto avviene con delle semplici funzioni che prendono come parametro delle variabili.

Nella pratica infatti non restituirà nessun elemento, quindi dichiareremo queste funzioni con `void`.

Per confrontare la complessità degli algoritmi opero il limite per $n \to \infty$ di una complessità fratto l'altra:
*es.*
Selection sort $O(n^2)$
Merge sort $O(n\log_2 n)$
$$
\lim_{ n \to \infty } \frac{n^2}{n \log_2n} = \infty
$$
Essendo il risultato $\infty$ è più conveniente utilizzare il merge sort se andiamo a considerare solo l'ottimizzazione di essa.

# Selection sort

Questo algoritmo consiste nel riordinare un array identificando per prima cosa il minimo tra tutti i valori che compongono l’array; una volta identificato questo valore verrà scambiato con il primo elemento e si ripartirà dall’elemento successivo. Questo processo viene ripetuto fino al riordinamento completo.

- **COMPLESSITÀ**
$$\sum_{i=1}^{n-1}=\frac{n*(n+1)}{2}=\frac{n^2}{2}+\frac{n}{2} \in O(n^2)$$ 
- **CODE**
    
    ```C
    void SelectionSort(int arr[], int size){
        int min, buffer, i, j;
        //imposto min=i, confronto arr[min] con arr[j], se arr[j] è più piccolo allora min=j, finchè j<size, a quel punto faccio swap tra arr[min] e arr[i]
        for(i=0; i<size; i++){
            min=i;
            for(j=i+1; j<size; j++){
                if(arr[j]<arr[min]){
                    min=j;
                }
            }
            buffer=arr[i];
            arr[i]=arr[min];
            arr[min]=buffer;
        }
    }
    ```
    

[![](https://upload.wikimedia.org/wikipedia/commons/3/3e/Sorting_selection_sort_anim.gif)](https://upload.wikimedia.org/wikipedia/commons/3/3e/Sorting_selection_sort_anim.gif)

# Bubble sort
Questo algoritmo di riordinamento consiste nel confrontare coppie di valori contigui; il valore corrente con il successivo e scambiarli nel caso in cui il corrente è minore del successivo. Ripetendo questo processo fino a quando l’intero array sarà completamente riordinato.
- **COMPLESSITÀ**
$$\sum_{i=1}^{n-1}=\frac{n*(n-1)}{2}=\frac{n^2}{2}-\frac{n}{2} \in O(n^2)$$
- **CODE**
    ```C
    void BubbleSort(int arr[], int size){
        int i, j, buffer;
        for(i=0; i<size; i++){
            for(j=0; j<(size-i); j++){
                if(arr[j] > arr[j+1]){
                    buffer = arr[j];
                    arr[j]=arr[j+1];
                    arr[j+1]=buffer;
                }
            }
        }
    }
    ```
[![](https://upload.wikimedia.org/wikipedia/commons/5/54/Sorting_bubblesort_anim.gif)](https://upload.wikimedia.org/wikipedia/commons/5/54/Sorting_bubblesort_anim.gif)

# Insertion sort

Iniziando dal secondo valore viene confrontato con quello precedente e spostato se minore, fino a che non sarà più possibile spostarlo, a quel punto si potrà passare all’elemento successivo, fino a quando si arriverà all’ultimo elemento.

- **COMPLESSITÀ**
$$\sum_{i=1}^{n-1}=\frac{n*(n-1)}{2}=\frac{n^2}{2}-\frac{n}{2} \in O(n^2)$$
- **CODE**
    ```C
    void InsertionSort(int arr[], int size){
        int i, j, buffer;
        for(i=0; i<size; i++){
            j=i+1;
            while(j>0 && arr[j]<arr[j-1]){
                buffer=arr[j-1];
                arr[j-1]=arr[j];
                arr[j]=buffer;
                j--;
            }
        }
    }
    ```
[![](https://upload.wikimedia.org/wikipedia/commons/2/24/Sorting_insertion_sort_anim.gif)](https://upload.wikimedia.org/wikipedia/commons/2/24/Sorting_insertion_sort_anim.gif)

# Merge sort
Per prima cosa divido l’array in ingresso per 2, fino all’ottenimento di soli due elementi, che confronterò e swapperò se necessario.

Gli elementi verranno inseriti nell’ordine corretto all’interno di array progressivamente più grandi, fino al raggiungimento del risultato desiderato.

- **COMPLESSITÀ**
  [[Complessità algoritmi#Merge sort]]
  Data la creazione di un "albero" sempre bilanciato di $\log_2 n$ livelli. Nello stack verranno allocate $\log_2 n$ locazioni per le chiamate a `merge_sort()`. A questo valore dobbiamo moltiplicare il numero di chiamate a `merge()` che effettuerà un numero di confronti uguale ad $n$, il numero di celle da confrontare per ogni livello. Di conseguenza la complessità del merge sort è $n \log_2 n$. Definiamo questa complessità per gli algoritmi di ordinamento come ottima, in quanto non è possibile migliorare ancora di più questa complessità. Il problema del merge sort sta nello spazio occupato sulla ram per le numerose allocazioni necessarie.
$$O(n\log_2 n)$$
- **CODE**
```
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
```
[![](https://upload.wikimedia.org/wikipedia/commons/c/c5/Merge_sort_animation2.gif)](https://upload.wikimedia.org/wikipedia/commons/c/c5/Merge_sort_animation2.gif)
## Natural merge sort
![[Natural merge sort]]

# Quick sort

Questo algoritmo di riordinamento è ricorsivo.

Per prima cosa viene stabilito un elemento pivot, che verrà spostato alla fine dell’array, procederemo poi con il posizionare tutti gli elementi maggiori del pivot alla destra, mentre tutti i minori a sinistra. Questo verrà fatto confrontando gli elementi dell’array, stabilendo l’elemento da sinistra più grande del pivot e l’elemento da destra più piccolo dell’array; questi due elementi verranno scambiati, fino a quando l’index dell’elemento da sinistra sarà maggiore di quello da destra; ora invertiamo l’elemento più grande da sinistra con il nostro pivot.
Il pivot ora è nella posizione corretta.

A questo punto verrà stabilito un nuovo pivot tra gli elementi rimanenti e il processo si ripeterà, fino al riordinamento totale.

- **COMPLESSITÀ**
  [[Complessità algoritmi#Quick sort]]
$$O(n\log_2 n)$$


[![](https://upload.wikimedia.org/wikipedia/commons/6/6a/Sorting_quicksort_anim.gif)](https://upload.wikimedia.org/wikipedia/commons/6/6a/Sorting_quicksort_anim.gif)

# Heap sort
[[Strutture dati#heap]]
L'heap sort è una istanza di **algoritmi di ordinamento con coda di priorità**, un tipo di algoritmi di ordinamento che consiste nell'inserire gli elementi in una struttura dati di base ordinata e rimuovere gli elementi tramite `pop()` inserendoli nell'array di output, la cui complessità temporale dipende da come gli elementi vengono inseriti nella struttura dati.
In questo caso viene utilizzata come struttura dati l'heap, che non solo ci permette di avere una complessità temporale $n \log_2 n$ dato l'inserimento dei dati all'interno della struttura (da moltiplicare semplicemente per ogni elemento dell'array di input), ma ci permette inoltre di semplificare la complessità spaziale: normalmente avremo bisogno di creare l'array di output parallelamente all'array di input raddoppiando la complessità spaziale, ma per sua natura di costruzione l'heap può essere implementato utilizzando un array, quindi con qualche accorgimento possiamo effettuare l'**heap sort in place**.

Supponiamo di avere un costruttore che prende come input un array.
1. **creazione dell'heap**
   scorro l'array trattando il corrente come se dovessi fare il suo inserimento, verificando quindi la relazione d'ordine con il padre. Una volta che esso si trova nella posizione corretta o è diventato il primo elemento quello è nella posizione corretta per l'ordinamento dell'heap. Scorro in questo modo su tutti gli elementi incrementando il numero di elementi effettivamente presenti nell'heap ugualmente all'indice degli elementi già verificati, fino alla fine dell'array
   ![[Strutture dati-1776194611137.webp|center|500]]
2. **estrazione**
   a questo punto sposto il primo elemento (il minimo) in una variabile di supporto e metto in prima posizione l'ultimo elemento riverificando il corretto ordinamento.
   A questo punto si sarà liberata l'ultima cella dell'array in cui inserisco l'elemento estratto precedentemente nella variabile.
   ![[Strutture dati-1776195142129.webp|center|500]]
Ottengo così l'array ordinato inversamente, quindi posso:
3. lasciare che sia ordinato in questo modo e poi invertire l'ordine, aumentando però la complessità dell'algoritmo
4. ordinare inizialmente l'heap al contrario mettendo il massimo in prima posizione invertendo tutte le relazioni d'ordine
array ordinato✨✨

La sua complessità spaziale sarà data semplicemente dall'array di input.
La complessità temporale sarà data dalla complessità della creazione dell'heap, $n\log_2n$ logaritmica per ogni elemento, sommata alla complessità dell'estrazione anch'essa logaritmica moltiplicata per ogni elemento $n \log_2 n$, ottenendo quindi asintoticamente una complessità temporale di $n \log_2 n$
# Counting sort
Il counting sort è un algoritmo di ordinamento di interi.
Dato un vettore $v$ in ingresso di dimensione $n$ creo un vettore di supporto $w$ di dimensione $m$, con $m=\min(v) - \max(v)+1$ inizializzato a $0$.
Scorro gli elementi del vettore $v$ e incremento la cella del vettore $w$ nella posizione $w[v[i] - \min(v)]$.
In questo modo la posizione di indice $0$ dell'array $w$ corrisponderà al numero di volte che ho memorizzato il valore minimo di $v$. Nelle celle successive avrò il numero di volte che compaiono i valori successivi al minimo, così fino a $v[\max(v) - \min(v)+1]$ che conterrà il numero di volte che compare il valore massimo.
![[Strutture dati-1776268709931.webp|center|400]]
Questo passaggio ha un costo di $\Theta(n)$.

A questo punto scorriamo il vettore $w$ con indice $i$ e il vettore $v$ con indice $j$:
se $w[i]>0$ scriviamo in $v[j]$ il valore $i+\min(v)$, decrementiamo $w[i]$ e incrementiamo $j$; se invece $w[i] = 0$ passiamo al successivo.
```
j = 0
for i in w:
	while (w[i] > 0):
		v[j] = i + min
		w[i] -= 1
		j += 1
```
Il costo di questo passaggio è pari agli elementi di $m$ (per il for) sommato agli elementi di $n$ (per il while), otteniamo quindi una complessità $\Theta(n+m)$.

**COMPLESSITÀ**
L'ultimo passaggio asintoticamente è dominante, quindi abbiamo complessità temporale pari a $$\Theta(n+m)$$
Risultando quindi anche più complesso di algoritmi di ordinamento logaritmici nel caso in cui abbiamo un range di valori possibili molto ampio.

Il vero problema di questo algoritmo è la complessità spaziale, in quanto ci costringe ad allocare un vettore di dimensione $m$ oltre all'input
$$
\Theta(n+m)
$$
Un altro svantaggio compromettente è il fatto di dover conoscere minimo e massimo a priori, che, se non noti, implicano una ulteriore ricerca di complessità lineare.

>[!bug] Motivi per non usare il counting sort
>- complessità spaziale
>- necessità di conoscere massimo e minimo
>- troppo variabile sul range di elementi
>- funziona solo su interi (o almeno un dominio mappabile su interi)
# Radix sort
Partendo dal counting sort possiamo perfezionarlo per ricavarne un algoritmo di ordinamento effettivamente utilizzabile: il **radix sort**.
Questo sarà un algoritmo della famiglia degli **algoritmi di ordinamento con code di priorità** proprio come l'heap sort.
Partiamo quindi dal presupposto di voler utilizzare una struttura dati che ci consenta di ottenere un inserimento costante, altrimenti otterremo un algoritmo logaritmico come già avviene per altri ordinamenti.
Usiamo [[Strutture dati#Code di priorità fissa|code con livelli di priorità fissati]], con 10 livelli di priorità fissi, che non dipendono dal valore di input, in modo da mantenere la complessità costante: uno per ogni cifra, da 0 a 9.
Dopo aver creato la struttura di supporto quindi scorriamo gli elementi dell'array di input una volta per ogni cifra a partire dalla cifra meno significativa: effettuiamo l'inserimento degli elementi nella struttura di supporto, utilizzando la singola cifra come livello di significatività.
![[Ordinamento-1776286435963.webp|center|700]]

>[!attention] È importante partire dalla cifra meno significativa
>altrimenti otterrei uno spostamento indesiderato contraddicendo l'ordinamento

Il radix sort è un ordinamento **lessicografico** che quindi può essere applicato a qualsiasi tipo di elemento che può essere ordinabile e per cui possiamo stabilire un livello di priorità finito.

**COMPLESSITÀ**
per ogni cifra effettuo un inserimento e una rimozione (in coda con livelli di complessità costanti)
$$
\Theta(n \cdot m)
$$
con $n$ numero di elementi ed $m$ numero di cifre.
Rimane il problema della complessità spaziale per cui devo allocare una seconda struttura dati della stessa dimensione dell'input.

>[!quote] Tip
>È un algoritmo poco utilizzato a causa della complessità spaziale.
>Non conviene sprecare così tanta memoria se non per rare eccezioni.
>Viene usato per esempio per ordinare carte da gioco, essendo molto semplice da implementare e l'input in questo caso è limitato.