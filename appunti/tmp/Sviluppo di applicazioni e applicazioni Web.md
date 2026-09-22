# Introduction
Introduzione del WEB fa si che internet diventi da piattaforma accademica a piattaforma che offre servizi. Per servizio si intende un contratto che lega due entità (fornitore - utilizzatore).
I primi servizi web (detti monoliti pk racchiudevano tutto insieme) sono stati snelliti e semplificati fino ad essere microservices per andare incontro alle esigenze di chi sviluppava. La necessità era quindi quella di rendere disponibili sul web dei servizi scalabili, portabili cosicche è capace di gestire un flusso di richieste enorme. NAsce così l'**enterprise computing** - l'ingegneria dello sviluppo di servizi per le aziende
## Enterprise Computing
Si occupa di rispettare i requisiti funzionali e non su scala industriale:
**Requisiti**:
- funzionali: specifica **cosa** che sistema deve offrire 
- non-funzionali: specifica **come** servizio deve adempiere determinata funzione (es. sicurezza)
### Requisiti
####  Requisiti funzionali

#### Requisiti non-funzionali
- **Portabilità**:  capacità SW di essere eseguito su piattaforme diverse
- **Interoperabilità**: capacità di scambiare dati e cooperare con altri sistemi
- **Integrazione**: capacità di comporre moduli e servizi (se uno non funziona non si rompe tutto)
- **Interoperabilità tra ambienti**: integrazione con sistema già esistente (pagamento) spesso obsoleto -> retrocompatibilità
- **Supporto**: gestione del sistema in esecuzione (monitoraggio, update) -> creo strumenti per questa funzione
- **Scalabilità**: capacità di adattare la macchina nel caso di upgrade
	- verticale: aggiungo risorse per rendere macchina più potente
	- orizzontale (mantengo vecchia macchina e ne aggiungo altre
- **Efficienza**: uso ottimale delle risorse
- **Affidabilità**: bassa probabilità di failure
- **Tolleranza ai guasti**: capacità di continuare anche a seguito di guasto
- **Qualità**
- **Time to market**: strumenti che permettono di incorporare funzionalità già esistenti

Gli elementi costitutivi di ogni applicazione enterprise si sviluppa su più **livelli**:
- presentation logic: design dell'applicazione
- business logic: verifica prodotti
- data access logic: fatture, spedizioni
- servizi di sistema: verifica del corretto funzionamento interno logico del sistema

### Single tier - Mainframe Based
La macchina, contenente tutto il sistema, 

### Three tier
Minimo SW possibile sul client e due server (uno solo con dati e un server che gestisce la logica del sistema).
Si implementa utilizzando le RPC (remote procedure call) tra il server e il client. Per prevenire il problema del [...] si instaura comunicazione con server tramite i **remote** **object**: quando viene effettuata una query viene restituito dal server un oggetto. 

Si evolve in [...] <- foto
Il web server funge da smistatore di traffico - effettua operazioni di routing

cos'è un **acronimo**?

All'interno dell'application center si aggiunge un **container** che può fornire servizi condivisi come la gestione del traffico, sicurezza comuni a più applicazioni. Questo modello permette di automatizzare servizi e metterlo in comune. Tuttavia, nel corso del tempo, poichè l'utilizzo dei container precludeva un accordo con aziende in maniera *proprietaria*. Per questo si è iniziato ad utilizzare container **open source non proprietaria** per permettere facilmente il cambio, effettuando una *migrazione* quasi immediata.

Il container che utilizzeremo è **Java Enterprise - Jakarta**: si tratta di una piattaforma per la gestione di applicazioni enterprise.
**Java Servlet** è un insieme di oggetti Java che permette di estendere le funzionalità di un server HTTP, non creando un nuovo processo ma creando thread che lavorano concorrentemente.

## Spring
**Spring** è un framework che permette di formare applicazioni web utilizzando le tecnologie offerte da Java Enterprise.