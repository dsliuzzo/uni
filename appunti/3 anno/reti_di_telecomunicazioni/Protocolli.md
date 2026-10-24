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
>[!protocollo] IP
>Il protocollo utilizzato è l'Internet Protocol (IP), il quale provvede a instradare i dati attraverso reti multiple collegate in cascata. In pratica, si assicura di trovare il percorso giusto per trasferire informazioni tra sistemi terminali che appartengono a reti diverse.
### Indirizzo IP
[...]
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
