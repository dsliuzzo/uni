#programmazione_orientata_agli_oggetti 
#appunti 
Java è un linguaggio di programmazione che deriva da [[C]] ed è caratterizzato da:
- [[#object oriented]]
- [[C|fortemente tipizzato]]
- [[Concetti di base#Interpreti|interpretato]], più nello specifico la sua esecuzione passa per prima cosa da un compilatore che crea il bytecode (javac) e successivamente dall'interprete vero e proprio (java)
- case sensitive

L'esecuzione di java può avvenire direttamente da riga di comando tramite `jshell`, che interpreta direttamente ciò che viene scritto sul terminale.

# Variabili
In java le variabili riprendono molto la sintassi di [[C#Tipi di variabili|C]], con l'importante differenza che in Java la dichiarazione della variabile coincide con l'inizializzazione di essa:
```
int x = 9;
```

%% è importante ricordare la definizione di [[C#Variabili|letterale]]%%

La conversione di un letterale per essere immesso ad una variabile può avvenire anche a partire da numeri esadecimali o binari tramite la seguente notazione:
```
int a = 0xfff32
int b = 0b100010010
```
## Tipi
I tipi definiscono un oggetto come:
- spazio occupato in memoria
- insieme di definizione
- operazioni possibili
### interi
Se in C la dimensione della variabili dipende anche dalla piattaforma su cui viene compilato, su Java questa è costante. Inoltre tutti gli interi sono signed

| tipo  | spazio in memoria |
| ----- | ----------------- |
| byte  | 8 bit             |
| sharp | 16 bit            |
| int   | 32 bit            |
| long  | 64 bit            |
### numeri in virgola mobile
Anche questi sono tutti signed

| tipo   | spazio in memoria |
| ------ | ----------------- |
| float  | 32 bit            |
| double | 64 bit            |

>[!bug] ==
>Utilizzando l'equal su numeri in virgola mobile possiamo spesso incorrere in errori dovuti al confronto tra numeri che vengono arrotondati.
>Per risolvere questo problema possiamo utilizzare una tolleranza e invece di utilizzare l'`==` usiamo `Math.abs(a-b)<EPSILON` con `a` e `b` le variabili da confrontare e `EPSILON` la costante di tolleranza precedentemente definita
>`final double EPSILON = 1e-9`

L'utilizzo di `e` è una abbreviazione della notazione scientifica
`1e-9` $\equiv 1*10^{-9}$
### Booleani
Per utilizzare i booleani in Java non è necessario ridefinire un comando per utilizzare delle variabili normali come avremmo fatto in [[C]], ma è sufficiente utilizzare la keyword `boolean`

### Char
Per i caratteri è possibile utilizzare la keyword `char` e vengono delimitati da '' proprio come in C.
### Stringhe
Le stringhe contrariamente a quanto avviene in [[C#Stringhe come array di char|C]] non sono array di char, ma sono degli oggetti più complessi con una loro sintassi e specifiche operazioni.
Per la loro dichiarazione può essere usata la keyword `String` e vengono delimitati da "".

Le stringhe in java sono oggetti immutabili, di conseguenza ogni manipolazione che avviene su di esse creerà un nuovo oggetto nell'heap con i nuovi valori e cambierà il puntatore nello stack.
#### StringBuilder
In Java è presente una particolare classe chiamata `StringBuilder` che ci permette di creare stringhe in modo molto più efficiente, permettendo la modifica anche dopo essere creata, essendo trattato come un array dinamico di char.
Il costruttore inizializzerà una istanza di `StringBuilder` e può prendere come parametri una stringa che verrà già inserita all'interno dell'oggetto, o un intero che rappresenterà la sua capacità.
I principali metodi utilizzati sono:
- `StringBuilder append()`, che aggiunge i parametri passati alla stringa
- `StringBuilder delete(int start, int end)`, rimuove caratteri dalla sottosequenza
- `int indexOf(String str)`, restituisce l'indice della stringa passata come parametro
- `int lenght()`,restituisce la lunghezza della stringa
- `String toString()`, trasforma lo StringBuilder in una normale stringa
### Var
In Java abbiamo inoltre la possibilità di non specificare il tipo di una variabile tramite l'uso della keyword `var`. Questa viene utilizzata principalmente nella definizione di variabili locali, che hanno vita solo all'interno di un metodo, ma non possono essere utilizzare per definire metodi o parametri, in quel caso dobbiamo stabilire a priori il tipo della variabile.
Se var viene utilizzato java assegnerà alla variabile il tipo del letterale che stiamo assegnando alla variabile. Nel caso in cui il letterale è un [[#interi]]/[[#numeri in virgola mobile]] Java assegnerà di default int/double;
Possiamo però forzare la tipizzazione utilizzando la sintassi seguente:
```
var x = 4l
```
in questo modo per esempio la variabile x avrà come tipo long, nonostante di default avrebbe dovuto avere int. Analogamente possiamo usare `var x=3.2f` per i float.
### Costanti
Nonostante non siano variabili in Java possiamo anche definire delle costanti, come avveniva in C tramite `const`, adesso utilizziamo la keyword `final`
### Puntatori e array
Anche in Java una variabile fondamentale sono i [[C#Puntatori|puntatori]], che differiscono da c per la loro allocazione, mentre in C utilizzando [[C#Array dinamici|malloc]]  la memoria riservata non viene inizializzata e quindi continuerà a contenere i valori precedentemente occupati nell'heap, in Java l'inizializzazione di un puntatore coincide con lo relativo azzeramento (in base al tipo di puntatore) dello spazio nell'heap, esso infatti occuperà la relativa dimensione della singola cella moltiplicata per il numero di elementi dell'array, più una ulteriore cella di tipo int che sarà la lunghezza dell'array.
Nello stack lo spazio occupato dai puntatori è sempre di 64 bit.
Per inizializzare un puntatore utilizziamo la keyword `new` seguita dal tipo di variabili che conterrà lo spazio nell'heap e nelle parentesi quadre il numero di celle di memoria da riservare.
Ne segue direttamente la creazione di [[C#Array|array]], che saranno sempre allocati nell'heap tramite puntatore e definiti dalla sintassi seguente:
```
int []a = {1,2,3}
```
che non è altro che una semplificazione della scrittura analoga:
```
int []a = new int[3];
a[0] = 1;
a[1] = 2;
a[2] = 3;
```
Nell'heap i valori dell'array saranno seguiti dalla sua lunghezza, di tipo `final`, che quindi non può essere modificata:
![[Pasted image 20250922232242.png|center|600]]
>[!bug] out of bound
>Inoltre una importante differenza con C è che le locazioni di memoria accessibili tramite [] sono strettamente controllate, in C se inseriamo un indice che va oltre i limiti dell'array accediamo a porzioni di memoria dello stack in java invece riceviamo un errore di out of bound.

La dichiarazione e assegnazione segue la sintassi precedentemente descritta, ma se volessi solo cambiare l'intero array posso evitare di ridefinire la variabile, così facendo nell'heap verrà creato un nuovo array e il puntatore verrà assegnato alla variabile nello stack precedentemente creata:
```
a = new double[]{8.8, 9.1, 7.5}
```

>[!bug] Memory leaking
>In java contrariamente a C la gestione della memoria dell'heap non è completamente manuale, infatti esiste un [[Python#Variabili|garbage collector]] che reclama le aree di memoria che non sono referenziate.

Avendo più variabili la copia di una sull'altra risulta in un [[Python#Aliasing|aliasing]] in quanto viene copiato il puntatore all'array e non viene copiato su una nuova locazione:
```
int[] a = new int[]{1,2,3}
int[] b = a
```
`a` e `b` saranno due puntatori alla stessa locazione, le modifiche apportate all'array saranno condivise.

### Matrici
In java non esistono delle vere e proprie matrici. In C le [[C#Tensori|matrici]] sono configurabili come locazioni di vettori consecutivi, in Java invece si può ottenere un risultato simile tramite un array di array tramite:
```
int[][] m = {{0,6},{1,2}}
```
ma questa notazione è imperfetta in quanto basta utilizzare:
```
m[1] = new int[]{1,2,3,4,5}
```
per ottenere un oggetto che non è più una matrice.
Ovviamente la length seguirà la seguente formula:
```
m.length = 2
m[0].length = 2
m[1].length = 5
```
## Casting
Il [[C#Conversione di tipo type_casting|casting]] in Java non è implicito, ma può avvenire con una sintassi simile a quella di [[Python#Type casting esplicito|python]] esplicitamente (utilizzando `(int)`), questo solo se passiamo da una variabile che occupa meno ad una che occupa di più, per evitare errori di troncamento.
*es.*

| int -> long | ✅   |
| ----------- | --- |
| long -> int | ❌   |

## Operazioni
Oltre alle normali operazioni algebriche, essendo presente anche il tipo booleano, in Java possiamo usufruire di operazioni logiche, che si suddividono in:
- **valutazioni complete**, nonostante il risultato sia stato stabilito già da parte del confronto precedente il sistema continuerà comunque a valutare il confronto di tutta l'espressione;
- **valutazioni cortocircuitate**, in caso ci siano più confronti java fermerà il confronto non appena capisce che il risultato è false.

| operazione | complete        | circuitate        |
| ---------- | --------------- | ----------------- |
| and        | `&`             | `&&`              |
| or         | <code>\|</code> | <code>\|\|</code> |
| not        | `!`             |                   |
| xor        | `^`             |                   |

*es.*
```
boolean a = false;
boolean b = true;
boolean c = true;

a & b & c; %in questo caso la valutazione continuerà anche tra il risultato di a&b e c

a && b && c; %il sistema fermerà il confronto ad a && b, in quanto basta quella parte del confronto per capire che il risultato totale è false
```
Essendo l'and una operazione binaria le due scritture sono equivalenti, ma otteniamo una minore potenza di calcolo utilizzando la versione cortocircuitata dell'operatore.
Questa può sembrare una ottimizzazione di poco conto, ma prendendo per esempio il caso in cui il confronto avviene su interi metodi piuttosto che semplici variabili booleane il sistema non procederà alla chiamata dei metodi rimanenti una volta che riconosce che il risultato totale sia sicuramente false.
La notazione cortocircuitata `&&` può essere anche utilizzata per controlli preventivi:
```
if(m[0] != null && m[0].length == 2)
```
In questo caso per esempio la seconda condizione non può essere valutata se la variabile è `null`, di conseguenza la valutazione semplice darebbe errore.


In java abbiamo anche la possibilità di operare delle operazione di [[1. Reti logiche#Registri a scorrimento|shift]] tramite i comandi `<<` e `>>` rispettivamente shift sinistro e shift destro. Entrambi con questa notazione manterranno il segno del numero originale, mentre utilizzando `<<<` e `>>>` il segno verrà ignorato e l'intero numero in bit verrà shiftato.

### Manipolazione bitwise
Gli operatori booleani possono anche essere utilizzati su altri tipi di variabili, ciò che otteniamo è un confronto bit a bit delle due variabili confrontate.

# Algoritmi
Fino ad ora abbiamo visto algoritmi di tipo sequenziale.
## Selezione
Consiste nel comando `if` che ci permette di applicare condizioni ad un blocco di codice.
La sintassi è molto simile a quella di C, con l'unica differenza nelle condizioni:
non possono più essere utilizzare variabili da sole verificare un valore booleano di true o false, ma bisogna in ogni caso specificare una condizione.
prendiamo per esempio `int a = 2`

| `if(a)`    | ❌   |
| ---------- | --- |
| `if(a!=0)` | ✅   |
Ovviamente questo non conta se la variabile è già un booleano.
## Iterazione
Anche l'operazione `for` ha una sintassi molto simile. ogni parametro è opzionale:
- inizializzazione
- condizione
- incremento
```
int[] a = {1,2,3,4,5};
for(int i = 0; i<a.length; i++){
	a[i] += 2;
}
```
ovviamente la variabile `i` è locale ed avrà vita solo all'interno del for, a meno che non venga dichiarata prima, in quel caso non va usato `int` nella fase di inizializzazione dei parametri del for.

Anche `while` e `do-while` non differiscono da C.
# Metodi
Vediamo un esempio di metodo per la somma di due vettori
```
int[] p1 = {0,0};
int[] p2 = {1,1};
static int[] sum(int[] p1, int[] p2){
	int[] res = new int[p1.length]
	for(int i = 0; i < p1.length; i++){
		res[i] = p1[i] + p2[i];
	}
	return res;
}
```
Nella creazione di un metodo il passaggio dei dati è per riferimento (viene copiato solo il puntatore [[Python#Aliasing|aliasing]]).
In questo caso questo non è il metodo migliore per affrontare questo tipo di problemi, sarebbe meglio infatti definire un [[#Oggetti|oggetto]] apposito per i punti in modo tale da evitare errori all'interno del metodo.
In questo modo possiamo ridefinire il metodo come:
```
static Punto sum(Punto p1, Punto p2){
	Punto res = new Punto();
	res.x = p1.x + p2.x;
	res.y = p1.y + p2.y;
	return res;
}
```

# Principi della programmazione ad oggetti
## Incapsulamento
L'aggiornamento degli oggetti potrebbe risultare complicato se essi sono stati definiti poco correttamente inizialmente.
Per esempio se volessimo modificare la classe Punto utilizzata fino ad ora come esempio che è definito da una $x$ e una $y$, per utilizzarla come modulo e fase dovrei modificare tutti i metodi all'interno della classe. Se avessi utilizzato sin dall'inizio i metodi getter e setter invece di avere un accesso diretto alle variabili di istanza basterebbe cambiare getter e setter, per far funzionare correttamente tutto il resto del codice.
```
public Punto(double x, double y){
	mod = sqrt(x*x+y*y);
	phase = atan2(y, x);
}
public Punto(){}

public getX(){
	return mod*cos(phase);
}
public getY(){
	return mod*sin(phase);
}
```

>[!info] Encapsulation
>encapsulation is simply combining data and behavior in one package and hiding the implementation details from the users of the object.

Un esempio di limitazione del non usare l'incapsulamento è la variabile `length` degli array, infatti richiamare la lunghezza di un array tramite `a.length` ci fa accedere direttamente alla variabile di istanza che contiene il dato richiesto, ma un successivo aggiornamento della classe array romperebbe tutti i metodi costruiti utilizzando questa sintassi. Se invece fosse stato definito un metodo apposito la classe array sarebbe potuta essere aggiornata senza creare nessun tipo di problema.
## Ereditarietà
Nella creazione di classi nella programmazione a oggetti abbiamo la possibilità di creare delle sottoclassi, in modo da:
- riutilizzare il codice comune alle sottoclassi.
- [[#Polimorfismo]]
- organizzare gerarchicamente il codice

Per definire una ereditarietà nella signature della classe figlia dobbiamo aggiungere:
- `extends`, che permetterà di ereditare codice, variabili e metodi concreti
- `imlpements`, che permetterà di ereditare la firma dei [[#Astrazione|metodi astratti]]

[[#Principio di Liskov (sostituibilità del tipo)]]
### La classe object
`public class C` è sottointeso `public class C extends Object{}`
In java qualsiasi classe andiamo a definire sarà una classe figlia di `Object`, ereditando così tutti i suoi metodi di base. Prendiamo per esempio `toString`, è un metodo che già esiste nella classe `Object`, per questo nelle classi andiamo a sovrascrivere questo metodo preesistente.
Per ridefinire metodi creati inizialmente in una classe genitore utilizziamo `@Override`.
Il metodo che lo succede è già definito/astratto e viene ridefinito nella classe figlia. `@Override` può anche essere omesso e sarà sottointeso, ma serve come programmatore per garantire che esista il metodo che stiamo sovrascrivendo: se non esiste il metodo che vogliamo sovrascrivere darà errore prima della compilazione. L'override non viene usato solo per l'interfaccia, ma anche per l'ineritance.

### Ordine di invocazione dei costruttori
per garantire la consistenza java pretende che l'ordine di inizializzazione dei costruttori sia dalla più generica alla più specifica di conseguenza la prima istruzione del costrutto è l'invocazione alla superclasse.
Viene infatti sottointeso il comando `super()`, che invoca il costruttore della superclasse. Senza nessun argomento `super()` non passerà nessun argomento al costruttore della superclasse, ma così facendo se è stato rimosso il costruttore di default della superclasse riceverò un errore.
>[!important] `super.` può essere utilizzato per invocare altri metodi della classe genitore

Se invece passo degli argomenti saranno inoltrati alla superclasse.
Nei record di attivazione si parte dal più specifico fino al costruttore di object che si inizializzerà, esegue il suo codice e poi si distrugge, passando alla sottoclasse, fino ad arrivare al record di attivazione della classe che ho effettivamente richiamato.
Questo perché prima di accedere ad un oggetto java deve garantire che esso sia stato costruito, in quanto la sottoclasse può avere accesso ai metodi della superclasse, ma se essa non è inizializzata darà `nullPointerException()`.

stack:

| Object      |
| ----------- |
| Superclasse |
| Derivata    |
Fino alla versione 25 di java `super()` deve essere la prima istruzione del costruttore, per rispettare l'ordine di **invocazione dei costruttori**.
Dalla versione 25 in poi è possibile definire altri metodi prima del super, ma java non ti permette di accedere ai metodi della superclasse sempre per evitare errori detti prima.

Inoltre la keyword `this()` usata come metodo e non come pronome richiamerà il costruttore della superclasse.

Anche la keyword `super` ha un altro utilizzo, se usata come pronome `super.[...]` ci permette di utilizzare metodi della superclasse anche se abbiamo ridefinito il metodo richiamato nella sottoclasse (altrimenti si creerebbe ambiguità nelle signature dei metodi).
## Astrazione
L'**astrazione** è uno degli elementi fondamentali da capire nella programmazione ad oggetti.
Essa consiste nel concetto di mostrare solo gli elementi essenziali, come la signature di un metodo e il suo funzionamento, all'utente e nascondere il modo in cui avviene quanto descritto.
È grazie a questa proprietà che in java possiamo definire metodi semplici da **implementare**, utilizzare senza preoccuparsi di come essi funzionino, e **aggiornare**, non dovendo cambiare il metodo in ciascun suo utilizzo ma solo nella sua definizione pratica.
In java questo avviene tramite **classi astratte** e **interfacce**.
### Classi astratte
Le classi astratte sono delle classi che non contengono le istruzioni per creare nuovi oggetti, ma solo metodi concreti e astratti, che possono essere quindi utilizzati su più tipi di oggetti.
Non posso quindi istanziare nuovi oggetti con una classe di questo tipo.
### Interfacce
Le interfacce in Java sono la massima espressione dell'astrattismo. Esse infatti contengono solo le signature dei metodi che tutte le classi figlie che implementano l'interfaccia dovranno ridefinire. Tutti i metodi definiti all'interno dell'interfaccia sono sottointesi come pubblici (`public`) e astratti  (`abstract`) , non contengono nessun tipo di implementazione.

L'interfaccia può essere composta dai seguenti elementi:
- metodi pubblici astratti (le classi sono obbligate a implementarli)
- metodi pubblici concreti (utilizzando `default`, la classe può utilizzare questo o come può ridefinirla - l'override non è obbligatorio)
- campi statici final (definendoli solo con es. `double EPS=1e-10;` $\equiv$ `public static final EPS=1e-10;`)
- metodi statici

Una classe può implementare più interfacce
`public class C implements (I1,I2,I3)`
`C` dovrà implementare tutte le classi astratte di tutte le interfacce. Se più metodi hanno la stessa signature vanno ridefinite ugualmente. Possono avere la stessa signature, ma non lo stesso tipo di ritorno.

Una interfaccia può estendere altre interfacce. Implementando una interfaccia bisogna fare attenzione non solo ai metodi astratti che essa non implementa di default, ma anche quelli che non implementa l'interfaccia che estende.
## Polimorfismo
L'ereditarietà porta con se un'altra proprietà fondamentale della programmazione ad oggetti: il **polimorfismo**. Due oggetti che sono di base diversi infatti possono essere trattati allo stesso modo (effettuando confronti, casting, etc.) se essi sono eredi di un tipo in comune. 

Gli oggetti istanziati di un tipo conforme all'interfaccia (definito da una classe che implementa l'interfaccia) sarà [[#Polimorfismo|polimorfo]] e sarà utilizzabile come gli altri tipi conformi all'interfaccia.

*Esempio di utilizzo*:
- Point2D (interfaccia)
	- cartesianPoint2D
	- polarPoint2D
Point2D non va ricompilata, funzionerà comunque anche se andremo a modificare solo le classi figlie.
*es.* il metodo distance è identico nelle due sottoclassi, va contro il concetto del codice comune in un solo punto per evitare di correggere errori solo in una delle due classi
- conviene mantenere il codice comune in un solo punto
-> nell'interfaccia non posso implementare metodi concreti
anche se questo metodo non ci sarebbe nulla di male, non dipende dalle variabili di istanza, ma solo da variabili locali perché utilizza `getX()`/`getY()` 
```
default double distance(Point2d p){
	double dx = getx()-p.getX();
	double dy = getY()-p.getY();
	return sqrt(dx*dx+dy*dy);
}
```
Qui possiamo capire l'importanza dell'[[#Incapsulamento|incapsulation]].

Grazie al polimorfismo possiamo capire il funzionamento di alcuni metodi definiti dalla classe [[#La classe object|Object]], come per esempio l'`equals` che per oggetti generici è definito come un confronto tra locazioni di memoria, andrà infatti ridefinito per un suo efficace funzionamento.

![[Pasted image 20251014220758.png]]
### Principio di Liskov (sostituibilità del tipo)
Il Principio di Sostituzione di Liskov (LSP) stabilisce che le sottoclassi devono poter sostituire le loro classi base senza alterare la correttezza del programma

Se `s` è un sottotipo di `t` in tutti i punti in cui richiamo `t` ci posso mettere `s` senza alterare il funzionamento del sistema.

>[!bug] Inheritance
>In questi casi l'inheritance può causare errori se non viene garantita la consistenza del dato:
>esempio di rettangolo usato come quadrato: dipende da come definisco la superclasse

## Dynamic binding
In [[C]] il legame è statico, traducendo in assembly la chiamata a funzione abbiamo un salto vero e proprio.
Invece in java di default **il legame è dinamico**, la chiamata ad un metodo che viene definito all'interno dell'interfaccia non viene richiamato direttamente durante la compilazione, ma viene solo "preparato" dal compilatore (viene riservata la memoria necessaria al suo funzionamento, per questo l'interfaccia contiene solo la signature, con il tipo di ritorno e i parametri).
Successivamente in fase di esecuzione la Java Virtual Machine (JVM) richiama il metodo dal package.
Questo processo viene chiamato **compartismo degli oggetti**.
Ancora una volta diventa fondamentale l'utilizzo dell'[[#Incapsulamento|incapsulation]] che ci permette di non dipendere dalle variabili di istanza e quindi definire metodi che utilizzano getter e setter definendo il loro funzionamento solo successivamente.
# Classi e oggetti
Per definire un nuovo oggetto ([[#Tipi]]) possiamo utilizzare la keyword `class`, che definirà una classe, una serie di regole ("stampino") che ci permetterà di creare nuovi oggetti.
La differenza con le [[C#Struct|struct]] di C è che le struct contengono solamente tipi primitivi, mentre la classe può essere definita come contenitore di oggetti di tutti tipi, da metodi ad altre classi.
```
class Punto{
	private double x;
	private double y;
}
```
con questa notazione creiamo una nuova classe che definisce l'oggetto "Punto" (è buona norma utilizzare la lettera maiuscola per il nome della classe); esso avrà due **variabili di istanza** $x$ e $y$ di tipo double, che verranno inizializzate al loro valore di default nel momento della creazione di un nuovo oggetto di tipo Punto:
```
Punto p1 = new Punto();
```
in questo modo creo una nuova istanza di Punto, che chiamerò `p1`

>[!exclamation] Importante
>In java lo stack può contenere solo tipi di base e puntatori, nella creazione di una istanza di un tipo definito come classe ciò che avviene in realtà è che creiamo un nuovo puntatore nello stack che punta ad una locazione dell'heap contenente la nostra istanza dell'oggetto vero e proprio, in cui verranno riservati spazi agli attributi che definiscono l'oggetto

La modifica degli attributi del nuovo oggetto avverrà tramite la seguente sintassi ([[C#Dot notation|dot notation]]):
```
p.x = 9
```

La creazione di una nuova istanza di Punto allocherà nuova memoria nell'heap con attributi che hanno lo stesso nome, ma in locazioni diverse
```
Punto p2 = new Punto();
```
![[Pasted image 20250923222654.png|center|300]]
Oltre alle variabili di istanza posso anche assegnare delle **variabili di classe**, delle variabili che saranno comuni a tutte le istanze della classe che sto definendo, tramite la keyword `static`:
```
public static y;
public int x;
```
in questo modo $y$ sarà una variabile di classe, mentre x sarà una variabile di istanza.

## Specificatori di visibilità
All'interno di una classe possiamo definire la visibilità degli elementi che compongono l'oggetto:
- `private`, si può avere accesso a quell'elemento solo all'interno della classe
- ` `, non mettendo nulla otteniamo una **visibilità privata di pacchetto**, sarà visibile a tutti gli elementi del pacchetto
- `protected`, una variabile di istanza è visibile alle sottoclassi (include package)
- `public`, chiunque può avere accesso all'elemento che lo segue

Normalmente definiamo come `private` le variabili di istanza per motivi di sicurezza
>[!bug] Problemi
>1. In questo modo dall'esterno non possiamo modificare i valori delle variabili di istanza
>2. Non possiamo visualizzarli

Per risolvere questi problemi definiamo dei metodi accessori (getter/setter):
## Getter / Setter
```
public double getX(){
	return x;
}
public double getY(){
	return y;
}
```

## Costruttore
Il costruttore è un particolare metodo che ha lo stesso nome della classe e non ha ritorno e serve per specificare il modo in cui verranno generate le nuove istanze dell'oggetto definito dalla classe.
```
public Punto(double x, double y){
	this.x = x;
	this.y = y;
}
```
Qui utilizziamo `this.x` per evitare ambiguità con la `x` passata come parametro.
Il costruttore di default azzera tutte le variabili di istanza ai loro valori di default, ma se sovrascritto con un nuovo costruttore per funzionare ugualmente (nel caso in cui non passiamo nessun parametro al nuovo costruttore) andrà ridefinito
```
public Punto(){}
```
Possiamo definire anche altri costruttori all'interno della stessa classe, vediamo per esempio il costruttore per copia
```
public Punto(Punto p){
	x = p.x;
	y = p.y;
}
```
la scelta di un costruttore piuttosto che un altro da parte del programma in java dipende unicamente dalla **firma del metodo** (numero, tipo e ordine dei parametri).
## Classi definite all'interno di altre classi
### Static nested class
Nel caso più semplice la classe è una normale classe, chiamata **Static nested class**, definita all'interno di altre classi:
```
public class Outer{
	[...]
	public static class Inner{
		[...]
	}
}
```
Può essere definito come `public` o `private`, nel secondo caso la classe `Inner` può essere utilizzata solo all'interno di `Outer`.
Se definita come `public` invece può essere richiamata come segue:
```
Outer.Inner o = new Outer.Inner([...]);
```
### Inner class
Senza utilizzare `static` il suo funzionamento si complica, parleremo di **Inner class**, il legame tra `Inner` e `Outer` infatti cambia: un oggetto di classe `Inner` non potrà vivere senza la classe `Outer` e per creare una istanza di `Inner` dovrò necessariamente utilizzare una istanza di `Outer` che farà da madre.
Data una istanza di `Outer` 
```
Outer m1 = new Outer([...]);
```
potremo creare una istanza di `Inner` come segue
```
Outer.Inner f11 = m1.new Inner([...])
```
### Classi locali
Definite all'interno di metodi ed esistono solo all'interno di questi ultimi.
### Classi anonime
Possiamo fare un override di un metodo esistente valido solo all'interno di un metodo.
## Record
I record sono delle classi che permettono di creare strutture complete scrivendo meno codice.
Esse infatti aggiungono automaticamente:
- costruttore
- equals
- hashCode
- getter, spesso richiamati solo con il nome del campo
```
new Rettangolo( 10, 20 ).base();
```
- toString
Non genera i setter, in quanto i record sono classi di oggetti **immutabili**.


>[!question] Controlli
>Possiamo comunque aggiungere dei controlli per la creazione di nuovi oggetti, nonostante i costruttori siano creati in automatico
>```public record Rettangolo (int base, int altezza) {
>	// controlli
>	public Rettangolo {
>		if (base <= 0 || altezza <= 0)
>			throw new IllegalArgumentException();
>	}
>	public int area () {
>		return base * altezza;
>	}
>}
>```

Inoltre possiamo anche aggiungere altri metodi alla classe
```
public record Rettangolo (int base, int altezza) {
	// controlli
	public Rettangolo {
		if (base <= 0 || altezza <= 0)
			throw new IllegalArgumentException();
	}
	public int area () {
		return base * altezza;
	}
	public int compareTo (Rettangolo r) {
		return altezza-r.altezza;
	}
}
```
## Enum
Gli enum in Java sono delle classi vere e proprie che associano ad un intero un altro valore.
Scrivendo per esempio 
```
public enum Stato {
	ATTIVO, INATTIVO;
}
```
in realtà java sta convertendo quanto scritto in una classe completa che estende `java.lang.Enum<Stato>`
# Exception
Le eccezioni sono degli eventi che interrompono il normale flusso di istruzioni. In Java sono delle vere e proprie classi che vengono richiamate quando insorgono degli errori. Per lanciare una eccezione utilizziamo la keyword `throw`, seguito dall'istanza del tipo di eccezione corrispondente e come parametro il messaggio da visualizzare in console al momento del riscontro dell'errore.

![[unnamed 1.png]]

per introdurre nuove eccezioni dobbiamo creare una sottoclasse di `runTimeException` o una sottoclasse di una qualsiasi sua sottoclasse.

Le Eccezioni possono essere gestite in vario modo:
1. se il tuo codice sa come gestire l'eccezione la gestisce e blocca l'eccezione (try catch)
2. sa gestirlo parzialmente, la gestisce parzialmente e manda avanti il programma (non ho capito)
3. propaga l'eccezione a chi ha chiamato il metodo perché non può essere gestita
4. trasformare una eccezione di basso livello in alto livello
## Eccezioni unchecked
Le eccezioni **unchecked** sono veri e propri bug che il compilatore ignora e interrompono il programma.
## Eccezioni checked
Le **checked** sono eccezioni che il compilatore ti obbliga a gestire, non sono bug del codice, ma fallimenti di risorse esterne che vanno previsti e gestiti.
Nella signature di metodi che prevedono delle checked exception scriveremo `throw Exception` con la exception corrispondente da gestire.
### Try, catch e finally
Try, catch e finally sono una serie di istruzioni che ci permettono di gestire le eccezioni:
- `try {}`,
  il primo dei tre è `try` che contiene le istruzioni di base che potrebbero lanciare una exception da gestire
- `catch (Exception e) {}`,
  esegue il codice se viene lancia l'exception `e`, questa parte di codice ha il compito di riparare ciò che ha lanciato la exception; possiamo avere anche più catch dopo lo stesso try per definire cosa fare in caso di diverse eccezioni
- `finally {}`,
  una porzione di codice che verrà eseguita comunque, che la eccezione sia stata lanciata o no.
```
for(int i = 0; i<MAX; i++) try {
	prova()
} catch (Exception e) {
	countEx++;
} finally {
	count++;
}
```

si possono anche innestare diversi `try`
*es.*
- se chiedo un nome all'utente faccio un catch se il nome non è disponibile
- se verifico se il file è corrotto non ho bisogno di riprovare
#### Try with reasourses
con il **try with resources** possiamo utilizzare oggetti di classi che implementano `AutoCloseable` all'interno di un try senza necessariamente preoccuparci di utilizzare il metodo `close()`, che viene richiamato automaticamente alla fine del try.
```
try(BufferedReader in = input) {
	do {
		line = input.readLine();
		if (line != null) {
			System.out.println(">" + line);
		}
	} while (line != null);
} catch (IOException ioe) {
	System.out.println("problemi");
	System.exit(1);
}
```
# Tipi generici
Nella creazione di nuove classi possiamo ricorrere nella necessità di creare tipi omogenei, mantenendo però la generalità di una dichiarazione di variabile come `Object` (non dover ridefinire la stessa classe/metodo per molteplici tipi) Java dà la possibilità di utilizzare dei **tipi generici**.
Prendiamo per esempio la seguente classe `Pair` che permette la creazione di coppie di oggetti omogenei, se avessimo definito gli oggetti come `Object` essi potrebbero non essere omogenei, ma grazie alla keyword `<T>` possiamo definire il tipo in fase di compilazione:
```
public class Pair <T>{
	private T first;
	private T second;
}
```
In questo modo dopo l'inizializzazione il tipo verrà vincolato.
Lo utilizzo come
```
Pair<String> pairs = new Pair<String>();
```
o anche
```
Pair<String> pairs = new Pair<>();
```
ma non
```
Pair<String> pairs = new Pair();
```

Dopo aver creato l'istanza come String al posto di `T`,non posso più inserire altri tipi all'interno di `pairs`.

Il parametro `T` viene sostituito a tempo di compilazione con il tipo passato come parametro; sarà sempre il compilatore a fare i controlli e i casting dovuti per adattare i metodi utilizzati al nuovo tipo.

Una elemento importante che possiamo aggiungere ai tipi generici sono dei **vincoli**, che ci permettono di utilizzare solo tipi che rispettano una determinata caratteristica, per esempio accettare solo tipi che estendono una determinata classe:
```
<E extends Comparable<E>>
```
Il compilatore quindi impedisce di invocare il metodo se non utilizziamo metodi che rispettano i bounds.
Possiamo anche inserire più vincoli.
A tempo di compilazione `<E>` viene sostituito da object normalmente, se mettiamo dei bound lo sostituisce con il primo tipo della lista. Gli rispettare gli altri bound vengono utilizzati dei cast per sostituirli nel caso in cui non vada bene il primo.
## Wildcards
>[!bug] Ereditarietà di tipo
>Nonostante la sostituzione del parametro è importante notare come non venga passata anche l'ereditarietà di tipo.
>Per esempio una lista definita come `LinkedList<CartesianPoint2D>` non è figlia di una lista definita come `LinkedList<Point2D>`, nonostante ci sia questo legame di parentela tra `CartesianPoint2D` e `Point2D`.
>Questo avviene perché si andrebbe contro il principio di **typesafety**, in quanto, se fosse permessa l'ereditarietà all'interno del metodo potrei utilizzare dei sottometodi definiti all'interno di uno solo dei figli, ma dobbiamo garantire che essi funzionino, cambiando la variabile con uno dei figli (anche a tempo di esecuzione) questo non potrebbe essere garantito.

Le **wildcard** permettono di evitare questo problema definendo solo dei limiti che i tipi utilizzati all'interno del metodo devono rispettare:
```
LinkedList<? extends Point2D> lp;
```
crea una linked list con un tipo sconosciuto, ma con il bound di essere di tipo Point2D o sottotipo di Point2D.

Nelle wildcards possiamo definire un **upper bound** tramite `extends` e un **lower bound** tramite `super`:
>[!important] P.E.C.S.
producer extends consumer super

```
public static <E> void addAll(Collection<? super E> c1, Collection<E> c2){
	if (c1==null || c2 == null) throw new IllegalArgumentException();
	for (E e: c2) {
		c1.add(e);
	}
}
```
### Upper bounds wildcards
```
LinkedList<? extends Point2D>
```
Per il suo funzionamento è richiesta una variabile che sia di tipo `Point2D` o uno dei suoi sottotipi.
Con questa wildcard posso utilizzare dati dalla linked list, ma non posso modificarli.
In questo modo il compilatore sa che gli elementi estratti dalla lista sono di tipo `Point2D`, che sia esso un `CartesianPoint2D` o un `PolarPoint2D` non fa differenza per l'uso che ne dobbiamo fare.
### Lower bounds wildcards
```
LinkedList<? super CartesianPoint2D>
```
Per il suo funzionamento è richiesta una variabile che sia `CartesianPoint2D` o un suo genitore.
Con questa wildcard posso modificare le variabili all'interno della linked list, ma non posso estrarli.
Risulta sicuro inserire nella lista un qualsiasi valore di tipo genitore di `CartesianPoint2D` in quanto è garantita la possibilità di casting (verso il basso), quindi la variabile verrà convertita il `CartesianPoint2D`.
### Unbounded wildcards
```
LinkedList<?>
```
Viene sottointeso l'extends a Object, per questo è read only.
# Classi wrapper
Non si possono creare degli iteratori dei primitivi, ma si possono creare per le classi definite [[#Classi wrap|wrapper]], che ci permettono di implementare il `range()` di python.
In java ogni tipo primitivo ha una sua controparte come oggetto, identificata dal nome del tipo della variabile con la prima lettera maiuscola (*es.* `int`$\to$`Integer`).
Utilizzare i primitivi come oggetti può essere utile nel loro utilizzo in determinati metodi.
>[!question] Osservazione
>- sono classi di oggetti immutabili

## metodi factory
La loro dichiarazione di base avviene come oggetti normali:
```
Integer i = new Integer(0);
```
anche se i costruttori di base sono deprecated, questo perché utilizzare i costruttori risulta meno efficiente: essendo immutabili conviene condividere la stessa locazione di memoria per valori identici nell'heap (manipolando l'oggetto verrebbe comunque creata una nuova istanza e verrà riallocato il puntatore senza influenza gli altri utilizzi dell'oggetto), ma usando i costruttori creando due oggetti con lo stesso valore verranno create due istanze dello stesso oggetto.
Per questo oggi vengono usati come costruttori dei metodi statici come `valueOf()` che tengono traccia dei valori già presenti in memoria (**metodi factory**)
```
Integer a = Integer.valueOf(0);
```
## auto boxing/unboxing
L'uso di questi oggetti è semplificato da Java grazie all'implementazione di sistemi di **auto boxing** e **auto unboxing** che rendono l'utilizzo di classi wrapper molto simile a normali primitivi:
```
Integer i = 0;
```
(dietro le quinte viene utilizzato `valueOf()`)
```
int x = i;
```
(in questo modo sto passando il valore di `i` ad una nuova variabile di nome x di tipo primitivo `int`)

>[!bug] Confronti
>Utilizzando `==` per confrontare due oggetti wrapper c'è il rischio di ricevere un `false` anche se i due valori sono identici se viene utilizzato il costruttore di base, in quanto `==` confronta l'indirizzo, che, se non viene utilizzato un metodo factory per la costruzione, è diverso.
>Per questo per confrontare due oggetti bisogna usare necessariamente il metodo `equals()`

# hashCode
`hashCode()` è un metodo che restituisce un intero che dipende dall'oggetto su cui è richiamato: due oggetti con lo stesso valore dovranno restituire lo stesso hashCode.

>[!bug] `a.hashCode() == b.hashCode()` $\nRightarrow$ `a.equals(b)`
>L'intero generato dall'hashCode non è univoco, quindi produrrà falsi positivi dal suo confronto, anche se:
>`a.hashCode() != b.hashCode()` $\implies$ `!a.equals(b)`

Il metodo `hashCode()` diventa fondamentale nell'ottimizzazione di sistemi che utilizzano collezioni basate su hash, come `HashMap` o `HashSet`

## metodo hash
Il metodo `Objects.hash()` della classe `Objects` prende come parametri più oggetti e genera un hashCode a partire da essi.
Questo metodo risulta molto utile per implementare il metodo `hashCode()` di oggetti più complessi composti da più attributi.
# Interfacce
>[!important] Interfaccia funzionale
>Avendo un solo metodo astratto la classe `Comparator` è detta **Interfaccia funzionale**.
>È buona norma utilizzare `@FunctionalInterface` nella definizione di una interfaccia funzionale prima di `public interface ...` per forzare il compilatore a richiedere un solo metodo all'interno della classe.
## Iterable e Iterator
```
Interface Iterable<T>
```
```
Interface Iterator<E>
```
`Iterable` è una interfaccia che ci permette consente di implementare correttamente una classe come iterabile all'interno di Java.
L'interfaccia `Iterable` fa tre cose fondamentali
1. costringe il programmatore ad implementare un metodo chiamato `forEach()`, che prende come parametro un oggetto, che verrà utilizzato all'interno del metodo, e una collezione su cui iterare; il metodo ripeterà l'azione contenuta in esso per ogni elemento della collezione.;
2. crea il metodo `Iterator<T>` che restituisce un iteratore;
3. implementa l'iterfaccia `Iterator`.

L'interfaccia `Iterator` rende necessaria l'implementazione di due metodi:
- `next()`, restituisce l'elemento successivo dell'iterazione, spostando l'iteratore tra l'elemento restituito e il successivo;
- `hasNext()`, restituisce un booleano, `true` se l'elemento successivo dell'iterazione esiste, `false` altrimenti
Invocando `next()` senza verificare la presenza di un elemento successivo utilizzando `hasNext()` potrebbe causare una `NoSuchElementException()`.

Inoltre fornisce una implementazione di default anche se è consigliato fare l'override di:
- `remove()`, rimuove l'elemento appena restituito da `next()`
Se non viene implementato il `remove()` di default lancerà l'eccezione `unsupportedOperationException`
### Enhanced for loop
uso del for come in python piuttosto che come in C
```
for(Pair p:pairs){
	System.out.println("<" + p.getFirst() + "," + p.getSecond() + ">");
}
```
### range
Grazie alle classi wrapper e gli iteratori possiamo creare un `FakeIterator` che ci permette di implementare il range di python.
Il `range()` è una funzione definita da 3 parametri
- start
- stop
- step
ma dobbiamo implementare dei tipi wrapper per farlo funzionare correttamente e poter iterare su un numero qualsiasi.
## Comparable
```
Interface Comparable<T>
```
Questa interfaccia implementa un solo metodo `compareTo()` che permette di definire l'ordinamento naturale di una classe, restituendo la differenza tra i due oggetti passati, uno su cui viene richiamato il metodo e uno come parametro. Va da se che se i due oggetti sono uguali esso restituirà 0.
```
int compareTo(T o)
```
Utilizziamo il [[#Tipi generici|tipo generico]] così da evitare confronti tra tipi diversi di oggetti
## Comparator
`Comparator` è una [[#Interfacce|interfaccia funzionale]] che viene utilizzata quando abbiamo la necessità di definire un criterio di ordinamento personalizzato.
L'unico metodo di questa interfaccia è `compare(T first, T second)` che permette di confrontare oggetti di cui non abbiamo accesso al codice sorgente della classe che li definisce in quanto i criteri di ordinamento da definire avvengono in un metodo che prende come parametro i due oggetti da confrontare e non viene richiamato su di essi.
# Collection framework
In java le strutture dati sono trattate come una libreria, completa delle principali classi e interfacce utilizzate dai programmatori. Essendo java un linguaggio di programmazione orientata agli oggetti l'implementazione anche in questo caso è divisa dall'interfaccia che implementiamo per utilizzare le classi.

![[1_2hgLstie4gxpXUUzgAkGgg.png]]

## Interfaccia List
```
Interface List<E>
```

| Tipo    | Metodo            | Descrizione                               |
| ------- | ----------------- | ----------------------------------------- |
| boolean | add(E e)          | aggiunge l'elemento e                     |
| void    | clear()           | elimina tutti gli elementi                |
| E       | get(int index)    | restituisce l'elemento di posizione index |
| int     | indexOf(Object o) | restituisce la posizione dell'elemento o  |
| E       | remove(int index) | rimuove l'elemento in posizione index     |
### ArrayList
Mantiene l'ordine di inserimento
- rapido accesso casuale (O(1))
- più lento inserimento/rimozione di elementi (O(n))
```
List<String> nomi = new ArrayList<>();
nomi.add("Alice");
nomi.add("Bob");
nomi.add("Charlie");

System.out.println(nomi.get(1)); // Output: Bob
```
### LinkedList
[[Linked lists]]
Una double linked list, formata da nodi che contengono riferimenti al precedente e al successivo
- ottimale per inserimento/rimozione di elementi (O(1))
- accesso casuale più lento (O(n))
```
List<String> nomi = new LinkedList<>();
nomi.add("Alice");
nomi.addFirst("Zoe");
nomi.addLast("Charlie");

nomi.remove("Alice");
System.out.println(nomi); // Output: [Zoe, Charlie]
```
## Interfaccia Queue
Una coda di oggetti che rispettano la politica FIFO
```
Interface Queue<E>
```

Questa interfaccia possiede due set di metodi per le operazioni di base

| Metodo (con eccezione) | Metodo (Safe) | Descrizione                     |
| ---------------------- | ------------- | ------------------------------- |
| `add(e)`               | `offer(e)`    | aggiunge un elemento in coda    |
| `remove()`             | `poll()`      | rimuove e restituisce la testa  |
| `element()`            | `peek()`      | legge la testa senza rimuoverla |
I metodi con eccezione se falliscono lanciano una `IllegalStateException` o `NoSuchElementException` invece i metodi safe restituiscono `false` o `null` in caso di fallimento.
### Priority queue
Inserisce gli elementi all'interno della coda in base alla loro priorità, non all'ordine di arrivo.
### Dequeue
Permette inserimento e rimozione da entrambi i lati, permettendo una politica LIFO.
## Interfaccia Set
Una collezione di oggetti che non permette duplicati
```
Interface Set<E>
```

| Tipo    | Metodo             | Descrizione                   |
| ------- | ------------------ | ----------------------------- |
| boolean | add(E e)           | aggiunge l'elemento e al set  |
| void    | clear()            | rimuove tutti gli elementi    |
| boolean | contains(Object o) | verifica se il set contiene o |
| boolean | remove(Object o)   | rimuove l'elemento o          |
### HashSet
Non garantisce l'ordine degli elementi
- Operazioni di ricerca, inserimento e rimozione molto rapide (O(1))
```
Set<String> autori = new HashSet<>();
autori.add("Tolkien");
autori.add("Herbert");
autori.add("Tolkien"); // ignorato

System.out.println(autori); // Output: [Herbert, Tolkien]
```
### TreeSet
Ha una struttura ad albero, implementa `NavigableSet`, gli elementi sono ordinati
- Operazioni principali con complessità logaritmica (O($\log(n)$))
```
Set<String> titoli = new TreeSet<>();
titoli.add("Dune");
titoli.add("1984");
titoli.add("Brave New World");

System.out.println(titoli); // Output: [1984, Brave New World, Dune]
```

## Interfaccia map
Le map consistono in una coppia di oggetti, la cui prima, la chiave è un [[#Interfaccia Set|set]] (che non permette duplicati), e la seconda è il valore che vogliamo immagazzinare
```
Interface Map<K,V>
```

| Tipo    | Metodo                      | Descrizione                                       |
| ------- | --------------------------- | ------------------------------------------------- |
| void    | clear()                     | elimina tutti gli elementi della mappa            |
| boolean | containsKey(Object key)     | verifica se esiste l'elemento di chiave key       |
| V       | get(Object key)             | restituisce il valore associato alla chiave key   |
| V       | put(K key, V value)         | Inserisce l'elemento value con chiave key         |
| V       | putIfAbsent(K key, V value) | Inserisce l'elemento value se non è presente      |
| V       | remove(Object key)          | rimuove l'elemento di chiave key e lo restituisce |
| V       | replace(K key, V value)     | rimpiazza l'elemeto di chiave key con value       |
### TreeMap
Utilizza una struttura ad albero per memorizzare le chiavi, molto utile per mantenere le chiavi ordinate, la cui complessità però segue quella dell'albero $O(\log n)$.
### HashMap
[[Strutture dati#Tabelle Hash]] con [[Strutture dati#Liste di collisioni]]
Utilizza l'hash come chiave per memorizzare gli elementi, risulta quindi molto veloce a patto che gli oggetti utilizzati implementino correttamente `equals()` e `hashCode()`.
Nel caso in cui sono presenti elementi con il medesimo hash verrà creato un albero bilanciato (detto bucket) di questi elementi, aumentando la complessità.
La complessità di `put()`, `get()` e `remove()` diventa $O(1)$ se non è necessario visitare eventuali bucket, che porterebbero la complessità a $O(\log n)$.
# Lambda expressions
Le lambda expressions in Java ci permettono di implementare metodi di una classe astratta senza una vera e propria classe concreta di appartenenza, per questo le lambda possono essere utilizzare in un contesto di [[#Interfacce|interfacce funzionali]], che hanno solo un metodo, così il compilatore sa quale metodo la lambda sta implementando, oppure per definire semplici metodi che non necessitano di una classe di appartenenza.

Per definire una lambda expression abbiamo bisogno di due elementi fondamentali, i parametri delimitati da `()` e il corpo del metodo delimitato da `{}`, tra di essi scriviamo `->`.
Le parentesi sono omettibili se abbiamo un solo parametro nel caso delle `()` o una sola riga di codice nel caso delle `{}`.

```
(int x) -> {
	if (x >= 0) return 1;
	else return 0;
}
```

>[!question] Osservazione
>Un importante utilizzo delle lambda sta nel loro uso come parametri di metodi.
## Method references
Le lambda expressions possono essere scritte in modo ancora più semplice utilizzando i **method references** se la lambda da sostituire non fa altro che delegare il suo funzionamento ad un altro metodo già definito.
Java sta creando, dietro le quinte, una istanza di una [[#Interfacce|interfaccia funzionale]] che, al suo interno, richiama quel metodo.
Abbiamo 3 scenari possibili:
1. **Bound receiver**
   L'oggetto su cui verrà invocato il metodo è dichiarato
   Sintassi `instanzaEsistente::metodo`
   *es.* `System.out::println`
   In lambda `(x) -> System.out.pritln(x)`
2. **Unbound receiver**
   Definiamo solo la classe di appartenenza dell'oggetto su cui verrà invocato il metodo
   Sintassi `Class::instanceMethod`
   *es.* `String::toUpperCase`
   In lambda `(str) -> str.toUpperCase()`
3. **Static method**
   reference a un metodo statico
   Sintassi `NomeClasse::metodoStatico`
   *es.* `Math::max`
   In lambda `(a,b) -> Math.max(a,b)`
# Classe Stream
`java.util.streams.*`
Le Stream servono per definire pipeline di computazione dichiarativa su sequenze di elementi, disaccoppiando l'operazione dalla sorgente dei dati, come una query di [[SQL]].
Il loro uso spesso è strettamente correlato alla trasformazione di [[#Collection framework|collections]].
Come se fosse un flusso di dati interno al programma.

```
var persons = new ArrayList<Person>();
persons.add(new Person("Jeff", 35));
persons.add(new Person("Claire", 25));
persons.add(new Person("Tina", 40));
persons.add(new Person("Bear", 23));
persons.add(new Person("Mikey", 36));
persons.add(new Person("Sidney", 42));

List<String> under30 = persons.stream()
	.filter(p -> p.getAge() <= 30)
	.sorted((p1,p2) -> p1.getName().compareTo(p2.getName()))
	.map(p -> p.getName())
	// .forEach(p -> System.out.println(p));
	.toList();
```

- `.stream()` apre lo stream in modo da poterci effettuare operazioni
- `.sorted()` richiede un comparator come parametro che gli permette di ordinare gli elementi in modo corretto (se abbiamo definito la classe `Person` che implementa [[#Comparable]] sarà sufficiente usare `.sorted()` senza parametri)
- `.map()` ci permette di scegliere quale dato vogliamo prendere in considerazione
- `.forEach()` ci permette di effettuare una operazione su tutti gli elementi risultanti
- `.filter()` filtra gli elementi basandosi sulla [[#Lambda expressions|lambda expression]] passatagli come parametro
- `.toList()` raccoglie i risultati in una nuova struttura dati (è necessario assegnarla ad una variabile `List<String> under30 = ...`)

>[!bug] Operazioni intermedie e finali
>Le operazioni intermedie come `.map()` o `.filter()` permettono di continuare a lavorare sullo stream, contrariamente a operazioni finali come `.toList()` e `forEach()`, che chiudono il flusso dopo la loro chiamata e che non possono quindi essere usate insieme.

## Operazione reduce()
Un'altra operazione importante delle stream è il `.reduce()` che permette di ottenere un valore singolo a partire da una lista. Per esempio se volessi ottenere la somma di tutte le età dall'esempio precedente
```
int totalAge = persons.stream()
	.map(p -> p.getAge())
	.reduce(0, (subTotal, age) -> subTotal + age);
```

Al `.reduce()` passiamo due parametri: `0` è il valore iniziale e poi abbiamo la lambda expression che descrive il comportamento di `reduce` per l'aggregazione dei dati, passiamo due variabili un accumulatore `subTotal` e `age` l'elemento corrente che verranno uniti con `subTotal + age`.
# Flussi in ingresso e uscita
Gli elementi in input e output in Java sono visti come dei flussi di dati, che siano caratteri, byte o altri tipi di dati.
Java effettuerà delle chiamate al sistema operativo e sposterà i flussi all'interno di un buffer poco alla volta per poi passarli al programma.
![[Pasted image 20251127172949.png]]


>[!bug] Memory leakage
>Una volta che vengono aperti i file per leggere i flussi di dati o scriverci vanno chiusi tramite il metodo `close()` per evitare **memory leakage**, per questo le classi astratte che gestiscono i flussi implementano la classe `Closeable`
## Flussi di caratteri
I flussi di caratteri sono gestiti da due classi fondamentali:
- [Reader](https://docs.oracle.com/en/java/javase/25/docs/api//java.base/java/io/Reader.html) per l'input
- [Writer](https://docs.oracle.com/en/java/javase/25/docs/api//java.base/java/io/Writer.html) per l'output

![[Pasted image 20251127172145.png]]
### Reader
La classe di base è `Reader`, che implementa le interfacce
- `Closable`
	- metodo `void close()`, serve a rilasciare le risorse in uso
	- lancia l'exception `IOException`, problemi con la gestione del flusso
- `Autoclosable`
- `Readable`
	- metodo `int read(charBuffer cb)`, legge caratteri dal char buffer specificato
>[!attention] Readable restituisce un int
>i char occupano 2 byte, mentre gli int 4 byte, i 2 byte rimanenti servono a verificare quando si è concluso il flusso da leggere. Dall'int poi viene fatto il cast dei 2 byte più significativi per tornare a un char
#### BufferedReader
Essendo `Reader` una classe astratta, utilizzeremo la sottoclasse [BufferedReader](https://docs.oracle.com/en/java/javase/25/docs/api//java.base/java/io/BufferedReader.html).
Possiamo ottenere un flusso da varie sorgenti quindi la classe specifica (nel nostro caso `BufferedReader`) si deve occupare solo delle operazioni di base (leggere un carattere) e non alle operazioni comuni a tutti gli altri reader.
Quindi posso agganciare reader a più alto livello che compiono operazioni comuni a tutti i reader e poi un reader specifico per le operazioni di base.
Dal costruttore `BufferedReader(Reader in)` possiamo capire come il Buffered Reader non è autonomo, ma ha bisogno di un normale reader per funzionare, esso infatti aggiunge funzionalità al reader passato come parametro.
Per esempio tramite l'uso del `BufferedReader` possiamo restituire intere linee come stringhe invece di array di caratteri tramite il metodo `readLine()`.
Finita la stringa della linea corrente restituirà null.

I metodi `read()` e `readLine()` lanciano una `IOException`, che dobbiamo gestire in fase di implementazione.
### Writer
Il suo funzionamento è molto simile e duale al [[#Reader]].
Il writer implementa:
- `Closable`
	- metodo `close()`
- `Flushable`
	- metodo `flush()`, scarica il buffer, anche se non abbiamo raggiunto il massimo della sua capienza
- `Appendable`
	- metodo `append()`
- `Autoclosable`
#### PrintWriter
Essendo anche `Writer` una classe astratta, concretamente utilizzeremo la sottoclasse [PrintWriter](https://docs.oracle.com/en/java/javase/25/docs/api//java.base/java/io/PrintWriter.html).
Il normale writer può solo scrivere singoli caratteri, array di caratteri o stringhe grezze, `PrintWriter` invece implementa dei metodi che rendono più completo l'utilizzo di una classe di scrittura:
- `print()` prende come parametro una variabile di base e la scrive
- `printf()` prende come parametro una stringa da formattare e la scrive
- `println()` stampa ciò che riceve come parametro e interrompe la linea corrente
Eredita comunque da `Writer` i metodi `write()`, `close()`, `flush()`.
## Flussi di byte
Anche in questo caso i flussi sono passati a java tramite interi che conservano nel byte meno significativo il dato utile, di cui andrà fatto il casting. Nel momento in cui il flusso si è concluso viene passato il valore -1 come intero.
Analogamente ai flussi di caratteri esistono classi di input e output
![[Pasted image 20251127172623.png]]
### InputStream
[InputStream](https://docs.oracle.com/javase/8/docs/api/java/io/InputStream.html) è la classe astratta che permette di gestire i flussi di byte in ingresso.
Fornisce i seguenti metodi:
- `abstract int read()`, restituisce un byte incapsulato all'interno del byte meno significativo di un intero (4 byte) e restituisce -1 (intero) alla fine dello stream
- `int read(byte[] b)`, legge dei byte e li inserisce all'interno di `b` se riconosce `(int)-1` o l'array di byte `b` è finito conclude il flusso
- `int read(byte[] b, int off, int len)`, che permette di aggiungere un offset alla lettura

Nella pratica utilizzeremo classi concrete come `DataInputStream`, `ObjectInputStream` o `FileInputStream`.
### OutputStream
[OutputStream](https://docs.oracle.com/javase/8/docs/api/java/io/OutputStream.html) è la classe astratta che permette di gestire i flussi di byte in uscita.
Fornisce il metodo `abstract void write(int n)` per la scrittura del byte che va incapsulato all'interno dell'intero `n`.

Ad alto livello utilizzeremo principalmente le classi concrete `ByteArrayOutputStream`, `ObjectOutputStream` o `BufferedOutputStream`.
## Random access file
Se invece di un flusso di dati ci basta manipolare una piccola parte di un file non abbiamo bisogno di utilizzare tutta la struttura legata ai flussi, ma ci basta utilizzare `RandomAccessFile`, che ci permette sia di leggere che scrivere sul file nella posizione puntata dal **file pointer**, che è inizializzato alla posizione 0 e può essere spostato utilizzando il metodo `seek()`.
Risulta molto più comodo e veloce per modificare parti specifiche di un file ($O(1)$) senza utilizzare uno stream di dati che ci costringerebbe a scorrere tutti i dati contenuti nel file fino alla posizione da modificare ($O(n)$).
D'altra parte però non è buffered, quindi per moli di dati più grandi riduce drasticamente le prestazioni.
## Classe File
Questa classe di `java.io` ci permette di gestire dei file o delle directory.
Il costruttore riceve in ingresso il path di un file.
Costruire un oggetto di tipo file **non** crea il file sul disco.
Questa classe implementa `Serializable` e `Comparable<File>`.
**Metodi utili**
- `exists()`, restituisce true se il file esiste, false altrimenti
- `createNewFile()`, inizializza il file (vuoto) sul disco
- `delete()`, elimina il file dal disco
- `isFIle()`, restituisce true se il file non è una directory
- `isDir()`,restituisce true se il file è una directory
- `mkDir()`, crea una directory

>[!bug] Eccezioni
>Tutti questi metodi possono restituire `IOException`, che vanno gestite

## Interfaccia Serializable
`import java.io.Serializable`
Serializable è una interfaccia che serve a far capire alla JVM che gli oggetti della classe che stiamo creando possono essere trasformati in flussi di byte.
[...] <-- file docs
# Regular expressions
https://regex101.com/
`import java.util.regex.*`
In java possiamo usare le **regular expression** per specificare un pattern all'interno di stringhe da utilizzare per confrontare con altre stringhe, con un certo grado di libertà (per esempio trovare tutte le stringhe che iniziano per una determinata lettera).

## Character class
Definiamo una **character class** come un insieme di caratteri.
Per definire una nuova character class sarà necessario stabilire delle regole all'interno di \[] 

| **Sintassi**   | **Significato**                                                                                              |
| -------------- | ------------------------------------------------------------------------------------------------------------ |
| `[abc]`        | Uno tra a, b, o c                                                                                            |
| `[^abc]`       | Tutto tranne a, b, o c                                                                                       |
| `[a-z]`        | Range minuscole                                                                                              |
| `[a-zA-Z]`     | Unione di range                                                                                              |
| `[a-z&&[^bc]]` | Sottrazione (a-z meno b,c)                                                                                   |
| `\p{L}`        | Unicode Letter (anche accenti e cose del genere)                                                             |
| `*`            | quantificatore della classe che lo precede 0 o più volte                                                     |
| `+`            | quantificatore della classe che lo precede 1 o più volte                                                     |
| `^`            | Inizio assoluto della riga                                                                                   |
| `$`            | fine assoluta della riga                                                                                     |
| `{}`           | con all'interno un intero utilizzate dopo una classe quantificano il numero di ripetizioni di quel carattere |

Inoltre in Java sono presenti delle classi predefinite come:

| simbolo | Classe              |
| ------- | ------------------- |
| `.`     | qualsiasi carattere |
| `\d`    | numeri              |
| `\s`    | spazi               |
| `\w`    | parole              |
| `\n`    | break line          |
Utilizzando le lettere grandi neghiamo le condizioni, per esempio `\W` restituisce tutti i caratteri che non sono parole.

>[!bug] backslash
>Il backslash in Java è un simbolo di escape, di conseguenza per scrivere un backslash ne dobbiamo usare due, per esempio per utilizzare una classe di numeri dobbiamo scrivere `String regex = "\\d";` che diventerà `\d` per l'interprete regex.

## Uso delle regex

>[!important] [Pattern](https://docs.oracle.com/javase/8/docs/api/java/util/regex/Pattern.html)
>La compilazione delle regular expression avviene tramite la classe `Pattern` che permette di creare oggetti con le proprietà desiderate per poter confrontarci le stringhe. Durante la creazione dell'oggetto pattern infatti java creerà un [[1. Reti logiche#Sintesi delle reti sequenziali sincrone (ASF)|automa a stati finiti]] che verrà utilizzato dalla classe matcher.
>Possiamo anche fare a meno di utilizzare la classe `Pattern`, ma ogni utilizzo di matcher risulterà molto più lento in quanto l'automa a stati finiti andrà ricreato ad ogni confronto.

>[!important] [Matcher](https://docs.oracle.com/javase/8/docs/api/java/util/regex/Matcher.html)
>Una classe che contiene i metodi necessari per il confronto e quindi l'utilizzo dei pattern

Nella pratica per utilizzare le regex per prima cosa creiamo una stringa contenente le "regole" da implementare
```
var reg="(\\d{4}-)*(\\d{3})";
```
In questo caso avremo 4 cifre seguite da - 0 o più volte, terminate da una sequenza di 3 cifre.
Creiamo ora una istanza di pattern che creerà l'automa a stati finiti
```
var pattern = Pattern.compile(reg)
```
Una volta compilato possiamo usare l'oggetto pattern per ottenere match su varie stringhe, tramite l'utilizzo del metodo `matcher()` richiamato sull'oggetto di tipo pattern, che restituirà un oggetto della classe `Matcher`
```
var text = "1234-7890-120    7834-2390-894   1829-0932-5488-239"
```

```
var m = pattern.matcher(text);
```

A questo punto possiamo utilizzare i metodi della classe `Matcher`, come per esempio `find()` che funziona come un iteratore e restituisce true se ha trovato un match
```
m.find()
```

Una volta usato `find()` possiamo usare `group()` senza argomenti per restituire l'intero match
```
m.group() //=m.group(0)

==> "1234-7890-120"
```

Utilizzando degli indici come argomenti di `group()` possiamo ottenere i sottogruppi
```
m.group(1)

==> "1234-"
```

Se cambiassimo la stringa dovremmo ricompilare il pattern
```
var reg = "^(\\d{4}-)*(\\d{3})";
var pattern = Pattern.compile(reg);
```
utilizzando
```
var m = pattern.matcher(text);
```
non troverebbe nulla perché ha `text` ha gli spazi all'inizio.