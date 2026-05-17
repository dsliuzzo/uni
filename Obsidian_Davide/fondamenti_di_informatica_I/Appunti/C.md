#appunti 
#fondamenti1
C è un linguaggio tipizzato, questo vuol dire che le variabili devono essere contraddistinte da un **tipo**, cioè un dominio di valori e un insieme di operazioni.

## Direttive di pre-processing

Tutto ciò che è preceduto da `#` nell’intestazione di un programma verrà letto dal pre-elaboratore di testo, che lo sostituirà sintatticamente, includendo porzioni di testo, modificando quelle già presenti o cancellando parametricamente il testo. Queste righe verranno poi eliminate una volta finito questo processo.

`#include<...>` #librerie permette di inserire testo da un file, il cui nome viene specificato nel parametro `<...>`

`#define` (identificatore di testo) ricerca e sostituisce testo sintatticamente.

### Librerie

- `#include <stdio.h>`
    
    Include le principali funzioni necessarie per un programma di base in C.
    
    - `printf()`, conterrà un primo parametro contenente degli specificatori (`%d,%f,%c,%s,%zu`) che verranno sostituiti in ordine dagli elementi inseriti come parametro successivo al primo.  
        _==es.==_ `printf("%d", var);`  
        ==es.== `printf("%s", "Hello World");`
    - `scanf()`, conterrà un primo parametro contenente degli specificatori (`%d,%f,%c,%s,%zu`), leggerà dei valori richiesti all’utente e li manderà all’interno della variabile inserita come secondo parametro della funzione, preceduta da `&`  
        _==es.==_ `scanf("%d", &var);`
    - `getchar()`, leggerà da standard input un singolo carattere, se viene letto EOF (ctrl+d) restituirà `EOF`
    - `gets()`, funziona come getchar(), ma leggerà una stringa di caratteri delimitata da `\n`, invece di un singolo carattere; viene usata per inviare stringhe a vettori.
    - `putchar()`, output di un singolo carattere
    - `puts()`, output di stringhe di caratteri
    - `sizeof()`, questa funzione prende in ingresso una elemento e ne calcola lo spazio occupato sulla memoria in byte. Se gli viene passato puntatore viene calcolato lo spazio occupato dal puntatore e non il valore puntato; questo non vale per gli array. Infatti una volta ricevuto in ingresso la variabile che contiene il puntatore ne verrà calcolato lo spazio occupato dell’intero vettore e non solo di quella variabile. All’interno di una funzione però se l’array è stato passato tramite riferimento il calcolo avverrà come un normale puntatore.
- `#include <stdlib.h>`
    
    Include, tra le altre, funzioni di allocazione manuale della memoria. Quelle elencate sono funzioni che restituiscono NULL se falliscono ad allocare la memoria. è molto importante verificare che queste funzioni siano andate a buon fine.
    
    - `malloc()`, memory allocation, ha come parametro il numero di byte da allocare e restituirà l’indirizzo della prima locazione allocata. Se non è possibile allocare completamente la memoria richiesta verrà restituito un errore.
    - `calloc()`, contiguous allocation, ha lo stesso funzionamento della `malloc()`, ma la memoria allocata sarà contigua (utile per la definizione di array dinamici). Riserva le locazioni e le azzera, contrariamente alla `malloc()`.
    - `realloc()`, reallocate, modifica la dimensione della locazione puntata dal primo parametro, portandola alla dimensione specificata nel secondo parametro
    - `free()`, l’area specificata nei parametri viene deallocata e verrà riutilizzata dallo stack. Il puntatore continuerà a contenere lo stesso valore, quindi punterà ad un nuovo elemento, prenderà il nome di ==**tangling reference**==. Se invece cambiamo o eliminiamo il valore del puntatore non sarà più possibile recuperare la locazione, nonostante la memoria rimanga occupata.
- `#include <ctype.h>`
    
    Include funzioni di manipolazione di caratteri
    
    - `isdigit()`, restituisce 1 se il parametro è una cifra, 0 altrimenti
    - `isalpha()`, restituisce 1 se il parametro è una lettera, 0 altrimenti
    - `tolower()`, cambia la lettera contenuta nel valore di un parametro cambiandola con la stessa lettera in minuscolo (aggiungendo 32 al codice ASCII se l’attuale valore è compreso tra 65 ‘A’ e 90 ‘Z’)
    - `toupper()`, stesso funzionamento del lowerchar() ma al contrario, quindi sottraendo 32 al valore ASCII
- `#include <string.h>`
    - `strcpy()`, copia la stringa di caratteri contenuta nel secondo parametro all’interno della stringa del primo parametro
    - `strcmp()`, confronta due stringhe, restituisce 0 se sono uguali
- `#include <stdbool.h>`
    
    permette di utilizzare gli operatori booleani
    
    Questa operazione è possibile anche utilizzando il `#define` invece della libreria:
    
    ```C
    \#define bool int
    \#define true 1
    \#define false 0
    ```
    

## Variabili

Una #variabile non è altro che un nome simbolico di una locazione di RAM con un proprio indirizzo

>[!question] Letterale
>per letterale intendiamo una costante che ha un tipo che deve essere compatibile con il tipo di una variabile

**DICHIARAZIONE E INIZIALIZZAZIONE**

Per dichiarare una variabile è necessario conoscere il tipo e il nome che vogliamo assegnare. Per assegnare un valore nel momento della dichiarazione sarà sufficiente utilizzare =

```C
int var = 5;
```

### Tipi di variabili
Il tipo di una variabile ne stabilisce:
- lo spazio occupato in memoria
- l'insieme di definizione
- le operazioni possibili

tra i tipi più utilizzati possiamo riconoscere:
- `int`, numero intero `%d`
- `short`, intero corto
- `long`, intero lungo
- `float`, numero in virgola mobile a precisione singola `%f`
- `double`, numero in virgola mobile a precisione doppia `%lf`, `%.2lf` per stampare 2 cifre decimali
- `char`, carattere `%c`, per stringhe `%s`
- `size_t`, intero senza segno ($\mathbb{N}$)

Nell’utilizzo di variabili come stringhe per esempio all’interno della funzione `scanf()` sono necessari degli specificatori che verranno rimpiazzati la variabile stessa

### Visibilità di una variabile

Se dichiariamo una variabile all’interno di una funzione essa sarà visibile solo all’interno della funzione stessa; infatti dichiarando una variabile con lo stesso nome all’interno di una seconda funzione sarà possibile utilizzarla normalmente.

Dichiarando una variabile all’esterno di una qualsiasi funzione essa sarà visibile da tutte le funzioni (==**variabile globale**==), ma se viene dichiarata un’altra variabile con lo stesso nome all’interno di una funzione, all’interno della funzione stessa avrà precedenza quest’ultima e non quella dichiarata globalmente.

### Vita delle variabili

La vita delle variabili all’interno di un programma dipende dal tipo di dichiarazione (≠ visibilità di una variabile)

1. `Auto`  
    Ha valore all’interno del blocco in cui è stato dichiarata  
    
2. `Register`  
    Ha valore all’interno del blocco in cui è stato dichiarata ed ha un’indicazione aggiuntiva al compilatore per trattarla in modo efficiente, non allocandola nella RAM, ma nel registro (non sempre è possibile)  
    
3. `Static`  
    Viene creata una volta al momento dell’esecuzione del programma e quando viene utilizzata non cambia la sua posizione in memoria  
    
4. `Extern`  
    Consente la visibilità della variabile a file esterni al programma  
    

### Tipo enumerato

In C possiamo definire un insieme di costanti che corrisponderà a degli `int`, questo può essere utile per la creazione di valori correlati come segue

- _==es.==_
    
    ```C
    enum stato {acceso, spento, stand_by};
    ```
    
    ```C
    enum Giorno {
    	LUNEDI, // 0 
    	MARTEDI, // 1
    	MERCOLEDI, // 2
    	GIOVEDI, // 3
    	VENERDI, // 4
    	SABATO, // 5
    	DOMENICA // 6
    };
    ```
    

Per stampare a video il tipo enumerato c’è bisogno di definire con una costante di carattere cosa andrà stampato invece del numero corrispondente

```C
const char* g[] = { "lunedì", "martedì", "mercoledì",...};
```

```C
Giorno g=0
printf("%s ", g[l]); //verrà stampato a video "lunedì"
```

oppure possiamo definire una funzione di tipo `char*` che preso in input un valore di tipo enumerato restituirà la stringa corrispondente, che poi andrà ad essere stampata

```C
char *printGiorno(enum g){
	switch(g){
		case LUNEDI: return "lunedì";
		case MARTEDI: return "martedì";
		...
	}
}
```

```C
Giorno g=0
printf("%s ", printGiorno(LUNEDI); //verrà stampato a video "lunedì"
```

## Conversione di tipo #type_casting

Consiste nel modificare il tipo di variabile e può avvenire **implicitamente** o **esplicitamente**.

### Conversioni implicite

Il compilatore effettua il type casting in modo automatico, per esempio per rendere i valori di una espressione omogenei, in modo da poter svolgere i vari calcoli. Tutti i tipi devono però essere compatibili (in modo che un tipo abbia un dominio contenuto nell’altro). Nel caso in cui due tipi non siano compatibili C non può operare e verrà restituito un errore.

Una volta stabilita la compatibilità di tipo viene eseguita una **promotion** fino a che l’espressione non sarà omogenea.

`int` $\rightarrow$ `long` $\rightarrow$ `float` $\rightarrow$ `double` $\rightarrow$ `longdouble`

Inoltre verrà usato l’operatore gerarchicamente più in alto

### Conversioni esplicite

`(type) expression`

- _==es.==_
    
    ```C
    int i=3; longdouble x = 7.77; double y=7.1;
    i = (int) sqrt(384);
    i = (int) x % (int) y;
    ```
    

Il type casta esplicito ha altissima precedenza sulle operazioni in una espressione.

Detto questo possiamo dire che il C è un linguaggio relativamente tipizzato.

## Funzioni

Molto spesso in linguaggi di programmazione come C è possibile racchiudere un insieme di istruzioni all’interno di blocchi di codice che prenderanno il nome di funzioni e saranno richiamabili durante la scrittura del codice principale tramite parole chiave. Esse prenderanno in ingresso dei valori e ne restituiranno uno del tipo descritto dalla dichiarazione della variabile

### Prototipo

L’utilizzo di una funzione nel nostro codice prescinde la sua dichiarazione iniziale, questo può anche avvenire però in un secondo momento. In questi casi in testa al codice è buona norma creare il prototipo della funzione, contenente il tipo della funzione e il tipo delle variabile che gli verranno passate in ingresso (non è necessario il nome di esse, se inserito verrà ignorato dal programma e farà fede al nome dichiarato al momento della creazione della funzione effettiva).

### Passaggio per valore

Quando una funzione viene richiamata abbiamo la possibilità di inserire valori che normalmente verranno copiati all’interno di nuove variabili create internamente alla funzione

## Stack e heap

La parte di memoria dedicata alla creazione di funzioni viene chiamata #stack e viene gestita dal sistema operativo che la organizza come una struttura dati ==**LIFO**== (Last In, First Out). Ogni locazione di memoria all’interno dello stack è caratterizzata da un codice identificativo chiamato ==**indice**==.

L’ #heap invece è una parte della memoria dinamica, utile per la gestione di dati a runtime. Viene presa in causa per esempio nell’utilizzo di funzione come `malloc(), calloc(), realloc()` e viene liberata dalla funzione `free()`.

## Array

Per memorizzare una collezione di variabili vengono usati gli #array, nel caso in cui le variabili sono omogenee (in caso contrario vengono usati gli ==**struct**==).

Nella RAM verrà memorizzato in locazioni ==**contigue**==.

### ==Composizione==

`<nome array>'['<espression>']'`

`<espressione>` deve avere un valore intero compatibile con gli indici dell’array, altrimenti verrà restituito l’errore “out od range”

`<nome array>` sarà l’indirizzo di base dell’array (puntatore)

### Dichiarazione

In fase di dichiarazione sarà necessario identificare il tipo di variabili che l’array conterrà, il nome dell’array e il numero di elementi che dovrà contenere.

_==es.==_ `int v[4]` verrà generato un array con 4 elementi (con indice che va da 0 a 3).

_==es.==_ `char[20]` nel caso dei caratteri

_==es.==_ `int[4*2]` possono essere usate formule anche molto complesse all’interno della dichiarazione del numero di elementi

Per definire dei valori all’interno della dichiarazione bisognerà seguire la seguente sintassi

_==es.==_ `int c[3]={2,7,8}`

Gli elementi non specificati vengono presunti pari a 0, questo ci permette di riempire un array di 0 con `int e[100]={0}`.

In caso contrario e quindi se il numero di elementi specificati è superiore al numero di elementi contenibili dall’array otterremo l’errore “out of range” (dipende dal compilatore, in alcuni casi i numeri in eccesso vengono semplicemente ignorati)

### Stringhe come array di char

In C le #stringhe vengono trattate come array di char, che si concludono con \0

Questo vuol dire che posso modificare un testo trattandolo come un array

- _==es.==_
    
    `char s[]={"ciao"};` otterremo una array di 5 elementi
    
    |   |   |   |   |   |
    |---|---|---|---|---|
    |‘c’|‘i’|‘a’|‘o’|\0|
    
    `s[0]='d';`
    
    |   |   |   |   |   |
    |---|---|---|---|---|
    |‘d’|‘i’|‘a’|‘o’|\0|
    

==Normalmente l’input e l’output di un array necessiterebbe di una struttura che comprende un for che aumenta l’indice dell’array ad ogni iterazione. Per quanto riguarda l’uso delle stringhe come array di char questo non è necessario==

- _==es.==_
    
    ```C
    char parola[20];
    scanf("%s", parola);
    ```
    
    In questo caso verrà letta una sequenza di caratteri delimitati da `EOF`, `blank`, `\n`
    
    La `scanf` non necessiterà del `&` in quanto il nome è già un puntatore al primo valore dell’array
    

### Tensori

Gli array possono essere multidimensionali, a quel punto prenderanno il nome di ==**matrici**== se composti da due dimensioni, o #tensori se composte da più dimensioni.

Per essere dichiarati sarà sufficiente definire più dimensioni come segue:

_==es.==_ `int M[3][7][4]`ne otterremo un tensore di 3 elementi. Ognuno di questi elementi sarà composto da un array da 7 elementi, a loro volta composti da 4 elementi.

## Passaggio di valore in una funzione

Nel passaggio di un valore all’interno di una funzione normalmente nello stack il valore viene ricopiato in una nuova locazione di memoria, per quanto riguarda gli array invece viene solamente copiato l’indirizzo di locazione dell’array (che coincide con quello del primo valore); Questo ci permette di svolgere operazioni sull’array che rimarranno anche al di fuori della funzione, come per esempio l’ordinamento. Questo non avviene invece per esempio con la funzione swap.

Nello stack la locazione di memoria di ogni valore dell’array occuperà tanti bit quanti sono i bit occupati dal tipo di array (es. una cella di un array int occuperà 16 bit, quindi 2 locazioni), quindi se il valore di un array si trova in posizione $k$, la posizione del valore successivo sarà $k+2$.

## Array dinamici

Una volta compreso l’utilizzo delle funzioni di allocazione manuale della memoria contenute in `<stlib.h>`: `calloc()`, `realloc()`e `free()`, possiamo utilizzarle per la creazione di array dinamici.

## Puntatori

I #puntatori non sono altro che variabili che contengono degli indirizzi

==**DICHIARAZIONE**==

```C
int *xptr, x;
```

La dimensione del puntatore dipenderà dalla grandezza della RAM

==**INIZIALIZZAZIONE**==

```C
xptr=&x;
```

`NULL` sarà una specifica utilizzata per non puntare da nessuna parte

```C
printf("%d", *xptr)
```

### Passaggio per riferimento

I puntatori possono essere utili per esempio nella creazione di funzioni che modifichino il valore di una variabile, a prescindere dallo stack. Copiando l’indirizzo di riferimento infatti invece della variabile in sé sarà possibile effettuare modifiche alla variabile, contrariamente a quanto avviene con il passaggio per valore.

```C
void doppio(int *);

main(){
	int x=3;
	int *xptr=&x;
	doppio(xptr);
	printf("%d",x);
}

void doppio(int *aptr){
	*aptr=2*(*aptr);
}
```

```C
void doppio2(int)

main(){
	int x=3;
	doppio2(x);
	printf("%d",x);
}

void doppio2(int a){
	a=2*a;
}
```

Ovviamente per evitare errori quando è possibile sarebbe meglio utilizzare il passaggio per valore, principalmente per evitare di ==**effetti collaterali**==, cambiando variabili necessarie in altre parti del codice.

Con il passaggio per riferimento passerò 2 valori, l’indirizzo e la variabile che potrò modificare come segue:

- tutto libero, possi cambiare entrambi
- const, uno dei due valori non cambia
- non posso cambiare nessuno dei due valori

### Const e puntatori

specialmente per il passaggio di valori a funzioni può risultare utile fissare degli elementi in modo che essi non vengano cambiati all’interno della funzione generando errori (==**Concetto del minimo privilegio**==).

Questo può avvenire in 4 modi diversi:

1. `char *p;` sia il puntatore che il valore puntato possono essere modificati
2. `const char *p;` posso modificare il puntatore ma non il valore puntato
3. `char * const p;` posso modificare il valore ma non il puntatore (è il caso degli array)
4. `const char * const p;`nessuno dei due elementi può essere modificato

### Aritmetica dei puntatori

Effettuare operazioni matematiche su una variabile di tipo puntatore produrrà un effetto coerente con il tipo di valore, per esempio effettuando l’addizione di 1, non andrò a sommare 1 al valore del puntatore, ma andrò a selezionare la locazione di memoria successiva, qualunque essa sia, quindi la somma dipenderà dal tipo di valore (_==es.==_ se int verranno sommati 4, essendo una locazione grande 4 byte)

### Creazione di array di stringhe variabili tramite uso di array di puntatori

- _==es.==_
    
    ```C
    char *semi[4]={"cuori", "picche", "quadri", "fiori"};
    ```
    
    Questo comando permette la creazione di un array di puntatori a stringhe di diversa dimensione
    
    $$\begin{array}{r}  
    0 \\  
    1 \\  
    2 \\  
    3 \\  
    \end{array}  
    \begin{array}{|c|}  
    \hline \\  
    \hline \\  
    \hline \\  
    \hline \\  
    \hline  
    \end{array}  
    \hspace{-1ex}\begin{array}{c}  
    \rightarrow \\  
    \rightarrow \\  
    \rightarrow \\  
    \rightarrow \\  
    \end{array}  
    \begin{array}{l}  
    \begin{array}{|c|c|c|c|c|c|}  
    \hline  
    \text{'c'} & \text{'u'} & \text{'o'} & \text{'r'} & \text{'i'} & \text{'}\backslash0\text{'} \\  
    \hline  
    \end{array} \\  
    \begin{array}{|c|c|c|c|c|c|c|}  
    \hline  
    \text{'p'} & \text{'i'} & \text{'c'} & \text{'c'} & \text{'h'} & \text{'e'} & \text{'}\backslash0\text{'} \\  
    \hline  
    \end{array} \\  
    \begin{array}{|c|c|c|c|c|c|c|}  
    \hline  
    \text{'q'} & \text{'u'} & \text{'a'} & \text{'d'} & \text{'r'} & \text{'i'} & \text{'}\backslash0\text{'} \\  
    \hline  
    \end{array} \\  
    \begin{array}{|c|c|c|c|c|c|}  
    \hline  
    \text{'f'} & \text{'i'} & \text{'o'} & \text{'r'} & \text{'i'} & \text{'}\backslash0\text{'} \\  
    \hline  
    \end{array}  
    \end{array}$$
    
    ```C
    Printf("%s", semi[0]);
    ```
    
    ```C
    Printf("%s", *semi);
    ```
    
    entrambe queste scritture stamperanno “cuori”
    

### Puntatori alle funzioni

Analogamente agli array il nome di una funzione non è altro che un puntatore alla funzione stessa.

Questo può risultare utile per passare funzioni a funzioni

## Struct

Le #struct sono identità disomogenee

==**DEFINIZIONE DELLA STRUTTURA**==

```C
struct carta{
	char *valore;
	char *seme;
};
```

```C
typedef struct{
	char *valore;
	char *semi;
}Tcarta;
```

- Se non voglio usare la tag posso dichiarare un elemento subito dopo della definizione della struttura
    
    ```C
    struct{
    	char *valore;
    	char *seme;
    }a;
    ```
    

==**DICHIARAZIONE**==

```C
struct carta a, mazzo[52], *cptr;
```

```C
Tcarta a;
Tcarta mazzo[52];
```

==**INIZIALIZZAZIONE**==

```C
struct carta a={"quattro", "fiori"};
```

==**USO**==

#### Dot notation

```C
printf("%s", a.seme);
```

```C
cPtr=&a;
printf("%s", (*cPtr).seme);
```

```C
cPtr=&a;
printf("%s", cPtr->seme);
```
