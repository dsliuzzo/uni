#appunti 
#asd

https://github.com/sflesca/EsempiAlgoritmiPython
# Divide et impera
Il **divide et impera** è una tecnica di programmazione molto utilizzata, che spesso sfrutta la ricorsione, specialmente nell'utilizzo nella creazione di metodi per la gestione di strutture dati.
>[!important] Il divide et impera consiste nella risoluzione di un problema in termini di se stesso

In pseudocodice possiamo formalizzare il divide et impera come:
Per la risoluzione di `RisolviDI(P)`
1. `if dimensione_banale(P) return risolvi(P)`
   verifichiamo se la dimensione del problema è banale e quindi può essere risolta senza ulteriori chiamate ricorsive
   *es.* nella ricerca la lista è vuota o ha un solo elemento
2. `SP = dividi(P)`
   genero istanze diverse dello stesso problema partendo dalla istanza iniziale, se la dimensione delle nuove istanze è minore di quella di partenza posso utilizzare la ricorsione, in quanto sicuramente si arriverà alla istanza banale
3. `SOL=[]`
   creo un vettore delle sottoistanze
4. `for i in range(SP.length): SOL[i] = RisolviDI(SP[i])`
   per ognuna delle sottoistanze richiamo l'algoritmo iniziale ricorsivamente
5. `return combino(SOL)`
   unisco le soluzioni delle chiamate ricorsive

Distinguiamo due tipi di problemi 
- **Tipo 1**
  la dimensione delle sottoistanze è $\frac{n}{c}$
  *es.* nel merge sort $c=2$
- **Tipo 2**
  la dimensione delle sottoistanze è $n-c$
  *es.* fattoriale con $c=1$
con $c$ parametro dell'algoritmo, che può essere costante in tutto il problema come negli esempi sovrastanti o variabile
*es.* quick sort, nel caso peggiore la prima sottoistanza è vuota e la seconda ha $n-c$ celle

>[!important] Possiamo capire la complessità di un algoritmo ricorsivo senza necessariamente conoscere la sua implementazione

## Complessità temporale algoritmi di tipo 1
Per calcolare la complessità di un algoritmo ricorsivo possiamo separare le parti di costo dovute alla ricorsione e quelle relative alle operazioni interne.
Otteniamo quindi delle **equazioni di ricorrenza** così formulate
$$
\left\{\begin{array}{l}T(n) =bn^d+ aT\left( \frac{n}{c} \right) \\ T(1) = b\end{array}\right.
$$
Con $a$ numero di volte che viene richiamata la ricorsione, $b$ complessità del caso banale.
La complessità di $T(n)$ è dato da un costo per le operazioni interne $bn^d$ + un costo dato dalle chiamate ricorsive $aT\left( \frac{n}{c} \right)$.
### Teorema delle ricorrenze
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



$\therefore$ Per riassumere
$$
\begin{array}{|c|c|}
\hline
\frac{a}{c^d} = 1 & T(n) \in \Theta(n^d \log n) \\
\hline
\frac{a}{c^d} < 1 & T(n) \in \Theta(n^d) \\
\hline
\frac{a}{c^d}>1 & T(n) \in \Theta (bn^{\log_c a}) \\
\hline
\end{array}
$$
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

# Moltiplicazione tra interi
Il classico algoritmo di calcolo della moltiplicazione tra interi studiato alle scuole elementari ha una complessità di $O(n^2)$ con $n$ cifre del maggiore dei due moltiplicatori.
Cerchiamo quindi un algoritmo di [[#Complessità temporale algoritmi di tipo 1|tipo 1]], possiamo per esempio dividere i fattori come combinazione lineare come segue:
$$
\displaylines{
x = x_{1} \cdot B^{\frac{n}{2}} + x_0  \\
y = y_{1} \cdot B^{\frac{n}{2}} + y_{0}
}
$$
con $B$ base del sistema di numerazione che stiamo usando e $x_{1}$ porzione di cifre più significativa e $x_{0}$ porzione di cifre meno significative.
$$
\begin{align*}
x \cdot y & = (x_{1} B^{n/2} + x_{0}) \cdot (y_{1} B^{n/2} + y_{0}) = \\
& = x_{1}y_{1} B^{n} + x_{0} y_{1} B^{n/2} + x_{1}y_{0} B^{n/2} + x_{0}y_{0}
\end{align*}
$$

Abbiamo quindi ottenuto moltiplicazioni di interi con $\frac{n}{2}$ cifre, l'ideale per l'applicazione di un algoritmo ricorsivo tramite [[#Divide et impera]].
Per quanto riguarda le moltiplicazioni per $B^n$ e $B^{n/2}$ sarebbero moltiplicazioni che arrivano ad $n$ cifre, ma per la natura del tipo di moltiplicazione basterà effettuare operazioni di [[1. Reti logiche#Registri a scorrimento|shifting]] che per definizione hanno complessità $O(1)$. 
Possiamo quindi utilizzare il [[#Teorema delle ricorrenze]] con $c=2$, $a=4$ e $d=1$ (dato dalla addizione del combina).
$$
\frac{a}{c^d} = 2 > 1 \implies T(n) \in \Theta(b n^{\log_c a}) = \Theta (n^2)
$$
la complessità non è cambiata.
Proviamo quindi a cambiare i parametri $a$, $c$ e $d$.
- per quanto riguarda $d$ abbiamo una complessità intrinseca dell'addizione, quindi non può essere abbassata ulteriormente.
- aumentando $c=3$ otteniamo $a=9$ peggiorando ulteriormente la complessità.
- Proviamo quindi a diminuire $a$
con $a=3$
$$
\frac{a}{c^d} = \frac{3}{2} > 1 \implies T(n) \in \Theta (n^{\log_c a})
$$
otteniamo quindi un valore di $n^k$ con $1<k<2$ che migliorerebbe quindi l'algoritmo, concludiamo quindi che ha senso trovare un modo di abbassare il numero di moltiplicazioni interne.
Per quanto riguarda la moltiplicazione tra i meno significativi $m_{1} = x_{0}y_{0}$ e quella tra i più significativi $m_{2} = x_{1}y_{1}$ non possiamo effettuare ulteriori operazioni di semplificazione in quanto esse dipendono solo dai valori stessi.
Dobbiamo quindi cambiare qualcosa in $B^{\frac{n}{2}} (x_{0}y_{1}+x_{1}y_{0})$ 
Sapendo che dobbiamo ottenere la somma di 3 moltiplicazioni per avere $a=3$ e 2 di esse sono già state definite come $m_{1}$ ed $m_{2}$ definiamo la terza moltiplicazione $m_{3}$ come una incognita.
Definiamo per ipotesi quindi una combinazione di queste 3 moltiplicazioni che restituisca $x_{0}y_{1} + x_{1}y_{0}$ permettendomi così di ricavare $m_{3}$
$$
m_{1} + m_{2} + m_{3} = x_{1}y_{0} + x_{0}y_{1}
$$
Da questa posso sostituire $m_{1}$ ed $m_{2}$ e isolare $m_{3}$
$$
\begin{align*}
x_{0}y_{0} + x_{1}y_{1} + m_{3} & = x_{1}y_{0} + x_{0}y_{1} \\
m_{3} & = -x_{0}y_{0} - x_{1}y_{1} + x_{1}y_{0} + x_{0}y_{1} \\
 & = x_{1}(y_{0}-y_{1}) + x_{0} (y_{1}-y_{0}) \\
 & = -x_{1}(y_{1}-y_{0}) + x_{0}(y_{1}-y_{0}) \\
 & = (y_{1}-y_{0})(x_{0}-x_{1})
\end{align*}
$$
Abbiamo quindi **appesantito** la `dividi` ma $d$ rimane pari a 1.
Anche la `combina` è più complessa
$$
x \cdot y = m_{2} B^n + (m_{1}+m_{2}+m_{3})B^{n/2} + m_{1}
$$
Abbiamo quindi ottenuto la complessità desiderata $T(n) \in \Theta (n^{\log_2 3})$
## Prodotto tra matrici quadrate
Lo stesso principio può essere adattato e applicato alla moltiplicazione tra matrici quadrate.
Con l'[[2. I vettori (algebra)#Prodotto tra matrice e matrice|algoritmo comunemente utilizzato]] per fare il calcolo tra matrici manualmente abbiamo una complessità di $O(n^3)$.
Inoltre sappiamo che per la produzione di un output abbiamo una complessità intrinseca di $\Omega(n^2)$, cerchiamo quindi di minimizzare la complessità.
Per le proprietà delle matrici possiamo dividere l'operazione in sottomatrici senza cambiare il risultato
$$
A \times B = \left(\begin{array}{c:c}
A_{00} & A_{01} \\
\hdashline
A_{10} & A_{11}
\end{array}\right) \left(\begin{array}{c:c}
B_{00} & B_{01} \\
\hdashline
B_{10} & B_{11}
\end{array}\right) =
\left(\begin{array}{c:c}
A_{00} \cdot B_{00} + A_{01} \cdot B_{10} & A_{00} \cdot B_{01} + A_{01} \cdot B_{11} \\
\hdashline
A_{10} \cdot B_{00} + A_{11} \cdot B_{10} & A_{10} \cdot B_{00} + A_{10} \cdot B_{11}
\end{array}\right)
$$
Tramite divide et impera abbiamo quindi un algoritmo ricorsivo con $c=2$, $a = 8$ e $d = 2$ (per la somma di matrici)
$$
\frac{a}{c^d} = 2 > 1 \implies T(n) \in \Theta (n^{\log_c a}) = \Theta(n^3)
$$
proviamo quindi a migliorare questo algoritmo riducendo i parametri.
con $c=3$ otteniamo lo stesso risultato.
Proviamo a ridurre $a=7$.
Questo è possibile, otteniamo l'algoritmo di Strasser, che riesce a ridurre la complessità dell'algoritmo tramite un sistema di equazioni molto complesse.
## Calcolo complessità della potenza
Per il calcolo della potenza normalmente abbiamo $2^n$ operazioni con $n$ esponente.
Provando a suddividere l'operazione otteniamo
$$
a^n = a^{\frac{n}{2}} \cdot a^{\frac{n}{2}}
$$
Questo è possibile solo finché abbiamo $n$ che è un numero pari, altrimenti otterremo potenze con esponente fratto.
Supponiamo di avere $n = 2^k$, ricorsivamente otterremmo una complessità di $\log_2 n$
$$
\displaylines{
a^0 = 1 \\
a^1 = a \\
a^2 = a \cdot a \\
a^4 = a^2 \cdot a^2 \\
a^8 = a^4 \cdot a^4
}
$$
Se il nostro esponente però non è una potenza di 2 dobbiamo scomporlo
*es.* $n = 10 = 2^3 + 2^1 \implies a^n = a^{2^3} \cdot a^2$
Meccanicamente possiamo pensarlo come segue:
se nella rappresentazione binaria di $n$ c'è 1 manteniamo la sua conversione in decimale e la moltiplichiamo per le conversioni di tutti gli altri 1 di $n$.
# Tecnica golosa
Definiamo tecnica golosa (greedy) un paradigma di costruzione di algoritmi che prendendo decisioni basandosi esclusivamente sulla immediata convenienza di una scelta rispetto ad un altra, senza mai rivedere le scelte passate.
>[!attention] La definizione algoritmica di tecnica golosa è diversa dalla definizione matematica

Gli algoritmi che utilizzano la tecnica golosa permettono di ricercare una soluzione di costo minimo all'interno di un insieme di possibili soluzioni al nostro problema utilizzando i [[Strutture dati#Grafi|grafi]].

>[!bug] Tramite l'uso della tecnica greedy non sempre otteniamo l'ottimo globale
>ma è comunque una approssimazione che possiamo accettare, per questo tipicamente è una tecnica applicata per algoritmi di cui non conosciamo una soluzione polinomiale.

Per prima cosa definiamo lo spazio delle possibili soluzioni al problema, tipicamente "rilassando"  la struttura di partenza per esempio:
- il risultato non contiene tutti i nodi
- non è un albero, ma è una foresta

Definiamo $S$ **insieme delle possibili soluzioni** da esplorare.
Una possibile soluzione potrebbe essere quella di, fissato $N$, esplorare tutte le possibili soluzioni e verificare se sono alberi, ma avrebbe un costo assurdo.

La soluzione ideale è quella di utilizzare la tecnica golosa, che non assicura di ottenere il minimo assoluto, ma restituisce nella maggior parte dei casi una soluzione accettabile $\to$ non esploriamo tutte le possibili soluzioni, ma solo quelle che più probabilmente sono di nostro interesse.

Per applicarla devo definire:
- una funzione `next()`$:S\to 2^S$ che dato in ingresso un elemento di $S$ mi dica tutti gli adiacenti (soluzioni con un nodo di differenza)
- una funzione `migliore_sol()`$:2^S \to S$ che dato in ingresso un insieme di soluzioni ne decide la migliore (quella che aumenta di meno il costo totale dell'albero)
- una funzione `costo()`$:S \to P$ che associa ad ogni soluzione passata in ingresso un costo
- $S_0$ la soluzione iniziale da cui partire
- una condizione di arresto dell'algoritmo.

La tecnica golosa seguirà uno schema di questo tipo:
```
scurr <- s0
while not criterio_arresto(scurr):
	sbest = migliore_sol(next(scurr))
	scurr = sbest
return scurr
```

Per rendere questo algoritmo efficiente è sufficiente che `next()` sia un insieme piccolo rispetto alla dimensione del problema e che il numero di passi per arrivare al criterio di arresto sia anch'esso piccolo.
## Prim - minimo albero ricoprente
Partendo da un grafo pesato non orientato potrebbe risultare utile creare un grafo che connetta tutti i nodi del grafo iniziale pagando il meno possibile.
![[Strutture dati-1778185686784.webp|center|500]]
Il risultato sarà un grafo che non ha cicli (non ha senso pagare un arco che connette due nodi che sono già connessi) che definiamo: **albero ricoprente del grafo**: un albero che viene costruito a partire dal grafo.
I nodi dell'albero sono gli stessi del grafo e gli archi sono un sottoinsieme degli archi del grafo.
>[!important] Albero ricoprente del grafo
>dato un grafo $G$ (definito come prima) allora $A = <N',E',\lambda>$ è un albero ricoprente di $G$ se
>- $N'=N$
>- $E' \subseteq E$
>- $A$ è un albero
>>[!question] Osservazione
>>$\lambda$ non è proprio uguale, ha un dominio diverso, è una restrizione della funzione sui grafi

Il nostro obbiettivo quindi è trovare un albero ricoprente che costi il meno possibile.
Per ogni albero creato possiamo calcolare quanto spendiamo per crearlo:
$$
\text{costo}(A) = \sum_{e \in E'} \lambda(e')
$$
Definiamo $A(G)$ l'insieme degli alberi ricoprenti di $G$ allora $A \in A(G)$ è un minimo albero ricoprente di $G$ se e solo se $\nexists A' \in A(G)$ t.c. $\text{costo}(A) >\text{costo}(A')$  .
Anche in questo caso esiste un minimo se l'insieme $A(G)$ non è vuoto e se esiste un limite inferiore.

---

Per creare un albero ricoprente minimo utilizziamo un [[Algoritmi#Tecnica golosa|algoritmo goloso]].

**Rilassiamo** la struttura iniziale:
$$
S = \{A = <N',E',\lambda>| N' \subseteq N, E' \subseteq E, A \text{ è un albero}\}
$$

Definiamo il metodo **next**:
$$
\text{next}(A) = \{A' = <N' \cup \{x\}, E' \cup \{e\}, \lambda| x \in N \backslash N', e(x,y) \in E, y \in N'\}
$$
che restituisce la soluzione corrente con un arco in più che si collega ad un nodo già presente in `curr`.

Definiamo la **soluzione iniziale**:
$$
S_0 = <\{0\}, \emptyset, \lambda>
$$

Definiamo il metodo **costo**
$$
\text{costo}:S\to P = \sum_{e \in E'} \lambda(e)
$$

Definiamo il **criterio di arresto**
$$
N'=N
$$

Definiamo inoltre una nuova struttura, il **taglio del grafo** che rappresenta, ad ogni passo, la divisione tra i nodi già presenti nella soluzione corrente e i rimanenti.
Per estendere la soluzione corrente tramite la `next` sceglierò l'arco che si trova sul taglio del grafo e che ha il costo minore.

>[!multi-column]
>
>>[!blank]
>>![[Strutture dati-1778185329297.webp]]
>
>>[!blank]
>>![[Strutture dati-1778185341067.webp]]
>
>>[!blank]
>>![[Strutture dati-1778185351516.webp]]
>
>>[!blank]
>>Se sono presenti diverse possibilità di raggiungere lo stesso nodo manterrò solo quelle dal costo minore

>[!multi-column]
>
>>[!blank]
>>![[Strutture dati-1778185360799.webp]]
>
>>[!blank]
>>![[Strutture dati-1778185382938.webp]]
>
>>[!blank]
>>![[Strutture dati-1778185393168.webp]]
>
>>[!blank]
>>![[Strutture dati-1778185403260.webp]]
``` python
def prim(g: GrafoNOP):
    padri: list[int] = [-1 for i in range(g.n)]
    pesi: list[int] = [sys.maxsize for i in range(g.n)]
    preso: list[bool] = [False for i in range(g.n)]
    curr: int = 0
    padri[0] = 0
    preso[0] = True
    count = 1
    result = []
    mioheap: HeapModificabile = HeapModificabile(g.n)
    for a in g.adiacenti(curr):
        mioheap.ins(Pair(a.y, a.peso))
        padri[a.y] = curr
        pesi[a.y] = a.peso
    while not mioheap.evuoto():
        count += 1
        cp: Pair = mioheap.out()
        preso[cp.x] = True
        result.append((padri[cp.x], cp.x, cp.p))
        for a in g.adiacenti(cp.x):
            if not preso[a.y]:
                if padri[a.y] == -1:
                    mioheap.ins(Pair(a.y, a.peso))
                    padri[a.y] = cp.x
                    pesi[a.y] = a.peso
                elif pesi[a.y] > a.peso:
                    mioheap.update(Pair(a.y, a.peso))
                    padri[a.y] = cp.x
                    pesi[a.y] = a.peso
    if count == g.n:
        return result
    else:
        return []
```

### Prim è un ottimo globale
Nonostante applichi la tecnica Greedy l'algoritmo di Trim è comunque l'ottimo globale.

Per dimostrare questa proprietà possiamo riadattare il [[Dimostrazioni varie#Principio di induzione|principio di induzione]] agli algoritmi: **dimostrazione per invarianza**.
Il nostro obbiettivo quindi è trovare una proprietà che, se valida per ogni passo del nostro algoritmo implica che, arrivati alla condizione finale, abbiamo ottenuto un minimo albero ricoprente.

Definiamo un insieme di alberi $A_{0},A_{1},\dots,A_n$ che rappresentano i passaggi per la creazione dell'albero minimo ricoprente, con $A_0$ soluzione di partenza (albero con un solo nodo e 0 archi) e $A_n$ albero minimo ricoprente.

Associamo ora ad ognuno di questi alberi un minimo albero ricoprente $A_0^*, A_1^*,\dots, A_n^*$ tale per cui l'albero $A^*_i$ contiene tutti i nodi e tutti gli archi di $A_i$.

La nostra proprietà da verificare per la dimostrazione è proprio che esista $A_i \subseteq A_i^* \forall i \in 1,2,\dots,n$.
$\therefore$ alla soluzione $A_n = A_n^*$ abbiamo ottenuto un albero minimo ricoprente.

**Applichiamo il principio di induzione**
- [>] passo $0$
$A_0$ è un albero che contiene solo un nodo e nessun arco, per definizione tutti gli alberi minimi contengono tutti i nodi, quindi $A_0 \subseteq A_0^*$ sicuramente.

- [>] passo $i$ e $i+1$
Al passo $i$ definiamola soluzione corrente $A_i=<N_i, E_i>$ e il suo minimo albero ricoprente associato, che esiste per ipotesi $A_i^* = <N,E^*_i>|E_{i}^* \subseteq E_i$ .

A questo passo viene effettuato il collegamento tra due nodi $y \in N_i$ e $x \in N\backslash N_i$ 
tali che $A_{i+1} = <N_i \cup \{x\} , E_i \cup \{(y,x)\}>| x \notin N_{i}, y \in N_{i}, (x,y) \in E$ 
e si possono verificare due situazioni:
- il nuovo arco è presente anche in $A_{i}^*$
- il nuovo arco non è presente in $A_{i}^*$
Nel primo caso tratteremo $A_{i+1}$ come $A_i$ continuando l'induzione.

>[!multi-column]
>
>>[!blank]
>>![[Algoritmi-1778250163174.webp]]
>
>>[!blank]
>>Nel secondo caso sappiamo comunque che, essendo $A^*_{i}$ ricoprente, esiste sicuramente un cammino che porta dal nodo $y$ al nodo $x$ (*es.* $y-u-v-x$).
>>Consideriamo quindi un altro albero minimo ricoprente $\hat{A}_i = <N, E^*_i \backslash \{(u,v)\} \cup \{(y,x)\} >$ a cui eliminiamo il collegamento $u-v$ e aggiungiamo il collegamento $y-x$.
>>Questo grafo rispetta la proprietà induttiva definita per $A_i$ (contiene comunque tutti i nodi e gli archi del passo precedente) abbiamo rimosso la connessione $u-v$ che non era presente in $A_i$ e aggiungiamo l'arco $y-x$.

Dobbiamo quindi verificare se l'aggiunta dell'arco $y-x$ porta ad avere un albero non ricoprente o un albero non di costo minimo.
1. Idealmente rimpiazzo il cammino che porta da $u$ a $v$ con $u-y-x-v$ quindi l'albero risultante è comunque connesso
2. sappiamo che il costo di $\hat{A}_i$ è la somma dei pesi che fanno parte degli archi dell'albero: $\text{costo}(\hat{A}_i) =\text{somma}(E^*_i) -\text{costo}(u,v) +\text{costo}(y,x)$ , inoltre sappiamo che sia $u-v$ e $y-x$ sono archi sul taglio e tra i due decidiamo di aggiungere $y-x$ che di conseguenza è quello dal costo minore: $\text{costo}(y,x)\leq\text{costo}(u,v)$ stiamo sommando una quantità minore a quella sottratta
   $\therefore\text{costo}(\hat{A}_i) \leq\text{costo}(A^*_i)$

Abbiamo quindi dimostrato che la soluzione che applica la tecnica golosa è anche la soluzione ottima
## Dijkastra - cammino minimo a partire da un nodo
L'algoritmo di Dijkstra ci permette di calcolare l'albero dei cammini minimi radicato in un nodo dato in input.

>[!multi-column]
>
>>[!blank]
>>**Input**
>>$G = < N, E>, s \in N$
>>Il grafo di input potrebbe essere orientato o non orientato
>
>>[!blank]
>>**Output**
>>$A = <N_s, E_s>$
>>con $N_s \subseteq N$ e $E_s \subseteq E$
>>Se il grafo è connesso allora $N_s$ ed $N$ coincidono.
>>Anche se l'input è un grafo non orientato l'output sarà comunque un albero orientato

considerando un qualsiasi cammino $c$ in $A$ che va da $s$ ad un qualsiasi nodo $x$, $c$ è il cammino di costo minimo da $s$ a $x$ in $G$.

Anche in questo caso applichiamo la tecnica golosa.
- Per prima cosa quindi definiamo lo **spazio delle soluzioni** $\mathcal{A}$ rilassando la struttura iniziale:
  $\mathcal{A} = <N_i, E_i>|N_i \subseteq N,E_i \subseteq E$ radicati in $s$ (non contiene tutti i nodi raggiungibili da $s$)
- Definiamo una soluzione iniziale:
  $A_0 = < \{s\}, \emptyset >$
- Definiamo **next**
  $\text{next}(\mathcal{A}_i <N_i, E_i>)$
  il suo funzionamento è uguale a prim, prendiamo u arco che parte da un nodo nell'albero e lo connettiamo con un nodo che non è nell'albero
- Definiamo **costo**
  $\text{costo}(\mathcal{A}_i)$
  nella funzione costo sta la differenza principale con prim: invece di prendere semplicemente il costo dell'arco, calcoliamo il costo di aggiunta di un nodo come la somma di tutti i pesi fino a quel nodo, a partire dalla radice.



>[!multi-column]
>
>>[!blank]
>>![[Algoritmi-1778339974145.webp]]
>
>>[!blank]
>>![[Algoritmi-1778340109475.webp]]
>
>>[!blank]
>>![[Algoritmi-1778340121953.webp]]

>[!multi-column]
>
>>[!blank]
>>![[Algoritmi-1778340139564.webp]]
>
>>[!blank]
>>![[Algoritmi-1778340147472.webp]]
>
>>[!blank]
>>![[Algoritmi-1778340158422.webp]]
``` python
def Dijkstra(g: GrafoP, source: int):
    padri: list[int] = [-1 for i in range(g.n)]
    pesi: list[int] = [sys.maxsize for i in range(g.n)]
    preso: list[bool] = [False for i in range(g.n)]
    curr: int = source
    padri[curr] = curr
    preso[curr] = True
    count = 1
    result = []
    mioheap: HeapModificabile = HeapModificabile(g.n)
    for a in g.adiacenti(curr):
        mioheap.ins(Pair(a.y, a.peso))
        padri[a.y] = curr
        pesi[a.y] = a.peso
    while not mioheap.evuoto():
        count += 1
        cp: Pair = mioheap.out()
        preso[cp.x] = True
        result.append((padri[cp.x], cp.x, cp.p))
        for a in g.adiacenti(cp.x):
            if not preso[a.y]:
                if padri[a.y] == -1:
                    mioheap.ins(Pair(a.y, a.peso + pesi[cp.x]))
                    padri[a.y] = cp.x
                    pesi[a.y] = a.peso + pesi[cp.x]
                elif pesi[a.y] > a.peso + pesi[cp.x]:
                    mioheap.update(Pair(a.y, a.peso + pesi[cp.x]))
                    padri[a.y] = cp.x
                    pesi[a.y] = a.peso + pesi[cp.x]
    return result
```

>[!bug] Dijkstra non funziona con pesi negativi
>Anche se avessimo un lower bound per i costi l'algoritmo di Dijkstra non funzionerebbe comunque: l'operazione di sommare a tutti i pesi il valore assoluto del minore di essi (shifting) invalida il problema, in quanto il calcolo del costo avviene su più nodi.
>Se abbiamo due cammini $c_1$ e $c_2$ che attraversano rispettivamente $i$ e $j$ archi tali che $\text{costo}(c_{1})<\text{costo}(c_{2})$ e $i>j$ potrebbe capitare che il calcolo del costo con l'aggiunta dell'offset invalidi la disuguaglianza, in quanto l'offset viene aggiunto $i$ volte al costo di $c_1$ mentre solo $j$ volte a $c_2$.
### Dijkstra è un ottimo globale
Nonostante applichi la tecnica Greedy l'algoritmo di Dijkstra è comunque l'ottimo globale.

Anche se il minimo albero coprente e l'albero di cammino minimo potrebbero non coincidere possiamo comunque lo stesso [[#Prim è un ottimo globale|schema]] di dimostrazione, in quanto esiste almeno un minimo albero coprente che contiene la soluzione finale dell'algoritmo di Dijkstra.

Sarà quindi sufficiente dimostrare che esista questo minimo albero ricoprente associato per induzione (invarianza).

- [>] passo 0
Al passo 0 la soluzione di Dijkstra contiene solo la sorgente $\to$ tutti gli alberi ricoprenti soddisfano la proprietà.

- [>] passo $i$
Supponiamo che tra il passo $i$ e il passo $i+1$ venga scelto dall'algoritmo l'aggiunta dell'arco $(y,x)$, anche in questo caso quindi si presentano due situazioni distinte:
- $(y,x) \in A^*_i$
- $(y,x) \notin A^*_i$
Nel primo caso possiamo procedere normalmente, validando la proprietà per il passo corrente e passando al successivo.
Nel secondo caso invece dobbiamo effettuare ulteriori osservazioni:
Essendo un grafo orientato non possiamo proseguire con la dimostrazione come con Prim.
>[!multi-column]
>
>>[!blank]
>>![[Algoritmi-1778357391980.webp]]
>
>>[!blank]
>>Essendo $A^*_i$ un albero ricoprente esiste un percorso che va dalla radice $s$ al nodo $x$ che come ultimo arco passa da $(w,x)$, con $v$ un nodo che potrebbe trovarsi sia in $N_i$ che al di fuori.
>>Costruiamo quindi $\hat{A}_i = A^*_i\backslash \{(w,x)\} \cup \{(y,x)\}$
>>A questo punto dobbiamo verificare se:
- $\hat{A}_i$ è connesso
  ora il nodo $x$ è raggiungibile tramite $y$, quindi è ancora raggiungibile da $s$
- Ha costo minore di $A^*_i$
  Per capire questo suddividiamo i cammini come segue:
  $$\displaylines{A^*_i:\overbrace{s \sim u \to }^{c_{1}} v \underbrace{ \sim w\to x}_{c_{2}} \\ \hat{A}_i : \underbrace{s \sim y \to x}_{c_{3}}}$$
  Il costo del cammino su $A^*_i$ sarà dato da $c_{1}+c_{2}$
  Non avendo per ipotesi costi negativi, sappiamo che $c_{2}$ ha un costo $\geq 0$
  Inoltre sappiamo che, essendo entrambi nel taglio $c_{1}\geq c_{3}$
  Possiamo concludere che $c_{1}+c_{2} \geq c_{3}$
$\implies c_{3}$ è il cammino minimo per raggiungere $x$ a partire da $s$.

## Kruskal - minimo albero ricoprente
Kruskal, come [[#Prim - minimo albero ricoprente|Prim]] è un algoritmo goloso che permette di calcolare l'albero ricoprente di cammino minimo, con l'unica differenza che, nell'applicazione dell'algoritmo goloso, nella fase di "rilassamento" della soluzione ammettiamo di poter lavorare con foreste (Per applicare Prim rilassavamo il numero di nodi, che nelle soluzioni correnti era minore di $N$).

Quindi dato in input $G = <N,E, \lambda>$ un grafo non orientato restituisce $\mathcal{A} = <N, E', \lambda>$, tale che $E' \subseteq E$ e $\mathcal{A}$ è una foresta durante l'esecuzione e un albero di cammino minimo alla situazione finale.

**Rilassiamo** la struttura iniziale:
$$
S = \{\mathcal{A} = <N',E',\lambda>| N' = N, E' \subseteq E, \mathcal{A} \text{ è una foresta}\}
$$
Definiamo il metodo **move** (next)
$$
\text{move}(A'= <N,E'>) = \{A'' = <N, E''> | E'' = E' \cup \{e\} \wedge e \in E /E' \wedge A'' \text{è una foresta}\}
$$
aggiungiamo l'arco che ha peso minore tra quelli rimasti

Definiamo il metodo **costo**
$$\text{costo}(A'') =\text{somma dei pesi sugli archi in } A''$$
Definiamo la **soluzione iniziale**
$$
S_{0} = \text{foresta che non ha archi, gli alberi sono tutte radici}
$$
Definiamo il **criterio di arresto**
$$
\text{abbiamo inserito }n-1\text{ archi } | \text{ li abbiamo inseriti tutti}
$$
>[!multi-column]
>
>>[!blank]
>>![[Algoritmi-1778758949698.webp]]
>
>>[!blank]
>>![[Algoritmi-1778758960878.webp]]
>
>>[!blank]
>>![[Algoritmi-1778758976581.webp]]

>[!multi-column]
>
>>[!blank]
>>![[Algoritmi-1778758992681.webp]]
>
>>[!blank]
>>![[Algoritmi-1778759001703.webp]]
>
>>[!blank]
>>![[Algoritmi-1778759011548.webp]]

La logica alla base è quella di mettere in ordine crescente gli archi rispetto al peso e per ogni arco verifichiamo se inserirlo nella soluzione corrente genera un ciclo: se non lo crea lo aggiungiamo, altrimenti lo saltiamo.
L'inserimento in sé non è un problema, è costante sia per matrice di adiacenza che per liste di adiacenza, la parte computazionalmente complessa è la verifica della chiusura di un ciclo.
In realtà per come funziona il nostro algoritmo possiamo utilizzare l'ipotesi che il passo precedente è già aciclico, quindi dobbiamo semplicemente verificare che l'aggiunta del corrente crei un ciclo.

Banalmente verifichiamo se nella soluzione corrente è presente un cammino che collega i due estremi dell'arco da connettere, questo costerebbe quanto una visita a partire da uno dei due estremi dell'arco, ma dovrebbe essere fatto per ogni arco, ottenendo un costo totale di $m \cdot n$ che è già più alto della complessità di Prim ($m \log n$).

La parte di ordinamento di Kruskal ha un costo di $m \log m$, ma essendo $m \leq n^2$, nel caso peggiore ha una complessità di $2m \log n \approx m \log n$, per raggiungere una complessità almeno comparabile con Prim dobbiamo quindi trovare il modo di effettuare aggiunte e verifiche della ciclicità con complessità costante.

È importante notare come un arco crea un ciclo solo se congiunge nodi della stessa componente massimale, se congiunge due componenti massimali diverse non può creare un ciclo.

Sfruttiamo quindi la [[Strutture dati#Union find|union-find]] per rappresentare la foresta come un insieme di partizioni di nodi.
Quindi rappresentiamo la soluzione corrente con la union-find ed effettuiamo:
- `union` delle componenti massimali quando aggiungiamo un arco
- `find` nell'insieme a cui appartiene il primo estremo
- `find` nell'insieme a cui appartiene il secondo estremo
La complessità di questa fase sarà quindi rappresentata da due find, che, supponendo di utilizzare una [[Strutture dati#Union by size - Bilanciamento QuickFind|union-find con quick find]], hanno complessità costante ed effettuiamo $n-1$ union, dal costo di $n \log n$.
Il costo dell'aggiunta e verifica della presenza di cicli sarà quindi di $n \log n$, minore della complessità dell'ordinamento, che quindi, asintoticamente domina sul costo dell'intero algoritmo.
``` python
def kruskal(g: GrafoNOP):
    archiordinati = sorted(g.archi(), key=_peso) # m log n
    forest: UnionFind = UnionFind(g.n) # rappresento la foresta usando la UnionFind
    result = [] # risultato rappresentato dalla lista degli archi
    count = 0
    for x, y, p in archiordinati: # entriamo m volte
        if forest.find(x) != forest.find(y): # può dare true solo n-1 volte (il test ha un costo costante)
            result.append((x, y, p))
            forest.union(forest.find(x), forest.find(y)) # complessivamente n log n
            count += 1
        if count == g.n - 1:
            return result
    return []
```

>[!attention] Lavori in corso
# Programmazione dinamica
Mentre nel [[#Divide et impera]] suddividevamo il problema per risolvere singolarmente i sottoproblemi in modo indipendente per poi ricomporre la soluzione finale, nella **programmazione dinamica** la risoluzione dei sottoproblemi non è indipendenti, al contrario, le porzioni di soluzione comune vengono riutilizzati e non ricalcolati da zero. La differenza sta proprio nell'indipendenza della risoluzione dei sottoproblemi.

*es.* Fibonacci
>[!multi-column]
>
>>[!important] Divide et impera
>>divido il problema nel calcolo di n-1 e n-2, ma per risolvere n-1 ho già risolto n-2, ma in divide et impera non lo sfrutto.
>
>>[!important] Programmazione dinamica
>>inizia risolvendo il problema di Fibonacci sugli elementi di taglia più piccola, che vengono poi sfruttati per calcolare i successivi.

```
Fib = [0|i in range(n)]

# supponiamo n = 10
Fib = [0,0,0,0,0,0,0,0,0,0]
Fib = [1,1,0,0,0,0,0,0,0,0]
```
devo trovare una equazione che mi permetta di calcolare il valore dei successivi a partire dai precedenti per ogni passo
```
Fib[i] = Fib[i-1] + Fib[i-2]
```
i primi due li ho già calcolati
```
Fib = [1,1,2,0,0,0,0,0,0,0]
Fib = [1,1,2,3,0,0,0,0,0,0]
Fib = [1,1,2,3,5,0,0,0,0,0]
```

L'idea alla base è quindi quella di
1. creare una matrice della soluzione
2. trovare una formula che mi permetta di riempire la matrice, risolvendo i problemi di taglia più grande a partire da quelli di taglia più piccola già calcolati.
## Floyd - calcolo delle distanze minime
L'obbiettivo di questo algoritmo è quello di calcolare le **distanze** (non cammini, ma solo i costi), in modo efficiente, trattando pesi negativi.
Per applicare la programmazione dinamica abbiamo bisogno di definire la matrice della soluzione:
matrice riempita con le distanze $\to$ la cella `D[i,j]` contiene la distanza tra il nodo `i` e il nodo `j`.
Dobbiamo quindi trovare una formula che mi permetta di riempire la matrice.
### Applicazione incorretta della programmazione dinamica per Floyd
Una prima soluzione limitata potrebbe essere quella di applicare [[#Dijkastra - cammino minimo a partire da un nodo|Dijkstra]] per ogni nodo per calcolare le distanze, ma quest'ultimo non tratta pesi negativi per sua costruzione e in alcuni casi è poco efficiente.

La divisione in sottoproblemi della programmazione dinamica potrebbe, per esempio, consistere nel considerare cammini di dimensione minore.
La nostra matrice sarebbe quindi tridimensionale tridimensionale:
`D[i,j,l]` di taglia $N^3$ con `l` numero di archi nei cammini.

Il caso base sarebbe la matrice di livello 1: la cella `[i,j,l]` conterrà il costo dell'arco di costo minimo, che connette i nodi `i` e `j` con `l=1`.
Se il cammino non esiste conterrà $\infty$

A questo punto definiamo la formula che mi permette di riempire il resto delle celle della matrice:
$$
D[i,j,l] = \min_{h \in N}\{D[i,h,l-1] + D[h,j,1]\}
$$
>[!multi-column]
>
>>[!blank]
>>La cella `D[i,j,l]`, che rappresenta il costo del cammino da `i` a `j`, passando per `l` archi:
>>per ogni nodo $h \in N$ andiamo a calcolare quale sia il costo del cammino da `i` ad `h` tale che passa da `l` archi e ci andiamo a sommare il costo del cammino da `h` a `j`. Poi verifichiamo qual'è il minimo di questi cammini.
>
>>[!blank]
>>![[Algoritmi-1778781538617.webp|center|300]]

Nel caso peggiore devo trovare il minimo tra $n$ archi, per un costo di $n$.
Questa operazione va fatta per tutte le celle della matrice $n\cdot n^3 = n^4$.

Tecnicamente questo è un algoritmo risolutivo, ma ha una complessità davvero troppo alta.
### Applicazione corretta di Floyd
La creazione dell'output implica la scansione di tutta la matrice, quindi non possiamo diminuire $n^3$, dobbiamo quindi lavorare sul calcolo del successivo (calcolo di `D[i,j,k]` a partire dai precedenti).

L'algoritmo di Floyd ci permette di effettuare questo calcolo con complessità costante.

>[!important] Cammino $k$vincolato
>un cammino $c$ da $i$ a $j$ si dice $k$ vincolato se tutti i nodi intermedi di $c$ hanno indice $<k$

Immaginiamo quindi di numerare tutti i nodi da $0$ a $n-1$.

Cambiamo l'interpretazione che diamo alla matrice:
- `i` e `j` rimangono identici
- `l` la chiamiamo `k` e rappresenta l'indice massimo dei nodi attraversati durante il cammino che connette `i` a `j`
Quindi la cella `D[i,j,k]` conterrà il costo del cammino $k$vincolato che collega `i` e `j`.
La matrice di livello $k$ rappresenta tutti i costi dei cammini composti da nodi intermedi di indice $<k$.

Il caso base sarà la matrice di livello $k=0$, nessun nodo ha indice minore di $0$ quindi nessuno, otteniamo la matrice di adiacenza con tutti $0$ in diagonale.

Arrivati alla matrice di livello $k$ dobbiamo calcolare il valore di tutte le celle `D[i,j,k]` e otteniamo la possibilità di utilizzare i nodi con indice pari a $k-1$.

Al passo precedente sappiamo che il nodo `j` può essere raggiunto dal nodo `i` tramite un cammino che utilizza i nodi con indice minore di $k-1$.
Dobbiamo capire se l'aggiunta del nodo $k-1$ permette la creazione di un cammino di costo minore.

![[Algoritmi-1778784759950.webp|center|700]]

quindi si presentano due situazioni possibili:
- il cammino calcolato per la matrice di ordine precedente `D[i,j,k-1]` è quello minimo
- l'aggiunta del nodo di indice `k` permette di trovare un cammino con costo minore

Ovviamente dobbiamo scegliere il minore tra i due:
$$D[i,j,k] =\text{min} (D[i,j,k-1], D[i,k-1,k-1] + D[k-1,j,k-1]$$
>[!important] La cosa importante da tenere in considerazione è che il costo di $c_{2}$ e $c_{3}$ sono celle già riempite e quindi è possibile utilizzare i dati già calcolati senza bisogno di doverli ricalcolare.

A questo punto la condizione di chiusura è proprio che abbiamo aggiunto tutti i nodi possibili e quindi $k=n$ e l'output dell'algoritmo sarà proprio la matrice quadrata di livello massimo.

>[!quote] È possibile eseguire l'algoritmo in place senza bisogno di una matrice tridimensionale.

``` python
def floyd(g: GrafoP):
    M = [[sys.maxsize for i in range(g.n)] for j in range(g.n)]  # Calcola matrice di adiacenza
    for i in range(g.n):
        M[i][i] = 0 // aggiungo il primo passo: diagonale pari a 0
    for x, y, p in g.archi():
        M[x][y] = p
    for x in range(len(M)):
        for u in range(len(M)):
            for v in range(len(M)):
                if M[u][v] > M[u][x] + M[x][v]:
                    M[u][v] = M[u][x] + M[x][v]
    return M
```

L'istruzione dominante è data dai 3 cicli for innestati che scorrono la matrice, senza condizioni di uscita anticipate, abbiamo quindi una complessità pari a $\Theta(n^3)$.
## LCS - Sottosequenza comune più lunga
Date due stringhe (sequenze di caratteri) $X$ e $Y$ dobbiamo trovare una terza stringa: la sottosequenza comune più lunga, i simboli di quest'ultima appaiono sia in $X$ che in $Y$.
$|X| = m$ e $|Y| = n$

*es.*
Date `X = [ABCBDAB]` e `Y = [BDCABA]` la sottosequenza comune più lunga è `BCBA`

*es. di applicazione*
Questo è un algoritmo particolarmente utile per esempio nell'analisi del DNA

L'algoritmo risolutivo più semplice consiste nel provare tutte le sequenze possibili e vedere se sono presenti in entrambe le stringhe per poi prendere solo la più grande di queste, ma ovviamente ha una complessità troppo grande, ci sono $2^m$ stringhe possibili.
Per ognuna di queste dovremmo andare a generarla e verificare se è una sottosequenza comparandola con gli elementi di $Y$, costo totale di $O(n \cdot 2^m)$.

Possiamo utilizzare la [[#Programmazione dinamica|programmazione dinamica]]: la soluzione del problema contiene al suo interno le soluzioni dei sotto problemi.

Definiamo due nuove stringe $X_i$ e $Y_j$ che sono i prefissi di $X$ e $Y$ fino all' $i/j$ esimo carattere.

Per risolvere questo problema risulta molto utile trovare prima la lunghezza della sottosequenza più lunga.
### Lunghezza della sottosequenza comune più lunga
Creiamo una matrice $m \cdot n$ tale che la cella `c[i,j]` conterrà la lunghezza della sottosequenza più lunga comune a $X_i$ e $Y_j$.

**Caso base**
se una delle due sequenze prefisse è composta da 0 elementi non ci possono essere sottosequenze comuni, di conseguenza la matrice al passo iniziale sarà composta da tutti 0 nella prima riga e nella prima colonna:
![[Algoritmi-1778868379895.webp|center|400]]
**Proprietà induttiva**
La cella `c[i,j]` verrà calcolata secondo la seguente formula:
$$
c[i,j] = \left\{\begin{array}{l}c[i-1, j-1] + 1 & \text{se }X[i] = Y[i] \\ \max(c[i,j-1], c[i-1,j]) & \text{altrimenti}\end{array}\right.
$$
Se i caratteri corrispondenti di indice pari rispettivamente al numero di riga e di colonna sono diversi $(X[i] \neq Y[j])$ allora la cella corrente sarà pari al massimo tra la cella sovrastante e la cella alla sinistra della corrente, altrimenti $(X[i] = Y[j])$ il valore della cella corrente sarà pari alla cella in diagonale $+1$.
>[!multi-column]
>
>>[!blank]
>>![[Algoritmi-1778868743812.webp]]
>
>>[!blank]
>>![[Algoritmi-1778868713745.webp]]

Possiamo quindi decidere di riempire la matrice scorrendo le righe o le colonne, non fa alcuna differenza.
Ha un costo di $m \cdot n$ molto meglio del brute force.

#dimostrazione 
**perché funziona**
principio di induzione

dimostriamo le due parti separatamente
- caso $x[i] = y[j]$
poniamo come ipotesi $x[i] = y[i]$
dobbiamo dimostrare che `c[i,j] = c[i-1,j-1]+1`
dividiamo in due pezzi $\leq$ e $\geq$
se dimostriamo entrambe allora abbiamo dimostrato l'uguaglianza:

Supponiamo per ipotesi che esista tra tutti i possibili prefissi delle stringhe di partenza una sottosequenza $S$ t.c.
1. S è una sottosequenza di $X_{i-1} \wedge Y_{j-1}$ 
2. $|S|=c[i-1,j-1]$

$c[i,j]\geq c[i-1,j-1]+1$
Considero una seconda stringa $S'$ t.c. 

>[!multi-column]
>
>>[!blank]
>>$S'= S \text{ concat } X[i]$
>>Sapendo che tutti i caratteri di $S$ appaiono nel prefisso $S'$ possiamo notare che:
>>$X_i = \overbrace{X_{i-1}}^S + X[i]$
>
>>[!blank]
>>$S'= S \text{ concat } Y[j]$
>>Sapendo che tutti i caratteri di $S$ appaiono nel prefisso $S'$ possiamo notare che:
>>$Y_j = \overbrace{Y_{j-1}}^S + Y[j]$

Siccome $S'$ ha come carattere aggiuntivo $X[i] = Y[j]$ e hanno la stessa stringa come prefisso allora $S'$ ha per forza lunghezza $|S|+1$.

$c[i,j] \leq c[i-1,j-1]+1$
per assurdo supponiamo che esista una sequenza $S'$ di $X_i$ e $Y_j$ che sia di lunghezza $c[i-1,j-1]+2$
Se dovesse esistere vorrebbe dire che abbiamo due caratteri comuni da aggiungere, ma se $X[i] = Y[j]$ vorrebbe dire che l'altro carattere comune sarebbe in $S$ e quindi sarebbe già stato considerato in $S$, che, a questo punto non sarebbe la sottosequenza più lunga fino a $X_{i-1}$ e $Y_{j-1}$: abbiamo trovato l'assurdo.

- caso $X[i] \neq Y[j]$
> [!abstract] Tesi: Caso $X[i] \neq Y[j]$
> Se gli ultimi due caratteri dei prefissi sono diversi ($X[i] \neq Y[j]$), allora la lunghezza della Sottosequenza Comune Più Lunga (LCS) è data da:
> $$c[i,j] = \max(c[i-1, j], c[i, j-1])$$

> [!info] Dimostrazione Formale
> Chiamiamo $Z$ la nostra LCS dei prefissi $X_i$ e $Y_j$. 
> Supponiamo che $Z$ abbia lunghezza $k$ (quindi $c[i,j] = k$).
> Sia $Z[k]$ l'ultimo carattere di questa sottosequenza.
> 
> Dato che per ipotesi $X[i] \neq Y[j]$, abbiamo due scenari mutualmente esclusivi riguardo all'ultimo carattere $Z[k]$:
> 
> - **Caso 1: $Z[k] \neq X[i]$**
>   Il carattere $X[i]$ è inutile per formare $Z$. Quindi, $Z$ è in realtà una sottosequenza comune di $X_{i-1}$ e $Y_j$. Di conseguenza, la lunghezza $k$ non può essere maggiore della lunghezza della LCS tra $X_{i-1}$ e $Y_j$:
>   $$c[i,j] \le c[i-1, j]$$
> 
> - **Caso 2: $Z[k] \neq Y[j]$**
>   Il carattere $Y[j]$ è inutile per formare $Z$. Quindi, $Z$ è in realtà una sottosequenza comune di $X_i$ e $Y_{j-1}$. Di conseguenza:
>   $$c[i,j] \le c[i, j-1]$$
> 
> Siccome $X[i]$ e $Y[j]$ sono diversi, **almeno una** di queste due affermazioni deve essere vera. Possiamo unirle affermando che $c[i,j]$ è al massimo pari al più grande tra i due valori:
> $$c[i,j] \le \max(c[i-1, j], c[i, j-1])$$
> 
> ---
> **Dimostrazione inversa:**
> D'altra parte, qualsiasi sottosequenza comune a $X_{i-1}$ e $Y_j$ (o a $X_i$ e $Y_{j-1}$) è *automaticamente* anche una sottosequenza comune a $X_i$ e $Y_j$, perché aggiungere un carattere alla fine di una stringa non invalida le sottosequenze già trovate. Quindi vale che:
> - $c[i,j] \ge c[i-1, j]$
> - $c[i,j] \ge c[i, j-1]$
> 
> Il che implica che $c[i,j]$ deve essere almeno pari al loro massimo:
> $$c[i,j] \ge \max(c[i-1, j], c[i, j-1])$$

> [!check] Conclusione
> Avendo dimostrato sia il $\le$ che il $\ge$, per il principio di antisimmetria l'unica conclusione possibile è l'uguaglianza:
> $$c[i,j] = \max(c[i-1, j], c[i, j-1])$$

> [!question] Osservazione
> Perché non consideriamo anche la cella in diagonale nel calcolo del massimo? Ovvero, perché non facciamo:
> $$c[i,j] = \max(c[i-1, j], c[i, j-1], c[i-1, j-1])$$
> Da un punto di vista logico non è sbagliato, ma è **matematicamente ridondante** e farebbe fare all'algoritmo un controllo inutile.
> 
> Il valore $c[i-1, j-1]$ rappresenta la lunghezza della LCS scartando sia $X[i]$ che $Y[j]$. Sappiamo per certo, però, che aggiungere un carattere a una stringa non può mai far diminuire la lunghezza di una sottosequenza comune. Quindi è garantito che:
> - $c[i-1, j-1] \le c[i-1, j]$
> - $c[i-1, j-1] \le c[i, j-1]$
> 
> Dato che la cella in diagonale ($i-1, j-1$) sarà **sempre minore o uguale** alla cella sopra ($i-1, j$) o alla cella a sinistra ($i, j-1$), inserirla all'interno della funzione $\max()$ non modificherà mai il risultato finale. Per questo motivo la si ignora, ottimizzando la formula.

**Passo finale**
La cella `c[m,n]` conterrà il risultato del nostro problema: la lunghezza della sottosequenza comune più lunga in quanto $X = X_m$ e $Y = Y_n$.
### Trovare la sottosequenza a partire dalla lunghezza
Una volta calcolata la matrice e conoscendo la lunghezza della sottosequenza sarà molto più semplice risalire alla lista di elementi che compongono la sottosequenza comune di massima lunghezza.

Utilizziamo la regola precedentemente utilizzata per risalire alla soluzione:
partendo dalla cella `c[m,n]` effettuiamo una visita sulla matrice, spostandoci in diagonale se $X[i] == Y[j]$ se l'elemento in diagonale è pari alla cella corrente $-1$ aggiungendolo alla soluzione, altrimenti ci spostiamo sul massimo tra la superiore e quella a sinistra, se sono uguali è indifferente, vuol dire che ci sono più sequenze con la stessa lunghezza.
Quando $i=0$ o $j = 0$ abbiamo concluso la visita e dobbiamo invertire la soluzione e poi restituire il risultato.

``` python
def lcs(X, Y):
    # find the length of the strings
    m = len(X)
    n = len(Y)

    # declaring the array for storing the dp values
    L = [[None] * (n + 1) for i in range(m + 1)]

    # Following steps build L[m+1][n+1] in bottom up fashion
    # Note: L[i][j] contains length of LCS of X[0..i-1]
    # and Y[0..j-1]
    for i in range(m + 1):
        for j in range(n + 1):
            if i == 0 or j == 0:
                L[i][j] = 0
            elif X[i - 1] == Y[j - 1]:
                L[i][j] = L[i - 1][j - 1] + 1
            else:
                L[i][j] = max(L[i - 1][j], L[i][j - 1])

    # --- Ricostruzione della sottosequenza ---
    lcs_str = []
    i, j = m, n

    while i > 0 and j > 0:
        if X[i - 1] == Y[j - 1]:
            # Questo carattere fa parte della LCS
            lcs_str.append(X[i - 1])
            i -= 1
            j -= 1
        elif L[i - 1][j] > L[i][j - 1]:
            # Veniamo dalla riga sopra
            i -= 1
        else:
            # Veniamo dalla colonna a sinistra
            j -= 1

    # I caratteri sono stati aggiunti al contrario, quindi invertiamo
    lcs_str.reverse()

    return L[m][n], "".join(lcs_str)
```
## Calcolare la distanza tra due parole
Con questo algoritmo abbiamo l'obbiettivo di misurare quanto sono diverse due parole a livello sintattico, non semantico.
Può essere utilizzato per:
- *es.* correzione nella scrittura
- *es.* riconoscimento dei caratteri da testi stampati (ocr)

La definizione di distanza potrebbe dipendere dal contesto in cui viene applicata, per esempio per la correzione della scrittura potrebbe essere più rilevante un errore derivato dalla vicinanza
definiamo la distanza fisica tra due tasti della tastiera oppure nel caso dell'ocr potrebbe essere più rilevante la forma del carattere.

In generale abbiamo delle operazioni che potrebbero avere un costo variabile, ma per il momento manteniamo per ipotesi un costo unitario per ogni operazione effettuata per passare dalla prima parola alla seconda:
- **inserimento**
- **cancellazione**
- **sostituzione**

Definiamo quindi:
>[!important] edit distance
>numero minimo di modifiche elementari per trasformare una stringa in un altra

formalmente non consideriamo solo il numero minimo di operazioni, ma una vera e propria sequenza di operazioni, in quanto l'ordine di esecuzione delle operazioni potrebbe variare il risultato.
In questo caso però, considerando solo queste 3 operazioni non importa l'ordine in cui le effettuiamo.
Possiamo quindi riscrivere qualsiasi sequenza in modo tale che le operazioni siano applicate dalla prima all'ultima lettera.

Una volta che abbiamo identificato le operazioni da eseguire per passare dalla prima riga alla seconda sommiamo i loro costi e troviamo la sequenza che ha il costo minore, che prenderà il nome di **edit distance**.
Sotto l'ipotesi di costo unitario l'edit distance viene chiamata **distanza di Levinstein**.

>[!important] Formale
>Siano $X$ e $Y$ due stringhe di lunghezza $m$ ed $n$:
>$$X = x_{1},x_{2},\dots,x_m \hspace{8ex} Y = y_{1},y_{2},\dots,y_n$$
>Vogliamo calcolare la "distanza" tra $X$ e $Y$, ovvero il minimo numero delle seguenti operazioni elementari che permetta di trasformare $X$ in $Y$
>- `inserisci(a)`
>  Inserisci il carattere $a$ nella posizione corrente della stringa
>- `cancella(a)`
>  Cancella il carattere $a$ dalla posizione corrente della stringa
>- `sostituisci(a,b)`
>  Sostituisci il carattere $a$ con il carattere $b$ nella posizione corrente della stringa

>[!question] Osservazione
>Date due stringhe possiamo definire un bound **massimo** per il valore sulla distanza.
>Cancellando completamente i caratteri della prima parola e inserendo tutti i caratteri della seconda abbiamo un costo di $m+n$.
>Se invece considerassimo anche la sostituzione, considerando come $m>n$, dobbiamo effettuare almeno $n$ sostituzioni e il restante rimozioni per un costo di $n+(m-n) =m$

cerchiamo un algoritmo che sia in grado di fare questo usando la [[#programmazione dinamica]].

Definiamo con $\delta(X,Y)$ la distanza tra due parole $X$, $Y$ e $X_i$, $Y_i$ prefissi delle parole.
I sottoproblemi per applicare la programmazione dinamica diventano: calcolare $\delta(X_i,Y_j)$ tale per cui $\delta(X,Y) = \delta(X_m,Y_n)$.

Manterremo quindi le informazioni in una tabella $(m+1)\times (n+1)$ e la cella `D[i,j]` conterrà il valore $\delta(X_i,Y_j)$.

**caso base**
>[!multi-column]
>
>>[!blank]
>>Il caso base è rappresentato da una delle due stringhe vuote: in questi casi il numero di operazioni elementari è rappresentato dal costo di aggiunta degli elementi fino all'indice $i$ della parola opposta.
>>Possiamo quindi riempire in questo modo la prima riga e la prima colonna.
>
>>[!blank]
>>![[Algoritmi-1779185373031.webp|center|300]]

**caso induttivo**
La seguente proprietà è applicabile solo nel caso di costi unitari.

Distinguiamo due casi
- $x_i = y_j$
Se i due nuovi elementi da confrontare sono uguali non dobbiamo effettuare nessuna operazione: il valore della distanza sarà pari al minimo costo per trasformare $X_{i-1}$ in $Y_{j-1}$
```
D[i,j] = D[i-1,j-1]
```

- $x_i \neq y_j$
In questo caso la trasformazione da $X_i$ a $Y_j$ può avvenire in vario modo, in base all'operazione che effettuiamo:

`inserisci(`$y_j$`)` 
ipotizziamo di aver già reso uguali i due prefissi $X_i$ e $Y_{j-1}$
se inseriamo l'elemento $y_j$ il costo è pari a `D[i,j-1]` a cui aggiungiamo il costo dell'inserimento
```
D[i,j] = D[i,j-1] + 1
```

`cancella(`$x_i$`)`
ipotizziamo di aver già reso uguali i due prefissi $X_{i-1}$ e $Y_j$
se eliminiamo l'elemento $x_i$ il costo è pari a `D[i-1,j]` a cui aggiungiamo il costo dell'eliminazione
```
D[i,j] = D[i-1,j] + 1
```

`sostituisci(`$x_i,y_j$`)`
ipotizziamo di aver già reso uguali i due prefissi $X_{i-1}$ e $Y_{j-1}$
se sostituiamo gli elementi, il costo è pari a `D[i-1,j-1]` a cui aggiungiamo il costo della sostituzione
```
D[i,j] = D[i-1,j-1] + 1
```

![[Algoritmi-1779204812634.webp|center|400]]

La scelta dell'operazione da effettuare dipende da quale di esse porta ad avere un costo minore, possiamo quindi formalizzare la proprietà induttiva come
$$
\left\{\begin{array}{l}D[i,j] = D[i-1,j-1] & x_i = y_j \\ D[i,j] = 1+ \min (D[i,j-1],D[i-1,j],D[i-1,j-1]) \hspace{4ex} & x_i \neq y_j\end{array}\right.
$$

![[Algoritmi-1779205951193.webp|center|400]]

``` python
def editdistance(str1, str2, m, n):
    # Create a table to store results of subproblems
    dp = [[0 for x in range(n + 1)] for x in range(m + 1)]

    # Fill d[][] in bottom up manner
    for i in range(m + 1):
        for j in range(n + 1):

            # If first string is empty, only option is to
            # insert all characters of second string
            if i == 0:
                dp[i][j] = j  # Min. operations = j

            # If second string is empty, only option is to
            # remove all characters of second string
            elif j == 0:
                dp[i][j] = i  # Min. operations = i

            # If last characters are same, ignore last char
            # and recur for remaining string
            elif str1[i - 1] == str2[j - 1]:
                dp[i][j] = dp[i - 1][j - 1]

            # If last character are different, consider all
            # possibilities and find minimum
            else:
                dp[i][j] = min(dp[i][j - 1] + 1,  # Insert (+1)
                                   dp[i - 1][j] + 1,  # Remove (+1)
                                   (1 if str1[i - 1] == str2[j - 1] else 0) + dp[i - 1][j - 1])  # Replace

    return dp[m][n]
```

**complessità**
La complessità sarà data da  $m \times n$ sia temporale che spaziale, anche se potrebbe essere ottimizzato:
se il mio obbiettivo è solo calcolare il costo mi basta mantenere riga corrente e riga precedente, abbassando la complessità spaziale a lineare. La temporale rimarrebbe comunque quella.

>[!question] Come per LCS procedendo a retroso possiamo ricostruire la prima parola a partire dalla seconda.

## Knapsack 0-1
È un problema di ottimizzazione:
L'obbiettivo è quello di massimizzare il valore di uno zaino che può contenere $W$ chili di peso di elementi scelti da una lista data $I_0,I_{1},\dots,I_{n-1}$
Ogni elemento ha due attributi:
- $v_i$ - valore (beneficio) che abbiamo nel portare l'oggetto $i$
- $w_i$ - peso del singolo oggetto $i$

Il problema di Knapsack esiste in varie versioni: noi analizzeremo **Knapsack 0-1** in cui gli oggetti non possono essere divisi e lo risolveremo con la [[#programmazione dinamica]], quindi la soluzione di ordine $k$ deve essere costruibile a partire dalla soluzione $k-1$.

In questo caso non ha senso calcolare la soluzione al $k$esimo problema limitando gli item "visibili" a quello di indice $k$ come abbiamo fatto fino ad ora nell'applicazione della programmazione dinamica.

Definiamo i sottoproblemi quindi a partire da due dimensioni diverse:
- ordine dei prodotti
- calcolo del beneficio dei prodotti fino all'indice $k$ avendo uno zaino di capacità $W$

Definiamo quindi i sottoproblemi supponendo di avere uno zaino con grandezza variabile, tramite una matrice $n \times W$ in cui scorriamo le colonne aumentando progressivamente il volume dello zaino e scorrendo le righe abbiamo accesso a più item.
Ogni singola cella `B[k,w]` rappresenta il massimo beneficio ottenibile con gli item fino all'indice $k$ ed uno zaino che può contenere $w$ chili.
Ovviamente la soluzione si troverà nella cella `B[n,W]`.

**caso base**
La prima riga (nessun item) e la prima colonna (0 chili di zaino) contengono solo 0.
![[Algoritmi-1779207994741.webp|center|500]]

**caso induttivo**
Seguiremo la proprietà
$$
\left\{\begin{array}{l}B[k,w] = B[k-1,w] & w_k > w \\ B[k,w] = \max(B[k-1,w], B[k-1,w-w_k] + v_k) \hspace{4ex} & \text{altrimenti}\end{array}\right.
$$
Se il peso dell'item $k$ è maggiore dello spazio disponibile il miglior beneficio sarà uguale all'elemento precedente, in quanto semplicemente non possiamo aggiungerlo.
Altrimenti dobbiamo verificare cosa conferisce il migliore beneficio:
- non aggiungere l'elemento $B[k-1,w]$ lasciando quindi il miglior beneficio pari al precedente
- aggiungere l'elemento $B[k-1,w-w_k] + v_k$ aggiungendo il beneficio corrente al miglior beneficio eliminando lo spazio occupato allo spazio corrente con un item in meno

![[Algoritmi-1779208668641.webp|center|500]]

``` python
def knapsack(W, wt, val, n):
	K = [[0 for x in range(W + 1)] for x in range(n + 1)]

	# Build table K[][] in bottom up manner
	for i in range(n + 1):
		for w in range(W + 1):
			if i == 0 or w == 0:
				K[i][w] = 0
			elif wt[i-1] <= w:
				K[i][w] = max(val[i-1] + K[i-1][w-wt[i-1]], K[i-1][w])
			else:
				K[i][w] = K[i-1][w]
	return K[n][W]


# Driver code
val = [60, 100, 120]
wt = [10, 20, 30]
W = 50
n = len(val)
print(knapsack(W, wt, val, n))
```

**complessità**
L'algoritmo è composto da due cicli for innestati, quindi vengono eseguite un numero di operazioni pari a $n \cdot W$, ma con una analisi più approfondita sulla complessità calcolata sulla dimensione dell'input la situazione cambia: $W$ è un valore numerico, che in bit ha dimensione $\log_2(W)$. Questo tipo di algoritmi prende il nome di **complessità pseudo polinomiale** e la sua reale complessità è $O(n \cdot \log_2(W))$.
# Algoritmi di codifica
Per comprimere un dato sfruttiamo le caratteristiche del linguaggio, anche se in modo implicito.
Normalmente ogni codice ascii per essere rappresentato utilizza 8 bit, indipendentemente da quanto quel carattere appare all'interno del testo.
Questo approccio mi permette di effettuare accessi diretti in qualsiasi punto del file, quindi è ottimo per il suo utilizzo, ma implica avere moltissimo spazio sprecato.

L'obbiettivo degli algoritmi di codifica è quindi quello di poter rappresentare dati con meno bit possibile senza perdere informazioni.

Per implementarli non ci interessa la grandezza in bit dello specifico carattere, ma è importante che lo spazio complessivo occupato da tutto il testo sia minore dell'originale.
Possiamo sfruttare questa proprietà per implementare una codifica che ci permetta di usare meno bit per i caratteri più frequenti, anche se più bit per i caratteri più frequenti.

*es.*
Potremmo usare per la "k" 12 bit, ma invece per la "e" posso usarne di meno, 4 bit.
Se la "k" ha una frequenza di occorrenza dell'1% e la "e" del 20%

|     | Lunghezza fissa | Lunghezza variabile |
| --- | --------------- | ------------------- |
| k   | $8 \cdot 0,01$  | $12 \cdot 0,01$     |
| e   | $8 \cdot 0,2$   | $4 \cdot 0,2$       |
| tot | $1,68$          | $0,92$              |

>[!important] se consideriamo le frequenze la lunghezza media della rappresentazione in bit migliora

>[!bug] Se hanno lunghezza variabile risulta essere più complesso capire quando si interrompe la codifica di un carattere e inizia quella del successivo.

>[!multi-column]
>
>>[!blank]
>>*es.*
>>in questo modo abbiamo ambiguità: la stessa stringa di bit può rappresentare diversi caratteri
>
>>[!blank]
>>![[Algoritmi-1779292935527.webp|center|300]]

Una possibile soluzione sarebbe quella di inserire una stringa di bit "riservati" utilizzati per rappresentare la fine del carattere, ma questo porta ad occupare molto spazio inutile.

>[!important] Prefix free code
>Potremmo invece definire un set di bit per rappresentare i caratteri che rispettano la seguente proprietà:
nessuna codifica di un simbolo contiene la codifica di un altro simbolo come prefisso.
>Chiameremo questo tipo di codifica **prefix free code**

>[!multi-column]
>
>>[!blank]
>>Se la codifica è un prefix code può essere rappresentato come un **albero dei prefissi**
>>Ad ogni foglia è associata a un simbolo che vogliamo codificare (come un automa a stati finiti).
>>La decodifica è una navigazione da una radice ad una foglia, quindi decodificare un testo di $m$ bit avrà un costo lineare, ogni bit rappresenterà la `next()` e se troviamo una foglia ripartiamo dalla radice.
>
>>[!blank]
>>![[Algoritmi-1779294627145.webp|center|400]]

Anche se la codifica può avere una complessità maggiore, in molti casi ha più importanza che sia veloce la decodifica:
- *es.* visione in streaming -> il tempo di decodifica deve essere minore di quello di visualizzazione, per la codifica abbiamo tutto il tempo che voglio
- *es.* in alcune applicazioni no -> diretta, la qualità è bassa, non abbiamo tempo per la codifica

---

Per cercare un algoritmo di compressione che utilizzi prefix code dobbiamo prima stabilire cosa caratterizza un algoritmo migliore rispetto ad un altro:
sarà migliore rispetto al testo che voglio comprimere, non in assoluto e ancora più importante il codice necessario per la compressione e la decompressione deve essere più piccolo del guadagno che ne deriva, altrimenti non avremo un miglioramento dello spazio occupato.
Dobbiamo quindi confrontare i possibili alberi di bit della codifica e trovare il migliore.
Possiamo misurare quanto occuperà il testo tramite il numero medio di bit utilizzato per rappresentare un simbolo nel testo.
Dato un albero dei prefissi $T$ posso misurare il numero medio di bit come
$$
B(T) = \sum f(c) \cdot dT(c)
$$
con $f(c)$ frequenza del carattere $c$ e $dT(c)$ profondità della foglia $c$ nell'albero $T$ (numero di simboli utilizzato).
Per eseguire questo confronto ho quindi bisogno della frequenza di ogni singolo carattere utilizzato nel testo, questo è ottenibile tramite una normale scansione del testo e possiamo memorizzare questo dato all'interno di una **tabella dei simboli** che associa ad ogni simbolo la sua frequenza.

>[!question] Osservazione
>Se un nodo dell'albero ha un solo figlio possiamo già dire che non è ottimo, in quanto è possibile rimuovere il nodo intermedio per diminuire il numero di cifre necessarie a rappresentare il carattere senza creare ambiguità
>![[Algoritmi-1779349441881.webp|center|400]]
>Quindi se l'algoritmo restituisce un albero non è pieno il codice non è ottimo.
>Questa proprietà può essere utilizzata per trovare un algoritmo che trovi l'albero ottimo in modo più semplice: non cerchiamo alberi che contengono nodi con un solo figlio.

>[!info] Esiste sempre un codice ottimo il cui albero è pieno. Quindi cerchiamo solo tra gli alberi pieni

---

Shannon ha proposto una possibile soluzione, che prevedeva un approccio top-down applicando il [[#divide et impera]]: partendo dall'insieme di simboli che compongono il testo e le loro relative frequenze cerco di distribuirli in modo più equo possibile (basato sul calcolo del numero medio di bit totale) in due sottoinsiemi, ripetendo lo stesso processo nei sottoinsiemi fino a raggiungere insiemi composti solo da un carattere.
Questo algoritmo però potrebbe creare alberi non ottimi.
![[Algoritmi-1779350042708.webp|center|500]]
## Algoritmo di Huffman
L'approccio migliore è quello di dare meno bit ai caratteri più frequenti, Huffman è l'algoritmo ottimo per fare questo.
Costruisce l'albero dal basso verso l'alto e applichiamo una strategia [[#Tecnica golosa|greedy]].
Ad ogni passo della sua iterazione mantiene una lista dei nodi (simboli) rispetto al quale costruire l'albero.
Vengono scelti i due caratteri con una frequenza più passa e vengono uniti da un nodo padre.
Dopo le prime iterazioni i nodi sono rappresentati dall'or dei simboli rispetto al quale deve costruire l'albero.
![[Algoritmi-1779351472909.webp|center|800]]
Per estrarre il nodo con frequenza minore quindi basta memorizzare la tabella dei caratteri all'interno di un [[Strutture dati#Heap|min-heap]].

**Complessità**
Abbiamo bisogno di una scansione iniziale del testo completa per creare la tabella dei caratteri ($m$).
Poi durante l'iterazione abbiamo bisogno di due estrazioni dall'heap ($\log_2 n$) e un inserimento $\log_2 n$.
con $m$ numero di caratteri nel testo e con $n$ **numero di simboli** utilizzati (non occorrenze).
Il costo dell'esecuzione iterativa è di un ordine di grandezza diverso, quindi domina $m$.

**Huffman è un algoritmo ottimo**
#dimostrazione 
Partiamo da un insieme di simboli ognuno caratterizzato dalla sua frequenza.
Come detto in precedenza dato un albero di codifica ogni foglia rappresenta un carattere. Se ottimo è caratterizzato dall'assenza di nodi con un solo figlio e i caratteri con frequenza più bassa appaiono come foglie ad una profondità maggiore.

Il fatto che l'algoritmo di Huffman è ottimo può essere dimostrato per induzione.

Il **caso base** è rappresentato da un codice di simboli in cui dobbiamo codificare due simboli, quindi c'è un solo albero di codifica: una radice e due foglie.

Per la **fase induttiva** prendiamo un qualsiasi codice con $n$ elementi. Per costruzione dell'albero abbiamo i due elementi a minore frequenza rappresentati da foglie e sono fratelli di uno stesso nodo interno.
Vengono quindi unite in un nodo con frequenza pari alla somma dei due.
Quindi Huffman viene applicato all'insieme di nodi di taglia $n-1$ in cui i due nodi scelti del passo precedente sono stati uniti in un singolo nodo.
## Run length encoding
Se abbiamo sequenze derivate dall'avere molti simboli uguali e conseguenti possiamo provare a codificare il numero di occorrenze come coppie di valori che rappresentano il carattere da rappresentare e il numero di ripetizioni:
*es.*
$$11000010000001000 \to  214011601130$$
## Codifica differenziale
Per conservare un gran quantitativo di dati numerici che non si discostano troppo dal punto iniziale potrebbe convenire conservare il primo valore e poi calcolare i successivi attraverso somme o sottrazioni rispetto al precedente.
Questa tecnica viene molto utilizzata nella compressione di immagini per esempio in aree dell'immagina con colori molto simili
*es.*
$$
\begin{array}{cc}
& 100000, 99999,100002,99997 \\
\to &  100000,-1,+3,-5
\end{array}
$$



# Teoria delle classi di complessità
Concentriamoci su problemi la cui risposta è booleana, tipicamente rappresentati dall'esistenza di una certa soluzione.

Spesso non si riesce a stabilire una complessità intrinseca dei problemi scritta come una funzione, ma ci accontentiamo di raggrupparli in **classi** derivanti alla loro difficoltà.

>[!important] P-time
>Problemi booleani per la cui soluzione esiste un algoritmo la cui complessità è un polinomio della dimensione dell'input.
>Generalmente questi problemi sono **trattabili** anche per dimensioni grandi.

>[!important] NP-problem
>Non deterministic polynomial time.
>Problemi booleani, per il quale possiamo prendere una possibile soluzione e verificare se quella proposta è effettivamente soluzione del problema utilizzando un algoritmo la cui complessità temporale è polinomiale rispetto alla dimensione dell'input
>Questo approccio prende il nome di **guess** and **check** (indovinare una possibile soluzione e poi controllarla).
>
>*es.* [[#Cricca]]
>
>*es.*
>[[#SubsetSum]] basta trovare un sottoinsieme per cui posso verificare che la somma dei suoi componenti è pari all'intero passato come parametro.
>
>*es. contrario*
>non posso verificare se non c'è nessun sottoinsieme la cui somma è pari al parametro. Avrei bisogno di tutti i sottoinsiemi possibili ($2^n$) e dovremmo leggere tutto questo input per poter verificare la proprietà descritta.

>[!important] Functional NP-problem
>NP-problem che non restituiscono valori booleani, ma veri e propri output più complessi.

>[!important] Co NP-problem
>Complemento di NP.
>Possiamo verificare in tempo polinomiale se la risposta è falsa.

>[!question] Osservazioni
>Non c'è una dimostrazione che esista un problema che appartiene a NP e non appartenga a Co NP.
>Si suppone che questo non accada.
>Così come non c'è nessuna dimostrazione che ci sia un problema sia in NP e non sia in P.
>Però è dimostrato che $P \subset NP$: se un problema appartiene a $P$ allora appartiene anche a $NP$

Non tutti i problemi che possiamo dimostrare appartengono ad una determinata classe di complessità sono uguali.

È stato definito un modo per **trasformare** un problema in un altro, sono dei problemi booleani, quindi è abbastanza semplice.
Io potrei avere una istanza del problema [[#SubsetSum]], prendere questa istanza, darla in pasto ad un determinato algoritmo $A$ restituisce una istanza di **Sat** (soddisfacibilità - esiste un assegnamento di valori di verità alle variabili che appaiono nella formula che rendono la formula vera).
$$
I_{ss} \to A \to I_{sat}
$$
>[!important] Trasformazione
> Se prendo un qualunque problema della classe NP e ne prendo una sua istanza allora esiste sempre un algoritmo che prende questo istanza e la trasforma in una istanza di sat che ha una caratteristica:
>se la risposta di Sat è vero allora la risposta all'istanza del problema originario è anch'essa vero e viceversa.
>Questo algoritmo prende il nome di **trasformazione**.

Non usiamo una qualsiasi trasformazione, usiamo la meno complessa possibile.
Se potessimo utilizzare qualsiasi complessità per effettuare la trasformazione sarebbe ovvio, con complessità esponenziale posso fare qualsiasi tipo di trasformazione; è un po' meno banale riuscire a trovare algoritmi di trasformazione che siano di complessità addirittura logaritmici.
L'algoritmo di conversione a Sat è uno di questi algoritmi.

>[!important] Arduo
>Un algoritmo è detto **arduo** rispetto ad una classe di complessità quando è almeno difficile quanto tutti i problemi di quella classe.
>Un problema $X$ è NP-arduo se ogni problema in NP è riducibile a $X$ in un tempo polinomiale.
>Questo significa che se trovassi un algoritmo efficiente per risolvere $X$, potrei risolvere in modo efficiente qualsiasi problema in NP.

Sapendo che Sat è NP-arduo per dimostrare che un altro algoritmo $A$ è NP-arduo non serve verificare ogni singolo algoritmo di NP, ma basterebbe creare una **catena di trasformazioni** per il quale abbiamo $A$ che viene trasformato in Sat e sapendo che Sat può essere trasformato in qualsiasi altro algoritmo NP ho dimostrato che il mio algoritmo $A$ è NP-arduo.
Se le due trasformazioni hanno un costo logaritmico posso passare da $A$ ad un qualsiasi algoritmo NP con complessità logaritmica, dimostrando quindi che hanno la stessa difficoltà di risoluzione.
*es.* [[#SubsetSum]] ha questa caratteristica.
*es.* Cricca ha questa caratteristica.

Quindi se risolvessi Sat in un modo facile potrei risolvere qualsiasi problema della classe in modo facile.
# Backtracking
Il backtracking è una tecnica di programmazione molto utile per la risoluzione di problemi per cui non è nota una soluzione ottima polinomiale.

[[#SubsetSum]]

Il **backtracking** ci permette di evitare di generare tutte le possibili soluzioni.
Nel caso in cui lo spazio delle soluzioni è veramente grande (esponenziale rispetto alla dimensione dell'input) se io riesco ad apportare dei miglioramenti ad esso evitando di esplorarne una parte, il guadagno in termini di prestazioni potrebbe essere anch'esso esponenziale rispetto alla dimensione dell'input e quindi potrebbe abbattere (in parecchi casi) il costo di risoluzione dell'intero problema.
Quindi non enumeriamo tutte le possibili soluzioni, cerchiamo di vedere dei casi in cui posso smettere di enumerare secondo determinate strategie.

Potremmo per esempio cambiare il modo in cui genero le possibili soluzioni in modo da lasciare aperta la possibilità di tagliare nella generazione, raggruppare intere porzioni dello spazio di sottoinsiemi man mano che andiamo avanti.

*es.*
$\{a,b,c,d,e,f\}$ possiamo vederlo come un array `[a,b,c,d,e,f]`
>[!multi-column]
>
>>[!blank]
>>generiamo le possibili soluzioni come sottoinsiemi facendo una scelta, che inizialmente è se l'elemento `A` è presente o no.
>>Posso fare la stessa cosa con `B` e così via.
>
>>[!blank]
>>![[Algoritmi-1779544484413.webp|center|300]]

>[!multi-column]
>
>>[!blank]
>>![[Algoritmi-1779544649832.webp|center|300]]
>
>>[!blank]
>>Se volessi per esempio assegnare un array composto da `[2,5,3,0,5,6]` e avessi un $k=4$
>>Potrei già eliminare l'albero `AB` in quanto la somma dei nodi è già superiore a $k$, in questo modo non devo calcolare tutti i sotto alberi che sono una conseguenza del nodo `AB`.

In realtà non devo rappresentarlo completamente, avrei un albero binario con $2^n$ nodi.

Il principio è molto simile agli algoritmi [[#Tecnica golosa|golosi]], in questo caso dobbiamo esplorare tutte le possibili soluzioni.
Nella pratica andremo ad effettuare una visita [[Strutture dati#Visita di un albero|pre-order]] dell'albero senza crearlo effettivamente scendendo quindi per prima cosa al nodo più a sinistra dell'albero e rivedendo le scelte a retroso, tagliando alcuni rami se so che è impossibile raggiungere la soluzione corretta tramite essi.

Nel caso in cui non facciamo nessuna riduzione all'insieme delle soluzioni (non effettuiamo nessun taglio) questo approccio è molto peggiore rispetto alla brute force.

Prima di iniziare non sappiamo esattamente quanto taglieremo, però possiamo aspettarci un miglioramento o no, nell'esempio precedente ordinando gli elementi dal maggiore al minore o avendo un numero $k$ piccolo sono in grado di tagliare anche molto lo spazio dei risultati.

Quindi dopo aver definito la tecnica generale per ottenere un risultato risulta incredibilmente utile trovare delle euristiche per migliorare ancora di più la riduzione dello spazio delle soluzioni.

>[!bug] Una implementazione ricorsiva di questa tecnica lo renderebbe facile da implementare, ma difficile da controllare, potenzialmente creiamo una lunghissima catena di chiamate che riempiono lo stack.

Inoltre in determinati algoritmi di ricerca del massimo per esempio posso addirittura utilizzare la soluzione corrente per decidere di tagliare determinati rami.
Quindi è meglio definire una strategia **iterativa** che faccia uso di backtracking.

**Come funziona**
Se siamo al livello 0 per spostarci al livello 1 dobbiamo effettuare una scelta.
Una volta fatta la prima scelta incremento il livello della soluzione che sto costruendo ed effettuo un'altra scelta per entrare al livello 2.
Una volta arrivati ad una foglia torniamo indietro risalendo l'albero, spostandoci sui fratelli.
Nel momento in cui ci spostiamo sul successivo fratello aumento il livello della soluzione corrente e ritento la generazione di una soluzione tra i figli del fratello, scendendo.
Effettuiamo questa operazione finché ci sono fratelli disponibili, a quel punto continuo a risalire, fin quando non arriviamo alla radice.

Lasciando il problema il più astratto possibile possiamo ideare una strategia che si basa su due scelte fondamentali:
- `primaScelta()`
- `successivaScelta()`

Ad ogni scelta effettuata per prima cosa verifichiamo se effettuarla comporta il non poter più trovare la soluzione corretta.

``` python
class ProblemaBack:
    def __init__(self):
        pass

    def risolvi(self)->bool: # risolvi consiste solo nell'esplorazione dell'albero a livello astratto
        liv: int = 0 # indica il livello corrente che stiamo visitando
        rivedi: bool = False # booleano per capire se devo rivedere le scelte
        if not self.primaScelta(liv): # se non riesco ad effettuare la prima scelta restituisco False
            return False
        while liv >= 0:
            if self.verificaVincoli(liv): # se la soluzione attuale non viola le regole del problema
                if self.solCompleta(liv): # verifichiamo se abbiamo raggiunto la soluzione completa
                    self.costruisciSoluzione(liv) # costruisce la soluzione
                    return True # restituisce True
                liv += 1 # se non abbiamo raggiunto la soluzione completa passiamo al livello successivo
                if not self.primaScelta(liv): # verifichiamo se possiamo effettuare la prima scelta
                    rivedi = True # settiamo rivedi a True, dobbiamo trovare un'altra soluzione
            else: # se la soluzione attuale viola le regole del problema
                if not self.successivaScelta(liv): # verifichiamo se possiamo passare alla scelta successiva (fratello)
                    rivedi = True # se non è stato trovato nessun successivo dobbiamo risalire
            while rivedi and liv >= 0: # risaliamo finchè non abbiamo verificato tutti i nodi
                liv -= 1 # risaliamo un livello
                if liv >= 0 and self.successivaScelta(liv): # verifichiamo se esiste il ivello e se c'è un successivo (fratello)
                    rivedi = False # se c'è un fratello fermiamo la risalita
        return False # se non siamo entrati nel soluzione completa restituiamo False, non esiste ciò che stiamo cercando

    def primaScelta(self, liv: int)->bool: # assegna il primo valore tentativo al livello liv, restituisce False se non è possibile
        pass

    def successivaScelta(self, liv: int)->bool: # prova il valore successivo al livello liv (fratello), restituisce False se non ne esistono
        pass

    def solCompleta(self, liv: int)->bool: # controlla se abbiamo riempito tutti i livelli necessari
        pass

    def verificaVincoli(self, liv: int)->bool: # controlla se la soluzione attuale non viola le regole del problema
        pass

    def costruisciSoluzione(self, liv: int): # salva la soluzione trovata
        pass
```


Questa struttura di classe astratta può essere utilizzata per implementare vari algoritmi che utilizzano il backtracking.

### Complessità
La complessità assoluto non migliora rispetto a quella esaustiva: per ogni soluzione generata effettuiamo la verifica.
Quindi per sapere quante soluzioni andiamo a generare non lo andiamo a calcolare rispetto alla dimensione dell'input, ma rispetto a:
- **livello max** $=l$
- **numero di scelte** fatte (in teoria tutte uguali per ogni livello) $=S_l$
- **costo delle verifiche** (verifica vincoli + prima scelta + successiva scelta) è una quantità che dipende da come sto modellando il problema, lo supponiamo polinomiale $n^d$
$$
S^l \cdot n^d
$$
numero di scelte per ogni livello e per ognuno di esse facciamo una verifica.

Non sappiamo che rapporto hanno $S$ ed $l$ con la dimensione dell'input, dipendono da come viene costruito l'algoritmo.

Nel [[#SubsetSum]] per esempio
$S=2$ e $l = n$
## SubsetSum
Dato come parametro un insieme $S$ di interi non negativi e un intero $k$ vogliamo sapere se esiste un sottoinsieme dell'insieme $S$ t.c. la somma degli elementi del sottoinsieme sia pari all'intero passato come secondo parametro.

La caratteristica dei problemi in NP mi autorizza a pensare ad un approccio scemo, brute force (ricerca esaustiva).

Dato $S$ e $k$ genero ad uno ad uno tutti i possibili testimoni e per ogni testimoni effettuo la verifica:
$$\forall S' \subseteq S: \sum_{x \in S'} x = k \quad \text{verifico}\quad\begin{array}{c}& \text{true} \\ \nearrow &  \\ \searrow & \\ & \text{false}\end{array}$$
Se per nessuno di questi testimoni sarà vero restituisco falso.

Ha un costo troppo elevato.

Quindi applichiamo il [[#Backtracking]].

``` python
from backtracking import ProblemaBack
from grafi.grafino import GrafoNO, GrafoMANO

class SubsetSum(ProblemaBack):
	def __init__(self, s: list[int], v: int):
		super().__init__()
		self.s = s
		self.v = v
		self.sol = [True for i in range(len(s))] # bitset: ho bisogno di una struttura dati per mantenere le scelte fatte, il cammino fatto nell'albero teorico che ovviamente non memorizzo
		self.soluzione = []

	def primaScelta(self, liv: int)->bool: # prima scelta a livello liv
		if liv == len(self.s):
			return False
		else:
			self.sol[liv] = True # di default decido di metterlo
			return True

	def successivaScelta(self, liv: int)->bool: # scelte sullo stesso livello successive
		if self.sol[liv]:
			self.sol[liv] = False
			return True
		else:
			return False #le ho provate entrambe -> torno sopra ole

	def solCompleta(self, liv: int)->bool:
		somma =0
		for i in range(liv+1):
			if self.sol[i]:
				somma += self.s[i]
		return somma == self.v #potrei controllare se il livello è l'ultimo ovvero non ho più scelte da fare (ma noi cerchiamo di migliorare la soluzione)

	def verificaVincoli(self, liv: int)->bool:
		somma = 0
		for i in range(liv + 1):
			if self.sol[i]:
				somma += self.s[i]
		return somma <= self.v

	def costruisciSoluzione(self, liv: int):
		for i in range(liv + 1):
			if self.sol[i]:
				self.soluzione.append(self.s[i])


s = [1,21,3,40,13,15,7,8,9,10]
v = 180
p:SubsetSum = SubsetSum(s, v)

if p.risolvi():
	print(f"SubsetSum({s}, {v})")
	print(f"{p.soluzione} - {sum(p.soluzione)}")
else:
	print("SubsetSum(s,v): no sol")
```
## Cricca
Verificare se un insieme di nodi all'interno di un grafo non orientato t.c. tra ogni coppia di nodi sia presente un arco e che abbia taglia almeno $k$.

Anche in questo caso possiamo applicare il [[#Backtracking]]

``` python
from backtracking import ProblemaBack
from grafi.grafino import GrafoNO, GrafoMANO

class Cricca(ProblemaBack):
	def __init__(self, g: GrafoNO, k: int):
		self.g: GrafoNO = g
		self.nodes: list[int] = [-1 for i in range(k)] # enumero per presenza e assenza -> rende + complicato metodi -> sono insiemi, liste in cui gli elementi dell'insieme mi appaiono in ordine crescente
		self.sol: list[int] = [] #siccome tanto nell'insieme non vale ordine io per semplicità mantengo lista di nodi ordinati

	def primaScelta(self, liv: int) -> bool:
		if liv == 0:
			self.nodes[liv] = 0 #ho ancora tutti i nodi a disposizione e scelgo di default il nodo 0
			return True
		if self.nodes[liv - 1] >= self.g.n - 1: # rappresentandoli in ordine, se il nodo aggiunto al passo precedente è già l'ultimo, non ha senso continuare
			return False
		self.nodes[liv] = self.nodes[liv - 1] + 1 # altrimenti prendo il nodo successivo
		return True

	def successivaScelta(self, liv: int) -> bool: # sceglie esattamente il successivo rispetto al precedente
		if self.nodes[liv] >= self.g.n - 1: # se il nodo è l'ultimo vuol dire che ho esplorato tutte le possibilità
			return False
		self.nodes[liv] = self.nodes[liv] + 1
		return True

	def solCompleta(self, liv: int) -> bool: # la soluzione è completa se ho scelto k nodi
		return liv == len(self.nodes) - 1

	def verificaVincoli(self, liv: int) -> bool:
		for i in range(liv): # siccome tutti i nodi che sono già dentro l'insieme condizione è verificata -> verifico per l'ultimo che ho aggiunto se esiste arco che lo collega a tutti gli altri
			if not self.g.arco(self.nodes[i], self.nodes[liv]):
				return False
		return True
  
	def costruisciSoluzione(self, liv: int):
		for x in self.nodes:
			self.sol.append(x)

g: GrafoNO = GrafoMANO(6)
g.aggiungiarco(0,1)
g.aggiungiarco(1,4)
g.aggiungiarco(0,4)
g.aggiungiarco(2,1)
g.aggiungiarco(1,5)
g.aggiungiarco(3,4)
g.stampa()

c:Cricca = Cricca(g,3)
if c.risolvi():
	print("Cricca(g,3)")
	print(c.sol)
else:
	print("Cricca(g,3): no sol")

c:Cricca = Cricca(g,4)
if c.risolvi():
	print("Cricca(g,4)")
	print(c.sol)
else:
	print("Cricca(g,4): no sol")
```


>[!question] Possibili ottimizzazione
>1. Se sto facendo una cricca di $k$ elementi, ma rimangono a disposizione un numero di nodi insufficiente per arrivare a $k$ non c'è bisogno di continuare.
>2. Non è detto che io debba iniziare dai nodi con indice più basso, sarebbe meglio enumerarli dal nodo con numero di archi maggiore al nodo con numero di archi minore, in questo modo, se sto cercando una cricca di $k$ elementi vado a verificare solo dopo i nodi che hanno meno di $k$ archi.








---


>[!quote] Esercizio
>Questo algoritmo non calcola i cammini
>Sui grafi tipicamente non orientati con costi di percorrenza un problema è l'analisi del grafo in particolare uno degli obbiettivi è quello di identificare nodi cruciali (nel mantenere la connettività del grafo)
>una di queste misure è la **centralità** del nodo (numero di cammini minimi tra coppie di valori del grafo che lo ha come nodo intermedio)
>se killo un nodo molto centrale rendo più difficile attraversare il grafo
>applicazione militare: devo decidere cosa bombardare
>applicazione civile: per le epidemie chiudo gli snodi di spostamento rallentando il propagarsi
>modificando Floyd, mantenendo la cazzo della matrice✨ `D[i,j,k]` anche tutti i cammini minimi (sono un numero esponenziale), la complessità farà schifo comunque.



>[!quote] Esercizio
>non permettiamo che dopo uno swap possa considerare delle sequenze che vengono prima dell'ultimo carattere che ha toccato lo swap
>definiamo un altra distanza di edit, in cui le sequenze ammissibili non hanno una swap e un qualsiasi operazione subito dopo
>inserire l'operazione di swap all'interno del codice di git


>[!quote] Esercizio con backtracking
>Avendo un grafo e vogliamo verificare se c'è un sottoinsieme dei nodi del grafo t.c.
>per ogni nodo del grafo o il nodo appartiene a S oppure esiste un nodo in S che è collegato con un arco a questo nodo.
>Sistemi di scommesse ridotti.
>I nodi del grafo sono le colonne di scommesse secche, gli archi quando c'è una sola differenza di combinazione tra una scommessa e un altra.
>Ci siamo giocati la possibilità di vincere sia che vi indoviniamo tutti i risultati sia che ne indoviniamo tutti meno 1.
>Vogliamo trovare un insieme di giocate secche che se gioco sono sicuro che se la mia giocata a sistema io vinco allora io vinco pure con queste.


