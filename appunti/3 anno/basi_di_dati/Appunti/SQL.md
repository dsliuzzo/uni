#appunti 
#basi_di_dati
# Implementazione 
Una volta definito lo [[Modello relazionale|schema logico]] si passa all'**implementazione**: lo schema di relazione viene tradotto in istruzioni SQL (*DDL*, Data Definition Language) che creano la base di dati.

>[!important] Interrogazione (query)
>Richiedere al DBMS un servizio
>- Interrogazione di **definizione** dei dati (creazione della tabella)
>- interrogazione di **manipolazione** dei dati (estrazione e congiunzione dei dati provenienti da diverse tabelle)
## Sintassi
### Creazione del database

Creare e selezionare il database
```sql
CREATE DATABASE MyDB;  -- spazio logico dello schema di DB
USE MyDB;              -- senza USE servirebbe il prefisso MyDB. in ogni istruzione
```

### Creazione di una tabella

Dato lo schema di relazione, con il vincolo di unicità sul nome:

$$
\displaylines{
\text{Fornitore}(\underline{P.iva}, \overset{\text{UNIQUE}}{\text{nome}}, \text{città}) \\
\text{Fornitura}(\underline{\text{fornitore, merce}}, \text{prezzo}) \\
\text{Merce}(\underline{\text{cod}}, \text{nome}, \text{marca})
}
$$

CREATE TABLE: vincoli sulla stessa riga
```sql
-- DEFINIZIONE DELLO SCHEMA DI RELAZIONE
CREATE TABLE Fornitore (
    piva  NUMBER(12) PRIMARY KEY,  -- numero con 12 cifre
    nome  VARCHAR2(16) UNIQUE,     -- stringa di lunghezza variabile (max 16)
    città VARCHAR2(25)
);
```
Eseguendo l'istruzione (invio) si crea lo **schema**; la tabella nasce vuota, cioè con un'istanza di relazione senza tuple.

Una versione più *pulita* dichiara i vincoli dopo gli attributi, e indica `NOT NULL` accanto a quelli obbligatori:

CREATE TABLE: vincoli dichiarati alla fine
```sql
CREATE TABLE Fornitore (
    piva  NUMBER(12),
    nome  VARCHAR2(16),
    città VARCHAR2(25) NOT NULL,
    PRIMARY KEY (piva),
    UNIQUE (nome)
);
```

> [!warning] Attenzione: NULL e nomi dei tipi
> Se dopo un attributo non si specifica nulla, il fatto che possa essere `NULL` o meno **dipende dal DBMS**: bisogna consultarne la documentazione. Lo stesso vale per i nomi dei tipi (`NUMBER`, `VARCHAR2` sono di Oracle; in MySQL si usano ad esempio `INT`, `DECIMAL`, `VARCHAR`).

### Chiavi esterne
Traduzione del [[Modello relazionale#Vincolo di integrità referenziale|vincolo di integrità referenziale]].

$$
\text{Fornitura}(\underline{\text{fornitore, merce}},\ \text{prezzo})
$$

Una chiave esterna si può dichiarare in due modi:

1. **(M1)** accanto all'attributo, con `REFERENCES`;
2. **(M2)** a fine tabella, con `FOREIGN KEY`.

**Modo 1**: REFERENCES accanto all'attributo
```sql
CREATE TABLE Fornitura (
    fornitore NUMBER(12) REFERENCES Fornitore(piva),
    merce     NUMBER(6)  REFERENCES Merce(codice),
    prezzo    NUMBER(4,2),  -- 4 cifre in totale, di cui 2 decimali
    PRIMARY KEY (fornitore, merce)
);
```

**Modo 2**: FOREIGN KEY a fine tabella
```sql
CREATE TABLE Fornitura (
    fornitore NUMBER(12),
    merce     NUMBER(6),
    prezzo    NUMBER(4,2),
    PRIMARY KEY (fornitore, merce),
    FOREIGN KEY (fornitore) REFERENCES Fornitore(piva),
    FOREIGN KEY (merce)     REFERENCES Merce(codice)
);
```

> [!question] Osservazione
> Le tabelle `Fornitore` e `Merce` devono essere create **prima** di `Fornitura`, perché la chiave esterna può riferirsi solo a una tabella già esistente. Con una chiave esterna **composta** (come `Merce_nome, Merce_marca`) si usa un'unica clausola `FOREIGN KEY (a, b) REFERENCES T(x, y)`, non una per attributo.

### Manipolazione dei dati

Una volta create le tabelle è possibile interagirvi (*DML*, Data Manipulation Language):

INSERT e SELECT
```sql
-- INSERIRE TUPLE
INSERT INTO Fornitore VALUES
    (1, 'A', 'CS'),   -- elenco delle tuple
    (2, 'B', 'RC');
-- VISUALIZZAZIONE DELLA TABELLA
SELECT * FROM Fornitore;  -- mostra il contenuto corrente della tabella
```
Le tuple vengono inserite nell'ordine degli attributi dello schema. Il risultato di `SELECT` è l'**istanza di relazione** in quel momento.


# SQL
**Structured Query Language** (linguaggio di interrogazione strutturato).
Non è un linguaggio imperativo, ma un linguaggio dichiarativo che si avvicina all'[[Algebra relazionale|algebra relazionale]].

Le query sono **strutturate**: hanno tutte la stessa forma e vanno organizzate sempre allo stesso modo, in **clausole**. Ogni clausola descrive una caratteristica della query.

>[!important] Struttura di una query
>```sql
>SELECT ...  -- cosa visualizzare        (proiezione)
>FROM ...    -- da quali tabelle          (prodotto cartesiano)
>WHERE ...;  -- quali righe tenere        (selezione)
>```
>- l'ordine delle clausole è **prestabilito** e deve essere sempre questo
>- l'ordine in cui scriviamo le clausole **non** corrisponde all'ordine in cui vengono svolte dal DBMS
>- il delimitatore predefinito `;` indica la fine di un comando

## Interrogazioni di base
### SELECT e FROM
`SELECT` indica cosa vogliamo visualizzare. Senza `FROM` mostra dei valori costanti:
```sql
SELECT 3, 'ciao', 2*4+1; -- crea e mostra una tupla con i valori 3, 'ciao' e 9
```

Per prelevare i valori da una tabella dobbiamo indicarla nella `FROM`: il risultato è una tabella con le colonne indicate nella `SELECT`.

>[!check] Esempio
>Partita IVA e nome dei fornitori.
>$$\Pi_{\$1, \$2}(\text{Fornitore})$$
>```sql
>SELECT piva, nome
>FROM Fornitore;
>```
>
>| piva | nome |
>| ---- | ---- |
>| F1   | A    |
>| F2   | B    |
>| F3   | C    |

Per visualizzare tutte le colonne di una tabella si usa `*`:
```sql
SELECT *
FROM Fornitore;
```

>[!attention] AGGIUNTA - Duplicati
>A differenza della [[Algebra relazionale#Operatore di proiezione|proiezione]], `SELECT` **non elimina i duplicati**: il risultato può contenere più volte la stessa riga. Per eliminarli si usa `SELECT DISTINCT`.
>```sql
>SELECT DISTINCT citta
>FROM Fornitore;  -- CS, RC (senza DISTINCT: CS, RC, CS)
>```

### WHERE
`WHERE` tiene solo le righe che rispettano una determinata proprietà ([[Algebra relazionale#Operatore di selezione|selezione]]). Le condizioni si combinano con `AND`, `OR`, `NOT`.

>[!check] Esempio
>Fornitori che stanno a CS oppure che non si chiamano A.
>$$\sigma_{\$3 = \text{'CS'} \,\vee\, \$2 \neq \text{'A'}}(\text{Fornitore})$$
>```sql
>SELECT *
>FROM Fornitore
>WHERE Fornitore.citta = 'CS'
>	OR Fornitore.nome != 'A';
>```

- Quando indichiamo un attributo conviene usare come **prefisso** la tabella da cui lo prendiamo (`Fornitore.citta`), per evitare problemi dovuti alle omonimie.
- Il simbolo di $\neq$ dipende dal DBMS: potrebbe essere `!=`, `<>` o altro.

### Ridenominazione (AS)
Se i nomi delle tabelle sono troppo lunghi possiamo effettuare una **ridenominazione locale**, che ci permette di richiamare la tabella con un nome diverso all'interno della query:
```sql
SELECT *
FROM Fornitore AS F
WHERE F.citta = 'CS'
	OR F.nome != 'A';
```
Cerchiamo consistenza: se usiamo il prefisso per indicare la tabella di origine dell'attributo, lo usiamo ovunque, anche nella `SELECT`.

`AS` si può usare anche nella `SELECT`: il risultato avrà come intestazione della colonna il nome indicato dopo `AS`.
```sql
SELECT F.nome AS nomeForn
FROM Fornitore AS F
WHERE F.citta = 'CS';
```
La keyword `AS` non è necessaria, basta lo spazio:
```sql
SELECT F.nome nomeForn
FROM Fornitore F
WHERE F.citta = 'CS';
```

>[!check] Esempio
>Nomi delle merci la cui marca è $\alpha$ oppure $\beta$, con intestazione della colonna `nomeMerce`.
>$$\Pi_{\$2}\left[\sigma_{\$3 = \text{'}\alpha\text{'} \,\vee\, \$3 = \text{'}\beta\text{'}}(\text{Merce})\right]$$
>```sql
>SELECT M.nome AS nomeMerce
>FROM Merce AS M
>WHERE M.marca = 'alpha'
>	OR M.marca = 'beta';
>```
>
>| nomeMerce |
>| --------- |
>| x         |
>| y         |

### Join e prodotto cartesiano
In SQL esiste l'operatore di join, ma si usa raramente perché è piuttosto verboso. Le query si riformulano trasformando la join in una **selezione di un prodotto cartesiano** ([[Algebra relazionale#Prodotto cartesiano|relazione con la join]]):
- le tabelle elencate nella `FROM` separate da virgola formano il **prodotto cartesiano**
- le condizioni di join vanno nella `WHERE`

Quindi le tre clausole `SELECT`, `FROM`, `WHERE` bastano a esprimere selezione, proiezione, join e prodotto cartesiano.

>[!question] Approfondimento: la keyword JOIN
>Anche in SQL esiste la keyword `JOIN`:
>```sql
>FROM A, B
>WHERE A.a = B.b
>```
>$\equiv$
>```sql
>FROM A INNER JOIN B ON (A.a = B.b)
>```
>In questo modo, però, le query diventano poco leggibili.

>[!attention] AGGIUNTA
>Per gli altri [[Algebra relazionale#Tipi di join|tipi di join]] esistono anche `NATURAL JOIN`, `LEFT JOIN`, `RIGHT JOIN` e `FULL JOIN`.

>[!question] Osservazione
>- In SQL **non esiste la notazione posizionale**, ma solo quella nominale.
>- L'ordine delle colonne del risultato dipende dall'ordine nella `SELECT`, non da quello nella `FROM`.

>[!check] Esempio
>Nomi dei fornitori che forniscono la merce M1.
>$$\Pi_{\$5} \left[ \sigma_{\$2 = \text{'M1'}}(\text{Fornitura}) \underset{\$1 = \$1}{\bowtie} \text{Fornitore}\right]$$
>riscritta come prodotto cartesiano
>$$\Pi_{\$5}\left[\sigma_{\$2 = \text{'M1'} \,\wedge\, \$1 = \$4}(\text{Fornitura} \times \text{Fornitore})\right]$$
>```sql
>SELECT F.nome
>FROM Fornitura AS X, Fornitore AS F
>WHERE X.merce = 'M1'
>	AND F.piva = X.fornitore;
>```
>
>| nome |
>| ---- |
>| A    |
>| B    |

>[!check] Esempio
>Coppie `nomeFornitore|nomeMerce` tali che il fornitore fornisce la merce.
>$$\displaylines{
>\Pi_{\$5, \$8}\left[ \left( \text{Fornitura} \underset{\$1 = \$1}{\bowtie} \text{Fornitore} \right) \underset{\$2 = \$1}{\bowtie} \text{Merce} \right] \\
>\Pi_{\$5, \$8}\left\{\sigma_{\$1 = \$4 \,\wedge\, \$2 = \$7}\left[(\text{Fornitura} \times \text{Fornitore}) \times \text{Merce}\right]\right\}
>}$$
>```sql
>SELECT F.nome AS nomeFornitore, M.nome AS nomeMerce
>FROM Fornitura AS X, Fornitore AS F, Merce AS M
>WHERE X.fornitore = F.piva
>	AND X.merce = M.cod;
>```
>
>| nomeFornitore | nomeMerce |
>| ------------- | --------- |
>| A             | x         |
>| A             | y         |
>| B             | x         |

Quando la stessa tabella compare più volte nella `FROM` la ridenominazione è **necessaria**, per distinguere le copie.

>[!check] Esempio
>Nomi dei fornitori che forniscono almeno due merci ([[Algebra relazionale#Almeno 2|almeno 2]]).
>$$\Pi_{\$2}\left[ \text{Fornitore} \underset{\$1 = \$1}{\bowtie}\left( \text{Fornitura} \underset{\$1 = \$1 \,\wedge\, \$2 \neq \$2}{\bowtie} \text{Fornitura} \right) \right]$$
>```sql
>SELECT F.nome
>FROM Fornitore AS F, Fornitura AS X1, Fornitura AS X2
>WHERE X1.fornitore = X2.fornitore
>	AND X1.merce != X2.merce
>	AND F.piva = X1.fornitore;
>```
>Senza `DISTINCT` il risultato contiene A due volte, una per la coppia (M1, M2) e una per (M2, M1).

### Multinsiemi e DISTINCT
In algebra il risultato di ogni operazione è una relazione, in SQL no.
```sql
SELECT citta
FROM Fornitore;
```
- in algebra restituisce una riga per ogni città, senza ripetizioni
- in SQL restituisce **tante righe quante sono le righe originali**: non accorpa i duplicati. Se tutti i fornitori sono di Cosenza, otteniamo Cosenza tante volte quanti sono i fornitori

>[!important] Multinsieme
>SQL lavora su **multinsiemi** di tuple: insiemi in cui ogni elemento è associato a una **molteplicità**. Lo fa per efficienza, perché eliminare i duplicati costa.

Eliminare i duplicati ha un costo: la query diventa quadratica. La clausola `DISTINCT`, messa tra `SELECT` e gli attributi, restituisce solo righe diverse: la query diventa più lenta, ma elimina tutti i duplicati.

>[!attention] AGGIUNTA - Dubbio
>"Quadratica" vale per il confronto ingenuo di ogni riga con tutte le altre. I DBMS di solito eliminano i duplicati ordinando o con una tabella hash, quindi con costo $O(n \log n)$ o circa lineare.

## Operatori insiemistici e viste
### EXCEPT e UNION
Gli [[Algebra relazionale#Operatori insiemistici|operatori insiemistici]] si mettono **tra due query**: ogni operando va tradotto separatamente.
- `EXCEPT`: sottrazione, restituisce le tuple che stanno nel risultato della prima query e non in quello della seconda
- `UNION`: unione

>[!important] Compatibilità
>Gli operandi devono essere **compatibili**: non basta che abbiano la stessa arità, anche i **nomi delle colonne** devono corrispondere. Se sono diversi bisogna ridenominare gli attributi con `AS`.
>Da un insieme di arance non possiamo togliere patate ✨.

>[!attention] AGGIUNTA - Dubbio
>Nei DBMS più diffusi (PostgreSQL, MySQL, Oracle) gli operandi di `EXCEPT`/`UNION` vengono confrontati **per posizione**: devono avere lo stesso numero di colonne con tipi compatibili, e il risultato prende i nomi delle colonne della prima query. Ridenominare resta comunque la convenzione del corso, ed è utile per la leggibilità.

>[!check] Esempio
>Partita IVA dei fornitori che non forniscono merci: tutti i fornitori meno quelli che forniscono qualcosa.
>$$\Pi_{\$1}(\text{Fornitore}) - \Pi_{\$1}(\text{Fornitura})$$
>```sql
>SELECT piva AS fornitore
>FROM Fornitore
>
>EXCEPT
>
>SELECT fornitore
>FROM Fornitura;
>```
>
>| fornitore |
>| --------- |
>| F3        |

>[!check] Esempio
>Partita IVA dei fornitori che stanno a RC oppure che forniscono la merce M1.
>$$\Pi_{\$1} \left[\sigma_{\$3 = \text{'RC'}}(\text{Fornitore})\right] \cup \Pi_{\$1}\left[\sigma_{\$2 = \text{'M1'}}(\text{Fornitura})\right]$$
>```sql
>SELECT piva
>FROM Fornitore
>WHERE citta = 'RC'
>
>UNION
>
>SELECT fornitore AS piva
>FROM Fornitura
>WHERE merce = 'M1';
>```
>
>| piva |
>| ---- |
>| F1   |
>| F2   |

### Viste
Le **viste** (*view*) sono il corrispondente SQL delle variabili usate in algebra relazionale per i risultati intermedi. Sono **oggetti del database** e si creano esattamente come le tabelle:
```sql
CREATE VIEW NomeVista(attributo1, attributo2, ...) AS (
	query
);
```
Una volta creata, una vista si usa nella `FROM` come una qualsiasi tabella.

>[!check] Esempio
>Nomi dei fornitori che non forniscono nessuna merce.
>```sql
>CREATE VIEW FornitoreNessunaMerce(piva) AS (
>	SELECT piva
>	FROM Fornitore
>
>	EXCEPT
>
>	SELECT fornitore AS piva
>	FROM Fornitura
>);
>
>SELECT F.nome
>FROM FornitoreNessunaMerce AS N, Fornitore AS F
>WHERE N.piva = F.piva;
>```
>
>| nome |
>| ---- |
>| C    |

>[!check] Esempio
>Nomi dei fornitori che forniscono [[Algebra relazionale#Esattamente k e al più k|esattamente una]] merce: forniscono almeno 1 meno forniscono almeno 2.
>$$\displaylines{
>\text{esatt1} = \Pi_{\$1}(\text{Fornitura}) - \Pi_{\$1}\left( \text{Fornitura} \underset{\$1 = \$1 \,\wedge\, \$2 \neq \$2}{\bowtie} \text{Fornitura} \right) \\
>Q = \Pi_{\$3}\left( \text{esatt1} \underset{\$1 = \$1}{\bowtie} \text{Fornitore}\right)
>}$$
>```sql
>CREATE VIEW esatt1(piva) AS (
>	SELECT X.fornitore AS piva
>	FROM Fornitura AS X
>
>	EXCEPT
>
>	SELECT X1.fornitore AS piva
>	FROM Fornitura AS X1, Fornitura AS X2
>	WHERE X1.fornitore = X2.fornitore
>		AND X1.merce != X2.merce
>);
>
>SELECT F.nome
>FROM Fornitore AS F, esatt1
>WHERE F.piva = esatt1.piva;
>```
>
>| nome |
>| ---- |
>| B    |

>[!check] Esempio
>Nomi dei fornitori che forniscono **tutte** le merci prodotte dalla marca $\alpha$ ([[Algebra relazionale#Quantificazione universale|quantificazione universale]]), cioè i fornitori per cui non esiste alcuna merce di marca $\alpha$ che non forniscono.
>$$\displaylines{
>\text{FornituraANo}= \left\{\Pi_{\$1}(\text{Fornitore}) \times \Pi_{\$1}\left[\sigma_{\$3 = \text{'}\alpha\text{'}}(\text{Merce})\right]\right\} - \Pi_{\$1, \$2}(\text{Fornitura}) \\
>\text{FornitoriSi} = \Pi_{\$1}(\text{Fornitore}) - \Pi_{\$1}(\text{FornituraANo}) \\
>Q = \Pi_{\$2}\left( \text{Fornitore} \underset{\$1 = \$1}{\bowtie}\text{FornitoriSi} \right)
>}$$
>```sql
>CREATE VIEW FornituraANo(fornitore, merce) AS (
>	SELECT F.piva AS fornitore, M.cod AS merce
>	FROM Fornitore AS F, Merce AS M
>	WHERE M.marca = 'alpha'
>
>	EXCEPT
>
>	SELECT fornitore, merce
>	FROM Fornitura
>);
>
>CREATE VIEW FornitoriSi(piva) AS (
>	SELECT piva
>	FROM Fornitore
>
>	EXCEPT
>
>	SELECT fornitore AS piva
>	FROM FornituraANo
>);
>
>SELECT F.nome
>FROM Fornitore AS F, FornitoriSi AS FS
>WHERE F.piva = FS.piva;
>```
>Il prodotto cartesiano `Fornitore F, Merce M` senza condizioni di join genera tutte le coppie fornitore - merce di marca $\alpha$.
>
>| nome |
>| ---- |
>| A    |
>| B    |

## Interrogazioni annidate
### IN e NOT IN
I predicati `IN` ($\in$) e `NOT IN` ($\notin$) testano l'**appartenenza** di un elemento a un insieme.

>[!important] Sintassi
>```
><tupla> IN (<query>)
>```
>A sinistra c'è una tupla, a destra, tra parentesi, la query in cui si deve trovare.

>[!check] Esempio
>Nomi dei fornitori che forniscono qualche merce.
>$$\Pi_{\$ 2}\left( \text{Fornitore} \underset{\$ 1 = \$ 1}{\bowtie} \text{Fornitura} \right)$$
>Con la join teniamo solo i fornitori che forniscono qualcosa, ma concettualmente è esagerata:
>```sql
>SELECT F.nome
>FROM Fornitore F, Fornitura X
>WHERE F.piva = X.fornitore;
>```
>Basta testare se la partita IVA sta nel risultato di una `SELECT`:
>```sql
>SELECT F.nome
>FROM Fornitore F
>WHERE F.piva IN (SELECT fornitore FROM Fornitura);
>```

Con `NOT IN` possiamo evitare tutte le [[Algebra relazionale#Sottrazione|sottrazioni]] che usavamo in algebra.

>[!check] Esempio
>Nomi dei fornitori che non forniscono nulla.
>$$\Pi_{\$ 2}\left\{ \text{Fornitore} \underset{\$ 1 = \$ 1}{\bowtie} [\Pi_{\$ 1}(\text{Fornitore}) - \Pi_{\$ 1}(\text{Fornitura})]\right\}$$
>```sql
>SELECT F.nome
>FROM Fornitore F
>WHERE F.piva NOT IN (SELECT fornitore FROM Fornitura);
>```

>[!important] Formulazione procedurale e dichiarativa
>- La query in algebra è una **formulazione procedurale**: descrive i passi per calcolare il risultato.
>- In SQL la query segue l'enunciato: è una **formulazione dichiarativa**.

>[!question] Osservazione - Errore tipico
>```sql
>SELECT F.nome
>FROM Fornitore F
>WHERE F.piva IN Fornitura;  -- SBAGLIATA
>```
>Non possiamo chiedere se una tupla appartiene a una tabella: `IN` vuole a destra una **query**, non una tabella, anche se prendiamo tutte le colonne di `Fornitura`.
>Inoltre dovremmo ridenominare gli attributi in modo che abbiano lo stesso nome, come per la [[#EXCEPT e UNION|sottrazione]]. Se confrontiamo più attributi, SQL non saprebbe nemmeno come associarli.

>[!attention] AGGIUNTA - Confronto tra tuple
>Per testare più attributi insieme la tupla va scritta tra parentesi: `(F.piva, M.cod) IN (SELECT fornitore, merce FROM Fornitura)`. Le colonne sono confrontate per posizione. Funziona in PostgreSQL, MySQL e Oracle, non in SQL Server.

>[!attention] AGGIUNTA - NOT IN e valori nulli
>Se la sottoquery restituisce anche un `NULL`, `x NOT IN (...)` non è mai vero (vale UNKNOWN). Se gli attributi della sottoquery fanno parte della chiave il problema non si pone.

>[!check] Esempio
>Città in cui hanno sede le marche che non producono merci fornite da fornitori di Cosenza.
>```sql
>SELECT sede
>FROM Marca
>WHERE nome NOT IN (
>	SELECT M.marca AS nome
>	FROM Fornitura X, Fornitore F, Merce M
>	WHERE   X.fornitore = F.piva
>		AND X.merce = M.cod
>		AND F.citta = 'Cosenza'
>);
>```

### EXISTS e NOT EXISTS
`EXISTS` ($\exists$) e `NOT EXISTS` ($\nexists$) testano se il risultato di una query è vuoto o no.

>[!important] Sintassi
>```
>EXISTS (<query>)
>```
>Non ha un argomento che lo precede. È verificato se esiste **almeno una tupla** nel risultato di `<query>`.

>[!check] Esempio
>Nomi dei fornitori che forniscono qualche merce.
>```sql
>SELECT F.nome
>FROM Fornitore F
>WHERE EXISTS (
>	SELECT *
>	FROM Fornitura X
>	WHERE X.fornitore = F.piva
>);
>```

>[!question] Osservazione - Visibilità
>Gli attributi della query esterna sono visibili **all'interno** della sottoquery (qui `F.piva`), quelli interni **non** sono visibili all'esterno. Per questo con `IN` non c'erano problemi di omonimia.

Con `NOT EXISTS` si esprime la [[Algebra relazionale#Quantificazione universale|quantificazione universale]]: "per ogni" $\equiv$ "non esiste alcuno che non".

>[!check] Esempio
>Nomi dei fornitori che forniscono **tutte** le merci $\equiv$ fornitori per cui non esiste alcuna merce che essi non forniscono.
>```sql
>SELECT F.nome
>FROM Fornitore F
>WHERE NOT EXISTS ( -- non esiste una merce che essi non forniscono
>	SELECT *
>	FROM Merce M
>	WHERE F.piva NOT IN ( -- fornitori della merce M
>		SELECT X.fornitore
>		FROM Fornitura X
>		WHERE X.merce = M.cod
>	)
>);
>```
>"che essi non forniscono" $\equiv$ "che non appartiene alla lista delle merci da essi fornite":
>```sql
>SELECT F.nome
>FROM Fornitore F
>WHERE NOT EXISTS (
>	SELECT *
>	FROM Merce M
>	WHERE M.cod NOT IN ( -- merci fornite da F
>		SELECT X.merce
>		FROM Fornitura X
>		WHERE X.fornitore = F.piva
>	)
>);
>```
>Le due query sono equivalenti: entrambe controllano che la coppia `(F.piva, M.cod)` non stia in `Fornitura`.

>[!check] Esempio
>Coppie di fornitori $(f', f'')$ che forniscono lo stesso insieme di merci ([[Algebra relazionale#Coppie con lo stesso insieme|in algebra]]) $\equiv$ coppie tali che non esiste alcuna merce fornita da $f'$ e non da $f''$, **e viceversa**.
>```sql
>SELECT F1.piva, F2.piva
>FROM Fornitore F1, Fornitore F2
>WHERE F1.piva < F2.piva
>AND NOT EXISTS (
>	SELECT *
>	FROM Merce M
>	WHERE M.cod IN (
>		SELECT X.merce
>		FROM Fornitura X
>		WHERE X.fornitore = F1.piva
>	) AND M.cod NOT IN (
>		SELECT X.merce
>		FROM Fornitura X
>		WHERE X.fornitore = F2.piva
>	)
>) AND NOT EXISTS ( -- viceversa
>	SELECT *
>	FROM Merce M
>	WHERE M.cod IN (
>		SELECT X.merce
>		FROM Fornitura X
>		WHERE X.fornitore = F2.piva
>	) AND M.cod NOT IN (
>		SELECT X.merce
>		FROM Fornitura X
>		WHERE X.fornitore = F1.piva
>	)
>);
>```
>Versione più pulita, con il confronto tra tuple:
>```sql
>SELECT F1.piva, F2.piva
>FROM Fornitore F1, Fornitore F2
>WHERE F1.piva < F2.piva
>AND NOT EXISTS (
>	SELECT *
>	FROM Merce M
>	WHERE (F1.piva, M.cod) IN (SELECT fornitore, merce FROM Fornitura)
>	  AND (F2.piva, M.cod) NOT IN (SELECT fornitore, merce FROM Fornitura)
>) AND NOT EXISTS (
>	SELECT *
>	FROM Merce M
>	WHERE (F2.piva, M.cod) IN (SELECT fornitore, merce FROM Fornitura)
>	  AND (F1.piva, M.cod) NOT IN (SELECT fornitore, merce FROM Fornitura)
>);
>```
>Il viceversa serve: senza, usciremmo anche le coppie in cui $f''$ fornisce più merci di $f'$.

## Aggregazione
### Operatori di aggregazione
Un **operatore di aggregazione** prende più tuple e restituisce un'unica tupla che le rappresenta.

Schema usato negli esempi, che rappresenta le fatture di un'azienda:
$$
\begin{array}{l}
\text{Cliente}(\underline{\text{CF}}\text{, nome, eta, citta}) \\
\text{Fattura}(\underline{\text{numero, anno}}\text{, cliente}) \\
\text{Composizione}(\underline{\text{fattura\_numero, fattura\_anno, prodotto}}\text{, qnt, prezzoU})
\end{array}
$$

| CF  | nome | età | città   |
| --- | ---- | --- | ------- |
| 1   | A    | 18  | CS      |
| 2   | B    | 20  | RC      |
| 3   | C    | 22  | CS      |
| 4   | D    | 26  | $\perp$ |

>[!question] Osservazione - Non è aggregazione
>Se vogliamo trasformare Composizione in
>$$\text{Composizione} (\underline{\text{fattura\_numero, fattura\_anno, prodotto}}\text{, importo})$$
>```sql
>SELECT fattura_numero, fattura_anno, prodotto, qnt * prezzoU AS importo
>FROM Composizione;
>```
>questa **non** è un'aggregazione: usa operatori algebrici (diversi dagli operatori dell'algebra relazionale) per combinare **attributi** della stessa tupla, non tuple diverse.

>[!check] Esempio
>Numero di clienti registrati.
>```sql
>SELECT COUNT(CF)
>FROM Cliente;
>```
>
>| COUNT(CF) |
>| --------- |
>| 4         |
>
>Per eseguirla non possiamo guardare una tupla alla volta, dobbiamo prima vederle tutte.

- `COUNT(*)` conta semplicemente le righe. Con `*` o con un attributo chiave il risultato è lo stesso.
- `COUNT(attributo)` su un attributo non chiave non conta le tuple in cui quell'attributo è nullo: `COUNT(citta)` restituisce 3.
- `COUNT(DISTINCT attributo)` conta i valori diversi:
```sql
SELECT COUNT(DISTINCT nome)
FROM Cliente;
```

Altri operatori di aggregazione:
- `SUM(A)`: somma dei valori di `A` (o di un'espressione, es. `qnt * prezzoU`), esclusi i `NULL`
- `AVG(A)`: media dei valori di `A`
- `MIN(A)` e `MAX(A)`: valore minimo e massimo di `A`, esclusi i `NULL`

>[!attention] AGGIUNTA - Valori nulli e insieme vuoto
>Dagli appunti LaTeX di Claudia, che li prende dall'Atzeni (cap. SQL, "Operatori aggregati"):
>- `AVG` ignora le tuple con `A` nullo, sia nella somma sia nel numero di elementi
>- `SUM` e `AVG` accettano valori numerici, `MIN` e `MAX` qualunque tipo ordinabile (numeri, stringhe, date)
>- `SUM(DISTINCT A)` e `AVG(DISTINCT A)` considerano solo i valori distinti
>- su un insieme vuoto `COUNT` restituisce 0, gli altri `NULL`

>[!check] Esempio
>Età minima dei clienti di CS: `MIN` viene calcolato dopo la valutazione della `WHERE`.
>```sql
>SELECT MIN(eta)
>FROM Cliente
>WHERE citta = 'CS';
>```

>[!question] Osservazione
>- Più aggregazioni possono stare nella stessa `SELECT` solo se hanno senso insieme: non posso mettere l'età massima dei clienti di Cosenza e l'età minima di quelli di Reggio.
>- Possiamo aggiungere condizioni nella `WHERE`: con un operatore di aggregazione la `SELECT` viene svolta per ultima.
>- Non ha senso mettere nella `SELECT` sia aggregazioni sia attributi normali, a meno che l'attributo non sia comune a tutto l'insieme.
>```sql
>SELECT AVG(eta), CF  -- SBAGLIATA: di quale cliente sarebbe il CF?
>FROM Cliente
>WHERE citta = 'CS';
>```

>[!check] Esempio
>Numero di fatture intestate al cliente Pippo.
>```sql
>SELECT COUNT(*)
>FROM Fattura F, Cliente C
>WHERE   F.cliente = C.CF
>	AND C.nome = 'Pippo';
>```

>[!check] Esempio
>Numero complessivo di esemplari del prodotto `P1` venduti.
>```sql
>SELECT SUM(qnt)
>FROM Composizione
>WHERE prodotto = 'P1';
>```

>[!check] Esempio
>Importo complessivo della fattura 1 del 2026: un operatore algebrico dentro un operatore di aggregazione.
>```sql
>SELECT SUM(qnt * prezzoU)
>FROM Composizione
>WHERE   fattura_numero = 1
>	AND fattura_anno = 2026;
>```


### GROUP BY
La clausola di raggruppamento `GROUP BY` **partiziona** la tabella secondo gli attributi indicati: gli operatori di aggregazione vengono calcolati su ogni partizione, non sulla tabella completa. Tutte le tuple di una partizione hanno lo stesso valore negli attributi del `GROUP BY`.

>[!important] Regola
>In una query con aggregazione, nella `SELECT` posso mettere attributi non aggregati **solo se compaiono nel `GROUP BY`**.

>[!check] Esempio
>Numero di clienti per ogni città.
>```sql
>SELECT citta, COUNT(*)
>FROM Cliente
>GROUP BY citta;
>```

>[!check] Esempio
>Numero di clienti di CS e di RC. Senza raggruppamento servono due query, una per città:
>```sql
>SELECT COUNT(*)
>FROM Cliente
>WHERE citta = 'CS'
>
>UNION
>
>SELECT COUNT(*)
>FROM Cliente
>WHERE citta = 'RC';
>```
>Con `GROUP BY` basta una query. `HAVING` tiene solo i gruppi che rispettano la condizione:
>```sql
>SELECT citta, COUNT(*)
>FROM Cliente
>GROUP BY citta
>HAVING citta = 'CS' OR citta = 'RC';
>```

>[!check] Esempio
>Importo di ogni fattura del 2026.
>```sql
>SELECT fattura_numero, fattura_anno, SUM(qnt * prezzoU)
>FROM Composizione
>WHERE fattura_anno = 2026
>GROUP BY fattura_numero, fattura_anno;
>```



### MIN e MAX
`MIN` e `MAX` restituiscono un **valore**, non la tupla che lo contiene. Per sapere **chi** ha il valore minimo o massimo serve un'interrogazione annidata (in algebra si usava la [[Algebra relazionale#Minimo e massimo|negazione]]).

>[!check] Esempio
>Cliente con l'età minima.
>
>**Errore grave:**
>```sql
>SELECT CF, MIN(eta)
>FROM Cliente;
>```
>Non si può mettere accanto a un aggregato un attributo che non compare nel `GROUP BY` ([[#GROUP BY|regola]]).
>
>**Corretta:** la sottoquery calcola l'età minima, la query esterna cerca i clienti che hanno quell'età.
>```sql
>SELECT CF, eta
>FROM Cliente C
>WHERE C.eta IN (SELECT MIN(eta) FROM Cliente);
>```

>[!question] Osservazione
>- Se più clienti hanno la stessa età minima, vengono restituiti **tutti**.
>- La sottoquery restituisce un solo valore, quindi al posto di `IN` si può usare anche `=`.

>[!warning] Non si possono innestare gli aggregati
>Scrivere `MAX(COUNT(*))` è un errore, perché i due aggregati hanno criteri di raggruppamento diversi: `COUNT` si calcola su ogni gruppo, `MAX` su tutti i gruppi.
>Il conteggio si calcola prima in una [[#Viste|vista]], poi si fa il `MAX` sulla vista.

>[!check] Esempio
>Per ogni città, il cliente con più fatture: nella sottoquery `MAX` è calcolato solo sulle righe della **stessa città** della query esterna.
>```sql
>-- cliente | citta | numero di fatture
>CREATE VIEW CliFat(cliente, citta, tot) AS (
>	SELECT C.CF, C.citta, COUNT(*)
>	FROM Cliente C, Fattura F
>	WHERE C.CF = F.cliente
>	GROUP BY C.CF, C.citta
>);
>
>SELECT X.citta, X.cliente
>FROM CliFat X
>WHERE X.tot = (SELECT MAX(X2.tot)
>               FROM CliFat X2
>               WHERE X2.citta = X.citta);
>```
>Errore tipico: correlare la sottoquery anche sul cliente (`X2.cliente = X.cliente`). In quel caso il massimo è calcolato su una sola riga, la condizione è sempre vera e vengono restituiti tutti i clienti.

### HAVING
Conoscere i nomi dei clienti a cui sono intestate almeno 10 fatture.

Si può fare con una `VIEW` (prima il conteggio, poi la selezione), ma SQL ha la clausola `HAVING`.

>[!important] HAVING
>È una sorta di `WHERE` usata insieme a `GROUP BY`: verifica una **condizione aggregata** su ogni gruppo e tiene solo i gruppi che la rispettano.

```sql
SELECT C.CF, C.nome
FROM Cliente C, Fattura F
WHERE C.CF = F.cliente
GROUP BY C.CF, C.nome
HAVING COUNT(*) >= 10;
```
Si raggruppa per `CF` e non solo per `nome`, altrimenti due clienti omonimi finirebbero nello stesso gruppo e le loro fatture verrebbero contate insieme.

Scrivere questo tipo di condizioni nella `WHERE` è un errore:
```sql
SELECT C.nome, COUNT(*)
FROM Cliente C, Fattura F
WHERE   C.CF = F.cliente
	AND COUNT(*) >= 10 -- ERRORE
GROUP BY C.CF;
```
La `WHERE` viene valutata **prima** degli aggregati, su una tupla alla volta: può contenere solo condizioni sugli attributi della singola tupla, mai aggregati.

>[!question] WHERE o HAVING
>- `WHERE`: filtra le **tuple** prima del raggruppamento.
>- `HAVING`: filtra i **gruppi** dopo il raggruppamento. Può contenere aggregati e gli attributi del `GROUP BY`.
