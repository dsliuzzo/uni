#appunti 
#fondamenti2
Python è un linguaggio #imperativo interpretato e non compilato come C, quindi necessita di un [[Concetti di base#Interpreti|interprete]].

# Variabili
[[C#Variabili]]
Le variabili in python sono molto flessibili e molti elementi che in C erano manuali sono completamente automatici.
la vita delle variabili è da quando viene creata fino alla fine del programma
Tipizzazione automatica
**Le celle dell'heap sono immutabili** (non tutti) -> vengono allocate nuove celle di memoria e viene cambiato il puntatore nello stack
non c'è il `free()`, ma c'è il **garbage collector**, un processo che verifica se nell'heap esistono celle di memoria non puntate da nessuno (memory leak)
in python nello stack ci sono solo indirizzi a variabili create nell'heap, se svolgiamo un calcolo, non cambia il valore della cella puntata, ma viene creato un nuovo valore all'interno dell'heap e nello stack verrà modificato il puntatore, che ora punterà alla nuova variabile. Implicitamente tutte le variabili sono puntatori.
python per numeri interi fino a un tot in realtà se ha già quel valore calcolato nell'heap non ne crea un altro, ma punta allo stesso numero. Questo è possibile perché gli interi sono immutabili, quindi per ottimizzazione python ha questa possibilità, senza il rischio che i valori contenuti vengano modificati per sbaglio.
## Type casting esplicito
[[C#Conversione di tipo type_casting]]
casting va per troncamento
string to int funziona solo per numeri interi -> per fare questo bisogna fare string to float e float to int

## Stringhe
[[C#Array dinamici]]
Le stringhe in python sono come degli array dinamici di char in C

manipolazione dei singoli caratteri nelle stringhe diversa da c, non si può `s[0]='a'`, l'area puntata non può cambiare.
### concatenazione tramite somma
Tramite l'operatore `+` utilizzato tra due stringhe viene creata una stringa composta dalla concatenazione delle due stringhe.
utilizzando l'operatore di moltiplicazione verrà creata una nuova stringa fatta dalla stringa iniziale ripetuta tante volte quanto il numero che segue il `*`
### String formatting
Lo string formatting consiste nella creazione di stringhe che contengono anche la traduzione in stringa di altri tipi di variabili.
Per essere utilizzato "" deve essere preceduto da `f` e gli eventuali oggetti da tradurre devono essere compresi in delle parentesi graffe
```
i=10
print(f"Il numero è {i}")
```

## Liste
Contrariamente le liste sono mutabili, cambiando un valore nell'heap il puntatore nello stack rimane uguale
nell'heap di una lista c'è un ulteriore puntatore ad un altro array (celle contigue) per eventuali append, se l'append sfora la dimensione del secondo array viene creato un nuovo array, con numerose posizione vuote nuove puntato dal primo valore del primo array

#### Array list
le liste nello stack sono un puntatore ad un puntatore nell'heap, che punta effettivamente all'array costituito da celle contigue, di una dimensione maggiore rispetto a quella della lista, per eventuali ampliamenti dell'utente, se questi ampliamenti superano le celle di memoria già allocate nella lista python in automatico creerà una nuova lista, cambiando il puntatore nell'heap, copiando i valori della vecchia lista nella nuova che avrà una dimensione maggiore, anch'essa con delle celle riservate ad ampliamenti futuri. Il garbage collector rimuoverà la vecchia lista dall'heap.

![[Pasted image 20250406190326.png|center|500]]

nel momento in cui la length max viene superata il processo di copia su un nuovo array nell'heap è molto oneroso, per questo nel caso in cui dobbiamo agire spesso nella modifica della lista risulta più conveniente utilizzare altri tipi di strutture. Nel caso in cui dobbiamo effettuare la selezione di un elemento specifico tramite `getitem` le array list sono molto efficienti.
### Creazione di sottostringhe (slicing)
`s[start : end : step]`
### List comprehension
[...]
### Copie

| Operazione        | Nuovo oggetto contenitore | Nuovi oggetti interni | Condivisione dati |
| ----------------- | ------------------------- | --------------------- | ----------------- |
| [[#Aliasing]]     | ❌ No                      | ❌ No                  | ✅ Totale          |
| [[#Shallow copy]] | ✅ Sì                      | ❌ No                  | ⚠️ Solo interni   |
| [[#Deep copy]]    | ✅ Sì                      | ✅ Sì                  | ❌ Nessuna         |

#### Aliasing
Nel momento in cui effettuiamo una copia di una lista tramite `=` in realtà stiamo solo assegnando un nuovo nome (alias) alla stessa locazione nell'heap (sto solo copiando il riferimento), di conseguenza tutte le modifiche effettuate alla lista iniziale avranno ripercussioni sulla copia e viceversa. Questa operazione prende il nome di **aliasing**.
```
lista1 = [1,2,3]
lista2 = lista1
lista1.append(4)
print(lista2) # output: [1,2,3,4]
```
#### Shallow copy
Utilizzando invece una copia tramite metodo della prima lista posso effettivamente modificare i valori contenuti nella seconda lista senza modificare la prima. Questa operazione prende il nome di **shallow copy**.
```
lista1 = [1,2,3]
lista2 = lista1[:] # lista2 = list(lista1) o lista2 = copy.copy(lista1) ma necessita di import copy
lista2.append(4)
print(lista1,lista2) # output : [1,2,3] [1,2,3,4]
```
#### Deep copy
Nel caso in cui la lista iniziale contiene delle altre liste innestate utilizzare la shallow copy può causare alcuni errori in quanto gli elementi contenuti nella lista iniziale vengono copiato come alias, quindi le modifiche effettuate nella sottoliste della prima lista avranno ripercussioni nelle sottoliste della seconda lista. Per evitare questo possiamo utilizzare una **deep copy** che effettua una copia ricorsiva (e non per riferimento) anche delle sottoliste. Dopo una deep copy la nuova lista risulta essere completamente indipendente dall'originale.
```
lista1 = [[1,2,3],[4,5,6]]
lista2 = lista1.copy(lista1)
lista2[0][0] = 10
print(lista1, lista2) # output : [[10,2,3],[4,5,6]] [[10,2,3],[4,5,6]]
```
```
import copy
lista1 = [[1,2,3],[4,5,6]]
lista2 = copy.deepcopy(lista1)
lista2[0][1] = 10
print(lista1, lista2) # output : [[1,2,3],[4,5,6]] [[10,2,3],[4,5,6]]
```
# Metodi
[[C#Funzioni]]
Per creare un main come in [[C]] seguiamo la seguente sintassi:
```
if __name__ == "main":
	[...]
```

se la funzione non ha ritorno è una procedura
[[Metodi in python]]
- `print()`
	parametro end=' '
- `input()`
- `for i in range()`
	- all(iterabile): si utilizza per verificare se la condizione sia valida per OGNI elemento dell'iterabile
	- any(iterabile): si utilizza per verificare se la condizione sia valida per ALMENO un elemento dell'iterabile
- `isinstance(oggetto, tipo)`
	verifica se `oggetto` è di tipo `tipo`
- `abs(num)`
	restituisce il valore assoluto di `num`

### Passaggio delle variabili alle funzioni
i passaggi sono effettuati per valore non per riferimento

il passaggio delle variabili nelle funzioni è per valore, quindi viene copiato il puntatore, solo che se modifico il valore puntato all'interno della variabile, essendo il valore nell'heap immutabile, la variabile non cambia globalmente, quindi la variabile della funzione cambia il suo indirizzo e punterà al nuovo valore dell'heap, ma al di fuori della funzione la variabile conterrà il puntatore alla vecchia variabile.

Se volessimo impostare dei valori di default ai parametri basterà utilizzare l'=, però i parametri alla destra di un parametro a cui abbiamo settato dei valori di default dovranno avere anch'essi dei valori di default
```
def __init__(self, nome = "", cognome = ""):
	self.nome = nome
	self.cognome = cognome
```

Python però una volta richiamato il metodo creerà solamente 1 volta la cella di memoria e quindi il valore assegnato come parametro assegnando un puntatore a quel parametro ogni volta che riutilizziamo il metodo. Questo normalmente non risulta come un problema in quanto modificando il valore puntato, se questo è mutabile, viene allocata nuova memoria per allocare il prossimo valore.
Impostando delle liste come parametri di default però dobbiamo considerare che questi sono oggetti mutabili, quindi modificando la lista sarà modificata per tutti gli oggetti che contengono questo parametro.
Per ovviare a questo problema possiamo impostare il parametro di default a None e successivamente all'interno del metodo assegnare la lista che vogliamo utilizzare come parametro di default preceduta da un if, che verifica se il valore non è stato assegnato.

```
class Persona:
	def __init__(self, nome = "", età = 0, numeri = None)
		self.nome = nome
		self.cognome = cognome
		if numeri is None
			self.numeri = [1,2,3]
		else:
			self.numeri = numeri
```

### Funzioni ricorsive
[[4. Programmazione logica#Notazione testa-coda|Notazione testa-coda]]
inviare alla ricorsione la lista senza il primo elemento è meno efficiente di passare insieme alla funzione l'indice %%vedi stringa_ric.py%%

utilizzare il metodo pop (senza argomenti) per eliminare l'ultimo elemento invece risulta più efficiente, in quanto viene eliminato l'ultimo elemento, senza creare una nuova lista. Se usassi invece il pop con un argomento, magari con il primo elemento della lista è ugualmente inefficiente, in quanto python dovrà comunque effettuare lo shift della lista rimanente.

%%guarda esercizi_07_02_2025.py per altri tipi di ricorsione con metodi pop e append%%

#### Ottimizzazioni di python
In python è possibile ottimizzare le funzioni ricorsive con dei semplici accorgimenti, che hanno fondamento nel comportamento delle funzioni nello stack.
In questa parte di memoria infatti ogni volta che un metodo richiama un metodo ricorsivo nello stack viene allocata tanta memoria quanta ne ha bisogno il metodo, che a sua volta richiamerà ancora se stesso allocando nuova memoria.
Questo però non avviene se il risultato della ricorsione è semplicemente un `return` con la ricorsione, in quel caso infatti per ottimizzare il processo la locazione di memoria del metodo chiamante viene sostituito dal metodo richiamato.
Per ottenere questo possiamo per esempio passare il risultato dell'operazione come parametro.

*es.*
Versione non ottimizzata:
```
def somma(self):
	return self._somma_da(self._testa)
def _somma_da(self, nodo):
	if nodo is None:
		return 0
	return nodo.info + self._somma_da(nodo.successivo)
```
Versione ottimizzata:
```
def somma(self):
	return self._somma_da_v2(self._testa, 0)
def _somma_da_v2(self, nodo, sommaCorrente):
	if nodo is None:
		return sommaCorrente
	return self._somma_da_v2(nodo.successivo, sommaCorrente + nodo.info)
```
### Conversione universale da metodi ricorsivi ad iterativi
*es. visita in ordine*
Come detto in precedenza ogni metodo creato ricorsivamente ha un suo corrispettivo iterativo e viceversa.
Se io volessi passare da un metodo ricorsivo ad un metodo iterativo un metodo relativamente semplice e generale prevede l'utilizzo di una [[Linked lists#Uso della lista concatenata come pila/coda|linked list come pila]] per poter simulare ciò che avviene nello stack durante l'esecuzione di metodi ricorsivi.
Questo avviene creando appunto una pila che conterrà i nodi della lista con associata una variabile booleana che ci permetterà di capire se quel nodo vada "esplorato" o stampato e gli elementi verranno aggiunti alla pila #visita_in_ordine (SX - N - DX). Se invece effettuassi una #visita_in_ordine_inverso (DX - N - SX) otterrei una lista in ordine decrescente.
$\neq$ #visita_preordine (N - SX - DX)
$\neq$ #verifica_postordine (SX - DX - N)
Nella pila va messo per primo l'elementi che va visitato per ultimo (essendo la pila come lo stack last in first out).
Vediamo per esempio la creazione di un metodo che stampa un [[Albero binario di ricerca#Albero binario di ricerca|albero binario di ricerca]] in ordine in modo iterativo:
![[Pasted image 20250417172310.png| center | 300]]
![[Pasted image 20250417173215.png| center | 400]]
ottenendo infine in output:
4 10 12 15 17 40

Questa soluzione risulta essere leggermente migliore essendo lo spazio occupato dai record di attivazione è maggiore rispetto ai record della linked list, nonostante il numero di record sia uguale.
# Classi
una variabile caratterizzata da un insieme di valori (non solo variabili, ma anche metodi)
```
class Persona:
	
```
Una nuova classe viene definita dalla keyword **class** e una volta definito un nome per la classe possiamo inserire al suo interno tutti metodi che la caratterizzano a cui passiamo l'oggetto stesso tramite la keyword `self`
## Dunder methods
Per **dunder methods** intendiamo tutti quei metodi di sistema
### costruttore
Con questo metodo definiamo cosa debba accadere nel momento in cui creiamo un nuovo oggetto di tipo Persona.
Riceve come parametro `self` (l'oggetto stesso) e i vari elementi da assegnare ai campi della classe.
I campi creati all'interno del costruttore spesso vengono intesi come elementi che andranno modificati solo in casi eccezionali tramite [[C#Dot notation|dot notation]], infatti normalmente utilizziamo le [[#metodi di manipolazione]]. In casi come questo il nome che diamo al campo della classe viene preceduto da `_`
Questa è solo buona norma di scrittura del codice.
Inoltre all'interno di questo metodo possiamo mettere delle condizioni per il quale ha effetto la definizione di determinati campi oppure no, per esempio per dare un limite agli anni di età di una persona come nell'esempio.

```
class Persona:
	def __init__(self, nome, età):
		self._nome = nome
		if età < 130:
			self._età = età
		else:
			self._età = 0
```
### Stringhe
Se utilizziamo un oggetto di tipo classe come una stringa normalmente viene (per esempio stampato) preso in considerazione il puntatore alla locazione di memoria che contiene l'oggetto indicato dalla variabile, in modo tale da avere la minima ambiguità.
Se invece vogliamo che venga stampato un effettivo valore dobbiamo stabilire come esso venga trattato da python.
Per farlo creiamo dei metodi che prendono come parametro `self` e restituiscono una stringa composta dei campi dell'oggetto. Per creare la stringa possiamo usare sia la concatenazione con + che con string formatting.
Abbiamo due dunder methods a disposizione
#### Representation method
principalmente utilizzato per le fasi di debugging, per una rappresentazione **non ambigua**, solitamente formattato come segue:
```
class Persona:
	[...]
	def __repr__(self):
		return f"Persona({self._nome}, {self._età})"
```
#### String method
Utilizzato per le funzioni in uscita come `print()`, per presentare all'utente l'oggetto, quindi verranno aggiunte più informazioni, con l'obbiettivo di una maggiore leggibilità
```
class Persona:
	[...]
	def __str__(self):
		return f"Nome: {self._nome}\tetà: {self._età}"
```
### Operatori algebrici
Dopo aver creato la classe dobbiamo anche definire il suo comportamento durante l'utilizzo di operatori algebrici.
#### Equal
Senza definire questo dunder method il confronto avverrà sul puntatore.
Sovrascriviamo il funzionamento dell'operatore `==`, passando alla funzione `__eq__` il parametro `self` e `other` che rappresentano i due numeri da confrontare, il primo passo è verificare se il parametro `other` è un valore di tipo `NONE` o di un tipo diverso da `Persona` tramite l'uso del metodo `isinstance()`, in questi casi restituiamo direttamente `False`. In caso contrario continuiamo con l'esecuzione di un confronto del puntatore dei due oggetti utilizzando l'operatore `is` e in caso di uguaglianza restituiamo `True`. Infine se anche questo confronto non è entrato in funzione confrontiamo singolarmente i singoli campi degli oggetti.
```
class Persona:
	[...]
	def __eq__(self, other):
		if other == NONE or not isinstance(other, Persona):
			return False
		if other is self:
			return True
		return self._nome == other._nome and self._età == other._età
```
#### Altri operatori
Analogamente a quanto avviene per l'uguaglianza possiamo ridefinire tutti gli altri operatori algebrici.
## metodi di manipolazione
Per agire direttamente sui campi della classe (essendo sconsigliata la dot notation per la manipolazione) creiamo dei metodi apposta per la modifica dei valori contenuti nei campi o per l'estrazione dei dati.
### get()
Utilizzata per estrarre dati senza utilizzare la dot notation
```
class Persona:
	[...]
	def get_nome(self):
		return self._nome
	def get_età(self):
		return self._età
```
### set()
Utilizzata per modificare il valore del campo con un nuovo valore passato come parametro
```
class Persona:
	[...]
	def set_nome(self, nome):
		self._nome = nome
	def set_età(self, età):
		if età < 130:
			self._età = età
```
## Static method
Se voglio definire dei metodi inerenti alla classe di appartenenza, ma che non prendono come parametro `self` sarà sufficiente precedere alla definizione della funzione la keyword `@staticmethod`. Questo tipo di stesura del codice sarà molto utile nella [[#Suddivisione in più file|creazione di file contenenti solo delle classi]].

```
class Persona:
	[...]
	@staticmethod
	def leggiPersona():
		nome = input("Inserire un nome: ")
		età = int(input("Inserire un età: "))
		return Persona(nome, età)
```
# Suddivisione in più file
Se noi volessimo creare dei file esclusivamente per la creazione di classi in modo tale da dividere la creazione di queste classi dal main andremo a creare un file apposito che poi verrà aggiunto al main tramite la keyword `import` seguita dal nome del programma su cui è stata definita la classe.

Se questo avviene, al momento dell'esecuzione python per prima cosa richiamerà l'interprete che genererà il [[Concetti di base#Interpreti|bytecode]] del file contenente la classe e lo inserirà in una nuova cartella di cache. Questo perché si dà per scontato che la maggior parte delle modifiche a questo punto della stesura avverranno sul main e non sul programma accessorio contenente le classi.
In questo modo quindi l'esecuzione sarà più rapida, non dovendo reinterpretare ogni run la porzione di codice contenente la definizione della classe.

# Strutture
![[Linked lists#Linked lists|Linked lists]]
![[Albero binario di ricerca#Albero binario di ricerca|Albero binario di ricerca]]
