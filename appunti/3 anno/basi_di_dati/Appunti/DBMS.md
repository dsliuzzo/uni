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
#### Chiavi candidate esterne in chiavi
>[!multi-column]
>
>>[!blank]
>>Se nel modello ER abbiamo delle chiavi esterne nel modello relazionale nel momento in cui definiamo la foreign key dobbiamo fare attenzione a legare tutti gli attributi che compongono la chiave interna di Merce e inserire tutti gli attributi all'interno della relazione Produzione
>>$$\begin{array}{c}
>>\text{Fornitore}(\underline{\text{p.iva}}, \text{nome}, \text{città}) \\
>>\text{Merce}(\underline{\text{nome}}, \underline{\text{marca}}) \\
>>\text{Marca}(\underline{\text{nome}}, \text{sede}) \\ \\
>>\text{Fornitura}(\underline{\text{fornitore}}, \underline{\text{nomeM}}, \underline{\text{marcaM}}, \text{prezzo}) \\ \\
>>\text{Fornitura}[\text{fornitore}] \sqsubseteq_{FK} \text{Fornitore}[\text{p.iva}] \\
>>\text{Fornitura}[\text{nomeM}, \text{marcaM}] \sqsubseteq_{FK}\text{Merce}[\text{nome}, \text{marca}]
>>\end{array}$$
>
>>[!blank]
>>![[DBMS-1791804621439.webp|491]]
### Vincolo di cardinalità
In base alla cardinalità descritta nel modello ER possono esistere vari modi di rappresentarlo nel modello relazionale
![[DBMS-1791643675437.webp|center|555]]
#### Vincolo uno a molti
1:1 --- 0:n
Per definire un vincolo 1:1 possiamo agire in due modi

**Metodo 1**
Possiamo creare una nuova relazione e usare solo Merce come chiave
$$
\displaylines{
\text{Fornitore}(\underline{p.iva}, \text{nome}, \text{città}) \\
\text{Merce}(\underline{\text{cod}}, \text{nome}) \\
\text{Marca}(\underline{\text{nome}}, \text{sede}) \\ \\
\text{Produzione}(\underline{\text{Merce}}, \text{Marca}) \\
\text{Produzione}[\text{Merce}] \sqsubseteq_{FK} \text{Merce}[\text{cod}] \\
\text{Produzione}[\text{Marca}] \sqsubseteq_{FK} \text{Marca}[\text{nome}]
}
$$
**Metodo 2**
Non creiamo una nuova relazione, ma usiamo la foreign key, accorpando la relazione all'entità
$$
\displaylines{
\text{Fornitore}(\underline{p.iva}, \text{nome}, \text{città}) \\
\text{Merce}(\underline{\text{cod}}, \text{nome}, \text{marca}) \\
\text{Marca}(\underline{\text{nome}}, \text{sede}) \\ \\
\text{Marca}[\text{marca}] \sqsubseteq_{FK} \text{Marca}(\text{nome})
}
$$
#### Vincolo 0 a molti
0:1 --- 0:n
Nel caso in cui l'attributo marca all'interno di Merce può non essere usato (0:1), possiamo usare il [[#Vincolo 1 1|metodo 1]], ma con l'attributo `NULL`
$$
\displaylines{
\text{Fornitore}(\underline{p.iva}, \text{nome}, \text{città}) \\
\text{Merce}(\underline{\text{cod}}, \text{nome}, \overbrace{\text{marca}}^{\text{NULL}}) \\
\text{Marca}(\underline{\text{nome}}, \text{sede}) \\ \\
\text{Merce}[\text{marca}] \sqsubseteq_{FK} \text{Marca}[\text{nome}]
}
$$
#### Vincolo molti a molti
0:n --- 0:n
Nel caso in cui i vincoli da entrambi i lati sono $0:n$ dobbiamo obbligatoriamente creare una nuova relazione
$$
\displaylines{
\text{Fornitore}(\underline{p.iva}, \text{nome}, \text{città}) \\
\text{Merce}(\underline{\text{cod}}, \text{nome}) \\
\text{Marca}(\underline{\text{nome}}, \text{sede}) \\ \\
\text{Fornitura}(\underline{\text{Fornitore}}, \underline{\text{Merce}}, \text{prezzo}) \\
\text{Fornitura}[\text{Fornitore}] \sqsubseteq_{FK} \text{Fornitore}[\text{p.iva}] \\
\text{Fornitura}[\text{Merce}] \sqsubseteq_{FK} \text{Merce}[\text{cod}]
}
$$
#### Vincolo 1:n
0:n --- 1:n
*es.* Ogni merce è fornita da almeno un fornitore
Nel modello relazionale per rappresentare il vincolo 1:n non esiste un modo pulito privo di errori:
potremmo definire la prima istanza messa in relazione come attributo dell'entità e tutti gli altri tramite relazione
$$
\displaylines{
\text{Merce}(\underline{\text{nome}}, \underline{\text{marca}},\text{fornitore}, \text{prezzo}) \\
\text{Merce}[\text{fornitore}] \sqsubseteq_{FK} \text{Fornitore}[\text{p.iva}]
}
$$
causando in questo modo ridondanza: il fornitore presente come attributo potrebbe anche essere presente nella relazione vera e propria.

Se vogliamo evitare questo problema rilassiamo il vincolo 1:n trattandolo come 0:n.
#### Vincolo 2:2
In questo caso è spesso sufficiente aggiungere due attributi alla relazione. Se la cardinalità del vincolo è troppo grande decidiamo di rilassare la struttura e trattarlo come 0:n.
Rimane il problema però che i due attributi non possono essere uguali, per questo definiamo dei **check**.

>[!important] Check
>Dei vincoli che verranno verificati solo tra gli attributi di ciascuna tupla

questi verificheranno che il fornitore1 sia diverso dal fornitore2
$$
\text{Merce}(\underline{\text{nome}}, \underline{\text{marca}}, \text{fornitore1}, \text{fornitore2}, \text{prezzo1}, \text{prezzo2}) \hspace{8ex} \text{fornitore1} \overset{\text{CHECK}}{\neq} \text{fornitore2}
$$
#### Vincolo 2:3
Ci comportiamo in modo analogo al 2:2, ma aggiungendo un terzo attributo, che dichiariamo come NULL.

In questo caso non è necessario mettere il prezzo3 a NULL, così evitiamo di implementare la possibilità di inserire un fornitore3 senza prezzo3.

#### Vincolo uno a uno
In questi casi tipicamente le due entità possono essere accorpate in una unica relazione
>[!multi-column]
>
>>[!blank]
>>![[DBMS-1791829956609.webp]]
>
>>[!blank]
>>$$\text{Cliente}(\underline{\text{CF}}, \text{nome}, \text{dataR}, \text{tipo})$$

Dobbiamo fare attenzione alle [[#Chiavi secondarie]] nel caso in cui siano presenti delle chiavi candidate diverse dalla relazione stessa e dobbiamo decidere quale delle due chiavi candidate sarà la chiave primaria della relazione e quale la secondaria
>[!multi-column]
>
>>[!blank]
>>![[DBMS-1791829813851.webp]]
>
>>[!blank]
>>$$\text{ClienteConTessera}(\underline{\text{CF}}, \overbrace{\text{ID}}^{\text{UNIQUE}}, \text{nome}, \text{dataR}, \text{tipo})$$

Se invece abbiamo uno dei due lati a 0:1 tipicamente definiamo una nuova relazione
>[!multi-column]
>
>>[!blank]
>>![[DBMS-1791829829708.webp]]
>
>>[!blank]
>>$$\displaylines{
>>\text{Cliente}(\underline{\text{CF}}, \text{nome}) \\
>>\text{Tessera}(\underline{\text{ID}}, \text{dataR}, \text{tipo}, \overbrace{\text{cliente}}^\text{UNIQUE}) \\
>>\text{Tessera}[\text{cliente}] \sqsubseteq_{FK} \text{Cliente}[\text{CF}]
>>}$$
### ISA (modello relazionale)
![[DBMS-1791808941122.webp|center|143]]
In questo caso è sufficiente aggiungere un attributo con NULL: se un operaio ha la specializzazione allora sarà un operaio specializzato, altrimenti no
$$\text{Operaio}(\underline{\text{matr}}, \text{nome}, \overset{\text{NULL}}{\text{specializzazione}})$$

Se invece sono presenti delle relazioni specifiche per la sotto entità allora dobbiamo definire separatamente altre relazioni
![[DBMS-1791827446802.webp|center|481]]
$$
\displaylines{
\text{Certificazione(\underline{operaioSpecializzato, data}, descrizione)} \\
\text{Certificazione[operaioSpecializzato]} \sqsubseteq_{FK} \text{Operaio[matricola]}
}
$$

Tuttavia posso inserire anche operai non specializzati, perché i valori sono presi dalla chiave di Operaio. Serve quindi un'altra soluzione: se non divido le entità non riesco a distinguere la classe generale dalla specifica. Per questo trasformo l'ISA in relazione:
![[DBMS-1791827618776.webp|center|710]]
$$
\displaylines{
\text{Operaio}(\underline{\text{matr.}}, \text{nome}) \\
\text{OperaioSpecializzato}(\underline{\text{operaio}}, \text{specializzazione}) \\
\text{Certificazione}(\underline{\text{operaioSpecializzato}}, \underline{\text{data}}, \text{descrizione}) \\ \\
\text{Certificazioe}[\text{operaioSpecializzato}] \sqsubseteq_{FK} \text{OperaioSpecializzato}[\text{operaio}] \\
\text{OperaioSpecializzato}[\text{operaio}] \sqsubseteq_{FK} \text{Operaio}[\text{matr}]
}
$$

Tipicamente se la sotto entità non è collegata ad altro possiamo accorparla, se invece:
- la maggior parte degli operai non sono specializzati
- gli operai specializzati hanno molti attributi
- ci sono delle relazioni con la sotto entità
creiamo una nuova relazione.
### Generalizzazione (modello relazionale)
![[DBMS-1791828394851.webp|center|793]]


**Metodo 1 - Unica relazione con attributo tipo**
Esprimendo il tipo ($0$: docente, $1$: studente, $2$: solo persona, $3$: docente e studente), si ignora l'altro campo. Garantisce quindi totalità ed esclusività (volendo si possono rappresentare anche gli altri vincoli).
$$
\text{Persona}(\underline{CF}, \text{nome}, \text{tipo}, \text{SSD}, \text{CDL})
$$
Tuttavia, se sono presenti relazioni, sia per studente/docente sia per persona, il problema si ripresenta: non possiamo rappresentare la relazione di Studente con Titolo di studio.

**Metodo 2 - Relazione per il padre e per ogni figlio**
Va bene se docente e studente hanno molti attributi e altre relazioni. Consiste nel trasformare la generalizzazione in più relazioni, senza garantire né l'esclusività né la totalità:
$$
\displaylines{
\text{Persona}(\underline{\text{CF}}, \text{nome}) \\
\text{Studente}(\underline{\text{persona}}, \text{CDL}) \\
\text{Docente}(\underline{\text{persona}}, \text{SSD}) \\
\text{Titolo}(\underline{\text{numero progressivo}}, \underline{\text{studente}}, \text{descrizione}) \\ \\
\text{Studente}[\text{persona}] \sqsubseteq_{FK} \text{Persona} (\text{CF}) \\
\text{Docente}[\text{persona}] \sqsubseteq_{FK} \text{Persona} (\text{CF}) \\
\text{Titolo}[\text{studente}] \sqsubseteq_{FK} \text{Studente} (\text{persona}) \\
}
$$
**Metodo 3 - Eliminazione del padre**
Si elimina Persona ripetendo i campi comuni nelle entità
$$
\displaylines{
\text{Studente}(\underline{\text{CF}}, \text{nome}, \text{CDL}) \\
\text{Docente}(\underline{\text{CF}}, \text{nome}, \text{SSD}) \\
\text{Titolo}(\underline{\text{numero progressivo}}, \underline{\text{studente}}, \text{descrizione}) \\ \\
\text{Titolo}[\text{studente}] \sqsubseteq_{FK} \text{Studente}[\text{CF}]
}
$$
Con questa soluzione garantisco la totalità, ma non l'esclusività. Supponendo inoltre che Persona abbia relazioni:
$$
\displaylines{
\text{IndirizzoS(\underline{ID}, descrizione, studente)} \\
\text{IndirizzoD(\underline{ID}, descrizione, docente)} \\ \\
\text{IndirizzoS[studente]} \sqsubseteq_{FK} \text{Studente[CF]} \\
\text{IndirizzoD[docente]} \sqsubseteq_{FK} \text{Docente[CF]}
}
$$
Ma perdendo l'esclusività si perde anche negli indirizzi: posso avere più indirizzi con ID diversi.

**In conclusione**

|              | **Totalità** | **Generalità** | **Relazioni** |
| ------------ | ------------ | -------------- | ------------- |
| **Metodo 1** | ✅            | ❌              | Solo padre    |
| **Metodo 2** | ❌            | ❌              | ✅             |
| **Metodo 3** | ✅            | ✅              | ❌             |







---

MySQL
schema di data base -> spazio logico in cui manteniamo le tabelle
creazione del database
$$
\displaylines{
\text{Fornitore}(\underline{P.iva}, \overset{\text{UNIQUE}}{\text{nome}}, \text{città}) \\
\text{Fornitura}(\underline{\text{fornitore, merce}}, \text{prezzo}) \\
\text{Merce}(\underline{\text{cod}}, \text{nome}, \text{marca})
}
$$

``` sql
CREATE DATABASE MioDB;
USE MioDB; -- se non lo utilizzassi dovrei usare MioDB come prefisso
CREATE TABLE Fornitore AS (
piva NUMBER(12) PRIMARY KEY, -- numero con 12 cifre
nome VARCHAR2(16) UNIQUE, -- i tipi specifici dipendono dal dbms es. varchar2 è una ottimizzazione di varchar
citta VARCHAR2(25)
); -- premendo invio viene creata la tabella e viene creata una istanza di relazione
```
modo migliore per scrivere chiavi con più attributi
``` sql
CREATE TABLE Fornitore AS (
piva NUMBER(12),
nome VARCHAR2(16),
citta VARCHAR2(25) NOT NULL,
PRIMARY KEY(piva),
UNIQUE(nome)
);
```
si possono inserire anche i check.
`NULL`/`NOT NULL` rende un attributo obbligatoria. Da predefinito dipende dal dbms

``` sql
CREATE TABLE Fornitura AS (
fornitore NUMBER(12) REFERENCES Fornitore(piva), -- chiavi esterna - metodo 1
merce NUMBER(6) REFERENCES Merce(cod),
prezzo NUMBER(4,2), -- numeri decimali - numero di lunghezza 4 di cui 2 decimali
PRIMARY KEY(fornitore, merce), -- qui lo abbiamo dovuto mettere per forza separato
);
```
``` sql
CREATE TABLE Fornitura AS (
fornitore NUMBER(12),
merce NUMBER(6),
prezzo NUMBER(4,2),
PRIMARY KEY(fornitore, merce),
FOREIGN KEY fornitore REFERENCES Fornitore(piva) -- chiavi esterne - metodo 2
FOREIGN KEY merce REFERENCES Merce(cod)
);
```

inserimento tuple
``` sql
INSERT INTO Fornitore VALUES
	('F1', 'A', 'CS'),
	('F2', 'B', 'RC');
```

visualizzare tuple
``` sql
SELECT * FROM Fornitore; -- contenuto corrente della tabella fornitore
```

data una merce conoscere il fornitore che la fornisce al prezzo più basso la merce di nome x, informazione contenuta in più tabelle
dobbiamo prima associare il nome al codice, poi posso scorrere le forniture per trovare il prezzo minimo
**estrazione di informazioni rilevanti**
non scriviamo esplicitamente iteratori e condizioni
tesi di church - for e if sono in grado di risolvere tutti i problemi decidibili
sql non rispetta questa tesi, non ha for, if o ricorsione, non è un linguaggio Turing completo e non è un linguaggio imperativo
potrebbe essere necessario usare sql richiamato all'interno di un programma che usa un linguaggio imperativo

**algebra relazionale**
esistono plug in su MySQL che permettono di usare questo linguaggio

>[!important] Interrogazione
>Richiedere al DBMS un servizio

- Interrogazione di definizione dei dati (creazione della tabella)
- interrogazione di manipolazione dei dati (estrazione e congiunzione dei dati provenienti da diverse tabelle)





**Tabella Fornitore**

| piva | nome | citta |
| ---- | ---- | ----- |
| F1   | A    | CD    |
| F2   | B    | RC    |
| F3   | C    | CS    |
**Tabella Merce**

| cod | nome | marca    |
| --- | ---- | -------- |
| M1  | x    | $\alpha$ |
| M2  | y    | $\beta$  |
**Tabella Fornitura**

| fornitore | merce | prezzo |
| --------- | ----- | ------ |
| F1        | M1    | 10     |
| F1        | M2    | 5      |
| F2        | M1    | 8      |



*es.* estraiamo i dettagli dei fornitori che stanno a cs - operazione di selezione - tra tutte le righe della tabella restituisce solo quelle con una determinata proprietà
$$
\sigma_{\text{città = 'CS'} \vee (\text{nome} \neq \text{'A'} \wedge \text{cod} \neq \text{'A'})}(\text{Fornitore})
$$

| F1  | A   | CS  |
| --- | --- | --- |
| F3  | C   | CS  |

$\sigma$ operatore di selezione
argomento = Fornitore
pedice = condizione che ogni tupla restituita deve rispettare
la condizione tipicamente è booleana ed è espressa da una formula booleana che può essere più complessa eventualmente parentesizzata, sono comparazioni tra attributi e costanti
filtraggio
una tupla per volta e i confronti vengono fatti sui campi della tupla stessa
L'argomento è una sola tabella -> la selezione è un operatore monadico
viene valutata sull'istanza della relazione

*es*. merci che si chiamano x o che sono prodotte dalla marca $\beta$
$$
\sigma_{\text{nome} = 'x' \vee \text{marca}='\beta'}(\text{Merce})
$$

il for e l'if in sql sono precablati

il risultato di una selezione è un'altra tabella -> operatore rientrante, agisce su un dominio e restituisce qualcosa che appartiene allo stesso dominio, tabelle
la tabella risultato ha la stessa struttura, stesso numero di colonne e stessi attributi
Il numero di colonne di una tabella si chiama **arità**
il numero di righe della nuova tabella $\subseteq$ dell'argomento
la cardinalità del risultato $\leq$ della cardinalità dell'argomento


filtrare le colonne
non posso farlo con la selezione -> operatore **proiezione** -> prendere una tabella con un insieme di colonne e focalizzarsi solo su un insieme ristretto di colonne
*es.* piva dei fornitori
$$
\Pi_{\text{piva}} (\text{Fornitore})
$$

| F1  |
| --- |
| F2  |
| F3  |
Posso anche avere più colonne
$$
\Pi_{\text{piva, città}} (\text{Fornitore})
$$
anche questo è un operatore monadico

*es.* restituisce i nomi delle merci
$$
\Pi_{\text{nome}}(\text{Merce})
$$
restituisce l'insieme di tuple ottenuto per proiezione
è rientrante
cambia l'arità
la cardinalità può variare: 
$$
\Pi_{\text{città}}(\text{Fornitore})
$$

| CS  |
| --- |
| RC  |
è per definizione un insieme: non ammette duplicati
anche la proiezione in un linguaggio normale sarebbe implementata con un for (senza if), ma fa anche il controllo se il valore è già presente nella tabella -> complessità computazionale maggiore ($n^2$)
$$
(n-1)+(n-2)+\dots+2+1 = \frac{n(n-1)}{2} = \Theta(n^2)
$$
nella selezione non c'è bisogno di questo controllo perché l'argomento era già una tabella e [...] spiega meglio che tanto hai capito

essendo rientranti il risultato di una può essere usata come ingresso dell'altra
*es.* nomi dei fornitori che stanno a cs
$$
\Pi_{\text{nome}} (\sigma_{\text{città = 'CS'}}(\text{Fornitore}))
$$
l'ordine è importante, se faccio prima la proiezione elimino l'attributo rilevante per la selezione
[...] guarda cla

*es.* conoscere i cod delle merci x prodotti da $\alpha$
$$
\Pi_{\text{cod}}[\sigma_{\text{nome='x'} \wedge \text{marca}='\alpha'}(\text{Merce})]
$$
*es.* codici dei fornitori che forniscono la merce M1
$$
\Pi_{\text{fornitore}}[\sigma_{\text{cod = 'M1'}}(\text{Fornitura})]
$$


spesso le informazioni di cui abbiamo bisogno non stanno su una unica tabella
*es.* nomi dei fornitori che forniscono M1
operatori che consentono di fare il merge di più tabelle
operatore **join**
per ottenere l'informazione necessaria ho bisogno di unire le informazioni che stanno in Fornitura e in Fornitore
ottenendo una unica grande tabella
le uniamo solo nel momento in cui facciamo la query
$$
\text{Fornitura} \underset{\text{fornitore = piva}}{\bowtie} \text{Fornitore}
$$

| F1  | M1  | 10  | F1  | A   | CS  |
| --- | --- | --- | --- | --- | --- |
| F1  | M2  | 5   | F1  | A   | CS  |
| F2  | M1  | 8   | F2  | B   | RC  |

tutte le coppie possibili fornitura-fornitore, ma abbiamo tenuto solo le coppie in cui vale la condizione
ogni riga di fornitura la prolungo con tutte le righe che rispettano la condizione
operatore binario
per convenzione gli attributi di sinistra dell'uguaglianza appartengono alla tabella di sinistra e viceversa per quelle di destra.
l'ordine non cambia il risultato
prende in input due tabelle e ne restituisce una
ora possiamo effettuare una proiezione sul risultato della join
$$
\Pi_{\text{nome}}\left[\sigma_{\text{cod = 'M1'}}\left(\text{Fornitura} \underset{\text{fornitore = piva}}{\bowtie} \text{Fornitore}\right)\right]
$$

d'ora in poi ogni attributo sia identificato dalla sua posizione per semplicità
$$
\Pi_{\$5}\left[\sigma_{\$2=\text{'M1'}}\left(\text{Fornitura} \underset{\$1 = \$1}{\bowtie} \text{Fornitore}\right)\right]
$$
per evitare formule troppo lunghe e omonimi usiamo gli attributi posizionali.



*es.* per casa
1. i dati delle forniture della merce M2
2. le piva dei fornitori che forniscono qualcosa (è presente nella tabella fornitura)
3. la marca delle merci di cod M2
4. i nomi delle merci fornite da F1
5. le città in cui è fornita la merce M2
6. le coppie nome_merce - nome_fornitore t.c. il fornitore con quel nome fornisce la merce con quel nome (collegare 3 tabelle usa le parentesi per evitare ambiguità nella notazione posizionale)







# Implementazione in SQL

Una volta definito lo schema logico si passa all'**implementazione**: lo schema di relazione viene tradotto in istruzioni SQL (*DDL*, Data Definition Language) che creano la base di dati.

## Creazione del database

> [!note] Creare e selezionare il database
> ```sql
> CREATE DATABASE MyDB;  -- spazio logico dello schema di DB
> USE MyDB;              -- senza USE servirebbe il prefisso MyDB. in ogni istruzione
> ```

## Creazione di una tabella

Dato lo schema di relazione, con il vincolo di unicità sul nome:

$$
\text{Fornitore}(\underline{\text{P.IVA}},\ \text{nome},\ \text{città}) \qquad \text{nome} = \texttt{UNIQUE}
$$

> [!info] CREATE TABLE: vincoli sulla stessa riga
> ```sql
> -- DEFINIZIONE DELLO SCHEMA DI RELAZIONE
> CREATE TABLE Fornitore (
>     piva  NUMBER(12) PRIMARY KEY,  -- numero con 12 cifre
>     nome  VARCHAR2(16) UNIQUE,     -- stringa di lunghezza variabile (max 16)
>     città VARCHAR2(25)
> );
> ```
> Eseguendo l'istruzione (invio) si crea lo **schema**; la tabella nasce vuota, cioè con un'istanza di relazione senza tuple.

Una versione più *pulita* dichiara i vincoli dopo gli attributi, e indica `NOT NULL` accanto a quelli obbligatori:

> [!info] CREATE TABLE: vincoli dichiarati alla fine
> ```sql
> CREATE TABLE Fornitore (
>     piva  NUMBER(12),
>     nome  VARCHAR2(16),
>     città VARCHAR2(25) NOT NULL,
>     PRIMARY KEY (piva),
>     UNIQUE (nome)
> );
> ```

> [!warning] Attenzione: NULL e nomi dei tipi
> Se dopo un attributo non si specifica nulla, il fatto che possa essere `NULL` o meno **dipende dal DBMS**: bisogna consultarne la documentazione. Lo stesso vale per i nomi dei tipi (`NUMBER`, `VARCHAR2` sono di Oracle; in MySQL si usano ad esempio `INT`, `DECIMAL`, `VARCHAR`).

## Chiavi esterne

$$
\text{Fornitura}(\underline{\text{fornitore, merce}},\ \text{prezzo})
$$

Una chiave esterna si può dichiarare in due modi:

1. **(M1)** accanto all'attributo, con `REFERENCES`;
2. **(M2)** a fine tabella, con `FOREIGN KEY`.

> [!info] Modo 1: REFERENCES accanto all'attributo
> ```sql
> CREATE TABLE Fornitura (
>     fornitore NUMBER(12) REFERENCES Fornitore(piva),
>     merce     NUMBER(6)  REFERENCES Merce(codice),
>     prezzo    NUMBER(4,2),  -- 4 cifre in totale, di cui 2 decimali
>     PRIMARY KEY (fornitore, merce)
> );
> ```

> [!info] Modo 2: FOREIGN KEY a fine tabella
> ```sql
> CREATE TABLE Fornitura (
>     fornitore NUMBER(12),
>     merce     NUMBER(6),
>     prezzo    NUMBER(4,2),
>     PRIMARY KEY (fornitore, merce),
>     FOREIGN KEY (fornitore) REFERENCES Fornitore(piva),
>     FOREIGN KEY (merce)     REFERENCES Merce(codice)
> );
> ```

> [!note] Osservazione
> Le tabelle `Fornitore` e `Merce` devono essere create **prima** di `Fornitura`, perché la chiave esterna può riferirsi solo a una tabella già esistente. Con una chiave esterna **composta** (come `Merce_nome, Merce_marca`) si usa un'unica clausola `FOREIGN KEY (a, b) REFERENCES T(x, y)`, non una per attributo.

## Manipolazione dei dati

Una volta create le tabelle è possibile interagirvi (*DML*, Data Manipulation Language):

> [!info] INSERT e SELECT
> ```sql
> -- INSERIRE TUPLE
> INSERT INTO Fornitore VALUES
>     (1, 'A', 'CS'),   -- elenco delle tuple
>     (2, 'B', 'RC');
>
> -- VISUALIZZAZIONE DELLA TABELLA
> SELECT * FROM Fornitore;  -- mostra il contenuto corrente della tabella
> ```
> Le tuple vengono inserite nell'ordine degli attributi dello schema. Il risultato di `SELECT` è l'**istanza di relazione** in quel momento.