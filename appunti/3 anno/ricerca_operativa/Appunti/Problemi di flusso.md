#ricerca_operativa 
#appunti
# Cenni di teoria dei grafi
Per la teoria dei grafi vedi gli appunti di ASD: [[Strutture dati#Grafi|grafi]], [[Strutture dati#Rappresentazione|rappresentazione]], [[Strutture dati#Cammini|cammini]] e [[Algoritmi#^albero-ricoprente|albero ricoprente]].

Rispetto agli appunti di ASD, nelle slide ci sono queste differenze.
## Grafi, nodi, archi
Il grafo si scrive $G = \langle V, E \rangle$ con $E \subseteq V \times V$ (come in [[Strutture dati#Rappresentazione|ASD]]), assumendo entrambi gli insiemi finiti:
- $|V| = m$, cioè $V = \{v_1, v_2, \dots, v_m\}$
- $|E| = n$, cioè $E = \{e_1, e_2, \dots, e_n\}$

>[!warning] Notazione invertita rispetto ad ASD
>In [[Strutture dati#Rappresentazione|ASD]] si usa $|V| = n$ e $|E| = m$, qui è il contrario.
>Il motivo: nei problemi di flusso i **vincoli** sono associati ai **nodi** (conservazione del flusso) e le **variabili decisionali** agli **archi** (il flusso $f_{ij}$). Con $|V| = m$ e $|E| = n$ la matrice dei vincoli resta $A \in \mathbb{R}^{m \times n}$ ($m$ vincoli, $n$ variabili) come in tutta la PL vista finora, quindi conviene tenere la notazione di ricerca operativa e adattare quella di ASD.
>Di conseguenza la matrice di incidenza è $m \times n$ (in ASD $n \times m$) e in un albero vale $n = m - 1$.

I grafi possono essere rappresentati graficamente associando a ciascun nodo un punto in $\mathbb{R}^2$, e a ogni arco $e = (v_i, v_j)$ un segmento (o una curva) che collega $v_i$ a $v_j$.
Spesso semplificheremo la notazione utilizzando gli indici dei nodi per rappresentare $V$, quindi denoteremo con $e = (i,j)$ l'arco $e = (v_i, v_j)$.

>[!check] Esempio
>$$
>V = \{1, 2, 3, 4, 5\} \qquad E = \{e_1, e_2, e_3, e_4, e_5, e_6\} = \{(1,2), (2,3), (1,5), (3,5), (3,4), (4,5)\}
>$$
>![[Problemi di ottimizzazione-RO37-grafo.svg|center|300]]

Consideriamo un grafo $G = \langle V, E \rangle$ (nodi adiacenti e arco incidente come in [[Strutture dati#Grafi|ASD]])
- Dato un arco $e = (v_i, v_j) \in E$, i nodi $v_i$ e $v_j$ si dicono **estremi** di $e$
- Due **archi** si dicono adiacenti se hanno un estremo in comune
- Si dice **loop** un arco che ha i due estremi coincidenti
- Un grafo si dice **semplice** se non contiene loop e se per ogni coppia di nodi esiste al più un arco che li congiunge

>[!check] Esempio
>Nel grafo dell'esempio precedente:
>- i nodi 2 e 3 sono estremi di $e_2 = (2,3)$, e l'arco $e_2$ è incidente sui nodi 2 e 3
>- i nodi 4 e 5 sono adiacenti
>- gli archi $e_3$ ed $e_4$ sono adiacenti
>- il grafo $G$ non contiene loop e per ogni coppia di nodi esiste al massimo un arco, quindi $G$ è un grafo semplice

### Grafi orientati e non orientati
Per la definizione vedi [[Strutture dati#Grafi|grafi orientati e non orientati]]: nelle slide il grafo non orientato ($(i,j) = (j,i)$) è detto anche **simmetrico**.

Per un arco orientato $(i,j)$, si dice che $i$ è la **coda** e $j$ è la **testa**.

>[!check] Esempio (grafo orientato)
>$$
>V = \{1, 2, 3, 4, 5\} \qquad E = \{e_1, e_2, e_3, e_4, e_5, e_6\} = \{(1,2), (2,3), (1,5), (3,5), (3,4), (4,5)\}
>$$
>![[Problemi di ottimizzazione-RO37-grafo-orientato.svg|center|300]]

>[!check] Esempio (rappresentazione orientata di un grafo non orientato)
>$$
>V = \{1, 2, 3, 4, 5\} \qquad E = \{e_1, \dots, e_{12}\} = \left\{\begin{array}{l}(1,2), (2,3), (1,5), (3,5), (3,4), (4,5), \\ (2,1), (3,2), (5,1), (5,3), (4,3), (5,4)\end{array}\right\}
>$$
>![[Problemi di ottimizzazione-RO37-grafo-bidirezionale.svg|center|340]]

Consideriamo un grafo **non orientato** $G = \langle V, E \rangle$
- Si definisce **intorno** di un nodo $v \in V$ l'insieme $N(v)$ costituito da tutti i nodi adiacenti a $v$
- Un nodo $v$ si dice **isolato** se $N(v) = \emptyset$
- Si definisce **stella** $\delta(v)$ di $v$ in $G$ l'insieme degli archi incidenti su $v$
- Il [[Strutture dati#Grafi|grado]] $d(v)$ di un nodo $v$ è la cardinalità dell'insieme $\delta(v)$

>[!attention] Attenzione
>In ASD $\delta$ indica il **grado**, qui $\delta(v)$ è la **stella** (insieme di archi) e il grado si scrive $d(v)$.

Nel grafo non orientato dell'esempio: $N(3) = \{2, 4, 5\}$, $d(2) = 2$

Consideriamo un grafo **orientato** $G = \langle V, E \rangle$
- Si definisce **stella entrante** di $v$ in $G$ l'insieme degli archi entranti in $v$
- Si definisce **stella uscente** di $v$ in $G$ l'insieme degli archi uscenti da $v$
- Si definisce **sorgente** un nodo con soli archi uscenti
- Si definisce **pozzo** un nodo con soli archi entranti

Nel grafo orientato dell'esempio: nodo sorgente $= 1$, nodo pozzo $= 5$

>[!question] Osservazione
>Nelle slide $N(3)$, $d(2)$, il nodo sorgente e il nodo pozzo sono lasciati da completare ("$\dots$"): i valori sopra sono ricavati dal grafo dell'esempio.

## Rappresentazioni matriciali
Per le definizioni vedi [[Strutture dati#Matrice di adiacenza|matrice di adiacenza]] e [[Strutture dati#Matrice di incidenza|matrice di incidenza]] di ASD. Con la notazione di RO le dimensioni sono:
- matrice di adiacenza: $A \in \{0,1\}^{m \times m}$
- matrice di incidenza: $A \in \{0,1\}^{m \times n}$ (non orientato), $A \in \{0,1,-1\}^{m \times n}$ (orientato)

>[!important] Grafo orientato: matrice di incidenza
>$$
>a_{ik} = \begin{cases} 1 & \text{se l'arco } e_k \text{ è uscente dal nodo } i \\ -1 & \text{se l'arco } e_k \text{ è entrante nel nodo } i \\ 0 & \text{altrimenti} \end{cases}
>$$
>$$
>A = \begin{pmatrix}
>1 & 0 & 1 & 0 & 0 & 0 \\
>-1 & 1 & 0 & 0 & 0 & 0 \\
>0 & -1 & 0 & 1 & 1 & 0 \\
>0 & 0 & 0 & 0 & -1 & 1 \\
>0 & 0 & -1 & -1 & 0 & -1
>\end{pmatrix}
>$$

![[Problemi di ottimizzazione-RO37-grafo-orientato.svg|center|300]]

>[!check] Esempio 1
>![[Problemi di ottimizzazione-RO37-incidenza-esempio1.svg|center|320]]
>Matrice di incidenza
>$$
>\begin{array}{c} \\ \\ \text{①} \\ \text{②} \\ \text{③} \\ \text{④} \end{array}
>\begin{array}{cccc}
>e_1 & e_2 & e_3 & e_4 \\
>(2,1) & (1,3) & (2,3) & (1,4) \\
>-1 & 1 & 0 & 1 \\
>1 & 0 & 1 & 0 \\
>0 & -1 & -1 & 0 \\
>0 & 0 & 0 & -1
>\end{array}
>$$

>[!check] Esempio 2
>![[Problemi di ottimizzazione-RO37-incidenza-esempio2.svg|center|320]]
>Matrice di incidenza
>$$
>\begin{array}{c} \\ \\ \text{①} \\ \text{②} \\ \text{③} \\ \text{④} \\ \text{⑤} \end{array}
>\begin{array}{cccccccc}
>e_1 & e_2 & e_3 & e_4 & e_5 & e_6 & e_7 & e_8 \\
>(1,2) & (4,1) & (2,4) & (2,3) & (3,4) & (4,5) & (5,3) & (3,5) \\
>1 & -1 & 0 & 0 & 0 & 0 & 0 & 0 \\
>-1 & 0 & 1 & 1 & 0 & 0 & 0 & 0 \\
>0 & 0 & 0 & -1 & 1 & 0 & -1 & 1 \\
>0 & 1 & -1 & 0 & -1 & 1 & 0 & 0 \\
>0 & 0 & 0 & 0 & 0 & -1 & 1 & -1
>\end{array}
>$$

Il rango della matrice di incidenza non è massimo, sommando tutte le righe tra loro otteniamo il vettore nullo, quindi le righe non sono tutte linearmente indipendenti.
## Sottografi
Consideriamo un grafo $G = \langle V, E \rangle$
>[!important] Sottografo
>Si definisce **sottografo** di $G$ un grafo $G' = \langle V', E' \rangle$ tale che
>$$
>V' \subseteq V, \quad E' \subseteq E, \quad E' \subseteq V' \times V'
>$$

>[!important] Sottografo ricoprente
>Si definisce **sottografo ricoprente** di $G$ un grafo $G' = \langle V', E' \rangle$ tale che
>$$
>V' = V, \quad E' \subseteq E
>$$

>[!important] Sottografo indotto
>Si definisce **sottografo indotto** di $G$ un grafo $G' = \langle V', E' \rangle$ tale che
>$$
>(i,j) \in E' \iff i,j \in V',\ (i,j) \in E
>$$

>[!check] Esempio
>$$
>G = \langle \{1,2,3,4,5\}, \{(1,2), (2,3), (1,5), (3,5), (3,4), (4,5)\} \rangle
>$$
>- sottografo: $G' = \langle \{2,3,4,5\}, \{(2,3), (3,4), (4,5)\} \rangle$
>- sottografo ricoprente: $G' = \langle \{1,2,3,4,5\}, \{(2,3), (1,5), (3,5), (4,5)\} \rangle$
>- sottografo indotto: $G' = \langle \{2,3,4,5\}, \{(2,3), (3,5), (3,4), (4,5)\} \rangle$
>
>![[Problemi di ottimizzazione-RO37-sottografi.svg|center|620]]

## Cammini, cammini orientati, cicli
Consideriamo un grafo orientato o non orientato $G = \langle V, E \rangle$
>[!important] Cammino
>Un **cammino** in $G$ è una sequenza finita e non vuota di nodi alternati ad archi, che inizia e termina con un nodo
>$$
>W = \{v_{j_0}, e_{h_1}, v_{j_1}, e_{h_2}, v_{j_2}, \dots, v_{j_{k-1}}, e_{h_k}, v_{j_k}\}
>$$
>con $k \geq 0$, tale che $e_{h_i}$ è incidente sui nodi $v_{j_{i-1}}$ e $v_{j_i}$. I nodi $v_{j_0}$ e $v_{j_k}$ si dicono **estremi** del cammino.

- Un cammino **semplice** ha tutti i nodi e gli archi distinti, la sua **lunghezza** è data dal numero di archi che lo compongono ([[Strutture dati#Cammini|distanza]] come in ASD)
- In un grafo orientato un cammino si dice **orientato** se $(v_{j_{i-1}}, v_{j_i}) \in E$ per ogni $i = 1, \dots, k$
- Un cammino si dice **chiuso** se i suoi estremi coincidono

>[!attention] Attenzione
>In [[Strutture dati#Cammini|ASD]] un cammino in un grafo orientato deve seguire il verso degli archi; qui invece basta che ogni arco sia **incidente** sui due nodi consecutivi, quindi può essere percorso anche al contrario. Il cammino di ASD corrisponde al **cammino orientato**.

>[!important] Ciclo
>Un cammino chiuso
>$$
>C = \{v_{j_0}, e_{h_1}, v_{j_1}, e_{h_2}, v_{j_2}, \dots, v_{j_{p-1}}, e_{h_p}, v_{j_0}\}
>$$
>si dice **ciclo** se
>$$
>W = \{v_{j_0}, e_{h_1}, v_{j_1}, e_{h_2}, v_{j_2}, \dots, v_{j_{p-1}}\}
>$$
>è un cammino semplice.
>In un grafo orientato un cammino orientato chiuso $C$ si dice **ciclo orientato** se $W$ è un cammino orientato semplice.

>[!check] Esempi
>![[Problemi di ottimizzazione-RO37-cammini.svg|center|480]]
>- **cammino** $W = \{1, e_1, 2, e_2, 3, e_5, 4\}$: è semplice e ha lunghezza 3
>- **cammino** nel grafo orientato $W = \{1, e_3, 5, e_4, 3, e_5, 4\}$: è un cammino ma **non orientato**, perché $e_4 = (3,5)$ viene percorso da 5 a 3
>
>![[Problemi di ottimizzazione-RO37-cicli.svg|center|480]]
>- **ciclo** $C = \{1, e_1, 2, e_2, 3, e_4, 5, e_3, 1\}$
>- **ciclo** nel grafo orientato $C = \{3, e_5, 4, e_6, 5, e_4, 3\}$: è un ciclo ma **non orientato**, perché $e_4 = (3,5)$ viene percorso da 5 a 3

>[!question] Osservazione
>Nelle slide 32–33 il cammino (o ciclo) è quello con gli archi **neri spessi**, mentre in rosso sono segnati i nodi e gli archi che **non** ne fanno parte. Negli SVG è il contrario: è evidenziato il cammino (o ciclo). Le sequenze $W$ e $C$ sono ricavate dalle figure, le slide mostrano solo il disegno.

## Grafi connessi, alberi
Consideriamo un grafo orientato o non orientato $G = \langle V, E \rangle$
- Il grafo $G$ si dice **connesso** se esiste un cammino tra ogni coppia di suoi nodi
- Il grafo $G$ si dice **aciclico** se non contiene cicli
- Il grafo orientato $G$ si dice **fortemente connesso** se esiste un cammino orientato tra ogni coppia di suoi nodi
- Il grafo $G$ si dice **albero** se è connesso e aciclico
- Si chiama **foglia** un nodo di un albero con grado pari a 1 (in ASD la foglia è un [[Strutture dati#Alberi|nodo senza figli]], perché l'albero ha una radice)
- Un sottografo ricoprente di $G$ che sia connesso e aciclico si dice [[Algoritmi#^albero-ricoprente|albero ricoprente]] di $G$

>[!attention] Attenzione
>Siccome il cammino può percorrere gli archi al contrario, per un grafo orientato "connesso" qui corrisponde a [[Strutture dati#Grafi|debolmente connesso]] di ASD.

>[!info] Caratterizzazione degli alberi
>Sia $G = \langle V, E \rangle$ un grafo con $|V| = m$ e $|E| = n$. Le seguenti affermazioni sono equivalenti:
>1. $G$ è un albero;
>2. $G$ è connesso e contiene $n = m - 1$ archi;
>3. $G$ è aciclico e contiene $n = m - 1$ archi;
>4. esiste uno ed un solo cammino che connette ciascuna coppia di nodi in $G$;
>5. l'eliminazione di un qualsiasi arco di $G$ rende il grafo risultante sconnesso;
>6. l'aggiunta di un qualunque arco crea uno ed un solo ciclo.

>[!check] Esempi
>![[Problemi di ottimizzazione-RO37-connesso-albero.svg|center|480]]

# Problemi di flusso su reti
Molti problemi di ottimizzazione sono caratterizzati da una struttura di grafo: in alcuni casi la struttura è naturale,
- reti di trasporto
- reti idrauliche
- reti elettriche
- [[Protocolli#Grafi|reti di telecomunicazioni]]
- $\vdots$

in altri casi emerge per effetto di tecniche di modellazione.

>[!important] Rete
>Con il termine **rete** si fa riferimento a un **grafo orientato** $G = \langle V, E \rangle$ che sia **pesato**, cioè ai cui nodi ed archi siano associati valori numerici.

In generale, in una rete gli archi sono interpretabili come canali attraverso cui fluiscono dei materiali.
I pesi degli archi rappresentano usualmente delle **capacità** e dei **costi**, mentre i pesi dei nodi rappresentano le quantità di materiale che entrano nella rete in quei nodi, o che ne escono.
In ASD i [[Strutture dati#Grafi pesati sugli archi|grafi pesati]] hanno i pesi solo sugli archi (funzione $\lambda$), e tra i casi d'uso c'è già la rete idrica con la portata delle tubature come peso, cioè la capacità. Divergenza, flusso e conservazione del flusso lì non ci sono.

>[!important] Divergenza
>Ad ogni nodo $i \in V$ è associato un valore reale (**divergenza**) $b_i$, che può essere:
>- **negativo**: rappresenta la quantità di materiale che esce dalla rete al nodo $i$; $b_i$ è allora detto **domanda** del nodo, ed il nodo viene detto **destinazione**, **pozzo** o **nodo di output**
>- **positivo**: rappresenta la quantità di materiale che entra nella rete al nodo $i$; $b_i$ è allora detto **offerta** del nodo, ed il nodo viene detto **origine**, **sorgente** o **nodo di input**
>- **nullo**: $i$ non ha interazione con l'esterno e viene detto **nodo di trasferimento** (o di transito)

>[!attention] I concetti di sorgente e pozzo nella divergenza sono diversi dagli stessi concetti in teoria dei grafi

Ad ogni arco $(i,j)$ sono associati un **costo** $c_{ij}$, che indica il costo che viene pagato per ogni unità di materiale che attraversi l'arco, e le **capacità inferiore** $l_{ij}$ e **superiore** $u_{ij}$, che indicano, rispettivamente, le quantità di materiale minima e massima che possono attraversare l'arco.

Nei problemi di flusso l'offerta globale, cioè la somma di tutte le offerte, è uguale alla domanda globale, cioè alla somma, cambiata di segno, di tutte le domande
$$
\sum_{i \in V : b_i > 0} b_i = - \sum_{i \in V : b_i < 0} b_i
$$

>[!info] Variabili decisionali
>Ad ogni arco $(i,j)$ è associato un **flusso** $f_{ij}$ che soddisfa i **vincoli di conservazione del flusso**
>$$
>{\color{#e07b6a} \sum_{j : (i,j) \in E} f_{ij}} - {\color{#6a9ee0} \sum_{j : (j,i) \in E} f_{ji}} = b_i \qquad \forall i \in V
>$$
>![[Problemi di flusso-conservazione-flusso.svg|center|260]]
>cioè la differenza tra la somma dei flussi uscenti dal nodo $i$ e la somma dei flussi entranti nel nodo $i$ deve eguagliare la divergenza del nodo $i$.
