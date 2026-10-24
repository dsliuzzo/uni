#appunti 
#ricerca_operativa 

# Ripasso di AL
Richiami di [[2. I vettori (algebra)|algebra lineare]] necessari per la programmazione lineare.

## Prodotto matriciale
Date $A \in \mathbb{R}^{m \times n}$ e $B \in \mathbb{R}^{n \times p}$, il prodotto $C = AB \in \mathbb{R}^{m \times p}$ è definito da
$$
c_{ij} = \sum_{k=1}^{n} a_{ik} b_{kj}
$$
cioè l'elemento $c_{ij}$ è il prodotto scalare tra la riga $i$ di $A$ e la colonna $j$ di $B$ ([[2. I vettori (algebra)#Prodotto riga per colonna|prodotto riga per colonna]])

>[!attention] Condizione di esistenza
>Il prodotto è definito solo se il numero di colonne di $A$ è uguale al numero di righe di $B$

>[!important] Proprietà
>- non è commutativo: in generale $AB \neq BA$
>- è associativo: $(AB)C = A(BC)$
>- $A\mathbf{x} = \sum_j x_j A_j$: il prodotto matrice-vettore è una **combinazione lineare delle colonne** $A_j$ di $A$
>
>Vedi [[2. I vettori (algebra)#Proprietà del prodotto tra matrici|proprietà del prodotto tra matrici]]

## Calcolo della matrice inversa
Una matrice quadrata $A \in \mathbb{R}^{n \times n}$ è **invertibile** se esiste $A^{-1}$ tale che
$$
AA^{-1} = A^{-1}A = I
$$
Questo vale se e solo se $\det(A) \neq 0 \implies$ righe linearmente indipendenti ([[2. I vettori (algebra)#Matrice inversa|matrice inversa]], [[2. I vettori (algebra)#Determinante|determinante]])

L'inversa si calcola con la formula
$$
A^{-1} = \frac{1}{\det(A)} \, \text{agg}(A) \hspace{8ex} \text{agg}(A)_{ij} = (-1)^{i+j} \det(A_{ji})
$$
dove $A_{ji}$ è la sottomatrice ottenuta eliminando la riga $j$ e la colonna $i$

>[!question] Osservazione
>$\text{agg}(A)$ è la trasposta della matrice dei cofattori, vedi [[2. I vettori (algebra)#Complemento algebrico / cofattore|cofattore]] e [[2. I vettori (algebra)#Calcolo matrice inversa|calcolo matrice inversa]]

## Verifica di indipendenza lineare
I vettori $\mathbf{v}_1, \dots, \mathbf{v}_k \in \mathbb{R}^n$ sono **linearmente indipendenti** se
$$
\sum_{i=1}^{k} \lambda_i \mathbf{v}_i = \mathbf{0} \implies \lambda_1 = \dots = \lambda_k = 0
$$
Vedi [[2. I vettori (algebra)#Vettori linearmente indipendenti|vettori linearmente indipendenti]]

>[!important] Come verificarlo
>- si forma la matrice $V = [\mathbf{v}_1 \cdots \mathbf{v}_k]$: i vettori sono indipendenti se e solo se $\text{rango}(V) = k$ ([[2. I vettori (algebra)#Rango (metodo dei minori)|rango]])
>- se $k = n$ (matrice quadrata), basta verificare che $\det(V) \neq 0$
>- se $k > n$, i vettori sono sicuramente dipendenti

 es.
$\mathbf{v}_1 = (1, 2)^T$, $\mathbf{v}_2 = (3, 4)^T$
$$
\det\begin{pmatrix} 1 & 3 \\ 2 & 4 \end{pmatrix} = 4 - 6 = -2 \neq 0
$$
quindi i vettori sono linearmente indipendenti.
