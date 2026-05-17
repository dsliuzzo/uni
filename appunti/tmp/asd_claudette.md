```
def max_sum(v,i,j):
	if i == j:
		return v[i]
	m = (i+j)//2
	maxLL = float("-inf")
	sumLL = 0
	for k in range(m, i-1, -1):
		sumRR += v[k]
		maxRR = max(maxRR, sumRR)
	maxL = max_sum(v,i,m)
	maxR = max_sum(v,m+1,j)
	return(maxL,maxR,maxLL+maxRR)
		
```
**

## Appunti: Bilanciamento in Algoritmi QuickFind (Union by Size)
### 1. L'Idea di Base e l'Obiettivo
L'obiettivo di questa tecnica è risolvere il problema del costo quadratico ($n^2$) che si presentava nella versione base (non bilanciata) del QuickFind quando eseguivamo una sequenza di operazioni `Union`.
* **La regola del bilanciamento:** Quando eseguiamo l'operazione `union(A, B)`, andiamo a modificare i puntatori (il "padre") dei nodi che appartengono all'insieme con **cardinalità minore** (l'insieme più piccolo). Questi nodi verranno staccati dalla loro vecchia radice e fatti puntare alla radice dell'insieme più grande.
* **Informazione aggiuntiva:** Per fare questo, abbiamo bisogno di mantenere un'informazione in più, ovvero la `size` (la taglia/cardinalità) sulla radice di ogni insieme. Quando facciamo un'unione, aggiorniamo la `size` del nuovo insieme sommando la taglia di quello piccolo a quello grande.
### 2. Analisi del Caso Peggiore e Tecnica dei Crediti
* Nella versione non bilanciata, il costo totale poteva arrivare a $n^2$.
* Con il bilanciamento, il costo nel caso peggiore per una *singola* unione (quando i due insiemi hanno esattamente la stessa taglia) è $n/2$.
* Usando la **tecnica dei crediti** (analisi ammortizzata), possiamo dimostrare che per fare $n - 1$ unioni (ovvero unire tutti gli elementi in un solo albero) ci bastano in totale $n \log_2 n$ crediti.
### 3. Dimostrazione: Perché costa $n \log_2 n$? (La parte scritta a mano)
La dimostrazione si basa sul capire **quante volte un singolo elemento $x$ può essere spostato** (cioè quante volte il suo "padre" viene cambiato) durante tutta la vita dell'algoritmo.
**Passaggio 1: Raddoppio della dimensione**
Se un elemento $x$ viene spostato durante un'`union(Sx, Sy)`, significa per forza di cose che il suo insieme di partenza ($S_x$) era più piccolo o uguale a quello di destinazione ($S_y$). 
Quindi sappiamo che: 
$|S_x| \leq |S_y|$
La dimensione del nuovo insieme unito sarà:
$$|S_x \cup S_y| = |S_x| + |S_y|$$
Poiché $|S_y| \geq |S_x|$, possiamo dire che la nuova dimensione è maggiore o uguale al doppio dell'insieme di partenza:
$$|S_x| + |S_y| \geq |S_x| + |S_x| = 2|S_x|$$
**Conclusione fondamentale:** Ogni volta che un elemento $x$ subisce uno spostamento, l'insieme a cui appartiene **almeno raddoppia** la sua dimensione.
**Passaggio 2: La tabella degli spostamenti**
Vediamo cosa succede alla dimensione dell'insieme di un elemento $x$ in base al numero di spostamenti che subisce:
| Numero Spostamenti di $x$ | Dimensione dell'insieme ($|S_x|$) |

| :--- | :--- |

| 0 | $\geq 1$ |

| 1 | $\geq 2$ |

| 2 | $\geq 4$ |

| 3 | $\geq 8 = 2^3$ |

| ... | ... |

| $k$ | $\geq 2^k$ |

**Passaggio 3: Il limite massimo**
Qual è il numero massimo di spostamenti $k$ che un elemento può subire?

La dimensione massima che un insieme può raggiungere è $n$ (quando tutti gli elementi del problema sono uniti in un solo insieme). 

Quindi, imponiamo che la dimensione dopo $k$ spostamenti sia al massimo $n$:

$$2^k = n$$

  

Applicando il logaritmo in base 2 da entrambe le parti, otteniamo il numero massimo di spostamenti per singolo elemento:

$$k = \log_2 n$$

  

### Conclusione Finale 

Se **ogni singolo elemento** può essere spostato al massimo $\log_2 n$ volte, e in totale abbiamo $n$ elementi, il costo totale per spostare tutti gli elementi, a prescindere dall'ordine in cui facciamo le unioni, sarà limitato superiormente da:

$$n \log_2 n$$

  

Questo dimostra il drastico miglioramento delle prestazioni rispetto al costo quadratico dell'algoritmo non bilanciato.

**