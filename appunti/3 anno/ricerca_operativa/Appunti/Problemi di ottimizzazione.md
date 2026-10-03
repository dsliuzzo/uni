#appunti 
#ricerca_operativa 

# Problemi di ottimizzazione
Considerando una funzione $f:\mathbb{R}^n \to \mathbb{R}$ e un insieme $S \subseteq \mathbb{R}^n$, un problema di ottimizzazione $P$ consiste nel determinare, se esiste, un punto di minimo della funzione $f$ tra i punti dell'insieme $S$
$$
\left\{\begin{array}{l}\min & f(x) \\ \text{subject to } & x \in S\end{array}\right.
$$
- $x \in \mathbb{R}^n$ vettore delle **variabili di decisione**
- $S$ viene chiamato **insieme ammissibile**
- se $x \in S$ rende $x$ una **soluzione ammissibile** di $P$
- $f$ prende il nome di **funzione obbiettivo** (spesso viene associata al costo)
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
>Le definizioni per il massimo sono duali. La funzione obbiettivo viene indicata con $h$

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

## Funzione obbiettivo
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
\left\{\begin{array}{la}\min & c_{1}x_{1} + c_{2}x_{2} + \dots + c_nx_n  \\  s.t. & a_{11}x_{1} + a_{12} x_{2} + \dots + a_{1n}x_n \geq b_{1} \\  & a_{21}x_{1} + a_{22}x_{2} + \dots + a_{2n}x_n \geq b_{2} \\  & \vdots \\  & a_{m 1}x_{1} + a_{m 2}x_{2} + \dots + a_{mn}x_n \geq b_m\end{array}\right.
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
Per quanto riguarda invece la funzione obbiettivo, sia il vettore $c$ che il vettore $x$ sono vettori colonna: non possiamo effettuare il prodotto riga per colonna, di conseguenza utilizziamo la trasposta $c^T$
$$
c^T x = (c_{1},c_{2},\dots,c_n) \left(\begin{array}{l}x_{1} \\  x_{2} \\  \vdots \\  x_n\end{array}\right) = c_{1}x_{1} + c_{2}x_{2} + \dots + c_nx_n
$$
Ne concludiamo che un problema di programmazione matematica può essere espresso in forma compatta come


## Risoluzione grafica di un problema in due variabili
Finché il problema ha solo due variabili decisionali è possibile risolverlo graficamente:
- I vincoli rappresentano dei semipiani
- Il sistema di vincoli sarà quindi l'intersezione di questi semipiani (regione ammissibile)
- Il vettore dei coefficienti $c = (c_{1},c_{2})^T$ rappresenta il gradiente della funzione obbiettivo (direzione di crescita)
- La funzione obbiettivo è un fascio di rette (curva di livello) - andando in direzione del gradiente stiamo massimizzando la funzione - andando in direzione opposta la stiamo minimizzando
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
>>Funzione obbiettivo
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
>>Funzione obbiettivo
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
>>Funzione obbiettivo
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
>>[!Important] Iperspazio
>>Sia $w \in \mathbb{R}^n$ un vettore $n$-dimensionale e $w_0$ uno scalare, l'insieme $$\{x \in \mathbb{R}^n:w^Tx \geq w_0\}$$
>>si chiama **iperspazio** (generalizzazione a $n$ dimensioni del semispazio).
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
>I due vettori sono diversi, ma hanno lo stesso valore obbiettivo, quindi entrambe sono soluzioni ottime di $(P)$.
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


>[!question] Osservazione
>Le due ipotesi garantiscono che il sistema di equazioni abbia $\infty^{n-m}$ [[2. I vettori (algebra)#Teorema di Rouché-Capelli|soluzioni]] ed è sempre possibile esplicitare $m$ componenti di $x$ in funzione delle rimanenti $n-m$

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
In questo caso però dobbiamo modificare anche la funzione obbiettivo.

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

Nella funzione obbiettivo:
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
>- $s_i > 0$  il vincolo e strettamente soddisfatto (**non attivo**)
>- $s_i <0$ nel punto $\overline{x}$ il vincolo è violato

>[!question] Osservazione
>ciascuna variabile ausiliaria:
>1. non sono nelle variabili obbiettivo
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
>$$A_{1}x_{1} + \dots +A_n x_n = b$$
>$$\sum_{j=1}^n A_j x_j = b $$

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
Indichiamo con $X$ l'insieme delle soluzioni del sistema di equazioni, $\Omega (P)$ indica la regione ammissibile del problema.
Scriviamo il sistema di equazioni evidenziando le colonne della matrice $A$
$$
Ax = b \Longleftrightarrow A_{1}x_{1} + A_{2}x_{2} +\dots + A_nx_n = b \implies \sum_{j=1}^n A_j x_j = b
$$
essendo $\text{rango}(A) = m$ esiste almeno un gruppo di $m$ colonne in $A$ linearmente indipendenti.
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
>>N = \left(A_{j{m+1}}|A_{j_{m+2}}|\dots|A_{j_n}\right)
>>$$

Definiamo i vettori delle variabili di base e variabili non di base
$$
x_B = \left(\begin{array}{c} x_{j_{1}} \\ \vdots \\ x_{j_m}\end{array}\right) \in \mathbb{R}^m \hspace{8ex} x_N = \left(\begin{array}{c} x_{j_{m+1}} \\ \vdots \\ x_{j_n}\end{array}\right) \in \mathbb{R}^{n-m}
$$
Permutiamo anche le componenti del vettore $x$
$$
A_{j_{1}}x_{j_{1}} + \dots + A_{j_m}x_{j_m} + A_{j_{m+1}} x_{j_{m+1}} + \dots + A_{j_n}x_{j_n} = b
$$
Possiamo quindi riscrivere il sistema di equazioni dei vincoli come
$$
Ax = b \implies Bx_B + Nx_N = b
$$
Risolvendo il sistema di equazioni rimangono $n-m$ parametri che sono esattamente da $A_{j_{m+1}}$ a $A_{j_n}$.
Per trovare il vettore delle variabili che risolve il sistema spostiamo $Nx_N$ a secondo membro e moltiplichiamo entrambi i membri per l'inversa di $B$.




---

come cercare una soluzione ottima sui vertici di un poliedro algoritmicamente --> necessità di una rappresentazione algebrica dei vertici
**soluzione di base**

nella matrice $A$ esistono $m$ colonne linearmente indipendenti
dentro la matrice $A \exists$ una matrice quadrata $m \times n$ il cui determinante $\neq 0$ --> invertibile e non singolare
[...]
Indichiamo con $I_B = \{j_{1},j_{2},\dots,j_m\}$ gli indici corrispondenti a un gruppo [...]

raggruppiamo le colonne linearmente indipendenti costruendo una base dello spazio vettoriale


$$
x = \left(\begin{array}{c}x_B \\ x_N\end{array}\right) = \left(\begin{array}{c}B^{-1} b \\ 0\end{array}\right)
$$
