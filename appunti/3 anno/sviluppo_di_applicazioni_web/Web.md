Con la nascita del web internet è diventato un luogo di compravendita di **servizi**.

I primi servizi erano **monoliti**, ma nel corso del tempo si è pensato di utilizzare delle astrazioni che potessero semplificare il tutto e implementare pagine dinamiche.
Nasce la necessità di rendere disponibili applicazioni distribuite sul web con una grossa scalabilità e capace di gestire una grande mole di richieste contemporaneamente, servizi pensati per le aziende: **enterprise computing** (sviluppo di applicazioni per le aziende).
# Enterprise computing
## Requisiti
>[!multi-column]
>
>>[!important] Requisiti funzionali
>>cosa un sistema deve offrire
>
>>[!important] Requisiti non funzionali
>>come il servizio deve fornire quella funzionalità

Requisiti fondamentali, ma non funzionali:
- **Portabilità**
  capacità del software di essere eseguito su macchine eterogenee
- **Interoperabilità**
  capacità di scambiare dati ed utilizzarli
- **Integrazione**
  vediamo il sistema come un'unica entità e non ci rendiamo conto dei componenti che interagiscono al suo interno
- **Interoperabilità con sistemi legacy**
  integrazioni con sistemi pre esistenti, anche se obsoleti (retrocompatibilità)
- **Supporto e gestione a runtime**
  sistema monitorabile anche se in esecuzione
- **Scalabilità**
  verticale (aggiungere risorse alla macchina) - orizzontale (acquisto di una nuova macchina)
- **Efficienza**
  buona efficacia spendendo di meno
- **Affidabilità**
  bassa probabilità di fallire
- **Tolleranza ai guasti**
  continuare ad operare anche se si presenta un guasto
- **Qualità**
  insieme di attributi non funzionali
- **Time to market**
  strumenti che ci permettano di sviluppare l'applicazione velocemente

## Paradigma a tre livelli
Il paradigma a tre livelli è diventato lo standard e si basa su:
- **Livello di presentazione**
  come appare
- **Business logic**
  come funziona
- **Dati**
  come gestire i dati
- **Servizi di sistema**
  su quali macchine

### Single tier
Inizialmente veniva installato tutto su una singola macchina [[0. Intro sistemi operativi#Sistema mainframe|mainframe]].
Essendo tutto centralizzato era molto più semplice recuperare le risorse, ma tutto è strettamente integrato, quindi un guasto o la necessità di un aggiornamento sul mainframe non permette l'utilizzo del programma.
### Two tier
I dati venivano mantenuti sui server, mentre tutto il resto veniva eseguito sui computer client. Le interfacce locali venivano riempite dai dati provenienti dai server.
Rimaneva il problema di non avere un sistema distribuito e il client è costretto ad installare software molto pesante.

L'idea di base è quella di avere il minimo software necessario sul client, un server che gestisce la business logic e c'è un ulteriore server che mantiene il database con i dati.
Il server centrale può inoltre utilizzare del caching per velocizzare le operazioni.
Questo sistema può essere implementato tramite remote procedure call.
Il server centrale può essere invocato tramite interfaccia (**chiamata a procedura remota**), ma risulta sovraccaricato.

Possiamo quindi passare a remote object: le chiamate al server centrale restituiscono oggetti e non soli dati, che vengono gestiti dal client, ma il middle tier rimane ugualmente sovraccaricato.

### Three tier
Oggi viene quindi utilizzato uno stile architetturale a tre livelli:
1. **web server**
   gestisce le richieste HTTP, si occupa del routing e smista il traffico
2. **application server**
   business logic
3. **database server**
   persistenza dei dati


>[!question] Stiamo tornando ad un approccio a monolite
>Negli ultimi anni sono cambiate le necessità del mercato e la potenza di calcolo

In questo modo la distribuzione del carico è ottimale. Inoltre un livello può essere aggiornato senza creare problemi agli altri livelli.

Ogni richiesta però deve attraversare obbligatoriamente tutti i livelli.
Se non ben sviluppato l'application server potrebbe soffrire di ridondanza.

Per evitare questo problema implementiamo all'interno dell'application server un **container**.
>[!important] Modello componente-container (non docker)
>Tutte le funzionalità comuni a basso livello vengono delegate a dei container, in modo da potersi concentrare sulla business logic (*es.* concorrenza, sicurezza, ...).
>Per l'implementazione dei container possono essere utilizzate applicazioni open source come **Jakarta** (Java enterprise)

[[Jakarta]]

[[Spring Boot]]


---

[...] aggiungi cenni storici su passaggio da procedural - object oriented - component oriented - service oriented


>[!important] Protocollo
>Insieme di regole che servono a normare un aspetto di un sistema


# Risorse
Con il termine risorsa intendiamo qualunque entità abbia una identità.
Gli **URI** (Uniform resource identifier) forniscono un meccanismo semplice ed estensibile per identificare una risorsa, per garantire interoperabilità
- concetto generale (non necessariamente una entità disponibile in rete)
- rappresenta solo l'involucro
- rispettano una sintassi standard (insieme di termini e regole) e semantica (significato) semplice e regolare
## Sintassi degli URI
Ogni URI è composto dalle seguenti sezioni:
[...] <-- riprendi slide per forma comune
- **schema**
  indica il tipo di URI
- **specifica**
	- **authority**
	  mappa l'host e l'eventuale porta tramite il quale raggiungere il server
	- **path**
	  percorso gerarchico della risorsa
	- **query**
	  ulteriori parametri
## URN e URL
Esistono due specializzazioni dell'URI: URN e URL
- **URN** uniform resource name
  identifica la risorsa per mezzo di un nome (*es.* ISBN). L'URN deve essere unico e duraturo e deve esistere una entità che conoscendo il nome può ricondurlo ad indirizzi fisici.
- **URL** uniform resource locator
  tiene conto anche della modalità per accedere alla risorsa
[...] <-- riprendi slide per forma comune URL

le sezioni che compongono l'URL sono identiche a quelle dell'URI, tranne per la presenza (anche se deprecated) di username e password.

[...] <-- differenze tra URN e URL

# HTTP
Protocollo generico e stateless, tramite cui client e server comunicano: richiedono e trasferiscono **rappresentazioni di risorse identificate da URL**.
È importante la rappresentazione: uno stesso contenuto informativo può avere più rappresentazioni.

- **client/server**
  c'è una netta distinzione tra chi richiede le risorse e chi le fornisce
- **generico**
  è indipendente dal formato con cui i dati vengono trasmessi
- **stateless**
  ogni operazione non tiene memoria delle precedenti, è il client che deve ricreare il contesto per effettuare ogni richieste
- **progettato per sistemi distribuiti complessi**
  tra client e server possono esserci vari intermediari


È possibile negoziare il formato dei dati, questo favorisce l'indipendenza del sistema dal formato di rappresentazione dei dati.
Nonostante sia stateless sono comunque presenti dei sistemi di "caching sofisticato" per velocizzare le connessioni.
Sono disponibili sistemi di autenticazione sofisticata su vari livelli.

## Applicazioni HTTP
[...]

## Semantica dei messaggi HTTP
>[!important] Idempotenti
>Se invoco lo stesso metodo più volte dopo l'invocazione non ho nuovi effetti
### GET
Recupera dati dal server
[...]
### POST
Inviare dati al server
[...]
### PUT
Aggiornare o sostituire una risorsa esistente sul server
[...]
### HEAD
Richiedere solo l'header di una risorsa
[...]
### DELETE
Eliminare una risorsa sul server
[...]

## Fasi di scambio client/server
[...]

introduzione di connessioni persistenti
pipeline (possibilità di mettere in coda più richieste, senza necessariamente attendere la risposta), ma introduce un problema: se la prima richiesta è più pesante blocca le successive.

2 way handshake (protocollo di conoscenza `syn --> syn + ack <-- ack -->`)

Per risolvere questo problema è stato inventato HTTP/2 che effettua una conversione del testo in binario
- compressione dell'header
- multiplexing (non abbiamo più pipeline ed effetto coda, ma le informazioni viaggiano in parallelo)

Con HTTP/3 viene sostituito TCP con QUIC e UDP, permettendo di implementare **connection migration**: il cambio rete è trasparente
## Una richiesta
### Header
```
[...]
```
[...]
**Tipi di header**
- [...]
- [...]
- [...]
## Una risposta

```
[...]
```
## Status code
[...]

# HTML
>[!bug] Non è un linguaggio di programmazione

[...]
L'obbiettivo è quello di descrivere e strutturare contenuti.

>[!attention] DIfferenza con markdown
>Il markdown è un linguaggio di markup leggero, non lavora con i tag, ma ha dei caratteri particolari che fanno le veci dei tag

Ancora differente dai linguaggio WYSIWYG (what you see is what you get).
## Tag
### Head
Contengono metadati
[...]
### Body
[...]
#### Form
[...]