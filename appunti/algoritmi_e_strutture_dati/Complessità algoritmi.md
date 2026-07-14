#appunti 
#asd 

# Complessità degli algoritmi
[[Algoritmi vari#Complessità degli algoritmi]]
Siano $I$ l'insieme di tutti i possibili input e $O$ l'insieme di tutti i possibili output, un problema in informatica è una funzione così descritta
$$
P:I\to O
$$
>[!important] Algoritmo
>Insieme di istruzioni, definite passo per passo, utili a risolvere un problema

Un programma può anche non terminare, in quel caso associamo l'output di non terminazione, indicato con il simbolo $\perp \notin O$. Questo è un caso non calcolabile (non posso sapere se un algoritmo è ancora in elaborazione o è entrato in un loop che non terminerà mai), ma posso ugualmente rappresentarlo tramite $\perp$
Chiameremo inoltre $A(x)$ il risultato dell'esecuzione dell'algoritmo $A$ sull'input dove $\forall A(x) \in O \cup \{\perp\}$.
>[!important] Un algoritmo si dice risolutore del problema $P \Leftrightarrow \forall x \in I, P(x) = A(x)$

Quindi basterebbe un solo input per cui il risultato non è corretto a invalidare la soluzione trovata del problema.
Un algoritmo viene definito come **corretto** se esso è capace di risolvere il problema per qualsiasi tipo di input.
Al contrario per affermare che un algoritmo non è corretto basta cercare un input che non restituisce un output coerente.

**Problemi risolvibili**
I problemi risolvibili o calcolabili sono quelli per i quali esiste un algoritmo di risoluzione. Infatti, non tutti i problemi sono risolvibili (problema della fermata, delle corrispondenze…)
Non esiste sempre una funzione che associa la dimensione dell’input al costo di esecuzione di un algoritmo, anzi nella maggior parte dei casi, se lanciamo un algoritmo su 2 input il tempo di esecuzione per il primo sarà diverso dal quello per il secondo. 
## Analisi di complessità per casi
Supponendo di avere 2 algoritmi per la risoluzione di uno stesso problema: volendo decidere quali dei 2 risulta più efficiente dovremmo comparare TANTISSIMI tempi ricavati imponendo gli stessi input. 
Raccogliendoli in 2 insiemi, li rappresento in un intervallo:
![[Pasted image 20260309154754.png]]
nel miglior caso $A_1 = 3$ e $A_2 = 4$
definiamo quindi
$$
T_A^{best}(n) = \min(\{T_A(x)|x \in I \wedge |x|=n\})
$$
mentre nel peggiore $A_1 = 12$ e $A_2 = 14$
definiamo quindi
$$
T_A^{worst}(n) = \max(\{T_A(x)|x \in I \wedge |x|=n\})
$$
dove $T_A(x)$ rappresenta il tempo di esecuzione di $A$ con input $x$ e dimensione $|x|$ proprio pari ad $n$.
Esiste un’altro tipo di analisi che è possibile eseguire su un dato algoritmo. L’analisi del caso medio tiene conto della probabilità che un’istanza (specifico, singolo e concreto input di $A$) venga effettivamente fornita all’algoritmo, considerando tutti i possibili input di una certa dimensione $n$.
$$
T_A^{avg} = \sum_{x \in I \wedge |x| =n} T_A(x) \cdot Pr(x) 
$$
non è altro che il [[2. Variabili aleatorie#Valore atteso|valore atteso]] del tempo di esecuzione dell'algoritmo.
Tuttavia, quest’analisi è molto difficile da eseguire in quanto è altamente improbabile che si conosca a priori la distribuzione del tempo di esecuzione di algoritmo tanto meno è immediato comparare tutti i diversi tempo.
## Calcolo del costo di un algoritmo
Il costo di un algoritmo è una misura oggettiva che mi permette di confrontare 2 diversi algoritmi per scegliere quello più efficiente. Tuttavia, ci sono dei parametri che noi non consideriamo perché troppo complessi come ad esempio:
- lo stato della macchina → se è già in corso un processo (CPU impegnata)
- quanti cicli di CPU → dipende anche dal linguaggio quindi è troppo complesso
- tempo esatto di esecuzione
- numero di istruzioni elementari macchina (LM) → troppo complesso per tempi di esecuzioni molto diversi
- quali e quante risorse consuma (anche da dove le prendi —> cache 1,2 o RAM)

Quando si va a considerare la complessità di un algoritmo, bisogna distinguere tra:
- **complessità strutturale**
  considera quanto un algoritmo è complicato (sintatticamente e logicamente) per minimizzare il numero di errori
- **complessità spaziale**
  Considera solo la memoria di lavoro, ovvero ciò che allochiamo in memoria in aggiunta durante l'esecuzione di un programma, trascurando tutto ciò che si trova già come input e output (anche se eseguiamo operazioni di modifica sull'input stesso). La memoria in più allocata viene definita **memoria di lavoro**.

### Funzioni asintotiche
Per quanto possa essere accurato il valore numerico (calcolato come il numero di operazioni elementari necessarie per ogni input), a partire da un certo valore di $n$, l'ordine di grandezza sovrasta l'impatto del valore numerico. Quindi sfruttiamo delle funzioni matematiche che calcolano la complessità ignorando un qualunque valore numerico.
Data una funzione di calcolo della complessità $f(n)$ definiamo una seconda funzione $g(n)$ di riferimento. 
$$
\begin{array}{c}
\text{Upper bound} \\
f(n) \in O(g(n)) \Leftrightarrow \exists c, \exists n_0 : \forall n \geq n_0 : f(n) \leq c \cdot g(n)
\end{array}
$$
l'algoritmo descritto da $f(n)$ non va peggio di $g(n)$
$$
\begin{array}{c}
\text{Lower bound} \\
f(n) \in \Omega(g(n)) \Leftrightarrow \exists c>0, \exists n_0 : \forall n \geq n_0:f(n) \geq c \cdot g(n)
\end{array}
$$
l'algoritmo descritto da $f(n)$ richiede almeno $g(n)$
$$\begin{array}{c}
\text{Limite stretto} \\
f(n) \in \Theta(g(n)) \Leftrightarrow f(n) \in O(g(n)) \wedge f(n) \in \Omega(g(n))
\end{array}
$$
l'algoritmo descritto da $f(n)$ cresce di complessità esattamente come $g(n)$

Queste funzioni possono essere ridotte sfruttando la definizione di limite $\lim_{ n \to \infty } \frac{f(n)}{g(n)}=L$
- $L=+\infty \to f$ cresce più velocemente di $g$ ($f(n) \in \Omega(g(n))$) 
- $L=c>0 \to f(n) \in \Theta(g(n))$
- $L=0 \to f$ cresce meno velocemente di $g$ ($f(n)\in O(g(n))$ )

**Proprietà**
Sia $f(n)=f_1(n) + f_2(n)$ allora se:
1. $f_1 \in O(f_2(n)) \implies$ posso dire che $f(n)\in \Theta(f_2(n))$
2. $f_2 \in \Omega(f_1(n)) \implies$ posso dire che $f(n) \in \Theta(f_2(n))$
Questa proprietà torna utilissima in quanto se io considero $f(n)=T_A(n)$ ovvero la somma del costo di ogni singola istruzione dimostro praticamente il perché andiamo comunque a considerare la funzione di ordine maggiore.
### Macchina di Touring
Andando a studiare la complessità di un algoritmo consideriamo le istruzioni principali e a seconda della macchina che utilizziamo il costo delle istruzioni cambia.
La macchina più semplice è la Macchina di Turing e qualunque algoritmo che gira su un computer di ultima generazione può essere fatto girare anche su essa.
![[Pasted image 20260309182109.png | center | 400]]
Si tratta di un metro di misura universale per la calcolabilità, infatti con questa macchina ci si può concentrare sulla logica pura dell’algoritmo (senza complicazioni dovute a computer moderni).
Il tipo di legge, che lega il numero di istruzioni che eseguiamo a basso livello a quello che eseguiamo ad alto livello, è la stessa.
Questo ci permette di analizzare unicamente le istruzioni ad alto livello, astraendo le istruzioni a basso livello che ci sono dietro.
## Studio di complessità di linguaggi ad alto livello
Per calcolare la complessità di un algoritmo dobbiamo eseguire i seguenti passi:
1. capire quale caso stiamo cercando
   - migliore
   - peggiore
   - medio
2. capire le caratteristiche di $f(n)$ per esempio se il suo costo dipende dalla dimensione di input
3. identificare le istruzioni elementari che vengono eseguite il maggior numero di volte

Se sto analizzando il caso migliore ed è diverso dal caso peggiore vuol dire che ci sono delle uscite anticipate dal programma:
- nel caso migliore analizzo le uscite anticipate
- nel caso peggiore le ignoro, analizzando l'uscita più in ritardo
Con questo non si intende un caso particolare di input (staremo caratterizzando l'input e non la funzione di calcolo della complessità).

Nella definizione delle caratteristiche per identificare la dimensione di input in teoria dovremmo quantificare il numero di bit in ingresso, in realtà utilizziamo un parametro $n$ proporzionale al numero di bit di un singolo elemento.
Per semplicità utilizziamo solo $n$ e non lo moltiplichiamo per il numero di bit di un singolo elemento, anche perché asintoticamente la moltiplicazione per una costante non conta.
Nel caso di un vettore per esempio identifichiamo con $n$ il numero di elementi che lo compone oppure nel caso di matrici $n$ potrebbe essere il lato.
### Modello a costi uniformi
Assumiamo per ipotesi che tutte le operazioni elementari abbiano costo unitario, il costo di esecuzione di un algoritmo è la somma del numero di volte che le **istruzioni dominanti** vengono eseguite:
$$
T_A(n) = \sum_{i\in \text{Istr}} num(i)
$$
dove:
- $i \in \text{Istr}$ è una istruzione dell'insieme di tutte le istruzioni possibili
- $num(i)$ è il numero di volte che viene ripetuta l'istruzione $i$ e dipende dall'input
Tuttavia anche se sommo le istruzioni perdo tantissimo tempo, per cui basta prendere la funzione di ordine più grande corrispondente all'istruzione che si ripete più volte per cui posso dire che:
$$
num_{\text{Istr}}(n) \in \Theta(T_A(n))
$$
$\therefore$ l'istruzione elementare, a cui associo una funzione, è asintoticamente equivalente al costo di $A$.
>[!important] Istruzione dominante
>istruzione che viene ripetuta più volte
### Modello a costi logaritmici
Nel caso in cui non possiamo ignorare la grandezza dell'input nel calcolo della complessità, utilizziamo il **modello a costi logaritmici**.
Si assume che il costo temporale di ogni istruzione elementare sia proporzionale alla **dimensione fisica** (numero di bit) degli operandi, ovvero all'incirca al logaritmo in base 2 del loro valore.
Supponiamo di non conoscere il numero di bit dell'output e di volerlo calcolare. Dati due interi e volendo eseguire il loro prodotto:
- Valore $m \approx 2^i \implies$ occupa uno spazio proporzionale a $i$ bit, calcolabile come $\log_2(m)$
- Valore $n \approx 2^j \implies$ occupa uno spazio proporzionale a $j$ bit, calcolabile come $\log_2(n)$

Avremo che il valore finale dell'output sarà $m \cdot n \approx 2^{i+j}$.

Di conseguenza, lo spazio occupato in memoria da questo nuovo valore sarà proporzionale a $i + j$ bit. L'operazione di moltiplicazione, quindi, non avrà più un costo unitario $O(1)$, ma un costo temporale dipendente dalla lunghezza dei dati, pari a:
$$\log_2(m \cdot n) = \log_2(m) + \log_2(n)$$
## Complessità intrinseca
Per analizzare la complessità intrinseca di un problema abbiamo bisogno di due riferimenti
### Limite superiore
>[!important] Un problema $P$ ha un upper bound di complessità $O(g(n))$ se e solo se esiste un algoritmo $A$, risolutore di $P$, che ha complessità $O(g(n))$ nel caso peggiore.

Il limite superiore descrive, nel caso peggiore, la quantità di tempo (o di memoria) sufficiente per la risoluzione del problema dato.
Per trovare un limite superiore è sufficiente conoscere qualche algoritmo (non necessariamente il migliore) per la risoluzione del problema dato e valutarne la complessità.
La conoscenza di un upper bound, tuttavia, non ci dà un'informazione completa sulla complessità del problema, infatti potrebbero esistere metodi di risoluzione del problema dato, diversi da quelli noti che ne consentono la soluzione in modo più rapido.
### Limite inferiore
>[!important] Un problema $P$ ha un lower bound di complessità $\Omega(g(n))$ se e solo se tutti gli algoritmi di $A$, risolutori di $P$, hanno complessità $\Omega(g(n))$ nel caso peggiore.

È una indicazione della quantità di tempo (o di memoria) che, nel caso peggiore, è sicuramente necessaria (anche se non sufficiente) per la risoluzione del problema.
>[!bug] Per determinare un lower bound di complessità di un problema è necessario dimostrare che **nessun** algoritmo (anche non noto) per la risoluzione del problema stessa può fare a meno di utilizzare una certa quantità di risorsa (tempo, memoria) o di eseguire un certo numero di operazioni almeno in una serie di casi particolarmente difficili.

Spesso si dimostrano per assurdo.
Il lower bound alla complessità di un problema è anche detto **complessità intrinseca** del problema.
>[!important] Dato un problema $P$ avente complessità intrinseca $\Omega(g(n))$, un algoritmo $A$ risolutore di $P$ si dice **ottimale** per $P$ se $A$ ha complessità $O(g(n))$ nel caso peggiore

Per dimostrare il lower bound è possibile utilizzare una delle seguenti tecniche di dimostrazione a seconda del problema.
#### Produzione dell'output
Un algoritmo, per essere considerato risolutore del problema $P$, deve scrivere un output che soddisfi le specifiche del problema, per ogni istanza dell'input. Sapendo che, per un dato input di dimensione $n$, l'output ha necessariamente una dimensione $x(n)$ (indipendentemente da come lo calcoli), allora ogni algoritmo dovrà eseguire almeno $x(n)$ operazioni di scrittura, perché scrivere un elemento in output richiede almeno un passo, e non puoi scrivere due elementi in un solo passo.

*es.* moltiplicazione tra matrici
#### Ogni algoritmo deve leggere tutto l'input (tecnica dell'avversario)
Dato un problema $P$ e una funzione $f(n)$, vogliamo dimostrare che la complessità intrinseca di $P$ è $\Omega(f(n))$ formulando così una ipotesi.
Ragioniamo per assurdo e supponiamo di avere un algoritmo $A$ risolutore di $P$ che risolve $P$ in meno di $\Theta(f(n))$ passi.
Dato un input $x$ all'algoritmo $A$ esso analizzerà solamente una porzione di $x$ che chiameremo $x'$. Lanciando $A$ sull'input $x'$ restituirà un output $y$. 
Definendo un secondo input $\hat{x}$ identico a $x$ nella porzione $x'$ se esso restituisce un valore diverso da $y$ abbiamo dimostrato che l'algoritmo $A$ per essere risolutore di $P$ deve compiere almeno $f(n)$ passi
$$
P(x) \neq P(\hat{x}) \implies \exists x \in I :A(x) \neq P(x) \implies P \in \Omega(f(n))
$$
>[!quote] Complessità intrinseca della ricerca $\Omega(n)$
>Applicando la tecnica dell'avversario
>Ragionando per assurdo ipotizziamo l'esistenza di un algoritmo $A$ in grado di risolvere il problema su tutte le istanze di dimensione $n$ leggendo $n-1$ input.
>Diamo in input all'algoritmo $A$ due vettori di $n$ interi $v=[x_1,x_2,\dots,x_n]$ e $v'=[x_1,x_2,\dots,x_n']$ che differiscono solo per il valore $x_n \neq x_n'$. Andando a ricercare tramite $A$ il valore $x_n'$ sul vettore $v$ verrà restituito false, perché effettivamente non è contenuto in $v$, mentre passando come input $v'$ dovrebbe restituire true, ma restituirà comunque false perché l'ultima cella non viene controllata. abbiamo quindi dimostrato l'esistenza di un input per cui l'algoritmo $A$ non è risolutore di $P$, portando la complessità minima a $\Omega(n)$.
#### Albero decisionale
Nel caso in cui la complessità di un algoritmo non dipende dal numero di calcoli da fare ma dalle decisioni prese. Possiamo quindi rappresentare con un albero decisionale per modellare tutte le linee possibili di esecuzione che possiamo avere.
Ogni nodo interno rappresenta una operazione di confronto $T$ e i due rami uscenti corrispondono ai due esiti possibili e ogni foglia rappresenta l'esito possibile $R$.
Il percorso che va dalla radice dell'albero fino a una foglia rappresenta una singola esecuzione dell'algoritmo su un input specifico. La **lunghezza di questo percorso** indica esattamente il numero di confronti effettuati. 
Per le proprietà fondamentali dei grafi, sappiamo che un albero binario che raggiunge una profondità massima (altezza) $T$ non può avere più di $2^T$ foglie.
Di conseguenza, l'**altezza totale dell'albero** (il percorso più lungo possibile dalla radice a una foglia) rappresenta il caso peggiore per il numero di confronti.
Possiamo concludere che il numero di esiti possibili è sempre minore del numero di decisioni possibili
$$
k \leq 2^T \implies \log_2(n) \leq T \implies \Omega(n)
$$
per un albero binario con $k$ risultati possibili

>[!quote] Complessità intrinseca dell'ordinamento $\Omega(n \log_2(n))$
>Se abbiamo un array di $n$ elementi i risultati possibili sono le [[5. Calcolo combinatorio#Permutazioni|permutazioni]] $n!$. Ogni decisione all'interno dell'albero ha due risultati possibili, maggiore o minore, quindi abbiamo un albero binario.
>$$n! \leq 2^T$$
>asintoticamente $n!$ si comporta come $n^n$
>$$\displaylines{n^n\leq 2^T \\ \log_2(n^n) \leq T \\ n \log_2(n) \leq T}$$
>possiamo quindi affermare che la complessità intrinseca dell'ordinamento (che utilizza i confronti) è $$\Omega(n \log_2(n))$$

# Divide et impera
[[Algoritmi#Divide et impera]]

## Complessità temporale algoritmi di tipo 1
Per calcolare la complessità di un algoritmo ricorsivo possiamo separare le parti di costo dovute alla ricorsione e quelle relative alle operazioni interne.
Otteniamo quindi delle **equazioni di ricorrenza** così formulate
$$
\left\{\begin{array}{l}T(n) =bn^d+ aT\left( \frac{n}{c} \right) \\ T(1) = b\end{array}\right.
$$
dove $a$ numero di volte che viene richiamata la ricorsione, $b$ complessità del caso banale.
La complessità di $T(n)$ è dato da un costo per le operazioni interne $bn^d$ + un costo dato dalle chiamate ricorsive $aT\left( \frac{n}{c} \right)$.
### Teorema delle ricorrenze (teorema master)
Per misurare la complessità di un algoritmo di questo tipo dobbiamo conoscere $c$ e $d$, ma tramite il **teorema delle ricorrenze** e determinate ipotesi possiamo determinare la complessità a partire dalle equazioni di ricorrenza precedentemente trovate senza necessariamente conoscere l'implementazione dell'algoritmo.
Sotto ipotesi di complessità di `dividi` e `combina` polinomiale e conoscendo la complessità di `risolvi` come $O(1)$ in quanto soluzione banale, possiamo ugualmente calcolare la complessità come segue.

Supponendo di avere $\frac{n}{c}>1$, condizione citata in precedenza secondo il quale le nuove istanze saranno di dimensione minore rispetto alla istanza originale.
Partendo dalla equazione di ricorrenza principale ed espandendo le ricorrenze possiamo riconoscere un pattern:
$$
\begin{align*}
T(n) &= aT\left(\frac{n}{c}\right) + bn^d \\
&= bn^d + a\left(aT\left(\frac{n}{c^2}\right) + b\left(\frac{n}{c}\right)^d\right) \\
&= bn^d + a^2T\left(\frac{n}{c^2}\right) + ab\left(\frac{n}{c}\right)^d \\
&= a^2T\left(\frac{n}{c^2}\right) + ab\left(\frac{n}{c}\right)^d + bn^d \\
&= a^2T\left(\frac{n}{c^2}\right) + \sum_{i=0}^{1} a^i b \left(\frac{n}{c^i}\right)^d \\
&= a^2\left(aT\left(\frac{n}{c^3}\right) + b\left(\frac{n}{c^2}\right)^d\right) + \sum_{i=0}^{1} a^i b \left(\frac{n}{c^i}\right)^d \\
&= a^3T\left(\frac{n}{c^3}\right) + a^2b\left(\frac{n}{c^2}\right)^d + \sum_{i=0}^{1} a^i b \left(\frac{n}{c^i}\right)^d \\
&= a^3T\left(\frac{n}{c^3}\right) + \sum_{i=0}^{2} a^i b \left(\frac{n}{c^i}\right)^d
\end{align*}
$$
Possiamo quindi generalizzare la formula ottenuta per $i$ passi di sostituzione come:
$$\implies T(n) = a^i T\left(\frac{n}{c^i}\right) + \sum_{j=0}^{i-1} a^j b \left(\frac{n}{c^j}\right)^d
$$
che avrà validità fino a quando $\frac{n}{c^i}>1$, ma all'aumentare di $i$ ad un certo punto $\frac{n}{c^i}$ sarà $= 1$ per cui utilizzeremo la seconda equazione di ricorrenza $T(1)=b$ ottenendo quindi
$$
\begin{align*}
T(n) &= a^i b + \sum_{j=0}^{i-1} a^j b\left( \frac{n}{c^j} \right)^d \\
& = a^i b \left( \frac{n}{c^j} \right)^d + \sum_{j=0}^{i-1} a^j b\left( \frac{n}{c^j} \right)^d \\
& = \sum_{j=0}^{i} a^j b \left( \frac{n}{c^j} \right)^d
\end{align*}
$$
troviamo quindi quel valore di $i$ per cui cambia questa condizione $\frac{n}{c^i}>1\implies n< c^i \implies \log_c n <i$, l'ultimo valore di $i$ per cui avrà validità questa formula sarà quindi $\lceil \log_c n \rceil$, che possiamo banalmente approssimare asintoticamente a $\log_c n$. Lo sostituiamo ad $i$ ed otteniamo
$$
\begin{align*}
T(n) &= \sum_{j=0}^{\log_c n} a^j b \left( \frac{n}{c^j} \right)^d\\
& = b n^d \sum_{j=0}^{\log_c n} a^j \left( \frac{1}{c^j} \right)^d \\
& = b n^d \sum_{j=0}^{\log_c n} \left( \frac{a}{c^d} \right)^j
\end{align*}
$$
A questo punto possiamo andare avanti solo ponendo ulteriori ipotesi, distinguiamo quindi tra 3 casi possibili:
$$\begin{array}{|c|}
\hline
\frac{a}{c^d}=1 \\
\hline
\end{array}$$
$$
\begin{align*}
T(n) &= bn^d \sum_{j=0}^{\log_c n} 1 \\
&= bn^d(\log_c n + 1) \\
&= bn^d \log_c n + bn^d \\
\end{align*}
$$
$$
\implies T(n) \in \Theta(n^d \log_c n) = \Theta(n^d \log n)
$$
$$\begin{array}{|c|}
\hline
\frac{a}{c^d}<1 \\
\hline
\end{array}$$
$$
T(n) = bn^d + \sum_{j=0}^{\log_c n} \alpha ^j \quad \text{con } \alpha <1 \implies \text{convergente}
$$
$\exists c \in \mathbb{R}: \sum \alpha^j < c \quad \forall n$
$\therefore$ asintoticamente $T(n) = bn^d \cdot c$
$$
\implies T(n) \in \Theta (n^d)
$$
$$\begin{array}{|c|}
\hline
\frac{a}{c^d}>1\\ \hline
\end{array}$$
$$
T(n) = bn^d \cdot \sum_{j=0}^{\log_c n} \beta ^j \quad \text{con } \beta >1
$$
Riscriviamo la sommatoria in forma chiusa
$$
\sum_{j=0}^k \beta^j = \frac{\beta^{k+1}-1}{\beta-1}
$$
con $\beta = \frac{a}{c^d}$ e $k= \log_c n$
$$
T(n) = bn^d \frac{\left( \frac{a}{c^d} \right)^{\log_c n +1}-1}{\left( \frac{a}{c^d} \right)-1}
$$
$\therefore$ asintoticamente
$$
\begin{align*}
T(n) &= bn^d \left( \frac{a}{c^d} \right)^{\log_c n}\\
&= bn^d \frac{a^{\log_c n}}{c^{d \log_c n}}\\
& = bn^d \frac{a^{\log_c n}}{n^d}\\
& = ba^{\log_c n}
\end{align*}
$$
cambiamo la base del logaritmo
$\log_c n = k \log_a n = c^{\log_c n}=(c^k)^{\log_c n} \implies k=\log_c a$
$$
T(n) = b a^{\log_a n \log_c n} = b n ^{\log_c a}
$$
$$
\implies T(n) \in \Theta(bn^{\log_c a})
$$



$\therefore$ Per riassumere: negli algoritmi di tipo 1
$$
\begin{array}{|c|c|}
\hline
\frac{a}{c^d} = 1 & T(n) \in \Theta(n^d \log n) \\
\hline
\frac{a}{c^d} < 1 & T(n) \in \Theta(n^d) \\
\hline
\frac{a}{c^d}>1 & T(n) \in \Theta (n^{\log_c a}) \\
\hline
\end{array}
$$
dove $a$ numero di volte che viene richiamata la ricorsione, $d$ esponente della complessità del caso banale e $c$ fattore di divisione.
### Complessità ricerca binaria
La ricerca binaria è classificabile come un algoritmo di tipo 1 con parametri
$a = 1$, $c=2$ e $d= 0$
$$
\frac{a}{c^d} = \frac{1}{2^0} = 1 \implies T_R(n) \in \Theta(n^d \log_c n) = \Theta(\log_2 n)
$$
### Merge sort
[[Ordinamento#Merge sort]]
Nel merge sort abbiamo parametri
$a = 2$, $c= 2$ e $d=0$
$$
\frac{a}{c^d} = \frac{2}{2^1} = 1 \implies T_M(n) \in \Theta(n^d \log_c n) = \Theta (n \log_2 n)
$$
Osservando però la complessità spaziale:
lo spazio occupato da ogni chiamata è costante $b$
$$
M(n) = b + M\left( \frac{n}{2} \right)
$$
Allochiamo anche un vettore, dovremmo aggiungere anche lo spazio allocato da esso ($n$), ma in quanto viene allocato all'interno della chiamata a `merge()` che avviene dopo le sottoistanze può anche non essere considerato.
$$
M(n) = \max\left( b+M\left( \frac{n}{2} \right) ,n\right)
$$
Inoltre abbiamo due chiamate alle sottoistanze, ma al termine di una la sua memoria viene deallocata, liberando il relativo spazio, quindi possiamo tenerne in considerazione solo una nel calcolo della complessità.
Studiamo separatamente i due casi
Definiamo quindi delle equazioni di ricorrenza
$$
\left\{\begin{array}{l}
M(n) = b+M\left( \frac{n}{2} \right) \\
M(1) = b
\end{array}\right.
$$
Possiamo utilizzare il [[#Teorema delle ricorrenze]] anche per la complessità spaziale
con $a=1$, $c=2$ e $d=0$ otteniamo
$$
M_{1}(n) \in \Theta (\log_2 n)
$$
e per il vettore
$$
M_2(n) \in \Theta (n)
$$
### Quick sort
[[Ordinamento#Quick sort]]
Per ottimizzare la complessità spaziale del merge sort dovremmo quindi occuparci di $M_{2}$ e quindi dell'allocazione del vettore accessorio.
Per eliminare l'allocazione extra, senza cambiare la complessità temporale, dobbiamo eliminare la necessità del `merge()`
Per far questo passiamo dalla divisione a metà del merge alla `partition()`, separiamo preventivamente gli elementi piccoli da quelli grandi rispetto a un elemento di riferimento (il **pivot**).
Questa operazione si può fare in place, senza necessità di generare nuovi vettori di elementi e con complessità $n$, in quanto è sufficiente avere due indici che scorrono dai lati opposti fino a quando non trovano un elemento rispettivamente maggiore e minore del pivot, a quel punto effettuiamo uno swap tra di essi, ovviamente questo avviene fino a quando i due indici non si sovrappongono.
La scelta del pivot diventa quindi molto importante, idealmente per avere una complessità minore possibile sarebbe necessario conoscere il mediano, che renderebbe la renderebbe $\Theta(n)$, ma conoscere il mediano con certezza necessità di un algoritmo che costerebbe tanto quanto fare l'ordinamento stesso, quindi non può aiutarci.
Non avendo con certezza il mediano andrebbe stimato, ma in mancanza di altre informazioni viene scelto a caso (nel caso in cui gli elementi sono molto simili la media sarebbe una buona stima del mediano).
Otteniamo quindi una complessità temporale per il partition di:
- **caso migliore**:
  pivot = mediano
  $$T_{qp}\Theta\left( \frac{n}{2} \right) = \Theta(n)$$
- **caso peggiore**:
  pivot = min/max
  $$T_{qp}(n) \in \Theta (n)$$
Abbiamo così perso la sicurezza del $c=2$, per ottenere una maggiore ottimizzazione degli spazi.

---
**COMPLESSITÀ SPAZIALE (WORST)**
Per quanto riguarda la **complessità spaziale** nel caso peggiore (pivot = max/min) la complessità sarà
$$
M(n) = b+M(n-1) \implies M(n) \in \Theta (n)
$$
che è la stessa della creazione del vettore nel [[#Merge sort]], ma le chiamate risiedono nello stack e non nell'heap (lo stack è considerato di più alto valore), quindi risulta essere anche peggiore del merge.
Per ottimizzare ulteriormente l'algoritmo possiamo:
- [[Python#Conversione universale da metodi ricorsivi ad iterativi|Conversione universale da metodi ricorsivi ad iterativi]]
- **Eliminazione della ricorsione di coda**
  Invece di effettuare un controllo all'inizio del metodo se ci troviamo nel caso banale effettuiamo un ragionamento contrario, con un while, finché non siamo nel caso banale eseguiamo il corpo del codice. Questo ci permette di passare da un algoritmo ricorsivo ad un algoritmo iterativo, passando da una complessità spaziale $\Theta(n)$ ad una complessità spaziale $\Theta(1)$ .

**Ricorsivo**
``` java
private static tipo metodo (parametri) {
	if(parametri di dimensione banale)
		return casobase(parametri);
	corpo(parametri)
	return metodo(parametrimodificati);
}  
```
**Iterativo**
``` java
private static tipo metodo (parametri) {
	while (parametri di dimensione non banale){
		corpo(parametri)
		parametri = parametrimodificati
	}
	return casobase(parametri);
}
```

**Applicandola al quick sort**
Nel quick sort abbiamo due diramazioni della ricorsione:
Non ci limiteremo a passare da un `if` ad un `while`, ma aggiungiamo un controllo all'interno del while che ci permette di capire in quale partizione ci troviamo, in modo da eseguire la ricorsione nella partizione con meno elementi
``` java
private static void quickSort(int[] v, int in, int fin) {
	if(fin<=in)
		return;
	int p= partiziona(v,in,fin);
	quickSort(v,in,p-1);
	quickSort(v,p+1,fin);
}
```

``` java
private static void quickSort(int[] v, int in, int fin) {
	while(!(fin<=in)){
		int p= partiziona(v,in,fin);
		if(p<((in+fin)/2)){
			quickSort(v,in,p-1);
			in=p+1; fin=fin;
		} else {
			quickSort(v,p+1,fin);
			fin=p-1; in=in;
		}
	}
	return;
}
```

In questo modo la chiamata ricorsiva non sarà mai su un numero di elementi maggiori di $\frac{n}{2}$
Otteniamo così una complessità spaziale di
$$
M_q(n) \in \Theta(\log n)
$$

---
**COMPLESSITÀ TEMPOTALE (WORST)**
Analizziamo quindi le equazioni di ricorrenza per la complessità temporale nel caso peggiore
$$
T_q(n) = bn + T(n-1)
$$
Possiamo vedere come nel caso peggiore è un [[#Complessità temporale algoritmi di tipo 2|algoritmo di tipo 2]] e non possiamo quindi applicare il [[#Teorema delle ricorrenze|teorema delle ricorrenze]]
$$
\begin{align*}
T(n) & = bn + b(n+1) + T(n-2)\\
& = \sum_{i=0}^1(n-i) + T(n-(i+1)) \\
& = b \sum_{i=0}^1 (n-i) + b(n-2) + T(n-3) \\
& = b \sum_{i=0}^{k-1} (n-i)+T(n-k) 
\end{align*}
$$
per $k=n-1$
$$
\begin{align*}
T(n) & = b \sum_{i=0}^{n-2}(n-i)+b \\
& = b \sum_{i=0}^{n-2} (n-i) + b(n-(n-1)) \\
& = b \sum_{i=0}^{n-1} (n-i) = b \sum_{i=1}^n i  
\end{align*}
$$
che scritta in forma chiusa
$$
=b \left( \frac{n(n+1)}{2} \right) = \frac{b}{2} n^2 + \frac{b}{2} n
$$
Di conseguenza nel caso peggiore
$$
T_q^{worst}(n) \in \Theta(n^2)
$$
---
**COMPLESSITÀ TEMPORALE (AVERAGE)**
Sapendo che la scelta del pivot è equiprobabile possiamo anche fare un analisi di caso medio.
Otteniamo una equazione così formata:
$$
T(n) = \sum_{p=0}^{n-1} \frac{1}{n} (n + T(p) + T(n-p-1)) 
$$
con $T(p)$ e $T(n-p-1)$ costi di risoluzione delle due partizioni, che sono complementari, quindi se uno avrà complessità maggiore l'altro avrà complessità minore e viceversa, possiamo quindi approssimarli a $2 T(p)$
$$
\begin{align*}
T(n) & = \sum_{p=0}^{n-1} \frac{1}{n}n + \frac{2}{n}T(p) \\
& = n + \sum_{p=0}^{n-1}  \frac{2}{n}T(p)
\end{align*}
$$
Per sostituzione otteniamo che ([[divideEtImpera.pdf|slide divide et impera pag. 27]])
$$
T(n) \leq 2 n \log n
$$
Otteniamo quindi
$$
T_q^{avg}(n) \in \Theta(n \log_2 n)
$$
## Complessità temporale algoritmi di tipo 2
Per gli algoritmi di tipo 2 abbiamo delle equazioni di ricorrenza così formulate
$$
\left\{\begin{array}{l}T(n) = b + aT(n-k) \\ T(1) = b\end{array}\right.
$$
### Complessità temporale del fattoriale ricorsivo
Prendiamo per esempio il calcolo del fattoriale ricorsivamente
``` python
def fatt(n):
    if n > 1:
        return fatt(n - 1) * n
    else:
        return 1
```

prendendo $n$ come valore di input con dimensione di input $|n|= \log_2(n) \implies n=2^{|n|}$ 
assumiamo che la chiamata ha costo unitario $O(1)$
La sua complessità può essere calcolata come
$$
T_A(n) = \text{numero chiamate } \cdot \text{ costo chiamata}
$$
che restituisce
$$
n \cdot O(1) = \Theta(n) = \Theta(2^{|n|})
$$
Facendo così però sovrastimiamo di molto il risultato, in quanto il costo di chiamate dipende da $n$, ma ogni chiamata avrà un costo minore tipicamente (non nel fattoriale).
### Complessità temporale di Fibonacci ricorsivo
Vediamo invece il calcolo di Fibonacci ricorsivamente
``` python
def fib(n):
    if n <= 2:
        return 1
    else:
        return fib(n-1) + fib(n-2)
```

la sua complessità sarà definita come
$$
\left\{\begin{array}{l} T_f (n) = b + T_f(n-1) + T_f(n-2) \\ T_f(1) = b\end{array}\right.
$$
questa formulazione prende il nome di **equazioni di ricorrenza**.
Dobbiamo quindi risolvere la ricorsione e può essere fatto in diversi modi:
#### Metodo di risoluzione dell'iterazione
Conoscendo la forma base per $T_f(n-1)$
$$
T_f(n-1) = b + T_f(n-2) + T_f(n-3)
$$
Essendo $T_f(n-1)\geq T_f(n-2)$ per fare una **maggiorazione** in $T_f(n)=b+T_f(n-1)+T_f(n-2)$ sostituiamo $T_f(n-1)$ al posto di $T_f(n-2)$ ottenendo
$$
\left\{\begin{array}{l}T_f(n) = b + 2 T_f(n-1) \\ T_f(1) = b\end{array}\right.
$$
Supponiamo che $n-1>1$
per $T_f(n-1)$ otteniamo quindi
$$
T_f(n-1) = b + 2T_f(n-3)
$$
lo sostituiamo quindi in $T_f(n)$
$$
\displaylines{
T_f(n) = b+ 2(b+T_f(n-2)) \\
=b+2b+2^2(b+2T_f(n-3)) \\
=b+2b+2^2b + 2^3T_f(n-3)
}
$$
continuando ad espandere la formula possiamo notare come possiamo riscrivere il tutto come una sommatoria:
$$
b+2b = b\sum_{j=0}^1 2^j 
$$
$$
T_f(n) = b \sum_{j=0}^{2} 2^j + 2^3T_f(n-3) 
$$
possiamo quindi generalizzare $\forall i : n-i\geq 1$ come
$$
\therefore T_f(n) = b \sum_{j=0}^{i-1} 2^j + 2^i T_f(n-i) 
$$
per induzione quindi
$$
\displaylines{
T_f(n-i) = b+2T_f(n-(i+1)) \\
T_f(n) = b \sum_{j=0}^{i-1} 2^j + 2^i \cdot (b + 2T_f(n-(i+1)))\\
=b \sum_{j=0}^{i-1} 2^j + b_{2}^i + 2^{i+1}T_f(n-(i+1))= \\
=b \sum_{j=0}^i 2^j + 2^{i+1}T_f(n-(i+1)) 
}
$$
continuando in questo modo ad un certo punto $n-i=1$ quando $i=n-1$, sostituiamo quindi questo valore
$$
T_f(n) = b \sum_{j=0}^{n-2} 2^j + 2^{n-1} \cdot b 
$$
semplifichiamo
$$
T_f(n) = b \sum_{j=0}^{n-1} 2^j = 2^n-1
$$
$$
\implies T_f(n) \in O(2^n)
$$
abbiamo quindi dimostrato che Fibonacci ricorsivo ha complessità $O(2^n)$; per completare la dimostrazione dobbiamo minorare la funzione per studiare $\Omega$
$$
\left\{\begin{array}{l}T_f(n) = b + 2T_f(n-2) \\ T_f(1) = b\end{array}\right.
$$
espandiamo quindi la ricorsione
$$
\displaylines{
T_f(n-2) = b + 2T_f(n-4) \\
T_f(n-4) = b+2T_f(n-6) \\
\therefore T_f(n) = b+2(b+2T_f(n-4)) = \\
=b+2b + 2^2 T_f(n-4) =\\
= b+2b+2^2b +2^3T_f(n-6)=\\
=b \sum_{j=0}^2 2^j + 2^3T_f(n-6)
}
$$
generalizzabile come
$$
T_f(n) = b \sum_{j=0}^{i-1} 2^j + 2^i T_f(n-2i) 
$$
fino a $n-2i=1$ che sarà per valori di $i=\frac{n-1}{2}$, sostituiamo questo valore e otteniamo
$$
\displaylines{
T_f(n) = b \sum_{j=0}^{\frac{n-1}{2}-1} 2^j + 2^{\frac{n-1}{2}} \underbrace{T_f\left( n-2\left( \frac{n-1}{2} \right) \right)}_{T_f(1)=b}\\
=b \sum_{j=0}^{\frac{n-1}{2}} 2^j = 2^{\frac{n-1}{2}+1}-1 
}
$$
$$
\implies T_f(n) \in \Omega (2^{n/2})
$$
$\therefore$ Fibonacci ha complessità $\sqrt{ 2 }\leq b \leq 2$
$b$ è esattamente la costante armonica
## Complessità spaziale dei ricorsivi
Per la complessità spaziale potremmo considerare tutte le chiamate a funzione, ma avremmo una grande maggiorazione, in quanto trascuriamo il fatto che lo stack funziona come una pila e le istanze non più utili vengono deallocate.
Definiamo quindi la complessità spaziale dei ricorsivi come il numero massimo di chiamate attive contemporaneamente.
Cambiano anche le equazioni di ricorrenza:
$$
\displaylines{
M_f(n) = b + \max(M_f(n-1), M_f(n-2)) \\
=b+M_f(n-1)
}
$$
è uguale alla complessità del fattoriale
$$
\implies M_f(n) \in \Theta(n)
$$
notiamo come la complessità spaziale sia sempre minore della complessità temporale
$$
M_f(n) < T_f(n)
$$


### Heap sort
![[Strutture dati#Heap sort]]

### Counting sort
![[Ordinamento#Counting sort]]
### Radix sort
![[Ordinamento#Radix sort]]
## Prodotto
![[Algoritmi#Moltiplicazione tra interi]]

### Prodotto di matrice quadrata
![[Algoritmi#Prodotto tra matrici quadrate]]

## Potenza
![[Algoritmi#Calcolo complessità della potenza]]

# Alberi
[[Strutture dati#Alberi]]
## Visita infissa
``` python
def visitainfissa(self, l):
	if self.sin is not None:
		self.sin.visitainfissa(l)
	l.append(self.val)
	if self.des is not None:
		self.des.visitainfissa(l)
```
**complessità temporale**
- caso peggiore
senza considerare le chiamate ricorsive è costante, solo la print
su un nodo facciamo 1 chiamata $\implies$ numero di chiamate = numero di nodi
$$\Omega(n) = O(n) = \Theta(n)$$
- caso migliore = caso peggiore, il numero di chiamate è uguale

**complessità spaziale**
ci è data dal numero di chiamate in contemporanea (ogni chiamata non alloca altra memoria) $\to$ varia a seconda della forma dell'albero
- caso peggiore
tutte le chiamate attive: se tutti i nodi hanno al più un figlio
$$
\Theta(n)
$$
- caso migliore
si potrebbe fare con le equazioni di ricorrenza
caso in cui l'albero è poco profondo (è bilanciato)
$$
M(n) = 1 + M\left( \frac{n}{2} \right) \in \Theta(\log_2 n)
$$
## Cerca
``` python
def cerca(a:AlberoBin, x:int) -> bool:
	// caso base
	if a is None:
		return False
	return x == a.val or cerca(a.sin) or cerca(a.des)
```

**Complessità temporale**
- **caso migliore**
la radice è il valore cercato potrebbe essere il caso migliore
ma ancora prima è se è none, ma non lo consideriamo, è solo il caso in cui la dimensione dell'input è 0, quindi non lo posso considerare come caso migliore
$$
T(n) \in \Theta(1)
$$
- **caso peggiore**
$$
T(n) \in \Theta(n)
$$
**Complessità spaziale**
- **caso migliore**
alloco memoria solo nelle chiamate ricorsive
ogni chiamata occupa uno spazio costante
non può essere più alta di quella temporale $\implies M(n) \in \Theta(1)$

## Visita per livelli
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
![[Pasted image 20260330150731.png|center|300]]
**Complessità temporale**
- caso peggiore:
  ogni nodo viene inserito o rimosso solo una volta
  Considerando il n° di volte in cui viene eseguito il while: $$T(n) \in O(n)=\Omega(n)=\Theta(n)$$
- caso migliore = caso peggiore → il numero di chiamate è uguale

**Complessità spaziale**
è data dalla grandezza della coda allocata:
- caso peggiore:
  ogni nodo (eccetto foglie) ha entrambi i figli → all’ultimo livello abbiamo la coda con + elementi al suo interno. 
In particolar modo, consideriamo:
- n° di foglie è: $L = 2^h$
- n° totale di nodi: n = $2^h-1$
Quindi: $n = 2 · (2^h) -1$
$n = 2L -1$
$$L=\frac{n+1}{2} \implies M(n) \in O(n)$$
- caso migliore:
  ogni nodo ha 1 solo figlio → 1 nodo x livello → `len(coda) = 1`
$$M(n)\in \Theta(1)$$
## Iteratore
Nel caso peggiore (albero addensato a sinistra) solo la costruzione dell'interatore ci costa $O(n)$ perché deve scendere tutto l'albero inizialmente
Allo stesso modo se ho un addensamento anche successivo nel momento in cui richiamo la `next()`.
con questo ragionamento il `for` ha un costo quadratico per iterare su tutto l'albero $O(n^2)$
Le chiamate a `next()` le abbiamo considerate come costo lineare, ma non tutte le chiamate hanno lo stesso costo di `n`.
$\to$ calcolo della complessità ammortizzata
se consideriamo insieme tutti i `for` le chiamate ad un costo molto alto vengono compensate dalle chiamate con un costo basso
### tecnica dei crediti
1. Identifico delle operazioni che nella singola chiamata sono quelle eseguite di più (tipicamente elementari)
2. Ad esse associamo un credito
3. dimostriamo che con un certo budget qualunque sia il modo di risolvere le operazioni risolviamo il problema
4. dimostriamo così un limite superiore $O$

nel caso dell'iteratore possiamo considerare tutte le volte che spostiamo `curr`.
Il passaggio da un nodo ad un altro ha il costo di un credito.
Ad un certo punto rispenderò un credito per fare il passaggio inverso, ma non succederà mai che tornerò un altra volta $\implies$ per ogni arco ho al più 2 crediti (andata e ritorno).
$\therefore$ con 2 crediti per ogni arco possiamo effettuare qualsiasi operazione necessaria per l'iteratore.
complessivamente scorrere tutto l'iteratore ha un costo di $O(2n)$ approssimato asintoticamente a $O(n)$.
# Tabella hash
[[Strutture dati#Tabelle Hash]]
Generalmente in una tabella hash le operazioni avvengono con complessità $O(1)$
## Lista di collisioni
Nel caso peggiore con una lista di collisioni tutti gli elementi risiedono in un solo bucket, quindi la ricerca diventa lineare.
## Indirizzamento aperto
Definito il fattore di carico come $\alpha$, sotto ipotesi di uniformità dell'insieme $U$
**Analisi del caso medio**
prendendo una cella casuale la probabilità che essa sia occupata è data proprio da $\alpha$, mentre che sia libera è data da $(1-\alpha)$ 
- Chiave trovata
  L'algoritmo calcola l'hash e cerca l'elemento a partire dall'indice descritto dalla funzione di hash, finché non trova l'elemento
- Chiave non trovata
  L'algoritmo cerca la chiave a partire dall'indice descritto dalla funzione di hash, ma la chiave non è presente nella struttura, quindi si ferma solo quando finisce la tabella.

$$
\begin{array}{|c|c|c|}
\hline
\text{esito ricerca} & \text{scansione lineare} & \text{hashing doppio} \\
\hline
\text{chiave trovata} & \frac{1}{2}+ \frac{1}{2(1-\alpha)} & - \frac{1}{\alpha} \ln(1-\alpha) \\
\hline
\text{chiave non trovata} & \frac{1}{2}+ \frac{1}{2(1-\alpha)^2} & \frac{1}{1-\alpha} \\
\hline
\end{array}
$$
Questi risultati sono dimostrabili (libro pag 227)
#dimostrazione molto approssimativa
Il più semplice e intuitivo è chiave non trovata con hashing doppio, in questo caso la prima ispezione viene effettuata con complessità $1$, la successiva è data dalla probabilità che la cella sia occupata $\alpha$.
Ogni cella ha una probabilità di essere piena data dalla probabilità della cella stessa moltiplicata per la probabilità delle precedenti.
$$
Pr(X\geq i) = \frac{n}{m} \cdot \frac{n-1}{m-1} \cdot \frac{n-2}{m-2}\cdot\dots
$$
asintoticamente sono tutte approssimabili ad $\alpha \implies Pr(X\geq i) = \alpha^i$
Quindi per calcolare il valore atteso sommiamo tutti gli elementi.
Otteniamo una serie geometrica $\sum_{i=0}^\infty \alpha^i$ con ragione $\alpha$, che per definizione di indirizzamento aperto $n<m$ risulta essere $\alpha<0$, convergendo quindi a $\frac{1}{1-\alpha}$.

Possiamo concludere che in media non perdiamo $O(1)$
## Riallocazione
Se dovessi aggiungere una cella ogni inserimento la complessità sarebbe
$$
\frac{\sum_{i=1}^n i}{n} = n
$$
Distruggendo l'utopia della complessità costante.
Infatti non si fa questa cosa.
Per aggiungere un elemento se sono finiti gli spazi vuoti si rialloca l'intera struttura con il numero di celle raddoppiate come per l'[[Java#ArrayList|ArrayList]].
>[!blank|float-left]
>![[Complessità algoritmi-1775906732756.webp|center|300]]

Per il calcolo della complessità utilizziamo la [[#tecnica dei crediti]].
**Inserimento**
Assegnamo ad ogni inserimento $c=3$ crediti.
Un normale inserimento (nel caso in cui ci sono posti liberi) avrà un costo di $1$ credito.
I crediti non utilizzati durante i normali inserimenti verranno utilizzati durante la riallocazione.

Notiamo come il numero dei crediti finirà per aumentare, quindi 3 crediti per inserimento sono sufficienti per dimostrare che per $n$ operazioni il costo medio $\frac{3n}{n}=3$ è costante.

**Cancellazione**
Con la medesima tecnica si può dimostrare che la complessità della cancellazione ha complessità costante, necessitando addirittura di meno di 3 crediti per operazione.

Non conviene effettuare il dimezzamento non appena possibile, rischiamo che l'aggiunta di un nuovo valore subito dopo il dimezzamento causi un raddoppio, aumentando di gran lunga la complessità.
Effettuiamo il dimezzamento solo quando $\frac{1}{4}$ dello spazio totale è occupato. Verrà sprecato più spazio, ma garantiamo la corretta complessità costante sia per cancellazione che per inserimento.


>[!question] Osservazione
>Nel caso migliore facendo inserimenti e cancellazione migliora ancora di più la complessità, non avendo la necessità di riallocare la struttura praticamente mai.

# Insiemistica
[[Strutture dati#Insiemi]]
con $n$ numero di elementi dell'insieme
e $n_d$ numero di elementi del dominio

|             | AVL                                                       | HashTable                   | bit set       |
| ----------- | --------------------------------------------------------- | --------------------------- | ------------- |
| $\in$       | $\Theta(\log_2 n)$                                        | $\Theta(1)$                 | $\Theta(1)$   |
| inserimento | $\Theta(\log_2 n)$                                        | $\Theta(1)$                 | $\Theta(1)$   |
| rimozione   | $\Theta(\log_2 n)$                                        | $\Theta(1)$                 | $\Theta(1)$   |
| $\cup$      | $\Theta((n_{1}+n_{2})\cdot\log_2 (n_{1}+n_{2}))$          | $\Theta(n_{1}+n_{2})$       | $\Theta(n_d)$ |
| $\cap$      | $\Theta((n_{1} + n_{2})\cdot \log_2 (\min(n_{1},n_{2})))$ | $\Theta(\min(n_{1},n_{2}))$ | $\Theta(n_d)$ |
| $\setminus$ | $\Theta(n_{1} \log_2 n_{1})$                              | $\Theta(n_{1})$             | $\Theta(n_d)$ |
**AVL**
unione
	fusione di liste ordinate, posso utilizzare gli iteratori scorrendoli insieme, avanzo finché non trovo oggetti diversi, se sono diversi li inserisco entrambi, altrimenti ne inserisco solo uno e in entrambi i casi avanzo
	Il costo sarà dato dallo scorrimento di entrambi e dagli inserimenti nella nuova struttura dati

intersezione
	analoga alla fusione, ma inseriamo elementi solo se sono uguali
	La complessità è data dal numero di elementi di entrambe gli alberi da scorre per il numero di inserimenti, che in questo caso è solo il minimo tra i due

differenza
	il costo di confronto e inserimento si calcolano rispetto al numero di elementi del primo insieme

**Hashtable**
unione
	devo iterare sugli elementi: otteniamo la complessità che avremo con le liste disordinate - scorro il primo insieme e li metto nell'output, poi scorro il secondo e verifico se sono già presenti mentre scorro

intersezione
	scorro gli elementi del primo insieme e per ogni elemento dell'insieme più piccolo verificare se è presente nel secondo quindi il costo è il minimo tra le due dimensioni

differenza
	devo scorrere gli elementi del primo e vedere se sono nel secondo, se ci sono non li metto nel risultato altrimenti si
	quindi la complessità è proporzionale al primo

**Bit set**
In questo caso la dimensione dell'insieme è uguale a $n_d$.

Appartenenza, inserimento e rimozione sono costanti, sono celle di un vettore a cui posso accedere direttamente.

Per unione, intersezione e differenza faccio per ogni posizione operazioni bitwise, con un costo di lineare rispetto a $n_d$
- unione $n_{1}[x] \vee n_{2}[x]$
- intersezione $n_{1}[x] \wedge n_{2}[x]$
- differenza $n_{1}[x] \wedge \neg n_{2}[x]$

>[!important] possiamo usare operazioni vettoriali nella ALU quindi riduciamo la complessità a costante. Se nel mio processore ho una scheda video sarà lei a fare le operazioni ottenendo uno speed up incredibile potendo effettuare le operazioni in parallelo 🤯🤯
# Union find
## Quick find
### Quick find con bilanciamento
[[Strutture dati#Quick find con bilanciamento dell'unione]]
Con questo bilanciamento la complessità della singola unione, nel caso peggiore sarà pari a $\frac{n}{2}$
## Quick union
### Quick union con bilanciamento
[[Strutture dati#Union by Size - Bilanciamento QuickUnion]]
> [!info] Osservazione
> 
> Nel caso peggiore, una singola unione costa al massimo $n^2$ spostamenti: non c’è guadagno nel costo dell’operazione in sé ($T_w(A) = O(n)$). 
> Tuttavia, nel caso in cui eseguissimo $n-1$ unioni, il costo ammortizzato diminuirebbe da 
> $$O(n^2)\rightarrow O(n \log_2 n)$$ 

Questo guadagno si dimostra grazie alla tecnica dei crediti.
**Analisi Ammortizzata**
Consideriamo quante volte un singolo elemento $x$ può essere spostato (cioè quante volte il suo "padre" viene cambiato) durante tutta la vita dell'algoritmo:

| numero di spostamenti | \|sx\|         |
| --------------------- | -------------- |
| 0                     | $\geq 1$       |
| 1                     | $\geq 2$       |
| 2                     | $\geq 4$       |
| 3                     | $\geq 8 = 2^3$ |
| $\vdots$              | $\vdots$       |
| $k$                   | $\geq 2^k$     |

- Assegniamo a ogni elemento appena creato $\log_2 n$ crediti.
- Quando un elemento $x$ deve cambiare padre durante una `union`, spende 1 credito.
Durante tutte le unioni la taglia non può mai superare $n$.
Se un elemento $x$ viene spostato, sappiamo per regola che la cardinalità dell'insieme di partenza $A$ (che contiene $x$) è minore o uguale a quella di $B$:
$$|A| \le |B|$$
Inoltre sappiamo che i due insiemi sono disgiunti $A \cap B = \emptyset$ $\implies$la **size** dell'unione sarà:
$$|A \cup B| = |A| + |B| \ge |A| + |A| = 2|A|$$
Quindi, per ogni spostamento la taglia dell'insieme in cui si trova l'elemento **almeno raddoppia**. Partendo da un insieme di grandezza 1, esso può raddoppiare al massimo $\log_2 n$ volte prima di raggiungere la dimensione massima $n$.

La dimensione massima che un insieme può raggiungere è $n$ (tutti elementi sono in un insieme).
$$2^k = n \implies k = \log_2 n$$
Siccome, ogni elemento può cambiare padre al massimo $\log_2 n$ volte $\implies$ crediti totali spesi per gli $n$ elementi dopo $n-1$ unioni saranno al massimo $\mathcal{O}(n \log_2 n)$.
#### Dimostrazione per induzione: altezza logaritmica
Un albero Quick Union bilanciato con radice $x$ ha sempre almeno $2^{\text{rank}(x)}$ nodi.
Se eseguiamo un'unione tra due alberi, la dimensione finale rispetterà le seguenti condizioni:

Se $\text{rank}(A) > \text{rank}(B)$:$$|A \cup B| = |A| + |B| \ge 2^{\text{rank}(A)} + 2^{\text{rank}(B)} > 2^{\text{rank}(A)} = 2^{\text{rank}(A \cup B)}$$Se $\text{rank}(A) < \text{rank}(B)$:$$|A \cup B| = |A| + |B| \ge 2^{\text{rank}(A)} + 2^{\text{rank}(B)} > 2^{\text{rank}(B)} = 2^{\text{rank}(A \cup B)}$$Se $\text{rank}(A) = \text{rank}(B)$:$$|A \cup B| = |A| + |B| \ge 2^{\text{rank}(A)} + 2^{\text{rank}(B)} = 2 \cdot 2^{\text{rank}(A)} = 2^{\text{rank}(A) + 1} = 2^{\text{rank}(A \cup B)}$$
Di conseguenza, se un albero contiene in totale $n$ nodi, la sua altezza massima non potrà mai superare $\log_2 n$:
$$2^{\text{rank}(A \cup B)} = n \implies \text{rank}(A \cup B) = \log_2 n$$
**Complessità temporale:**
- `find(elem)`: dal caso lineare $O(n)$ passa al caso logaritmico $O(\log_2 n)$ (proporzionale all'altezza dell'albero).
- `union(A,B)`: rimane in tempo costante $O(1)$.

# Grafi
[[Strutture dati#Grafi]]
Le prestazioni dipendono dal tipo di implementazione che facciamo
## Operazioni di base
### Lista di archi
![[Complessità algoritmi-1777122304106.webp|center|600]]
### Liste di adiacenza
![[Complessità algoritmi-1777122326765.webp|center|600]]
### Matrice di adiacenza
![[Complessità algoritmi-1777122364543.webp|center|600]]
## Visite
La complessità temporale delle visite ovviamente dipende da come vengono implementati i grafi.
In tutti i casi invece la complessità spaziale è data dal numero massimo di elementi nella pila, che nel caso peggiore è
$$
M(n)
$$
### Visita in profondità
[[Strutture dati#Visita a scandaglio / in profondità]]
```
def visitaprofondita(g: Grafo, nodo: int) -> list[int]:
    risultato: list[int] = []
    pila: list[int] = []
    visitati: list[bool] = [False for i in range(g.n)] # O(n)
    pila.append(nodo)
    while pila:   # O(m)
        curr: int = pila.pop()
        if not visitati[curr]:   # O(1)
            visitati[curr] = True
            risultato.append(curr)
            for ad in reversed(list(g.adiacenti(curr))): # LA O(m) - MA O(n^2)
                pila.append(ad)
    return risultato
```

**LISTA DI ADIACENZA**
La creazione del bit set ha un costo di $n$.
Il ciclo `while` avviene una volta per ogni elemento inserito nella pila: se un nodo è presente in ogni arco del grafo questo avviene $m$ volte
Utilizzando un bitset per i visitati la verifica se il nodo è già stato visitato avviene in un tempo costante, ma viene eseguita $m$ volte, ogni ingresso nel ciclo while
Il ciclo `for` invece viene eseguito al massimo 1 volta per ogni nodo, però per ognuno di essi scorre la sua lista di adiacenza, quindi la sua complessità totale (considerando tutte le volte che entriamo nel while) è pari al numero di archi $m$
La complessità finale quindi sarà data dalla somma della complessità della creazione del bit set, del controllo dell'`if` e del ciclo `for`, quindi asintoticamente abbiamo complessità
$$
\Theta(n+m)
$$
**MATRICE DI ADIACENZA**
La creazione di un bit set ha sempre un costo di $n$.
La vera differenza sta nel ciclo `for`: trovare gli adiacenti in una matrice di adiacenza vuol dire scorrere una intera riga o colonna che ha quindi un costo di $n$ e questo avviene nel caso peggiore per ogni nodo, quindi il ciclo for ha una complessità quadratica.
Asintoticamente quindi la complessità del for domina la creazione del bit set, portando la complessità a
$$
\Theta(n^2)
$$
### Visita in ampiezza
[[Strutture dati#Visita a ventaglio / in ampiezza]]
Essendo l'implementazione molto simile, cambia solo il pop, vale tutto quanto detto per la visita a scandaglio
```
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

**LISTA DI ADIACENZA**
%% il prof ha scritto m, ma in teoria la pop(0) su python ha complessità lineare, quindi anche con liste di adiacenza dovremmo avere n^2 %%
$$
\Theta(m)
$$


**MATRICE DI ADIACENZA**
$$
\Theta(n^2)
$$
## Verifica aciclicità
![[Strutture dati#Verifica per ogni arco]]

![[Strutture dati#Chiusura transitiva]]

### Algoritmo dell'ordinamento topologico
```
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

Ho bisogno di creare una lista con il grado per ogni nodo e un bitset per tenere traccia degli elementi rimossi, entrambe operazioni con complessità $n$.
Per riempire la lista dei gradi ho bisogno di scorrere tutti gli archi, quindi avrò una complessità lineare rispetto al numero di archi, se ho implementato la lista di adiacenza, e quadratica rispetto ai nodi, se ho implementato la matrice di adiacenza.
`trovazero()` è un metodo che deve cercare all'interno della lista dei gradi se ci sono degli zeri, quindi ha una complessità lineare rispetto al numero di elementi di `gradi` che è proprio $n$. 
Una volta che abbiamo trovato gli elementi con grado 0 dobbiamo aggiornare tutti `rimossi` con i nodi che hanno grado 0 e dobbiamo aggiornare `gradi` decrementando in caso di archi rimossi. Per il decremento abbiamo bisogno di $n$ operazioni nel caso di matrice di adiacenza e $\delta_i(curr)$ nel caso di liste di adiacenza, ma questo avviene per ogni nodo rimosso, che nel caso peggiore sono tutti, quindi abbiamo complessità complessiva del while quadratica.
Il `return` verifica se tutti gli elementi all'interno di `gradi` hanno effettivamente 0 archi in ingresso e quindi ci permette di verificare se il grafo ha cicli oppure no, questo ha un costo pari ancora una volta allo scandaglio di `gradi`: $n$
Quindi con questa implementazione abbiamo una complessità di
$$
O(n^2)
$$
Possiamo però ottimizzare il codice implementando `gradi` come un [[Strutture dati#Heap|heap]].
Facendo in questo modo `trovazero()` avrà un $\log_2 n$, è sufficiente la [[Strutture dati#Eliminazione elementi in un heap|rimozione]] su un grafo e succederà per ogni nodo quindi $n \log_2 n$
L'[[Strutture dati#Variazione di priorità di un nodo|aggiornamento]] di `gradi` è anch'esso logaritmico, ma avviene al più $m$ volte.
Abbiamo un totale di $O((n+m)\log_2 n)$ che per grafi molto sparsi è approssimabile con
$$
O(n \log_2 n)
$$
## Prim
[[Algoritmi#Prim - Minimo albero ricoprente]]

>[!attention] Lavori in corso

**Complessità algoritmo goloso**
per trovare il migliore dovrei scorrere le 3 liste insieme e prendere il minimo, mi costa $n$ lo posso implementare con un heap modificabile per migliorare le prestazioni
ad ogni nodo assocerò come peso dell'heap il costo -> deve cambiare

nel ciclo while se il grafo è connesso ci entriamo una volta per ogni nodo $n$
al suo interno una out dell'heap ci costa $\log_2 n$
poi facciamo per ogni adiacente al nodo (ogni arco che esce dal nodo) ci entriamo una volta per ogni arco $m$ (LA)
ogni volta che entriamo nel for aggiorniamo l'heap con un costo di $\log_2 n$

nel caso di grafi connessi $m>n \therefore$
liste di adiacenza 
il costo totale è $m \log_2 n$ %% da rivedere%%
matrice di adiacenza
$n^2 + m\log_2 n$ %% da rivedere%%
## Dijkstra
[[Algoritmi#Dijkastra]]
