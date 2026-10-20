#appunti 
#ricerca_operativa 

# Problemi di ottimizzazione
Considerando una funzione $f:\mathbb{R}^n \to \mathbb{R}$ e un insieme $S \subseteq \mathbb{R}^n$, un problema di ottimizzazione $P$ consiste nel determinare, se esiste, un punto di minimo della funzione $f$ tra i punti dell'insieme $S$
$$
\left\{\begin{array}{l}\min & f(x) \\ \text{subject to } & x \in S\end{array}\right.
$$
- $x \in \mathbb{R}^n$ vettore delle **variabili di decisione**
- $S$ viene chiamato **insieme ammissibile**
- se $x \in S$, $x$ una **soluzione ammissibile** di $P$
- $f$ prende il nome di **funzione obiettivo** (spesso viene associata al costo)
- $f$ è una funzione di $n$ variabili reali: $f(x) = f(x_{1}, x_{2}, \dots,x_n)$

>[!multi-column]
>>[!important] inammissibile
>>Il problema $P_{min}$ si dice inammissibile se non ammette soluzioni e cioè quando $S = \emptyset$
>
>>[!important] Illimitato inferiormente
>>Il problema $P_{min}$ si dice illimitato inferiormente se 
>>$\forall M > 0 \ \exists x \in S : f(x) < -M$
>

>[!important] Soluzione ottima
>Il problema $P_{min}$ ammette **soluzione ottima** (finita) $x^* \in S$ se
>$$ \forall x \in S : f(x^*) \leq f(x)  $$

>[!question] Osservazione
>Le definizioni per il massimo sono duali. La funzione obiettivo viene indicata con $h$

**EQUIVALENZA TRA PROBLEMI DI MASSIMO E DI MINIMO**
Ponendo $h(x) = -f(x)$ rispettivamente $P_{max}$ e $P_{min}$ allora
- Se $P_{min}$ è limitato inferiormente allora $P_{max}$ è limitato superiormente
- Se $P_{min}$ ammette soluzione ottima (finita) $x^* \in S$ allora
  $-f(x^*)\geq -f(x) \ \forall x \in S$ cioè $h(x^*) \geq h(x)$
  che equivale a dire che $x^*$ è soluzione ottima del problema $P_{max}$

Pertanto i problemi $P_{min}$ e $P_{max}$ sono **equivalenti a meno del segno**:
$$
x^* = \arg \min_{x \in S}( f(x)) = \arg \max_{x \in S} (-f(x)) \hspace{8ex} \min_{x \in S} (f(x)) = - \max_{x \in S}(-f(x)) 
$$

classificazione dei problemi di ottimizzazione
- problemi di ottimizzazione **continua** $x \in \mathbb{R}^n$
	- **vincolata** $S \subset \mathbb{R}^n$
	- **non vincolata** $S = \mathbb{R}^n$
- problemi di ottimizzazione **discreta** $x \in \mathbb{Z}^n$
	- a numeri **interi** $S \subseteq \mathbb{Z}^n$
	- **combinatoria** $S \subseteq \{0,1\}^n$
- problemi di ottimizzazione **mista**

## Problemi di programmazione matematica
>[!important] Insieme ammissibile
>L'insieme $S$ viene descritto tramite un insieme di diseguaglianze:
>$$S = \{x \in \mathbb{R}^n : g_{1}(x)\geq b_{1}, g_{2}(x) \geq b_{2},\dots,g_m(x) \geq b_m\}$$
>Dove $g_i:\mathbb{R}^n \to \mathbb{R}$, $b_i \in \mathbb{R}$, $\forall i \in \{1,2,\dots,m\}$

>[!important] Vincolo
>Il sistema di disuguaglianze $g_i(x) \geq b_i$ prende il nome di **vincolo** e l'insieme $S$ è formato da tutti i punti $x \in \mathbb{R}^n$ che rispetta il sistema di disuguaglianze

>[!multi-column]
>>[!important] Soddisfatto
>>in $\overline{x}$ se $g_i(\overline{x}) \geq b_i$
>
>>[!important] Violato
>>in $\overline{x}$ se $g_i(\overline{x}) < b_i$
>
>>[!important] Attivo
>>in $\overline{x}$ se $g_i(\overline{x}) = b_i$
>
>>[!important] Ridondante
>>se la sua eliminazione non modifica l'insieme ammissibile


$$
\left\{\begin{array}{l}\min & f(x)  \\  \text{s.t.} & g_{1}(x) \geq b_{1} \\  & g_{2}(x) \geq b_{2} \\  & \vdots \\  & g_m(x) \geq b_m\end{array}\right.
$$

>[!important] Problema di programmazione lineare
>Se $f$ è una funzione lineare e ciascuna $g_{1},g_{2},\dots,g_m$ sono funzioni lineari il problema si dice di **programmazione lineare**.

## Funzione obiettivo
Considerando $n$ coefficienti (di costo) reali $c_{1},\dots,c_n$
$$
f(x) = f(x_{1},x_{2},\dots,x_n) = c_{1}x_{1} + c_{2}x_{2} + \dots + c_nx_n = \sum_{i=1}^n c_ix_i
$$
prodotto scalare tra il vettore dei coefficienti e il vettore delle variabili decisionali.

Consideriamo $m \times n$ coefficienti reali
$$
\begin{array}{cccc}
a_{11} & a_{12} & \dots & a_{1n} \\
a_{21} & a_{22} & \dots & a_{2n} \\
\vdots \\
a_{m1} & a_{m2} & \dots & a_{mn}
\end{array}
$$
$$
g_i(x) = g_i(x_{1},x_{2},\dots,x_n) = a_{i 1} x_{1} + a_{i 2} x_{2} + \dots + a_{i n} x_n = \sum_{j=1}^n a_{ij} x_j
$$
prodotto scalare tra la $i$esima riga e il vettore delle variabili decisionali

Quindi la forma estesa di un problema di programmazione lineare si può esprimere come:
$$
\left\{\begin{array}{l}\min & c_{1}x_{1} + c_{2}x_{2} + \dots + c_nx_n  \\  s.t. & a_{11}x_{1} + a_{12} x_{2} + \dots + a_{1n}x_n \geq b_{1} \\  & a_{21}x_{1} + a_{22}x_{2} + \dots + a_{2n}x_n \geq b_{2} \\  & \vdots \\  & a_{m 1}x_{1} + a_{m 2}x_{2} + \dots + a_{mn}x_n \geq b_m\end{array}\right.
$$

Tutti i [[2. I vettori (algebra)|vettori]] sono rappresentati da colonne
$$
c = \left(\begin{array}{l}c_{1} \\ c_{2} \\ \vdots \\ c_n \end{array}\right) \hspace{4ex} x = \left(\begin{array}{l}x_{1} \\ x_{2} \\ \vdots \\ x_n \end{array}\right) \hspace{4ex} A = \left[\begin{array}{cccc}a_{11} & a_{12} & \dots & a_{1n} \\
a_{21} & a_{22} & \dots & a_{2n} \\
\vdots \\
a_{m1} & a_{m2} & \dots & a_{mn}\end{array}\right]
$$
A = [[2. I vettori (algebra)#Matrici|matrice]] che contiene i coefficienti tecnologici
Questa matrice può essere descritta con varie notazioni
$$
A = \left[\begin{array}{cccc}a_{11} & a_{12} & \dots & a_{1n} \\
a_{21} & a_{22} & \dots & a_{2n} \\
\vdots \\
a_{m1} & a_{m2} & \dots & a_{mn}\end{array}\right] = \left(A_{1}|A_{2}|\dots|A_n\right) = \left(\begin{array}{c}
a_1^T \\ a_2^T \\ \vdots \\ a_m^T
\end{array}\right)
$$
Dove $A_i^T = (a_{1 1}, a_{2 1},\dots,a_{m1})$ sono i vettori colonna della matrice $A$ e $a_i^T = \left(a_{11},a_{12},\dots,a_{1 n}\right)$ sono i vettori riga della matrice $A$
>[!question] Osservazione
>Per convenzione nel momento in cui creiamo un nuovo vettore in ricerca operativa, questo è un vettore colonna ed è proprio ciò che succede quando creiamo il vettore $a_i$ composto dagli elementi della riga $i$ della matrice $A$. Per questo nel momento in cui vogliamo rappresentare l'intera matrice dobbiamo effettuare l'operazione di trasposto sul vettore $a_i$, per renderlo nuovamente un vettore riga che può essere utilizzato all'interno del vettore colonna che rappresenta l'intera matrice 

Utilizzeremo la convenzione del prodotto righe per colonne per rappresentare i prodotti scalari

Quindi il sistema di vincoli diventa un prodotto scalare tra la matrice $A$ e il vettore colonna $x$
$$
Ax = \left[\begin{array}{cccc}a_{11} & a_{12} & \dots & a_{1n} \\
a_{21} & a_{22} & \dots & a_{2n} \\
\vdots \\
a_{m1} & a_{m2} & \dots & a_{mn}\end{array}\right]
\left(\begin{array}{l}x_{1} \\ x_{2} \\ \vdots \\ x_n \end{array}\right) = \left(\begin{array}{cccc}a_{11}x_{1} & a_{12}x_{2} & \dots & a_{1n}x_n \\
a_{21}x_{1} & a_{22}x_{2} & \dots & a_{2n}x_n \\
\vdots \\
a_{m1}x_{1} & a_{m2}x_{2} & \dots & a_{mn}x_n\end{array}\right)
$$
Il prodotto $Ax$ può essere utilizzato per ridefinire le disuguaglianze (vincoli) in forma matriciale
$$
Ax \geq b
$$
Per quanto riguarda invece la funzione obiettivo, sia il vettore $c$ che il vettore $x$ sono vettori colonna: non possiamo effettuare il prodotto riga per colonna, di conseguenza utilizziamo la trasposta $c^T$
$$
c^T x = (c_{1},c_{2},\dots,c_n) \left(\begin{array}{l}x_{1} \\  x_{2} \\  \vdots \\  x_n\end{array}\right) = c_{1}x_{1} + c_{2}x_{2} + \dots + c_nx_n
$$
Ne concludiamo che un problema di programmazione matematica può essere espresso in forma compatta come
$$
\begin{cases}
\min & c^Tx \\
\text{s.t.} & Ax \geq b
\end{cases}
$$
## Risoluzione grafica di un problema in due variabili
Finché il problema ha solo due variabili decisionali è possibile risolverlo graficamente:
- I vincoli rappresentano dei semipiani
- Il sistema di vincoli sarà quindi l'intersezione di questi semipiani (regione ammissibile)
- Il vettore dei coefficienti $c = (c_{1},c_{2})^T$ rappresenta il gradiente della funzione obiettivo (direzione di crescita)
- La funzione obiettivo è un fascio di rette (curva di livello) - andando in direzione del gradiente stiamo massimizzando la funzione - andando in direzione opposta la stiamo minimizzando
Quindi, se il problema è di minimo la direzione opposta a $c$ identifica la direzione di riduzione della funzione obiettivo.

### Es. 1
>[!multi-column]
>>[!blank]
>>$$ \begin{cases} \min & -x_1 + x_2 \\ \text{s.t.} & x_1 + 0.5x_2 \geq 2.5 \\ & -x_1 + 4x_2 \geq 2 \\ & 2x_1 + 5.5x_2 \leq 23 \end{cases} $$
>
>>[!blank]
>>Regione ammissibile
>>![[Problemi di ottimizzazione-1790755332770.webp|400]]
>
>>[!blank]
>>Funzione obiettivo
>>![[Problemi di ottimizzazione-1790755382367.webp|400]]

Soluzione ottima:
$$
x^* = \left(\begin{array}{c}6 \\ 2\end{array}\right)
$$
Valore ottimo:
$$
c^T x^* = -4
$$
### Es. 2
>[!multi-column]
>
>>[!blank]
>>$$\begin{cases} \min & -x_1 + x_2 \\ \text{s.t.} & x_1 + 0.5x_2 \geq 2.5 \\ & 2x_1 + 5.5x_2 \leq 23 \end{cases} $$
>
>>[!blank]
>>Regione ammissibile
>>![[Problemi di ottimizzazione-1790755572256.webp]]
>
>>[!blank]
>>Funzione obiettivo
>>![[Problemi di ottimizzazione-1790755587370.webp]]

Questo è un problema inferiormente illimitato, quindi non hca un minimo

### Es. 3
>[!multi-column]
>
>>[!blank]
>>$$\begin{cases}
\min & x_1 + 0.5x_2 \\
\text{s.t.} & x_1 + 0.5x_2 \geq 2.5 \\
& -x_1 + 4x_2 \geq 2 \\
& 2x_1 + 5.5x_2 \leq 23
\end{cases}$$
>
>>[!blank]
>>Regione ammissibile
>>![[Problemi di ottimizzazione-1790755746148.webp]]
>
>>[!blank]
>>Funzione obiettivo
>>![[Problemi di ottimizzazione-1790755755929.webp]]

Otteniamo infinite soluzioni ottime lungo il segmento che congiunge
$$
x^{(1)} = \left(\begin{array}{c}2 \\ 1\end{array}\right) \hspace{8ex} x^{(2)} = \left(\begin{array}{c}0.5 \\ 4\end{array}\right)
$$
Valore ottimo:
$$
c^T x^{(1)} = c^T x^{(2)} = 2.5
$$

# Geometria della programmazione lineare
## Definizioni
>[!multi-column]
>
>>[!Important] Semispazio
>>Sia $w \in \mathbb{R}^n$ un vettore $n$-dimensionale e $w_0$ uno scalare, l'insieme $$\{x \in \mathbb{R}^n:w^Tx \geq w_0\}$$
>>si chiama **semispazio** (generalizzazione a $n$ dimensioni del semispazio).
>
>>[!important] Iperpiani
>>Sia $w \in \mathbb{R}^n$  un vettore $n$-dimensionale e $w_0$ uno scalare, l'insieme $$\{x \in \mathbb{R}^n:w^T x = w_0\}$$
>>si chiama **iperpiano** e rappresenta la frontiera di un iperspazio. Il vettore $w$ è ortogonale all'iperpiano.
>
>>[!important] Poliedri
>>Un poliedro è un insieme che può essere descritto come $$\{x \in \mathbb{R}^n: Ax \geq b\}$$
>>dove $A$ è una matrice $m \times n$ e $b \in \mathbb{R}^m$. Quindi un poliedro è l'intersezione di un numero finito di semispazi (non necessariamente è limitato).

>[!multi-column]
>
>>[!important] Insiemi convessi
>>Un insieme $S \subset \mathbb{R}^n$ si dice **convesso** se, comunque siano scelti due vettori di $n$ componenti $x^{(1)}, x^{(2)} \in S$ e $\lambda \in [0,1]$, si ha che $$x(\lambda) = \lambda x^{(1)} + (1- \lambda) x^{(2)} \in S$$
>>$x(\lambda)$ rappresenta il segmento che collega i due punti $x^{(1)}$ e $x^{(2)}$, quindi $S$ è convesso se il segmento che congiunge ogni coppia di suoi punti è appartenente a $S$.
>
>>[!important] Combinazione convessa
>>Generalizzando il concetto di insieme convesso: consideriamo $k$ vettori $x^{(1)}, \dots, x^{(k)}$, e $k$ scalari non negativi $\lambda_{1}, \dots, \lambda_k$ tali che $\sum_{i=1}^k \lambda_i = 1$. Il vettore $$\sum_{i=1}^k \lambda_i x^{(i)}$$
>>si chiama **combinazione convessa** dei vettori $x^{(1)},\dots,x^{(k)}$
>
>>[!important] Involucro convesso
>>L'insieme di tutte le combinazioni convesse di $x^{(1)},\dots,x^{(k)}$ si chiama **involucro convesso** dei vettori $x^{(1)},\dots,x^{(k)}$.
>>Più piccolo insieme convesso che contiene quei punti.

>[!multi-column]
>
>>[!important] Punti estremi
>>Consideriamo un poliedro $P$. Un vettore $x \in P$ si dice **punto estremo** di $P$ se non esistono coppie di punti $x^{(1)},x^{(2)} \in P$, entrambi diversi da $x$, e uno scalare $\lambda \in [0,1]$ tali che$$x = \lambda x^{(1)}+(1-\lambda)x^{(2)}$$
>
>>[!important] Vertici
>>Consideriamo un poliedro $P$. Un vettore $\overline{x} \in P$ si dice **vertice** di $P$ se esiste $c \in \mathbb{R}^n$ tale che$$c^T\overline{x} < c^Tx \forall x \in P, x \neq \overline{x}$$
## Teorema sulle convessità delle soluzioni
Date le seguenti considerazioni (che non contraddicono le precedenti definizioni):
- l'intersezione di insiemi convessi è a sua volta convessa
- un semispazio è un insieme chiuso e convesso
- un poliedro (intersezione di un numero finito di spazi) è un insieme convesso
- una combinazione convessa di un numero finito di elementi di un insieme convesso appartiene a quell'insieme
- l'involucro convesso di un numero finito di vettori è un insieme convesso

>[!info] Teorema sulla convessità delle soluzioni
>Consideriamo un problema $(P)$ di programmazione lineare che ammetta un ottimo finito e indichiamo con $x^{(1)}$ una soluzione ottima. Supponiamo che esista una soluzione ammissibile $x^{(2)} \neq x^{(1)}$ tale che:$$c^Tx^{(1)} = c^Tx^{(2)}$$
>I due vettori sono diversi, ma hanno lo stesso valore obiettivo, quindi entrambe sono soluzioni ottime di $(P)$.
>Consideriamo i vettori $x(\lambda) = \lambda x^{(1)} + (1-\lambda)x^{(2)}$ che sono combinazione convesse di $x^{(1)}$ e $x^{(2)}$. Il teorema precedente garantisce l'ammissibilità di $x(\lambda) \forall \lambda \in [0,1]$.
>Inoltre$$c^T x(\lambda) = \lambda c^T x^{(1)} + (1-\lambda)c^T x^{(2)} = c^Tx^{(2)} = c^T x^{(1)}$$
>Quindi ogni combinazione convessa di soluzioni ottime di $(P)$ è una soluzione ottima, e l'insieme delle soluzioni ottime di $(P)$ è convesso.

## Problemi di PL in forma standard
Fino ad ora abbiamo visto problemi di programmazione lineare in forma generalizzata, ora vediamo invece problemi di programmazione lineare in **forma standard**
$$
\begin{cases}
\min & c_{1}x_{1}+c_{2}x_{2}+\dots+c_nx_n \\
s.t. & a_{11}x_{1} + a_{12}x_{2} + \dots + a_{1n}x_n = b_{1}\\
& a_{21}x_{1} + a_{22}x_{2} +\dots +a_{2n}x_n = b_{2}\\
& \vdots \\
& a_{m 1} x_{1} + a_{m 2}x_{2} + \dots + a_{mn}x_n = b_m \\
& x_{1}, \dots,x_n \geq 0
\end{cases}
$$
e rispetta le seguenti proprietà:
- è un problema di minimo
- è un sistema di disequazioni lineari
- le uguaglianze non sono altro che coppie di disuguaglianze
- le variabili sono vincolate ad avere segno positivo

Anche in questo caso possiamo utilizzare la forma compatta
$$
\begin{cases}
\min & c^Tx \\
s.t. & Ax = b \\
& x\geq 0
\end{cases}
$$
$x, c \in \mathbb{R}^n$, $A \in \mathbb{R}^{m \times n}$, $b \in \mathbb{R}^m$ e $c \in \mathbb{R}^n$.

Indichiamo con $X$ l'**insieme delle soluzioni** del sistema di equazioni:
$$X = \{x \in \mathbb{R}^n:Ax = b\}$$
Indichiamo con $\Omega(P)$ la **regione ammissibile** del problema $(P)$:
$$\Omega(P) = \{x \in \mathbb{R}^n:Ax = b, x \geq 0\} = X \cap \mathbb{R}_+^n \subset X$$

### Ipotesi di lavoro
Formalizziamo inoltre delle **ipotesi di lavoro**:
- $m < n$
- $\text{rango}(A) = m$
utili a garantire infinite soluzioni

>[!question] Osservazione
>Le due ipotesi garantiscono che il sistema di equazioni abbia $\infty^{n-m}$ [[2. I vettori (algebra)#Teorema di Rouché-Capelli|soluzioni]] (gradi di libertà del sistema) ed è sempre possibile esplicitare $m$ componenti di $x$ in funzione delle rimanenti $n-m$

#### Motivazioni delle ipotesi
- se $m>n$ il sistema è sovradimensionato, sono presenti più equazioni del numero di variabili, di conseguenza alcune di esse non sono linearmente indipendenti ed è possibili ricondurre il sistema ad una forma con meno equazioni
- $m = n$ e $\text{rango}(A)=m$, allora $A$ è non singolare ed il sistema ammette un'unica soluzione: $X = \{x\}$ quindi non avrebbe senso sviluppare problemi di ottimizzazione
	- se $\tilde{x}\geq 0$, allora $\Omega(P) = \{\tilde{x}\}$ e $x^* = \tilde{x}$
	- altrimenti $\Omega(P) = \emptyset$
- $m = n$ e $\text{rango}(A) < m$, allora almeno una equazione può essere eliminata
- $m <n$, eliminando le eventuali equazioni ridondanti, si ottiene un sistema equivalente a quello iniziale con matrice dei coefficienti di rango massimo
### Riduzione alla forma standard
Tutti i problemi di programmazione lineare possono essere ricondotti alla forma standard equivalente.
#### Vincoli di diseguaglianza $\leq$
$$
a_i^Tx \leq b_i
$$
Definiamo una variabile ausiliaria (**variabile di slack**)
$$
s_i = b_i - a_i^T x \geq 0
$$
in questo modo stiamo dando un nome allo scarto $s_i$ che diventa a sua volta una variabile decisionale
$$
\begin{cases}
s_i = b_i- a_i^T x \\
s_i \geq 0
\end{cases}
$$
questo passaggio però è "costato" l'aggiunta di una variabile ausiliaria.
#### Vincolo di diseguaglianza $\geq$
$$
a_i^T x \geq b_i
$$
Definiamo una variabile ausiliare (**variabile di surplus**)
$$
s_i = a_i^T x -b_i \geq 0
$$
La nuova variabile diventa a sua volta una variabile decisionale
$$
\begin{cases}
s_i = a_i^T x-b_i\\
s_i \geq 0
\end{cases}
$$
questo passaggio però è "costato" l'aggiunta di una variabile ausiliaria.
#### Variabili libere in segno
Se una variabile non è vincolata con $x_j \geq 0$ ed è quindi libera in segno.
Introduciamo due variabili non negative: la differenza di due variabili non negative non ha vincoli di segno.
$$
\displaylines{
x_j^+, x_j^- \geq 0 \\
x_j = x_j^+ - x^-_j
}
$$
Dobbiamo quindi sostituire ogni istanza di $x_j$ con $x_j^+ - x_j^-$.
Stiamo quindi aggiungendo due variabili vincolate in segno e ne stiamo eliminando una.
In questo caso però dobbiamo modificare anche la funzione obiettivo.

Nei vincoli:
$$
\begin{array}{c}
a_i^T x = b_i  \\
a_{j 1} x_1 + \dots + a_{ij} x_j + \dots + a_{i n} x_n = b_i \\
a_{i 1}x_1 + \dots + a_{ij} x_j^+ - a_{ij} x_j^- + \dots + a_{in} x_n = b_i
\end{array}
$$
alla matrice dei vincoli si aggiunge una colonna, con gli stessi coefficienti della colonna precedente, ma con segno opposto
$$
(A_1 | A_2 | \dots | A_j | -A_j| \dots |A_n)
$$

Nella funzione obiettivo:
$$
\displaylines{
c_{1}x_{1} +\dots + c_j x_j  + \dots + c_n x_n\\
c_{1}x_{1} + \dots + c_j x_j^+ - c_j x_j^- + \dots c_n x_n
}
$$
quindi cambia anche
$$
c^T = (c_{1},\dots,c_j,- c_j,..,c_n)
$$


>[!question] Osservazione
>Per le nuove variabili aggiunte:
>consideriamo un punto $\overline{x}$ che soddisfa il vincolo
>$$
>a_i^T \overline{x} \leq b_i
>$$
>che può essere riscritto come
>$$
>\begin{cases}
>a_i^T \overline{x} + s_i = b_i \\
>s_i \geq 0
>\end{cases}
>$$
>se
>- $s_i = 0$ il vincolo **attivo** (soddisfatto per uguaglianza)
>- $s_i > 0$  il vincolo è strettamente soddisfatto (**non attivo**)
>- $s_i <0$ nel punto $\overline{x}$ il vincolo è violato

## Soluzioni di base
Per cercare la soluzione ottima sui vertici di un poliedro aritmeticamente dobbiamo definire una rappresentazione algebrica dei vertici.

Considerando un problema di programmazione lineare in forma standard:
$$
\begin{cases}
\min & c^Tx \\
\text{s.t.} & Ax = b \\
& x \geq 0
\end{cases}
$$
Dove $c,x \in \mathbb{R}^n$, $A \in \mathbb{R}^{m \times n}$ e $b \in \mathbb{R}^m$

>[!question] Osservazione
>Finche usiamo i simboli è un problema di programmazione lineare.
>Nel momento in cui utilizziamo i numeri prende il nome di **istanza di un problema di programmazione lineare**

Indichiamo con $X$ l'insieme delle soluzioni del sistema di equazioni, $\Omega (P)$ indica la regione ammissibile del problema.

>[!question] Osservazione
>ciascuna variabile ausiliaria:
>1. non sono nelle variabili obiettivo
>2.  sta in un unico vincolo
>$$Ax = b$$
>$$\begin{cases}
>a_{11}x_{1} & + & \dots & + & a_{1n}x_n & = & b_{1} \\
>\vdots \\
>a_{m 1} x_{1} & + & \dots & + & a_{mn}x_n & = & b_m
>\end{cases}$$
>$$\left(\begin{array}{c}
>a_{11} \\ \vdots \\ a_{m 1}
>\end{array}\right) x_{1}+ \dots + \left(\begin{array}{c}
>a_{1n} \\ \vdots \\ a_{m n}
>\end{array}\right) x_n = b$$
>$b$ è combinazione lineare delle colonne della matrice $A$
>$$Ax = b \Longleftrightarrow A_{1}x_{1} + A_{2}x_{2} +\dots + A_nx_n = b \implies \sum_{j=1}^n A_j x_j = b$$

essendo $\text{rango}(A) = m$ esiste almeno un gruppo di $m$ colonne in $A$ linearmente indipendenti, il determinante è $\neq 0$ ed è quindi **non invertibile** e **singolare**.
Indichiamo con $I_B = \{j_1, j_2,\dots,j_m\}$ gli indici corrispondenti ad un gruppo di $m$ colonne di $A$ linearmente indipendenti e con $I_N = \{j_{m+1},j_{m+2},\dots,j_{n}\}$ i rimanenti indici.
Distinguiamo quindi 
>[!multi-column]
>
>>[!important] Matrice di base
>>$$
>>B = \left(A_{j_{1}}|A_{j_{2}}|\dots|A_{j_m}\right)
>>$$
>
>>[!important] Matrice non di base
>>$$
>>N = \left(A_{j_{m+1}}|A_{j_{m+2}}|\dots|A_{j_n}\right)
>>$$

$B$ è una matrice $m \times m$ t.c. $\det(B) \neq 0$.
Definiamo i vettori delle variabili di base e variabili fuori base
$$
x_B = \left(\begin{array}{c} x_{j_{1}} \\ \vdots \\ x_{j_m}\end{array}\right) \in \mathbb{R}^m \hspace{8ex} x_N = \left(\begin{array}{c} x_{j_{m+1}} \\ \vdots \\ x_{j_n}\end{array}\right) \in \mathbb{R}^{n-m}
$$
Permutiamo anche le componenti del vettore $x$
$$
\underbrace{A_{j_{1}}x_{j_{1}} + \dots + A_{j_m}x_{j_m}}_{Bx_B} + \underbrace{A_{j_{m+1}} x_{j_{m+1}} + \dots + A_{j_n}x_{j_n}}_{Nx_N} = b
$$
Possiamo quindi riscrivere il sistema di equazioni dei vincoli in forma matriciale come
$$
Ax = b \implies Bx_B + Nx_N = b
$$
Risolvendo il sistema di equazioni rimangono $n-m$ parametri che sono esattamente da $A_{j_{m+1}}$ a $A_{j_n}$.
Per trovare il vettore delle variabili che risolve il sistema spostiamo $Nx_N$ a secondo membro e premoltiplichiamo entrambi i membri per l'inversa di $B$.
$$
\begin{array}{rl}
B x_B & = b-Nx_N \\
B^{-1}Bx_B & = B^{-1}(b - N x_N) \\
x_B & = B^{-1} \underbrace{(b - N x_N)}_{\infty\text{ sol. del sistema}} \\
    & = B^{-1} b - B^{-1} N x_N
\end{array}
$$
Scelto il vettore $x_N$ abbiamo solo numeri e quindi rimane fissata un'unica soluzione.
Ponendo $x_N = \vec{0}$ il vettore delle variabili di base $x_B = B^{-1}b$.

>[!check] Il vettore $x$ definito come segue è la rappresentazione algebrica del **vertice di un poliedro**:
>$$
>x = \left(\begin{array}{c}x_B \\ x_N\end{array}\right) = \left(\begin{array}{c}B^{-1} b \\ 0\end{array}\right)
>$$

>[!important] Soluzione di base
>Si definisce soluzione di base del sistema $Ax = b$ (corrispondente alla base di $B$) la soluzione che si ottiene ponendo $x_N = 0$
>$$
>x_N = 0 \hspace{8ex} \implies \hspace{8ex} x_B = B^{-1}b
>$$
>La soluzione di base $x$ si dice
>- **non degenere**, se tutte le componenti di $x_B$ sono diverse da zero
>- **degenere**, se $x_B$ ha almeno una componente nulla
>- **ammissibile**, se $x_B \geq 0$
>- **non ammissibile**, se $x_B$ ha almeno una componente negativa

Nel complesso nella forma standard abbiamo $m+n$ vincoli dati dalle equazioni ($m$) e dai vincoli di non negatività ($n$).
Sia una soluzione $x$ abbiamo almeno $n-m$ vincoli soddisfatti per uguaglianza essendo $x_N = \vec{0} \in \mathbb{R}^{n-m}$.
Considerando quindi $m+n-m$ rimangono $n$ vincoli attivi, che sono degli iperpiani.
L'unico modo per bloccare tutti i gradi di libertà è definire un singolo punto: intersezione di questi iperpiani rappresenta un vertice in $\mathbb{R}^n$.
### Caratterizzazione
Sia $X$ l'insieme delle soluzioni del sistema di equazioni $Ax = b$, con $A \in \mathbb{R}^{m \times n}$, $\text{rango}(A) = m < n$
$$
X = \{x \in \mathbb{R}^n:Ax = b\}
$$
$x \in X$ è una soluzione di base $\Longleftrightarrow$ le componenti non nulle di $x$ corrispondono a colonne linearmente indipendenti della matrice $A$.
#dimostrazione 
$\implies$ discende dalla definizione
$\Longleftarrow$ va dimostrata separatamente
permutiamo, senza perdere generalità, le colonne della matrice $A$ e le variabili di $x$ in modo da mettere in testa al vettore tutte le componenti diverse da 0
$$
x^T = (x_{1},x_{2},\dots,x_p,0,\dots,0)
$$
indicando con $p \leq n$ il numero di componenti non nulle.

Per ipotesi le colonne $A_{1},\dots,A_p$ sono linearmente indipendenti, di conseguenza $p \leq m$ (in quanto $m$ è il massimo numero di colonne linearmente indipendenti).

1. se $p = m$ allora$$x^T = (\underbrace{x_{1},x_{2},\dots,x_m}_{B^{-1}b},0,\dots,0) \hspace{8ex} A_{1},\dots,A_m = B$$questa non è altro che la definizione di **soluzione di base non degenere**
2. se $p < m$ allora
   essendo $\text{rango}(A) = m$ (dentro $A$ esistono $m$ colonne linearmente indipendenti), esistono in $A$ $m-p$ colonne $A_{p+1},\dots,A_{m}$ associate a componenti nulle, che unite a $A_{1},\dots,A_p$ formano un insieme di $m$ colonne linearmente indipendenti. Perciò si può porre $$B = [A_{1},\dots,A_p,A_{p+1},\dots,A_m]$$e $x$ è una **soluzione degenere**.
   Se non esistessero $m-p$ colonne linearmente indipendenti allora $\text{rango}(A)$ non potrebbe essere pari a $m$, oppure $p=m$: abbiamo trovato una contraddizione.

**Corollario**
$\overline{x}$ è soluzione di base
$\implies$ $\overline{x}$ ha almeno $n-m$ componenti nulle
$\implies$ $\overline{x}$ ha al più $m$ componenti nulle
#### Osservazioni
>[!question] Osservazione
>Consideriamo una soluzione di base **degenere** $\overline{x}$ e indichiamo con $p \leq n$ il numero di componenti non nulle.
>- Si chiama **livello di generalità** la quantità $l = m-p$
>- Dalla dimostrazione segue che per identificare $B$ occorre individuare $l = m-p$ colonne di $A$ che unite ad $A_{1},\dots,A_p$ formino un insieme di $m$ colonne linearmente indipendenti
>- Potrebbero esistere diversi gruppi di $l$ colonne che consentono di completare la base
>- Quindi potrebbero esistere diverse basi corrispondenti alla stessa soluzione di base $x$
>- Nel caso di soluzione di base non degenere esiste una sola base associata
>>[!bug] La presenza di un punto con più rappresentazioni possibili diventa problematico nella risoluzione algoritmica di problemi di PL.

Sono indistinguibili le soluzioni, ma sono distinguibili le basi.
#### Numerosità delle soluzioni di base
Quanti sono i modi possibili di selezionare $m$ colonne date $n$ colonne possibili.
Le sotto matrici $B \in \mathbb{R}^{m \times m}$ che è possibile estrarre dalla matrice $A \in \mathbb{R}^{m \times n}$ sono esattamente
$$
\binom{n}{m} = \frac{n!}{m! (n - m)!}
$$
pertanto il numero di soluzioni di base è **limitato superiormente** da $\binom{n}{m}$.
Algoritmicamente è fattoriale nel caso peggiore -> problemi enormi.
## Teorema fondamentale della PL in forma standard
>[!info] Teorema fondamentale della PL
>Sia $(P)$ il problema di programmazione lineare in forma standard, sotto le ipotesi: $A \in \mathbb{R}^{m \times n}$, $\text{rango}(A) = m < n$:
>1. Se esiste una soluzione ammissibile per $(P)$, allora esiste una soluzione ammissibile di base per $(P)$;
>2. Se esiste una soluzione ottima per $(P)$, allora esiste una soluzione ottima di base per $(P)$.

#dimostrazione **1 enunciato**
$\exists$ soluzione ammissibile $\overline{x}$ $\implies \exists$ SBA
Sia $\overline{x} \in \Omega(P)$ e sia $p\leq n$ il numero delle sue componenti positive, si può scrivere:
$$
\overline{x} = (\overline{x}_1,\dots, \overline{x}_p, 0,\dots, 0)^T
$$
a questo vettore sono associate le colonne corrispondenti della matrice $A$
$$
A = (A_{1},\dots,A_p,A_{p+1},\dots,A_n)
$$
Se le colonne associate alle variabili $\neq 0$, $A_{1},\dots,A_p$ sono **linearmente indipendenti**, la soluzione è di base ed è ammissibile per quanto detto nella [[#Caratterizzazione|caratterizzazione]].

Se invece le colonne sono **linearmente dipendenti**
$$
A = (\underbrace{A_{1},\dots,A_p}_{\begin{array}{c}\text{linearmente} \\ \text{dipendenti}\end{array}},A_{p+1},\dots,A_n)
$$
$\overline{x}$ non è soluzione di base, ma è ammissibile (voglio spostarmi da $\overline{x}$ cercando un'altra soluzione senza perdere l'ammissibilità -> ci spostiamo lungo $d$ di una quantità $\epsilon$).
Dalla definizione di dipendenza lineare: siccome sono linearmente dipendenti $\implies \exists p$ coefficienti $d_{1},\dots,d_p$ non tutti nulli t.c.
$$A_{1}d_{1} + \dots + A_p d_p = \vec{0}$$
Essendo $\overline{x} \in \Omega(P)$ allora $A\overline{x} = b$ e parte delle componenti di $\overline{x}$ sono nulle
$$
A_{1} \overline{x}_1 + \dots + A_p \overline{x}_p = b
$$
in quanto tutto il resto porta con se componenti nulle.

Sottraendo da quest’ultima equazione la precedente premoltiplicata per uno scalare $\epsilon$ arbitrario (essendo pari al vettore nullo stiamo sottraendo una quantità pari a 0), si ottiene
$$A_{1} \overline{x}_1 + \dots + A_p \overline{x}_p - \epsilon (A_{1}d_{1} + \dots + A_p d_p) = b-\epsilon\vec{0}$$
$$
A_{1}(\overline{x}_1 - \epsilon d_{1}) + \dots + A_p (\overline{x}_p - \epsilon d_p) = b \hspace{4ex} \forall \epsilon \in \mathbb{R}
$$
ciò che non compare in questa sommatoria sono degli 0
Definendo un vettore:
$$d=(d_{1},\dots,d_p,\underbrace{0,\dots,0}_{n-p})^T \in \mathbb{R}^n$$
Possiamo scrivere in forma compatta
$$
A(\overline{x} - \epsilon d) = b \hspace{4ex} \forall \epsilon \in \mathbb{R}
$$
la forma completa comprende anche dei termini che si annullano in quanto possiamo espandere il vettore $d = (d_{1},\dots,d_p,0,\dots,0)$ e le componenti $\overline{x}_{p+1},\dots,\overline{x}_n$ valgono 0 ([...] riprendi perchè)
$$
A_{1}(\overline{x}_1 - \epsilon d_{1}) + \dots + A_p (\overline{x}_p - \epsilon d_p) + \underbrace{A_{p+1}(\overline{x}_{p+1} - \epsilon d_{p+1})+\dots+ A_n (\overline{x}_n - \epsilon d_n)}_{\text{sono tutti 0}}= b
$$
Cioè $(\overline{x}-\epsilon d) \in \mathbb{R} \hspace{2ex} \forall \epsilon \in \mathbb{R}$

Chiamiamo la nuova soluzione $x = \overline{x} - \epsilon d$. Geometricamente ci stiamo spostando da $\overline{x}$ di una quantità $\epsilon$ e qualunque sia $\epsilon$ soddisfa i vincoli di uguaglianza.

Dobbiamo anche imporre/verificare i vincoli sul segno
$$
x = \overline{x} - \epsilon d \geq 0
$$
$$
\begin{cases}
\overline{x}_1 - \epsilon d_{1} \geq 0 \\
\vdots \\
\overline{x}_p - \epsilon d_p \geq 0
\end{cases}
$$
$$
\overline{x}_i - \epsilon d_i \geq 0
$$
Otteniamo $p$ disuguaglianze in 1 incognita $\epsilon$

se $d_i = 0$ è soddisfatta $\forall \epsilon \in \mathbb{R}$
se $d_i >0$ è soddisfatta $\forall \epsilon \leq \frac{\overline{x}_i}{d_i}$
se $d_i < 0$ è soddisfatta $\forall \epsilon \geq \frac{\overline{x}_i}{d_i}$

È un sistema di disequazioni, alcune danno un limite superiore, altre un limite inferiore: risolvendole tutte ci aspettiamo di ottenere un intervallo di valori.

Definiamo ora il min $\epsilon_1$ e il sup $\epsilon_2$ che, date le considerazioni sui termini $d_i$ sicuramente
$$
\epsilon_1 < 0 < \epsilon_2
$$

Poniamo ora
$$
\epsilon_1 = \begin{cases}
- \infty & \text{ se } d_i \geq 0 \forall i \\
\max \left\{ \frac{\overline{x}_i}{d_i} : d_i < 0 \right\} & \text{altrimenti}
\end{cases}
$$
Se non abbiamo $d_i$ negative non può essere ammesso il rapporto $\frac{\overline{x}}{d_i}$ non esiste, quindi non abbiamo un limite inferiore, è proprio $-\infty$. Se invece abbiamo dei $d_i$ negativi, il limite inferiore di $\epsilon$ sarà $\frac{\overline{x}}{d_i}$
$$
\epsilon_2 = \begin{cases}
+\infty & \text{ se }d_i \leq 0 \forall i \\
\min \left\{ \frac{\overline{x}_i}{d_i} : d_i > 0 \right\} & \text{altrimenti}
\end{cases}
$$
In modo duale possiamo sviluppare il limite superiore
$$
\overline{x} - \epsilon d \geq 0 \hspace{4ex} \forall \epsilon \in [\epsilon_1, \epsilon_2]
$$
>[!question] Domande d'esame
>Potrebbe essere $\epsilon_1 = -\infty$ e $\epsilon_2 = + \infty$?
>Le due condizioni non sono mutualmente esclusive, ma se lo fossero contemporaneamente tutte le componenti $d_i$ sarebbero nulle, andando contro l'ipotesi iniziale che il vettore $d$ ha componenti non tutte nulle.

Supponendo che il minimo/massimo esista possiamo osservare che sostituendo il suo valore corrispondente all'interno di una componente del nuovo vettore delle soluzioni $x$ otteniamo:
$$
x_j = \overline{x_j} - \epsilon_{1 / 2}d_j = \overline{x}_j - \frac{\overline{x}_j}{d_j} d_j = 0
$$
Ne concludiamo che il nuovo vettore delle soluzioni $x$ ha al più (il minimo può essere trovato da più componenti) $p-1$ componenti pari a 0.

Ripetiamo questo processo iterativamente eliminando componenti e verificando la dipendenza lineare delle componenti.
Nel peggiore dei casi, usciremo dal loop avremo una componente positiva e una colonna linearmente indipendente. In questo modo troviamo la base in modo iterativo.


#dimostrazione **2 enunciato**
Se esiste una soluzione ottima $x^* \in \Omega(P)$, allora esiste una soluzione ottima di base per $(P)$.
Essendo ottima è anche ammissibile
$$
x^* = (x_{1}^*,\dots,x_p^*,0,\dots,0)^T \hspace{4ex} p \leq n
$$
Se le $p$ colonne di $A$ associate alle $p$ componenti $\neq 0$ di $x^*$ sono linearmente indipendenti allora $x^*$ è soluzione ottima di base.

Se $x^*$ non è soluzione di base è possibile costruire (per il primo enunciato del teorema)
$$
x = x^*-\epsilon d \in \Omega(P) \forall \epsilon \in [\epsilon_1, \epsilon_2]
$$
traslando il vettore $x^*$ lungo il vettore $d$ di una quantità $\epsilon$.

![[Problemi di ottimizzazione-1791625254598.webp|center|519]]
Per il primo enunciato sappiamo che l'ammissibilità è mantenuta, dobbiamo quindi dimostrare che manteniamo anche l'ottimalità.
Sapendo che la nostra funzione obbiettivo vale
$$
c^T x^*
$$
per non perdere l'ottimalità dobbiamo osservare
$$
\begin{array}{c}
c^T x & = c^T (x^*- \epsilon d) \\
& = c^T x^* - \epsilon c^T d
\end{array}
$$
Dobbiamo dimostrare che $c^T d=0$

Per assurdo vediamo i casi possibili:
$$
\begin{align*}
c^\top d < 0 &\implies \forall \varepsilon \in [\varepsilon_1, 0) \hspace{8ex} c^\top (x^* - \varepsilon d) < c^\top x^* \\
c^\top d > 0 &\implies \forall \varepsilon \in (0, \varepsilon_2] \hspace{8ex} c^\top (x^* - \varepsilon d) < c^\top x^*
\end{align*}
$$
Pertanto, procedendo iterativamente come nella dimostrazione (1), partendo da $x^∗$ è possibile costruire una soluzione ammissibile di base ottima per (P).

### Proprietà
Nella dimostrazione (1) si è utilizzata la proprietà:
$\overline{x} \in \Omega(P)$ ma non di base $\implies \exists d \in \mathbb{R}^n:(\overline{x} - \epsilon d) \in \Omega(P) \forall \varepsilon \in [\varepsilon_{1}, \varepsilon_{2}]$
L'insieme
$$
\Gamma = \{x = \overline{ x } - \varepsilon d : \varepsilon \in [\varepsilon_{1}, \varepsilon_2]\}
$$
è un segmento di retta di cui $\overline{x}$ è un punto interno. Pertanto in termini geometrici si può scrivere:
$\overline{x} \in \Omega(P)$ ma non di base $\implies$ $\overline{x}$ è interno al segmento $\Gamma \subset \Omega(P)$.

Nella dimostrazione (2) si è provato che:
$x^∗$ soluzione ottima ma non di base $\implies x^*$ è interno ad un segmento $\Gamma$ ortogonale a $c$ i cui infiniti punti sono soluzioni ottime per (P).
Il segmento ammissibile all’interno del quale si trova la soluzione ottima non di base $x^∗$ deve essere ortogonale al gradiente della funzione obiettivo $\nabla z = c$, e quindi collineare alle linee di livello della
funzione.
### Enunciato di tipo geometrico
Sia $(P)$ un problema di programmazione lineare in forma standard, e $\Omega(P)$ la sua regione ammissibile.
$\overline{x} \in \Omega(P)$ è una soluzione di base ammissibile per $(P)$ se e solo se $\overline{x}$ è un **punto estremo del poliedro** $\Omega(P)$

>[!info] Teorema fondamentale (insiemistica)
>Sia $(P)$ il problema di programmazione lineare in forma standard sotto le ipotesi $$A \in \mathbb{R}^{m \times n} \hspace{4ex}\text{rango}(A) = m < n$$
>1. Se il poliedro $\Omega(P)$ è non vuoto allora esiste almeno un punto estremo in $\Omega(P)$.
>2. Se il problema $(P)$ ammette ottimo finito, allora uno dei punti estremi di $\Omega(P)$ è soluzione ottima

>[!important] Vertice
>Consideriamo un poliedro $P$. Un vettore $\overline{x} \in P$ si dice **vertice** di $P$ se esiste $c \in \mathbb{R}^n$ tale che$$c^T \overline{x} < c^T x \forall x \in P \ : \ x \neq \overline{x}$$

#### Caratterizzazione algebrica
Consideriamo un poliedro P. Un vettore $\overline{x} \in P$ è un **vertice** di $P$ se e solo se in $\overline{x}$ sono attivi $n$ vincoli definiti da vettori di coefficienti che sono linearmente indipendenti (vincoli linearmente indipendenti).

Applicando la precedente definizione ad unpoliedro in forma standard}ne deriva un corollario della caratterizzazione algebrica.

Sia $P = \{\, x \in \mathbb{R}^n : Ax = b,\ x \ge 0 \,\}, qquad A \in \mathbb{R}^{m \times n},\ \operatorname{rank}(A) = m$  un poliedro $P$ in **forma standard**. Un vettore $\overline{x} \in P$ è un **vertice** di $P$ se e solo se in $\overline{x}$ sono attivi $n-m$ vincoli di segno che uniti agli $m$ vincoli di eguaglianza formano un insieme di $n$ vincoli linearmente indipendenti.

Date queste considerazioni possiamo quindi rielaborare il teorema fondamentale da un punto di vista geometrico

>[!info] Teorema fondamentale (geometrico)
>Sia $(P)$ il problema di programmazione lineare in forma standard sotto le ipotesi $$A \in \mathbb{R}^{m \times n} \hspace{4ex}\text{rango}(A) = m < n$$
>1. Se il poliedro $\Omega(P)$ è non vuoto allora esiste almeno un **vertice** in $\Omega(P)$.
>2. Se il problema $(P)$ ammette ottimo finito, allora uno dei **vertici** di $\Omega(P)$ è soluzione ottima


>[!important] Basi adiacenti
>Basi che condividono tutte le colonne meno 1


#### Esempio 1
Consideriamo il problema
$$ (P) \quad \begin{cases} \max & x_1 + 2x_2 \\ \text{s.t.} & 2x_1 + x_2 \le 4 \\ & -2x_1 + x_2 \le 2 \\ & x_1 + x_2 \ge 1 \\ & x_1, x_2 \ge 0 \end{cases} $$
e lo risolviamo graficamente identificando tutti i vertici. Successivamente, costruiamo il problema equivalente in forma standard, trasformiamo le coordinate dei vertici nel nuovo spazio delle variabili decisionali.
![[Problemi di ottimizzazione-1791900288583.webp|center|465]]
Vertici della regione ammissibile:
$$ \begin{aligned} A &= (0,1), & B &= (0,2), & C &= \left(\tfrac{1}{2}, 3\right) \\ D &= (2,0), & E &= (1,0) && \end{aligned} $$
**Forma standard**
Per rappresentare le soluzioni in $\mathbb{R}^5$ ogni disuguaglianza va trasformata in uguaglianza introducendo una variabile non negativa: si **somma** per un vincolo $\le$ (variabile di slack), si **sottrae** per un vincolo $\ge$ (variabile di surplus).

$$ \begin{aligned} 2x_1 + x_2 \le 4 &\iff 2x_1 + x_2 + x_3 = 4, ; x_3 \ge 0 \\ x_1 + x_2 \ge 1 &\iff x_1 + x_2 - x_5 = 1, ; x_5 \ge 0 \end{aligned} $$

La retta $2x_1 + x_2 = 4$ si ottiene ponendo $x_3 = 0$, mentre la porzione di piano per cui $x_3 > 0$ è il semipiano ammissibile. La regione ammissibile resta identica, ma ora i suoi punti sono caratterizzati da vettori in $\mathbb{R}^5$ (il grafico è la proiezione sul piano $(x_1, x_2)$). Ogni variabile aggiuntiva compare in **un solo** vincolo: per questo si calcola da quel vincolo, senza usare gli altri.

$$ (P) \quad \begin{cases} \min & -x_1 - 2x_2 \\ \text{s.t.} & 2x_1 + x_2 + x_3 = 4 \\ & -2x_1 + x_2 + x_4 = 2 \\ & x_1 + x_2 - x_5 = 1 \\ & x_1, x_2, x_3, x_4, x_5 \ge 0 \end{cases} $$

**Coordinate dei vertici in $\mathbb{R}^5$**
Prendiamo $A = (0,1)$. Sostituiamo le coordinate nel vincolo che contiene la variabile da trovare:
$$\begin{align*} 2x_1 + x_2 + x_3 = 4 &\implies x_3 = 4 - 1 = 3 \\ -2x_1 + x_2 + x_4 = 2 &\implies x_4 = 2 - 1 = 1 \\ x_1 + x_2 - x_5 = 1 &\implies x_5 = 1 - 1 = 0 \end{align*} $$

Quindi $x_A = (0, 1, 3, 1, 0)^\top$. Ripetiamo per ogni punto:
$$ \begin{array}{lcl} A = (0,1) & \to & x_A = (0,, 1,, 3,, 1,, 0)^\top \\ B = (0,2) & \to & x_B = (0,, 2,, 2,, 0,, 1)^\top \\ C = (\tfrac{1}{2}, 3) & \to & x_C = (\tfrac{1}{2},, 3,, 0,, 0,, \tfrac{5}{2})^\top \\ D = (2,0) & \to & x_D = (2,, 0,, 0,, 6,, 1)^\top \\ E = (1,0) & \to & x_E = (1,, 0,, 2,, 4,, 0)^\top \end{array} $$

Verifica dei vincoli per ogni punto:

- **vincoli di uguaglianza:** soddisfatti per costruzione $\implies$ soluzione ammissibile
- **vincoli di segno:** tutte le componenti sono $\ge 0$, e due di esse sono nulle (vincoli di segno attivi)

Le componenti nulle individuano le variabili fuori base, le altre sono la base associata:

$$ \begin{array}{lll} A: & x_1 = x_5 = 0 & B_A = {2,3,4} \\ B: & x_1 = x_4 = 0 & B_B = {2,3,5} \\ C: & x_3 = x_4 = 0 & B_C = {1,2,5} \\ D: & x_2 = x_3 = 0 & B_D = {1,4,5} \\ E: & x_2 = x_5 = 0 & B_E = {1,3,4} \end{array} $$

**Interpretazione**
Si può osservare che in ogni vettore compaiono $2$ zeri: $m = 3, ; n = 5 \implies n - m = 2$ (condizione necessaria non violata). Ogni vertice si trova all'intersezione di due rette linearmente indipendenti.

Infatti, esiste una corrispondenza tra i vertici e le soluzioni di base: $x \in \mathbb{R}^5$, $m = 3$, $n = 5$ dove $A \in \mathbb{R}^{3 \times 5}$ con 3 vincoli di uguaglianza (3 iperpiani) e 5 vincoli di segno.

$\therefore$ i punti sono generati da:

- **vincoli di uguaglianza:** 3 iperpiani, soddisfatti per costruzione
- **vincoli di segno:** $2$ dei $5$ soddisfatti con uguaglianza ($2$ componenti nulle per punto)

**Quindi,** i punti sono **vertici** in $\mathbb{R}^5$ dati dalle intersezioni di $5$ iperpiani (2 VS, 3 VU).

**Adiacenza**
Due vertici sono detti adiacenti se condividono il segmento che li congiunge (condividono la coordinata della retta su cui giacciono e hanno al più una coordinata diversa). Il concetto è allineato con quello di **basi adiacenti**: due basi sono adiacenti se differiscono per un solo indice.

$$ \begin{array}{lll} A \text{--} B: & x_1 = 0 & {2,3,4} \leftrightarrow {2,3,5} \\ B \text{--} C: & x_4 = 0 & {2,3,5} \leftrightarrow {1,2,5} \\ C \text{--} D: & x_3 = 0 & {1,2,5} \leftrightarrow {1,4,5} \\ D \text{--} E: & x_2 = 0 & {1,4,5} \leftrightarrow {1,3,4} \\ E \text{--} A: & x_5 = 0 & {1,3,4} \leftrightarrow {2,3,4} \end{array} $$

Qui ogni vertice ha esattamente una base, quindi il passaggio tra basi adiacenti corrisponde sempre a uno spostamento lungo un lato.

#### Esempio 2
Consideriamo il problema

$$ (P) \quad \begin{cases} \max & 3x_1 + x_2 \ \text{s.t.} & x_1 + x_2 \le 6 \ & x_2 \le 3 \ & x_1 + 2x_2 \le 9 \ & x_1, x_2 \ge 0 \end{cases} $$

e identifichiamo vertici e basi ammissibili adiacenti.
![[Problemi di ottimizzazione-1791900990248.webp|center|482]]
Vertici della regione ammissibile:
$$ \begin{aligned} A &= (0,0), & B &= (0,3) \\ C &= (3,3), & D &= (6,0) \end{aligned} $$

Costruiamo la forma standard:

$$ (P) \quad \begin{cases} \min & -3x_1 - x_2 \\ \text{s.t.} & x_1 + x_2 + x_3 = 6 \\ & x_2 + x_4 = 3 \\ & x_1 + 2x_2 + x_5 = 9 \\ & x_1, x_2, x_3, x_4, x_5 \ge 0 \end{cases} $$

Coordinate dei punti nel nuovo spazio a 5 variabili:
$$ \begin{array}{lcl} A = (0,0) & \to & x_A = (0,, 0,, 6,, 3,, 9)^\top \\ B = (0,3) & \to & x_B = (0,, 3,, 3,, 0,, 3)^\top \\ C = (3,3) & \to & x_C = (3,, 3,, 0,, 0,, 0)^\top \\ D = (6,0) & \to & x_D = (6,, 0,, 0,, 3,, 3)^\top \end{array} $$

Per $A$, $B$, $D$ ci sono due componenti nulle, come previsto ($n - m = 2$), e ogni vertice ha una sola base:

$$ \begin{aligned} B_A &= {3,4,5} \\ B_B &= {2,3,5} \\ B_D &= {1,4,5} \end{aligned} $$

### Soluzione degenere
Il punto $x_C$ ha **tre** componenti nulle invece di due: è una soluzione di base **degenere**, e corrisponde al vertice $C$ identificato dall'intersezione di 3 rette ($x_3 = x_4 = x_5 = 0$), quando per individuarlo ne bastano 2. Le basi $B_1 = {1,2,3}$, $B_2 = {1,2,4}$ e $B_3 = {1,2,5}$ sono tra loro adiacenti, ma identificano tutte la stessa soluzione di base ammissibile:

$$ C = (3,3) \to x_C = (3,3,0,0,0)^\top $$

Quindi non tutte le intersezioni hanno lo stesso contenuto informativo. Un algoritmo che lavora su basi adiacenti, in presenza di soluzioni degeneri, può cambiare base senza generare un nuovo punto: rimane nello stesso vertice $C$. L'algoritmo deve essere scritto tenendone conto.
# Algoritmo del simplesso
Schema di algoritmo
$$
\begin{array}{rl}
1:&\text{if} \ \Omega(P) \neq \emptyset \ \text{then} \\
2:&\hspace{4ex} \text{calcola una soluzione di base ammissibile }\overline{x} \text{ di } \Omega (P) \\
3:&\text{else} \\
4:&\hspace{4ex} \text{exit} \\
5:&\text{end if} \\ \hdashline
6:&\text{if} \ \overline{x}\text{ è soluzione ottima per }(P) \text{ then} \\
7:&\hspace{4ex} x^* := \overline{x}, z^*:= c^T\overline{x} \\
8:&\hspace{4ex} \text{exit} \\
9:&\text{end if} \\
10:&\text{if esiste una sba }x \text{ adiacente a }\overline{x}\text{ con }c^Tx \leq c^T \overline{x} \text{ then} \\
11:&\hspace{4ex} \overline{x}:= x, \text{go to 6} \\
12:&\text{else} \\
13:&\hspace{4ex} \text{exit} \\
14:&\text{end if}
\end{array}
$$
- 2. se esiste una soluzione ammissibile allora calcola la soluzione di base ammissibile
- 6. [[#Condizioni di ottimalità]]
- 10. condizione non peggioramento della funzione obbiettivo
- 13. non sono riuscito a dire che è ottima, non ho trovato un vertice adiacente che mi ha permesso di migliorare la funzione obbiettivo -> non trovo la base adiacente, ho trovato una direzione lungo la quale posso spostarmi senza trovarlo un altro vertice, si va a $-\infty$

L’algoritmo si divide in due fasi:
- Prima fase (righe 1–5): verifica dell’ammissibilità e calcolo di una soluzione ammissibile di base $\bar{x} \in \Omega(P)$ (inizializzazione).
- Seconda fase (righe 6–14): test di ottimalità e cambio di sba, ripetuti finché non si trova l’ottimo oppure si verifica che il problema è inferiormente illimitato.
Tuttavia, analizzeremo l’algoritmo al contrario: a partire da una sba verifichiamo la sua ottimalità.
## Condizioni di ottimalità
Analizziamo la seconda fase dell'algoritmo del simplesso, diamo come input una soluzione di base ammissibile.

Indichiamo gli indici delle colonne in base con
$$\mathcal{B} = \{\mathcal{B}(1), \ldots, \mathcal{B}(m)\}$$
e gli indici delle colonne fuori base con
$$\mathcal{N} = \{\mathcal{N}(1), \ldots, \mathcal{N}(n-m)\}$$
Matrice di base
$$B = \begin{pmatrix} A_{\mathcal{B}(1)} \mid A_{\mathcal{B}(2)} \mid \cdots \mid A_{\mathcal{B}(m)} \end{pmatrix}$$
Matrice non di base
$$N = \begin{pmatrix} A_{\mathcal{N}(1)} \mid A_{\mathcal{N}(2)} \mid \cdots \mid A_{\mathcal{N}(n-m)} \end{pmatrix}$$

Ora dobbiamo parlare anche della funzione obbiettivo -> partizioniamo anche il vettore dei coefficienti di costo come per le variabili di base

>[!multi-column]
>
>>[!blank]
>>**Variabili di base**
>>$$x_B = \begin{pmatrix} x_{\mathcal{B}(1)} \\ \vdots \\ x_{\mathcal{B}(m)} \end{pmatrix} \in \mathbb{R}^m$$
>
>>[!blank]
>>**Coefficienti di costo delle variabili di base**
>>$$c_B = \begin{pmatrix} c_{\mathcal{B}(1)} \\ \vdots \\ c_{\mathcal{B}(m)} \end{pmatrix} \in \mathbb{R}^m$$

>[!multi-column]
>
>>[!blank]
>>**Variabili fuori base**
>>$$x_N = \begin{pmatrix} x_{\mathcal{N}(1)} \\ \vdots \\ x_{\mathcal{N}(n-m)} \end{pmatrix} \in \mathbb{R}^{n-m}$$
>
>>[!blank]
>>**Coefficienti di costo delle variabili fuori base**
>>$$c_N = \begin{pmatrix} c_{\mathcal{N}(1)} \\ \vdots \\ c_{\mathcal{N}(n-m)} \end{pmatrix} \in \mathbb{R}^{n-m}$$

Soluzioni del sistema $Ax = b$ rispetto alla base $B$:
$$\begin{aligned}
x_B &= B^{-1}(b - N x_N) \\
    &= B^{-1}b - B^{-1}N x_N
\end{aligned}$$
Consideriamo la soluzione ammissibile di base $\bar{x} \in \Omega(P)$ corrispondente alla base $B$
$$
\overline{x} = \binom{\bar{x}_B}{\bar{x}_N} = \binom{B^{-1}b}{0} \geq \binom{0}{0}
$$
con valore di funzione obbiettivo
$$
\begin{align*}
\bar{z}=c^T \overline{x} &= (c_B^T \ , \ c_N^T) \binom{\overline{x}_B}{\overline{x}_N} \\
& = c^T_B \overline{x}_B + \underbrace{c_N^T \overline{x}_N}_{=0} \\
& = c_B^T B^{-1}b
\end{align*}
$$
### Espressione della funzione obbiettivo e costi ridotti
Dobbiamo confrontare $\overline{x}$ con un qualsiasi altro punto ammissibile, per capire se $\bar{x}$ è soluzione ottima.
Conoscendo una base siamo in grado di generare qualunque punto dello spazio vettoriale, in particolare qualsiasi punto in grado di soddisfare il sistema di equazioni.
$$
\overline{x} = \binom{B^{-1} b}{0} \geq \binom{0}{0}
$$
Consideriamo il sistema di equazioni
$$
\displaylines{
Ax  = b \\
(B \quad N) \binom{x_B}{x_N} = b \\
B x_B + N x_N = b \\
Bx_B = b- Nx_N \\
x_B = B^{-1}b -B^{-1}N x_N
}
$$
qualunque soluzione del sistema lineare associata alla stessa base
$$
x = \binom{B^{-1}b-B^{-1}Nx_N}{x_N}
$$
Determiniamo l’espressione della funzione obiettivo per $x$ sostituendo $x_B$ calcolata e partizionando anche il vettore $c^T$:
$$
\begin{align*}
c^T \overline{x} & = (c_B^T  c_N^T) \binom{x_B}{x_N} = (c_B^T c_N^T)\binom{B^{-1}b-B^{-1}Nx_N}{x_N} \\
c^Tx& = c_B^T (B^{-1}b - B^{-1} N x_N) + c_N^T x_N \\
c^Tx& = c_B^T B^{-1}b -c_B^T B^{-1} N x_N + c_N^T x_N \\
\end{align*}
$$
Se $x\neq 0$ si hanno $n − m$ gradi di libertà per ricavare nuove basi. In particolare, modificare $x_N$ modifica anche il valore di $x_B$ non garantendo l’ammissibilità della soluzione.
Sapendo che la funzione obiettivo nel punto fornito vale:
$$
\hat{c}_N^T := c_N^T - c_B^T B^{-1}N
$$
dove $\hat{c}_N^T$ prende il nome di **vettore dei coefficienti di costo ridotto delle variabili fuori base**.
Riscriviamo l’equazione precedente e raggruppiamo rispetto a $x_N$ (**hp**. contiene valori positivi):
$$
c^Tx = c^T \overline{x} + \overbrace{(c_N^T-c_B^TB^{-1}N)}^{\hat{c}_N^T} x_N \hspace{8ex} \forall x \in \Omega(P)
$$
ottenendo l’espressione della funzione obiettivo del problema $(P)$ come funzione delle sole
variabili $x_N \in \mathbb{R}^{n-m}$
Ponendo quindi
$$
c^Tx - c^T \bar{x} = \hat{c}_N^T x_N
$$
è possibile ricavare **condizione sufficiente di ottimalità**

>[!quote] In parole umane
>Stiamo confrontando la funzione obbiettivo nel punto che ci è stato dato con la funzione obbiettivo in un qualsiasi altro punto che soddisfa il sistema di equazioni.
>Questo confronto non dipende più dalle variabili di base, ma solo da quelle fuori base.
>Se genero una qualsiasi soluzione il mio studio si può concentrare sulle variabili $x_N$ e sul vettore dei coefficienti (che è noto).

### Condizione sufficiente di ottimalità
Osserviamo che per $x_N = 0$ si ha $c^Tx = c^T \bar{x} = \bar{z}$. Per ogni altro punto ammissibile $x \in \Omega(P)$ dovrà valere
$x_N \geq 0$ ($x_N \neq 0$). Pertanto:
$$
\text{(Hp): } \underbrace{\hat{c}_N \ge 0}_{\text{garantisce ammissibilità}} \;\Rightarrow\; \hat{c}_N^\top x_N \ge 0 \;\Rightarrow\; \underbrace{c^Tx \geq c^T \overline{x}}_{\text{def. di ottimo}} \qquad \forall x \in \Omega(P)
$$
>[!info] Teorema
>Data una base ammissibile $B$ della matrice $A$ del problema $(P)$ in forma standard, se il vettore dei costi ridotti è non negativo
>$$
>\hat{c}_N^T = c_N^T - c_B^T B^{-1}N \geq 0
>$$
>allora la soluzione di base ammissibile associata alla base $B$ è ottima per $(P)$

>[!info] Corollario
>Data una base ammissibile $B$ della matrice $A$ del problema $(P)$ in forma standard
>$$
>\begin{align*}
>\text{se} \ \hat{c}_N > 0 \implies & c^\top x - c^\top \bar{x} > 0 \\
> & c^\top x \underbrace{>}_{\exists!} c^\top \bar{x} \qquad \forall x \in \Omega(P)
>\end{align*}
>$$
>Allora la soluzione di base ammissibile associata alla base $B$ è l'**unica** soluzione ottima per $(P)$.

### Approfondimenti
Fornita una base riusciamo a descrivere qualunque soluzione ammissibile del problema. Infatti, trasformando la funzione obiettivo originale del problema $(P)$
$$
z(x) = c^T x :\mathbb{R}^n \to \mathbb{R}
$$
nella funzione ridotta alla sola dipendenza delle variabili fuori base ($n-m$ variabili decisionali) definita come:
$$
\hat{z}(x_N) = \bar{z} + \hat{c}_N^Tx_N: \mathbb{R}^{n-m} \to \mathbb{R}
$$
Per effetto di tale trasformazione la funzione obbiettivo (dipende solo dalle variabili fuori base)
($\mathbb{R}^n \to \mathbb{R}^{n-m}$), il problema originale
$$
(P) \begin{cases}
\min & z(x)  \\
\text{s.t.} & x \in \Omega(P)
\end{cases}
$$
diventa il seguente **problema ridotto**
$$
(\hat{P}) \begin{cases}
\min & \hat{z}(x_N) = \bar{z} + \hat{c}_N^T x_N \\
\text{s.t.} & B^{-1}b - B^{-1} Nx_N \geq 0 \\
& x_N \geq 0
\end{cases}
$$
equivalente a $(P)$ a patto di conoscere la base.
#### Esercizio 3
$$
A = \left(\begin{array}{cccccc}
1 & 2 & 3 & 1 & 0 & 0 \\
2 & -1 & -5 & 0 & 1 & 0  \\
1 & 2 & -1 & 0 & 0 & 1
\end{array}\right)
$$
$$
B =\{1,3,4\} = \left(\begin{array}{cccccc}
1 & 3 & 1 \\
2 & -5 & 0 \\
1 & -1 & 0
\end{array}\right)
\hspace{8ex}
N = \{2,5,6\} = \left(\begin{array}{cccccc}
2 & 0 & 0  \\
-1 & 1 & 0 \\
2 & 0 & 1
\end{array}\right)
$$
$$
\displaylines{
\overline{x}_B^T = (\overline{x}_1, \overline{x}_3, \overline{x}_4) \\
c_B^T = (1,1,1) \\
\overline{x}_N^T = (\overline{x}_2, \overline{x}_5, \overline{x}_6) \\
c_N^T = (2,1,1)
}
$$
$$
B^{-1} = \frac{1}{3}\left(\begin{array}{ccc}
0 & -1 & 5 \\
0 & -1 & 2 \\
3 & 4 & -11
\end{array}\right)
$$
$$
\overline{x}_B = B^{-1}b = (1,0,2)^T \hspace{8ex} \overline{x}_N = (0,0,0)
$$
$$
\overline{x} = (1,0,0,2,0,0)^T
$$
è ammissibile.
Calcoliamo i coefficienti di costo ridotto
$$
\hat{c}_N^T = C_N^T - c_B^T B^{-1} N = \left( \frac{10}{3}, \frac{1}{3}, \frac{7}{3} \right)^T
$$
è ottima ed è unica (sono tutti maggiori di 0)
## Cambio della soluzione di base ammissibile
### Forma canonica
Se non è soddisfatta la [[#Condizione sufficiente di ottimalità|condizione sufficiente di ottimalità]] di una soluzione, allora è possibile effettuare delle operazioni di **cambio di base**.
Sia $\bar{x}$ una soluzione ammissibile di base per $(P)$:
$$
\bar{x} = \binom{B^{-1}b}{0} \geq \binom{0}{0}
$$
Possiamo esprimere il problema $(P)$ come **forma canonica** rispetto a $B$
$$
\begin{cases}
\min & 0^T x_B + \hat{c}_N^T x_N \\
\text{s.t.} & I \cdot x_B + B^{-1}Nx_N = B^{-1}b \leftarrow \text{modo }\neq\text{ di scrivere }Ax = b \\
& x_B, x_N \geq 0
\end{cases}
$$
>[!important] Si noti che i vincoli sul segno garantiscono l'ammissibilità della soluzione di base, tuttavia, in questo caso, l'ammissibilità non dipende solo da $x_N$ (variabili decisionali) poiché al suo variare cambia anche $x_B$.

Nella minimizzazione del problema si possono eliminare le costanti $\implies$ elimino $\bar{z}$.



---

[...] da riprendere
- trovare vettori linearmente indipendenti
- trovare matrice inversa (controlla se lo fa la calc)
- prodotto righe per colonna
- calcolo det (laplace - sarrus)
- prodotto matriciale


---


tecnica del cambio di soluzione
riprendendo la forma canonica
$$
\min c^T\overline{x} + \hat{c}^T x_N \ = \ c^T \overline{x} + \min \hat{c}^T_N x_N 
$$
$$
Ax = b \implies B x_B + N x_N = b \implies B^{-1}B x_B + B^{-1} N x_N = B^{-1}b \implies I x_B + B^{-1} N x_N = B^{-1}b
$$
$$
\begin{cases}
\min & 0^T x_B + \hat{c}_N^T x_N \\
\text{s.t.} & I \cdot x_B + B^{-1}Nx_N = B^{-1}b\\
& x_B, x_N \geq 0
\end{cases}
$$
dove $\hat{c}^\top_{N} = c_N^T - c_B^TB^{-1}N$
di conseguenza $\hat{c}_B^T = c_B^T - c_B^T B^{-1}B = c_B^T - c_B^T I = c_B^T - c_B^T = 0^T$ (rivedi perché arriviamo a $0^T$)

dobbiamo capire se $\hat{c}_N^T$ è ammissibile
non lo è se esiste almeno una che è strettamente negativa
$\hat{c}_{N(j)} < 0$
la funzione obbiettivo della forma canonica misura di quanto varia la funzione obbiettivo originale in un nuovo punto
se c'è un coefficiente strettamente negativo:
$$
\hat{c}_N^T x_N
$$
perturbiamo $x_N$ come un vettore con n-m componenti, che sicuramente soddisfa i vincoli sul segno, e in corrispondenza della $j$esima componente vale $\delta$
$$
x_N = \left(\begin{array}{c} 0 \\ \vdots \\ \delta \\ \vdots \\ 0 \end{array}\right)_{n-m} \quad \delta > 0
$$
il prodotto scalare $\hat{c}_N^T x_N = \hat{c}_{N(j)} \cdot \delta <0$
è negativo in quanto $\delta$ è positivo e $\hat{c}_{N(j)}$ è negativo
il prodotto scalare rappresenta quanto varia la funzione obbiettivo e varia di un valore negativo
-> $c^Tx < c^T \bar{x}$.
Ci converrebbe scegliere $\delta$ il più grande possibile, ma dobbiamo fare attenzione che certe soluzioni non diventino negative

riscriviamo $x_N$
$$
x_N = \left(\begin{array}{c} 0 \\ \vdots \\ 1 \\ \vdots \\ 0 \end{array}\right) \delta = e_j \cdot \delta
$$
dove $e_j$ vettore nullo fatta eccezione per la $j$esima componente pari a 1.
La colonna $j$esima sarà la colonna $k$esima della matrice originale
$$
A_{N(j)} = A_k
$$

concentriamoci su $x_B + B^{-1} N x_N \geq 0$
sostituiamo $x_N = e_j \cdot \delta$
$$
x_B + B^{-1}N(e_j \delta) \geq 0
$$
essendo $\delta$ uno scalare
$$
x_B + \delta B^{-1}N e_j \geq 0
$$
il prodotto $N e_j$ seleziona solo la $j$esima colonna di $N$ che non è altro che $A_{N(j)} = A_k$
$$
\displaylines{
x_B + \delta B^{-1} A_{N(j)} \geq 0 \\
x_B + \delta \underbrace{B^{-1} A_k}_{d} \geq 0
}
$$
chiamiamo $d = B^{-1}A_k$ e otteniamo un sistema di diseguaglianze
$$
x_B + \delta d \geq 0
$$
stiamo perturbando $x_B$ di una quantità $\delta$ lungo la direzione $d$
$d = B^{-1} A_k$ in quanto $Bd = A_k$ dove $B$ è una base e $A_k$ è una colonna fuori base, facendo $B\bowtie A_k$ sono colonne linearmente dipendenti
aumentando $\delta$ la soluzione non è di base, sto "inglobando" la colonna $A_k$, creando una soluzione non di base
struttura simile al teorema fondamentale

$$
\displaylines{
x_B + \delta d = \underbrace{B^{-1} b}_{\overline{x}_B} \\
x_B = \overline{x}_B - \delta d
}
$$
imponiamo $x_B \geq 0$
$$
\overline{x}_B - \delta d \geq 0
$$
scegliamo $\delta$ per scegliere l'altro estremo del segmento (contrariamente al teorema fondamentale in cui $\varepsilon$ serviva a trovare l'estremo)
$$
\begin{cases}
\overline{x}_{B(1)} - \delta d_1 \geq 0 \\
\vdots \\
\overline{x}_{B(m)} - \delta d_m \geq 0
\end{cases}
$$
risolviamo la $i$esima
$$
\overline{x}_{B(i)} - \delta d_i \geq 0
$$
analizziamo i casi possibili
se $d_i \leq 0$
è valida $\forall \ \delta \geq 0$

se $d_i > 0$
è valida $\forall \ \delta \leq \frac{\overline{x}_{B(i)}}{d_i}$

risolvendole tutte in simultanea
l'uguaglianza è soddisfatta
$$
\forall \ \delta \leq \bar{ \delta}
$$
dove
$$
\bar{\delta} = \min \begin{cases}
\frac{\bar{x}_{B(i)}}{d_i} \ : \ d_i > 0
\end{cases}
$$




se non ci sono $d_i > 0$ significa che per ciascuna disuguaglianza non possiamo definire $\bar{\delta}$, quindi abbiamo solo $\delta\geq 0$
a noi interessava avere $\delta$ il più grande possibile e non abbiamo un limite superiore
$$
\therefore \ \delta \to \infty
$$
e il prodotto scalare va a $-\infty$
**condizione di arresto per problema illimitato**

Se $\nexists \ i \ : \ d_i > 0 \implies (P)$ è illimitato inferiormente

abbiamo trovato una semiretta lungo la quale ci possiamo spostare ed è una semiretta di punti ammissibili:
$$
\bar{x}_B - \delta d
$$

nel caso in cui $\exists \ \bar{ \delta}$ noi vogliamo comunque un $\delta$ il più grande possibile $\implies \delta = \bar{\delta}$
in questo caso in corrispondenza di una qualche $i$
$$
\delta = \frac{\bar{x}_{B(i)}}{d_i}
$$
chiamiamo $i^*$
$$
i^* = \arg \min \begin{cases}
\frac{\bar{x}_{B(i)}}{d_i} \ : \ d_i > 0
\end{cases}
$$
sto prendendo l'indice in corrispondenza del quale
$$
\delta = \frac{\bar{x}_{B(i^*)}}{d_{i^*}}
$$
prendiamo dal sistema di disequazioni quella di indice $i^*$
$$
\underbrace{\bar{x}_{B(i^*)}- \delta d_{i^*}}_{x_{B(i^*)}} \geq 0
$$
$$
x_{B(i^*)} = \bar{x}_{B(i^*)}- \delta d_{i^*}
$$
abbiamo scelto $\delta = \bar{ \delta}$
$$
\begin{align*}
x_{B(i^*)} & = \bar{x}_{B(i^*)}- \bar{\delta} d_{i^*} \\ 
 & = \bar{x}_{B(i^*)}- \frac{\bar{x}_{B(i^*)}}{d_{i^*}} d_{i^*} = 0
\end{align*}
$$
sostituendo il $\delta$ si è generata una nuova componente che vale 0
l'insieme $m$ indici iniziali [[#Condizioni di ottimalità]]
$$
\beta' = \{\beta(1),\dots,\beta(m)\} \setminus \beta(i^*) \cup N(j)
$$
questo nuovo insieme è un nuovo insieme di colonne di base
abbiamo aggiunto la $j$esima colonna alle colonne di base e abbiamo eliminato la colonna $i^*$
perturbando siamo sicuri che arriviamo ad una nuova base (nel teorema fondamentale non siamo sicuri di trovare una base).

$$
\begin{aligned}
1:&\ \text{Calcola } \hat{c}_N^\top = c_N^\top - c_B^\top B^{-1} N \\
2:&\ \textbf{if } \hat{c}_N^\top \geq 0 \textbf{ then} \qquad \triangleright\ \text{test di ottimalità} \\
3:&\ \quad x^* := \bar{x},\ z^* := \bar{z},\ \textcolor{red}{\textbf{exit}} \qquad \triangleright\ x^* \text{ è la soluzione ottima} \\
4:&\ \textbf{end if} \\
5:&\ \text{Scegli } j^* \in \{ j \in \{1,\dots,n-m\} : \hat{c}_{\mathcal{N}(j)} < 0 \} \\
6:&\ \text{Poni } k = \mathcal{N}(j^*) \text{ e calcola } d = B^{-1} A_k \qquad \triangleright\ x_k \text{ entra in base} \\
7:&\ \textbf{if } d \nleq 0 \textbf{ then} \qquad \triangleright\ \text{esiste una sba } x \text{ adiacente con } c^\top x \leq c^\top \bar{x} \\
8:&\ \quad \text{Calcola } \bar{\delta} = \min\{ \bar{x}_{\mathcal{B}(i)} / d_i : d_i > 0 \} \\
9:&\ \quad \text{Scegli } i^* \in \{ i \in \{1,\dots,m\} : \bar{\delta} = \bar{x}_{\mathcal{B}(i)} / d_i \} \\
10:&\ \quad \text{Poni } h = \mathcal{B}(i^*) \qquad \triangleright\ x_h \text{ esce dalla base} \\
11:&\ \quad \text{Poni } x = \begin{pmatrix} \bar{x}_B - \bar{\delta} d \\ \bar{\delta} \hat{e}_j \end{pmatrix},\quad z = c^\top \bar{x} + \hat{c}_k \cdot \bar{\delta} \\
12:&\ \quad \mathcal{B} := \mathcal{B} \setminus \{h\} \cup \{k\},\ \mathcal{N} := \mathcal{N} \setminus \{k\} \cup \{h\},\ \bar{x} := x,\ \bar{z} := z,\ \textbf{go to } 1 \\
13:&\ \textbf{else} \\
14:&\ \quad \textcolor{red}{\textbf{exit}} \qquad \triangleright\ (P) \text{ è inferiormente illimitato.} \\
15:&\ \textbf{end if}
\end{aligned}
$$