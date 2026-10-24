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
a_1^\top  \\ a_2^\top  \\ \vdots \\ a_m^\top 
\end{array}\right)
$$
Dove $A_i^\top  = (a_{1 1}, a_{2 1},\dots,a_{m1})$ sono i vettori colonna della matrice $A$ e $a_i^\top  = \left(a_{11},a_{12},\dots,a_{1 n}\right)$ sono i vettori riga della matrice $A$
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
Per quanto riguarda invece la funzione obiettivo, sia il vettore $c$ che il vettore $x$ sono vettori colonna: non possiamo effettuare il prodotto riga per colonna, di conseguenza utilizziamo la trasposta $c^\top$
$$
c^\top  x = (c_{1},c_{2},\dots,c_n) \left(\begin{array}{l}x_{1} \\  x_{2} \\  \vdots \\  x_n\end{array}\right) = c_{1}x_{1} + c_{2}x_{2} + \dots + c_nx_n
$$
Ne concludiamo che un problema di programmazione matematica può essere espresso in forma compatta come
$$
\begin{cases}
\min & c^\top x \\
\text{s.t.} & Ax \geq b
\end{cases}
$$
## Risoluzione grafica di un problema in due variabili
Finché il problema ha solo due variabili decisionali è possibile risolverlo graficamente:
- I vincoli rappresentano dei semipiani
- Il sistema di vincoli sarà quindi l'intersezione di questi semipiani (regione ammissibile)
- Il vettore dei coefficienti $c = (c_{1},c_{2})^\top$ rappresenta il gradiente della funzione obiettivo (direzione di crescita)
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
c^\top  x^* = -4
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
c^\top  x^{(1)} = c^\top  x^{(2)} = 2.5
$$

# Geometria della programmazione lineare
## Definizioni
>[!multi-column]
>
>>[!Important] Semispazio
>>Sia $w \in \mathbb{R}^n$ un vettore $n$-dimensionale e $w_0$ uno scalare, l'insieme $$\{x \in \mathbb{R}^n:w^\top x \geq w_0\}$$
>>si chiama **semispazio** (generalizzazione a $n$ dimensioni del semispazio).
>
>>[!important] Iperpiani
>>Sia $w \in \mathbb{R}^n$  un vettore $n$-dimensionale e $w_0$ uno scalare, l'insieme $$\{x \in \mathbb{R}^n:w^\top  x = w_0\}$$
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
>>Consideriamo un poliedro $P$. Un vettore $\overline{x} \in P$ si dice **vertice** di $P$ se esiste $c \in \mathbb{R}^n$ tale che$$c^\top \overline{x} < c^\top x \forall x \in P, x \neq \overline{x}$$
## Teorema sulle convessità delle soluzioni
Date le seguenti considerazioni (che non contraddicono le precedenti definizioni):
- l'intersezione di insiemi convessi è a sua volta convessa
- un semispazio è un insieme chiuso e convesso
- un poliedro (intersezione di un numero finito di spazi) è un insieme convesso
- una combinazione convessa di un numero finito di elementi di un insieme convesso appartiene a quell'insieme
- l'involucro convesso di un numero finito di vettori è un insieme convesso

>[!info] Teorema sulla convessità delle soluzioni
>Consideriamo un problema $(P)$ di programmazione lineare che ammetta un ottimo finito e indichiamo con $x^{(1)}$ una soluzione ottima. Supponiamo che esista una soluzione ammissibile $x^{(2)} \neq x^{(1)}$ tale che:$$c^\top x^{(1)} = c^\top x^{(2)}$$
>I due vettori sono diversi, ma hanno lo stesso valore obiettivo, quindi entrambe sono soluzioni ottime di $(P)$.
>Consideriamo i vettori $x(\lambda) = \lambda x^{(1)} + (1-\lambda)x^{(2)}$ che sono combinazione convesse di $x^{(1)}$ e $x^{(2)}$. Il teorema precedente garantisce l'ammissibilità di $x(\lambda) \forall \lambda \in [0,1]$.
>Inoltre$$c^\top  x(\lambda) = \lambda c^\top  x^{(1)} + (1-\lambda)c^\top  x^{(2)} = c^\top x^{(2)} = c^\top  x^{(1)}$$
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
\min & c^\top x \\
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
a_i^\top x \leq b_i
$$
Definiamo una variabile ausiliaria (**variabile di slack**)
$$
s_i = b_i - a_i^\top  x \geq 0
$$
in questo modo stiamo dando un nome allo scarto $s_i$ che diventa a sua volta una variabile decisionale
$$
\begin{cases}
s_i = b_i- a_i^\top  x \\
s_i \geq 0
\end{cases}
$$
questo passaggio però è "costato" l'aggiunta di una variabile ausiliaria.
#### Vincolo di diseguaglianza $\geq$
$$
a_i^\top  x \geq b_i
$$
Definiamo una variabile ausiliare (**variabile di surplus**)
$$
s_i = a_i^\top  x -b_i \geq 0
$$
La nuova variabile diventa a sua volta una variabile decisionale
$$
\begin{cases}
s_i = a_i^\top  x-b_i\\
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
a_i^\top  x = b_i  \\
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
c^\top  = (c_{1},\dots,c_j,- c_j,..,c_n)
$$


>[!question] Osservazione
>Per le nuove variabili aggiunte:
>consideriamo un punto $\overline{x}$ che soddisfa il vincolo
>$$
>a_i^\top  \overline{x} \leq b_i
>$$
>che può essere riscritto come
>$$
>\begin{cases}
>a_i^\top  \overline{x} + s_i = b_i \\
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
\min & c^\top x \\
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
x^\top  = (x_{1},x_{2},\dots,x_p,0,\dots,0)
$$
indicando con $p \leq n$ il numero di componenti non nulle.

Per ipotesi le colonne $A_{1},\dots,A_p$ sono linearmente indipendenti, di conseguenza $p \leq m$ (in quanto $m$ è il massimo numero di colonne linearmente indipendenti).

1. se $p = m$ allora$$x^\top  = (\underbrace{x_{1},x_{2},\dots,x_m}_{B^{-1}b},0,\dots,0) \hspace{8ex} A_{1},\dots,A_m = B$$questa non è altro che la definizione di **soluzione di base non degenere**
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
\overline{x} = (\overline{x}_1,\dots, \overline{x}_p, 0,\dots, 0)^\top 
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
$$d=(d_{1},\dots,d_p,\underbrace{0,\dots,0}_{n-p})^\top  \in \mathbb{R}^n$$
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
x^* = (x_{1}^*,\dots,x_p^*,0,\dots,0)^\top  \hspace{4ex} p \leq n
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
c^\top  x^*
$$
per non perdere l'ottimalità dobbiamo osservare
$$
\begin{array}{c}
c^\top  x & = c^\top  (x^*- \epsilon d) \\
& = c^\top  x^* - \epsilon c^\top  d
\end{array}
$$
Dobbiamo dimostrare che $c^\top  d=0$

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
>Consideriamo un poliedro $P$. Un vettore $\overline{x} \in P$ si dice **vertice** di $P$ se esiste $c \in \mathbb{R}^n$ tale che$$c^\top  \overline{x} < c^\top  x \forall x \in P \ : \ x \neq \overline{x}$$

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

$$ C = (3,3) \to x_C = (3,3,0,0,0)^\top$$

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
7:&\hspace{4ex} x^* := \overline{x}, z^*:= c^\top \overline{x} \\
8:&\hspace{4ex} \text{exit} \\
9:&\text{end if} \\
10:&\text{if esiste una sba }x \text{ adiacente a }\overline{x}\text{ con }c^\top x \leq c^\top  \overline{x} \text{ then} \\
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
\bar{z}=c^\top  \overline{x} &= (c_B^\top  \ , \ c_N^\top ) \binom{\overline{x}_B}{\overline{x}_N} \\
& = c^\top _B \overline{x}_B + \underbrace{c_N^\top  \overline{x}_N}_{=0} \\
& = c_B^\top  B^{-1}b
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
Determiniamo l’espressione della funzione obiettivo per $x$ sostituendo $x_B$ calcolata e partizionando anche il vettore $c^\top$:
$$
\begin{align*}
c^\top  x & = (c_B^\top   c_N^\top ) \binom{x_B}{x_N} = (c_B^\top  c_N^\top )\binom{B^{-1}b-B^{-1}Nx_N}{x_N} \\
c^\top x& = c_B^\top  (B^{-1}b - B^{-1} N x_N) + c_N^\top  x_N \\
c^\top x& = c_B^\top  B^{-1}b -c_B^\top  B^{-1} N x_N + c_N^\top  x_N \\
\end{align*}
$$
Se $x\neq 0$ si hanno $n − m$ gradi di libertà per ricavare nuove basi. In particolare, modificare $x_N$ modifica anche il valore di $x_B$ non garantendo l’ammissibilità della soluzione.

>[!important] Vettore dei coefficienti di costo ridotto delle variabili fuori base
>ogni componente $\hat{c}_j$ dice di quanto varia il costo quando la variabile $x_j$ aumenta
>$$
>\hat{c}^\top = c^\top - c_B^\top B^{-1} A
>$$
>caratterizzato nelle diverse partizioni di $A = [B | N]$
>$$
>\begin{align*}
>\hat{c}_B^\top & = c_B^\top - c_B^\top B^{-1} B \\
>& = c_B^\top - c_B^\top I \\
>& = 0^\top
>\end{align*} \hspace{6ex}
>\hat{c}_N^\top = c_N^\top - c_B^\top B^{-1}N
>$$

Sapendo che la funzione obiettivo nel punto fornito vale:
$$
\hat{c}_N^\top  := c_N^\top  - c_B^\top  B^{-1}N
$$
Riscriviamo l’equazione precedente e raggruppiamo rispetto a $x_N$ (**hp**. contiene valori positivi):
$$
c^\top x = c^\top  \overline{x} + \overbrace{(c_N^\top -c_B^\top B^{-1}N)}^{\hat{c}_N^\top } x_N \hspace{8ex} \forall x \in \Omega(P)
$$
ottenendo l’espressione della funzione obiettivo del problema $(P)$ come funzione delle sole
variabili $x_N \in \mathbb{R}^{n-m}$
Ponendo quindi
$$
c^\top x - c^\top  \bar{x} = \hat{c}_N^\top  x_N
$$
è possibile ricavare **condizione sufficiente di ottimalità**

>[!quote] In parole umane
>Stiamo confrontando la funzione obbiettivo nel punto che ci è stato dato con la funzione obbiettivo in un qualsiasi altro punto che soddisfa il sistema di equazioni.
>Questo confronto non dipende più dalle variabili di base, ma solo da quelle fuori base.
>Se genero una qualsiasi soluzione il mio studio si può concentrare sulle variabili $x_N$ e sul vettore dei coefficienti (che è noto).

### Condizione sufficiente di ottimalità
Osserviamo che per $x_N = 0$ si ha $c^\top x = c^\top  \bar{x} = \bar{z}$. Per ogni altro punto ammissibile $x \in \Omega(P)$ dovrà valere
$x_N \geq 0$ ($x_N \neq 0$). Pertanto:
$$
\text{(Hp): } \underbrace{\hat{c}_N \ge 0}_{\text{garantisce ammissibilità}} \;\Rightarrow\; \hat{c}_N^\top x_N \ge 0 \;\Rightarrow\; \underbrace{c^\top x \geq c^\top  \overline{x}}_{\text{def. di ottimo}} \qquad \forall x \in \Omega(P)
$$
>[!info] Teorema
>Data una base ammissibile $B$ della matrice $A$ del problema $(P)$ in forma standard, se il vettore dei costi ridotti è non negativo
>$$
>\hat{c}_N^\top  = c_N^\top  - c_B^\top  B^{-1}N \geq 0
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
z(x) = c^\top  x :\mathbb{R}^n \to \mathbb{R}
$$
nella funzione ridotta alla sola dipendenza delle variabili fuori base ($n-m$ variabili decisionali) definita come:
$$
\hat{z}(x_N) = \bar{z} + \hat{c}_N^\top x_N: \mathbb{R}^{n-m} \to \mathbb{R}
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
\min & \hat{z}(x_N) = \bar{z} + \hat{c}_N^\top  x_N \\
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
\overline{x}_B^\top  = (\overline{x}_1, \overline{x}_3, \overline{x}_4) \\
c_B^\top  = (1,1,1) \\
\overline{x}_N^\top  = (\overline{x}_2, \overline{x}_5, \overline{x}_6) \\
c_N^\top  = (2,1,1)
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
\overline{x}_B = B^{-1}b = (1,0,2)^\top  \hspace{8ex} \overline{x}_N = (0,0,0)
$$
$$
\overline{x} = (1,0,0,2,0,0)^\top 
$$
è ammissibile.
Calcoliamo i coefficienti di costo ridotto
$$
\hat{c}_N^\top  = C_N^\top  - c_B^\top  B^{-1} N = \left( \frac{10}{3}, \frac{1}{3}, \frac{7}{3} \right)^\top 
$$
è ottima ed è unica (sono tutti maggiori di 0)
## Cambio della soluzione di base ammissibile
Se non è soddisfatta la [[#Condizione sufficiente di ottimalità|condizione sufficiente di ottimalità]] di una soluzione, allora è possibile effettuare delle operazioni di **cambio di base**.
Sia $\bar{x}$ una soluzione ammissibile di base per $(P)$:
$$
\bar{x} = \binom{B^{-1}b}{0} \geq \binom{0}{0}
$$
### Forma canonica
>[!important] Forma canonica
>Possiamo esprimere il problema $(P)$ come **forma canonica** rispetto a $B$
>$$
>c^\top \bar{x} +
>\begin{cases}
>\min & 0^\top  x_B + \hat{c}_N^\top  x_N \\
>\text{s.t.} & I \cdot x_B + B^{-1}Nx_N = B^{-1}b\\
>& x_B, x_N \geq 0
>\end{cases}
>$$
>Si noti che i vincoli sul segno garantiscono l'ammissibilità della soluzione di base, tuttavia, in questo caso, l'ammissibilità non dipende solo da $x_N$ (variabili decisionali) poiché al suo variare cambia anche $x_B$.

Nella minimizzazione del problema si possono eliminare le costanti $\implies$ elimino $\bar{z}$.

**Funzione obiettivo**
Possiamo riscrivere la funzione obbiettivo
$$
\begin{align*}
\min c^\top x & =\min [c^\top  \overline{x} + \overbrace{(c_N^\top -c_B^\top B^{-1}N)}^{\hat{c}_N^\top } x_N]
\end{align*}
$$
ed essendo $c^\top \bar{x}$ una costante
$$
\min c^\top x = c^\top \bar{x} + \min \hat{c}_N^\top x_N
$$
**Vincoli di uguaglianza**
$$
\begin{align*}
Ax & = b \\
B x_B + Nx_N & = b \\
B^{-1}B x_B + B^{-1} N x_N & = B^{-1}b \\
I x_B + B^{-1} N x_N & = B^{-1}b
\end{align*}
$$

**Vincoli sul segno**
Dobbiamo verificare la condizione sufficiente di ottimalità $\hat{c}_N \ge 0$.
Non è soddisfatta se esiste almeno un costo ridotto strettamente negativo:
$$\hat{c}_{N(j)} < 0$$

Supponiamo per assurdo che non valga la condizione di ottimalità in $\bar{x}$:
$$
\hat{c}_N \not\geq 0
$$
Allora esiste almeno un coefficiente di costo ridotto strettamente negativo, in corrispondenza di una variabile fuori base:
$$
\hat{c}_{N(j)} < 0 \qquad \text{per qualche } j \in \{1, \dots, n-m\}
$$
Tornando alla funzione obiettivo, che misura di quanto varia la soluzione di base rispetto ad un nuovo punto, si può pensare di prenderla e **perturbare** la variabile $x_{\mathcal{N}(j)}$, facendola crescere da $0$ ad un valore $\delta > 0$ e mantenendo nulle le altre variabili non in base. Così facendo, la funzione obiettivo nel nuovo punto $x$ **diminuisce**:
$$
\Delta z = z(x) - z(\bar{x}) = c^\top x - c^\top \bar{x} = \hat{c}_{N(j)} \cdot \delta < 0
$$
>[!question] Osservazione
>A seguito della pertubazione di $x_{\mathcal{N}(j)}$ varia anche $x_B$: il valore di $\delta$ potrebbe violare i vincoli di segno sul vettore.
### Direzione di spostamento
Poniamo $x_N$ come un vettore di $n-m$ componenti (che sicuramente soddisfa i vincoli sul segno) e la variabile entrante $x_{\mathcal{N}(j)} = \delta$ e teniamo nulle tutte le altre variabili fuori base:
$$
x_N = \left(\begin{array}{c} 0 \\ \vdots \\ \delta \\ \vdots \\ 0 \end{array}\right)_{n-m} \quad \delta > 0
$$
il prodotto scalare
$$\hat{c}_N^\top  x_N = \hat{c}_{N(j)} \cdot \delta <0$$
è negativo in quanto $\delta$ è positivo e $\hat{c}_{N(j)}$ è negativo e rappresenta quanto varia la funzione obbiettivo.
$$
\implies c^\top x < c^\top  \bar{x}
$$
riscriviamo $x_N$
$$
x_N = \left(\begin{array}{c} 0 \\ \vdots \\ 1 \\ \vdots \\ 0 \end{array}\right) \delta = e_j \cdot \delta
$$
dove $e_j$ vettore nullo fatta eccezione per la $j$esima componente pari a 1.

>[!question] Osservazione
>Notiamo come la colonna $j$esima sarà la colonna $k$esima della matrice originale
>$$A_{N(j)} = A_k$$

>[!question] Osservazione
>Ci converrebbe scegliere $\delta$ il più grande possibile, ma dobbiamo fare attenzione che certe soluzioni non diventino negative

Quanto può crescere $\delta$ mantenendo i vincoli del problema?
#### Vincoli di uguaglianza (direzione)
Concentriamoci sul vincolo di uguaglianza della forma canonica, che lega $x_B$ a $x_N$
$$
x_B + B^{-1} N x_N = B^{-1}b = \bar{x}_B
$$
sostituiamo $x_N = e_j \cdot \delta$
$$
x_B + B^{-1}N(e_j \delta) = \bar{x}_B
$$
essendo $\delta$ uno scalare
$$
x_B + \delta B^{-1}N e_j = \bar{x}_B
$$
il prodotto $N e_j$ seleziona solo la $j$esima colonna di $N$ che non è altro che $A_{N(j)} = A_k$
$$
\displaylines{
x_B + \delta B^{-1} A_{N(j)} = \bar{x}_B \\
x_B + \delta \underbrace{B^{-1} A_k}_{d} = \bar{x}_B
}
$$
chiamiamo $d = B^{-1}A_k$ e otteniamo
$$
x_B = \bar{x}_B - \delta d
$$
stiamo perturbando $x_B$ di una quantità $-\delta d$, cioè lungo la direzione $-d$, rispetto alla soluzione di base $\bar{x}_B$

il vincolo di segno $x_B \geq 0$ diventa quindi
$$
\bar{x}_B - \delta d \geq 0
$$
Essendo $d = B^{-1} A_k$ allora $Bd = A_k$ dove $B$ è una base e $A_k$ è una colonna fuori base, l'unione delle colonne di $B$ e il vettore $A_k$ restituisce una matrice formata da colonne **linearmente dipendenti**: all'aumentare di $\delta$ ci muoviamo lungo lo spigolo che parte da $\bar{x}$ così che la nuova soluzione sia
$$
x = \binom{x_B}{x_N} = \binom{\bar{x}_B - \delta d}{\delta e_j}
$$
>[!question] Significato di $d_i$
>La componente $d_i$ dice di quanto varia la $i$-esima variabile di base per ogni unità di crescita di $x_k$:
>- $d_i > 0 \implies x_{\mathcal{B}(i)}$ **diminuisce** al crescere di $\delta$, quindi può arrivare a 0 (e violare il vincolo di segno);
>- $d_i \le 0 \implies x_{\mathcal{B}(i)}$ **non diminuisce**, quindi non pone alcun limite a $\delta$.
>
>Le equazioni $Ax = b$ restano sempre soddisfatte (stiamo muovendoci dentro $X$): quello che può rompersi è solo $x_B \ge 0$.

#### Vincoli di segno (direzione)
Imponiamo ora il vincolo di segno $x_B \geq 0$
$$
\overline{x}_B - \delta d \geq 0
$$
Per $\delta = 0$ ci troviamo nel vertice $\bar{x}$ (un estremo del segmento); per $\delta < 0$ usciamo dalla regione ammissibile, perché $x_{\mathcal{N}(j)} = \delta < 0$.
Vale a dire risolvere il sistema di $m$ diseguaglianze lineari nella sola incognita $\delta$:
$$
\begin{cases}
\overline{x}_{B(1)} - \delta d_1 \geq 0 \\
\vdots \\
\overline{x}_{B(m)} - \delta d_m \geq 0
\end{cases}
$$
risolviamo la $i$esima disequazione del sistema
$$
\overline{x}_{B(i)} - \delta d_i \geq 0
$$
analizziamo i casi possibili
- se $d_i \leq 0$
  è valida $\forall \ \delta \geq 0$

- se $d_i > 0$
  è valida $\forall \ \delta \leq \frac{\overline{x}_{B(i)}}{d_i}$

L'uguaglianza è soddisfatta
$$
\forall \ \delta \leq \bar{ \delta}
\hspace{8ex} \text{dove} \hspace{8ex}\bar{\delta} = \min \begin{cases}
\frac{\bar{x}_{B(i)}}{d_i} \ : \ d_i > 0
\end{cases}
$$

Il valore $\bar{\delta}$ individua l'**altro estremo** del segmento, cioè il vertice adiacente.
Nel caso in cui non esistano valori di $d_i : \forall i { , } d_i \leq 0$, allora abbiamo trovato il **criterio di arresto per l'illimitatezza della soluzione**.
Scegliendo $\delta := \bar{\delta}$ otteniamo:
- il **massimo decremento ammissibile** per la funzione obiettivo
- una nuova **soluzione ammissibile di base**

Se $\nexists \ i \ : \ d_i > 0 \implies (P)$ è illimitato inferiormente

>[!question] Graficamente
>abbiamo trovato una semiretta lungo la quale ci possiamo spostare ed è una semiretta di punti ammissibili:
>$$
>\bar{x}_B - \delta d
>$$

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
la disuguaglianza è soddisfatta per uguaglianza
$$
x_{B(i^*)} = \bar{x}_{B(i^*)}- \delta d_{i^*}
$$
avendo scelto $\delta = \bar{ \delta}$
$$
\begin{align*}
x_{B(i^*)} & = \bar{x}_{B(i^*)}- \bar{\delta} d_{i^*} \\ 
 & = \bar{x}_{B(i^*)}- \frac{\bar{x}_{B(i^*)}}{d_{i^*}} d_{i^*} = 0
\end{align*}
$$
sostituendo il $\delta$ si è generata una nuova componente che vale 0
### Nuova base
Sia $h = \mathcal{B}(i^*)$.
Quindi, l'insieme di indici $\mathcal{B}'$ privato di $\mathcal{B}(i^*)$ unito a $\mathcal{N}(j)$ (indice della colonna $A_k$) costituisce un insieme di colonne **linearmente indipendenti**.
Consideriamo l'insieme di indici di colonna
$$
\beta' = \{\beta(1),\dots,\beta(m)\} \setminus \beta(i^*) \cup N(j)
$$
La matrice ottenuta da $B$ sostituendo la colonna $A_h$ con la colonna $A_k$ è ancora una base. Le due basi $\mathcal{B}$ e $\mathcal{B}'$ sono **adiacenti** perché si differenziano per un solo elemento:
- $x_k$ è la variabile che **entra in base**
- $x_h$ è la variabile che **esce dalla base**
### Problema illimitato inferiormente
Se $d_i \le 0 \ \ \forall i = 1, \dots, m$, il sistema di diseguaglianze
$$
\bar{x}_{\mathcal{B}(i)} - \delta d_i \ge 0
$$
è soddisfatto $\forall \delta \ge 0$. Ciò equivale a dire che la soluzione $x_B = \bar{x}_B - \delta\, d \ge 0$ è ammissibile comunque si scelga $\delta \ge 0$, ed il corrispondente valore di funzione obiettivo
$$
c^\top x = c^\top \bar{x} + \hat{c}_{\mathcal{N}(j)} \cdot \delta
$$
decresce illimitatamente al crescere di $\delta \to \infty$ (perché $\hat{c}_{\mathcal{N}(j)} < 0$), per cui la funzione obiettivo tende a $-\infty$.
Geometricamente, abbiamo trovato una semiretta interamente $\in \Omega(P)$ lungo la quale la funzione obiettivo diverge.

>[!important] Criterio di arresto (illimitatezza)
>$$
>d_i \le 0 \ \ \forall i = 1, \dots, m \implies (P) \text{ è inferiormente illimitato}
>$$

## Soluzioni di base ammissibili degeneri
Se il valore $\bar{\delta}$ viene raggiunto in corrispondenza di più diseguaglianze, altrettante componenti con indice in $\mathcal{B}$ della nuova soluzione $x$ assumeranno valore nullo, ma solo una di esse potrà essere considerata variabile uscente dalla base.
Di conseguenza la nuova soluzione ammissibile di base $\bar{x}- \bar{\delta} d$ sarà certamente **degenere**.
La scelta della variabile uscente di base in questo caso **non è univoca**.

Inoltre è possibile che si abbia $\bar{\delta} = 0$ quando
$$
\exists i \in \{1,\dots,m\} \ : \ \bar{x}_{\mathcal{B}(i)} = 0, \ d_i > 0
$$
cioè quando $\bar{x}$ è degenere.
In questo case, sebbene $\hat{c}_{\mathcal{N}(j)} < 0$ incremento ammissibile è nullo, quindi
$$
x = \bar{x}, \ \Delta z = 0
$$
il miglioramento è nullo, ma la base cambia.
Geometricamente stiamo rappresentando in modo diverso lo stesso punto.

La variabile di indice $k = \mathcal{N}(j)$ entra in base con valore nullo, quella di indice $h = \mathcal{B}(i^*)$, che era in base con valore nullo, esce di base.
Si effettua così quello che viene chiamato un **cambio di base degenere**.

>[!bug] Rischio di loop
>C'è il rischio di entrare in un loop, poiché l'algoritmo potrebbe continuare ad iterare ciclicamente cambiando base, senza mai riuscire a spostarsi dal punto $\bar{x}$.
## Condizione necessaria di ottimalità
>[!info] Teorema
>Sia $\bar{x}$ una soluzione ammissibile di base non degenere per il problema $(P)$. Se $\bar{x}$ è soluzione ottima per $(P)$ allora i coefficienti di costo ridotto $\hat{c}_N$ sono non negativi.

Sia $\bar{x}$ soluzione ottima di base non degenere per $(P)$.
Per assurdo sia
$$
\hat{c}_N \not\geq 0
$$
Scelto un coefficiente di costo ridotto negativo e facendo entrare in base la corrispondente variabile con valore $\bar{\delta}>0$, è possibile costruire una nuova soluzione ammissibile di base $x$ con valore di funzione obiettivo $c^\top x < c^\top \bar{x}$ contraddicendo l'ottimalità di $\bar{x}$.

>[!quote] In parole umane
>Se ci sono elementi negativi all'interno di $\hat{c}_N$ allora possiamo affermare con certezza che la soluzione non è ottima (se non è degenere).
## Indeterminazioni e regola di Bland
### Scelta della variabile entrante in base
Esistono più coefficienti di costo ridotto negativi, e quindi più variabili fuori base il cui incremento promette un decremento della funzione obbiettivo.
Scegliere la variabile entrante in base equivale a scegliere la direzione di spostamento sulla frontiera della regione ammissibile, ovvero il vertice adiacente verso il quale muoversi, e la sequenza di tali scelte individua l'itinerario da seguire per raggiungere il vertice ottimo: perciò è importante per l'efficienza dell'algoritmo.
>[!important] Criterio del massimo decremento atteso
>la nuova soluzione dipende da $\delta$ e dal coefficiente di costo ridotto, se prendo il più negativo di tutti a parità di $\delta$ garantisce la soluzione migliore
>$$|\hat{c}_k| = \max \{|\hat{c}_l \ : \ l \in \mathcal{N}, \ \hat{c}_l < 0\}$$
>È una scelta molto efficiente nella pratica computazionale, ma non garantisce la terminazione finita dell'algoritmo se esistono soluzioni di base ammissibili degeneri.

### Scelta della variabile uscente dalla base
Può esserci indeterminazione solo nel caso in cui il valore di $\bar{\delta}$ sia raggiunto in corrispondenza di più indici, ovvero quando il nuovo vertice ottenuto dalla corrente iterazione è degenere.

### Regola di Bland
>[!important] Regola di Bland
>Scelta della variabile entrante in base:
>$$j^* = \min \{j \in \{1,\dots,n-m\} : \hat{c}_{\mathcal{N}(j)}<0\}$$
>Scelta della variabile uscente di base
>$$i^* = \min \left\{i \in \{1,\dots,m\}:\bar{\delta} = \frac{\bar{x}_{\mathcal{B}(i)}}{d_i}\right\}$$

## Seconda fase dell'algoritmo del simplesso
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
- **Passi 1–4:** il test di ottimalità è la condizione sufficiente vista in precedenza ($\hat{c}_N \ge 0$).
- **Passi 5–6:** se il test fallisce c'è almeno una variabile fuori base con costo ridotto negativo, che può entrare in base per diminuire $z$.
- **Passi 7 e 13–14:** se $d \le 0$ non c'è nessun limite alla crescita di $x_k$: il problema è illimitato.
- **Passi 8–10:** il test del rapporto individua la variabile uscente.

>[!check] Esercizio
> Consideriamo il problema
> $$
> \begin{cases}
> \min & -x_1 + 2x_2 \\
> \text{s.t.} & -x_1 + x_2 \le 1 \\
>             & x_1 + 2x_2 \le 8 \\
>             & x_1 + x_2 \le 6 \\
>             & x \ge 0
> \end{cases}
> \qquad \longrightarrow \qquad
> \begin{cases}
> \min & -x_1 + 2x_2 \\
> \text{s.t.} & -x_1 + x_2 + x_3 = 1 \\
>             & x_1 + 2x_2 + x_4 = 8 \\
>             & x_1 + x_2 + x_5 = 6 \\
>             & x \ge 0
> \end{cases}
> $$
>
>![[Problemi di ottimizzazione-1792661401022.webp|center|500]]
>
> **Iterazione 1:** Partiamo dalla soluzione ammissibile di base $\bar{x} = (2, 3, 0, 0, 1)^\top$, con $\bar{z} = 4$. Rispetto agli indici $\mathcal{B} = \{1, 2, 5\}$ e $\mathcal{N} = \{3, 4\}$ abbiamo
> $$
> B = \begin{pmatrix} -1 & 1 & 0 \\ 1 & 2 & 0 \\ 1 & 1 & 1 \end{pmatrix}
> \qquad
> N = \begin{pmatrix} 1 & 0 \\ 0 & 1 \\ 0 & 0 \end{pmatrix}
> $$
> Quindi
> $$
> c_B = (-1, 2, 0)^\top \qquad c_N = (0, 0)^\top \qquad
> B^{-1} = -\frac{1}{3} \begin{pmatrix} 2 & -1 & 0 \\ -1 & -1 & 0 \\ -1 & 2 & -3 \end{pmatrix}
> $$
> e la corrispondente soluzione di base
> $$
> \bar{x}_B = B^{-1} b = (2, 3, 1)^\top \qquad \bar{x}_N = (0, 0)^\top
> $$
> cioè $\bar{x} = (2, 3, 0, 0, 1)^\top$ è ammissibile.
>
> Determiniamo la matrice
> $$
> B^{-1} N = -\frac{1}{3} \begin{pmatrix} 2 & -1 & 0 \\ -1 & -1 & 0 \\ -1 & 2 & -3 \end{pmatrix}
> \begin{pmatrix} 1 & 0 \\ 0 & 1 \\ 0 & 0 \end{pmatrix}
> = \begin{pmatrix} -2/3 & 1/3 \\ 1/3 & 1/3 \\ 1/3 & -2/3 \end{pmatrix}
> $$
> Calcoliamo i coefficienti di costo ridotto
> $$
> \hat{c}_N^\top = c_N^\top - c_B^\top B^{-1} N = (0, 0) - (-1, 2, 0)
> \begin{pmatrix} -2/3 & 1/3 \\ 1/3 & 1/3 \\ 1/3 & -2/3 \end{pmatrix}
> = \left( -\tfrac{4}{3}, -\tfrac{1}{3} \right)
> $$
> Esiste almeno una componente negativa, quindi il criterio di arresto per ottimalità non è soddisfatto (la soluzione corrente non è ottima, poiché è non degenere) e l'algoritmo prosegue alla ricerca di una nuova soluzione.
>
> **Scelta della variabile entrante in base:**
> $$
> j^* = \min \{ j \in \{1, 2\} : \hat{c}_{\mathcal{N}(j)} < 0 \} = 1
> $$
> Quindi fissiamo $k = \mathcal{N}(1) = 3$ e calcoliamo la direzione
> $$
> d = B^{-1} A_3 = -\frac{1}{3} \begin{pmatrix} 2 & -1 & 0 \\ -1 & -1 & 0 \\ -1 & 2 & -3 \end{pmatrix}
> \begin{pmatrix} 1 \\ 0 \\ 0 \end{pmatrix}
> = \begin{pmatrix} -2/3 \\ 1/3 \\ 1/3 \end{pmatrix}
> $$
> Esistono componenti di $d$ positive, quindi non entra in azione il criterio di illimitatezza. Calcoliamo la nuova soluzione $x_B = \bar{x}_B - \delta \cdot d \ge 0$: nel piano $(x_1, x_2)$ ci spostiamo lungo la frontiera $x_4 = 0$ dal vertice $(2,3)$ verso $(4,2)$.
>
> **Calcolo del massimo passo ammissibile lungo $d$:**
> $$
> \bar{\delta} = \min \left\{ \frac{\bar{x}_{\mathcal{B}(i)}}{d_i} : d_i > 0 \right\}
> = \min \left\{ \frac{\bar{x}_{\mathcal{B}(2)}}{d_2}, \frac{\bar{x}_{\mathcal{B}(3)}}{d_3} \right\}
> = \min \left\{ \frac{3}{1/3}, \frac{1}{1/3} \right\} = \min\{9, 3\} = 3
> $$
> **Scelta della variabile uscente dalla base:**
> $$
> i^* = \min \left\{ i \in \{1, 2, 3\} : d_i > 0, \ \bar{\delta} = \frac{\bar{x}_{\mathcal{B}(i)}}{d_i} \right\} = 3
> $$
> Quindi poniamo $h = \mathcal{B}(3) = 5$ e calcoliamo la nuova soluzione
> $$
> x_B = \bar{x}_B - \bar{\delta} d = \begin{pmatrix} 2 \\ 3 \\ 1 \end{pmatrix} - 3 \begin{pmatrix} -2/3 \\ 1/3 \\ 1/3 \end{pmatrix} = \begin{pmatrix} 4 \\ 2 \\ 0 \end{pmatrix}
> \qquad
> x_N = \bar{\delta} \hat{e}_1 = \bar{\delta} \begin{pmatrix} 1 \\ 0 \end{pmatrix} = \begin{pmatrix} 3 \\ 0 \end{pmatrix}
> $$
> Nuova soluzione: $\bar{x} = (4, 2, 3, 0, 0)^\top$, con $z = 4 + \left(-\tfrac{4}{3}\right) \cdot 3 = 0$. Aggiorniamo gli indici: $x_3$ prende il posto di $x_5$ in $\mathcal{B}$ e viceversa in $\mathcal{N}$, quindi $\mathcal{B} = \{1, 2, 3\}$, $\mathcal{N} = \{5, 4\}$.
>
> **Iterazione 2:** Rispetto agli indici $\mathcal{B} = \{1, 2, 3\}$ e $\mathcal{N} = \{5, 4\}$ abbiamo
> $$
> B = \begin{pmatrix} -1 & 1 & 1 \\ 1 & 2 & 0 \\ 1 & 1 & 0 \end{pmatrix}
> \qquad
> N = \begin{pmatrix} 0 & 0 \\ 0 & 1 \\ 1 & 0 \end{pmatrix}
> $$
> Quindi
> $$
> c_B = (-1, 2, 0)^\top \qquad c_N = (0, 0)^\top \qquad
> B^{-1} = \begin{pmatrix} 0 & -1 & 2 \\ 0 & 1 & -1 \\ 1 & -2 & 3 \end{pmatrix}
> $$
> e la corrispondente soluzione di base
> $$
> \bar{x}_B = B^{-1} b = (4, 2, 3)^\top \qquad \bar{x}_N = (0, 0)^\top
> $$
> cioè $\bar{x} = (4, 2, 3, 0, 0)^\top$ è ammissibile.
>
> Determiniamo la matrice
> $$
> B^{-1} N = \begin{pmatrix} 0 & -1 & 2 \\ 0 & 1 & -1 \\ 1 & -2 & 3 \end{pmatrix}
> \begin{pmatrix} 0 & 0 \\ 0 & 1 \\ 1 & 0 \end{pmatrix}
> = \begin{pmatrix} 2 & -1 \\ -1 & 1 \\ 3 & -2 \end{pmatrix}
> $$
> Calcoliamo i coefficienti di costo ridotto
> $$
> \hat{c}_N^\top = c_N^\top - c_B^\top B^{-1} N = (0, 0) - (-1, 2, 0)
> \begin{pmatrix} 2 & -1 \\ -1 & 1 \\ 3 & -2 \end{pmatrix}
> = (4, -3)
> $$
> Esiste almeno una componente negativa, quindi la condizione di arresto non è soddisfatta (inoltre la soluzione corrente non è ottima perché non degenere) e l'algoritmo prosegue alla ricerca di una nuova soluzione.
>
> **Scelta della variabile entrante in base:**
> $$
> j^* = \min \{ j \in \{1, 2\} : \hat{c}_{\mathcal{N}(j)} < 0 \} = 2
> $$
> Quindi fissiamo $k = \mathcal{N}(2) = 4$ e calcoliamo la direzione
> $$
> d = B^{-1} A_4 = \begin{pmatrix} 0 & -1 & 2 \\ 0 & 1 & -1 \\ 1 & -2 & 3 \end{pmatrix}
> \begin{pmatrix} 0 \\ 1 \\ 0 \end{pmatrix}
> = \begin{pmatrix} -1 \\ 1 \\ -2 \end{pmatrix}
> $$
> Esistono componenti di $d$ positive, quindi non entra in azione il criterio di illimitatezza. Calcoliamo la nuova soluzione $x_B = \bar{x}_B - \delta \cdot d \ge 0$: nel piano $(x_1, x_2)$ ci spostiamo lungo $x_5 = 0$ dal vertice $(4,2)$ verso $(6,0)$.
>
> **Calcolo del massimo passo ammissibile lungo $d$:**
> $$
> \bar{\delta} = \min \left\{ \frac{\bar{x}_{\mathcal{B}(i)}}{d_i} : d_i > 0 \right\}
> = \min \left\{ \frac{\bar{x}_{\mathcal{B}(2)}}{d_2} \right\}
> = \min \left\{ \frac{2}{1} \right\} = 2
> $$
> **Scelta della variabile uscente dalla base:**
> $$
> i^* = \min \left\{ i \in \{1, 2, 3\} : d_i > 0, \ \bar{\delta} = \frac{\bar{x}_{\mathcal{B}(i)}}{d_i} \right\} = 2
> $$
> Quindi poniamo $h = \mathcal{B}(2) = 2$ e calcoliamo la nuova soluzione
> $$
> x_B = \bar{x}_B - \bar{\delta} d = \begin{pmatrix} 4 \\ 2 \\ 3 \end{pmatrix} - 2 \begin{pmatrix} -1 \\ 1 \\ -2 \end{pmatrix} = \begin{pmatrix} 6 \\ 0 \\ 7 \end{pmatrix}
> \qquad
> x_N = \bar{\delta} \hat{e}_2 = \bar{\delta} \begin{pmatrix} 0 \\ 1 \end{pmatrix} = \begin{pmatrix} 0 \\ 2 \end{pmatrix}
> $$
> Nuova soluzione: $\bar{x} = (6, 0, 7, 2, 0)^\top$, con $z = 0 + (-3) \cdot 2 = -6$. Aggiorniamo gli indici: $\mathcal{B} = \{1, 4, 3\}$, $\mathcal{N} = \{5, 2\}$.
>
> **Iterazione 3:** Rispetto agli indici $\mathcal{B} = \{1, 4, 3\}$ e $\mathcal{N} = \{5, 2\}$ abbiamo
> $$
> B = \begin{pmatrix} -1 & 0 & 1 \\ 1 & 1 & 0 \\ 1 & 0 & 0 \end{pmatrix}
> \qquad
> N = \begin{pmatrix} 0 & 1 \\ 0 & 2 \\ 1 & 1 \end{pmatrix}
> $$
> Quindi
> $$
> c_B = (-1, 0, 0)^\top \qquad c_N = (0, 2)^\top \qquad
> B^{-1} = \begin{pmatrix} 0 & 0 & 1 \\ 0 & 1 & -1 \\ 1 & 0 & 1 \end{pmatrix}
> $$
> e la corrispondente soluzione di base
> $$
> \bar{x}_B = B^{-1} b = (6, 2, 7)^\top \qquad \bar{x}_N = (0, 0)^\top
> $$
> cioè $\bar{x} = (6, 0, 7, 2, 0)^\top$ è ammissibile.
>
> Determiniamo la matrice
> $$
> B^{-1} N = \begin{pmatrix} 0 & 0 & 1 \\ 0 & 1 & -1 \\ 1 & 0 & 1 \end{pmatrix}
> \begin{pmatrix} 0 & 1 \\ 0 & 2 \\ 1 & 1 \end{pmatrix}
> = \begin{pmatrix} 1 & 1 \\ -1 & 1 \\ 1 & 2 \end{pmatrix}
> $$
> Calcoliamo i coefficienti di costo ridotto
> $$
> \hat{c}_N^\top = c_N^\top - c_B^\top B^{-1} N = (0, 2) - (-1, 0, 0)
> \begin{pmatrix} 1 & 1 \\ -1 & 1 \\ 1 & 2 \end{pmatrix}
> = (1, 3)
> $$
> Le componenti sono tutte positive, quindi la soluzione corrente è l'**unica** soluzione ottima e l'algoritmo si arresta:
> $$
> x^* = (6, 0, 7, 2, 0)^\top \qquad z^* = c^\top x^* = -6
> $$

## Tableau del simplesso
Per l'esecuzione dell'algoritmo del simplesso a mano è possibile fare uso del **tableau del simplesso**, una forma compatta utile ad evitare di effettuare calcoli ridondanti.
Per prima cosa partiamo dalla definizione di problema di ottimizzazione in [[#Forma canonica]]
$$
\begin{cases}
c_B^\top B^{-1}b & + & \min & 0^\top x_B & + & \hat{c}^\top_N x_N  \\
&& \text{s.t.} & I \cdot x_B & + & B^{-1} N x_N & = & B^{-1}b \\
&& & x_B & , & x_N & \geq & 0
\end{cases}
$$
da cui possiamo estrarre tutto il contenuto informativo complessivo per l'esecuzione della singola iterazione del simplesso:
- Le variabili di base $\bar{x}_B = B^{-1}b$
- Il valore della funzione obbiettivo $c_B^\top B^{-1} b$
- I coefficienti di costo ridotto $$\hat{c}_j = \begin{cases}0 & \text{se }j \in \mathcal{B} \\ c_j-c_B^\top B^{-1} N_j & \text{se }j \in \mathcal{N}\end{cases}$$
- Le colonne $B^{-1}N_j$ per ogni $j \in \mathcal{N}$

Possiamo quindi rappresentare la forma canonica (rispetto ad una base) di un problema di PL (in forma standard) può essere rappresentata mediante una tabella con $m+1$ righe ed $n+1$ colonne
$$
T = \begin{array}{|cc|c|}
\hline \\

I_{m \times m} & B^{-1}N & B^{-1}b \\
 \\
\hline
0^\top_{1 \times m} & \hat{c}_N^\top & -c_B^\top B^{-1} b \\
\hline
\end{array}
$$

Le celle in alto rappresentano i vincoli di uguaglianza trasformata in forma matriciale.
La cella in basso a sinistra rappresentano la funzione obiettivo, il cui valore (cambiato di segno) nel punto corrente è rappresentato nella cella in basso a destra.

Con le colonne ordinate in questo modo, però, ogni volta che la base cambia (esce una variabile ed entra un'altra) dovremmo **riorganizzare tutta la tabella**. Per evitarlo, nel tableau le colonne restano nell'**ordine naturale** ($x_1, \dots, x_n$, cioè la colonna $j$ è associata a $x_j$): le colonne dell'identità risultano così **permutate**, e le righe sono ordinate secondo gli indici della base.

>[!check] Esempio con tableau
> Consideriamo il problema
> $$
> \begin{cases}
> \min & -x_1 + 2x_2 \\
> \text{s.t.} & -x_1 + x_2 \le 1 \\
>             & x_1 + 2x_2 \le 8 \\
>             & x_1 + x_2 \le 6 \\
>             & x_1, x_2 \ge 0
> \end{cases}
> $$
> La forma standard di un problema con soli vincoli di $\le$ è in forma canonica rispetto alla base costituita dalle colonne delle variabili di slack:
> $$
> \begin{cases}
> \min & -x_1 + 2x_2 \\
> \text{s.t.} & -x_1 + x_2 + x_3 = 1 \\
>             & x_1 + 2x_2 + x_4 = 8 \\
>             & x_1 + x_2 + x_5 = 6 \\
>             & x_1, x_2, x_3, x_4, x_5 \ge 0
> \end{cases}
> $$
>
> Costruiamo il tableau rispetto alla base $\mathcal{B} = \{3, 4, 5\}$
> $$
> T = \begin{array}{|ccccc|c|}
> \hline
> -1 & 1 & 1 & 0 & 0 & 1 \\
> 1 & 2 & 0 & 1 & 0 & 8 \\
> 1 & 1 & 0 & 0 & 1 & 6 \\
> \hline
> -1 & 2 & 0 & 0 & 0 & 0 \\
> \hline
> \end{array}
> $$
> L'ultima riga rappresenta i coefficienti di costo ridotto $\hat{c}^\top_N = c_N^\top - c_B^\top B^{-1} N$, ma dato che $c_B^\top = 0$ allora $\hat{c}_N^\top = c_N^\top$ i coefficienti di costo ridotto delle variabili fuori base coincide con i coefficienti delle variabili fuori base iniziali
>
> **Test di ottimalità**
> Notiamo che esiste almeno una componente negativa tra i coefficienti di costo ridotto delle variabili fuori base, quindi la condizione di arresto non è soddisfatta (inoltre la soluzione corrente non è ottima perché non degenere) e l'algoritmo prosegue alla ricerca di una nuova soluzione.
>
> **Scelta della variabile entrante in base:** ([[#Regola di Bland]])
> $$
> j^* = \min \{ j \in \{1, 2\} : \hat{c}_{\mathcal{N}(j)} < 0 \} = 1
> $$
> Quindi fissiamo $k = \mathcal{N}(1) = 1$ e definiamo la direzione $d = B^{-1} A_k$.
> $$
> T = \begin{array}{|ccccc|c|}
> \hline
> -1 & 1 & 1 & 0 & 0 & 1 \\
> 1 & 2 & 0 & 1 & 0 & 8 \\
> 1 & 1 & 0 & 0 & 1 & 6 \\
> \hline
> \textcolor{red}{-1} & 2 & 0 & 0 & 0 & 0 \\
> \hline
> \end{array}
> $$
> c'è un $-1$: l'algoritmo non si arresta.
> A livello teorico la sba è non degenere $\to$ la condizione di ottimo è anche necessaria $\to$ essendoci una componente negativa la soluzione non è ottima $\to$ l'algoritmo deve proseguire.
>
> **Calcolo della direzione:**
> $$
> d = B^{-1} A_1 = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{pmatrix}
> \begin{pmatrix} -1 \\ 1 \\ 1 \end{pmatrix}
> = \begin{pmatrix} -1 \\ 1 \\ 1 \end{pmatrix}
> $$
> Osserviamo che esistono componenti di $d$ che sono positive, quindi non entra in azione il criterio di illimitatezza. Nel tableau la direzione $d$ è la colonna della variabile entrante:
> $$
> T = \begin{array}{|ccccc|c|}
> \hline
> \textcolor{red}{-1} & 1 & 1 & 0 & 0 & 1 \\
> \textcolor{red}{1} & 2 & 0 & 1 & 0 & 8 \\
> \textcolor{red}{1} & 1 & 0 & 0 & 1 & 6 \\
> \hline
> -1 & 2 & 0 & 0 & 0 & 0 \\
> \hline
> \end{array}
> $$
>
> **Calcolo della nuova soluzione:**
> $$
> x_B = \bar{x}_B - \delta \cdot d \ge 0
> $$
> **Calcolo del massimo passo ammissibile lungo $d$:**
> $$
> \bar{\delta} = \min \left\{ \frac{\bar{x}_{\mathcal{B}(i)}}{d_i} : d_i > 0 \right\}
> = \min \left\{ \frac{\bar{x}_{\mathcal{B}(2)}}{d_2}, \frac{\bar{x}_{\mathcal{B}(3)}}{d_3} \right\}
> = \min \left\{ \frac{8}{1}, \frac{6}{1} \right\} = 6
> $$
> **Scelta della variabile uscente dalla base:**
> $$
> i^* = \min \left\{ i \in \{1, 2, 3\} : \bar{\delta} = \frac{\bar{x}_{\mathcal{B}(i)}}{d_i} \right\} = 3
> $$
> Quindi poniamo $h = \mathcal{B}(3) = 5$ e calcoliamo la nuova soluzione
> $$
> x_B = \bar{x}_B - \bar{\delta} d = \begin{pmatrix} 1 \\ 8 \\ 6 \end{pmatrix} - 6 \begin{pmatrix} -1 \\ 1 \\ 1 \end{pmatrix} = \begin{pmatrix} 7 \\ 2 \\ 0 \end{pmatrix}
> \qquad
> x_N = \bar{\delta} \hat{e}_1 = \bar{\delta} \begin{pmatrix} 1 \\ 0 \end{pmatrix} = \begin{pmatrix} 6 \\ 0 \end{pmatrix}
> $$
> Aggiorniamo gli indici: $\mathcal{B} = \{3, 4, 1\}$, $\mathcal{N} = \{5, 2\}$.
>
> Rispetto agli indici $\mathcal{B} = \{3, 4, 1\}$ e $\mathcal{N} = \{5, 2\}$ abbiamo
> $$
> B = \begin{pmatrix} 1 & 0 & -1 \\ 0 & 1 & 1 \\ 0 & 0 & 1 \end{pmatrix}
> \qquad
> N = \begin{pmatrix} 0 & 1 \\ 0 & 2 \\ 1 & 1 \end{pmatrix}
> $$
> Quindi
> $$
> c_B = (0, 0, -1)^\top \qquad c_N = (0, 2)^\top \qquad
> B^{-1} = \begin{pmatrix} 1 & 0 & 1 \\ 0 & 1 & -1 \\ 0 & 0 & 1 \end{pmatrix}
> $$
> e la corrispondente soluzione di base
> $$
> \bar{x}_B = B^{-1} b = (7, 2, 6)^\top \qquad \bar{x}_N = (0, 0)^\top
> $$
> cioè
> $$
> \bar{x} = (6, 0, 7, 2, 0)^\top
> $$
> è ammissibile.
>
> Determiniamo la matrice
> $$
> B^{-1} N = \begin{pmatrix} 1 & 0 & 1 \\ 0 & 1 & -1 \\ 0 & 0 & 1 \end{pmatrix}
> \begin{pmatrix} 0 & 1 \\ 0 & 2 \\ 1 & 1 \end{pmatrix}
> = \begin{pmatrix} 1 & 2 \\ -1 & 1 \\ 1 & 1 \end{pmatrix}
> $$
> Calcoliamo i coefficienti di costo ridotto
> $$
> \hat{c}_N^\top = c_N^\top - c_B^\top B^{-1} N = (0, 2) - (0, 0, -1)
> \begin{pmatrix} 1 & 2 \\ -1 & 1 \\ 1 & 1 \end{pmatrix}
> = (1, 3)
> $$
> e notiamo che le componenti sono tutte positive, quindi la soluzione corrente è l'**unica** soluzione ottima e l'algoritmo si arresta:
> $$
> x^* = (6, 0, 7, 2, 0)^\top \qquad z^* = c^\top x^* = -6
> $$
>
> Costruiamo il tableau rispetto alla base $\mathcal{B} = \{3, 4, 1\}$:
> $$
> T^{(1)} = \begin{array}{|ccccc|c|}
> \hline
> 0 & 2 & 1 & 0 & 1 & 7 \\
> 0 & 1 & 0 & 1 & -1 & 2 \\
> 1 & 1 & 0 & 0 & 1 & 6 \\
> \hline
> 0 & 3 & 0 & 0 & 1 & 6 \\
> \hline
> \end{array}
> $$
> Le colonne di $x_2$ e $x_5$ sono le colonne di $B^{-1}N$ calcolate sopra, l'ultima riga contiene i costi ridotti $(\hat{c}_2, \hat{c}_5) = (3, 1)$ e l'angolo in basso a destra vale $6 = -z^*$.
>
> L'iterazione eseguita facendo entrare $x_1$ in base e facendo uscire $x_5$ dalla base ci ha quindi portato dal tableau $T^{(0)}$ al tableau $T^{(1)}$:
> $$
> T^{(0)} = \begin{array}{|ccccc|c|}
> \hline
> -1 & 1 & 1 & 0 & 0 & 1 \\
> 1 & 2 & 0 & 1 & 0 & 8 \\
> 1 & 1 & 0 & 0 & 1 & 6 \\
> \hline
> -1 & 2 & 0 & 0 & 0 & 0 \\
> \hline
> \end{array}
> \qquad \longrightarrow \qquad
> T^{(1)} = \begin{array}{|ccccc|c|}
> \hline
> 0 & 2 & 1 & 0 & 1 & 7 \\
> 0 & 1 & 0 & 1 & -1 & 2 \\
> 1 & 1 & 0 & 0 & 1 & 6 \\
> \hline
> 0 & 3 & 0 & 0 & 1 & 6 \\
> \hline
> \end{array}
> $$
> Rispetto all'esempio precedente si arriva allo stesso ottimo $x^* = (6, 0, 7, 2, 0)^\top$, ma con un percorso diverso: partendo dall'origine $(0,0)$ si passa direttamente al vertice $(6,0)$ in una sola iterazione.
