#appunti #programmazione_orientata_agli_oggetti 
Dato per scontata la creazione di classi in python e la sintassi di base analizzeremo le differenze sostanziali nell'uso di [[Python]] per la programmazione orientata agli oggetti rispetto all'uso di [[Java|java]].
# Creazione di classi
creazione di classi
```
class Pippo:
	def __init__(self, name):
		self._name = name	
	def name(self):
		return self._name
	def age(self):
		return self._age
	

p = Pippo("pippo")

```

posso dei metodi che usano dei campi che non esistono, python darà problemi solo al momento di utilizzo del metodo

in python possono nascere variabili di istanza anche a runtime
se io definisco il metodo age come
```
def age(self):
	return self._age = 0
```

se la uso subito darà errore, se invece la utilizzo dopo avere richiamato altri metodi si genera il campo dell'età a runtime e posso utilizzare il metodo tranquillamente

a runtime posso inserire campi all'interno della classe

# Inheritance multipla
La principale differenza con Java per quanto riguardo l'inheritance riguarda l'inheritance multipla: in python è possibile creare classi figlie di più superclassi.
```
class Topolino:
	def name(self):
		return "Mickey"
	
class Topolina:
	def name(self):
		return "Minnie"

class Qui(Topolino, Topolina):
	def name(self):
		return super().name() + " Tip"
```

con l'inheritance multipla il `super().name()` prenderà il metodo `name()` da una delle superclassi stabilendo il loro ordine in base al **method resolution order**, che si occupa di creare un ordinamento lineare della gerarchia delle classi.
```
Qui.mro()
```
restituisce la gerarchia linearizzata.
tendenzialmente ragiona in modo ricorsivo linearizzando l'eredità di ogni classe unendo eventuali elementi comuni con il merge.

possiamo anche fare `super().super()` per richiamare un metodo di un antenato piuttosto che quello di un genitore.

## C3 method resolution order
[method resolution order](https://docs.python.org/3/howto/mro.html)
>[!quote] Linearization
>*take the head of the first list, i.e L[B1][0]; if this head is not in the tail of any of the other lists, then add it to the linearization of C and remove it from the lists in the merge, otherwise look at the head of the next list and take it, if it is a good head. Then repeat the operation until all the class are removed or it is impossible to find good heads. In this case, it is impossible to construct the merge, Python 2.3 will refuse to create the class C and will raise an exception.*

Il principio di funzionamento del MRO è ricorsivo.

Sia $C$ una classe che eredita da $B_{1},B_{2},\dots,B_n$. La linearizzazione di $C$ detta $L[C]$ e definita come
$$
L[C] = C + \text{merge}(L[B_{1}], L[B_{2}],\dots,L[B_n])
$$
Prendiamo il primo elemento della lista, nel nostro caso $C$ e verifichiamo se essa appare nella coda di un'altra lista, se questo accade andrà processata prima l'altra lista, altrimenti abbiamo trovato una buona testa.
Se è una buona testa la scriviamo nell'mro e la eliminiamo dalla lista di elementi da processare, altrimenti proviamo con la testa della lista successiva.

Definiamo per esempio
```
     O
   /   \
  /     \
 A       B
  \     /
   \   /
     C
```

```
class O: pass
class A(O): pass
class B(O): pass
class C(A, B): pass
```
calcoliamo $L[C]$
- $L[A] = [A,O]$
- $L[B] = [B,O]$
- La lista dei genitori è $[A,B]$
l'equazione completa sarà quindi
$$
L[C] = C + \text{merge}([A,O],[B,O],[A,B])
$$
Alla prima iterazione $A$ risulta essere una buona testa in quanto non compare nella coda delle altre liste, la aggiungiamo quindi al nostro risultato e la eliminiamo dalle liste
$$
L[C] = C + A + \text{merge}([O],[B,O],[B])
$$
Alla seconda iterazione passiamo a $O$, ma è presente nella coda di $[B,O]$ di conseguenza non è una buona testa.
Passiamo quindi a $B$ che è una buona testa, la scriviamo quindi nel risultato e la eliminiamo dalle liste
$$
L[C] = C+A+B+\text{merge}([O],[O])
$$
Alla terza iterazione l'unica classe rimasta è $O$ che può quindi essere scritta
$$
L[C] = C + A + B + O
$$
```
>>> C.mro()
[<class '__main__.C'>, <class '__main__.A'>, <class '__main__.B'>, <class '__main__.O'>, <class 'object'>]
```
