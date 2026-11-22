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
- [[Modello TCP IP#Indirizzamento|rete]]
- [[Modello ISO OSI#Framing|logici]]
- [[#Indirizzi MAC|fisici]]

Ogni dispositivo sulla LAN è identificato da un **indirizzo MAC**, utile a discriminare i dispositivi fisicamente collegati sulla stessa rete.
L'indirizzo MAC è associato alla scheda di rete utilizzata (a livello firmware, sono memorizzate nella ROM dell'adattatore della scheda).
È composto da 6 coppie di valori esadecimali, per un totale di 48 bit ed è suddiviso in due parti principali
- 3 coppie che rappresentano il produttore della scheda (Organization Unique Identifier - OUI)
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
Indirizzamento, instradamento e sistemi autonomi: [[Modello TCP IP#Livello di rete (livello 2)|Modello TCP/IP]]
## IPv4
%% sistema ipv4 %%
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
## IGP (protocolli di routing)
Teoria dell'instradamento, sistemi autonomi e IGP/EGP: [[Modello TCP IP#Instradamento|instradamento]], [[Modello TCP IP#Sistemi autonomi|sistemi autonomi]].

>[!important] Cos'è un IGP
>**IGP** (*Interior Gateway Protocol*) non è un singolo protocollo ma una **categoria**: raggruppa tutti i protocolli di routing usati **all'interno di un [[Modello TCP IP#Sistemi autonomi|sistema autonomo]]** (AS) per costruire le tabelle di instradamento dei router. Quelli che instradano **tra** AS diversi si chiamano invece EGP (es. BGP).
>
>RIP, OSPF, ecc. sono quindi **esempi di IGP**, alternativi tra loro: l'amministratore dell'AS sceglie quale usare (anche più di uno) per i suoi router interni, non si usano tutti insieme.

Per capire i protocolli di routing è fondamentale capire gli algoritmi che questi utilizzano:
- [[Algoritmi#Dijkstra - albero dei cammini minimi a partire da un nodo|Dijkstra]]
- [[Algoritmi#Bellman-Ford|Bellman-Ford]]

### Dijkstra vs Bellman-Ford
- I due algoritmi convergono (in condizioni statiche di topologia e costi dei link) alla **stessa soluzione**
- Bellman-Ford nel caso peggiore è più complesso ($O(|V|^3)$ contro $O(|V|^2)$ di Dijkstra), ma in molti casi pratici i due algoritmi si equivalgono
- [[Algoritmi#Dijkstra - albero dei cammini minimi a partire da un nodo|Dijkstra]] richiede che un nodo conosca l'**intera topologia** della rete e il peso di tutti i rami $\to$ necessità di colloquio tra tutti i nodi
- [[Algoritmi#Bellman-Ford|Bellman-Ford]] richiede la conoscenza dello stato dei rami uscenti da un nodo insieme alle informazioni provenienti dai **nodi vicini** $\to$ necessità di colloquio solo tra nodi adiacenti (implementazione distribuita)

Per Dijkstra i nodi devono inviare messaggi a tutti gli altri nodi della rete: il pacchetto (di tipo link state) deve arrivare a tutti, altrimenti l'informazione non viene presa in considerazione da tutti i nodi. Ogni pacchetto deve arrivare a tutti gli altri, e questo per ogni nodo: il numero di pacchetti diventa **quadratico** sul numero dei nodi.
Bellman-Ford invece permette la comunicazione con i soli nodi adiacenti: si presta ad una implementazione **distribuita e dinamica**, per questo è associato al **distance vector**, mentre Dijkstra ha bisogno di una centralizzazione dei dati (link state).

### Classificazione dei protocolli di routing
Ogni protocollo **IGP** determina le tabelle di instradamento con un proprio algoritmo, ognuno con i suoi pro e contro. Sono **alternative** (un AS ne sceglie uno), raggruppate in due famiglie, [[#Link state|link state]] e [[#Distance vector|distance vector]] (vedi tabella più sotto):
- **link state**: **OSPF**, basato sull'algoritmo **SPF** (*Shortest Path First*, cioè Dijkstra)
- **distance vector**: **RIP** (per mitigare l'infinite hop count RIP v2 usa lo [[#Dijkstra vs Bellman-Ford|split horizon]]), **GGP**, IGRP, EIGRP
- altri citati a lezione: **SPREAD**

>[!question] Osservazione
>**HELLO** non è un'alternativa agli altri: sono i pacchetti usati sia dal link state che dal distance vector per scambiare informazioni con i vicini e mantenere aggiornata la tabella dei vicini. Quando la rete parte i nodi si fanno conoscere ai propri vicini.

**Informazione globale o decentralizzata?**
>[!multi-column]
>
>>[!important] Globale
>>- tutti i router hanno la topologia completa (e consistente) e le informazioni sul costo dei link
>>- algoritmi **link state** (es. [[Algoritmi#Dijkstra - albero dei cammini minimi a partire da un nodo|Dijkstra]])
>>
>>Ogni nodo crea un pacchetto con le informazioni sullo stato che vede. Il prima possibile tutti i nodi devono conoscere la conformazione della rete.
>
>>[!important] Decentralizzata
>>- il router conosce i vicini fisicamente connessi e il costo dei link verso di loro
>>- processo di calcolo **iterativo**, con scambio di informazioni con i vicini
>>- algoritmi **distance vector** (es. [[Algoritmi#Bellman-Ford|Bellman-Ford]])
>>
>>Non abbiamo fretta di far conoscere le informazioni a tutti i nodi: il pacchetto distance vector viene inviato allo scadere di un **timer di aggiornamento** e solo ai vicini.

>[!check] Esempio
>Con un timer di 30 s per ogni nodo, per raggiungere un nodo a 4 hop servono 2 minuti ($4 \times 30$ s).
>Il tempo di aggiornamento va gestito in modo che i tempi siano coerenti con la dinamica della rete.

**Statico o dinamico?**
>[!multi-column]
>
>>[!important] Statico
>>Le rotte cambiano lentamente nel tempo ([[Modello TCP IP#Instradamento statico|instradamento statico]]).
>
>>[!important] Dinamico
>>Le rotte cambiano più rapidamente ([[Modello TCP IP#Instradamento dinamico|instradamento dinamico]]):
>>- aggiornamento periodico
>>- in risposta a variazioni del costo dei link

La maggior parte dei protocolli IGP si basa su due filosofie di routing:

| Distance vector                        | Link state                       |
| -------------------------------------- | -------------------------------- |
| si basa sull'algoritmo di Bellman-Ford | si basa sull'algoritmo di Dijkstra |
| più semplice                           | molto più complesso              |
| impegna meno risorse sul router        | impegna più risorse              |
| meno efficiente                        | molto più efficiente             |
| adatto a reti **piccole**              | adatto a reti **grandi**         |

**Protocolli di routing**

|                              | Algoritmo      | Protocollo            |
| ---------------------------- | -------------- | --------------------- |
| Link state                   | Dijkstra (SPF) | **OSPF**              |
| Distance vector tradizionale | Bellman-Ford   | GGP, **RIP**, IGRP (Cisco) |
| Distance vector avanzato     | DUAL           | EIGRP (Cisco)         |
#### Distance vector
I protocolli di classe **Distance Vector** utilizzano l'algoritmo di [[Algoritmi#Bellman-Ford|Bellman-Ford]] in versione **distribuita**: tutti i nodi della rete possono eseguire in modo sincrono ogni iterazione dell'algoritmo calcolando i propri costi del cammino e inviando dati ai nodi vicini.
La procedura terminerebbe al raggiungimento di $N$ iterazioni, ma l'algoritmo viene rilanciato su base periodica o al verificarsi di un determinato evento per implementare degli aggiornamenti della rete.

La condizione di sincronia tra tutti i nodi è difficilmente raggiungibile, di conseguenza i protocolli distance vector implementano una versione asincrona di Bellman-Ford:
ogni nodo esegue in modo asincrono il calcolo
$$
L(n) = \min_{j \in N(s)} [L(j) + w(j,n)]
$$
usando l'ultima stima di $L(j)$ ricevuta dai nodi adiacenti.
L’algoritmo distribuito converge a soluzione se la dinamica delle variazioni è più lenta della velocità di convergenza dell'algoritmo.

>[!question] Osservazione
>Se la rete ha dimensioni elevate si crea un **loop fittizio** (vedi gli effetti collaterali dell'[[Modello TCP IP#Instradamento dinamico|instradamento dinamico]]): è come se l'algoritmo lavorasse su dati che non rappresentano davvero la rete. La rete a una certa distanza potrebbe essere già cambiata, ma l'informazione deve ancora arrivare (infinite hop count). **Alcune stelle che vediamo potrebbero essere già diventate buchi neri.**
>Per questo Bellman-Ford si usa in reti non troppo grandi, mentre la famiglia dei protocolli link state può lavorare su reti più grandi. Ci sono delle modifiche ai distance vector che rendono meno grave questo comportamento.
>Oltre al loop fittizio c'è la **bad news propagation**: le notizie peggiori (es. un link che cade) arrivano in ritardo.

>[!question] Approfondimento
>Una delle modifiche è lo **split horizon** (usato da RIP v2): un router **non annuncia** a un vicino le rotte che ha imparato proprio da quel vicino. Così due router non si rimandano a vicenda una rotta ormai non valida, aumentandone il costo a ogni scambio fino a "infinito" (conteggio all'infinito).

>[!question] Osservazione
>- Nell'implementazione distribuita un nodo che conosce solo un grafo **parziale** ha comunque un costo ottimale rispetto a ciò che conosce, e lo aggiorna man mano che arrivano informazioni dai vicini.
>- Un nodo vede solo ciò che gli dicono i vicini, quindi **non percepisce direttamente i cambiamenti** della rete; con il link state invece ogni variazione viene diffusa a tutti i nodi.

Ogni router mantiene, oltre alla tabella di instradamento, una struttura dati, detta distance vector, per ogni sua linea attiva. Il distance vector contiene informazioni ricavate dalle tabelle di instradamento dei router collegati all'altro estremo della linea. Il distance vector è un insieme di coppie \[indirizzo-distanza], la distanza è espressa tramite metriche classiche, quali numero di hop e costo.
Il calcolo delle tabelle di routing avviene tramite la fusione (merge) di tutti i distance vector associati alle linee attive di un router.

Tutte le volte che un router modifica la sua tabella di routing, la invia ai router adiacenti (cioè direttamente connessi alla stessa rete) sotto forma di pacchetto distance vector.

Ciascun router apprende tramite un protocollo di neighbor greetings le informazioni relative ai nodi adiacenti: invio di pacchetti di HELLO su base periodica. Gli intervalli sono più ridotti rispetto agli intervalli di invio di pacchetti distance vector.

Quando un router memorizza un distance vector nella sua struttura dati locale, verifica se sono presenti variazioni rispetto al distance vector precedentemente memorizzato: in caso affermativo ricalcola le tabelle di instradamento fondendo tutti i distance vector delle linee attive.
I pacchetti che arrivano senza variazioni servono solo al **mantenimento** della rete, quindi l'algoritmo viene riapplicato **solo se il nuovo distance vector contiene cambiamenti**. Questo non influisce sull'invio: i pacchetti distance vector vengono comunque inviati periodicamente, anche se poi chi li riceve può non rieseguire l'algoritmo.

![[Protocolli-distance-vector-schema.svg|center]]

Il protocollo DV prevede che il router operi così:
1. quando riceve un messaggio (distance vector) da un router adiacente, confronta ogni coppia (destinazione, costo) con il contenuto della sua tabella di routing e:
	- se la destinazione **non è in tabella**, crea una nuova entry per la nuova destinazione
	- se la destinazione è in tabella e il **next hop è il router adiacente** che ha fatto l'annuncio, aggiorna il costo ed il next hop nella entry
	- se la destinazione è in tabella e il costo indica un **percorso migliore**, aggiorna il costo e il next hop nella entry
2. ad intervalli regolari trasmette ai router adiacenti un messaggio (distance vector) che riporta tutte le coppie (destinazione, costo) contenute nella tabella di routing

>[!question] Osservazione
>Non serve mantenere il percorso completo verso ogni destinazione: bastano **destinazione, next hop e costo**. Il distance vector ha una riga per ogni rete della configurazione (vettore $L_x$ qui sotto), quindi cresce con il numero di destinazioni e non con il numero di hop dei cammini.

##### Notazioni
Ogni nodo $x$ mantiene al suo interno tre vettori:
$$
W_x = \begin{bmatrix} w(x,1) \\ \vdots \\ w(x,M) \end{bmatrix}
\qquad
L_x = \begin{bmatrix} L(x,1) \\ \vdots \\ L(x,N) \end{bmatrix}
\qquad
R_x = \begin{bmatrix} R(x,1) \\ \vdots \\ R(x,N) \end{bmatrix}
$$
- $W_x$: **vettore dei costi** uscenti dal nodo
- $L_x$: **vettore delle distanze** minime verso le altre reti
- $R_x$: **vettore next hop** verso le altre reti

dove:
- $M$: numero di reti a cui il nodo $x$ è direttamente connesso
- $w(x,i)$: costo associato al ramo uscente dal nodo $x$ verso la rete $i$ ($1 \le i \le M$)
- $N$: numero di reti nella configurazione
- $L(x,j)$: stima della lunghezza del cammino minimo dal nodo $x$ alla rete $j$ (**distance vector**)
- $R(x,j)$: next-hop router nel cammino a minima lunghezza dal nodo $x$ alla rete $j$

##### Algoritmo
- Ogni nodo applica l'algoritmo di [[Algoritmi#Bellman-Ford|Bellman-Ford]] in modo distribuito
- Periodicamente (circa **30 s**) ogni nodo scambia il suo distance vector $L_x$ con quelli dei nodi vicini
- Sulla base delle informazioni contenute in tutti i distance vector ricevuti, il nodo $x$ aggiorna i suoi vettori così:
$$
L(x,j) = \min_{y \in A} [L(y,j) + w(x, N_{xy})] \qquad R(x,j) = y
$$
dove $A$ è l'insieme dei nodi vicini al nodo $x$ e $N_{xy}$ è la rete che interconnette i nodi $x$ e $y$ ($y$ è il vicino che realizza il minimo).
#### Link state
Un protocollo di tipo **Link State** (LS) assume che ogni router disponga della **mappa completa della rete**, su cui calcola gli instradamenti ottimali con l'algoritmo di [[Algoritmi#Dijkstra|Dijkstra]].
- La mappa della rete è costruita direttamente dai router tramite i **Link State Packet** (LSP).
- Quando un router si attiva, determina il costo dei link su ciascuna delle sue interfacce di rete.
- Ogni router, tramite protocolli di **neighbor greetings**, apprende la propria situazione locale (indirizzi delle sottoreti connesse e dei router direttamente raggiungibili, cioè dei nodi adiacenti).
	- Come nel distance vector: se per un po' non ricevo gli HELLO di un vicino, lo considero perso e aggiorno la tabella. Il numero di HELLO mancati necessario a rimuovere un vicino è configurabile.
- Le informazioni di adiacenza sono incluse in un LSP che viene inviato a **tutti gli altri router** della rete.

Il LSP generato da ogni router contiene:
- identificativo del router che emette il LSP
- stato di ogni link connesso al router
- identità di ogni vicino connesso all'altro estremo del link
- costo del link
- **numero di sequenza** del LSP, che serve a distinguere le diverse versioni emesse dallo stesso router e scegliere la più recente: se circola un LSP con numero di sequenza precedente a uno già accettato, lo si scarta perché contiene informazioni vecchie.

Ogni router contiene un **LSP database** in cui memorizza il LSP più recente generato da ogni router; da questo database ogni router si costruisce una mappa della rete con i costi associati, cioè la topologia su cui applicare Dijkstra. La condizione per avviare Dijkstra è aver ottenuto le informazioni di tutti i nodi.

Il LSP database (la mappa logica della rete) **non è ancora la tabella di instradamento**, ma è un'informazione necessaria e sufficiente perché un router la calcoli:
- ogni router calcola la sua tabella di instradamento **indipendentemente** dagli altri, applicando alla mappa l'algoritmo di Dijkstra (o **SPF**, *Shortest Path First*), che trasforma una rete (grafo) in una rete ad **albero** scegliendo i percorsi a costo più basso, con radice nel router che applica l'algoritmo;
- da questo albero si estraggono, per ogni destinazione, il **next hop** e il **costo totale** del percorso.

>[!check] Esempio: LSP database
>>[!multi-column]
>>
>>>[!blank]
>>>![[Protocolli-link-state-grafo.svg|center|260]]
>>
>>>[!blank]
>>>| Router | LSP |
>>>|---|---|
>>>| A | B/2 |
>>>| B | A/2 D/3 E/2 |
>>>| C | D/1 |
>>>| D | B/3 C/1 G/1 |
>>>| E | B/2 F/5 G/2 |
>>>| F | E/5 H/4 |
>>>| G | D/1 E/2 H/1 |
>>>| H | F/4 G/1 |
>
>Ogni riga è il LSP di un router (vicino/costo). Il database è **replicato su ogni router**: non è riferito al singolo nodo sorgente, è la mappa dell'intera rete, uguale per tutti; ciò che cambia da router a router è l'albero che ognuno ci calcola sopra.

>[!check] Esempio: tabella di routing di B
>>[!multi-column]
>>
>>>[!blank]
>>>![[Protocolli-link-state-albero-B.svg|center|260]]
>>
>>>[!blank]
>>>| Destinazione | Linea |
>>>|---|---|
>>>| A | L1 |
>>>| C | L2 |
>>>| D | L2 |
>>>| E | L3 |
>>>| F | L3 |
>>>| G | L3 |
>>>| H | L3 |
>
>In rosso l'albero dei cammini minimi con radice in B; $L_1, L_2, L_3$ sono le linee di B verso A, D ed E.

>[!question] Osservazione
>Differenza con il distance vector: lì i router **cooperano per calcolare le tabelle** di instradamento; qui cooperano per **mantenere aggiornata la mappa** della rete, poi ognuno calcola la propria tabella in modo autonomo.

- In caso di variazioni significative sullo stato dei link, il router invia un **nuovo LSP** in rete. Quindi c'è l'invio periodico come nel distance vector, ma anche un invio **triggerato** da certe condizioni (es. cambiamento significativo di una metrica, interruzione di un collegamento).
- Un aspetto critico è la **sincronizzazione** tra i router: se i router hanno LSP database diversi, sono possibili dei **loop**.

##### Operazione di un router
>[!important] Flooding
>Il **flooding** ("inondazione") è una tecnica di diffusione in cui un nodo, ricevuto un pacchetto, lo **ritrasmette su tutti i suoi link** (tranne quello da cui è arrivato). Così il pacchetto raggiunge **tutti i nodi della rete** senza bisogno di tabelle di instradamento. Per evitare che circoli all'infinito, ogni nodo inoltra solo i pacchetti che non ha già visto (es. LSP con numero di sequenza nuovo).

- Il LSP è trasmesso in **flooding** su tutti i link del router.
- Il flooding è pensato per assicurare la diffusione più rapida possibile delle variazioni di topologia.

![[Protocolli-link-state-operazione-router.svg|center]]

Il flooding è **selettivo**, non cieco: il LSP viene ritrasmesso su tutte le interfacce **tranne quella da cui è arrivato** (es. A riceve da D, non c'è bisogno di rimandarlo a D).

![[Protocolli-flooding.svg|center]]

Nel passo 2 A sta solo **inoltrando** il LSP di D, non le sue informazioni: poi A creerà il suo LSP che verrà a sua volta inviato a tutti. Ogni router deve ricevere almeno un LSP per ogni nodo della rete: il meccanismo è molto più oneroso, ma tipicamente **converge prima**.

#### Distance vector vs Link state
>[!multi-column]
>
>>[!important] Distance vector
>>- ogni router invia le informazioni di routing ai **router adiacenti**
>>- l'informazione trasmessa è una **stima** del costo verso tutte le reti
>>- l'informazione è trasmessa su **base periodica** regolare
>>- un router determina il next hop con l'algoritmo di **Bellman-Ford distribuito** sulle stime dei costi ricevute
>
>>[!important] Link state
>>- ogni router invia le informazioni di routing a **tutti gli altri router**
>>- l'informazione trasmessa è il **valore esatto** del costo dei link verso le reti adiacenti
>>- l'informazione è trasmessa **quando avviene un cambiamento**
>>- un router costruisce prima una descrizione della **topologia** della rete e poi usa un algoritmo di routing qualsiasi per calcolare il next hop (tipicamente **Dijkstra**)

## IPv6
>[!protocollo] IPv6
>**IPv6** (*Internet Protocol version 6*, RFC 2460) è la nuova versione del protocollo [[#IPv4|IP]]: ha uno spazio di indirizzamento molto più grande (indirizzi di **128 bit** invece di 32), un'intestazione fissa di 40 byte estendibile con degli *extension header* e supporta in modo nativo autoconfigurazione, sicurezza e mobilità.

### Perché un nuovo protocollo
Un indirizzo IPv4 è composto da 4 byte, quindi si possono gestire al massimo $2^{32}$ indirizzi pubblici. Gli indirizzi di [[Modello TCP IP#Classi di indirizzi IP|classe]] A e B sono pochi e difficili da gestire (parte host troppo grande), quelli di classe C a volte hanno una parte host troppo piccola: tra classe C e classe B c'è un salto molto grande (da 254 a circa 65.000 host).
La IANA ha praticamente esaurito gli indirizzi di classe C e di classe B.

Già alla fine degli anni '80 si iniziava a pensare a IPv6 per il timore di esaurire gli indirizzi; negli anni '90 si arriva alla decisione di implementarlo.
Nel frattempo sono nate delle tecniche che permettono di mitigare il problema, come il [[Modello TCP IP#Indirizzi privati|NAT]]: con la coppia indirizzo-porta un solo indirizzo IPv4 pubblico può servire circa 65.000 host.

Il problema della scarsità degli indirizzi è stato quindi risolto a prescindere, ma è rimasta l'esigenza di un protocollo più performante: IPv6, nato come protocollo "di emergenza", è diventato il nuovo standard, con uno spazio di indirizzamento molto più grande (indirizzi di **128 bit**) che vuole risolvere il problema alla radice.

IPv4 è nato prima di internet come la conosciamo oggi: è disordinato, ha un header di lunghezza variabile, campi di cui non è chiaro il ruolo (es. non si sa se il time to live si misura in hop o in tempo) e non è stato pensato per la sicurezza. IPv6 invece, essendo stato pensato dopo, nasce con i requisiti chiari.

>[!important] Caratteristiche
>Avendo 128 bit di indirizzo:
>- reale **connettività globale**
>- non più reti o host nascosti (non servono gli indirizzi privati)
>- tutti gli host possono essere raggiungibili e quindi fare da "server" (es. il peer-to-peer diventa molto più agevole)
>- è possibile usare sistemi di sicurezza punto-punto

>[!check] Vantaggi
>1. **Pulito**, con intestazione limitata al necessario, e con uno **spazio di indirizzamento immenso** $\implies$ non c'è bisogno di nascondere gli indirizzi, ogni host può avere un indirizzo pubblico. Si possono anche stabilire **connessioni cifrate** tra due nodi (con IPv4 si può, ma con più difficoltà: IPv6 lo supporta in modo nativo).
>2. **Autoconfigurazione**: in IPv4 un PC collegato a un cavo LAN va configurato (indirizzo, maschera, server DHCP…). Con IPv6 si fa **plug and play**: senza inserire alcun dato il nodo può comunicare subito con tutti i nodi della sua rete, per poi passare all'interlocuzione con il router, che gli dà le informazioni per terminare l'autoconfigurazione (indirizzo globale).
>	- **Multihoming**: un dispositivo può connettersi attraverso reti diverse, con indirizzamenti diversi (es. azienda con sedi diverse)
>	- **Renumbering**: se si vuole cambiare il piano di indirizzamento (es. da 2 a 3 subnet), in IPv4 bisogna ridefinire maschere, blocchi ecc.; in IPv6 esistono procedure automatiche in cui i router si accordano tra loro (per questo gli operatori usano IPv6 nel core)
>3. **Intestazione efficiente ed estensibile**:
>	- meno campi e dimensione fissa $\implies$ efficienza di routing (si alleggerisce il lavoro dei router) e migliori prestazioni
>	- all'occorrenza si possono aggiungere delle [[#Extension header|estensioni]], solo quando servono
>	- non è possibile **frammentare** i pacchetti in transito: l'esigenza ci potrebbe essere, ma prima di stabilire un flusso si individua il collo di bottiglia ($\min_i MTU_i$) e ad origine i pacchetti sono dimensionati su quella MTU. Si appesantisce il lavoro di mittente e destinatario ma si sollevano i router dall'onere di frammentare, ed è eliminato il problema della perdita di un singolo frammento
>4. Maggiore utilizzo del **multicast**, che sostituisce il broadcast
>5. **Mobilità** dei nodi: in IPv4, se un host si sposta in un'altra rete, il suo vecchio indirizzo non lo raggiunge più (il routing è geografico); grazie alle estensioni di header ([[#Routing (43)|routing]] e [[#Destination options (60)|destination options]]) in IPv6 un nodo mantiene il suo indirizzo ovunque si trovi (Mobile IPv6)
>6. Uso più **efficiente** della rete

>[!warning] Problemi
>È impensabile sostituire da un giorno all'altro tutti gli apparati con apparati che supportano IPv6: infatti **IPv4** è ancora immensamente utilizzato (vedi [[#Convivenza con IPv4|convivenza con IPv4]]).

>[!check] Esempio (renumbering)
>L'Unical ha un indirizzo di classe B, `160.97.x.y`, partizionato in tante subnet: ad esempio al DIMES sono assegnate le sottoreti da `160.97.24` a `160.97.29`, usate per la rete wireless, del personale, dei laboratori, dei server. Se si volesse cambiare questa numerazione con IPv4 bisognerebbe riconfigurare tutto a mano (o quasi), con IPv6 le procedure di renumbering lo fanno in automatico.

### Convivenza con IPv4
Il problema fondamentale: in periferia, quando si implementa una LAN, si usa ancora IPv4 (è più facile da gestire, le macchine e gli apparati sono sempre stati IPv4). Pensare di switchare da un giorno all'altro non poteva avere successo: le aziende (o un ente come l'Unical) avrebbero dovuto investire troppi soldi per sostituire tutti gli apparati. Inoltre con il NAT l'esigenza di cambiare è diventata meno pressante.

Nel tempo quindi IPv4 e IPv6 **convivono pacificamente**:
- in periferia (le "foglie" della rete) è rimasto IPv4
- IPv6 si sta diffondendo nel **core** della rete, ad esempio nelle reti degli operatori che interconnettono centrali e server farm

Come ultimo step nella trasmissione delle informazioni si passa da IPv6 a IPv4 per raggiungere le foglie della rete (gli operatori portano la connettività ai clienti in IPv4).

### Formato dell'header
Rispetto a [[#Formato dell'unità dati|IPv4]] **IHL, identification, flag, fragment offset e header checksum non sono più presenti** in IPv6: non servono più perché l'header ha lunghezza fissa e i router non frammentano.
L'header IPv6 è di **40 byte** (senza le extension header).
![[Protocolli-IPv6-header.svg|center|620]]
- **Version** (4 bit)
  vale 6, distingue IPv4 da IPv6: a un dispositivo basta leggere i primi bit del pacchetto per capire come gestirlo
- **Traffic class** (8 bit)
  esigenze relative alla qualità del servizio, identifica la priorità del pacchetto (simile al TOS di IPv4): es. traffico urgente o traffico che non deve perdere dati. Possibili applicazioni:
  - differenziare il traffico immesso nella rete di un ISP da un suo cliente
  - l'ISP può modificare questo campo per tutti i pacchetti in uscita verso altre reti, per assegnare una classe di servizio concordata con altri ISP
- **Flow label** (20 bit)
  identifica un flusso (es. di un'applicazione): permette di riconoscere i pacchetti che appartengono a uno stesso flusso, per distinguerli o metterli assieme. Serve a supportare la qualità del servizio (servizi integrati/differenziati), mentre IPv4 non garantisce nulla: es. un router può far passare prima un flusso urgente e ritardare quelli senza esigenze temporali.
- **Payload length** (16 bit)
  è il total length di IPv4, ma conta solo i dati: non abbiamo bisogno di sapere quanto è lungo l'header, è fisso. Misura pacchetti al massimo di 64 KB; con l'opzione **jumbo payload** (vedi [[#Hop-by-hop options (00)|hop-by-hop]]) il pacchetto può essere ben più grande
- **Next header** (8 bit)
  puntatore alla prossima estensione dell'header, se presente; le estensioni possono essere più di una e si puntano a cascata. Se dopo c'è un protocollo di livello superiore, i valori sono compatibili con quelli del campo protocol di IPv4
- **Hop limit** (8 bit)
  è il time to live di IPv4: definisce quanti salti può fare il pacchetto prima di considerarlo non più consegnabile (e scartarlo)
- **Source address** (128 bit = 16 byte)
- **Destination address** (128 bit = 16 byte)

### Extension header
Il payload di IPv6 trasporta i segmenti TCP o UDP che arrivano dall'alto. Senza estensioni, nel campo next header c'è un codice che fa capire che subito dopo ci sono i dati (es. next header = TCP).
Le extension header sono il nuovo modo di implementare le opzioni: si aggiungono dopo l'header di base. Quando si aggiunge un'estensione viene indicata nel campo next header dell'header principale (non c'è scritto "routing", ma il codice che lo identifica); a sua volta l'estensione ha un suo campo next header che dice cosa c'è dopo.
Le estensioni possono essere zero, una o più di una: se sono più di una sono **concatenate** (*daisy chain*).

```
[IPv6 header | NH = TCP]     [TCP header + dati]
[IPv6 header | NH = Routing] [Routing header | NH = TCP] [TCP header + dati]
[IPv6 header | NH = Routing] [Routing header | NH = ESP] [ESP header | NH = TCP] [TCP header + dati]
```

Identificativi delle estensioni (next header):

| Codice | Header |
|---|---|
| 00 | Hop-by-hop options |
| 43 | Routing |
| 44 | Fragment |
| 51 | Authentication |
| 60 | Destination options |
| 50 | Encapsulating security payload |
| 58 | ICMPv6 |
| 59 | nessun next header |
| xx | protocolli di livello più alto, come per IPv4 |

#### Hop-by-hop options (00)
C'è bisogno di spedire informazioni che devono essere lette **da ogni nodo** lungo il percorso del pacchetto. Opzioni usate:
- **router alert**: mandare un avviso a tutti i router del cammino
- **jumbo payload**: spedire pacchetti più grandi di quelli previsti dallo standard, lo si fa sapere a tutti i router del percorso
#### Routing (43)
- Simile all'opzione **loose source route** di IPv4 (vedi le options di [[#Formato dell'unità dati|IPv4]])
- Indica una lista di router che devono essere obbligatoriamente attraversati prima di arrivare a destinazione
- L'header è valutato solo dai router specificati: ognuno di questi aggiorna la destinazione del pacchetto con l'indirizzo IPv6 del prossimo router della lista (migliora le prestazioni rispetto a IPv4)
- È usato per la mobilità (**Mobile IPv6**) e il **multihoming**: un nodo può mantenere il suo indirizzo a prescindere da dove si trovi

>[!check] Esempio (mobilità)
>Il prof ha un indirizzo dell'Unical e va per un periodo in Cina. Se il suo interlocutore sa in quale rete si trova, scrive nel routing header "prima di arrivare all'Unical passa da questo router": il pacchetto va prima lì, il router sa che il nodo è in mobilità ed è registrato lì, quindi non lo rimanda all'Unical ma lo consegna al vecchio indirizzo. (Il meccanismo reale è più complesso.)
#### Fragment (44)
Usato **soltanto dall'host mittente per l'host destinatario**: i router non frammentano più.
Se si incontra un collo di bottiglia (una MTU più piccola) IPv4 frammenta e va avanti; in IPv6 invece il router blocca il pacchetto, lo scarta e rinvia indietro un messaggio di errore che descrive il collo di bottiglia. Il mittente quindi frammenta il pacchetto e rispedisce i frammenti.
Se i frammenti incontrano un altro collo di bottiglia vengono scartati e il processo si ripete, fino a quando i frammenti riescono ad arrivare a destinazione.

IPv6 prevede:
- una **MTU minima di 1280 byte** (68 byte in IPv4): i link senza questa capacità devono gestire frammentazione e riassemblaggio a livello data-link
- che ogni nodo implementi una procedura di **Path MTU Discovery** (non strettamente necessario)
- per inviare pacchetti più grandi della massima MTU consentita si usano i fragment header
#### Destination options (60)
Trasporta informazioni opzionali che saranno valutate **solo dal destinatario** e non dai nodi intermedi.
Usato per supportare la mobilità (Mobile IPv6): se il mittente sapesse che mi trovo in una posizione diversa metterebbe un routing header verso la nuova destinazione, ma per saperlo lo devo informare. Gli invio quindi un pacchetto con questa estensione, al cui interno inserisco l'indirizzo da usare nel routing header, in modo da far andare il pacchetto verso la nuova destinazione. Insieme al routing header risolve il problema del routing "triangolare".
Può occupare 2 posizioni nella daisy chain: prima del routing header (elaborata dai router specificati) o alla fine (elaborata solo dalla destinazione), vedi [[#Ordine delle estensioni|ordine]].
#### Authentication (51) e ESP (50)
Supporto nativo alla sicurezza. Tutte le implementazioni di IPv6 *dovrebbero* garantire il supporto alla sicurezza, in realtà non è così.
- **Authentication header** (51)
  fornisce l'autenticazione: consente di verificare che l'indirizzo del mittente sia autentico e che il pacchetto non sia stato alterato durante il percorso. Il destinatario ha la certezza di ricevere i dati da chi dichiara di averli spediti
- **Encapsulating security payload** (ESP, 50)
  consente di cifrare le informazioni scambiate tra mittente e destinatario: definiti un algoritmo e una chiave di cifratura, solo il destinatario autorizzato sarà in grado di leggere il pacchetto, chi lo intercetta no. Come in IPv4 ha due modalità: **transport** o **tunnel** (es. collegare due reti remote con un tunnel totalmente cifrato)

>[!question] Osservazione
>Negli anni passati c'era una forte opposizione alla diffusione di IPv6, soprattutto da parte degli Stati Uniti, per motivi di sicurezza nazionale: se chiunque può cifrare il traffico in modo nativo, le agenzie (es. NSA) non riescono più a intercettare le informazioni.
#### Ordine delle estensioni
La concatenazione delle estensioni avviene (dovrebbe avvenire) in questo ordine:

| Header | Chi lo elabora |
|---|---|
| IPv6 | |
| Hop by hop | ogni nodo |
| Destination | ogni router specificato nel routing header |
| Routing | specifica la lista di router da attraversare |
| Fragmentation | nodo destinazione |
| Authentication | nodo destinazione (dopo il riassemblaggio) |
| Security (ESP) | cifra il contenuto di tutto ciò che segue |
| Destination | solo il nodo destinazione |
| Upper layer | payload vero e proprio (TCP, UDP, …) |

Quindi un pacchetto IPv6 ha sempre l'intestazione fissa di 40 byte, poi le estensioni solo se servono, altrimenti si passa direttamente al payload.

### Indirizzi IPv6
IPv4 = 32 bit, IPv6 = 128 bit: non 4 volte il numero di indirizzi, ma **4 volte il numero di bit**.
- $2^{128} \approx 3{,}4 \cdot 10^{38}$ nodi indirizzabili (massimo teorico)
- $10^{30}$ indirizzi per ogni persona del pianeta
- in realtà, con la stessa efficienza di assegnazione della rete IPv4, avremmo circa $10^{33}$ indirizzi IPv6
#### Notazione
`X:X:X:X:X:X:X:X`: 8 campi da 16 bit in notazione esadecimale, divisi da `:`.
- non è case sensitive: `2001:0000:1234:0000:0000:00D0:ABCD:0532` = `2001:0000:1234:0000:0000:00D0:abcd:0532`
- gli 0 a sinistra di ogni campo si possono omettere (un campo `0000` diventa `0`): `2001:0:1234:0:0:D0:ABCD:532`
- campi consecutivi di soli 0 si possono omettere lasciando solo `::` (in mezzo ci sono campi di soli 0, quanti ne servono per arrivare a 8 campi): `2001:0:1234::D0:ABCD:532`
- `::` si può usare **solo una volta**, altrimenti non si sa quanti zeri ci sono in ciascun punto: `2001::1234::C1C0:ABCD:876` non è valido

```
2001:760:2:0:0:0:0:0 => 2001:760:2::
FF02:0:0:0:0:0:0:1   => FF02::1
0:0:0:0:0:0:0:1      => ::1
0:0:0:0:0:0:0:0      => ::
```

Gli indirizzi IPv6 negli URL devono essere scritti tra **parentesi quadre** (se non è tra parentesi quadre è un indirizzo IPv4):
`http://[2001:1:4F3A::206:AE14]:8888/index.html`
I programmi che usano gli URL (browser ecc.) sono stati modificati, ma è scomodo per gli utenti: si usa soprattutto per scopi diagnostici. Come in IPv4 è più comodo usare il nome di dominio (DNS).
#### Tipologie di indirizzi
- **Unicast**: indirizzi di nodi, identificano un'interfaccia
- **Multicast**: indirizzi di gruppi di nodi
- **Anycast**: indirizzi di servizi (novità rispetto a IPv4), un servizio che può rispondere da diverse parti: più nodi possono offrire lo stesso servizio e alla richiesta risponde quello più conveniente

>[!check] Esempio (anycast)
>Il servizio DNS è offerto da tanti server sparsi per il mondo: un server vicino e uno in Canada darebbero la stessa risposta, ma conviene rivolgersi a quello più vicino (tempi più brevi, meno strada). Se la richiesta è inviata a un indirizzo anycast invece che a un server specifico, arriva al server più comodo.
#### Architettura degli indirizzi
Il tipo di indirizzo si riconosce dal prefisso (da calcolare sui primi 16 bit, es. `2000`–`3FFF` $\to$ `0010 0000 0000 0000` – `0011 1111 1111 1111`: prefisso `001`).

| Prefisso | Hex | Size | Allocazione |
|---|---|---|---|
| 0000 0000 | 0000–00FF | 1/256 | Reserved |
| 0000 0001 | 0100–01FF | 1/256 | Unassigned |
| 0000 001 | 0200–03FF | 1/128 | NSAP |
| 0000 010 | 0400–05FF | 1/128 | Unassigned |
| 0000 011 | 0600–07FF | 1/128 | Unassigned |
| 0000 1 | 0800–0FFF | 1/32 | Unassigned |
| 0001 | 1000–1FFF | 1/16 | Unassigned |
| **001** | **2000–3FFF** | 1/8 | **Aggregatable**: IANA to registries |
| 010, 011, 100, 101, 110 | 4000–CFFF | 5/8 | Unassigned |
| 1110 | D000–EFFF | 1/16 | Unassigned |
| 1111 0 | F000–F7FF | 1/32 | Unassigned |
| 1111 10 | F800–FBFF | 1/64 | Unassigned |
| 1111 110 | FC00–FDFF | 1/128 | Unassigned |
| 1111 1110 0 | FE00–FE7F | 1/512 | Unassigned |
| **1111 1110 10** | **FE80–FEBF** | 1/1024 | **Link-local** |
| **1111 1110 11** | **FEC0–FEFF** | 1/1024 | **Site-local** |
| **1111 1111** | **FF00–FFFF** | 1/256 | **Multicast** |

La maggior parte dello spazio è ancora non assegnata.
#### Indirizzi unicast
Gli indirizzi unicast sono associati a un'interfaccia:
- **Unspecified**
  `0:0:0:0:0:0:0:0` o semplicemente `::`, indica l'assenza di indirizzo: si usa quando non si conosce il proprio indirizzo e si riempie il campo mittente di zeri. Può essere usato nella richiesta iniziale DHCP per ottenere il mio indirizzo e nella Duplicate Address Detection (DAD). Come `0.0.0.0` in IPv4 (`::/0` indica la rotta di default)
- **Loopback**
  `0:0:0:0:0:0:0:1` o semplicemente `::1`, identifica il nodo stesso: è il localhost di IPv4 (`127.0.0.1`). Per controllare se lo stack IPv6 funziona: `ping6 ::1`
- **IPv4 compatible**
  la coesistenza tra IPv4 e IPv6 non è scontata (es. se devo inviare un pacchetto da un nodo IPv4 a un nodo IPv6, che indirizzi scrivo?), per gestirla nascono degli indirizzi speciali. Permettono di inserire indirizzi IPv4 in indirizzi IPv6: i primi **96 bit sono a 0**, negli ultimi 32 si appende l'indirizzo IPv4. Utilizzati per la transizione IPv4-IPv6
  `0:0:0:0:0:0:192.168.0.1` = `::192.168.0.1` (in esadecimale `::C0A8:1`)
- **IPv4 mapped**
  permettono di definire indirizzi IPv6 per nodi che supportano **solo IPv4**: i primi **80 bit sono a 0**, i successivi **16 a 1** (`FFFF`), gli ultimi 32 sono l'indirizzo IPv4. Anche questi per la transizione IPv4-IPv6
  `0:0:0:0:0:FFFF:192.168.0.1` = `::FFFF:192.168.0.1` (in esadecimale `::FFFF:C0A8:1`)
- **Indirizzi scoped**: link-local e site-local, con range d'azione limitato al link o al site (vedi [[#Link-local e site-local|sotto]])
- **Aggregatable global**: gli indirizzi globali, i veri indirizzi pubblici visibili da qualunque parte

>[!question] Osservazione
>Nelle slide 37 e 38 la forma esadecimale di `192.168.0.1` è scritta `C0A8:1E01`, ma `1E01` corrisponde a `30.1` (`0x1E` = 30): `192.168.0.1` in esadecimale è `C0A8:0001`, quindi `::C0A8:1` e `::FFFF:C0A8:1`.
#### Subnet prefix e host identifier
Un indirizzo unicast IPv6 si compone di due parti:

| Subnet prefix (64 bit) | Host identifier (64 bit) |
|---|---|
| `XXXX:XXXX:XXXX:XXXX` | `XXXX:XXXX:XXXX:XXXX` |

Mentre in IPv4 net id e host id hanno lunghezze diverse (classi, CIDR), qui la separazione è **fissa e netta**: 128 bit divisi esattamente in due parti uguali.
Il subnet prefix (net id) deve essere assegnato da qualcuno: assegnare un indirizzo pubblico a un'organizzazione significa assegnarle solo questa parte. La parte host id invece (come in IPv4) è lasciata alla libertà di chi gestisce il nodo, e può essere scelta:
- manualmente
- a partire dal MAC address dell'interfaccia, ricalcolato per essere usato come parte host (**EUI-64**)

**Formato EUI-64**
L'interface ID identifica univocamente un'interfaccia (deve essere univoco su un link) e può essere ricavato dall'identificatore **EUI-64**, evoluzione del [[#Indirizzi MAC|MAC address]]: identifica produttore e numero di serie di un'apparecchiatura, ma con 64 bit invece di 48.
Esiste una procedura per passare dall'EUI-48 (MAC address) all'EUI-64: si divide il MAC address nei due set da 24 bit (produttore e seriale) e in mezzo si inserisce la sequenza `FF-FE` (`11111111 11111110`, una serie di 1 conclusa da uno 0). Per ottenere l'interface ID si complementa poi il bit **U/L** (7° bit del primo byte).
```
IEEE 802 Address   cccccc00 cccccccc cccccccc xxxxxxxx xxxxxxxx xxxxxxxx
EUI-64 Address     cccccc00 cccccccc cccccccc 11111111 11111110 xxxxxxxx xxxxxxxx xxxxxxxx
Interface ID       cccccc1c cccccccc cccccccc 11111111 11111110 xxxxxxxx xxxxxxxx xxxxxxxx
```

>[!check] Esempio
>MAC address: `00-AA-00-3F-2A-1C`
>EUI-64: `00-AA-00-FF-FE-3F-2A-1C`
>complementando U/L: `02-AA-00-FF-FE-3F-2A-1C`
>in notazione IPv6: `02AA:00FF:FE3F:2A1C`

**Privacy**
Così però l'interface ID resta sempre lo stesso (anche se il prefisso cambia nel tempo) e l'indirizzo IPv6 permette di **tracciare** un utente: il problema c'era già con gli indirizzi IPv4 statici, ma il MAC address è più associabile alla persona.
Inoltre se faccio viaggiare in internet un indirizzo che contiene l'indirizzo fisico della mia macchina sto comunicando un'informazione che può essere usata contro di me: chi volesse fingersi me potrebbe costruire pacchetti con il mio indirizzo come mittente (**spoofing**).
Questa ipotesi è stata quindi abbandonata quasi subito: oggi l'host id si scrive comunque prendendo il MAC dell'interfaccia, ma **rielaborandolo** con un algoritmo che ne costruisce una variazione abbastanza casuale (RFC 3041: stringa pseudocasuale di 64 bit, il cui seed è un'elaborazione dell'indirizzo MAC).
Non è più garantita l'univocità, ma la probabilità che nello stesso link (stesso prefisso) due macchine generino lo stesso host id è praticamente pari a 0.
#### Link-local e site-local
Il net id si usa anche per definire link e site:
- un **link** è una rete fisica unica, ad esempio una LAN (anche VLAN o WLAN) o un collegamento punto-punto; i nodi sullo stesso link sono detti **neighbor** (vicini)
- un **site** è un gruppo di link gestiti da un'unica autorità, es. il campus di un'università (parallelo IPv4: site = rete/AS, link = sottoreti del site, es. Unical = site e le LAN dei dipartimenti = link)

Si chiamano **scoped address** (novità di IPv6) perché hanno un raggio d'azione diverso: il link è più piccolo del site.

>[!multi-column]
>
>>[!important] Link-local
>>- scope = link locale (LAN, VLAN)
>>- esiste e ha senso solo ed esclusivamente dentro quel link, non può essere instradato fuori (alternativa agli indirizzi privati di IPv4)
>>- configurato **automaticamente** su ogni interfaccia, usando l'interface identifier
>>- fornisce ad ogni nodo un indirizzo IPv6 per iniziare le comunicazioni
>>
>>`FE80:0:0:0:<interface id>`
>>
>>| 10 bit | 54 bit | 64 bit |
>>|---|---|---|
>>| `1111111010` | 0 | interface ID |
>
>>[!important] Site-local
>>- scope = site (una rete di link)
>>- usato solo fra nodi dello stesso site, non fuori (es. Internet): molto simile agli indirizzi privati IPv4
>>- **non** configurato di default
>>- permette un piano di indirizzamento per un intero sito: es. numerare un site prima di connetterlo a Internet, indirizzamento privato (stampanti locali)
>>
>>`FEC0:0:0:<subnet id>:<interface id>`
>>
>>| 10 bit | 38 bit | 16 bit | 64 bit |
>>|---|---|---|---|
>>| `1111111011` | 0 | subnet ID | interface ID |
>>
>>subnet id = 16 bit = 64K subnet

Un nodo in un link genera da sé la parte host id e, dato che il prefisso link-local è fisso, si costruisce il suo indirizzo link-local: a quel punto può comunicare con tutti i nodi della sua LAN. Per questo con IPv6 è facile l'uso **plug and play** della rete. Ogni interfaccia ha il suo indirizzo (es. un PC con bluetooth, Wi-Fi, 5G e NFC si genera 4 indirizzi).

>[!check] Esempio
>`fe80::7f:5ee1:5788:ee3d` (indirizzo link-local del PC di Claudia): prefisso `fe80::/64` e interface ID `007f:5ee1:5788:ee3d`. Non contiene `FF-FE`, quindi non è un EUI-64 ricavato dal MAC ma un identificativo pseudocasuale.

Con l'indirizzo link-local il nodo può poi parlare con l'interfaccia del router che sta sulla sua rete (se la LAN è collegata a internet) e farsi dare il prefisso globale (vedi l'indirizzo multicast *all routers*, [[#Multicast|sotto]]).
Allo stesso modo, conoscendo il subnet ID del site, con l'indirizzo site-local posso comunicare con tutti i nodi del site; con il link-local solo con quelli del mio link.

>[!attention] AGGIUNTA
>Gli indirizzi site-local (`FEC0::/10`) sono stati in seguito deprecati (RFC 3879) e sostituiti dagli *unique local address* `FC00::/7`. Non è nelle slide.

Site-local e link-local sono quindi indirizzi privati che lavorano a livello di site o di link. Se voglio uscire dal site devo passare agli indirizzi **aggregatable global**.
#### Aggregatable global
Sono gli indirizzi con validità globale, assegnati dalla IANA (come in IPv4, la IANA distribuisce gli indirizzi ai registri). La politica di assegnazione è ancora in discussione, al momento è usata una policy provvisoria:
- **/23** Regional Registries (RIR)
- **/32** Local Internet Registries
- **/48** Site $\to$ $2^{16}$ = 65536 subnet per site
- **/64** Link

![[Protocolli-IPv6-allocazione.svg|center|600]]

>[!check] Esempio (Italia)
>La IANA gestisce `2001::/16`; RIPE NCC (il RIR europeo) ha ottenuto 4 blocchi /23: `2001:0600::/23`, `2001:0800::/23`, `2001:0A00::/23`, `2001:1400::/23`.
>Il GARR (il consorzio che gestisce la connettività di università e centri di ricerca italiani) ha ricevuto da RIPE NCC il blocco `2001:0760::/32` e lo ripartisce con prefissi /48 tra i consorziati (es. CASPUR, Roma Tre, l'Unical). Ogni università usa i 16 bit da 48 a 64 per indirizzare le sue subnet, gli ultimi 64 sono dell'host.
#### Multicast
Multicast = uno a tanti, ha la stessa semantica del multicast di IPv4, cambia il formato.
**IPv6 non prevede l'indirizzo broadcast**: al suo posto si usano gli indirizzi multicast, soprattutto nei link locali. Gli scoped address sostituiscono il TTL di IPv4 (limitano fin dove arriva il pacchetto).

`FF<flags><scope>::<group id>`

| 8 bit | 4 bit | 4 bit | 112 bit |
|---|---|---|---|
| `11111111` (FF) | flag | scope | group ID |

- **flag**: 0 permanente / 1 temporaneo
- **scope**: node (1), link (2), site (5), organization (8), global (E)
- **group ID**: identifica un gruppo multicast in un dato scope

>[!check] Esempio (group ID All-Nodes = 1)
>- `FF01::1`: tutte le interfacce sullo stesso nodo
>- `FF02::1`: tutte le interfacce sullo stesso link
>- `FF05::1`: tutte le interfacce sullo stesso site
>- `FF0E::1`: tutte le interfacce su internet $\to$ semantica di broadcast totale. Nella pratica è **disabilitato** (i router lo bloccano) per evitare attacchi DoS: una macchina qualsiasi potrebbe inviare pacchetti a tutto il mondo. È come il `255.255.255.255` di IPv4, disabilitato anche lì.

Alcuni indirizzi multicast riservati:

| Indirizzo | Scope | Tipo |
|---|---|---|
| `FF01::1` | node | All Nodes |
| `FF02::1` | link | All Nodes |
| `FF01::2` | node | All Routers |
| `FF02::2` | link | All Routers |
| `FF05::2` | site | All Routers |
| `FF02::1:FFXX:XXXX` | link | Solicited-Node |

Quando un nodo vuole comunicare con tutti i router del suo link (es. per conoscere il prefisso globale) invia a `FF02::2` e gli risponderà uno dei router; per tutti i router del site usa `FF05::2`.
#### Anycast
- Non sono distinguibili dagli indirizzi unicast: sono indirizzi unicast assegnati a un insieme di interfacce (normalmente di nodi diversi)
- Ai nodi deve essere detto esplicitamente che gli si sta assegnando un indirizzo anycast
- Indicano il server più vicino a un mittente: il pacchetto si ferma al primo server (es. DNS) che incontra
- Alcuni indirizzi anycast sono riservati per usi specifici: router subnet, Mobile IPv6 home-agent discovery
#### Indirizzi di un host
Un host può possedere più indirizzi IPv6. Deve riconoscere come propri:
- un indirizzo link-local per ogni interfaccia
- gli indirizzi unicast/anycast assegnati (manualmente o automaticamente), almeno un unicast globale che lo identifica nella rete
- l'indirizzo di loopback
- l'indirizzo del gruppo multicast All-Nodes
- gli indirizzi Solicited-node multicast per ogni indirizzo unicast/anycast assegnato
- gli indirizzi multicast di tutti gli altri gruppi di cui fa parte (se opportunamente configurato)

Questi indirizzi sono ripetuti per ognuna delle sue interfacce, perché ognuna appartiene a un link (e quindi a un site): il nodo deve saper processare tutti i pacchetti che arrivano a uno qualsiasi di questi indirizzi.
#### Selezione dell'indirizzo
Un nodo può usare vari prefissi di rete, quindi può avere più indirizzi IPv6 sulla stessa interfaccia (anche più indirizzi globali). Quale usa come sorgente e destinazione di un flusso? La scelta si fa principalmente con queste regole:
- **usare lo scope giusto** in base alla destinazione (il più piccolo possibile): se il destinatario è sul mio link uso il link-local, se è nel mio site il site-local, se è in un altro site il globale
- **usare l'indirizzo più simile a quello di destinazione** (IPv4 o IPv6): se il destinatario è un nodo solo IPv4 si cerca di usare IPv4; se non si può, IPv6 con indirizzi IPv4 compatibili, e viceversa

L'algoritmo di scelta può essere sovrascritto dallo stack o dall'applicazione. Tutto questo lo gestisce lo stack protocollare del nodo (hardware e software), che implementa entrambi gli stack IPv4 e IPv6 o uno solo dei due.
## ARP e RARP
>[!protocollo] ARP e RARP
>**ARP** (Address Resolution Protocol, RFC 826) e **RARP** (Reverse Address Resolution Protocol, RFC 903) sono protocolli di supporto a [[#IPv4|IP]] che si occupano della **traduzione degli indirizzi**:
>- **ARP**: dato un [[Modello TCP IP#Indirizzamento|indirizzo IP]] restituisce l'indirizzo fisico (di livello 2) associato
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
