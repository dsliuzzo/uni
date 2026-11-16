#appunti #elettronica_digitale 
# Approcci progettuali
La definizione delle **Funzioni & Specifiche** attestano cosa deve fare il chip, a che velocità, con che consumo e area, in quali volumi. Da qui si sceglie _quanto_ del chip viene personalizzato e _quando_ avviene la personalizzazione. Tutto lo schema si regge su due domande:

1. **Quanto è fatto "su misura"?** (dal singolo transistor fino a blocchi già pronti)
2. **Chi personalizza e in quale momento?** (il produttore in fabbrica con le maschere, oppure l'utente "sul campo")

I circuiti integrati sono ricavati dal silicio ed è un processo molto costoso e vengono realizzati in una **camera pulita** (i dispositivi elementari che sono nelle porte logiche hanno dimensioni nanometriche, dobbiamo quindi assicurare l'assenza di impurità all'interno del circuito).
Le operazioni richieste ai circuiti integrati sono aumentate drasticamente nel tempo, quindi non è possibile creare per ogni funzione un circuito specifico.
Sono nati quindi dei circuiti **FPGA**: strutture matriciali dove viene impiegata una conoscenza della funzione attraverso delle memorie ram, permettendo di essere riconfigurati.

- **ASIC**: il comportamento è definito **in fabbricazione**, tramite le **maschere** (quelle usate nella fotolitografia). Dopo la produzione il chip non cambia più.
- **FPGA**: il chip è **già fabbricato** e uguale per tutti. Si personalizza **dopo**, caricando una configurazione ("in the field").

Application specific integrated circuit: è un approccio che vincola un circuito ad una singola specifica funzione e può essere:
- **Full custom**
  condizione per cui non ha nulla di pre-esistente a disposizione; deve creare tutto da 0
- **Standard cells**
  Il progettista può contare sulla disponibilità di un certo numero di librerie, in cui i componenti fondamentali sono già stati implementati

![[ASIC-1792420187040.webp|center|691]]


## Full-Custom
- Il progettista disegna **a mano il layout** di ogni transistor e di ogni collegamento.
- **Tutte** le maschere sono specifiche per questo chip.

**Pro**
Massime prestazioni minima area, minimo consumo (si ottimizza tutto).

**Contro**
- Tempo di progetto enorme, costo altissimo, alto rischio di errori.
- Poco automatizzabile.

**Quando ha senso**: grandi volumi o requisiti estremi (parti critiche di CPU, memorie, circuiti analogici/RF).
## Semi-Custom
Si rinuncia a un po' di ottimizzazione in cambio di **riuso** e **automazione**. Si divide in due famiglie.
### Standard Cells-based
- Si usa una **libreria di celle pre-progettate e pre-caratterizzate** (NAND, NOR, flip-flop, ecc.) fornita dalla fonderia.
- Le celle hanno **altezza fissa** e vengono **disposte in righe**, con canali in mezzo per il routing.
- Il flusso è automatico: descrizione HDL → **sintesi logica** → **place & route** → layout.
- Tutte le maschere sono comunque personalizzate (perché il posizionamento delle celle è specifico del chip).

**Pro**
molto più veloce del full-custom, buone prestazioni.

**Contro**
costo di maschere ancora alto; prestazioni inferiori al full-custom.

### Array-based
Si parte da una struttura **regolare e ripetitiva** di elementi (array) già pronta.
Si divide in due sotto casi:
#### Mask programmable (gate array)
- Il wafer ha già un **array di transistor** prefabbricato (livelli di base uguali per tutti i clienti).
- Si personalizzano **solo i livelli di interconnessione (metal)** con maschere dedicate.

**Pro**
meno maschere → costo e tempi minori degli standard cell.

**Contro**
area e prestazioni peggiori; utilizzo dei transistor non ottimale

**Nota**
è un approccio più "storico"; oggi esistono varianti simili chiamate _structured ASIC_.

#### Pre-wired → FPGA
- Il chip è **completamente prefabbricato**: nessuna maschera personalizzata.
- Contiene:
    - **blocchi logici matriciali configurabili**
    - **rete di interconnessione programmabile**
    - **Block RAM** (memorie integrate): per garantire riconfigurazione
    - **I/O** sul bordo
- La configurazione viene caricata in celle di memoria di configurazione.

**Pro**
- Nessun costo di maschere, tempo di sviluppo breve.
- **Riconfigurabile**: si possono correggere errori o aggiornare il progetto.

**Contro**
- Costo per singolo chip più alto, area/consumo maggiori, frequenze massime inferiori rispetto a un ASIC equivalente (la flessibilità ha un prezzo: interconnessioni e LUT programmabili sono più lente e grandi di logica cablata).

# Componenti circuitali
## Interruttore
Per prima cosa è necessario trovare un metodo per rappresentare un bit '0' e un bit '1': l'**interruttore**.
Il suo comportamento è descritto in termini di **corrente** e **tensione**.

>[!multi-column]
>
>>[!important] Interruttore aperto (off)
>>$V = \text{max} \wedge I = 0$
>>![[ASIC-1792420439425.webp|center|100]]
>
>>[!important] Interruttore chiuso (on)
>>$I = \text{max} \wedge V = 0$
>>![[ASIC-1792420467293.webp|center|100]]

Generalmente, per controllare lo **stato** dell'interruttore si utilizza un terzo segnale che viene applicato `c`. In base al **tipo** di interruttore utilizzato, il valore di `c` indica la chiusura o l'apertura.
![[Circuiti integrati digitali-1792505792552.webp|center|504]]

Quando l'interruttore di `tipo 0` si chiude e crea un collegamento con `out` portando il suo potenziale ($V_{DD}$) in uscita. Dualmente, quando l'interruttore di `tipo 1` si chiude fa la stessa cosa, portando in uscita un potenziale nullo.

L'uscita si trova sempre tra:
- **Rete di pull-up**: insieme di interruttori di tipo 0 che assicura che la rete raggiunga la massima tensione
- **Rete di pull-down**: insieme di interruttori di tipo 1 che assicura che la rete raggiunga potenziale nullo
Le due reti devono avere gli stessi ingressi. 
![[Circuiti integrati digitali-1792505820342.webp|center|338]]

>[!bug] Mutua esclusione
>in caso di mancata mutua esclusione tra rete di pull up e pull down non sappiamo quale sarebbe il reale output, per questo vengono usati interruttori di tipo diverso tra le due reti collegate.
>Stiamo inviando in ingresso segnali a componenti che sono complementari tra di loro.
>>[!important] Qualsiasi ingresso deve arrivare sia ad un interruttore di tipo 0 che ad un interruttore di tipo 1
## Inverter
[[1. Reti logiche#Tabella di verità|NOT (reti logiche)]]
>[!multi-column]
>
>>[!blank]
>>| In       | tipo 0 | tipo 1 | Out      |
>>| -------- | ------ | ------ | -------- |
>>| 0V       | ON     | OFF    | $V_{DD}$ |
>>| $V_{DD}$ | OFF    | ON     | 0V       |
>
>>[!blank]
>>![[Circuiti integrati digitali-1792569310274.webp|center|200]]

![[Circuiti integrati digitali-1792569064632.webp|center|300]]
## NAND
[[1. Reti logiche#Operatori NAND E NOR|NAND (reti logiche)]]

| A        | B        | $Z_1$ | $Z_2$ | $U_{1}$ | $U_{2}$ | Out      |
| -------- | -------- | ----- | ----- | ------- | ------- | -------- |
| 0V       | 0V       | ON    | ON    | OFF     | OFF     | $V_{DD}$ |
| 0V       | $V_{DD}$ | ON    | OFF   | OFF     | ON      | $V_{DD}$ |
| $V_{DD}$ | 0V       | OFF   | ON    | ON      | OFF     | $V_{DD}$ |
| $V_{DD}$ | $V_{DD}$ | OFF   | OFF   | ON      | ON      | 0V       |

![[Circuiti integrati digitali-1792569428894.webp|center|300]]
## NOR
[[1. Reti logiche#Operatori NAND E NOR|NOR (reti logiche)]]
>[!multi-column]
>
>>[!blank]
>>| A        | B        | $Z_{1}$ | $Z_{2}$ | $U_{1}$ | $U_{2}$ | out      |
>>| -------- | -------- | ------- | ------- | ------- | ------- | -------- |
>>| 0V       | 0V       | ON      | ON      | OFF     | OFF     | $V_{DD}$ |
>>| 0V       | $V_{DD}$ | ON      | OFF     | OFF     | ON      | 0V       |
>>| $V_{DD}$ | 0V       | OFF        | ON        | ON        | OFF        | 0V          |
>>| $V_{DD}$ | $V_{DD}$ | OFF        | OFF        | ON        | ON        | 0V         |
>
>>[!blank]
>>![[Circuiti integrati digitali-1792574826079.webp|175]]
## AND
[[1. Reti logiche#Tabella di verità|AND (reti logiche)]]
Dividendo i tipi di interruttori tra pull up e pull down non è possibile creare un AND di soli interruttori.
Possiamo quindi usare una NAND e poi negare il risultato con un inverter.
![[Circuiti integrati digitali-1792585148832.webp|center|300]]

## OR
[[1. Reti logiche#Tabella di verità|OR (reti logiche)]]
Dualmente alla AND dobbiamo creare un NOR e negare l'uscita
![[Circuiti integrati digitali-1792585602586.webp|center|300]]

## XOR
[[1. Reti logiche#Operatore XOR|XOR (reti logiche)]]
$$
f = \bar{a} \cdot b + a \bar{b}
$$
La funzione è **diretta**: applicando le [[#Regole di progettazione|regole di progettazione]] la pull-down è $(\bar a \cdot b) \,\|\, (a \cdot \bar b)$ e la pull-up è la sua duale. Il nodo tra le due reti però vale $\overline{f}$, cioè la **XNOR**: per avere la XOR va aggiunto un **inverter in uscita**.

![[Circuiti integrati digitali-1792585626485.webp|center|450]]
Il circuito qui sopra (senza inverter finale) dà in `out` la XNOR. Con l'inverter in uscita il totale è $8 + 2 \cdot 2 + 2 =$ **14 interruttori** ☠️ (8 delle reti, 2 inverter sugli ingressi, 1 inverter in uscita).

>[!check] XOR senza inverter finale
>Si può risparmiare l'inverter scrivendo la XOR come XNOR negata:
>$$f = a \oplus b = \overline{\bar a \cdot \bar b + a \cdot b}$$
>La funzione ora è **negata**, quindi `out` è direttamente il nodo tra le reti: pull-down $(\bar a \,\|\, b)$ in serie a $(a \,\|\, \bar b)$, pull-up $(\bar a \text{ serie } b) \,\|\, (a \text{ serie } \bar b)$. Totale **12 interruttori**.
>![[Marietto-xor-cmos.svg|center|330]]
>*(Dagli appunti di Marietto, Decima lezione: si parte dalla XNOR e si scambiano $a \leftrightarrow \bar a$ negli interruttori di una variabile.)*

Tabella degli stati della XOR a 12 interruttori (figura nel riquadro sopra, etichette di Marietto):

| $A$ | $B$ | $Z_1$ | $Z_2$ | $Z_3$ | $Z_4$ | $U_1$ | $U_2$ | $U_3$ | $U_4$ | $out$ |
|---|---|---|---|---|---|---|---|---|---|---|
| $0\ V$ | $0\ V$ | OFF | ON | ON | OFF | ON | OFF | OFF | ON | $0\ V$ |
| $0\ V$ | $V_{DD}$ | OFF | OFF | ON | ON | ON | ON | OFF | OFF | $V_{DD}$ |
| $V_{DD}$ | $0\ V$ | ON | ON | OFF | OFF | OFF | OFF | ON | ON | $V_{DD}$ |
| $V_{DD}$ | $V_{DD}$ | ON | OFF | OFF | ON | OFF | ON | ON | OFF | $0\ V$ |
## XNOR
$$
f = \bar{a} \cdot \bar{b} + a \cdot b
$$
Funzione diretta: pull-down $(\bar a \cdot \bar b) \,\|\, (a \cdot b)$, pull-up duale e inverter in uscita (14 interruttori).
![[Circuiti integrati digitali-1793024431119.webp|center|450]]
Dualmente a quanto visto per la [[#XOR]], la XNOR è una XOR negata: $f = \overline{\bar a \cdot b + a \cdot \bar b}$. È proprio il primo circuito della [[#XOR]] **senza** inverter finale, che ottiene lo stesso risultato con meno interruttori (12):
![[Circuiti integrati digitali-1792585626485.webp|center|450]]
## MUX 2:1
$$
f = \bar{c} \cdot a + c \cdot b
$$
![[Circuiti integrati digitali-1793025022342.webp|center|450]]

# Regole di progettazione
Utilizzando formule in *prima forma canonica* (or di and - (·) + (·)), se in $f$ è presente l'operatore:
1. $f=a \cdot b$ -`and`:
	- **Pull-up**: interruttori z in *parallelo*
	- **Pull-down**: interruttori u in *serie*
2. $f = c + d$ - `or`:
	- **Pull-up**: interruttori z in *serie*
	- **Pull-down**: interruttori u in *parallelo*
3. **diretta** (AND, OR) in uscita inserisco un *inverter*
4. **negata** ($f = \overline{a \cdot b} \vee f = \overline{a + b}$ - NAND, NOR) in uscita ho direttamente `out`


# Caratteristiche fisiche dei circuiti ad interruttori
Il segnale in ingresso a una porta logica varia nel tempo, ma ci sono intervalli in cui rimane costante. Tra due intervalli costanti il segnale commuta da un valore all'altro e il comportamento della porta cambia di conseguenza.

![[Circuiti integrati digitali-1793052553552.webp|center|391]]

>[!multi-column]
>
>>[!important] Analisi statica
>>Si applica una tensione **costante** agli ingressi: si studia cosa succede negli intervalli in cui il segnale resta stabile.
>
>>[!important] Analisi dinamica
>>Si applica una tensione **variabile** agli ingressi: si studia cosa accade durante le **commutazioni** del segnale.

Come riferimento si usa il circuito più semplice visto finora, l'**inverter**, con tensione di ingresso $V_{IN}$.

## Analisi statica
Dall'analisi statica si ricavano le **caratteristiche statiche** del circuito, in particolare la dissipazione di potenza.
![[Circuiti integrati digitali-1792569064632.webp|center|202]]
### Dissipazione di potenza statica
La corrente $I$ erogata dall'alimentazione, moltiplicata per $V_{DD}$, dà la **potenza statica** dissipata:
$$
P_{\text{stat}} = V_{DD} \cdot I
$$
La potenza statica è diversa da zero solo se esiste uno stato stabile in cui $I \neq 0$, cioè se esiste un ramo chiuso tra l'alimentazione e la massa.

**Caso 1:** $V_{IN} = 0\ V$
Il circuito di pull-down è aperto, quindi non c'è un ramo verso massa: $I = 0$, $V_{out} = V_{DD}$ e $P_{\text{stat}} = V_{DD} \cdot 0 = 0$.
![[Circuiti integrati digitali-1793052592251.webp|200]]

**Caso 2:** $V_{IN} = V_{DD}$
Il circuito di pull-up è aperto: $I = 0$, $V_{out} = 0\ V$ e $P_{\text{stat}} = V_{DD} \cdot 0 = 0$.
![[Circuiti integrati digitali-1793052609361.webp|200]]

>[!important] Mutua esclusione e potenza statica
>Rispettando il principio di mutua esclusione, in ogni stato stabile almeno una delle due reti (pull-up o pull-down) è aperta. Con interruttori **ideali** la potenza statica è quindi sempre nulla.

### Interruttori reali
Gli interruttori reali, a livello elettrico, sono assimilabili a **resistori**:

>[!multi-column]
>
>>[!important] Interruttore aperto
>>- **Ideale**: circuito aperto
>>- **Reale**: resistore con resistenza molto elevata, $R_{OFF} \to \infty$
>
>>[!important] Interruttore chiuso
>>- **Ideale**: cortocircuito
>>- **Reale**: resistore con resistenza molto piccola, $R_{ON} \to 0$

Sostituendo gli interruttori con queste resistenze, per ogni stato stabile si forma un [[Elettrotecnica#Partitore di tensione|partitore di tensione]] tra $V_{DD}$ e massa. Ora un ramo verso massa esiste sempre, quindi $I \neq 0$ e l'uscita non coincide più esattamente con $V_{DD}$ o con $0\ V$.

**Caso 1:** $V_{IN} = 0\ V$
![[Circuiti integrati digitali-1793052651769.webp|200]]

L'interruttore chiuso (pull-up) provoca una piccola caduta di tensione $R_{ON} \cdot I$, che va sottratta a $V_{DD}$:
$$
V_{out} = V_{DD} - R_{ON} \cdot I \approx V_{DD}
$$
$$
P_{\text{stat}} = V_{DD} \cdot I \neq 0
$$

**Caso 2:** $V_{IN} = V_{DD}$
![[Circuiti integrati digitali-1793052686539.webp|200]]

Dualmente, l'uscita è la caduta di tensione sulla resistenza di pull-down chiusa:
$$
V_{out} = R_{ON} \cdot I \approx 0
$$
$$
P_{\text{stat}} = V_{DD} \cdot I \neq 0
$$

In entrambi i casi, essendo $R_{ON}$ molto piccola e $R_{OFF}$ molto grande, la corrente $I$ è piccolissima: la potenza statica non è nulla, ma si approssima a zero, e questo limita i danni fisici all'interno del circuito.

### Tensione di soglia
Negli interruttori reali la commutazione non dipende dal valore esatto della tensione di controllo $V_c$ ($0\ V$ o $V_{DD}$), ma dal superamento di una **tensione di soglia** $V_{\text{soglia}}$.

>[!multi-column]
>
>>[!important] Interruttore di tipo 1
>>**Ideale**
>>- $V_c = V_{DD} \implies$ ON
>>- $V_c = 0\ V \implies$ OFF
>>
>>**Reale (con soglia)**
>>- $V_c \geq V_{\text{soglia}} \implies$ ON
>>- $V_c < V_{\text{soglia}} \implies$ OFF
>
>>[!important] Interruttore di tipo 0
>>**Ideale**
>>- $V_c = 0\ V \implies$ ON
>>- $V_c = V_{DD} \implies$ OFF
>>
>>**Reale (con soglia)**
>>- $V_c \leq V_{\text{soglia}} \implies$ ON
>>- $V_c > V_{\text{soglia}} \implies$ OFF

In un circuito l'uscita di una porta (**porta pilota**) è l'ingresso di un'altra porta (**porta di carico**). Come visto con gli interruttori reali, a causa delle cadute di tensione su $R_{ON}$ l'uscita della porta pilota non vale esattamente $V_{DD}$ o $0\ V$. Questo non è un problema finché la tensione resta **dal lato giusto della soglia**: la porta di carico interpreta comunque correttamente il valore logico.

Il problema nasce quando aumentano gli ingressi della porta pilota, ed è da qui che si ricava il limite di [[#Fan-in]].

### Fan-in
>[!important] Fan-in
>Numero massimo di ingressi che una porta logica può gestire.

All'aumentare del numero di ingressi le resistenze in gioco si degradano e l'uscita si allontana dai valori nominali, fino a non essere più interpretata correttamente dalla porta di carico.

#### Problemi sullo 0 logico: NAND
Il caso peggiore per lo 0 logico è una porta con gli interruttori in **serie** nella pull-down (come la NAND) e tutti gli ingressi a $V_{DD}$.

**NAND a 2 ingressi:** $V_A = V_B = V_{DD}$
![[Circuiti integrati digitali-1792569428894.webp|center|250]]
Con $A = B = V_{DD}$: $Z_1$, $Z_2$ (parallelo, pull-up) sono aperti → $R_{OFF} \,\|\, R_{OFF} = R_{OFF}/2$; $U_1$, $U_2$ (serie, pull-down) sono chiusi → $2R_{ON}$.

Le due resistenze $R_{ON}$ della pull-down sono in serie, quindi l'uscita, che idealmente è $0\ V$, diventa
$$
V_{out} = 2 R_{ON} \cdot I
$$
e si allontana da $0\ V$ **più che nell'inverter**. Inoltre i due interruttori aperti della pull-up sono in parallelo, quindi la resistenza della pull-up **diminuisce**, mentre quella della pull-down chiusa **aumenta**: ci si allontana dalla condizione di mutua esclusione.

**NAND a 4 ingressi:** $A = B = C = D = V_{DD}$

>[!multi-column]
>
>>[!blank]
>>![[Marietto-nand4-cmos.svg|center|260]]
>
>>[!blank]
>>![[Marietto-fanin-1.svg|center|380]]

- la pull-down è la **serie** di 4 resistenze $R_{ON}$
- la pull-up è il **parallelo** di 4 resistenze $R_{OFF}$

$$
V_{out} = 4 R_{ON} \cdot I \qquad I = \frac{V_{DD}}{4 R_{ON} + \frac{R_{OFF}}{4}}
$$
Finché $V_{out} < V_{\text{soglia}}$ la porta di carico legge correttamente uno 0 logico. Aumentando il numero di ingressi però $V_{out}$ cresce, fino a un valore che il carico non riesce più a interpretare come 0: c'è quindi un limite sul **valore massimo** che la porta pilota può dare in uscita per rappresentare lo 0.

>[!important] $V_{OL}$ (Output Low)
>Massimo valore di tensione in **uscita** dalla **porta pilota** che rappresenta lo 0 logico.

>[!important] $V_{IL}$ (Input Low)
>Massimo valore di tensione in **ingresso** che la **porta di carico** interpreta come 0 logico.

Perché tutto funzioni correttamente deve valere:
$$
V_{OL} \leq V_{IL}
$$

$V_{OL}$ dipende dalla topologia della porta pilota, che decidiamo noi, quindi possiamo controllarlo; $V_{IL}$ invece è un **parametro della tecnologia** e non possiamo modificarlo.

#### Problemi sull'1 logico: NOR
>[!question] Osservazione: la NAND sull'1 logico
>Sulla NAND l'1 logico non dà problemi: con $A = B = C = D = 0\ V$ la pull-up è il **parallelo** di 4 $R_{ON}$ ($R_{ON}/4$) e la pull-down la **serie** di 4 $R_{OFF}$, quindi più ingressi ci sono più $V_{out}$ si avvicina a $V_{DD}$.
>![[Marietto-fanin-0.svg|center|380]]
>Il problema dell'1 nasce invece nelle porte con la **serie** nella pull-up.

>[!multi-column]
>
>>[!blank]
>>Dualmente, il caso peggiore per l'1 logico è una porta con gli interruttori in **serie** nella pull-up (come la NOR). Con una NOR a 4 ingressi e $A = B = C = D = 0\ V$:
>>- la pull-up è la **serie** di 4 resistenze $R_{ON}$
>>- la pull-down è il **parallelo** di 4 resistenze $R_{OFF}$
>
>>[!blank]
>>![[Circuiti integrati digitali-nor4-fanin.svg|center|220]]

>[!attention] AGGIUNTA
>La figura della NOR non è negli appunti di Marietto: è il duale del caso NAND con tutti gli ingressi a $V_{DD}$.

Quindi
$$
V_{out} = V_{DD} - 4 R_{ON} \cdot I \qquad I = \frac{V_{DD}}{4 R_{ON} + \frac{R_{OFF}}{4}}
$$
All'aumentare del numero di ingressi $V_{out}$ si allontana dal valore nominale $V_{DD}$.

>[!important] $V_{OH}$ (Output High)
>Minimo valore di tensione in **uscita** dalla **porta pilota** che rappresenta l'1 logico. Dipende da come è fatto il circuito e possiamo condizionarlo cambiandone la topologia.

>[!important] $V_{IH}$ (Input High)
>Minimo valore di tensione in **ingresso** che la **porta di carico** interpreta come 1 logico (parametro della tecnologia).

Perché tutto funzioni correttamente deve valere:
$$
V_{OH} \geq V_{IH}
$$

>[!important] Riassumendo
>All'aumentare del numero di ingressi di una porta:
>- aumenta la $R_{ON}$ complessiva delle reti in serie
>- diminuisce la $R_{OFF}$ complessiva delle reti in parallelo
>
>ci si allontana dalle condizioni che garantiscono la **mutua esclusione** e l'uscita rischia di non rispettare $V_{OL} \leq V_{IL}$ o $V_{OH} \geq V_{IH}$: questo fissa il fan-in massimo.

### Margini di rumore
Mettendo insieme le due condizioni ricavate:
$$
\begin{cases}
V_{OH} \geq V_{IH} \\
V_{OL} \leq V_{IL}
\end{cases}
$$
si definiscono i **margini di rumore**, cioè quanto disturbo può sommarsi al segnale tra porta pilota e porta di carico senza che il valore logico venga interpretato in modo sbagliato:
- **margine di rumore alto**: $NM_H = V_{OH} - V_{IH}$
- **margine di rumore basso**: $NM_L = V_{IL} - V_{OL}$

>[!important] Il circuito funziona correttamente solo se **entrambi** i margini sono $> 0$

## Analisi dinamica
*Fonte: appunti di Marietto, Dodicesima e Tredicesima lezione (vedi [[Appunti Marietto#Analisi dinamica|analisi dinamica (Marietto)]]).*

Nell'analisi dinamica gli ingressi **variano nel tempo** e si studia cosa succede durante le commutazioni. Come per l'analisi statica si usa l'**inverter**: quello che vale per l'inverter vale per tutti i circuiti logici.

### Tempi di salita e di discesa
Una forma d'onda **ideale** commuta istantaneamente (tempo di salita nullo); una forma d'onda **reale** impiega un tempo non nullo, che si misura tra il 10% e il 90% del valore massimo.

![[Marietto-forma-onda.svg|center|700]]

>[!multi-column]
>
>>[!important] Tempo di salita
>>Tempo impiegato per passare dal 10% al 90% del valore massimo:
>>$$t_r = t_2 - t_1 = t_{90\%} - t_{10\%}$$
>
>>[!important] Tempo di discesa
>>Tempo impiegato per passare dal 90% al 10% del valore massimo:
>>$$t_f = t_4 - t_3 = t_{10\%} - t_{90\%}$$
>>(in discesa il 10% si raggiunge *dopo* il 90%)

Non è detto che $t_r = t_f$: anzi, in generale $t_r \neq t_f$.

### Capacità di carico
L'uscita di una porta logica verrà sicuramente usata da un'altra porta logica. Nella situazione più semplice l'uscita di un inverter (**pilota**) entra in un altro inverter (**carico**). Disegnando entrambi con i transistori:

![[Marietto-inverter-capacita-gate.svg|center|650]]

Quando $V_{in} = 0$ il PMOS del pilota è acceso e l'NMOS è spento; l'uscita $O_1$ del pilota è collegata ai **gate** del carico. Sul morsetto di gate si vedono due effetti:
- un effetto **resistivo**
- un effetto **capacitivo**: la struttura metallo–ossido–semiconduttore del [[MOSFET]] si comporta come un condensatore tra gate e massa ($C_{gp}$ per il PMOS, $C_{gn}$ per l'NMOS)

Ogni transistore introduce la propria capacità. Per semplificare i calcoli le si concentra in un'**unica capacità**: per il principio di sovrapposizione degli effetti, nell'analisi dinamica $V_{DD}$ va sostituito con la massa, quindi anche il condensatore collegato verso $V_{DD}$ finisce verso massa e le capacità risultano tutte **in parallelo**:
$$
C_L = C_{gn} + C_{gp}
$$

>[!important] Capacità di carico
>Su ogni nodo si considera un solo condensatore $C_L$, con capacità pari alla **somma delle capacità di gate** delle porte che ricevono quel nodo come ingresso.

Il modello dell'inverter per l'analisi dinamica diventa quindi:
![[Marietto-inverter-cl.svg|center|400]]

### Tempo di propagazione
Detto anche **ritardo**, tempo di risposta o di commutazione: è il tempo con cui l'inverter risponde alle sollecitazioni in ingresso.

Consideriamo una commutazione dell'ingresso da $0\ V$ a $V_{DD}$.

**Prima della commutazione** $V_{in}$ è stabilmente a $0\ V$: l'interruttore di tipo 0 è chiuso ($R_{ON}$) e quello di tipo 1 è aperto ($R_{OFF}$). Poiché $R_{OFF} \gg R_{ON}$, $R_{OFF}$ si può sostituire con un circuito aperto. In questo stato $V_{out} = V_{DD}$, cioè $C_L$ è **carica** a $V_{DD}$.

![[Marietto-commutazione-rc.svg|center|600]]

**Durante la commutazione** $V_{in} \uparrow$ fino a $V_{DD}$ e il circuito passa nella condizione opposta: la pull-up si apre, la pull-down si chiude e $C_L$ si **scarica** attraverso la $R_{ON}$ della pull-down, finché $V_{out} = 0\ V$ (a destra in figura).

![[Marietto-potenza-switching.svg|center|700]]

La scarica non è istantanea: dipende dalla **costante di tempo** del circuito $RC$
$$
\tau = R_{ON} \cdot C_L \qquad t_{SCAR} = \alpha \cdot \tau
$$
Nella commutazione opposta ($V_{in}$ da $V_{DD}$ a $0\ V$) $C_L$ si carica attraverso la $R_{ON}$ della pull-up, con la stessa formula di $\tau$ (assumendo uguali le $R_{ON}$ dei due tipi di interruttore).

>[!important] $t_{pHL}$ e $t_{pLH}$
>- $t_{pHL}$: tempo che impiega l'uscita a commutare da $V_{DD}$ a $0\ V$ (1 → 0) in risposta a una commutazione dell'ingresso da $0\ V$ a $V_{DD}$
>- $t_{pLH}$: il duale, uscita da $0\ V$ a $V_{DD}$ (0 → 1)
>
>Si misurano tra gli istanti in cui ingresso e uscita attraversano $V_{DD}/2$.

![[Marietto-tempo-propagazione.svg|center|650]]

$$
t_{pHL} = t'' - t' \qquad t_{pLH} = t_1 - t_0
$$

Come tempo di ritardo della porta si usa un unico valore, il **massimo** dei due:
$$
t_p = \max\{t_{pHL},\ t_{pLH}\}
$$

>[!bug] Media ≠ ritardo
>Sui libri si trova spesso $t_p$ come **media** tra $t_{pHL}$ e $t_{pLH}$: secondo il corso è **sbagliato**. Il tempo di ritardo dice con che ritmo si possono mandare variazioni in ingresso al circuito: usando la media e mandando una commutazione ogni $t_p$, si rischia di inviare una nuova variazione prima che l'inverter abbia risposto alla precedente (quella col tempo più lungo).

Il tempo di propagazione fissa quindi la **frequenza di funzionamento** della porta (la frequenza è l'inverso del tempo).

### Perché NMOS nella pull-down e PMOS nella pull-up
*Fonte: `archivio/3 anno/elettronica digitale/slide/Approfondimento_CMOS.pdf`, pp. 162–164.*

Il motivo sta nella carica e nella scarica di $C_L$. Un MOSFET conduce solo finché $|V_{GS}| \geq |V_T|$ ($V_T$ = tensione di soglia), e il **source** è il terminale verso cui va la carica, quindi durante il transitorio può essere proprio l'uscita.

>[!multi-column]
>
>>[!important] NMOS (tipo 1)
>>- **Scarica** $C_L$ (pull-down): gate a $V_{DD}$, source a massa → $V_{GS} = V_{DD}$ costante, resta acceso fino a $V_{out} = 0\ V$. Lo **0 non è degradato**.
>>- **Carica** $C_L$: il source è l'uscita → $V_{GS} = V_{DD} - V_{out}$ cala man mano, e quando $V_{GS} < V_T$ si spegne. L'uscita si ferma a $V_{DD} - V_T$: **1 degradato**.
>
>>[!important] PMOS (tipo 0)
>>- **Carica** $C_L$ (pull-up): gate a $0\ V$, source a $V_{DD}$ → $V_{GS} = -V_{DD}$ costante, resta acceso fino a $V_{out} = V_{DD}$. L'**1 non è degradato**.
>>- **Scarica** $C_L$: il source è l'uscita → $|V_{GS}| = V_{out}$ cala man mano, e per scaricare correttamente servirebbe $|V_{GS}| \geq |V_T|$: si spegne quando $V_{out} = |V_T|$. **0 degradato**.

Per questo nella **pull-down** (che deve portare l'uscita a $0\ V$) si usano gli **NMOS** e nella **pull-up** (che deve portarla a $V_{DD}$) i **PMOS**.

### Fan-out
>[!important] Fan-out
>Numero di porte logiche (carichi) pilotate dall'uscita di una porta.

Ogni carico aggiunge le sue capacità di gate, quindi $C_L$ **cresce con il fan-out**. Il primo effetto si vede sul tempo di propagazione:
$$
\tau' = R_{ON} \cdot C_L' > \tau \qquad (C_L' > C_L)
$$
cioè la porta risponde più lentamente.

![[Marietto-fan-out.svg|center|600]]

>[!important] Perché il fan-out è limitato
>Aumentando il fan-out cresce $C_L$, e questo peggiora:
>- il **tempo di risposta**: $\tau = R_{ON} \cdot C_L$ cresce
>- la **dissipazione di potenza dinamica**: $P = f \cdot C_L \cdot V_{DD}^2$ cresce (vedi sotto)

### Dissipazione di potenza dinamica
Insieme al tempo di propagazione è la caratteristica che preoccupa di più i progettisti. Ha due contributi.

#### Potenza di switching
Quando $V_{in}$ passa da $V_{DD}$ a $0\ V$, $C_L$ si carica dal generatore attraverso $R_{ON}$ (a sinistra nella figura di [[#Tempo di propagazione|sopra]]). Durante la carica $i(t) \neq 0$:
$$
i(t) = C_L \cdot \frac{dV_{out}}{dt} \qquad p(t) = V_{DD} \cdot i(t) = V_{DD} \cdot C_L \cdot \frac{dV_{out}}{dt}
$$
L'energia erogata dal generatore, con $V_{out}(0) = 0\ V$ e $V_{out}(\infty) = V_{DD}$, è
$$
E = \int_{0}^{\infty} V_{DD} \cdot C_L \cdot \frac{dV_{out}}{dt}\, dt = V_{DD} \cdot C_L \int_{0\ V}^{V_{DD}} dV_{out} = C_L \cdot V_{DD}^2
$$
Di questa energia **metà** viene dissipata su $R_{ON}$ per effetto Joule durante la carica, l'altra metà resta immagazzinata in $C_L$ e viene dissipata su $R_{ON}$ della pull-down nella scarica successiva:
$$
E_C = \frac{1}{2} C_L V_{DD}^2 \qquad E_{LH} = E - E_C = \frac{1}{2} C_L V_{DD}^2 \qquad E_{HL} = E_C = \frac{1}{2} C_L V_{DD}^2
$$
L'energia dissipata è quindi la stessa nelle due commutazioni (`archivio/3 anno/elettronica digitale/slide/Approfondimento_CMOS.pdf`, p. 152 della dispensa). In una **commutazione completa** (carica + scarica) si dissipa quindi tutta l'energia erogata:
$$
E_{diss} = C_L \cdot V_{DD}^2
$$
Dividendo per il periodo $T$ di una commutazione completa ($f = 1/T$):

>[!important] Potenza di switching
>$$P = \frac{E_{diss}}{T} = f \cdot C_L \cdot V_{DD}^2$$

La potenza dipende quindi da tre fattori:
- **frequenza** $f$: lineare
- **capacità di carico** $C_L$, quindi dal **fan-out**: lineare
- **tensione di alimentazione** $V_{DD}$: **quadratica**

Aumentando il fan-out aumenta $C_L$, quindi la potenza dinamica cresce **linearmente** con il fan-out; l'effetto **quadratico** ce l'ha invece $V_{DD}$: dimezzare la tensione di alimentazione riduce la potenza di switching di 4 volte.

>[!question] Osservazione: limite fisico su $V_{DD}$
>Conviene quindi abbassare $V_{DD}$, ma c'è un **limite fisico**: abbassandola ci si avvicina alla **tensione di soglia** degli interruttori (sia degli NMOS sia dei PMOS), e diventa difficile discriminare in modo netto lo stato aperto/chiuso.

#### Potenza di corto circuito
Gli interruttori reali sono dispositivi **a soglia**: con tempi di salita e discesa non nulli c'è un intervallo di tensioni d'ingresso in cui **pull-up e pull-down sono entrambe chiuse**, e si dissipa una potenza (temporanea) di **corto circuito**.

![[Marietto-potenza-corto-circuito.svg|center|450]]

Più i fronti sono ripidi (tempi di salita e discesa piccoli), meno incide la potenza di corto circuito.

>[!important] Riassumendo
>- **Caratteristiche statiche**: dissipazione di potenza statica, fan-in, margini di rumore
>- **Caratteristiche dinamiche**: tempo di propagazione, fan-out, dissipazione di potenza dinamica (switching + corto circuito)
>
>Frequenza e potenza sono legate ($P = f \cdot C_L \cdot V_{DD}^2$): il progettista sceglie di conseguenza se deve **ottimizzare la frequenza** (velocità) o la **dissipazione di potenza**.

# Circuiti sequenziali

>[!multi-column]
>
>>[!important] Circuiti combinatori
>>Rispondono solo agli ingressi **correnti**: l'uscita al tempo $t + \Delta t$ dipende esclusivamente dagli ingressi al tempo $t$ ($\Delta t$ = ritardo del circuito, cioè il [[#Tempo di propagazione|tempo di propagazione]]). La risposta non dipende mai da ingressi o uscite passati.
>
>>[!important] Circuiti sequenziali
>>Hanno **memoria degli eventi precedenti**: l'uscita al tempo $t$ dipende dagli ingressi al tempo $t$ **e** dall'uscita generata al tempo $t-1$ (slide 1).

![[Sequenziali-modello.svg|center|450]]

La parte combinatoria calcola uscite e **stato futuro**; i registri memorizzano lo stato e lo restituiscono come **stato corrente** al colpo di clock successivo (slide 1).

>[!question] Osservazione: nomi diversi
>È lo stesso [[1. Reti logiche#Reti sequenziali sincrone|modello generale delle reti sequenziali sincrone]] di Reti logiche: lì stato corrente e stato futuro si chiamano **variabili di stato** $y$ e $y'$, e i registri sono gli anelli con i FF Fc.

## Segnale di clock
Per sapere se qualcosa è già accaduto bisogna **scandire il tempo** dentro il circuito: lo fa il **clock**, un'onda quadra periodica che si ripete indefinitamente. Sono gli **eventi** su questo segnale a dare al circuito il comportamento corretto.

Caratteristiche:
1. **periodo** $T$: intervallo di tempo tra due eventi dello stesso tipo, es. $T = t_2 - t_1 = t_2' - t_1'$ (due fronti di salita o due fronti di discesa consecutivi)
2. **frequenza** $f = \frac{1}{T}$: il parametro che vogliamo **massimizzare**

Eventi del clock:
1. **fronte di salita** (da 0 a 1 logico)
2. **fronte di discesa** (da 1 a 0 logico)
3. **livello 0** (clock stabilmente a 0)
4. **livello 1** (clock stabilmente a 1)

![[Sequenziali-clock.svg|center|450]]

## Latch
>[!important] Latch
>Il latch è sensibile ai **livelli** del clock (slide 2-3). Ha un ingresso $D$, un'uscita $Q$ e l'ingresso del clock $Clk$.

Esistono due tipi di latch:

>[!multi-column]
>
>>[!important] Latch negativo
>>Il **pallino** sull'ingresso del clock indica che è sensibile al **livello 0**:
>>- $Clk = 0$: **trasferisce** il dato in uscita, $Q \Leftarrow D$
>>- $Clk = 1$: **memorizza** lo stato precedente
>
>>[!important] Latch positivo
>>Duale del negativo, sensibile al **livello 1**:
>>- $Clk = 1$: **trasferisce** il dato in uscita, $Q \Leftarrow D$
>>- $Clk = 0$: **memorizza** lo stato precedente

Il comportamento si vede con i **diagrammi di timing** (slide 2-3): finché il clock è al livello attivo $Q$ segue $D$, quando il clock passa al livello opposto $Q$ resta fermo sull'ultimo valore. La variazione dell'uscita quindi può essere causata **o da $D$ o da $Clk$**.

>[!multi-column]
>
>>[!check] Latch negativo
>>![[Sequenziali-latch-negativo.svg]]
>
>>[!check] Latch positivo
>>![[Sequenziali-latch-positivo.svg]]

Nel latch negativo il fronte di salita di $D$ arriva con $Clk = 0$ e passa subito in $Q$; quello di discesa arriva con $Clk = 1$ e $Q$ cambia solo quando il clock torna a 0. Nel latch positivo succede il contrario.

>[!question] Osservazione: latch e glitch
>Ogni commutazione di un segnale produce [[#Potenza di switching|dissipazione di potenza dinamica]]. Nei circuiti combinatori le commutazioni sono molto frequenti, legate ai ritardi diversi con cui le porte logiche rispondono: questi impulsi spuri si chiamano **glitch** e non trasportano nessuna informazione utile. Se il latch **blocca** i glitch (li lascia passare solo durante il livello attivo), in $Q$ arriva un segnale con meno cambi repentini, quindi con **minore dissipazione di potenza**. Nel latch negativo, ad esempio, le variazioni rapide di $D$ con $Clk = 1$ non arrivano in uscita.

### Schema elementare
Il latch si realizza con un **collegamento in retroazione**: due porte NAND incrociate (A e B in ingresso, $Q$ e $\overline{Q}$ in uscita) memorizzano il bit, mentre le due NAND di ingresso fanno passare $D$ solo quando $clk = 1$ (slide 6). È quindi un **latch positivo**. In CMOS servono **18 interruttori**: 4 NAND a 2 ingressi da 4 transistor + l'inverter da 2.

![[Sequenziali-latch-nand.svg|center|450]]
$$
\begin{array}{cc|c}
Clk & D & Q(t) \\
\hline
0 & 0 & Q(t-\Delta t) \\
0 & 1 & Q(t-\Delta t) \\
1 & 0 & 0 \\
1 & 1 & 1
\end{array}
$$

>[!question] Osservazione: nomi diversi
>- La coppia di porte incrociate è il [[1. Reti logiche#FLIP-FLOP RS (reset-set)|flip-flop RS]] di Reti logiche (lì fatto con NOR, qui con NAND): in elettronica, essendo sensibile ai livelli e senza clock, si chiama **latch**.
>- Il latch positivo con clock è il [[1. Reti logiche#Reti sequenziali sincrone|FF Fc]] di Reti logiche: $F$ corrisponde a $D$ e $c$ a $Clk$; la tabella è la stessa.
>- In VHDL un latch si può ottenere anche senza volerlo: [[VHDL#Latch involontari|latch involontari]].

## Flip flop
>[!important] Flip flop
>Il flip flop **memorizza il dato quando il clock "sale"**: è sensibile ai **fronti** del clock (slide 4). $Q$ può cambiare **solo** in corrispondenza dell'evento attivo del clock. Nel simbolo il fronte si indica con il **triangolino** sull'ingresso del clock.

![[Sequenziali-flip-flop.svg|center|550]]

Rispetto al fronte di salita si possono verificare 3 casi:
1. $D$ varia **prima** del fronte: la variazione non ha effetto immediato su $Q$, che cambia solo al fronte (è il fronte di clock a far cambiare $Q$)
2. $D$ varia **dopo** il fronte: la variazione ha effetto su $Q$ solo se dura fino al fronte successivo
3. la variazione di $D$ **coincide** esattamente con il fronte di clock: è uno stato di malfunzionamento, il FF entra in **metastabilità** (indeterminazione): non si riesce a riconoscere il valore del segnale e in simulazione l'uscita vale `'X'`

Come il latch, anche il flip flop esiste in due versioni: sensibile al **fronte di salita** o al **fronte di discesa** (pallino prima del triangolino).

### Vincoli temporali
Per evitare la metastabilità bisogna rispettare dei vincoli temporali intorno al fronte attivo del clock: un registro funziona correttamente solo se sono rispettati **tempo di setup** e **tempo di hold** (slide 5).

>[!important] Tempo di setup e tempo di hold
>- **Tempo di setup** ($t_{su}$): minimo tempo tra l'ultima variazione dell'ingresso e il fronte attivo del clock
>- **Tempo di hold** ($t_{hold}$): minimo tempo tra il fronte attivo del clock e la successiva variazione dell'ingresso
>
>Da $t_{su}$ prima del fronte fino a $t_{hold}$ dopo il fronte l'ingresso deve restare **stabile**:
>- se $D$ deve cambiare, deve farlo **almeno $t_{su}$ prima** del fronte, così ha il tempo di assestarsi
>- dopo il fronte, prima di far cambiare di nuovo $D$ bisogna far passare **$t_{hold}$**

![[Sequenziali-vincoli.svg|center|450]]

Nella figura della slide 5 compare anche $t_{c2q}$ (clock-to-Q): il ritardo tra il fronte del clock e la variazione di $Q$.

### Segnali di preset e clear
**Preset** ($Pr$) e **clear** ($Cr$) consentono di forzare l'uscita del flip flop a 1 o a 0 **indipendentemente dagli ingressi** (slide 12).

![[Sequenziali-preset-clear.svg|center|250]]

| $Pr$ | $Cr$ | $Q$ |
|:-:|:-:|:-:|
| 0 | 0 | dipende da $D$ e $ck$ |
| 1 | 0 | 1, qualsiasi siano $D$ e $ck$ |
| 0 | 1 | 0, qualsiasi siano $D$ e $ck$ |
| 1 | 1 | **non consentita**: l'uscita è indeterminata ($X$) |

Clear e preset sono **asincroni**: hanno **priorità** sul clock. Una variazione di $Q$ può quindi essere imposta da tre segnali:
$$
\displaylines{
Clk \to Q \\
Cr \to Q \\
Pr \to Q
}
$$

Esistono anche le **versioni sincrone** di questi segnali, che agiscono solo al fronte attivo del clock:
- clear $\to$ **reset**
- preset $\to$ **set**

Inoltre questi segnali possono essere **attivi alti** (agiscono quando valgono 1, come nella tabella sopra) o **attivi bassi** (agiscono quando valgono 0, nel simbolo hanno il **pallino**).

| segnale | tipo | attivo alto | attivo basso | effetto |
|---|---|:-:|:-:|---|
| clear | asincrono | $Cr = 1$ | $Cr = 0$ | $Q = 0$ subito |
| preset | asincrono | $Pr = 1$ | $Pr = 0$ | $Q = 1$ subito |
| reset | sincrono | $Reset = 1$ | $Reset = 0$ | $Q = 0$ al fronte di salita |
| set | sincrono | $Set = 1$ | $Set = 0$ | $Q = 1$ al fronte di salita |

"Attivo basso" indica il **valore del segnale** che fa agire il comando, non il valore a cui viene forzata l'uscita.

>[!check] Esempio: in VHDL
>Il [[VHDL#Process|flip-flop D con clear asincrono]] visto in VHDL ha il clear **attivo basso** (`reset = '0'`) e il clock sul fronte di salita. Nei circuiti sequenziali in VHDL bisogna gestire le **priorità** (clear prima del clock): per questo si usano statement **sequenziali** dentro un `process`.

## Registri
Un registro è fatto da $N$ flip flop con il **clock in comune**: memorizza una parola di $N$ bit. Ne esistono quattro tipi, a seconda di come entrano ed escono i dati (slide 13-16).

>[!question] Osservazione: nomi diversi
>In Reti logiche il [[1. Reti logiche#Registro|registro]] è fatto con $n$ [[1. Reti logiche#Flip-Flop FAc|FF FAc]] con $A$ e $c$ in comune: è un **PIPO** con in più l'ingresso di attivazione $A$. SIPO e SISO sono [[1. Reti logiche#Registri a scorrimento|registri a scorrimento]].

### Parallel IN – Parallel OUT (PIPO)
Ogni FF ha il suo ingresso $D_i$ e la sua uscita $Q_i$: a ogni fronte attivo del clock tutti gli $N$ bit vengono caricati **insieme**. $Q$ è **sincronizzata con il clock** (slide 13).

![[Sequenziali-pipo-timing.svg|center|500]]

>[!check] Esempio: PIPO a 4 bit (lavagna)
>$N$ flip flop tutti provvisti di **clear attivo basso**: ingressi $A(3)\dots A(0)$, uscite $QA(3)\dots QA(0)$, segnali **Clock** e **Clear** in comune a tutti i FF.
>![[Sequenziali-pipo-lavagna.svg|center|600]]
### Serial IN – Parallel OUT (SIPO)
I FF sono in cascata: l'uscita $Q$ di ciascuno entra nel $D$ del successivo, e a ogni fronte il dato **scorre** di una posizione. Il dato entra da un solo ingresso $D$ e si leggono tutte le uscite $Q_1 \dots Q_n$. Una stringa binaria di $n$ bit viene memorizzata **dopo $n$ cicli di clock** (slide 14).

![[Sequenziali-sipo.svg|center|550]]

### Parallel IN – Serial OUT (PISO)
I bit $D_1 \dots D_4$ si caricano in parallelo tramite **preset e clear** ($Pr = D_i$, $Cr = \overline{D_i}$, attivi alti), poi escono in serie da $Q$ dello stesso schema a scorrimento (slide 15).

![[Sequenziali-piso.svg|center|500]]

### Serial IN – Serial OUT (SISO)
Stessa catena del SIPO, ma si legge solo l'uscita dell'ultimo FF: il dato entra in serie da $D$ ed esce in serie da $Q$ (slide 16).

![[Sequenziali-siso.svg|center|550]]
