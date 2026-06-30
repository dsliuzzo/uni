# 1. Linearità e/o Principio di Sovrapposizione degli effetti
La linearità è una delle proprietà dei sistemi dinamici. Siano due ingressi arbitrari $u'(\cdot)$ e $u''(\cdot)$ e due condizioni iniziali arbitrarie $x'_0$ e $x''_0$, tali per cui $u'(\cdot),u''(\cdot) \in U$ e $x'_0, x''_0 \in X$, si definisce lineare un sistema in cui stato e uscita sono una combinazione lineare delle funzioni di stato e uscita singolarmente applicate
$$
\begin{array}{c}
\phi(t,t_{0},a x'_0+b x''_0, a u'(\cdot) + b u''(\cdot)) = a\phi(t,t_{0},x'_0,u'(\cdot)) + b\phi(t,t_{0},x''_0,u''(\cdot))  \\
\eta(t,a x'(t)+b x''(t), a u'(t) + b u''(t)) = a \eta(t,x'(t),u'(t)) + b \eta(t,x''(t),u''(t)
\end{array}
$$
La linearità ci dà la possibilità di applicare il principio di sovrapposizione degli effetti: la risposta totale del sistema è calcolabile come la somma degli effetti alle singole cause che agiscono sul sistema:
- evoluzione libera,
  evoluzione caratterizzata dalle soli condizioni iniziali ipotizzando di avere ingresso nullo;
- evoluzione forzata,
  evoluzione caratterizzata dal solo ingresso ipotizzando condizioni iniziali nulle.

# 2. Tempo invarianza o stazionarietà
Un sistema è detto tempo invariante se ne è garantita la totale ripetibilità: a parità di stato iniziale e di segnale d’ingresso applicato, si ottiene la medesima risposta in uscita indipendentemente dall’istante temporale in cui viene effettuato l’esperimento.
Siano $t,t_{0}$ istanti di tempo, $x_0$ condizioni iniziali, $u(\cdot)$ ingresso ammissibile, $\Delta t$ elemento positivo o negativo, valutiamo lo stato ripetendo l'esperimento in ritardo
$$
\phi(t+ \Delta t, t_{0} + \Delta t, x_{0}, u_{[t_{0}+\Delta t, t + \Delta t)}(\cdot)) = x(t) = \phi(t, t_{0}, x_{0}, u_{[t_{0},t)}(\cdot))
$$
se il valore è uguale allora è garantita la ripetibilità e l'uscita non dipende più dal tempo
$$
y(t) = \eta(u(t), x(t))
$$

Per ripetere l'esperimento dobbiamo considerare valori in ingresso traslati $\overset{\Delta t}{u(\cdot)}$ valutato su $\sigma \in [t_{0}+\Delta t, t + \Delta t]$
$$
\overset{\Delta t}{u(\sigma)} = u(\sigma - \Delta t)
$$
valutando $\overset{\Delta t}{u(\cdot)}$ negli istanti di tempo traslati $t_{0} + \Delta t$ otteniamo quindi
$$
\overset{\Delta t}{u}(t_{0} + \Delta t) = u(t_{0} + \Delta t - \Delta t) = u(t_{0}) 
$$
l'ingresso traslato in corrispondenza dello stato iniziale e l'ingresso non traslato coincidono e di conseguenza lo stato iniziale rimane invariato ed è garantita la ripetibilità dell'esperimento.

Una volta verificata la tempo invarianza possiamo scegliere $\Delta t = - t_{0}$ in modo da traslare lo studio del sistema a partire dall'istante $0$ senza perdita di generalità
$$
\phi(t,t_{0},x_{0},u_{[t_{0},t]}(\cdot))= \phi(t-t_{0}, 0, x_{0}, u_{[0,t-t_{0}]}(\cdot))
$$
# 3. Causalità
È detto causale un sistema che non presenta effetti anticipativi: lo stato in $t$ dipende dalla storia passato degli ingressi e non dal futuro.

>[!multi-column]
>
>>[!blank]
>>Siano una coppia di istanti $t,t_{0}$ e due ingressi $u'(\cdot), u''(\cdot)$ distinti, ma coincidenti se ristretti sull'orizzonte di interesse $u'_{[t_{0},t)}(\cdot)= u''_{[t_{0},t)}(\cdot)$
>
>>[!blank]
>>![[Pasted image 20260308103756.png|center|300]]

applicando la funzione di transizione di stato a questi due ingressi
$$
\phi(t,t_{0},x_{0},u'_{[t_{0},t)}(\cdot)) = \phi(t,t_{0},x_{0},u''_{[t_{0},t)}(\cdot))
$$
se sono coincidenti il sistema è detto causale.
# 4. Che cosa è una funzione di classe L
Definita la trasformata di Laplace di una funzione $f(t)$ come
$$
\mathcal{L}\{f(t)\} = \int_0^{+\infty} f(t) e^{-st} dt = F(s)
$$
Una funzione $f(t)$ è detta di classe L se è right sided ($f(t) = 0, t<0$) e la sua trasformata di Laplace converge per specifici valori di $s$ e quindi valgono le condizioni necessarie alla convergenza:
- funzione continua a destra di $0$
  $$\exists \lim_{ t \to 0^+ } f(t) \in (-\infty,+\infty)$$
- continua a tratti in $(0,+\infty)$
- di ordine esponenziale $\alpha$: esiste una coppia $k > 0, \alpha \in \mathbb{R}$ tale per cui
  $$|f(t)|\leq k e^{\alpha t}$$
Se valgono le condizioni iniziali la trasformata convergerà per valori di $s:\mathrm{Re}(s) = \sigma > \alpha$
# 5. Assegnata una funzione di classe L, individuare l'ascissa di convergenza
#esercizio
È detta ascissa di convergenza quel valore $\alpha$ tale per cui, assegnato un valore di $s:\mathrm{Re}(s) = \sigma>\alpha$, la funzione nel dominio di Laplace converge ed è calcolabile nel dominio del tempo trovando $\alpha$ da questa definizione $|f(t)|\leq k e^{\alpha t}$ oppure direttamente nel dominio di Laplace come la parte reale del polo più a destra.
Nel caso in cui abbiamo combinazione lineare di funzioni l'ascissa di convergenza sarà il massimo tra le singole ascisse delle due funzioni.
# 6. Che cosa è la funzione di trasferimento, sue definizioni
La FdT ha 3 definizioni:
1. Il rapporto tra la risposta del sistema e l'ingresso nel dominio di Laplace
   $$G(s) = \frac{Y(s)}{U(s)}$$
2. Quella particolare uscita con ingresso che ha trasformata di Laplace pari a 1
   $$Y (s) = \left. G(s) \cdot U(s) \right|_{U(s) = 1}$$
3. L'uscita forzata di un sistema LTI-TC il cui ingresso è l'impulso di Dirac
# 7. Determinare i modi naturali di un sistema nota al sua FdT
#esercizio
Per prima cosa dobbiamo dividere in fratti semplici la FdT, a quel punto in base alla forma dei fratti semplici possiamo determinare i modi naturali dividendo in 2 casi possibili
polo semplice con molteplicità algebrica $\nu > 0$
$$
(s-a)^\nu \leftrightharpoons \frac{t^{\nu-1}}{(\nu-1)!} \cdot e^{at} 1(t)
$$
trinomio non scomponibile (genera due modi naturali)
$$
(s^2 + a_{1} s + a_{2}) \leftrightharpoons \begin{cases}
e^{\mathrm{Re}(p) t} \cdot \cos(\mathrm{Im}(p) t) \cdot 1(t) \\
e^{\mathrm{Re}(p) t} \cdot \sin(\mathrm{Im}(p) t) \cdot 1(t)
\end{cases}
$$
# 8. Risposta al gradino unitario, componente transitoria e di regime
#esercizio
Per calcolare la risposta al gradino per prima cosa dobbiamo definire l'ingresso nel dominio di Laplace come $U(s) = \frac{1}{s}$, che comporrà quindi una risposta nel dominio di Laplace data da
$$
Y(s) = G(s) \cdot \frac{1}{s}
$$
A questo punto possiamo procedere con la scomposizione in fratti semplici, l'applicazione della formula di Heaviside per determinare i coefficienti e l'antitrasformata di Laplace delle funzioni note.
Una volta riportato nel dominio del tempo possiamo scomporre la risposta transitoria dalla risposta a regime applicando il teorema del valore finale (per calcolare la risposta a regime).
# 9. BIBO stabilità, definizione e criteri (solo enunciati)
La stabilità è la proprietà di un sistema dinamico di mantenere una certa configurazione nell'intorno di una data condizione operativa, a fronte di perturbazioni esterne. %% non so se tenerlo questo%%

A fronte di una perturbazione limitata in ingresso, si definisce BIBO stabile un sistema che restituisce una uscita forzata limitata. Di conseguenza, un sistema non è BIBO stabile se esiste un ingresso limitato la cui uscita forzata corrispondente non è limitata (definizione molto più utile nell'uso pratico).
Un sistema è definibile BIBO stabile se e solo se la sua risposta all'impulso è assolutamente integrabile
$$
\int_0^{+\infty} |g(t)|dt < +\infty
$$
In questo caso la FdT si dice di classe $L^1$.
Unendo questo criterio di BIBO stabilità alla definizione di trasformata di Laplace ne possiamo derivare un secondo criterio per definire la BIBO stabilità:
È definibile BIBO stabile un sistema i cui poli sono strettamente nel LHP.

Ne conseguono due corollari:
1. Un sistema è BIBO stabile se e solo se$$\lim_{ t \to \infty } g(t) = 0$$
2. Un sistema è BIBO stabile se la sua risposta libera converge a 0 per $t \to \infty$
# 10. Teorema della risposta armonica a partire dall'analisi della risposta ad un segnale periodico elementare
Sia $u(t) = A \sin(\omega t + \varphi)$ un generico ingresso periodico, applicando la formula di Eulero
$$
u(t) = A \frac{e^{j (\omega t + \varphi)} - e^{-j (\omega t + \varphi)}}{2 j}
$$
sapendo che
$$
\mathcal{L}\{e^{j \omega t}\} = \frac{1}{s-j \omega}
$$
la trasformata di Laplace di una ipotetica uscita sarà composta come segue
$$
Y'(s) = G(s) \cdot \frac{1}{s-j \omega}
$$
che possiamo suddividere in fratti semplici e notare come il regime dipenda dal solo ingresso in quanto il polo aggiunto (che si trova sull'asse immaginario) è quello dominante
$$
Y'(s) = \underbrace{\dots}_{\text{transitorio}} + \underbrace{\frac{C_{n}}{s-j \omega}}_{\text{regime}}
$$
applicando Heaviside per il suo calcolo
$$
C_n = \lim_{ s \to j \omega } (s- j \omega) \cdot Y(s) = \lim_{ s \to j \omega } (s-j \omega) \cdot G(s) \cdot \frac{1}{s-j \omega} = \lim_{ s \to j \omega } G(s) = G(j \omega)
$$
riportando al dominio del tempo questo risultato
$$
y'_{ss}(t) = G(j \omega) e^{j \omega t}
$$
ne deduciamo che la risposta a regime a fronte dell'ingresso periodico generalizzato è la seguente
$$
y_{ss}(t) = A \frac{G(j \omega) e^{j \omega t+\varphi} - \overline{G(j \omega)} e^{-j (\omega t+\varphi)}}{2j}
$$
scomponiamo $G(j \omega)$ in modulo e fase $G(j \omega) = |G(j \omega)| \cdot e^{j \angle G(j \omega)}$ e il suo coniugato come $|G(j \omega)| \cdot e^{-j \angle G(j \omega)}$
$$
y_{ss}(t) = A |G(j \omega)| \cdot \frac{e^{j (\omega t + \angle G(j \omega) + \varphi)}- e^{-j (\omega t + \angle G(j \omega) + \varphi)}}{2 j}
$$
ritornando al seno tramite la formula di Eulero otteniamo:
$$
y_{ss}(t) = A |G(j \omega)| \cdot \sin (\omega t + \angle G(j \omega) + \varphi)
$$


Questo risultato ci permette di introdurre il teorema della risposta armonica:
Sia un segnale periodico elementare in ingresso
$$
u(t) = A \sin (\omega t + \varphi)
$$
allora possiamo definire la risposta a regime corrispondente come
$$
y_{ss}(t) = Y \sin (\omega t + \xi)
$$
dove
$$
\frac{Y}{A} = |G(j \omega)| \hspace{8ex} \xi - \varphi = \angle G(j \omega)
$$
di conseguenza
$$
y_{ss}(t) = A \cdot |G(j \omega)| \cdot \sin (\omega t + \angle G(j \omega) + \varphi)
$$
# 11. Grafico qualitativo della risposta al gradino per un sistema assegnata la sua FdT
#esercizio
Per calcolare un grafico qualitativo dobbiamo seguire i seguenti passi (sotto ipotesi di BIBO stabilità):
1. teorema del valore iniziale
2. teorema del valore iniziale sulla derivata per capire la direzione dell'uscita
3. teorema del valore iniziale sulla derivata seconda per capire la concavità dell'uscita
4. teorema del valore finale per calcolare il valore di regime
5. approssimazione del tempo di assestamento ($t_{s,5} = 3 T)$, tempo di salita e massima sovraelongazione
eventuali altre cose da ricordare:
- se presente uno zero dominante a fase minima avremo sovraelongazione
- se presente uno zero a fase non minima avremo controfase:
	- I ordine: si abbassa l'istante iniziale di partenza
	- II ordine: derivata negativa
- se sono presenti poli complessi e coniugati ci aspettiamo un grafico oscillatorio smorzato
# 12. Definizione di massima sovraelongazione, tempo di salita e tempo di assestamento
La massima sovraelongazione $S_{\%}$ rappresenta il più grande errore relativo valutato sui punti stazionari della risposta al gradino rispetto al valore di regime($t=0$ escluso).
$$
S_{\%} = \exp\left( - \frac{\pi \delta}{\sqrt{ 1-\delta^2 }} \right)
$$

Il tempo di salita $t_r$ è l'intervallo di tempo necessario per passare dal 10\% al 90\% del valore di regime.
$$
t_r = \frac{\pi-\theta}{\omega_n\sqrt{ 1-\delta^2 }}
$$

Il tempo di assestamento $t_{s,5}$ è l'istante di tempo a decorrere dal quale la risposta entra in una fascia di incertezza di ampiezza $\pm 5\%$ del valore di regime e non se ne discosta più.
$$
t_{s,5} = \frac{3}{\delta \omega_n}
$$
# 13. Sistemi interconnessi
È definibile sistema interconnesso un insieme di sistemi dinamici che comunicano tra di loro.
- Sistemi in serie
  due sistemi $G_{1}(s), G_{2}(s)$ sono detti in serie se l'uscita del primo corrisponde con l'ingresso del secondo $Y_{1}(s) = U_{2}(s)$ e la cui funzione di trasferimento è identificata da $G(s) = G_{2}(s) G_{1}(s)$
  Si potrebbero aggiungere i passaggi matematico che portano alla scrittura della funzione di trasferimento del sistema retroazionato
- Sistemi in parallelo
  due sistemi $G_{1}(s), G_{2}(s)$ sono detti in parallelo se condividono l'ingresso e l'uscita del sistema interconnesso è pari alla somma delle singole uscite $U_{1}(s) = U_{2}(s) \wedge Y(s) = Y_{1}(s) + Y_{2}(s)$
- Sistemi in retroazione
  un sistema è detto retroazionato se l'uscita $Y_{1}(s)$ del primo sistema $G_{1}(s)$ detto processo, viene processata dal sensore $G_{2}(s)$ e alimenta l'ingresso del processo e quindi $U_{1}(s) = U(s) - Y_{2}(s)$ e $Y_{1}(s) = U_{2}(s)$.
  Parlare anche delle 4 funzioni di trasferimento che descrivono il comportamento del sistema retroazionato
# 14. Analisi della BIBO stabilità per un sistema interconnesso in retroazione negativa con l'ausilio del criterio di Routh (esercizio con parametro K)
#esercizio
Questo algoritmo ci permette di verificare se sono presenti o meno poli nel RHP, per verificare una eventuale BIBO stabilità di un sistema, ma necessita di chiudere la retroazione.
Per prima cosa assembliamo $n_L(s) + d_L(s)$
$$
p(s) = s^n + a_{1}s^{n-1} +\dots+a_{n-1}s + a_n
$$
**C.N.** $a_{1},a_{2},\dots,a_n>0$
se non si verifica questa condizione sappiamo già, senza necessariamente dover applicare il criterio, che ci sono poli nel semipiano destro.
Per un trinomio di $2°$ grado questa condizione necessaria è anche sufficiente.

Creiamo la tabella di Routh (esempi sul quaderno) e verifichiamo se ci sono variazioni in segno tra i termini della prima colonna. Il numero di variazioni in segno rappresenta il numero di poli nel RHP.

Il criterio di Routh risulta molto utile nello studio della BIBO stabilità di sistemi in retroazione parametrici.

# 15. Assegnata una FdT valutare le pulsazioni di Taglio del diagramma di Bode Asintotico (modulo e fasi), le pendenze iniziali e ﬁnali sul diagramma dei moduli, la fase iniziale e ﬁnale sul diagramma delle fasi
#esercizio
Per calcolare le pulsazioni di taglio calcoliamo come il valore assoluto di zeri e poli
$$\begin{array}{c}\Omega_i = |z_i| \\ \omega_i = |p_i|\end{array}$$

---
La pendenza/fase iniziale è data dalla molteplicità dei poli nell'origine ($-20\ dB/dec$ per polo nelle fasi e $-\frac{\pi}{2}$ rad nelle fasi) e nelle fasi se $k_b < 0$ si sottrae $180^\circ$

---
La pendenza finale è data da
$$m_f = m_0 + 20 \ dB / dec \cdot (n_z - n_{p})$$
dove $m_0$ pendenza iniziale dettata dai poli nell'origine, $n_p$ numero di poli (esclusi quelli nell'origine) e $n_z$ numero di zeri.
Per le fasi invece dobbiamo distinguere poli stabili/instabili e zeri a fase minima/non minima
$$f_f = f_0 + \left( -\frac{\pi}{2} \cdot n_{ps} + \frac{\pi}{2} \cdot n_{p i} + \frac{\pi}{2} \cdot n_{z m} - \frac{\pi}{2} \cdot n_{zn} \right)$$
con $f_0$ fase iniziale dettata dai poli nell'origine, $n_{p s}$ numero di poli instabili, $n_{p i}$ numero di poli instabili (anche in questo caso esclusi quelli nell'origine), $n_{z m}$ numero di zeri a fase minima e $n_{z n}$ numero di zeri a fase non minima.
Se sono poli/zeri complessi e coniugati invece di $20 \ dB / dec$ o $\frac{\pi}{2}$ saranno $40 \ dB / dec$ o $\pi$
# 16. Cosa è la banda passante
La banda passante è l'intervallo di pulsazione all'interno del quale il modulo della risposta in frequenza è piatto e la fase risulta essere trascurabile
$$
\begin{array}{c}
\frac{1}{\sqrt{ 2 }} \leq \frac{|G(j \omega)|}{R} \leq \sqrt{ 2 } \\
-3 \ dB - R_{d B} \leq |G(j \omega)|_{dB} \leq 3 \ dB - R_{dB}
\end{array}
$$
dove $R>0$ valore di riferimento.

Può essere utilizzabile come un indicatore di fedeltà del sistema: il sistema è in grado di riprodurre fedelmente l'ingresso nelle pulsazioni all'interno della banda passante.

Inoltre definiamo la pulsazione di banda passante $\omega_{BW}$ come quella particolare pulsazione a partire dal quale il modulo non è più considerabile piatto.

In base al valore che assume $R$ definiamo vari tipi di banda passante
>[!multi-column]
>
>>[!important] Passa basso
>>$$R = \left|\left.G(j \omega)\right|_{\omega = 0}\right| = |G(j 0)| = |G(0)|$$
>>$$\Omega =[0,\omega_{BW})$$
>>![[1. Sistemi dinamici-1777904882625.webp]]
>
>>[!important] Passa banda
>>$$R = \max|G(j \omega)|$$
>>$$\Omega = (\omega_{BW_{1}}, \omega_{BW_{2}})$$
>>![[1. Sistemi dinamici-1777904931127.webp]]
>
>>[!important] Passa alto
>>$$R = \left|\left.G(j \omega)\right|_{\omega = \infty}\right| = |G(j \infty)| = |G(\infty)|$$
>>$$\Omega = [\omega_{BW}, + \infty)$$
>>![[1. Sistemi dinamici-1777904920151.webp]]


# 17. Cosa è il picco di risonanza
Il picco di risonanza è il massimo valore che può assumere il modulo della risposta in frequenza nel caso in cui la funzione modulo non è monotona decrescente e quindi $0 < \delta < \frac{1}{\sqrt{ 2 }}$
ed è calcolabile come
$$
\begin{array}{c}
M_r = \frac{1}{2 \delta \sqrt{  1- \delta^2 }} \\
M_{r,dB} = 20 \log_{10} \left( \frac{1}{2 \delta \sqrt{  1-\delta^2 }} \right)
\end{array}
$$
# 18. Solo enunciato del criterio di Nyquist e del suo corollario (condizione sufficiente)
Il criterio di Nyquist è uno strumento che ci permette di determinare la stabilità interna di un sistema retroazionato al netto di cancellazioni nel semipiano destro.
Applicando il teorema dell'argomento alla risposta in frequenza $L(s)$ sul cammino di Nyquist $\Gamma$ 
$$
N = \frac{\left.\Delta arg(L(s))\right|_{s \in \Gamma \to \text{rispetto a -1 +j0}}}{2 \pi} = Z-P \implies Z=N+P
$$
Il numero di zeri nel RHP di $1+L(s)$ è pari al numero di giri $N$ attorno al punto critico $-1+j0$ sommati al numero dei poli nel RHP.
Il numero di poli $P$ è un valore calcolabile a ciclo aperto in quanto coincidono con i poli di $L(s)$.

Di conseguenza per garantire stabilità $Z = 0$ dobbiamo  $N = -P$.

---

Il criterio di Bode è un sostituto efficace del criterio di Nyquist per una particolare categoria di funzioni di anello andando ad ispezionare i diagrammi di Bode.

La categoria di funzioni su cui è utilizzabile il criterio di Bode sono caratterizzate da:
1. $L(s)$, al netto di effetti integrali, BIBO stabile
2. Il guadagno di Bode $k_b>0$ ricordando che $\lim_{ s \to 0 }s^\mu L(s)$
3. Il diagramma dei moduli di $L(s)$ deve essere una funzione monotona decrescente in $\omega$ (se è presente risonanza non possiamo usare il criterio)
4. $\omega_c$ è unica

Affinché la retroazione sia BIBO stabile $\Longleftrightarrow$ $\Phi_M > 0$


# 19. Margine di Guadagno
Il margine di guadagno misura in termini di ampiezza la distanza della funzione di anello dal punto critico $1-j 0$ sul diagramma polare e rappresenta un fattore di tolleranza che la retroazione presenta rispetto a perturbazioni di tipo guadagno.

>[!multi-column]
>
>>[!blank]
>>Definiamo la ultimate frequency $\omega_{\pi}:\angle L(j \omega_{\pi}) = -\pi$.
>>Possiamo calcolare il margine di guadagno come
>>$$k = \frac{1}{|\overline{OA}|}$$
>>Se il sistema è stabile $k > 1$
>
>>[!blank]
>>![[2. Sistemi interconnessi-1779109698143.webp|center|500]]

Ponendo il margine come guadagno della funzione di anello e valutandola in $\omega_\pi$
$$
k L(j \omega_\pi) = \frac{1}{|\overline{OA}|} L(j \omega_\pi) = \frac{1}{|L(j \omega_\pi)|} L(j \omega_\pi) = -1
$$
notiamo come la funzione di anello sul diagramma polare passi esattamente dal punto critico.

Possiamo osservare il margine di ampiezza anche dal diagramma di Bode:
![[2. Sistemi interconnessi-1779111410448.webp|center|500]]


Se la funzione di anello non interseca l'asse reale negativo il margine di guadagno è $k = \infty$
# 20. Margine di Fase
Il margine di fase misura in termini di radianti la distanza goniometrica della funzione di anello dal punto critico $1-j 0$ sul diagramma polare e rappresenta un fattore di tolleranza che la retroazione presenta rispetto a perturbazioni di tipo ritardo/anticipo.

>[!multi-column]
>
>>[!blank]
>>Definiamo la pulsazione di attraversamento $\omega_c>0: |L(j \omega_c)| = 1$
>>In corrispondenza della pulsazione di attraversamento la funzione di anello attraversa la circonferenza critica.
>>Possiamo quindi calcolare il margine di fase come
>>$$\Phi_M = \pi - |\angle L(j \omega_c)|$$
>
>>[!blank]
>>![[2. Sistemi interconnessi-1779112083289.webp|center|600]]

Aggiungendo uno sfasatore elementare alla catena diretta con sfasamento pari al margine di fase e valutando la funzione di anello nella pulsazione di attraversamento
$$
e^{j \Phi_M} L(j \omega_c) = -1
$$
notiamo come la funzione di anello sul diagramma polare passi esattamente dal punto critico.

Possiamo osservare il margine di fase anche dal diagramma di Bode:
![[2. Sistemi interconnessi-1779112984465.webp|center|500]]

Se la funzione di anello non interseca l'asse reale negativo il margine di fase è $\Phi_M = \infty$
# 21. Stabilità interna della retroazione, solo enunciato
Lo schema di controllo è stabile internamente se per ogni terna di ingressi $(R,D,N)$ limitati, la corrispondente terna di uscite forzate dello schema di controllo $(Y,E,U)$ è limitata.
L'uscita misurata è calcolata come somma di segnali considerati tra questi, quindi se gli altri sono BIBO stabili lo sarà anch'essa.

Da questa definizione ne ricaviamo la condizione necessaria per la stabilità interna dello schema di controllo del sistema in retroazione:
Siano le uscite combinazione lineare degli ingressi
$$
\begin{array}{c}
Y = W_{11} \cdot R + W_{12} \cdot D + W_{13} \cdot N \\
E = W_{21} \cdot R + W_{22} \cdot D + W_{23} \cdot N \\
U = W_{31} \cdot R + W_{32} \cdot D + W_{33} \cdot N
\end{array}
$$
dove $W_{ij}$ FdT
la stabilità interna del sistema è garantita se e solo se tutti i poli delle FdT si trovano tutti nel semipiano sinistro.

Sotto ipotesi di assenza di cancellazioni polo/zero nel semipiano destro la stabilità interna della retroazione è verificabile tramite il criterio di Nyquist e suoi corollari applicati alla funzione di anello, senza dover chiudere necessariamente la retroazione.
# 22. Cosa rappresentano le funzioni di Sensitività e Sensitività complementare nella retroazione negativa e qual è il loro legame
Ipotizzando un sistema retroazionato in cui disturbo di carico $D$ e rumore di misura $N$ sono nulli
![[2. Sistemi interconnessi-1779396043621.webp|center|500]]
$$
W_{11}(s) = \frac{Y(s)}{R(s)}
$$
tramite passaggi algebrici ne deriviamo che
$$
W_{11}(s) = \frac{L(s)}{1+L(s)} = T(s)
$$
la **sensitività complementare** che rappresenta la FdT a ciclo chiuso a fronte di un generico riferimento al netto di $N=0$ e $D=0$.

---

Mantenendo la stessa ipotesi di disturbo di carico e rumore di misura nulli
$$
W_{21}(s) = \frac{E(s)}{R(s)}
$$
tramite passaggi algebrici ne deriviamo che
$$
W_{21}(s) = \frac{1}{1+L(s)} = S(s)
$$
la **sensitività** che rappresenta la FdT che descrive quanto il sistema si discosta dal comportamento ideale al netto di $N=0$ e $D=0$.

---

Definite le funzioni ne possiamo ricavare la seguente relazione:
$$
S(s) + T(s) = \frac{1}{1+L(s)} + \frac{L(s)}{1+L(s)} = 1
$$
sono complementari.

# 23. Precisione statica: asservimento di posizione
Definendo l'errore come
$$
e(t) = r(t)-y(t)
$$
nell'asservimento di posizione analizziamo l'errore di posizione $e_{\infty,p} = \lim_{ t \to \infty }e(t)$, per poterlo minimizzare, in caso di ingresso a gradino $r(t) = R \cdot 1(t)$.
Per il suo calcolo passiamo al dominio di Laplace e, se il sistema è stabile internamente, facciamo uso del teorema del valore finale
$$
e_{\infty,p}(t) = \lim_{ s \to 0 } s E(s)
$$
essendo $E(s)$ definita come
$$
E(s) = S(s) \cdot R(s) = \frac{1}{1+L(s)} \cdot \frac{1}{s}
$$
tornando all'errore di posizione
$$
e_{\infty,p} = \lim_{ s \to 0 } s \cdot \frac{1}{1+L(s)} \cdot \frac{1}{s} = \frac{1}{1+ \lim_{ s \to 0 } L(s)} 
$$
Ne concludiamo che l'errore di posizione viene diminuito all'aumentare della costante di posizione $k_p = \lim_{ s \to 0 }L(s)$.

Per aumentare il valore della costante possiamo agire sulla funzione di anello in due modi:
- verificare se è presente un effetto integrale nel processo o aggiungerlo al controllore azzera completamente l'errore, ma l'aggiunta di un polo nell'origine diminuisce il margine di fase di $\frac{\pi}{4}$. Questa operazione prende il nome di reset dell'errore;
- se non siamo disposti a perdere margine di fase non possiamo azzerare completamente l'errore, ma possiamo solo diminuirlo aggiungendo un guadagno $k$ al controllore

# 24. Precisione statica: asservimento di velocità
Definendo l'errore come
$$
e(t) = r(t)-y(t)
$$
nell'asservimento di velocità analizziamo l'errore di posizione $e_{\infty,p} = \lim_{ t \to \infty }e(t)$, per poterlo minimizzare, in caso di ingresso a gradino rampa $r(t) = R \cdot t \cdot 1(t)$.
Per il suo calcolo passiamo al dominio di Laplace e, se il sistema è stabile internamente, facciamo uso del teorema del valore finale
$$
e_{\infty,p}(t) = \lim_{ s \to 0 } s E(s)
$$
essendo $E(s)$ definita come
$$
E(s) = S(s) \cdot R(s) = \frac{1}{1+L(s)} \cdot \frac{1}{s^2}
$$
tornando all'errore di posizione
$$
e_{\infty,p} = \lim_{ s \to 0 } s \cdot \frac{1}{1+L(s)} \cdot \frac{1}{s^2} = \frac{1}{1+ \lim_{ s \to 0 } sL(s)}
$$
Ne concludiamo che l'errore di posizione viene diminuito all'aumentare della costante di posizione $k_v = \lim_{ s \to 0 }sL(s)$.

Per aumentare il valore della costante possiamo agire sulla funzione di anello in due modi:
- verificare se sono presenti effetti integrali nel processo ed eventualmente aggiungerli al controllore. Diversamente dall'asservimento di posizione non è sufficiente un solo effetto integrale (che rende l'errore finito ma non nullo), ma per il effettuare il reset abbiamo bisogno di due effetti integrali, andando quindi a perdere $\frac{\pi}{2}$ sul margine di fase;
- possiamo modulare l'errore con l'aggiunta di una costante, ma non è sufficiente, dobbiamo aggiungere almeno un effetto integrale per rendere l'errore finito
# 25: Precisione statica: reiezione di un disturbo a gradino
In presenza di un disturbo di carico a gradino $d(t) = D \cdot 1(t)$
![[3. Sistemi interconnessi-1779987541699.webp|center|500]]
possiamo scomporre l'uscita per evidenziare l'effetto del disturbo di carico sull'uscita
$$
Y_d(s) = \frac{G(s)}{1+C(s)G(s)} \cdot D(s)
$$
per aumentare la precisione dell'uscita dobbiamo quindi minimizzare l'effetto dell'errore a regime dovuto al disturbo di carico
$$
y_{d,\infty} = \lim_{ t \to \infty } y_d(t)
$$
Se il sistema è stabile internamente possiamo applicare il teorema del valore finale
$$
y_{d,\infty} = \lim_{ s \to 0 } s Y_d(s) = \lim_{ s \to 0 } s \cdot \frac{G(s)}{1+C(s)G(s)} \cdot \frac{D}{s} = \lim_{ s \to 0 } \frac{G(s)}{1+C(s)G(s)} 
$$
Per minimizzare l'effetto dell'errore dobbiamo aumentare il denominatore: possiamo modificare solo il controllore:
- tramite l'inserimento di un effetto integrale azzeriamo l'errore, ma perdiamo $\frac{\pi}{4}$ sul margine di fase
- tramite un guadagno possiamo modulare l'errore per diminuirlo

Contrariamente ad errori di posizione/velocità gli effetti integrali del processo non hanno alcuna influenza per ragioni topologiche (data la posizione dell'inserimento del disturbo di carico nello schema di controllo) e per ragioni algebriche (data la configurazione ottenuta).
# 26. Legame pulsazione di attraversamento - banda passante
La banda passante del sistema a ciclo chiuso
$$
\frac{R}{\sqrt{ 2 }} \leq T(j \omega) \leq R  \sqrt{ 2 }
$$
essendo la sensitività complementare un passa basso
$$
R = T(0) \simeq 1 \implies \frac{1}{\sqrt{ 2 }} \leq T(j\omega) \leq \sqrt{ r } \implies -3\ dB \leq T(j \omega)|_{dB} \leq +3 \ dB
$$
calcolando $T(s)$ in $-3\ dB$ e $+3\ dB$ otterremo due circonferenze di ampiezza $\sqrt{ 2 }$ centrate rispettivamente in $(-2,0)$ e $(+1,0)$.

Rappresentando graficamente sul diagramma polare la banda passante e la pulsazione di attraversamento possiamo notare come la pulsazione di attraversamento $\omega_c$ sia sempre un minorante della pulsazione di banda passante $\omega_{BW}$.
![[Domande orale-1782401714708.webp|center|600]]
Ne concludiamo che se si vuole aumentare la velocità di risposta e la fedeltà del sistema, bisogna progettare la $L(s)$ che abbia un $\omega_c$ maggiore, trascinando verso destra anche $\omega_{BW}$.
# 27. Legame banda passante - tempo di salita
Per descrivere il legame tra banda passante e tempo di salita dobbiamo per prima cosa definire l'identità di Parseval, che ci permette di definire una relazione tra dominio del tempo e dominio della frequenza:
$$
\int_0^{+\infty} |g(t)|^2 dt = \frac{1}{2 \pi} \int_0^{+\infty} |G(j \omega)|^2 d \omega
$$
approssimiamo la risposta al gradino con delle spezzate
![[3. Sistemi interconnessi-1779987567940.webp|center|400]]
e, avendo definito la nostra porzione di interesse $(0.1,0.9)$ e calcoliamo la risposta all'impulso in questo intervallo, sapendo che l'impulso è la derivata del gradino
![[3. Sistemi interconnessi-1779987576224.webp|center|400]]
Sapendo quindi che il coefficiente angolare del gradino è $m= \frac{0.8}{t_r}$ applichiamo l'identità di Parseval
$$
\displaylines{
\int_{t_{1}}^{t_{2}} \left( \frac{0.8}{t_r} \right)^2 dt = \int_{-\omega_{BW}}^{+\omega_{BW}} d \omega \\
\left( \frac{0.8}{t_r} \right)^2 (t_{2}-t_{1}) = \frac{\omega_{BW}}{\pi}
}
$$
Essendo $t_r = t_{2}-t_{1}$
$$
\frac{0.64}{t_r} = \frac{\omega_{BW}}{\pi}
$$
Ne concludiamo che $\omega_{BW}$ e $t_r$ sono inversamente proporzionali
$$
\omega_{BW} \uparrow \hspace{8ex} t_r \downarrow
$$
# 28. Legame margine di fase - smorzamento
Al fine di ridurre gli effetti di eventuali ingressi esogeni all'interno del sistema in retroazione si è osservato come si necessita di:
- BF: massimizzare il valore del modulo per ridurre l'errore di inseguimento
- AF: minimizzo il valore del modulo per ridurre l'effetto dell'errore di misura
Di conseguenza all'interno della media frequenza è necessario garantire una pendenza che mantenga comunque stabile il sistema retroazionato. Di conseguenza, si è notato in alcuni casi analizzati che il sistema è approssimabile ad un sistema del secondo ordine con poli complessi e coniugati e, quindi, è logico stabilire una relazione tra lo smorzamento e il margine di fase.
Nel caso in cui la media frequenza della FdT della retroazione può essere approssimata con un sistema del secondo ordine otteniamo
$$
T(s) = \frac{L(s)}{1+L(s)} = \frac{\omega_n^2}{s^2+2\delta \omega_n s + \omega_n^2}
$$
risolvendo questa equazione per trovare $L(s)$ otteniamo
$$
L(s) = \frac{\omega_n^2}{s(2 \delta \omega_n +s)}
$$
Siamo interessati al valore di $L$ in corrispondenza della pulsazione di attraversamento
$$
L(j \omega_c) = \frac{\omega_n^2}{j \omega_c (2 \delta \omega_n + j \omega_c)} = \frac{\omega_n^2}{-\omega_c^2 + j 2 \delta \omega_c \omega_n} = \frac{1}{-\frac{\omega_c^2}{\omega_n^2} + j 2 \delta \frac{\omega_c}{\omega_n}}
$$
Sapendo che $L(j \omega_c) = - \cos(\Phi_M) - j \sin(\Phi_M)$ %% (volendo si capisce con il disegno) %%
poniamo l'uguaglianza
$$
\frac{1}{-\frac{\omega_c^2}{\omega_n^2} + j 2 \delta \frac{\omega_c}{\omega_n}} = - \cos( \Phi_M) - j \sin(\Phi_M)
$$
moltiplichiamo e dividiamo il secondo membro per portare tutto a denominatore
$$
\frac{1}{-\frac{\omega_c^2}{\omega_n^2} + j 2 \delta \frac{\omega_c}{\omega_n}} = - \cos( \Phi_M) - j \sin(\Phi_M) \cdot \frac{- \cos(\Phi_M) - j \sin (\Phi_M)}{-\cos(\Phi_M) - j \sin(\Phi_M)} = \frac{1}{- \cos(\Phi_M) +j \sin(\Phi_M)}
$$
Risolvendo l'uguaglianza dividendo parte reale e parte immaginaria otteniamo
$$
\begin{cases}
\left( \frac{\omega_c}{\omega_n} \right)^2 = \cos (\Phi_M) \\
2 \delta \frac{ \omega_c}{\omega_n} = \sin (\Phi_M)
\end{cases}
$$
Per angoli piccoli possiamo approssimare $\cos(\Phi_M) \approx 1 \implies \frac{\omega_c}{\omega_n} \approx 1$ e $\sin(\Phi_M) \approx \sin(\Phi_M)$
$$
\delta \approx \frac{\Phi_M}{2} = \frac{\Phi_M^\circ}{100}
$$
Ne concludiamo che lo smorzamento $\delta$ e il margine di fase $\Phi_M$ sono direttamente proporzionali.
# 29. Rete anticipatrice, quando si utilizza
Nella progettazione di un sistema di controllo spesso è necessario rispettare dei vincoli di prestazione. Per farlo abbiamo la possibilità di modificare il comportamento della retroazione nella media frequenza, tramite l'applicazione di una rete correttrice, lasciando invariata la bassa frequenza (già modificata per la correzione di errori).

Una rete anticipatrice è una coppia polo/zero a polo dominante che rispetta le caratteristiche di BIBO stabilità e fase minima
$$
C_{\text{lead}}(s) = \frac{1+s\tau_z}{1+s\tau_p} = \frac{1+T s}{1+\alpha T s} \hspace{8ex} \tau_p,\tau_z > 0 \hspace{8ex} \tau_p < \tau_z
$$
le cui pulsazioni di taglio sono
$$
\omega_p = \frac{1}{\tau_p} \hspace{8ex} \omega_z = \frac{1}{\tau_z} \hspace{8ex} \omega_z < \omega_p
$$
La rete anticipatrice aggiunge un guadagno nelle alte frequenze dei moduli di $\frac{1}{\alpha}$:
$$
\lim_{ s \to \infty } \frac{1+s \tau_z}{1+s\tau_p} = \frac{\tau_z}{\tau_p} = \frac{1}{\alpha} \implies 0 < \alpha = \frac{\tau_p}{\tau_z} < 1
$$
e aggiunge un anticipo nella fase in corrispondenza della pulsazione di attraversamento $\omega_c$
![[3. Sistemi interconnessi-1780494728522.webp|center|600]]
In generale possiamo dire che una rete anticipatrice permette di aumentare la pulsazione di attraversamento e un aumento del margine di fase, al costo di un guadagno nelle alte frequenze che aumenta il rumore.

Nel caso di un riferimento a gradino il sistema ha una risposta transitoria più pronta:
- $\Phi_M \uparrow \ \delta \uparrow \ S \downarrow$
- $\omega_c \uparrow \approx \omega_{BW} \uparrow \ t_{s,5} \downarrow$

Nel caso di risposta in frequenza otteniamo una risposta più piatta nella banda passante e un miglioramento delle caratteristiche di fedeltà del sistema visto come filtro
- $\Phi_M \uparrow \ M_r \downarrow$
- $\omega_c \uparrow \approx \omega_{BW} \uparrow$


%% (come si possono calcolare i valori di tau, non so se aggiungerlo) %%
# 30. Rete attenuatrice, quando si utilizza
Nella progettazione di un sistema di controllo spesso è necessario rispettare dei vincoli di prestazione. Per farlo abbiamo la possibilità di modificare il comportamento della retroazione nella media frequenza, tramite l'applicazione di una rete correttrice, lasciando invariata la bassa frequenza (già modificata per la correzione di errori) e la alta frequenza (per evitare rumore).

Una rete attenuatrice è una coppia polo/zero a zero dominante che rispetta le caratteristiche di BIBO stabilità e fase minima
$$
C_{\text{lag}}(s) = \frac{1+s \tau_p}{1+ s\tau_z} = \frac{1+ Ts}{1+\alpha Ts}  \hspace{8ex} \tau_p, \tau_z > 0 \hspace{8ex} \tau_p > \tau_z
$$
le cui pulsazioni di taglio sono
$$
\omega_p = \frac{1}{\tau_p} \hspace{8ex} \omega_z = \frac{1}{\tau_z} \hspace{8ex} \omega_p < \omega_z
$$

La rete attenuatrice aggiunge una attenuazione nei moduli in alta frequenza di $\alpha$:
$$
\lim_{ t \to \infty } \frac{1+ s \tau_z}{1+ s\tau_p} = \frac{\tau_z}{\tau_p} = \frac{1}{\alpha} \implies 0 < \alpha = \frac{\tau_p}{\tau_z} < 1 
$$
e aggiunge un ritardo in fase in corrispondenza della pulsazione di attraversamento $\omega_c$

![[3. Sistemi interconnessi-1780843680118.webp|center|500]]

In generale possiamo dire che la rete attenuatrice permette di diminuire la pulsazione di attraversamento, diminuisce il rumore in AF, ma abbiamo un sistema meno pronto e meno fedele ed una riduzione del margine di fase

Nel caso di riferimento a gradino il sistema ha una risposta transitoria meno pronta:
- $\Phi_M \downarrow \ \delta \downarrow \ S \uparrow$
- $\omega_c \downarrow \approx \omega_{BW} \downarrow \ t_{s,5} \uparrow$

Nel caso di risposta in frequenza aumenta il picco di risonanza e peggiorano le caratteristiche di fedeltà del sistema visto come filtro:
- $\Phi_M \downarrow \ M_r \uparrow$
- $\omega_c \downarrow \approx \omega_{BW} \downarrow$

