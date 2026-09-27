#fondamenti1 
#appunti 

Prende in input un valore e un vettore, se presente, restituirà l’indice in cui è presente il valore, altrimenti restituirà -1

![[_Allegati/RicercaElemento.c|RicercaElemento.c]]

[[Complessità algoritmi#Ricerca]]
# Ricerca binaria

- ==**Complessità**==
    
    $$\begin{array}{|c|c|}  
    \hline  
    \text{elementi} & \\  
    \text{rimanenti} & \text{passo} \\  
    \hline  
    n & 1 \\  
    \hline  
    \frac{n}{2} & 2 \\  
    \hline  
    \frac{n}{2^2} & 3\\  
    \hline  
    \frac{n}{2^3} & 4 \\  
    \hline  
    \vdots & \vdots \\  
    \hline  
    \frac{n}{x^{i-1}} & i \\  
    \hline  
    \end{array}$$
    
    Il passo finale è $i$
    
    $$\frac{n}{2^{i-1}} = 1 \Rightarrow \log_2n=i-1 \\ \Rightarrow \log_2n+1=i$$
    
    $$O(\log_2n)$$
    

Il vettore per prima cosa deve essere già ordinato

A questo punto possiamo dividere il totale di indici e controllare l’elemento di mezzo, così da stabilire se l’elemento cercato è esattamente quello o in quale metà si trova. A questo punto reiteriamo l’operazione nella metà designata, fino a trovare l’elemento richiesto.

chiamiamo `inf` la prima posizione utile (alla prima iterazione `inf=0`), invece `sup` l’ultima posizione utile (alla prima iterazione `sup=n-1`). Inoltre avremo bisogno di una variabile che conterrà il valore medio tra `inf` e `sup`, che chiameremo `mid = (inf+sup)/2` (effettuiamo la divisione per interi, in modo da non ottenere valori razionali).