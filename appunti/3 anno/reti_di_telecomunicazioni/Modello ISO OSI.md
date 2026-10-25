#appunti #telecomunicazioni
Il comitato di standardizzazione ISO (International standard organization) ha definito un modello di riferimento OSI (Open system Interconnection), che viene oggi universalmente accettato.

È definito su 7 livelli
![[Reti di telecomunicazioni-1790846255642.webp|center|440]]

Un sistema che genera l'informazione o un host destinazione devono avere funzionalità collocate su ciascun livello.
È come se i due sistemi sono in grado di interpretare lo stesso livello gerarchico dello stack, senza interessarsi del funzionamento degli altri livelli.
# Livello fisico (livello 1)
Fornisce i mezzi meccanici, fisici, funzionali e procedurali per attivare, mantenere e disattivare le connessioni fisiche.
Ha il compito di effettuare la conversione da cifre binarie scambiate dalle entità di livello di collegamento.
## Servizi del livello
È necessaria una interfaccia fisica in grado di interpretare le forme d'onda e una serie di procedure utili alla trasformazione del flusso informativo di bit in segnali da inviare al mezzo:
- modulazione/demodulazione
- codifica/decodifica
- multiplazione fisica e accesso multiplo fisico

![[Reti di telecomunicazioni-1791126990874.webp|center|542]]

![[Reti di telecomunicazioni-1791127089354.webp|center|514]]


## Mezzi trasmissivi
- **Cavo coassiale**: tipico delle reti a bus, dominante fino agli anni '90, con buon rapporto segnale/rumore. Il cavo **thick** (grosso) ha buone prestazioni e maggiore affidabilità (il cavo non è accessibile all'utente) ma costa di più, in materiale e in posa, e richiede un **transceiver** esterno. Il cavo **thin** (sottile) ha una maggiore attenuazione, costa meno ed è più facile da posare, ma è meno affidabile perché accessibile all'utente. La trasmissione è sbilanciata: un conduttore per il segnale e uno di riferimento (la schermatura), quindi è molto sensibile ai disturbi;
  
- **Coppia simmetrica** (twisted pair): prestazioni inferiori al coassiale, ma bit rate elevati ($>100$ Mbit/s) su brevi distanze (circa 100 m); basso costo, facile da posare, adatta al cablaggio strutturato; enorme diffusione dagli anni '90. Varianti: UTP (non schermato), FTP (un solo schermo per tutto il cavo), STP (schermato coppia per coppia);
  
- **Fibra ottica**: tassi di errore più bassi, adatta alla topologia a stella; in base alla direzione di propagazione dell'onda esistono fibre multimodali (riflessione rispetto all'angolo di Brewster - minima rifrazione → massima riflessione) e fibre monomodali (direzione lungo il cavo - non si riflette mai → poco manegevole).

### Finestre di trasmissione
  ![[Modello ISO OSI-1792671362997.webp|center|375]]

Le tre bande a $0{,}85$, $1{,}30$ e $1{,}55\,\mu\text{m}$ sono le finestre del grafico dell'attenuazione, cioè gli intervalli di
lunghezza d'onda in cui l'attenuazione (in dB/km) è bassa.
- In queste bande il segnale percorre distanze maggiori prima di degradarsi troppo.
- La scelta dipende anche dalle sorgenti e dai rilevatori disponibili: la prima finestra, ad esempio, era legata ai primi laser/LED.
- L'attenuazione migliora passando da $0{,}85$ a $1{,}30$ a $1{,}55\,\mu\text{m}$, che è la finestra con l'attenuazione minima.
## PDU e header
Le unità dati sono bit o simboli: a questo livello non c'è un header vero e proprio, perché si trasmette direttamente il flusso di bit sul mezzo come segnale.
## Protocolli
Il livello fisico non ha protocolli veri e propri, ma specifiche di segnalazione e di mezzo. Per le varianti Ethernet (10Base5, 10Base2, 10BaseT) vedi [[Protocolli#Standard IEEE 802.3|IEEE 802.3]].
# Livello collegamento (livello 2)
Fornisce i mezzi funzionali e procedurali per il trasferimento delle unità dati tra entità di livello rete e per fronteggiare malfunzionamenti del livello fisico.

Funzioni fondamentali:
- rilevazione e recupero degli errori di trasmissioni
- controllo di flusso

È suddiviso in due sotto livelli:
- **Data-link**
- [[#Medium access control (MAC)|MAC]]
## Servizi del livello
Ogni nodo sulla rete ha un processo di bufferizzazione, su vari livelli, necessari per l'implementazione store and forward e rendere i livelli indipendenti.
La quantità di bit prelevate dopo il buffer è legata ai protocolli di tipo collegamento.
Dobbiamo fornire i seguenti servizi:
- servizi forniti a **livello rete** per prelevare o fornire dati al livello adiacente
- **Livello data link**
	- [[#Framing|Framing]]
	  capire quando inizia e quando si conclude una porzione di dati, su questi frame è possibile effettuare:
	- [[#Controllo degli errori|Controllo degli errori]]
	  che stanno avvenendo sul singolo frame, se qualcuno di questi è errato può essere ritrasmesso
	- [[#Controllo del flusso e ritrasmissione (tecniche ARQ)|Controllo del flusso e ritrasmissione]]
	  controllo sulla velocità di invio dei dati - il ricevitore potrebbe non riuscire abbastanza velocemente i dati inviati
- [[#Medium access control (MAC)|MAC]]
	- Nel caso di mezzo condiviso fornisce i mezzi per condividere in maniera ottimale le risorse

Vari tipi di buffer che possono essere organizzati a bit (livello 1) o frame (livello 2). Servono a creare una asincronicità e parallelizzazione del funzionamento dei livelli. Inoltre tramite il buffer possiamo capire se il dato è stato corrotto, segnalandolo alla corrente in modo che la sorgente possa ritrasmetterlo: il frame verrà eliminato dal buffer solo quando abbiamo la certezza che ha raggiunto la destinazione.

>[!multi-column]
>
>>[!important] Nodi
>>Host e routers
>
>>[!important] Link
>>Canali di comunicazione che connettono nodi adiacenti lungo un percorso

>[!important] Frame
>PDU di livello 2, incapsula datagrammi.

Il livello **data-link** ha la responsabilità di trasferire datagrammi (frame) da un nodo al nodo adiacente su un link (collegamento punto-punto)

I collegamenti sono di tipo:
- point-to-point
- broadcast (LAN)
- switched (LAN commutata tramite l'uso di uno switch, che è capace di separare i **domini di collisione**)

La tecnologia utilizzata per i collegamenti (link) potrebbe essere eterogenea, questo potrebbe portare a un cambio di protocolli di data-link e di accesso al mezzo; Di conseguenza il formato del frame può cambiare in funzione del mezzo di trasmissione.

Definisce il collegamento su un link seriale:
- Classificazione
	- orientata al carattere (deprecated)
	- orientata al bit
- Colloquio
	- half-duplex
	- full-duplex
- Relazione tra le stazioni
	- master-slave
	- peer-to-peer

In genere si utilizzano protocolli che lavorano su firmware (stretta correlazione con la macchina per cui sono programmati) --> **adattatori**.
Il trasmittente incapsulano i datagrammi nel frame che li compete (ricevuti dal livello superiore)

![[Reti di telecomunicazioni-1791130796643.webp|center|639]]

>[!multi-column]
>
>>[!blank]
>>**Lato trasmittente**
>>Incapsula datagrammi in un frame e aggiunge bits di controllo di errore e di flusso
>
>>[!blank]
>**Lato ricevente**
>Controlla errori e il flusso, estrae i datagrammi e li passa al nodo ricevente
### Framing
La quantità di bit è rappresentata dal datagramma + parte di controllo
- **parte di controllo** - Header
- **datagramma livello superiore** - Payload

![[Reti di telecomunicazioni-1791127331408.webp|center|604]]

I gruppi logici di bit prendono il nome di **trame** e permettono il reindirizzamento dei flussi.
È possibile numerare le trame in modo da ricostruire il flusso finale, in questo modo in caso di errori possiamo ritrasmettere solo determinate trame.
Per delimitare le trame il ricevitore deve riconoscere l'inizio e la fine della trama, tramite **delimitatori di trama**, che identificano in modo univoco inizio e fine:
- **flag** (delimiter)
  sequenze di bit o caratteri speciali
- **codice di linea**
  violazione del codice di linea usato a livello fisico
- **temporizzazione**
  se abbiamo una elevata sincronizzazione posso stabilire in base al tempo l'inizio e la fine della trama
- **conteggio**
  una trama è composta da un determinato numero di bit che sarà sufficiente contare per determinare la fine

### Controllo degli errori

>[!bug] Possibili cause di alterazione
>- **rumore termico**, probabilità di errore avendo un certo tipo di temperatura assoluta (dipende dai mezzi trasmissivi e apparati di ricezione e trasmissione) - PDF (probability density function)
>- **interferenza da altre trasmissioni** sullo stesso mezzo
>- **disturbi elettromagnetici**
>- **perdite di sincronismo**
>- etc.

>[!multi-column]
>
>>[!protocollo] FEC (forward error correction)
>>Prevede l'aggiunta di ridondanza in trasmissione, in modo che il sistema ricevente riceva delle informazioni extra insieme al messaggio utile. Lo scopo principale è proprio l'uso della ridondanza in ricezione per **correggere** ai bit errati. Questo processo di recupero dell'informazione originale ha però un limite logico: è possibile solo se le alterazioni avvengono in numero contenuto.
>
>>[!protocollo] ARQ (automatic retransmission request) 
>>Questo metodo prevede un'aggiunta di ridondanza in trasmissione per ogni unità informativa, tipicamente implementata tramite un campo denominato FCS (Frame Check Sequence). Il suo scopo è ben delineato e limitato: l'uso della ridondanza in ricezione serve esclusivamente per **rivelare** la presenza di errori e non per correggerli.
>>L'effettiva correzione avverrà tramite la richiesta di ritrasmissione dell'unità informativa alla sorgente.

Codice ripetizione - ogni volta che inviamo un segnale ne mandiamo anche una copia
*es.* `110 --> R3 --> 111 111 000`
Potrebbe capitare che il canale agisce sul segnale e la destinazione interpreta in modo errato il segnale
*es.* `111 101 000`
In questo modo posso **rilevare** l'errore se c'è discordanza tra le terne e **correggerlo** utilizzando la maggioranza dei rimanenti.
Se avessi una quantità di bit alterati che è la metà del pattern (estremo inferiore) posso correggerlo, invece per la **rilevazione** può avvenire anche se due bit su 3 vengono alterati.
Il numero massimo di bit correggibili è dato da:
$$
t = \left\lfloor  \frac{N-1}{2}  \right\rfloor 
$$
Applicando invece `R5`
*es.* `110 --> R5 --> 11111 11111 00000`
e c'è un errore
*es.* `11111 10110 00000`
posso ugualmente correggerlo $\to$ rispecchia la generalizzazione

Utilizzando una capacità rilevativa, si potrebbe mandare alla sorgente (riscontro positivo/negativo) un **feedback di canale**. In questo modo la sorgente può innescare una ritrasmissione e dato che il dato è bufferizzato può essere ritrasmesso.

In base al mezzo e a degli studi su di essi possiamo decidere se implementare un rilevamento o una correzione (può dipendere per esempio dalla lentezza del canale, se il canale è particolarmente lento si tende ad utilizzare la correzione).

>[!important] Coding rate
>Il **coding rate** è il rapporto tra bit utili e bit trasmessi
>$$R_c = \frac{k}{n} \hspace{4ex} (k =\text{ bit di informazione, }n=\text{ bit totali})$$
>Più ridondanza significa più protezione, ma $R_c$ più basso (si sprecano più bit).

>[!Important] Controllo di parità
>Posso utilizzare dei [[4. Gestione della memoria secondaria#Dischi RAID|bit di parità]] per controllare se in un pattern c'è stato un errore.
>Per essere più sicuri è possibili utilizzare i bit di parità in più dimensioni:
>![[Reti di telecomunicazioni-1790867284139.webp|center|300]]
>In questo modo aumentiamo il coding rate.
>Per Shannon possiamo determinare il limite superiore del coding rate oltre il quale non si può andare.

>[!important] CRC (codice a ridondanza ciclica)
>Il CRC è un codice di rilevazione che fa uso di aritmetica in modulo 2.

>[!important] Piggybacking
>Quando il flusso dati è bidirezionale è possibile includere nell’intestazione della PDU dati un campo con l’informazione di riscontro (ACK) per il flusso dati che sta fluendo in direzione opposta. Questa tecnica è detta **piggybacking**.

### Controllo del flusso e ritrasmissione (tecniche ARQ)
Protocolli: [[Protocolli#Controllo del flusso e ritrasmissione (tecniche ARQ)|tecniche ARQ]]

### Medium access control (MAC)
Protocolli: [[Protocolli#Medium access control (MAC)|protocolli MAC]]

## PDU e header
La PDU del livello 2 è il **frame** (trama): incapsula il datagramma ricevuto dal livello rete (payload) aggiungendo un header con le informazioni di controllo (delimitatori, indirizzi, numeri di sequenza e riscontri) e in coda un campo di controllo errori (FCS/CRC). Vedi [[#Framing|framing]] per i delimitatori.
- Formato del frame HDLC (Flag, Address, Control, Info, FCS): [[Protocolli#Formato della trama|trama HDLC]]
- Formato del frame MAC e IEEE 802.3 (preambolo, SFD, indirizzi, lunghezza, dati, PAD, FCS): [[Protocolli#MAC frame|frame MAC]]
- Trama Ethernet (campo *type*): [[Protocolli#802.3 vs Ethernet|802.3 vs Ethernet]]

## Protocolli
- **Framing a caratteri**: [[Protocolli#BSC|BSC]]
- **Controllo di flusso e ARQ**: [[Protocolli#Stop and wait|Stop and wait]], [[Protocolli#Go back N|Go back N]], [[Protocolli#Selective repeat|Selective repeat]]
- **Collegamento punto-punto**: [[Protocolli#HDLC|HDLC]]
- **Accesso al mezzo (MAC)**: [[Protocolli#Protocollo Aloha|Aloha]] ([[Protocolli#Aloha puro|puro]], [[Protocolli#Aloha a slot|a slot]]), [[Protocolli#Protocollo CSMA|CSMA]], [[Protocolli#CSMA-CD|CSMA-CD]], [[Protocolli#CSMA-CA|CSMA-CA]]
- **Standard LAN**: [[Protocolli#Standard IEEE 802|IEEE 802]], [[Protocolli#Standard IEEE 802.3|IEEE 802.3]], [[Protocolli#Indirizzi MAC|Indirizzi MAC]]

# Livello rete (livello 3)
Fornisce i mezzi funzionali e procedurali per lo scambio di informazioni tra entità di livello di trasporto.
Fornisce i mezzi per instaurare, mantenere e abbattere le connessioni di rete tra entità di livello trasporto.
## Servizi del livello
Funzioni fondamentali:
- instradamento
- indirizzamento
- controllo di connessione
![[Reti di telecomunicazioni-1791127810485.webp|center|545]]
L'obbiettivo fondamentale di questo livello è quello di individuare il partner nel colloquio (funzione di **instradamento**). Per far questo è necessaria una **tabella di instradamento**, che permette la scelta del SAP di uscita sulla base delle informazioni memorizzate, associando ad ogni destinazione il SAP di uscita

| Destinazione | SAP uscita |
| ------------ | ---------- |
|              |            |

## PDU e header
La PDU del livello 3 è il **pacchetto** (datagramma in Internet): l'header contiene principalmente gli indirizzi di sorgente e destinazione usati per l'instradamento. Il formato dell'header IP andrà descritto in [[Protocolli#IP|IP]].

## Protocolli
- [[Protocolli#IP|IP]], con [[Protocolli#Indirizzo IP|indirizzo IP]]

# Livello trasporto (livello 4)
Fornisce alle entità di livello sessione le connessioni di livello trasporto.
Colma le deficienze della qualità di servizio delle connessioni di livello rete.
È il livello più basso con significato da estremo a estremo (la rete è una scatola nera, non ci interessa cosa avviene e come avviene la connessione tra gli host), per questo è implementato solo nei nodi terminali.
In questo livello i messaggi vengono frammentati in segmenti.

## Servizi del livello
Le funzioni principali sono:
- connessione
- controllo di errore e di flusso

![[Reti di telecomunicazioni-1791128304964.webp|center|555]]

## PDU e header
La PDU del livello 4 è il **segmento**: l'header contiene le porte di sorgente e destinazione (per consegnare i dati al processo giusto) e le informazioni per controllo di errore (checksum) e, nel TCP, di flusso e connessione. I campi vanno descritti in [[Protocolli#TCP|TCP]] e [[Protocolli#UDP|UDP]].

## Protocolli
- [[Protocolli#TCP|TCP]]: orientato alla connessione
- [[Protocolli#UDP|UDP]]: non orientato alla connessione

# Livello sessione (livello 5)
È responsabile dell'organizzazione del dialogo fra due programmi applicativi di sistemi diversi. Per permettere questa comunicazione, lo strato assicura alle entità di presentazione una connessione di sessione e si occupa di organizzare attivamente il colloquio tra le entità di presentazione stesse.

## Servizi del livello
Le sue funzioni principali si concentrano sulla gestione del dialogo e sulla sincronizzazione tra eventi. A livello pratico, questo livello struttura e sincronizza lo scambio di dati in modo da poterlo sospendere, riprendere e terminare ordinatamente. Infine, per garantire stabilità al dialogo rispetto ai problemi di rete inferiori, il livello di sessione maschera le interruzioni del servizio trasporto.

## PDU e header
Nello stack TCP/IP questo livello non esiste come strato separato: le sue funzioni sono svolte dall'applicazione, quindi non c'è un header dedicato (vedi [[Modello TCP IP#Livello applicazione (livello 4)|livello applicazione TCP/IP]]).

## Protocolli
Nessun protocollo trattato.
# Livello presentazione (livello 6)
Lo scopo principale è la corretta interpretazione e formattazione delle informazioni scambiate.

## Servizi del livello
Nello specifico, questo strato risolve i problemi di compatibilità per quanto riguarda la rappresentazione dei dati da trasferire. Per permettere una comunicazione trasparente tra architetture eterogenee, il livello di presentazione risolve i problemi relativi alla trasformazione della sintassi dei dati, una funzione essenziale, ad esempio, quando avviene un colloquio di sistemi basati su sistemi operativi diversi. Infine, oltre a gestire l'aspetto sintattico, questo livello può fornire servizi di cifratura delle informazioni.

## PDU e header
Come per la sessione, in TCP/IP non è uno strato separato e non ha un header dedicato (vedi [[Modello TCP IP#Livello applicazione (livello 4)|livello applicazione TCP/IP]]).

## Protocolli
Nessun protocollo trattato.
# Livello applicazione (livello 7)
Il compito fondamentale di questo strato è fungere da interfaccia diretta per il software: fornisce ai processi applicativi i mezzi per accedere all'ambiente OSI.

## Servizi del livello
Esempi di servizio:
- trasferimento di file
- terminale virtuale
- posta elettronica

## PDU e header
Il formato dei messaggi dipende dal singolo protocollo applicativo.

## Protocolli
In TCP/IP ogni applicazione ha il suo protocollo (telnet, ftp, smtp, http, dns), vedi [[Modello TCP IP#Livello applicazione (livello 4)|livello applicazione TCP/IP]]. Non ancora presenti in [[Protocolli]].
