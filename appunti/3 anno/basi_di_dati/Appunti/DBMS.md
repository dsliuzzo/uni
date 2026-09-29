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
# Modello ER (Progettazione Concettuale)
Per rappresentare la **progettazione concettuale** utilizzeremo il **modello entità/relazioni**

*es.* Automatizzare la gestione delle forniture di un negozio.
- Gestione dei fornitori (ricerca, inserimento, modifica, cancellazione, estrazione p.iva città nome)
- Gestione merci (ricerca, inserimento, modifica, cancellazione, estrazione cod nome marca)
- Gestione delle forniture (chi spedisce, prezzo, quali merci sono fornite da un fornitore)

![[DBMS-1790248969041.webp|center|823]]

## Costrutti base (Entità, Relationship, Attributi)
>[!multi-column]
>
>>[!important] Entità
>>Ogni concetto prende il nome di **entità**. Da un punto di vista matematico non sono altro che insiemi (entity set). *rettangoli*
>
>>[!important] Relazioni
>>Significato matematico di relazione $R_{AB} \subseteq A \times B$: sottoinsieme del prodotto cartesiano dei due insiemi di entità che collega. Un insieme di coppie in cui il primo elemento viene dalla prima entità e il secondo elemento viene dalla seconda entità. *rombi*

È buona norma:
- utilizzare come nomi delle entità il singolare in quanto rappresenteranno le singole istanze del concetto
- utilizzare sostantivi come nomi delle relazioni in quanto utilizzare verbi spesso sono direzionali e vanno contro il concetto di relazione (bidirezionale)

Ad ogni elemento (entità o relazione) sono associati degli **attributi** che caratterizzano ogni istanza dell'insieme.
Se non specificato diversamente, ogni attributo è come se avesse un [[#Vincoli di cardinalità|vincolo di cardinalità]] $1:1$

Se un attributo non è necessario (se non è una chiave) può essere specificato tramite la scritta `(NULL)` nel modello ER; in questo caso il vincolo di candinalità è $0:1$
## Vincoli di cardinalità
Sulla linea che collega una entità ad una relazione sono espressi due numeri che prendono il nome di **vincoli di cardinalità**.
I vincoli di cardinalità rappresentano il numero minimo e massimo di volte in cui una entità compare nel sottoinsieme *relazione*.
*es.* un Fornitore deve comparire almeno $0$ volte e al più $n$ volte all'interno della relazione Fornitura: **ogni Fornitore può fornire $n$ merci, ma una stessa merce al più una volta** (questo non viene specificato nel modello ER, ma viene "ereditato" dal concetto stesso di relazione, che è un insieme e di conseguenza non ammette ripetizioni).
Fosse stato $1:n$ ogni fornitore deve comparire almeno una volta all'interno della relazione Fornitura.

## Identificatori (chiave)
>[!important] Chiave candidata
>Definiamo come chiave un meccanismo di **identificazione** di una entità. Vengono rappresentati nel modello ER come una linea che termina con un punto pieno.
>La chiave è quindi un **insieme minimale** (nessun suo sottoinsieme può essere identificante da solo) di attributi che ha la proprietà di essere identificativo per l'istanza dell'entity set.
>Viene inoltre definita **candidata** perché per ogni entità possono essere definite più chiavi.

>[!attention] Insieme minimale
>Un sovrainsieme di un insieme identificante è a sua volta identificante $\to$ deve essere minimale, altrimenti non possiamo garantire l'unicità degli elementi identificati dall'insieme minimale, rompendo l'integrità dei dati.
>*es.* la coppia matricola-nome non può essere identificante in quanto anche matricola è identificante, definendo anche il nome permetterei la creazione di studenti con matricole uguali ma nomi diversi.

È necessario definire almeno una chiave candidata per entità. Se non è presente un attributo che possa fare da chiave possiamo definire come chiave l'intero insieme di attributi, ma se questo non rende unica l'entità vuol dire che abbiamo sbagliato qualcosa nell'analisi dei requisiti.

La differenza con identificato come l'[[Java#hashCode|hash code]] è che la chiave ha un significato semantico.

Nel caso delle relazioni non ha senso definire degli attributi come chiavi candidate, in quanto l'identificazione di una relazione è la coppia di entità che la compongono (non ha nemmeno senso dato il significato matematico di relazione come insieme).

![[DBMS-1790623532150.webp|center|668]]

Questo non permette ugualmente di definire più relazioni Fornitura con le stesse istanze di Fornitore e Merce anche se con diverso prezzo.
### Chiave interna/esterna
Un meccanismo di identificazione deve essere collegato in maniera univoca al concetto. Fino ad ora abbiamo visto **chiavi interne**, cioè rappresentate da attributi, che quindi hanno intrinsecamente una cardinalità $1:1$ (per questo non possiamo definire le chiavi come `NULL`).

È però possibile definire come identificatori delle relazioni:
![[DBMS-1790628510176.webp|center|528]]
In questo caso è necessario ci sia un vincolo $1:1$ nella relazione, altrimenti non ha senso definire la relazione come chiave candidata.

$$
\text{vincolo chiave esterna} \begin{array}{c}\implies  \\  \not\Longleftarrow\end{array} \text{cardinalità }1:1
$$

>[!important] Chiave esterna
>Chiave composta solo da oggetti correlati tramite relazioni.

Se una chiave è definita sia da normali attributi che da relazioni prende il nome di **chiave mista**.
## Quando ha senso definire nuove entità
*es.* anagrafica delle marche:
![[DBMS-1790626530555.webp|center|539]]

In questo caso abbiamo definito la marca associata alla merce come una entità separata. A differenza di un normale attributo è che non possiamo più inserire qualsiasi cosa come data entry della marca della merce, ma solo elementi appartenenti all'insieme Marca. Questo permette di avere un maggiore controllo sulla **integrità del dato**.

Questa accortezza può garantire per esempio un minor numero di errori in ricerche effettuate raggruppando gli elementi per marca.

Non avrebbe senso invece per il nome del fornitore per esempio, dato che è poco probabile, se non impossibile, che questo sia ripetuto e un errore nel suo inserimento non comporta errori in una eventuale ricerca aggregata del dato.

Inoltre in questo modo possiamo definire ulteriori attributi relativi alla Marca, per esempio possiamo aggiungere la sede: definendo invece il nome della marca e la sede come due attributi dell'entità Merce consento la definizioni di marche con sedi diverse.

In generale possiamo dire che ha senso definire una nuova entità se:
- i requisiti lo richiedono espressamente
- vengono effettuate numerose ricerche in cui l'attributo/entità ha una grande importanza
- il concetto è a sua volta rappresentato da più attributi

## Quando una relazione diventa entità
Una relazione è definita solo in quanto coppia, se dovessimo aggiungere un nuovo attributo come per esempio la data a partire dal quale la fornitura ha quel determinato prezzo dovremmo ridefinire il nostro modello ER in quanto non è più sufficiente la relazione per rappresentare questo concetto.
Non possiamo definire più di una relazione con uguale fornitore e merce, nonostante abbia data diversa.
Il modello di conseguenza cambia come segue:
![[DBMS-1790630264057.webp|center|700]]
>[!attention] Errore grave
>Definire Data come chiave di Fornitura $\implies$ ☠️

## Generalizzazione
La generalizzazione è una particolare relazione, che ci permette di [[Java#Ereditarietà|ereditare]] degli attributi, in modo da non doverli ridefinire per entità che ne hanno in comune.
![[DBMS-1790686161369.webp|center|756]]

Ogni qual volta viene definita una generalizzazione bisogna specificare il tipo, tramite le **proprietà**:
- totale/parziale:
  è definita **totale** una generalizzazione in cui ogni istanza dell'entità padre appartiene ad uno dei figli (partizione): $(\text{St} \cap \text{Doc}) \wedge (\text{St} \cup\text{Doc} =\text{Per})$
- inclusiva/esclusiva
  è definita **esclusiva** una generalizzazione in cui l'intersezione delle entità figlie è nulla $\text{St} \cap\text{Doc} = \emptyset$
### IS-A
Un caso particolare della generalizzazione è IS-A
![[DBMS-1790686970374.webp|321]]
In questo caso non ha senso definire le proprietà totale/parziale e inclusiva/esclusiva.

>[!multi-column]
>
>>[!blank]
>>Potremmo anche rappresentare la ISA come una normale relazione, ma in quel caso non ereditiamo la chiave, ma quando necessario usiamo ugualmente la ISA che ha un significato semanticamente più specifico.
>
>>[!blank]
>>![[DBMS-1790687256892.webp]]

Nel seguente caso invece non ha senso definire una ISA:
![[DBMS-1790687444561.webp|639]]