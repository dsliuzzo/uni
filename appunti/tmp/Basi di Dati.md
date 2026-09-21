# Introduction
Gestione dei dati grazie a sistemi HW (server) e SW 
Base di dati = sistema orientato alla gestione di dati per garantire *proprietà*:
1. **Durabilità**: quando inseriti dati se persi recuperabili -> inseriti nelle memorie di massa (+ lente -> non si possono specificare requisiti di *velocità*)
2. **Real-time**: sistema prontamente x rispondere richieste
3. **Sicurezza**: accesso regolato dei dati (a volte anche in base al tipo di dato da accedere)
4. **Concorrenza**: è necessario gestire accessi in concorrenza nel caso di **Race Condition** 
Per gestire la concorrenza, non è (humanly) possibile scrivere un intero sistema dati in Java (che ha metodi **synchronized**). Invece si scrivono utilizzando delle **righe di tabelle**: all'interno si hanno delle primitive (metodi funzionali già disponibili che non devo debuggare!!!)di:
- update: modifica di un campo già esistente
- delete: cancellazione di un qualcosa

| CF  | Nome | Data di N |
| --- | ---- | --------- |
| 1   | A    | 2010      |
| 2   | B    | 2011      |

``` SQL
INSERT into (table)
DELETE
UPDATE
```
In generale, le strutture sincronizzate di Java sono estremamente "lente" perchè rubano colpi di clock al sistema per: usando i **sistemi DBMS** ciò è già implementato in maniera molto più veloce.
## Sistemi R-DBMS
i sistemi **Relational - Database Management System** studiati sono dei pacchetti sw dove dentro possiamo definire delle tabelle. 
Per relazionale si intende il significato matematico:

>[!info] Relazione 
>Dati due insiemi $A$ e $B$ una relazione è un **insieme di coppie** di elementi di $A$ e $B$ i cui unici limiti sono quelli che rispettano la proprietà di insieme:
> - ogni elemento non può essere ripetuto più di una volta
> - $R_{AB}\subseteq A\times B$
>
>Generalizzando, dati $n$ insiemi, una relazione è un insieme di $n$ elementi.

All'interno di una tabella, definita come un **insieme di righe** che definisce una relazione tra tutti gli insiemi definiti nelle **colonne**: infatti una tabella non è altro che una **relazione**.

Access -> si basa sull'utilizzo di file
MySQL -> si basa sulle tabelle per migliorare le caratteristiche di accesso concorrente

##  Modello a cascata - Creazione di un sistema basato su DBMS
Il seguente modello a cascata struttura l'ordine di procedere nella creazione: infatti si va avanti e non si torna più indietro: nella realtà non è vero perchè nella progettazione concettuale o logica o testing ci si può rendere conto ce l'analisi dei requisiti era insufficiente
Il committente effettua una serie di richieste allo sviluppatore al seguito del quale viene effettuato uno **studio di fattibilità**: si tratta del momento nel quale il committente da indicazione su ciò che serve per capire come e se si può procedere.
Segue l'analisi dei requisiti: ciò che il committente richiede cosa deve fare il sistema punto per punto.
Infine si ottiene un  **documento di requisiti**:
- lista di requisiti funzionali: funzioni che sistema deve supportare (inserimento clienti, ricerca prodotto)
- lista di requisiti non funzionali: caratteristiche che dovrebbe avere sistema ma non sono funzioni specifiche (piattaforma di pagamento, interfaccia WEB)
Avviata la parte tecnica, si effettua la progettazione concettuale: elenco delle informazioni da rappresentare nella base dei dati per poter adempiere ai requisiti nelle liste ragionando sulle **INFORMAZIONI** acquisite nella precedente analisi di contesto.
Ne segue la **progettazione logica**: prendo la prima fase di progettazione e unisco **logicamente** le informazioni per creare le tabelle (struttura concettuale) e scegliere la struttura dati più adatta basandosi usi requisiti (come i **DATI** vengono utilizzati).
In realtà, le tabelle già implementate possono essere usate rispetto a un qualunque criterio di ricerca in maniera efficiente senza dover scegliere nulla
**Progettazione fisica**: tuning delle impostazioni delle tabelle (direttive di ottimizzazioni delle tabelle e della loro connessione)
Nel concreto la fase di progettazione fisica e logica si fondono: questo succede perchè la fisica è così minimal che va bene lo stesso. 
**Implementazione!**: 
**Testing**
**Messa in Opera**
Seguendo questo modello si può creare una relazione di progetto che riassume i passi a cascata seguiti daje

>[!Osservazione]
>Non sono definibili in maniera indipendente 
>**INFORMAZIONE**: concetto astratto senza struttura 
>**DATO**: codifica di un informazione secondo un linguaggio che dipende dal livello di astrazione in cui si trova (nella fase di progettazione logica si utilizza un linguaggio diverso rispetto a quella fisica (segnali elettrici e magnetici))
