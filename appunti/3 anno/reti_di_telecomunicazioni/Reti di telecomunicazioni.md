1. funzionamento di internet
2. protocolli per la comunicazione
3. architetture di rete (TCP/IP)
4. tecnologie di comunicazione e di rete
5. modi di interpretare e gestire l'informazione

esame
prova scritta e orale
la scritta è cambiata l'anno scorso e sarà come l'anno scorso


Le prime reti eterogenee sono state collegate tramite protocolli che permettono di astrarre il concetto di interconnessione tra reti.
Anche le tecnologie nate dopo si sono adattate ai protocolli già definiti.

# Introduzione
## Modalità di trasferimento
### commutazione di circuito
Prima di mandare l'informazioni la richiesta raggiunge il destinatario e ripercorrendo la stessa strada le risorse vengono riservate (rete telefonica).
in questo modo le prestazioni sono garantite, ma è necessario un setup di chiamata, che se non va a buon fine non può essere stabilita la connessione

``` mermaid
flowchart LR
	s(sorgente - end device) <--> id1(disp. intermedio)
	id1 -.- id2(.)
	id1 <--> id3(.)
	id2 -.- id4(.)
	id3 <--> id4(.)
	id4 <--> d(destinatario - end device)
```

### commutazione di pacchetto
L'informazione viene suddivisa in pacchetti, che prendono dei percorsi indipendenti (internet).
L'ordine di arrivo non è necessariamente quello di invio, viene ricostruito all'arrivo.
Il principale vantaggio è che se un nodo della rete non funziona correttamente, contrariamente alla commutazione di circuito, non è necessario ristabilire la connessione da 0 (fault tolerance - paradigma dinamico per motivi bellici).
Ogni pacchetto contiene informazioni aggiuntive per garantire la dinamicità della rete.
[...] <-- *fai schema con pacchetti che prendono direzioni diverse*

I canali che i pacchetti attraversano non sono dedicati in modo univoco ad un determinato flusso di informazione, ma possono essere messi in condivisione con chiunque altro abbia bisogno di una connessione. Questo è un grande vantaggio da un punto di vista economico: molti utenti utilizzano la stessa infrastruttura di rete.

>[!important] multiplexing
>Più flussi (anche da diverse sorgerti) sullo stesso canale.
>Il canale di comunicazione (di vario tipo) permette di trasmettere una certa quantità di bit al secondo. La risorsa che passa dal canale può essere spezzettata, in modo da poter inviare informazioni da vari flussi:
>- Frequency division
>- Time division
>- Wavelength division
>- Code division

![[Reti di telecomunicazioni-1790519782217.webp|center|377]]


I pacchetti possono avere velocità di trasmissioni diverse e possono sfruttare tutta la risorsa del canale o solo una parte e passare da canali eterogenei. In base al mezzo non tutte le forme d'onda vengono trasmesse --> cambia quindi anche il **data rate** (quantità di bit al secondo che il canale può trasportare).
Non dedicando le risorse a specifici flussi ci sono dei problemi:
- **contesa per le risorse**
  immettendo sulla rete una quantità di dati eccessivi, potrebbe superare la quantità di dati che può mantenere il canale di trasmissione
- **congestione**
  I pacchetti non accodati vengono persi

--> **store and forward** - meccanismo di accodamento e instradamento
Ogni nodo intermedio (insieme di nodi intermedi) è un sistema dotato di più code in grado di mantenere i pacchetti prima di inviarli al nodo successivo.


Con $L$ grandezza in bit dei pacchetti ed $R$ velocità di trasmissione

>[!multi-column]
>
>>[!important] Transmission delay
>>Tempo impiegato ad immettere un pacchetto sul canale ($\neq$ tempo impiegato a raggiungere un altro nodo). Può essere trovato come $\frac{L}{R}$
>
>>[!important] Store and forward
>>L'intero pacchetto deve arrivare prima di essere ritrasmesso al canale successivo.
>
>>[!important] End-end-delay
>>Tempo necessario dalla sorgente alla destinazione, può essere calcolato come $\frac{2L}{R}$

## Reti di accesso
>[!multi-column]
>
>>[!blank]
>>![[Reti di telecomunicazioni-1790519859068.webp|400]]
>
>>[!blank]
>>L'accesso alla rete è organizzata in una **gerarchia** e sui vari livelli avremo nodi di tipo diverso.
>>La suddivisione gerarchica è di livello logico, ma anche fisico: i nodi di accesso hanno hardware diverso dai core, che devono gestire il traffico di moltissime reti di accesso.
>>Si ha quindi una differenza di costi e compiti, portando anche a rapporti gerarchici tra le aziende che offrono i servizi di connessione alla rete.


## Canali di comunicazione
### Collegamento punto-punto
>[!multi-column]
>
>>[!blank]
>>Il collegamento può essere diretto e su livelli diversi
>>- 2 end device paritari
>>- end device e server
>>- comunicazione con alta direttività (la direzione delle onde elettromagnetiche non viaggiano in tutte le direzioni, ma solo verso il destinatario)
>
>>[!blank]
>>![[Reti di telecomunicazioni-1790520068059.webp|center|400]]
### Connessione punto a multipunto
Il segnale generato da un punto viene ricevuto da più punti, ma non in tutte le direzioni
### Canale broadcast
I satelliti hanno delle antenne che garantiscono un determinato cono di apertura che dipende anche dalla distanza dalla terra.
## Modalità di trasmissione
La scelta del canale potrebbe influire sulla scelta dei protocolli utilizzati
### Simplex
La comunicazione è supportata solo in una direzione
``` mermaid
flowchart LR
	S(Server) --> M(Monitor)
```
### Half-duplex
In entrambe le direzioni, ma in momenti diversi
``` mermaid
flowchart LR
	M1(Workstation) --> M2(Workstation)
	M2 --> M1
```
### Full-duplex
Consente sia di trasmettere che di ricevere nello stesso momento
``` mermaid
flowchart LR
	M1(Workstation) <--> M2(Workstation)
```

## Topologia di rete

>[!important] Rete di telecomunicazione
>Un insieme di **nodi** e **canali** che fornisce un collegamento tra due o più punti per permettere la telecomunicazione (comunicazione a distanza) tra essi.

>[!multi-column]
>
>>[!important] Nodo
>>Punto della rete in cui può avvenire la **commutazione** (processo per cui una sottoparte di informazione viene inviato in un mezzo di comunicazione piuttosto che un altro)
>
>>[!important] Canale
>>Mezzo trasmissivo
>

>[!multi-column]
>
>>[!blank]
>>I modi in cui sono disposti nodi e canali definisce la **topologia**:
>>-**topologia fisica**, tiene conto del percorso dei mezzi trasmissivi;
>>-**topologia logica**,  interconnessione tra nodi mediante canali.
>
>>[!blank]
>>![[Reti di telecomunicazioni-1791231168755.webp|center|400]]

Non necessariamente coincidono (tramite un insieme di protocolli e regole).
Tramite software posso gestire la comunicazione tra i nodi e instradare i flussi solo in determinate direzioni.

>[!question] Osservazione
> La topologia a maglia completamente connessa per esempio a livello fisico è incredibilmente complessa, ma può essere "simulata" a livello logico con molti meno collegamenti.
>Il processo inverso (limitare una topologia fisica molto connessa) può essere applicato per motivi di sicurezza.

![[Reti di telecomunicazioni-1791231141323.webp|center|532]]

- **completamente connessa**$$C = \frac{N(N-1)}{2}$$
  aumenta l'affidabilità, ma il numero di collegamenti è quadratica rispetto al numero di nodi.

- **Topologia ad albero**$$C = N-1$$
  Esiste un solo percorso tra i nodi, il che è uno svantaggio per la fault tolerance, ma è un vantaggio per la ricerca del percorso migliore
- **Topologia a maglia non completamente connessa**$$N-1 < C < \frac{N(N-1)}{2}$$
  tolleranza ai guasti e cammini alternativi, ma la commutazione diventa più complessa
- **Topologia a stella**$$C = N$$
  La commutazione è molto semplice, ma se il nodo centrale è guasto non è più garantita la comunicazione
- **Topologia ad anello**
  Può essere unidirezionale o bidirezionale$$C = N$$
  Vulnerabilità ai guasti (soprattutto nel monodirezionale), ma la commutazione è molto semplice
- **Topologia a bus**
  Può essere attivo se i nodi hanno un ruolo nella trasmissione.$$C = N-1$$
  È invece passivo se ho un canale broadcast a cui tutti i nodi si possono interfacciare.$$C = 1$$
  Sono necessari dei terminali che evitano la riflessione dell'onda elettromagnetica all'interno del collegamento.
- **Topologia Ibrida di rete**
  Internet collega reti con varie topologia eterogenee combinando i vantaggi delle singole reti
## Tecniche di commutazione
>[!important] Commutazione
>Allocare risorse

Il traffico su internet è intrinsecamente intermittente, quindi la [[#commutazione di pacchetto]] risulta molto conveniente.

**Vantaggi**
- Statistical multiplexing (nel circuit switching ogni slot è assegnato ad un canale, nella commutazione di pacchetto invece ogni pacchetto acquisisce il primo slot disponibile e lo libera dopo il passaggio)
- Possibilità di controllo di correttezza lungo il percorso: se c'è un percorso non più funzionante è possibile cambiare percorso anche durante la comunicazione
- Possibilità di conversione di velocità, formati e protocolli
- Si può implementare una tariffazione basata sul traffico trasmesso

**Svantaggi**
- Ogni pacchetto deve essere elaborato singolarmente
- ritardo di trasmissione variabile.

### Ritardi nelle reti
![[Reti di telecomunicazioni-1790523411038.webp|546]]
#### ritardo di elaborazione
Bisogna controllare alterazioni di bit che può portare il canale e determinare il link di uscita.
#### ritardo di accodamento
I pacchetti si mettono in attesa nella coda e attendono di essere prelevati e spostati sul link di uscita.
L'intensità del traffico che arriva sull'interfaccia potrebbe essere maggiore della velocità di instradamento.
Conoscendo il tasso di arrivo medio $a$ moltiplicato per la lunghezza del pacchetto $L$ e poi diviso per la banda $R$ otteniamo l'intensità del traffico $$\frac{L \cdot a}{R}$$
- $\frac{La}{R} \sim 0$ ritardo medio in coda piccolo
- $\frac{La}{R} \to 1$ i ritardi crescono
- $\frac{La}{R} > 1$ arrivano più pacchetti di quelli che si riescono a gestire
#### Ritardo di trasmissione
Rapporto tra la dimensione del pacchetto e il rate nominale
$$
\frac{L}{R}
$$
#### Ritardo di propagazione
Tempo impiegato a raggiungere il nodo successivo $\frac{d}{s}$
Dipende anche dalla distanza fisica tra i due nodi $d$, non solo dalla velocità di propagazione $s$
### Modi di servizio di una rete a pacchetto
#### Datagramma
Non esiste una suddivisione della comunicazione in tre fasi.
Posso inviare pacchetti indipendenti con percorsi e dimensioni diverse.
La tabella di instradamento associa dinamicamente l'**indirizzo di destinazione** alla **porta di uscita**.
Posso accettare un maggior numero di utenti, ma non posso garantire una determinata qualità per tutti.
In questo caso è necessario identificare la sorgente e la destinazione univocamente determinati.

Ogni pacchetto è considerato una entità autonoma e viene trasferita in rete solo sulla base dell'indirizzo di destinazione.
Ogni nodo ha una tabella di instradamento che associa ad ogni indirizzo di destinazione una porta di uscita, che viene aggiornata dinamicamente in base alle informazioni ricevute dai nodi adiacenti.

![[Reti di telecomunicazioni-1790524354193.webp|608]]
#### Circuito virtuale
La comunicazione avviene tramite una connessione sul piano logico.
Viene divisa in 3 fasi:
- apertura connessione
- trasferimento dati
- chiusura connessione
Viene stabilito un **accordo preliminare** tra la sorgente e la destinazione, che contengono il percorso (in condivisione con altri utenti) che verrà utilizzato per la comunicazione.
Nel circuito virtuale i pacchetti viaggiano in ordine.

![[Reti di telecomunicazioni-1790523756060.webp|475]]

Viene gestito tramite il **VCI** (identificativo di circuito virtuale): ogni nodo ha una **tabella di instradamento** che associa ad ogni VCI la linea di uscita stabilita e la nuova etichetta per il nodo successivo.

- **Tempo di trasmissione** $T_t =\frac{L}{C}$
  lunghezza di pacchetto $L \ [\text{bit}]$
  capacità del canale $C \ [\text{bit/s}]$
- **Tempo di propagazione** $T_p = \frac{l}{V}$
  lunghezza del collegamento $l \ [m]$
  velocità di propagazione del segnale $V \ [m\text{/s}]$
- **Tempo di elaborazione**
  è minore, le tabelle di instradamento semplificano questo processo

Non è necessario mantenere informazioni relative a sorgente e destinazione, ma è sufficiente identificare il circuito virtuale.

>[!question] Differenza con la [[#commutazione di circuito]]
>A differenza della commutazione di circuito le risorse non sono assegnate in modo esclusivo

#### Datagramma / Circuito virtuale
**Datagramma**
- Destination address determina il next hop
- i percorsi possono cambiare durante una sessione
- come chiedere indicazioni mentre si guida
**Circuito virtuale**
- Ogni pacchetto trasporta un identificativo che determina il next hop
- un percorso fisso viene determinato durante il *call setup* e resta lo stesso per tutta la durata della comunicazione
- i router mantengono informazioni di stato per-chiamata
# Modelli funzionali
Le reti sono molto complesse e composte da numerosi elementi: risulta quindi necessario organizzare tutti questi elementi.

>[!important] Comunicazione
>trasferire contenuto informativo attraverso regole e convenzioni stabilite a priori tra dispositivi, da cui dipendono anche le performance della rete.

La comunicazione presuppone la cooperazione tra i nodi della rete, per questo nascono agenzie (CCITT) e organizzazioni (ISO) con il compito di imporre degli standard che tutti i sistemi nella rete devono rispettare per garantire la comunicazione.
## Protocolli
Bisogna fare attenzione a convenzione, sintassi e semantica, altrimenti potremmo creare una incoerenza tra i dispositivi.
>[!important] Protocollo
>I protocolli definiscono il **formato**, l'**ordine** di invio e ricezione dei messaggi tra le entità di rete, e le **azioni** intraprese alla trasmissione/ricezione del messaggio.
>Un **protocollo** è un insieme di regole che governano il trasferimento dei dati tra entità che risiedono in diversi sistemi.
>Descrizione formale delle procedure adottate per assicurare la comunicazione tra due o più funzioni dello **stesso livello gerarchico**.

In una comunicazione i protocolli definiscono:
- **sintassi**
  struttura e formato di comandi e risposte e come vengono presentate
- **semantica**
  come deve essere interpretato un determinato messaggio
- **temporizzazione**
  sequenze temporali di comandi e risposte - tecniche di sincronizzazione dei nodi della rete
## Architetture a strati
Una architettura di comunicazione è composta da:
- **sistemi**
  effettuano il trattamento e/o trasferimento di informazione in vista di specifiche applicazioni
- **processi applicativi**
  coinvolti da esigenze di interazione con altri dispositivi
- **mezzi trasmissivi**
  la struttura fisica di interconnessione tra i sistemi

![[Reti di telecomunicazioni-1790846637179.webp|center|367]]


### Sistema e strato (logico vs fisico)
>[!multi-column]
>
>>[!important] Sistema
>>Successione ordinata di sottosistemi ad ognuno del quale è associato un sottoinsieme funzionale. Ogni sottosistema potrà essere poi mappato a ciascun livello, per questo vengono sviluppati in modo ordinato, così da creare una sequenza in cui ogni sottosistema comunica con il sottosistema con livello adiacente.
>
>>[!important] Strato
>>L'unione di tutti i sottosistemi omologhi (di uguale rango) appartenenti a sistemi interconnessi.
>>Due sistemi sono in grado di comunicare su un determinato livello se i sottosistemi del medesimo rango possono ricostruire il dato risalendo lo stack (usano le stesse convenzioni e svolgono le stesse funzioni)

La comunicazione tra i livelli è a livello logico, una astrazione, invece a livello fisico devo riattraversare tutti gli strati, dall'alto verso il basso.

Abbiamo quindi la possibilità di creare una infrastruttura logica in cui un dato che viene trasmesso può essere interpretato dallo strato dell'end-device sullo stesso livello

>[!multi-column]
>
>>[!blank]
>>**Livello logico**
>>![[Reti di telecomunicazioni-1790847479783.webp]]
>
>>[!blank]
>>**Livello fisico**
>>![[Reti di telecomunicazioni-1790847598113.webp]]

I livelli di progettazione diranno che tipo di informazioni (di controllo) devono essere garantite per ogni livello affinché i livelli si intendano.
### Informazioni utente e di controllo, PDU, SAP
>[!multi-column]
>
>>[!important] Informazioni utente
>>sono l'oggetto dello scambio
>
>>[!important] Informazioni di controllo
>>sono informazioni necessarie al trasferimento dell'informazione utente $\to$ effetto collaterale affinché le informazioni arrivino

Ad ogni livello viene aggiunta una informazione di controllo, interpretabile dal medesimo livello del sistema ricevente.

>[!important] Unità di dati
>le informazioni di utente o di controllo scambiate in un processo di comunicazione sono strutturate in unità informative specifiche di ogni strato, dette **unità di dati**

>[!important] PDU (Protocol data unit)
>Una unità di dati è composta da dati (Payload - SDU) e unità di controllo (Header)

>[!important] SAP (Service access point)
>Punto di accesso al livello

### Incapsulamento/decapsulamento
Per l'invio di un dato è necessario l'**incapsulamento**: ogni livello riceve informazioni dal livello superiore e viene eseguito un processo di aggiunta di informazioni di controllo, necessarie al **decapsulamento** per verificare l'integrità delle informazioni e passare il dato al livello successivo.
![[Reti di telecomunicazioni-1790848221981.webp|center|570]]

I sistemi intermedi non necessitano di tutti i livelli di progettazione, ma per il reindirizzamento sono sufficienti meno livelli:
- **Router** primi 3
- **Switch** primi 2
- **Hub** solo il primo 
![[Reti di telecomunicazioni-1790848674334.webp|center|464]]


# Differenze TCP/IP e ISO/OSI
mentre il modello ISO/OSI venne standardizzato dall'ente ISO e ha impiegato nel tempo per essere descritto nella sua interezza e per specificare le funzionalità di ogni livello, il modello TCP/IP nasce dall'utilizzo di protocolli progettati prescindendo da una logica di standardizzazione in modo da fornire servizi.
Sono quindi stati uniti più protocolli già presenti, si è dimostrato che funzionavano e solo dopo si è cominciato a preoccuparsi di standardizzare questi protocolli.
La differenza con il modello ISO/OSI è che il modello TCP/IP è molto più pratico, per ogni livello vengono associati determinati protocolli e di conseguenza un modo di gestire una informazione più pratico. Il modello ISO/OSI è quindi più astratto.





---

efficienza del selective repeat
$$
E = (1-p)
$$
---


vedi da slide trasmettitore che rallenta
![[Reti di telecomunicazioni-1791469873324.webp|267]]
il ricevitore bufferizza i frame e li manda ai livelli superiori dopo aver decapsulato
se i ricevitori agiscono con lentezza il ricevitore comunica che la comunicazione deve essere rallentata altrimenti potrebbe esaurire lo spazio di buffer
usiamo un particolare insieme di bit (RNR)
questo avviene se il livello rete è più lento di quanto il livello collegamento può generare


---

protocollo HDLC
ma quindi stop and wait, go back N e selective repeat non sono protocolli?
![[Reti di telecomunicazioni-1791470030834.webp|391]]
Lo stop and wait funziona su canali half duplex
mentre go back N e selective repeat hanno bisogno del full duplex

modalità master-slave
normal response mode

[...] slide (39-...)


MAC
spesso associato alle LAN
mezzo condiviso in cui altre stazioni mandano frame in contemporanea -> contesa sul mezzo

[...] fino a slide 21
