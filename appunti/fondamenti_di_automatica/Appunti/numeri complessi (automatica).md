#appunti 
#automatica
[[4. Numeri complessi (algebra)]]
Definiamo come $s \in \mathbb{C}$  o $z$ un numero complesso in automatica
Può essere rappresentato come
$$
s = a + jb = (a,b)
$$
con $a=\mathrm{Re}(s)$ e $b=\mathrm{Im}(s)$
per l'**unità immaginaria** utilizziamo la $j$ invece della $i$ in quanto solitamente quest'ultima viene utilizzata in ingegneria per rappresentare l'intensità di corrente.
Oltre alla [[4. Numeri complessi (algebra)|somma e il prodotto]] già definiti chiamiamo coniugazione di $s=a+jb$
$$
\overline{s} = a-jb
$$
con simmetria rispetto alle ascisse nel piano di Gauss
# Formula di Eulero
Partendo da $e^{j\theta}$ ricordiamo l'[[4. Calcolo differenziale#Polinomi di Maclaurin|espansione in serie di Maclaurin]] di $e^x$ come
$$
e^x = 1+x+\frac{x^2}{2!}+\frac{x^3}{3!}+\dots+\frac{x^n}{n!}+\dots
$$
sapendo che l'unità immaginaria elevata a potenza restituisce
$$
j^0 = 1 \hspace{4ex} j^1 = j \hspace{4ex} j^2 = -1 \hspace{4ex} j^3=-j \hspace{4ex} j^4 = 1
$$
sequenza ciclica di periodo $4$
possiamo scrivere lo sviluppo per $e^{j\theta}$ come
$$
e^{j\theta} = 1+j\theta - \frac{\theta^2}{2!} -j \frac{\theta^3}{3!} + \frac{\theta^4}{4!} + j \frac{\theta^5}{5!}+\dots
$$
analizzando il risultato possiamo notare come otteniamo due sequenze distinte
$$
e^{j\theta} = \overbrace{\left( 1-\frac{\theta^2}{2!}+ \frac{\theta^4}{4!} - \frac{\theta^6}{6!} + \frac{\theta^8}{8!} \right)}^{\cos(\theta)} + j \overbrace{\left( \theta - \frac{\theta^3}{3!} + \frac{\theta^5}{5!}-\frac{\theta^7}{7!}+\dots \right)}^{\sin(\theta)}
$$
possiamo notare come le due sequenze siano gli sviluppi di Maclaurin rispettivamente si $\cos(\theta)$ e $\sin(\theta)$.
Possiamo quindi definire la **formula di Eulero** come
$$
e^{j\theta} = \cos(\theta) + j \sin(\theta)
$$
![[Pasted image 20260310184747.png|center|400]]
Essendo la distanza dal centro per il teorema di pitagora $|s| = \sqrt{ a^2 + b^2 }$ nel nostro caso utilizzando la formula di Eulero otteniamo $|e^{j\theta}| = 1 \forall \theta \in \mathbb{R}$
$\theta$ prende il nome di **argomento** o **fase**
>[!important] $\theta$ è la distanza goniometrica calcolata a partire dal semiasse reale positivo $(\theta=0)$ ruotando tale semiasse e facendo coincidere in termini di direzione con la direzione di $e^{j\theta}$ (senso antiorario)

- antiorario (positivo) $\to$ anticipo
- orario (negativo) $\to$ ritardo
$\therefore$ $\theta = + 30°$ in anticipo
$\therefore \theta = -330°$ in ritardo
il ritardo domina l'anticipo.
## Formule di Eulero dirette
Note le formule della circonferenza e noto $e^{j\theta}$
Possiamo calcolare il coniugato $\overline{e^{j\theta}} = e^{-j\theta} = \cos(\theta) - j \sin(\theta) = \cos(-\theta) + j\sin(-\theta)$
## Formule di Eulero inverse
Noto $e^{j\theta}$ e $e^{-j\theta}$
$$
\left\{\begin{array}{l}s = a+jb \\ \overline{s} = a-jb\end{array}\right. \implies \left\{\begin{array}{l}\frac{s+\overline{s}}{2} = \mathrm{Re}(s) = a \longrightarrow \frac{1}{2}s+\frac{1}{2}\overline{s} \\ \frac{s-\overline{s}}{2j} = \mathrm{Im}(s) = b \longrightarrow \frac{1}{2j}s-\frac{1}{2j}\overline{s}\end{array}\right.
$$
$a$ e $b$ quindi non sono altro che una combinazione lineare di $s$ e del suo coniugato
$$
\left\{\begin{array}{l}\cos(\theta) = \frac{e^{j\theta}+e^{-j\theta}}{2} \\ \sin(\theta) = \frac{e^{j\theta}-e^{-j\theta}}{2j}\end{array}\right.
$$
## Modulo dell'esponenziale di un numero complesso generico
Dato $|e^s|$ con $s=a+jb = \sigma + j \omega$
$$
e^s = e^{\sigma+j\omega} = e^\sigma \cdot e^{j\omega}
$$
$$
\implies |e^\sigma \cdot e^{j\omega}| = |e^\sigma||e^{j\omega}|
$$
$|e^\sigma|$ è sempre positivo, quindi possiamo togliere il valore assoluto
$|e^{j\omega}|$ è la distanza dal centro di una formula di Eulero, che è sempre 1 essendo sulla circonferenza goniometrica
$$
=e^\sigma \cdot 1 = e^\sigma
$$
## Forma trigonometrica o forma polare
Dato un generico numero complesso $s=a+jb$ possiamo definire la sua distanza dal centro come $|s|=\sqrt{ a^2 + b^2 } = \rho$
![[Pasted image 20260310190442.png|center|300]]
con $\theta$ fase in anticipo, $a=\rho \cos (\theta)$ e $b=\rho \sin(\theta)$
$$
\implies s=\rho \cos(\theta) +j\rho \sin(\theta) = \rho \overbrace{(\cos(\theta) + j \sin(\theta))}^{e^{j\theta}} = \rho e^{j\theta}
$$
## Prodotto geometricamente
Dati $s_{1}=\rho_{1}e^{j\theta_{1}}$ e $s_{2}=\rho_{2}e^{j\theta_{2}}$ definiamo
$$
s_{1}s_{2}=\rho_{1}e^{j\theta_{1}}\cdot \rho_{2}e^{j\theta_{2}}=(\rho_{1}\rho_{2})\cdot e^{j(\theta_{1}+\theta_{2})} = s = a+jb
$$
$$
\therefore
\begin{array}{c}
a=\rho_{1}\rho_{2} \cos(\theta_{1}+\theta_{2}) \\
b = \rho_{1}\rho_{2} \sin(\theta_{1}+\theta_{2})
\end{array}
$$
Il rapporto è una conseguenza semplice di questo, anche $\frac{1}{s}$
