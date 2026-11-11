#appunti #telecomunicazioni 
Raccolta dei protocolli studiati, organizzati per livello ISO/OSI. La teoria generale di ogni livello resta nei rispettivi file ([[Modello ISO OSI]], [[Modello TCP IP]]).

# Metriche di valutazione dei protocolli
## Ritardi
Per la valutazione dei protocolli è necessario definire i ritardi:
- **tempo di trasmissione**$$T (\text{sec}) = \frac{L(\text{bit})}{V_T (\text{bit/sec})}$$ funzione della lunghezza del frame $L$ e capacità del mezzo trasmissivo $V_T$
- **tempo di propagazione**$$\tau (\text{sec})= \frac{d(\text{m})}{V_p (\text{m/sec})}$$funzione della lunghezza del canale $d$ e velocità della propagazione nel mezzo $V_p$ (es. wireless approssimiamo $V_p$ alla velocità della luce)
- **tempo di elaborazione**
  dipende dall'hardware della scheda di rete$$T_E$$
- **tempo di accodamento**
   [[Reti di telecomunicazioni#ritardo di accodamento]]

Inoltre faremo uso del **diagramma di timing** che rappresenta su due linee del tempo i due sistemi:
![[Reti di telecomunicazioni-1791451492256.webp|center|662]]

## Efficienza
Valutiamo l'**efficienza** di un protocollo come:
$$
E = \frac{T}{T_{tot}} \in [0,1]
$$
dove $T$ è il ritardo di trasmissione e il tempo totale $T_{tot}$ contiene sia i tempi necessario che i tempi morti.

Per confrontare l'efficienza dei protocolli possiamo quindi fare uso di distribuzioni di probabilità e formule molto più complesse, in quanto le variabili da confrontare sono numerose (*es.* grandezza della sliding window)
![[Modello ISO OSI-1791558085067.webp|center|513]]

# Livello collegamento (livello 2)
Equivalente TCP/IP: [[Modello TCP IP#Livello di accesso alla rete (livello 1)|livello di accesso alla rete]]
Teoria del livello: [[Modello ISO OSI#Livello collegamento (livello 2)]]

## Framing
Teoria sul framing e sui delimitatori di trama: [[Modello ISO OSI#Framing]]

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
## Controllo del flusso e ritrasmissione (tecniche ARQ)
È necessario regolamentare il flusso dei frame che deve essere inviato, evitando di sovraccaricare la scheda del ricevente.
Teoria su ARQ, FEC, CRC e parità: [[Modello ISO OSI#Controllo degli errori]]

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
In ogni frame c'è un [[Modello ISO OSI#Controllo degli errori|CRC]], codice generato applicando una funzione su header e payload che caratterizza il pattern di bit cercando di verificarne l'integrità.

#### Efficienza (stop & wait)
Riprendendo l'efficienza
$$
E = \frac{T}{T_{tot}} \in [0,1]
$$
>[!multi-column]
>
>>[!blank]
>>in questo protocollo possiamo considerare $T_{tot}$ come:
>$$T_{tot} = \underbrace{T+\tau+T_E}_{\text{frame}} + \underbrace{T_r + \tau + T_E}_{ACK} = T+T_r + 2 \tau + 2 T_E$$
>dove $T$ ritardo di trasmissione (sorgente impiega $T$ per immettere il pacchetto sul canale), $T_{E}$ tempo di elaborazione dell'ACK, $\tau$ ritardo di propagazione e $T_r$ tempo del riscontro (il destinatario impiega $T_r$ per immettere il pacchetto nel canale).
>
>>[!blank]
>>![[Modello ISO OSI-1791736998136.webp]]


Possiamo quindi riscrivere l'efficienza come
$$
E = \frac{T}{T+T_r + 2 \tau + 2 T_E} = \frac{1}{1+\frac{T_r}{T}+2 \frac{\tau}{T} + 2 \frac{T_E}{T}}
$$
Per valutare correttamente l'efficienza dobbiamo tenere in considerazione la possibilità che il frame debba essere ritrasmesso anche più di una volta, ma questa è una variabile aleatoria, di conseguenza estendiamo il concetto di efficienza aggiungendo il [[2. Variabili aleatorie#Valore atteso|valore atteso]] $E[n_t]$ per misurare il numero medio di trasmissioni necessarie ad avere il primo successo, che può essere approssimato ad una [[Modelli matematici#Prove di Bernoulli (binomiale - geometrico)|geometrica]]:
$$
E[n_t] = \frac{1}{1-p}
$$
dove $p$ è la probabilità di errore di frame (cioè che il frame arrivi alterato al ricevitore).
La formula dell'efficienza diventa quindi
$$
E = \frac{T}{E[n_t] \cdot T_{tot}} = \frac{T}{\frac{1}{1-p} \cdot T_{tot}} = \frac{1}{\frac{1}{1-p} \left(1+\frac{T_r}{T}+2 \frac{\tau}{T} + 2 \frac{T_E}{T}\right)}
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
Protocollo [[Modello ISO OSI#Controllo degli errori|ARQ]]
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
Protocollo [[Modello ISO OSI#Controllo degli errori|ARQ]]
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
		- RNR | 10 | receiver not ready | permette di bloccare l'invio di nuove trame (nel caso in cui il buffer del ricevitore è pieno) e riscontrare fino alla trame RN-1
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
[[Modello ISO OSI#Controllo degli errori]]
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
Per l'utilizzo delle LAN è nata la necessità di suddividere il [[Modello ISO OSI#Livello collegamento (livello 2)|livello 2]] dello stack ISO OSI in due sotto livelli:
- Data-link (visto fino ad ora)
- MAC (Medium Access Control)

Nel caso di reti [[Reti di telecomunicazioni#Topologia di rete|broadcast]] al livello di linea viene aggiunta la funzionalità di accesso multiplo detta **MAC** in quanto se ci sono più dati che concorrono sullo stesso mezzo dobbiamo evitare che collidano (contesa sul mezzo).

Le trasmissioni vengono quindi suddivise in trame e ogni ad ogni stazione viene associato (dal produttore) un indirizzo MAC.
Il MAC address della stazione destinazione viene indicato nel campo destinazione dell’header di trama. Quando una stazione riceve una trama verifica se il valore del campo destinazione della trama corrisponde ad un suo indirizzo. Solo in questo caso copia la trama ricevuta e la passa per ulteriori elaborazioni ai livelli superiori.
![[Modello ISO OSI-1791643795037.webp|center|500]]

L'accesso concorrente delle stazioni al mezzo trasmissivo genera il problema della **collisione**, per questo è fondamentale utilizzare dei protocolli che gestiscano queste situazioni.
![[Modello ISO OSI-1792316076558.webp|center|399]]

>[!important] Protocolli di accesso al mezzo
>![[Protocolli-1792670394746.webp|center|500]]
>Servono quindi dei **protocolli di accesso al mezzo**, anche inefficienti, purché *semplici*: il data rate del mezzo è molto elevato (da 100 Mbit/s in su), quindi conviene limitare lo scambio di informazioni superflue, utili solo al controllo e non al trasferimento effettivo dei dati. Si distinguono per il tipo di controllo:
>- **centralizzato**: un controllore riceve le richieste e decide chi trasmette (es. polling); ha una visione completa del sistema, ma è un singolo punto di fallimento;
>- **distribuito**: ogni stazione decide da sola, senza conoscere lo stato delle altre (es. ALOHA, CSMA, token passing). È intrinsecamente più robusto ai guasti, ma rinuncia alla conoscenza completa dello stato del sistema (code, tempi di attesa), quindi accetta gestioni che possono non essere le migliori.
>
>I protocolli di accesso casuale che seguono sono tutti a controllo distribuito.
>
>**Allocazione statica.** Il canale è diviso in parti fisse, una per ogni nodo:
>- **TDMA**: il tempo è diviso in turni (*slot*) di durata fissa, ciascuno assegnato a un nodo; se il nodo non ha nulla da trasmettere, lo slot resta vuoto;
>- **FDMA**: la banda è divisa in sottobande, una per ogni nodo;
>- **CDMA**: tutti i nodi usano lo stesso canale nello stesso momento, ma ciascuno codifica i propri bit con un codice diverso.
>
>Non ci sono collisioni, ma l'efficienza è bassa con traffico bursty perché la capacità assegnata a un nodo inattivo va persa.
### Protocollo Aloha
In questo protocollo i pacchetti possono essere trasmessi non appena vengono generati (arrivano da un livello superiore), di conseguenza non presupponiamo di eliminare il rischio di collisione, ma di essere in grado di gestirlo.

L'idea alla base dell'Aloha è ritrasmettere un pacchetto dopo un certo tempo **random** se viene rilevata una collisione (*es.* chiamata ad un amico occupato, lo richiamo dopo un po').

>[!question] Perché è importante il tempo random
>Perché se il tempo fosse fisso (o deterministico), le stazioni che collidono si comporterebbero **tutte allo stesso modo**.
>![[Modello ISO OSI-1792316188627.webp|center|400]]
>*es.*: A e B trasmettono insieme → collisione. Entrambe aspettano, diciamo, 5 ms. Dopo 5 ms ritrasmettono di nuovo insieme → nuova collisione. E così via, all'infinito: un livelock.
>Con un'attesa casuale, A e B scelgono (con alta probabilità) istanti diversi, quindi una delle due trasmette per prima e il pacchetto passa senza collidere. La casualità serve a **rompere la simmetria** tra stazioni che non si coordinano tra loro (in Aloha non c'è carrier sensing né un controllore centrale).

- Il range da cui si pesca il tempo va scelto con criterio: troppo piccolo → ancora molte collisioni ripetute, troppo grande → ritardi inutili.
- Anche con tempo casuale la collisione non è esclusa, solo molto meno probabile a ogni tentativo.

Per comprendere come viene gestita la collisione definiamo per prima cosa:
>[!important] Intervallo di vulnerabilità
>Intervallo $V$ entro cui una eventuale comunicazione aggiuntiva può determinare una collisione - può avvenire sia prima che dopo
#### Aloha puro
In questo caso l'intervallo di vulnerabilità è pari a
$$
V = 2T
$$
Vale a dire che per $2T$ devo garantire non ci siano comunicazione di altri (mio inizio coincide con fine di un altro e mia fine non coincida con inizio di un altro).
![[Modello ISO OSI-1792316299341.webp|center|382]]
Se trasmetto e verifico che c'è collisione genero un nuovo tempo randomatico (in un range massimale) nel continuo (distribuzione uniforme). È molto improbabile che due stazioni diverse generino lo stesso numero.

**Performance**
Per modellare matematicamente ciò che avviene nel protocollo Aloha pure possiamo utilizzare la distribuzione di [[Modelli matematici#Modello di Poisson|Poisson]], come approssimazione della binomiale: ci permette di capire **quante trasmissioni cadono in un dato intervallo**, ipotizzando di conoscere la frequenza media.
Stiamo quindi ipotizzando che non ci sia organizzazione tra le varie stazioni e non c'è influenza tra di loro, garantendo così aderenza al modello matematico utilizzato (indipendenza degli eventi e assenza di memoria).

In questo caso la frequenza media dell'arrivo dei pacchetto $\lambda$:
$$
P(\lambda=n) = \frac{\lambda^n}{n!} e^{-\lambda}
$$
Definiamo il **traffico normalizzato** (traffico osservabile sul canale dalla generazione complessiva delle stazioni):
$$
G = \lambda T \ [\text{Erlang}]
$$
$\lambda$ tasso medio di pacchetti inviati sul canale
$T$ intervallo di osservazione
$\text{Erlang}$ come unità di misura: durata temporale di occupazione del canale rapportata ad 1 ora.
Sapendo che un canale support un tot di Erlang posso capire di quanti canali ho bisogno per rispondere ad una certa domanda di occupazione del canale.

Avendo $G$ possiamo calcolare la probabilità di avere $n$ pacchetti immessi sul canale dalle stazioni distribuite in un intervallo di tempo $T$
$$
P(n , T) = \frac{(\lambda T)^n e^{-\lambda T}}{n!} = \frac{G^n e^{-G}}{n!}
$$
Per ottenere un modello di nostro interesse invece di usare un generico tempo $T$ usiamo l'intervallo di vulnerabilità ed $n=0$: vogliamo stabilire la probabilità che all'interno dell'intervallo di vulnerabilità ci siano $0$ pacchetti immessi nel canale
$$
P(n, 2T) = \frac{(2\lambda T)^n e^{-2\lambda T}}{n!} = \frac{2Ge^{-2G}}{n!}
$$
quindi
$$
P(0) = P_s = e^{-2G}
$$
$P_s$ probabilità di successo (avere 0 pacchetti).

Se volessi calcolare quindi il **numero medio di pacchetti trasmessi con successo** $S$
$$
S = G \cdot P_s = G \cdot e^{-2G}
$$
Dove $G$ sono i pacchetti complessivi (di cui una parte collide) che viene moltiplicata per la probabilità di successo
![[Modello ISO OSI-1792317600978.webp|center|420]]
finché il carico è entro certi limiti aumentando il traffico aumentano i pacchetti che non hanno collisioni, ma all'aumentare, la produttività si riduce e la maggior parte dei pacchetti avrà collisione.

In questo modo possiamo stabilire fino a quando possiamo aumentare il traffico, dobbiamo stabilire quanto vale $S_{max}$ derivando $S$ rispetto a $G$
troviamo il valore $G^*$ così da stabilire qual è il valore che mi stabilisce il throughput massimale (quantità di dati che non subiscono collisione)
$$
\displaylines{
\frac{dS}{dG} G \cdot e^{-2G}= e^{-2G}-2G e^{-2G} = 0 \\
G_{max} = \frac{1}{2} \\
\implies S_{max} = \frac{1}{2 e} = 0.1839
}
$$
quindi il throughput massimo è il 18%.

#### Aloha a slot
Ragioniamo nel **discreto**: le stazioni possono trasmettere solo in istanti precisi, all'inizio di uno slot.

**Scelta dello slot**
- Per modellare la variabile uniforme divido l'intervallo $[0,1]$ in $n$ sotto-intervalli, ognuno corrisponde a uno slot disponibile.
- Ogni stazione sceglie a caso uno slot tra gli $n$.
- Se due stazioni scelgono lo **stesso slot** c'è collisione, e la **finestra di contesa** viene allargata: divido l'intervallo in più sotto-intervalli.
- Il raddoppio avviene un numero **limitato** di volte, in base al numero di stazioni.

**Durata degli slot**
- L'ampiezza di uno slot è **sempre** pari al tempo di trasmissione di un pacchetto: $V = T$.
- Quindi raddoppiare i sotto-intervalli **non rende gli slot più corti**: aumenta il numero di slot disponibili, cioè **allunga la finestra di contesa nel tempo**.

![[Modello ISO OSI-1792318474122.webp|center|508]]

>[!important] Backoff esponenziale
>Dopo la $k$-esima collisione la stazione sceglie uno slot uniforme in
>$$
>\{0, 1, \dots, 2^{\min(k,\,\max)} - 1\}
>$$
>e aspetta quel numero di slot prima di ritrasmettere.
>- $k$ = numero di collisioni subite dal pacchetto
>- $\max$ = valore massimo dell'esponente, dipende dal canale
>- la finestra **raddoppia** a ogni collisione fino al tetto $2^{\max}$
>- se dopo il numero massimo di tentativi non si riesce a trasmettere, la trasmissione fallisce (la connessione viene persa)
>
>**Effetto:** più slot candidati $\implies$ meno probabilità che due stazioni scelgano lo stesso slot, ma ritardo medio maggiore.

**Performance**
Tramite questo piccolo cambiamento eliminiamo il problema di collisione per sovrapposizione trattato nell'[[#Aloha puro]], di conseguenza
$$
V = T
$$
l'intervallo di vulnerabilità è dimezzato.
Rimangono comunque valide tutte le altre considerazioni fatte sull'aloha puro fatta eccezione per questa piccola differenza, quindi:
$$
P(n,T) = \frac{G^n e^{-G}}{n!}
$$
quindi la probabilità di successo diventa
$$
P_s = P(0, T) = e^{-G}
$$
Andando a calcolare il throughput
$$
S =G \cdot P_s = G e^{-G}
$$
![[Modello ISO OSI-1792318974122.webp|center|570]]

$$
\displaylines{
\frac{dS}{dG} G \cdot e^{-G}= e^{-G}-Ge^{-G} = 0 \\
G_{max} = 1 \\
S_{max} = \frac{1}{e} = 0.36
}
$$
L'aloha a slot raddoppia le performance
La massima produttività è al 36%
Possiamo aumentare il traffico.
### Protocollo CSMA
*"ascolta prima di parlare*"
Il **CSMA** (Carrier Sensing Multiple Access) deriva direttamente dall'[[#Aloha puro]], con l'aggiunta di un feedback sull'occupazione del canale. Lo strumento che rivela l'occupazione del canale si chiama **carrier sensing** e dà il nome al protocollo. Viene applicato su topologia a **bus bidirezionale** (full duplex).

> [!protocollo] CSMA: ascolta prima di trasmettere Procedura:
> 
> 1. la stazione che vuole emettere ascolta se il canale è occupato da una emissione precedente
> 2. se il canale è libero (**idle**), la stazione emette
> 3. se il canale è occupato (**busy**), la stazione ritarda l'emissione a un istante successivo

Ascoltare il canale aiuta, ma **non basta**: il CSMA **non evita le collisioni**.

>[!bug] Ritardo di propagazione
>Il problema principale è il ritardo di propagazione A causa del ritardo di propagazione due nodi non possono sentirsi reciprocamente all'inizio della trasmissione. Tra due stazioni avviene una collisione se accedono al canale in istanti che distano tra loro meno del tempo di propagazione: $$ t_{2}-t_{1} < \tau $$ dove $t_1, t_2$ sono gli istanti in cui le stazioni (es. A e D) hanno verificato che il canale è libero e iniziano a trasmettere una trama.

In caso di collisione il **tempo speso per trasmettere l'intero pacchetto è sprecato**: B e D continuano a trasmettere le loro trame interamente anche se c'è stata collisione. Conta quindi il ruolo della **distanza** e del ritardo di propagazione nel determinare la probabilità di collisione.

>[!important] Intervallo di vulnerabilità
>Nel CSMA è uguale a $2\tau$, dove $\tau$ è il ritardo di propagazione da estremo a estremo sul bus. $$ V = 2\tau $$ Viene detto anche **periodo cieco**.
>>[!question] Perché $2\tau$
>>Date due stazioni agli estremi opposti del bus, con ritardo di propagazione $\tau$, se A inizia a trasmettere in $t_0$ la sua trama collide con chiunque inizi in $(t_0-\tau,\ t_0+\tau)$:
>>- **dopo A** (in $[t_0,\ t_0+\tau)$): il segnale di A non è ancora arrivato, quindi B trova il canale libero e trasmette
>>- **prima di A** (in $(t_0-\tau,\ t_0)$): è il segnale di B a non essere ancora arrivato ad A, che trova il canale libero e trasmette
>>![[Protocolli-1792836681819.webp|center|400]]
>>Le due finestre hanno ampiezza $\tau$ ciascuna, da cui $V = 2\tau$ (stessa struttura dell'[[#Aloha puro]], dove $V = 2T$).

Diversamente dall'Aloha ($V = 2T$) qui l'intervallo di vulnerabilità **non dipende dalla durata della trasmissione**, ma solo dal ritardo di propagazione.

- $\tau$ = tempo di propagazione con l'utente più lontano
- $T$ = durata della trasmissione

**Procedure di persistenza**
Nel caso di canale occupato, l'istante successivo di emissione è determinato da una **procedura di persistenza**:

- 1-persistente (persistente)
- 0-persistente (non persistente)
- p-persistente

> [!multi-column]
> 
> > [!protocollo] 1-persistente
> > Il terminale ascolta finché il canale è occupato e, appena torna libero, trasmette con probabilità $1$.
> 
> > [!protocollo] Non persistente (0-persistente)
> > Se il canale è occupato il terminale ritarda l'emissione di un tempo random calcolato con l'algoritmo di subentro, poi riprova il canale (come se avesse colliso). Usato nelle wireless LAN.

> [!protocollo] p-persistente
> Il terminale attende che il canale torni libero, quindi:
> 
> - con probabilità $p$ emette
> - con probabilità $1-p$ ritarda l'emissione di un tempo casuale (algoritmo di subentro) e riprova il canale

**Prestazioni**
Per le prestazioni si assume lo stesso modello dell'[[#Protocollo Aloha|Aloha]]:
- $T$ tempo di trasmissione del pacchetto
- $\tau$ tempo di propagazione
- $a = \dfrac{\tau}{T}$

Si assume inoltre la modalità **non persistente** (l'unica che consente di trattare facilmente il traffico sul canale).
Si può mostrare che il throughput è $$ S = \frac{G e^{-aG}}{G(1+2a) + e^{-aG}} $$

![[Modello ISO OSI-1792320159802.webp|center|533]]

Più $a$ è piccolo (propagazione trascurabile rispetto alla trasmissione), più il CSMA si avvicina a $S = 1$ e supera nettamente Aloha e Aloha a slot.

#### CSMA-CD
_"ascolta prima di parlare e mentre parli"_
**Collision Detection**: rispetto al CSMA migliora le prestazioni **riducendo la durata delle collisioni**.

Nel CSMA le stazioni coinvolte in una collisione continuano a trasmettere la trama intera. Il tempo necessario perché se ne accorgano dipende dal tempo di propagazione (piccolo rispetto al tempo di trasmissione nelle LAN).

> [!question] Perché continuare a trasmettere trame che hanno già colliso? Non ha senso: non appena una stazione si accorge della collisione **smette di trasmettere la trama**, riducendo i tempi di occupazione inutile del canale.

È applicabile su **Ethernet** (cavi con doppini): mentre uno trasmette si può stare in ascolto sugli altri, quindi trasmissione e ricezione avvengono nello stesso tempo. Mentre immetto un frame ascolto il canale; se percepisco un altro segnale mi fermo.

- carrier sensing come nel CSMA
- le collisioni sono rilevate in breve tempo
- le trasmissioni che hanno colliso sono abortite, riducendo lo spreco sul canale

> [!important] Wired vs wireless
> 
> - **wired LAN**: collision detection facile, si misurano le intensità dei segnali e si confrontano i segnali trasmessi con quelli ricevuti
> - **wireless LAN**: difficile, il ricevitore si disattiva mentre trasmette

![[Reti di telecomunicazioni-1792596709655.webp|center|313]]

> [!protocollo] Cosa succede in caso di collisione
> 
> 1. la collisione viene **riconosciuta** (collision detection)
> 2. la collisione viene **rinforzata** con una **sequenza di jamming**, per avvisare tutte le altre stazioni
> 3. la comunicazione corrente viene annullata
> 4. si riprova ad accedere dopo un intervallo di tempo casuale $\Delta T$
> 
> Per ridurre l'aumento di traffico dovuto alle ritrasmissioni, $\Delta T$ cresce **esponenzialmente** con il numero di collisioni consecutive: è il [[#Aloha a slot|backoff esponenziale]] già visto.

![[Protocolli-1792837998891.webp|center|456]]
dove
$\tau$ tempo di propagazione da estremo ad estremo del bus
$T_{1}$ tempo di rilevazione della collisione
$T_{2}$ tempo di permanenza nello stato di collisione (tempo necessario all'invio della sequenza di jamming)

Ne deriva il **tempo totale** necessario affinché tutti i terminali interrompano l'emissione
$$
T = 2 \tau + T_{1} + T_{2}
$$
e la lunghezza minima della trama
$$
L_{\min} = (2 \tau + T_{1}) R
$$
>[!question] Lunghezza minima della trama
>Il nodo $A$ deve ancora essere in trasmissione quando la collisione gli viene rilevata (dopo $2\tau + T_{1}$). Se la PDU fosse più corta, $A$ avrebbe già finito di trasmettere senza accorgersi della collisione e non ritrasmetterebbe. Quindi la PDU deve durare almeno $2\tau + T_{1}$; moltiplicando per il ritmo binario $R$ si ottiene la lunghezza minima in bit.

**Prestazioni**
- Nel CSMA una trama che collide occupa il canale per tutta la sua durata $T$.
- Nel CD la collisione viene rilevata e la trasmissione abortita dopo un tempo $\delta T$ (più i pochi bit di jamming), quindi si risparmia una frazione $(1-\delta)$ di $T$ per ogni collisione.
Il throughput migliora quindi ed è descritto dalla seguente formula
$$
 S = \frac{G e^{-aG}}{G(1+2a) + e^{-aG} - G(1-\delta)(1-e^{-aG})} 
$$

![[Protocolli-1792837698678.webp|center|526]]
questo risparmio dipende dalle caratteristiche dell'hardware che ci permette di rilevare la collisione: se il tempo di detection è proporzionale a T non abbiamo una convenienza.
#### CSMA-CA
Protocollo utilizzato nelle reti di tipo wireless LAN.
## Standard IEEE 802
Quando cominciarono a diffondersi le prime LAN, l’IEEE attivò il “progetto IEEE 802” con lo scopo di standardizzare
tali reti.
L’IEEE 802 introduce l’idea che le LAN devono fornire un’**interfaccia unificata** verso il livello rete, pur utilizzando tecnologie trasmissive diverse, perciò il livello in due sottolivelli:
- **LLC** (logical link control)
  sottolivello comune a tutte le tipologie di LAN; Svolge funzionalità di recupero, degli errori, cche sontrollo di flusso, gestione della connessione logica (visti fino ad ora per [[#Livello collegamento (livello 2)|tecnologie di collegamento punto-punto, data link]])
- **MAC** (media access control)
  diverso in funzione del tipo di protocollo di accesso utilizzato a livello fisico; Svolge funzionalità di controllo di accesso, indirizzamento, strutturazione delle informazioni in trame e delimitazione di quest'ultima, controllo di errore
Lo standard inoltre definisce una suddivisione del sottolivello MAC basato sul tipo di tecnologia usato nel [[Modello ISO OSI#Livello fisico (livello 1)|livello fisico]].
![[Protocolli-1792843136292.webp|center|841]]

Inizialmente il progetto 802 prevedeva la presenza di 6 tipologie di livello MAC, ma con il tempo se ne sono aggiunte altre.

| **cod**  | **Nome**   | **Velocità**           | **Topologia**                                   | **Tecnica di accesso** | **Mezzo fisico**                                           | **Lunghezza massima** |
| -------- | ---------- | ---------------------- | ----------------------------------------------- | ---------------------- | ---------------------------------------------------------- | --------------------- |
| $\vdots$ |            |                        |                                                 |                        |                                                            |                       |
| 802.3    | CSMA/CD    | $1-10 \ \text{Mbit/s}$ | [[Reti di telecomunicazioni#topologia\|bus]]    | [[#CSMA-CD]]           | [[Modello ISO OSI#Mezzi trasmissivi\|doppino o coassiale]] | 500 m                 |
| 802.4    | Token bus  | $10 \ \text{Mbit/s}$   | [[Reti di telecomunicazioni#topologia\|bus]]    | token                  | [[Modello ISO OSI#Mezzi trasmissivi\|coassiale]]           | 2000 m                |
| 802.5    | Token ring | $4-10 \ \text{Mbit/s}$ | [[Reti di telecomunicazioni#topologia\|anello]] | token                  | [[Modello ISO OSI#Mezzi trasmissivi\|coassiale o fibra]]   | 3000 m                |
| $\vdots$ |            |                        |                                                 |                        |                                                            |                       |
| 802.11   | wifi       |                        |                                                 | [[#CSMA-CA]]           |                                                            |                       |
### Indirizzi MAC
Ogni livello è caratterizzato da un indirizzo e ne esistono di vario tipo:
- [[#Indirizzo IP|rete]]
- [[Modello ISO OSI#Framing|logici]]
- [[#Indirizzi MAC|fisici]]

Ogni dispositivo sulla LAN è identificato da un **indirizzo MAC**, utile a discriminare i dispositivi fisicamente collegati sulla stessa rete.
L'indirizzo MAC è associato alla scheda di rete utilizzata (a livello firmware, sono memorizzate nella ROM dell'adattatore della scheda).
È composto da 6 coppie di valori esadecimali, per un totale di 48 bit ed è suddiviso in due parti principali
- 3 coppie che rappresentano il produttore della scheda (Organization Unit Identify - OUI)
- 3 coppie che rappresentano il numero specifico progressivo, che identifica la scheda (deciso dal costruttore)

La [[Reti di telecomunicazioni#Informazioni utente e di controllo, PDU, SAP|PDU]] del MAC ha degli elementi comuni a tutti i sottolivelli:
![[Protocolli-1792853380174.webp|center|667]]
- **MAC-DSAP**
  indirizzo MAC del nodo destinatario
- **MAC-SSAP**
  indirizzo MAC del nodo mittente
- **LLC-PDU**
  campo info
- **FCS**
  32 bit utili all'identificazione di errori

è importante che la destinazione sia prima della sorgente $\to$ il ricevente può controllare meno bit

Gli indirizzi MAC possono essere di tipo:
- Individuale
- di gruppo
- broadcast
### Standard IEEE 802.3
Lo standard IEEE 802.3 specifica il livello MAC e il livello fisico della rete ethernet, una delle LAN più diffuse al mondo.
Le caratteristiche principali sono:
- topologia a bus (cablaggio a bus o a stella)
- arbitraggio del canale tramite contesa con il protocollo [[#CSMA-CD]]: accesso **casuale** e **distribuito**, con tempo di attesa non limitato superiormente
- velocità di $10 \ \text{Mbit/s}$ nella versione originale, con throughput massimo utile di circa $5-7 \ \text{Mbit/s}$
- **IEEE 802.3u**: versione a $100 \ \text{Mbit/s}$; **IEEE 802.3z**: versione a $1 \ \text{Gbit/s}$

**Sottolivelli del livello fisico**
Dall'alto verso il basso: LLC, MAC, poi
- **PLS** (Physical Signaling)
- **AUI** (Attachment Unit Interface), interfaccia tra PLS e PMA
- **PMA** (Physical Medium Attachment)
- **MDI** (Medium Dependent Interface), interfaccia verso il mezzo fisico

Il livello fisico comprende PLS, AUI, PMA e MDI; l'802.3 comprende MAC e livello fisico.

**Parametri del CSMA/CD in 802.3**
- **carrier sensing** 1-persistente: se il canale è occupato si attende che si liberi e poi si trasmette
- dimensione minima di un pacchetto **64 byte**: è il tempo necessario perché tutte le stazioni possano rilevare un'eventuale collisione
- alla collisione la trasmissione viene abortita, ma solo dopo altri **32-48 bit** di rumore (**sequenza di jamming**)
- [[#Aloha a slot|backoff esponenziale]] con 1 slot $= 2\tau +$ margine di sicurezza. Nel 10Base5, $2\tau$ corrisponde a 450 tempi di bit e 1 slot è di **512 bit**, cioè 64 byte (dimensione minima del frame)
- $X$ è scelto a caso fra $0$ e $2^{\min(K,10)}-1$, con $K \le 16$ numero di collisioni consecutive: sono consentiti fino a **16 tentativi**, dopo i quali la trama viene eliminata dal buffer del livello MAC, che notifica l'evento al livello superiore. In Ethernet quindi una trama può non essere trasmessa a causa della congestione sul canale

Le varianti del livello fisico si indicano così:
$$
x \ B \ y
$$
dove $x$ rappresenta i $\text{Mbit/s}$ in grado di tramettere, $y$ rappresenta l'estensione massima possibile (o il tipo di mezzo fisico) e $B$ rappresenta il tipo di banda: **base** per la banda base (digitale), **broad** per la banda traslata (analogica, es. 10Broad36).
*es.*
$$
10 \ \text{base} \ 5
$$
è un tipo di LAN che consente la trasmissione in $10\ \text{Mbit/s}$ in banda base per un massimo di $500 \ m$.
Fa utilizzo di [[Modello ISO OSI#Mezzi trasmissivi|cavi coassiali thick]].
I segmenti di lunghezza massima 500 m possono essere estesi facendo uso di **ripetitori** (semplice decodifica e reinvio) per estendere l'ampiezza della rete, per un massimo di 4 ripetitori a cascata (2500 m). Ogni segmento consente a 100 nodi di far parte della rete (1000 in totale su 5 segmenti).

*es.*
$$
10 \ \text{base} \ 2
$$
ha una estensione massima di 185 m per segmento dato dall'utilizzo di [[Modello ISO OSI#Mezzi trasmissivi|cavi coassiali thin]] che hanno maggiore dispersione.

*es.*
$$
10 \ \text{base} \ \text{T}
$$
fa utilizzo di [[Modello ISO OSI#Mezzi trasmissivi|twister pair]] e permette quindi l'utilizzo di ripetitori multi porta.
#### MAC frame
![[Protocolli-1792856560970.webp|center|1007]]
- **Preamble**
  7 ottetti `10101010` che permettono alle stazioni riceventi di sincronizzarsi con meccanismi di aggancio di fase (PLL) sul clock di trasmissione del nodo mittente di ciascun pacchetto
- **SFD**
  (Start Frame Delimiter) 1 ottetto `10101011`, delimitatore di inizio della trama
- **Destination address**
  indirizzo MAC, 48 bit (può essere anche di 2 ottetti)
- **Source address**
  indirizzo MAC, 48 bit (può essere anche di 2 ottetti)
- **Length PDU**
  2 byte che descrivono la lunghezza del campo dati
- **Data**
  Payload: la [[#PDU dell'LLC in 802.3|PDU dell'LLC]], da 0 a 1500 ottetti
- **PAD**
  bit di padding (da 0 a 46 ottetti) che permettono il raggiungimento della [[#CSMA-CD|lunghezza minima]] della trama, 64 byte
- **FCS**
  4 ottetti per il controllo di errori; **non** protegge né il preambolo né l'SFD (se questi sono corrotti la trama è scartata in partenza)

La lunghezza della trama va da **64 a 1518 ottetti**. L'**overhead** (informazioni aggiuntive oltre al payload) è di 26 byte.
Il servizio offerto è **senza connessione**.

>[!bug] In caso di rilevamento di errori il frame viene completamente scartato, il reinvio viene demandato agli altri livelli

**PDU dell'LLC in 802.3**
Nel campo dati c'è la PDU dell'LLC (payload del livello MAC), con i campi:
- **DSAP** e **SSAP** (*Destination/Source Service Access Point*): indirizzamento verso il livello superiore. Nel DSAP il primo bit indica indirizzo individuale (0) o di gruppo (1); nell'SSAP indica comando (0) o risposta (1)
- **Control**: stesso formato di [[#HDLC]]. Può essere **I-frame** (`0`, N(S), P/F, N(R)), **S-frame** (`10`, codice, P/F, N(R)) o **U-frame** (`11`, codice, P/F, codice)
- **Information**

**Dimensione minima e lunghezza massima della rete**
Per il CSMA/CD originale su bus a $10 \ \text{Mbit/s}$:
- la minima lunghezza della trama è **512 bit** (uno slot), pari a $51,2 \ \mu s$
- la velocità di propagazione media è di $2 * 10^8\ \text{m/s}$ ($5 \ \mu s/km$), e dipende dal mezzo (qui coassiale thick)
- ne segue una distanza massima teorica di $5 \ km$: $51,2 \ \mu s = 2\tau$, quindi $\tau = 25,6 \ \mu s$, circa $5 \ km$
- per evitare problemi relativi ai ritardi dei ripetitori è fissata una distanza massima a $2,5 \ km$
- due trame consecutive vengono sempre distanziate di un tempo minimo detto **Inter Frame Gap** (IFG, $9,6 \ \mu s$ a $10 \ \text{Mbit/s}$), che permette alle stazioni in ascolto di distinguere la fine di una trama dall'inizio della successiva. L'IFG sostituisce il delimitatore di fine trama, che in 802.3 non c'è
#### 802.3 vs Ethernet
>[!important] 802.3 ed Ethernet non sono la stessa cosa
>- **802.3** usa un livello LLC (802.2) sopra il MAC
>- **Ethernet** colloquia direttamente con il livello di rete (es. IP sta direttamente sopra Ethernet)

**Trama Ethernet**
L'adattatore che trasmette incapsula il datagramma IP (o il pacchetto di un altro protocollo di livello rete, il *payload* di livello 3) in una trama Ethernet:
- **Preambolo**
  7 byte `10101010` seguiti da un byte `10101011` (SFD); serve a sincronizzare i clock di ricevitore e trasmettitore sui dati
- **Address**
  6 byte. Il frame è ricevuto da tutti gli adattatori della LAN e scartato se l'indirizzo non corrisponde. L'indirizzo di destinazione viene **prima** di quello di sorgente: la stazione controlla subito se è la destinataria e solo dopo legge il resto
- **Type**
  indica il protocollo di livello superiore (livello 3: IP, Novell IPX, AppleTalk); serve a sapere a quale processo consegnare il dato letto
- **CRC**
  controllato dal ricevitore; se c'è un errore la trama è semplicemente scartata

**Come si distinguono**
In molte LAN le due trame convivono e si distinguono dal valore del campo da 2 byte dopo gli indirizzi:

| **Standard** | **Campo da 2 byte**                                  | **Valori**         |
| ------------ | ---------------------------------------------------- | ------------------ |
| IEEE 802.3   | **Length**: lunghezza del campo dati                 | da 0 a 1500        |
| Ethernet     | **Protocol type**: protocollo di livello superiore   | maggiori di 1500   |

Il campo *protocol* di Ethernet serve a indirizzare il SAP verso il livello di rete: permette di multiplare più architetture di protocolli sullo stesso MAC, ad esempio `0600` XNS, `0800` IP, `6000`-`6009` DEC.
# Livello rete (livello 3)
Equivalente TCP/IP: [[Modello TCP IP#Livello di rete (livello 2)|livello di rete]]
Teoria del livello: [[Modello ISO OSI#Livello rete (livello 3)]]

## IP
![[Protocolli-IP-animazione.gif|center|680]]


>[!protocollo] IP
>Il protocollo utilizzato è l'Internet Protocol (IP), il quale provvede a instradare i dati attraverso reti multiple collegate in cascata. In pratica, si assicura di trovare il percorso giusto per trasferire informazioni tra sistemi terminali che appartengono a reti diverse.

Il protocollo IP fornisce un servizio di trasferimento delle unità informative con le seguenti proprietà:
- **senza connessione**
  tratta ciascuna unità informativa indipendentemente dalle altre, ognuna può seguire una strada diversa per arrivare a destinazione e non mantiene informazioni di stato sulle unità dati inoltrate
- **inaffidabile**
  non è garantita la consegna di un’unità informativa a destinazione, un’unità dati può essere persa, duplicata, ritardata o consegnata fuori sequenza

Il compito di garantire qualità del servizio è quindi demandato ad altri livelli.

![[Protocolli-1793875265884.webp|center|481]]
Ogni interfaccia del router (è dotato di più interfacce) deve avere un suo indirizzo di rete specifico. Ogni interfaccia avrà una rete distinta (un indirizzo di rete distinto). Quando abbiamo un determinato indirizzo, sulla base della maschera di rete riusciremo a calcolare la rete a cui appartiene un host.

### Formato dell'unità dati
Le unità dati dello strato IP sono detti **datagrammi**.
L'header del datagramma ha una grandezza variabile da 20 a 60 byte.
![[Protocolli-1793875449416.webp|center|670]]
- **Version** (4 bit)
  Versione del protocollo IP
- **IHL** (4 bit)
  Dimensione dell'header. È composto da soli 4 bit, vengono moltiplicati per 4 e così si ottiene la lunghezza (es. 1111 implica una lunghezza dell'header di 60 byte), se minore di 0101 viene scartato perché $5*4=20$ e la lunghezza minima dell'header è 20
- **Type of service** (8 bit)
  Distinguere flussi di tipo diverso dando importanza ad elementi diversi, es. delay D (tento di inoltrare prima loro sulla rete), throughput T, affidabilità R (se le sue code di bufferizzazione si riempiono e superano la sua dimensione massimale, deve iniziare a scartare pacchetti, non scarta quelli con affidabilità ad 1).
  Sono bit utilizzati per cambiare la politica di gestione del pacchetto. Inoltre il campo precedence, a parità di bit D,T,R definisce un ordine. Da qui nascono algoritmi di scheduling ed emissione di chiamata appositi.
  Il TOS non riguarda l'instradamento ma lo **scheduling** dei pacchetti nei router: con uno scheduling a più code si possono distinguere più classi di traffico, ogni coda garantisce una certa proprietà (es. basso ritardo, alta affidabilità) e in base a quanti pacchetti si prelevano da ogni coda si capisce se è possibile soddisfare il TOS richiesto. Inoltre si può dividere il canale tra le varie code.
- **Total length** (16 bit)
  Dimensione di header+payload. La dimensione massima teorica è $2^{16}-1 = 65535$ byte, tipicamente però non viene usata l'intera grandezza, ma solo 1500 byte, in quanto non conviene avere pacchetti di dimensioni troppo grandi
- **Identification** (16 bit)
  Indica il numero del datagramma, utile alla ricomposizione del pacchetto in caso di frammentazione
- **Flags** (3 bit)
  è un campo di bit di controllo
  -X non usato e posto a 0
  -DF (don't fragment) se posto a 0 indica che il datagramma può essere frammentato
  -MF (more fragment) se posto a 0 indica che è l'ultimo frammento del datagramma
- **Fragment offset** (13 bit)
  Indica la posizione del frammento nel datagramma originario
- **Time to live** (8 bit)
  Counter inizializzato al primo invio del datagramma, ad ogni hop viene decrementato e se arriva a 0 il pacchetto viene scartato
- **Protocol** (8 bit)
  Protocollo del livello superiore a cui inviare il payload
- **Header checksum** (16 bit)
  Controllo di errore sull'header, non sul payload. Se il checksum non torna il datagramma viene semplicemente **scartato**: IP non effettua ritrasmissioni (servizio best effort), un'eventuale ritrasmissione è compito dei livelli superiori (es. TCP). Se il datagramma scartato è un frammento, l'intero datagramma originale non può essere ricostruito e viene scartato anche lui: basta che manchi un singolo frammento.
- **IP source address** (32 bit)
  Indirizzo IP della sorgente
- **IP destination address** (32 bit)
  Indirizzo IP della destinazione
- **Options** (lunghezza variabile a multipli di 8 bit, l'ultima sequenza è delimitata da 0)
  -Record Route Option (RRO), permette al mittente di creare una lista vuota di indirizzi IP, ogni nodo attraversato riempirà il campo vuoto successivo
  -Source Route Option (SRO), consente al mittente di specificare i nodi attraverso il quale vuole che transiti il datagramma
  -Timestamp Option, come RRO, ma ogni nodo aggiunge anche il timestamp del passaggio
- **Padding** (lunghezza variabile)
  rende la lunghezza dell'intestazione un multiplo intero di 32 bit mediante introduzione di zeri
### Frammentazione/aggregazione
Le sottoreti possono avere diverse limitazioni circa la lunghezza massima delle loro unità dati.
La dimensione max dell’unità dati di una sotto-rete è detta, in TCP/IP, Maximum Transfer Unit (**MTU**).
Se il datagramma incontra una sottorete con una MTU di dimensione inferiore a quella scelta per il datagramma, quest’ultimo viene segmentato in più parti detti **frammenti**.
Anche il frammento può essere frammentato a sua volta se incontra sottoreti con MTU ancora più piccole, ma solo per ipv4, non su ipv6

I soli vincoli imposti da IP sono:
- i router devono accettare datagrammi di dimensioni pari a quelli delle MTU delle sottoreti interconnesse
- tutti i sistemi (host e router) devono comunque accettare datagrammi di dimensioni almeno pari a 576 byte (frammentati o non)
- I sistemi devono poter inoltrare datagrammi di 68 byte senza ulteriore frammentazione (60 byte di header al massimo + 8 byte di frammento, che è il minimo

>[!question] Osservazione
>Il router verifica l'integrità del frammento tramite il **checksum** e lo instrada, ma non sa a quale pacchetto appartenga: controlla solo l'integrità. Il datagramma originale viene ricostruito (riassemblaggio) solo a **destinazione**.

![[Protocolli-1793884757859.webp|center|586]]
se si perde un singolo frammento viene perso tutto il pacchetto. Inoltre si ha overhead protocollare, le informazione del protocollo vengono ripetute molte volte se si va a spezzettare in frammenti sempre più piccoli. Il rapporto tra informazioni di controllo e totale ci dà una indicazione su questo. Per questi motivi in ipv6 si tende a limitare questo processo.

>[!important] Overhead protocollare
>Sono i byte che il protocollo aggiunge oltre ai dati utili, cioè l'**header**. Per IP: overhead $=$ IHL $\times 4$ byte, payload $=$ Total Length $-$ overhead. La frammentazione lo fa crescere in due modi:
>- ogni frammento è un datagramma IP con il **proprio header** (almeno 20 byte): da 1 datagramma a $n$ frammenti si passa da 1 a $n$ header;
>- se si perde anche un solo frammento si ritrasmette **tutto** il datagramma, anche i frammenti già arrivati.
>
>Nel momento in cui un datagramma viene frammentato le informazioni dell'header vengono copiate, tranne per il campo total length.
>Per questo motivo non conviene frammentare troppo un datagramma: a ogni frammento si aggiunge un header, quindi il rapporto overhead/byte totali cresce e la trasmissione diventa sempre meno efficiente.

L'ultimo frammento avrà il campo more fragment = 0, mentre tutti i precedenti lo hanno pari a 1.

I datagrammi IP non segmentabili (bit DF=1) non vengono frammentati; ciò comporta la perdita del datagramma se incompatibile con la capacità di trasporto della rete.

Il campo **Fragment Offset** assegnato ad ogni frammento permette al destinatario di risalire alla posizione (in multipli di 8 byte) del frammento nel datagramma originario per poterlo ricomporre.
### Indirizzamento
Per far comunicare tra loro tutti i sistemi connessi a Internet serve un metodo **globalmente accettato** per identificare e indirizzare in modo univoco ogni sistema. È stato quindi definito un nuovo schema di indirizzamento, perché le sottoreti pre-esistenti avevano schemi propri, diversi tra loro e non univoci globalmente (indirizzi Ethernet, indirizzi X.25, numeri telefonici…).
Un indirizzo IP è una stringa di 32 bit, che identifica la connessione di una interfaccia di un sistema (host o router) ad una rete e non uno specifico utente.
Per garantire l'unicità c'è un'autorità centrale, **INTER-NIC**, controllata dalla **IANA**, che distribuisce gli indirizzi a blocchi ai provider. Se un host deve connettersi ad internet contatta il server DHCP del provider, che gli assegnerà l'indirizzo IP pubblico specifico.

Ogni indirizzo IP è caratterizzato da due parti:
- **net-id**
  identifica una porzione di inter-rete, che può coincidere con una sotto-rete fisica, o comprendere più sotto-reti fisiche o essere un sottoinsieme di una sotto-rete fisica; nel seguito indicheremo la porzione individuata da Net-ID col nome di “rete logica”
- **host-id**
  identifica il sistema (host o router) nella rete logica
#### Classi di indirizzi IP
>[!important] Maschere
>La **maschera** mette a 1 i bit di rete (i più significativi) e a 0 quelli di host:
>
>| Classe | Maschera |
>|---|---|
>| A | /8 → 255.0.0.0 |
>| B | /16 → 255.255.0.0 |
>| C | /24 → 255.255.255.0 |

Nella distribuzione degli indirizzi (schema **classful**) lo spazio è diviso così: A 50%, B 25%, C 12,5%, D 6,25%, E 6,25%.

>[!multi-column]
>
>>[!blank]
>>- **Classe A**: poche reti molto grandi (Net_Id 7 bit, Host_Id 24 bit → fino a $2^{24}-2$ host per rete).
>>- **Classe B**: reti di medie dimensioni (Net_Id 14 bit, Host_Id 16 bit → fino a $2^{16}-2 = 65\,534$ host).
>>- **Classe C**: tante reti piccole (Net_Id 21 bit, Host_Id 8 bit → fino a $2^8-2 = 254$ host).
>>- **Classe D**: un gruppo multicast (Multicast group id, 28 bit) corrisponde a una pluralità di host; si usa un protocollo aggiuntivo, **IGMP** (*Internet Group Management Protocol*).
>>- **Classe E**: riservata (27 bit).
>
>>[!blank]
>>![[classi-ip-torta.svg|center|317]]


![[Protocolli-1794076412811.webp]]

>[!important] Indirizzo di rete e broadcast
>- Bit di host **tutti a 0** → **indirizzo della rete**.
>- Bit di host **tutti a 1** → **indirizzo broadcast** della rete (pacchetto a tutti gli host).
>
>Quindi nella parte host non sono assegnabili tutti gli indirizzi: gli host possibili sono $2^{\#\text{bit host}} - 2$ (es. classe A: $2^{24}-2$, B: $2^{16}-2$, C: $2^{8}-2$).

>[!check] Esempio
>Dato l'indirizzo di classe B **132.125.18.36**:
>
>| | |
>|---|---|
>| Net_Id | 132.125 |
>| Host_Id | 18.36 |
>| Indirizzo della rete | 132.125.0.0 |
>| Indirizzo broadcast | 132.125.255.255 |
>| Indirizzi possibili | da 132.125.0.1 a 132.125.255.254 |
>| Numero di host | $256 \cdot 256 - 2 = 65\,534$ |

Gli indirizzi IPv4 (32 bit) sono **limitati**, mentre i dispositivi connessi in rete sono sempre di più: con lo schema a classi gli indirizzi si sono esauriti in fretta. Per questo si è passati allo schema **classless**, con le soluzioni descritte di seguito ([[#Subnetting|subnetting]], [[#Subnetting|CIDR]], [[#Supernetting|supernetting]]), e a lungo termine a IPv6 (128 bit).
#### Subnetting
>[!important] Subnetting (RFC 950, 1985)
>Divisione di una rete di classe A, B o C in sottoreti più piccole, aggiungendo un terzo livello gerarchico: **netid + subnetid + hostid** (netid + subnetid = *network prefix*).
>- risolve la crescita delle tabelle di routing: le sottoreti **non sono visibili all'esterno**, i router di Internet hanno un'unica entry per tutte le sottoreti di una rete;
>- risolve la continua richiesta di indirizzi: un'organizzazione riceve uno (o pochi) indirizzi di rete e poi assegna liberamente i numeri di sottorete.

All'inizio il subnetting era **fisso**: tutte le sottoreti uguali, dimensionate sulla rete che chiede di più (tra una rete da 100 e una da 50 si dà 100 a entrambe). Poi si è passati alla subnet **variabile** (100 a una e 50 all'altra).

**Netmask**
- ha bit a 1 sui campi network e subnet, a 0 sul campo host;
- per sapere la subnet di un host si fa l'**AND bit a bit** tra netmask e indirizzo IP;
- se due indirizzi sono nella stessa subnet → routing **diretto**, altrimenti → routing **indiretto** verso un router (vedi [[#Instradamento diretto e indiretto]]) (si assume che a ogni rete logica corrisponda una rete fisica);
- esaminando la maschera un host capisce come è suddiviso il suo indirizzo (es. classe B: senza subnet `255.255.0.0`; con Host_Id diviso a metà in Sub_Net_Id e Sub_Host_Id `255.255.255.0`).

>[!question] Osservazione: la maschera non sta nell'header IP
>Con lo schema **classful** la maschera si ricavava dai primi bit dell'indirizzo: `0` → A (/8), `10` → B (/16), `110` → C (/24).
>Con subnetting e CIDR non è più così, ma la maschera non serve nel pacchetto perché chi la usa la conosce già:
>- l'**host** ha la propria maschera (configurata o ricevuta via DHCP): fa l'AND con l'IP di destinazione e, se è nella sua rete, consegna direttamente, altrimenti manda al gateway;
>- il **router** ha rete e maschera in ogni voce della tabella di routing e sceglie la voce con il prefisso più lungo (*longest prefix match*).
>
>La maschera è quindi un'informazione **locale**: viaggia solo nei messaggi dei protocolli di routing (RIPv2, OSPF, BGP), non in RIPv1 che era classful.

>[!check] Esempio
>Indirizzo **193.205.102.36** con maschera **255.255.255.248**: quante macchine può avere la subnet?
>248 = `11111000` → gli ultimi **3 bit** sono di host, cioè $2^3 = 8$ indirizzi:
>
>| ultimi 3 bit | host | quarto numero IP |
>|---|---|---|
>| 000 | subnet | 32 |
>| 001 – 110 | disponibili | 33 – 38 |
>| 111 | broadcast | 39 |
>
>Tolti indirizzo di subnet e broadcast restano al massimo **6 macchine**. Tutti i router di Internet instradano in base alla rete di classe C (193.205.102); il router responsabile di quella rete instrada poi verso le subnet guardando gli altri 5 bit (informazione presa dalla maschera).

Convenzione per assegnare gli indirizzi in una rete (es. `192.168.0.0/24`, broadcast `192.168.0.255`): o si parte dal **primo** utilizzabile, `192.168.0.1` (di solito il router), in ordine crescente, o dall'**ultimo** utilizzabile, `192.168.0.254` (subito prima del broadcast), in ordine decrescente.

>[!check] Esempio
>Subnetting fisso: dalla classe C **192.168.0.0/24** servono **due reti da 100**.
>Uso il primo bit della parte host: /24 → **/25** (255.255.255.128):
>- `192.168.0.0/25` → da .0 a .127;
>- `192.168.0.128/25` → da .128 a .255.
>
>In ogni sottorete il primo (.0 / .128) e l'ultimo indirizzo (.127 / .255) non sono assegnabili. La maschera si può allargare ancora:
>```
>192.168.0.0/24 ─┬─ 192.168.0.0/25   ─┬─ 192.168.0.0/26
>                │                    └─ 192.168.0.64/26
>                └─ 192.168.0.128/25 ─┬─ 192.168.0.128/26
>                                     └─ 192.168.0.192/26
>```

>[!important] Collegamento punto-punto: /30
>Con /30 ho 4 indirizzi, il minimo che serve: indirizzo della rete, 2 indirizzi disponibili (i due estremi del collegamento) e broadcast (anche se non lo uso).

L'efficienza dipende anche da quanti indirizzi sono occupati nella rete: si tende a lasciarne almeno il **10% vuoto**.

**Variable Length Subnet Masks (VLSM)**
>[!check] Esempio
>Da **192.168.0.0/24** ricavare tre reti da **60**, **30** e **20** host.
>- `192.168.0.0/26` → 64 indirizzi per la LAN da 60;
>- `192.168.0.64/26` per 30 host sono troppi → divido il blocco in 2 (32 indirizzi bastano) → **/27**.
>
>| LAN | Blocco | Indirizzi |
>|---|---|---|
>| LAN 1 | /26 | 0 – 63 |
>| LAN 2 | /27 | 64 – 95 |
>| LAN 3 | /27 | 96 – 127 |
>| libero | | 128 – 255 (2 blocchi /26) |
>
>Se la terza rete fosse stata da 10 host avrei potuto dividere ancora con una /28.

>[!important] CIDR
>Questa rappresentazione di classi flessibili è il **CIDR** (*Classless Inter-Domain Routing*).
#### Supernetting
Interviene quando una classe C è troppo piccola ma una B è troppo grande: si mettono insieme indirizzi di classe C **contigui** e si sposta la maschera verso sinistra.

>[!check] Esempio
>Unire **192.168.0.0/24** e **192.168.1.0/24**: la maschera passa da /24 a **/23** (la parte host passa da 8 a 9 bit, varia il 3° ottetto). Con 4 reti (192.168.0–3.0) prendo un altro bit → **/22**.
#### Indirizzi privati
La IANA ha riservato tre blocchi per le reti IP **private** (non interconnesse a Internet):

| Classe | Range | Notazione |
|---|---|---|
| A | 10.0.0.0 – 10.255.255.255 | 10.0.0.0/8 |
| B | 172.16.0.0 – 172.31.255.255 | 172.16.0.0/12 |
| C | 192.168.0.0 – 192.168.255.255 | 192.168.0.0/16 |

- Il blocco A è un'intera classe A.
- Il blocco B sono **16 reti di classe B contigue** (172.16.0.0/16 – 172.31.0.0/16): nel secondo ottetto si va da 16 = `0001 0000` a 31 = `0001 1111`, i primi 4 bit restano fissi → $8+4 = 12$ bit fissi → **/12**.
- Il blocco C sono **256 reti di classe C** contigue (192.168.0.0/24 – 192.168.255.0/24), i primi 16 bit sono fissi → **/16**.

Gli indirizzi privati sono assegnati all'interno della rete dal router (che fa da server DHCP) e **non** vengono instradati verso il mondo esterno.

>[!important] NAT
>Traduce gli indirizzi **privati in pubblici**; è implementato da un dispositivo di livello 3. Così non si saturano gli indirizzi: c'è 1 indirizzo pubblico associato a tutti i dispositivi che comunicano con l'esterno, e su richiesta gli indirizzi vengono tradotti.

Es. gli indirizzi di casa sono di solito di classe C, del tipo `192.168.1.x`.
#### Indirizzi dinamici
%%
Un dispositivo che non è connesso ad una rete non mantiene occupato il suo indirizzo. L'indirizzo quindi viene assegnato dinamicamente da DHCP (dall'operatore)
l'operatore che gestisce il server DHCP ha un certo slot di indirizzi che assegna dinamicamente e che assegna in leasing
se non vengono trasmessi dati per un certo periodo di tempo l'indirizzo torna nel pool di indirizzi disponibili, pronto ad essere assegnato ad altri dispositivi.
In questo modo con meno indirizzi posso rappresentare più utenti.
Si ha un fattore di contemporaneità del 10/15%.
%%
### Instradamento
>[!important] Instradamento
>L'**instradamento** è una funzione di **natura logica** che ha lo scopo di **guidare l'informazione** di utente verso la **destinazione** desiderata.

In Internet ogni **datagramma IP** attraversa un **cammino** composto da **sotto-reti** (ognuna con la sua [[#Classi di indirizzi IP|classe di IP]]) **interconnesse da router**.
I **router** IP ricevono datagrammi IP da un'interfaccia e li **inoltrano** su un'altra: sono gli unici dispositivi che possono fare instradamento.
I router IP hanno (normalmente) **un indirizzo IP per ogni interfaccia**.

>[!check] Esempio
>![[Protocolli-router-IP.svg|center|600]]
>
>- "Marte" e "Saturno" sono **multi-homed host**, in quanto connessi sia alla Token Ring che a Ethernet: hanno quindi **due indirizzi**.
>- Il **gateway** "Mercurio" interconnette la Token Ring a un'altra rete (ARPANET) e quindi anch'esso ha due indirizzi.
>- Siccome gli indirizzi sono utilizzati per l'instradamento, se ci si riferisce a "Marte" con l'indirizzo `192.5.48.3` il messaggio arriva tramite la **Token Ring**; se invece si usa `128.10.2.3` arriva tramite l'**Ethernet**.

>[!question] Osservazione
>L'[[#Indirizzamento|indirizzo IP]] identifica un'**interfaccia**, non un dispositivo: i nodi collegati a più reti (interfacce di rete distinte) hanno più indirizzi IP, uno per interfaccia.

![[Protocolli-interconnessione-router.svg|center|680]]

- I router lavorano al **livello 3** OSI (livello di rete).
- Sono **indirizzati esplicitamente**.
- I nodi della rete **devono** conoscere l'indirizzo del router.

Quando un router consegna un datagramma a una sotto-rete, questo diventa l'**unità di dati di servizio** ([[Reti di telecomunicazioni#Informazioni utente e di controllo, PDU, SAP|SDU]]) propria dello strato immediatamente inferiore a IP di quella sotto-rete.
La sotto-rete consegna tale unità dati al **prossimo router** o alla destinazione (se questa è all'interno della sotto-rete) con le stesse modalità con cui tratta le unità dati a essa "appartenenti".

**Incapsulamento del datagramma IP**
![[Protocolli-incapsulamento-IP.svg|center|680]]

In ogni sotto-rete attraversata il datagramma ([[#Indirizzamento|Net_id]] + `Data`) resta lo stesso, mentre cambiano le intestazioni (PCI) aggiunte dalla tecnologia della sotto-rete: PCI di livello 2 e 3 in X.25, PCI non nota nella sotto-rete B, LLC e MAC nelle LAN collegate dal bridge.
#### Instradamento diretto e indiretto

>[!multi-column]
>
>>[!important] Instradamento diretto
>>Si applica quando la trasmissione di un datagramma IP avviene tra due host connessi alla **stessa sotto-rete**.
>
>>[!important] Instradamento indiretto
>>Si applica quando la trasmissione di un datagramma IP deve attraversare **almeno un router**, cioè avviene tra due host connessi su **differenti sotto-reti**.

La decisione tra instradamento diretto e indiretto viene presa in base alla corrispondenza tra l’indirizzo di destinazione e gli indirizzi delle sottoreti a cui il nodo è direttamente connesso.
- **caso 1**: la sottorete logica **coincide** con la sottorete fisica
  l'host mittente confronta la parte del proprio indirizzo corrispondente a **[[#Indirizzamento|Net-id]] + [[#Subnetting|Subnet-id]]** con la stessa parte dell'indirizzo dell'host di destinazione (se non si usano le [[#Subnetting|subnet]] il confronto avviene solo sul Net-id)
- **caso 2**: la sottorete logica è **una parte** della sottorete fisica
  l'host mittente usa l'instradamento diretto solo per gli host della **stessa sotto-rete logica**; l'host è configurato con l'elenco delle sotto-reti logiche direttamente raggiungibili

**Come decide il mittente: AND con la subnet mask**
In pratica il confronto dei due casi si fa con un **AND logico bit a bit** con la [[#Subnetting|subnet mask]]. La [[#Classi di indirizzi IP|maschera]] ha **1** in corrispondenza di Net-id + Subnet-id e **0** sulla parte host, quindi:
$$\text{indirizzo IP}\ \text{AND}\ \text{subnet mask} = \text{indirizzo della sotto-rete}$$
(i bit di rete restano invariati, quelli dell'host vengono azzerati: si ottiene l'indirizzo con host-id tutto a 0, cioè l'[[#Classi di indirizzi IP|indirizzo della rete]]).

Il mittente calcola l'indirizzo di sotto-rete **della destinazione** e **il proprio** (con la propria maschera) e li confronta:
- **uguali** → la destinazione sta nella stessa sotto-rete → **instradamento diretto**: il datagramma viene inviato direttamente al destinatario
- **diversi** → la destinazione sta in un'altra sotto-rete → **instradamento indiretto**: il datagramma viene inviato (sempre localmente) al **router** che porta verso quella rete

```
IF bitwise_and(dg.ip_dest, my_ip_mask) = bitwise_and(my_ip_addr, my_ip_mask)
THEN send_dg_locally(dg, dg.ip_dest)
ELSE send_dg_locally(dg, gateway_to(bitwise_and(dg.ip_dest, my_ip_mask)))
```

>[!check] Esempio
>![[Protocolli-instradamento-decisione.svg|center|700]]
>
>Maschera `255.255.255.192` ([[#Subnetting|/26]]): i primi 3 ottetti sono tutti 1 e restano uguali, conta solo l'ultimo (`192` = `11000000`).
>
>| | ultimo ottetto | AND `11000000` | sotto-rete |
>|---|---|---|---|
>| destinazione `194.27.3.48` | `00110000` | `00000000` | `194.27.3.0` |
>| mittente `194.27.3.131` | `10000011` | `10000000` | `194.27.3.128` |
>
>I risultati sono **diversi**: il datagramma passa per il router (`194.27.3.160` sulla rete `194.27.3.128/26`, `194.27.3.16` sulla rete `194.27.3.0/26`) → instradamento indiretto. Se il mittente fosse `194.27.3.16` (stessa sotto-rete `194.27.3.0/26` della destinazione) l'AND darebbe lo stesso risultato → instradamento diretto.

**Instradamento diretto**
Lo scambio di datagrammi tra host connessi alla stessa sottorete **non coinvolge i router**.
L'host IP sorgente incapsula il datagramma nell'unità dati tipica della sotto-rete, **traduce l'indirizzo IP** di destinazione nel corrispondente **indirizzo locale** di quella sotto-rete e lo invia direttamente all'host di destinazione.
L'instradamento all'interno della sotto-rete usa i meccanismi propri della rete stessa e può essere qualunque e non significativo globalmente.

Per consegnare un datagramma a un altro host attraverso una sottorete comune, l'host sorgente deve conoscere l'**indirizzo di sottorete** del destinatario: serve quindi una traduzione da indirizzi IP (livello 3) a indirizzi di livello 2 (MAC nelle LAN, identificatori di circuito virtuale in X.25, Frame Relay e ATM, ecc.), gestita dal protocollo [[#ARP e RARP|ARP]].

![[Protocolli-instradamento-diretto-esempio.svg|center|600]]

**Instradamento indiretto**
1. L'host mittente identifica il **router più vicino** a cui inviare il datagramma, usando la sotto-rete fisica a cui è connesso (instradamento diretto).
2. Il router esamina il datagramma e decide verso quale altro router (**next-hop router**) indirizzarlo, nel cammino verso la rete logica di destinazione.
3. Il router usa un instradamento diretto per inoltrare il datagramma al router successivo, attraverso la sottorete a cui sono entrambi collegati (secondo i meccanismi di quella sottorete).
4. Il processo si ripete di router in router, finché il datagramma arriva a un router collegato alla stessa sotto-rete dell'host di destinazione, che glielo invia con un instradamento diretto.

L'instradamento indiretto è quindi una **successione di instradamenti diretti coordinata dai router**; i router non si occupano dell'instradamento all'interno delle sotto-reti.

![[Protocolli-instradamento-indiretto-esempio.svg|center|700]]
Gli indirizzi di **livello 3 non cambiano mai** durante il tragitto di un datagramma, mentre quelli di **livello 2** individuano gli apparati interessati alla trasmissione del pacchetto all'interno di una particolare sottorete.
Nell'ultima fase tra il router e il sistema finale c'è corrispondenza tra indirizzo fisico e logico, come nell'instradamento diretto: un instradamento indiretto si riduce ad un instradamento diretto per l'ultimo tratto.
#### Tabelle di instradamento
>[!important] Tabella di instradamento (routing)
>Il meccanismo operativo dell'instradamento IP si basa su una **tabella di instradamento** che ogni host/router mantiene per conoscere le possibili destinazioni e i modi per raggiungerle.
>Contiene le coppie $(N, R)$:
>- $N$ è l'indirizzo della **rete di destinazione**
>- $R$ è l'indirizzo IP del **prossimo router** (*next-hop router*) verso la rete di destinazione; solo nella rete di destinazione $R$ diventa l'indirizzo IP dell'**host** destinazione

La tabella specifica solo **un passo** lungo il cammino verso la destinazione: un router non conosce il cammino completo del datagramma ma solo il **passo successivo**. Quindi la tabella contiene indirizzi $R$ raggiungibili attraverso una **singola sottorete** (con un [[#Instradamento diretto e indiretto|instradamento diretto]]).

**Architettura logica di un router**
![[Protocolli-architettura-router.svg|center|420]]

>[!check] Esempio
>![[Protocolli-tabelle-routing-esempio.svg|center|700]]
>
>Ipotizziamo che le sottoreti fisiche coincidano con le reti logiche.
>**Tabella di instradamento di R2**
>
>| Per raggiungere host indirizzati alla rete (`Net_id`) | indirizzare i datagrammi verso questa strada o router (`Router_id`) |
>|:---:|:---:|
>| `20.0.0.0` | inoltrare direttamente |
>| `30.0.0.0` | inoltrare direttamente |
>| `10.0.0.0` | `20.0.0.5` |
>| `40.0.0.0` | `30.0.0.7` |
>
>R2 è collegato direttamente alle reti `20.0.0.0` e `30.0.0.0`; per le altre indica l'interfaccia del router vicino (R1 o R3) sulla rete che ha in comune con lui.

La dimensione della tabella di routing dipende dal **numero di reti logiche** interconnesse, ma **non dal numero degli host**.
Le tabelle contengono solo informazioni sulle reti logiche di destinazione ([[#Indirizzamento|Net-id]]) e non sui singoli host, al fine di:
- nascondere i dettagli interni della inter-rete
- mantenere **piccole** le tabelle di instradamento
- consentire un instradamento **efficiente**

#### Metriche del protocollo
Una tabella di routing può contenere anche una **metrica**, che definisce la **distanza dalla destinazione** espressa secondo varie unità di misura: distanza fisica, numero di sottoreti da attraversare o numero di salti (*hop*), costo del percorso in termini di affidabilità, tempo di attraversamento o integrità informativa, ecc.
La metrica può essere usata (opzionalmente) nel decidere l'instradamento, per soddisfare i requisiti dell'utente espressi nel campo [[#Formato dell'unità dati|Service Type]] del datagramma o per ottimizzare le decisioni degli algoritmi di routing.

>[!question] Metriche del protocollo e metriche amministrative
>
>- **Metrica del protocollo**: è il valore che il protocollo di routing **calcola da solo** per scegliere il percorso migliore tra quelli che conosce verso la stessa destinazione.
>- **Metrica amministrativa**: è un valore **fissato a mano dall'amministratore** di rete, che non riflette le caratteristiche tecniche del collegamento ma le sue **politiche**.
>
>In breve: la metrica del protocollo è **tecnica e automatica**, quella amministrativa è una **scelta di policy** dell'amministratore.


Il router sceglie il percorso che **minimizza il costo** (*percorso a costo minimo*) in base ad **algoritmi di routing**. Per determinarlo deve però avere informazioni sui costi dei percorsi alternativi nella rete di cui fa parte, e per acquisirle si usano i **protocolli di routing**.

>[!question] Protocolli e algoritmi
>- L'**algoritmo di routing** è il *calcolo*: a partire dai costi dei rami trova il percorso a costo minimo e quindi riempie la tabella di instradamento.
>- Il **protocollo di routing** è la *comunicazione*: definisce come i router si scambiano le informazioni sui costi dei percorsi, cioè i dati su cui l'algoritmo lavora.
>
>Prima il protocollo raccoglie le informazioni, poi l'algoritmo le usa per decidere.

>[!check] Esempio
>![[Protocolli-tabelle-routing-metrica.svg|center|700]]
>
>**Tabella di routing di G** (metrica = numero di hop)
>aggiungiamo quindi una colonna di metrica alla tabella di routing
>
>| Network Prefix | Next Hop | Metrica |
>|:---:|:---:|:---:|
>| `30.0.0.0/8` | Direct | 0 |
>| `20.0.0.0/8` | Direct | 0 |
>| `10.0.0.0/8` | `20.0.0.5` | 1 |
>| `40.0.0.0/8` | `30.0.0.7` | 1 |
>
>Le reti a cui G è collegato direttamente hanno metrica 0; per `10.0.0.0` e `40.0.0.0` bisogna passare per un altro router (F o H), quindi metrica 1.
#### Router di default
Se un router non trova un instradamento nella sua tabella, indirizza i datagrammi verso un **router di default** (generalmente una macchina più potente, destinata principalmente alle operazioni di instradamento).
Il meccanismo del router di default è usato:
- da **piccoli host**, che possono anche non avere una tabella propria e inviano al router di default tutti i datagrammi non diretti alla rete/sottorete logica a cui sono collegati
- da **router** con una tabella di discrete dimensioni, che però non copre tutte le possibili destinazioni

>[!important] Rotta di default
>Nella tabella di routing di un host/router deve essere presente una riga con $N =$ "tutte le altre" e $R =$ default router.

>[!check] Esempio
>![[Protocolli-routing-cisco-esempio.svg|center|700]]
>
>Tabella di routing del router B (router CISCO, comando `show ip route`):
>
>| Network Prefix | Metrica | Next Hop |
>|:---:|:---:|:---:|
>| `192.106.248.0/24` | | is directly connected |
>| `192.168.1.0/24` | | is directly connected |
>| `192.168.2.0/24` | | is directly connected |
>| `192.168.3.0/24` | | is directly connected |
>| `193.205.102.0/24` | `[120/1]` | via `192.168.1.2` |
>| `193.205.103.0/24` | `[120/1]` | via `192.168.2.2` |
>| `192.168.4.0/24` | `[120/1]` | via `192.168.3.2` |
>| `0.0.0.0 0.0.0.0` | `[1/0]` | via `192.106.248.24` |
>
>L'ultima riga è la **rotta di default**: con indirizzo e maschera `0.0.0.0` ("tutte le altre" destinazioni) i datagrammi vanno al router A (`.24`), che porta verso Internet.
#### Algoritmo di instradamento
L'algoritmo descrive cosa fa un nodo X quando riceve (o genera) un datagramma con indirizzo IP di destinazione $Y$. È teoricamente valido sia per **host** che per **router**, ma tra i due ci sono differenze: un host non contiene tutti i protocolli di un router e la sua tabella di routing è tipicamente **configurata dall'amministratore** di rete, non aggiornata dinamicamente come nei router.

**Router X: datagramma ricevuto**
1. Estrai l'indirizzo IP di destinazione $Y$ dal datagramma in arrivo.
2. Se nel campo **Source Route Option** è stata richiesta una strada specifica, invia il datagramma su quella strada (trascurando la tabella di routing).
3. Se $Y$ coincide con l'indirizzo di X, estrai il contenuto informativo e consegnalo agli strati superiori (vale anche per i datagrammi broadcast).
4. Decrementa il **Time to live**; se è arrivato a zero, scarta il datagramma e comunicalo all'host mittente (tramite **ICMP**).
5. Altrimenti determina la componente `Net_Id.Subnet_id` di $Y$ (usando la [[#Subnetting|maschera di sottorete]]).
6. Se `Net_Id.Subnet_id` coincide con quella di X, invia il datagramma con [[#Instradamento diretto e indiretto|instradamento diretto]]: traduci $Y$ nell'indirizzo locale e incapsula il datagramma nell'unità dati della sottorete (si considera anche la componente `SubHost_id`).
7. Altrimenti consulta la [[#Tabelle di instradamento|tabella di instradamento]]: se contiene `Net_Id.Subnet_id`, instrada il datagramma come indicato.
8. Altrimenti verifica se in tabella c'è almeno la componente `Net_id`; in tal caso instrada come indicato (se `Subnet_id` ha dimensione zero i passi 7 e 8 coincidono).
9. Altrimenti, se è specificata una strada di default, invia il datagramma al [[#Router di default|default router]].
10. Altrimenti dichiara un **errore di instradamento** (eventualmente invocando ICMP) e scarta il datagramma.

**Host X: datagramma ricevuto**
Si tende a evitare che un host rilanci datagrammi non diretti a sé stesso: se li riceve vuol dire che c'è stato un errore di instradamento, e se l'host vi pone rimedio diventa difficile per il gestore di rete individuare l'errore. L'algoritmo si semplifica così:
1. Estrai l'indirizzo IP di destinazione $Y$ dal datagramma in arrivo.
2. Se $Y$ coincide con l'indirizzo di X, estrai il contenuto informativo e consegnalo agli strati superiori.
3. Altrimenti dichiara un errore di instradamento e scarta il datagramma.

**Nodo X (host o router): datagramma generato da X**
1. Se nel campo Source Route Option è stata richiesta una strada specifica, invia il datagramma su quella strada.
2. Se $Y$ coincide con l'indirizzo di X, estrai il contenuto informativo e consegnalo agli strati superiori (può succedere in casi particolari, es. controllo).
3. Altrimenti determina la componente `Net_Id.Subnet_id` di $Y$ (usando la maschera di sottorete).
4. Se coincide con quella di X, invia il datagramma con instradamento diretto (traduci $Y$ nell'indirizzo locale e incapsula nell'unità dati della sottorete, considerando anche `SubHost_id`).
5. Altrimenti consulta la tabella di instradamento: se contiene `Net_Id.Subnet_id`, instrada come indicato.
6. Altrimenti verifica se in tabella c'è almeno `Net_id`; in tal caso instrada come indicato (se `Subnet_id` ha dimensione zero i passi 5 e 6 coincidono).
7. Altrimenti, se è specificata una strada di default, invia il datagramma al default router.
8. Altrimenti dichiara un errore di instradamento, notificandolo agli strati superiori di X, e scarta il datagramma.
#### Aggiornamento delle tabelle di routing
Le tabelle di routing possono essere costruite in modo **statico** o **dinamico**.
>[!multi-column]
>
>>[!important] Instradamento statico
>>Le tabelle sono **definite manualmente** dal gestore di rete e restano invariate fino al suo intervento successivo.
>>Si usano negli **host** e nei **router di piccole dimensioni**, in zone della inter-rete relativamente **stabili** (sia per configurazione fisica che per tipo e carico di traffico).
>>
>>Gli algoritmi di routing statici (**non adattativi**, deterministici) usano **criteri fissi** di instradamento:
>>- tra ogni coppia origine–destinazione si individua un **unico cammino permanente**
>>- l'instradamento cambia **solo se cambia la topologia** della rete
>>- la scelta del cammino è **indipendente dal carico** istantaneo sulla rete
>>
>>**Vantaggi**: semplicità implementativa.
>>**Svantaggi**: scarsa flessibilità.
>
>>[!important] Instradamento dinamico
>>Le tabelle sono **calcolate dinamicamente** in funzione della **topologia** della rete e dello **stato dei link**.
>>
>>Gli algoritmi di routing dinamici (**adattativi**, non deterministici) usano criteri adattativi: si adattano alle **variazioni di topologia e di traffico** in rete.
>>
>>**Vantaggi**: migliorano le prestazioni e contribuiscono al controllo della congestione.
>>**Svantaggi**:
>>- decisione di instradamento più complessa → aumenta il carico elaborativo nei router
>>- richiedono lo scambio di informazioni sullo stato della rete tra i nodi (algoritmi distribuiti): è traffico aggiuntivo, ma più informazioni si scambiano e più spesso, migliori sono le scelte di routing
>>- rischio di **oscillazioni** (reazioni troppo rapide) o di **inefficacia** (reazioni troppo lente)
>>- rischio di effetti collaterali (es. **loop**)
>>- parte della banda del canale viene usato per il mantenimento della topologia

I due tipi di instradamento possono convivere. Ad oggi l'instradamento statico ha senso solo in alcune porzioni di rete molto limitate

>[!check] Esempio (instradamento statico)
>![[Protocolli-instradamento-statico-esempio.svg|center|780]]
>
>Tabelle di instradamento statiche (per ogni rete di destinazione, il router a cui inoltrare; `-` = rete collegata direttamente):
>
>| Net | Router A | Router B | Router C | Router D | Router E | Router F | Router G | Router H | Host X |
>|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
>| 1 | D | - | - | B | D | H | B | C | - |
>| 2 | D | - | B | - | D | H | - | G | B |
>| 3 | D | G | - | G | - | H | - | - | B |
>| 4 | - | D | A | - | - | - | D | G | A |
>| 5 | F | G | H | F | H | - | H | - | A |


%%
**Instradamento dinamico**
All'accensione un host/router **inizializza** la sua tabella di routing con le informazioni contenute in una memoria di massa o interrogando opportuni server.
In seguito ogni router **aggiorna** o incrementa le informazioni di instradamento dialogando con gli altri router tramite i **protocolli di routing**, che sono implementati nei router e si occupano di:
- acquisire automaticamente nuove informazioni di instradamento (esaminando lo stato della rete a intervalli regolari)
- comunicare le informazioni aggiornate agli altri router, che aggiornano le tabelle di conseguenza

Le tabelle vanno aggiornate **continuamente** (anche a intervalli di pochi secondi), perché:
- Internet non è stabile: nuovi host e sottoreti vengono aggiunti ed eliminati di frequente, e molti percorsi diventano disponibili o no (in caso di guasti alcuni cammini non sono utilizzabili)
- lo stato di occupazione delle risorse di rete varia continuamente

>[!check] Esempio (instradamento dinamico)
>![[Protocolli-instradamento-dinamico-esempio.svg|center|600]]

I protocolli di routing sono usati dai router per determinare il percorso verso le reti **non direttamente connesse**; ne esistono diversi, ciascuno con caratteristiche più o meno vantaggiose.

![[Protocolli-routing-update.svg|center|650]]

%%
## ARP e RARP
>[!protocollo] ARP e RARP
>**ARP** (Address Resolution Protocol, RFC 826) e **RARP** (Reverse Address Resolution Protocol, RFC 903) sono protocolli di supporto a [[#IP]] che si occupano della **traduzione degli indirizzi**:
>- **ARP**: dato un [[#Indirizzo IP|indirizzo IP]] restituisce l'indirizzo fisico (di livello 2) associato
>- **RARP**: dato un indirizzo fisico restituisce l'indirizzo IP associato
>
>Sono usati sia dagli **host** che dai **router**.

### Perché serve una traduzione
Nel [[Modello TCP IP]] il [[Modello TCP IP#Livello di accesso alla rete (livello 1)|livello di accesso alla rete]] non è definito: chi realizza una rete è libero di usare qualunque tecnologia di livello 2.
Il protocollo IP ([[Modello TCP IP#Livello di rete (livello 2)|livello 2 TCP/IP]]) è invece il **linguaggio comune** di internet: si può connettere qualsiasi tipo di rete, a patto che in mezzo ci sia un router con le interfacce adatte.
L'obiettivo del livello rete è quindi far comunicare reti con tecnologie **eterogenee**, e la forza di internet sono proprio i protocolli di traduzione.

Ogni nodo della rete ha certamente un indirizzo IP, ma il livello di collegamento non capisce gli indirizzi IP. Gli indirizzi di livello 2 che contraddistinguono un sistema nell'ambito della sottorete dipendono dalla tecnologia:
- [[#Indirizzi MAC|indirizzi MAC]] nelle LAN (es. indirizzo Ethernet della scheda di rete)
- identificatori di [[Reti di telecomunicazioni#Circuito virtuale|circuito virtuale]] (X.25, Frame Relay, ATM)
- numero telefonico

>[!multi-column]
>
>>[!important] Indirizzo MAC
>>Legato alla scheda di rete: non cambia in qualunque posto venga usato il computer (struttura OUI + numero progressivo, vedi [[#Indirizzi MAC]]).
>
>>[!important] Indirizzo IP
>>Ha struttura **gerarchica** (parte rete, parte host) e natura **geografica**: deve cambiare quando l'host si sposta in un'altra rete.

Ogni tecnologia ha il suo indirizzo fisico e il suo modo di assegnarlo: gli indirizzi IP sono noti, mentre gli indirizzi fisici cambiano da rete a rete. Nasce quindi la necessità di **tradurre** indirizzi logici in indirizzi fisici e viceversa.

**Imbustamento di IP su LAN**
Quando un datagramma IP scende al livello 2 viene inserito nel campo dati della trama: il payload della [[Reti di telecomunicazioni#Informazioni utente e di controllo, PDU, SAP|PDU]] MAC è la PDU IP. L'header della trama contiene però gli indirizzi MAC di destinazione e sorgente, che il livello IP non conosce.
Se un flusso di dati attraversa $n$ reti diverse, a ogni hop il pacchetto IP viene decapsulato e incapsulato in una trama diversa ([[Reti di telecomunicazioni#Incapsulamento/decapsulamento|incapsulamento/decapsulamento]]).

![[Protocolli-ARP-imbustamento.svg|center|560]]

>[!question] Problema
>Conoscendo l'indirizzo IP del destinatario, come si ricava il suo indirizzo fisico nella sottorete?

La funzionalità di ARP e RARP è legata unicamente alla rete a cui è collegato il calcolatore: **ogni sottorete usa i suoi protocolli ARP/RARP**, perché le sottoreti sono potenzialmente tutte eterogenee.
ARP e RARP fanno da **cuscinetto** tra indirizzi IP e indirizzi fisici: nell'architettura vista a lezione sono collocati nello strato **3b**, tra IP (strato 3c) e le tecnologie di rete sottostanti.

### Mapping tra indirizzi
La traduzione può essere effettuata in maniera:
- **statica**
  ogni nodo contiene una tabella, inserita a mano, che associa a ogni indirizzo IP un indirizzo fisico. È un'operazione altamente inefficiente, soprattutto se la rete varia nel tempo
- **dinamica**
  la tabella viene costruita automaticamente tramite il protocollo ARP. Contiene indirizzo IP, indirizzo fisico e tempo di vita della voce (valore tipico 20 min)

Nel mapping dinamico bisogna distinguere il tipo di rete:
>[!multi-column]
>
>>[!protocollo] Broadcast ARP
>>Usato nelle reti [[Reti di telecomunicazioni#Topologia di rete|broadcast]] (LAN): si sfrutta la possibilità di inviare una trama **broadcast**, ascoltata da tutti i nodi. Se un nodo si guasta la rete continua a funzionare normalmente.
>
>>[!protocollo] ARP server
>>Usato nelle reti **non broadcast** (es. ATM): un server mantiene la tabella di associazione e viene interrogato ogni volta che serve risolvere un indirizzo. Il mapping è dinamico perché le macchine possono *registrarsi* presso il server.

>[!bug] Limiti dell'ARP server
>- l'indirizzo dell'ARP server deve essere noto a tutte le macchine della rete
>- se c'è un solo server e si guasta non si riesce più a risolvere nessun indirizzo (problema di **affidabilità**)
>- se ci sono più server nascono problemi di coordinamento tra di essi

### Broadcast ARP
Il nodo A vuole inviare un datagramma al nodo B, che appartiene alla stessa rete IP. A conosce il proprio indirizzo IP e fisico e l'indirizzo IP di B, ma **non l'indirizzo fisico di B**, che gli serve per imbustare la trama.
>[!protocollo] Funzionamento
>1. A invia in broadcast una **ARP request** che contiene il proprio indirizzo fisico e logico e l'indirizzo IP di B ("chi è l'host B?")
>2. tutti i nodi ascoltano la richiesta, ma solo B riconosce il proprio indirizzo IP e risponde ad A con una **ARP reply** che contiene il suo indirizzo fisico
>3. A ha ora tutti gli elementi per inviare a B una trama dedicata (non broadcast)

![[Protocolli-ARP-request-reply.svg|center|660]]

>[!important] ARP cache
>Al termine della procedura A e B annotano nella propria **ARP cache** la coppia indirizzo IP - indirizzo fisico dell'altro: da questo momento se B vuole parlare con A non deve rieseguire il protocollo. Prima di ogni comunicazione si consulta la cache e solo se l'indirizzo non c'è si invia una ARP request.

- Essendo la rete broadcast, **tutti** i nodi che vedono passare la request scoprono gli indirizzi del mittente e li annotano nella cache, anche se non sono interessati alla comunicazione; lo stesso vale per la reply e gli indirizzi di B. È sufficiente che ogni nodo abbia comunicato almeno una volta perché tutti abbiano la tabella completa.
- La cache è **volatile**: allo scadere di un timer la coppia viene eliminata e le richieste ripartono. Internet è altamente dinamica: lo stesso indirizzo IP può essere associato nel tempo a schede con indirizzi fisici diversi, quindi una voce vecchia potrebbe non essere più veritiera.

>[!bug] ARP funziona solo nella rete locale
>I router **non inoltrano** le trame broadcast di livello 2: se ogni ARP request venisse inoltrata, si genererebbe una valanga di richieste broadcast su tutte le reti. Per comunicare con un nodo di un'altra rete serve il [[#Proxy ARP]].

### Pacchetto ARP
![[Protocolli-ARP-pacchetto.svg|center|660]]

- **Hardware type** (2 byte)
  tipo di rete: a ogni LAN è associato un numero (Ethernet $= 1$)
- **Protocol type** (2 byte)
  protocollo di livello rete (IPv4 $=$ `0800` in esadecimale)
- **Hardware size** (1 byte)
  lunghezza in byte dell'indirizzo fisico (Ethernet $= 6$). Serve perché tecnologie eterogenee hanno indirizzi fisici di lunghezza diversa
- **Protocol size** (1 byte)
  lunghezza in byte dell'indirizzo IP (IPv4 $= 4$)
- **Operation** (2 byte)
  distingue ARP request ($1$) da ARP reply ($2$)
- **Indirizzo fisico del mittente** (6 byte per Ethernet)
- **Indirizzo IP del mittente** (4 byte per IPv4)
- **Indirizzo fisico del destinatario**
  **vuoto** nelle ARP request, perché è proprio l'informazione cercata
- **Indirizzo IP del destinatario** (4 byte per IPv4)

**Incapsulamento**
ARP **non** si appoggia su IP: il pacchetto ARP viene inserito direttamente nel campo dati della trama di livello 2 (header | pacchetto ARP | FCS), e l'header della trama indica che il contenuto è un pacchetto ARP (campo type, vedi [[#802.3 vs Ethernet]]).
- Nella ARP request la trama è inviata all'indirizzo di **broadcast** di livello 2 (tipicamente tutti 1), perché deve essere elaborata da tutte le macchine. La richiesta contiene gli indirizzi di livello 2 e 3 del mittente, così chi risponde sa a chi inviare la reply.
- Nella ARP reply vengono riempiti **tutti** i campi; in particolare compare l'indirizzo di livello 2 di chi risponde, cioè l'informazione richiesta.

### Come decide l'host
Come fa A a sapere se B è nella propria sottorete? Attraverso la **netmask**.
>[!important] ARP: ricapitolando
>L'host esegue un **AND logico** tra l'indirizzo IP della destinazione e la propria netmask:
>- se il risultato è l'indirizzo della propria sottorete, invia una ARP request per risolvere l'indirizzo della destinazione
>- altrimenti il pacchetto va inviato al **router di default**: se il suo indirizzo MAC non è noto, l'host invia una ARP request per risolvere l'indirizzo IP del router

### Proxy ARP
Se un host della rete 1 vuole comunicare con un host della rete 2 (di cui conosce l'indirizzo IP), la ARP request non riceve risposta, perché il router non la inoltra.
Soluzioni:
1. **proxy ARP**: il router che interconnette le due reti è configurato per rispondere alle ARP request per gli host della rete 2. L'host sorgente salva nella cache la corrispondenza tra l'IP dell'host remoto e l'indirizzo fisico del router
2. l'host sorgente si accorge (tramite la [[#Come decide l'host|netmask]]) che la destinazione è su una rete remota e invia il messaggio all'indirizzo locale di default, cioè il router; in questo caso il router non deve conoscere già la corrispondenza, ma può inviare a sua volta una ARP request nella rete 2

>[!protocollo] Proxy ARP
>L'host A non sa che B si trova su una rete remota e invia una ARP request come se B fosse nella sua sottorete. Il router R intercetta la richiesta e risponde al posto di B con il **proprio indirizzo fisico**: R "fa credere" ad A di essere il destinatario e poi inoltra il datagramma verso B (usando a sua volta ARP).
>Il router ha 2 indirizzi IP, 2 indirizzi MAC (due adattatori) e 2 moduli ARP.

![[Protocolli-proxy-ARP.svg|center|600]]

### RARP
RARP esegue la procedura inversa: associa un indirizzo IP a un indirizzo fisico. È usato all'**accensione** dai sistemi che conoscono l'indirizzo fisico della propria interfaccia ma non il proprio indirizzo IP:
- sistemi senza disco rigido, che non possono "ricordare" il loro indirizzo IP (il boot avviene da una ROM con le informazioni minime installate dal produttore e l'immagine del sistema operativo viene scaricata da un file server remoto)
- sistemi a cui non è stato assegnato un indirizzo IP e che si connettono a internet tramite un ISP

>[!protocollo] Funzionamento
>1. l'host (che deve avere un client RARP) invia una **RARP request** contenente il proprio indirizzo fisico, con indirizzo di destinazione tutti 1 (*limited broadcast*)
>2. un **server RARP**, che deve essere presente nella sottorete, cerca il mapping nel suo file di configurazione e risponde con una **RARP reply** in **unicast** contenente l'indirizzo IP dell'host

Il **pacchetto RARP** è uguale al [[#Pacchetto ARP]], con le differenze:
- **Operation**: RARP request ($3$), RARP reply ($4$)
- **indirizzo IP del mittente** e **indirizzo IP del destinatario** sono vuoti nelle RARP request

>[!question] Osservazione
>Oggi RARP non si usa più: se una scheda di rete non conosce il proprio indirizzo IP lo richiede a un **server DHCP**. Il problema è quindi risolto a livello applicativo.

### ARP spoofing
ARP è vitale per il funzionamento di internet ed è quindi un bersaglio per gli attaccanti.
>[!bug] Debolezze di ARP
>- la tabella ARP viene aggiornata a ogni ARP reply ricevuta
>- le richieste non vengono tracciate
>- gli annunci ARP non sono autenticati
>- le macchine si fidano l'una dell'altra
>
>Una macchina "canaglia" (*rogue*) può quindi fingersi un'altra macchina (**spoofing**).

**Attacco**: la macchina malevola invia, senza che ci sia stata una richiesta, una ARP reply che associa il **proprio** indirizzo fisico all'indirizzo IP della vittima. Chi la riceve aggiorna la cache e da quel momento invia all'attaccante i pacchetti destinati alla vittima (**intercettazione**). In una rete broadcast la reply falsa viene memorizzata da tutti i nodi.

**Poisoned ARP cache (man in the middle)**
*es.* l'attaccante `192.168.1.106` (MAC `00:11:22:33:44:03`) avvelena le cache di due host:
- invia a `192.168.1.1` (MAC `00:11:22:33:44:01`) il messaggio "`192.168.1.105` is at `00:11:22:33:44:03`"
- invia a `192.168.1.105` (MAC `00:11:22:33:44:02`) il messaggio "`192.168.1.1` is at `00:11:22:33:44:03`"

Nelle cache dei due host l'indirizzo IP dell'altro è ora associato al MAC dell'attaccante: tutti i dati scambiati passano per l'attaccante, che si trova nel mezzo della comunicazione.

![[Protocolli-ARP-poisoning.svg|center|540]]

>[!important] Contromisure
>- **voci statiche** nella cache: risolvono il problema, ma sono quasi impossibili da gestire
>- controllo delle **occorrenze multiple dello stesso MAC** (un MAC associato a più indirizzi IP, come nell'esempio)
>- **software di rilevamento**: Anti-arpspoof, Xarp, Arpwatch
# Livello trasporto (livello 4)
Equivalente TCP/IP: [[Modello TCP IP#Livello di trasporto (livello 3)|livello di trasporto]]
Teoria del livello: [[Modello ISO OSI#Livello trasporto (livello 4)]]

## TCP
>[!protocollo] TCP
>Protocollo di trasporto orientato alla connessione

## UDP
>[!protocollo] UDP
>Protocollo di trasporto non orientato alla connessione
[[Modello TCP IP#Livello di trasporto (livello 3)|Internet checksum]] (calcolo e verifica del campo checksum UDP)
