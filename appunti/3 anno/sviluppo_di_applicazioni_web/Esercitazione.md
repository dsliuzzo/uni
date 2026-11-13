#appunti 
#web
# Spring

Grazie a Spring possiamo concentrarci sulla logica di business del nostro progetto piuttosto di pensare all'implementazione di esso.

Tutto il **codice di contorno** è già implementato da Spring ed è sempre lo stesso in ogni web app: prendere la richiesta HTTP ([[Web#Una richiesta|richiesta HTTP]]), decodificarla, passarla al nostro codice, prendere il risultato (es. una lista di prodotti), trasformarlo in **JSON** e metterlo nel corpo della risposta.

>[!check] Esempio
>L'utente chiede la lista dei prodotti venduti dal venditore X in un certo periodo. Il nostro codice Java elabora la richiesta e a un certo punto fa la `return` di una lista di prodotti. Senza Spring dovremmo poi trasformare la lista in una stringa JSON e agganciarla alla risposta HTTP: questo blocco di operazioni lo fa Spring in automatico.

Noi faremo dei **servizi REST**: un URL che, chiamato (anche dal browser), restituisce delle informazioni. Differenza con il web "classico": non chiedo una pagina web, ma **una risorsa**, e il server risponde con quella risorsa. Le **API** che offriremo saranno quindi una lista di URL che rispondono con le informazioni richieste.

Spring è implementato in Java, si integra bene con molti strumenti (es. **Maven**, lo strumento di build automation visto nella lezione precedente) ed è ricco di librerie (es. per l'accesso alle basi di dati). È un framework **leggero**: c'è comunque l'overhead della JVM, ma ha ottime performance.

## Come strutturare un server

Un server è diviso in 4 layer, che nel progetto diventano 4 package: `myapp.entities`, `myapp.repositories`, `myapp.services`, `myapp.controllers`. La stessa struttura si userà anche con **FastAPI**, un framework Python "concorrente" di Spring che si vedrà più avanti.
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

### Stereotipi e annotazioni

Le annotazioni sono **a livello di classe**, **di metodo** o **di variabile** e dicono a Spring cosa fare con quell'elemento. Per la teoria vedi [[Spring#Annotazioni|annotazioni]]. Qui ci sono quelle usate in tutti i layer; `@Valid` sta in [[#Entity|entity]] e `@CookieValue` in [[#Controllers|controllers]].

#### Livello classe: `@Component` e stereotipi

- `@Component` è lo stereotipo "padre": tecnicamente si potrebbe annotare ogni classe con `@Component` e funzionerebbe.
- Conviene però usare la specializzazione giusta: `@Controller` (o `@RestController`) per i controller, `@Service` per i services, `@Repository` per i repositories. Usare `@Component` al posto di `@Service` non dà errori, ma `@Service` è più leggibile. `@Repository` invece aggiunge anche un comportamento: traduce le eccezioni del database in eccezioni di Spring (`DataAccessException`).

![[Spring-configuration-autowire.svg|center]]
(nella slide c'è scritto `@Registry`, ma è `@Repository`)

**Perché annotare?** Perché gli oggetti di controller, service e repository **non li istanziamo noi** (niente `new`): li gestisce Spring.
- Istanziare un oggetto ha un costo; Spring tiene in memoria gli oggetti già creati e li **riusa** invece di crearne di nuovi.
- Se due service chiedono lo stesso repository **contemporaneamente**, Spring ne istanzia un altro; finito l'uso, entrambi tornano nel **pool** e vengono riusati.
- Esempio: Prime Day su Amazon (se fosse fatto in Spring). Durante il picco vengono istanziati tantissimi oggetti e poi riusati. Quando il traffico cala (da milioni a centomila utenti), nel giro di qualche ora Spring libera memoria, perché a quel punto tenerli costa più di quanto si risparmia a non ricrearli.
- Anche per questi meccanismi Spring è un framework leggero.

>[!attention] Correzione
>Questo "pool" non corrisponde a come funziona davvero Spring. I bean annotati (`@Service`, `@Repository`, `@Controller`…) di default hanno scope **singleton**: il container ne crea **una sola istanza**, all'avvio, e la **condivide** fra tutte le richieste, anche contemporanee (ognuna gira in un suo thread). Non vengono create altre istanze nei picchi né liberate quando il traffico cala. Il vantaggio rispetto al fare `new` a ogni richiesta resta: gli oggetti si creano una volta sola. Vedi [[Spring#Scope dei bean|scope dei bean]].

#### `@Autowired` (livello variabile)

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

#### `@Value` (livello variabile)

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

### Server stateless

Service e controller sono bean **singleton**: la stessa istanza viene usata da tutte le richieste, anche in contemporanea. Quindi il server va progettato **stateless** (vedi anche [[Spring#Scope dei bean|scope dei bean]]):
- una volta soddisfatta una richiesta, il server **non conserva nulla** della sessione dell'utente;
- non si salvano nelle variabili d'istanza di service e controller informazioni legate a una specifica sessione: sarebbero condivise con tutti gli altri utenti (e le richieste concorrenti si sovrascriverebbero i dati a vicenda);
- un server **stateful** è molto più pesante: servirebbe un service per ogni utente collegato, con le informazioni della sua sessione in memoria, anche quando l'utente si è già disconnesso e non servono più;
- quindi nelle variabili d'istanza di service e controller non ci sarà nulla (a parte le dipendenze iniettate): ci saranno solo metodi da chiamare.

## Entity

### Chiavi composte

Il prof sconsiglia le **chiavi composte** (es. una tabella con chiave formata da una chiave esterna più un altro attributo):
- servirebbe una classe in più che modella la chiave, oltre a quella dell'entity (in JPA con `@IdClass` o `@EmbeddedId`);
- se poi una tabella ha come chiave una chiave esterna verso una chiave composta più un altro attributo, le classi delle chiavi si annidano;
- per cercare un oggetto bisogna ricostruire ogni volta la chiave: nella richiesta HTTP vanno passati 2, 3 o più parametri, e il codice diventa bruttissimo.

**Soluzione**: si aggiunge un "pizzico di ridondanza", cioè un **id numerico** auto-increment come chiave. Il vincolo che la coppia di attributi non si ripeta si mantiene con un vincolo **UNIQUE** su quella coppia. Inserimenti, modifiche e ricerche diventano semplici e le chiavi esterne sono un solo valore.

>[!tip] Consiglio del prof
>Usate sempre **id numerici auto-increment** come chiave.

### Annotazioni dell'entity

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

Esempio delle slide: `Booking` (id, amount, check_in, check_out, room_id) e `Room` (id, num, type, free). Una prenotazione riguarda una stanza, una stanza ha 0 o 1 prenotazione.

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

Esempio delle slide: rubrica telefonica gestita da più persone. Un utente ha tanti contatti, ogni `Contact` appartiene a un solo `User`, quindi in `Contact` c'è `@ManyToOne private User user;`. Spring capisce da solo che la variabile `user`, di tipo `User`, corrisponde alla tabella `user`. Senza `@JoinColumn`, la colonna della chiave esterna ha il nome di default `user_id` (nome della variabile + `_` + nome della chiave primaria referenziata). Quando prendo un contatto, ho anche l'utente che l'ha creato.

#### `@OneToMany`

Esempio delle slide: una nazione ha più città, una città appartiene a una sola nazione.
- In `City` c'è `@ManyToOne` con `@JoinColumn(name = "country_id")`. Qui la `@JoinColumn` serve perché la variabile si chiama `parentCountry` (più sensato in Java): il nome di default sarebbe `parent_country_id`, mentre la colonna è `country_id`. Nell'esempio di `Contact` non serviva perché la colonna ha già il nome di default (`user_id`).
- In `Country` non c'è più una singola variabile ma una **lista** di città (`Set<City> cities`), con `@OneToMany(mappedBy = "parentCountry")`: `mappedBy` indica la variabile di `City` che mappa la relazione.

#### `@ManyToMany`

Esempio delle slide: un cliente può partecipare a più eventi e un evento ha più clienti. C'è la tabella di relazione `EVENT_CUSTOMER` (customer_id, event_id).

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

### Validazione dei campi: `@Valid`

Serve per la **validazione dei campi**.
- Nelle entity si mettono dei **vincoli** sui singoli attributi: lunghezza massima di una stringa (es. max 10 caratteri), che un campo corrisponda a una **regex** (es. quella dell'email), ecc.
- Nel controller si annota con `@Valid` il parametro ricevuto (es. un `User`): Spring verifica in automatico **ogni vincolo** e, se uno non è rispettato, lancia un'eccezione. Così non serve scrivere a mano una serie di `if` di controllo.

>[!attention] AGGIUNTA
>Le annotazioni dei vincoli sono, ad esempio, `@Size(max = 10)` e `@Pattern(regexp = "...")` o `@Email` (Jakarta Bean Validation). Non sono nelle slide e il prof non ha detto i nomi esatti.

## Repositories

### Senza Spring Data: DAO e JDBC

Con il pattern **DAO** (Data Access Object) una classe si occupa solo dell'accesso ai dati: inserimento, aggiornamento, eliminazione e ricerca. Esempio delle slide: entity `Book` (isbn, author, title) e interfaccia `BookDao` (`insert`, `update`, `delete`, `findByISBN`, `findAllBooks`, `bookCount`).

![[Spring-BookDao-uml.svg|center]]

Per accedere a una base di dati senza Spring si usa una libreria come **JDBC**, che fornisce i metodi per collegarsi al DB. La base di dati ha un suo server, raggiungibile tramite un URL: quando configureremo la connessione sarà `localhost`, ma nulla vieta di metterla su un'altra macchina. Bisogna però fare tutto a mano (teoria in [[Web#Java Database Connectivity|JDBC]]):
1. aprire la connessione al datasource;
2. creare il `PreparedStatement` e passargli i parametri;
3. eseguirlo;
4. estrarre i risultati dal `ResultSet`;
5. gestire le eccezioni;
6. chiudere la connessione.

>[!question] Osservazione: SQL injection
>Le query si fanno con i **prepared statement** (parametri passati con `?`) e non concatenando stringhe: questo previene gli attacchi di **SQL injection**. Vedi [[Web#Prepared Statement|prepared statement]] e [[Web#SQL injection|SQL injection]].

Con `JdbcTemplate` si passano query e parametri (`update(...)` per inserire, modificare o eliminare). Serve anche una classe `RowMapper` (es. `BookRowMapper`) che mappa una riga del `ResultSet` su un oggetto `Book`.

Il `ResultSet` è il risultato della query: un cursore che scorre le righe, e per ogni riga si leggono le colonne per nome o per indice (un po' come una mappa colonna → valore).

Tutto questo è codice non legato alla logica applicativa. Con **Spring Data JPA** è **tutto automatico**, grazie al meccanismo delle entity: i repository sono interfacce (es. che estendono `JpaRepository`) di cui Spring genera l'implementazione, quindi non serve più scrivere né il DAO né il mapping (vedi [[Spring#DAO, ORM e Spring Data|Spring Data]]). Spring JDBC con `JdbcTemplate` esiste ancora, ma è l'approccio "manuale". Dopo aver progettato, scrivere entity e repository richiederà poco tempo. Entro la lezione successiva si arriverà a scrivere **zero** codice di interazione con la base di dati.

### Spring Data: il repository come interfaccia

Un repository è un'**interfaccia** che estende `CrudRepository` (o una sua sottointerfaccia) di Spring Data. Non serve implementarla: Spring genera da solo l'implementazione dei metodi.

```java
public interface ContactRepository extends CrudRepository<Contact, Long> {
}
```
I due parametri generici sono il tipo dell'**entity** (`Contact`) e il tipo della sua **chiave primaria** (`Long`).

Il fulcro di Spring Data sono `@Repository` e `CrudRepository`:
- `@Repository` fa da **marker**: identifica le interfacce che comunicano con la sorgente dati;
- `CrudRepository` fornisce già le operazioni **CRUD** (Create, Read, Update, Delete): ad esempio per inserire un dato esiste già il metodo `save`, senza scriverlo.

>[!attention] AGGIUNTA
>In Spring Data il vero marker è l'interfaccia `Repository<T, ID>` (radice della gerarchia, vedi sotto): un'interfaccia che la estende viene riconosciuta e implementata anche senza annotarla. L'annotazione `@Repository` sulle classi serve soprattutto a tradurre le eccezioni del DB (vedi [[#Livello classe: `@Component` e stereotipi|stereotipi]]).

Il comportamento si può estendere in due modi: con i **query method** (si dichiara solo la firma del metodo, vedi sotto) oppure implementando esplicitamente dei metodi custom.

### Entity attached e non attached

Nel codice lavoriamo con oggetti entity. Un'entity può essere:
- **attached**: è collegata alla base di dati, quindi ogni modifica all'oggetto si ripercuote sul database. Un'entity diventa attached quando la **preleviamo dal DB** (es. con un `findBy...`). Alla fine del metodo transazionale le modifiche vengono trasmesse alla base di dati **in automatico**, senza chiamare altro;
- **non attached**: non è collegata al DB. È il caso di un oggetto creato con `new` e poi manipolato: per salvarlo bisogna chiamare **esplicitamente** il metodo del repository (es. `save`, che lo rende persistente).

>[!attention] AGGIUNTA
>In JPA si chiamano entity **managed** (gestite dal persistence context) e **detached** / **new**. Il salvataggio automatico alla fine del metodo avviene solo se il metodo è **transazionale** (`@Transactional`, vedi [[#Services|services]]): al commit Hibernate controlla quali entity managed sono cambiate (*dirty checking*) e fa le `UPDATE`.

### Gerarchia delle interfacce

- `PagingAndSortingRepository` estende `CrudRepository`;
- `JpaRepository` estende `PagingAndSortingRepository` (e `QueryByExampleExecutor`).

![[Spring-gerarchia-repository.webp|center|500]]

| Interfaccia | Cosa aggiunge | Metodi principali (dal diagramma della slide) |
| --- | --- | --- |
| `Repository` | radice della gerarchia (riquadro in alto nel diagramma): nessun metodo | — (solo quelli che dichiariamo noi, come negli esempi con `extends Repository<User, Long>`) |
| `CrudRepository` | operazioni CRUD: creare, leggere, aggiornare ed eliminare record senza definire i propri metodi | `save`, `save(Iterable)`, `findOne(ID)`, `exists(ID)`, `findAll()`, `findAll(Iterable<ID>)`, `count()`, `delete(ID)`, `delete(T)`, `delete(Iterable)`, `deleteAll()` |
| `PagingAndSortingRepository` | recupero delle entity con **paginazione** e **ordinamento** | `findAll(Sort)`, `findAll(Pageable)` → `Page<T>` |
| `JpaRepository` | funzionalità specifiche di JPA | `flush()`, `saveAndFlush`, `deleteInBatch`, `deleteAllInBatch`, `getOne(ID)`; `findAll` restituisce `List` invece di `Iterable` |

>[!attention] AGGIUNTA
>Il diagramma della slide è di una versione vecchia di Spring Data. Nelle versioni attuali alcuni nomi sono cambiati: `findOne(ID)` → `findById(ID)` (restituisce un `Optional<T>`), `exists(ID)` → `existsById`, `delete(ID)` → `deleteById`, `save(Iterable)` → `saveAll`. Inoltre da Spring Data 3 `PagingAndSortingRepository` non estende più `CrudRepository`, ma `JpaRepository` le estende entrambe, quindi per noi non cambia nulla: estendendo `JpaRepository` si hanno tutti i metodi.

### Query method e JPQL

La "magia" di Spring Data sono i **query method**: basta **dichiarare** un metodo nell'interfaccia, rispettando le regole sintattiche della documentazione, e Spring costruisce la query a partire dal **nome del metodo**.

```java
List<Contact> findByUserId(long userId);
```
viene convertito da Spring Data JPA in **JPQL**:
```sql
select c from Contact c where c.user.id = ?
```

Un altro esempio, con più condizioni:
```java
public interface UserRepository extends Repository<User, Long> {
    List<User> findByEmailAddressAndLastname(String emailAddress, String lastname);
}
```
```sql
select u from User u where u.emailAddress = ?1 and u.lastname = ?2
```
`?1`, `?2` sono i parametri, nell'ordine in cui compaiono nella firma del metodo.

**JPQL** (Java Persistence Query Language) è un linguaggio di interrogazione simile a SQL, ma lavora sulle **entity** e non sulle tabelle:
- permette di accedere ai campi con la **dot notation** di Java (`c.user.username`). In SQL, se accedo a un campo che non è la chiave (es. lo username dell'utente invece del suo id), devo fare una **join** tra le tabelle;
- fornisce un'**interfaccia comune** a DBMS diversi: si scrive sempre in JPQL, ed è il driver/provider a tradurre nel dialetto SQL del database specifico.

>[!check] Esempio: dot notation vs join
>```sql
>-- JPQL
>select c from Contact c where c.user.username = ?1
>-- SQL equivalente
>select c.* from contact c join user u on c.user_id = u.id where u.username = ?
>```

>[!attention] AGGIUNTA
>L'esempio con `username` è mio, costruito da quello che ha detto il prof; il query method corrispondente sarebbe `findByUserUsername(String username)`.

#### Keyword dei query method

Con `x` si indica l'entity:

| Keyword | Esempio | JPQL |
| --- | --- | --- |
| `And` | `findByLastnameAndFirstname` | `… where x.lastname = ?1 and x.firstname = ?2` |
| `Or` | `findByLastnameOrFirstname` | `… where x.lastname = ?1 or x.firstname = ?2` |
| `Is`, `Equals` | `findByFirstname`, `findByFirstnameIs`, `findByFirstnameEquals` | `… where x.firstname = ?1` |
| `Between` | `findByStartDateBetween` | `… where x.startDate between ?1 and ?2` |
| `LessThan` | `findByAgeLessThan` | `… where x.age < ?1` |
| `LessThanEqual` | `findByAgeLessThanEqual` | `… where x.age <= ?1` |
| `GreaterThan` | `findByAgeGreaterThan` | `… where x.age > ?1` |
| `GreaterThanEqual` | `findByAgeGreaterThanEqual` | `… where x.age >= ?1` |
| `After` | `findByStartDateAfter` | `… where x.startDate > ?1` |
| `Before` | `findByStartDateBefore` | `… where x.startDate < ?1` |
| `IsNull` | `findByAgeIsNull` | `… where x.age is null` |
| `IsNotNull`, `NotNull` | `findByAge(Is)NotNull` | `… where x.age not null` |
| `Like` | `findByFirstnameLike` | `… where x.firstname like ?1` |
| `NotLike` | `findByFirstnameNotLike` | `… where x.firstname not like ?1` |
| `StartingWith` | `findByFirstnameStartingWith` | `… where x.firstname like ?1` (parametro con `%` in coda) |
| `EndingWith` | `findByFirstnameEndingWith` | `… where x.firstname like ?1` (parametro con `%` in testa) |
| `Containing` | `findByFirstnameContaining` | `… where x.firstname like ?1` (parametro racchiuso tra `%`) |
| `OrderBy` | `findByAgeOrderByLastnameDesc` | `… where x.age = ?1 order by x.lastname desc` |
| `Not` | `findByLastnameNot` | `… where x.lastname <> ?1` |
| `In` | `findByAgeIn(Collection<Age> ages)` | `… where x.age in ?1` |
| `NotIn` | `findByAgeNotIn(Collection<Age> ages)` | `… where x.age not in ?1` |
| `True` | `findByActiveTrue()` | `… where x.active = true` |
| `False` | `findByActiveFalse()` | `… where x.active = false` |
| `IgnoreCase` | `findByFirstnameIgnoreCase` | `… where UPPER(x.firstname) = UPPER(?1)` |

>[!question] Osservazione: `Like` e simili
>Con `Like` il `%` lo deve mettere chi chiama il metodo dentro il parametro (es. `"Ma%"`). Con `StartingWith`, `EndingWith` e `Containing` invece lo aggiunge Spring: si passa solo `"Ma"`.

### `@Query`

Se la query non si riesce a costruire con un query method, **non** serve implementare il metodo a mano: si scrive la query JPQL direttamente sul metodo con `@Query`.

```java
public interface UserRepository extends JpaRepository<User, Long> {
    @Query("select u from User u where u.emailAddress = ?1")
    User findByEmailAddress(String emailAddress);
}
```

Quando serve:
- la query è troppo complessa per una keyword (es. a lezione: la **ricerca dinamica di un prodotto**, con parametri opzionali);
- il parser del nome del metodo non supporta la keyword che si vuole usare;
- il nome del metodo diventerebbe inutilmente lungo e brutto.

In più la query sta nell'interfaccia del repository, legata al metodo che la esegue, e la classe di dominio (l'entity) resta libera da informazioni sulla persistenza.

#### Dove si definiscono le query

Una query si può definire in tre modi:
1. **dal nome del metodo** (query method, automatico);
2. con **`@Query`** sul metodo del repository;
3. come **named query**, associata all'entity con un nome:
   - in un **file XML**:
     ```xml
     <named-query name="User.findByLastname">
       <query>select u from User u where u.lastname = ?1</query>
     </named-query>
     ```
   - con l'annotazione **`@NamedQuery`** sull'entity:
     ```java
     @Entity
     @NamedQuery(name = "User.findByEmailAddress",
       query = "select u from User u where u.emailAddress = ?1")
     public class User { }
     ```

>[!tip] Consiglio
>La via preferibile è definire la query **direttamente nel repository** (con `@Query` o con il nome del metodo).

#### Esempi

**Like**: il `%` si può mettere nella query stessa. Qui cerca gli utenti il cui nome **finisce** con il parametro:
```java
@Query("select u from User u where u.firstname like %?1")
List<User> findByFirstnameEndsWith(String firstname);
```

**Query native**: con `nativeQuery = true` la query è scritta in **SQL** del DBMS (sulle tabelle e colonne, non sulle entity), quindi si perde la portabilità di JPQL.
```java
@Query(value = "SELECT * FROM USERS WHERE EMAIL_ADDRESS = ?1", nativeQuery = true)
User findByEmailAddress(String emailAddress);
```
>[!attention] AGGIUNTA
>Nella slide il parametro è `?0`, ma in JPA i parametri posizionali partono da `?1`.

**Parametri con nome** (`@Param`): al posto di `?1`, `?2` si usano nomi (`:firstname`), associati ai parametri del metodo con `@Param`. Così l'ordine dei parametri nella firma non conta.
```java
@Query("select u from User u where u.firstname = :firstname or u.lastname = :lastname")
User findByLastnameOrFirstname(@Param("lastname") String lastname,
                               @Param("firstname") String firstname);
```

**Query di modifica**: per `update` (con `set`) e `delete` si aggiunge `@Modifying`. Il metodo restituisce il numero di righe modificate.
```java
@Modifying
@Query("update User u set u.firstname = ?1 where u.lastname = ?2")
int setFixedFirstnameFor(String firstname, String lastname);
```
>[!attention] AGGIUNTA
>Una query `@Modifying` deve girare dentro una transazione: va chiamata da un metodo `@Transactional` (vedi [[#Services|services]]).

#### Paginazione

Un risultato **paginato** è un risultato diviso in **pagine**: quando una query restituisce troppi risultati (es. una ricerca su un e-commerce), invece di mandarli tutti insieme se ne manda una pagina alla volta.

Si fa a livello di repository passando un parametro `Pageable` e restituendo una `Page`:
```java
public interface UserRepository extends Repository<User, Long> {
    @QueryHints(value = { @QueryHint(name = "name", value = "value")},
                forCounting = false)
    Page<User> findByLastname(String lastname, Pageable pageable);
}
```
Nell'oggetto `Pageable` si mettono i parametri della paginazione (numero della pagina, quanti elementi per pagina, ordinamento): cambiandoli cambia il risultato restituito.

>[!attention] AGGIUNTA
>Un `Pageable` si crea ad esempio con `PageRequest.of(0, 20, Sort.by("lastname"))` (prima pagina, 20 elementi, ordinati per cognome). La `Page` restituita contiene, oltre agli elementi, il numero totale di elementi e di pagine. `@QueryHints` non serve per paginare: passa dei suggerimenti al provider JPA, e `forCounting = false` dice di non applicarli alla query che conta il totale.


L'uso della paginazione da controller e service è in [[#Paginazione nel controller|paginazione nel controller]].

### Specifications

Una **specification** è una condizione (un predicato della `where`) scritta in Java, riusabile e **combinabile** con altre.

Esempio detto a lezione: si vuole dare uno **sconto** ai clienti registrati da più di due anni. Si definisce una specification `isLongTermCustomer` che verifica la condizione sul cliente. Si potrebbe fare anche solo con una query, ma con la specification la condizione ha un nome e si può combinare con altre.

```java
public class CustomerSpecs {
    public static Specification<Customer> isLongTermCustomer() {
        return new Specification<Customer>() {
            public Predicate toPredicate(Root<Customer> root, CriteriaQuery<?> query,
                                         CriteriaBuilder builder) {
                LocalDate date = new LocalDate().minusYears(2);
                // createdAt < oggi - 2 anni
                return builder.lessThan(root.get(Customer_.createdAt), date);
            }
        };
    }

    public static Specification<Customer> hasSalesOfMoreThan(MonetaryAmount value) {
        // ... analoga
    }
}
```

```java
// where costruita con la specification
List<Customer> customers = customerRepository.findAll(isLongTermCustomer());

// specification combinate (qui in OR)
MonetaryAmount amount = new MonetaryAmount(200.0, Currencies.DOLLAR);
List<Customer> customers = customerRepository.findAll(
    where(isLongTermCustomer()).or(hasSalesOfMoreThan(amount)));
```

>[!attention] AGGIUNTA
>Per avere `findAll(Specification)` il repository deve estendere anche `JpaSpecificationExecutor<Customer>`. Le specification sono un modo comodo anche per la ricerca dinamica con parametri opzionali: si aggiunge una condizione solo se il parametro è presente.

### `@Lock`

Il **locking** serve a impedire, con accessi concorrenti:
- le **letture sporche**: leggere dati di un'altra transazione non ancora sottoposti a commit;
- le **letture non ripetibili**: rileggere un dato e trovarlo cambiato (o eliminato) da un'altra transazione prima che la lettura sia terminata.

Si mette `@Lock` sul metodo del repository, sia su un query method sia ridichiarando un metodo CRUD già esistente:
```java
interface UserRepository extends Repository<User, Long> {
    // query method
    @Lock(LockModeType.READ)
    List<User> findByLastname(String lastname);

    // ridichiarazione di un metodo CRUD
    @Lock(LockModeType.READ)
    List<User> findAll();
}
```
Teoria su tipi di lock (ottimistici e pessimistici) in [[Spring#Transazioni in Spring|transazioni]].

>[!attention] AGGIUNTA
>`LockModeType.READ` equivale a `OPTIMISTIC`. Il lock funziona solo dentro una transazione attiva.

### Configurazione del database: `application.yaml`

Con un database **embedded** come H2 non serve configurare nulla: fa tutto `spring-boot-starter-data-jpa`. Con DBMS "veri" (MySQL, PostgreSQL, Oracle DB, MS SQL Server) bisogna dire a Spring qual è la fonte dati: URL, username, password, driver e dialetto.

Nel progetto il file `application.properties` **va eliminato** e si crea un `application.yaml`. Il contenuto è lo stesso (le proprietà dell'applicazione), ma il `.yaml` ha una struttura più pulita: le proprietà sono raggruppate per gerarchia invece di ripetere il prefisso (`spring.datasource.…`) a ogni riga.

>[!multi-column]
>
>>[!blank]
>>`application.properties`
>>```properties
>>spring.datasource.password=***
>>spring.datasource.driver-class-name=com.mysql.jdbc.Driver
>>spring.datasource.username=***
>>spring.datasource.url=jdbc:mysql://localhost:3306/orders
>>spring.jpa.database-platform=org.hibernate.dialect.MySQL5Dialect
>>```
>
>>[!blank]
>>`application.yaml`
>>```yaml
>>spring:
>>  datasource:
>>    password: '***'
>>    driver-class-name: com.mysql.jdbc.Driver
>>    username: '***'
>>    url: jdbc:mysql://localhost:3306/orders
>>  jpa:
>>    database-platform: org.hibernate.dialect.MySQL5Dialect
>>```

Nella slide l'URL ha anche dei parametri (`?useUnicode=true&useJDBCCompliantTimezoneShift=true&useLegacyDatetimeCode=false`); `orders` è il nome del database.

Anche i valori del `.yaml` si leggono nel codice con `@Value` (vedi sopra), con la stessa sintassi `${spring.datasource.username}`.

>[!attention] AGGIUNTA
>In YAML l'indentazione si fa **solo con spazi**: i tab non sono ammessi e danno errore all'avvio.

## Services

Nel layer dei services va implementata la **logica di business** della web app: i services si appoggiano ai metodi dei repository (per accedere ai dati persistenti e modificarli) e forniscono i risultati al livello superiore, i controller.

```java
package com.space.scanner.alien.service;
import [...]

@Service
public class AlienService {
    @Autowired                        // iniettato da Spring, niente new
    private AlienRepository alienRepository;
    @Autowired
    Planet planet;

    // crea l'entity, ne imposta i campi e la salva
    public void addAlien(String name, String race) {
        Alien a = new Alien();
        a.setName(name);
        a.setRace(race);
        a.setPlanet(planet.getName());
        alienRepository.save(a);      // entity non attached: save esplicito
    }

    // si limita a "wrappare" un metodo del repository
    public List<Alien> getAliens() {
        return alienRepository.findByPlanet(planet.getName());
    }

    public List<Alien> getAliens(String race) {
        return alienRepository.findByPlanetAndRace(planet.getName(), race);
    }
}
```

>[!important] Wrappare anche i metodi banali
>Vanno wrappati nel service anche i metodi dei repository che non aggiungono nulla (come `getAliens`): il controller deve chiamare **solo** metodi dei services, mai direttamente quelli dei livelli sottostanti. Così se cambia la logica si modifica solo il service, e il codice resta aggiornabile (vedi [[#Come strutturare un server|regola delle chiamate tra layer]]).

### `@Transactional`

`@Transactional` si mette a livello di **classe** (tutti i metodi diventano transazionali) o di **metodo**. Ha diverse proprietà per controllare la transazione o il rapporto con altre transazioni in corso:
- `readOnly`: con `true` il metodo esegue solo query di selezione; con `false` può fare anche `update`, `insert` e `delete`. Default: `false`;
- `rollbackFor` / `noRollbackFor`: per quali eccezioni fare (o non fare) il rollback. Di default Spring fa il rollback per le `RuntimeException` e le altre eccezioni **non controllate**;
- `isolation`: quanto una transazione è isolata dal lavoro delle altre;
- `propagation`: cosa succede se un metodo transazionale viene chiamato quando esiste già una transazione.

Tabella completa degli attributi in [[Spring#Transazioni in Spring|transazioni]].

>[!attention] AGGIUNTA
>Quindi per le eccezioni **controllate** (checked, es. una propria `CreditoInsufficienteException extends Exception`) di default **non** c'è rollback: va chiesto con `rollbackFor = CreditoInsufficienteException.class`.

#### Propagazione

Definisce la relazione tra le transazioni:

| Tipo | Comportamento |
| --- | --- |
| `REQUIRED` (default) | il codice gira sempre in una transazione: riutilizza quella esistente o ne crea una nuova |
| `REQUIRES_NEW` | il codice gira sempre in una **nuova** transazione; quella corrente, se esiste, viene sospesa |
| `SUPPORTS` | se esiste una transazione attiva la usa, altrimenti esegue senza transazione |
| `MANDATORY` | se esiste una transazione attiva la usa, altrimenti Spring lancia un'eccezione |
| `NEVER` | Spring lancia un'eccezione se esiste una transazione attiva |
| `NOT_SUPPORTED` | sospende la transazione corrente, se esiste, ed esegue senza transazione |
| `NESTED` | se esiste una transazione crea un **punto di salvataggio**: se la logica lancia un'eccezione si torna indietro fino a quel punto. Se non c'è nessuna transazione funziona come `REQUIRED` |

#### Isolamento

Definisce il "contratto" sui dati tra le transazioni:

| Livello | Comportamento |
| --- | --- |
| `READ_UNCOMMITTED` | consente le letture sporche |
| `READ_COMMITTED` | non consente le letture sporche |
| `REPEATABLE_READ` | se una riga viene letta due volte nella stessa transazione, il risultato è sempre lo stesso |
| `SERIALIZABLE` | esegue le transazioni in sequenza |

>[!attention] AGGIUNTA
>`SERIALIZABLE` non vuol dire che il DBMS le esegue davvero una alla volta: garantisce che il risultato sia **equivalente** a un'esecuzione in sequenza. Il default di Spring è `Isolation.DEFAULT`, cioè il livello di default del DBMS.

>[!important] Requisito del progetto
>Il progetto deve avere una **parte transazionale**. Esempio: in un e-commerce più utenti accedono in contemporanea alle stesse risorse. Se due utenti comprano ciascuno un'unità di un prodotto di cui ne è rimasta una sola, deve essere garantito il corretto funzionamento: uno dei due acquisti va a buon fine, l'altro no.

>[!attention] AGGIUNTA
>`@Transactional` da solo rende l'acquisto atomico, ma non basta per due acquisti **concorrenti**: entrambi potrebbero leggere "quantità = 1" prima che l'altro la decrementi. Serve anche un lock sul prodotto, ad esempio `@Lock(LockModeType.PESSIMISTIC_WRITE)` sul metodo del repository che lo legge, oppure un campo `@Version` nell'entity (lock ottimistico). Vedi [[Spring#Transazioni in Spring|transazioni]].

## Controllers

Il controller è l'ultimo layer: modella il comportamento dell'applicazione rendendo disponibili i metodi a chi la usa, tramite un'interfaccia web HTML oppure tramite **servizi REST**. A noi interessano i **REST controller**.

>[!question] Servizi REST
>Ipotizziamo un e-commerce con un'applicazione mobile e un sito web: sono i **client** (front-end).
>Il **back-end** è un server che contiene l'applicazione (Spring / Spring Boot o FastAPI, il DB, la sicurezza…).
>Back-end e front-end comunicano tramite i **servizi REST**: il server fornisce $n$ **endpoint**, cioè dei "ganci" a cui l'app mobile o il browser si collegano per prelevare informazioni. La comunicazione usa il protocollo **HTTP**: il client chiama l'endpoint, il server calcola la risposta e la restituisce.
>Chiamare un servizio REST $\equiv$ collegarsi a un sito web: la differenza sta nella richiesta, che ha dei parametri nell'URL o nel body, ad esempio
>`http://<nome_server>/search?<param>=<valore>`
>Arrivata al server, la richiesta passa al controller, poi a services, repositories ed entities, e infine viene creata la risposta da rimandare al client.

### `@RequestMapping` e `@GetMapping`

- `@RequestMapping` sulla classe indica l'**URL** che porta a quel controller. Poi l'URL si può specializzare sui singoli metodi.
- `@GetMapping`: quando si creano i metodi bisogna associarli al **metodo HTTP** che useranno; `@GetMapping` associa il metodo alle richieste `GET`.

>[!attention] AGGIUNTA
>Per gli altri metodi HTTP ci sono `@PostMapping`, `@PutMapping`, `@DeleteMapping` e `@PatchMapping`. Ad esempio con `@RequestMapping("/products")` sulla classe e `@GetMapping("/search")` sul metodo, il metodo risponde a `GET /products/search`.

### `@CookieValue` (livello variabile)

Serve per **leggere** informazioni salvate nel **browser** dell'utente tramite cookie: associa un parametro del metodo al valore di un cookie HTTP inviato dal client. Per **scrivere** un cookie invece lo si aggiunge alla risposta HTTP, non si usa `@CookieValue`.

I **cookie** sono piccole informazioni memorizzate dal server nel browser dell'utente (slide 78). Il server imposta i cookie quando restituisce la risposta a una richiesta del browser; il browser li memorizza e li rimanda con la richiesta successiva allo stesso server. Si usano per la gestione delle sessioni, il monitoraggio degli utenti e per memorizzare le preferenze.

>[!multi-column]
>
>>[!blank] Scrivere un cookie
>>```java
>>@GetMapping("/change-username")
>>public String setCookie(HttpServletResponse response) {
>>  // create a cookie
>>  Cookie cookie = new Cookie("username", "Jovan");
>>  // add cookie to response
>>  response.addCookie(cookie);
>>  return "Username is changed!";
>>}
>>```
>
>>[!blank] Leggere un cookie
>>```java
>>@GetMapping("/")
>>public String readCookie(
>>    @CookieValue(value = "username", defaultValue = "Atta") String username) {
>>  return "Hey! My username is " + username;
>>}
>>```

>[!important] Solo informazioni non sensibili
>I cookie stanno sul client, che può **modificarli o manometterli**: ci vanno solo informazioni del client che non sono sensibili, e di cui non importa se vengono cambiate.

### Cosa può ritornare un controller

I metodi del controller possono restituire:

- **`Model`**: serve per passare i dati dal model alla view. Il metodo riceve un `Model`, ci aggiunge gli attributi e restituisce il **nome della pagina** (template):

>[!multi-column]
>
>>[!blank]
>>```java
>>@Controller
>>@RequestMapping("/")
>>public class SalutiController {
>>
>>  @GetMapping
>>  public String unSaluto(Model model) {
>>    model.addAttribute("nome", "David");
>>    return "ciao-mondo";
>>  }
>>}
>>```
>
>>[!blank]
>>```html
>><!DOCTYPE html>
>><html xmlns:th="http://www.thymeleaf.org">
>><head>
>>  <title>Pagina dei saluti</title>
>></head>
>><body>
>>  <h1>Ciao Mondo! Sono <span th:text="${nome}"></span>...</h1>
>></body>
>></html>
>>```

- **`ModelAndView`**: come il `Model`, ma nello stesso oggetto si specifica anche la pagina di destinazione:
```java
@GetMapping
public ModelAndView unSaluto() {
    return new ModelAndView("ciao-mondo", "nome", "David");
}
```

>[!attention] AGGIUNTA
>La pagina HTML è un template **Thymeleaf**, un motore di template lato server integrato con Spring: gli attributi `th:*` (es. `th:text`) vengono elaborati dal server prima di inviare la pagina, e `${nome}` legge l'attributo `nome` messo nel model. La stringa restituita (`"ciao-mondo"`) è il nome del file, cercato in `src/main/resources/templates/ciao-mondo.html`.

>[!question] Osservazione
>`Model` e `ModelAndView` sono l'**approccio legacy**: il server genera la pagina HTML. Oggi si usano i servizi REST, che restituiscono solo i dati (vedi sotto).

### Pagina generata dal server vs servizi REST

Con `Model` / `ModelAndView` il server prende la richiesta HTTP, inserisce gli attributi nel model, genera il codice **HTML** della pagina e lo manda al client. A ogni nuova chiamata HTTP la pagina viene **rigenerata da zero** e reinviata.

Con un servizio REST invece il server restituisce solo i **dati**: la pagina sul client resta fissa e viene aggiornata solo la parte che serve, fino alla chiamata successiva. È quello che si fa con una **chiamata AJAX**.
![[Esercitazione-1794331268291.webp|89]]

>[!attention] AGGIUNTA
>Per i servizi REST si usa `@RestController` (= `@Controller` + `@ResponseBody`): l'oggetto restituito dal metodo (es. una `List<Product>`) non è il nome di una pagina, ma viene convertito in **JSON** e messo nel corpo della risposta, come visto all'[[#Spring|inizio]].

### Controller e REST API

I controller sono la vera anima del paradigma MVC (slide 73): sono il componente **invocato direttamente dai client** e possono esistere anche senza Model e View. Smartphone, PC e tablet chiamano le **REST API** del server, che a loro volta lavorano sul database.

### REST

Caratteristiche di **REST** (*REpresentational State Transfer*, slide 75):
- l'astrazione principale è la **risorsa**;
- si evitano le azioni (es. `add`): per definire le API si usano **nomi, non verbi**;
- ogni risorsa ha un **URI** (*Uniform Resource Identifier*);
- ogni risorsa ha una sua **rappresentazione** (XML, HTML, JSON, TEXT) che ne identifica lo stato attuale;
- REST usa i **verbi HTTP** per codificare le operazioni sulle risorse:

| Metodo HTTP | Operazione |
|---|---|
| `POST` | crea una risorsa (CREATE) |
| `GET` | legge una risorsa (READ) |
| `PUT` | aggiorna una risorsa (UPDATE) |
| `DELETE` | elimina una risorsa (DELETE) |

>[!question] Osservazione
>A livello pratico un servizio REST si può chiamare sempre con una `GET`, anche per creare un utente, e funziona. Le linee guida però dicono di usare il verbo giusto: un servizio *create user* deve essere una `POST`. Con il metodo HTTP diciamo **cosa stiamo facendo** con il servizio REST.
>- La `POST` ha un **payload maggiore**: se devo inserire un'informazione che può essere abbastanza grande, la mando con una `POST`, perché con la `GET` potrebbe non entrare.

>[!attention] AGGIUNTA
>Il limite della `GET` dipende dal fatto che i dati viaggiano **nell'URL** (query string), e browser e server accettano URL di lunghezza limitata. La `POST` invece li mette nel **body** della richiesta.

### Esempio: `AlienService` e `AlienController`

Il service dell'esempio (slide 76 della versione delle slide di Claudia: nella versione di Davide non c'è):
```java
package com.space.scanner.alien.service;
import [...]

@Service
public class AlienService {
  @Autowired
  private AlienRepository alienRepository;
  @Autowired
  Planet planet;

  public void addAlien(String name, String race) {
    Alien a = new Alien();
    a.setName(name);
    a.setRace(race);
    a.setPlanet(planet.getName());
    alienRepository.save(a);
  }

  public List<Alien> getAliens() {
    return alienRepository.findByPlanet(planet.getName());
  }

  public List<Alien> getAliens(String race) {
    return alienRepository.findByPlanetAndRace(planet.getName(), race);
  }
}
```

Il controller che espone il CRUD sugli alieni (slide 76):
```java
// CREATE
@PostMapping("")
Alien createAlien(@Valid @RequestBody Alien newAlien) {
  return alienService.createAlien(newAlien);
}
// READ
@GetMapping("/{id}")
public @ResponseBody Alien getAlien(@PathVariable String id) {
  return alienService.getAlien(id);
}
// UPDATE
@PutMapping("/{id}")
public @ResponseBody Alien updateAlien(@PathVariable String id,
                                       @Valid @RequestBody Alien newAlien) {
  return alienService.updateAlien(id, newAlien);
}
// DELETE
@DeleteMapping("/{id}")
void deleteAlien(@PathVariable String id) {
  alienService.deleteAlien(id);
}
```
- `@PostMapping`, `@GetMapping`, `@PutMapping`, `@DeleteMapping` **sostituiscono e specializzano** `@RequestMapping`.
- `@Valid @RequestBody`: l'oggetto JSON nel payload della richiesta viene convertito in un'**entità del dominio**, applicando le regole di validazione scritte nell'entità.

>[!attention] AGGIUNTA
>Nelle slide la classe del controller non c'è: si suppone annotata con `@RestController` e `@RequestMapping` (es. `@RequestMapping("/alien")`). Con `@RestController` il `@ResponseBody` sui metodi non serve, perché è già implicito. I metodi chiamati sul service (`createAlien`, `getAlien`, `updateAlien`, `deleteAlien`) non coincidono con quelli di `AlienService` della slide precedente (`addAlien`, `getAliens`): i due esempi non sono stati scritti insieme.

### L'URL di un servizio REST

Un servizio REST si chiama andando al suo indirizzo specifico:
```
http://<nome_server>/<path_controller>/<path_metodo>
```
- La prima parte dell'indirizzo la compila **automaticamente** Spring. Il **routing** di classe e metodo invece lo facciamo noi, con le annotazioni:
  - `@RequestMapping` sulla **classe** definisce la parte dell'URL che porta alla risorsa;
  - l'annotazione sul **metodo** aggiunge la parte più specifica, che porta al metodo esatto.
- La chiamata HTTP del client deve **corrispondere al tipo di mapping**: se il metodo è un `@GetMapping`, il client deve usare una `GET`, altrimenti riceve un errore.
- Se chiamo solo l'URL della classe con un certo metodo HTTP, viene eseguito il metodo con quel tipo di mapping, anche se non ha un path suo (es. `@PostMapping("")`).
- Se ci sono **più metodi dello stesso tipo** (es. due `POST`), si distinguono con il path tra `""`: devono avere URL diversi, così l'associazione è univoca.

>[!attention] AGGIUNTA
>Se il metodo HTTP non corrisponde, Spring risponde con lo status **405 Method Not Allowed**; se l'URL non esiste, con **404 Not Found**.

>[!question] Documentazione delle API
>Chi sviluppa il back-end fornisce la **documentazione delle API**: chi le usa (il front-end) sa come chiamarle senza dover conoscere il codice o come funziona. Le annotazioni del controller (path e metodo HTTP di ogni servizio) sono già, in pratica, questa documentazione.

### Passare parametri ai servizi REST

Ci sono due modi per passare parametri nell'URL (slide 76):

>[!multi-column]
>
>>[!check] Path variable
>>Nel path del mapping si scrive il parametro tra graffe e lo si preleva con `@PathVariable`:
>>```java
>>@RequestMapping(value = "/book/{idBook}",
>>                method = RequestMethod.GET)
>>public void getBook(@PathVariable("idBook") int id) {
>>  // [...]
>>}
>>```
>>Si chiama con `/book/10`.
>
>>[!check] Query string
>>I parametri vanno dopo `?`, separati da `&`, e si prelevano con `@RequestParam`:
>>```java
>>@RequestMapping(value = "/book",
>>                method = RequestMethod.GET)
>>public void getBookByParam(@RequestParam("bookId") int id) {
>>  System.out.println("Requested book " + id);
>>}
>>```
>>Si chiama con `/book?bookId=10`.

Sono valide entrambe, ma ognuna è più adatta a un caso:
- **path variable** (`/{id}/{nome}`): quando i parametri sono **fissi** e il metodo li deve ricevere per forza;
- **query string** (`?p1=...&p2=...`): quando i parametri sono tanti e **facoltativi**. Funziona a chiave-valore, quindi passo solo quelli che mi interessano. Esempio: una **ricerca avanzata**, dove non si sa a priori quali e quanti parametri verranno usati: il metodo li prevede tutti, e la chiamata passa solo quelli scelti.

>[!important] Parametri nel body: `@RequestBody`
>Se devo aggiungere un elemento e i parametri sono tanti, non ha senso passarli nell'URL. La richiesta HTTP ha vari campi, e i parametri si possono mettere nel **body**. Il body contiene un **JSON**: Spring ha già un parser JSON che lo traduce e crea l'oggetto Java, che si preleva con `@RequestBody` (es. `newAlien` in `createAlien`).

### Errori: eccezioni e `ResponseEntity`

```java
@GetMapping("/users/{id}")
public ResponseEntity<User> getUsersById(@PathVariable(value = "id") Long userId)
    throws ResourceNotFoundException {
  User user =
      userController
          .findById(userId)
          .orElseThrow(() -> new ResourceNotFoundException("User not found on :: " + userId));
  return ResponseEntity.ok().body(user);
}
```

**Best practice**:
- un metodo restituisce l'**oggetto** che ha aggiunto (o letto);
- i motivi per cui un metodo può fallire si descrivono con le **eccezioni** (vedi [[Java#Eccezioni checked|eccezioni in Java]]). Nel progetto si crea un **package `exception`**, con un'eccezione per ogni problema che può succedere;
- il metodo del service restituisce quindi di default l'oggetto (es. l'ordine); se qualcosa va storto lancia l'eccezione **specifica** di quel problema, senza ambiguità;
- vantaggio: chi implementa i controller non deve sapere cosa succede nei service. Quando chiama il metodo, l'IDE evidenzia le eccezioni da gestire, e con <kbd>Ctrl</kbd>+<kbd>Spazio</kbd> → *Surround with try/catch* aggiunge in automatico un `catch` per ognuna.

>[!attention] AGGIUNTA
>`ResponseEntity<T>` rappresenta l'intera risposta HTTP: body, status e header. `ResponseEntity.ok().body(user)` risponde con status **200 OK** e l'utente (in JSON) nel body. Nella slide `userController.findById(...)` è con ogni probabilità un refuso per `userRepository.findById(...)`: `findById` restituisce un `Optional`, e `orElseThrow` lancia l'eccezione se è vuoto.

### Paginazione nel controller

La **paginazione** serve a restituire i risultati di una ricerca **a pagine**, come le pagine dei prodotti di un e-commerce (slide 77). È il seguito della [[#Paginazione|paginazione nei repository]].

>[!multi-column]
>
>>[!blank] Controller
>>```java
>>@GetMapping("/paged")
>>public ResponseEntity getAll(
>>    @RequestParam(value = "pageNumber", defaultValue = "0") int pageNumber,
>>    @RequestParam(value = "pageSize", defaultValue = "10") int pageSize,
>>    @RequestParam(value = "sortBy", defaultValue = "id") String sortBy) {
>>  List<Product> result = productService.showAllProducts(pageNumber, pageSize, sortBy);
>>  if ( result.size() <= 0 ) {
>>    return new ResponseEntity<>(new ResponseMessage("No results!"), HttpStatus.OK);
>>  }
>>  return new ResponseEntity<>(result, HttpStatus.OK);
>>}
>>```
>
>>[!blank] Service
>>```java
>>@Transactional(readOnly = true)
>>public List<Product> showAllProducts(int pageNumber, int pageSize, String sortBy) {
>>  Pageable paging = PageRequest.of(pageNumber, pageSize, Sort.by(sortBy));
>>  Page<Product> pagedResult = productRepository.findAll(paging);
>>  if ( pagedResult.hasContent() ) {
>>    return pagedResult.getContent();
>>  }
>>  else {
>>    return new ArrayList<>();
>>  }
>>}
>>```

- I parametri di paginazione arrivano in **query string**, con valori di default: pagina 0, 10 elementi, ordinamento per `id`.
- Il `sortBy` è **preferibile non lasciarlo libero**.

>[!attention] AGGIUNTA
>Lasciarlo libero vuol dire accettare qualsiasi stringa dal client: un nome di attributo che non esiste fa fallire la query, e si permette di ordinare per campi che non si vogliono esporre. Di solito si controlla che il valore sia in una lista di campi ammessi. `ResponseMessage` non è una classe di Spring, ma una classe del progetto per mandare un messaggio in JSON.

## Configurations

L'annotazione **`@Configuration`** serve per la configurazione di Spring basata su annotazioni (slide 80). È un'annotazione *marker*: indica che la classe dichiara uno o più metodi **`@Bean`**, che Spring elabora per generare le definizioni dei bean e servirli a runtime. Le configuration servono a impostare le **configurazioni trasversali** del web server.

È sempre bene **suddividere le configuration per scopo**, per avere un codice più pulito e manutenibile.

### Charset UTF-8

```java
@Bean
public MappingJackson2HttpMessageConverter mappingJackson2HttpMessageConverter() {
  MappingJackson2HttpMessageConverter jsonConverter = new MappingJackson2HttpMessageConverter();
  jsonConverter.setDefaultCharset(StandardCharsets.UTF_8);
  return jsonConverter;
}
```
Questo bean configura il **mapping dei JSON** che arrivano dai client nel body. Secondo le slide il charset standard non è UTF-8, e senza questa configurazione non si leggono alcuni caratteri (es. `À`).

>[!attention] AGGIUNTA
>Nelle versioni recenti di Spring il convertitore JSON di Jackson usa **già UTF-8** di default. Quello che usa ISO-8859-1 è `StringHttpMessageConverter`, che gestisce i body di tipo `String`. Il bean resta utile per essere sicuri del charset, ma non è più indispensabile.

### Sicurezza

Una configuration di sicurezza ("non troppa in questo esempio!", slide 82 della versione di Claudia). Con gli **`antMatcher`** si decide quali chiamate ai servizi REST sono pubbliche e quali vanno protette:
```java
@Bean
public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
  http.csrf(csrf -> csrf.disable()).authorizeHttpRequests(auth -> auth.requestMatchers(
          antMatcher("/check/simple"),
          antMatcher("/users/**"),
          antMatcher("/products/**"),
          antMatcher("/purchases/**")
      ).permitAll().anyRequest().authenticated());
  http.oauth2ResourceServer(oauth2 -> oauth2.jwt(jwt -> jwt.jwtAuthenticationConverter(jwtAuthConverter)));
  http.sessionManagement(sess -> sess.sessionCreationPolicy(STATELESS));
  return http.build();
}
```
- gli URL elencati sono accessibili a tutti (`permitAll()`), ogni altra richiesta richiede di essere **autenticati**;
- l'autenticazione avviene con un token **JWT** (OAuth2 resource server);
- le sessioni sono **stateless**, come visto per il [[#Server stateless|server stateless]].

>[!attention] AGGIUNTA
>`/**` vuol dire "questo path e tutti i sotto-path" (es. `/users/**` comprende `/users/5/orders`). `csrf().disable()` è normale per API REST stateless con token, perché la protezione CSRF serve quando l'autenticazione passa dai cookie di sessione. Nella versione delle slide di Davide (slide 81) c'è la stessa configurazione con l'approccio **legacy**: il metodo `configure(HttpSecurity http)` di `WebSecurityConfigurerAdapter`, con `.antMatchers(...)` concatenati. `WebSecurityConfigurerAdapter` è stato rimosso in Spring Security 6, per questo la versione nuova dichiara la `SecurityFilterChain` come `@Bean`. Per la teoria vedi [[Spring#Spring Security|Spring Security]].

### CORS

Una configuration per il **CORS mapping** (slide 82):
```java
@Bean
public CorsFilter corsFilter() {
  UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
  CorsConfiguration configuration = new CorsConfiguration();
  configuration.setAllowCredentials(true);
  configuration.addAllowedOrigin("*");
  configuration.addAllowedHeader("*");
  configuration.addAllowedMethod("OPTIONS");
  configuration.addAllowedMethod("GET");
  configuration.addAllowedMethod("POST");
  configuration.addAllowedMethod("PUT");
  source.registerCorsConfiguration("/**", configuration);
  return new CorsFilter(source);
}
```
- **Same-origin**: le richieste allo stesso server da cui arriva la pagina sono **sempre permesse**. **Cross-origin**: le richieste verso un altro dominio sono **controllate dal CORS**.
- `addAllowedOrigin` specifica gli indirizzi di chi può chiamare i servizi del server: con `*` sono **permessi tutti**.
- Sono permessi **solo alcuni metodi HTTP**, quelli elencati.
- **`OPTIONS` è importantissimo**: è la prima chiamata HTTP che viene inviata, e se non è permesso non si può fare nessuna richiesta.

>[!attention] AGGIUNTA
>- L'**origine** non è un indirizzo IP, ma la terna protocollo + dominio + porta (es. `http://localhost:4200`, l'app Angular in sviluppo).
>- La `OPTIONS` è la richiesta di **preflight**: per le richieste "non semplici" (es. `PUT`, `DELETE`, `POST` con body JSON, header personalizzati) il browser chiede prima al server se sono permesse, e solo dopo manda la richiesta vera.
>- Il CORS lo controlla il **browser**: chiamando le API da Postman o da un'app mobile non entra in gioco.
>- Nelle versioni recenti di Spring `setAllowCredentials(true)` insieme all'origine `"*"` non è più permesso (dà errore all'avvio): con le credenziali bisogna elencare le origini o usare `addAllowedOriginPattern("*")`.
>- Nell'esempio manca `DELETE` tra i metodi permessi: chiamato da un browser di un'altra origine, `deleteAlien` verrebbe bloccato.

## Main

```java
package com.space.scanner.alien;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class AlienApplication {

  public static void main(String[] args) {
    SpringApplication.run(AlienApplication.class, args);
  }
}
```
(slide 84)
- La classe contiene il **main**, che si limita a passare il controllo al framework tramite `SpringApplication.run()`. Di solito sta nel **root package**.
- **`@SpringBootApplication`** è un'annotazione di convenienza che in realtà aggiunge:
  - **`@Configuration`**: indica una classe che contiene definizioni di **bean**, oggetti da inserire nello Spring Container e da fornire tramite **dependency injection**;
  - **`@EnableAutoConfiguration`**: Spring inferisce alcuni parametri di configurazione in base, ad esempio, alle dipendenze (es. `@EnableWebMvc` viene inferito perché `spring-webmvc` è nel classpath);
  - **`@ComponentScan`**: Spring controlla nel package e nei sotto-package la presenza di componenti da inserire nello Spring Container e da fornire tramite DI.

>[!question] Osservazione
>Per questo il main va nel root package: `@ComponentScan` parte dal package della classe annotata, quindi controller, service e repository nei sotto-package (`...alien.service`, `...alien.controller`, …) vengono trovati da soli.
