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
>
>Il punto 5 dice che **un albero è un grafo connesso minimale**: nessun arco si può togliere senza perdere la connessione.

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
>dove $b_i$ è un domanda/offerta al nodo che non fa parte del normale flusso, è una interazione con l'esterno.
>cioè la differenza tra la somma dei flussi uscenti dal nodo $i$ e la somma dei flussi entranti nel nodo $i$ deve eguagliare la divergenza del nodo $i$.

Si distinguono i seguenti casi possibili
- $b_i > 0$$$\sum_{j:(i,j) \in E} f_{ij} -\sum_{j:(j,i) \in E} f_{ji} = b_i \qquad \forall i \in V$$
- $b_i < 0$$$\sum_{j:(i,j) \in E} f_{ij} - b_i = \sum_{j:(j,i) \in E} f_{ji} \qquad \forall i \in V$$
- $b_i = 0$$$\sum_{j:(i,j) \in E} f_{ij} = \sum_{j:(j,i) \in E} f_{ji} \qquad \forall i \in V$$
# Problema del flusso di costo minimo
## Notazione e ipotesi
Consideriamo un grafo orientato $G = \langle V, E \rangle$
>[!important] Dati
>- $V = \{1, \dots, m\}$ è l'insieme dei nodi, $|V| = m$
>- $E \subseteq V \times V$ è l'insieme degli archi, $|E| = n$
>- $b \in \mathbb{R}^m$ è il vettore delle [[#Problemi di flusso su reti|divergenze]] nei nodi
>- $c \in \mathbb{R}^n$ è il vettore dei costi unitari di flusso sugli archi
>- $u_{ij}$ è la capacità su ogni arco $(i,j) \in E$

>[!info] Ipotesi
>$u_{ij}$ è sufficientemente ampia da non costituire una limitazione sul flusso che può transitare lungo l'arco $(i,j)$ per ogni $(i,j) \in E$.

**Variabili decisionali**: $f_{ij} \geq 0$ rappresenta la quantità di flusso che transita lungo l'arco $(i,j)$ per ogni $(i,j) \in E$.

>[!important] Minimum-cost flow problem (MCFP)
>$$
>(MCFP) \begin{cases}
>\min & \displaystyle\sum_{(i,j) \in E} c_{ij} f_{ij} \\
>& \displaystyle\sum_{j : (i,j) \in E} f_{ij} - \sum_{j : (j,i) \in E} f_{ji} = b_i & \forall i \in V \\
>& f_{ij} \geq 0 & \forall (i,j) \in E
>\end{cases}
>\qquad\qquad
>(MCFP) \begin{cases}
>\min & c^\top f \\
> & Af = b \\
> & f \geq 0
>\end{cases}
>$$
>- $f \in \mathbb{R}^n$ è il vettore dei flussi
>- $A \in \mathbb{R}^{m \times n}$ è la [[#Rappresentazioni matriciali|matrice di incidenza]] del grafo

^minimumcostflowdefinizione

>[!question] Osservazione
>Non usiamo la dimensione temporale, lo diamo come sotto inteso. In problemi reali si dovrebbe specificare l'unità di tempo.

>[!important] Interpretazione
>- I nodi con $b_i > 0$ sono **sorgenti** (offerta): ricevono flusso dall'esterno e lo immettono nella rete.
>- I nodi con $b_i < 0$ sono **pozzi** (domanda): assorbono flusso dalla rete.
>
>Il MCFP chiede di far transitare il flusso nella rete in modo da **consumare tutta l'offerta** e **soddisfare tutta la domanda**, con **costo complessivo minimo**.
>
>Consumare tutta l'offerta soddisfacendo tutta la domanda equivale a chiedere che la somma algebrica delle divergenze sia nulla, $\sum_{i \in V} b_i = 0$: è la [[#^proprieta2mcfp|condizione necessaria di ammissibilità]].


>[!check] Esempio: vincoli di conservazione del flusso
>È il grafo dell'[[#Rappresentazioni matriciali|esempio 2]], con le colonne etichettate dai flussi:
>![[Problemi di ottimizzazione-RO37-incidenza-esempio2.svg|center|320]]
>$$
>\begin{array}{c} \\ \text{①} \\ \text{②} \\ \text{③} \\ \text{④} \\ \text{⑤} \end{array}
>\begin{array}{cccccccc}
>f_{12} & f_{41} & f_{24} & f_{23} & f_{34} & f_{45} & f_{53} & f_{35} \\
>1 & -1 & 0 & 0 & 0 & 0 & 0 & 0 \\
>-1 & 0 & 1 & 1 & 0 & 0 & 0 & 0 \\
>0 & 0 & 0 & -1 & 1 & 0 & -1 & 1 \\
>0 & 1 & -1 & 0 & -1 & 1 & 0 & 0 \\
>0 & 0 & 0 & 0 & 0 & -1 & 1 & -1
>\end{array}
>$$
>Scriviamo i vincoli di conservazione del flusso per il nodo ③
>$$
>\sum_{j : (3,j) \in E} f_{3j} - \sum_{j : (j,3) \in E} f_{j3} = b_3
>\quad\Longrightarrow\quad
>f_{34} + f_{35} - f_{23} - f_{53} = b_3
>$$
>riscrivendoli in ordine di apparizione nella matrice equivale a
>$$
>-f_{23} + f_{34} - f_{53} + f_{35} = b_3
>$$
>cioè $a_3^\top f = b_3$, dove $a_3^\top$ è la terza riga di $A$.

La colonna di $A$ associata all'arco $(i,j) \in E$ ha un $1$ in posizione $i$ (coda) e un $-1$ in posizione $j$ (testa), quindi si può scrivere come:
$$
A_{(i,j)} = \begin{pmatrix} 0 \\ \vdots \\ 0 \\ 1 \\ 0 \\ \vdots \\ 0 \\ -1 \\ 0 \\ \vdots \\ 0 \end{pmatrix} \begin{array}{c} \\ \\ \\ i \\ \\ \\ \\ j \\ \\ \\ \phantom{0} \end{array}
= \begin{pmatrix} 0 \\ \vdots \\ 0 \\ 1 \\ 0 \\ \vdots \\ 0 \\ 0 \\ 0 \\ \vdots \\ 0 \end{pmatrix}
- \begin{pmatrix} 0 \\ \vdots \\ 0 \\ 0 \\ 0 \\ \vdots \\ 0 \\ 1 \\ 0 \\ \vdots \\ 0 \end{pmatrix}
= \hat{e}_i - \hat{e}_j
$$
dove $\hat{e}_i \in \mathbb{R}^m$ è l'$i$-esimo vettore della **base canonica**.

## Ammissibilità di (MCFP)
>[!info] Proprietà 1
>È immediato verificare che la somma delle righe di $A$ è un vettore identicamente nullo (come già visto [[#Rappresentazioni matriciali|sopra]]). Cioè, indicando con $e \in \mathbb{R}^m$ un vettore con componenti tutte pari ad 1, vale
>$$
>e^\top A = 0^\top
>$$
>da cui discende la proprietà
>$$
>rango(A) \leq m - 1
>$$

Ne deriva che [[#^minimumcostflowdefinizione|la forma compatta]] del MCFP potrebbe sembrare una forma standard ma non soddisfa le [[Problemi di ottimizzazione#Ipotesi di lavoro|ipotesi di lavoro]].

>[!info] Proprietà 2 (Condizione Necessaria di Ammissibilità)
>$$
>\Omega(MCFP) \neq \emptyset \ \Rightarrow \ e^\top b = \sum_{i \in V} b_i = 0
>$$
^proprieta2mcfp

#dimostrazione
$$
\exists \bar{f} \in \Omega(MCFP) \ \Rightarrow \ A\bar{f} = b
$$
Premoltiplichiamo per un vettore $e^\top$ (sommiamo tutti i vincoli)
$$
e^\top A \bar{f} = e^\top b \ \Rightarrow \ 0^\top \bar{f} = 0 = e^\top b
$$
Ovviamente risulta
$$
\sum_{i \in V} b_i \neq 0 \ \Rightarrow \ \Omega(MCFP) = \emptyset
$$

>[!question] Osservazione
>È la stessa condizione vista [[#Problemi di flusso su reti|sopra]]: l'offerta globale deve essere uguale alla domanda globale.

## Caratterizzazione delle basi nei problemi di flusso
**Caratterizzare** le basi vuol dire studiarne la struttura e le proprietà, per capire quali di queste possono esserci utili nella risoluzione del problema.

Riprendendo (MCFP) in forma matriciale:
$$
\begin{cases}
\min & c^\top f \\
 & \tilde{A}f = \tilde{b} \\
 & f \geq 0
\end{cases}
$$
- $f \in \mathbb{R}^n$ è il vettore dei flussi
- $A \in \mathbb{R}^{m \times n}$ è la matrice di incidenza del grafo, le cui colonne sono ordinate secondo l'ordinamento del vettore $f$
- $rango(A) \leq m - 1$
- $\sum_{i \in V} b_i = 0$ ([[#^proprieta2mcfp|condizione necessaria di ammissibilità]]): sotto questa ipotesi ogni vincolo è combinazione degli altri, quindi una riga di $A$ si può eliminare senza modificare la regione ammissibile.
- $\tilde{A}$ è la sotto matrice ottenuta eliminando una riga da $A$, e $\tilde{b}$ è il corrispondente vettore delle divergenze. Eliminare una riga da $A$ corrisponde a eliminare il **vincolo** di conservazione di un nodo, non il nodo: gli archi incidenti restano tutti come colonne di $\tilde A$.

Vogliamo caratterizzare le basi della matrice di incidenza al fine di derivare una versione ad hoc del [[Problemi di ottimizzazione#Algoritmo del simplesso|metodo del simplesso]].

Serve la [[#Grafi connessi, alberi|caratterizzazione degli alberi]] vista prima: un albero ricoprente $H = \langle V, T \rangle$ ha $|V| = m$ nodi e quindi $|T| = m - 1$ archi.

>[!info] Teorema
>Una sottomatrice quadrata di ordine $m - 1$ di $\tilde{A}$ è una **base** se e solo se le sue colonne corrispondono agli archi di un **albero ricoprente** l'insieme dei nodi $V$ del grafo.

#dimostrazione
- (ho una base $\Leftarrow$ ho un albero ricoprente) [[#Lemma 1]]: sia $H = \langle V, T \rangle$ un albero ricoprente i nodi del grafo $G$, sia $B$ la corrispondente sotto matrice quadrata di ordine $m - 1$ di $\tilde{A}$. Allora, opportunamente permutando le sue righe e le sue colonne, $B$ può essere posta in forma triangolare superiore con elementi diagonali non nulli ($\Rightarrow det(B) \neq 0$).
- (ho una base $\Rightarrow$ ho un albero ricoprente) [[#Lemma 2]]: se $B$ è una base di $\tilde{A}$, allora gli archi corrispondenti alle sue colonne formano un albero ricoprente i nodi del grafo $G$.

>[!check] Esempio di albero ricoprente e matrice di incidenza associata
>Prendiamo il grafo dell'esempio precedente e l'albero ricoprente formato dagli archi $e_1, e_3, e_4, e_6$ (in rosso)
>![[Problemi di flusso-albero-ricoprente.svg|center|320]]
>$$
>A = \begin{pmatrix}
>1 & -1 & 0 & 0 & 0 & 0 & 0 & 0 \\
>-1 & 0 & 1 & 1 & 0 & 0 & 0 & 0 \\
>0 & 0 & 0 & -1 & 1 & 0 & -1 & 1 \\
>0 & 1 & -1 & 0 & -1 & 1 & 0 & 0 \\
>0 & 0 & 0 & 0 & 0 & -1 & 1 & -1
>\end{pmatrix}
>\begin{array}{c} \text{①} \\ \text{②} \\ \text{③} \\ \text{④} \\ \text{⑤} \end{array}
>$$
>Eliminando la prima riga, corrispondente al nodo 1, otteniamo
>$$
>\tilde{A} = \begin{pmatrix}
>-1 & 0 & 1 & 1 & 0 & 0 & 0 & 0 \\
>0 & 0 & 0 & -1 & 1 & 0 & -1 & 1 \\
>0 & 1 & -1 & 0 & -1 & 1 & 0 & 0 \\
>0 & 0 & 0 & 0 & 0 & -1 & 1 & -1
>\end{pmatrix}
>\begin{array}{c} \text{②} \\ \text{③} \\ \text{④} \\ \text{⑤} \end{array}
>\qquad
>\begin{array}{c} \text{colonne: } e_1, \dots, e_8 \end{array}
>$$
>Le colonne degli archi dell'albero ($e_1, e_3, e_4, e_6$) formano
>$$
>B = \begin{pmatrix}
>-1 & 1 & 1 & 0 \\
>0 & 0 & -1 & 0 \\
>0 & -1 & 0 & 1 \\
>0 & 0 & 0 & -1
>\end{pmatrix}
>\begin{array}{c} \text{②} \\ \text{③} \\ \text{④} \\ \text{⑤} \end{array}
>\qquad
>\begin{array}{c} \text{colonne: } e_1, e_3, e_4, e_6 \end{array}
>$$
>Permutando la seconda riga con la terza otteniamo una matrice triangolare superiore
>![[Problemi di flusso-albero-ricoprente-solo.svg|center|320]]
>$$
>B = \begin{pmatrix}
>-1 & 1 & 1 & 0 \\
>0 & -1 & 0 & 1 \\
>0 & 0 & -1 & 0 \\
>0 & 0 & 0 & -1
>\end{pmatrix}
>\begin{array}{c} \text{②} \\ \text{④} \\ \text{③} \\ \text{⑤} \end{array}
>$$
>
>Per ricavare i flussi di base da questa $B$ si veda l'[[#Osservazioni|esempio nelle osservazioni]].

### Lemma 1
>[!info] Lemma 1
>Sia $H = \langle V, T \rangle$ un albero ricoprente i nodi del grafo $G$, sia $B$ la sottomatrice corrispondente di $\tilde{A}$. Allora, opportunamente permutando le sue righe e le sue colonne, $B$ può essere posta in forma triangolare superiore con elementi diagonali non nulli ($\Rightarrow det(B) \neq 0$).

#dimostrazione
La dimostrazione è per induzione su $|V|$.

**Base dell'induzione**: $|V| = 2$. Allora $|T| = 1$, ovvero l'albero ha un solo arco, con colonna, ad esempio, $(1, -1)^\top$. Rimossa una riga, si ottiene $B = [\pm 1]$ e la tesi vale.

**Passo induttivo**: per ipotesi di induzione, assumiamo che la tesi valga quando $H$ è un albero ricoprente $V$ con $|V| = k$, e dimostriamo che la tesi continua a valere per $H = \langle V, T \rangle$ con $|V| = k + 1$.

Sia dunque $H = \langle V, T \rangle$ con $|V| = k + 1$; sia $w$ una sua [[#Grafi connessi, alberi|foglia]] (collegata esclusivamente ad un altro nodo del grafo).
Rimuovendo da $H$ la foglia $w$ e l'unico arco che incide su $w$, si ottiene un sottografo di $H$ che è a sua volta un albero: $H' = \langle V', T' \rangle$, con
$$
|V'| = |V \setminus \{w\}| = k
$$
![[Problemi di flusso-lemma1-foglia.svg|center|360]]

Per l'ipotesi di induzione, la sottomatrice $B'$ di $\tilde{A}$ associata agli archi di $H'$ è triangolare superiore con elementi diagonali non nulli.
Per ottenere la matrice corrispondente all'albero $H$ basterà **orlare** $B'$ con la riga associata al nodo $w$ e la colonna associata all'arco incidente.
$$
B' = \begin{pmatrix}
\pm 1 & \cdots & \cdots & \cdot \\
 & \pm 1 & & \vdots \\
 & & \ddots & \vdots \\
 & & & \pm 1
\end{pmatrix}
\qquad
B = \begin{pmatrix}
\pm 1 & \cdots & \cdots & \cdot & {\color{#e07b6a} 0} \\
 & \pm 1 & & \vdots & {\color{#e07b6a} \vdots} \\
 & & \ddots & \vdots & {\color{#e07b6a} \mp 1} \\
 & & & \pm 1 & {\color{#e07b6a} \vdots} \\
{\color{#e07b6a} 0} & {\color{#e07b6a} 0} & {\color{#e07b6a} \cdots} & {\color{#e07b6a} 0} & {\color{#e07b6a} \pm 1}
\end{pmatrix}
$$
Nessuno degli archi di $T'$ incide sul nodo $w$; perciò, aggiungendo la nuova riga in basso e la nuova colonna a destra, la matrice $B$ sarà anch'essa triangolare superiore con elementi diagonali non nulli.

Nella nuova colonna (arco tra $w$ e il suo vicino) l'unico altro elemento non nullo è il $\mp 1$ nella riga del vicino di $w$, sopra la diagonale; la nuova riga ha zeri ovunque tranne sulla diagonale.

>[!check] Esempio (Lemma 1), radice nel nodo 5
>Selezioniamo un albero ricoprente (lo stesso di prima, archi $e_1, e_3, e_4, e_6$) e un nodo **radice** (p.es. il nodo 5), e ordiniamo i nodi secondo una **visita in ampiezza** ([[Strutture dati#Visita a ventaglio / in ampiezza|BFS]]).
>![[Problemi di flusso-albero-ricoprente.svg|center|320]]
>
>![[Problemi di flusso-albero-radice5.svg|center|180]]
>$$
>\begin{pmatrix}
>-1 & 0 & 0 & 0 \\
>1 & -1 & 0 & 0 \\
>0 & 1 & -1 & 1 \\
>0 & 0 & 1 & 0 \\
>0 & 0 & 0 & -1
>\end{pmatrix}
>\begin{array}{c} \text{⑤} \\ \text{④} \\ \text{②} \\ \text{①} \\ \text{③} \end{array}
>\qquad
>\begin{array}{c} \text{colonne: } e_6, e_3, e_1, e_4 \end{array}
>$$
>Eliminando la riga corrispondente al nodo radice otteniamo la matrice triangolare superiore.
>$$
>B = \begin{pmatrix}
>1 & -1 & 0 & 0 \\
>0 & 1 & -1 & 1 \\
>0 & 0 & 1 & 0 \\
>0 & 0 & 0 & -1
>\end{pmatrix}
>\begin{array}{c} \text{④} \\ \text{②} \\ \text{①} \\ \text{③} \end{array}
>\qquad
>\begin{array}{c} \text{colonne: } e_6, e_3, e_1, e_4 \end{array}
>$$

>[!check] Esempio (Lemma 1), radice nel nodo 2
>Stesso albero ricoprente, ma con radice nel nodo 2, e ordiniamo i nodi (secondo una visita in ampiezza).
>![[Problemi di flusso-albero-radice2.svg|center|230]]
>$$
>\begin{pmatrix}
>-1 & 1 & 1 & 0 \\
>1 & 0 & 0 & 0 \\
>0 & -1 & 0 & 1 \\
>0 & 0 & -1 & 0 \\
>0 & 0 & 0 & -1
>\end{pmatrix}
>\begin{array}{c} \text{②} \\ \text{①} \\ \text{④} \\ \text{③} \\ \text{⑤} \end{array}
>\qquad
>\begin{array}{c} \text{colonne: } (1,2), (2,4), (2,3), (4,5) \end{array}
>$$
>Eliminando la riga corrispondente al nodo radice otteniamo la matrice triangolare superiore.
>$$
>B = \begin{pmatrix}
>1 & 0 & 0 & 0 \\
>0 & -1 & 0 & 1 \\
>0 & 0 & -1 & 0 \\
>0 & 0 & 0 & -1
>\end{pmatrix}
>\begin{array}{c} \text{①} \\ \text{④} \\ \text{③} \\ \text{⑤} \end{array}
>\qquad
>\begin{array}{c} \text{colonne: } (1,2), (2,4), (2,3), (4,5) \end{array}
>$$

### Lemma 2
>[!info] Lemma 2
>Se $B$ è una base di $\tilde{A}$, allora gli archi corrispondenti alle sue colonne formano un albero ricoprente i nodi del grafo $G$.

#dimostrazione
Gli archi del grafo corrispondenti alle colonne di $B$ sono in numero pari ad $m - 1$; per dimostrare che tali archi formano un albero ricoprente i nodi di $G$, proviamo che essi individuano un sottografo **aciclico** di $G$ (punto 3 della [[#Grafi connessi, alberi|caratterizzazione degli alberi]]).

Supponiamo, per assurdo, che un loro sottoinsieme formi un ciclo $\mathcal{C}$.
Scegliamo ad arbitrio un orientamento del ciclo e partizioniamo gli archi in due insiemi $\mathcal{C}^+$ e $\mathcal{C}^-$, tali che $\mathcal{C}^+$ sono i rami **concordi** con l'orientamento scelto e $\mathcal{C}^-$ quelli **discordi**, quindi
$$
\mathcal{C} = \mathcal{C}^+ \cup \mathcal{C}^-
$$
Di conseguenza osserviamo che:
$$
\sum_{(i,j) \in \mathcal{C}^+} A_{(i,j)} - \sum_{(i,j) \in \mathcal{C}^-} A_{(i,j)} = 0
$$
che contraddice l'indipendenza lineare delle colonne di $B$, abbiamo trovato l'assurdo.

>[!check] Esempio
>![[Problemi di flusso-lemma2-ciclo.svg|center|220]]
>In verso orario otteniamo ($(h,i), (i,j), (j,k)$ concordi, $(h,k)$ discorde):
>$$
>A_{(h,i)} + A_{(i,j)} + A_{(j,k)} - A_{(h,k)} = \hat{e}_h - \hat{e}_i + \hat{e}_i - \hat{e}_j + \hat{e}_j - \hat{e}_k - \hat{e}_h + \hat{e}_k = 0
>$$

## Osservazioni
La dimostrazione del [[#Lemma 1]] è **costruttiva**, e la forma triangolare della base è molto importante perché:
- Nota la base $B$, è facile determinare le componenti di base della soluzione corrispondente, $f_B$, risolvendo il sistema:
$$
B \cdot f_B = \tilde{b}
$$
- Se le divergenze dei nodi sono numeri interi, $b \in \mathbb{Z}^m$, allora tutte le soluzioni di base, e quindi la soluzione ottima di base, del problema (MCFP) avranno **componenti intere**. Infatti gli elementi diagonali della matrice $B$ hanno valore $B_{ii} \in \{-1, 1\}$, e le uniche divisioni necessarie nella risoluzione del sistema triangolare hanno tali elementi come divisori.

>[!check] Esempio: calcolo di $f_B$ per sostituzione
>Con la $B$ triangolare dell'esempio sull'albero ricoprente (righe ②, ④, ③, ⑤; colonne $e_1, e_3, e_4, e_6$, cioè gli archi $(1,2), (2,4), (2,3), (4,5)$) il sistema $B f_B = \tilde{b}$ è
>$$
>\begin{cases}
>-f_{12} + f_{24} + f_{23} = b_2 \\
>-f_{24} + f_{45} = b_4 \\
>-f_{23} = b_3 \\
>-f_{45} = b_5
>\end{cases}
>$$
>Si risolve **dal basso verso l'alto**, senza calcolare $B^{-1}$: a ogni passo compare una sola incognita nuova, le altre sono già state trovate.
>1. $f_{45} = -b_5$
>2. $f_{23} = -b_3$
>3. $f_{24} = f_{45} - b_4 = -b_4 - b_5$
>4. $f_{12} = f_{24} + f_{23} - b_2 = -(b_2 + b_3 + b_4 + b_5) = b_1$, perché $\sum_{i \in V} b_i = 0$
>
>L'ultima riga corrisponde a una **foglia** dell'albero (il nodo ⑤): il suo flusso dipende solo dalla sua divergenza. Risalire il sistema equivale a risalire l'albero dalle foglie. Il risultato $f_{12} = b_1$ è coerente: il nodo ① è collegato all'albero solo dall'arco $e_1$, quindi tutta la sua divergenza passa di lì.
>
>La soluzione di base completa è $f = \binom{f_B}{f_N}$ con $f_N = 0$.

Può accadere che la matrice di incidenza $A$ abbia rango strettamente minore di $m - 1$?

>[!info] Lemma 3
>Il grafo $G = \langle V, E \rangle$ è connesso se e solo se esiste almeno un albero ricoprente i nodi di $G$.

%%
#dimostrazione
Se $G$ è un grafo connesso, è sempre possibile eliminare consecutivamente archi da $E$ mantenendo la connessione, fino a quando la rimozione di qualunque altro arco sconnetterebbe il grafo: a questo punto sarà stato individuato un albero ricoprente $G$.
Viceversa, se esiste in $G$ un albero ricoprente, $H = \langle V, T \rangle$, allora $G$ è ovviamente connesso perché l'albero è connesso ed è un sottografo di $G$ (in particolare, per ogni coppia di nodi in un albero esiste uno e un solo cammino che li congiunge).
%%

>[!info] Teorema
>Sia $G = \langle V, E \rangle$ un grafo orientato, $|V| = m$, $|E| = n$; sia $A$ la sua matrice di incidenza. Allora $rango(A) = m - 1$ se e solo se $G$ è connesso.

%%
#dimostrazione
Osserviamo che $rango(A) = m - 1$ se e solo se esiste una sottomatrice quadrata $B$ di $\tilde{A}$ di ordine $m - 1$ che è una base. Per il [[#Caratterizzazione delle basi nei problemi di flusso|Teorema sulla caratterizzazione delle basi]] ciò avviene se e solo se esiste un albero ricoprente $G$, e quindi, per il [[#Osservazioni|Lemma 3]], se e solo se $G$ è connesso.
%%