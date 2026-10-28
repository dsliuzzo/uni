#appunti #elettronica_digitale 
>[!info] Approfondimento di [[Circuiti integrati digitali]]
>Come sono fatti fisicamente gli interruttori di tipo 0 e tipo 1 visti nelle porte logiche.

# MOSFET
**M**etal **O**xide **S**emiconductor **F**ield **E**ffect **T**ransistor: è il dispositivo con cui si realizzano gli interruttori dei circuiti integrati digitali.

## Il silicio e il drogaggio
Il silicio è un **semiconduttore**: un reticolo cristallino ordinato di atomi (tetravalenti) con pochissimi elettroni liberi, quindi conduce poco.
Possiamo modificarne le proprietà elettriche con il **drogaggio**: si sostituiscono alcuni atomi di silicio con atomi di un altro elemento (per diffusione ad alta temperatura o per impiantazione ionica).

>[!multi-column]
>
>>[!important] Drogaggio di tipo N
>>Atomi **pentavalenti** (es. fosforo, 5 elettroni di valenza): 4 formano i legami con il silicio, il quinto resta **libero**.
>>Portatori maggioritari: **elettroni** (carica negativa).
>
>>[!important] Drogaggio di tipo P
>>Atomi **trivalenti** (es. boro, 3 elettroni di valenza): manca un elettrone per completare i legami, si crea una **lacuna**.
>>Portatori maggioritari: **lacune** (carica positiva).

Più è alta la concentrazione di drogante, più portatori liberi ci sono e più il materiale si avvicina al comportamento di un conduttore.

## Struttura
- **Substrato** (body) di silicio drogato.
- Due regioni fortemente drogate di tipo opposto al substrato, i **pozzetti** di **source** e **drain**, collegati a contatti metallici.
- Tra source e drain, in superficie, la zona del **canale**.
- Sopra il canale uno strato sottile di **isolante** (ossido di silicio, $SiO_2$, ottenuto ossidando il silicio ad alta temperatura) e sopra ancora l'elettrodo di **gate**.

La struttura gate – ossido – canale è un **metallo / isolante / semiconduttore**: si comporta come un [[Elettrotecnica#Condensatore|condensatore]] con l'ossido come dielettrico.

## Funzionamento
Applicando una tensione al gate, il campo elettrico attraverso l'ossido attira nel canale portatori di carica di tipo opposto a quelli del substrato. Se la tensione gate-source supera la **tensione di soglia** ($V_{GS} \geq V_T$) si forma un **canale conduttivo** tra source e drain e può circolare corrente (interruttore **ON**); sotto soglia il canale non esiste (interruttore **OFF**).

È lo stesso concetto di [[Circuiti integrati digitali#Tensione di soglia|tensione di soglia]] visto per gli interruttori reali.

>[!multi-column]
>
>>[!important] NMOS
>>- Substrato di tipo **P**, source e drain di tipo **N**
>>- Il canale si riempie di **elettroni**
>>- Conduce con gate **alto** ($V_{DD}$) → interruttore di **tipo 1**, usato nella **pull-down**
>
>>[!important] PMOS
>>- Substrato di tipo **N**, source e drain di tipo **P**
>>- Il canale si arricchisce di **lacune**
>>- Conduce con gate **basso** ($0\ V$) → interruttore di **tipo 0**, usato nella **pull-up**

**CMOS** (Complementary MOS): tecnologia che usa insieme NMOS e PMOS in modo complementare, PMOS nella rete di pull-up e NMOS nella rete di pull-down. È esattamente la struttura delle porte viste in [[Circuiti integrati digitali#Componenti circuitali|Componenti circuitali]] e garantisce la [[Circuiti integrati digitali#Interruttore|mutua esclusione]].

## Parametri tecnologici
Alcuni parametri dipendono dalla tecnologia di fabbricazione: **lunghezza del canale** $L$ (distanza tra i due pozzetti), larghezza, profondità dei pozzetti, livello di drogaggio, spessore dell'ossido…
Il valore in $nm$ con cui si indica una tecnologia (es. "processo a 7 nm") storicamente corrisponde alla **lunghezza minima di canale** realizzabile (oggi è più un'etichetta commerciale che una misura fisica precisa).

## Inverter CMOS
[...] schema dell'inverter con un PMOS (pull-up) e un NMOS (pull-down)

[...] parte non chiara a lezione: da rivedere

## Capacità di carico
Sul nodo di uscita delle porte si introduce un condensatore $C_L$ (capacità di carico), che modella l'effetto capacitivo dei MOSFET collegati a quel nodo (soprattutto i gate delle porte di carico e i collegamenti).
[...] grafico con $C_L$

La sua impedenza è
$$
Z_{C_L} = \frac{1}{j \omega C_L}
$$
In regime statico $\omega = 2 \pi f = 0$, quindi $Z_{C_L} \to \infty$: il condensatore si comporta come un **circuito aperto** e non influenza l'[[Circuiti integrati digitali#Analisi statica|analisi statica]].
Durante le commutazioni invece $C_L$ deve caricarsi e scaricarsi attraverso le $R_{ON}$ delle reti di pull-up e pull-down: è quindi fondamentale per l'[[Circuiti integrati digitali#Analisi dinamica|analisi dinamica]].
