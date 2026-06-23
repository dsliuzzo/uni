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
Un sistema è detto tempo invariante se ne è garantita la totale ripetibilità: a parità di stato inizia-
le e di segnale d’ingresso applicato, si ottiene la medesima risposta in uscita indipendentemente
dall’istante temporale in cui viene effettuato l’esperimento.
[...]
# 3. Causalità
[...]
# 4. Che cosa è una funzione di classe L
È detta di classe L una funzione $f(t)$ che è L-trasformabile e quindi valgono le condizioni necessarie alla convergenza:
- funzione continua a destra di $0$
  $$\exists \lim_{ t \to 0^+ } f(t) \in (-\infty,+\infty)$$
- continua a tratti in $(0,+\infty)$
- di ordine esponenziale $\alpha$: esiste una coppia $k > 0, \alpha \in \mathbb{R}$ tale per cui
  $$|f(t)|\leq k e^{\alpha t}$$
# 5. Assegnata una funzione di classe L, individuare l'ascissa di convergenza
È detta ascissa di convergenza quel valore $\alpha$ tale per cui, assegnato un valore di $s:\mathrm{Re}(s) = \sigma>\alpha$, la funzione nel dominio di Laplace converge ed è calcolabile nel dominio del tempo trovando $\alpha$ da questa definizione $|f(t)|\leq k e^{\alpha t}$ oppure direttamente nel dominio di Laplace come la parte reale del polo più a destra.
# 6. Che cosa è la funzione di trasferimento, sue definizioni
La FdT ha 3 definizioni:
1. Il rapporto tra la risposta del sistema e l'ingresso nel dominio di Laplace
   $$G(s) = \frac{Y(s)}{U(s)}$$
2. Quella particolare uscita con ingresso che ha trasformata di Laplace pari a 1
   $$Y (s) = \left. G(s) \cdot U(s) \right|_{U(s) = 1}$$
3. L'uscita forzata di un sistema LTI-TC il cui ingresso è l'impulso di Dirac
# 7. Determinare i modi naturali di un sistema nota al sua FdT
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
Per calcolare la risposta al gradino per prima cosa dobbiamo definire l'ingresso nel dominio di Laplace come $U(s) = \frac{1}{s}$, che comporrà quindi una risposta nel dominio di Laplace data da
$$
Y(s) = G(s) \cdot \frac{1}{s}
$$
A questo punto possiamo procedere con la scomposizione in fratti semplici, l'applicazione della formula di Heaviside per determinare i coefficienti e l'antitrasformata di Laplace delle funzioni note.
Una volta riportato nel dominio del tempo possiamo scomporre la risposta transitoria dalla risposta a regime applicando il teorema del valore finale (per calcolare la risposta a regime), se il sistema è BIBO stabile o comunque osservando la risposta nel dominio del tempo, possiamo dedurre che, tutti i termini che dipendono da $t$ comporranno la risposta transitoria, mentre i termini costanti comporranno la risposta a regime.
# 9. BIBO stabilità, definizione e criteri (solo enunciati)
Si definisce BIBO stabile un sistema che, dato in ingresso un segnale limitato, restituisce una uscita forzata limitata. Di conseguenza, un segnale non è BIBO stabile se esiste un ingresso limitato la cui uscita forzata corrispondente non è limitata.
Un sistema è definibile BIBO stabile se e solo se la sua risposta all'impulso è assolutamente integrabile
$$
\int_0^{+\infty} |g(t)|dt < +\infty
$$
E quindi i suoi poli hanno parte reale strettamente negativa.
In questo caso la FdT si dice di classe $L^1$.

[...] <- aggiungerei le altre definizioni di BIBO stabilità
# 10. Teorema della risposta armonica a partire dall'analisi della risposta ad un segnale periodico elementare
Sotto ipotesi di BIBO stabilità la risposta a regime di un sistema LTI dato in ingresso un segnale periodico elementare è calcolabile usando il teorema della risposta armonica, il cui enunciato dice:
Sia un segnale periodico elementare in ingresso
$$
u(t) = A \sin (\omega t + \theta)
$$
allora possiamo definire la risposta a regime corrispondente come
$$
y_{ss}(t) = Y \sin (\omega t + \xi)
$$
dove
$$
\frac{Y}{A} = |G(j \omega)| \hspace{8ex} \xi - \theta = \angle G(j \omega)
$$
di conseguenza
$$
y_{ss}(t) = A \cdot |G(j \omega)| \cdot \sin (\omega t + \angle G(j \omega) + \theta)
$$
# 11. Grafico qualitativo della risposta al gradino per un sistema assegnata la sua FdT
Per calcolare un grafico qualitativo dobbiamo seguire i seguenti passi (sotto ipotesi di BIBO stabilità):
1. teorema del valore iniziale
2. teorema del valore iniziale sulla derivata per capire la direzione dell'uscita
3. teorema del valore iniziale sulla derivata seconda per capire la concavità dell'uscita
4. teorema del valore finale per calcolare il valore di regime
5. approssimazione del tempo di assestamento ($t_{s,5} = 3 T)$, tempo di salita e massima sovraelongazione
eventuali altre cose da ricordare:
- se presente uno zero dominante a fase minima avremo un overshoot
- se presente uno zero a fase non minima avremo un undershoot (controfase)
- se sono presenti poli complessi e coniugati ci aspettiamo un grafico oscillatorio smorzato
# 12. Definizione di massima sovraelongazione, tempo di salita e tempo di assestamento
La massima sovraelongazione rappresenta il più grande errore relativo valutato sui punti stazionari della risposta al gradino rispetto al valore di regime($t=0$ escluso).
Il tempo di salita è l'intervallo di tempo necessario per passare dal 10\% al 90\% del valore di regime.
Il tempo di assestamento è l'istante di tempo a decorrere dal quale la risposta entra in una fascia di incertezza di ampiezza $\pm 5\%$ del valore di regime e non se ne discosta più.
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

# 15. Assegnata una FdT valutare le pulsazioni di Taglio del diagramma di Bode Asintotico (modulo e fasi), le pendenze iniziali e ﬁnali sul diagramma dei moduli, la fase iniziale e ﬁnale sul diagramma delle fasi
BELLA QUESTA DOMANDA
