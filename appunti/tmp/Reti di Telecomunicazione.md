# Modelli funzionali
Le reti sono delle strutture estremamente complicate divise in diversi elementi: risulta necessario organizzarli.
Consentono la descrizione e l’analisi delle reti viene semplificata dalla formalizzazione in modelli, permettendo la comunicazione da sorgente a destinazione 

>[!important] Comunicazioni: 
>trasferire info con convenzioni stabilite a priori che usano specifica tecnologie. In base alle regole si hanno divrse performance. Secondo questo comitato di standardizzazione (serve cooperazione tra varie aziende) dei protocolli CCITT la comunicazione è trasferimento di informazioni secondo convenzioni prestabilite. 
>
## Protocolli

>[!important] Protocollo
>Definiscono il **formato** , l’**ordine** di invio e ricezione dei messaggi tra le entità di rete, e le **azioni** intraprese alla trasmissione/ricezione del messaggi.
>Secondo il CCITT:
>descrizione formale delle procedure adottate per assicurare la comunicazionetra due o più funzioni dello stesso livello gerarchico.

I protocolli definiscono:
- **sintassi**: struttura di comandi e risposte (ordine con cui dati presentati)
- **semantica**: insieme di comandi e risposte
- **sincronizzazione**/**temporizzazione**: quando e a che velocità dati inviati - sequenze temporali di comandi e risposte (ordine di attesa dei messaggi)
di una comunicazione per non creare incoerenza

>[!important] Protocollo di comunicazione
>Un protocollo è un insieme di regole che governano il trasferimento dei dati tra **entità** che risiedono in diversi **sistemi**.
## Architetture
Un'architettura di comunicazione è costituita generalmente da:
-  **sistemi**: effettuano il trattamento e/o trasferimento di informazione in vista di specifiche applicazioni
- **processi** **applicativi**: coinvolti da esigenze di interazione con altri processi
- **mezzi** **trasmissivi**: struttura fisica di interconnessione tra i sistemi dove viaggiano i flussi di bit -> si utilizzano per far dialogare i **processi** di sistemi diversi, non le macchine

>[!multi-column]
>
>>[!important] Sistema
>>Ogni sistema è logicamente composto da una successione ordinata di sottosistemi, a cui è associato sottoinsieme funzionale. 
>
>>[!important] Strato
>>Uno strato è l'unione di tutti i sottoinsiemi omologhi (di uguale rango) appartenenti a sistemi interconnessi.
>

Esistono due modelli architetturali delle reti:
### Modello ISO/OSI 
Il comitato di standardizzazione ISO (International Standard Organization) crea questo sistema architetturale chiamato OSI (Open System Interconnection), diviso il diversi livelli di organizzazione.
![[Reti di Telecomunicazione-1790783338975.webp| center|255]]
Un sistema è strutturato [...]<- ascolta
[...]comunicazione paritaria (a parità di livello)
Livelli:
- **Fisico**: tipi di forme [...]

>[!important] Protocol Data Unit
>In base al livello in cui ci si trova la PDU è costituita da tutte le informazioni a meno delle informazioni di controllo associate a quel livello. Ogni livello può trasmettere il PDU al SAP adiacente (sup/inf)

>[!important] Service Access Point
>Porta fisica tra ogni livello
### Modello TCP/IP
Il modello prende il nome da due protocolli, nonostante ne utilizzi molti altri:
- **TCP**:
- **IP**:

## Stratificazione della comunicazione
>[!multi-column]
>
>>[!important] Comunicazione logica
>>Avviene sullo stesso livello logico: sembra non passare da nessuna altra parte.
>> ![[Reti di Telecomunicazione-1790783732980.webp|center|300px]]
>
>>[!important] Comunicazione fisica
>>Dati devono essere elaborati dai vari livelli di progettazione. Il dato di partenza è arricchita da ogni livello con delle informazioni di controllo che permettono al ricevente di "spacchettare" l'informazione.
>>![[Reti di Telecomunicazione-1790783754930.webp|center|300px]]


## Informazioni
### Informazioni di utente
sono l'oggetto primario dello scambio(informazione che si vuole mandare sulla rete) per le finalità del processo di comunicazione.
Sono scambiate in un processo di comunicazione utilizzando un'**unità di dati**.
### Informazioni di controllo
hanno lo scopo di coordinare le azioni da svolgere in modo cooperativo divise per livelli: insieme di regole che fanno in modo che le informazioni arrivino e per controllare come si comportano i nodi intermedi.

## Incapsulamento - Decapsulamento
Ogni livello:
- aggiunge l'header per creare nuova unità dati
- passa unità dati a livello inferiore
![[Reti di Telecomunicazione-1790784392745.webp]]

## Decapsulamento
Ogni livello collegamente stabilisce che deve garantire determinate proprietà: 
- se non sono soddisfatte rimanda indietro la richiesta verso il livello precedente (svolge funzioni da livello di controllo)
- se sono soddisfatte rimuove informazioni di controllo (decapsulamento)



In base al tipo di sistema si hanno livelli diversi: il livello fisico è quello essenziale senza il quale un sistema non può esistere. Nel processo di incapsulamento se non si hanno i livelli a partire da quello più basso non è possibile effettuare un'interpretazione.

![[Reti di Telecomunicazione-1790785510096.webp|390]]

ISO-OSI 
TCP IP -> standard de facto
protocolli strutturati a prescindere dalla standardizzazione del modello: infatti è uscito prima!

>[!multi-column]
>
>>[!important] Livelli
>>- **applicazione**: protocolli che consentono di supportare applicazioni (HTTP, FTP)
>>- **trasporto**: trasferimento dati end-to-end utilizzando i protocolli TCP e UDP
>>- **rete**: protocolli che permettono di andare da sorgente a destinazione (IP)
>>- **collegamento**: punto-punto (ppp, ethernet)
>>- **fisico**: forme d'onda - bit sul canale
>
>>[!blank]
>>![[Reti di Telecomunicazione-1790860826113.webp|200]]
>

Nel modello il livello fisico e collegamento sono uniti e definiti come il livello di **accesso alla rete** che comprende le funzionalità per il trasferimento dei dati tra due sistemi terminali connessi alla stessa rete.

## Livello di Internet
capisci bene il concetto di scalabilità: si intende che dato l'indirizzo non lo guardo nella sua interezza ma solo una parte per capire verso quale router indirizzare. si ragiona a step di approssimazione: man mano che riduco l'indirizzo considerato fino a quando non arrivo al destinatario finale

## Livello trasporto
Il protocollo più utilizzato è:
- UDP non orientato alla connessione
- TCP orientato alla connessione

## Livello applicazione

### Confronto tra modelli
Modello TCP-IP è molto più pratica: livelli sono associati ai protocolli esplicandone direttamente il modo di gestire l'info su quel livello
Modello ISO-OSI è più astratta: dietro la divisione l'info è più organizzata (separo problemi e ottengo funzioni specifiche separate logicamente)

[...]

# Livello di Collegamento I - Sottolivello Data-Link
Dati vengono inseriti all'interno di un buffer (di vari livelli) e poi inviati sul canale per prevenire perdita di dati: il loro inserimento permette il collegamento tra livelli diversi anche se lavorano a veloctà diverse rendendoli indipendenti. Anche all'arrivo i dati vengono bufferizzati per poi decidere cosa farne. Questa funzione è legata ai protocolli del livello collegamento.

[...] <- incolla foto del buffer di livello 1

Offre servizio al livello rete - prelevo o do dati
Devo capire come sono divisi i bit: sono divisi in frame (PDU - 2)
Dopo aver prelevato i frame rilevo e correggo **errori**: spezzettando in unità consente di controllare meglio (se una cosa è andata persa basta che rimando il singolo frame). Se mando frame troppo velocemente, scheda potrebbe non riuscire a immagazzinare dati e quindi trasmettitore deve capire che deve rallentare.
I buffer di livello due contengono un insieme di frame mentre quelli di livello 1 contengono i singoli bit: permettono la separazione tra i livelli garantendo **asincronicità** (se trovo livello occupato mantengo info senza perdere). 
Buffer mantiene informazione nel caso in cui all'interno del canale si sia corrotta 
Quindi fino a che frame non arriva a D io non rimuovo dal buffer

## Controllo degli errori
Nel flusso lungo il canale le informazioni possono essere alterate (alterate le forme d'onda fisiche): quando la destinazione rileva la forma d'onda legge bit diversi
```
S: 110 --channel--> 100 --channel--> 100: D
```
### Codifica di canale 
La codifica del canale è usata per rilevazione o correzione contenuta nella parte di controllo del livello 2
**Codice a ripetizione**: prende singolo bit e ne manda la sua ripetizione e posso decidere quante volte ripeterlo (sono dispari) Mandando in un blocco il pattern di bit ripetuto:
```
S: 110 --> R_3 --> 111 111 000 ---> 111 101 000: D
```
In termibni di capacità rilevativa e correttiva, si hanno valori diversi:
- capacità rilevativa di $R_5$ è $2 \cdot n$
- capacità correttiva di $R_5$ è parte intera bassa di 5/2 = 2 = n

### Rilevazione errori
Rilevo l'errore osservando se c'è discordanza nelle terne
Come capisco se pattern è diverso da un altro? Calcolo la distanza di hamming

Meccanismi di rilevazione appartengomo al categorie di 
- ARQ (richiesta di ritrasmissione) 
- FEC (correzione - su canali lenti)
### Correzione errori
Per la correzione dopo aver rilevato errore in una terna uso la tecnica di **maggiorazione**: conto quello che è ripetuto più volte nella terna e considero quello (se errore *singolo*).
Avendo una quantità di bit alterati prodotti dal canale data dalla metà approssimata come lower-bound posso usare la codifica per correggere. Se non vale posso **rilevare** a prescindere.

Codici a correzione e codici a rilevazione
#### Parità
Utilizzando un codice a ripetizione posso effettuare un controllo di **parità**:
- errore singolo: conto il numero di 1 e parity-bit = 0 se pari dispari il contrario -> se questo bit è diverso ho ricevuto errore
 **Controllo bidimensionale** 
![[Reti di Telecomunicazione-1790867289265.webp|340]]
[...] <- non ho capito nulla
Più efficiente della codifica a ripetizione perchè si vede un'efficienza su 15 bit incrementata del 20 %:
- $R_c=\frac{15}{23}\%=65\%$ : per 15 bit ne ho 8 di parità
- $R_c=\frac{15}{45}\%=33\%$ : per ogni bit lo ripeto 3 volte

#### Internet Checksum
[...] <- vedi davidone


### Cause dell'alterazione
- rumore termico: probabilità di errore che si potrebbe avere su forma d'onda data una temperatura assoluta è **uniforme** sulle varie frequenze -> non è cambiando la frequenza che riduciamo il rumore termico ma modificando la temperatura
- interferenza con altre trasmissione su stesso canale
- disturbi elettromagnetici
- perdite di sincronismo: rumore umano (?)

[...] <- mi sono persa: ma pk ho perso il filo del discorso

Suddiviso in due sottolivelli:
## Medium Access Controll Level
Più vicino al fisico
Se si hanno due nodi che vogliono trasmettere frame sullo stesso link può avvenire una collisione
## Data Link Layer Level
più vicino al livello di rete
Host e router sono dei nodi mentre i canali di comunicazione che connettono nodi adiacenti sono dettti **link**
Il PDU è un frame che ha parte di payload ciò che gli proviene dal livello 3 
Il livello data-link ha la responsibilità di trasferire datagrammi da un nodo al nodo adiacente su un link.
### Tipi di collegamenti
![[Reti di Telecomunicazione-1790865189715.webp|582]]

- **Switched** permette di separare **domini di collisione**
Mandando frame su collegamenti diversi potrebbero supportare tecnologie diverse (link diversi): questo porta a cambiare protocolli di data link e di accesso al mezzo. Questo perchè logicamente ogni protocollo fornisce servizi diversi.

### Modalità di trasferimento
[...] <- ciò che c'è sulla slide

### Protocolli di livello data-link
- Classificazione
	- orientati al carattere: gruppi di 8 bit sulla base dei caratteri dell'alfabeto
	- orientati al bit: no interpretazione diretta
- Colloquio
	- half-duplex
	- full-duplex
- Relazioni tra stazioni
	- master-slave
	- peer-to-peer

Scelta del protocollo è determinata da caratteristiche della linea
Il protocollo lavora su firmware (adattatore di rete)
![[Reti di Telecomunicazione-1790865861404.webp|586]]

[...] <- scrivi cosa si fa lato trasmittitore e ricevente

### Funzioni di un protocollo data-link
[...]
#### Framing
**Framing** è la delimitazione e identificazione del frame. Nella trasmissione dati i bit trasmessi dal livello fisico sono organizzati in gruppi logici: **trame**
Le trame sono separate con metodi opportuni e identificate tramite un header dal livello di linea. Quindi all'interno di un frame avremo la trasmissione di

Delimitatori di trama possono essere
- sequenze di bit (flag)
- codice di linea : se alterato frame danneggiato
- temporizzazione
- conteggio del numero di bit
**Protocolli orientati a caratteri**
BSC utilizza pattern di sincronizzazione (capisce con che frequenza sono mandati i bit) e un delimitatore speciale per l'header e infine uno dei dati 
![[Reti di Telecomunicazione-1790866278762.webp|637]]

**Protocolli orientati a bit**

**HDLC**
utilizza una sequenza speciale per inizio e fine frame:
```
01111110
```
Come garantisco che il pattern non è presente all'interno del frame?
utilizzo tecnica di bit stuffing: data una sequenza da trasmettere inserisco bit speciali dove si potrebbe creare la sequenza di fine frame. (ad es dopo 5 1 consecutivi -> funziona perchè esiste un accordo tra trasmittore e ricevente)



---
## Controllo di flusso
Sfrutta due protocolli:
- stop and wait
- sliding window

### Stop and Wait
Prendo un frame lo mantengo nel buffer fino a che non ricevo un riscontro: se positivo passo al successivo (riscontro è CRC). Tuttavia, questo protocollo è seriale in attesa di feedback quindi molto lento.
Caso degenere unitaria del Go back N perchè mi serve un solo bit per numerare (se frame corrente o passato mandato)

### Go back N - Sliding Window
Per finestra a slittamento si intende che se l'estremo inferiore dei dati sono stati riscontrati correttamente allora può scorrere
Mandando una certa quantità (w a decrementare fino ad arrivare a 0 dove mi fermo) di frame e ne attendo il riscontro: ogni frame viene giudicato dal ricevitore che deve rispondere. Finestra si riduce se non ottengo riscontri e si apre se ritornano riscontri. La dimensione della finestra dipende da alcune cose

Frame vanno numerati per capire la finestra da chi attende il riscontro: in base alla dimensione della finestra ho bisogno di un determinato numero di bit per numerarli

>[!question] Osservazione
>Il riscontro del ricevente può avvenire in due modi:
> - selectivity bit: per ogni frame manteniamo un bit di ack per cui rimanda soltanto il frame di riferimento
> - cumulative ack: si conta fino all'ultimo frame corretto arrivato in ordine -> non accetta quello subito dopo il contatore.
> Ogni frame ha un timer che attende riscontro: in caso di mancato riscontro il timer scade e il frame viene rimandato


