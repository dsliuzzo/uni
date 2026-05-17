#reti_logiche_e_calcolatori 
#appunti 
Per immagazzinare numeri all'interno di un pc essi devono essere tradotti in sequenze di 0 e 1. Per far questo utilizziamo la notazione binaria.

# Insiemi numerici in notazione binaria
con $n$ numero di bit utilizzati
## $\mathbb{N}$
- Notazione binaria naturale

Conversione binario decimale
$$
N_{10}=\sum_{i=0}^{n-1}a_i2^i
$$

> Posso rappresentare $[0,2^n-1]\subseteq \mathbb{N}$

>[!tip] Proprietà
>Un numero in notazione binaria è pari se l'ultima cifra a destra è pari (0)
## $\mathbb{Z}$
Per rappresentare numeri relativi abbiamo due possibilità
### Modulo e segno
$$
A=a_{n-1},a_{n-2},\dots,a_2,a_1,a_0
$$
Il bit più significativo $a_{n-1}$ rappresenta il segno, mentre il resto dei bit rappresenta il numero vero e proprio:
$$
\displaylines{
\left\{\begin{array}{l}
a_{n-1}=0 \hspace{2ex} A\geq 0 \\
a_{n-1}=1 \hspace{2ex} A\leq 0
\end{array}\right.\\
|A|=\sum_{i=0}^{n-2}a_i2^i
}
$$
In questo caso però non posso effettuare calcoli ed esiste due volte lo 0, come $+0$ e $-0$.
### Complemento a 2
Il bit più significativo rimane il segno del numero, ma cambia il modo in cui rappresentiamo il modulo:
$$
\displaylines{
\left\{\begin{array}{l}
a_{n-1}=0 \hspace{4ex} A\geq 0 \hspace{4ex} |A|=\sum_{i=0}^{n-2}a_i2^i\\
a_{n-1}=1 \hspace{4ex} A\leq 0 \hspace{4ex} |A|=2^{n-1}-\sum_{i=0}^{n-2}a_i2^i
\end{array}\right.
}
$$
In questo modo possiamo effettuare calcoli esattamente come avveniva per $\mathbb{N}$.

> Posso rappresentare $[-(2^{n-1}),2^{n-1}-1]\subseteq \mathbb{Z}$

$$
\displaylines{
es. \text{con } n=3 \\
\begin{array}{c|c|c|c}
a_2 & a_1 & a_0 & A \\
\hline
0 & 0 & 0 & +0 \\
0 & 0 & 1 & +1 \\
0 & 1 & 0 & +2 \\
0 & 1 & 1 & +3 \\
1 & 0 & 0 & -4 \\
1 & 0 & 1 & -3 \\
1 & 1 & 0 & -2 \\
1 & 1 & 1 & -1
\end{array}
}
$$
## $\mathbb{R}$

- rappresentazione in mantissa ed esponente

Vengono presi due numeri distinti che saranno rispettivamente la parte numerica e la parte decimale del numero.
# Operazioni in notazione binaria
## Addizione
Sommiamo due numeri composti da bit in colonna

*es.*
$$
\displaylines{
A=3 \hspace{4ex} B=1 \\
A+B=\\
\begin{array}{cccc}
1 & 1 \\
 & 0 & 1 & 1 & + \\
 & 1 & 1 & 0 & = \\
\hline
1 & 0 & 0 & 1
\end{array}
}
$$
## Sottrazione
Per cambiare il segno di un numero in [[#Complemento a 2]] basta effettuare un #flip dei bit e aggiungere 1. Così posso effettuare una normale addizione
*es.*
$$
\displaylines{
A=3 \hspace{4ex} B=1 \\
A-B=A+(\overline{B}+1)\\
\begin{array}{cccc}
1 & 1 & 1 \\
 & 0 & 1 & 1 & + \\
 & 1 & 1 & 0 & + \\
 & 0 & 0 & 1 & = \\
\hline
\not{1} & 0 & 1 & 0
\end{array}
}
$$
Se otteniamo un bit in eccesso basta eliminarlo.

## Moltiplicazione
### Moltiplicazione x2
basta aggiungere 0 a destra
$$
111_2*2 = 1110_2
$$

## Divisione
### Divisione x2
basta eliminare l'ultimo bit a destra
$$
1101_2/2 = 110_2
$$