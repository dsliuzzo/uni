#appunti 
#ricerca_operativa 

# Problemi di ottimizzazione
Considerando una funzione $f:\mathbb{R}^n \to \mathbb{R}$ e un insieme $S \subseteq \mathbb{R}^n$, un problema di ottimizzazione $P$ consiste nel determinare, se esiste, un punto di minimo della funzione $f$ tra i punti dell'insieme $S$
$$
\left\{\begin{array}{l}\min & f(x) \\ \text{subject to } & x \in S\end{array}\right.
$$
- $x \in \mathbb{R}^n$ vettore delle **variabili di decisione**
- $S$ viene chiamato **insieme ammissibile**
- se $x \in S$ rende $x$ una **soluzione ammissibile**
- $f$ prende il nome di **funzione obbiettivo** (spesso viene associata al costo)
- $f$ è una funzione di $n$ variabili reali: $f(x) = f(x_{1}, x_{2}, \dots,x_n)$

>[!multi-column]
>>[!important] inammissibile
>>Il problema $P_{min}$ si dice inammissibile se non ammette soluzioni e cioè quando $S = \emptyset$
>
>>[!important] Illimitato inferiormente
>>Il problema $P_{min}$ si dice illimitato inferiormente se 
>>$\forall M > 0 \ \exists x \in S : f(x) < -M$
>

>[!important] Soluzione ottima
>Il problema $P_{min}$ ammette **soluzione ottima** (finita) $x^* \in S$ se
>$$f(x^*) \leq f(x) \ \forall x \in S$$

>[!question] Osservazione
>Le definizioni per il massimo sono duali. La funzione obbiettivo viene indicata con $h$

**EQUIVALENZA TRA PROBLEMI DI MASSIMO E DI MINIMO**
Ponendo $h(x) = -f(x)$ rispettivamente $P_{max}$ e $P_{min}$ allora
- Se $P_{min}$ è limitato inferiormente allora $P_{max}$ è limitato superiormente
- Se $P_{min}$ ammette soluzione ottima (finita) $x^* \in S$ allora
  $-f(x^*)\geq -f(x) \ \forall x \in S$ cioè $h(x^*) \geq h(x)$
  che equivale a dire che $x^*$ è soluzione ottima del problema $P_{max}$

Pertanto i problemi $P_{min}$ e $P_{max}$ sono **equivalenti a meno del segno**:
$$
x^* = \arg \min_{x \in S} f(x) = \arg \max_{x \in S} (-f(x)) \hspace{8ex} \min_{x \in S} f(x) = - \max_{x \in S}(-f(x)) 
$$

classificazione dei problemi di ottimizzazione
- problemi di ottimizzazione **continua** $x \in \mathbb{R}^n$
	- **vincolata** $S \subset \mathbb{R}^n$
	- **non vincolata** $S = \mathbb{R}^n$
- problemi di ottimizzazione **discreta** $x \in \mathbb{Z}^n$
	- a numeri **interi** $S \subseteq \mathbb{Z}^n$
	- **combinatoria** $S \subseteq \{0,1\}^n$
- problemi di ottimizzazione **mista**

## Problemi di programmazione matematica
>[!important] Insieme ammissibile
>L'insieme $S$ viene descritto tramite un insieme di diseguaglianze:
>$$S = \{x \in \mathbb{R}^n : g_{1}(x)\geq b_{1}, g_{2}(x) \geq b_{2},\dots,g_m(x) \geq b_m\}$$
>Dove $g_i:\mathbb{R}^n \to \mathbb{R}$, $b_i \in \mathbb{R}$, $\forall i \in \{1,2,\dots,m\}$

>[!important] Vincolo
>Ogni disuguaglianza $g_i(x) \geq b_i$ prende il nome di **vincolo** e l'insieme $S$ è formato da tutti i punti $x \in \mathbb{R}^n$ che rispetta il sistema di disuguaglianze

>[!multi-column]
>>[!important] Soddisfatto
>>in $\overline{x}$ se $g_i(\overline{x}) \geq b_i$
>
>>[!important] Violato
>>in $\overline{x}$ se $g_i(\overline{x}) < b_i$
>
>>[!important] Attivo
>>in $\overline{x}$ se $g_i(\overline{x}) = b_i$
>
>>[!important] Ridondante
>>se la sua eliminazione non modifica l'insieme ammissibile


$$
\left\{\begin{array}{l}\min & f(x)  \\  \text{s.t.} & g_{1}(x) \geq b_{1} \\  & g_{2}(x) \geq h_{2} \\  & \vdots \\  & g_m(x) \geq h_m\end{array}\right.
$$
Se $f$ è una funzione lineare e ciascuna $g_{1},g_{2},\dots,g_m$ sono funzioni lineari il problema si dice di **programmazione lineare**.