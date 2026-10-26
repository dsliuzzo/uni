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
![[Circuiti integrati digitali-1792585626485.webp|center|450]]
tot = 14 interruttori ☠️
[...] ho fatto un danno, va aggiunto il not alla fine
## XNOR
$$
f = \bar{a} \cdot \bar{b} + a \cdot b
$$
![[Circuiti integrati digitali-1793024431119.webp|center|450]]
Possiamo anche averla come [[#XOR]] tutta negata, quindi possiamo togliere l'inverter finale dal circuito della [[#XOR]] ottenendo lo stesso risultato con meno interruttori
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


---



| **a**        | **b**        | **c**        | **d**        | **e**        | **$U_{1}$** | **$U_{2}$** | **$U_{3}$** | **$U_{4}$** | **$U_{5}$** | **$Z_{1}$** | **$Z_{2}$** | **$Z_{3}$** | **$Z_{4}$** | **$Z_{5}$** | **$\bar{f}$** | **$f$**      |
| -------- | -------- | -------- | -------- | -------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | --------- | -------- |
| 0V       | 0V       | 0V       | 0V       | 0V       | off     | off     | off     | off     | off     | on      | on      | on      | on      | on      | $V_{DD}$  | 0V       |
| $V_{DD}$ | $V_{DD}$ | $V_{DD}$ | $V_{DD}$ | $V_{DD}$ | on      | on      | on      | on      | on      | off     | off     | off     | off     | off     | 0V        | $V_{DD}$ |
| $V_{DD}$ | 0V       | $V_{DD}$ | 0V       | $V_{DD}$ | on      | off     | on      | off     | on      | off     | on      | off     | on      | off     | 0V        | $V_{DD}$ |


$$
f = \overline{(c \cdot (d + e) + b) \cdot a}
$$
---

# Caratteristiche fisiche dei circuiti ad interruttori
Nel suo funzionamento una porta logica riceve dei segnali che cambiano nel tempo. Nonostante questo ci sono degli intervalli in cui il segnale rimane costante (**analisi statica**). Tra due intervalli costanti abbiamo un intervallo di tempo in cui cambia il segnale dato in ingresso alla porta logica e cambia di conseguenza il suo comportamento (**analisi dinamica**).
[...] chiedi foto a cla
## Analisi statica
Dall'analisi statica possiamo capire alcune **caratteristiche statiche**
![[Circuiti integrati digitali-1792569064632.webp|center|202]]
### Dissipazione di potenza
Il circuito riceve in ingresso una corrente $I$ che moltiplicato per $V_{DD}$ restituisce la dissipazione di potenza statica.
Stato stabile per cui $I\neq 0$ e di conseguenza dà luogo ad una dissipazione di potenza.

**caso 1** $V_{\text{in}} = 0\ V$
Essendo un circuito aperto $I = 0$ e $V_{out} = V_{DD}$ di conseguenza $P_{\text{state}} = V_{DD} \cdot I = 0$
[...] grafico1
**caso 2** $V_{\text{in}} = V_{DD}$
Essendo un circuito aperto $I = 0$ e $V_{out} = 0 \ V$ di conseguenza $P_{\text{state}} = V_{DD} \cdot I = 0$
[...] grafico2

>[!important] Rispettando il principio di mutua esclusione garantisce la presenza di almeno una rete aperta, grazie a questo staticamente la dissipazione di potenza statica sarà sempre nulla
>(Con interruttori ideali)

### [...]
L'interruttore reale non si comporta come un circuito aperto, ma come un resistore con valore $R_{\text{off}}$, con resistenza molto elevata (tendente ad infinito).

Quando invece è chiuso si comporta come una resistena molto piccola, che chiamiamo $R_{\text{on}}$ (tendente a 0).

Mettendo in gioco queste resistenze riprendendo la [[#Dissipazione di potenza|dissipazione di potenza]] sostituiamo gli interruttori con le resistenze appena definite:
[...] grafici
si crea un [[Elettrotecnica#Partitore di tensione|partitore di tensione]]
**caso 1**
La tensione in uscita cambia, dobbiamo sottrarre la tensione relativa all'interruttore aperto
$$
V_{\text{out}} = V_{DD} - R_{\text{ON}} \cdot I
$$
Anche la potenza dissipata cambia di conseguenza
$$
P_{\text{state}} = V_{DD} \cdot I \approx 0 \neq 0
$$
**caso 2**
$$
V_{\text{out}} = R_{\text{ON}} \cdot I \approx 0
$$
### Fan in
>[!important] Fan in
>numero massimo di parametri che una porta logica può gestire in ingresso

**caso 1** $V_A = V_B = V_{DD}$
[...] AND
$$
V_{\text{out}} = 0 \ V \ \to \ V_{\text{out}} = 2 R_{\text{ON}} \cdot I
$$
mi sto allontanando da $V_{\text{out}} = 0 \ V$ ancora di più rispetto all'inverter.
La resistenza della pull up sta diminuendo, mentre quella del pull down sta aumentando $\to$ mi sto allontanando dal principio di mutua esclusione della pull up e della pull down.

## Analisi dinamica
