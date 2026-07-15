# Blocco A: Definizioni e leggi
## 1. Descrivi le grandezze elettriche fondamentali tensione e corrente e le grandezze da esse derivate, potenza ed energia
**Tensione**
La differenza di potenziale fra due punti di un campo elettrico + il rapporta tra il lavoro, necessario per spostare la carica da un punto all'altro, e la carica stessa.
$$
V_{AB} = \oint_A^B \vec{E} \cdot d \vec{l} = \oint_A^B E dl = E \cdot s \ [V]
$$
Dove $L_{AB} = F \cdot s = q \cdot E \cdot s \implies V_{AB} = E \cdot s = \frac{L}{q}$

**Corrente**
La corrente elettrica è il fluire di cariche elettriche attraverso una superficie. Rappresenta il numero di cariche elettriche che fluiscono attraverso una sezione del conduttore nell'unità di tempo
$$
i(t) = \frac{\Delta Q}{\Delta t} = \iint_S \vec{J} \cdot d \vec{S} \ [A]
$$

**Potenza**
La potenza è la rapidità di assorbimento di energia nel tempo
$$
p = \frac{d\epsilon}{dt} = \frac{d\epsilon}{dq} \cdot \frac{dq}{dt} = v(t) \cdot i(t) \ [W]
$$

**Energia**
L'energia è la capacità di eseguire un lavoro
$$
\epsilon(t_{0},t_{1}) = \int_{t_{0}}^{t_{1}} p(t) dt = \int_{t_{0}}^{t_{1}} v(t) \cdot i(t) dt \ [J]
$$
## 2. Elenca gli elementi circuitali passivi di base, descrivi le loro relazioni costitutive e le espressioni per la potenza istantanea e l'energia
**Resistore** $[\Omega]$
Dissipa la potenza sotto forma di calore
- $v(t) = R i(t) \hspace{4ex} i(t) = \frac{v(t)}{R}$
- $p(t) = i^2(t) \cdot R \hspace{4ex} p(t) = \frac{v^2(t)}{R}$
- $E(t_{0},t_{1}) = R \int_{t_{0}}^{t_{1}} i^2(t) dt = \frac{1}{R} \int_{t_{0}}^{t_{1}} v^2(t) dt$

**Condensatore** $[F]$
Accumula le cariche sotto forma di campo elettrico
- $C = \frac{q(t)}{v(t)} \implies q(t) = C v(t) \implies i(t) = \frac{dq(t)}{dt} = C \frac{dv(t)}{dt}$
- $p(t) = C v(t) \frac{dv(t)}{dt}$
- $E(t) = \int_{-\infty}^{t}p(\tau) d\tau = \frac{1}{2} C v^2(t)$

**Induttore** $[H]$
Accumula le cariche sotto forma di campo magnetico
- $L = \frac{\Phi(t)}{i(t)} \implies \Phi(t) = L i(t) \implies v(t) = \frac{d\Phi(t)}{dt} = L \frac{di(t)}{dt}$
- $p(t) = L i(t) \frac{di(t)}{dt}$
- $E(t) = \int_{-\infty}^t p(\tau) d \tau = \frac{1}{2} L i^2(t)$
## 3. Descrivi i generatori indipendenti e le loro proprietà. Descrivi anche il corto circuito e il circuito aperto e il loro utilizzo come casi limite degli elementi circuitali
Un generatore ideale indipendente è un elemento attivo che mantiene una tensione/corrente specificata che è completamente indipendente dalle altre variabili del circuito

>[!multi-column]
>
>>[!blank]
>>![[Pasted image 20260316171411.png|center|350]]
>
>>[!blank]
>>![[Pasted image 20260316171436.png|center|350]]

**Cortocircuito** $v(t) = 0 \ \forall i$
Tensione ai terminali costantemente nulla

**Circuito aperto** $i(t) = 0 \ \forall v$
Corrente che lo attraversa costantemente nulla

**Resistore**
$V = R \cdot I$ per $R \to \infty$ otteniamo $\frac{V}{R} = I = 0$ circuito aperto
$V = R \cdot I$ per $R \to 0$ otteniamo $V = 0$ cortocircuito
**Condensatore**
$i(t) = C \frac{dv(t)}{dt}$ se $v(t) =\text{const} \implies i(t) = 0$ circuito aperto
**Induttore**
$v(t) = L \frac{di(t)}{dt}$ se $i(t) =\text{const} \implies v(t) = 0$ cortocircuito
## 4. Introduci i concetti topologici di ramo, nodo, maglia, anello e grafo e descrivi le due leggi di Kirchhoff e le loro proprietà
**Ramo**
Singolo elemento attivo/passivo attraversato in ogni suo punto dalla stessa corrente
**Nodo**
Punto di connessione tra 2 o più rami e quindi hanno uguale potenziale
**Maglia**
Qualsiasi percorso chiuso all'interno di un circuito
**Anello**
Particolare maglia che non contiene altre maglie
**Grafo**
Schema dei rami del circuito senza riportare gli elementi

**KCL**
La somma algebrica delle correnti che entrano in un nodo è 0
$$
\sum_{n=1}^N \pm i_n = 0 
$$
deriva dalla conservazione della carica
**KVL**
La somma algebrica delle tensioni lungo un percorso chiuso è 0
$$
\sum_{m=1}^M \pm v_m = 0
$$
deriva dalla conservazione dell'energia
## 5. Elenca i metodi di analisi che conosci e descrivi brevemente come si arriva a questi metodi partendo dalle leggi di Kirchhoff e dalla topologia dei circuiti
Dato un circuito di $R$ rami e $N$ nodi, il suo comportamento è determinato una volta note tutte le $2R$ grandezze elettriche (tensioni/correnti). Per calcolarle possiamo sfruttare:
- relazioni costitutive
- relazioni topologiche (KCL, KVL)
Per risolvere un circuito possiamo determinare una KVL per ogni maglia e una KCL per ogni nodo.

I metodi di analisi sono degli algoritmi che permettono di ridurre la complessità dei sistemi risolutivi.

**Metodo dei nodi**
Sapendo che per ogni nodo possiamo scrivere una KCL
$$
\sum_{j=1} \pm i_{j} = 0
$$
possiamo ottenere un sistema di $N$ equazioni, esprimibile sotto forma di matrice $\hat{A} \cdot \vec{i} = \vec{0}$, dove la matrice di incidenza $\hat{A}$ ha dimensioni $(N \times R)$. Di conseguenza, il numero di equazioni necessarie per risolvere il circuito non diminuisce. Esprimendo invece le correnti di ramo in funzione della loro tensione nodale, applicando la legge di Ohm si ottiene:
$$
\sum_{n=1}^N G_n (e_{An} - e_{Bn}) = 0
$$
Portando a secondo membro le correnti note dei generatori e fissando un nodo di riferimento a potenziale nullo si ottiene un sistema lineare a $N-1$ incognite, i potenziali nodali:
$$
\hat{G} \cdot \vec{e} = \vec{I}
$$
Pertanto, il metodo dei nodi consiste esattamente nella risoluzione di questo sistema matriciale.

**Metodo degli anelli**
Sapendo che per ogni anello può essere definita una KVL
$$
\sum_{j=1} \pm v_j = 0
$$
possiamo ottenere un sistema di $R-N+1$ equazioni, esprimibile sotto forma di matrice $\hat{L} \cdot \vec{v} = \vec{0}$, dove la matrice di incidenza $\hat{L}$ ha dimensione $(R-N+1 \times R)$. Di conseguenza, il numero di equazioni necessarie per risolvere il circuito non diminuisce. Esprimendo invece la tensione di ramo in funzione della loro corrente di maglia, applicando la legge di Ohm si ottiene:
$$
\sum_{j=1}^{R-N+1} \pm R_j \left( \sum_{i=1}^n I_j\right) = 0
$$
Portando a secondo membro le tensioni note dei generatori, si ottiene un sistema lineare di $R-N+1$ incognite, le correnti di anello:
$$
\hat{R} \cdot \vec{i}_{anell o} = \vec{V}
$$
Pertanto, il metodo degli anelli consiste esattamente nella risoluzione di questo sistema matriciale.
## 6. Descrivi il concetto di elementi in serie e parallelo e dimostra le formule dei valori equivalenti di più elementi in serie e parallelo
**Serie**
Due elementi si dicono in serie quando condividono un nodo in maniera esclusiva. Due elementi in serie sono attraversati dalla stessa corrente.
Dalla KVL $v = v_{1} + v_{2}$
- Resistori
  Per la legge di Ohm $v = R_{1}i + R_{2}i = (R_{1}+R_{2})i$
  $\therefore R_{eq} = R_{1} + R_{2}$
- Condensatori
  $v = \frac{1}{C_{1}} \int_{t_{0}}^ti(t) dt + v_{1}(t_{0}) + \frac{1}{C_{2}} \int_{t_{0}}^ti(t) dt + v_{2}(t_{0}) =\left( \frac{1}{C_{1}} + \frac{1}{C_{2}} \right) \int_{t_{0}}^t i(t) dt + v_{1}(t_{0}) +v_{2}(t_{0})$
  $\therefore \frac{1}{C_{eq}} = \frac{1}{C_{1}} + \frac{1}{C_{2}}$
- Induttore
  $v = L_{1}\frac{di}{dt} + L_{2} \frac{di}{dt} = (L_{1}+L_{2}) \frac{di}{dt}$
  $\therefore L_{eq} = L_{1} + L_{2}$

**Parallelo**
Due elementi si dicono in parallelo se sono connessi alla stessa coppia di nodi. Due elementi in parallelo vedono la stessa tensione.
Dalla KCL $i = i_{1}+i_{2}$
- Resistori
  Per la legge di Ohm $i = \frac{v}{R_{1}} + \frac{v}{R_{2}} =\left( \frac{1}{R_{1}} + \frac{1}{R_{2}} \right)v$
  $\therefore \frac{1}{R_{eq}} = \frac{1}{R_{1}} + \frac{1}{R_{2}}$
- Condensatori
  $i = C_{1} \frac{dv}{dt} + C_{2} \frac{dv}{dt} = (C_{1}+C_{2}) \frac{dv}{dt}$
  $\therefore C_{eq} = C_{1}+C_{2}$
- Induttori
  $i = \frac{1}{L_{1}} \int_{t_{0}}^t v(t) dt + i_{1}(t_{0}) + \frac{1}{L_{2}}\int_{t_{0}}^t v(t) dt + i_{2}(t_{0}) =\left( \frac{1}{L_{1}} + \frac{1}{L_{2}} \right)\int_{t_{0}}^t v(t) dt + i_{1}(t_{0}) + i_{2}(t_{0})$
  $\therefore \frac{1}{L_{eq}} = \frac{1}{L_{1}} +\frac{1}{L_{2}}$

## 7. Descrivi il funzionamento dei seguenti circuiti: partitore di tensione e partitore di corrente e le loro relazioni con i concetti di generatore reale di tensione e generatore reale di corrente
I generatori ideali introducono delle incongruenze fisiche (*es.* generatori di tensioni non possono essere messi in parallelo).
Queste incongruenze vengono risolte integrando una resistenza in serie (generatore di tensione) o in parallelo (generatore di corrente). L'insieme di generatore e resistenza prende il nome di generatore ideale.
![[Pasted image 20260327152652.png|center|400]]

Chiudendo i morsetti del generatore possiamo vedere il resto del circuito come una resistenza $R_{load}$ le cui variabili sono ottenibili con un partitore di tensione/corrente.
**Partitore di tensione**
$$
I = \frac{V_g}{R_g + R_L} \implies \left\{\begin{array}{l}V_{R_g} = R_g \cdot I_{Rg} = R_g \frac{V_g}{R_g + R_L} \\ V_{R_L} = R_L \cdot I_{R_L} = R_L \frac{V_g}{R_g + R_L}\end{array}\right.
$$
**Partitore di corrente**
$$
V = I_g \left( \frac{R_g\cdot R_L}{R_g + R_L} \right) \implies \left\{\begin{array}{l} I_{R_g} = \frac{V_{R_g}}{R_g} = \frac{1}{R_g} \cdot I_g \cdot \frac{R_g \cdot R_L}{R_g + R_L} = I_g \frac{R_L}{R_g + R_L} \\ I_{R_L} = \frac{V_{R_L}}{R_L} = \frac{1}{R_L} \cdot I_{g} \cdot \frac{R_g \cdot R_L}{R_g + R_L} = I_{g} \frac{R_g}{R_L + R_G}\end{array}\right.
$$
## 8. Analisi di circuiti a regime sinusoidale: concetti di fasore, impedenza e ammettenza e regole per la combinazione di impedenze e ammettenze
Un fasore è un numero complesso che rappresenta l'ampiezza e la fase di una sinusoide, permettendo l'analisi di un circuito in corrente alternata nel caso in cui i segnali siano delle sinusoidi di pari ampiezza.

Data $v(t) = A \cos (\omega t + \varphi) = \mathrm{Re}\{\underbrace{Ae^{j \varphi}}_{\text{fasore}} \cdot e^{j \omega t}\}$
L'impedenza generalizzata (corrispettivo della resistenza in AC)
$$
Z = \frac{\overline{V}}{\overline{I}} \ [\Omega] = R + j X \ \text{dove} \ \left\{\begin{array}{l} \mathrm{Re}\{Z\} = R \ \text{resistenza} \\ \mathrm{Im}\{Z\} = X \ \text{reattanza}\end{array}\right.
$$
**Resistore** $Z = R \hspace{4ex} \mathrm{Re}() > 0 \wedge \mathrm{Im}() = 0$
**Condensatore** $Z = \frac{1}{j \omega C} \hspace{4ex} \mathrm{Re}() = 0 \wedge \mathrm{Im}() < 0$
**Induttore** $Z = j \omega L \hspace{4ex} \mathrm{Re}() = 0 \wedge \mathrm{Im}() > 0$

L'ammettenza è il reciproco dell'impedenza e generalizza la conduttanza
$$
Y = \frac{\overline{I}}{\overline{V}} = \frac{1}{Z} = G + j B
$$

La loro combinazione in AC è equivalente alla loro combinazione in DC:
- Serie: $Z_{eq} = Z_{1} + Z_{2} + \dots + Z_n$
- Parallelo: $Y_{eq} = Y_{1} + Y_{2} + \dots + Y_n$
## 9. Metodo dei fasori: come si passa dal circuito nel tempo al circuito simbolico e per quali ragioni continuano a valere i metodi di analisi anche per il circuito simbolico
Il metodo dei fasori consiste nell'analisi di un circuito in AC nella sua forma "simbolica", ovvero trasformando i segnali sinusoidali degli elementi attivi nei loro fasori e tutti i componenti passivi nelle loro impedenze, riducendoli con serie e parallelo.
Tutti i metodi di analisi continuano a valere, poiché è dimostrabile che KCL e KVL continuano a valere, facendo reggere le tesi di tutti gli strumenti di analisi precedentemente utilizzati.

*es.* KVL
In DC
$$
\sum_{i=1}^R v_i(t) = 0
$$
In AC
$v_i(t) = V_{m,i} \cos(\omega t + \varphi_i) = \mathrm{Re}\{V_{m,i} e^{j \omega t} e^{j \varphi_i}\} = \mathrm{Re}\{\overline{V}_i e^{j \omega t}\}$
Applicando la sommatoria si ottiene
$$
\sum_{i=1}^R \mathrm{Re}\{\overline{V}_i e^{j \omega t}\} = 0
$$
Per essere pari a 0 allora il modulo del complesso
$$
\sum_{i=1}^R \overline{V}_i = 0
$$


# Blocco B: Teoremi e applicazioni
## 1. Descrivi cosa è l'equazione di porta, come si può ricavare e in particolare descrivi l'equazione di porta per circuiti lineari, ovvero la retta di carico, e le sue proprietà
[...]
## 2. Enunciato e dimostrazione del teorema di Thevenin e sua relazione con il partitore di tensione
[...]
## 3. Enunciato e dimostrazione del teorema di Norton e sua relazione il partitore di corrente
[...]
## 4. Equivalenza tra circuito di Thevenin e circuito di Norton, ovvero equivalenza tra generatore reale di tensione e generatore reale di corrente: formulazione e dimostrazione
[...]
## 5. Enuncia e dimostra il teorema del massimo trasferimento di potenza per reti resistive, e spiega la differenza tra rendimento e massimo trasferimento di potenza
[...]
## 6. Enunciato di dimostrazione di Millman
[...]
## 7. Potenza in regime sinusoidale: definizione di potenza attiva, reattiva, apparente e complessa e relazione con la potenza istantanea in regime sinusoidale
[...] %% se esce questa foldo l'esame%%
## 8. Teorema di Tellegen e conservazione della potenza istantanea e della potenza complessa: da quale principio fisico deriva, come si può dimostrare per i circuiti a costanti concentrate, che implicazioni ha nel caso della potenza complessa
[...] %% se esce questa prima faccio un pene sul foglio e poi mi ritiro %%
## 9. Teorema del massimo trasferimento di potenza attiva e rifasamento: illustra almeno uno di questi due argomenti e le sue implicazioni
[...]