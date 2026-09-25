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
![[Problemi di ottimizzazione-1790330573889.webp|375]]

Tutti i vettori sono rappresentati da colonne
$$
c = \left(\begin{array}{l}c_{1} \\ c_{2} \\ \vdots \\ c_n \end{array}\right) \hspace{4ex} x = \left(\begin{array}{l}x_{1} \\ x_{2} \\ \vdots \\ x_n \end{array}\right) \hspace{4ex} A = \left[\begin{array}{cccc}a_{11} & a_{12} & \dots & a_{1n} \\
a_{21} & a_{22} & \dots & a_{2n} \\
\vdots \\
a_{m1} & a_{m2} & \dots & a_{mn}\end{array}\right]
$$
A = matrice che contiene i *coefficienti tecnologici*
[...] link ad algebra
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
$$
\left\{\begin{array}{l}\min & c^T x \\ s.t. & Ax \geq b \end{array}\right.
$$
## Risoluzione grafica di un problema in due variabili
[...] <-- quaderno
