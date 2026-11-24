#appunti 
#basi_di_dati
# Organizzazione fisica
L'**organizzazione fisica** delle tuple serve a eseguire al meglio le operazioni tipiche del DBMS sui dati. Un DBMS deve essere veloce soprattutto a **inserire** nuove tuple e a **ricercarle**.

>[!question] Osservazione
>Anche l'inserimento fa una ricerca: prima di inserire un dato bisogna verificare che sia consistente con i vincoli (di fatto si esegue una `SELECT`).

## Memoria secondaria e pagine
In un DBMS i dati **non** stanno in memoria centrale: ci stanno solo temporaneamente. Quando eseguiamo una query, solo una porzione dei dati viene trasferita in memoria centrale.

Servono quindi strutture dati pensate per la **memoria secondaria**: le classiche [[Strutture dati|strutture dati]] non vanno bene. Le strutture a puntatori non sono implementabili in memoria secondaria, perché lì non si accede al singolo dato ma a intere **pagine**, esattamente come nella [[2. Gestione della memoria centrale#Paginazione|paginazione]] di sistemi operativi.

Man mano che riempiamo una tabella, il DBMS inserisce le tuple nelle pagine secondo un certo criterio.
![[Esercizi Furfaro-pagine-fornitore.svg|center|600]]

Quando cerchiamo una tupla e sappiamo in quale pagina si trova, il sistema operativo va in memoria secondaria e carica in memoria centrale **tutta la pagina**, che contiene, tra le altre, la tupla che ci interessa.
Se la pagina è già in memoria non la ricarica: conviene mantenerla finché c'è spazio, per velocità.

La memoria centrale è di vari ordini di grandezza più veloce della memoria secondaria. Si compensa la lentezza leggendo dal disco **una pagina alla volta** (tipicamente 4 KB).
%% a lezione: RAM nell'ordine dei GHz, memoria secondaria nell'ordine dei MHz %%

Qualunque sistema si usi per memorizzare le tuple in memoria secondaria, bisogna rappresentarle **riducendo i buchi**, ottimizzando lo spazio (vedi [[2. Gestione della memoria centrale#Allocazione con partizione multipla|frammentazione]]).

>[!important] Modello di costo
>Il costo di un'operazione in un DBMS si misura nel **numero di accessi alle pagine**.
>Le operazioni sulle tuple una volta che sono in RAM (**costi intrapagina**) sono di ordini di grandezza inferiori, quindi trascurabili.

Conviene quindi che una pagina contenga il **maggior numero possibile di tuple**, per ridurre i costi effettivi. Per lo stesso motivo bisogna evitare molti attributi che ammettono `NULL`: aumentano lo spazio inutile all'interno di una pagina.

## Ricerca
La ricerca delle tuple serve sia per le ricerche vere e proprie sia per l'inserimento. Tipicamente è basata sul [[Modello relazionale#Vincolo di chiave primaria|vincolo di chiave primaria]], che diventa quindi un aspetto fondamentale dell'allocazione.

Non basta però: ordinando le tuple per chiave primaria non otteniamo nessun vantaggio sulle ricerche basate su altri attributi. Servono criteri che supportino ricerche di **ogni tipo**, e la bontà di una soluzione si valuta sempre sul **numero di accessi alle pagine**.

In memoria centrale una delle strutture più usate è la [[Strutture dati#Tabelle Hash|tabella hash]]: la ricerca è costante, ma per calcolare la funzione di hash servono gli attributi su cui è calcolata.

>[!question] Hash in memoria secondaria
>- Non abbiamo più celle di un array, ma **pagine**: la funzione di hash restituisce l'**indice di una pagina**, e il numero di pagine è tipicamente molto minore del numero di tuple.
>- In memoria centrale bisognava evitare le **collisioni**. Qui invece una collisione vuol dire solo avere più tuple nella stessa pagina, ed è il comportamento voluto: la tupla esatta si cerca dopo aver portato la pagina in RAM.
>- Resta il problema che una pagina ha **capacità limitata**.

![[Esercizi Furfaro-funzione-hash.svg|center|600]]

## Hashing statico
Il **numero di pagine** (bucket) rimane **costante**.
$$
t \to k \to H(k) = k \ \text{mod} \ M
$$
dove $k$ è una chiave numerica ricavata dalla tupla (es. somma dei codici ASCII dei caratteri) e $M$ è il numero di bucket disponibili.

>[!check] Esempio
>Con $M = 4$:
>$t' \to k = 8 \to 8\text{ mod } 4 = 0$
>$t'' \to k = 13 \to 13\text{ mod } 4 = 1$
>$t''' \to k = 4 \to 4\text{ mod }4 = 0$
>
>| 0         | 1     | 2   | 3   |
>| --------- | ----- | --- | --- |
>| $t',t'''$ | $t''$ |     |     |

![[Esercizi Furfaro-hashing-statico.svg|center|600]]

Contano solo i costi di accesso alle pagine:
- **ricerca**: 1 accesso
- **inserimento**: ricerca + scrittura, quindi 2 accessi

Quando si crea un database si può scegliere di organizzare le tuple con una tabella hash calcolata su un attributo specifico, che sappiamo avrà un ruolo chiave nelle ricerche.

Le pagine indirizzate dalla funzione di hash formano l'**area primaria**.

### Liste di trabocco
Come gestiamo una pagina piena?
Non possiamo aumentare $M$: le tuple il cui hash è già stato calcolato andrebbero tutte ridistribuite.
Come in memoria centrale, creiamo una pagina in più collegata alla pagina piena: la **lista di trabocco**.
![[Esercizi Furfaro-lista-trabocco.svg|center|600]]

>[!warning] Problemi
>In memoria secondaria funziona peggio che in memoria centrale:
>- può essere creata una pagina di trabocco per una sola tupla, mentre ci sono pagine dell'area primaria ancora vuote: il **fattore di riempimento** delle pagine di trabocco è molto basso
>- peggiora ulteriormente la ricerca sugli attributi su cui non è calcolato l'hash
>
>Bisogna invece avere fattori di riempimento delle pagine **elevati**.

### Liste coalescenti
Quando una pagina si riempie, al suo interno inseriamo un puntatore a un'altra pagina dell'area primaria, **la più vuota**. Così si compensano sia il riempimento eccessivo della prima pagina sia quello insufficiente della seconda.

Se trabocca anche la seconda, a sua volta punterà a una terza pagina, che conterrà i trabocchi sia della prima sia della seconda. Si ripresenta lo stesso problema: lunghe liste di trabocco con elementi di pagine originarie diverse (**frammentazione**).
![[Esercizi Furfaro-liste-coalescenti.svg|center|600]]

### Record linkati
Si ragiona a livello di **record**: invece di collegare ogni pagina a un'altra pagina, per ogni tupla si memorizza il **numero della pagina** in cui si trova la tupla successiva della lista.

>[!question] Differenza con le liste coalescenti
>Nelle liste coalescenti il collegamento è **per pagina**, nei record linkati è **per tupla**.

![[Esercizi Furfaro-record-linkati.svg|center|600]]
Si può combinare questo metodo con le pagine di trabocco: i trabocchi vengono collegati per record, ma messi in un'**area di trabocco** separata dalle $M$ pagine dell'area primaria.
- A parità di tuple si usano più pagine, quindi in teoria si usa peggio la memoria.
- Però nella soluzione precedente i trabocchi finiscono in pagine che devono contenere altri elementi e ne favoriscono a loro volta il trabocco. Qui il trabocco di una pagina di trabocco non fa traboccare le pagine dell'area primaria.

>[!warning] Costi reali
>Le pagine dell'area primaria vengono allocate sul disco in modo da ottimizzarne la lettura (meno spostamenti della testina). Per le pagine di trabocco, create in modo estemporaneo, non c'è questa garanzia: anche per questo i costi reali possono essere maggiori.

### Hashing lineare a indirizzamento aperto
Come l'[[Strutture dati#Indirizzamento aperto|indirizzamento aperto]] in memoria centrale, si usa una serie di funzioni hash $H_i(k)$:
$$
H_i(k) = (H(k)+i) \ \text{mod} \ M
$$
all'$i$-esimo trabocco si incrementa $H(k)$ di $i$: se trabocca anche la pagina successiva, si incrementa ancora.

>[!warning] Agglomerazione primaria
>Le tuple che traboccano si accumulano nelle pagine vicine e le fanno traboccare a loro volta ([[Strutture dati#^2e21f9|agglomerazione]]).
>È lo stesso problema delle [[#Liste coalescenti|liste coalescenti]].

![[Esercizi Furfaro-agglomerazione-primaria.svg|center|600]]

%% Libro consigliato: A. Albano - costruire sistemi per basi di dati %%
## Hashing dinamico
%% prossima lezione %%
