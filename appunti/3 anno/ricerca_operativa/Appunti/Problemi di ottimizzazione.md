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

[...]
esistono e sono in **numero finito**

#dimostrazione 1 enunciato
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

---
dimostrazione del secondo enunciato
Se esiste una soluzione ottima $x^* \in \Omega(P)$, allora esiste una soluzione ottima di base per $(P)$.
Essendo ottima è anche ammissibile
$$
x^* = (x_{1}^*,\dots,x_p^*,0,\dots,0)^T
$$
Se le p colonne sono linearmente dipendenti è ottima ed è di base.
Se non lo è riprendiamo gli stessi procedimenti della dimostrazione 1
definiamo un nuovo vettore
$$
x = x^*-\epsilon d \in \Omega(P) \forall \epsilon \in [\epsilon_1, \epsilon_2]
$$
ma nello spostamento dobbiamo mantenere l'ottimalità, non solo l'ammissibilità
La funzione obbiettivo vale
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
stiamo sottraendo una quantità
perdere ottimalità in corrispondenza della nuova $x$ vuol dire perdere $x^*$, dovremmo dimostrare invece che $c^Td$ sia pari a 0, perché $\epsilon$ può essere positiva o negativa
$$
c^T d = 0
$$
assurdo
ipotizziamo che $c^T d> 0$
$$
c^T x = c^T x^* - \epsilon \underbrace{c^T d}_{> 0} \hspace{4ex} \forall \epsilon \in [\epsilon_{1}, \epsilon_{2}]
$$
$\epsilon$ può essere positivo o negativo, concentriamoci sulle $\epsilon$ positive $\epsilon \in [0,\epsilon_{2}]$
=> stiamo sottraendo una quantità positiva, $c^Tx < c^T x^*$, ma **non può essere**, $c^Tx^*$ è ottimo

Ipotizzando invece che $c^T d < 0$ consideriamo il caso in cui $\epsilon \in [\epsilon_{1},0]$, sono entrambi $<0$
$$
\displaylines{
c^T x = c^T x^* - \underbrace{\epsilon c^T d}_{> 0} \\
c^T x < c^T x^*
}
$$
e anche questo non può essere.





---

perché sono importanti i vincoli sul segno della forma standard
questo tipo di vincolo impedisce ai vincoli lineari di andare a $+\infty$ o $-\infty$

---

[...] riprendi proprietà delle slide

---

>[!info] Teorema

dimostrazione delle nuove slide non penso che la farò


enunciato di tipo geometrico
>[!info] Teorema fondamentale (geometrico)
>Sia $(P)$ il problema di programmazione lineare in forma standard sotto le ipotesi $$A \in \mathbb{R}^{m \times n} \hspace{4ex}\text{rango}(A) = m < n$$
>1. Se il poliedro $\Omega(P)$ è non vuoto allora esiste almeno un punto estremo in $\Omega(P)$.
>2. Se il problema $(P)$ ammette ottimo finito, allora uno dei punti estremi di $\Omega(P)$ è soluzione ottima

una soluzione di base degenere ha più di $n-m$ zeri
un vertice è degenere se ci passano più di più di due iperpiani
abbiamo più modi di descrivere lo stesso vertice


>[!important] Basi adiacenti
>Basi che condividono tutte le colonne meno 1









[...] da riprendere
- trovare vettori linearmente indipendenti
- trovare matrice inversa (controlla se lo fa la calc)
- prodotto righe per colonna
- calcolo det (laplace - sarrus)