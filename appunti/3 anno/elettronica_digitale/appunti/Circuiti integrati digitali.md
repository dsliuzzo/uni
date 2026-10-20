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


# Componenti circuitali
## Interruttore
Per prima cosa è necessario trovare un metodo per rappresentare un bit '0' e un bit '1': l'**interruttore**.

>[!multi-column]
>
>>[!important] Interruttore aperto (off)
>>tensione max e corrente=0
>>![[ASIC-1792420439425.webp|center|100]]
>
>>[!important] Interruttore chiuso (on)
>>tensione=0 e corrente max
>>![[ASIC-1792420467293.webp|center|100]]


Ogni porta logica riceve una alimentazione che ne garantisce il funzionamento

[...] tldraw

[...]guarda roba tra V_dd e out uso interruttori di ti
- **rete di pull up**
  assicura che il nodo di uscita possa raggiungere la tensione più alta
- **rete di pull down**
  assicura che l'uscita possa raggiungere 0 volt


**NOT**
[...]
**Tabella degli stati**

| In       | tipo 0 | tipo 1 | Out      |
| -------- | ------ | ------ | -------- |
| 0V       | ON     | OFF    | $V_{DD}$ |
| $V_{DD}$ | OFF    | ON     | 0V       |


**NAND**
[...]
**Tabella degli stati**

| A        | B        | $Z_1$ | $Z_2$ | $U_{1}$ | $U_{2}$ | Out      |
| -------- | -------- | ----- | ----- | ------- | ------- | -------- |
| 0V       | 0V       | ON    | ON    | OFF     | OFF     | $V_{DD}$ |
| 0V       | $V_{DD}$ | ON    | OFF   | OFF     | ON      | $V_{DD}$ |
| $V_{DD}$ | 0V       | OFF   | ON    | ON      | OFF     | $V_{DD}$ |
| $V_{DD}$ | $V_{DD}$ | OFF   | OFF   | ON      | ON      | 0V       |

