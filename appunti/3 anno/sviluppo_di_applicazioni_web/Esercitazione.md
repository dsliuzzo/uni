#appunti 
#web
# Perché Spring

Grazie a Spring possiamo concentrarci sulla logica di business del nostro progetto piuttosto di pensare all'implementazione di esso.

Tutto il **codice di contorno** è già implementato da Spring ed è sempre lo stesso in ogni web app: prendere la richiesta HTTP ([[Web#Una richiesta|richiesta HTTP]]), decodificarla, passarla al nostro codice, prendere il risultato (es. una lista di prodotti), trasformarlo in **JSON** e metterlo nel corpo della risposta.

>[!check] Esempio
>L'utente chiede la lista dei prodotti venduti dal venditore X in un certo periodo. Il nostro codice Java elabora la richiesta e a un certo punto fa la `return` di una lista di prodotti. Senza Spring dovremmo poi trasformare la lista in una stringa JSON e agganciarla alla risposta HTTP: questo blocco di operazioni lo fa Spring in automatico.

Noi faremo dei **servizi REST**: un URL che, chiamato (anche dal browser), restituisce delle informazioni. Differenza con il web "classico": non chiedo una pagina web, ma **una risorsa**, e il server risponde con quella risorsa. Le **API** che offriremo saranno quindi una lista di URL che rispondono con le informazioni richieste.

Spring (slide 3) è implementato in Java, si integra bene con molti strumenti (es. **Maven**, lo strumento di build automation visto nella lezione precedente) ed è ricco di librerie (es. per l'accesso alle basi di dati). È un framework **leggero**: c'è comunque l'overhead della JVM, ma ha ottime performance.

## Come strutturare un server

Un server è diviso in 4 layer (slide 5), che nel progetto diventano 4 package: `myapp.entities`, `myapp.repositories`, `myapp.services`, `myapp.controllers`. La stessa struttura si userà anche con **FastAPI**, un framework Python "concorrente" di Spring che si vedrà più avanti.
- **Controllers**
  Interfaccia con il client (UI): espongono le API **REST**. Prendono la richiesta e chiamano i metodi dei services, senza contenere logica.
- **Services**
  Implementano la **logica di business**, combinando i metodi di più repositories per fare operazioni più complesse.
- **Repositories**
  Classi che si occupano esclusivamente dell'interazione con la base di dati: espongono metodi che eseguono le query (*es.* inserisci prodotto, preleva prodotto, …).
- **Entities**
  Classi che modellano i dati della base di dati: ogni tabella diventa una classe e ogni suo attributo una variabile d'istanza dell'oggetto Java.

![[Spring-layer-server.svg|center]]

Corrispondenze tra i layer:
- **entities ↔ repositories**: mappatura 1 a 1, un repository per ogni entity;
- **services → repositories**: un service usa più repositories;
- **controllers → services**: il controller si limita a chiamare i services. Di solito anche qui c'è una corrispondenza 1 a 1 tra service e controller. Se cambia la tecnologia del front-end si riscrivono solo i controller, mentre i services restano gli stessi.

>[!important] Regola delle chiamate tra layer
>Logica **top-down**: un layer può chiamare i metodi del layer **sotto** e quelli dello **stesso** layer (un service può chiamare un altro service), ma **mai** quelli del layer sopra (un service non chiama mai un controller).

Per sviluppare il progetto conviene partire dal layer più basso e salire: base di dati → entities → repositories → services → controllers.

### Esempio: e-commerce

**Entities**: una classe per ogni tabella (`User`, `Product`, `Order`, …), con un attributo per ogni colonna. Il risultato di una query viene inserito in automatico dentro l'oggetto. "Mediamente" c'è un'entity per ogni tabella importante; a seconda delle relazioni le entity possono essere un po' meno delle tabelle.

**Repositories**: uno per ogni entity (`ProductRepository` per `Product`, …). Già in progettazione si pensa a **quali metodi serviranno** dopo, ad esempio:
- `ProductRepository`: `editProduct` per modificare la quantità di un prodotto (quando viene comprato, o quando il gestore la incrementa); `searchProduct` per cercare i prodotti con determinati parametri;
- `UserRepository`: invece di un metodo che modifica tutto l'utente, un metodo che **incrementa il credito**;
- `OrderRepository`: `addOrder` per creare un ordine, `getOrders` per prendere gli ordini (nell'audio sembra "relativi a uno specifico tempo", forse periodo o utente).

I metodi dei repository saranno soprattutto **di interrogazione**.

**Services**: implementano la logica di business, cioè i comportamenti caratteristici dell'applicazione. Esempio, l'**acquisto** di un prodotto; dietro le quinte succedono più cose:
1. verificare che l'utente abbia **credito sufficiente** (tabella utente);
2. verificare che ci sia la **quantità disponibile** richiesta (tabella prodotto);
3. se entrambi i controlli passano: decrementare la quantità (e il credito dell'utente) e creare una **nuova riga nella tabella ordine**.

>[!attention] AGGIUNTA
>Queste operazioni vanno fatte in modo **atomico**: se una fallisce a metà (es. l'ordine non viene salvato), anche le altre vanno annullate. In Spring si ottiene annotando il metodo del service con `@Transactional` (vedi [[Spring#Transazioni in Spring|transazioni]]).

Quindi un solo metodo del service (es. `makeOrder` in `PurchaseService`, che chiama un controllo del credito tramite `UserRepository` e `checkProductAvailability`) usa **tre repository** diversi (user, product, order).

I services si organizzano **per area logica**, ad esempio:
- `PurchaseService`: si occupa degli acquisti;
- `UserService` / `AccountService`: gestione degli account degli utenti (salvare le informazioni, aggiungerne altri…). Es. un metodo `banUser`, chiamato dall'admin per bannare un utente, che usa solo `UserRepository`;
- un service per il credito (es. per trasferirlo ad altri utenti).

Se sto in `PurchaseService` non ci metto un metodo che modifica gli utenti: quello va in `UserService`, e `PurchaseService` lo chiama.

**Controllers**: non fanno quasi nulla. Prendono la richiesta, chiamano il metodo del service corrispondente e restituiscono la risposta: saranno metodi di **poche righe**.
- Il controller dipende dalla **tecnologia del front-end**: con Angular (che si vedrà nel secondo semestre) il front-end fa chiamate a servizi REST.
- Aneddoto del prof: anni fa nel corso si usava **Vaadin**, una libreria per fare web application in cui non c'era un progetto front-end separato come con Angular. Il controller per Vaadin funzionava con un meccanismo suo, non con servizi REST. Services, repositories ed entities però restavano identici: cambiava solo il controller.
- Se in un controller vi ritrovate a scrivere della logica, state sbagliando: la logica va nei services.

### Progettazione e manutenzione

- Prima si progetta **su carta**, poi si crea il progetto. Si parte **dal basso**: base di dati (schema ER come all'esame di Basi di dati) → classi (diagramma delle classi UML, che si vede a Ingegneria del software: si definiscono a priori classi e metodi) → entities → repositories → services → controllers.
- Spring permette anche di **generare la base di dati a partire dalle entity**, ma il prof lo sconsiglia. Progettare la base di dati con lo schema e scrivere l'SQL richiede una mezz'ora (quella del progetto non è grande). Partendo dalle entity invece si fanno le relazioni una alla volta, si sbagliano, il DB generato non viene come dovrebbe e poi è difficile correggerlo.
- Codice ben strutturato = facile da debuggare: il controller passa solo la chiamata, i repository sono quasi tutti già fatti, quindi un errore (es. nell'acquisto) sta nelle ~20 righe del metodo del service e si trova subito.
- Codice ben strutturato = **manutenibile**. Il costo vero del software non è al giorno 0 (la prima versione), ma nella vita successiva. Esempio di Google: partito da un piccolo prototipo, poi è cresciuto enormemente. Se fosse stato progettato male, a un certo punto sarebbe convenuto buttare tutto e rifarlo da zero piuttosto che manutenerlo.
- Se il backend è progettato bene, si implementa molto più in fretta del front-end (esperienza del prof: ~2 giorni contro ~10). Non perché ci siano meno cose da fare, ma perché ci sono meno righe di codice: la parte che porta via più tempo è l'interfaccia grafica.
- Sull'AI: non è sbagliato usarla, ma va **usata bene**. Il progetto lo facciamo noi, e all'AI si fanno scrivere le funzioni banali (20 righe che poi si rileggono e si correggono). Un progetto interamente generato è fatto male dietro le quinte, si può manutenere solo continuando a chiedere all'AI (che costa) e, se l'AI non riesce a correggere un errore, non si sa dove cercarlo.

## Stereotipi e annotazioni

Le annotazioni sono **a livello di classe**, **di metodo** o **di variabile** e dicono a Spring cosa fare con quell'elemento. Per la teoria vedi [[Spring#Annotazioni|annotazioni]].

### Livello classe: `@Component` e stereotipi

- `@Component` è lo stereotipo "padre": tecnicamente si potrebbe annotare ogni classe con `@Component` e funzionerebbe.
- Conviene però usare la specializzazione giusta: `@Controller` (o `@RestController`) per i controller, `@Service` per i services, `@Repository` per i repositories. Usare `@Component` al posto di `@Service` non dà errori, ma `@Service` è più leggibile (slide 7). `@Repository` invece aggiunge anche un comportamento: traduce le eccezioni del database in eccezioni di Spring (`DataAccessException`).

![[Spring-configuration-autowire.svg|center]]
(slide 10; nella slide c'è scritto `@Registry`, ma è `@Repository`)

**Perché annotare?** Perché gli oggetti di controller, service e repository **non li istanziamo noi** (niente `new`): li gestisce Spring.
- Istanziare un oggetto ha un costo; Spring tiene in memoria gli oggetti già creati e li **riusa** invece di crearne di nuovi.
- Se due service chiedono lo stesso repository **contemporaneamente**, Spring ne istanzia un altro; finito l'uso, entrambi tornano nel **pool** e vengono riusati.
- Esempio: Prime Day su Amazon (se fosse fatto in Spring). Durante il picco vengono istanziati tantissimi oggetti e poi riusati. Quando il traffico cala (da milioni a centomila utenti), nel giro di qualche ora Spring libera memoria, perché a quel punto tenerli costa più di quanto si risparmia a non ricrearli.
- Anche per questi meccanismi Spring è un framework leggero.

>[!attention] Correzione
>Questo "pool" non corrisponde a come funziona davvero Spring. I bean annotati (`@Service`, `@Repository`, `@Controller`…) di default hanno scope **singleton**: il container ne crea **una sola istanza**, all'avvio, e la **condivide** fra tutte le richieste, anche contemporanee (ognuna gira in un suo thread). Non vengono create altre istanze nei picchi né liberate quando il traffico cala. Il vantaggio rispetto al fare `new` a ogni richiesta resta: gli oggetti si creano una volta sola. Vedi [[Spring#Scope dei bean|scope dei bean]].

### `@Autowired` (livello variabile)

Con `@Autowired` chiediamo a Spring di **iniettare** l'oggetto di cui abbiamo bisogno (es. il repository dentro il service), senza istanziarlo noi. È il meccanismo della [[Spring#Dependency Injection e IoC|Dependency Injection]].

```java
@Service
public class PurchaseService {
    @Autowired
    private ProductRepository productRepository;
    @Autowired
    private UserRepository userRepository;
}
```

Il prof ha detto che Spring istanzia gli oggetti solo quando servono: se un service usa i repository A e B in un metodo e il repository C in un altro, e chiamo solo il primo metodo, vengono istanziati solo A e B. C verrà istanziato quando verrà chiamato il secondo metodo.

>[!attention] AGGIUNTA
>Il codice qui sopra è un esempio mio, non è nelle slide.

>[!attention] Correzione
>Non è così: le dipendenze `@Autowired` vengono iniettate **quando il bean viene creato**, non quando si chiama il metodo che le usa. Di default i bean `singleton` vengono creati tutti **all'avvio** (eager), quindi A, B e C esistono già prima di qualsiasi chiamata. La creazione "solo quando serve" si ottiene solo con `@Lazy` (vedi [[Spring#Quando il container crea il bean|creazione dei bean]]).

### `@Value` (livello variabile)

Recupera un valore da un file `.properties` (es. `application.properties`) e lo inietta in una variabile (su `application.properties` vedi anche [[Spring#Spring Boot|Spring Boot]]).

Serve per i **parametri di configurazione**: nome dell'app, limiti sulle richieste, numero massimo di prodotti in un ordine, **API key** (es. la chiave di Google Cloud per usare le API di Gemini). Invece di cercarli sparsi nel codice, stanno tutti in un file.
- Esempio: una software house che vende lo stesso back-end di e-commerce a più clienti, installato sulle loro macchine. Se i parametri sono scritti nel codice, per adattarlo a ogni cliente bisogna spulciare tutte le righe, e basta dimenticarne uno (es. il nome dell'app) per mostrare a un cliente il nome di un altro.
- La **API key** serve al servizio esterno (es. Google) per riconoscere chi fa la richiesta e scalare il credito: finito il credito, niente più risposte.

>[!important] Dove si mette la API key
>La API key **non va scritta nel codice sorgente**, ma in un **file di configurazione** `.properties` del progetto. Poi la si richiama nel codice con `@Value`.
>Così in sviluppo uso la chiave della mia software house; quando consegno l'applicazione al cliente, lui mette la sua nel file di configurazione senza toccare il codice.

Come si usa:
1. nel file `.properties` si scrive la chiave come coppia `nome=valore`;
2. nella classe che la usa (es. il service che chiama le API di Gemini) si dichiara una variabile d'istanza e la si annota con `@Value`, indicando il nome della proprietà;
3. all'avvio Spring legge il file, trova il valore e lo mette **in automatico** nella variabile.

```properties
# application.properties
gemini.api.key=LA-MIA-CHIAVE
```

```java
@Service
public class GeminiService {
    @Value("${gemini.api.key}")
    private String apiKey;
}
```
>[!attention] AGGIUNTA
>Il codice è un esempio mio: nelle slide non c'è codice per `@Value`, e il prof ha solo detto di annotare la variabile `apiKey` con `@Value` indicando la chiave. La sintassi `${nome.proprietà}` è quella standard di Spring.
>Se il progetto è su Git, conviene non committare il file con la chiave vera (es. metterlo nel `.gitignore` e lasciare nel repository solo un esempio).

### `@Valid` (livello variabile)

Serve per la **validazione dei campi**.
- Nelle entity si mettono dei **vincoli** sui singoli attributi: lunghezza massima di una stringa (es. max 10 caratteri), che un campo corrisponda a una **regex** (es. quella dell'email), ecc.
- Nel controller si annota con `@Valid` il parametro ricevuto (es. un `User`): Spring verifica in automatico **ogni vincolo** e, se uno non è rispettato, lancia un'eccezione. Così non serve scrivere a mano una serie di `if` di controllo.

>[!attention] AGGIUNTA
>Le annotazioni dei vincoli sono, ad esempio, `@Size(max = 10)` e `@Pattern(regexp = "...")` o `@Email` (Jakarta Bean Validation). Non sono nelle slide e il prof non ha detto i nomi esatti.

### `@CookieValue` (livello variabile)

Serve per **leggere** informazioni salvate nel **browser** dell'utente tramite cookie: associa un parametro del metodo al valore di un cookie HTTP inviato dal client (slide 9). Per **scrivere** un cookie invece lo si aggiunge alla risposta HTTP, non si usa `@CookieValue`. Il prof l'ha solo nominata, rimandando a un esempio.

Le annotazioni dei controller il prof le vedrà quando si parlerà dei controller.

## Server stateless

Service e controller sono bean **singleton**: la stessa istanza viene usata da tutte le richieste, anche in contemporanea. Quindi il server va progettato **stateless** (vedi anche [[Spring#Scope dei bean|scope dei bean]]):
- una volta soddisfatta una richiesta, il server **non conserva nulla** della sessione dell'utente;
- non si salvano nelle variabili d'istanza di service e controller informazioni legate a una specifica sessione: sarebbero condivise con tutti gli altri utenti (e le richieste concorrenti si sovrascriverebbero i dati a vicenda);
- un server **stateful** è molto più pesante: servirebbe un service per ogni utente collegato, con le informazioni della sua sessione in memoria, anche quando l'utente si è già disconnesso e non servono più;
- quindi nelle variabili d'istanza di service e controller non ci sarà nulla (a parte le dipendenze iniettate): ci saranno solo metodi da chiamare.

## Accesso ai dati

### DAO e JDBC

Con il pattern **DAO** (Data Access Object) una classe si occupa solo dell'accesso ai dati: inserimento, aggiornamento, eliminazione e ricerca. Esempio della slide 13: entity `Book` (isbn, author, title) e interfaccia `BookDao` (`insert`, `update`, `delete`, `findByISBN`, `findAllBooks`, `bookCount`).

![[Spring-BookDao-uml.svg|center]]

Per accedere a una base di dati senza Spring si usa una libreria come **JDBC**, che fornisce i metodi per collegarsi al DB. La base di dati ha un suo server, raggiungibile tramite un URL: quando configureremo la connessione sarà `localhost`, ma nulla vieta di metterla su un'altra macchina. Bisogna però fare tutto a mano (slide 14; teoria in [[Web#Java Database Connectivity|JDBC]]):
1. aprire la connessione al datasource;
2. creare il `PreparedStatement` e passargli i parametri;
3. eseguirlo;
4. estrarre i risultati dal `ResultSet`;
5. gestire le eccezioni;
6. chiudere la connessione.

>[!question] Osservazione: SQL injection
>Le query si fanno con i **prepared statement** (parametri passati con `?`) e non concatenando stringhe: questo previene gli attacchi di **SQL injection**. Vedi [[Web#Prepared Statement|prepared statement]] e [[Web#SQL injection|SQL injection]].

Con `JdbcTemplate` (slide 15) si passano query e parametri (`update(...)` per inserire, modificare o eliminare). Serve anche una classe `RowMapper` (es. `BookRowMapper`) che mappa una riga del `ResultSet` su un oggetto `Book`.

Il `ResultSet` è il risultato della query: un cursore che scorre le righe, e per ogni riga si leggono le colonne per nome o per indice (un po' come una mappa colonna → valore).

Tutto questo è codice non legato alla logica applicativa. Con **Spring Data JPA** è **tutto automatico**, grazie al meccanismo delle entity: i repository sono interfacce (es. che estendono `JpaRepository`) di cui Spring genera l'implementazione, quindi non serve più scrivere né il DAO né il mapping (vedi [[Spring#DAO, ORM e Spring Data|Spring Data]]). Spring JDBC con `JdbcTemplate` esiste ancora, ma è l'approccio "manuale". Dopo aver progettato, scrivere entity e repository richiederà poco tempo. Entro la lezione successiva si arriverà a scrivere **zero** codice di interazione con la base di dati.

### Chiavi composte

Il prof sconsiglia le **chiavi composte** (es. una tabella con chiave formata da una chiave esterna più un altro attributo):
- servirebbe una classe in più che modella la chiave, oltre a quella dell'entity (in JPA con `@IdClass` o `@EmbeddedId`);
- se poi una tabella ha come chiave una chiave esterna verso una chiave composta più un altro attributo, le classi delle chiavi si annidano;
- per cercare un oggetto bisogna ricostruire ogni volta la chiave: nella richiesta HTTP vanno passati 2, 3 o più parametri, e il codice diventa bruttissimo.

**Soluzione**: si aggiunge un "pizzico di ridondanza", cioè un **id numerico** auto-increment come chiave. Il vincolo che la coppia di attributi non si ripeta si mantiene con un vincolo **UNIQUE** su quella coppia. Inserimenti, modifiche e ricerche diventano semplici e le chiavi esterne sono un solo valore.

>[!tip] Consiglio del prof
>Usate sempre **id numerici auto-increment** come chiave.

### Entity

- `@Entity`: dice a Spring che la classe è un'entity.
- `@Table`: indica la tabella a cui fa riferimento. Se il nome della tabella si ricava da quello della classe (classe `User` in CamelCase → tabella `user` in minuscolo; con Spring Boot `OrderItem` → `order_item`), Spring la trova da solo. Se è diverso va specificato con `@Table(name = "...")`. Esempio: in PostgreSQL `user` è una parola riservata, quindi la tabella si potrebbe chiamare `user_`.
- `@Id`: indica la variabile che fa da chiave primaria (con l'approccio consigliato, l'id numerico).
- `@GeneratedValue`: si usa insieme a `@Id` e indica il meccanismo di generazione della chiave. Di solito si usa l'**auto-increment**, che in generale funziona bene: in JPA corrisponde a `@GeneratedValue(strategy = GenerationType.IDENTITY)`. Il default è `AUTO`, con cui sceglie il provider (es. su PostgreSQL può usare una sequence).
- `@Column`: indica la colonna a cui corrisponde la variabile. Anche qui, se il nome si ricava in automatico (es. `firstName` ↔ `first_name`) non serve. Se è diverso va specificato.
- `@Basic`: indica che l'attributo è persistente. È il default: ogni attributo di tipo semplice non annotato è già considerato `@Basic`. Ha un parametro (`fetch = FetchType.LAZY`) per caricare l'attributo in modo **lazy**, cioè solo quando serve davvero (es. la data di nascita, se non serve sempre). Così nella maggior parte delle query il campo non viene caricato e si occupa meno memoria.

>[!attention] AGGIUNTA
>Per gli attributi semplici il `LAZY` è solo un **suggerimento**: Hibernate lo rispetta solo con il bytecode enhancement attivo, altrimenti carica comunque il campo. Ha senso soprattutto per campi pesanti (testi lunghi, `@Lob`), non per una data.
- `@Transient`: la variabile d'istanza **non** viene salvata nella base di dati. Esempio: il client manda insieme all'utente un valore che serve in quel momento ma per cui non c'è una colonna nel DB. Serve comunque una variabile nell'entity, altrimenti nel mapping della richiesta sull'oggetto quel valore non saprebbe dove andare. Con `@Transient` Spring lo mette nell'oggetto Java, ma non lo salva.

### Relazioni

Se un utente ha una lista di ordini o un carrello (un'altra tabella), lo si mette come **variabile d'istanza** nell'entity `User`. Quando prendo l'utente, Spring preleva in automatico anche il carrello: **non bisogna scrivere join né query**. Con due o tre annotazioni si dice a Spring com'è fatta la relazione dello schema relazionale.

>[!attention] AGGIUNTA
>"In automatico" non vuol dire per forza "subito". Di default `@ManyToOne` e `@OneToOne` sono **EAGER** (l'oggetto collegato viene caricato insieme), mentre `@OneToMany` e `@ManyToMany` sono **LAZY**: la lista viene caricata con una query in più la prima volta che la si usa. Si può cambiare con il parametro `fetch`.

- `@JoinColumn`: la colonna che contiene la chiave esterna, cioè quella su cui fare la join.

>[!tip] Consiglio del prof
>Le annotazioni delle relazioni (`@OneToOne`, `@JoinColumn`, …) mettetele sulla **variabile d'istanza**, non sul getter. Il risultato è lo stesso, ma il codice si legge meglio (il prof ha detto che c'è anche un altro motivo, che si vedrà più avanti).

#### `@OneToOne`

Esempio della slide 18: `Booking` (id, amount, check_in, check_out, room_id) e `Room` (id, num, type, free). Una prenotazione riguarda una stanza, una stanza ha 0 o 1 prenotazione.

![[Spring-OneToOne-booking-room.svg|center]]

- Nel DB `room_id` è un intero (la chiave esterna). In Java invece in `Booking` c'è direttamente un oggetto `Room`: Spring, tramite la `@JoinColumn(name = "ROOM_ID")`, preleva la stanza corrispondente e la mette nella variabile.
- In `Room` c'è una variabile `Booking`, annotata con `@OneToOne(mappedBy = "room")`, perché la chiave esterna sta in `Booking` (nel campo `room`). Così quando prendo una stanza ho anche la sua prenotazione, e viceversa.
- Senza Spring avrei avuto in `Booking` solo il numero della stanza e una query in più per prenderla. Così invece con una sola query ho anche l'oggetto stanza.

```java
// Booking (ha la chiave esterna)
@OneToOne
@JoinColumn(name = "ROOM_ID")
private Room room;

// Room
@OneToOne(mappedBy = "room")
private Booking booking;
```

#### `@ManyToOne`

Esempio della slide 20: rubrica telefonica gestita da più persone. Un utente ha tanti contatti, ogni `Contact` appartiene a un solo `User`, quindi in `Contact` c'è `@ManyToOne private User user;`. Spring capisce da solo che la variabile `user`, di tipo `User`, corrisponde alla tabella `user`. Senza `@JoinColumn`, la colonna della chiave esterna ha il nome di default `user_id` (nome della variabile + `_` + nome della chiave primaria referenziata). Quando prendo un contatto, ho anche l'utente che l'ha creato.

#### `@OneToMany`

Esempio della slide 21: una nazione ha più città, una città appartiene a una sola nazione.
- In `City` c'è `@ManyToOne` con `@JoinColumn(name = "country_id")`. Qui la `@JoinColumn` serve perché la variabile si chiama `parentCountry` (più sensato in Java): il nome di default sarebbe `parent_country_id`, mentre la colonna è `country_id`. Nell'esempio di `Contact` non serviva perché la colonna ha già il nome di default (`user_id`).
- In `Country` non c'è più una singola variabile ma una **lista** di città (`Set<City> cities`), con `@OneToMany(mappedBy = "parentCountry")`: `mappedBy` indica la variabile di `City` che mappa la relazione.

#### `@ManyToMany`

Esempio della slide 22: un cliente può partecipare a più eventi e un evento ha più clienti. C'è la tabella di relazione `EVENT_CUSTOMER` (customer_id, event_id).

![[Spring-ManyToMany-customer-event.svg|center]]

- In `Customer` si mette `List<Event> events` con `@ManyToMany` e `@JoinTable`: la join non passa più per una colonna, ma per una **tabella**. In `@JoinTable` si indicano il nome della tabella di relazione, `joinColumns` (colonna che riferisce questa entity, `CUSTOMER_ID`) e `inverseJoinColumns` (colonna che riferisce l'altra, `EVENT_ID`).

```java
@ManyToMany
@JoinTable(name = "EVENT_CUSTOMER",
    joinColumns = {@JoinColumn(name = "CUSTOMER_ID")},
    inverseJoinColumns = {@JoinColumn(name = "EVENT_ID")})
private List<Event> events;
```

>[!important] Quando si può usare `@ManyToMany`
>Solo se la relazione è "pura", cioè la tabella di relazione contiene **soltanto le due chiavi**. Se la relazione ha un attributo proprio (es. ordine–prodotto con la **quantità** comprata), quell'attributo non può stare in nessuna delle due entity, perché riguarda la relazione. La tabella di relazione diventa allora un'**entity** a sé, collegata alle altre con relazioni uno-a-molti / molti-a-uno.

Nell'esempio la relazione è mappata **solo dal lato `Customer`**: in `Event` non c'è la lista dei clienti. Il motivo è applicativo. Esempio del prof: una replica di TicketOne. Quando carico la schermata dell'utente mi serve la lista degli eventi a cui partecipa. Se però ogni volta che cerco un evento mi portassi dietro tutti i partecipanti, la ricerca degli eventi diventerebbe pesantissima.

>[!question] Osservazione
>Le liste `@ManyToMany` sono LAZY di default, quindi anche mappandola in `Event` (bidirezionale, con `mappedBy = "events"`) i partecipanti verrebbero caricati solo se usati. Mappare la relazione da un solo lato resta comunque una scelta più semplice, se dall'altro lato non serve.
