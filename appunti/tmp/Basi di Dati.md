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
>**DATO**: codifica di un informazione secondo un linguaggio di rappresentazione che dipende dal livello di astrazione in cui si trova (nella fase di progettazione logica si utilizza un linguaggio diverso rispetto a quella fisica (segnali elettrici e magnetici))

Rombo indica una corrispondenza
Relazioni sono binarie: esprimono rapporti tra coppie di entità. Vedendo lo schema sotto generalizzazione, osserviamo che non è possibile usare i rombi per simulare relazioni totale, esclusiva ma solo se è parziale inclusiva. Questo perchè quando vediamo lo schema [...]

# Progettazione Logica
Dato un modello entità relazione (scrivendo tutte le informazioni anche se alcune poi non possono essere tradotto ), esprimente i concetti come sono correlati, la p.L. mi aiuta a definire il modo migliore per esprimere i concetti. Il modello logico è la def di quali sono le tabelle più opportune che esprimono i concetti del modello.

``` mermaid
flowchart LR
    %% Entità
    Fornitore["Fornitore"]
    Merce["Merce"]

    %% Relazione
    Fornitura{{"Fornitura"}}
    Nota["coppia fornitore-merce"] -.-> Fornitura

    %% Connessioni con cardinalità
    Fornitore ---|"0:n"| Fornitura
    Fornitura ---|"0:n"| Merce

    %% Attributi Fornitore
    attr_piva(("P.IVA (PK)")) --- Fornitore
    attr_fnome(("nome")) --- Fornitore
    attr_ditta(("ditta")) --- Fornitore

    %% Attributi Merce
    Merce --- attr_mnome(("nome"))
    Merce --- attr_merce(("merce"))
    Merce --- attr_codice(("codice (PK)"))

```

Dovendo dare una **direzione** alla base di dato definendo le strutture dati più adeguate per rappresentare le informazioni. Dopo aver specificato la tabella come deve essere strutturata, non devo passare all'implementazione.
**Fornitore**: siccome c'è omogeneità (ogni fornitore ha questi attributi) è logico rappresentarlo con u

```
# Schema della relazione 
Fornitore(P.IVA: String, nome: String, città: String)
dove:
- Fornitore: nome della relazione
- P.IVA: nome degli attributi
- String: dominio degli attributi
```

>[!important] Schema della base di dato
>Durante la fase di progettazione logica non è necessario scrivere la tabella contenente dati ma solo la descrizione della **struttura** dei dati: questa rappresentazione della tabella verrà poi istanziata in una seconda fase (testing). Infatti, ogni tabella è definita **istanza della relazione**.
>Quindi, fare il modello logico vuol dire fornire lo **schema di relazione** migliore per rappresentare il modello R.

>[!bug] Istanza vs Schema
>Se non la sai bocci [...] <- vedi sopra

Per rappresentare l'intero modello R posso usare:
- **una tabella**: inserisco tutti attributi di entrambe le entità
				$\therefore$ diventa un macello $\to$ ridondanza di informazioni (alcuni fornitori o merci sono ripetuti più volte)

| P.IVA | nomeF | città | codiceM | nomeM | merce    |
| ----- | ----- | ----- | ------- | ----- | -------- |
| F1    | A     | CS    | M1      | $X$   | $\alpha$ |
| F1    | A     | CS    | M2      | $Y$   | $\beta$  |
| F2    | B     | RC    | 2       | $Y$   | $\beta$  |
| F2    | B     | RC    | 2       | $Z$   | $\alpha$ |
Concettualmente, non è sbagliato, ma la base di dati oltre a dover ospitare informazioni corrette deve impedire di scrivere cose sbagliate: se scrivessi due istanze di fornitore con = partita iva ma diverso nome: ripetendo più volte la stessa informazione è più probabile sbagliare.

Supponendo tuttavia che i dati siano corretti, effettuare modifiche o aggiornamenti rischia di essere costosissimo perchè non dipende dalla dimensione di ciascun fornitore ma da quante merci fornisce.
Unica cosa positiva: ho tutte le informazioni insieme e la ricerca è più immediata.

- **tre tabelle**: quando in una tabella devo richiamare la rappresentazione di un concetto la riporto utilizzando solo gli attributi (chiave(?)) $\to$ avremo una coppia id fornitura - id merce

>[!multi-column]
>
>>[!blank] Fornitore
>>
>>|**PIVA**|**nome**|**città**|
|---|---|---|
	|F1|A|CS|
	|F2|B|RC|

>>[!blank] Merce
>>|**Codice**|**nome**|**marca**|
|---|---|---|
|M1|X|$\alpha$|
|M2|Y|$\beta$|
|M3|Z|$\alpha$|



>[!important] Osservazione
>1. Ottimizzo le modifiche dei dati $\to$ non si presenta il problema della modifica della chiave primaria: nella realtà è difficile che si modifichi.
>2. Sono più resistente agli errori di **data entry**
>3. Sembrerebbe meno veloce ad estrarre informazione rispetto alla rappresentazione con una sola tabella (lo vedremo!!!)

Nel fare il modello logico è essenziale evitare la **ridondanza**: perchè ripetizione aumenta il rischio di inconsistenze.

Infine sviluppiamo un modello logico opportuno:
```
# Schema della relazione 
Fornitore(P.IVA: String, nome: String, città: String)
Merce(Codice: Number, nome: String, marca: String) <- è possibile anche definire che un attributo può assumere il valore null: scrivendolo sopra 
Fornitura(fornitore: String, merce: Number)
```

Questo modello è adeguato alla realtà perchè è sempre rappresentabile secondo lo schema di relazione. Tuttavia, non vale il contrario: esistono delle relazioni rappresentabili secondo lo schema che non sono corrette.

Quindi, dobbiamo imporre dei **vincoli di chiave**, espressi graficamente **sottolineando** l'*insieme di attributi* che costituiscono la chiave. Così facendo ogni volta che si inserisce una riga il sistema (?) verifica la presenza di due righe con lo stesso attributo identificativo. Vincolo le righe della tabella a non coincidere nel campo di chiave. Dato l'insieme di attributi definito dal vincolo di chiave impongo che [...]

Siccome durante la fase di progettazione concettuale la caratteristica di chiave è già stata definita come minimale: 
$$
\text{caratteristica} \quad \underbrace{\longrightarrow}_{diventa} \quad \text{vincolo}
$$
Modello associa entità collegato con bracci dato da un sottoinsieme di coppie
Modello Relazionale: relazione è una qualunque tabella (prodotto cartesiano dei domini degli attributi) dove è necessario per ogni relazione specificare i vincoli di chiave

### Vincolo di integrità referenziale
Non basta per garantire allineamente aggiungere vincoli di chiave quando ci sono attributi che si riferiscono a contenuti di altre tabelle devo specificare il legame: specifico quindi che la stringa deve essere presente all'interno dei fornitori (graficamente freccia che vincola a prendere vali dall'attributo p.iva di fornitore)
- **Referenziale**: attributi usati come riferimenti sono corretti 
Usiamo termine specifico: **vincolo di chiave esterna** rappresentato da 
```
# Schema della relazione 
Fornitore(P.IVA: String, nome: String, città: String)
Merce(Codice: Number, nome: String, marca: String) <- è possibile anche definire che un attributo può assumere il valore null: scrivendolo sopra 
Fornitura(fornitore: String, merce: Number)
	Fornitura[fornitore] \subseteq _{FK} Fornitore [PIVA] <- FK: foreign key
	Fornitura[merce] \subseteq_{FK} Fornitore[Codice]
```
La chiave esterna non è una chiave perchè da sola non identifica 