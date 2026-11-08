# Esercitazione 2 — Programmazione Back-End (Spring)

>[!note] Fonti
>Slide "Programmazione Back-End - Esercitazione 2" (24 slide) + registrazione del 06/11 (due parti, trascrizione automatica piena di errori). Ci sono solo gli argomenti trattati a voce dal prof: quello che sta solo nelle slide è stato lasciato fuori.

## Perché Spring

Grazie a Spring possiamo concentrarci sulla logica di business del nostro progetto piuttosto di pensare all'implementazione di esso.

Tutto il **codice di contorno** è già implementato da Spring ed è sempre lo stesso in ogni web app: prendere la richiesta HTTP, decodificarla, passarla al nostro codice, prendere il risultato (es. una lista di prodotti), trasformarlo in **JSON** e metterlo nel corpo della risposta.

>[!check] Esempio
>L'utente chiede la lista dei prodotti venduti dal venditore X tra gennaio e febbraio. Noi scriviamo solo la parte che recupera quella lista; ricezione della richiesta e conversione in JSON della risposta le fa Spring.

Noi faremo dei **servizi REST**: un URL che, chiamato (anche dal browser), restituisce delle informazioni. Differenza con il web "classico": non chiedo una pagina web, ma **una risorsa**, e il server risponde con quella risorsa.

Spring (slide 3) è un framework **leggero** e **modulare**, si integra bene con molti strumenti ed è ricco di librerie (es. per l'accesso alle basi di dati).

## Come strutturare un server

Come è strutturato un server:
- **Controllers**
  Interfaccia con il cliente; utilizzerà delle chiamate a dei servizi rest per comunicare con i layer sottostanti;
- **Services**
  Utilizzano un insieme di metodi di Repositories per effettuare operazioni più complesse ed implementare la logica di business;
- **Repositories**
  Sono delle classi che si occupano esclusivamente dell'interazione con la base di dati (implementa dei metodi che effettuano query *es.* inserisci prodotto, preleva prodotto, ...);
- **Entities**
  Classi che modellano le informazioni che stanno nella base di dati (ogni attributo di una tabella viene mappato come una variabile di istanza di un oggetto java).

mappatura 1 a 1 entities repositories. I services usano più repositories per implementare la logica di business.
Si usa una logica top bottom, i layer superiori usano gli inferiori, ma mai il contrario
Il controller funziona mediante chiamate al services, quindi un qualsiasi controller funziona con lo stesso services.
Il controller prende la richiesta e chiama i metodi sottostanti.
Il service contiene tutta la parte di logica.
Conviene iniziare a lavorare al progetto dal layer più basso e andare verso l'alto.

>[!important] Regola delle chiamate tra layer
>Un layer può chiamare i metodi del layer **sotto** e quelli dello **stesso** layer (un service può chiamare un altro service), ma **mai** quelli del layer sopra (un service non chiama mai un controller).

### Esempio: e-commerce

**Entities**: una classe per ogni tabella (`User`, `Product`, `Order`, …), con un attributo per ogni colonna. Il risultato di una query viene inserito in automatico dentro l'oggetto.

**Repositories**: uno per ogni entity (`ProductRepository` per `Product`, …). Già in progettazione si pensa a **quali metodi serviranno** dopo, ad esempio:
- `ProductRepository`: modificare la quantità di un prodotto (quando viene comprato, o quando il gestore la incrementa);
- `UserRepository`: modificare il credito dell'utente;
- `OrderRepository`: prendere gli ordini di uno specifico utente.

**Services**: implementano la logica di business, cioè i comportamenti caratteristici dell'applicazione. Esempio, l'**acquisto** di un prodotto; dietro le quinte succedono più cose:
1. verificare che l'utente abbia **credito sufficiente** (tabella utente);
2. verificare che ci sia la **quantità disponibile** richiesta (tabella prodotto);
3. se entrambi i controlli passano: decrementare credito e quantità e creare una **nuova riga nella tabella ordine**.

Quindi un solo metodo del service usa **più repository** (user, product, order).

I services si organizzano **per area logica**, ad esempio:
- `PurchaseService`: si occupa degli acquisti;
- `UserService` / `AccountService`: gestione degli account degli utenti;
- un service per il credito (es. per trasferirlo ad altri utenti).

Se sto in `PurchaseService` non ci metto un metodo che modifica gli utenti: quello va in `UserService`, e `PurchaseService` lo chiama.

**Controllers**: non fanno quasi nulla. Prendono la richiesta, chiamano il metodo del service corrispondente e restituiscono la risposta: saranno metodi di **poche righe**.
- Il controller dipende dalla **tecnologia del front-end** (es. Angular, che si vedrà nel prossimo semestre).
- Aneddoto del prof: in un progetto si è cambiata la libreria del front-end; è bastato riscrivere i controller, mentre i services (acquisti, vendite, …) sono rimasti identici perché indipendenti dalla tecnologia.

### Progettazione e manutenzione

- Prima si progetta **su carta**, poi si crea il progetto. Si parte **dal basso**: base di dati (come a Basi di dati) → entities → repositories → services → controllers.
- Spring permette anche di **generare la base di dati a partire dalle entity**. È più veloce, ma il prof consiglia di progettare prima la base di dati: partendo dal codice si rischiano relazioni sbagliate, difficili da correggere dopo.
- Codice ben strutturato = leggibile e **manutenibile**. Il costo vero del software non è al giorno 0 (la prima versione), ma nella vita successiva: manutenzione, correzioni, scalabilità (esempio di Google: partito da un piccolo prototipo, poi è dovuto scalare).
- Se il backend è progettato bene, si implementa molto più in fretta del front-end (esperienza del prof: ~2 giorni contro ~10).
- Sull'AI: va bene usarla, ma bisogna capire il codice che produce, altrimenti quando c'è un errore da correggere non si sa dove mettere le mani.

## Stereotipi e annotazioni

Le annotazioni sono **a livello di classe**, **di metodo** o **di variabile** e dicono a Spring cosa fare con quell'elemento.

### Livello classe: `@Component` e stereotipi

- `@Component` è lo stereotipo "padre": tecnicamente si potrebbe annotare ogni classe con `@Component` e funzionerebbe.
- Conviene però usare la specializzazione giusta: `@Controller` (o `@RestController`) per i controller, `@Service` per i services, `@Repository` per i repositories. Usare `@Component` al posto di `@Service` non dà errori, ma `@Service` è più leggibile (slide 7).

```
@Component
├── @Controller
│   └── @RestController
├── @Service
└── @Repository
```
(gerarchia da slide 10; nella slide c'è scritto `@Registry`, ma è `@Repository`)

**Perché annotare?** Perché gli oggetti di controller, service e repository **non li istanziamo noi** (niente `new`): li gestisce Spring.
- Istanziare un oggetto ha un costo; Spring tiene in memoria gli oggetti già creati e li **riusa** invece di crearne di nuovi.
- Esempio: picco di richieste (Prime Day). Senza questo meccanismo si creerebbero tantissimi oggetti, con un costo enorme di risorse.

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

Il prof ha detto che Spring istanzia gli oggetti solo quando servono: se il service ha due repository e chiamo solo il metodo che usa il primo, viene istanziato solo il primo.

>[!attention] AGGIUNTA
>Il codice qui sopra è un esempio mio, non è nelle slide. Inoltre, da quanto c'è in [[Spring#Quando il container crea il bean]], di default i bean `singleton` vengono creati **all'avvio** (eager) e ne esiste **una sola istanza** condivisa; la creazione "solo quando serve" vale con `@Lazy`. Forse il prof semplificava, oppure la trascrizione ha perso qualcosa: da verificare.

### `@Value` (livello variabile)

Recupera un valore da un file `.properties` (es. `application.properties`) e lo inietta in una variabile.

Serve per i **parametri di configurazione**: nome dell'app, limiti sulle richieste, **API key** (es. la chiave di Gemini per usare i servizi AI di Google). Invece di cercarli sparsi nel codice, stanno tutti in un file.
- Esempio: in sviluppo uso la mia chiave; quando consegno l'applicazione al cliente, lui mette la sua nel file di configurazione senza toccare il codice.
- La chiave serve al servizio esterno per riconoscere chi fa la richiesta (e scalare il credito; finito il credito, niente più risposte).

```java
@Value("${gemini.api.key}")
private String apiKey;
```
>[!attention] AGGIUNTA
>La sintassi `${...}` e il nome della proprietà sono un esempio mio, nelle slide non c'è codice per `@Value`.

### `@Valid` (livello variabile)

Serve per la **validazione dei campi**.
- Nelle entity si mettono dei **vincoli** sui singoli attributi: lunghezza massima di una stringa (es. max 10 caratteri), che un campo contenga un'email valida, ecc.
- Nel controller si annota con `@Valid` il parametro ricevuto (es. un `User`): Spring verifica in automatico **ogni vincolo** prima di andare avanti. Così non serve scrivere a mano una serie di `if` di controllo.

>[!attention] AGGIUNTA
>Le annotazioni dei vincoli sono, ad esempio, `@Size(max = 10)` e `@Email` (Jakarta Bean Validation). Non sono nelle slide e dalla trascrizione non si capisce quali abbia scritto il prof.

### `@CookieValue` (livello variabile)

Serve quando c'è bisogno di salvare/leggere informazioni nel **browser** dell'utente tramite cookie: associa un parametro del metodo al valore di un cookie HTTP (slide 9). Il prof l'ha solo nominata, rimandando a un esempio.

Le annotazioni dei controller il prof le vedrà quando si parlerà dei controller.

## Server stateless

I service e i controller vengono presi dal **pool** di oggetti gestito da Spring e riusati da richieste diverse. Quindi il server va progettato **stateless**:
- una volta soddisfatta una richiesta, il server **non conserva nulla** della sessione dell'utente;
- non si salvano nelle variabili d'istanza di service e controller informazioni legate a una specifica sessione, altrimenti quell'oggetto non potrebbe essere riusato per altre richieste;
- un server **stateful** è molto più pesante: deve tenere in memoria le informazioni delle sessioni, anche quando l'utente se ne va e non servono più.

## Accesso ai dati

### DAO e JDBC

Con il pattern **DAO** (Data Access Object) una classe si occupa solo dell'accesso ai dati: inserimento, aggiornamento, eliminazione e ricerca. Esempio della slide 13: entity `Book` (isbn, author, title) e interfaccia `BookDao` (`insert`, `update`, `delete`, `findByISBN`, `findAllBooks`, `bookCount`).

Per accedere a una base di dati senza Spring si usa una libreria come **JDBC**, che fornisce i metodi per collegarsi al DB, che può stare anche su un'altra macchina. Bisogna però fare tutto a mano (slide 14):
1. aprire la connessione al datasource;
2. creare il `PreparedStatement` e passargli i parametri;
3. eseguirlo;
4. estrarre i risultati dal `ResultSet`;
5. gestire le eccezioni;
6. chiudere la connessione.

>[!question] Osservazione: SQL injection
>Le query si fanno con i **prepared statement** (parametri passati con `?`) e non concatenando stringhe: questo previene gli attacchi di **SQL injection**.

Con `JdbcTemplate` (slide 15) si passano query e parametri (`update(...)` per inserire, modificare o eliminare). Serve anche una classe `RowMapper` (es. `BookRowMapper`) che mappa una riga del `ResultSet` su un oggetto `Book`.

Tutto questo è codice non legato alla logica applicativa. Nelle versioni recenti delle librerie di Spring è **tutto automatico**: non serve più scrivere né il DAO né il mapping. Nella prossima lezione si configurerà la connessione alla base di dati e si farà un esempio.

### Chiavi composte

Il prof sconsiglia le **chiavi composte** (es. una tabella con chiave formata da una chiave esterna più un altro attributo):
- servirebbe una classe in più che modella la chiave, oltre a quella dell'entity;
- per cercare un oggetto bisogna ricostruire ogni volta la chiave con tutti i suoi attributi, e il codice diventa bruttissimo.

**Soluzione**: si aggiunge un "pizzico di ridondanza", cioè un **id numerico** come chiave. Il vincolo che la coppia di attributi non si ripeta si mantiene con un vincolo di unicità su quella coppia. Si guadagna tanto in semplicità.

### Entity

- `@Entity`: dice a Spring che la classe è un'entity.
- `@Table`: indica la tabella a cui fa riferimento. Se il nome della tabella si ricava da quello della classe (classe `User` → tabella `user`), Spring la trova da solo. Se è diverso (es. tabella `users`) va specificato con `@Table(name = "...")`.
- `@Id`: indica la variabile che fa da chiave primaria.
- `@GeneratedValue`: indica il meccanismo di generazione della chiave. Di solito si usa quello automatico (`GenerationType.AUTO`), che in generale funziona bene.
- `@Column`: indica la colonna a cui corrisponde la variabile. Anche qui, se il nome si ricava in automatico non serve. Se è diverso (variabile `sname`, colonna `first_name`) va specificato.
- `@Basic`: ha un parametro per caricare l'attributo in modo **lazy**, cioè solo quando serve davvero (es. la data di nascita, se non serve sempre). Così si occupa meno memoria.
- `@Transient`: la variabile d'istanza **non** viene salvata nella base di dati. Esempio: il client manda un valore che serve in quel momento, ma per cui non c'è una colonna nel DB.

>[!attention] AGGIUNTA
>`@Transient` non è nelle slide: l'ha nominata il prof (nella trascrizione "transient").

### Relazioni

Se un utente ha una lista di ordini (o un carrello), la si mette come **variabile d'istanza** nell'entity `User`. Quando prendo l'utente, Spring preleva in automatico anche gli oggetti collegati: **non bisogna scrivere le join**. Con le annotazioni si dice a Spring com'è fatta la relazione dello schema relazionale.

- `@JoinColumn`: la colonna che contiene la chiave esterna, cioè quella su cui fare la join.

>[!tip] Consiglio del prof
>Le annotazioni delle relazioni mettetele sulla **variabile d'istanza**, non sul getter. Il risultato è lo stesso, ma il codice si legge meglio.

#### `@OneToOne`

Esempio della slide 18: `Booking` (id, amount, check_in, check_out, room_id) e `Room` (id, num, type, free). Una prenotazione riguarda una stanza, una stanza ha 0 o 1 prenotazione.
- Nel DB `room_id` è un intero (la chiave esterna). In Java invece in `Booking` c'è direttamente un oggetto `Room`: Spring, tramite la `@JoinColumn(name = "ROOM_ID")`, preleva la stanza corrispondente e la mette nella variabile.
- In `Room` c'è una variabile `Booking`, annotata con `@OneToOne(mappedBy = "room")`, perché la chiave esterna sta in `Booking` (nel campo `room`).

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

Esempio della slide 20: rubrica telefonica gestita da più persone. Ogni `Contact` appartiene a un solo `User`, quindi in `Contact` c'è `@ManyToOne private User user;`. Quando prendo un contatto, ho anche l'utente che l'ha creato.

#### `@OneToMany`

Esempio della slide 21: una nazione ha più città, una città appartiene a una sola nazione.
- In `Country` non c'è più una singola variabile ma una **lista** (`Set<City> cities`), con `@OneToMany(mappedBy = "parentCountry")`.
- `mappedBy` va scritto perché il nome della variabile in `City` (`parentCountry`) non corrisponde a quello della colonna (`country_id`), quindi Spring non può ricavarlo da solo.
- In `City` c'è `@ManyToOne` con `@JoinColumn(name = "country_id")`.
- Ci sono anche i tipi di **cascade**, ma il prof ne parlerà più avanti.

#### `@ManyToMany`

Esempio della slide 22: un cliente può partecipare a più eventi e un evento ha più clienti. C'è la tabella di relazione `EVENT_CUSTOMER` (customer_id, event_id).
- In `Customer` si mette `List<Event> events` con `@ManyToMany` e `@JoinTable`: la join non passa più per una colonna, ma per una **tabella**. In `@JoinTable` si indicano il nome della tabella di relazione, `joinColumns` (colonna che riferisce questa entity, `CUSTOMER_ID`) e `inverseJoinColumns` (colonna che riferisce l'altra, `EVENT_ID`).

```java
@ManyToMany
@JoinTable(name = "EVENT_CUSTOMER",
    joinColumns = {@JoinColumn(name = "CUSTOMER_ID")},
    inverseJoinColumns = {@JoinColumn(name = "EVENT_ID")})
private List<Event> events;
```

>[!important] Quando si può usare `@ManyToMany`
>Solo se la tabella di relazione contiene **soltanto le due chiavi**. Se la relazione ha un attributo proprio (es. ordine–prodotto con la **quantità** comprata), la tabella di relazione diventa un'**entity** a sé, collegata alle altre due con due relazioni `@ManyToOne`.

Nell'esempio la relazione è mappata **solo dal lato `Customer`**. Il motivo è pratico: quando carico un utente mi serve la lista dei suoi eventi, ma se ogni volta che cerco un evento mi portassi dietro tutti i partecipanti, la ricerca degli eventi diventerebbe pesantissima.
