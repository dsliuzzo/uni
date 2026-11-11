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

### Fan-out
>[!important] Fan-out
>Numero di porte logiche (carichi) pilotate dall'uscita di una porta.

Ogni carico aggiunge le sue capacità di gate, quindi $C_L$ **cresce con il fan-out**. Il primo effetto si vede sul tempo di propagazione:
$$
\tau' = R_{ON} \cdot C_L' > \tau \qquad (C_L' > C_L)
$$
cioè la porta risponde più lentamente.

![[Marietto-fan-out.svg|center|600]]

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

#### Potenza di corto circuito
Gli interruttori reali sono dispositivi **a soglia**: con tempi di salita e discesa non nulli c'è un intervallo di tensioni d'ingresso in cui **pull-up e pull-down sono entrambe chiuse**, e si dissipa una potenza (temporanea) di **corto circuito**.

![[Marietto-potenza-corto-circuito.svg|center|450]]

Più i fronti sono ripidi (tempi di salita e discesa piccoli), meno incide la potenza di corto circuito.

>[!important] Riassumendo
>- **Caratteristiche statiche**: dissipazione di potenza statica, fan-in, margini di rumore
>- **Caratteristiche dinamiche**: tempo di propagazione, fan-out, dissipazione di potenza dinamica (switching + corto circuito)



$P = f \cdot C_L \cdot V_{DD}^2$
limite fisico di tensione di alimentazione -> ci avviciniamo alla tensione di soglia -> ho difficoltà a discriminare in maniera netta lo stato di funzionamento aperto/chiuso
Sia nel PMOS che nell'NMOS

motivazioni per cui il fan out è limitato
limiti legati alla dissipazione di potenza dinamica e al tempo di risposta

riassumendo
analisi statica e dinamica

il progettista si comporterà di conseguenza se deve ottimizzare la frequenza o la dissipazione di potenza

condizione per far scaricare correttamente la capacità al PMOS
scarico della capacità

motivazioni per usare NMOS nel pull down e PMOS nel pull up (centra con la scarica di capacità)

