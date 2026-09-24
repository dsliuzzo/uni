#appunti 
#basi_di_dati
# Introduzione
Una **base di dati** consiste in un sistema orientato alla gestione di dati, le cui proprietà sono:
- [[4. Gestione della memoria secondaria|durabilità]]
- [[6. Sistema di protezione e sicurezza|sicurezza]]
- [[1.5 Programmazione concorrente|accesso concorrenziale]], il cui uso rilegato a semafori e monitor o metodi synchronized risulta troppo lento e la loro implementazione richiede troppo lavoro superfluo.
Di conseguenza rappresentiamo tutto come righe di tabelle, che vengono modificate tramite **primitive di modifica**.Relational data base management system
# R-DBMS
*Relational data base management system*

Creare un database da 0 ha un costo enorme, mentre le esigenze sono sempre le stesse, per questo motivo vengono utilizzati i DBMS, che vengono specializzati per ogni singolo caso d'uso.

>[!important] Relazionale
>Significato matematico di **relazionale**: sottoinsieme del prodotto cartesiano degli insiemi (insieme di elementi provenienti da insiemi diversi).
>$$R_{AB} \subseteq A \times B$$
>La tabella dei database è quindi una **relazione**.

>[!important] Data base management system
>Pacchetti software che permettono di definire tabelle.

## Modello a cascata
Per la progettazione di un data base vengono spesso seguiti dei passi fondamentali
>[!blank|float-left]
>```mermaid
>flowchart TB
>    id1(Studio di fattibilità) --> id2(Analisi dei requisiti)
>    id2 --> id3(Progettazione concettuale)
>    id3 --> id4(Progettazione logica/fisica)
>    id4 --> id5(Implementazione)
>    id5 --> id6(Testing)
>    id6 --> id7(Messa in opera)
>```

**1) Studio di fattibilità**
- Richieste / aspettative del cliente
- Tempistiche
- Compenso

**2) Analisi dei requisiti**
- Conoscere l'utilizzo che ne farà il committente e caratteristiche che il committente richiede punto per punto, utente per utente
- Trasformare processi aziendali in procedure per la manipolazione dei dati del DB
- → Lista di requisiti
    - **Funzionali**, funzioni che il sistema deve supportare (*es. inserimento cliente, ricerca prodotto...*)
    - **Non funzionali**, caratteristiche che il sistema dovrebbe avere ma non sono specifiche (*es. interfaccia web, piattaforma di pagamento...*)

**3) Progettazione concettuale**
- Quali **informazioni** (concetti) devono essere presenti per rispettare le richieste del committente
- Quali sono le **correlazioni** tra le informazioni

**4.1) Progettazione logica**
- Le informazioni diventano righe di tabelle
- Capire quale forma dovrà avere la tabella (in questa fase non verrà riempita)
- Informazioni → **dati**
- Vengono scelte le strutture dati necessarie a memorizzare i dati in modo corretto e funzionale. Nel nostro caso siamo vincolati, dal DBMS, nell'utilizzo delle tabelle. Uno stesso dato deve poter rispondere a più usi che ne farà l'utente.

**4.2) Progettazione fisica**
- Tuning delle impostazioni delle tabelle (*es. come devono essere ottimizzate le tabelle*)
- **Direttive**

**5) Implementazione**
**6) Testing**
**7) Messa in opera**


## Informazioni / dati
La differenza tra informazioni e dati diventa fondamentale per la comprensione di un database.

>[!multi-column]
>
>>[!important] Informazioni (semantica)
>>Il significato, l'interpretazione o l'incremento di conoscenza che viene estratto da un _dato_ decodificandolo attraverso un contesto noto.
>>
>>Concetto astratto e cognitivo, totalmente svincolato dal supporto o dal formato che lo trasporta.
>
>>[!important] Dati (sintassi)
>>Fatti grezzi, simboli o valori oggettivi (numeri, caratteri, bit) registrati senza alcun contesto.
>>
>>Rappresentazione logica/fisica vincolata dalle regole di codifica di un linguaggio, di un formato o di un supporto.

Definire l'uno richiede implicitamente definire prima l'altro: il dato è il significante (il veicolo), l'informazione è il significato (il carico).

# Progettazione concettuale
Per rappresentare la progettazione concettuale utilizzeremo il **modello entità/relazioni**

*es.* Automatizzare la gestione delle forniture di un negozio.
- Gestione dei fornitori (ricerca, inserimento, modifica, cancellazione, estrazione p.iva città nome)
- Gestione merci (ricerca, inserimento, modifica, cancellazione, estrazione cod nome marca)
- Gestione delle forniture (chi spedisce, prezzo, quali merci sono fornite da un fornitore)

![[DBMS-1790248969041.webp|center|823]]

- Ogni concetto prende il nome di **entità** (entity set) *rettangoli*
- Ogni relazione $R_{AB} \subseteq A \times B$ *rombi*

>[!important] Vincoli di cardinalità
>[...]

>[!important] Chiave candidata
>[...]

>[!bug] Problemi relativi alle chiavi
>[...]

