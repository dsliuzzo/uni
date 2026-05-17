#appunti 
#automatica 
# Trasformate di Laplace
>[!important] Operatore integrale che permette di trasformare un problema differenziale in algebrico

Dalla teoria dei [[numeri complessi (automatica)]]

>[!important] Funzione (o segnale) right-sided
>$$'f:T\to \mathbb{R}\hspace{4ex}(\mathbb{R}^n,\mathbb{C},\mathbb{C}^n)$$
>$$\left\{\begin{array}{l}f(t)=0\\t<0\end{array}\right.$$

La trasformata di Laplace è un integrale improprio definito da un parametro $s\in \mathbb{C}$
$$
\mathcal{L}\{f(t)\}= \int_0^{+\infty}f(t) e^{-st} dt = F(s)
$$
il suo risultato è una quantità complessa $F(s)$ che dipende da $s$
$\therefore F:\mathbb{C}\to \mathbb{C}$
nel caso in cui $f(t)$ è un vettore abbiamo $\mathbb{C}^n$

>[!important] Permette di passare dal dominio del tempo (con derivate) al dominio dei complessi (polinomi)
## Convergenza
La convergenza dipende da:
- valori di $s$ scelti
- soprattutto dal tipo di funzione
$\implies$ **condizioni sufficienti per la convergenza**
1. continuità a destra di $0$ di $F(\cdot)$$$\exists \lim_{ t \to 0^+ } f(t) \hspace{3ex} \begin{array}{c}<+\infty \\ >-\infty\end{array}$$
2. continua a tratti su $(0,+\infty)$
3. di ordine esponenziale $\alpha$
   riesco sempre a trovare una coppia $k,\alpha$ con $k>0$ e $\alpha \in \mathbb{R}$ tale per cui$$|F(t)| \leq ke^{\alpha t},\hspace{2ex} t\geq t_{0} \hspace{2ex} t_{0} \in(0,+\infty)$$
Se tutte queste condizioni sono soddisfatte la L-trasformata di $f(\cdot)$ converge per tutti i quei valori $s:\mathrm{Re}(s)=\sigma>\alpha$
con $\alpha$ **ascissa di convergenza**
![[Pasted image 20260310192654.png|center|300]]
>[!important] Definiamo le funzioni che convergono **funzioni di classe L**

## Proprietà
### Integrale coda
L'integrale della trasformata di Laplace è un integrale secondo Reimann, quindi l'estremo di integrazione $0^+=0^-=0$
Definiamo inoltre:
$$
\displaylines{
\forall \epsilon>0, \exists \tau > 0: \\
\left|\int_0^\tau f(t) e^{-st}dt - \int_0^{+\infty} f(t) e^{-st} st \right| \leq \epsilon}
$$
Definiamo l'integrale coda come
$$
\left|\int_\tau^{+\infty}f(t) e^{-st} dt\right| \leq \epsilon
$$

### Linearità
Essendo l'integrale lineare allora lo è anche la trasformata di Laplace.
Siano $f_1$ e $f_2$ due funzioni di classe L:
$$
\displaylines{
f_1(\cdot)\rightleftharpoons F_1(\cdot) \\
f_2(\cdot) \rightleftharpoons F_2(\cdot)
}
$$
convergenti rispettivamente in $\Omega_1$ e $\Omega_2$
Verifichiamo le condizioni di convergenza per la combinazione lineare
$$
\alpha f_1(\cdot) + \beta f_2(\cdot)
$$
1. La combinazione lineare di due funzioni continue a destra sarà ancora continua a destra di $0$
2. La combinazione lineare di due funzioni continue a tratti saranno ancora continue a tratti
3. La ragione di convergenza sarà l'intersezione delle due regioni di convergenza $\Omega_{1} \cap \Omega_2$ delle due funzioni, cioè il semipiano con ascissa più grande.
### Teorema della derivata
**Ipotesi:**
Sia $f(\cdot)$ di classe L e continua
$f(\cdot) \leftrightharpoons F(s)$

Verifichiamo se $\dot{f}(\cdot)$ è di classe L
Essendo $f(\cdot)$ continua, derivandola, nel caso peggiore è continua a tratti, quindi è ancora una funzione di classe L:
$$
\mathcal{L}\{\dot{f}(t)\} = s F(s) - f(o^-)
$$
Per derivate di ordine $n$ possiamo generalizzare questa formula per induzione se $f(\cdot)$ è di classe L e continua con le sue derivate fino all'ordine $n-1$ : $f(\cdot) \in C(n-1)$
$$
\mathcal{L}\{f^{(n)}(t)\} = s^n F(s) - s^{n-1} f(0^-) - s^{n-2} f(0^-) - \dots- f^{n-1}(0^-)
$$
Il risultato è un polinomio di grado $n$ con $s^nF(s)$ parte condizionata dall'ingresso e la parte delle condizioni iniziali al massimo di grado $n-1$
$$
\mathcal{L}\{f^{(n)}(t)\} = s^nF(s) - \sum_{i=0}^{n-1}s^i f^{(n-1-i)}(0^-) 
$$
### Teorema dello shifting
Sia $f(\cdot)$ una funzione di classe L tale per cui $f(\cdot)\leftrightharpoons F(s)$
Consideriamo ora la funzione $e^{\gamma t}\cdot f(t)\quad \gamma \in \mathbb{R}$
**Ipotesi**
 $e^{\gamma t} f(t)$ è di classe L
$$\implies e^{\gamma t} f(t) \leftrightharpoons F(s-\gamma)$$
**Applicazione**
>[!important] funzioni pseudo-periodiche
>$$\displaylines{e^{-\alpha t} \sin (\omega t) 1(t) \\ e^{-\alpha t} \cos(\omega t)1(t)}$$
>Se $\alpha>0$ si dicono **oscillatorie smorzate** o **pseudo oscillatorie**

Applichiamo il teorema dello shifting alle funzioni pseudo-periodiche
$$\begin{array}{cc} e^{-\alpha t} \sin(\omega t)1(t) \hspace{6ex} & e^{-\alpha t} \cos(\omega t)1(t) \\ \sin(\omega t )1(t) \leftrightharpoons \frac{\omega}{s^2 + \omega^2} & \cos(\omega t)1(t) \leftrightharpoons \frac{s}{s^2 + \omega^2} \\ e^{-\alpha t} \sin (\omega t)1(t) \leftrightharpoons \frac{\omega}{(s+\alpha)^2+\omega^2} &\hspace{8ex} e^{-\alpha t} \cos (\omega t) 1(t) \leftrightharpoons \frac{s+\alpha}{(s+\alpha)^2 + \omega^2}\end{array}$$
### Teorema di moltiplicazione per $t$
Consideriamo una funzione $f(\cdot) \leftrightharpoons F(\cdot)$ di classe L e definiamo
$$
t \cdot f(\cdot)
$$
La funzione è continua, ma tende ad $\infty$, quindi non è maggiorabile da $ke^{\alpha t}$.
Notiamo però come l'espansione in serie di Taylor di $e^x$
$$
e^x = 1 + x + \frac{x^2}{2} + \frac{x^3}{6} +\dots
$$
L'esponenziale è una somma di polinomio: dopo un certo istante $t_0$ un polinomio sarà sempre maggiorato dall'esponenziale.
Calcoliamo quindi la L-trasformata di $t f(t)$
$$
\int_0^{+\infty} t f(t) e^{-st} dt = \int_0^{+\infty} f(t) (t \cdot e^{-st}) dt
$$
notiamo come $t \cdot e^{-st}$ sia uguale a $-\frac{\partial}{\partial s}(e^{-st})$
$$
= - \int_0^{+\infty} f(t) \frac{\partial}{\partial s}(e^{-st})dt
$$
Per il teorema di Leibniz
$$
=- \frac{d}{ds} \left( \int_0^{+\infty} f(t) e^{-st}dt \right)
$$
Otteniamo quindi
$$
t \cdot f(t) \leftrightharpoons - \frac{d}{ds} F(s)
$$
### Teorema della quadratura
Sia $f(\cdot)$ una funzione di classe L allora
$$
L\left\{ \int_0^t f( \tau) d \tau \right\} = \frac{F(s)}{s}
$$
Essendo la funzione originale $f$ almeno continua a tratti la nuova funzione $\int f$ sarà continua e quindi ancora di classe L.
Per quanto riguarda l'ordine esponenziale $\int e=e \implies$ anche $\int f < e$ al massima cambierà l'ascissa di convergenza.
![[Pasted image 20260329171132.png|center|300]]
L'integrale sarà sempre maggiorato da una costante, quindi anch'esso sarà di classe L.
La regione di convergenza sarà l'unione delle regioni di convergenza dell'integrale $(\sigma > 0)$ e della funzione $(\sigma > \alpha)$, essendo $\alpha$ sempre maggiore di $0$ allora l'unione sarà data dalla regione di convergenza della funzione.
#dimostrazione 
Applichiamo Laplace
$$
\int_0^{+\infty} \int_0^t f(\tau) d\tau e^{-st} dt
$$
Analizziamo il dominio di integrazione
![[Pasted image 20260329172035.png|center|300]]
Utilizziamo il teorema di Furbini per cambiare il dominio di integrazione
$$
\int_0^{+\infty} \int_\tau^{+\infty} e^{-st}dt f(\tau) d \tau
$$
risolviamo separatamente l'integrale interno
$$
\int_\tau^{+\infty} e^{-st} dt = \left.\frac{e^{-st}}{-s}\right|_\tau^{+\infty} = \left( 0-\left( -\frac{e^{-st}}{s} \right) \right) = \frac{e^{-st}}{s}
$$
tornando ora all'integrale completo
$$
\int_0^{+\infty} f (\tau) \frac{e^{-st}}{s} d \tau = \frac{1}{s}\underbrace{\int_0^{+\infty} f (\tau) e^{-st} d \tau}_{L(f(\tau))} = \frac{F(s)}{s}
$$

#### Rapporto tra impulso, gradino e rampa
Conoscendo le trasformate
- dell'impulso: $G(s)$
- del gradino: $G(s) \cdot \frac{1}{s}$
- della rampa: $G(s) \cdot \frac{1}{s^2}$
>[!important] La risposta al gradino è la [[#Teorema della quadratura|quadratura]] della risposta all'impulso e la risposta alla rampa è la quadratura della risposta al gradino

### Teorema del ritardo finito
Sia $f(\cdot)$ una funzione di classe L, definiamo $f(t-\tau)$ con $\tau>0$, una seconda funzione anch'essa di classe L
![[Pasted image 20260329183229.png|center|400]]
$$
L\{f(t-\tau)\} = e^{-s \tau} F(s)
$$
con $e^{-s \tau}$ termine trascendente non rappresentabile come funzione razionale
## Funzioni note
### Gradino unitario
Definiamo la funzione gradino unitario come
$$
1(t) = \left\{\begin{array}{l} 1 \hspace{4ex} t>0 \\ 0 \hspace{4ex} t<0 \\ ? \hspace{4ex} t=0\end{array}\right.
$$
nel nostro caso non abbiamo bisogno di definire la funzione in $t=0$ in quanto è sufficiente che sia Reimann integrabile, quindi possiamo estendere la funzione come
$$
1(t) = \left\{\begin{array}{l}1 \hspace{4ex} t\geq0 \\ 0 \hspace{4ex} t<0 \end{array}\right.
$$
![[Pasted image 20260311220943.png|center|300]]
Verifichiamo se è di classe L
1. è continua a destra di 0
2. è continua a tratti nel dominio
3. $|1(t)|\leq ke^{\alpha t}$
   per $\alpha = 0$ e $k=1$
Possiamo quindi dire che converge per $\sigma>0$
$$
\displaylines{
\mathcal{L}\{1(t)\} = \int_0^{+\infty} 1(t) e^{-st} dt = \int_0^{+\infty}e^{-st}dt = \\
=\lim_{ T \to \infty } \int_0^T e^{-st} dt = \lim_{ T \to \infty } F(T) -F(0) = \\
=\lim_{ T \to \infty } \left.\frac{e^{-st}}{-s}\right|_0^T = \lim_{ T \to \infty } \left( \frac{e^{-sT}}{-s} + \frac{1}{s} \right) 
}
$$
Calcoliamo la convergenza solo nella regione $\sigma >0$, quindi
$$|e^{-st}| = e^{-\sigma T} \in \mathbb{R}$$
$$\lim_{ T \to \infty } e^{-\sigma T}=0$$
$$
\implies \mathcal{L}\{1(t)\} = \frac{\lim_{ T \to \infty } e^{-st}}{-s} + \frac{1}{s} = \frac{1}{s}
$$
### Esponenziale
Definiamo l'esponenziale per automatica come
$$
e^{at}1(t)
$$
Il gradino unitario unitario ci permette di garantire che una funzione sia right-sided. Sarà quindi definita solo per valori positivi e con $a$ parametro
![[Pasted image 20260311222546.png|center|300]]
Verifichiamo anche qui le condizioni per definire la funzione di classe L.
È una funzione continua a destra di 0 e per tutti i valori positivi.
$|e^{at}| \leq ke^{\alpha t}$ per $k=1$ e $\alpha = a$
quindi l'esponenziale è di classe L nella regione $\sigma > a$

- Prendiamo in considerazione $a>0$
$$
\displaylines{
\mathcal{L}\{e^{at}1(t)\} = \int_0^{+\infty} e^{a t} \cdot e^{-st} dt = \int_0^{+\infty} e^{-t(s-a)} dt = \\
=\lim_{ T \to \infty }  \int_0^T e^{-(s-a)t}dt = \lim_{ T \to \infty } \left.\frac{e^{-(s-a)t}}{-(s-a)}\right|_0^T = \\
= \lim_{ T \to \infty } - \frac{e^{-(s-a)T}}{s-a}+\frac{1}{s-a}
}
$$
analizzando singolarmente il primo limite
$$
\lim_{ T \to \infty } e^{-(s-a)T}
$$
scomponendo il numero complesso $s-a = \sigma + j \omega -a = (\sigma-a)+j\omega$
$$
=\lim_{ T \to \infty }  e^{-(\sigma-a)T - j\omega T} = \lim_{ T \to \infty } e^{-(\sigma-a)T}e^{-j\omega T}
$$
$e^{-j\omega T}$ è uguale a $1$, quindi rimane
$$
=\lim_{ T \to \infty } e^{-(\sigma-a)T}=0
$$
in quanto $\sigma >0$ e $\sigma >a$ saranno 2 quantità positive
$$
\implies \mathcal{L}\{e^{at}1(t)\} = \frac{1}{s-a}
$$
>[!question] La funzione gradino può essere anche definito come il caso particolare di una esponenziale con parametro $a=0$

- Consideriamo $a<0$
![[Pasted image 20260311225307.png|center|350]]
Definiamo la costante di tempo
$$
\tau = \frac{1}{|a|}[s] \to |a| = \frac{1}{\tau}
$$
per $a<0$ il valore assoluto diventa
$$
-a = \frac{1}{\tau} \implies a = -\frac{1}{\tau}
$$
$\frac{1}{\tau}$ può essere utilizzato come stima della velocità del fenomeno.
sostituendo $-\frac{1}{\tau}$ ad $a$ nell'esponenziale otteniamo
$$
e^{at}1(t) = e^{-t/\tau}1(t) = \left.e^{-t/\tau}\right|_{t=\tau} = e^{-1}\cong 0,37
$$
La costante di tempo della funzione esponenziale $e^{at}1(t)$ con $a<0$ è quel valore di $t$ in corrispondenza del quale
- la funzione esponenziale vale circa il $37\%$ del suo valore iniziale
- la funzione esponenziale ha perso circa il $63\%$ del suo valore iniziale
Viene utilizzato per stimare la velocità del **transitorio** e quindi confrontare due esponenziale.
### Segnali periodici elementari
$$
u(t) = A \cdot \sin(\omega t + \theta) \cdot 1(t)
$$
- $A$ ampiezza
- $\theta$ sfasamento iniziale $[rad]$
- $\omega$ pulsazione $\left[ \frac{rad}{s} \right]$

Prendiamo in considerazione
$$
\sin(\omega t)1(t) \hspace{4ex} \cos (\omega t) 1(t)
$$
partiamo dalle [[numeri complessi (automatica)#Formule di Eulero inverse|formule di Eulero inverse]]
$$
\displaylines{
\cos (\omega t) = \frac{e^{j \omega t} + e^{-j\omega t}}{2} = \frac{1}{2} e^{j \omega t} + \frac{1}{2} e^{-j \omega t} \\
\sin(\omega t) = \frac{e^{j \omega t}- e^{-j \omega t}}{2j} = \frac{1}{2j} e^{j \omega t} - \frac{1}{2j} e^{-j\omega t}
}
$$
Verifichiamo le condizioni sufficienti
La prima e la seconda sono verificate.
Per la terza basta avere $\alpha = 0$ e $k=1$
![[Pasted image 20260312171858.png|center|500]]
Possiamo definire il gradino unitario anche come un caso particolare del segnale periodico $\cos(\omega t)$ con $\omega = 0$.

- $\cos(\omega t)$
Passiamo al calcolo della trasformata come combinazione lineare di esponenziali
$$
\displaylines{
\mathcal{L}\{\cos(\omega t)\} = \frac{1}{2} \mathcal{L}\{e^{j \omega t}\} + \frac{1}{2} \mathcal{L} \{e^{-j \omega t}\} = \frac{1}{2} \frac{1}{s-j \omega} + \frac{1}{2} \frac{1}{s + j \omega} = \\
=\frac{1}{2} \frac{s+j \omega +s- j \omega}{(s- j \omega)(s + j \omega)} = \frac{s}{s^2+s j \omega - sj \omega + \omega^2} = \frac{s}{s^2+\omega^2}
}
$$
Possiamo notare come anche qui il denominatore si di grado $n$ e il numeratore è di grado $n-1$ con $n$ ordine del sistema.

- $\sin(\omega t)$
$$
\displaylines{
\mathcal{L}\{\sin(\omega t)\} = \frac{1}{2j}\mathcal{L}\{e^{j \omega t}\} - \frac{1}{2j} \mathcal{L} \{e^{-j \omega t}\} = \frac{1}{2j} \frac{1}{s-j \omega} - \frac{1}{2j} \frac{1}{s + j \omega} = \\
=\frac{1}{2j} \frac{s+j \omega -s + j \omega}{(s-j\omega)(s+j\omega)} = \frac{\omega}{s^2+\omega^2}
}
$$
### Rampa unitaria
Data una funzione $f(\cdot) \leftrightharpoons F(\cdot)$ definiamo una funzione
$$
t \cdot f(\cdot) \leftrightharpoons - \frac{d}{ds} F(s)
$$
Considerando $f(\cdot) = 1(t)$ come gradino unitario otteniamo una particolare legge oraria: la **rampa unitaria**, una retta con coefficiente angolare pari a 1
![[Pasted image 20260319151538.png|center|400]]
Questa funzione viene utilizzata per sistemi di controllo in cui una parte ha velocità costante per esempio negli intervalli di switch con variazione costante nel cambio di temperatura di una stanza.
Per il [[#Teorema di moltiplicazione per $t$|teorema di moltiplicazione per t]] la sua trasformata di Laplace sarà
$$
t 1(t) \leftrightharpoons - \frac{d}{ds} \left( \frac{1}{2} \right) = \frac{1}{s^2}
$$
#### Rampa non unitaria
Se la rampa non è unitaria ho un coefficiente che moltiplica $t$, che per linearità sarà coefficiente anche della L-trasformata.
### Segnali polinomial-esponenziali
Definiamo i segnali polinomial-esponenziali di ordine $k$ come:
$$
\frac{t^k}{k!} \cdot e^{\gamma t} \cdot 1(t) \leftrightharpoons \frac{1}{(s-\gamma)^{k+1}} \hspace{8ex} k \geq 0
$$
con $k!$ stiamo normalizzando la concavità/accelerazione.
#dimostrazione 
Utilizzo il principio di induzione
Per $k=0$ otteniamo il segnale [[#Esponenziale|esponenziale]] standard
Verifichiamo se, data per vera per $k$ sarà vera anche per $k+1$
$$
\frac{t^{k+1}}{(k+1)!} e^{\gamma t} = \frac{t}{k+1} \left( \frac{t^k}{k!} e^{\gamma t} \right)
$$
Applichiamo il [[#Teorema di moltiplicazione per $t$|teorema di moltiplicazione per t]] 
$$
\begin{align*}
\frac{t^{k+1}}{(k+1)!} e^{\gamma t} & \leftrightharpoons \frac{1}{k+1} \left( -\frac{d}{ds} \left( \frac{1}{(s-\gamma)^{k+1}} \right) \right) =\\
& = \frac{1}{k+1} \left( \frac{(k+1)(s-\gamma)^k}{(s-\gamma)^{2(k+1)}} \right) = \\
& = \frac{(s-\gamma)^k}{(s-\gamma)^{2(k+1)}} = \\
& = \frac{1}{(s-\gamma)^{2k+2-k}} = \frac{1}{(s-\gamma)^{k+2}}
\end{align*}
$$

**Graficamente**
![[Pasted image 20260321172403.png]]

### Impulso di Dirac
>[!important] Analogia con punto materiale o carica puntiforme
>Particella con un volume infinitesimo $\epsilon$
>$$\text{massa} = \text{densità } \cdot \text{ volume}$$
>$$m = \int_V p(x) dV$$
>Se la massa è uguale a $0$ e il volume è $\epsilon$ allora la densità sarà $\infty$, otteniamo quindi la forma indeterminata $\infty \cdot 0$

Consideriamo la funzione:
$$
f_T(t) = \left\{\begin{array}{ll}
\frac{1}{T} & |t|< \frac{T}{2} \\
0 & |t| \geq \frac{T}{2}
\end{array}\right.
$$
Segnale rettangolare di ampiezza $\frac{1}{T}$ e durata $T$ "baricentrato" per $t=0$
![[Pasted image 20260321173506.png|center|300]]

>[!question] Osservazioni
>1. Al crescere di $T$, la base aumenta e l'altezza diminuisce.
>   Al diminuire di $T$, la base diminuisce e l'altezza aumenta.
>2. L'area indipendentemente dal valore di $T$ è costante ed è uguale a 1
>3. Per $T$ finito $f_T(t)$ è continua a tratti

![[Pasted image 20260321173850.png|center|300]]

Se proviamo ad effettuare il limite per $T\to 0$ non è chiaro cosa accade, otteniamo
$$
\lim_{ T \to 0 } f_T(t)  = \left\{\begin{array}{ll}0 & \text{se }t \neq 0 \\ \infty & \text{se }t=0\end{array}\right.
$$
Possiamo quindi definire una operazione che effettua una misurazione su un segnale di test $\varphi(\cdot)$
Ipotizziamo sia un segnale continuo insieme alle sue derivate
$$
\int_{-\infty}^{+\infty} f_T(t) \varphi(t) dt
$$
è in realtà un integrale definito tra $-\frac{T}{2}$ e $\frac{T}{2}$ perché altrimenti è $0$.
Effettuiamo il limite di questa quantità
$$
\lim_{ T \to 0 } \int_{-\frac{T}{2}}^{+ \frac{T}{2}} \frac{1}{T} \varphi(t) dt = \lim_{ T \to 0 } \frac{1}{T} \int_{-\frac{T}{2}}^{+\frac{T}{2}} \varphi(t) dt =
$$
Per il teorema della media integrale
l'integrale di una funzione continua in un intervallo è equivalente all'ampiezza dell'intervallo moltiplicata per il valore della funzione in un punto specifico $\xi_T$ interno all'intervallo stesso.
$$
= \lim_{ T \to 0 } \frac{1}{T} \varphi(\xi_T) T = 
$$
con $-\frac{T}{2}< \xi_T < \frac{T}{2}$
$$
=\lim_{ T \to 0 } \varphi (\xi_T) = \varphi(0)
$$
Otteniamo quindi una funzione test all'inizio dell'esperimento.
Definendo l'**Impulso di Dirac** come
$$
\delta(t) = \lim_{ T \to 0 } f_T(t) 
$$
Definiamo la **proprietà di campionamento** come
$$
\int_{-\infty}^{+\infty} \delta (t) \cdot \varphi(t) dt = \varphi(0)
$$

Per riassumere:
$$
\lim_{ T \to +\infty } \int_{-\infty}^{\infty} f_T(t) \varphi(t) dt = \varphi(0)
$$
Con:
- $\int_{-\infty}^{+\infty} \delta(t) \cdot \varphi(t) dt$ strumento di misura
- $\delta(t)$ funzione che caratterizza lo strumento
- $\varphi(t)$ funzione test
- $0$ è l'asse della famiglia di funzioni o istante di applicazione
- Il limite è un **limite debole**
>[!important] Abbiamo così definito una regola (funzionale) che a una funzione test $\varphi(\cdot)$ associa un numero
>Prende il nome di **impulso di Dirac**
>Grazie alla definizione dell'impulso di Dirac possiamo utilizzare la matematica continua (integrali) per definire un evento impulsivo istantaneo

Generalizzando, se volessimo campionare un segnale in un istante diverso da 0 definiamo il campionatore come segue$$\int_{-\infty}^{+\infty} f_{T,\tau}(t) \varphi(t) dt = \varphi(\xi_{T,\tau}) \hspace{8ex} \tau-\frac{T}{2} < \xi_{T,\tau} < \tau + \frac{T}{2}$$Applicando il limite otteniamo un campionatore $\delta(t-\tau)$ in corrispondenza di $\tau$ $$\lim_{ T \to +\infty } \int_{-\infty}^{+\infty} f_{T,\tau} (t) \varphi(t) dt = \varphi (\tau)$$
>[!question] Osservazione: l'impulso di Dirac non è una funzione
>L'integrale di Riemann o di Lebesgue non sono in grado di percepire i salti, quindi non possiamo calcolare l'integrale dell'impulso, non è una funzione ordinaria, ma possiamo definirla come un **oggetto matematico** (regola / funzionale / campionatore).
>Provando ad integrare e definendo $\lim_{ T \to 0 } f_T(t) = F(t)$
>$$\int_{-\infty}^{+\infty} F(t) dt=$$
>Definiamo gli estremi di integrazione come $[a,b] = E \cup ([a,b] \backslash E)$ e scomponiamo l'integrale
>$$=\int_E f(t) dt + \int_{[a,b]\backslash E} f(t) dt =$$
>Il primo integrale è pari a 0, rimane solo il secondo integrale, che ipotizziamo per assurdo sia $<\infty$ e assumiamo che la funzione assuma lì un valore finito $M$
>$$=\int_{[a,b]\backslash E} |F(t)| dt \leq M \cdot \epsilon$$
>Questo integrale restituirà quindi una quantità infinitesima che tende a 0, contraddicendo quanto trovato prima
>$$\lim_{ T \to 0 } \int \neq \int \lim_{ T \to 0 } $$
>Non importa quindi il valore a cui facciamo tendere il limite, il limite dell'integrale e l'integrale del limite non sarà mai uguale, così dimostriamo che l'impulso di Dirac non è propriamente una funzione.
#### Proprietà dell'impulso
1. Se $\varphi(t) = 1$$$\int_{-\infty}^{+\infty} \delta(t) dt = 1$$
   massa unitaria di un punto materiale in $\tau=0$
2. Definendo $\varphi = e^{-st}$ otteniamo la definizione di trasformata di Laplace$$\mathcal{L} \{\delta(t)\} = \int_{-\infty}^{+\infty} \delta(t) e^{-st} = \lim_{ T \to 0 } \int_{0^-}^{+\infty} f_T(t) e^{-st} dt  = \left.e^{-st}\right|_{t=0} = 1$$
#### Gradino - impulso
Definito il [[#Gradino unitario]] la sua derivata è nulla per $t\neq 0$ e non è definita per $t=0$ (nulla quasi ovunque).
Considero una particolare famiglia di funzioni test:
- derivabili con continuità
- diverse da $0$ su un intervallo chiuso e limitato di $\mathbb{R}$
Utilizziamo il gradino come strumento di misura
$$
\int_{-\infty}^{+\infty} 1(t) \varphi(t) dt = \int_{0}^{+\infty} \varphi(t) dt
$$
Essendo la funzione derivabile con continuità e definita in un intervallo compatto (ha quindi durata finita), possiamo definire l'integrale in un intervallo $S$
$$
=\int\limits_{S} \varphi(t) dt
$$
Abbiamo quindi 3 casi possibili:
1. `--0--[a--b]-->` $\int_a^b < \infty$
2. `--[a--0--b]-->` $\int_0^b < \infty$
3. `--[a--b]--0-->` $\int = 0$
Date le ipotesi iniziali sarà sempre un numero finito.

Consideriamo ora la derivata del gradino unitario
$$
\int_{-\infty}^{+\infty} 1'(t) \varphi(t) dt =
$$
integriamo [[5. Integrali#Integrazione per parti|per parti]]
$$
= \left.1(t) \varphi(t)\right|_{-\infty}^{+\infty} -  \int_{-\infty}^{+\infty} 1(t) \varphi'(t) dt =  
$$
Calcolato in $-\infty$, $1(t) = 0$ e calcolato in $+\infty$, $\varphi(t) = 0$, quindi non c'è nessun contributo del primo operando:
$$
= -  \int_{-\infty}^{+\infty} 1(t) \varphi'(t) dt = - \int_{0}^{+\infty} \varphi'(t) dt = 
$$
L'integrale di una derivata è la funzione integranda
$$
=-(\varphi(+\infty)-\varphi(0)) = \varphi(0)
$$
Anche la derivata del gradino unitario sotto determinate condizioni è uno strumento di misura.
Proviamo in questo modo indiretto che la derivata del gradino è l'impulso di Dirac (non nel senso classico del termine).
## Prodotto di trasformate in 't'
Sia $Y(s) = G(s)U(s)$ se volessimo calcolare $G(s)U(s)$ nel dominio del tempo:
$$
Y(s) = \underbrace{\int_0^{+\infty} g(\sigma)e^{-s\sigma}d\sigma}_{G(s)} \cdot \underbrace{\int_0^{+\infty}u(\tau) e^{-s \tau} d \tau}_{U(s)} =
$$
Vediamoli come doppio integrale
$$
=\int_{\sigma = 0}^{+\infty} \int_{\tau = 0}^{+\infty} g(\sigma) u(\tau)  e^{-s(\sigma + \tau)} d \tau d \sigma
$$
Osserviamo il dominio di integrazione
![[Pasted image 20260323174534.png|center|200]]
Effettuiamo una sostituzione di variabili su $\tau$ ($\sigma$ vista come una costante)
$$
\displaylines{
t = \sigma + \tau \hspace{4ex} \tau = t-\sigma \hspace{4ex} dt = d\tau \\
t_{\inf} = \sigma + \tau_{\inf} = \sigma \hspace{6ex} t_{\sup} = \sigma + \tau_{\sup} = +\infty
}
$$
$$
=\int_{\sigma = 0}^{+\infty} \int_{t = \sigma}^{+\infty} g(\sigma) u(t-\sigma) e^{-st} dt d\sigma
$$
Possiamo vedere ora il dominio di integrazione in due direzioni
![[Pasted image 20260323175417.png|center|400]]
Per il teorema di Furbini queste due scritture sono equivalenti
$$
=\int_{t=0}^{+\infty} \underbrace{\int_{\sigma = 0}^{t}g(\sigma) \cdot U(t-\sigma) d\sigma}_{y(t)} e^{-st} dt = Y(s)
$$
notiamo la definizione di trasformata di Laplace del termine $y(t)$ (risposta forzata nel dominio $'t'$).
Definiamo questo tipo di integrale come **integrale di convoluzione**
$$
y(t) = \int_0^t g(\sigma) \cdot u(t-\sigma) d\sigma = (g*u)(t)
$$
>[!important] La risposta forzata per un sistema LTI-TC è la convoluzione tra la risposta all'impulso del sistema e l'ingresso

- $g(\cdot)$ prende il nome di funzione **filtrante**
- $u(\cdot)$ prende il nome di funzione **filtranda**

**media pesata (mobile)**
[...] <-- non ho capito

### Proprietà delle convoluzione
1. **Commutatività della convoluzione**
   $y(t) = (g*u)(t)$
   $$\int_0^t g(\sigma) u(t-\sigma) d \sigma = - \int_t^0 g(t-\xi)u(\xi) d \xi = \int_0^tg(t-\xi)u(\xi) d \xi$$
   Sostituiamo   $$\displaylines{ \xi = t-\sigma \hspace{4ex} d\xi = -d \sigma \hspace{4ex} \sigma = t-\xi \\ \xi_{\inf} = t-\sigma_{\inf} = t-0 = t \hspace{6ex} \xi_{\sup}=t-\sigma_{\sup} = t-t = 0}$$$$= \int_0^t u(\xi) g(t-\xi) d \xi$$
   Possiamo invertire filtranda e filtrante$$y(t) = (g * u)(t) = (u*g)(t)$$
2. **Unità** $$(g*\delta)(t) = \int_0^tg(\sigma)\delta(t-\sigma)d \sigma = g(t)$$Poniamo l'istante di campionamento (asse) uguale a 0, $t-\sigma = 0 \implies \sigma = t$$$\displaylines{\mathcal{L}\{(g*u)(t)\} = G(s) \cdot U(s) \\ \implies \mathcal{L}\{(g * \delta)(t)\} = G(s) \cdot 1}$$

