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