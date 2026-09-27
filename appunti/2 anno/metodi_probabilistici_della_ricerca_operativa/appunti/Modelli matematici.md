#appunti #metodi_della_ricerca_operativa 
https://www.xycoon.com/
# Modelli matematici nel discreto
## Prove di Bernoulli (binomiale - geometrico)
%%Per capire le prove di Bernoulli è necessario aver compreso [[1. Fondamenti di probabilità#Probabilità dell'unione di eventi|Probabilità dell'unione di eventi]] %%
>[!info] Prove di Bernoulli
>Le prove di Bernoulli ci permettono di calcolare la probabilità di ottenere $k$ successi da $n$ estrazioni.
>Più nello specifico:
>- $k$ successi dopo $n$ prove (**probabilità binomiale**)
>$$\left(\begin{array}{c}n \\ k\end{array}\right)p^k q^{n-k}$$
>- la probabilità che il primo successo si verifichi al $k$esimo tentativo (**probabilità geometrica**)
>$$p*q^{k-1}$$

con $n$ numero di elementi totali, $k$ numero di successi possibili, $p^k$ probabilità di successo, $q^{n-k}$ probabilità di insuccesso. 
### Ipotesi delle prove di Bernoulli
1. Le prove sono indipendenti
2. La probabilità di successo (nota) non aumenta e non diminuisce all'aumentare delle prove
3. L'ordine dei successi è irrilevante
4. Le prove sono $n$ e **vanno tutte eseguite** se vogliamo calcolare la probabilità di ottenere $k$ successi dopo $n$ prove
5. Le prove diventano limitate se vogliamo calcolare la probabilità che il primo successo si verifichi al $k$esimo tentativo
### Funzionamento delle prove
#### Analisi dello spazio dei risultati
Una aspetto fondamentale delle prove di Bernoulli è che prendiamo in considerazione solo problemi che accettano come risposta un successo o un insuccesso(o li semplifichiamo per arrivare a questo stato).
Essendo l'ordine non rilevante possiamo analizzare lo spazio dei risultati come segue:
$$
\displaylines{
\Omega_1 = \{0,1\} \\
\Omega_2 = \{00,01,10,11\} \\
\Omega_n = \{2^n \hspace{2ex} n\text{uple di }0 \text{ e }1\}
}
$$
#### Assegnazione delle probabilità ai risultati
Chiamiamo $p$ la probabilità di ottenere un successo e $q$ la probabilità di ottenere un insuccesso.
Nel caso base di $\Omega_1$ le probabilità sono di $\frac{1}{2}$ per ciascuno dei due casi e il totale è $1$.
Generalizzando ad $n$ prove possiamo introdurre $A_i$ successo alla $i$esima prova e $\overline{A_i}$ insuccesso alla $i$esima prova.
#### Definizione degli elementi di interesse
Inoltre chiamiamo $\omega_n$ il risultato elementare ("percorso"), che non sarà altro che l'intersezione di tutti i $k$ successi e dei $n-k$ insuccessi:
$$
\omega_n= A_{1}\cap A_{2}\cap\dots\cap A_k \cap\overline{A_{k+1}}\cap\dots\cap \overline{A_n}
$$
#### Calcolo delle probabilità degli elementi di interesse
Passando alle probabilità troviamo quanto segue
$$
P(\omega_n) = P(A_{1}\cap A_{2}\cap\dots\cap A_k \cap\overline{A_{k+1}}\cap\dots\cap \overline{A_n}) = p^kq^{n-k}
$$
Troviamo così le probabilità di successo elevato a $k$ e le probabilità di insuccesso elevato alla $n-k$
A questo punto moltiplichiamo tutto per il [[5. Calcolo combinatorio#Combinazioni con ripetizioni|coefficiente binomiale]] in quanto non è rilevante l'ordine in cui otteniamo i successi/insuccessi.

### Applicazione delle prove di Bernoulli
Le prove di Bernoulli vengono spesso utilizzate per problemi di affidabilità di sistemi "m-out-of-n" (sistemi che funzionano se almeno $m$ componenti su $n$ funzionano).
[[Metodi Lez. 05.2 (Esercizio su sistema m-out-of-n).pdf]]

### Distribuzione Multinomiale
https://gemini.google.com/share/a54ce8cf69ec
Una prova con più di due esiti prenderà il nome di multinomiale (es. lancio di un dado).
Sia $\omega$ l'evento elementare di $\Omega_n$, allora:
$$
\omega = \{\underbrace{1,1,\dots,1}_{n_1 \text{ volte}}; \underbrace{2,2,\dots,2}_{n_2 \text{ volte}};\dots;\underbrace{k,\mathbf{k}..,k}_{n_k \text{ volte}}\}
$$
dove il numero di prove eseguite $n=n_{1}+n_{2}+\dots+n_k$
associando $k=2^n$ possibili risultati per ad ognuna delle $n$ prove indipendenti:
- $n_1$ risultati di tipo 1
- $n_{2}$ risultati di tipo 2
- $n_k$ risultati di tipo $k$
A cui associamo $P_i$ probabilità che ci sia esito $i$
da cui:
$$
P(n_{1},n_{2},\dots,n_k) = \left(\begin{array}{c}n\\n_1\end{array}\right)\left(\begin{array}{c}n-n_{1}\\n_{2}\end{array}\right)\dots \left(\begin{array}{c}n-n_{1}-n_{2}-\dots-n_{k-1}\\n_k\end{array}\right)P_{1}^{n_1}P_2^{n_2}\dots P_k^{n_k}
$$
dove $P_s = P\{\text{ottenere il }j\text{-esimo risultato alla generica prova}\}$
$$
P(n_1,n_{2},\dots,n_k)=\frac{n!}{n_{1}!n_{2}!\dots n_k!}P_{1}^{n_1}\dots P_{k}^{n_k}
$$
### Binomiale negativa
Sia $A=$ "$n°$ tentativo per realizzare $k$ successi"
- dove $k$ noto
- $n$: numero di tentativi, con $n\geq k$ (non sappiamo a priori quanti saranno)
allora avremo che volendo calcolare $Pr(A=n)$ definiamo prima:
- $B$: avremo esattamente $k-1$ successi in $n-1$
- $C$: "n-esimo tentativo è un successo" $\to$ dopo mi fermo
$\therefore A=B\cap C$ dove $B$ e $C$ sono eventi indipendenti perché prove di Bernoulli
Considerando il caso in cui $C$ è sicuramente certo (evento condizionante) perché l'ultima prova è sicuramente un successo
$$
P(A)=P(B|C)\cdot P(C)
$$
$P(B)$ corrisponde alla binomiale $\to$ "$k-1$ successi in $n-1$ prove"
$$
P(B)=\left(\begin{array}{c}n-1\\ k-1\end{array}\right)p^{k-1}q^{(n-1)-(k-1)}= \left(\begin{array}{c}n-1\\ k-1\end{array}\right)p^{k-1}q^{n-k}
$$
$P(C)=p$ ovvero ultima prova di Bernoulli con successo
$$
P(A) = P(B)\cdot P(C) = \left(\begin{array}{c}n-1\\ k-1\end{array}\right)p^k q^{n-k}
$$
## Modello di Poisson
Modello matematico di partenza
$$
\sum_{n=0}^\infty \frac{x^n}{n!}=e^x, \hspace{2ex} x>0
$$
Passaggio intermedio
$$
\sum_{n=0}^\infty \frac{x^n}{n!}e^{-x} = 1, \hspace{2ex} x>0
$$
verifica finale
$$
0\leq \frac{x^n}{n!}e^{-x} \leq 1, \hspace{2ex} n=0,1,2,\dots
$$
**Modello di Poisson**
$$
\implies P(N=n) = \frac{x^n}{n!}e^{-x}, \hspace{2ex} n=0,1,2,\dots
$$
## Probabilità ipergeometrica
Sia $S$ un insieme di $n$ elementi, $d$ dei quali sono "difettosi" (hanno un attributo specifico)
- Il numero di possibili campioni casuali di $k$ elementi, estratti da un insieme $n$ senza rimpiazzo è:$$\left(\begin{array}{c}n \\ k \end{array}\right)$$
- Analogamente i campioni di $r$ elementi difettosi che possono capitare, dai $d$ elementi difettosi di $S$ ammontano a: $$\left(\begin{array}{c}d \\ r\end{array}\right)$$
- I campioni di $k-r$ elementi non difettosi appartenenti al campione dei $k$ elementi estratti ammontano a: $$\left(\begin{array}{c}n-d \\ k-r\end{array}\right)$$
Per trovare la probabilità di estrazione di un elemento di interesse $r$ da un insieme di $n$ elementi con $k$ estrazioni senza rimpiazzo possiamo quindi utilizzare la seguente formula:
$$
P(r|k, d, n) = \frac{\left(\begin{array}{c}d\\ r\end{array}\right)*\left(\begin{array}{c}n-d \\ k-r\end{array}\right)}{\left(\begin{array}{c}n \\ k\end{array}\right)}
$$
Il numeratore $\left(\begin{array}{c}d\\ r\end{array}\right)*\left(\begin{array}{c}n-d \\ k-r\end{array}\right)$ ci permette di calcolare il numero di modi per formare un campione che contenga esattamente $r$ elementi difettosi. Questo perché $\left(\begin{array}{c} d \\ r\end{array}\right)$ ci permette di trovare il numero di casi possibili in cui otteniamo $r$ elementi difettosi da un insieme di partenza di $d$ elementi difettosi, mentre $\left(\begin{array}{c}n-d \\ k-r\end{array}\right)$ ci permette di calcolare il numero di elementi non difettosi estratti. Essi vanno moltiplicati per il **principio del prodotto**, che afferma che se un evento completo è formato da una sequenza di due o più sottoeventi indipendenti la probabilità che accada sarà il prodotto della probabilità dei sottoeventi.

Il denominatore $\left(\begin{array}{c}n \\ k\end{array}\right)$ rappresenta il totale di modi distinti in cui posso estrarre $k$ elementi da un insieme $n$.

Otteniamo quindi $\frac{\text{numero di casi favorevoli}}{\text{totale}}$.

# Modelli matematici nel continuo
## Distribuzione esponenziale
La distribuzione esponenziale è una funzione densità che modella la durata di un evento completamente casuale.
>[!important] Assenza di memoria
>Un concetto fondamentale della distribuzione esponenziale è l'**assenza di memoria**. Questa infatti è l'unico modello caratterizzato da questa proprietà ed è ciò che la caratterizza.
>La durata di un fenomeno $X$ (che è la nostra variabile aleatoria) è completamente indipendente dall'età $t$ del sistema.

In affidabilità per esempio parleremo di assenza di memoria come assenza di usura, un componenti smette di funzionare per avvenimento completamente casuali, che non dipendono dalla sua usura e quindi dalla sua età (intesa come tempo di utilizzo).

Data questa proprietà possiamo formalizzarla come:
$$
Pr(X\leq t + \Delta t|X \geq t) \equiv Pr(X \leq \Delta t)
$$
che vuol dire che la probabilità del raggiungimento dell'istante $t+\Delta t$ dato il raggiungimento di $t$ è equivalente alla probabilità di raggiungere $\Delta t$. Con $X$ vita del fenomeno, $t$ età. Inoltre definiamo anche $Y = X-t$ come la vita residua.

### Assenza di memoria $\implies$ esponenziale
#dimostrazione
Partiamo quindi da una [[1. Fondamenti di probabilità#Dipendenza|probabilità congiunta]]:
$$
\displaylines{
Pr\{t \leq X \leq t+\Delta t\} = Pr\{X \leq t+\Delta t | X \geq t\} = Pr\{X \leq \Delta t\} Pr \{X\geq t\} \\
\frac{F(t+\Delta t)-F(t)}{\Delta t} = \frac{F(\Delta t)}{\Delta t} * [1-F(t)] \\
\frac{F(t+\Delta t)-F(t)}{\Delta t} = \frac{F(0 + \Delta t) - F(0)}{\Delta t} * [1-F(t)] \\
\lim_{ \Delta t \to 0 } \frac{F(t+\Delta t)-F(t)}{\Delta t} = \lim_{ \Delta t \to 0 } \frac{F(0 + \Delta t) - F(0)}{\Delta t} * [1-F(t)] \\
\frac{d}{dt}F(t) = \frac{d}{dt}F(t) \left|\begin{array}{l} \\ t=0\end{array}\right. *[1-F(t)]
}
$$
Otteniamo quindi una [[1. Equazioni differenziali|equazione differenziale]]
$$
\implies F(t) = 1-e^{-\lambda t} \hspace{4ex}\text{dove}\hspace{4ex} \lambda = \frac{d}{dt}F(t)\left|\begin{array}{l} \\ t=0\end{array}\right.
$$

Indichiamo la **funzione densità** che descrive l'esponenziale come
$$
f_X(x) = \left\{\begin{array}{l}\lambda e^{-\lambda x} \\ 0 \text{ altrimenti}\end{array}\right.
$$
e la sua relativa **funzione distribuzione**
$$
F_X(x) = \left\{\begin{array}{l}1-e^{-\lambda x} \\ 0 \text{ altrimenti}\end{array}\right.
$$

Graficamente possiamo indicare l'assenza di memoria traslando semplicemente il grafico dell'esponenziale:
![[Pasted image 20251012113040.png|center|400]]

>[!example] Parametri
>- $\lambda$, parametro di intensità

### esponenziale $\implies$ assenza di memoria
Sapendo che $P(Y\leq y|X\geq x) = P(X\leq y)$ dove $Y\triangleq X\cdot \overline{x}$
#dimostrazione 
partiamo dalla condizionata esplicitando $Y$
$$
P(Y\leq y | X\geq \overline{x}) = P(X-\overline{x}\leq y|X\geq \overline{x}) = \frac{P(x\leq X \leq \overline{x}+y)}{P(X\geq x)}
$$
applichiamo la definizione di CDF
$$
= \frac{F(\overline{x}+y)-F(\overline{x})}{1-F(\overline{x})}
$$
sostituendo $F(t) = 1-e^{-\lambda t}$
$$
=\frac{1-e^{-\lambda (\overline{x}+y)}-1+e^{\lambda \overline{x}}}{1-1+e^{-\lambda \overline{x}}} = \frac{e^{-\lambda \overline{x}}-(e^{-\lambda \overline{x}} \cdot e^{-\lambda y})}{e^{-\lambda \overline{x}}} = \frac{e^{-\lambda \overline{x}}(1-e^{-\lambda y})}{e^{-\lambda \overline{x}}}
$$
$$
\therefore 1-e^{\lambda y} = F_Y(y)=F_X(x-\overline{x}) = P(X\leq x-\overline{x})
$$
## Erlang
Definiamo il modello di Erlang come una [[4. Variabili aleatorie congiunte, regressione e test d'ipotesi#Distribuzione di somma di v.a.|somma di esponenziali identiche]]
$$
\displaylines{
F_{X_i} = 1- e^{-\lambda t} \hspace{4ex} i=1,2,\dots,n  \implies X \triangleq X_{1}+X_{2}+\dots+X_n
}
$$
Conoscendo la densità delle esponenziali $f_{X_i}(t) = \lambda e^{-\lambda t}$ definiamo la **densità di Erlang** di ordine $n$
$$
f_X(t) = \frac{(\lambda t)^{n-1}}{(n-1)!}\lambda e^{-\lambda t}
$$
#dimostrazione per induzione
Chiamiamo $Y \triangleq X_{1}+X_{2}+\dots+X_{n-1}\implies X = Y+X_n$
la densità sarà quindi la derivata della distribuzione, che possiamo utilizzare tramite la [[4. Variabili aleatorie congiunte, regressione e test d'ipotesi#Distribuzione marginale|marginale]]
$$
\implies f_X(t) = \frac{d}{dt} F_X(t) = \frac{d}{dt}\int_{u=0}^t F_{X_n} (t-u) f_Y(u) du
$$
applichiamo la derivata otteniamo una convoluzione tra due densità ed espandiamo come da definizione la densità di $Y$
$$
=\int_{u=0}^t f_{X_n}(t-u)f_Y(u) du = \int_{u=0}^t f_{X_n}(t-u) \frac{(\lambda t)^{n-1}}{(n-1)!}\lambda e^{-\lambda t}
$$
e facciamo la stessa cosa con la densità di $X_n$ cambiando la variabile e tramite passaggi algebrici otteniamo
$$
=\int_{u=0}^t \lambda e^{-\lambda(t-u)}\cdot e^{-\lambda t} \frac{(\lambda u)^{n-2}}{(n-2)!} d(\lambda u) = \lambda e^{-\lambda t} \frac{(\lambda t)^{n-1}}{(n-1)!}
$$

Definiamo ora la distribuzione come integrale della densità che integriamo per parti aumentando il grado da $n-1$ a $n$
$$
\displaylines{
F_X(t) = \int_0^t e^{-\lambda u} \frac{(\lambda u)^{n-1}}{(n-1)!} d(\lambda u) \\
=e^{-\lambda t} \frac{(\lambda t)^{n}}{n!} \int_0^t e^{-\lambda u} \frac{(\lambda u)^n}{n!}d (\lambda u) = e^{-\lambda t} \frac{(\lambda t)}{n!} + \int_0^t e^{-\lambda u} d\left( \frac{(\lambda u)^{n+1}}{(n+1)!} \right) = \\
= e^{-\lambda t} \frac{(\lambda t)^n}{n!} + e^{-\lambda t} \frac{(\lambda t)^{n+1}}{(n+1)!}+\int_0^t e^{-\lambda u} d\left( \frac{(\lambda u)^{n+2}}{(n+2)!} \right) =\dots\\
\dots=e^{-\lambda t} \sum_{i=n}^\infty \frac{(\lambda t)^i}{i!}
}
$$
>[!example] Parametri
>- $\lambda$ parametro di **scala**
>- $n$ parametro di **forma**

**Inversa per metodo Monte Carlo**
$$
X = \sum_{i=1}^n -\frac{1}{\lambda} \ln(U_i) =-\frac{1}{\lambda} \sum_{i=1}^n \ln(U_i) = -\frac{1}{\lambda} \ln\left( \prod_{i=1}^n U_i \right)
$$
### Erlang modulata
[[4. Variabili aleatorie congiunte, regressione e test d'ipotesi#Modulare la varianza attorno alla stessa media|modulando la varianza attorno alla stessa media]] possiamo ottenere una Erlang di ordine $n$, che cambia forma al crescere di $n$ però mantiene sempre la stessa media.
Il valore atteso di una somma di esponenziali è
$$
E[X] = nE[X_i] = n \frac{1}{\lambda}
$$
e analogamente la varianza
$$
VAR[X] = n VAR[X_i] = n \frac{1}{\lambda^2}
$$
ponendo $\lambda = n \frac{1}{E[X]}$ avremo che:
- il valore atteso rimane invariato
  $$E[X] = n \frac{E[X]}{n} = E[X]$$
- la varianza cambia
  $$VAR[X] = n \frac{E[X]^2}{n^2}=\frac{E[X]^2}{n}$$
per $n \to \infty$ abbiamo la v.a. tende ad una normale.
Questo è assolutamente coerente con il [[#Teorema centrale del limite]], tale per cui date $n$ v.a. indipendenti e identicamente distribuite la distribuzione della loro somma tende a diventare una normale stretta.
Ciò accade in quanto la varianza (larghezza della campana) diminuisce all'aumentare di $n$.
Al limite ($n\to\infty$), la campana diventerebbe così stretta da diventare una linea verticale sopra il valore atteso. Il fenomeno smetterebbe di essere casuale e diventerebbe deterministico, ovvero l'**impulso di Dirac**.
## Iperesponenziale
La distribuzione esponenziale è una **combinazione convessa** di esponenziali
$\therefore$ è la somma ponderata di esponenziali tali che:
- pesi $\alpha_i$ sono tutti positivi
- la somma dei pesi è pari a 1
$$
F_Y(y)= \sum_{i=1}^n \alpha_i (1-e^{-\lambda_i y})
$$
### Effetto raffica
L'iperesponenziale è progettata per avere alto coefficiente di variazione $\to$ simula sistemi con tempi di servizio dispersi
$\to$ deriva dalla combinazione di 2 tassi ($\lambda_i$) molto diversi
- $\lambda_1 \gg$ : tempo medio breve con $\alpha_1 \gg$ (alta probabilità)
- $\lambda_2 \ll$ : tempo medio lungo con $\alpha_2 \ll$ (bassa probabilità)ù

$\therefore$ questo genere il **butterfly effect**
- molte realizzazioni brevi e frequenti
- poche realizzazioni lunghe e rare
## Ipoesponenziale
somma di esponenziali non identiche.
Nell'iperesponenziale sono somme pesate e la somma dei pesi fa 1, mentre nell'ipoesponenziale questo non è necessario.
## Distribuzione di Weibull
Un altro modello utilizzato nella distribuzione nel continuo è il **modello di Weibull**.
Questo modello nasce come una variazione del [[#Distribuzione esponenziale|modello esponenziale]] rimuovendo però la proprietà di assenza di memoria, avvicinando il modello a casi di uso della vita reale.
$$
f_X(t) = \lambda \alpha t^{\alpha-1} e^{-\lambda t^\alpha}
$$
$$
F_X(t) =1- e^{-\lambda t^\alpha} 
$$
>[!example] Parametri
>- $\alpha$, parametro di forma
>- $\lambda$, $\beta = \frac{1}{\lambda}$ è parametro di scala
### Applicazione del modello di Weibull
Viene utilizzato per esempio nei modelli di guasto tramite la più completa **bathtub function** che utilizza il modello di Weibull in 3 fasi:
1. $\alpha<1 \implies \text{DFR}$
   decreasing failure rate
2. $\alpha = 1 \implies \text{CFR}$
   constant failure rate
3. $\alpha > 1 \implies \text{IFR}$
   increasing failure rate
![[Pasted image 20251012182613.png|center|400]]

## Distribuzione di Laplace
La distribuzione di Laplace descrive la probabilità di $Z$ (v.a. continua), che può assumere valori positivi e negativi.
Definiamo $Z$ come:
$Z=X-Y$ dove $X$ e $Y$ sono 2 v.a. i.i.d. : $X,Y \sim Exp(\lambda)$
con funzione di distribuzione
$$
F_Z(z) = P(Z \leq z) = P(X-Y \leq z)
$$
calcolata integrando $f_{XY}(x,y)$ sull'area $X-Y \leq z$
Abbiamo quindi 2 casi:
#### caso 1 $z\geq 0$
1. Calcolo $P(X-Y \leq z)$ come il complementare $=1-P(X-Y > z)$
   integrale della densità congiunta su $(X>Y+z)$
2. siccome $X$ e $Y$ sono indipendenti
   $f_{X,Y}(x,y) = f_X^{(m)} (x) \cdot f_Y^{(m)}(y) = (\lambda e^{-\lambda x})(\lambda e^{-\lambda y})$
3. integrando otteniamo
   $F_Z(z) = 1- \frac{1}{2} e^{-\lambda z}$

#dimostrazione 
$$
\displaylines{
P(X-Y \leq z) = \int_{y=0}^\infty \left( \int_{x=y+z}^\infty \lambda^2 e^{-\lambda (x+y)} dx\right)dy= \\
=\int_{y=0}^\infty - \lambda \left( \int_{x=y+z}^\infty-\lambda e^{-\lambda (x+y)} dx \right)dy = \\
= \int_{y=0}^\infty -\lambda \left[e^{-\lambda (x+y)}\right]_{x=y+z}^\infty dy =\\
=\int_{y=0}^\infty -\lambda \left[0-e^{-\lambda (xy + z)}\right] dy = \\
=-\int_{y=0}^\infty - \lambda e^{-\lambda (2y+z)} dy = \\
= - \left[e^{-\lambda (2y+z)} \cdot \frac{1}{2}\right]_0^\infty = \\
= e^{-\lambda z} \cdot \frac{1}{2}
}
$$
#### Caso 2 $z<0$
1. Sfrutto la simmetria della distribuzione
   $Z=X-Y$ e $-Z=Y-X$ poiché $X$ e $Y$ sono i.i.d.
2. $F_Z(z)= P(Z\leq z)$
3. Applichiamo la simmetria:
   $F_Z(z) = P(-Z \geq -z) = 1- F_{-z} (-z)$
   dove $F_{-z} = F_z = 1-F_z(-z)$
4. Siccome $z<0 \implies -z>0$ (posso usare il caso $z\geq 0$)
   $$F_z = \left\{\begin{array}{l}1-\frac{1}{2}e^{-\lambda z} \hspace{4ex} z \geq 0\\ 1- \left( 1-\frac{1}{2}e^{\lambda z} \right) = \frac{1}{2} e^{\lambda z} \hspace{4ex}z<0\end{array}\right.$$
### Densità di Laplace
Calcolata differenziando $F_Z(z)$ rispetto a $z$:
$$
f_Z(z) = \left\{\begin{array}{l} \frac{\lambda}{2} e^{-\lambda z} \hspace{4ex} z\geq 0 \\ \frac{\lambda}{2} e^{\lambda z} \hspace{5ex} z < 0\end{array}\right. \hspace{8ex} \text{o }f_Z(z) = \frac{\lambda}{2} e^{-\lambda |z|}
$$
#dimostrazione 
$\frac{d}{dz}e^{kz} = k e^{kz} \to$ punto di partenza
1. $z\geq 0$
   $$\frac{d}{dz}\left( 1-\frac{1}{2} e^{-\lambda z} \right) = 0-\frac{1}{2} (-\lambda e^{-\lambda z}) = \frac{\lambda}{2} e^{-\lambda z}$$
2. $z<0$
   $$\frac{d}{dz}\left( \frac{1}{2} e^{\lambda z} \right) = \frac{1}{2} \lambda e^{\lambda z}= \frac{\lambda}{2}e^{\lambda z}$$
#### Caratteristiche
1. forma doppio esponenziale
2. simmetria
3. picco, valore massimo in $z=0$ che coincide con media e mediana
4. code, decadono rapidamente ma tendono a $\pm \infty$ meno rapidamente
5. $\lambda$ determina il picco
	   $\lambda \gg$ picco alto e code decadono rapidamente
	   $\lambda \ll$ picco piatto e maggiore dispersione delle cose
## Logistic
quoziente di esponenziali
$$
F_Y(y) = \frac{e^y}{1+e^y} =\frac{1}{1+e^{-y}}
$$
## Log-logistic
logaritmo della logistic
[...]
## Gamma
Definiamo la funzione gamma ($II$ integrale di Eulero) come
$$
\Gamma (\alpha) = \int_0^\infty x^{\alpha-1} e^{-x}dx
$$
**Proprietà**
1. $\Gamma(\alpha) = (\alpha-1) \Gamma(\alpha-1)$
2. se $\alpha = n \in \mathbb{R}^+ \implies \Gamma(n) = (n-1)!$
3. se $\alpha= \frac{1}{2} \implies \Gamma\left( \frac{1}{2} \right) = \sqrt{ \pi }$
### Legame con la Erlang
Se $\alpha = r \in \mathbb{Q}^+$ la v.a. $\Gamma$ diventa una v.a. [[#Erlang]] di ordine $r$
infatti la densità di Erlang con parametri $n$ e $\lambda$ ottengo: $f_X(x) = \frac{(\lambda x)^{n-1}}{\Gamma(\alpha)}\lambda e^{-\lambda x} = \frac{(\lambda x)^{\alpha-1}}{\Gamma(\alpha)} \lambda e^{-\lambda x}$
### Densità Gamma
$$
f(t) = \frac{(\lambda t)^{\alpha-1}\lambda e^{-\lambda t}}{\Gamma(\alpha)} \hspace{4ex} \text{con }
\alpha > 0, \lambda > 0$$
>[!example] Parametri
>- $\alpha$: parametro di forma
>- $\lambda$: parametro di scala

Essendo una densità deve rispettare la proprietà $\int_0^{\infty}f(t) dt = 1$
#dimostrazione 
partendo dalla gamma e ponendo $x = \lambda t \implies dx = \lambda t$ sostituendo e portando fuori dall'integrale $\frac{1}{\Gamma(\alpha)}$ otteniamo
$$
\frac{1}{\Gamma(\alpha)} \int_0^\infty x^{\alpha-1} e^{-x} dx
$$
$\int_0^\infty x^{\alpha-1} e^{-x} dx$ non è altro che la definizione di $\Gamma(\alpha)$
$$
\therefore \frac{1}{\Gamma(\alpha)} \cdot \Gamma(\alpha) = 1
$$
## Distribuzione normale di Gauss
>[!important] Definizione
>La distribuzione normale è la formalizzazione di un modo di ripartizione delle probabilità sullo spazio continuo delle realizzazioni di una variabile aleatoria fondato su due assunzioni
>1. Esiste una "realizzazione tipica", nello spazio delle possibili realizzazioni, ed è quella che ricorre più frequentemente
>2. Esiste un "livello di dispersione ben preciso", più o meno grande, che dà ragione di scostamenti più o meno grandi dalla realizzazione tipica, comunque, **simmetrici**

L'ipotesi $1.$ corrisponde alla **media** $E[X]=\mu$, mentre l'ipotesi $2.$ corrisponde alla **varianza** $VAR[X]=\sigma^2$, con $X$ variabile aleatoria.
Spesso si può lavorare anche con la radice della varianza, la **deviazione standard**, che riporta la varianza alla stessa dimensione della media.
Questo parallelismo permette di passare da un modello concettuale di normale ad una applicazione pratica del modello per la gestione della prevedibilità e dell'incertezza.

Per passare ad una funzione vera e propria dobbiamo formalizzare le proprietà illustrate fino a questo momento:
1. **Simmetria e massimo centrale**$$\frac{df_Z(z)}{dz} = \left\{\begin{array}{l}>0 \hspace{2ex} z<0 \\ <0 \hspace{2ex} z>0\end{array}\right.$$
   Questa condizione renderà la funzione crescente fino a $0$ e decrescente da $0$ in poi, in modo simmetrico
2. **Pendenza nulla al centro** $$\frac{df_Z(z)}{dz}\left|_{z=0}\right.=0$$
   Questa condizione rende uguale a $0$ la pendenza nel punto più alto $z=0$ con un relativo punto stazionario, di massimo locale
3. **Asintoto per $z\to \pm \infty$**$$f_Z(z\to \infty)\to 0$$
   La densità deve necessariamente andare a $0$ per valori molto grandi in quanto l'integrale deve sempre essere uguale a $1$ per definizione degli [[2. Variabili aleatorie#Variabili aleatorie nel continuo|assiomi della probabilità]]
4. **Concavità al centro**$$\frac{d^2f_Z(z)}{dz^2}\left|_{z=0}\right.<0$$
   Questa condizione conferma che il punto stazionario al centro della funzione è un massimo relativo (derivata seconda negativa)

La forma di equazione differenziale più semplice che soddisfa tutte queste condizioni è la seguente:
$$
\frac{df_Z(z)}{dz}=-f_Z(z)z \hspace{4ex} \text{con }f_Z(z)>0 \hspace{4ex} \text{ e } -\infty<z<+\infty
$$
Integrando questa funzione otteniamo
$$
f_Z(z) = k \exp\left\{ -\frac{z^2}{2} \right\}, k>0
$$
Possiamo ricavare la costante $k$ imponendo $\int_{-\infty}^{+\infty}f_Z(z)dz=1$
$$
1 = \int_{-\infty}^{+\infty}k \exp\left\{ -\frac{z^2}{2} \right\}dz = k \frac{2}{\sqrt{ 2 }} \int_{t = 0}^{+\infty} t^{\frac{1}{2}-1} \exp\{-t\}dt \hspace{4ex} t\triangleq \frac{z^2}{2}
$$
possiamo utilizzare la funzione gamma $\Gamma(\alpha)\triangleq \int_{t=0}^{+\infty} t^{\alpha-1} \exp\{-t\}dt$ che per valori di $\alpha=\frac{1}{2}$ sarà $\Gamma\left( \frac{1}{2} \right)=\sqrt{ \pi }$ e ci permetterà di calcolare
$$
k=\frac{1}{\sqrt{ 2\pi }}
$$
**densità normale standard**
$$
f_Z(z) = \frac{1}{\sqrt{ 2 \pi }} \exp\left\{ -\frac{z^2}{2} \right\}\hspace{8ex} -\infty<z<+\infty
$$
**distribuzione normale standard**
$$
F_Z(z)= \int_{-\infty}^{u=z} \frac{1}{\sqrt{ 2\pi }} \exp \left\{ -\frac{u^2}{2} \right\}du \hspace{8ex} -\infty<z<+\infty
$$
$$
Z = \frac{X-\mu}{\sigma}
$$
![[Pasted image 20251019190906.png|center|300]]
### Normale generalizzata
Sia $X$ una v.a. risultato di una trasformazione lineare di $Z$ definita come:
$$
X = \sigma Z + \mu
$$
>[!example] Parametri
>- $\mu$ media, parametro di **posizione**
>- $\sigma^2$ varianza, parametro di **scala**

Tramite i parametri di media $\mu$ e deviazione standard $\sigma$ possiamo modificare la forma della normale
![[Pasted image 20251019191255.png|center|300]]

**media e varianza**
$$
E[X] = E[\sigma Z+\mu] = \sigma E[Z]+E[\mu] = \sigma \cdot 0 + \mu = \mu
$$
$$
VAR[X] = VAR[\sigma Z + \mu] = \sigma^2 VAR[Z] + VAR[\mu] = \sigma^2 \cdot 1+0= \sigma^2
$$
### Teorema di riproducibilità della normale
Data $\{X_{1},X_{2},\dots,X_n\}$ una collezione di variabili aleatorie indipendenti e ciascuna distribuita secondo una legge normale secondo i seguenti parametri
$$
\text{media} = \mu_i \hspace{8ex} \text{varianza}= \sigma^2 \hspace{8ex} i=1,2,\dots,n
$$
Allora introdotte le costanti reali $a_{1},a_{2},\dots,a_n$ 
$$
S_n \triangleq \sum_{i=1}^n a_i X_i
$$
è ancora distribuita secondo una legge normale, di parametri
$$
\text{media} = \sum_{i=1}^na_i\mu_i \hspace{8ex} \text{varianza}=\sum_{i=1}^na_i \sigma^2 \hspace{8ex} i=1,2,\dots,n
$$
>[!question] In pratica
> La combinazione lineare di variabili aleatorie distribuite secondo una normale è ancora una variabile aleatoria distribuita secondo una normale che ha come parametri la combinazione lineare corrispondente dei parametri delle singole variabili aleatorie
### Teorema centrale del limite
Data $\{X_{1},X_{2},\dots,X_n\}$ una collezione di variabili aleatorie indipendenti e ciascuna distribuita secondo una stessa legge arbitraria di media $\mu_i$ e varianza $\sigma_1^2$
Definiamo
$$
\tilde{Z}_n \triangleq \frac{\sum_{i=1}^nX_i-\sum_{i=1}^n\mu_i}{\sqrt{ \sum_{i=1}^n\sigma^2_i }}
$$
allora:
$n\to \infty, \tilde{Z}_n \sim Z(0,1)\to$ la somma standardizzata converge ad una normale standard, quindi:
$$
F_{\tilde{Z}_n}(z) \to \int_{-\infty}^{u=z} \frac{1}{\sqrt{ 2 \pi }} \exp\left\{ -\frac{u^2}{2} \right\}du\hspace{8ex} n\to +\infty
$$
>[!quote] In pratica
>la probabilità che $\tilde{Z}_n$ sia $\leq z$ tende alla probabilità che $Z$ sia $\leq z$ con $n\to \infty$
>$$P(\tilde{Z}_n)\leq z) \to P(Z\leq z) \text{ per }n\to \infty$$
## Chi-quadrato
somma di normali
serve per intervalli di confidenza stima della varianza
e per test sulla bontà della forma

$$
f_{\chi_\gamma^2}(x) \triangleq \left( \frac{1}{\Gamma} \left( \frac{\gamma}{2} \right)2^{\gamma/2} \right) \cdot x^{\gamma/2-1} \cdot e^{-x/2} \hspace{4ex} x\geq 0
$$
Per la distribuzione partiamo dalla definizione di varianza campionaria
### Teorema di riproducibilità della chi-quadrato
$$
\chi_{n_x-1}^2 + \chi_{n_y -1}^2 = \chi_{n_x + n_y -2}^2
$$
### chi di grado 1 = normale standard al quadrato
$$
\chi^2_1 \sim Z^2
$$
#dimostrazione 
$$
\displaylines{
F_{Z^2} (z) \triangleq Pr\{Z^2\leq z\} = Pr\{-\sqrt{ z } \leq Z \leq \sqrt{ z }\} \\
= F_z(\sqrt{ z }) - F_z(-\sqrt{ z }) = \\
=2 \int_0^{\sqrt{ z }} \frac{1}{\sqrt{ 2\pi }} \cdot e^{-\frac{u^2}{2}} du = \\
= 2\int_0^{\sqrt{ z }} \left( \frac{1}{\Gamma\left( \frac{1}{2} \right) \sqrt{ 2 }} \right) \cdot e^{-\frac{u^2}{2}} du = \\
}
$$
sostituendo $u = \sqrt{ v } \implies du = \frac{1}{2 \sqrt{ v }} dv = \frac{v^{\frac{1}{2}-1}}{2}dv$
$$
= \frac{2}{2} \int_0^{\sqrt{ z }} \frac{1}{\Gamma\left( \frac{1}{2} \right) \sqrt{ 2 }} v^{\frac{1}{2}-1} \cdot e^{-\frac{v}{2}} dv 
$$
questa non è altro che la densità della Chi con $\gamma = 1$
$$
\displaylines{
= \int_0^z f_{\chi_1^2}(x) dx = \\
=F_{\chi_1^2}(z)
}
$$
## Log-normale
Partendo dalla densità della normale generalizzata
$$
f_Y(y) = \frac{1}{\sigma \sqrt{ 2\pi }} \exp\left\{-\frac{1}{2}\left(\frac{y-\mu}{\sigma}\right)^2\right\}
$$
e definendo la log-normale come funzione di v.a. $X= e^Y$ per trovare $X$ dobbiamo risolvere la funzione inversa $y=\ln x$, inoltre dobbiamo moltiplicare per il valore assoluto della derivata (pdf for a transformed RV, Kishor S. Trivedi)
$$
f_X(x) = f_Y(\ln(x)) \cdot \left|\frac{d}{dx} \ln(x)\right|
$$
sapendo che $\frac{d}{dx}\ln(x) = \frac{1}{x}$ possiamo sostituire tutti gli elementi ottenendo la densità della log-normale
$$
f_X(x) = \frac{1}{\sigma \sqrt{ 2\pi }} \exp\left\{-\frac{1}{2}\left( \frac{\ln(x)-\mu}{\sigma} \right)^2\right\} \cdot \frac{1}{x}
$$
## t Student (Gosset)
Quoziente tra gaussiana e radice della chi-quadrato
$$
f_T(t) = \frac{\Gamma\left( \frac{\gamma+1}{2} \right)}{\Gamma\left( \frac{\gamma}{2} \right)\sqrt{ \pi \gamma }}\left( 1+\frac{t^2}{\gamma} \right)^{-(\gamma+1)/2}
$$
$$
T_\gamma \triangleq \frac{Z}{\sqrt{ \chi_\gamma^2/\gamma }} = \frac{\overline{X}-\mu}{S / \sqrt{ n }}
$$
$$
E[T] = 0 \hspace{8ex} VAR[T] = \frac{\gamma}{\gamma-2}
$$
La [[Modelli matematici#t Student (Gosset)|t-student]] è fondamentale per ricavare intervalli di confidenza per la media.

Standardizzando la media campionaria ($\overline{X}$) usando la deviazione standard ($\sigma$) otteniamo una [[Modelli matematici#Distribuzione normale di Gauss|normale standard]] $Z$
$$
Z = \frac{\overline{X}-\mu}{\sigma / \sqrt{ n }} 
$$
Analizzando invece la varianza: moltiplicando la [[3. Statistica#Varianza campionaria|varianza campionaria]] per $(n-1)$ e dividendola per la varianza $(\sigma^2)$ reale si comporta come una [[Modelli matematici#Chi-quadrato|chi-quadrato]] con $n-1$ gradi di libertà
$$
\chi_{\gamma = n-1}^2 = \frac{(n-1) S^2}{\sigma^2}
$$
Sostituendo questi due elementi all'interno della definizione di t-student otteniamo una [[#Distribuzione normale di Gauss|distribuzione gaussiana]] che utilizza la varianza campionaria invece della varianza reale
$$
T_\gamma = \frac{\frac{\sqrt{ n }(\overline{X}-\mu)}{\sigma}}{\sqrt{ \frac{S^2}{\sigma^2} }} = \frac{\frac{\sqrt{ n }(\overline{X}-\mu)}{\sigma}}{\frac{S}{\sigma}} = \frac{\sqrt{ n }(\overline{X}-\mu)}{S} = \frac{\overline{X}-\mu}{S / \sqrt{ n }}
$$
