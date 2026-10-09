Il comitato di standardizzazione ISO (International standard organization) ha definito un modello di riferimento OSI (Open system Interconnection), che viene oggi universalmente accettato.

È definito su 7 livelli
![[Reti di telecomunicazioni-1790846255642.webp|center|440]]

Un sistema che genera l'informazione o un host destinazione devono avere funzionalità collocate su ciascun livello.
È come se i due sistemi sono in grado di interpretare lo stesso livello gerarchico dello stack, senza interessarsi del funzionamento degli altri livelli.
# Livello fisico (livello 1)
Fornisce i mezzi meccanici, fisici, funzionali e procedurali per attivare, mantenere e disattivare le connessioni fisiche.
Ha il compito di effettuare la conversione da cifre binarie scambiate dalle entità di livello di collegamento.
Le unità dati sono bit o simboli.
È necessaria una interfaccia fisica in grado di interpretare le forme d'onda e una serie di procedure utili alla trasformazione del flusso informativo di bit in segnali da inviare al mezzo:
- modulazione/demodulazione
- codifica/decodifica
- multiplazione fisica e accesso multiplo fisico

![[Reti di telecomunicazioni-1791126990874.webp|center|542]]

![[Reti di telecomunicazioni-1791127089354.webp|center|514]]


# Livello collegamento (livello 2)
Fornisce i mezzi funzionali e procedurali per il trasferimento delle unità dati tra entità di livello rete e per fronteggiare malfunzionamenti del livello fisico.

Funzioni fondamentali:
- rilevazione e recupero degli errori di trasmissioni
- controllo di flusso
## Servizi del livello
Ogni nodo sulla rete ha un processo di bufferizzazione, su vari livelli, necessari per l'implementazione store and forward e rendere i livelli indipendenti.
La quantità di bit prelevate dopo il buffer è legata ai protocolli di tipo collegamento.
Dobbiamo fornire i seguenti servizi:
- servizi forniti a **livello rete** per prelevare o fornire dati al livello adiacente
- **Livello data link**
	- [[#Framing]]
	  capire quando inizia e quando si conclude una porzione di dati, su questi frame è possibile effettuare:
	- [[#Controllo degli errori]]
	  che stanno avvenendo sul singolo frame, se qualcuno di questi è errato può essere ritrasmesso
	- [[#Controllo del flusso e ritrasmissione (stop and wait, go back N)]]
	  controllo sulla velocità di invio dei dati - il ricevitore potrebbe non riuscire abbastanza velocemente i dati inviati
- [[#Medium access control (MAC)]]
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
## Framing
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

### BSC
>[!protocollo] BSC
>Utilizza una serie di pattern di sincronizzazione SYN, in modo da capire la frequenza con cui vengono inviati i bit. Poi utilizza una sequenza speciale start of header SOH e un'altra sequenza speciale per segnalare l'inizio dei dati STX. Un'altra sequenza speciale indica la fine dei dati ETX.
>![[Reti di telecomunicazioni-1790866272935.webp|center|400]]


>[!important] DLE
>Se nei dati compare per caso un byte uguale a un carattere di controllo, il ricevitore crederebbe che la trama sia finita. Per evitarlo si usa il carattere DLE (Data Link Escape), con la tecnica del character stuffing:
>- i delimitatori diventano coppie `DLE STX` apre i dati, `DLE ETX` li chiude;
>- se nei dati compare un DLE, il trasmettitore lo raddoppia (`DLE DLE`); il ricevitore, quando vede due DLE consecutivi, ne elimina uno e tratta l'altro come dato.
>
>Così un carattere di controllo è valido solo se preceduto da un DLE singolo.
## Controllo degli errori

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

## Controllo del flusso e ritrasmissione (tecniche ARQ)
È necessario regolamentare il flusso dei frame che deve essere inviato, evitando di sovraccaricare la scheda del ricevente.
Per la valutazione dei protocolli è necessario definire i ritardi:
- **ritardo di trasmissione**$$T (\text{sec}) = \frac{L(\text{bit})}{V_T (\text{bit/sec})}$$ funzione della lunghezza del frame $L$
- **ritardo di propagazione**$$\tau (\text{sec})= \frac{d(\text{m})}{V_p (\text{m/sec})}$$funzione della lunghezza del canale $d$

Inoltre faremo uso del **diagramma di timing** che rappresenta su due linee del tempo i due sistemi:
![[Reti di telecomunicazioni-1791451492256.webp|center|662]]

Valutiamo l'**efficienza** di un protocollo come:
$$
E = \frac{T}{T_{tot}} \in [0,1]
$$
dove $T$ è il ritardo di trasmissione e il tempo totale $T_{tot}$ contiene sia i tempi necessario che i tempi morti.

Per confrontare l'efficienza dei protocolli possiamo quindi fare uso di distribuzioni di probabilità e formule molto più complesse, in quanto le variabili da confrontare sono numerose (*es.* grandezza della sliding window)
![[Modello ISO OSI-1791558085067.webp|center|513]]
### Stop and wait
>[!multi-column]
>
>>[!protocollo] Trasmettitore
>>Prepara il frame in un tempo pari al ritardo di trasmissione, invia il frame, ne mantiene una copia in un buffer e avvia un timer. Solo nel momento in cui riceve il riscontro (`ACK`) invia il frame successivo. Se il riscontro non arriva entro lo scadere del timer oppure arriva un riscontro negativo, può rinviare la copia del frame precedente. 
>
>>[!protocollo] Ricevitore
>>Mantiene un bit utile a tracciare il **numero di sequenza** (i frame arrivati hanno un numero di sequenza che si alterna tra 0 e 1). Alla ricezione del frame invia un `ACK` al trasmettitore e aggiorna il numero di sequenza.

![[Reti di telecomunicazioni-1791456564669.webp|741]]

Inizialmente il riscontro potevano essere:
- positivo
  se arriva posso andare avanti e rimuovere il frame precedente
- negativo
  quel pacchetto è arrivato corrotto e va rimandato
>[!bug] Il problema principale è se viene perso il riscontro
>Questo problema viene risolto tramite l'implementazione di un timer associato ad ogni frame inviato, che può essere avviato nel momento in cui la sorgente inizia l'elaborazione del frame o dal momento in cui viene immesso nella rete.

![[Reti di telecomunicazioni-1791456808592.webp|659]]

#### Tempo di time out
È fondamentale scegliere bene il tempo necessario al timer prima di rinviare il frame, in quanto, se è un tempo troppo breve, rischiamo di effettuare troppo ritrasmissioni innecessarie; se invece è troppo lungo, la comunicazione è più lenta.
Possiamo definire il tempo di attesa in modo corretto tramite la seguente disuguaglianza
$$t_{out} \geq 2 \tau + 2 T_{e} + T_r$$
#### Numero di sequenza
>[!important] Numero di sequenza
>Anche nello Stop-and-Wait, dove si trasmette e si riceve un solo frame alla volta, è necessario un numero di sequenza, anche di un solo bit. Se l'ACK va perso o arriva in ritardo, allo scadere del timer il mittente ritrasmette il frame, ma il ricevitore non è in grado di stabilire se si tratti di un duplicato del frame precedente o di un nuovo frame. Associando un bit a ogni frame, il ricevitore si aspetta un'alternanza dei valori (0, 1, 0, 1, …): se riceve due volte lo stesso bit, capisce che si tratta di una ritrasmissione e scarta il duplicato, reinviando l'ACK.

![[Reti di telecomunicazioni-1791457573851.webp|683]]


#### CRC
[...]
In ogni frame c'è un [[#Controllo degli errori|CRC]], codice generato applicando una funzione su header e payload che caratterizza il pattern di bit cercando di verificarne l'integrità.

#### Efficienza (stop & wait)
Riprendendo l'efficienza
$$
E = \frac{T}{T_{tot}} \in [0,1]
$$
in questo protocollo possiamo considerare $T_{tot}$ come:
$$
T_{tot} = \underbrace{T+\tau+T_r}_{\text{frame}} + \underbrace{T_E + \tau + T_r}_{ACK} = T+T_E + 2 \tau + 2 T_r
$$
dove $T$ ritardo di trasmissione, $T_{E}$ tempo di elaborazione dell'ACK, $\tau$ ritardo di propagazione e $T_r$ tempo del riscontro.

Possiamo quindi riscrivere l'efficienza come
$$
E = \frac{T}{2 \tau + T + 2T_r + T_E} = \frac{1}{2 \frac{\tau}{T} + 1 + 2 \frac{T_r}{T} + \frac{T_E}{T}}
$$
Per valutare correttamente l'efficienza dobbiamo tenere in considerazione la possibilità che il frame debba essere ritrasmesso anche più di una volta, ma questa è una variabile aleatoria, di conseguenza estendiamo il concetto di efficienza aggiungendo il [[2. Variabili aleatorie#Valore atteso|valore atteso]] $E[n_t]$ per misurare il numero medio di trasmissioni necessarie ad avere il primo successo, che può essere approssimato ad una [[Modelli matematici#Prove di Bernoulli (binomiale - geometrico)|geometrica]]:
$$
E[n_t] = \frac{1}{1-p}
$$
dove $p$ è la probabilità di errore di frame (cioè che il frame arrivi alterato al ricevitore).
La formula dell'efficienza diventa quindi
$$
E = \frac{T}{E[n_t] \cdot T_{tot}} = \frac{T}{\frac{1}{1-p} \cdot T_{tot}} = \frac{1}{\frac{1}{1-p} \left(2 \frac{\tau}{T} + 1 + 2 \frac{T_r}{T} + \frac{T_E}{T}\right)}
$$
Ipotizziamo l'esistenza di un canale non rumoroso, se la probabilità di errore è nullo $p = 0$ e sapendo che in generale $2 \frac{T_r}{T} + \frac{T_E}{T}$ sono trascurabili rispetto al resto dei termini:
$$
E = \frac{1-p}{1+2a} \hspace{8ex} a = \frac{\tau}{T} > 0
$$
dove $a$ rapporto tra la propagazione e la trasmissione, caratteristica del canale.

Il denominatore è maggiore di 1, nella migliore delle ipotesi $p\to 0$, ne concludiamo che con questo tipo di protocolli non possiamo avere una alta efficienza.

>[!question] Perché una geometrica
>Definiamo il BER (bit error rate) a cui diamo un valore medio, ma noi lavoriamo su frame (insiemi di bit).
>Per ipotesi semplificativa (che è effettivamente vero per alcuni tipi di canali) ipotizziamo che la probabilità di errore del singolo bit sia indipendente dai precedenti.
>Ne consegue che per modellare la probabilità di errore del frame>$$P_f = 1-\underbrace{(1-p)^{L_f}}_{\begin{array}{c}\text{probabilità} \\ \text{di frame} \\ \text{senza errori}\end{array}}$$
>dove $L_f$ lunghezza del frame (in numero di bit).
>È come se avessimo$$\underbrace{(1-p) \cdot \dots \cdot (1-p)}_{L_f \text{ volte}}$$
>eventi congiunti -> prodotto di probabilità
>quindi il complemento a 1 è la probabilità di avere un errore.
>
>Chiamiamo $a_i$ (PDF) la probabilità di successo della trama dell'$i$esimo tentativo.
>La probabilità di successo all'$i$esimo tentativo sono [[Modelli matematici#Prove di Bernoulli (binomiale - geometrico)|prove di Bernoulli]], quindi la distribuzione di probabilità è una binomiale$$a_i = p_f^{i-1}(1-p_f)$$
>che rappresenta la probabilità che io abbia $i-1$ errati ($p_f$) e 1 con successo ($1-p_f$)
>Chiamiamo la grandezza $\overline{N}_s$ numero medio (nel discreto) di frame inviati con successo$$\overline{N}_s = \sum_{i=1}^{+\infty} i a_i = \sum_{i=1}^{+\infty} i p_f^{i-1}(1-p_f)$$
>dove $a_i$ è la funzione densità.
>Questa non è altro che la derivata di una serie geometrica.
>Essendo che la serie geometrica converge$$\sum_{i=1}^{+\infty} p^i = \frac{1}{1-p}$$
>Possiamo trovare la sua derivata
>$$
>\displaylines{
>\frac{d}{dp} \left( \sum_{i=1}^{+\infty} p^i \right) = \sum_{i=1}^{+\infty} i p^{i-1} \\
>\frac{d}{dp} \left( \frac{1}{1-p} \right) = \frac{1}{(1-p)^2} \\
>\implies \sum_{i=1}^{+\infty} i p^{i-1} = \frac{1}{(1-p)^2}
>}
>$$
>Tornando alla media possiamo descriverla come:$$\overline{N}_s = (1-p_f) \cdot \frac{1}{(1-p_f)^2} = \frac{1}{1-p_f}$$

### Go back N
Protocollo ARQ
Funzionamento simile allo [[#Stop and wait]] ma con $n$ frame.
>[!multi-column]
>
>>[!protocollo] Trasmettitore
>>Invia una finestra di $n$ frame in sequenza, avvia un timer per ciascun frame e poi attende gli ACK. Nel caso in cui non riceve il riscontro e il timer associato ad un frame $i$ termina ritrasmetterà il frame $i$ e tutti i successivi (effetto a cascata), anche se avesse ricevuto l'ACK del frame $i+1$ o successivi, che risulteranno quindi persi
>
>>[!protocollo] Ricevitore
>>Mantiene le informazioni dell'ultimo frame ricevuto. Dato il funzionamento di questo protocollo il ricevitore può essere molto semplice. Il numero di sequenza mantenuto verrà confrontato con il numero di sequenza di quello ricevuto: se il numero ricevuto è maggiore del corrente non ci sono buchi ed è il successivo, se invece è minore ignora ciò che ha

![[Reti di telecomunicazioni-1791462631656.webp]]

#### Sliding window
Il go back N è un protocollo che fa uso di **sliding window**
>[!important] Sliding window
>La **sliding window** è una tecnica che prevede l'utilizzo di un intervallo di pacchetti che il mittente può inviare senza aspettare l’ACK, e che il ricevente è disposto ad accettare.
#### Numero di sequenza
Il **numero di sequenza** diventa ora cruciale per capire quale frame è stato ricevuto: vengono usati $m$ bit per enumerare i frame (*es.* con una finestra di $n = 4$ sono necessari almeno $m=2$ bit per enumerare i frame).

>[!bug] Numero di bit necessari alla enumerazione dei frame
>Nel Go-Back-N, se tutti i frame della finestra (ad esempio 0, 1, 2, 3) arrivano correttamente al ricevitore ma tutti gli ACK vanno persi, i timer del mittente scadono e l'intera finestra viene ritrasmessa. Se la numerazione usasse solo i numeri da 0 a 3 (m = 2 bit), il ricevitore, che si aspetta il frame successivo, il quale ripartirebbe da 0, non potrebbe distinguere una ritrasmissione dal frame nuovo. Per evitare l'ambiguità, il numero di bit m usati per la numerazione deve soddisfare$$2^m > n$$
>dove $n$ è la dimensione della finestra di trasmissione. In questo modo il numero di sequenza atteso non coincide mai con quello del primo frame ritrasmesso. Nell'esempio, con $n = 4$ servono $m = 3$ bit (numeri da 0 a 7): dopo aver ricevuto i frame 0-3 il ricevitore si aspetta il 4, ma riceve di nuovo lo 0, quindi capisce che è una ritrasmissione e lo scarta, reinviando l'ACK.

La scelta della lunghezza $n$ della finestra di tolleranza deve essere tale che prima di finire l'invio del primo treno arrivi il primo riscontro.
#### Efficienza (go back N)
Nel caso migliore il tempo necessario a trasmettere tutti i frame nella finestra è esattamente
$$
n \cdot T
$$
Ma questa è un grossa approssimazione.
Indicando con $n_r$ il numeri di **ritrasmissioni** (non di trasmissioni come nello stop & wait) indichiamo il tempo totale con
$$
T_{tot} = T + n_r(T+t_{out})
$$
Partendo da questa considerazione e sfruttando la linearità dell'operatore valore atteso, possiamo calcolare l'efficienza come
$$
E = \frac{T}{E[T_{tot}]} = \frac{T}{E[T + n_r(T+t_{out})]} = \frac{T}{E[T] + E[n_r(T+t_{out})]}
$$
essendo $T$ non dipendente da nessuna variabile aleatoria $E[T] = T$. Solo $n_r$ è una variabile aleatoria
$$
E = \frac{T}{T+E[n_r](T+t_{out})}
$$
Il valore atteso del numero di ritrasmissioni è pari al valore atteso del numero di trasmissioni a cui sottraiamo la prima trasmissione
$$
E[n_t] = \frac{1}{1-p} \implies E[n_r] = E[n_t] -1 = \frac{1}{1-p} - 1 = \frac{p}{1-p}
$$
Ne concludiamo che
$$
E = \frac{T}{T+ \frac{p}{1-p}(T+t_{out})} = \frac{1-p}{1+ p \frac{t_{out}}{T}}
$$
Il tempo di time out minimo è rappresentato da
$$
t_{out} = 2 \tau + 2 T_{E} + T_R
$$
dove $T_E$ tempo di elaborazione e $T_R$ tempo del riscontro.
Possiamo quindi espandere la formula dell'efficienza
$$
E = \frac{1-p}{1+p\left( \frac{2 \tau + 2 T_E + T_R}{T} \right)} = \frac{1-p}{1+p\left( \frac{2\tau}{T} + \frac{2T_E}{T} + \frac{T_R}{T} \right)}
$$
anche in questo caso possiamo trascurare tempo di elaborazione e tempo di riscontro ottenendo
$$
\frac{1-p}{1+2 a p}
$$
con $a = \frac{\tau}{T}$

Ipotizzando di avere un canale con rumore nullo $p \to 0$ abbiamo un effetto di riduzione sia a numeratore che denominatore e di conseguenza, su piano teorico, possiamo raggiungere efficienza di canale unitaria


### Selective repeat
Protocollo ARQ
Funzionamento simile al [[#Go back N]], ma permette di avere una sequenza non ordinata, entro certi limiti

>[!multi-column]
>
>>[!protocollo] Trasmettitore
>>Il trasmettitore utilizza una **sliding window**. Se non riceve ACK o NACK di un determinato frame e questo raggiunge il limite inferiore della finestra questa si blocca.
>
>>[!protocollo] Ricevitore
>>In caso di frame perso invia una `NACK` (negative acknowledgement) che segnala solo il frame perso, ma mantiene i frame successivi. Questo porta ad una maggiore complessità del ricevitore, che deve mantenere le informazioni di più frame per capire dove sono i buchi ed immagazzinare i successivi. Verrà dedicata della bufferizzazione ai frame persi. Ovviamente i frame fuori ordine che vengono accettati sono limitati

![[Modello ISO OSI-1791557561385.webp|center|744]]



## HDLC
>[!protocollo] HDLC
>HDLC (High-level Data Link Communications) è uno standard ISO derivato da SDLC, il protocollo proprietario IBM per reti SNA. Può operare in modi diversi, half-duplex o full-duplex, sbilanciato (master-slave) o bilanciato (peer-to-peer), con vari meccanismi di controllo di errore e di flusso.

Utilizza come delimitatore di inizio e fine la sequenza di bit `01111110`. Per evitare che si ripresenti all'interno del payload utilizziamo la tecnica del **bit stuffing**.
### Modalità di funzionamento

|                  | **NRM**               | **ARM**               | **ABM**   |
| ---------------- | --------------------- | --------------------- | --------- |
| **Station type** | Primaria e secondaria | Primaria e secondaria | Combinati |
| **Initiator**    | Primaria              | Entrambi              | Entrambi  |


- **Normal response mode** (NRM)
  Una stazione primaria è collegata a una o più stazioni secondarie tipicamente in modalità half-duplex. Solo la stazione primaria può inviare i comandi e le stazioni secondarie trasmettono solo a seguito di un permesso (**polling**) esplicito inviato dalla stazione primaria.

- **Asynchronous response mode** (ARM)
  Anche in questo caso come nel NRM il colloquio è di tipo sbilanciato, ma la stazione secondaria ha la possibilità di iniziare una trasmissione senza il permesso esplicito della stazione primaria iniziando così un colloquio full-duplex (poco usata).

- **Asynchronous balanced mode** (ABM)
  Fornisce una modalità di funzionamento bilanciato su configurazioni punto-punto tra stazioni “combinate” che possono, in modalità full-duplex, inviare informazioni in modo indipendente ed asincrono.
  È l'unico modo di funzionamento conforme con lo stack ISO OSI.

### Formato della trama
![[Modello ISO OSI-1791562216870.webp|center|812]]
#### Flag (F)
![[Modello ISO OSI-1791568865830.webp|center|600]]
Tipicamente (se il frame non ha una lunghezza predefinita) è presente sia all'inizio che alla fine del frame.
Fa uso del bit stuffing.
>[!important] bit stuffing
>Per garantire che il flag non compaia mai all'interno del frame, trasmettitore e ricevitore si accordano sulla seguente regola:
>- **in trasmissione**: dopo ogni sequenza di cinque 1 consecutivi nei dati si inserisce uno 0;
>- **in ricezione**: dopo cinque 1 consecutivi si guarda il bit successivo: se è 0 è di riempimento e viene eliminato; se è 1, si tratta del flag.
>
>Poiché nei dati non possono mai comparire sei 1 consecutivi, il flag `01111110` è univoco.

#### Address (A)
![[Modello ISO OSI-1791568990471.webp|center|600]]
Può essere l'indirizzo della stazione destinataria o quello della stazione sorgente.
Nelle modalità sbilanciate (NRM, ARM) è sempre quello della stazione secondaria, mentre nella modalità ABM è quello della stazione destinataria.

Normalmente di 8 bit, ma può essere più grande.
Nel caso in cui ha grandezza maggiore viene riservato l'ultimo bit per segnalare se l'indirizzo continua o è terminato (se pari a 0 continua, se pari a 1 è terminato).

#### Control (C)
![[Modello ISO OSI-1791569200306.webp|center|600]]
Composto da 1 o 2 byte.
Il campo controllo distingue i tipi di trama e contiene le informazioni di controllo relative ad ogni tipo.
I primi bit distinguono il tipo, gli altri contengono il controllo vero e proprio.

Il campo P/F distingue se un frame è utilizzato per richiedere una informazione (Polling) o se viene utilizzato come ultimo frame di una serie (Final).
Il campo RN è un campo il cui valore cambia in base al tipo di frame

- **Information** I
  Sono trame numerate per la trasmissione di informazione d'utente contenuta nel campo.
	- SN contiene il numero di sequenza
	- RN contiene il riscontro delle precedenti trame

- **Supervisory** S
  Sono trame numerate per il controllo dell'invio del flusso di informazione (ad es. riscontri non associati ad informazione in senso opposto).
	- Type contiene il tipo di frame
		- RR | 00 | receiver ready | RN contiene la prossima trama attesa e permette di riscontrare le trame fino a RN-1
		- RNR | 10 | receiver not ready | permette di bloccare l'invio di nuove trame e riscontrare fino alla trame RN-1
		- REJ | 01 | reject | richiede la ritrasmissione delle trame da RN in avanti ([[#Go back N]])
		- SREJ | 11 | selective reject | è usato per richiedere la ritrasmissione di una singola trama ([[#Selective repeat]])

- **Unnumbered** U
  Sono trame non numerate usate per l'invio di informazione di controllo (ad es. per l'instaurazione delle connessioni) o per l'invio di informazione in modalità senza connessione.
	- M è composto da 4 byte suddivisi in due sezioni e dà la possibilità di definire fino a 32 comandi
	- X è vuoto

#### Information (Info)
![[Modello ISO OSI-1791569261943.webp|center|600]]
Contiene le informazioni da inviare ai livelli superiori ed ha lunghezza variabile.
È presente solo nelle trame I e nelle trame U usate per trasferimento di informazione in modalità connectionless.
#### FCS
Frame Check Sequence
![[Modello ISO OSI-1791569330532.webp|center|600]]
[[#Controllo degli errori]]
Contiene il codice rivelatore d’errore usato per riconoscere le trame errate.
### Instaurazione della connessione
>[!multi-column]
>
>>[!blank]
>>*es.* di connessione in NRM
>![[Modello ISO OSI-1791570929920.webp|center|493]]
>
>>[!blank]
>>La fase di instaurazione della connessione avviene mediante lo scambio di messaggi che consentono di definire il modo di trasferimento (SNRM, SARM, SABM).
>>Alla fine della fase di trasferimento dati la connessione viene chiusa mediante il comando di DISC.
## Medium access control (MAC)
Nel caso di reti broadcast al livello di linea viene aggiunta la funzionalità di accesso multiplo detta MAC (Medium Access Control).
Se ci sono più dati che concorrono sullo stesso mezzo dobbiamo evitare che collidano.

# Livello rete (livello 3)
Fornisce i mezzi funzionali e procedurali per lo scambio di informazioni tra entità di livello di trasporto.
Fornisce i mezzi per instaurare, mantenere e abbattere le connessioni di rete tra entità di livello trasporto.
Funzioni fondamentali:
- instradamento
- indirizzamento
- controllo di connessione
![[Reti di telecomunicazioni-1791127810485.webp|center|545]]
L'obbiettivo fondamentale di questo livello è quello di individuare il partner nel colloquio (funzione di **instradamento**). Per far questo è necessaria una **tabella di instradamento**, che permette la scelta del SAP di uscita sulla base delle informazioni memorizzate, associando ad ogni destinazione il SAP di uscita

| Destinazione | SAP uscita |
| ------------ | ---------- |
|              |            |


# Livello trasporto (livello 4)
Fornisce alle entità di livello sessione le connessioni di livello trasporto.
Colma le deficienze della qualità di servizio delle connessioni di livello rete.
È il livello più basso con significato da estremo a estremo (la rete è una scatola nera, non ci interessa cosa avviene e come avviene la connessione tra gli host), per questo è implementato solo nei nodi terminali.
In questo livello i messaggi vengono frammentati in segmenti.
Le funzioni principali sono:
- connessione
- controllo di errore e di flusso

![[Reti di telecomunicazioni-1791128304964.webp|center|555]]

# Livello sessione (livello 5)
È responsabile dell'organizzazione del dialogo fra due programmi applicativi di sistemi diversi. Per permettere questa comunicazione, lo strato assicura alle entità di presentazione una connessione di sessione e si occupa di organizzare attivamente il colloquio tra le entità di presentazione stesse.

Le sue funzioni principali si concentrano sulla gestione del dialogo e sulla sincronizzazione tra eventi. A livello pratico, questo livello struttura e sincronizza lo scambio di dati in modo da poterlo sospendere, riprendere e terminare ordinatamente. Infine, per garantire stabilità al dialogo rispetto ai problemi di rete inferiori, il livello di sessione maschera le interruzioni del servizio trasporto.
# Livello presentazione (livello 6)
Lo scopo principale è la corretta interpretazione e formattazione delle informazioni scambiate.

Nello specifico, questo strato risolve i problemi di compatibilità per quanto riguarda la rappresentazione dei dati da trasferire. Per permettere una comunicazione trasparente tra architetture eterogenee, il livello di presentazione risolve i problemi relativi alla trasformazione della sintassi dei dati, una funzione essenziale, ad esempio, quando avviene un colloquio di sistemi basati su sistemi operativi diversi. Infine, oltre a gestire l'aspetto sintattico, questo livello può fornire servizi di cifratura delle informazioni.
# Livello applicazione (livello 7)
Il compito fondamentale di questo strato è fungere da interfaccia diretta per il software: fornisce ai processi applicativi i mezzi per accedere all'ambiente OSI.
Esempi di servizio:
- trasferimento di file
- terminale virtuale
- posta elettronica
