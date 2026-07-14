#appunti #asd 
# Alberi
>[!multi-column]
>
>>[!structure] Alberi
>>Permettono la rappresentazione di collezioni di elementi con un ordine gerarchico, caratterizzato da relazioni padre-figlio
>
>>[!operazioni] Operazioni
>>[...]

La struttura interna di un albero non è rilevante per l'utilizzatore, ma per chi si occupa di progettare algoritmi il più efficienti possibile è importante conoscere in che modo vengono organizzati i dati all'interno della struttura.
Definiamo gli alberi come una struttura dati con le seguenti proprietà:
1. un figlio può avere un solo padre
2. **chiusura transitiva**
   se $y$ è antenato di $x$ e $z$ è antenato di $y$ allora $z$ è antenato di $x$
3. **irriflessività**
   $x$ non può essere antenato di se stesso

>[!important] Rappresentazione dei figli
>Negli [[Albero binario di ricerca|alberi binari]] possiamo accedere ai dati in base alla posizione dx o sx, in quanto il numero di figli è ben definito, ma se iniziamo a parlare di alberi il cui numero di figli non è definito questa notazione non può più essere utilizzata.
>Generalizzando ad alberi con $k$ figli possiamo definire un array di figli per ogni nodo e, proprio come negli alberi binari, i figli non definiti sono impostati come null. Questa notazione prende il nome di **posizione relativa**.
>![[Pasted image 20260326163935.png|center|300]]
>Sorge però un problema, se volessi assegnare un figlio in una posizione molto grande dovrei definire tutti i precedenti a null, occupando moltissimo spazio inutilizzato. Per evitare questo possiamo utilizzare la **posizione assoluta**: ad ogni nodo è associata la sua posizione e un riferimento al successivo, come una linked list, degradando però le prestazioni di accesso ai figli se ne abbiamo molti.


>[!important] Notazione
>- **nodi**, elemento della struttura
>- **radice**, primo elemento della struttura
>- **foglia**, nodo che non ha figli
>- **nodo interno**, nodo che ha sia padre che figli
>- **grado**, numero di figli
>- **altezza**, numero di archi dal nodo alla foglia più profonda (parte da 1)
>- **livello**, numero di archi dal nodo che stiamo considerando alla radice (parte da 0)
>- **livello di nesting**, livello massimo che un albero può avere

![[Pasted image 20260326163259.png]]
La rappresentazione interna di un nodo può avvenire in vario modo, spesso è necessario garantire l'[[Java#Incapsulamento|encapsulation]], anche con relazioni bidirezionali.
>[!bug] In caso di relazioni bidirezionali è importante garantire l'aggiornamento di entrambi i riferimenti.
>Sta al programmatore decidere una politica che garantisca dei metodi di inserimento o cancellazione dei nodi senza problemi di sincronizzazione:
>una possibile soluzione è non fare aggiungere un nodo come figlio se esso ha già un padre.

>[!question] Osservazione
>In caso di liste dei figli sarebbe utile, per implementare in modo più efficiente determinati metodi, salvare in ogni figlio anche la loro posizione nella lista del padre.
>Sarebbe necessario anche nell'abr, ma essendo solo due figli è sufficiente un if/else.

>[!quote] Rappresentazione primo figlio - successivo fratello
>Un modo molto utile di rappresentare un albero per il suo utilizzo all'interno dei compilatori è la PFSF, sviluppato come segue:
>Il padre contiene un riferimento al primo figlio e il figlio contiene un riferimento al suo fratello più prossimo.
>![[Pasted image 20260326165353.png|center|300]]
>Risulta particolarmente utile per effettuare controlli in modo sequenziale.
>*es.* un browser che deve caricare un file html (la cui struttura è un albero) controlla se è presente un head, poi un body (in questo ordine) e poi fa la stessa cosa per i figli. Se il body è presente prima dell'head è in grado di lanciare un errore senza dover controllare tutto il file.

## Visita di un albero
- **visita anticipata**
  1. visito la radice
  2. visito i figli (con la stessa politica) nell'ordine in cui appaiono
- **visita posticipata**
  1. visito i figli (con la stessa politica) nell'ordine in cui appaiono
  2. visito la radice
- **visita infissa**
  solo negli abr
  1. figlio sx
  2. radice
  3. figlio dx

Per definire un algoritmo ricorsivo che lavora su strutture intrinsecamente ricorsive come gli alberi seguiamo la seguente struttura ben definita (in questo caso per la visita infissa):
``` python
def visita(a:AlberoBinario):
	if a is None: # caso base
		return
	visita(a.sin) # caso iniettivo
	print(a.val)
	visita(a.des)
```

Un altro tipo di visita è la **visita per livelli**.
Consiste nell'accedere ad ogni nodo sullo stesso livello per poi passare al successivo.
``` python
def visitalivelli(self, l):
	coda = [self]
	while len(coda) != 0:
		curr = coda.pop(0)
		l.append(curr.val)
		if curr.sin is not None:
			coda.append(curr.sin)
		if curr.des is not None:
			coda.append(curr.des)
	return l
```
Lo fa creando una coda che contiene inizialmente la radice, poi si entra nel ciclo, che continua fino a quando coda non è vuoto. All'interno del ciclo gli elementi di coda vengono aggiunti alla lista di uscita e i loro figli vengono aggiunti a coda, finché ce ne sono.
Alla fine di questo algoritmo `l` conterrà il risultato della visita per livelli.
![[Pasted image 20260330150731.png|center|300]]

## Iteratore
La struttura del `next()` è comune a molti altri iteratori:
``` python
def __next__(self):
	if not self.hasnext:
		raise StopIteration
	tmp = self.cur.val # salvo il nodo da restituire
	self.__avanza__() # avanzo l'iteratore
	return tmp # restituisco il valore
```
La difficoltà in questo caso sta nell'implementazione di `__avanza__()` in quanto contrariamente alla linked list non abbiamo un semplice puntatore al successivo che ci permetta di avanzare, ma dobbiamo eseguire un sistema a stati più complesso che ci permetta di spostarci all'interno dell'albero rispettando una delle 3 visite viste in precedenza.
Per far questo all'interno dell'iteratore manteniamo un riferimento al nodo corrente `curr` e uno "stato" che ci permetta di capire in quale posizione ci troviamo.
A questo punto possiamo visualizzare tutte le operazioni possibili tramite un automa a stati finiti, in quanto il movimento all'interno dell'albero ha una struttura molto variabile.

| Dir        | Posizione |
| ---------- | --------- |
| $\perp$    | curr      |
| $\swarrow$ |           |
| $\searrow$ |           |
| $\uparrow$ |           |
### Iteratore visita anticipata

| Stato        | Condizione        | Azione                               |
| ------------ | ----------------- | ------------------------------------ |
| $\searrow$   | `des is None`     | `dir =` $\uparrow$                   |
| $\searrow$   | `des is not None` | `curr = des`<br>`dir =` $\perp$      |
| $\swarrow$   | `sin is None`     | `dir =` $\searrow$                   |
| $\swarrow$   | `sin is not None` | `curr = sin`<br>`dir =` $\perp$      |
| $\uparrow$   | `par is None`     | `hasNext = False`<br>`dir =` $\perp$ |
| $\uparrow_s$ | `par is not None` | `curr = par`<br>`dir =` $\searrow$   |
| $\uparrow_d$ | `par is not None` | `curr = par`                         |

### Iteratore visita posticipata

| Stato        | Condizione        | Azione                               |
| ------------ | ----------------- | ------------------------------------ |
| $\searrow$   | `des is None`     | `dir =` $\perp$                      |
| $\searrow$   | `des is not None` | `curr = des`<br>`dir =` $\swarrow$   |
| $\swarrow$   | `sin is None`     | `dir =` $\searrow$                   |
| $\swarrow$   | `sin is not None` | `curr = sin`<br>`dir =` $\swarrow$   |
| $\uparrow$   | `par is None`     | `hasNext = False`<br>`dir =` $\perp$ |
| $\uparrow_s$ | `par is not None` | `curr = par`<br>`dir =` $\searrow$   |
| $\uparrow_d$ | `par is not None` | `curr = par`<br>`dir =` $\perp$      |

### Iteratore visita infissa
devo inizializzare il tutto per avere `curr` al nodo più a sinistra possibile
`hasNext` è inizializzato a True, lo cambio solo se c'è da metterlo a false

| Stato        | Condizione            | Azione                              |
| ------------ | --------------------- | ----------------------------------- |
| $\searrow$   | `des is None`         | `dir =` $\uparrow$                  |
| $\searrow$   | `des is not None`     | `curr = des`<br>`dir =` $\swarrow$  |
| $\swarrow$   | `sin is None`         | `dir = ` $\perp$                    |
| $\swarrow$   | `sin is not None`     | `curr = sin`<br>`dir = `$\swarrow$  |
| $\uparrow$   | `par is None`         | `hasNext = False`<br>`dir =`$\perp$ |
| $\uparrow_s$ | `par is not None`     | `curr = par`<br>`dir = `$\perp$     |
| $\uparrow_d$ | `par is not None`<br> | `curr = par`                        |

## Binary search tree - BST
[[Albero binario di ricerca#Albero binario di ricerca]] 
Viene principalmente utilizzato per implementare la ricerca binaria.

Definiamo quali sono le proprietà di ordinamento dell'abr:
1. definiamo una funzione $VAL(A) =$ Immagine dei valori in $A$
2. imponiamo $\forall x \in VAL(s) \quad v>x\quad\cap\quad \forall x \in VAL(d) \quad v<x$
questo vale anche per gli insiemi vuoti
quindi possiamo aggiungere anche
$$
\forall x \in VAL(s) \quad v>x\quad\wedge\quad \forall x \in VAL(d) \quad v<x\quad \wedge \quad s \text{ è un BST} \quad \wedge \quad d \text{ è un BST}
$$
>[!quote] Dato un nodo $v$ tutto il sotto albero $s$ contiene valori minori di $v$ e tutto il sotto albero $d$ contiene valori maggiori di $v$

### Ricerca binaria
- caso base:
  la radice punta a None
- caso iniettivo:
``` python
if (v == x):
	return v # se abbiamo definito l'operatore di uguaglianza
if (v > x):
	return ricerca(s)
else:
	return ricerca(d)
```

### Verifica se un albero è BST
>[!attention] non fare: per ogni nodo controllo se la radice è più grande della radice del sottoalbero sinistro e la radice del sottoalbero destro è più piccola, ma è una condizione diversa
>*es.*
>![[Pasted image 20260403160744.png|center|100]]
>cercando il 12 andremo a cercarlo a destra del 10
>non basta verificare per il singolo nodo, ma la proprietà dice qualcosa di più, non si limita alla radice dei figli, ma a tutti i sottoalberi
>$\to$ il confronto a coppie andrebbe fatto con il massimo/minimo del sottoalbero, per ogni nodo

Se l'albero è bilanciato correttamente gli algoritmi spesso hanno complessità $\log_2 n$, questo viene preso come caso migliore, contrariamente al caso peggiore, quando l'albero non è bilanciato correttamente, in cui abbiamo una complessità spesso di $n$.
``` python
class abr(AlberoBin):
    def diRicerca(self):
        return abr._diRicercaRic(self, float('-inf'), float('inf'))
    @staticmethod
    def _diRicercaRic(nodo, min:int, max:int):
        if nodo is None:
            return True
        if nodo.val <= min or nodo.val >= max:
            return False
        return abr._diRicercaRic(nodo.sin, min, nodo.val) and abr._diRicercaRic(nodo.des.val, max)
```
### Massimo / minimo
In un BST è semplice trovare il massimo/minimo, è sufficiente scendere nell'albero rispettivamente a destra per il massimo e a sinistra per il minimo finché possibile.
Questo non vuol dire che raggiungeremo necessariamente una foglia, in quanto il nodo contenente il valore massimo/minimo può ancora avere figli a sinistra/destra.
### Inserimento/rimozione
Creando la libreria dobbiamo assicurarci che chi deve inserire o rimuovere deve solo dare il valore, poi dobbiamo gestire inserimento e rimozione in modo da garantire l'ordinamento corretto.
#### Inserimento
- caso base:
  albero vuoto, il valore da inserire diventa la radice
- caso iniettivo:
  inserisco i nuovi nodi nel punto in cui la procedura di ricerca lo trova
  $\to$ utilizzo praticamente la ricerca del nodo, nella posizione in cui dovrebbe esserci, se già esiste non faccio nulla, altrimenti lo inserisco
``` python
def insert(self, val):
	n = self.__search__(self.valori, val)
	if n is None:  # Inserimento sulla radice
		self.valori = AlberoBin(val)
	else:
		if n.val != val:  # Inserimento generale
			nuovo = AlberoBin(val)
			if n.val > val:
				n.setfigliosin(nuovo)
			else:
				n.setfigliodes(nuovo)
```
%% setfigliodes/setfigliosin sono di AlberoBin%%
**costo dell'inserimento**
l'inserimento in sé è indipendente dal numero di nodi
dipende solo dalla ricerca
$\to \log_2 n$
#### Rimozione
molto simile
utilizzo una ricerca che restituisce il nodo che contiene il valore e non semplicemente il valore, in modo da poter effettuare modifiche su di esso:
``` python
def __search__(self, curr, val) -> AlberoBin:
	if curr is None:
		return curr
	if curr.val == val:
		return curr
	elif curr.val > val:
		if curr.sin is not None:
			return self.__search__(curr.sin, val)
		else:
			return curr
	else:
		if curr.des is not None:
			return self.__search__(curr.des, val)
		else:
			return curr
```
Nel caso di rimozione di una foglia l'algoritmo è banale in quanto basta eliminare il riferimento del padre, il problema è farlo a metà albero: dobbiamo mantenere la struttura ordinata.
Anche se devo rimuovere un nodo con un solo figlio il problema rimane banale, in quanto è sufficiente rimpiazzare il nodo da rimuovere con suo figlio nel nodo padre:
*es.* eliminando il nodo 12
![[Pasted image 20260403162243.png|center|300]]
il caso più complesso è se il nodo da eliminare ha due figli, in quel caso non eliminiamo il nodo in sé, ma lo sostituiamo con il massimo del sottoalbero sinistro o il minimo del sottoalbero destro, per poter rispettare l'ordinamento; una volta sostituito il nodo da eliminare sarà riconducibile ad uno dei due casi precedenti:
![[Pasted image 20260403163332.png|center|600]]

``` python
def delete(self, val):
	if self.valori is None:
		return
	n = self.__search__(self.valori, val)
	if n.val != val:
		return
	if (n.sin is not None) and (n.des is not None):
		tt = n.des
		while tt.sin is not None:
			tt = tt.sin
		n.val = tt.val
		n = tt
	padre = n.parent
	if padre is None:
		if n.sin is not None:
			self.valori = n.sin
			n.sin.pota()
		else:
			self.valori = n.des
			n.des.pota()
	else:
		if n.sin is not None:
			xx = n.sin
		else
			xx = n.des
		xx.pota()
		if padre.sin == n:
			n.pota()
			padre.sin = xx
		else:
			n.pota()
			padre.des = xx
```

**complessità**
nella ricerca scendiamo, nel massimo scendiamo da dove ci siamo fermati con la ricerca $\to$ al più ha un costo pari all'altezza dell'albero
## AVL
L'AVL è una implementazione dell'albero binario di ricerca autobilanciante.

>[!important] bilanciamento
>Se il **fattore di bilanciamento** in valore assoluto è $\leq 1$ per ogni nodo, allora l'albero è bilanciato.
>Il **fattore di bilanciamento** è la differenza tra l'altezza del sottoalbero sinistro e del sottoalbero destro.

Utilizzare il bilanciamento ci permette di riadattare l'albero in presenza di modiche senza stravolgerne la struttura.

>[!important] L'altezza di un albero bilanciato è logaritmica rispetto al numero di nodi

#dimostrazione 
possiamo usare le equazioni di ricorrenza
considerando un fattore di bilanciamento = 0
se abbiamo un albero con una certa altezza nel caso peggiore ogni nodo ha un fattore di bilanciamento 1
numero di nodi di un albero di questo tipo di altezza $h$
$$
\left\{\begin{array}{l}N(h) = 1 + N(h-1) + N(h-2) \\
N(1) = 1\end{array}\right.
$$
sono sempre quelle di [[Algoritmi#Complessità temporale di Fibonacci ricorsivo|Fibonacci]]
una costante elevata ad $h$
$$
N = c^h
$$
$c$ è la costante armonica di Fibonacci
quindi l'altezza sarà pari a $\log_c N$, non conosciamo $c$ ma è sempre logaritmica

---

il problema diventa come mantenerli bilanciati:
inserendo un nodo come figlio sto effettuando una variazione nel bilanciamento del padre di +1, usando questa relazione di altezza posso capire se mio padre è bilanciato.
dobbiamo mantenerlo bilanciato senza dover calcolare l'altezza, altrimenti l'aggiunta di un nodo risulterebbe lineare.
$\to$ Per ogni nodo manteniamo il fattore di bilanciamento
Nel caso degli inserimenti verifichiamo per prima cosa se fare questo inserimento provoca una variazione di bilanciamento/altezza del padre
![[Pasted image 20260403165838.png|center|300]]
Il padre a sua volta deve informare suo padre del nuovo aggiornamento
se l'altezza del nodo non cambia non deve informare il padre (nel disegno il 6 non deve informare il 12 in quanto la sua altezza è rimasta uguale)

stessa cosa per la cancellazione

man mano che propaghiamo l'aumento dell'altezza e di conseguenza il bilanciamento posso verificare se l'albero non è più bilanciato -> gli alberi AVL ribilanciano l'albero in questo caso tramite **rotazione**.
### Rotazione
per mantenere correttamente il bilanciamento tramite rotazione, dobbiamo capire se il nodo che stiamo ribilanciando deve propagare variazioni di altezza (rispetto a prima dell'inserimento/variazione).

Le rotazioni avvengono con complessità $O(1)$ costante, quindi asintoticamente non influiscono sulla complessità di inserimento e rimozione, ma mantenendo l'albero bilanciato la maggior parte degli algoritmi che lavoro su alberi può avvenire con complessità logaritmica.

Lo sbilanciamento avviene per un sottoalbero $T$ di un nodo $v$, che si può quindi trovare in 4 posizioni diverse:
![[Pasted image 20260404120521.png|center|300]]
In base al caso in cui ci troviamo effettuiamo una **rotazione di base** una (per SS e DD) o 2 volte (per SD e DS).

>[!quote] Tip
>Per capire le rotazioni non è necessario impararle a memoria, ma è sufficiente ragionare su come spostare i nodi di base per rendere l'albero bilanciato e posizionare i sottoalberi di conseguenza
#### Rotazione di base
![[Pasted image 20260404123336.png]]
#### Rotazione per SS (DD)
A causare lo sbilanciamento è il nodo $T_{1}$ ($T_{3}$), con una rotazione verso destra (sinistra) l'albero mantiene l'ordine corretto, ma lo rende bilanciato 
![[Pasted image 20260404123841.png]]
#### Rotazione per SD (DS)
Dobbiamo effettuare due rotazioni di base, una sul figlio del nodo critico $z$ (per ricondurla al caso precedente), una sul nodo critico $v$.
![[Pasted image 20260404135158.png]]


>[!quote] dato un albero binario verificare che sia bilanciato con un algoritmo ricorsivo di complessità lineare

``` python
def is_bilanciato(self):
	try:
		abb._is_bilanciato2(self)
		return True
	except ValueError:
		return False
@staticmethod
def _is_bilanciato(nodo:AlberoBin) -> int:
	if nodo is None:
		return 0
	hSin = abb._is_bilanciato(nodo.sin)
	hDes = abb._is_bilanciato(nodo.des)
	if abs(hSin-hDes) > 1:
		raise ValueError("non bilanciato")
	return max(hSin, hDes) + 1
```
## Heap
%% metto qui l'heap perché concettualmente è come un albero, anche se poi nell'effettivo viene implementato come un vettore %%
La differenza con un normale albero è la politica con i quali sono ordinati:
- il padre deve essere minore di tutti gli elementi di entrambi i sottoalberi
- possiamo rappresentarlo come un vettore
Otteniamo così un ordinamento molto più flessibile.
Non avendo condizioni sul rapporto tra sottoalbero destro e sottoalbero sinistro non abbiamo bisogno di fare rotazioni, ma possiamo creare degli alberi completi.
Facciamo una ulteriore ipotesi: i nodi dell'ultimo livello devono essere addensati a sinistra.
Conoscendo il numero di elementi totali quindi sappiamo esattamente qual è la forma finale dell'albero, quindi non è necessario utilizzare la struttura dell'albero, ma possiamo memorizzarli utilizzando un array di elementi, che rappresenta la [[#Visita di un albero|visita per livelli]].
![[Strutture dati-1776195741267.webp|center|500]]
Notiamo come l'indice del padre è la metà dell'indice del figlio (arrotondato) e viceversa l'indice dei figlio è il doppio dell'indice del padre (al massimo sommando 1).
``` python
figliosx(i) = i * 2
figliodx(i) = i * 2 +1
padre(i) = i div 2
```
con `div` divisione intera
Otteniamo così un vettore che ci dà la possibilità di avere sia la visita per livelli che accesso a padre/figli.
Con le ipotesi fatte in precedenza però gli indici partono da `1`, abbiamo due possibili soluzioni:
1. lasciamo vuota la prima cella con indice `0` o al massimo la utilizziamo per memorizzare il numero di elementi per risparmiare spazio
2. partiamo da `0`, ma implementiamo diversamente le funzioni che restituiscono il padre e le funzioni che restituiscono i figli:
   spostiamo lo spazio degli indici sommando `1` all'input e sottraendo `1` all'output
``` python
padre*(i) = ((i*+1) div 2) - 1
figliodx*(i) = ((i*+1) * 2) -1
figliosx*(i) = ((i*+1) * 2) -1 +1
```
%% d'ora in avanti verranno abusate le parole "relazione d'ordine" e "contraddetto" scusa me del futuro o chiunque stia leggendo questi appunti ma è necessario %%
### Inserimento di un valore in un heap
Il vantaggio dell'uso dell'heap in questo caso è l'indipendenza tra i sottoalberi: abbiamo definito relazioni d'ordine solo padre/figlio, quindi non c'è bisogno di verificare altro.

Di base aggiungiamo l'elemento in coda al vettore e solo successivamente verifichiamo le relazioni d'ordine.
![[Strutture dati-1776194209417.webp|center|700]]
- Nella prima iterazione non ci sono figli, quindi può essere contraddetta solo la relazione d'ordine con il padre: se il padre è maggiore effettuo uno swap
- Il padre precedente è minore dei suoi due figli, ma il nuovo elemento dopo lo swap è minore del padre e quindi sicuramente minore dell'altro figlio.
  Rimane da controllare quindi il nuovo padre.
- E continuiamo il controllo fino alla posizione corretta o fino ad essere una radice.

Questo controllo viene eseguito per un massimo di volte corrispondente all'altezza dell'albero, che, essendo un albero completo, è $\log_2n$ portando la complessità dell'inserimento ad essere logaritmica.
### Eliminazione elementi in un heap
Rispettando la coda di priorità l'elemento che estrarrà la `pop()` sarà il minimo e quindi la radice.
Rimuovendo la radice che andremo a sostituire con l'ultimo elemento: il nodo più a destra dell'ultimo livello.
A questo punto dobbiamo verificare le relazioni d'ordine.
![[Strutture dati-1776194235461.webp|center|600]]
- Nella prima iterazione non abbiamo un padre, quindi possiamo aver contraddetto solo la relazione con i figli, quindi se il padre è maggiore di almeno uno dei due figli allora effettuo uno swap con il minore tra i due, in questo modo sono sicuro che verrà rispettata la relazione d'ordine tra padre/figli (essendo il minore sarà più piccolo del figlio opposto, può quindi diventare suo padre)
- A questo punto la relazione con il padre è sicuramente verificata, rimangono quindi le relazioni con i nuovi figli
- E continuiamo il controllo fino alla posizione corretta o fino ad essere una foglia

Anche questo controllo viene eseguito un massimo di volte pari all'altezza dell'albero comportando una complessità logaritmica.
### Variazione di priorità di un nodo
Cambiare il valore di un nodo può violare la relazione d'ordine:
- se il valore decrementa può variare la relazione d'ordine con il padre
- se il valore incrementa può variare la relazione d'ordine con i figli
Nel primo caso mi comporto come nell'inserimento di elementi, nel secondo come nell'eliminazione.
### Heap sort
![[Ordinamento#Heap sort]]

# Dizionari
>[!multi-column]
>
>>[!structure] Dizionari
>>I dizionari sono una struttura dati composta da coppie del tipo chiave-valore e possono essere implementate in vario modo.
>
>>[!operazioni] Operazioni
>>- search
>>- insert
>>- delete

![[Pasted image 20260408084035.png|center|700]]

## Tabella ad accesso diretto
Le **tabelle ad accesso diretto** sono il modo più semplice per implementare i dizionari e utilizzano un array $v$ di dimensione $m$.
Ogni elemento di chiave $k$ viene salvato nella locazione di memoria di indice $k$, garantendo operazioni di accesso basati su chiave (`insert(elemento e, chiave k)`, `delete(chiave k)` e `search(chiave k)`) con complessità costante, limitando però il numero di elementi a $n<m$.

>[!important] Fattore di carico
>Definiamo il fattore di carico come una misura del grado di riempimento di una tabella
>$$\alpha = \frac{n}{m}$$

>[!multi-column]
>
>>[!check] Pregi 
>>Le operazioni hanno complessità costante
>
>>[!bug] Difetti
>>Lo spazio occupato è proporzionale ad $m$, non ad $n$
>
## Tabelle Hash
[[Java#HashMap]]
Le tabelle hash mirano a risolvere i difetti delle tabelle ad accesso diretto.
Le chiavi associate ad ogni valore prese da un universo $U$ (che possono anche non essere numeri), vengono utilizzate all'interno di una [[Java#hashCode|funzione di hash]], per calcolarne l'hashCode.
L'elemento con chiave $k$ sarà quindi nella posizione $v[h(k)]$.
$$
h:U \to [0,m-1]
$$

>[!attention] due elementi uguali devono avere lo stesso hash altrimenti problemi enormi
>Per garantire una ricerca efficace devo assicurarmi che due elementi uguali abbiamo lo stesso hash.
>es. in java il metodo hashcode restituisce l'indirizzo di memoria se non viene ridefinito, quindi se ho due istanze dello stesso oggetto ottengo due hash diversi per due oggetti uguali
>--> equals e hashcode devono essere ridefiniti e lavorare in coppia

>[!bug] Collisioni
>Nel caso in cui più elementi con lo stesso hashCode devono essere inseriti nella tabella dobbiamo gestire il problema delle **collisioni**.
>$$h(u) = h(v)$$

Una possibile soluzione è quella di creare delle funzioni di hash perfette, ossia iniettive:
$$
\forall u,v \in U : u\neq v \implies h(u) \neq h(v)
$$
>[!quote] Esempio
>Nomi di studenti identificati dalla matricola in un insieme $U=[234717,235717]$
>Una funzione di hash perfetta $h(k) = k- 234717$

Questo però comporta avere la dimensione dell'universo $U$ più piccola di $m$, il che è molto raro.

Se invece non abbiamo idea di quale sia il dominio di partenza, cerchiamo di ridurre il più possibile le collusioni .
>[!important] Uniformità
>Per ridurre la probabilità di collisioni, una buona funzione hash dovrebbe essere in grado di distribuire in modo uniforme le chiavi nello spazio degli indici della tabella.
>Questo si ha ad esempio se la funzione hash gode della proprietà di **uniformità semplice**
>Sia $P(k)$ la probabilità che la chiave $k$ sia presente nel dizionario e sia:$$Q(i) = \sum_{k:h(k)=i} P(k)$$
>La probabilità che la cella $i$ sia occupata.
>Una funzione hash $h$ gode di **uniformità semplice** se$$Q(i) = \frac{1}{m}$$

Partendo da un universo $U$ composto dai numeri reali compresi tra $0$ e $1$ e ogni chiave ha la stessa probabilità di essere scelta, allora una buona funzione di hash è:
$$
h(k) = \lfloor k\cdot m \rfloor 
$$
>[!question] Osservazione
>Nella pratica, le chiavi che vogliamo inserire in un dizionario non sono quasi mai numeri casuali distribuiti in modo uniforme (come assumevamo nella dimostrazione precedente). Spesso presentano dei pattern o sono molto simili tra loro.
>La funzione di hash deve quindi "fare confusione" (la funzione hash deve distruggere qualsiasi pattern presente nei dati di input).
>>[!quote] esempio 
>>mid-square method per le stringhe - si converte la stringa in un numero, si eleva al quadrato e poi di prendono le $r$ cifre centrali (che nelle moltiplicazioni soffrono maggiormente del riporto) cambiando completamente la stringa di partenza e subendo grosse modifiche ad ogni minuscola differenza tra le stringhe.
>Se la funzione hash non "fa confusione", chiavi simili finiranno in indici vicini o identici (clustering), causando moltissime collisioni.

>[!question] Osservazione
>Spesso si ha la necessità di costruire funzioni di hash non invertibili, per esempio le password salvate in un database non vengono salvate in chiaro, ma viene generato l'hash code, così quando un utente deve accedere verrà ricalcolato l'hash code e sarà quello ad essere controllato; in questo modo in caso di attacco hacker ai database dell'host le password comunque non potranno essere prese.
>L'hash utilizzato tipicamente è molto diverso da quello che utilizziamo in queste funzioni di hash semplici, do priorità al non avere collisioni piuttosto che alla velocità.
>>[!bug] Attacco dizionario
>>È possibile generare gli hash a partire da un algoritmo di base e un database di password comuni, a quel punto le confronto con gli hash dell'host, se trovo una combinazione corretta posso riutilizzare l'algoritmo trovato per scoprire tutte le password.
>>Con le tecnologie più moderne la funzione di hashing ci mette tanto, così non conviene più fare un attacco di questo tipo (hash lungo o tempo di hash configurabile così da poterlo adattare)
### Risoluzione delle collisioni
Nel caso in cui le collisioni non si possano evitare dobbiamo gestirle
#### Liste di collisioni
Gli elementi sono contenuti in liste esterne alla tabella: $v[i]$ punta alla lista degli elementi tali che $h(k)=i$.
>[!quote] Esempio
>Esempio di tabella hash basata su liste di collisione contenente le lettere della parola: PRECIPITEVOLIS SIMEVOLMENTE
>![[Strutture dati-1775845487647.webp|center|300]]

In questi casi ogni singola cella dell'array principale prende il nome di **bucket**, contenente (di solito) una linked list.
#### Indirizzamento aperto
Tutti gli elementi sono contenuti nella tabella: se una cella è occupata, se ne cerca un’altra libera.
Supponiamo di voler inserire un elemento con chiave $k$ e la sua posizione “naturale” $h(k)$ sia
già occupata. L’indirizzamento aperto consiste nell’occupare un’altra cella, anche se potrebbe spettare di diritto a un’altra chiave. Cerchiamo la cella vuota (se c’è) scandendo le celle secondo una sequenza di indici:
$$c(k,0), c(k,1), c(k,2),…,c(k,m-1)$$
ovviamente arrivato all'indice $m-1$ riparte dall'indice $0$
La scansione per trovare la cella vuota prende il nome di **scansione lineare**
```
c(k,i) = (h(k) + 1) mod m
per 0 <= i < m
```

>[!quote] Esempio
>Inserimenti in tabella hash basata su indirizzamento aperto con scansione lineare delle lettere della parola: PRECIPITEVOLIS SIMEVOLMENTE
>![[Strutture dati-1775845983111.webp|center|300]]

>[!bug] Agglomerazione
>Utilizzando l'indirizzamento aperto otteniamo degli accumuli di valori che rallentano la scansione.
>Una possibile soluzione è l'hashing doppio:
>$$c(k,i) = \lfloor h_{1}(k) + i \cdot h_{2}(k) \rfloor \% m $$
>per $0\leq i <m, h_{1}$ e $h_{2}$ funzioni hash

>[!bug] Una volta occupate tutte le celle con indirizzamento aperto dobbiamo aumentare lo spazio eseguendo una riallocazione

#### Lista di overflow globale
Invece di far "scivolare" gli elementi nell'array (come nell'indirizzamento aperto) o creare tante piccole liste per ogni singola cella (come nel concatenamento standard), questo metodo divide fisicamente o logicamente la memoria in due zone distinte:
1. **La Tabella Principale (Main Table):** Un classico array di dimensione $m$ ad accesso diretto.
2. **La Lista di Overflow:** Una singola struttura dati secondaria (solitamente una lista concatenata, ma a volte un secondo array) condivisa da _tutte_ le celle della tabella principale.
>[!multi-column]
>
>>[!check] Vantaggi
>>non abbiamo problemi di agglomerati e la tabella principale contiene solo dati puri e non riferimenti a liste concatenate, risparmiando spazio
>
>>[!bug] Svantaggi
>>Se avvengono molte collisioni non conviene per niente, la lista di overflow sarebbe molto più grande e lo scorrimento aumenterebbe la complessità
>
### Riallocazione
Durante l'esecuzione il fattore di carico cambia, potrebbe aumentare di molto portando ad un degrado delle prestazioni a causa della ricerca nei bucket, oppure potrebbe diminuire sprecando tanto spazio.
Per risolvere questo problema arrivati ad una certa soglia di fattore di carico effettuiamo una **riallocazione** raddoppiando o dimezzando la dimensione dell'array di base, un po' come avviene nell'[[Java#ArrayList|ArrayList]].
### Nozioni supplementari
L'hashing è una delle tecniche più utilizzate specialmente in memoria secondaria, con l'implementazione però di tecniche che limitino il raddoppio, che, per come lo abbiamo trattato in precedenza, sarebbe troppo lento (trattando grandi moli di dati).
Si lavora quindi sullo spazio degli indirizzi della funzione di hash tramite l'implementazione di funzioni di **hashing dinamiche** *es.* **hashing a spirale**.
L'hashing a spirale tende a riempire maggiormente i primi bucket, in caso di superamento del limite del fattore di carico, saranno proprio questi bucket ad essere divisi e riallocati.
```
Indice Logico | Stato del Bucket
--------------|-----------------------------------
      4       | [][][][][][][][] (8 elementi - Sovraccarico)
      5       | [][][][][]       (5 elementi)
      6       | [][][]           (3 elementi)
      7       | []               (1 elemento)
```
```
Indice Logico | Stato del Bucket
--------------|-----------------------------------
      5       | [][][][][]       (Ora è lui il primo a sinistra!)
      6       | [][][]
      7       | []
      8       | [][][][]         (Ex metà del bucket 4)
      9       | [][][][]         (Ex metà del bucket 4)
```


Questo risulta essere un problema ancora più grande su sistemi distribuiti, in cui quindi dobbiamo implementare funzioni di **hashing distribuito** `(il supremo dice che si chiama hashing consistente e funziona nei sistemi distribuiti che noi non abbiamo fatto)`.
In questi casi si implementa l'**hashing a due livelli** che elimina completamente il caso di collisioni.
Lo spazio delle possibili chiavi, da $0$ a $m-1$ vengono suddivise in $k$ sottospazi. Ogni sottospazio viene assegnato ad un host.
Il primo host conterrà le chiavi da $[0,k-1]$, il secondo $[k,2k-1]$ e così via.
Se volessimo aggiungere un nuovo host ($k=k+1$) non aggiungeremo nuove chiavi, in quel caso dovremmo ricopiare tutti i dati e risuddividerli per il nuovo $k$.
Invece suddividiamo un sottospazio e assegnamo al nuovo host parte delle chiavi di un vecchio host.
Possiamo immaginarlo come uno spazio circolare suddiviso in sottospazi (spicchi). L'aggiunta di un nuovo host porta alla suddivisione dei sottospazi:
![[Strutture dati-1775901027947.webp|center|400]]

# Code
>[!multi-column]
>
>>[!structure] Code
>>[...]
>
>>[!operazioni] Operazioni
>>- push
>>- pop
## Code FIFO
Si implementano con le [[Linked lists]], vengono usate per esempio per l'implementazione di [[1. Gestione dei processi#First-come, first-served (FCFS)|algoritmi di scheduling FCFS]].
## Code con priorità
Abbiamo bisogno di un dominio ordinato di priorità.
Se più elementi hanno lo stesso livello di priorità il loro ordine verrà gestito con politica FIFO.
### Code di priorità fissa
Nel caso in cui abbiamo un dominio di priorità finito possiamo implementare le code utilizzando un array di linked list.
Vengono utilizzate per esempio nell'implementazione di [[1. Gestione dei processi#Con priorità|algoritmi di scheduling con priorità]]. In questi casi i livelli di priorità sono generalmente pochi e non dipendono dal numero totale di processi, quindi nel calcolo della complessità possono essere considerati come costanti.
%% non so se sta roba va qua sinceramente %%
>[!quote] tip
>Possiamo implementare **array invertibili** per ottenere l'indice a partire dal valore (utile per esempio per trovare il successivo).
>Si implementano con una tabella hash che ha come chiave il l'elemento cercato e come valore l'indice da restituire.
>È importante però aggiornare la tabella hash se modifico la posizione di un elemento

L'inserimento e la cancellazione avranno complessità proporzionale al numero di priorità, che rispetto al numero di elementi contenuti è incredibilmente ridotto e comunque costante, quindi nel calcolo della complessità non avranno peso $\implies O(1)$
#### Counting sort
![[Ordinamento#Counting sort]]

#### Radix sort
![[Ordinamento#Radix sort]]
### Code con priorità dinamica
per implementare le code con priorità dinamica potremmo usare diverse strutture dati:
- linked list disordinata
  inserimento costante - ricerca lineare (brutto brutto)
- vettore disordinato
  inserimento costante - la rimozione comporta ricerca e compattazione, ottenendo un costo ancora più alto della lista
- vettore ordinato
  per la rimozione trovo subito l'elemento, ma una volta trovato devo comunque compattare il vettore complessità lineare - se l'inserimento avviene nel mezzo devo spostare tutti i successivi (fa davvero schifo) complessità lineare
- AVL
  inserimento logaritmico - la rimozione comporta la ricerca del minimo o del massimo ed eliminazione effettiva, richiedendo complessità logaritmica 
- Heap - rispetto all'AVL cambia il tipo di memoria che allochiamo (l'heap è rappresentabile come un vettore - memoria statica e contigua top)
  Per vedere il valore successivo nell'AVL dobbiamo ricercare nuovamente il minimo (ciò comporta un cammino dal costo logaritmico), mentre nell'heap è semplicemente la radice
Usando un [[#Heap]] possiamo cambiare il dominio delle priorità dinamicamente.
Inoltre utilizzare l'heap permette di implementare l'[[1. Gestione dei processi#Con priorità|aging]] negli algoritmi di scheduling con priorità in modo da evitare starvation in modo semplice, aggiornando semplicemente il valore di una cella.
# Insiemi
>[!multi-column]
>
>>[!structure] Insiemi
>>Servono a rappresentare una collezione di elementi che non ammettono duplicati
>
>>[!operazioni] Operazioni
>>- $\in$
>>- inserimento
>>- rimozione
>>- $\cup$ unione
>>- $\cap$ intersezione
>>- $\setminus$ differenza

Esistono due grandi famiglie di rappresentazione degli insiemi implementati con strutture dati diverse:
1. esplicitamente enumeriamo gli elementi che vi appartengono.
   Utilizzato per rappresentare insiemi con elementi che possono provenire da un dominio infinito, basta che l'insieme sia finito, tanto definiamo solamente cosa c'è al suo interno
   $\to$ tabelle hash o alberi AVL
2. considero un dominio finito e poiché il dominio è finito rappresento esplicitamente la presenza o l'assenza di un elemento nell'insieme
   $\to$ bit set
entrambe le rappresentazioni vengono utilizzate con scopi diversi.

[[Complessità algoritmi#Insiemistica]]
# Union find
>[!multi-column]
>
>>[!structure] Union find
>>Rappresenta una partizione di insiemi disgiunti contenenti elementi distinti e deve essere implementata per ottimizzare almeno una delle due operazioni fondamentali
>
>>[!operazioni] Operazioni
>>- `union(A,B)`
>>  unica operazione di modifica della partizione, unisce due partizioni (la partizione risultante si chiamerà A)
>>- `find(x)`
>>  restituisce l'insieme $S_i$ a cui $x$ appartiene
>>- `makeSet(x)`

**proprietà**
sia $S$ un insieme e $S_p = \{S_{1},\dots,S_k\}$ l'insieme delle partizioni:
1. ogni elemento delle partizioni fa parte dell'insieme originale$$\bigcup_{i=1}^{k}S_i = S$$
2. mutua esclusione pairwise$$\displaylines{\forall i,j \hspace{4ex} 1\leq i\leq u \wedge 1\leq j \leq k \\ S_i \cap S_j = \emptyset}$$

![[Strutture dati-1776777431095.webp|center|300]]

## Implementazione
Esistono due tipi fondamentali di implementazione, che permettono di ottimizzare la `find()` o la `union()`.
Se sappiamo di dover effettuare molte find implementeremo il [[#Quick find]], se invece sappiamo di dover effettuare molte union implementeremo il [[#Quick union]].
In generale partiamo da tanti singleton (un insieme che contiene un solo elemento) e procedo per accorpamenti successivi.
(*es. di utilizzo* algoritmi di clustering per meccanismi di raccomandazione per le ad)
![[Strutture dati-1776778246237.webp|center|400]]
In un Union Find di $n$ elementi posso effettuare al massimo $n-1$ unioni, una volta effettuate otteniamo un insieme che contiene solo l'insieme originale.
### Quick find
Rappresentiamo ogni partizione come se fosse un albero $n$-ario di altezza 1 con radice il nome dell'insieme.
(Nella pratica viene implementato come un array di elementi il cui contenuto è il riferimento al padre)
![[Strutture dati-1777060679728.webp|center|300]]
Ogni foglia contiene il riferimento al padre, il che ci permette di implementare la `find(elem)` con complessità $O(1)$
La `union(A,B)` nel caso peggiore (A con un elemento e B con n-1 elementi) ha complessità $n-1$, dato che dobbiamo scorrere tutti gli elementi figli per aggiornare il loro riferimento al padre.
Partendo da un insieme di singleton se dovessi unirli tutti in un singolo insieme con la normale implementazione avrei complessità quadratica.
#### Union by size - Bilanciamento QuickFind
Per ottimizzare l'unione nel caso del quick find possiamo semplicemente aggiungere una condizione: uniamo l'insieme di dimensione minore all'insieme di dimensione maggiore e non il secondo al primo.
Questi nodi verranno staccati dalla vecchia radice e fatti puntare alla radice dell'insieme più grande.

Per fare questo,  mantengo la **size** sulla radice di ogni insieme. Quando facciamo un'unione, aggiorniamo la size del nuovo insieme sommando la taglia di quello piccolo a quello grande.

Al momento dell'esecuzione della `union(A,B)` vengono confrontate le dimensioni: se la dimensione di `B` è minore della dimensione di `A` eseguo la normale union, altrimenti inverto i puntatori eseguendo `union(B,A)`.
### Quick union
Per ottimizzare la union rappresentiamo ogni partizione con un albero che può avere anche più di un livello.
![[Strutture dati-1777061493495.webp|center|300]]
Usiamo albero in cui la radice è sempre l'insieme ma poi i sottoalberi hanno altezza qualsiasi.
Eseguendo la `union(A,B)` compongo un albero in cui l'insieme B viene aggiunto come figlio di A.
Questo può avvenire con complessità costante $O(1)$.
Complichiamo però la `find()`: ogni foglia deve mantenere il percorso completo fino alla radice, che nel caso peggiore (lo stesso della peggiore union di prima) si riduce ad una linked list e quindi la complessità è lineare $O(n)$.
#### Union by Rank -  Bilanciamento QuickUnion
Nel QuickUnion base, facendo la union di 2 insiemi si rischiava di attaccare un albero gigante sotto un albero minuscolo, aumentando inutilmente la profondità. Quindi, mentre l'unione veniva effettuata in tempo comunque costante, si aumentava la complessità della ricerca.

Per risolvere questo problema introduciamo l'euristica **Union by Rank**, il cui obiettivo è quello di mantenere **bassa** l'altezza dell'albero, aggiungendo alla radice l'**altezza** (o rank).

- Quando si uniscono due alberi, si prende quello di altezza minore e lo si attacca come figlio della radice dell'albero con altezza maggiore.
- Se le altezze sono uguali, si sceglie arbitrariamente chi fa da figlio, e l'altezza del nuovo albero si incrementa di 1: $$\text{rank}(A) = \text{rank}(A) + 1$$
#### Union by Size - Bilanciamento QuickUnion
È una variante del QuickUnion dove, invece di guardare il rank, guardiamo il n° di nodi (**size**).

- Quando uniamo due alberi, attacchiamo la radice dell'albero con **meno nodi** sotto la radice dell'albero con **più nodi**.
- Avremo che, quindi, la struttura rimane bilanciata e l'altezza dell'albero non supera mai $\log_2 n$.

Avrà le **stesse prestazioni** dell’Union by Rank:
- `find(elem)`: dal caso lineare $\mathcal{O}(n)$ passa al caso logaritmico $\mathcal{O}(\log_2 n)$ (proporzionale all'altezza dell'albero).
- `union(A,B)`: rimane in tempo costante $\mathcal{O}(1)$.
# Grafi
>[!multi-column]
>
>>[!structure] Grafi
>>Rappresenta relazioni tra coppie di oggetti, ma a differenza degli alberi non abbiamo vincoli di rappresentazione gerarchica (relazione libera). Abbiamo però un vincolo sulla relazione, che, almeno per il momento, è binaria.
>
>>[!operazioni] Operazioni
>>- `grado(v)`
>>- `archiIncidenti(v)`
>>- `sonoAdiacenti(x,y)`
>>- `aggiungiVertice(v)`
>>- `aggiungiArco(x,y)`
>>- `rimuoviVertice(v)`
>>- `rimuoviArco(e)`
>
>>[!blank]
>>![[Strutture dati-1777110878916.webp|center|200]]

>[!quote] Tip
>Gli **ipergrafi** permettono relazioni su insiemi di oggetti e risultano molto utili per esempio nei database.
>%%Scarcello e Gottlob hanno lavorato ad un algoritmo in grado di eseguire una query su questo tipo di dato con complessità polinomiale (normalmente richiede complessità esponenziale) %%

>[!important] Vertex (nodo - vertice)
>Ogni elemento della struttura è rappresentato da un nodo.

>[!important] Edge (arco - spigolo)
>La relazione tra due nodi è rappresentata da un arco

Le relazioni tra i nodi possono essere unidirezionali o bidirezionali:
*es.* i seguiti di Instagram rappresentano una relazione unidirezionale: una persona può seguire un altra senza essere ricambiata
*es.* gli amici di Facebook invece rappresentano una relazione bidirezionale.

>[!multi-column]
>
>>[!important] Grafi non orientati
>>Grafi composti da relazioni bidirezionali
>
>>[!important] Grafi orientati
>>Grafi composti da relazioni unidirezionali

Altre definizioni utili:
>[!multi-column]
>
>>[!important] Nodo adiacente
>>Un nodo si dice adiacente ad un altro se sono connessi da una relazione
>
>>[!important] Arco incidente
>>Un arco si dice incidente ad un nodo se lo connette, nei grafi orientati può essere **entrante** o **uscente**

>[!important] Grado
>Ad ogni nodo è associato un **grado** $\delta$: il numero di archi incidenti ad esso.
>Nel caso di grafi orientati abbiamo anche la definizione di
>- **grado di ingresso** $\delta_i$
>- **grado di uscita** $\delta_u$

>[!important] Grafo non orientato connesso
>$G$ è connesso se $\forall x,y \in N : x\neq y \wedge \exists x\circ y$

>[!multi-column]
>
>>[!important] Grafo orientato fortemente connesso
>>ogni arco è sia in uscita che in entrata
>
>>[!important] Grafo orientato semi connesso
>>c'è un cammino orientato che connette tutti i nodi
>
>>[!important] Grafo orientato debolmente connesso
>>creando un grafo $G^*$ definito come il grafo $G$ ma non orientato, se $G^*$ è connesso allora $G$ è debolmente connesso

$$
\text{fortemente connesso} \supset \text{semi connesso} \supset \text{debolmente connesso}
$$

>[!important] Componenti connessi massimali
>![[Strutture dati-1777992249267.webp|center|300]]
>>[!bug] Componenti connessi
>>Possiamo definire un componente $C$  di $G$ connesso se $\forall x,y \in C :x \circ y$
>>In questo modo però prendiamo anche tutte le sottocomponenti, per esempio 0-1 o solo 0
>
>>[!check] Componenti connessi massimali
>>Selezioniamo solo le **massimali** (confronto tra insiemi):
>>utilizziamo la relazione di sottoinsieme
>
>Una componente connessa $C$ di $G$ è massimale se e solo se $\nexists C'$ di $G$ t.c. $C' \supset C$
>>[!quote] In pratica
>>una $C$ è massimale se non c'è nessun altra componente che la contiene strettamente
## Rappresentazione
Può essere rappresentato da una coppia di collezioni di elementi:
$$
G = (V,E)
$$
con $V$ insieme dei nodi e $E$ insieme delle relazioni.
$E$ è una collezione di insiemi al massimo di cardinalità 2
$V$ potrebbe anche non essere un insieme finito.
*es.* $V$ l'insieme dei numeri naturali e $E$ definito come $y = x+1$ con $x,y \in V$

Tipicamente rappresentiamo con $|V| = n$ il numero di nodi e $|E| = m$ il numero di relazioni.
Fissato il numero di nodi abbiamo al più $n^2$ archi (ogni nodo può avere una relazione con ogni nodo).

Per contare il numero di relazioni possiamo:
- **Utilizzare il grado di ogni nodo** (non contiamo gli autocicli)
>[!multi-column]
>
>>[!blank]
>>nel caso di grafi non orientati dobbiamo dividere per 2, altrimenti considereremmo il grado da entrambe le direzioni.
>>$$\frac{1}{2} \sum_{v \in V} \delta(v) = m$$
>
>>[!blank]
>>oppure per i grafi orientati
>>$$\sum_{v \in V} \delta_i (v) = \sum_{v \in V} \delta_u(v) = m$$

- **Contare il numero di relazioni**
dividendo per 2 solo se i due nodi messi in relazione sono diversi
$$
m = \sum_{(x,x) \in E} 1 + \frac{1}{2} \sum_{(x,y) \in E \wedge x \neq y}1
$$
### Struttura
Per la rappresentazione dei grafi possiamo utilizzare varie strutture dati.
Utilizziamo come esempio il seguente grafo (orientato e non):

>[!multi-column]
>
>>[!blank]
>>grafo non orientato
>>![[Strutture dati-1777120057189.webp|200]]
>
>>[!blank]
>>grafo orientato
>>![[Strutture dati-1777120072856.webp|200]]
#### Lista di archi
>[!multi-column]
>
>>[!blank]
>>È l'implementazione più semplice, consiste in una lista contenente tutte le relazioni, nel caso di lista non orientata non importa l'ordine.
>
>>[!blank]
>>![[Strutture dati-1777120497416.webp|center|75]]
#### Liste di adiacenza
Manteniamo in un array una cella per ogni nodo contenente una linked list con tutti i nodi adiacenti. Risulta molto conveniente nel caso in cui abbiamo molti nodi e pochi archi. Con molti archi risulta sconveniente dover scorrere tutta la linked list delle relazioni.

>[!multi-column]
>
>>[!blank]
>>grafo non orientato
>>![[Strutture dati-1777120866479.webp|200]]
>
>>[!blank]
>>grafo orientato
>>![[Strutture dati-1777120891942.webp|180]]

#### Liste di incidenza
È molto simile alle liste di adiacenza, ma invece di mantenere i nodi adiacenti manteniamo, per ogni nodo, una linked list con un riferimento a tutti gli archi incidenti.
Non viene molto utilizzata per l'ulteriore spazio occupato dall'array necessario a mantenere l'insieme delle relazioni.

>[!multi-column]
>
>>[!blank]
>>grafo non orientato
>>![[Strutture dati-1777121051510.webp|300]]
>
>>[!blank]
>>grafo orientato
>>![[Strutture dati-1777121071145.webp|265]]
#### Matrice di adiacenza
Costruiamo una matrice $n \times n$ per ogni nodo e inseriamo 1 nella cella `[i,j]` se è presente un arco che collega il nodo associato a `i` con il nodo associato a `j`.
(è come se fosse un bit set delle relazioni)
Non conviene utilizzarlo se abbiamo poche relazioni e tanti nodi, avremmo tantissimo spazio sprecato

>[!multi-column]
>
>>[!blank]
>>grafo non orientato
>>![[Strutture dati-1777121800783.webp|200]]
>
>>[!blank]
>>grafo orientato
>>![[Strutture dati-1777121816553.webp|200]]

notiamo come per il grafo non orientato ovviamente la matrice è simmetrica, possiamo quindi mantenere solo il triangolo superiore o inferiore
#### Matrice di incidenza
Creiamo una matrice $n \times m$ che associa ad ogni riga un nodo e ad ogni colonna un arco.
Otterremo una matrice molto sparsa con una dimensione inutilmente grande.

>[!multi-column]
>
>>[!blank]
>>grafo non orientato
>>![[Strutture dati-1777122000872.webp|200]]
>
>>[!blank]
>>grafo orientato
>>![[Strutture dati-1777122015614.webp|200]]
>

Per il grafo non orientato inseriamo `-1` se l'arco è uscente.
## Cammini
Possiamo rappresentare un cammino all'interno del grafo come:
1. Una lista dei nodi attraversati
   (non tutte le liste di nodi sono cammini, deve essere presente l'arco orientato tra un nodo e il successivo)   $$V_{i \in [0,k-1]}(x_{i},x_{i+1}) \in E$$
2. Lista degli archi attraversati
   (stessa cosa di prima, non tutte le liste di archi sono dei cammini)
   se due archi appaiono uno dopo l'altro il nodo terminale del primo arco del essere il primo del successivo (`[(5,4), (1,0)]` non è un cammino) 

La lista dei nodi è più compatta e quindi usiamo quella

>[!important] Distanza
>La lunghezza del più corto cammino tra due nodi si dice distanza

>[!question] Osservazione
>Se due nodi sono connessi posso andare dal nodo `A` al nodo `B` attraverso infiniti cammini

>[!multi-column]
>
>>[!important] Cammini generali
>>qualsiasi tipo di cammino
>>`[5,3,2,5,4,1,0]`
>
>>[!important] Cammini semplici
>>cammini che non contengono cicli (sottopercorsi)
>>`[3,2,5,4,1,0]`

Non conviene puntare ad utilizzare sempre cammini semplici, in quanto in alcuni casi potrebbero complicare di molto la complessità degli algoritmi.
*es.* raggiungere x da y percorrendo un cammino pari di archi: è facilissimo se considero anche cammini coi cicli.
### Ciclo
>[!important] Ciclo per grafi orientati
>Definiamo come ciclo per i grafi orientati un cammino in cui nodo iniziale e finale sono lo stesso nodo

Nei grafi non orientati non basta questa definizione, ogni relazione implicherebbe un ciclo
*es.* Possiamo eseguire il percorso `[0,1,0]`, ma non possiamo considerarlo come un ciclo
![[Strutture dati-1777114239577.webp|center|200]]

>[!important] Ciclo per grafi non orientati
> Definiamo come ciclo per i grafi non orientati un cammino in cui nodo iniziale e nodo finale sono lo stesso nodo e non passiamo due volte per lo stesso arco
> ![[Strutture dati-1777114533895.webp|center|200]]

## Algoritmi di visita su un grafo
L'idea alla base degli algoritmi di visita su un grafo è quella di riadattare gli algoritmi di visita sugli [[#Visita di un albero|alberi]].

>[!bug] Problemi
>Riutilizzando ciecamente gli algoritmi sugli alberi rischiamo di:
>- visitare lo stesso nodo più volte
>- entrare in un ciclo e quindi non terminare mai la sequenza

Per evitare questo dobbiamo assicurarci che un nodo non venga visitato più volte.
Possiamo per esempio utilizzare un bit set per tenere traccia di tutti i nodi già visitati.
Non c'è una vera e propria differenza di implementazione tra grafi orientati e non, con l'unica differenza però che con grafi orientati c'è il rischio che vengano lasciati fuori dalla visita dei nodi connessi (ma per cui non è presente un percorso orientato) al nodo passato come parametro per l'inizio della visita.
### Visita a scandaglio / in profondità
Riadattando la [[#Visita di un albero|visita anticipata sugli alberi]] 
``` python
def __visitaprofonditaRic__(g: Grafo, nodo: int, visitati: list[bool], risultato: list[int]):
    if not visitati[nodo]:
        visitati[nodo] = True
        risultato.append(nodo)
        for ad in g.adiacenti(nodo):
            __visitaprofonditaRic__(g, ad, visitati, risultato)


def visitaprofonditaRic(g: Grafo, nodo: int) -> list[int]:
    risultato: list[int] = []
    __visitaprofonditaRic__(g, nodo, [False for i in range(g.n)], risultato)
    return risultato
```
qualsiasi sia la rappresentazione interna del grafico viene definito un dunder method per la ricorsione: se il nodo passato come parametro non è stato visitato il suo bit corrispondente viene impostato a `True` e il suo valore viene inserito all'interno della lista del risultato, poi si procede alla visita ricorsiva di tutti i nodi adiacenti.

oppure iterativamente
``` python
def visitaprofondita(g: Grafo, nodo: int) -> list[int]:
    risultato: list[int] = []
    pila: list[int] = []
    visitati: list[bool] = [False for i in range(g.n)]
    pila.append(nodo)
    while pila:
        curr: int = pila.pop()
        if not visitati[curr]:
            visitati[curr] = True
            risultato.append(curr)
            for ad in reversed(list(g.adiacenti(curr))):
                pila.append(ad)
    return risultato
```
 viene simulato il funzionamento dello stack con una pila.
### Visita a ventaglio / in ampiezza
Riadattando la [[#Visita di un albero|visita per livelli sugli alberi]]
``` python
def visitaampiezza(g: Grafo, nodo: int) -> list[int]:
    risultato: list[int] = []
    coda: list[int] = []
    visitati: list[bool] = [False for i in range(g.n)]
    coda.append(nodo)
    while coda:
        curr: int = coda.pop(0)  # theta(n)
        if not visitati[curr]:
            visitati[curr] = True  # theta(n)
            risultato.append(curr)  # theta(n)
            for ad in g.adiacenti(curr):  # LA theta(m)    MA theta(n^2)
                if not visitati[ad]:  # theta(m)
                    coda.append(ad)  # theta(m)
    return risultato
```

L’algoritmo scopre tutti i vertici che si trovano a distanza $k$ da `s`, prima di scoprire i vertici a distanza $k+1$.
A differenza della visita a scandaglio uso una coda e non una pila.

## Verifica aciclicità grafi orientati
Nei grafi **orientati** come possiamo verificare se è presente un ciclo?
Ricordando la [[#Ciclo|definizione]] di ciclo nei grafi orientati.
### Verifica per ogni arco
Una prima soluzione potrebbe essere quella di considerare tutti gli archi del grafo e per ogni arco effettuare una visita ($O(n+m)$) a partire dal nodo terminale: se viene raggiunto il nodo di partenza dell'arco allora abbiamo un ciclo.
È facile capire come questa doppia iterazione abbiamo un costo di $O(m\cdot (m+n))$, che, se il grafo è molto sparso, può essere approssimato come quadratico, ma se il grafo non è sparso $m \approx n^2$, portando ad un costo asintotico $O(n^4)$, troppo alto.
### Chiusura transitiva
Una possibile alternativa è mappare la raggiungibilità di ogni nodo: creiamo un secondo grafo $G^*$ che crea un arco tra un nodo $A$ e un nodo $B$ se esiste un percorso tale per cui possiamo andare da $A$ a $B$.
A questo punto è sufficiente scorrere i nodi: se sono presenti nodi connessi a se stessi allora è presente un ciclo.
#### Chiusura transitiva basata sulle visite
Effettuiamo una visita per ogni singolo nodo e aggiungiamo un arco di connessione ad ogni nodo raggiungibile.
La complessità temporale sarà quindi
$$
O(n \cdot (n+m))
$$
che per grafi sparsi è approssimabile a $O(n)$, ma per grafi densi tenderà a $O(n^3)$.

>[!important] La chiusura transitiva può essere ulteriormente ottimizzata sfruttando la rappresentazione di grafi con matrici di adiacenza e il calcolo matriciale, riducendo la complessità
### Algoritmo dell'ordinamento topologico
``` python
def trovazero(gradi: list[int], rimossi) -> int:
    for i in range(len(gradi)):
        if gradi[i] == 0 and not rimossi[i]:
            return i
    return -1


def tuttizero(gradi: list[int]) -> bool:
    for x in gradi:
        if x != 0:
            return False
    return True


def eaciclicoOR(g: Grafo) -> bool:                          #theta(n^2)
    gradi: list[int] = [0 for i in range(g.n)]              #theta(n)
    rimossi: list[bool] = [False for i in range(g.n)]       #theta(n)
    for x, y in g.archi():                                  #MA theta(n^2) LA theta(m)
        gradi[y] += 1
    curr = trovazero(gradi, rimossi)                        #theta(n)
    while curr != -1:                                       #per ogni nodo che rimuovo (nel caso peggiore per ogni nodo) theta(n^2)
        rimossi[curr] = True
        for ad in g.adiacenti(curr):                        #MA theta(n) LA theta(grado_i(curr))
            gradi[ad] -= 1
        curr = trovazero(gradi, rimossi)                    #theta(n)
    return tuttizero(gradi)                                 #theta(n)
```

L'aciclicità di un grafo può essere verificata per un insieme su cui è definita una relazione d'ordine parziale tramite l'algoritmo dell'ordinamento topologico.
Inoltre questo algoritmo ci permette di restituire, in mancanza di cicli, la relazione d'ordine totale dell'insieme, in accordo con la relazione d'ordine parziale

*es.* le propedeuticità degli esami, dove ogni nodo è un esame, che deve essere riflessivo e tra alcune materie è presente una relazione d'ordine tale per cui vale la transitività $x<y \wedge y <z \implies x<z$

L'algoritmo dell'ordinamento topologico si basa su una proprietà molto importante:
>[!important] Se in un grafo orientato $\nexists$ nodi con grado di entrata nullo $\implies$ il grafo ha un ciclo

#dimostrazione per grafi finiti
Sia $G$ un grafo orientato con un numero finito di nodi $n$ e supponiamo che nessun nodo abbia grado di entrata nullo.
Scegliamo un nodo qualsiasi di partenza $x_{0}$.
Poiché nessun nodo ha grado di entrata 0 deve esiste un arco che entra in $x_{0}$ da un altro nodo $x_{1}$
![[Strutture dati-1777663017592.webp|center|200]]
anche $x_{1}$ avrà il suo arco entrante, si presenta quindi la stessa situazione per cui esiste un arco che connette un altro nodo $x_{2}$ a $x_{1}$
![[Strutture dati-1777663114361.webp|center|350]]
e così via, fino al nodo $x_{n-1}$
![[Strutture dati-1777663418561.webp|center|600]]
Per far si che ogni nodo abbia un arco entrante rimane solo una possibile relazione $x_{0} \to x_{n-1}$ creando un ciclo
![[Strutture dati-1777663759277.webp|center|600]]
In questo modo abbiamo dimostrato che se tutti i nodi hanno grado di ingresso diverso da 0 allora abbiamo un ciclo.

>[!bug] Questa condizione non ci permette di dire nulla se non si verifica
>Se esistono nodi con grado di entrata nulla non ci permette di dire che non ci siano cicli, in quanto non conosciamo come sono connessi tra di loro i nodi con grado di entrata $\neq 0$
>*es.* in questo caso il nodo $x_{0}$ ha grado di entrata pari a 0, ma è presente un ciclo tra gli altri nodi
>![[Strutture dati-1777665708530.webp|center|300]]

Dato che un grafo presenta cicli anche se un suo sottografo presenta cicli possiamo sfruttare comunque questa proprietà: se sono presenti nodi con grado di entrata pari a 0 li rimuoviamo e rieffettuiamo la verifica su ciò che rimane del grafo.
Si possono presentare due situazioni possibili:
1. troviamo un ciclo in un sottografo
2. continuiamo la rimozione fino ad ottenere un grafo con un solo elemento: **il grafo è aciclico**

![[Strutture dati-1777666359701.webp|center|600]]

Per semplificare l'algoritmo invece di eliminare completamente i nodi e quindi ricostruire completamente il grafo per ogni iterazione semplicemente abbasso il grado di entrata e nel momento della verifica ignoro i nodi con grado -1
![[Strutture dati-1777666800533.webp|center|600]]
Procedendo con la rimozione (o elementi con grado di ingresso -1) inserisco i nodi in una lista che poi andrò a restituire, ottenendo così una relazione d'ordine totale che non è in contraddizione con le relazioni d'ordine.
## Verifica aciclicità grafi non orientati
Per i grafi non orientati cambia il concetto di [[#Ciclo|ciclo]] quindi non possiamo riutilizzare l'algoritmo utilizzato nei grafi orientati.
Dobbiamo verificare la presenza di un cammino che riporta allo stesso nodo senza ripassare dallo stesso arco.
### Ipotesi semplificativa: fortemente connesso
>[!question] Osservazione
>Un grafo che non contiene cicli è come un albero di cui non abbiamo definito una radice (ordine gerarchico)
>![[Strutture dati-1777993980887.webp|center|400]]
>questa definizione vale in entrambi i sensi, quindi ci aiuta a definire l'aciclicità di un grafo

Sia $G = <N,E>$ non orientato: se $G$ è connesso e aciclico è considerabile come un albero.
Se $G$ è un albero per garantire la connessione di $n$ nodi dobbiamo mantenere $n-1$ connessioni, aggiungendo un altro arco otterremo un ciclo.
$\therefore$ Se $G$ è aciclico e $n = m+1 \implies$ il grafo è aciclico.
>[!attention] Se non è connesso queste considerazioni non sono valide
>![[Strutture dati-1777995879655.webp|center|200]]

Con queste premesse possiamo quindi creare un algoritmo di aciclicità in due fasi: verifichiamo se il grafo è connesso e poi verifichiamo se $n=m+1$.

Per verificare se un grafo è connesso faccio una visita: se la lunghezza del risultato è pari a $n$ allora il grafo è connesso.
Il grafo è un albero se a partire da un nodo qualunque posso raggiungere tutti gli altri.
``` python
def econnesso(g: GrafoNO) -> bool:
    result = visitaampiezza(g, 0)
    if len(result) == g.n:
        return True
    return False


def ealbero(g: GrafoNO) -> bool:  # MA theta(n^2) LA theta(n)
    return g.n == g.m + 1 and econnesso(g)
```

Nella matrice di adiacenza devo scorrere tutta la matrice quindi $\Theta (n^2)$, mentre nella lista di adiacenza abbiamo $n$, in quanto passiamo alla seconda connessione dell'`and` solo se `g.n == g.m` (cortocircuitato), quindi possiamo approssimare la normale complessità della visita ($n+m$) è approssimabile con $\Theta(n)$.
### Caso generale
Se il grafo è aciclico ogni singola componente è un sottografo connesso e aciclico.
Quando un grafo è aciclico è considerabile una **foresta**, un insieme di alberi.
Quindi nel caso generale il problema si riduce a verificare se tutte le [[#Grafi|componenti connessi massimali]] sono alberi.

Sotto queste ipotesi possiamo affermare che:
1. le componenti sono partizioni: non abbiamo archi che connettono due nodi di due componenti diversi (altrimenti non sarebbero massimali)
2. siano due componenti $C_{1}$ e $C_2$ l'intersezione è un insieme nullo $C_1 \cap C_{2} = \emptyset$

Supponiamo di avere un grafo con $n$ nodi, $m$ archi e $k$ componenti connessi massimali.
Quindi possiamo definire:

>[!multi-column]
>
>>[!blank]
>>$$\begin{array}{c}\text{grafo ciclico} \\ n_1 = m_{1} + 1 \\ n_{2} = m_{2} +1 \\ \vdots \\ n_k = m_k +1 \end{array}$$
>
>>[!blank]
>>$$\begin{array}{c}\text{grafo aciclico} \\ n_1 \leq m_{1} + 1 \\ n_{2} \leq m_{2} +1 \\ \vdots \\ n_k \leq m_k +1 \end{array}$$

(sicuramente sono $n-1$ archi per connettere $n$ nodi)

Dato che non ci sono nodi e archi comuni alle varie componenti possiamo definire
$$
n = \sum_{i=1}^k n_i \hspace{8ex} m = \sum_{i=1}^k m_i
$$
Per verificare queste condizioni a sistema possiamo fare la somma componente per componente
$$
n_{1}+n_{2}+\dots+n_k = m_{1}+m_{2}+\dots m_k +k
$$
$$
\therefore n=m+k
$$

Se consideriamo $n<m+k$ c'è almeno un arco in più, per le ipotesi definite precedentemente non può essere tra due componenti diverse, quindi l'arco in più si trova tra due nodi dello stesso componente: $\exists C_i:n_{1} \neq m_{1}+1$ $\implies$ $C$ è ciclico $\implies$ $G$ è ciclico.

Ne concludiamo che per verificare se un qualsiasi grafo è ciclico basta verificare che:
$$
n = m + k
$$
#### Come calcoliamo $k$
L'idea alla base è quella di inizializzare un array di $n$ elementi a `false`, effettuare visite e settare a `true` i nodi corrispondenti visitati, fin quando tutto l'array sarà `true`. Il numero di visite fatte sarà esattamente $k$.

``` python
def numcompconnesse(g: GrafoNO) -> int:
    visitati: list[bool] = [False for i in range(g.n)]
    comp: int = 0
    for i in range(g.n):
        if not visitati[i]:
            comp += 1
            __visitaprofonditaRic__(g, i, visitati, [])
    return comp
```

Il nodo da cui partiamo per verificare se la lista contiene `false` cambia di molto la complessità: iniziando dal successivo del nodo da cui siamo partiti per la visita precedente la complessità finale sarà pari alla visita (MA $n^2$ e LA $n+m$).
A prima vista potremmo considerare $k$ moltiplicato per la complessità delle singole visite per calcolare la complessità, ma in realtà ad una analisi più approfondita dei singoli casi risulta che il numero totale di archi visitati non sarà mai superiore a $m$, in quanto le visite avvengono su componenti completamente divise.
$$
\begin{array}{c|c}
\text{MA} & \text{LA} \\
\hline
n_{1} \cdot n & n_{1} + m_{1} \\
n_{2} \cdot n & n_{2} + m_{2} \\
\vdots & \vdots \\
n_k \cdot n & n_k + m_k \\
\hline
n\sum_{i=1}^k n_i & \sum_{i=1}^k n_i + \sum_{i=1}^k m_i \\
n \cdot n & n+m
\end{array}
$$
Nella matrice di adiacenza per ogni nodo scorriamo la riga, mentre nella lista di adiacenza il numero di nodi adiacenti è limitato dal numero di archi.

---
Ne deriva quindi il seguente codice completo
``` python
def eaciclico(g: GrafoNO) -> bool:
    return g.n == g.m + numcompconnesse(g)

def numcompconnesse(g: GrafoNO) -> int:
    visitati: list[bool] = [False for i in range(g.n)]
    comp: int = 0
    for i in range(g.n):
        if not visitati[i]:
            comp += 1
            __visitaprofonditaRic__(g, i, visitati, [])
    return comp    

def __visitaprofonditaRic__(g: Grafo, nodo: int, visitati: list[bool], risultato: list[int]):
    if not visitati[nodo]:
        visitati[nodo] = True
        risultato.append(nodo)
        for ad in g.adiacenti(nodo):
            __visitaprofonditaRic__(g, ad, visitati, risultato)
```
## Grafi pesati sugli archi
Aggiungere informazioni relative ai nodi risulta molto semplice, basta che ogni nodo sia composto da un array, invece aggiungere informazioni relativi agli archi potrebbe risultare più complesso, ma anche molto più utile.
*es.* casi d'uso:
- cammino con minore tempo di percorrenza in una rete stradale (non semplice cammino con meno archi)
- rete di distribuzione di utilities (acqua, gas): gli archi sono le tubature, l'informazione associata è la portata della tubatura, quindi andiamo a cercare la tubatura con maggiore portata
- rete stradale in ipotesi, ogni arco ha un costo: con quale budget minimo posso collegare i nodi (città)
- internet: la rete stabilisce qual è il cammino preferito, più veloce, che viene mantenuto -> da una struttura generale che contiene tutti i collegamenti ne ricava la struttura di un albero contenente i canali più efficiente (dei canali preferiti). associamo informazioni tipicamente numeriche agli alberi

per la sua implementazione aggiungiamo $\lambda$
$$
G = <N,E,\lambda>
$$
funzione di etichettatura degli alberi
$\lambda:E \to P$
$P$ insieme dei pesi

nel caso in cui volessi mantenere più informazioni lambda è una coppia.

possiamo avere pesi sia in grafi orientati che non orientati

praticamente lo rappresentiamo estendendo le strutture già utilizzate:
- **lista di archi**
  ad ogni coppia associo il peso (diventa una tripla)
  i pesi non ci interessano nella equals
- **lista di adiacenza**
  ogni elemento della sotto lista contiene una coppia di elementi: nodo e peso
- **matrice di adiacenza**
  la cella rappresenta l'arco -> abbiamo due opzioni:
	- manteniamo un bit che rappresenta se è presenta o no l'arco e poi una ulteriore informazione contenente il peso
	- utilizziamo direttamente una matrice di valori e per rappresentare l'assenza dell'arco utilizziamo un valore speciale che non può essere utilizzato come peso - dipende dalla natura del dato rappresentato

Le complessità delle operazioni di base rimane uguale.

### Costo di un cammino
>[!important] Costo di un cammino
>Per i [[Strutture dati#Grafi pesati sugli archi|grafi pesati]] possiamo definire il costo di un cammino come la somma del peso dei singoli archi attraversati durante il cammino
>$$\begin{array}{c} &e_0 & e_1 & & e_k \\ c=&[(x_{0},x_{1}),&(x_{1},x_{2}),&\dots,&(x_{k-1},x_k)] \end{array}$$
>$$\text{costo}(C) = \sum_{i=0}^k \lambda (e_i)$$
>Definiamo inoltre $C (x,y) =$ **insieme dei cammini** da $x$ a $y$
>un cammino $c \in C(x,y)$ è di **costo minimo** se e solo se $\nexists c' \in C(x,y)$ t.c. $\text{costo}(c)>\text{costo}(c')$

Avendo un cammino $c$ il costo di $c$ è detto **distanza** da $x$ a $y$.

Il cammino di costo minimo potrebbe non esistere: nel caso in cui l'insieme dei cammini è un insieme vuoto, se $x$ e $y$ non sono connessi.
Se $x$ e $y$ sono connessi esiste sempre, è un insieme tipicamente discreto, quindi l'insieme non è aperto ed è limitato inferiormente.

Il costo di un cammino potrebbe anche essere **negativo** (dipende dal caso d'uso).
In questo caso non possiamo sempre calcolarlo:
>[!multi-column]
>
>>[!blank]
>>![[Strutture dati-1778185716052.webp|center|300]]
>
>>[!blank]
>>In casi come questo la ricerca del cammino minimo si bloccherebbe nel ciclo 1-2: spostandoci da 1 a 2 abbiamo un costo di 1, ma spostandoci da 2 a 1 abbiamo un costo di -10, portando il totale a -9, ogni volta che facciamo questo scambio quindi ci guadagnamo 9

Potrebbe verificarsi l'ingresso in un ciclo il cui bilancio tra ingresso e uscita è negativo: il cammino di costo minimo non esiste, rimanendo nel ciclo all'infinito il costo continua a diminuire.
>[!important] La presenza di un ciclo la cui somma dei pesi sugli archi del ciclo è negativa fa si che non tutti i cammini minimi esistano (l'insieme dei costi dei cammini non è più limitato inferiormente)

Non tutti gli algoritmi per calcolare il cammino di costo minimo gestiscono questa situazione.