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
- Quali sono le caratteristiche dei concetti

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
## Cardinalità
Sulla linea che collega una entità ad una relazione sono espressi due numeri che prendono il nome di **vincoli di cardinalità**.
I vincoli di cardinalità rappresentano il numero minimo e massimo di volte in cui una entità compare nel sottoinsieme *relazione*.
*es.* un Fornitore deve comparire almeno $0$ volte e al più $n$ volte all'interno della relazione Fornitura: **ogni Fornitore può fornire $n$ merci, ma una stessa merce al più una volta** (questo non viene specificato nel modello ER, ma viene "ereditato" dal concetto stesso di relazione, che è un insieme e di conseguenza non ammette ripetizioni).
Fosse stato $1:n$ ogni fornitore deve comparire almeno una volta all'interno della relazione Fornitura.

## Identificatori (chiave candidata)
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
  è definita **totale** una generalizzazione in cui ogni istanza dell'entità padre appartiene ad uno dei figli (partizione): $\text{Per} \backslash (\text{St} \cup\text{Doc}) = \emptyset$;
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
![[DBMS-1790687444561.webp|center|639]]
>[!attention] Differenze ISA relazione
>Seppur il significato semantico sia diverso, esiste una equivalenza tra relazioni normali e ISA, ma solo nel caso in cui le proprietà siano parziale e inclusiva.

# Modello relazionale (progettazione logica)
In questa fase definiamo quali siano le **tabelle** più opportune per rappresentare le informazioni (concetti) del modello ER, passando quindi a **dati** (codifica dei concetti secondo un linguaggio). Per farlo utilizzeremo il **modello relazionale**.

>[!bug] Relazione
>Nonostante abbiano lo stesso nome, nel modello relazionale il termine **relazione** non indica un sottoinsieme di coppie di entità, ma una qualsiasi tabella: la relazione è tra i domini degli attributi.

Riprendendo l'esempio Fornitore-Merce trattato fino ad ora e il suo modello ER:
![[DBMS-1790947194394.webp|center|517]]

dobbiamo per prima cosa fare una distinzione, il modello relazionale consiste nella rappresentazione/descrizione della struttura dei dati, elencando **schemi di relazione** più adeguati a descrivere il modello ER definito nella fase precedente
>[!multi-column]
>
>>[!important] Istanza di relazione
>>Istanza della tabella
>>
>>| P.iva    | Nome     | Città    |
>>| -------- | -------- | -------- |
>>| F1       | A        | CS       |
>>| F2       | B        | RC       |
>>| $\vdots$ | $\vdots$ | $\vdots$ |
>
>>[!important] Schema di relazione
>>Elenco delle intestazioni (senza le singole istanze)
>>```
>>Fornitore(p.iva:string, nome:string, città:string)
>>```

>[!important] Tupla
>Singola riga dell'istanza di relazione

*es.* F1 fornisce M1,M2 e F2 fornisce M2,M3
L'intero modello ER potrebbe essere rappresentato con un'unica tabella

| P.iva | nome | città | codM | nomeM | marca    |
| ----- | ---- | ----- | ---- | ----- | -------- |
| F1    | A    | CS    | M1   | x     | $\alpha$ |
| F1    | A    | CS    | M2   | y     | $\beta$  |
| F2    | B    | RC    | M2   | y     | $\beta$  |
| F2    | B    | RC    | M3   | z     | $\alpha$ |
Concettualmente questa rappresentazione è corretta
>[!bug] Problemi
>Ripetiamo la stessa informazione più volte innecessariamente (ridondanza)
>1. Rischio di fare errori: non possiamo garantire la consistenza del dato
>2. La modifica diventa molto complessa e rischia di essere costosissima

Inoltre avere i dati in un unica tabella $\nRightarrow$ efficienza di estrazione

>[!check] Creiamo 3 tabelle distinte

rappresentazione istanza di relazione:
>[!multi-column]
>
>>[!blank]
>>| P.iva | nome | città |
>>| ----- | ---- | ----- |
>>| F1    | A    | CS    |
>>| F2    | B    | RC    |
>
>>[!blank]
>>| Cod | nome | marca    |
>>| --- | ---- | -------- |
>>| M1  | x    | $\alpha$ |
>>| M2  | y    | $\beta$  |
>>| M3  | z    | $\alpha$ |
>
>>[!blank]
>>| Fornitore | Merce |
>>| --------- | ----- |
>>| F1        | M1    |
>>| F1        | M2    |
>>| F2        | M2    |
>>| F2        | M3    |

Utilizziamo una tabella per rappresentare la relazione associando dei riferimenti univoci: le **chiavi primarie**, non come coppie di concetti.
Rappresentazione schema di relazione:
$$
\displaylines{
\text{Fornitore}(\underline{\text{p.iva}} \text{: string}, \text{nome: string},\text{ città: string}) \\
\text{Merce}(\underline{\text{Cod}}\text{: number}, \text{ nome: string}, \text{ marca: string}) \\
\text{Fornitura}(\underline{\text{Fornitore}}\text{: string},\text{ }\underline{Merce}\text{: number})
}
$$
In questo modo evitiamo la ridondanza e quindi è minore il rischio di inconsistenze.
In questo caso se un attributo non è necessario possiamo segnalarlo con `null` sopra l'attributo.

Avendo definito tutto questo possiamo rappresentare qualsiasi versione della realtà, ma dobbiamo aggiungere delle restrizioni presenti nel modello ER:
1. chiave candidata
2. vincoli di cardinalità
## Vincoli di integrità
### Vincolo di chiave primaria
Quella che nel modello ER era una caratteristica identificativa ora deve diventare un vero e proprio vincolo.
>[!important] Chiave primaria (primary key)
>Dato uno schema di relazione
>$$R_{1}(A_{1},\dots,A_n)$$
>Definiamo la **chiave primaria** come la specifica di un insieme di attributi
>$$k = \{A_{1}',\dots,A_k'\} \subseteq \{A_{1},\dots,A_n\}$$

Una istanza di relazione soddisfa il vincolo di chiave se non esistono tuple distinte che coincidono negli attributi che compongono l'insieme chiave.

>[!attention] In questo caso non parliamo di minimale
>Il concetto di minimale non appartiene a questa progettazione, in quanto viene definita come caratteristica degli identificatori della progettazione concettuale.
>Nella progettazione logica stiamo solo traducendo le caratteristiche/proprietà che abbiamo identificato nella progettazione concettuale.

Nel modello relazionale (nello schema di relazione) indichiamo la chiave sottolineando gli attributi che compongono l'insieme di attributi chiave.

#### Chiavi secondarie
Se nel modello ER sono presenti più chiavi candidate nella traduzione nel modello relazionale una di esse diventerà la **chiave primaria**, mentre le altre saranno **chiavi secondarie**.
Indichiamo la chiave secondaria con `UNIQUE`
$$
\text{Fornitore} ( \underline{\text{P.iva}}, \overbrace{\text{nome, città}}^{\text{UNIQUE}})
$$
La scelta della chiave primaria avviene in base al fatto che poi verrà utilizzata come meccanismo principale di organizzazione nella rappresentazione della tabella.
### Vincolo di integrità referenziale
Un vincolo di integrità referenziale impone che i valori di riferimento a un'altra tabella (chiave esterna) siano sempre presenti nella tabella referenziata, mantenendo coerenti i legami che nel modello ER erano relazioni tra entità
Nell'esempio precedente dobbiamo fare in modo che nella tabella Fornitura non possano essere inseriti elementi non presenti nelle tabelle Fornitore e Merce.

>[!important] Chiave esterna (foreign key)
>Dati 2 schemi di relazione
>$$R_{1}(A_{1},\dots,A_n) \hspace{4ex} R_{2}(B_{1},\dots,B_n)$$
>la **chiave esterna** è una espressione del tipo
>$$R_{1}[A_{1}',\dots,A_k'] \sqsubseteq_{FK} R_{2}[B_{1}',\dots,B_k']$$
>Dove $\{B_{1}',\dots,B_k'\}$ è chiave di $R_{2}$ e $\{A_{1}',\dots,A_k'\} \subseteq \{A_{1},\dots,A_m\}$

Sia $r_{1}$ una istanza di $R_{1}$ ed $r_{2}$ una istanza di $R_{2}$, $r_{1}$ ed $r_{2}$ soddisfano il vincolo di chiave esterna solo se
$$
\forall t_{1} \in r_{1}, \exists t_{2} \in r_{2} \ : \ t_{1}[A_{1}'] = t_{2}[B_{1}'] \wedge \dots \wedge t_{1}[A_k'] = t_{2}[B_k']
$$

>[!bug] Seppur il nome coincida il concetto di chiave esterna è profondamente diverso da quanto detto per la progettazione concettuale.

Nello schema relazionale codifichiamo il legame con le altre tabelle come segue
$$
\displaylines{
\text{Fornitura[Fornitore]}\sqsubseteq_{FK}\text{Fornitore [p.iva]} \\
\text{Fornitura[Merce]} \sqsubseteq_{FK} \text{Merce[cod]}
}
$$
### Vincolo di cardinalità
In base alla cardinalità descritta nel modello ER possono esistere vari modi di rappresentarlo nel modello relazionale
#### Vincolo 0:1
