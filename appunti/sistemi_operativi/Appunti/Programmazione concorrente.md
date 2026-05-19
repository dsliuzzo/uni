#appunti 
#so 
[[Java]]
La programmazione concorrente è un approccio alla progettazione del software in cui il programma è suddiviso in compiti (task o thread, appunto) che possono sovrapporsi nel tempo.
- **La concorrenza** è la gestione di molte cose alla volta (è un problema di _struttura_ e _design_).
- **Il parallelismo** è l'esecuzione di molte cose alla volta (è un problema di hardware ed esecuzione fisica).
La suddivisione in [[1. Gestione dei processi#Threads|thread]] generalmente aumenta le prestazioni, ma continuando a suddividere il programma in thread il suo miglioramento sarà sempre minore, fino a quando la creazione di nuovi thread diminuirà le prestazioni a causa del [[1. Gestione dei processi#Commutazione tra processi|tempo di commutazione]] tra processi.
>[!important] Speedup
>Nel calcolo parallelo lo **speedup** indica il rapporto fra il tempo di esecuzione sequenziale e quello parallelo di un programma. Indicando con $T_s$ il tempo di esecuzione sequenziale (su un processore) e con $T_n$ quello parallelo (su $n$ processori), lo speedup di una applicazione su $n$ processori è definito come:$$S_n = \frac{T_s}{T_n}$$

>[!attention] Legge di Amdahl
>![[Pasted image 20260327112708.png|center|100]]
>Il massimo speedup ottenibile è vincolato. 
>Considerando un programma suddiviso come
>- $F$ porzione di codice che può beneficiare del parallelismo
>- $1-F$ porzione di codice che può beneficiare del parallelismo
>
>La legge di Amdahl mette in relazione queste due grandezze come segue:
>$$\frac{1}{(1-F)+\frac{F}{N}}$$
>Con $N$ numero di thread utilizzati, asintoticamente otterremo
>$$\lim_{ N \to \infty } \frac{1}{(1-F)+\frac{F}{N}} = \frac{1}{1-F}$$
# Thread in java
https://docs.oracle.com/javase/8/docs/api/java/lang/Thread.html
https://docs.oracle.com/javase/8/docs/api/java/lang/Runnable.html

>[!multi-column]
>
>>[!blank]
>>`Runnable` è una interfaccia.
>>Dobbiamo implementare il metodo `run()` per descrivere il suo funzionamento.
>>Poi per il suo utilizzo alla creazione dobbiamo wrappare l'oggetto creato con Thread, per poter richiamare il metodo `start()`.
>>`new Thread(new NomeClasse()).start();`
>
>>[!blank]
>>`Thread` è una classe.
>>Per il suo utilizzo dobbiamo comunque implementare il metodo `run()` che eredita a sua volta da `Runnable`.
>>Lo slot per l'extend della classe è occupato da Thread.
>>`new NomeClasse().start();`

Java non ha ereditarietà multipla, quindi se ho bisogno di estendere una classe, implementando `Runnable` invece di estendere `Thread` mi permette di estendere un altra classe. 

Poi a livello filosofico è sbagliato utilizzare extends sul `Thread` perché non stiamo dando un funzionamento più specifico a `Thread`, ma striamo aggiungendo una caratteristica alla nostra classe.
## Ciclo di vita di un thread in Java
A differenza di un normale [[1. Gestione dei processi#Stato del processo|processo]] in Java ci sono delle fasi un po' diverse:
![[Pasted image 20260404181842.png|center|400]]
- **new**
  le variabili sono inizializzate e attendono di andare in runnable
- **runnable**
  il thread è in esecuzione (la CPU sta eseguendo le istruzioni del suo metodo `run()`) o in coda di attesa per ottenere l'utilizzo della CPU.
  Contiene sia lo stato `running` che lo stato `ready`
  `yield()`: metodo statico della classe Thread per indicare allo scheduler che il thread corrente è disposto a fornire l'uso corrente della CPU a favore di altri thread. Lo scheduler potrebbe ignorare la richiesta.
- **not runnable**
  può essere di vario tipo
	- **blocked**
	  lo stato di un Thread che è bloccato in attesa di un lock per un [[1. Gestione dei processi#Monitor|monitor]].
	- **waiting**
	   attende in maniera indefinita un evento eseguito da un altro thread
	- **timed-waiting**
	  attende un evento eseguito da un altro thread oppure la fine di un timer
- **terminated**
  il thread ha completato la sua esecuzione
## Scheduling in java
java ha uno scheduling con priorità (su 10 livelli, in genere si lascia di default, è settata a 5) e RR per pari priorità.
Un processo può essere interrotto:
- termina le sue istruzioni di `run()`
- esegue `yield()`
- preemption
- si esaurisce il quanto di tempo
Una applicazione di Java termina nel momento in cui tutti i suoi thread sono terminati

>[!quote] Scheduling del so e di java
>Fino alla versione 20 Java i thread vengono passati allo scheduler del so, mentre dalla 21 in poi si ha la possibilità di gestire i thread tramite uno scheduler interno, che va richiamato con `Thread.startVirtualThread(...)`
## Meccanismi di sincronizzazione
>[!bug] L'output di più thread non è deterministico

a meno che non vengono utilizzati meccanismi di sincronizzazione.
- `s1.join()` eseguito all'interno di un thread permette di fermare la sua esecuzione fino a quando `s1` non finisce la sua esecuzione.
![[Pasted image 20260404185636.png|center|300]]
`currentThread()` restituisce un riferimento all’oggetto Thread attualmente in esecuzione

## Interruzione di un thread
L'interruzione di un thread in Java è basata su un meccanismo di tipo **cooperativo**.
Un thread non può forzare un altro thread ad interrompersi bruscamente, quello che può fare è semplicemente chiedergli di interrompersi nel momento più conveniente per esso.
La classe Thread fornisce alcuni metodi per chiedere l'interruzione di un thread e sapere se ad un thread è stato richiesto di interrompersi.

Il meccanismo di interruzione è implementato usando una flag interna conosciuta come **interrupt status**:
- `void interrupt()`
  pone a true l'interrupt status e genera una `InterruptException`
- i metodi bloccanti come `sleep` e `join` vengono interrotti non appena l'interrupt status viene posto a true
- `boolean isInterrupted()`
  restituisce il valore corrente di interrupt status
- `static boolean interrupted()`
  restituisce il valore corrente di interrupt status e lo resetta mettendolo a false

Per invocare il metodo `isInterrupted()`, se la classe implementa l'interfaccia `Runnable`, è necessario utilizzare `Thread.currentThread().isInterrupted()`.

## Thread demone
Un thread demone è un thread che ha il solo scopo di servire gli altri thread.
La JVM termina solo quando ci sono solo thread demoni in esecuzione.
Per impostare un thread a demone è sufficiente richiamare il metodo `setDeamon(true)` prima di avviare il thread.

>[!bug] Un thread demone non deve mai accedere ad una risorsa persistente
>come ad esempio un file o un database, in quanto potrebbe terminare da un momento all'altro durante una operazione.
## ThreadGroup
Consente di raggruppare più thread e di conseguenza invocare metodi come `isDaemon()` o `interrupt()` su tutti i thread del gruppo contemporaneamente.
```
ThreadGroup group = new ThreadGroup("Group A");
Thread t1 = new Thread(group, new MyRunnable(),“t1");
Thread t2 = new Thread(group, new MyRunnable(),“t2");
Thread t3 = new Thread(group, new MyRunnable(),“t3");
```

Si può agire:
- su uno specifico gruppo
  `group.interrupt();`
- sul gruppo a cui appartiene il thread corrente
  `Thread.currentThread().getThreadGroup().interrupt();`
## Priorità di un thread
Java dà la possibilità di gestire la priorità della scelta del thread da eseguire.
C'è un problema: i livelli di priorità dei thread variano in base al sistema su cui stiamo eseguendo la JVM, in quanto i livelli di priorità sono mappati sui livelli di priorità della piattaforma ospitante.
È quindi fortemente sconsigliato agire sulla priorità dei thread in java.
# Codice deterministico
[...] <-- esercitazione 3
# Thread safety
Del codice può essere definito **thread safe** se si comporta correttamente anche quando viene utilizzato da più thread, indipendentemente dal loro scheduling o interleaving.
È importante che i vari thread possano avere accesso alle stesse informazioni condivise, ma che queste siano accessibili solo da un thread alla volta.

Ci sono tre modi per ottenere la thread-safety:
1. Non condividere dati
2. Fare in modo che i dati condivisi siano immutabili
3. Usare un'opportuna sincronizzazione per l'accesso a dati condivisi


Per garantire la **sincronizzazione** (problematica dell'ordinamento temporale delle operazioni) dobbiamo utilizzare dei **meccanismi di mutua esclusione**:
- operazioni atomiche
- semafori
- lock and condition
- monitor nativi

**Proprietà della mutua esclusione**
1. Un solo processo per volta può trovarsi nella sezione critica.
2. Il meccanismo non deve fare ipotesi sulla velocità dei processi.
3. Un processo che non si trovi in sezione critica non deve condizionare un altro processo dall’entrarvi.
4. Nessun processo può bloccarsi nella sezione critica
5. Un processo non deve accusare attesa illimitata per entrare nella sezione critica.

[[1. Gestione dei processi#race condition]]
## Operazioni atomiche
[[1. Gestione dei processi#Produttore consumatore]]
`java.util.concurrent.atomic`
Permette la creazioni di variabili le cui operazioni sono atomiche:
- `AtomicBoolean`
- `AtomicInteger`
- `AtomicIntegerArray`
- `AtomicLong`
- `AtomicLongArray`
Operazioni:
- `get()`
- `set(int val)`
- `addAndGet(int delta)` somma delta al valore precedente.

A basso livello una variabile atomica viene implementata tramite **compare and swap** (CAS):
confronta il contenuto di una locazione di memoria con un dato valore e, solo se sono uguali, modifica il contenuto di tale locazione con il nuovo valore tutto questo in maniera atomica.
Utilizza la classe `unsafe`, una classe interna che permette di accedere a locazioni di memoria in modo non sicuro, non è utilizzabile da programmatori. Tutto il contenuto del codice che segue viene tradotto in una operazione atomica:
```
public final int addAndGet(int delta) {
	for (;;) {
		int current = get();
		int next = current + delta;
		if (compareAndSet(current, next))
			return next;
	}
}
public final boolean compareAndSet(int expect, int update) {
	return unsafe.compareAndSwapInt(this, valueOffset, expect, update);
}
```
la prima cosa che fa è prendere il valore corrente, calcolo il next e poi verifico in maniera atomica se all'interno della variabile trovo il valore atteso (il valore corrente prelevato inizialmente) in caso positivo lo sostituisco con il next, in caso negativo ripeto il processo (tramite il `for(;;)`) finché non viene sostituito correttamente, in pratica se ho interleaving il valore che troviamo all'interno della variabile è diverso da quello salvato inizialmente non faccio nessuna operazione, altrimenti posso effettuare lo swap con il nuovo valore.

Empiricamente il `for()` che potrebbe sembrare infinito converge in un numero finito di tentativi (empiricamente).
## Semafori
[[1. Gestione dei processi#Semafori]]
`java.util.concurrent.Semaphore`
### Costruttori
- `semaphore(int n)`
  crea un semaforo con numero di permessi iniziale pari a $n$
- `semaphore(int n, boolean fair)`
  crea un semaforo con un numero di permessi iniziale pari a $n$, inoltre consente di gestire la fairness.

>[!important] Fairness
>se `fair` è `True` segue la coda FIFO per gestire i processi in attesa.
>Se impostata a `False` [...]

### Metodi
- `void acquire()`
  decrementa il semaforo (prendo un permesso)
- `void acquire(int p)`
- `void release()`
  incrementa il semaforo (cedo un permesso)
- `void release(int p)`
## Monitor
[[1. Gestione dei processi#Monitor]]
Il monitor è un concetto più astratto che consiste in una classe che racchiude variabili e metodi che modificano le variabili in modo atomico.
Le variabili del monitor possono essere utilizzate solo mediante i metodi di accesso e solo un thread alla volta può accedere al monitor.
Ad ogni istanza del monitor è associata una coda di thread.
### Lock and condition
La mutua esclusione all'interno del monitor avviene tramite un lucchetto (**lock**) inizialmente aperto.
Ogni metodo del monitor inizia con la chiusura del lucchetto tramite il metodo `lock()` e termina con l'apertura di esso tramite il metodo `unlock()`.

Un thread all'interno del monitor potrebbe avere la necessità di attendere che si verifichi una condizione. Java permette di implementare questo tramite l'uso di variabili **condition**, che consentono ad un thread di attendere all'interno del monitor.
Essenzialmente la variabile condition è una coda in cui i thread possono attendere che si verifichi una certa condizione.
La gestione delle variabili condition avviene tramite i seguenti metodi principali:
- `c.await()`
  sospende sempre il thread che la invoca attraverso 3 operazioni fondamentali:
	1. rilascia il lock
	2. si sposta nella coda associata a `c`
	3. sospende la propria esecuzione
- `c.signal()`
  risveglia un thread qualunque che si era sospeso sulla condition `c`. Se nessun processo è sospeso l'operazione di signal non ha effetto.
  Al risveglio il thread deve riacquisire il lock prima di poter continuare la sua esecuzione.
- `c.signalAll()`

Ogni istanza di Condition è collegata ad un determinato lock, infatti per la creazione dell'istanza si utilizzare il metodo `newCondition()` richiamato sul lock a cui dobbiamo associare la condition.

L’invocazione del metodo await deve essere racchiusa in un ciclo `while`. Perché:
- Un thread potrebbe essere risvegliato anche a seguito di uno spurious wakeup (cioè in assenza di una signal o `signalAll`) per ottimizzazioni interne del sistema operativo (ad esempio, migrazione di thread per bilanciamento del carico).
- Può risvegliarsi a seguito di una `signalAll` insieme ad altri thread, ma non è il suo turno.
- Si risveglia e la condizione è stata cambiata dal thread segnalante (problema della politica di Hansen sollevato da Hoare).
#### Politiche di risveglio
Supponiamo di avere un processo `P` che richiama `x.signal()` ed esista un processo sospeso già nella coda di `x`. Occorre evitare che `P` e `Q` siano attivi contemporaneamente all'interno del monitor:
- **Hansen**
  `Q` attende che `P` lasci il monitor.
- **Hoare**
  `P` attende che `Q` lasci il monitor.
Java implementa la soluzione di Hansen, ma il thread risvegliato `Q` deve riacquisire il lock concorrendo con gli altri thread.
#### Utilizzo
`java.util.concurrent.locks`
Per creare un monitor in java bisognerebbe implementare la classe `Lock`.
L'implementazione principale avviene tramite la classe `ReentrantLock`: un thread che possiede un lock può "rientrare" all'interno di un altro metodo che possiede lo stesso lock.
![[Programmazione concorrente-1778940725450.webp|center|450]]
#### Fairness
Utilizzando `ReentrantLock` possiamo decidere la politica da seguire per gestire la coda di ingresso nel monitor tramite un parametro al momento della creazione, che, se impostato a true, seguirà una coda FIFO:
```
// Lock NON equo (default, più veloce)
Lock nonFairLock = new ReentrantLock(); 

// Lock EQUO (politica FIFO garantita)
Lock fairLock = new ReentrantLock(true);Supponiamo di avere un processo ￼￼P￼￼ che richiama ￼￼x.signal()￼￼ ed esista un processo sospeso già nella coda di ￼￼x￼￼. Occorre evitare che ￼￼P￼￼ e ￼￼Q￼￼ siano attivi contemporaneamente all'interno del monitor:
￼- ￼￼Hansen￼￼
  ￼￼Q￼￼ attende che ￼￼P￼￼ lasci il monitor.
￼- ￼￼Hoare￼￼
  ￼￼P￼￼ attende che ￼￼Q￼￼ lasci il monitor.
Java implementa la soluzione di Hansen, ma il thread risvegliato ￼￼Q￼￼ deve riacquisire il lock concorrendo con gli altri thread.
```

Per quanto riguarda invece le coda delle condition devo definire una lista per gestire il Thread, ma comunque al risveglio del thread deve riacquisire il lock, aggiungendosi alla coda del lock, rispettando la sua politica.
## Monitor nativi
I monitor nativi consentono una più semplice implementazione dei monitor, ma conferiscono anche meno flessibilità di utilizzo.
# Problemi classici
>[!attention] In tutti i problemi è necessario evitare busy waiting
## Produttore-consumatore
Due tipi di thread, produttore e consumatore, che condividono un buffer a dimensione limitata.
- Il compito del produttore è quello di generare ciclicamente dei dati e metterli nel buffer, quello del consumatore di rimuovere ciclicamente i dati dal buffer, uno alla volta.
- Bisogna garantire che il produttore non inserisca dati nel buffer quando questo è pieno e che il consumatore non li prelevi quando questo è vuoto.

**Problematiche**:
- Accesso atomico: le variabili del buffer devono essere aggiornate in mutua esclusione.
- Sincronizzazione: i produttori ed i consumatori devono sincronizzare le operazioni di inserimento e rimozione.
È necessario garantire la correttezza dell’applicazione gestendo sia la mutua esclusione che la sincronizzazione dei thread nell’accesso ai dati condivisi.

**Come funziona**:
- `public abstract class Buffer`
  classe astratta che sarà la base per la classe di gestione del produttore consumatore
- `public class BufferSem/BufferLC extends Buffer`
  è l'implementazione della classe `Buffer`, contiene il buffer in cui il produttore inserirà e il consumatore preleverà, gestisce tutto tramite i metodi `put(int i)` e `get()`
- `public class Produttore/Consumatore implements Runnable`
  sono le classi dei thread, il loro funzionamento si limita a richiamare `put()` e `get()`

[...] <-- aggiungi produttore - consumatore con priorità FIFO
## Lettori-scrittori
Si tratta di un classico esempio di problema di concorrenza.
Consiste in:
- Una memoria condivisa.
- Un insieme di **scrittori**: quando uno scrittore ottiene l'accesso alla memoria condivisa nessun altro può leggervi o scrivervi.
- Un insieme di **lettori**: più lettori possono accedere alla memoria condivisa contemporaneamente.

La lettura e la scrittura veri e propri avvengono nel codice del chiamante (thread), non nella classe memoria, che gestisce solo la **sincronizzazione**.

**Come funziona**:
- `public abstract class MemoriaCondivisa`
- `public class MemoriaCondivisaSem/MemoriaCondivisaLC implements MemoriaCondivisa`
  è composta da 4 metodi fondamentali:
	- `inizioScrittura()`
	  deve garantire la mutua esclusione per la scrittura, se non è presente nessuno all'interno della zona critica ne prende il controllo
	- `fineScrittura()`
	  termina la mutua esclusione della zona critica
	- `inizioLettura()`
	  se non sono presenti lettori all'interno della zona critica ne acquisisce il permesso, in modo da non fare entrare nessuno scrittore, altrimenti non fa nulla
	- `fineLettura()`
	  se sono rimasti altri lettori nella zona critica non fa nulla, altrimenti apre l'accesso anche per gli scrittori
- `public class Lettore/Scrittore implements Runnable`
  Queste classi eseguono il loro codice come segue:
  richiamano i metodi di inizio, eseguono la loro lettura/scrittura, richiamano i metodi di fine, eseguono eventualmente altro codice che non necessita di mutua esclusione.
## Cinque filosofi
Ci sono cinque filosofi seduti ad un tavolo e ciascuno ha davanti un piatto di riso (che supponiamo inesauribile).
Tra un piatto ed un altro però non vi sono due bastoncini (o bacchette) come sarebbe opportuno, ma solo uno, per un totale di soli 5 bastoncini, contro i 10 che sarebbero richiesti per permettere a tutti di mangiare contemporaneamente.
Ciascun filosofo per tutta la sua vita non fa altro che tre cose:
- pensare quando è sazio
- mettersi in attesa di mangiare quando ha fame
- mangiare quando entra in possesso di entrambe le bacchette necessarie (destra e sinistra)
>[!multi-column]
>
>>[!blank]
>>Quando decide di mangiare, prima di poterlo fare, ha bisogno di prendere in mano due bacchette. Un filosofo può prendere solo le due bacchette che stanno alla sua destra e alla sua sinistra, una per volta, e solo se sono libere, ovvero non può sottrarre la risorsa bacchetta ad un altro filosofo che l'ha già acquisita.
>>Finché non riesce a prendere le bacchette, il filosofo deve aspettare affamato. Quando invece, appena dopo aver mangiato, è sazio, posa le bacchette al loro posto e si mette a pensare per un certo tempo.
>
>>[!blank]
>>![[Programmazione concorrente-1778492349230.webp|center|300]]

La soluzione base del problema dei 5 filosofi può creare **deadlock**. Per risolvere possiamo implementare 3 soluzioni diverse:
- possono esserci al massimo 4 filosofi nel tavolo contemporaneamente
- si implementa un mutex per rendere la raccolta delle bacchette atomica
- uno dei filosofi prende le bacchette in ordine opposto, rompendo la catena

## Barbiere addormentato
Un barbiere ha una poltrona da lavoro e una sala d'attesa con un numero limitato di posti (n sedie).
Se nessun cliente è presente il barbiere si addormenta.
Ogni cliente quando arriva controlla cosa sta facendo il barbiere:
- Se sta dormendo, lo sveglia e si siede sulla poltrona per essere servito.
- Se sta servendo un altro cliente va ad aspettare nella sala d'attesa; se questa è piena, va via.





---
c'è differenza tra output deterministico ed esecuzione deterministica
fairness = FIFO rispetto all'ordine di acquisizione dei thread
per eseguire i thread in ordine possiamo usare un array di semafori


---

# Prova di esame
1. problema di teoria (4pt)
2. domanda di teoria argomentativo (4pt)
3. domanda o problema sui thread (4pt)
4. problema con semafori e monitori (18pt)

durata 2 ore
si può portare calcolatrice -> x fare calcoli dello scheduling
## Prova 1
### Scheduling della CPU
• **Algoritmi**: FCFS, SJF (Pre., Non Pre.), Priorità (Pre., Non Pre.), RR
• **Output**: si chiede di calcolare
- tempo di attesa: tempo che processo passa in ready queue
- tempo di completamento: differenza tra terminazione processo e tempo di entrata in ready queue
- tempo di risposta: tempo da quando processo creato a quando gli è stata assegnata per I volta CPU
#### FCFS
Il primo arrivato è il primo servito (gestito con coda FIFO)
#### SJF (Non-preemptive)
Associa ad ogni processo la lunghezza del prossimo CPU burst. Usa questi tempi per schedulare il processo con la lunghezza minima. I processi sono ordinati nella ready queue in base al loro prossimo CPU burst in ordine crescente.
**Non-preemptive** – il processo assegnato alla CPU (cioè in running) non può essere sospeso prima di completare il suo CPU burst.
Ordino i processi e scelgo quello col CPU burst più breve.
Ricordiamo che a livello di waiting time è ottimale
#### SJF (Preemptive)
preemptive – se arriva un nuovo processo nella ready queue con un CPUburst più breve del tempo rimanente per il processo corrente (cioè in running), viene servito. Questo schema è conosciuto come **Shortest-Remaining-Time-First** (SRTF).
Oltre a ordinarli, all'arrivo di ogni processo confrontiamo il remaining time del processo in corso con quello del processo arrivato.
*Problema*: penalizza processi di durata maggiore (starvation)
#### Priorità (Non-preemptive)
Una priorità (numero intero) è assegnata ad ogni processo. La CPU è assegnata al processo con più alta priorità.
#### Priorità (Preemptive)
>[!attention] se c'è ambiguità si va in ordine FIFO
#### Round-Robin
Richiede come parametro il *quanto di tempo* Q: l'inserimento nella coda segue un ordine FIFO. Si tiene conto del quanto di tempo rimanente quando avviene il cut-off
### Sostituzione delle pagine
• **Algoritmi**: 
- FIFO: sostituisco la pagina presente da più tempo in memoria
- LRU: sostituisco la pagina che non è stata usata per il periodo di tempo più lungo
- Ottimale: assumendo di conoscere tutta la successione di riferimenti in anticipo, sostituisco la pagina che non verrà usata per il periodo più lungo
>[!question]  Osservazioni:
> 1. Ottimale: al termine dalla sequenza nota riprende FIFO
> 2. per FIFO e LRU notiamo che il numero di page fault è **uguale**

• **Parametri**: Blocchi di memoria
• **Output**: Page fault: si verifica quando si tenta di accedere a file non contenuto in memoria
### Scheduling del disco
• **Algoritmi**: 
- FCFS
- SSTF: Seleziona la richiesta che comporta il minimo tempo di seek dalla posizione corrente della testina.
- SCAN: La testina parte da un estremo del disco e muovendosi fino all’altro estremo serve tutte le richieste di blocchi che si trovano lungo il percorso, quindi inverte la marcia e fa lo stesso nell’altra direzione
	*NB: nell'esempio si vede che la direzione era dettata dal verso di percorrenza precedente alle nuove richieste* <- fai callout
- LOOK: variante di SCAN -> testina viene spostata non fino alla fine del disco ma solo fino a che ci sono richieste in quella direzione.
- C-SCAN: La testina parte da un estremo del disco e muovendosi fino all’altro estremo serve tutte le richieste di blocchi che si trovano lungo il percorso, quindi ritorna all’altro estremo del disco (senza servire le richieste nello spostamento) per ripartire da lì.
	*Escluso il movimento per riportare la testina dall'inizio che ha un tempo di percorrenza ma lo trascuriamo*
- C-LOOK: Variante di C-SCAN. La testina viene spostata non fino alla fine del disco ma solo fino a che ci sono richieste in quella direzione.
• **Parametri**: posizione attuale (e/o precedente) della testina
• **Output**: Movimento totale della testina
### Deadlock
• **Algoritmi**: Grafo di assegnazione delle risorse -> ci permette di capire se si verifica o no deadlock
• **Parametri**: thread e risorse
• **Output**: Deadlock si/no -> può verificarsi solo se valgono le seguenti condizioni simultaneamente: mutua esclusione, possesso ed attesa, impossibilità di prelazione, attesa circolare.
### Allocazione dinamica della memoria
In ogni momento è presente un insieme di buchi di diverse dimensioni sparsi per la memoria: a partire da una richiesta di allocazione di dimensione $n$ all'interno di un insieme di buchi utilizziamo
• **Algoritmi**: 
- First-fit: viene allocato il primo buco grande abbastanza
- Best-fit: viene allocato il buco più piccolo in grado di contenere il processo; è necessario scandire tutta la lista dei buchi (se non è ordinata) --> si produce il più piccolo buco residuo
- Worst-fit: viene allocato il buco più grande; è ancora necessario ricercare in tutta la lista --> si produce il più grande buco residuo
• **Parametri**: Processi e partizioni libere di memoria
• **Output**: 
	Frammentazione:
	- Esterna: spazio totale disponibile per soddisfare richieste non contiguo
	- Interna: spazio interno a partizione non utilizzata
Esempio: Si continua dalla partizione in cui ci si trova all'inizio
### Fork dei processi
• **Parametri**: Codice con `fork` dei processi -> dopo l’esecuzione della `fork()` vi sono due processi diversi che eseguono copie dello stesso programma. Il valore di pid per il processo figlio è 0, mentre per il genitore è un intero maggiore di 0
• **Output**: Albero dei processi
(esempio): 
1. chi tra padre e figlio esegue istruzione 1 nel codice: a meno di un errore entrambi nel proprio contesto di esecuzione eseguono x++;
2. se scheduler fa eseguire prima figlio e poi padre output: figlio -> 10  padre -> 1
## Prova 2
Si descriva brevemente:
- il funzionamento della seguente applicazione Java (non traduzione ma interpretazione)
- l’output (ciò che è stampato a schermo) che può produrre (indicare se l’output è deterministico o meno) -> potrebbe anche non produrre
- se l’applicazione termina