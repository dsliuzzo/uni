#fondamenti2 
#appunti
# Albero binario di ricerca
[[Strutture dati#Binary search tree - BST]]
>[!important] Una struttura composta da nodi che rispettano la seguente proprietà: per ogni nodo il **sottoalbero** di sinistra contiene solo elementi minori uguali e il **sottoalbero** di destra contiene solo elementi maggiori uguali

La struttura ad albero è una struttura dinamica concettualmente molto simile alle [[Linked lists]] (intrinsecamente ricorsiva), in quanto composta anch'essa da nodi che contengono un valore e puntatori all'elemento successivo. Nel caso della struttura ad albero i puntatori sono al più due e verranno chiamati **figli**, mentre il contenuto effettivo del nodo verrà chiamato **padre**.
Questa composizione ci permette di avere i vantaggi di aggiunta di dati molto efficiente delle linked lists, ma anche la ricerca di elementi specifici all'interno della struttura con una complessità di solo $\log_2n$.
![[Pasted image 20250406183645.png|center]]

L'intera struttura quindi sarà composta da due classi:
- quella principale, l'albero stesso che conterrà la **radice** (il nodo iniziale) e la cardinalità (il numero di nodi presenti nella struttura)
- I nodi, composti da tre oggetti:
	- il valore contenuto nel nodo (padre)
	- il puntatore al nodo successivo sinistro (figlio sinistro)
	- il puntatore al nodo successivo destro (figlio destro)
Il posizionamento degli elementi all'interno della lista non avviene in modo casuale, ma in modo ordinato (un po' come avviene nell' [[Ricerca|algoritmo di ricerca binaria]]), pertanto risulta molto efficiente nella creazione di **elenchi ordinati**.
- I figli sinistri saranno $<=$ del padre
- i figli destri saranno $>=$ del padre
In questo modo nel caso peggiore il numero di confronti da fare nella ricerca sarà pari al livello della struttura.

Se un nodo non ha figli i puntatori punteranno a None
### Cardinalità e livelli
>[!info] Livelli
>Per **numero di livelli** intendiamo il numero di "piani" che ci sono nell'albero e nel migliore dei casi è uguale a $\log_2n$, questo perché ogni livello raddoppia il numero di nodi (se riempiti)

Nei casi peggiori invece sarebbe come avere una normale linked list.
Dipende tutto dal modo in cui disponiamo gli elementi all'interno dell'albero. Il modo più efficiente sarebbe scegliere di iniziare ad inserire gli elementi dal punto medio.