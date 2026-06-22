# Linearità e/o Principio di Sovrapposizione degli effetti
La linearità è una delle proprietà dei sistemi dinamici. Siano due ingressi arbitrari $u'(\cdot)$ e $u''(\cdot)$ e due condizioni iniziali arbitrarie $x'_0$ e $x''_0$, tali per cui $u'(\cdot),u''(\cdot) \in U$ e $x'_0, x''_0 \in X$, si definisce lineare un sistema in cui stato e uscita sono una combinazione lineare delle funzioni di stato e uscita singolarmente applicate
$$
\begin{array}{c}
\phi(t,t_{0},a x'_0+b x''_0, a u'(\cdot) + b u''(\cdot)) = a\phi(t,t_{0},x'_0,u'(\cdot)) + b\phi(t,t_{0},x''_0,u''(\cdot))  \\
\eta(t,t_{0},a x'_0+b x''_0, a u'(\cdot) + b u''(\cdot)) = a \eta(t,t_{0},x'_0,u'(\cdot)) + b \eta(t,t_{0},x''_0,u''(\cdot)
\end{array}
$$
La linearità ci dà la possibilità di applicare il principio di sovrapposizione degli effetti: la risposta totale del sistema è calcolabile come la somma degli effetti alle singole cause che agiscono sul sistema.
