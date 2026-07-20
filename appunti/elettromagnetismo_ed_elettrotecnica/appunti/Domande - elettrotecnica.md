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
Prendendo in considerazione una coppia di terminali A-B, la tensione e la corrente sono descritti univocamente da una relazione che prende il nome di equazione di porta: $f(v(t), i(t)) =$ effetto generatori.
- Assenza di generatori
  $\alpha v(t) + \beta i(t) = 0$
- Presenza di generatori
  $\alpha v(t) + \beta i(t) =\text{const}$
Queste formule sono ottenibili sfruttando il principio di sovrapposizione degli effetti, spegnendo tutti i generatori prima di tensione e poi di corrente (o viceversa).

L'equazione di porta ci permette di definire un insieme di valori che possono assumere tensioni e correnti, che prende il nome di **retta di carico**
$$
\alpha c(t) + \beta i(t) = \text{const} \hspace{4ex} \implies \hspace{4ex} v(t) = - \frac{\beta}{\alpha} i(t) + \frac{\text{const}}{\alpha}
$$
![[Pasted image 20260402144125.png|center|300]]
## 2. Enunciato e dimostrazione del teorema di Thevenin e sua relazione con il partitore di tensione
Il teorema di Thevenin afferma che un circuito lineare accessibile da due terminali può essere sostituito con un circuito equivalente formato da un generatore di tensione $V_{Th}$ in serie con un resistore $R_{Th}$, dove $V_{Th}$ è la tensione a vuoto ai terminali e $R_{Th}$ è la resistenza equivalente quando i generatori indipendenti sono spenti.
![[Pasted image 20260402154223.png|center|300]]

#dimostrazione 
Il circuito può essere generalizzato e il carico sostituito con un generatore di corrente che imprime la corrente di porta
![[Gemini_Generated_Image_b4k3s1b4k3s1b4k3 1.png|center|300]]
Per il PSE la tensione ai morsetti è data da:
$$
V_{AB} = \underbrace{\sum A_i V_i + \sum B_j I_j}_{V_{int}} + \underbrace{C \cdot i}_{V_{ext}}
$$
Calcoliamo separatamente i contributi:
- $V_{int} = \left.V_{AB}\right|_{i = 0} = \sum A_i V_i + \sum B_j I_j = V_{Th}$
- $V_{ext} = C \cdot i \implies C = \frac{V_{AB}}{i} = R_{Th}$

Questo risultato può essere verificato con la KVL
$$
\displaylines{
V_{R_{Th}} + V_{AB} - V_{Th} = 0 \\
V_{AB} = V_{Th} + i R_{Th}
}
$$
dove $V_{R_{Th}} = -i R_{Th}$.

Il circuito equivalente di Thevenin coincide con la struttura del partitore di tensione
%% disegnino del circuito finale %%
## 3. Enunciato e dimostrazione del teorema di Norton e sua relazione il partitore di corrente
Il teorema di Norton afferma che in un circuito lineare accessibile da due terminali può essere sostituito con un circuito equivalente formato da un generatore di corrente $I_N$ in parallelo ad un resistore $R_N$, dove $I_N$ è la corrente di cortocircuito e $R_N$ è la resistenza equivalente quando i generatori indipendenti sono spenti
![[Pasted image 20260402154223.png|center|300]]

#dimostrazione 
Possiamo sostituire il carico con un generatore di tensione che descrive la differenza di potenziale sulla porta
![[Pasted image 20260402173541.png|center|300]]
Per il PSE la corrente, che passa dai morsetti è
$$
I_{AB} = \underbrace{\sum A_i V_i + \sum B_j I_j}_{i_{int}} + \underbrace{C \cdot v}_{i_{ext}}
$$
Calcoliamo separatamente i contributi
- $i_{int} = \left.I_{AB}\right|_{v = 0} = \sum A_i V_i + \sum B_j I_j = -I_N$
- $i_{ext} = C \cdot v \implies C = \frac{i_{ext}}{v} = \frac{1}{R_N}$
Questo risultato può essere verificato con la KCL
$$
\displaylines{
-I_N + V_{AB} \frac{1}{R_N} - I_{AB} = 0 \\
I_{AB} = -I_N + \frac{V_{AB}}{R_N}
}
$$
Il circuito equivalente di Norton coincide con la struttura del partitore di corrente.
%% disegnino del circuito finale %%
## 4. Equivalenza tra circuito di Thevenin e circuito di Norton, ovvero equivalenza tra generatore reale di tensione e generatore reale di corrente: formulazione e dimostrazione
I circuiti equivalenti di Thevenin e Norton rappresentano rispettivamente un generatore reale di tensione ed un generatore reale di corrente, che condividono la stessa resistenza interna
$$
R_{Th} = R_N
$$
Partendo dunque dai circuiti di Thevenin e Norton e applicando la KCL e la KVL otteniamo:
- Thevenin: $-V_{Th} + i \cdot R_{Th} + V_{AB} = 0 \implies V_{AB} = V_{Th} - i \cdot R_{Th}$
- Norton: $i-I_N + \frac{V_{AB}}{R_N} = 0 \implies V_{AB} = R_N \cdot i - i \cdot R_N$

#dimostrazione 
Considerando le potenze del carico
$$
\begin{align*}
P_{R_L}^V & = \frac{V_{R_L}^2}{R_L}= V_T^2\frac{ R_L^2}{(R_T + R_L)^2 R_L}& \hspace{10ex} P_{R_L}^N &=  i^2_{R_L} \cdot R_L = I_N^2 \frac{R_{I_N}^2 \cdot R_L}{(R_L + R_N)^2}
\end{align*}
$$
Poniamo l'uguaglianza
$$
V_{Th}^2 \frac{R_L}{(R_T + R_L)^2} = R_L \frac{R_N^2 \cdot I_N^2}{(R_L + R_N)^2} \implies V_T^2 = R_N^2 I_N^2 \implies V_T = R_N I_N
$$
## 5. Enuncia e dimostra il teorema del massimo trasferimento di potenza per reti resistive, e spiega la differenza tra rendimento e massimo trasferimento di potenza
Per un generatore reale di tensione
![[Pasted image 20260327145114.png|center|400]]
Sapendo che $i = \frac{V_g}{R_g + R_L}$, possiamo calcolare la potenza come
$$
P_{R_L} = R_L \cdot i^2 = R_L \cdot \frac{V_g^2}{(R_g+R_L)^2}
$$
Per trovare il massimo dobbiamo trovare il punto critico, derivando per $R_L$ e ponendo $=0$
$$
\begin{align*}
\frac{d P_{R_L}}{dR_L} & = V_g^2 \cdot \frac{(R_L+R_g)^2 - 2R_L(R_L+R_g)}{(R_L + R_g)^2} = \\
 & = V_g^2 \cdot \frac{R_L^2+R_g^2+2R_LR_g - 2R_LR_g - 2R_L^2}{(R_L+R_g)^2} \\
 \implies & V_g^2 \cdot \frac{R_g^2 - R_L^2}{(R_L+R_g)^4} = 0 \\
 \implies & R_g^2 - R_L^2 = 0 \\
 \implies & R_g = R_L
\end{align*}
$$
La massima corrente che il generatore può erogare si ha in presenza di cortocircuito ($R_g = 0$)
$$
i_{cc} = i_{max} = \frac{V_g}{R_g} \ [A]
$$
e in questo caso la potenza è nulla
$$
P_{R_L} (R_L = 0) = i^2R_L = \left( \frac{V_g}{R_g} \right)^2 R_L = 0
$$
La massima potenza si ha per $i = \frac{i_{cc}}{2}$ ed essendo $R_L = R_g$
$$
P_{R_L} = \left( \frac{i_{cc}}{2} \right)^2 R_L = \left( \frac{V_g}{2R_g} \right)^2 R_L = \frac{V_g^2}{4 R_g}
$$

Definiamo il rendimento come il rapporto tra potenza utile e potenza totale generata, misurando quanta potenza viene "sprecata" nella resistenza interna $R_g$
$$
\eta = \frac{P_{R_L}}{P_{V_g}} = \frac{V_{R_L} \cdot I}{V_g \cdot I} = \frac{(V_g-V_{R_g}) \cdot I}{V_{R_g} \cdot I} = 1- \frac{V_{R_g}}{V_g} = 1- \frac{R_g \cdot I}{V_{g}}
$$

Invece il massimo trasferimento cerca solo di massimizzare la quantità di potenza erogata indipendentemente dal rendimento effettivo del circuito.
Infatti se $R_L = R_g \implies \eta = \frac{1}{2} = 50 \%$
Quindi per avere il massimo trasferimento di potenza è necessario sprecare il $50 \%$ della potenza per la resistenza interna.
## 6. Enunciato di dimostrazione di Millman
Il teorema di Millman afferma che la tensione $V_0$ ai capi di un parallelo di:
- generatori di tensione in serie ad una resistenza
- generatori di corrente (con eventualmente una resistenza in serie)
- resistenze
è data dal prodotto di una corrente $I_0$ per una resistenza $R_0$: $V_0 = I_0 \cdot R_0$ dove $I_0$ è la somma delle correnti $\frac{V_{A_i}}{R_{A_i}}$ e $I_{B_j}$ ed $R_0$ è il parallelo delle resistenze $R_{A_i}$ e $R_{C_i}$
$$
V_0 = R_{0}I_{0} = \frac{\sum_{i} \frac{V_{Ai}}{R_{Ai}} + \sum_{j} I_{Bj}}{\sum_{i} \frac{1}{R_{Ai}} + \sum_{k} \frac{1}{R_{Ck}}}
$$
![[Pasted image 20260402202324.png]]

#dimostrazione 
Sfrutto l'equivalenza tra generatori reali
- trasformo generatori di tensione in corrente $I = \frac{V_{A_i}}{R_{A_i}}$
- elimino le resistenze in serie ai generatori di corrente
otteniamo quindi un circuito equivalente composto solo da generatori di corrente in parallelo a resistenze in parallelo
## 7. Potenza in regime sinusoidale: definizione di potenza attiva, reattiva, apparente e complessa e relazione con la potenza istantanea in regime sinusoidale
**Potenza istantanea**
La potenza istantanea è il prodotto dei valori istantanei di tensione e corrente. Ha il doppio della pulsazione
$$
\begin{align*}
p(t) & = V_m \cos(\omega t + \varphi_v) \cdot I_m \cos(\omega t + \varphi_i) \ [W] \\
& = \frac{1}{2} V_m I_m \cos(\varphi_v - \varphi_i) + \frac{1}{2} V_m I_m \cos (2 \omega t + \varphi_v + \varphi_i)
\end{align*}
$$
**Potenza attiva**
Rappresenta l'energia effettivamente trasformata in lavoro utile (nell'unità di tempo). È la media della potenza istantanea in un periodo $\tau$.
$$
\begin{align*}
P & = \frac{1}{T} \int_T p(t) d t = \frac{1}{T} \int_T \frac{1}{2} V_m I_m \cos(\varphi_v - \varphi_i) + \underbrace{\frac{1}{2} V_m I_m \cos (2 \omega t + \varphi_v + \varphi_i)}_{ = 0} dt \\
& = \frac{1}{2}V_m I_m \cos(\varphi_v - \varphi_i) \ [W]
\end{align*}
$$
**Potenza reattiva**
Misura lo scambio di energia tra il generatore e la parte reattiva del carico. Non compie lavoro utile.
$$
Q = \frac{1}{2} V_m I_m \sin(\varphi_v - \varphi_i) \ [VAR]
$$
**Potenza apparente**
$$
S = \frac{1}{2} V_m I_m = \sqrt{ P^2 + Q^2 }
$$

Per semplificare l'analisi nel dominio dei fasori si introduce la potenza complessa:
$$
\overline{S} = \frac{1}{2} \overline{V} \cdot \overline{I}^* = \frac{1}{2} V_m I_m (\cos(\varphi_v - \varphi_i) + j \sin(\varphi_v - \varphi_i)) = P+j Q
$$
$$
= \frac{1}{2} Z |\overline{I}|^2 = \frac{1}{2} \frac{|\overline{V}|^2}{Z^*}
$$
## 8. Teorema di Tellegen e conservazione della potenza istantanea e della potenza complessa: da quale principio fisico deriva, come si può dimostrare per i circuiti a costanti concentrate, che implicazioni ha nel caso della potenza complessa
In qualsiasi istante $t$ il bilancio energetico può essere espresso come:
$$
\sum_{k=1}^R p_k(t) = \sum_{k=1}^R v_k(t) \cdot i_k(t) = 0
$$
che in forma vettoriale
$$
\vec{V} \cdot \vec{I} = \vec{V}^T \vec{I}
$$
dove
$$
\vec{V} = \left[\begin{array}{c}v_{1}(t) \\ \vdots \\ v_R(t) \end{array}\right] \hspace{8ex} \vec{I} = \left[\begin{array}{c}i_{1}(t) \\ \vdots \\ i_R(t) \end{array}\right]
$$
#dimostrazione 
Scriviamo in forma matriciale le leggi di Kirchoff
- KCL : $\hat{A} \vec{I} = \vec{0}$
- KVL : $\vec{V} = \hat{B} \vec{e} = \hat{A}^T \vec{e}$

sostituendo nella formula del bilancio energetico otteniamo
$$
\sum_{k=1}^R v_k(t) \cdot i_k(t) = \vec{V}^T \cdot \vec{I} = (\hat{A}^T \vec{I})^T \vec{I} = \vec{e}^T (\hat{A} \vec{I}) = \vec{e} \cdot \vec{0} = \vec{0}
$$

Siccome vale che $\sum_{n=1}^N \overline{S}_n = 0 \implies \sum_{n=1}^N P_n = 0$ e $\sum_{n=1}^N Q_n =0$
Poiché in regime sinusoidale continua a valere il teorema di Tellegen allora possiamo applicare il teorema in regime sinusoidale rispetto al coniugato
![[Elettrotecnica-1779303524789.webp|center|400]]
Essendo i due circuiti equivalenti a livello topologico vale che:
$$
<V^T, I> = 0 \hspace{8ex} <V^{T*} , I^*> = 0
$$
applicando Tellegen possiamo invertire i termini tendendo valido:
$$
<V^T, I^*> = 0 \implies \sum \frac{1}{2} \overline{V} \overline{I}^* = 0
$$
## 9. Teorema del massimo trasferimento di potenza attiva e rifasamento: illustra almeno uno di questi due argomenti e le sue implicazioni
Il teorema del massimo trasferimento di potenza attiva continua a valere anche in AC per cui si ha che:
$$
Z_L = Z_g^* \hspace{4ex} \text{da} \hspace{4ex} R_L = R_g
$$
%% disegno %%
Dove $Z_g = R_g + jX_g$ e $Z_L = R_L + j X_L$
$$
\therefore \overline{S}_{Z_L} = \frac{1}{2} \overline{V}_g^2 \frac{(R_L + j X_L)}{(R_g + R_L)^2 + (X_g + X_L)^2}
$$
Per il calcolo del valore massimo derivo:
$$
\left\{\begin{array}{l}R_g = R_L \\ X_g = - X_L\end{array}\right. \implies Z_L = Z_g^*
$$
Si può osservare che inserendo una serie di resistori si ottengono gli stessi risultati in DC
$$
Z_g + Z_L = 2R_g = 2R_L \to P_{att, max} = \frac{1}{2}R_g \frac{|\overline{V}_g|^2}{(2R_g)^2} = \frac{|\overline{V}_g|^2}{8R_g}
$$
