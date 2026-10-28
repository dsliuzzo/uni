# Spring

## Piattaforma e Framework: Jakarta EE e Spring

>[!multi-column]
>
>>[!important] Piattaforma
>>[...]
>
>>[!important] Framework
>>[...]

- **Piattaforma**: insieme coordinato di specifiche, API e servizi che definisce un ambiente comune per sviluppare ed eseguire applicazioni.
	- Esempio: **Jakarta EE**. Definisce standard per applicazioni Java enterprise (Servlet, CDI, Jakarta Persistence, Jakarta Transactions) ed è implementata da application server compatibili (WildFly, Payara).
- **Framework**: struttura software che fornisce componenti, funzionalità e regole per sviluppare applicazioni secondo un determinato modello di programmazione.
	- Esempio: **Spring Framework**. Offre un container per gestire gli oggetti applicativi e le loro dipendenze, supporta Dependency Injection e AOP, e fornisce funzionalità per applicazioni web, accesso ai dati e transazioni.

|Jakarta EE|Spring Framework|
|---|---|
|Definisce specifiche e API standard|Fornisce un framework e un proprio modello di programmazione|
|Le specifiche sono realizzate da implementazioni compatibili|Offre un container e servizi utilizzabili|

## Introduzione a Spring

Spring è un framework **open source** per lo sviluppo di applicazioni su piattaforma Java: è un'implementazione del modello a **container leggero** per costruire applicazioni Java SE e Java EE. Molti dei suoi concetti chiave hanno avuto un successo tale da diventare linee guida.

> [!note] Container leggero
> Spring fornisce un ambiente di runtime in cui le classi vengono gestite, ma senza impattare pesantemente sulle risorse o sulla complessità del sistema. La gestione delle risorse è più semplice rispetto a Jakarta EE (che necessita di container come GlassFish o WildFly): Spring può girare su Tomcat o persino come app standalone con Spring Boot.

Funzionalità chiave:
- [[Spring#Dependency Injection e IoC|Inversion of Control (IoC) e Dependency Injection]]
- [[Spring#Persistenza|Supporto alla persistenza]]
- [[Spring#Web tier e AOP|Integrazione con il Web tier]]
- [[Spring#Aspect Oriented Programming (AOP)|Aspect Oriented Programming (AOP)]]


>[!multi-column]
>
>> [!note] IoC e Dependency Injection
>> L'**IoC** è un principio che consiste nel delegare la gestione delle dipendenze da parte dell'applicazione a un **contenitore IoC**, anziché essere gestito direttamente dalla classe stessa. Questo approccio riduce la dipendenza diretta tra le classi e favorisce una maggiore modularità e testabilità. Un sotto-concetto di IoC è la **Dependency Injection (DI)**, che in Spring è la tecnica con cui un oggetto (o una classe) riceve le sue dipendenze (altri oggetti di cui ha bisogno per funzionare) dal contenitore, piuttosto che crearle direttamente.
>
>> [!note] Supporto alla persistenza
>> Spring fornisce un supporto avanzato alla persistenza dei dati, integrandosi facilmente con diverse soluzioni di persistenza, come JPA (Java Persistence API), Hibernate e altre. Spring semplifica la gestione delle transazioni e l'interazione con il database attraverso il suo modulo di persistenza. Con Spring è possibile gestire le operazioni di database senza dover scrivere molto codice boilerplate, rendendo il codice più pulito e facile da gestire.

>[!multi-column]
>
>>[!note] Integrazione con il Web tier
>>Spring offre un robusto supporto per lo sviluppo di applicazioni web. Questo comprende l'integrazione con il web tier (il livello di presentazione dell'applicazione), come ad esempio **Spring MVC**, che permette di costruire applicazioni web scalabili e ben strutturate. La modularità di Spring consente di separare facilmente la logica di business, la logica di presentazione e la gestione dei dati, semplificando lo sviluppo di applicazioni web complesse.
>
>>[!note] Aspect Oriented Programming (AOP)
>>L'**AOP** è un paradigma di programmazione che consente di separare aspetti trasversali (come la gestione della sicurezza, delle transazioni o del logging) dalla logica principale dell'applicazione. Con AOP è possibile definire aspetti che vengono "agganciati" al codice principale in punti specifici (ad esempio, prima o dopo l'esecuzione di un metodo). Spring fornisce un'implementazione di AOP che può essere utilizzata per applicare tali aspetti senza dover modificare il codice delle classi stesse.

### Dependency Injection e IoC
Una **factory per componenti** (`BeanFactory`) utilizzabile globalmente si occupa del ritrovamento di oggetti per nome e della gestione delle relazioni fra oggetti (*configuration management*).
La gestione della configurazione dei componenti applica i principi di Inversion of Control e usa la Dependency Injection, eliminando il binding "manuale" fra componenti:
- **Inversion of Control (IoC)**: *principio di progettazione* che sposta il controllo della creazione e gestione delle dipendenze da una classe stessa a un **container esterno**.
- **Dependency Injection (DI)**: *tecnica che implementa l'IoC*, fornendo ("iniettando") le dipendenze a un oggetto dall'esterno, invece che farle creare all'oggetto.

```java
// Senza IoC
public class Service {
	private Repository repository;

	public Service() {
		// la classe Service crea l'istanza di Repository
		this.repository = new Repository();
	}
}
```

```java
// Con IoC
public class Service {
	private Repository repository;

	public Service(Repository repository) {
		// la dipendenza viene fornita dall'esterno <- inverto il controllo
		this.repository = repository;
	}
}
```

Spring implementa l'IoC: non è l'applicazione a chiamare il codice del framework, ma il framework stesso che gestisce il flusso in autonomia e invoca il codice dell'utente nei punti opportuni.

|Aspetto|Framework (Spring)|Piattaforma (JEE)|
|---|---|---|
|Controllo|Il framework chiama il tuo codice|Il container gestisce tutto|
|Configurazione|Minima, per convenzione|Più esplicita / standardizzata|
|Flessibilità|Alta|Più rigida|
|Esecuzione|Anche standalone|Richiede un server|
|Ruolo|Strumento / applicativo|Ambiente / infrastrutturale|

A differenza di una **libreria**, in cui è il programmatore a controllare esplicitamente il flusso, e di una **piattaforma** come Jakarta EE, che fornisce un ambiente completo di esecuzione, Spring è un framework leggero che può essere eseguito anche standalone e gestisce automaticamente componenti, dipendenze e ciclo di vita tramite il proprio **IoC container**.

### Persistenza

- Spring introduce un **livello intermedio** tra il codice applicativo (service, business logic) e la tecnologia concreta di persistenza (JDBC, JPA, Hibernate…) permettendone l'asytrazione.
- Livello di astrazione generico (non specifico della singola applicazione, quindi riusabile) per la gestione delle transazioni con il DB, senza essere forzati a lavorare dentro un EJB Container pesante e permettendo lo switch tra diversi tipi di DB (relazionali e non).
- Strategie generiche e built-in per **JTA**:
	- elimina la dipendenza dal container J2EE per il supporto alle transazioni;
	- transazioni disponibili anche in applicazioni standalone, web app leggere e microservizi.
- Integrazione con framework di persistenza come Hibernate, Java Data Object (JDO), JPA.

|Caratteristica|Hibernate (JPA)|JDO (Java Data Objects)|ORM (Object-Relational Mapping)|
|---|---|---|---|
|Standard|Implementazione di JPA|Specifica separata|Approccio generale|
|Focus|Database relazionali (SQL)|Database relazionali e NoSQL|Mappare oggetti a tabelle|
|Diffusione|Molto diffuso e supportato|Meno utilizzato|Utilizzato da diversi framework|
|Complessità|Moderata|Più complessa rispetto a JPA|Dipende dal framework scelto|

Hibernate è una libreria Object-Relational Mapping popolare che semplifica la persistenza e si integra con JPA.

![[spring_data.svg|center]]

### Web tier e AOP

- **Integrazione con Web tier**:
	- framework **MVC** per applicazioni web, costruito sulle funzionalità base di Spring, con supporto per diverse tecnologie di generazione delle viste (JSP, FreeMarker, Velocity, Tiles, iText e POI);
	- **Web Flow** per la navigazione a grana fine.
- **Supporto ad AOP**: framework di supporto a servizi di sistema, come la gestione delle transazioni, tramite tecniche AOP. Migliora soprattutto la modularità ed è parzialmente correlato anche alla facilità di testing.

![[spring_aop_trasversali.svg|center]]

|Tecnologia|Descrizione|Uso in Spring|
|---|---|---|
|FreeMarker|Motore di template per generare HTML, XML e altri testi, con un linguaggio simile a Java|Usato in Spring MVC per generare le viste, come motore di rendering|
|Velocity|Motore di template che separa business logic e presentazione; genera file di testo dinamici, tra cui HTML|Supportato da Spring MVC come alternativa a FreeMarker|
|Tiles|Framework per la composizione di pagine web, con layout riutilizzabili e modulari|Usato con Spring MVC per layout modulari composti da "tiles" riutilizzabili|
|iText|Libreria Java per creare e manipolare documenti PDF|Per generare PDF dinamici (report, estratti)|
|POI (Apache POI)|Libreria Java per accedere e manipolare file Microsoft Office (Excel, Word, PowerPoint)|Per gestire documenti Excel (XLSX) o Word (DOCX)|
|Spring Web Flow|Framework per gestire flussi di lavoro e processi in applicazioni web, definendo flusso di navigazione e stato|Integrato con Spring MVC, gestisce flussi complessi (wizard, processi step-by-step) mantenendo lo stato fra le richieste HTTP|

- Apache POI = *Poor Obfuscation Implementation*.
- Spring Web Flow è utile quando serve un controllo preciso sulla sequenza delle azioni dell'utente (wizard, moduli complessi, workflow).

## Yet Another Framework?

No: Spring rappresenta un approccio piuttosto unico, che ha fortemente influenzato i container successivi verso le tecnologie a **microcontainer** (Spring 1.2 è datato maggio 2005). Proprietà originali:

- **Framework modulare**: architettura a layer, si possono usare anche solo alcune parti in isolamento. Si può introdurre Spring **incrementalmente** in progetti esistenti e impararlo "pezzo per pezzo": NON è una soluzione "all or nothing".
- Supporto a importanti aree non coperte da altri framework diffusi, come il **management degli oggetti di business**.
- Tecnologia di **integrazione** di soluzioni esistenti: EJB per J2EE, Hibernate e JDBC per accesso ai dati e O/RM, Java Persistence API per la persistenza, Struts e molti altri per il Web tier.

|Modulo|Cosa offre|
|---|---|
|Spring IoC e Dependency Injection|Gestire e configurare gli oggetti di business in modo flessibile|
|Spring AOP|Applicare concern trasversali (logging, sicurezza, transazioni) senza sporcare la logica di business|
|Spring Data|Facilitare l'accesso ai dati e l'integrazione con database relazionali e NoSQL|
|Spring Transactions|Gestire la coerenza dei dati negli oggetti di business senza codice boilerplate|
|Spring Boot e Microservizi|Esporre facilmente gli oggetti di business tramite REST API o altri protocolli|

## Architettura di Spring

Vista funzionale: moduli **DAO, ORM, JEE, Web, AOP** appoggiati su **Core** (il container IoC). Ruolo cruciale del **container leggero**, che si occupa sostanzialmente della sola IoC: infrastruttura modulare e leggera basata su un core IoC comune.


![[spring_architettura.svg|center]]

![[spring_vista_funzionale.svg|center]]

### Flessibilità di utilizzo in scenari diversi

- **Applicazione Spring completa**: Web MVC, transazioni, ORM, DAO, AOP, servizi remoti, email. Stack completo, ma sempre modulare.
- **Spring come middleware applicativo con frontend web** (solo middle tier e integrazione con il Web): niente MVC Spring; Spring gestisce business logic, transazioni, ORM, DAO. Tipico scenario di integrazione progressiva: "tengo il mio framework web, ma uso Spring dietro".
- **Spring come backend** (no MVC): servizi remoti (RMI, JAX), business logic come POJO, Spring Core + Context. Caso tipico: architettura SOA / microservizi.
- **Solo remoting**.

Schemi degli scenari (slide 13):

**Applicazione Spring completa**

![[spring_scenario_completa.svg|center]]

**Solo middle tier e integrazione con Web**

![[spring_scenario_middle_tier.svg|center]]

**Solo remoting**

![[spring_scenario_remoting.svg|center]]

### I package

- **Core Package**: parte fondamentale, implementa l'IoC tramite DI; gestisce creazione degli oggetti e ciclo di vita. Elemento fondamentale: **`BeanFactory`**, implementazione estesa del pattern Factory che elimina la necessità di gestire i singleton a livello di programmazione e permette di disaccoppiare configurazione e dipendenze dalla logica applicativa.
- **Web-MVC Package**: ampio supporto a progettazione e sviluppo secondo l'architettura Model-View-Controller per applicazioni web; separazione fra codice del modello di dominio e Web.
- **JEE Package**: servizi infrastrutturali JEE (funzionalità enterprise standard) che Spring può integrare e astrarre, mantenendo il codice applicativo indipendente e senza richiedere un application server Java EE completo.
- **DAO Package**: livello di astrazione che separa la logica di accesso ai dati dalla logica di business e non rende più necessario il codice ripetitivo (boilerplate) per JDBC, né il parsing di codici di errore database-specific. Gestione delle transazioni sia da codice sia in modo dichiarativo, anche per oggetti Java qualsiasi (non solo classi che implementano interfacce speciali).
- **ORM Package**: livello di integrazione con soluzioni ORM diffuse (JPA, JDO, Hibernate…) che mappano automaticamente entità Java e tabelle: si interagisce con le entità come oggetti, senza scrivere SQL. Usabile insieme alle altre funzionalità di Spring, come la gestione dichiarativa delle transazioni (Spring come tecnologia di integrazione).
- **AOP Package**: implementazione di aspect-oriented programming conforme allo standard **AOP Alliance**. Gestisce aspetti trasversali (transazioni, logging) e permette di usare metadati a livello sorgente per incorporare informazioni di comportamento aggiuntive nel codice.

> [!note] AOP Alliance
> Standard per definire un'API unificata per implementare e gestire gli aspetti in Java, indipendentemente dal framework AOP specifico utilizzato.

Approfondimenti nella lezione: 1. AOP, 2. IoC e DI, 3. JEE, 4. Beans, 5. MVC. I package mancanti (Beans, MVC, DAO e ORM) saranno trattati nella prossima lezione.

## Aspect Oriented Programming (AOP)

**AOP** è un approccio di design e una tecnica per semplificare l'applicazione dei **cross-cutting concern** (problematiche trasversali alla logica applicativa). Esempi: logging, locking, gestione degli eventi, gestione delle transazioni, sicurezza e auditing.

Concetti rilevanti: Joinpoint, Advice e Target, Pointcut e Aspect, Introduction, Weaving.

### Joinpoint, Advice, Pointcut, Aspect, Target

- **Target**: oggetto il cui flusso di esecuzione viene modificato da AOP (a volte detto *advised object*).
- **Aspect**: classe che incapsula logica trasversale; combinazione di advice e pointcut.
- **Joinpoint**: punto ben definito del codice applicativo, anche determinato a runtime, dove può essere inserita logica addizionale (es. invocazione di metodi o classi, inizializzazione di oggetti).
- **Advice**: codice con logica addizionale da eseguire a un determinato joinpoint. Tipi: *before*, *after*, *around* (prima / dopo / prima e dopo il joinpoint).
- **Pointcut**: insieme di joinpoint usati per definire **quando** eseguire un advice. Controllo fine e flessibile; ad esempio l'invocazione di metodo è un joinpoint tipico, mentre un pointcut tipico è l'insieme di tutte le invocazioni di metodo di una classe. I pointcut si possono comporre in relazioni anche complesse.

Esempio: arricchire la classe `BankService` con log di sicurezza e auditing **senza modificarne il codice**. Con AOP (1) intercettiamo l'esecuzione dei metodi e stampiamo messaggi prima e dopo; (2) aggiungiamo dinamicamente un nuovo metodo al servizio (`isVipCustomer()`).

```java
@Service // TARGET (classe business)
public class BankService {

	// JOINPOINT: l'esecuzione di questo metodo può essere intercettata da Spring AOP
	public void deposit(double amount) {
		System.out.println("Depositing: " + amount);
	}

	public void withdraw(double amount) {
		System.out.println("Withdrawing: " + amount);
	}
}
```
JOIN POINT: i giunti dei ponti
```java
@Aspect // ASPECT: classe che incapsula logica trasversale
@Component
public class LoggingAspect {

	// POINTCUT: seleziona tutti i metodi pubblici di BankService;
	// il metodo vuoto è un "segnaposto" che rappresenta il pointcut
	@Pointcut("execution(* com.example.service.BankService.*(..))")
	public void bankOperations() {}

	// ADVICE: codice eseguito PRIMA del joinpoint
	@Before("bankOperations()")
	public void beforeOperation() {
		System.out.println("[LOG] Operazione bancaria in avvio");
	}

	// ADVICE: codice eseguito DOPO il joinpoint
	@After("bankOperations()")
	public void afterOperation() {
		System.out.println("[LOG] Operazione bancaria completata");
	}
}
```

### Introduction e Weaving

- **Introduction**: aggiunge dinamicamente nuovi metodi o nuove interfacce a una classe esistente, senza modificarne il codice sorgente.
	- NON intercetta un metodo esistente (come l'advice, che esegue codice prima/dopo un joinpoint): aggiunge nuovo comportamento al target.
	- NON rompe l'incapsulamento e NON modifica il bytecode originale; il target non sa nulla dell'introduction.
	- Spring crea un **proxy** del target.
- **Weaving**: processo di effettivo inserimento degli aspect nel codice applicativo nel punto appropriato. Può essere:
	- **statico**: passo ulteriore del processo di sviluppo, durante il build; incide sul codice eseguito (es. modifica del bytecode);
	- **dinamico**: realizzato a runtime, con possibilità di cambiare il weaving senza ricompilare.
- Spring realizza weaving/AOP **dinamico tramite proxy**: per creare una classe advised si usa `ProxyFactory` per creare un proxy dell'istanza, fornendogli tutti gli aspect con cui informarlo.

```java
public interface VipCustomer { // funzionalità da introdurre con INTRODUCTION
	boolean isVipCustomer();
}

public class VipCustomerImpl implements VipCustomer {
	@Override
	public boolean isVipCustomer() {
		return true;
	}
}

@Aspect // ASPECT che esegue una INTRODUCTION
@Component
public class IntroductionAspect {

	// value: quali classi (e sottoclassi, "+") ricevono l'introduction
	// defaultImpl: classe che implementa i nuovi metodi
	@DeclareParents(
		value = "com.example.service.BankService+",
		defaultImpl = VipCustomerImpl.class
	)
	public static VipCustomer vipCustomer;
}
```

```java
@Autowired
private BankService bankService; // WEAVING: non è l'oggetto reale ma un PROXY creato da Spring

public void test() {
	bankService.deposit(100);                      // ADVICE in azione
	VipCustomer vip = (VipCustomer) bankService;
	System.out.println(vip.isVipCustomer());       // INTRODUCTION in azione
}
```

> [!note] Slide 21 (riassunto)
> Target → `BankService`; Joinpoint → esecuzione di `deposit()`, `withdraw()`; Pointcut → `execution(* BankService.*(..))`; Advice → `@Before`, `@After`; Aspect → `LoggingAspect`, `IntroductionAspect`; Weaving → proxy runtime creato da Spring; Introduction → `@DeclareParents` + `VipCustomer`.
> Cosa succede: (1) Spring crea il target; (2) Spring crea un proxy; (3) il proxy intercetta le chiamate, applica gli aspect e delega al target.

![[spring_aop_proxy.svg|center]]

### Esempi di utilizzo

|Scenario|Esempio|Vantaggio dell'AOP|
|---|---|---|
|Logging|Registrare invocazioni ed errori di `createOrder()` e `cancelOrder()`|Si può introdurre o modificare la registrazione centralmente, senza aggiungere log a ogni metodo di business|
|Misurazione dei tempi|Misurare la durata del checkout e degli aggiornamenti del catalogo per individuare operazioni lente|Si selezionano nuovi metodi da monitorare modificando configurazione o regole dell'aspect, senza riscrivere le classi|
|Audit|Tracciare le modifiche ai prezzi (operatore, valori precedenti e nuovi, data)|Si introduce una politica di audit senza duplicare il codice nei servizi|

> [!note] `@Service` e "Spring bean"
> Una classe `@Service` è un componente del livello applicativo gestito da Spring. Spesso viene chiamata "Spring bean" per come è gestita dal container, non perché sia necessariamente un EJB.

## Dependency Injection in Spring

Applicazione più nota e di maggior successo dell'IoC.

- **"Hollywood Principle"**: Non è il componente a cercare le sue dipendenze, ma il container di Spring che "chiama" e fornisce ciò di cui il componente ha bisogno.
- Il container leggero risolve (*injection*) le dipendenze dei componenti tramite l'opportuna configurazione dell'implementazione dell'oggetto (**push**).
- Opposta ai pattern più classici di istanziazione dei componenti o **Service Locator**, dove è il componente a determinare l'implementazione della risorsa desiderata (**pull**).
- Martin Fowler chiamò per primo *Dependency Injection* questo tipo di IoC.

**Senza DI**: un oggetto/componente deve istanziare esplicitamente gli oggetti di cui ha bisogno (le sue dipendenze) → accoppiamento stretto (A crea B, A crea C).

![[spring_di_senza.svg|center]]

**Con DI**: il supporto alla DI si occupa di creare gli oggetti quando necessario e di passarli automaticamente a chi li deve usare. Idea base: costruttori in A che accettano B e C come parametri, oppure metodi setter (`setB(IB)`, `setC(IC)`) che accettano le interfacce B e C.

![[spring_di_con.svg|center]]

### Benefici

- **Flessibilità**: niente codice di lookup nella logica di business.
- **Testabilità**: nessun bisogno di dipendere da risorse esterne o dal container durante i test; possibilità di testing automatico.
- **Modularità**: i componenti non gestiscono direttamente l'istanziazione delle loro dipendenze.
- **Manutenibilità**: riutilizzo in ambienti diversi cambiando i file di configurazione (o le specifiche di DI) e non il codice.

> [!attention] DI e AOP sono concetti distinti
> Possono collaborare: la DI può essere il meccanismo con cui viene fornito il riferimento al proxy, ma non abilita automaticamente AOP; serve che il framework supporti e configuri l'intercettazione appropriata.

### Annotazioni
Le annotazioni sono metadati scritti nel codice che dicono a Spring come creare, gestire e collegare i bean senza scrivere codice manuale.

|Annotazione|Ruolo|Specializzazione di|Scope|
|---|---|---|---|
|`@Autowired`|Inietta automaticamente una dipendenza in un campo, metodo o costruttore: Spring cerca nel contesto un'istanza del tipo richiesto e la inietta|—|—|
|`@Component`|Segna una classe come bean, così che lo scanning dei componenti la rilevi e la importi nel contesto|nessuna|Generico|
|`@Repository`|Classe responsabile dell'interazione con il database|`@Component`|DAO (Data Access Object)|
|`@Service`|Implementa business logic. Oggi non aggiunge comportamento rispetto a `@Component`, ma è consigliata nel service layer perché esprime meglio l'intento|`@Component`|Service layer|
|`@Controller`|Controller Spring Web MVC; insieme a `@RequestMapping` mappa gli URL ai metodi|`@Component`|Spring MVC Controller|

#### Caso di studio:

|Classe / Interfaccia|Ruolo|Annotazione Spring|Significato|
|---|---|---|---|
|`PaymentService`|Interfaccia del servizio di pagamento|(nessuna)|Definisce il contratto, non è un bean|
|`CreditCardPaymentService`|Implementazione concreta del pagamento|`@Service`|Bean di tipo service gestito dal container|
|`PaypalPaymentService` (eventuale)|Altra implementazione|`@Service`|Bean alternativo|
|`OrderService`|Servizio applicativo che usa il pagamento|`@Service`|Componente business principale|
|`AppConfig`|Classe di configurazione|`@Configuration`|Sostituisce XML|
|(opzionale) `MainApp`|Avvio applicazione|`@SpringBootApplication` oppure `AnnotationConfigApplicationContext`|Bootstrap del container|

### Due varianti di DI
Esempio: un servizio di gestione ordini con un servizio di pagamento.
```java
@Service // Bean di tipo service (business logic)
public class CreditCardPaymentService implements PaymentService {
	@Override
	public void pay(int amount) {
		System.out.println("Pagamento con carta di credito: " + amount);
	}
}
```
**DI a livello di costruttore** (*best practice*): serve un costruttore con i parametri necessari.
```java
@Service // Bean applicativo principale
public class OrderServiceConstructor {
	private final PaymentService paymentService;

	// @Autowired è opzionale se c'è un solo costruttore
	public OrderServiceConstructor(PaymentService paymentService) {
		this.paymentService = paymentService;
	}

	public void processOrder(int amount) {
		paymentService.pay(amount);
	}
}
```
Affinchè funzioni ho bisogno di un file `xml` che colleghi le due classi  a livello di `path`
```xml
<!-- beans-constructor.xml -->
<beans xmlns="http://www.springframework.org/schema/beans"
	xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	xsi:schemaLocation="
		http://www.springframework.org/schema/beans
		https://www.springframework.org/schema/beans/spring-beans.xsd">

	<!-- Bean dipendenza -->
	<bean id="paymentService"
		class="com.example.CreditCardPaymentService"/> 	<!-- riferimento classe iniettata -->

	<!-- Bean con constructor injection -->
	<bean id="orderService"
		class="com.example.OrderServiceConstructor"> <!-- riferimento classe che inietta -->
		<constructor-arg ref="paymentService"/>
	</bean>
</beans>
```

**DI a livello di metodi setter**: servono metodi setter pubblici nella classe del bean.
```java
@Service // Bean applicativo principale
public class OrderServiceSetter {
	private PaymentService paymentService;

	public void setPaymentService(PaymentService paymentService) {
		this.paymentService = paymentService;
	}

	public void processOrder(int amount) {
		paymentService.pay(amount);
	}
}
```
Affinchè funzioni ho bisogno di un file `xml` che colleghi le due classi  a livello di `path`
```xml
<!-- beans-setter.xml -->
<beans xmlns="http://www.springframework.org/schema/beans"
	xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	xsi:schemaLocation="
		http://www.springframework.org/schema/beans
		https://www.springframework.org/schema/beans/spring-beans.xsd">

	<bean id="paymentService"
		class="com.example.CreditCardPaymentService"/>

	<!-- Bean con setter injection -->
	<bean id="orderService"
		class="com.example.OrderServiceSetter">
		<property name="paymentService" ref="paymentService"/>
	</bean>
</beans>
```

### Configurazione XML

Il nome del file è libero (`beans-constructor.xml` è una scelta arbitraria), ma la struttura XML deve rispettare lo schema di configurazione di Spring.

| Elemento obbligatorio          | Significato                                                    |
| ------------------------------ | -------------------------------------------------------------- |
| `beans`                        | Elemento radice che contiene le definizioni dei bean           |
| `xmlns` e `xsi:schemaLocation` | Dichiarano il namespace e lo schema XML di Spring              |
| `bean`                         | Definisce un oggetto gestito dal container                     |
| `id`                           | Identificativo usato per recuperare il bean o riferirsi a esso |
| `class`                        | Nome completo della classe Java, incluso il package            |
| `constructor-arg`              | Indica un argomento da passare al costruttore                  |
| `ref`                          | Specifica il bean da fornire come dipendenza                   |

### BeanFactory e ApplicationContext

`BeanFactory` è responsabile della gestione dei bean e delle loro dipendenze: ogni applicazione interagisce con il container IoC tramite questa interfaccia. Una volta creato, legge un file di configurazione e si occupa dell'injection (*wiring*).

> [!attention] LEGACY: `XmlBeanFactory`
> `XmlBeanFactory` estende `DefaultListableBeanFactory` per leggere le definizioni dei bean da un documento XML, ma è obsoleta.

```java
import org.springframework.beans.factory.BeanFactory;
import org.springframework.beans.factory.xml.XmlBeanFactory;
import org.springframework.core.io.ClassPathResource;

public class MainApp {
	public static void main(String[] args) {
		// CREAZIONE DEL CONTAINER (BeanFactory):
		// nasce il container, Spring legge il file XML ma NON crea ancora i bean (lazy loading)
		BeanFactory factory =
			new XmlBeanFactory(new ClassPathResource("beans-constructor.xml"));

		// RECUPERO DEL BEAN
		OrderServiceConstructor orderService =
			(OrderServiceConstructor) factory.getBean("orderService");

		// USO DEL BEAN (dipendenza già iniettata)
		orderService.processOrder(100);
	}
}
```

> [!important] ATTUALE: `ApplicationContext`
> Le applicazioni interagiscono con il container IoC tramite `BeanFactory` o, più comunemente, **`ApplicationContext`** (la estende e aggiunge servizi utili, sostituendo la obsoleta `XmlBeanFactory`). Con configurazione XML si usa `ClassPathXmlApplicationContext`, che legge le definizioni dei bean da un documento XML presente nel classpath.

```java
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class MainApp {
	public static void main(String[] args) {
		// nasce il container, Spring legge il file XML ma NON crea ancora i bean (lazy loading)
		ApplicationContext context =
			new ClassPathXmlApplicationContext("beans-constructor.xml");

		// RECUPERO DEL BEAN
		OrderServiceConstructor orderService =
			(OrderServiceConstructor) context.getBean("orderService");

		// USO DEL BEAN
		orderService.processOrder(100);
	}
}
```

Risoluzione delle dipendenze: prima di creare `orderService`, Spring individua `paymentService`, controlla se esiste già e, se non esiste, lo crea; poi crea `OrderService` e vi **inietta** `PaymentService`. Il client chiama `getBean()` e ottiene un bean pronto all'uso.

![[spring_bean_risoluzione.svg|center]]

### Tipi di parametri di injection

Spring supporta diversi tipi di parametri, utilizzabili sia per injection sui costruttori sia sui setter:
1. valori semplici
2. bean all'interno della stessa factory
3. bean anche in diverse factory
4. collezioni
5. proprietà definite esternamente

```xml
<!-- injection di valori semplici -->
<beans>
	<bean id="injectSimple" class="InjectSimple">
		<property name="name"><value>John Smith</value></property>
		<property name="age"><value>35</value></property>
		<property name="height"><value>1.78</value></property>
	</bean>
</beans>
```

## JEE: integrazione con Java Enterprise

Il modulo JEE fa da ponte tra Spring e le tecnologie enterprise "classiche":
- **JMX** (Java Management Extensions): monitorare l'applicazione (es. connessioni al DB attive) o gestire risorse a runtime (es. file di configurazione al volo);
- **Remoting**: chiamare metodi su oggetti remoti (es. Web Server);
- **JMS** (Java Message Service): comunicazione asincrona fra sistemi e messaggistica (es. Kafka, RabbitMQ);
- **JCA** (Java Connector Architecture): connettere applicazioni a sistemi legacy (ERP, proprietari) come adapter standard per l'integrazione enterprise;
- **EJB**: contenere la logica business in EJB standard;
- **Email**.

Spring NON sostituisce completamente Jakarta EE ma si integra con essa, usandone alcune specifiche ed evitando le componenti più "pesanti".

|Funzionalità|JEE|Spring|
|---|---|---|
|Dependency Injection|CDI|Spring Core|
|Persistenza|JPA|Spring Data JPA|
|Web|Servlet/JSP|Spring MVC|
|Business Logic|EJB|Spring Beans|
