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

Schemi degli scenari:

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

## Spring Bean

<!-- Fonte: archivio/Sviluppo Web/Lezione_11-Spring-p2.pdf (slide 35-41). La slide 34 è solo l'indice della lezione -->

Un **Spring Bean** è un oggetto istanziato, configurato e gestito dal **container IoC** di Spring. Si dichiara, alternativamente, tramite:
- `@Component`: componente generico, o una sua specializzazione:
	- `@Service`: componente con ruolo di servizio applicativo;
	- `@Repository`: componente dedicato all'accesso ai dati;
	- `@Controller`: componente che gestisce richieste web in Spring MVC;
- `@Bean` dentro una classe `@Configuration`: serve per configurare classi di librerie esterne, che non possiamo modificare per aggiungere `@Component`;
- nel file XML con il tag `<bean>`, recuperando poi il bean via `ClassPathXmlApplicationContext`.

Il ciclo di vita di un bean comprende due momenti (**creazione**, **distruzione**) e diverse fasi:
- **Spring** gestisce il ciclo di vita *logico* del bean (creazione, wiring, inizializzazione, AOP, distruzione controllata);
- la **JVM** gestisce il ciclo di vita *fisico* dell'oggetto (memoria, garbage collection, `finalize()`).

Due annotazioni chiave:
- `@PostConstruct`: esegue un metodo dopo la creazione del bean e la predisposizione delle sue dipendenze; si usa per l'inizializzazione.
- `@PreDestroy`: esegue un metodo quando il container sta per distruggere il bean; si usa per liberare risorse o fare operazioni di chiusura.

### Scope dei bean

Lo **scope** indica la durata e la visibilità dell'istanza gestita dal container (quante volte e in quale contesto viene creato il bean). Il default è `singleton`; altri scope servono per bean con stato locale o legati al web.

|Scope|Significato|Esempio|
|---|---|---|
|`singleton` (default)|Una sola istanza per container Spring, condivisa all'interno del container (efficiente in memoria, thread-safe se stateless)|Servizi generici (`OrderService`, `PaymentService`)|
|`prototype`|Nuova istanza ogni volta che il bean viene richiesto (utile per oggetti con stato locale)|Oggetti temporanei (es. un ordine)|
|`request` (web)|Una istanza per ogni richiesta HTTP|Bean legati alla gestione della request (es. dati)|
|`session` (web)|Una istanza per ogni sessione HTTP|Bean che mantengono i dati dell'utente durante la sessione|
|`application` (web)|Una istanza per tutto l'`ApplicationContext` web|Oggetti globali per l'applicazione web|
|`websocket`|Una istanza per ogni WebSocket|Applicazioni real-time|

Gli scope `request`, `session`, `application` e `websocket` sono validi solo in un `ApplicationContext` compatibile con il web (es. Spring MVC o Spring WebFlux).

```java
@Service
@Scope("singleton") // opzionale, è il default
public class PaymentService {
	// logica di pagamento
}

@Service
@Scope("singleton")
public class OrderService {
	private final PaymentService paymentService;

	@Autowired
	public OrderService(PaymentService paymentService) {
		this.paymentService = paymentService;
	}
}

@Component
@Scope("prototype") // nuova istanza a ogni richiesta al container
public class OrderContext {
	private int orderId;
	private int amount;
}
```

> [!note] `@Autowired`
> Consente a Spring di iniettare automaticamente una dipendenza in un campo, in un metodo o in un costruttore.

### Quando il container crea il bean

- Di default l'inizializzazione dei bean `singleton` è **eager** (anticipata): all'avvio del container Spring crea tutti i singleton non marcati come lazy, anche se non sono ancora stati usati.
- Con `@Lazy` la creazione viene rinviata fino a quando il bean è richiesto, direttamente o come dipendenza.
- I bean `prototype` vengono normalmente creati quando richiesti al container.

|Tipo di bean|Comportamento di creazione predefinito|
|---|---|
|singleton|**Eager**: creato all'avvio dell'`ApplicationContext`|
|singleton + `@Lazy`|**Lazy**: creato quando viene richiesto o serve come dipendenza|
|prototype|**Lazy**: nuova istanza a ogni richiesta al container|
|request|Creato quando serve nell'ambito di una richiesta HTTP|
|session|Creato quando serve nell'ambito di una sessione HTTP|
|application|Creato quando serve nell'ambito del `ServletContext`|
|websocket|Creato quando serve nell'ambito di una sessione WebSocket|



### Ciclo di vita dei bean

Panoramica: le fasi sono gestite da Spring tramite **meccanismi di callback**.

|Sotto-fase|Inizializzazione|Distruzione|Gestito da|
|---|---|---|---|
|Creazione oggetto|Invocazione del costruttore|`finalize()` (prima della rimozione)|Spring/JVM|
|Iniezione dipendenze (wiring)|Constructor / Setter injection|`@PreDestroy` (rilascio risorse)|Spring|
|Interazione con il container|*Aware interfaces* (`BeanNameAware`, `BeanFactoryAware`, …)|`DisposableBean.destroy()`|Spring|
|Hook del container|`BeanPostProcessor` (before init)|`destroy-method` configurato|Spring|
|Logica applicativa|`@PostConstruct`, `afterPropertiesSet`, `init-method`|Rimozione dal container IoC|Spring|
|Proxy e fine ciclo|`BeanPostProcessor` (after init, AOP proxy)|Oggetto eleggibile per il GC|Spring/JVM|

> [!note]
> `@Lazy` non sostituisce né modifica l'ordine dei callback: sposta solo nel tempo l'avvio del ciclo di vita.

>[!question] Diagramma del ciclo di vita
> Le slide 36, 38 e 41 contengono anche un diagramma "Spring Bean Life Cycle" (immagine) che non ho trascritto: l'ordine delle fasi è riportato nelle liste qui sotto.

#### Fasi di creazione

1. **Constructor**: il container istanzia il bean invocando il costruttore. L'oggetto nasce; con la constructor injection vengono fornite le dipendenze obbligatorie. Il bean non è ancora completamente inizializzato.
2. **Setter methods**: se configurati, Spring inietta le dipendenze tramite setter; completa il wiring, tipicamente per dipendenze opzionali.
3. **`BeanNameAware.setBeanName()`**: il bean ottiene il nome con cui è registrato nell'application context. Utile in casi infrastrutturali (logging, componenti generici), raramente nella business logic.
4. **`BeanClassLoaderAware.setBeanClassLoader()`**: il bean riceve il `ClassLoader` usato per caricarlo. Scenari avanzati (plugin, caricamento dinamico di classi).
5. **`BeanFactoryAware.setBeanFactory()`**: il bean ottiene un riferimento diretto al `BeanFactory`. Crea forte accoppiamento con Spring: consigliato solo per componenti infrastrutturali.
6. **`BeanPostProcessor.postProcessBeforeInitialization()`**: prima dell'inizializzazione i `BeanPostProcessor` possono analizzare o modificare il bean. Qui iniziano molte funzionalità avanzate (controlli, preparazione AOP).
7. **`@PostConstruct`**: metodo standard di inizializzazione, chiamato dopo l'injection delle dipendenze. È il punto consigliato per verifiche e setup che richiedono tutti i bean disponibili.
8. **`InitializingBean.afterPropertiesSet()`**: inizializzazione specifica di Spring; alternativa a `@PostConstruct` ma meno portabile perché legata all'API Spring.
9. **`init-method`**: metodo di inizializzazione definito in configurazione (XML o Java config); tipico delle configurazioni legacy.
10. **`BeanPostProcessor.postProcessAfterInitialization()`**: in questa fase Spring crea i **proxy** (es. AOP), per cui il bean finale potrebbe non essere l'istanza originale.

Dopo questi passi il bean è pronto all'uso ("performing task").

#### Fasi di distruzione

1. **`@PreDestroy`**: eseguito prima della distruzione del bean, tipicamente alla chiusura dell'`ApplicationContext`. È il meccanismo consigliato perché standard e indipendente da Spring.
2. **`DisposableBean.destroy()`**: cleanup se il bean implementa `DisposableBean`. Meno raccomandato: forte accoppiamento con Spring.
3. **`destroy-method`**: metodo di distruzione personalizzato invocato dal container; tipico delle configurazioni XML e delle applicazioni legacy.
4. **`finalize()`**: chiamato dal Garbage Collector prima di rimuovere l'oggetto dalla memoria. **Non** fa parte del ciclo di vita gestito da Spring ed è generalmente sconsigliato.

```xml
<bean id="myBean"
	class="com.example.MyBean" destroy-method="cleanup">
	<!-- other configuration -->
</bean>
```

Dopo le operazioni di distruzione il container IoC rimuove il bean e rilascia le risorse associate.

### Naming dei componenti

Come fa il `BeanFactory` a trovare il bean richiesto? Ogni bean deve avere un **nome unico** all'interno del `BeanFactory` che lo contiene. Procedura di risoluzione dei nomi:
1. se il tag `<bean>` ha un attributo `id`, il suo valore è il nome;
2. altrimenti Spring cerca l'attributo `name`;
3. se non c'è né `id` né `name`, Spring usa il **nome della classe** del bean.

Il pattern singleton è il comportamento di default nella creazione dei bean, ma il singleton di Spring è diverso da quello GoF:

|Singleton GoF|Singleton Spring|
|---|---|
|Costruttore privato|Costruttore pubblico|
|Istanza globale|Istanza **per container**|
|Gestito dalla classe|Gestito dal **container**|

## Spring MVC

<!-- Fonte: archivio/Sviluppo Web/Lezione_11-Spring-p2.pdf (slide 42-54) -->

**MVC** è un pattern usato per implementare il livello di presentazione di un'applicazione: definisce un'architettura con responsabilità chiare per i diversi componenti.
- **Model**: i dati e lo "stato" dell'applicazione nel contesto dell'utente. Es. in un e-commerce: profilo utente, carrello, ordini.
- **View**: presenta i dati all'utente nel formato desiderato, supporta l'interazione e gestisce validazione lato client, **i18n** (internazionalizzazione: adattare l'applicazione a lingue e regioni diverse senza riscrivere il codice), stili, ecc.
- **Controller**: gestisce le richieste relative alle azioni dell'utente nel front-end, interagisce con il livello dei servizi, aggiorna il modello e indirizza l'utente alla vista appropriata in base al risultato.

>[!question] Slide 43
> "Typical MVC" e "Typical MVC in Web applications": sono diagrammi (sequenza e architettura: Browser/Ajax → Dispatcher → Controller → Service Layer / DAO Layer → DB, con Model Bean e View JSP/Thymeleaf/ecc.). Non trascritti.

### Perché in Spring i dati Controller → View si chiamano "model"

Spring MVC usa il termine *model* anche per i dati trasferiti dal Controller alla View:
- **Astrazione del pattern**: il Controller non modifica direttamente il modello (stato e logica di business); prepara un insieme di dati utili per la View, che rappresentano una vista temporanea dello stato applicativo.
- **Model come trasferimento dati**: l'oggetto `Model` (o `ModelAndView`) non è il modello di dominio (le entità di business) ma un **contenitore di dati** (nell'immagine: *Model Bean*). Trasporta informazioni dal Controller alla View senza preoccuparsi di come siano rappresentate nel dominio.
- **Chiara separazione dei ruoli**: controller, validator, oggetti command/form/model, `DispatcherServlet`, handler mapping, view resolver, …
- **Adattabilità e riutilizzabilità**: si può usare qualsiasi classe come controller purché implementi un'interfaccia predefinita.

### Request life cycle

Quando un client invia una richiesta HTTP a un'applicazione Spring MVC, la richiesta attraversa diversi componenti prima di produrre la risposta. Nel diagramma, l'infrastruttura di frontiera è in giallo, i meccanismi interni del framework MVC in grigio-azzurro.

- **Filter**: operazioni generali su ogni richiesta (logging, sicurezza, encoding).
- **DispatcherServlet**: riceve la richiesta e la inoltra al controller appropriato; coordina il flusso tra controller, servizi, modello e view.
- **Common services**: supportano ogni richiesta (i18n, gestione temi, upload file); configurati nel `WebApplicationContext` del `DispatcherServlet`.
- **Handler Mapping**: mappa le richieste ai controller in base a `@RequestMapping` o altre annotazioni; individua il metodo da invocare.
- **Handler Interceptor**: logica comune prima o dopo l'esecuzione del controller (es. modifiche dati).
- **Controller**: insieme di metodi detti **handler** che gestiscono le richieste HTTP.
	- `@Controller` identifica il componente; `@GetMapping`, `@PostMapping` e le altre annotazioni di mapping identificano quali richieste gestisce ciascun metodo;
	- elabora la richiesta, aggiorna il Model, restituisce la View o la risposta HTTP.
- **Handler Exception Resolver**: gestisce le eccezioni inaspettate lanciate dai controller; si possono scrivere metodi annotati con `@ExceptionHandler` indicando il tipo di eccezione.
- **View Resolver / View**: risolve il nome logico della view restituito dal controller in una view concreta. Implementazioni principali:
	- `UrlBasedViewResolver`: mappa i nomi logici direttamente a URL;
	- `ContentNegotiatingViewResolver`: sceglie la view in base al media type richiesto dal client (XML, PDF, ecc.);
	- integrazione con tecnologie di view: FreeMarker (`FreeMarkerViewResolver`), Velocity (`VelocityViewResolver`), JasperReports (`JasperReportsViewResolver`).

### Filter vs AOP

«I cross-cutting concern vanno implementati come Filter o seguendo l'AOP?» I filter gestiscono aspetti trasversali sulle **richieste HTTP**, l'AOP a livello di **logica applicativa**. I due approcci sono complementari e spesso usati insieme.

Esempio: la **sicurezza**. I filter (tipicamente di Spring Security) operano a livello HTTP e si occupano di autenticazione e controllo d'accesso alle richieste; l'AOP permette controlli di autorizzazione sui metodi della business logic, ad es. con `@PreAuthorize`.

|Aspetto|Filter|AOP|
|---|---|---|
|Livello|Web (HTTP)|Business|
|Quando|Prima del controller|Durante l'esecuzione dei metodi|
|Scopo|Autenticazione|Autorizzazione a grana fine|
|Granularità|URL|Metodo|

> [!note]
> L'AOP non risiede nel layer web ma dove sta la logica di business, tipicamente nei bean `@Service`. Filter e DispatcherServlet sono **componenti di frontiera** (non interni al framework MVC).

### DispatcherServlet

Spring MVC è progettato attorno a una servlet centrale che riceve tutte le richieste HTTP dirette all'applicazione e le smista: la `DispatcherServlet`.
- Agisce da **Front Controller** (vedi [[Web#Pattern]]), ed è completamente integrata con il container IoC di Spring.
- È una normale servlet: serve quindi un URL mapping tramite `web.xml`.
- Intercetta le richieste HTTP in ingresso al web container, cerca un controller che sappia gestirle e lo invoca, ricevendo un **model** (output della business logic) e una **view** (come visualizzare l'output).
- Cerca un View Resolver opportuno con cui scegliere la View e creare la HTTP Response.

#### Azioni svolte dalla DispatcherServlet

**1. Accesso al contesto**
- Usa un `WebApplicationContext`, il contesto Spring che contiene e gestisce i componenti necessari all'elaborazione delle richieste web. In una configurazione tipica è creato all'avvio e riutilizzato, non ricreato a ogni richiesta.
- Il `WebApplicationContext` è memorizzato come attributo della richiesta HTTP (controller e altri componenti possono usarlo), con chiave la costante `DispatcherServlet.WEB_APPLICATION_CONTEXT_ATTRIBUTE`.
- Con più `DispatcherServlet` nella stessa applicazione, ognuna ha il proprio `WebApplicationContext`, e la costante serve a identificare il contesto giusto per ogni richiesta.

```java
HttpServletRequest request = ...;
WebApplicationContext context = (WebApplicationContext)
	request.getAttribute(DispatcherServlet.WEB_APPLICATION_CONTEXT_ATTRIBUTE);
```

**2. Locale**
- Usa il *locale resolver* associato alla richiesta (utile nell'elaborazione e nel rendering della view). Spring MVC gestisce la localizzazione (lingua, formati data/ora, ecc.).
- Un `LocaleResolver` determina quale locale usare per una richiesta, ad es. per scegliere i messaggi nella lingua giusta o per formattare correttamente date e numeri nella view.

**3. Tema grafico, handler e view**
- Verifica quale *theme resolver* è associato alla richiesta (le view possono determinare quale tema usare); il default è `FixedThemeResolver`. Esempio: tema dark o light.
- Cerca un handler appropriato. Se lo trova, configura una **catena di esecuzione** associata all'handler (preprocessori, postprocessori e controller); il risultato è la preparazione del model.
- Se viene restituito un model, lo passa alla view associata.

### Controller, Handler e Interceptor

Quando la `DispatcherServlet` riceve la richiesta consulta per prima cosa un **HandlerMapping**, che individua l'handler appropriato. *Il controller è la classe; l'handler è il metodo che Spring seleziona per gestire quella specifica richiesta.*

Il risultato è un **HandlerExecutionChain**, che contiene l'handler e gli **Interceptor** associati. La `DispatcherServlet` esegue poi i passi specificati nella chain. Gli interceptor eseguono operazioni aggiuntive prima o dopo l'elaborazione dell'handler (sicurezza, logging, modifica della risposta, …) nei punti previsti del flusso: `preHandle()`, `postHandle()`, `afterCompletion()`. Un **HandlerAdapter** invoca l'handler, normalmente un metodo di un controller Spring MVC.

> [!note] Filter, Interceptor, AOP
> Filter = richiesta/risposta HTTP; Interceptor = ciclo di elaborazione Spring MVC; AOP = chiamate ai metodi applicativi.

#### Esempio: catalogo prodotti

Elenco, dettaglio e ricerca di prodotti per nome.

```java
@Controller
@RequestMapping("/prodotti")
public class ProdottoController {
	private final ProdottoService prodottoService;

	// Dependency Injection tramite costruttore
	public ProdottoController(ProdottoService prodottoService) {
		this.prodottoService = prodottoService;
	}

	// Handler: GET /prodotti
	@GetMapping
	public String elenco(Model model) {
		model.addAttribute("prodotti", prodottoService.trovaTutti());
		return "prodotti/elenco";
	}

	// Handler: GET /prodotti?nome=telefono
	@GetMapping(params = "nome")
	public String cerca(@RequestParam("nome") String nome, Model model) {
		model.addAttribute("prodotti", prodottoService.cercaPerNome(nome));
		model.addAttribute("nomeRicerca", nome);
		return "prodotti/elenco";
	}

	// Handler: GET /prodotti/15
	@GetMapping("/{id}")
	public String dettaglio(@PathVariable("id") Long id, Model model) {
		Prodotto prodotto = prodottoService.trovaPerId(id);
		model.addAttribute("prodotto", prodotto);
		return "prodotti/dettaglio";
	}

	// Gestione delle eccezioni generate durante le richieste
	@ExceptionHandler(ProdottoNonTrovatoException.class)
	@ResponseStatus(HttpStatus.NOT_FOUND)
	public String prodottoNonTrovato(ProdottoNonTrovatoException ex, Model model) {
		model.addAttribute("messaggio", ex.getMessage());
		return "errori/prodotto-non-trovato";
	}
}
```

> [!note]
> Il controller coordina la richiesta ma **non** dovrebbe contenere la logica di business né accedere direttamente al database.

Supponiamo che il browser richieda `GET /prodotti/15`:
1. la `DispatcherServlet` riceve la richiesta;
2. un `HandlerMapping` individua l'handler `dettaglio()`;
3. gli interceptor registrati possono eseguire `preHandle()`;
4. un `HandlerAdapter` invoca il metodo del controller, valorizzando `id` con 15 e fornendo il `Model`;
5. il controller chiama `prodottoService.trovaPerId(15)` e inserisce il risultato nel modello;
6. Spring risolve la vista `prodotti/dettaglio` e la renderizza, ad es. tramite JSP;
7. gli interceptor eseguono gli eventuali callback successivi (`postHandle()`, `afterCompletion()`).

Se il servizio solleva `ProdottoNonTrovatoException`, Spring può invece invocare il metodo annotato con `@ExceptionHandler`, restituendo la vista di errore con stato HTTP 404.

### Command controller (legacy)

<!-- slide 53, marcata LEGACY -->

>[!attention] Legacy
> Questi controller appartengono al modello MVC tradizionale di Spring (pre-annotazioni) e sono deprecati. Oggi si preferiscono i controller basati su `@Controller`, ma questi restano utili in applicazioni legacy o per casi molto specifici.

Il **command controller** è una famiglia di classi che associano dinamicamente i parametri di `HttpServletRequest` a un oggetto dati (**command object**). Il command object è un semplice JavaBean che riceve automaticamente i valori dalla richiesta HTTP: Spring mappa i parametri alle proprietà senza richiedere setter nel controller. È un handler a tutti gli effetti, invocato dalla `DispatcherServlet`. È simile a `ActionForm` di Struts, ma senza implementare un'interfaccia specifica.

- `AbstractCommandController`: nessuna funzionalità di form; permette solo di specificare cosa fare con l'oggetto command popolato automaticamente.
- `AbstractFormController`: supporto per le form; dopo la compilazione mette i campi nell'oggetto command. Il programmatore specifica i metodi che determinano le view per la presentazione della form.
- `SimpleFormController` (estende `AbstractFormController`): in più, nome della view per la form e della view da mostrare dopo la submission andata a buon fine.
- `AbstractWizardFormController`: per wizard multi-step (form su più pagine). Vanno implementati i metodi astratti `validatePage()`, `processFinish()` e `processCancel()`; facoltativi da sovrascrivere: `referenceData` (passa un model alla view come `Map`), `getTargetPage` (cambia ordine o omette pagine dinamicamente), `onBindAndValidate` (cambia il flusso usuale di binding e validazione).

### View e ViewResolver

Spring fornisce i **view resolver** per semplificare il rendering di un model nel browser senza legarsi a una specifica tecnologia di view (JSP, Velocity template, …). Due interfacce fondamentali:
- `ViewResolver`: mapping fra nomi delle view e implementazione reale; separa la logica di visualizzazione dalla logica applicativa;
- `View`: preparazione e gestione della richiesta verso una tecnologia di view.

ViewResolver disponibili:
- `AbstractCachingViewResolver`: fa caching trasparente delle view per ridurre i tempi di preparazione (una vista risolta viene memorizzata e non ricalcolata nelle richieste successive);
- `XmlViewResolver`: accetta un file di configurazione XML con la stessa DTD della bean factory classica (`/WEB-INF/views.xml`); permette di mappare nomi di view a implementazioni concrete senza scrivere codice Java;
- `UrlBasedViewResolver`: risolve direttamente i nomi simbolici di view in URL (il nome restituito dal controller costruisce l'URL della vista); utile quando il nome della vista corrisponde a un percorso di file o a una risorsa web.

## DAO, ORM e Spring Data

<!-- Fonte: archivio/Sviluppo Web/Lezione_11-Spring-p2.pdf (slide 55-60) -->

Nell'architettura di Spring (vedi [[#Architettura di Spring]]):
- il modulo **DAO** (*Data Access Object*) fornisce un livello di astrazione sui repository specifici (cioè interfacce, senza implementazione);
- il modulo **ORM** contiene le tecnologie concrete (JPA, Hibernate, MongoDB, …) per interfacciarsi con i DB;
- **Spring Data** è una famiglia di API che semplifica accesso ai dati e persistenza: fa da layer intermedio che implementa l'astrazione DAO e delega le operazioni ai moduli ORM o datastore specifici, **disaccoppiando la logica applicativa dalla tecnologia di persistenza**.

Inoltre:
1. `CrudRepository` e `JpaRepository` definiscono il livello di accesso ai dati in Spring Data: `CrudRepository` è il contratto base per le operazioni CRUD; `JpaRepository` è l'estensione JPA-specifica (aggiunge `sorting`, `flush()`, batch operations e altri metodi JPA).
2. La gestione delle transazioni è demandata al **Transaction Manager** di Spring, che tramite AOP coordina commit e rollback garantendo la coerenza delle operazioni dei repository.
3. Spring…boot! (accenno sulla slide, senza altro dettaglio).

### Spring Data

Indipendentemente dal tipo di database, Spring Data fornisce un'API coerente (basata sulla **Repository Abstraction**), integrazione nativa con il container IoC, supporto a query dichiarative e gestione delle transazioni (quando applicabile). Cambia il database, **non il modo di programmare**.

Alcuni progetti supportati:
- **Spring Data JPA**: persistenza su DB relazionali tramite lo standard JPA, delegando l'implementazione a provider ORM come Hibernate;
- **Spring Data MongoDB**: DB orientati ai documenti, mappando oggetti Java a documenti BSON (Binary JSON) senza schema rigido;
- **Spring Data Neo4j**: DB a grafo (nodi e relazioni), mantenendo il paradigma repository;
- **Spring Data Redis**: Redis come key–value store, spesso per caching, sessioni o dati ad accesso rapido;
- **Spring Data Cassandra**: DB NoSQL distribuiti ottimizzati per grandi volumi di dati e alta scalabilità.

Pur con modelli di dati molto diversi, Spring Data offre un approccio uniforme, riducendo il coupling con la tecnologia sottostante e migliorando portabilità, manutenibilità e produttività.

### Repository Abstraction

La **Repository Abstraction** è un modello uniforme per l'accesso ai dati (astrae la persistenza): un contratto chiaro per recuperare, salvare, aggiornare e cancellare entità da un DB o altre sorgenti, separando la logica di dominio da quella di accesso. Elimina il codice DAO boilerplate e rende l'accesso ai dati dichiarativo, coerente e indipendente dall'implementazione.

Interfacce (dalla più generale):
- `Repository`: rappresenta una "collezione" di oggetti (come una lista in memoria), nascondendo completamente il DB;
- `CrudRepository` estende `Repository` e offre le operazioni CRUD fondamentali, indipendenti dalla tecnologia di persistenza;
- `JpaRepository` è una specializzazione di `CrudRepository` per JPA, con funzionalità avanzate come paginazione, batch operations e gestione esplicita del contesto di persistenza.

|Livello|Tipo|Ruolo|
|---|---|---|
|DAO|pattern|definisce l'accesso ai dati|
|Spring Data Commons|framework|implementa il DAO tramite Repository|
|ORM|tecnologia|esegue le operazioni sul DB|

### `CrudRepository`

Fornisce metodi base per interagire con il DB. Ma ogni operazione di `CrudRepository` viene comunque eseguita tramite l'`EntityManager`: perché usarlo? Vedi il confronto sotto.

|Metodo|Descrizione|Operazione|
|---|---|---|
|`long count()`|numero di entità disponibili|R|
|`void delete(T entity)`|cancella l'entità|D|
|`void deleteAll()`|cancella tutte le entità gestite dal repository|D|
|`void deleteAll(Iterable<? extends T> entities)`|cancella le entità date|D|
|`void deleteAllById(Iterable<? extends ID> ids)`|cancella le istanze con gli ID dati|D|
|`void deleteById(ID id)`|cancella l'entità con l'id dato|D|
|`boolean existsById(ID id)`|esiste un'entità con l'id dato?|R|
|`Iterable<T> findAll()`|tutte le istanze del tipo|R|
|`Iterable<T> findAllById(Iterable<ID> ids)`|tutte le istanze con gli ID dati|R|
|`Optional<T> findById(ID id)`|recupera un'entità per id|R|
|`<S extends T> S save(S entity)`|crea/salva l'entità|C+U|
|`<S extends T> Iterable<S> saveAll(Iterable<S> entities)`|crea/salva tutte le entità|C+U|

|Caratteristica|`CrudRepository`|`EntityManager`|
|---|---|---|
|Livello di astrazione|Alto (metodi pronti all'uso)|Basso (interazione manuale con il DB)|
|Bisogno di scrivere query?|No, metodi CRUD integrati|Sì, con JPQL o SQL|
|Gestione transazioni|Automatica, gestita da Spring|Manuale, con `@Transactional`|
|Performance|Ottimizzato per CRUD standard|Più flessibile per casi complessi|
|Caching e ottimizzazioni|Strategie di caching integrate|Richiede configurazione manuale|

### `JpaRepository`

Oltre a `CrudRepository`, esiste l'interfaccia più avanzata `JpaRepository`, che offre in più **elaborazione batch**, **paginazione e ordinamento**.

Entrambe, discendendo da `Repository`, permettono di creare query complesse **scegliendo nomi intelligenti per i metodi** (query derivate dal nome del metodo).

>[!question] Slide 60
> Il diagramma UML della gerarchia (Repository, CrudRepository, PagingAndSortingRepository, JpaRepository, QueryByExampleExecutor, …) è un'immagine troppo piccola per trascriverla con sicurezza: non incluso.

## Transazioni in Spring

<!-- Fonte: archivio/Sviluppo Web/Lezione_11-Spring-p2.pdf (slide 56, 61-68). Le transazioni in Jakarta EE (EJB) sono in [[Web#Gestione delle transazioni in Jakarta EE: Jakarta Enterprise Beans]] -->

Approfondite le transazioni in Jakarta EE (specifica EJB), vediamo le **Spring Transactions**.

### Transaction manager: JTA e JPA

`JtaTransactionManager` può essere visto come **wrapper/adapter** sopra JTA per le transazioni distribuite. `JpaTransactionManager` è il gestore di transazioni JPA in Spring: coordina l'`EntityManager` e le operazioni su un database locale, con commit/rollback automatico sia in modalità dichiarativa sia programmatica.

|Aspetto|JTA|Spring TransactionManager|
|---|---|---|
|Tipo|Standard Java EE|Astrazione di Spring|
|Uso|Diretto tramite container|Indiretto via Spring|
|Distribuzione|Transazioni distribuite su più risorse|Può usare JTA o transazioni locali|
|Indipendenza|Dipende dal container|Indipendente, può essere standalone|

Sia `JpaTransactionManager` sia `JtaTransactionManager` implementano la **stessa interfaccia** `PlatformTransactionManager`:

```java
interface PlatformTransactionManager {
	TransactionStatus getTransaction(TransactionDefinition definition);
	void commit(TransactionStatus status);
	void rollback(TransactionStatus status);
}
```

Grazie a questa interfaccia Spring gestisce transazioni locali e distribuite nello stesso modo, **senza cambiare il codice business**.

### Transazioni distribuite

Obiettivo finale: "**all or nothing**" anche tra sistemi diversi. Una **distributed transaction** coinvolge più risorse contemporaneamente (es. database, code di messaggi come MQ, ERP), per le quali vanno garantite atomicità e consistenza come se fossero una sola transazione → **JTA/XA**.
- Il protocollo **XA** (eXtended Architecture) gestisce le transazioni distribuite con il **commit a due fasi** (2PC) per garantire coerenza.
- Senza JTA/XA c'è rischio di incoerenza dei dati (es. DB1 fa commit, DB2 fallisce → stato incoerente).

### `PlatformTransactionManager`

Interfaccia fondamentale della gestione transazioni di Spring: un'astrazione per gestire le transazioni in vari ambienti. **Non si scrive mai SQL per `BEGIN` o `COMMIT`**: il codice non dipende dal tipo di risorsa (DB, JPA, Hibernate, JCA…).

|Classe|Scopo / risorsa|
|---|---|
|`CciLocalTransactionManager`|Supporto per JEE, JCA e Common Client Interface (CCI)|
|`DataSourceTransactionManager`|JDBC pura (connessioni standard)|
|`JpaTransactionManager`|JPA / `EntityManager`|
|`HibernateTransactionManager`|Hibernate nativo (`Session`)|

Usa due interfacce:
- `TransactionDefinition`: come deve comportarsi la transazione (isolamento, propagation, timeout);
- `TransactionStatus`: per creare e gestire programmaticamente lo stato corrente (attiva/completata/rollback).

```java
// uso programmatico
@Autowired
private PlatformTransactionManager transactionManager;

public void someMethod() {
	TransactionStatus status = transactionManager
			.getTransaction(new DefaultTransactionDefinition());
	try {
		// Your business logic here (DB operations, etc.)
		transactionManager.commit(status); // Commit transaction
	} catch (Exception e) {
		transactionManager.rollback(status); // Rollback transaction
		throw e;
	}
}
```

```java
// recupero di un manager specifico dal contesto
@Autowired
private ApplicationContext context;

public void someMethod() {
	PlatformTransactionManager txManager =
		(PlatformTransactionManager) context.getBean("jpaTransactionManager");
}
```

```java
// scelta del manager nell'annotazione
@Transactional(transactionManager = "jdbcTransactionManager")
public void doSomethingInJdbcTx() {
	// JDBC-specific transactional logic
}
```

### Cosa si può configurare

In Spring si configurano **solo alcuni aspetti** della transazione, che non toccano direttamente ACID (gestite dal resource manager: database, JPA, MQ, ERP):

|Configurazione|Significato|
|---|---|
|Propagation|Come si comporta la transazione quando si chiama un metodo dentro un'altra transazione (`REQUIRED`, `REQUIRES_NEW`, `SUPPORTS`…)|
|Timeout|Tempo massimo di vita prima del rollback automatico|
|Read-only|La transazione non modificherà dati (ottimizzazione)|
|Isolation|Livello di isolamento (`READ_COMMITTED`, `REPEATABLE_READ`, `SERIALIZABLE`…)|

Spring gestisce tutto tramite:
1. `TransactionDefinition`: interfaccia che descrive la transazione;
2. `PlatformTransactionManager.getTransaction()`: metodo centrale, crea/recupera la transazione;
3. `TransactionStatus`: interfaccia per controllare e terminare la transazione.

```java
public interface TransactionDefinition {
	int getPropagationBehavior(); // come le transazioni si relazionano a quelle esistenti
	int getIsolationLevel();      // livello di isolamento per il controllo della concorrenza
	int getTimeout();             // timeout in secondi
	boolean isReadOnly();         // se la transazione è di sola lettura
	String getName();             // nome della transazione (opzionale)
}

public interface TransactionStatus extends SavepointManager {
	boolean isNewTransaction();  // true se è una nuova transazione
	boolean hasSavepoint();      // true se ha un savepoint (transazione annidata)
	void setRollbackOnly();      // marca la transazione rollback-only, impedendo il commit
	boolean isRollbackOnly();    // true se marcata rollback-only
	boolean isCompleted();       // true se già completata (commit o rollback)
}
```

### Transaction isolation

I livelli di isolamento sono valori statici definiti nell'interfaccia `TransactionDefinition`.

|Livello|Descrizione|
|---|---|
|`ISOLATION_DEFAULT`|Livello di default del data store sottostante|
|`ISOLATION_READ_UNCOMMITTED`|Il più basso: permette di vedere dati modificati da altre transazioni non committate|
|`ISOLATION_READ_COMMITTED`|Default nella maggior parte dei DB: le altre transazioni non possono leggere dati non committati; i dati letti possono però essere modificati da altre transazioni|
|`ISOLATION_REPEATABLE_READ`|Più rigoroso del precedente: una volta letti i dati, si può rileggere almeno lo stesso insieme; se altre transazioni inseriscono nuovi dati, questi possono comparire nelle select|
|`ISOLATION_SERIALIZABLE`|Il più costoso e affidabile: le transazioni sono trattate come se fossero eseguite una dopo l'altra|

### Transaction propagation

|Tipo|Descrizione|
|---|---|
|`PROPAGATION_REQUIRED`|Supporta una transazione se ne esiste già una; altrimenti ne avvia una nuova|
|`PROPAGATION_SUPPORTS`|Supporta una transazione se esiste; altrimenti esegue senza transazione|
|`PROPAGATION_MANDATORY`|Supporta una transazione se esiste; lancia un'eccezione se non c'è nessuna transazione attiva|
|`PROPAGATION_REQUIRES_NEW`|Avvia sempre una nuova transazione; se ne esiste una attiva, la sospende|
|`PROPAGATION_NOT_SUPPORTED`|Non supporta l'esecuzione con una transazione attiva: esegue sempre senza transazione e sospende quella esistente|
|`PROPAGATION_NEVER`|Esegue sempre senza transazione; lancia un'eccezione se ne esiste una attiva|
|`PROPAGATION_NESTED`|Esegue in una transazione **annidata** se ne esiste una attiva; se non c'è, si comporta come `PROPAGATION_REQUIRED`|

`PROPAGATION_NESTED` realizza una forma limitata di transazioni annidate basata su **savepoint**.
- **Transazioni piatte**: sequenza "piatta" di operazioni (EJB supporta solo queste).
- **Transazioni innestate**: possono includere altre transazioni (**parzialmente supportate da Spring**):
	- supportate se il transaction manager e la risorsa lo consentono, normalmente tramite savepoint;
	- permettono di ritentare se una transazione innestata fallisce;
	- se la transazione principale fallisce, tutte le transazioni figlie vengono annullate.

Esempio: prenotazione di un viaggio New York → Berlino, con tre sotto-transazioni: volo New York–Londra, Londra–Parigi, Parigi–Berlino.

>[!question] Slide 66
> Nella slide ci sono anche due diagrammi di stato (transazione piatta e innestata) non trascritti.

### Annotazioni: `@Transactional`

```java
@Service("prodottiService")
@Transactional
public class ProdottiService {
	@Autowired
	ProdottoRepository rep;

	@Transactional(readOnly = true)
	public Iterable<Prodotto> findAll() {
		return rep.findAll();
	}
}
```

- `@Service("prodottiService")`: marca la classe come servizio Spring (componente per la logica di business); `"prodottiService"` è il nome del bean nel contesto, usabile per injection o ricerca per nome.
- `@Transactional` (a livello di classe): tutti i metodi sono eseguiti in un contesto transazionale per default; Spring gestisce commit o rollback in base a successo o fallimento.
- `@Autowired`: inietta un'istanza di `ProdottoRepository` nel campo `rep`.
- `@Transactional(readOnly = true)`: il metodo è eseguito in una transazione di sola lettura, perché non modifica i dati (si ottimizzano le prestazioni e si gestisce meglio l'isolamento).

Attributi di `@Transactional`:

|Attributo|Default|Valori possibili|
|---|---|---|
|`propagation`|`Propagation.REQUIRED`|`REQUIRED`, `SUPPORTS`, `MANDATORY`, `REQUIRES_NEW`, `NOT_SUPPORTED`, `NEVER`, `NESTED`|
|`isolation`|`Isolation.DEFAULT` (livello di default della risorsa sottostante)|`DEFAULT`, `READ_UNCOMMITTED`, `READ_COMMITTED`, `REPEATABLE_READ`, `SERIALIZABLE`|
|`timeout`|`TransactionDefinition.TIMEOUT_DEFAULT` (timeout di default in secondi della risorsa)|intero > 0: numero di secondi|
|`readOnly`|`false`|`true`, `false`|
|`rollbackFor`|N/A|classi di eccezione per cui la transazione va in rollback|
|`rollbackForClassName`|N/A|nomi delle classi di eccezione per cui va in rollback|
|`noRollbackFor`|N/A|classi di eccezione per cui **non** va in rollback|
|`noRollbackForClassName`|N/A|nomi delle classi di eccezione per cui non va in rollback|
|`value`|`""`|qualificatore per la transazione specificata|

### Lock e Spring Repositories

Con la Repository Abstraction si possono **combinare lock pessimistici e ottimistici** per proteggere l'accesso concorrente ai dati, lasciando a Spring/JPA la gestione di commit/rollback e della versione. Spring Data JPA permette di applicare i lock direttamente sui metodi del repository.
- I lock **ottimistici** modificano la versione;
- i lock **pessimistici** bloccano fisicamente la riga.

```java
// Lock su un metodo con query
@Lock(LockModeType.OPTIMISTIC_FORCE_INCREMENT)
@Query("SELECT c FROM Customer c WHERE c.orgId = ?")
public List<Customer> fetchCustomersByOrgId(Long orgId);
// legge i clienti e aggiorna automaticamente la loro versione, così che modifiche
// concorrenti di altre transazioni vengano rilevate e gestite in modo sicuro

// Lock su un metodo del repository
@Lock(LockModeType.PESSIMISTIC_READ)
public Optional<Customer> findById(Long customerId);
// legge un Customer in sicurezza in un contesto concorrente, bloccando la riga
// per altri scrittori finché la transazione non termina
```

- Il lock funziona solo **dentro una transazione attiva** (`@Transactional`): senza transazione attiva, JPA lancia `TransactionRequiredException`.
- Se il lock non può essere acquisito entro il tempo previsto, JPA lancia `LockTimeoutException`, ma **non forza il rollback** della transazione attiva: sta al programmatore decidere come gestirlo (retry, logging, ecc.).

> [!note] `@Version` e lock ottimistico
> `@Version` non scompare, è **complementare** al lock ottimistico. `@Version` si dichiara nell'entità e abilita il controllo ottimistico delle modifiche concorrenti; `@Lock(LockModeType.OPTIMISTIC)` si dichiara su un metodo del repository per richiedere esplicitamente un controllo ottimistico durante l'operazione.

Quindi: Spring Data Repositories + `@Lock` = API dichiarativa per richiedere lock ottimistici o pessimistici, delegando l'applicazione effettiva del lock a JPA, al provider ORM e al database. Per i dettagli su locking vedi [[Web#Isolation and Optimistic Locking]].

## Spring Security

<!-- Fonte: archivio/Sviluppo Web/Lezione_11-Spring-p3.pdf (slide 70-93). La slide 69 è il frontespizio "Spring III Parte" -->

Panoramica dell'ecosistema:
- **Spring Framework**: il framework fondamentale, con le funzionalità di base;
- **Spring Projects**: progetti che estendono l'ecosistema con funzionalità specializzate (es. Spring Data);
- **Spring Ecosystem**: l'insieme complessivo di framework, progetti e librerie che collaborano per sviluppare applicazioni Java.

|Componente|Tipologia|Funzione|
|---|---|---|
|Spring Core|Modulo di Spring Framework|IoC e Dependency Injection|
|Spring AOP|Modulo di Spring Framework|Programmazione orientata agli aspetti|
|Spring MVC|Modulo di Spring Framework|Sviluppo web|
|Spring Data|Progetto dell'ecosistema Spring|Accesso e gestione dei dati|
|Spring Security|Progetto dell'ecosistema Spring|Autenticazione e autorizzazione|
|Lombok|Libreria esterna|Auto-generazione codice|
|Spring Boot|Progetto dell'ecosistema Spring|Configurazione e avvio delle applicazioni|

Oggi (lezione 11, parte 3) si vedono Spring Security, Lombok e Spring Boot.

> [!note]
> Spring Data è a sua volta un progetto ombrello, che comprende diversi moduli (Spring Data JPA, Spring Data JDBC, Spring Data MongoDB). Analogamente Spring Security è un progetto autonomo, spesso descritto come framework per la sicurezza delle applicazioni Spring.

**Spring Security** è un framework che fornisce autenticazione, autorizzazione e protezione contro gli attacchi più comuni, con integrazione con altre librerie.
- **Autenticazione** → «Chi sei?»: processo con cui si verifica l'identità di chi tenta di accedere a una risorsa. Metodo comune: richiedere nome utente e password.
- **Autorizzazione** → «Cosa puoi fare?»: una volta autenticati, conosciamo l'identità e si può procedere con l'autorizzazione.
- **Protezione contro gli exploit** (codice usato dagli aggressori per sfruttare una vulnerabilità con l'obiettivo di compromettere il sistema, rubare dati o causare danni): ove possibile la protezione è abilitata per impostazione predefinita.

### Configurazione (approccio legacy)

>[!attention] Legacy
> Le slide 72-73 e 82-84 usano `WebSecurityConfigurerAdapter`, **deprecato** (le slide lo marcano LEGACY). Vedi sotto per l'approccio attuale.

Una semplice classe di configurazione abilita una pagina di login "base":

```java
@Configuration //Marks this class as a Spring configuration class
@EnableWebSecurity //Enables Spring Security's web security features
public class SecurityConfig extends WebSecurityConfigurerAdapter {
}
```

Opzioni per l'**archivio utenti**:
1. archivio **in memoria**: credenziali e ruoli configurati direttamente nel codice;
2. archivio basato su **JDBC**;
3. un **servizio di dettagli utente personalizzato** (interfaccia `UserDetailsService`).

Le configurazioni si specificano sovrascrivendo il metodo `configure` di `WebSecurityConfigurerAdapter`:

```java
@Override
protected void configure(AuthenticationManagerBuilder auth) throws Exception { … }
```

`AuthenticationManagerBuilder` è la classe di Spring Security che permette di configurare come gli utenti vengono autenticati e di costruire l'`AuthenticationManager`: utenti in memoria (`inMemoryAuthentication()`), nel database (`jdbcAuthentication()`), tramite un servizio personalizzato (`userDetailsService()`).

```java
// In-memory user store
@Override
protected void configure(AuthenticationManagerBuilder auth) throws Exception {
	auth.inMemoryAuthentication()
		.withUser("buzz").password("infinity").authorities("ROLE_USER")
		.and()
		.withUser("woody").password("bullseye").authorities("ROLE_USER");
}
```

```java
// JDBC-based user store
@Autowired
DataSource dataSource;

@Override
protected void configure(AuthenticationManagerBuilder auth) throws Exception {
	auth.jdbcAuthentication().dataSource(dataSource);
}
```

L'opzione JDBC assume che esistano le tabelle per i dati degli utenti, interrogate con queste query di default:

```java
public static final String DEF_USERS_BY_USERNAME_QUERY =
	"select username,password,enabled from users where username = ?";
public static final String DEF_AUTHORITIES_BY_USERNAME_QUERY =
	"select username,authority from authorities where username = ?";
public static final String DEF_GROUP_AUTHORITIES_BY_USERNAME_QUERY =
	"select g.id, g.group_name, ga.authority from groups g, group_members gm, group_authorities ga "
	+ "where gm.username = ? and g.id = ga.group_id and g.id = gm.group_id";
```

### Storia della memorizzazione delle password

1. **In chiaro**: si presumeva fossero al sicuro perché il DB richiedeva credenziali. Ma attacchi come la **SQL Injection** hanno permesso di ottenere grandi quantità di username e password.
2. **Hash unidirezionale** (es. SHA-256): si memorizza solo l'hash; all'accesso si confronta l'hash della password digitata con quello salvato. In caso di violazione si espongono solo gli hash.
3. **Rainbow Table**: tabella precalcolata di hash per un'ampia gamma di possibili valori in chiaro (es. password comuni); permette di risalire alla password trovando una corrispondenza nella tabella.
4. **Salted password**: per ogni utente si generano byte casuali (**salt**); l'hash è `HashOttenuto = hash(salt + password)`. Il salt è memorizzato insieme all'hash (le slide scrivono "insieme alla password dell'utente in chiaro"). Essendo il salt univoco, l'hash è diverso per ogni combinazione salt+password e le Rainbow Table diventano inefficaci.
5. **Oggi**: gli algoritmi di hash crittografici (come SHA-256) non sono più sicuri, perché l'hardware moderno calcola miliardi di hash al secondo; non basta nemmeno il salt. Si usano **funzioni unidirezionali adattive**:
	- la validazione è intenzionalmente dispendiosa (molta CPU, memoria o altre risorse, ad es. con funzioni hash innestate);
	- permettono di configurare un **fattore di lavoro** che può aumentare con il miglioramento dell'hardware;
	- esempi: **bcrypt**, **PBKDF2**, **scrypt**, **argon2**.

### PasswordEncoder

Spring Security fornisce l'interfaccia `PasswordEncoder`, responsabile della codifica e della verifica delle password codificate; si può implementare da sé o usare una delle implementazioni predefinite. Il metodo `passwordEncoder()` accetta qualsiasi implementazione.

|Implementazione|Cosa applica|Uso consigliato|
|---|---|---|
|`BCryptPasswordEncoder`|hashing bcrypt|applicazioni moderne (solida sicurezza, ampia diffusione)|
|`Pbkdf2PasswordEncoder`|PBKDF2|alta sicurezza|
|`SCryptPasswordEncoder`|scrypt|alta sicurezza|
|`StandardPasswordEncoder`|SHA-256|sistemi legacy, se serve compatibilità (**deprecato**: valutare la migrazione)|
|`NoOpPasswordEncoder`|nessuna codifica (password in chiaro)|solo test/sviluppo, non produzione|

```java
@Override
protected void configure(AuthenticationManagerBuilder auth) throws Exception {
	PasswordEncoder encoder = new BCryptPasswordEncoder();
	auth.jdbcAuthentication().dataSource(dataSource).passwordEncoder(encoder);
}

@Override
protected void configure(AuthenticationManagerBuilder auth) throws Exception {
	PasswordEncoder encoder = new StandardPasswordEncoder("53cr3t");
	auth.jdbcAuthentication().dataSource(dataSource).passwordEncoder(encoder);
}
```

### DelegatingPasswordEncoder

Nelle vecchie versioni di Spring Security il `PasswordEncoder` predefinito era `NoOpPasswordEncoder` (password in chiaro). Renderlo oggi `BCryptPasswordEncoder` ignorerebbe due problemi concreti:
- molte applicazioni usano vecchie codifiche che non possono essere migrate;
- le linee guida sulla memorizzazione delle password cambieranno ancora.

`DelegatingPasswordEncoder` gestisce **contemporaneamente più algoritmi** in modo trasparente (es. vecchi utenti SHA-256, nuovi utenti bcrypt): codifica con le raccomandazioni attuali, convalida password in formati moderni e legacy, permette di aggiornare la codifica in futuro.

```java
// istanza standard
PasswordEncoder passwordEncoder = PasswordEncoderFactories.createDelegatingPasswordEncoder();

// istanza personalizzata
String idForEncode = "bcrypt";
Map encoders = new HashMap<>();
encoders.put(idForEncode, new BCryptPasswordEncoder());
encoders.put("noop", NoOpPasswordEncoder.getInstance());
encoders.put("sha256", new StandardPasswordEncoder());

PasswordEncoder passwordEncoder = new DelegatingPasswordEncoder(idForEncode, encoders);
```

In sintesi: approccio flessibile, retrocompatibile e lungimirante, che bilancia sicurezza ed esigenze concrete.

### Formato di memorizzazione

Formato generale: `{id}passwordcodificata`, dove `id` individua quale `PasswordEncoder` usare e `passwordcodificata` è la password codificata da quell'encoder. Es.: `{bcrypt}` → `BCryptPasswordEncoder`; `{pbkdf2}` → `Pbkdf2PasswordEncoder`; `{noop}` → in chiaro (sconsigliato).

Quando la password viene salvata la prima volta (es. registrazione) l'applicazione usa un `PasswordEncoder` per l'hash; l'encoder antepone all'hash l'`{id}` appropriato.

### JPA e Security: `UserDetails` e `UserDetailsService`

```java
@Entity
@Data
public class User implements UserDetails {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Long id;
	private final String username;
	private final String password;
	private final String fullname;

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		return Arrays.asList(new SimpleGrantedAuthority("ROLE_USER"));
	}

	@Override // indica se l'account è scaduto
	public boolean isAccountNonExpired() { return true; }

	@Override // indica se l'account è bloccato
	public boolean isAccountNonLocked() { return true; }
	…
}

@Service
public class UtenteService implements UserDetailsService {
	private final UtenteRepository repository;

	public UtenteService(UtenteRepository repository) {
		this.repository = repository;
	}

	@Override
	public UserDetails loadUserByUsername(String username) {
		return repository.findByUsername(username)
			.orElseThrow(() -> new UsernameNotFoundException("Utente non trovato"));
	}
}
```

- La entity `User` implementa `UserDetails` e rappresenta un utente con i dettagli per autenticazione e autorizzazione.
- `@Data` è un'annotazione **Lombok** (libreria Project Lombok) che genera automaticamente getter, setter, `toString`, `hashCode` ed `equals`.
- `UserDetailsService` si occupa solo di **caricare i dati dell'utente** durante l'autenticazione, recuperandoli dal nome utente; poi Spring Security esegue autenticazione e autorizzazione.

|`UserDetails`|`UserDetailsService`|
|---|---|
|Rappresentare l'utente|Recuperare l'utente|
|Descrive username, password e ruoli|Cerca l'utente tramite username|
|È implementata dalla classe Entity|È implementata da un Service|
|Restituisce informazioni|Restituisce un oggetto `UserDetails`|

>[!question] Slide 81
> Nella slide c'è anche un diagramma a 4 passi del flusso di autenticazione (client → … → UserDetailsService) troppo piccolo per trascriverlo con sicurezza: non incluso.

### `WebSecurityConfigurerAdapter` (legacy)

```java
public class SecurityConfig extends WebSecurityConfigurerAdapter {
	@Autowired
	private UserDetailsService userDetailsService;

	@Bean
	public PasswordEncoder encoder() {
		return new StandardPasswordEncoder("53cr3t");
	}

	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception {
		auth.userDetailsService(userDetailsService).passwordEncoder(encoder());
	}
	…
}
```

`WebSecurityConfigurerAdapter` è una classe astratta (implementa `WebSecurityConfigurer`) che offre un modo pratico per personalizzare la sicurezza web. Metodi sovrascrivibili:
- `configure(HttpSecurity http)`: sicurezza HTTP (quali pattern di URL proteggere, comportamento di login e logout, …);
- `configure(AuthenticationManagerBuilder auth)`: meccanismi di autenticazione (in memoria, database, LDAP, …);
- `configure(WebSecurity web)`: facoltativo, altri aspetti (ignorare richieste HTTP specifiche, filtri personalizzati).

> [!attention]
> La deprecazione di `WebSecurityConfigurerAdapter` **non** riguarda `UserDetails` e `UserDetailsService`, che restano interfacce centrali di Spring Security.

>[!question] Slide 83
> "Approccio tradizionale con WebSecurityConfigAdapter" contiene solo un diagramma (Request → Component, `PasswordEncoder`, `AuthenticationManager`, `UserDetailsService`, `UserDetails`, `AuthenticationEntryPoint`, `UsernamePasswordAuthenticationToken`; Controller `AuthController`/`TestController`; Repository `UserRepository`/`RoleRepository` → Database). Non trascritto nei dettagli.

### Oltre l'autenticazione: autorizzazione

Spring Security permette di stabilire in modo **dichiarativo** che cosa un utente è autorizzato a fare, anche in base al contesto applicativo. **SpEL** (Spring Expression Language) è un linguaggio all'interno di Spring che valuta espressioni dinamicamente.

```java
// LEGACY
@Override
protected void configure(HttpSecurity http) throws Exception {
	http.authorizeRequests()
		.antMatchers("/path").hasRole("USER")
		.antMatchers("/", "/**").permitAll();
}
```

- `authorizeRequests()` restituisce un oggetto (`ExpressionInterceptUrlRegistry`) su cui specificare percorsi/pattern URL e requisiti di sicurezza.
- **L'ordine delle regole è importante**: quelle dichiarate per prime hanno la precedenza.

|Metodo di `ExpressionInterceptUrlRegistry`|Cosa fa|
|---|---|
|`access(String)`|consente l'accesso se l'espressione SpEL è true|
|`anonymous()`|consente l'accesso agli utenti anonimi|
|`authenticated()`|consente l'accesso agli utenti autenticati|
|`denyAll()`|nega l'accesso in ogni caso|
|`fullyAuthenticated()`|consente l'accesso se l'utente è autenticato completamente (non "remembered")|
|`hasIpAddress(String)`|consente l'accesso se la richiesta proviene dall'IP dato|
|`hasRole(String)`|consente l'accesso se l'utente ha il ruolo dato|
|`permitAll()`|consente l'accesso senza condizioni|
|`rememberMe()`|consente l'accesso agli utenti autenticati via remember-me|

(la tabella sulla slide contiene anche altri metodi non riportati, indicati con "…")

**Approccio attuale**: annotazioni di Spring Security per definire chi può eseguire un metodo, separando i controlli di sicurezza dalla logica applicativa tramite **Spring AOP**:
- `@PreAuthorize`: verifica le condizioni di autorizzazione **prima** dell'esecuzione del metodo;
- `@PostAuthorize`: le verifica **dopo** l'esecuzione.

```java
@Service
public class ProdottoService {
	@PreAuthorize("hasRole('ADMIN')")
	public void eliminaProdotto(Long id) {
		// Elimina il prodotto
	}
}
```

### Credenziali a breve termine: JWT

Poiché le funzioni adattive sono intenzionalmente onerose, validare utente e password a **ogni richiesta** può compromettere le prestazioni; Spring Security (o qualsiasi libreria) non può velocizzare la validazione senza intaccare la sicurezza. Si consigliano quindi **credenziali a breve termine** (es. **JSON Web Token, JWT**) al posto di quelle a lungo termine (username e password), che possono essere convalidate rapidamente senza perdita di sicurezza.
- L'**Authorization Server** autentica l'utente e rilascia il JWT; il **Resource Server** riceve le richieste, verifica il JWT e protegge le risorse.

Esempio di payload:

```json
{
	"sub": "mario",
	"role": "USER",
	"iat": 1793640000,
	"exp": 1793643600
}
```
- `sub`: identifica l'utente;
- `role`: ruolo dell'utente (claim personalizzato);
- `iat`: momento di emissione;
- `exp`: scadenza del token.

Funzionamento:
- al primo accesso il server convalida username e password con un algoritmo di hashing sicuro (dispendioso);
- se valide, rilascia una credenziale temporanea: il JWT, che contiene informazioni codificate (es. ID utente, ruoli) ed è **firmato digitalmente** dal server (la firma garantisce integrità e autenticità);
- i JWT sono **stateless** e autonomi: dopo l'emissione il server non ricontrolla la password a ogni richiesta, ma verifica rapidamente la firma con algoritmi crittografici efficienti → validazione molto più veloce e scalabile, senza compromettere la sicurezza.

> [!warning]
> JWT **firmato** non significa JWT **cifrato**: il payload può essere letto da chiunque possieda il token. Non vanno inseriti password o informazioni riservate.

|Session-based|JWT-based|
|---|---|
|Stato mantenuto sul server|Autenticazione basata sul token|
|Identificativo di sessione (cookie)|Token JWT|
|Il server recupera i dati della sessione|Il server verifica il token|
|Necessita di gestione delle sessioni|Può funzionare senza sessioni HTTP|

### Filtri e catena di sicurezza

#### Richiamo sui Filter

Il supporto di Spring Security per i Servlet si basa sui **Servlet Filter** (`javax.servlet.Filter` / `jakarta.servlet.Filter`). Il client invia una richiesta; il servlet container (es. Tomcat) crea una **`FilterChain`** contenente le istanze dei filtri e la servlet (`DispatcherServlet`) che deve elaborare la `HttpServletRequest`.

I filtri operano a livello di servlet container, **prima** del `DispatcherServlet`; Spring MVC usa `HandlerInterceptor` e AOP a livello applicativo.

|Livello|Tecnologia|Sicurezza|
|---|---|---|
|HTTP|Filter|completa (auth, token, ecc.)|
|MVC|`HandlerInterceptor`|base (controlli semplici)|
|Metodo|AOP|autorizzazione fine (`@PreAuthorize`)|

La potenza del filtro deriva dalla catena:

```java
public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) {
	// do something before the rest of the application
	chain.doFilter(request, response); // invoke the rest of the application
	// do something after the rest of the application
}
```

Un filtro influenza solo i filtri a valle e la servlet, quindi **l'ordine di invocazione è estremamente importante**. Domanda della slide: chi fa da ponte tra il mondo Servlet (Tomcat) e il mondo Spring? → `DelegatingFilterProxy`.

#### `DelegatingFilterProxy`

Implementazione di `Filter` fornita da Spring che fa da **ponte** tra il ciclo di vita del servlet container e l'`ApplicationContext` di Spring. Il container permette di registrare filtri con i propri standard ma **non conosce i bean Spring**. `DelegatingFilterProxy` integra dependency injection e gestione dei bean con il ciclo di vita dei filtri del container: permette di usare bean Spring per autenticazione, logging, ecc., lasciando al container la gestione del ciclo di vita request/response HTTP.

È un filtro "finto" registrato nel container che **delega il lavoro a un bean Spring reale**: cerca il bean `Filter0` nell'`ApplicationContext` e lo invoca.

`Client → Tomcat Filter (DelegatingFilterProxy) → Spring Bean (vero filtro) → Applicazione`

#### `FilterChainProxy`

Il supporto di Spring Security per i Servlet è contenuto in `FilterChainProxy`, filtro speciale che delega a più istanze di filtro tramite `SecurityFilterChain`. Essendo un bean, di solito è incapsulato in un `DelegatingFilterProxy`.

|`DelegatingFilterProxy`|`FilterChainProxy`|
|---|---|
|Filtro generico del container (Servlet)|Filtro interno di Spring Security|
|Fa da ponte tra Servlet e Spring|Gestisce la catena di filtri di sicurezza|
|Punta a un bean Spring (di solito `FilterChainProxy`)|Contiene e coordina tutti i filtri di sicurezza (`AuthenticationFilter`, `AuthorizationFilter`, …)|

#### `SecurityFilterChain`

`FilterChainProxy` lo usa per determinare quali filtri di Spring Security invocare per la richiesta corrente. I filtri di sicurezza sono in genere bean, ma registrati con `FilterChainProxy` anziché con `DelegatingFilterProxy`. Si possono definire **più catene** di filtri, ciascuna con un insieme di filtri e un `RequestMatcher` che determina quando la catena si applica.

#### Esempio: `RequestCacheAwareFilter`

Se una richiesta non autenticata riguarda una risorsa protetta, va salvata affinché dopo l'autenticazione possa essere riproposta. Spring Security salva l'oggetto `HttpServletRequest` con un'implementazione di **`RequestCache`**; dopo il login lo usa per riprodurre la richiesta originale. `RequestCacheAwareFilter` è il componente che usa `RequestCache` per salvare la richiesta.

Si può voler evitare di salvare la richiesta nella sessione (applicazioni stateless, prestazioni, rischi per la sicurezza): si usa `NullRequestCache` nella configurazione di `SecurityFilterChain`.
- `RequestCache` = ricorda dove volevi andare;
- `NullRequestCache` = non ricordare nulla.

> [!note]
> Da non confondere con `@Cacheable`.

|Aspetto|`RequestCache`|`@Cacheable`|
|---|---|---|
|Ambito|Spring Security|Spring Cache|
|Memorizza|Richieste HTTP|Risultati di metodi|
|Obiettivo|Riprendere la navigazione|Evitare elaborazioni ripetute|
|Esempio|Richiesta dopo il login|Recupero di un prodotto|

#### Riassumendo

In Spring Security ogni richiesta HTTP attraversa una catena di filtri gestita da `FilterChainProxy`; i filtri si occupano di autenticazione, autorizzazione e gestione delle eccezioni **prima** che la richiesta raggiunga il `DispatcherServlet` e i controller.

```
Client (HTTP Request)
  ↓
Tomcat
  ↓
DelegatingFilterProxy (Container)
  ↓
FilterChainProxy (Spring)
  ↓
SecurityFilterChain:
  → AuthenticationFilter
  → RequestCacheAwareFilter
  → CsrfFilter
  → …
  ↓
DispatcherServlet
  ↓
Controller
```

## Spring Boot

<!-- Fonte: archivio/Sviluppo Web/Lezione_11-Spring-p3.pdf (slide 94-100) -->

Domanda di partenza: possiamo concentrarci sulla logica applicativa senza configurare manualmente ogni componente dell'infrastruttura?

**Spring Boot** è un progetto dell'ecosistema Spring che semplifica creazione, configurazione ed esecuzione di applicazioni basate su Spring Framework. Obiettivi principali:
1. **Convention over Configuration**: ridurre le configurazioni manuali tramite convenzioni e impostazioni predefinite.
2. **Auto-configuration**: configurare automaticamente i componenti Spring in base alle dipendenze presenti e alle condizioni dell'applicazione, semplificando la gestione delle dipendenze con pacchetti predefiniti (**Starter Dependencies**).
3. **Embedded Server**: integrare un server web nell'applicazione, senza doverne installare e configurare uno esterno.

Risultato: l'applicazione si avvia direttamente, tipicamente da un **JAR eseguibile**.

### Spring vs Spring Boot

- Spring Boot è un'estensione di Spring che semplifica lo sviluppo eliminando gran parte della configurazione manuale, grazie ad auto-configuration, starter dependency e server embedded.
- Spring definisce l'ecosistema; Spring Boot (*to boot* = avviare velocemente) ne automatizza l'uso per costruire applicazioni pronte all'esecuzione in modo rapido e consistente.

Spring Boot analizza: le dipendenze disponibili nel progetto; le classi presenti nel classpath; i bean già definiti dall'applicazione; le configurazioni esplicitamente fornite. Sulla base di queste informazioni configura automaticamente i componenti necessari.

Le configurazioni possono stare fuori dal codice Java, nel file `application.properties` o `application.yml`. I **profiles** permettono configurazioni diverse per ambienti diversi: `dev` (sviluppo), `test` (prova), `prod` (produzione).

> [!note]
> Spring Data è il punto in cui la differenza è evidente: è **identico** (stessi repository, stesse query, stesse annotazioni); cambia solo come viene configurato.

### Esempio: JPA Starter

Spring "classico": tutto a mano in una classe `@Configuration` (o in XML):

```java
@Configuration
@EnableJpaRepositories(basePackages = "com.example.repository")
public class JpaConfig {
	@Bean
	public DataSource dataSource() {
		return new DriverManagerDataSource("jdbc:postgresql:mem:testdb", "sa", "");
	}

	@Bean
	public LocalContainerEntityManagerFactoryBean entityManagerFactory() {
		LocalContainerEntityManagerFactoryBean emf = new LocalContainerEntityManagerFactoryBean();
		emf.setDataSource(dataSource());
		emf.setPackagesToScan("com.example.model");
		emf.setJpaVendorAdapter(new HibernateJpaVendorAdapter());
		return emf;
	}

	@Bean
	public PlatformTransactionManager transactionManager(EntityManagerFactory emf) {
		return new JpaTransactionManager(emf);
	}
}
```

Da configurare: `DataSource`, `EntityManagerFactory`, `TransactionManager`, `@EnableJpaRepositories` per i repository.

Con Spring Boot basta una dipendenza Maven nel `pom.xml`:

```xml
<dependency>
	<groupId>org.springframework.boot</groupId>
	<artifactId>spring-boot-starter-data-jpa</artifactId>
</dependency>
```

Lo **JPA Starter** include automaticamente tutte le librerie per usare JPA con Spring Data:
- include Spring Data JPA;
- include Hibernate (implementazione JPA di default; in modo transitivo);
- configura automaticamente `EntityManagerFactory`, `TransactionManager` e la connessione al DB se trova un `DataSource`;
- permette di usare `CrudRepository`/`JpaRepository` senza configurazioni manuali.

Senza lo starter bisognerebbe scegliere il provider ORM, configurare `EntityManager` e transazioni, dichiarare decine di bean e garantire la coerenza tra le versioni.

### Configurazione della Persistence Unit: `application.properties`

```properties
spring.jpa.database=POSTGRESQL
spring.datasource.platform=postgres
spring.datasource.url=jdbc:postgresql://localhost:5432/esempio
spring.datasource.username=postgres
spring.datasource.password=admin
spring.jpa.show-sql=true
spring.jpa.generate-ddl=true
spring.jpa.hibernate.ddl-auto=update
spring.jpa.properties.hibernate.jdbc.lob.non_contextual_creation=true
```

La configurazione prepara Spring Boot a usare Hibernate per collegarsi a PostgreSQL, gestendo automaticamente mapping, transazioni e sincronizzazione tra entità e database. Il file è nel progetto Spring Boot (`application.properties` o `application.yml`) ed è letto automaticamente all'avvio; configura DataSource (DB), JPA/Hibernate, server embedded (Tomcat), logging, security, cache, ecc.

|Aspetto|`pom.xml`|`application.properties` / `.yml`|
|---|---|---|
|Strumento|Maven|Spring Boot|
|Scopo|Gestione del progetto|Configurazione dell'applicazione|
|Dipendenze|Sì|No|
|Versioni librerie|Sì|No|
|Porta server|No|Sì|
|Connessione DB|No|Sì|
|Utilizzo|Build e packaging|Esecuzione|

> [!note]
> `pom.xml` gestisce la costruzione del progetto e le sue dipendenze; `application.properties`/`.yml` configurano il comportamento a **run-time** dell'applicazione Spring Boot.

### Convention over configuration con JPA

Struttura: `project/ ├─ src/ ├─ pom.xml └─ mvnw` (la dipendenza dello starter va aggiunta al `pom.xml`, il file di configurazione Maven / Project Object Model).

Se si seguono le convenzioni non serve configurare quasi nulla:

```java
@Entity
public class User {
	@Id
	@GeneratedValue
	private Long id;

	private String firstName;
	private String lastName;
}
// tabella "User", id chiave primaria
```

Quando si rompe la convenzione si scrive configurazione esplicita:

```java
@Entity
@Table(name = "tbl_users")
public class User {
	@Id
	@GeneratedValue
	@Column(name = "user_id")
	private Long id;

	@Column(name = "first_name_custom")
	private String firstName;
}
// tabella "tbl_users", user_id chiave primaria
```

### Esempio: transazioni

Come per i repository, con il JPA Starter Spring Boot semplifica la gestione delle transazioni.

```java
@Configuration
@EnableTransactionManagement
public class JpaConfig {
	@Bean
	public PlatformTransactionManager transactionManager(EntityManagerFactory emf) {
		return new JpaTransactionManager(emf);
	}
}
```

|Aspetto|Spring tradizionale|Spring Boot|
|---|---|---|
|Transaction Manager|Configurazione manuale (`@Bean`)|Automatico, creato dallo starter|
|Abilitazione transazioni|`@EnableTransactionManagement`|Inclusa nell'autoconfigurazione JPA|
|Uso nei servizi|`@Transactional`|`@Transactional` (stesso modo)|
|Personalizzazione|Completamente manuale|Possibile ma opzionale|
|Boilerplate|Alto|Minimo|

### Esempio: Security Starter

Lo Spring Boot starter security abilita Spring Security fornendo una configurazione di default. Nel `pom.xml`:

```xml
<dependency>
	<groupId>org.springframework.boot</groupId>
	<artifactId>spring-boot-starter-security</artifactId>
</dependency>
```

Funzionalità fornite:
- autenticazione per **tutti** i percorsi di richiesta HTTP;
- autenticazione tramite **HTTP Basic** (niente UI, no HTTPS);
- autorizzazione a grana grossa, senza ruoli o autorizzazioni specifici.

Se non si configura nulla, Spring crea un solo utente `user` e la password viene generata casualmente e scritta nel log dell'applicazione:

```
Using default security password: 087cfc6a-027d-44bc-95d7-cbb3a798a1ea
```

``