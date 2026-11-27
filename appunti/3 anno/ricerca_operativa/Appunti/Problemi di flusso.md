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

^conservazioneflusso

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

# Seconda fase dell'algoritmo del simplesso su rete
## Test di ottimalità
>[!important] Base ammissibile per (MCFP)
>Un albero $H = \langle V, T \rangle$ ricoprente il grafo $G$ tale che, posto
>$$
>f_{ij} = 0 \quad \forall (i,j) \in E \setminus T
>$$
>questa formulazione è equivalente a dire che $f_N = 0$
>il vettore delle variabili di base $f_B$ ottenuto risolvendo il sistema $B \cdot f_B = \tilde{b}$ soddisfa $f_B \geq 0$.

>[!important] Condizione di ottimalità per problemi di PL
>Indicando con $N$ la sottomatrice di $A$ formata dalle colonne non in base, si ha:
>$$
>\hat{c}_N^\top = c_N^\top - c_B^\top B^{-1} N \geq 0
>$$
>una condizione **sufficiente** di ottimo è data dalla non negatività dei coefficienti di costo ridotto.
### Calcolo dei coefficienti di costo ridotto
Nonostante lo abbiamo evitato [[#Osservazioni|prima]], per calcolare $\hat{c}_N^\top$ necessitiamo di $B^{-1}$.
Verifichiamo se esiste un modo di calcolarlo senza utilizzare la matrice inversa e quindi senza neanche la necessità di usare il tableau del simplesso.
Per farlo usiamo la teoria della dualità:
Coppia primale-duale di (MCFP):

>[!multi-column]
>
>>[!info] Forma matriciale
>>$$
>>(P) \begin{cases}
>>\min & c^\top f \\
>> & Af = b \\
>> & f \geq 0
>>\end{cases}
>>$$
>>$$
>>(D) \begin{cases}
>>\max & b^\top \lambda \\
>> & A^\top \lambda \leq c
>>\end{cases}
>>$$
>
>>[!info] Forma estesa
>>$$
>>(P) \begin{cases}
>>\min & \sum_{(i,j) \in E} c_{ij} f_{ij} \\
>> & \sum_{j : (i,j) \in E} f_{ij} - \sum_{j : (j,i) \in E} f_{ji} = b_i & \forall i \in V \\
>> & f_{ij} \geq 0 & \forall (i,j) \in E
>>\end{cases}
>>$$
>>$$
>>(D) \begin{cases}
>>\max & \sum_{i \in V} b_i \lambda_i \\
>> & \lambda_i - \lambda_j \leq c_{ij} & \forall (i,j) \in E
>>\end{cases}
>>$$

Ciò che prima chiamavamo $y$ ora prende il nome di $\lambda$.
Il duale ha una variabile $\lambda_i$ per ogni **nodo** e un vincolo per ogni **arco**: la colonna di $A$ dell'arco $(i,j)$ ha $+1$ in riga $i$ e $-1$ in riga $j$, quindi il vincolo è $\lambda_i - \lambda_j \leq c_{ij}$.

Scritto per esteso, il problema mostra che $A$ non è una matrice qualunque, ma la **matrice di incidenza** del grafo: il sistema $Af = b$ coincide con i vincoli di conservazione del flusso della forma estesa.

Per ottenere il duale si legge $A$ per colonne. Ogni colonna corrisponde a un arco $(i,j)$ e contiene solo zeri, tranne un $+1$ in posizione $i$ e un $-1$ in posizione $j$. Nel duale c'è un vincolo per ogni colonna di $A$, cioè per ogni arco, e si ottiene moltiplicando la colonna per $\lambda$:
$$
\lambda_i - \lambda_j \leq c_{ij}
$$
Ogni vincolo coinvolge quindi i due nodi estremi dell'arco. Gli archi si dividono in due gruppi: quelli **in base** e quelli **fuori base**, e il vincolo duale dell'arco si comporta in modo diverso nei due casi (vedi sotto).

Dalla dimostrazione del [[Problemi di ottimizzazione#Dualità forte|teorema di dualità forte]] è noto che, data una soluzione di base ammissibile per il problema primale
$$
\bar{f}_B = B^{-1} \tilde{b} \qquad \bar{f}_N = 0
$$
è sempre possibile definire il **vettore complementare**
$$
\bar{\lambda} = c_B^\top B^{-1} = (B^\top)^{-1} c_B
$$
che, per costruzione, gode della proprietà:
$$
c^\top \bar{f} = c_B^\top \bar{f}_B = c_B^\top B^{-1} \tilde{b} = \bar{\lambda}^\top \tilde{b}
$$
in quanto $f_N = 0$ e $f_B = B^{-1} \tilde{b}$
Il vettore di variabili duali $\bar{\lambda} = (B^\top)^{-1} c_B$ soddisfa **per uguaglianza** il primo gruppo di vincoli duali (quelli degli archi in base):
$$
B^\top \bar{\lambda} = c_B
$$
Inoltre $\bar{\lambda}$ è ammissibile per il problema duale $(D)$ se e solo se soddisfa anche i rimanenti vincoli:
$$
N^\top \bar{\lambda} \leq c_N
$$
Trasponendo ambo i membri del sistema di disuguaglianze, e sostituendo $\bar{\lambda}$, si ottiene:
$$
\bar{\lambda}^\top N = c_B^\top B^{-1} N \leq c_N^\top \iff c_N^\top - c_B^\top B^{-1} N = \hat{c}_N^\top \geq 0
$$
Cioè $\bar{\lambda}$ è ammissibile per $(D)$ se e solo se $\bar{f}$ è ottimale per $(P)$, risultato già noto dallo studio della dualità.

Al momento però per calcolare $\bar{\lambda}$ dovremmo comunque calcolare $B^{-1}$.
Siamo però arrivati al risultato 
$$B^\top \bar{\lambda} = c_B$$
dato che $B$ è **triangolare superiore** allora la sua trasposta sarà **triangolare inferiore**, il che ci permette comunque di risolvere il sistema per sostituzioni successive, ma dall'alto verso il basso.
Questa è la chiave di tutto.
Il fatto che $B$ sia triangolare superiore non solo ci consente di calcolare il flusso di base, ma anche i vettori complementari senza invertire la matrice.

>[!important] Calcolo dei coefficienti di costo ridotto
>1. Calcola $\bar{\lambda}$ risolvendo il sistema $B^\top \lambda = c_B$.
>2. Sostituisci $\bar{\lambda}$ nei rimanenti vincoli duali ($N^\top \lambda \leq c_N$) e calcola il vettore delle **slack** corrispondenti.

### Determinazione della soluzione duale per (MCFP)
Bisogna risolvere il sistema
$$
\lambda_i - \lambda_j = c_{ij} \quad \forall (i,j) \in T
$$
dove $T$ è l'insieme degli archi dell'albero ricoprente associato alla base $B$.

Il sistema ha $m - 1$ equazioni in $m$ incognite, ovvero **un grado di libertà**: assegnando valore arbitrario ad una variabile a scelta, si ricavano di conseguenza le altre.

Si può scegliere di assegnare valore nullo alla variabile duale associata al **nodo radice** dell'albero, cui corrisponde, per la costruzione illustrata nel [[#Lemma 1]], la riga rimossa da $A$.

In tal modo il sistema (con una variabile in meno) si riduce al sistema quadrato
$$
B^\top \lambda = c_B
$$
la cui matrice, per il [[#Lemma 1]], è **triangolare inferiore** (trasposta di una triangolare superiore).

La soluzione potrà essere ottenuta per sostituzioni successive a partire dalla prima equazione, cioè esplorando l'albero **dalla radice verso le foglie** (al contrario di $f_B$, che si calcola dalle foglie verso la radice).

Sono tanti quanti sono gli archi dell'albero ricoprente m-1 (equazioni) e ci sono 2 variabili decisionali per ogni vincolo, N nodi coinvolti, c'è una incognita in più, ma non mi crea problemi, possiamo eliminare una riga che è linearmente dipendente dalle altre.
Parametrizziamo rispetto ad una variabile $\lambda$ e tra le infinite soluzioni la poniamo pari a $0$.
Questo corrisponde all'eliminazione di un nodo da $A$.

>[!check] Esempio (Lemma 1)
>Riprendiamo l'albero dell'[[#Lemma 1|esempio con radice nel nodo 2]]:
>![[Problemi di flusso-albero-radice2.svg|center|230]]
>$$
>B = \begin{pmatrix}
>1 & 0 & 0 & 0 \\
>0 & -1 & 0 & 1 \\
>0 & 0 & -1 & 0 \\
>\smash[b]{\underset{\textstyle\rule{0pt}{1.6em}(1,2)}{0}} & \smash[b]{\underset{\textstyle\rule{0pt}{1.6em}(2,4)}{0}} & \smash[b]{\underset{\textstyle\rule{0pt}{1.6em}(2,3)}{0}} & \smash[b]{\underset{\textstyle\rule{0pt}{1.6em}(4,5)}{-1}}
>\end{pmatrix}
>\begin{array}{c} \text{①} \\ \text{④} \\ \text{③} \\ \text{⑤} \end{array}
>\vphantom{\begin{array}{c} 0 \\ 0 \\ 0 \\ 0 \\ 0 \\ 0 \\ 0 \\ 0 \end{array}}
>$$
>Matrice trasposta $B^\top$:
>$$
>B^\top = \begin{pmatrix}
>1 & 0 & 0 & 0 \\
>0 & -1 & 0 & 0 \\
>0 & 0 & -1 & 0 \\
>\smash[b]{\underset{\textstyle\rule{0pt}{1.6em}\text{①}}{0}} & \smash[b]{\underset{\textstyle\rule{0pt}{1.6em}\text{④}}{1}} & \smash[b]{\underset{\textstyle\rule{0pt}{1.6em}\text{③}}{0}} & \smash[b]{\underset{\textstyle\rule{0pt}{1.6em}\text{⑤}}{-1}}
>\end{pmatrix}
>\begin{array}{c} (1,2) \\ (2,4) \\ (2,3) \\ (4,5) \end{array}
>\vphantom{\begin{array}{c} 0 \\ 0 \\ 0 \\ 0 \\ 0 \\ 0 \\ 0 \\ 0 \end{array}}
>$$
>Risolviamo il sistema esplorando l'albero dalla radice verso le foglie:
>$$
>\begin{array}{rrrrrl}
>\bar{\lambda}_2 & & & & & = 0 \\
> & \bar{\lambda}_1 & & & & = c_{12} \\
> & & -\bar{\lambda}_4 & & & = c_{24} \\
> & & & -\bar{\lambda}_3 & & = c_{23} \\
> & & \bar{\lambda}_4 & & -\bar{\lambda}_5 & = c_{45}
>\end{array}
>$$
>(le righe sono $\lambda_i - \lambda_j = c_{ij}$ con $\bar\lambda_2 = 0$ già sostituito).

Calcolato il vettore $\bar{\lambda}$, il coefficiente di costo ridotto associato alla generica variabile non in base $f_{ij}$ si ottiene semplicemente come **slack** del vincolo duale corrispondente:
$$
\hat{c}_{ij} = c_{ij} - (\bar{\lambda}_i - \bar{\lambda}_j)
$$
Se
$$
\hat{c}_{ij} \geq 0 \quad \forall (i,j) \in N = E \setminus T
$$
allora la soluzione di base corrente è **ottima** e l'algoritmo si arresta.

Altrimenti, una variabile con costo ridotto negativo dovrà entrare in base.

L'eventuale indeterminazione può essere sciolta adottando la [[Problemi di ottimizzazione#Regola di Bland|regola di Bland]], la cui applicazione consente di interrompere il calcolo iterativo (per sostituzione) dei coefficienti di costo ridotto **non appena si individua il primo** di essi con valore negativo: la variabile corrispondente $f_{hk}$ entrerà in base.
## Cambio di base
La variabile entrante in base assumerà un valore $f_{hk} = \hat{\delta} \geq 0$. La determinazione di $\hat{\delta}$ consente di identificare la variabile che **esce** dalla base.

L'ingresso in base di $f_{hk}$ equivale a dire che l'arco corrispondente $(h,k)$ dovrà far parte dell'albero ricoprente; aggiungendo tale arco all'albero di base corrente si formerà un (unico) **ciclo** $\mathcal{C}$ (come nella [[#Lemma 2|dimostrazione del Lemma 2]]).

>[!check] Esempio
>Albero di base $e_1, e_3, e_4, e_6$ (in rosso) e arco entrante $e_5 = (3,4)$ (tratteggiato): si forma il ciclo $2 \to 3 \to 4$ con gli archi $e_4, e_5, e_3$.
>
>>[!multi-column]
>>
>>>![[Problemi di flusso-cambio-base-grafo.svg|320]]
>>
>>>![[Problemi di flusso-cambio-base-albero.svg|230]]

>[!multi-column]
>
>>[!blank]
>>Uno degli archi di $\mathcal{C}$ dovrà essere rimosso per ottenere un nuovo albero ricoprente che comprenda l'arco $(h,k)$.
>>Per il [[#Lemma 2]] le colonne della matrice $A$ corrispondenti agli archi di $\mathcal{C}$ sono linearmente dipendenti, ed una di esse dovrà uscire di base per far posto alla colonna $A_{(h,k)}$.
>
>>[!blank]
>>![[Problemi di flusso-cambio-base-ciclo-albero.svg|center|240]]

In pratica dobbiamo ricostruire un albero ricoprente facendo uscire un altro arco dalla base, soddisfacendo i vincoli del problema.

Scegliamo per $\mathcal{C}$ l'orientamento **concorde** a quello dell'arco entrante $(h,k)$, e partizioniamo $\mathcal{C}$ in archi concordi e archi discordi rispetto al verso di percorrenza scelto:
$$
\mathcal{C} = \mathcal{C}^+ \cup \mathcal{C}^-
$$

![[Problemi di flusso-cambio-base-ciclo.svg|center|240]]

Il problema è locale, è questo nuovo ciclo che mi fa perdere l'albero ricoprente.
Modifico solo gli archi del ciclo: ogni nodo del ciclo tocca due archi del ciclo e le due variazioni si compensano, quindi il suo bilancio non cambia e il resto dell'albero (anche gli archi che collegano i nodi del ciclo al resto) non viene toccato.

Se il flusso sull'arco $(h,k)$ subisce un incremento pari a $\delta \geq 0$, per mantenere rispettate le [[#^conservazioneflusso|equazioni di continuità]] sui nodi del ciclo, il flusso sugli archi concordi dovrà **crescere** di $\delta$, mentre quello sugli archi discordi dovrà **decrescere** di $\delta$.
$$
\begin{cases}
f'_{ij} = f_{ij} + \delta & \forall (i,j) \in \mathcal{C}^+ \\
f'_{ij} = f_{ij} - \delta & \forall (i,j) \in \mathcal{C}^-
\end{cases}
$$
Cosa mi deve limitare nella riduzione?
Il massimo valore consentito per $\delta$ si ottiene imponendo che i nuovi valori di flusso continuino a rispettare i vincoli di non negatività
$$
\hat{\delta} := \min \{ f_{ij} : (i,j) \in \mathcal{C}^- \}
$$
Uscirà di base la variabile (ovvero uscirà dall'albero l'arco che raggiungerà per primo 0) cui corrisponde il valore $\hat{\delta}$:
$$
(i^*, j^*) = \arg\min \{ f_{ij} : (i,j) \in \mathcal{C}^- \}
$$
Determinato il nuovo albero ricoprente, ovvero la nuova base, l'iterazione si conclude aggiornando i valori di flusso **solo sugli archi del ciclo**; il nuovo valore della funzione obiettivo sarà:
$$
c^\top f' = c^\top f + \hat{c}_{hk} \cdot \hat{\delta}
$$

### Casi particolari
Come nel metodo del simplesso classico, potrebbero verificarsi i seguenti due casi:
- $\hat{\delta} = 0$: ciò accade se e solo se la soluzione ammissibile di base corrente è **degenere** e $f_{ij} = 0$ per almeno un arco $(i,j) \in \mathcal{C}^-$. L'iterazione provocherà solo un cambio di base (un arco entra ed uno esce dall'albero ricoprente), mentre le coordinate della soluzione resteranno invariate, come pure il valore della funzione obiettivo.
- $\hat{\delta} = +\infty$: essendo $\hat{c}_{hk} < 0$, da $c^\top f' = c^\top f + \hat{c}_{hk} \cdot \hat{\delta}$ discende che il problema è **inferiormente illimitato** e l'algoritmo si arresta.
  Ciò accade se e solo se $\mathcal{C}^- = \emptyset$, ovvero se e solo se $\mathcal{C}$ è un **circuito** i cui archi sono tutti concordi ed il flusso può crescere indefinitamente su di essi senza violare alcun vincolo.

>[!question] Osservazione
>Se nel grafo assegnato i costi sui rami sono tutti **non negativi**, (MCFP) non può essere inferiormente illimitato.

%%
#dimostrazione
Per tutti gli altri archi di $\mathcal{C}$, essendo appartenenti a $T$, vale
$$
c_{ij} - \bar{\lambda}_i + \bar{\lambda}_j = 0 \quad \forall (i,j) \in T
$$
D'altra parte
$$
0 > \hat{c}_{hk} = c_{hk} - \bar{\lambda}_h + \bar{\lambda}_k
$$
Nel ciclo della figura sopra ($(h,k)$ entrante, $(h,i), (i,j), (j,k)$ in $T$), sommando e sottraendo le variabili duali dei nodi del ciclo otteniamo
$$
\hat{c}_{hk} = c_{hk} - \bar{\lambda}_h + \bar{\lambda}_k + (\bar{\lambda}_i - \bar{\lambda}_i) + (\bar{\lambda}_j - \bar{\lambda}_j)
= c_{hk} - (\bar{\lambda}_h - \bar{\lambda}_i) - (\bar{\lambda}_i - \bar{\lambda}_j) - (\bar{\lambda}_j - \bar{\lambda}_k)
$$
$$
\hat{c}_{hk} = c_{hk} - c_{hi} - c_{ij} - c_{jk}
$$
In generale
$$
\hat{c}_{hk} = \sum_{(i,j) \in \mathcal{C}^+} c_{ij} - \sum_{(i,j) \in \mathcal{C}^-} c_{ij}
$$
Se $\mathcal{C}^- = \emptyset$ si ha
$$
\sum_{(i,j) \in \mathcal{C}} c_{ij} = \hat{c}_{hk} < 0
$$
Quindi, se nel grafo assegnato i costi sui rami sono tutti non negativi, (MCFP) non può essere inferiormente illimitato.
%%

# Esercizi sul problema MCFP
>[!check] Esempio 1
>Si consideri il problema di flusso di costo minimo relativo alla rete in figura, in cui le etichette sugli archi rappresentano i costi unitari di flusso e le etichette sui nodi la loro divergenza.
>
>![[Problemi di flusso-es1-rete.svg|center|440]]
>
>Per prima cosa verifichiamo la condizione necessaria di ammissibilità: la somma delle divergenze è 0 ✅
>
>1. Si identifichi quale tra i due insiemi di archi
>   $$
>   \begin{aligned}
>   A^{(1)} &= \{(1,2), (1,4), (2,3), (4,5), (5,6), (5,8), (6,7)\} \\
>   A^{(2)} &= \{(1,2), (1,4), (2,6), (4,5), (5,6), (5,8), (6,7)\}
>   \end{aligned}
>   $$
>   rappresenta una base ammissibile per il problema di flusso e lo si identifichi con $T^{(0)}$. Si denoti con $f^{(0)}$ il flusso associato a $T^{(0)}$ e se ne calcoli il costo.
>2. Si esegua un'iterazione dell'algoritmo del simplesso su rete a partire dalla soluzione $f^{(0)}$, determinando una nuova distribuzione di flusso $f^{(1)}$ e se ne calcoli il costo.
>
>**Soluzione 1**
>$A^{(2)}$ non è un albero, in quanto tra i suoi elementi esiste il ciclo
>$$
>\{(1,2), (2,6), (5,6), (4,5), (1,4)\}
>$$
>mentre $A^{(1)}$ è un [[#Grafi connessi, alberi|albero ricoprente]]. Calcoliamo la distribuzione di flusso $f^{(0)}$ associata imponendo la continuità nei nodi relativamente agli archi di $A^{(1)}$.
>
>Determiniamo la matrice di base $B$ in forma triangolare superiore ([[#Lemma 1]]), scegliendo il nodo 1 come radice dell'albero:
>$$
>B = \begin{pmatrix}
>-1 & 1 & 0 & 0 & 0 & 0 & 0 \\
>0 & -1 & 0 & 0 & 0 & 0 & 0 \\
>0 & 0 & -1 & 1 & 0 & 0 & 0 \\
>0 & 0 & 0 & -1 & 1 & 1 & 0 \\
>0 & 0 & 0 & 0 & -1 & 0 & 1 \\
>0 & 0 & 0 & 0 & 0 & -1 & 0 \\
>\smash[b]{\underset{\textstyle\rule{0pt}{1.6em}(1,2)}{0}} & \smash[b]{\underset{\textstyle\rule{0pt}{1.6em}(2,3)}{0}} & \smash[b]{\underset{\textstyle\rule{0pt}{1.6em}(1,4)}{0}} & \smash[b]{\underset{\textstyle\rule{0pt}{1.6em}(4,5)}{0}} & \smash[b]{\underset{\textstyle\rule{0pt}{1.6em}(5,6)}{0}} & \smash[b]{\underset{\textstyle\rule{0pt}{1.6em}(5,8)}{0}} & \smash[b]{\underset{\textstyle\rule{0pt}{1.6em}(6,7)}{-1}}
>\end{pmatrix}
>\begin{array}{c} \text{②} \\ \text{③} \\ \text{④} \\ \text{⑤} \\ \text{⑥} \\ \text{⑧} \\ \text{⑦} \end{array}
>\vphantom{\begin{array}{c} 0 \\ 0 \\ 0 \\ 0 \\ 0 \\ 0 \\ 0 \\ 0 \\ 0 \\ 0 \end{array}}
>$$
>e risolviamo il sistema $B f_B = \tilde{b}$, dove $\tilde{b}$ è il vettore delle divergenze (senza la riga della radice, con le righe nell'ordine di $B$)
>$$
>\tilde{b}^\top = (0, 0, 6, 0, 0, -4, -7)
>$$
>Risolvendo direttamente l'ultima equazione, relativa al nodo foglia 7, e sostituendo iterativamente nelle righe superiori (dalle foglie verso la radice), otteniamo il flusso ammissibile di base **degenere**
>$$
>f^{(0)}_{12} = 0 \quad f^{(0)}_{23} = 0 \quad f^{(0)}_{14} = 5 \quad f^{(0)}_{45} = 11 \quad f^{(0)}_{56} = 7 \quad f^{(0)}_{58} = 4 \quad f^{(0)}_{67} = 7
>$$
>il cui costo è $c^\top f^{(0)} = 157$. Poniamo quindi
>$$
>T^{(0)} = A^{(1)} = \{(1,2), (1,4), (2,3), (4,5), (5,6), (5,8), (6,7)\}
>$$
>
>**Soluzione 2**
>In rosso l'albero $T^{(0)}$, in grigio gli archi fuori base:
>![[Problemi di flusso-es1-T0.svg|center|440]]
>
>Poniamo $\lambda_1^{(0)} = 0$ e [[#Determinazione della soluzione duale per (MCFP)|risolviamo]] il sistema $B^\top \lambda = c_B$ (dalla radice verso le foglie) ottenendo
>$$
>\lambda_1^{(0)} = 0 \quad \lambda_2^{(0)} = -2 \quad \lambda_3^{(0)} = -7 \quad \lambda_4^{(0)} = -7 \quad \lambda_5^{(0)} = -11 \quad \lambda_6^{(0)} = -12 \quad \lambda_7^{(0)} = -21 \quad \lambda_8^{(0)} = -13
>$$
>Calcoliamo i coefficienti di costo ridotto delle variabili fuori base
>$$
>\hat{c}_{ij} = c_{ij} - \lambda_i^{(0)} + \lambda_j^{(0)}
>$$
>e notiamo che
>$$
>\hat{c}_{13} = 3 - 0 + (-7) = -4 < 0
>$$
>quindi la condizione di arresto non è soddisfatta e $(1,3)$ entra in base.
>
>>[!attention] AGGIUNTA
>>Con la [[Problemi di ottimizzazione#Regola di Bland|regola di Bland]] $(1,3)$ è il primo arco fuori base con costo ridotto negativo, quindi il calcolo si può fermare qui.
>>Gli altri costi ridotti (non calcolati nelle slide) sono $\hat{c}_{26} = -2$, $\hat{c}_{36} = -3$, $\hat{c}_{35} = 0$, $\hat{c}_{78} = 10$: anche senza Bland la base non sarebbe ottima, e con il criterio del costo ridotto minimo entrerebbe comunque $(1,3)$.
>
>Aggiungendo $(1,3)$ (tratteggiato) all'albero si forma il ciclo $1 \to 3 \leftarrow 2 \leftarrow 1$:
>![[Problemi di flusso-es1-ciclo.svg|center|440]]
>
>Fissando il verso di percorrenza del ciclo concorde all'arco entrante $(1,3)$:
>$$
>\mathcal{C} = \mathcal{C}^+ \cup \mathcal{C}^- = \{(1,3)\} \cup \{(1,2), (2,3)\}
>$$
>L'incremento di flusso $\hat{\delta}$ lungo l'arco $(1,3)$ sarà
>$$
>\hat{\delta} = \min\{ f_{ij} : (i,j) \in \mathcal{C}^- \} = \min\{0, 0\} = 0
>$$
>e l'arco uscente dalla base sarà
>$$
>(i^*, j^*) = \arg\min\{ f_{ij} : (i,j) \in \mathcal{C}^- \} = (1,2)
>$$
>(c'è parità tra $(1,2)$ e $(2,3)$, entrambi a $0$).
>Stiamo effettuando un **cambio di base degenere**.
>
>Le componenti di base del nuovo flusso $f^{(1)}$ sono
>$$
>f^{(1)}_{13} = 0 \quad f^{(1)}_{23} = 0 \quad f^{(1)}_{14} = 5 \quad f^{(1)}_{45} = 11 \quad f^{(1)}_{56} = 7 \quad f^{(1)}_{58} = 4 \quad f^{(1)}_{67} = 7
>$$
>rispetto all'albero ricoprente
>$$
>T^{(1)} = \{(1,3), (1,4), (2,3), (4,5), (5,6), (5,8), (6,7)\}
>$$
>![[Problemi di flusso-es1-T1.svg|center|440]]
>
>Il valore è rimasto $c^\top f^{(1)} = 157$, visto che il cambio di base è stato degenere ($\hat\delta = 0$, vedi [[#Casi particolari|casi particolari]]).

>[!check] Esempio 2
>Si consideri il problema di flusso di costo minimo relativo alla rete in figura, in cui le etichette sugli archi rappresentano i costi unitari di flusso e le etichette sui nodi la loro divergenza.
>
>A partire dalla base $T = \{(6,7), (2,7), (1,6), (4,3), (4,5), (3,1)\}$ si risolva il problema applicando la seconda fase dell'algoritmo del simplesso su rete.
>
>![[Problemi di flusso-es2-rete.svg|center|380]]
>
>La rete ha $m = 7$ nodi e $n = 12$ archi.
>
>**Iterazione 0**
>In rosso l'albero $T^{(0)}$, in grigio gli archi fuori base:
>![[Problemi di flusso-es2-T0.svg|center|380]]
>
>Calcoliamo il flusso di base $f^{(0)}$ **per esplorazione**: partiamo da una foglia dell'albero e risolviamo ogni volta un'equazione in una sola incognita
>$$
>f^{(0)}_{45} = 6 \quad f^{(0)}_{43} = 2 \quad f^{(0)}_{31} = 2 \quad f^{(0)}_{16} = 2 \quad f^{(0)}_{67} = 2 \quad f^{(0)}_{27} = 4
>$$
>il cui costo è
>$$
>c^\top f^{(0)} = 8 \cdot 6 + 8 \cdot 2 + 4 \cdot 2 + 7 \cdot 2 + 10 \cdot 2 + 9 \cdot 4 = 142
>$$
>Per i potenziali di nodo imponiamo $\lambda_i - \lambda_j = c_{ij}$ sugli archi di base e poniamo $\lambda_5 = 0$:
>$$
>\begin{cases}
>\lambda_4 - \lambda_5 = 8 \\
>\lambda_4 - \lambda_3 = 8 \\
>\lambda_3 - \lambda_1 = 4 \\
>\lambda_1 - \lambda_6 = 7 \\
>\lambda_6 - \lambda_7 = 10 \\
>\lambda_2 - \lambda_7 = 9
>\end{cases}
>\qquad
>\lambda_4 = 8 \quad \lambda_3 = 0 \quad \lambda_1 = -4 \quad \lambda_6 = -11 \quad \lambda_7 = -21 \quad \lambda_2 = -12
>$$
>Calcoliamo i costi ridotti $\hat{c}_{ij} = c_{ij} - \lambda_i + \lambda_j$ degli archi fuori base:
>$$
>\hat{c}_{12} = 7 + 4 - 12 = -1 < 0
>$$
>quindi possiamo fermare l'esplorazione: **entra $(1,2)$**.
>
>>[!attention] AGGIUNTA
>>Gli altri costi ridotti (non calcolati in classe) sono $\hat{c}_{71} = 22$, $\hat{c}_{65} = 17$, $\hat{c}_{23} = 18$, $\hat{c}_{51} = 0$, $\hat{c}_{14} = 22$: $(1,2)$ è l'unico arco con costo ridotto negativo.
>
>Il ciclo che si forma, con verso concorde all'arco entrante, è
>$$
>\mathcal{C} = \mathcal{C}^+ \cup \mathcal{C}^- = \{(1,2), (2,7)\} \cup \{(6,7), (1,6)\}
>$$
>Dobbiamo scaricare il flusso negli archi di $\mathcal{C}^-$:
>$$
>\hat{\delta} = \min\{f_{16}, f_{67}\} = \min\{2, 2\} = 2
>$$
>C'è parità: scegliamo di far **uscire $(1,6)$**. Aumentiamo di $2$ il flusso sugli archi di $\mathcal{C}^+$ e lo diminuiamo di $2$ su quelli di $\mathcal{C}^-$.
>
>**Iterazione 1**
>$$
>T^{(1)} = \{(6,7), (2,7), (1,2), (4,3), (4,5), (3,1)\}
>$$
>![[Problemi di flusso-es2-T1.svg|center|380]]
>
>$$
>f^{(1)}_{45} = 6 \quad f^{(1)}_{43} = 2 \quad f^{(1)}_{31} = 2 \quad f^{(1)}_{12} = 2 \quad f^{(1)}_{27} = 6 \quad f^{(1)}_{67} = 0
>$$
>(soluzione **degenere**: $(6,7)$ è in base con flusso nullo, effetto della parità nel calcolo di $\hat\delta$)
>$$
>c^\top f^{(1)} = c^\top f^{(0)} + \hat{c}_{12} \cdot \hat{\delta} = 142 - 2 = 140
>$$
>Calcoliamo i nuovi potenziali di nodo. La maggior parte delle equazioni resta uguale: scompare $\lambda_1 - \lambda_6 = 7$ e compare $\lambda_1 - \lambda_2 = 7$.
>$$
>\begin{cases}
>\lambda_4 - \lambda_5 = 8 \\
>\lambda_4 - \lambda_3 = 8 \\
>\lambda_3 - \lambda_1 = 4 \\
>\lambda_1 - \lambda_2 = 7 \\
>\lambda_2 - \lambda_7 = 9 \\
>\lambda_6 - \lambda_7 = 10
>\end{cases}
>\qquad
>\lambda_4 = 8 \quad \lambda_3 = 0 \quad \lambda_1 = -4 \quad \lambda_2 = -11 \quad \lambda_7 = -20 \quad \lambda_6 = -10
>$$
>Costi ridotti degli archi fuori base:
>$$
>\hat{c}_{16} = 7 + 4 - 10 = 1 > 0 \qquad \hat{c}_{23} = 6 + 11 + 0 = 17 > 0 \qquad \hat{c}_{14} = 10 + 4 + 8 = 22 > 0 \qquad \dots
>$$

# Casi particolari del problema del flusso di costo minimo
- il problema del cammino di costo minimo
- il problema dei trasporti
- il problema dell'assegnamento

## Problema del cammino di costo minimo
Il problema del cammino di costo minimo è un caso speciale del problema di flusso di costo minimo, in cui
- nella rete è presente un unico nodo sorgente $s$ con divergenza pari a $1$
- nella rete è presente un unico nodo pozzo $t$ con divergenza pari a $-1$
- $s$ è un nodo sorgente del grafo (ha solo archi uscenti), $t$ è un nodo pozzo del grafo (ha solo archi entranti)
- i costi unitari di flusso sono tutti non negativi, $c_{ij} \geq 0 \ \forall (i,j) \in E$

>[!important] Formulazione (SPP)
>$$
>(SPP) \begin{cases}
>\min & \displaystyle\sum_{(i,j) \in E} c_{ij} f_{ij} \\
>& \displaystyle\sum_{j : (s,j) \in E} f_{sj} = 1 \\
>& \displaystyle\sum_{j : (i,j) \in E} f_{ij} - \sum_{j : (j,i) \in E} f_{ji} = 0 & \forall i \neq s,t \\
>& \displaystyle -\sum_{j : (j,t) \in E} f_{jt} = -1 \\
>& f_{ij} \geq 0 & \forall (i,j) \in E
>\end{cases}
>$$

per quanto riguarda i nodi $s$ e $t$ rimangono solo le sommatorie positive per $s$ e negative per $t$ in quanto sono presenti solo archi uscenti ($s$) ed entranti ($t$).
Essendo la somma di tutti i nodi uscenti da $s$ è pari a 1: il flusso è intero e compreso tra 0 e 1, vuol dire che stiamo uscendo da $s$ con un solo arco.
Ripetendo questo ragionamento su tutti gli altri nodi (questa volta con uno entrante e uno uscente), fino al pozzo $t$ (che ne avrà solo uno entrante) abbiamo trovato il cammino di costo minimo.
[[Algoritmi#Dijkstra - albero dei cammini minimi a partire da un nodo|Dijkstra]] fa la stessa cosa, ma questo problema può essere risolto anche con il simplesso.
## Problema dei trasporti
Il problema dei trasporti è un caso speciale del problema di flusso di costo minimo, in cui
- i nodi del grafo $G = \langle V, E \rangle$ sono o sorgenti oppure pozzi, quindi in $V$ non ci sono nodi a divergenza nulla (nodi di transito)
- nell'insieme degli archi $E$ non ci sono archi che collegano sorgenti tra di esse oppure pozzi tra di essi: esistono gli archi che congiungono ciascuna sorgente con tutti i pozzi

Il grafo $G = \langle V, E \rangle$ con queste caratteristiche è un **grafo bipartito completo** con
- $V = S \cup P$, $S \cap P = \emptyset$
- $S$ è l'insieme delle sorgenti, $|S| = m_s$
- $P$ è l'insieme dei pozzi, $|P| = m_p$
- $d_i > 0$ è la divergenza nel nodo sorgente $i \in S$
- $\bar{r}_j < 0$ è la divergenza nel nodo pozzo $j \in P$

>[!important] Formulazione (TP)
>$$
>(TP) \begin{cases}
>\min & \displaystyle\sum_{(i,j) \in E} c_{ij} f_{ij} \\
>& \displaystyle\sum_{j : (i,j) \in E} f_{ij} = d_i & \forall i \in S \\
>& \displaystyle -\sum_{i : (i,j) \in E} f_{ij} = \bar{r}_j & \forall j \in P \\
>& f_{ij} \geq 0 & \forall i \in S, \forall j \in P
>\end{cases}
>$$
>Ponendo $r_j = -\bar{r}_j > 0$ otteniamo
>$$
>(TP) \begin{cases}
>\min & \displaystyle\sum_{i=1}^{m_s} \sum_{j=1}^{m_p} c_{ij} f_{ij} \\
>& \displaystyle\sum_{j=1}^{m_p} f_{ij} = d_i & \forall i = 1, \dots, m_s \\
>& \displaystyle\sum_{i=1}^{m_s} f_{ij} = r_j & \forall j = 1, \dots, m_p \\
>& f_{ij} \geq 0 & \forall i = 1, \dots, m_s, \ \forall j = 1, \dots, m_p
>\end{cases}
>$$

Le origini hanno solo archi uscenti (non vediamo i termini con il -).
Le destinazioni hanno solo archi entranti (non vediamo i termini con il +).
Dobbiamo utilizzare l'offerta dei nodi origine per soddisfare la domanda dei pozzi, senza nodi di transito.
## Problema dell'assegnamento
Si tratta di uno speciale [[#Problema dei trasporti|problema dei trasporti]] in cui
- $m_s = m_p = m$
- $d_i = 1$ per ogni $i \in S$
- $r_j = 1$ per ogni $j \in P$

>[!important] Formulazione (AP)
>$$
>(AP) \begin{cases}
>\min & \displaystyle\sum_{i=1}^{m} \sum_{j=1}^{m} c_{ij} f_{ij} \\
>& \displaystyle\sum_{j=1}^{m} f_{ij} = 1 & \forall i = 1, \dots, m \\
>& \displaystyle\sum_{i=1}^{m} f_{ij} = 1 & \forall j = 1, \dots, m \\
>& f_{ij} \geq 0 & \forall i = 1, \dots, m, \ \forall j = 1, \dots, m
>\end{cases}
>$$

Assegno ad ogni singola origine una e una sola destinazione.
Caso tipico di assegnamento di job a macchine.
# Problema del massimo flusso
## Notazione e ipotesi (MFP)
Consideriamo un grafo orientato e connesso $G = \langle V, E \rangle$
>[!important] Dati
>- $V = \{1, \dots, m\}$ è l'insieme dei nodi, $|V| = m$
>- $E \subseteq V \times V$ è l'insieme degli archi, $|E| = n$
>- $b \in \mathbb{R}^m$ è il vettore delle divergenze nei nodi
>- $u_{ij}$ è la capacità (**finita**) su ogni arco $(i,j) \in E$

>[!info] Ipotesi
>Sulla rete esistono due nodi speciali:
>- il nodo $s$ è l'unico nodo **sorgente** e ha solo archi uscenti
>- il nodo $t$ è l'unico nodo **terminale** e ha solo archi entranti
>- tutti gli altri nodi sono di transito, $b_i = 0$ per ogni $i \in V \setminus \{s,t\}$

![[Problemi di flusso-mfp-schema.svg|center|420]]

**Variabili decisionali**: $f_{ij} \geq 0$ rappresenta la quantità di flusso che transita lungo l'arco $(i,j)$ per ogni $(i,j) \in E$.


>[!important] Obiettivo
>Si vuole determinare la massima quantità di flusso che può essere trasferita dal nodo sorgente al nodo terminale:
>$$
>\max \ v = \sum_{j : (s,j) \in E} f_{sj}
>$$
>Ciò equivale a massimizzare la divergenza del nodo sorgente.

Non essendoci limitazioni sulle divergenze dei nodi $s$ e $t$, il valore massimo del flusso dipenderà esclusivamente dalla **topologia** del grafo e dalle **capacità** degli archi.

## Formulazione
>[!important] Max flow problem (MFP)
>$$
>(MFP) \begin{cases}
>\max & v = \displaystyle\sum_{j : (s,j) \in E} f_{sj} \\
>& \displaystyle\sum_{j : (i,j) \in E} f_{ij} - \sum_{j : (j,i) \in E} f_{ji} = 0 & \forall i \in V \setminus \{s,t\} \\
>& 0 \leq f_{ij} \leq u_{ij} & \forall (i,j) \in E
>\end{cases}
>$$
>o equivalentemente, misurando il flusso che arriva in $t$,
>$$
>(MFP) \begin{cases}
>\max & v = \displaystyle\sum_{j : (j,t) \in E} f_{jt} \\
>& \displaystyle\sum_{j : (i,j) \in E} f_{ij} - \sum_{j : (j,i) \in E} f_{ji} = 0 & \forall i \in V \setminus \{s,t\} \\
>& 0 \leq f_{ij} \leq u_{ij} & \forall (i,j) \in E
>\end{cases}
>$$
>La divergenza è una variabile decisionale, per questo non rientra tra i dati del problema, per questo non compaiono tra i vincoli.

Questo problema **ammette sicuramente ottimo finito**, qualunque sia la struttura della rete:
- è **sempre ammissibile**: esiste sempre una soluzione banale ammissibile, data dai flussi tutti nulli.
- **non può essere illimitato**: ogni flusso non può superare la capacità assegnata, che è limitata.


>[!check] Esempio
>Le etichette sugli archi sono le capacità $u_{ij}$.
>![[Problemi di flusso-mfp-esempio.svg|center|380]]
>$$
>A = \begin{pmatrix}
>1 & 1 & 0 & 0 & 0 & 0 & 0 & 0 \\
>-1 & 0 & -1 & 0 & 1 & 0 & 0 & 0 \\
>0 & -1 & 1 & 1 & 0 & 0 & 0 & 0 \\
>0 & 0 & 0 & -1 & 0 & 1 & 1 & 0 \\
>0 & 0 & 0 & 0 & -1 & -1 & 0 & 1 \\
>\smash[b]{\underset{\textstyle\rule{0pt}{1.6em}(s,1)}{0}} & \smash[b]{\underset{\textstyle\rule{0pt}{1.6em}(s,2)}{0}} & \smash[b]{\underset{\textstyle\rule{0pt}{1.6em}(2,1)}{0}} & \smash[b]{\underset{\textstyle\rule{0pt}{1.6em}(2,3)}{0}} & \smash[b]{\underset{\textstyle\rule{0pt}{1.6em}(1,4)}{0}} & \smash[b]{\underset{\textstyle\rule{0pt}{1.6em}(3,4)}{0}} & \smash[b]{\underset{\textstyle\rule{0pt}{1.6em}(3,t)}{-1}} & \smash[b]{\underset{\textstyle\rule{0pt}{1.6em}(4,t)}{-1}}
>\end{pmatrix}
>\begin{array}{c} \text{ⓢ} \\ \text{①} \\ \text{②} \\ \text{③} \\ \text{④} \\ \text{ⓣ} \end{array}
>\vphantom{\begin{array}{c} 0 \\ 0 \\ 0 \\ 0 \\ 0 \\ 0 \\ 0 \\ 0 \end{array}}
>$$
>Solo che il problema non è definito sulla matrice di incidenza $A$, i vincoli non comprendono due nodi, sia $s$ che $t$.

## Forma compatta (problema di circolazione)
Associamo $v$ ad una variabile decisionale, piuttosto che alla funzione obiettivo.
$v$ è la divergenza nel nodo $s$. La funzione obiettivo è $v$, ma la utilizziamo all'interno dei vincoli.
Scriviamo le [[#^conservazioneflusso|equazioni di continuità]] per tutti i nodi della rete:
$$
\begin{cases}
\displaystyle\sum_{j : (s,j) \in E} f_{sj} & & = v \\
\displaystyle\sum_{j : (i,j) \in E} f_{ij} & \displaystyle - \sum_{j : (j,i) \in E} f_{ji} & = 0 & \forall i \in V, \ i \neq s,t \\
& \displaystyle - \sum_{j : (j,t) \in E} f_{jt} & = -v
\end{cases}
$$
cioè, portando $v$ a sinistra,
$$
\begin{cases}
\displaystyle\sum_{j : (s,j) \in E} f_{sj} & & - \ v & = 0 \\
\displaystyle\sum_{j : (i,j) \in E} f_{ij} & \displaystyle - \sum_{j : (j,i) \in E} f_{ji} & & = 0 & \forall i \in V, \ i \neq s,t \\
& \displaystyle - \sum_{j : (j,t) \in E} f_{jt} & + \ v & = 0
\end{cases}
$$
Ora i vincoli sono associati alla matrice di incidenza $A$.
Indicando con
$$
h = \left(\begin{array}{c}
-1 \\ 0 \\ \vdots \\ 0 \\ 1
\end{array}\right) \in \mathbb{R}^m
$$

otteniamo

>[!important] Forma compatta (problema di circolazione)
>$$
>\begin{cases}
>\max & v \\
>& Af + hv = 0 \\
>& f \leq u \\
>& f \geq 0
>\end{cases}
>$$

Il vettore $h$ ha la medesima struttura delle colonne di una [[#Rappresentazioni matriciali|matrice di incidenza]]: rappresenta infatti un arco **uscente da $t$ ed entrante in $s$**, cui è associata la variabile flusso $v$.

Con l'aggiunta dell'arco fittizio $(t,s)$ si ottiene il grafo esteso $G' = \langle V, E \cup (t,s) \rangle$, in cui i nodi sorgente e terminale si trasformano in nodi di transito (**problema di circolazione**).

L'obiettivo è la massimizzazione del flusso sull'arco (fittizio) $(t,s)$.

>[!check] Esempio
>Lo stesso grafo di [[#Formulazione|prima]] con l'arco fittizio $(t,s)$ a capacità $\infty$:
>![[Problemi di flusso-mfp-circolazione.svg|center|380]]
>$$
>A' = (A \mid h) = \begin{pmatrix}
>1 & 1 & 0 & 0 & 0 & 0 & 0 & 0 & -1 \\
>-1 & 0 & -1 & 0 & 1 & 0 & 0 & 0 & 0 \\
>0 & -1 & 1 & 1 & 0 & 0 & 0 & 0 & 0 \\
>0 & 0 & 0 & -1 & 0 & 1 & 1 & 0 & 0 \\
>0 & 0 & 0 & 0 & -1 & -1 & 0 & 1 & 0 \\
>\smash[b]{\underset{\textstyle\rule{0pt}{1.6em}(s,1)}{0}} & \smash[b]{\underset{\textstyle\rule{0pt}{1.6em}(s,2)}{0}} & \smash[b]{\underset{\textstyle\rule{0pt}{1.6em}(2,1)}{0}} & \smash[b]{\underset{\textstyle\rule{0pt}{1.6em}(2,3)}{0}} & \smash[b]{\underset{\textstyle\rule{0pt}{1.6em}(1,4)}{0}} & \smash[b]{\underset{\textstyle\rule{0pt}{1.6em}(3,4)}{0}} & \smash[b]{\underset{\textstyle\rule{0pt}{1.6em}(3,t)}{-1}} & \smash[b]{\underset{\textstyle\rule{0pt}{1.6em}(4,t)}{-1}} & \smash[b]{\underset{\textstyle\rule{0pt}{1.6em}(t,s)}{1}}
>\end{pmatrix}
>\begin{array}{c} \text{ⓢ} \\ \text{①} \\ \text{②} \\ \text{③} \\ \text{④} \\ \text{ⓣ} \end{array}
>\vphantom{\begin{array}{c} 0 \\ 0 \\ 0 \\ 0 \\ 0 \\ 0 \\ 0 \\ 0 \end{array}}
>$$
## Cammini aumentanti
Aumentare il flusso da $s$ a $t$ distribuendo flusso sugli archi che stanno su un determinato cammino.
>[!important] Idea
>Una distribuzione ammissibile di flusso $f$ **non è ottima** se e solo se è possibile inviare altro flusso da $s$ a $t$.
>
>In particolare, è possibile determinare una nuova soluzione ammissibile con miglior valore della funzione obiettivo modificando il flusso **solo sugli archi di un opportuno cammino** da $s$ a $t$.
>
>Abbiamo definito una condizione necessaria di ottimalità.


>[!multi-column]
>
>>[!info] Notazione
>>A ogni arco viene associata una coppia di valori che rappresentano il **flusso** che attraversa l'arco e la **capacità** dell'arco.
>
>>[!blank]
>>![[Problemi di flusso-cammini-notazione.svg|center|220]]

>[!check] Esempio
>Rete con le capacità $u_{ij}$:
>![[Problemi di flusso-cammini-rete.svg|center|400]]
>Partiamo da un **flusso ammissibile** con $v = 6$ (etichette $f_{ij}, u_{ij}$):
>![[Problemi di flusso-cammini-v6.svg|center|400]]
>L'idea alla base è quella di incrementare di una unità un arco per volta. Se riesco ad aumentarla vuol dire che il flusso non è ottimo.
>Incremento del flusso $v = 6$ uscente da $s$ lungo il cammino $s \to 2 \to 1 \to 4 \to t$ (in rosso): gli archi $(s,2)$ e $(1,4)$ si saturano e si ottiene $v = 7$:
>![[Problemi di flusso-cammini-v7.svg|center|400]]
>Ogni incremento viene fatto se l'arco non è saturo.
>Incremento del flusso $v = 7$ uscente da $s$: il cammino è $s \to 1 \to 2 \to 3 \to 4 \to t$, dove l'arco $(2,1)$ è percorso **all'indietro** e il suo flusso **diminuisce** ($2 \to 1$). Si ottiene $v = 8$:
>![[Problemi di flusso-cammini-v8.svg|center|400]]
>Dato che l'arco 1-4 è saturo e devo soddisfare la continuità in 1, potrei scaricare il flusso di un arco che scorre in senso contrario: posso aumentare il flusso nell'arco s-1 a patto di scaricare una unità nell'arco 2-1. Le 6 unità che entrano in 2 possono essere riorientate verso 3 piuttosto che 1.
>Posso fare questa riduzione solo finché non ho un arco completamente scarico (con flusso pari a 0).
>La non ottimalità della soluzione corrente si verifica tramite questo processo che ci permette inoltre di costruire una nuova soluzione ammissibile che è migliore della precedente.

Notiamo come nel cammino da s a t sicuramente ci sono almeno due archi nello stesso verso del cammino: l'arco uscente da $s$ e l'arco entrante in $t$.

Consideriamo il cammino semplice $P = [s, i, k, t]$ e il flusso ammissibile $f$. Il cammino può essere **orientato** (tutti gli archi concordi con il verso $s \to t$) oppure una **catena** (alcuni archi discordi):
![[Problemi di flusso-cammino-catena.svg|center|420]]
Il cammino orientato è un caso particolare della catena semplice.
- Nel cammino orientato per continuità se ho un aumento di flusso pari a $\delta$ nel primo arco lo avrò di conseguenza in tutti i successivi.
- Nella catena semplice invece aumentando di $\delta$ il flusso $f_{si}$ per continuità il flusso $f_{ki}$ diminuirà di una quantità $\delta$. A sua volta per continuità aumenterà di $\delta$ il flusso $f_{kt}$.
### Cammino orientato
Se si incrementa il flusso sull'arco $(s,i)$ ponendo $f'_{si} = f_{si} + \delta$, $\delta > 0$, anche il flusso sull'arco $(i,k)$ deve crescere della stessa quantità, per rispettare l'[[#^conservazioneflusso|equazione di continuità]] nel nodo $i$:
$$
\sum_{j : (i,j) \in E} f'_{ij} - \sum_{j : (j,i) \in E} f'_{ji} = \left( \sum_{j : (i,j) \in E} f_{ij} + \delta \right) - \left( \sum_{j : (j,i) \in E} f_{ji} + \delta \right) = 0
$$
Lo stesso vale sul nodo $k$, e di conseguenza il valore di flusso che entra in $t$ aumenterà di $\delta$:
$$
v' = v + \delta
$$
Il massimo valore dell'incremento $\delta$ si determina con i vincoli di capacità sugli archi del cammino:
$$
\begin{cases}
f_{si} + \delta \leq u_{si} \\
f_{ik} + \delta \leq u_{ik} \\
f_{kt} + \delta \leq u_{kt}
\end{cases}
\implies
\begin{cases}
\delta \leq u_{si} - f_{si} \\
\delta \leq u_{ik} - f_{ik} \\
\delta \leq u_{kt} - f_{kt}
\end{cases}
\implies
\delta \leq \hat{\delta} = \min \{ u_{ij} - f_{ij} \mid (i,j) \in P \}
$$
I nuovi flussi aumentano tutti di $\delta$, ma la nuova distribuzione deve soddisfare la capacità.
Ricaviamo quindi $\delta$ dalle disuguaglianze e sarà pari al flusso residuo inviabile lungo un arco.
Il minimo di questi scarti sarà proprio la quantità $\delta$ di flusso che possono inviare lungo il cammino.

Se $\hat{\delta} = 0$ c'è almeno un arco **saturo**, quindi il cammino non è utile per incrementare il flusso sulla rete.

### Catena
Consideriamo la catena $P = [s, i, k, t]$: il suo orientamento è sempre da $s$ a $t$, ma alcuni archi possono essere discordi rispetto a tale orientamento. Partizioniamo gli archi in due insiemi, $P^+$ (archi **concordi** con $s \to t$) e $P^-$ (archi **discordi**):
$$
P = P^+ \cup P^- \qquad (s,i), (k,t) \in P^+, \quad (k,i) \in P^-
$$
Se $f'_{si} = f_{si} + \delta$, essendo $(s,i)$ e $(k,i)$ entrambi **entranti** in $i$ (nessun arco uscente subisce variazioni), dovrà essere $f'_{ki} = f_{ki} - \delta$:
$$
\sum_{j : (i,j) \in E} f'_{ij} - \sum_{j : (j,i) \in E} f'_{ji} = \sum_{j : (i,j) \in E} f_{ij} - \left( \sum_{j : (j,i) \in E} f_{ji} + \delta - \delta \right) = 0
$$
Analogamente per il nodo $k$, per il quale gli archi di interesse $(k,i)$ e $(k,t)$ sono entrambi **uscenti**:
$$
f'_{ki} = f_{ki} - \delta \implies f'_{kt} = f_{kt} + \delta
$$
e quindi $v' = v + \delta$.

Il massimo valore consentito per $\delta$ si ottiene imponendo il rispetto delle limitazioni inferiori e superiori sul flusso degli archi di $P$:
$$
\hat{\delta} = \min \{ \delta^+, \delta^- \}
$$
dove
$$
\delta^+ = \min \{ u_{ij} - f_{ij} \mid (i,j) \in P^+ \} \qquad \delta^- = \min \{ f_{ij} \mid (i,j) \in P^- \}
$$
%%
Quando vado ad aumentare guardo la capacità
Quando riduco vedo lo 0
Per identificare $\hat{\delta}$ quindi distinguiamo il calcolo in $\delta^+$ e $\delta^-$
Una volta calcolati identifico $\hat{\delta}$ come il minimo tra queste due quantità, in quanto la quantità di flusso da sottrarre/sommare deve essere comune a entrambi gli insiemi di archi
%%

Se $\hat{\delta} = 0$ la catena non è utile per incrementare il flusso: succede se almeno un arco di $P^+$ è **saturo** oppure almeno un arco di $P^-$ ha flusso nullo, cioè è **scarico**.

### Definizione di cammino aumentante
>[!important] Cammino aumentante
>Dato il grafo $G = \langle V, E \rangle$ ed una distribuzione di flusso ammissibile $f$ di valore $v$ su $G$, si definisce **cammino aumentante** per $f$ su $G$ una catena $P$ da $s$ a $t$ tale che, posto
>$$
>P = P^+ \cup P^-
>$$
>dove $P^+$ e $P^-$ sono i sottoinsiemi degli archi di $P$ concordi e discordi rispetto all'orientamento $s \to t$, si abbia:
>$$
>\begin{cases}
>f_{ij} < u_{ij} & \forall (i,j) \in P^+ \\
>f_{ij} > 0 & \forall (i,j) \in P^-
>\end{cases}
>$$
>Gli archi che sono in $P^+$ non sono saturi
>Gli archi che sono in $P^-$ non sono scarichi

È una definizione legata alla rete, non è una proprietà del grafo.

Abbiamo così dimostrato la seguente:

>[!info] Proposizione
>Sia $G = \langle V, E \rangle$ una rete di flusso con sorgente $s$, terminale $t$ e capacità $u_{ij}$ sugli archi; sia $f$ una distribuzione ammissibile di flusso su $G$ di valore $v$. Se esiste $P$ cammino aumentante per $f$, allora la distribuzione di flusso
>$$
>f'_{ij} = \begin{cases}
>f_{ij} + \hat{\delta} & (i,j) \in P^+ \\
>f_{ij} - \hat{\delta} & (i,j) \in P^- \\
>f_{ij} & (i,j) \notin P
>\end{cases}
>$$
>è ammissibile, con valore di flusso $v' = v + \hat{\delta} > v$.

Da cui segue

>[!info] Corollario (condizione necessaria di ottimalità)
>Se esiste un cammino aumentante per $f$ su $G$, allora $f$ **non** è soluzione ottima per il problema del massimo flusso su $G$.

## Algoritmo di Ford-Fulkerson
>[!important] Schema
>1. Calcola una distribuzione di flusso ammissibile iniziale $f$ e sia $v$ il valore di flusso corrispondente (per esempio $f = 0$, $v = 0$).
>2. Cerca un cammino aumentante per $f$ su $G$.
>3. Se esiste un cammino aumentante per $f$ su $G$, calcola $\hat{\delta}$, $f'$, $v' = v + \hat{\delta}$ e itera (vai a 2).
>4. Altrimenti STOP: $f^* := f$, $v^* := v$.

>[!question] Osservazione
>1. La definizione di cammino aumentante ha senso solo se riferita ad un dato grafo $G$ e ad una assegnata distribuzione ammissibile di flusso $f$ su $G$.
>2. Per come è definito $\hat{\delta}$, dopo l'aggiornamento del flusso sugli archi di un cammino aumentante $P$ almeno uno degli archi di $P^+$ risulterà **saturo** o uno degli archi di $P^-$ risulterà **scarico**: perciò $P$ non potrà essere un cammino aumentante per $f'$.
>3. Il punto 4 dell'algoritmo definisce una condizione sufficiente di ottimalità, che verrà giustificato in seguito

%%
Nel momento in cui incremento di delta cappuccio il cammino non sarà più aumentante, ho almeno scaricato un arco o saturato un altro, quindi non posso più agire sullo stesso commino.
%%

### Ricerca del cammino aumentante
La visita del grafo avviene in due fasi:
- **fase in avanti**: tecnica di **propagazione di etichette**;
- **fase all'indietro**: **ricostruzione del cammino** mediante lettura delle etichette.

%%
Concentrandosi all'incremento del flusso un arco per volta potrebbe succedere che arriviamo ad un nodo che avrebbe un arco entrante scarico, ma tutte le sue uscite sono sature. In quel caso non posso aumentare ulteriormente il flusso, ma è tutto bloccato.
L'idea è quella di non puntare su una sola uscita della sorgente, ma lavorare parallelamente su tutti gli archi
su ogni nodo mantengo le informazioni riguardanti quanto flusso sto riuscendo a propagare
mantengo nelle etichette il massimo flusso che sono riuscito a propagare fino al nodo i
%%

>[!important] Etichette
>L'etichetta del nodo $i$ ha due campi: $[\text{pred}(i), \text{incr}(i)]$
>- $\text{pred}(i) = \pm k$, con $k \in V$, indica il nodo che **precede** $i$ nel cammino parziale da $s$ ad $i$, con segno $+$ o $-$ a seconda che l'arco tra $k$ ed $i$ sia concorde o discorde rispetto all'orientamento del cammino;
>- $\text{incr}(i)$ contiene il **massimo incremento** ammissibile di flusso sugli archi del cammino parziale da $s$ ad $i$.

#### Propagazione delle etichette
Alla generica iterazione indichiamo con $W^* \subset V$ l'insieme dei nodi già etichettati, e poniamo $W := W^*$.
%%
W e W* coincidono
W contiene tutti i nodi etichettati
come faccio a propagare flusso da un nodo etichettato
Se sono ad un nodo i etichettato so come ci sono arrivato e quanto flusso sono riuscito a propagare, voglio quindi propagare più flusso possibile verso un nodo non etichettato
%%
Estraiamo $i \in W$, ponendo $W := W \setminus \{i\}$, e tentiamo di propagare l'etichetta ai nodi **adiacenti e non ancora etichettati**:
$$
\begin{aligned}
(i,j) \in E : j \notin W^*, \ f_{ij} < u_{ij} &\implies \text{pred}(j) := +i, \quad \text{incr}(j) := \min \{ \text{incr}(i), \ u_{ij} - f_{ij} \} \\
(j,i) \in E : j \notin W^*, \ f_{ji} > 0 &\implies \text{pred}(j) := -i, \quad \text{incr}(j) := \min \{ \text{incr}(i), \ f_{ji} \}
\end{aligned}
$$
%%
provo a propagare flusso agli adiacenti che non appartengono a W*
In particolare mi interessano gli archi che mi possono dare un risultato di incremento del flusso
- In avanti sono gli archi che non sono saturi
  Se io riesco a raggiungere j da un nodo i e il suo arco non è scarico riesco a toccare j e quindi il predecessore di j è i, ci sto arrivando da i e l'incremento di j sarà il minimo tra tutto il flusso che riesco a propagare da i, ciò che ho propagato da i e il residuo di ciò che posso propagare verso j, dipende dalla capacità dell'arco i-j
- Indietro sono gli archi che non sono scarichi
  il predecessore sarà -i (percorso al contrario) e riesco a propagare il flusso che ho portato fino ad i, ma questo flusso è destinato a ridurre il flusso sull'arco j-i, quindi sarà il minimo tra il flusso presente già sull'arco e ciò che ho portato fino ad i
%%
Se $(i,j)$ è saturo o se $(j,i)$ è scarico, $j$ non può essere etichettato da $i$.
Tutti i nodi etichettati da $i$ sono inseriti in $W^*$.
La propagazione continua fino a che $t \in W^*$ oppure $W = \emptyset$.
%%
Se la propagazione di etichette è arrivata al nodo finale vuol dire che il cammino aumentante esiste e ha migliorato il flusso della rete.
Se $W = \emptyset$ ho considerato tutti i possibili nodi e non sono riuscito ad etichettare il nodo terminale, avendo chiamato in causa tutti i nodi in W, questa impossibilità vuol dire che non esiste un cammino aumentante e l'algoritmo termina
%%
#### Ricostruzione del cammino
- Se $t$ viene raggiunto, si è individuato un cammino aumentante da $s$ a $t$ e $\hat{\delta} = \text{incr}(t)$.
- Procedendo **a ritroso** si ricostruisce il cammino $P$ e si aggiorna la distribuzione di flusso sui suoi archi.
- L'ultimo arco è certamente $(\text{pred}(t), t) \in P^+$, su cui il flusso aumenta di $\hat{\delta}$.
- Se $\text{pred}(\text{pred}(t)) = +k$, il penultimo arco è $(k, \text{pred}(t)) \in P^+$; altrimenti è $(\text{pred}(t), k) \in P^-$, e il flusso viene aggiornato di conseguenza ($+\hat{\delta}$ oppure $-\hat{\delta}$).
- Raggiunta la sorgente $s$, si azzerano le etichette ponendo $W^* := \emptyset$ e si reitera.
- Se invece la propagazione si conclude **senza aver etichettato $t$** ($W = \emptyset$), non esiste alcun cammino aumentante per il flusso corrente $f$ su $G$, e l'algoritmo si arresta restituendo $f^* := f$, $v^* := v$.

>[!multi-column]
>
>>[!info] Condizione necessaria di ottimalità (già dimostrata)
>>Se esiste un cammino aumentante per $f$ su $G$, allora $f$ non è soluzione ottima per il problema del massimo flusso su $G$.
>
>>[!info] Condizione sufficiente di ottimalità (da dimostrare)
>>Se non esiste un cammino aumentante per $f$ su $G$, allora $f$ è soluzione ottima per il problema del massimo flusso su $G$.

#### Pseudocodice
Algoritmo di Ford e Fulkerson con flusso iniziale $f$ di valore $v$:

$$
\begin{array}{rl}
1: & \Delta v = 0, \ W^* = \emptyset, \ \text{esisteCamminoAumentante} = \text{False}, \ \hat{\delta} := 0 \\
2: & \textbf{repeat} \\
3: & \quad \textbf{for all } j \in V \textbf{ do} \\
4: & \quad\quad \text{pred}(j) := 0, \ \text{incr}(j) := +\infty \\
5: & \quad \textbf{end for} \\
6: & \quad W := \{s\}, \ W^* := \{s\} \\
7: & \quad \textbf{while } W \neq \emptyset \textbf{ and } t \notin W \textbf{ do} \\
8: & \quad\quad \text{estrai il nodo } i \text{ da } W, \ W := W \setminus \{i\} \\
9: & \quad\quad \textbf{for all } j \notin W^* \textbf{ do} \\
10: & \quad\quad\quad \textbf{if } (i,j) \in E \textbf{ and } f_{ij} < u_{ij} \textbf{ then} \\
11: & \quad\quad\quad\quad \text{pred}(j) := +i, \ \text{incr}(j) := \min\{\text{incr}(i), u_{ij} - f_{ij}\}, \ W := W \cup \{j\} \\
12: & \quad\quad\quad\quad W^* := W^* \cup \{j\} \\
13: & \quad\quad\quad\quad \textbf{if } j = t \textbf{ then} \\
14: & \quad\quad\quad\quad\quad \text{esisteCamminoAumentante} := \text{True} \\
15: & \quad\quad\quad\quad \textbf{end if} \\
16: & \quad\quad\quad \textbf{end if} \\
17: & \quad\quad\quad \textbf{if } (j,i) \in E \textbf{ and } f_{ji} > 0 \textbf{ then} \\
18: & \quad\quad\quad\quad \text{pred}(j) := -i, \ \text{incr}(j) := \min\{\text{incr}(i), f_{ji}\}, \ W := W \cup \{j\} \\
19: & \quad\quad\quad\quad W^* := W^* \cup \{j\} \\
20: & \quad\quad\quad \textbf{end if} \\
21: & \quad\quad \textbf{end for} \\
22: & \quad \textbf{end while} \\
23: & \quad \textbf{if } \text{esisteCamminoAumentante} \textbf{ then} \\
24: & \quad\quad \hat{\delta} := \text{incr}(t), \ \Delta v := \Delta v + \hat{\delta}, \ j := \text{pred}(t), \ f_{jt} := f_{jt} + \hat{\delta} \\
25: & \quad\quad \textbf{while } j \neq s \textbf{ do} \\
26: & \quad\quad\quad \textbf{if } \text{pred}(j) > 0 \textbf{ then} \\
27: & \quad\quad\quad\quad f_{\text{pred}(j),j} := f_{\text{pred}(j),j} + \hat{\delta} \\
28: & \quad\quad\quad \textbf{else} \\
29: & \quad\quad\quad\quad f_{j,\text{pred}(j)} := f_{j,\text{pred}(j)} - \hat{\delta} \\
30: & \quad\quad\quad \textbf{end if} \\
31: & \quad\quad\quad j := \text{pred}(j) \\
32: & \quad\quad \textbf{end while} \\
33: & \quad \textbf{else} \\
34: & \quad\quad v_{\max} := v + \Delta v, \ f^* := f \\
35: & \quad \textbf{end if} \\
36: & \textbf{until } \text{esisteCamminoAumentante} \\
37: & \textbf{return } f^*, \ v_{\max}, \ W^*
\end{array}
$$

%%
W* induce una partizione tra i nodi etichettati e quelli non etichettati
Da W viene fatta la pop dei nodi aggiunti per esplorare ogni singolo nodo
Da W* non vengono rimossi nodi
Le condizioni 10 e 17 verificano se l'arco è entrante o uscente
7-22 cerchiamo il cammino aumentante
23-35 modifico il flusso della rete conseguentemente a quanto trovato nei passi precedenti ricostruendo il cammino a retroso
%%

>[!attention] AGGIUNTA: dubbio sullo pseudocodice
>Così come è scritto nelle slide, la riga 36 (`until esisteCamminoAumentante`) fa terminare il ciclo proprio quando un cammino **è stato trovato**, e la variabile non viene mai rimessa a False all'inizio di ogni iterazione. Il senso è: ripeti finché esiste un cammino aumentante (cioè `until not esisteCamminoAumentante`), azzerando la variabile a ogni ricerca.

### Esempio
Rete con flusso ammissibile iniziale $v = 6$ (la stessa di [[#Cammini aumentanti|sopra]]). In ogni figura: etichette $[\text{pred}, \text{incr}]$ accanto ai nodi, flussi **prima** dell'aggiornamento, cammino aumentante trovato in rosso.

>[!check] Iterazione 1: $v = 6$
>| $W$ | nodo estratto $i$ | nodi etichettati |
>|---|---|---|
>| $\{s\}$ | $s$ | $2: [+s, 1]$, $1: [+s, 4]$ |
>| $\{1, 2\}$ | $1$ | $4: [+1, 1]$ |
>| $\{2, 4\}$ | $2$ | $3: [+2, 1]$ |
>| $\{3, 4\}$ | $3$ | — ($4$ e $t$: $4$ già etichettato, $(3,t)$ saturo) |
>| $\{4\}$ | $4$ | $t: [+4, 1]$ |
>
>![[Problemi di flusso-ff-it1.svg|center|450]]
>Cammino aumentante $s \to 1 \to 4 \to t$, $\hat{\delta} = 1$: $f_{s1}: 1 \to 2$, $f_{14}: 2 \to 3$, $f_{4t}: 5 \to 6$, quindi $v := 7$.

%%
aggiungi tabella quaderno
%%

>[!check] Iterazione 2: $v = 7$
>| $W$ | nodo estratto $i$ | nodi etichettati |
>|---|---|---|
>| $\{s\}$ | $s$ | $2: [+s, 1]$, $1: [+s, 3]$ |
>| $\{1, 2\}$ | $1$ | — ($(1,4)$ saturo) |
>| $\{2\}$ | $2$ | $3: [+2, 1]$ |
>| $\{3\}$ | $3$ | $4: [+3, 1]$ |
>| $\{4\}$ | $4$ | $t: [+4, 1]$ |
>
>![[Problemi di flusso-ff-it2.svg|center|450]]
>Cammino aumentante $s \to 2 \to 3 \to 4 \to t$, $\hat{\delta} = 1$: $f_{s2}: 5 \to 6$, $f_{23}: 4 \to 5$, $f_{34}: 3 \to 4$, $f_{4t}: 6 \to 7$, quindi $v := 8$.
>
>>[!attention] AGGIUNTA
>>Nella slide 30 l'etichetta di $1$ è riportata come $[+s, 4]$, ma $u_{s1} - f_{s1} = 5 - 2 = 3$, come nelle altre slide della stessa iterazione: è un refuso.

>[!check] Iterazione 3: $v = 8$
>Ora $(s,2)$ è saturo, quindi da $s$ si etichetta solo $1$; il nodo $2$ si raggiunge da $1$ percorrendo **all'indietro** l'arco $(2,1)$, che ha flusso $f_{21} = 1 > 0$.
>
>| $W$ | nodo estratto $i$ | nodi etichettati |
>|---|---|---|
>| $\{s\}$ | $s$ | $1: [+s, 3]$ |
>| $\{1\}$ | $1$ | $2: [-1, 1]$ |
>| $\{2\}$ | $2$ | $3: [+2, 1]$ |
>| $\{3\}$ | $3$ | $4: [+3, 1]$ |
>| $\{4\}$ | $4$ | $t: [+4, 1]$ |
>
>![[Problemi di flusso-ff-it3.svg|center|450]]
>Cammino aumentante $s \to 1 \to 2 \to 3 \to 4 \to t$ con $(2,1) \in P^-$, $\hat{\delta} = 1$: $f_{s1}: 2 \to 3$, $f_{21}: 1 \to 0$, $f_{23}: 5 \to 6$, $f_{34}: 4 \to 5$, $f_{4t}: 7 \to 8$, quindi $v := 9$.

>[!check] Iterazione 4: $v = 9$
>| $W$ | nodo estratto $i$ | nodi etichettati |
>|---|---|---|
>| $\{s\}$ | $s$ | $1: [+s, 2]$ |
>| $\{1\}$ | $1$ | — ($(1,4)$ saturo, $(2,1)$ scarico) |
>
>$W = \emptyset$ senza aver etichettato $t$: **STOP**, $v^* = 9$, $W^* = \{s, 1\}$.
>![[Problemi di flusso-ff-it4.svg|center|450]]
