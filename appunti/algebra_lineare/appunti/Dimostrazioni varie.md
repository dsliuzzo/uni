#appunti 
#algebra_lineare
# Principio di induzione

Secondo gli ==[assiomi di Peano](https://www.notion.so/Appunti-10a40598f6ed80b49fa2fee4487a0b19?pvs=21)== possiamo dimostrare svariate formule all’interno di $\mathbb{N}$ seguendo 3 punti fondamentali

1. ==**primo passo**==, definisco come vera la formula per $n=1$
2. ==**ipotesi induttiva**==, ipotizzo la veridicità della formula per un qualsiasi valore di $n$
3. ==**passo induttivo**==, verifico che la formula sia verificata per $n+1$

## Formula di Gauss

Dimostrare che la somma dei primi $n\in \mathbb{N} = \frac{n(n+1)}{2}$

$$P(n)=1+2+3+...+n = \sum_{i=1}^{n} i = \frac{n(n+1)}{2}$$

- ==**DIMOSTRAZIONE**==
    
    ### Primo passo
    
    $$P(1):\sum_{i=1}^{1}i = \frac{1(1+1)}{2} \\  
    1=1$$
    
    ### Ipotesi induttiva
    
    $$P(n):\sum_{i=1}^{n}i = \frac{n(n+1)}{2}$$
    
    ### Passo induttivo
    
    $$P(n+1):\sum_{i=1}^{n+1}i=\frac{(n+1)[(n+1)+1]}{2}$$
    
    $$\sum_{i=1}^{n+1}i=1+2+3+...+n+(n+1)  
    =\sum_{i=1}^{n}i+(n+1)$$
    
    $$\sum_{i=1}^{n+1}i =\frac{n(n+1)}{2}+(n+1) = \\  
    = \frac{n(n+1)+2(n+1)}{2} = \\  
    = \frac{(n+1)(n+2)}{2}$$
    
    Dopo aver confermato anche il passo induttivo posso dire che
    
    $$\Rightarrow P(n) \text{ è vero } \forall n \in \mathbb{N}$$
    

## Seconda dimostrazione

Dimostrare che $6^n -1$ è divisibile per $5$ $\forall n \in \mathbb{N}$

- ==**DIMOSTRAZIONE**==
    
    ### Passo base
    
    $$6^1-1= 5$$
    
    ### Ipotesi induttiva
    
    $$6^n-1 \text{ è divisibile per }5$$
    
    ### Passo induttivo
    
    $$\text{dimostro che }6^{n+1}-1$$
    
    $$6^{n+1}-1 = \\  
    =6*6^n-1+5-5 = \\  
    =6*6^n-6+5 = \\  
    =6(6^n-1)+5$$
    
    $$5*a \text{ è divisibile per } 5 \\  
    5*a +5 = 5(a+1) \text{ è ancora divisibile per } 5$$
    
    Quindi essendo $6^n-1$ divisibile per 5, moltiplicandolo per un qualsiasi numero, nel nostro caso $6$, e sommando 5, il risultato sarà comunque divisibile per 5. In questo modo ho dimostrato l’assunto iniziale $\forall n \in \mathbb{N}$
    

## Cardinalità

$$|P(A)| = 2^{|A|}$$

$$|A|=n$$

- ==**DIMOSTRAZIONE**==
    
    ### Passo base
    
    Inizierò da $n=0$
    
    $$P(\emptyset) = \{\emptyset\}\\  
    2^0 = 1$$
    
    Ho un solo sottoinsieme, quindi il mio passo base è verificato
    
    ### Ipotesi induttiva
    
    Ipotizzo che la mia formula sia valido per un qualsiasi $n$
    
    $$|A| = n \\  
    |P(A)|=2^n$$
    
    ### Passo induttivo
    
    Verifico per $n+1$
    
    Definisco un nuovo insieme $B$ di cardinalità $n+1$
    
    $$B=A\cup\{a_0\}, a_0\notin A$$
    
    $$P(B)=P(A)\cup X \\  
    |P(A)| = 2^n \\  
    |X| = 2^n$$
    
    $$|P(B)| = |P(A)|*|X| = \\  
    = 2^n+2^n = \\  
    = 2*2^n = \\  
    =2^{n+1}$$
    
    In questo modo ho dimostrato che la cardinalità dell’insieme delle parti di B è uguale a $2^{n+1}$, confermando l’intera formula
    

## Esercizio dimostrazione

Dimostra la seguente formula

$$P(n) = \sum_{i=0}^{n+1}(2i+1) = n^2 +4n+4$$

- ==**DIMOSTRAZIONE**==
    
    ### Passo base
    
    Poniamo $n=1$
    
    $$P(1):\sum_{i=0}^{2}(2i+1) = 1+4+4 \\  
    \Rightarrow (2*0+1)+(2*1+1)+(2*2+1) = 9 \\  
    \Rightarrow 1+3+5 = 9 \\  
    \Rightarrow 9=9$$
    
    ### Ipotesi induttiva
    
    Ipotizzo come vera la formula per una qualsiasi $n$
    
    $$P(1):\sum_{i=0}^{n+1}(2i+1) = n^2+4n+4$$
    
    $$\sum_{i=0}^{n+1}(2i+1) = \\ = (2*0+1)+(2*1+1)+(2*2+1)+...+(2*n+1)+(2(n+1)+1)$$
    
    ### Passo induttivo
    
    Applico la formula per $P(n+1)$
    
    $$P(n+1) : \sum_{i=0}^{n+2}(2i+1) = (n+1)^2+4(n+1)+4$$
    
    $$\Rightarrow (2*0+1)+(2*1+1)+(2*2+1)+...+(2*n+1)+(2(n+1)+1)+(2(n+2)+1) \\  
    \Rightarrow \sum_{i=0}^{n+1}(2i+1)+(2(n+2)+1) \\  
    \Rightarrow n^2+4n+4+(2(n+2)+1) \\  
    \Rightarrow n^2+4n+4+2n+4+1 = (n+1)^2+4(n+1)+4$$
    
    $$P(n) \text{ è vero } \forall n\in \mathbb{N}$$