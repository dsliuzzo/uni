
---
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

[...] <-- *aggiungi foto dalle slide*

---

I pacchetti possono avere velocità di trasmissioni diverse.
I pacchetti possono sfruttare tutta la risorsa del canale o solo una parte e passare da canali eterogenei. In base al mezzo non tutte le forme d'onda vengono trasmesse --> cambia quindi anche il data rate (quantità di bit al secondo che il canale può trasportare).
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
>>
>
>>[!important] End-end-delay
>

[...] rivedi dal quaderno - ritardo di trasmissione, ritardo di propagazione, ritardo di accodamento, code in ingresso, code in uscita, ritardo di processamento

## Reti di accesso [...] cambia titolo
[...] 34
Anche le reti di accesso possono essere reti di tipo diverso.
Gerarchia della rete
[...] slide reti di accesso 1
La suddivisione gerarchica è di livello logico, ma anche fisico: i nodi di accesso hanno hardware diverso dai core, che devono gestire il traffico di moltissime reti di accesso.
Si ha quindi una differenza di costi e compiti, portando anche a rapporti gerarchici tra le aziende che offrono i servizi di connessione alla rete.

## Canali di comunicazione
### Collegamento punto-punto
Il collegamento può essere diretto e su livelli diversi
- 2 end device paritari
- end device e server
- comunicazione con alta direttività ([...] la direzione delle onde elettromagnetiche non viaggiano in tutte le direzioni, ma solo verso il destinatario??)
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
>>[...] slide topologia fisica - topologia logica

Non necessariamente coincidono (tramite un insieme di protocolli e regole).
Tramite software posso gestire la comunicazione tra i nodi e instradare i flussi solo in determinate direzioni

[...] Slide esempi di topologia di rete

La topologia a maglia completamente connessa per esempio a livello fisico è incredibilmente complessa, ma può essere "simulata" a livello logico con molti meno collegamenti.
Il processo inverso (limitare una topologia fisica molto connessa) può essere applicato per motivi di sicurezza.

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

Il traffico su internet è intrinsecamente intermittente, quindi la commutazione di pacchetto risulta molto conveniente.
[...] <-- vedi cosa aggiungere dal capitolo di prima

**Vantaggi**
Statistical multiplexing. [...]
Possibilità di controllo di correttezza lungo il percorso: se c'è un percorso non più funzionante posso cambiare percorso anche durante la comunicazione e di conseguenza può cambiare alcune caratteristiche del pacchetto (header), in modo da adattarsi al nuovo percorso.
Inoltre si può implementare una tariffazione basata su [...]

**Svantaggi**
Ogni pacchetto deve essere elaborato singolarmente e il ritardo di trasferimento è variabile.

### Ritardi nelle reti
#### ritardo di elaborazione
Bisogna controllare alterazioni di bit che può portare il canale e determinare il link di uscita
#### ritardo di accodamento
I pacchetti si mettono in attesa nella coda e attendono di essere prelevati e spostati sul link di uscita.
L'intensità del traffico che arriva sull'interfaccia potrebbe essere maggiore della velocità di instradamento.
Conoscendo il tasso di arrivo medio $a$ moltiplicato per la lunghezza del pacchetto $L$ può essere diviso per la banda $R$ per ottenere l'intensità del traffico $$\frac{L \cdot a}{R}$$
- $\frac{La}{R}$ [...]
#### Ritardo di trasmissione
Rapporto tra la dimensione del pacchetto e il rate nominale
#### Ritardo di propagazione
Tempo impiegato a raggiungere il nodo successivo $\frac{d}{s}$
Dipende anche dalla distanza fisica tra i due nodi $d$, non solo dalla velocità di propagazione $s$
### Non so che titolo [...]
#### Datagramma
Non esiste una suddivisione della comunicazione in tre fasi.
Posso inviare pacchetti indipendenti con percorsi e dimensioni diverse.
La tabella di instradamento associa dinamicamente l'**indirizzo di destinazione** alla **porta di uscita**.
Posso accettare un maggior numero di utenti, ma non posso garantire una determinata qualità per tutti.
In questo caso è necessario identificare la sorgente e la destinazione univocamente determinati.
#### Circuito virtuale
La comunicazione avviene tramite una connessione sul piano logico.
Viene divisa in 3 fasi:
- apertura connessione
- trasferimento dati
- chiusura connessione
Viene stabilito un accordo preliminare tra la sorgente e la destinazione, che contengono il percorso (in condivisione con altri utenti) che verrà utilizzati per la comunicazione.
È possibile avere pacchetti diversi che seguono lo stesso percorso.
Nel circuito virtuale i pacchetti viaggiano in ordine.
Viene gestito tramite il **VCI** (identificativo di circuito virtuale): ogni nodo ha una **tabella di instradamento** che associa ad ogni VCI la linea di uscita stabilita e la nuova etichetta per il nodo successivo.
L'assegnazione dinamica delle etichette permette di ridirezionare i pacchetti su un percorso diverso.

- **Tempo di trasmissione** $\frac{L}{C}$
  lunghezza di pacchetto $L$
  capacità del canale $C$
- **Tempo di propagazione**
  è minore, le tabelle di instradamento semplificano questo processo
- [...]

È sufficiente identificare il circuito virtuale e non sorgente e destinazione.

[...] slide vantaggi del circuito virtuale rispetto al datagramma

# Modelli funzionali
## Architetture
## Protocolli
## Modello ISO/OSI e TCP/IP a confronto
