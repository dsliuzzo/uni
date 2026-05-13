class Nodo:
    def __init__(self, info):
        self.info = info
        self.successivo = None
    def __repr__(self):
        return str(self.info)

class ListaConcatenata:
    def __init__(self, lista = None):
        self._inizializza()
        if lista is not None:
            corrente = lista._testa
            while corrente is not None:
                self.aggiungi_in_coda(corrente.info)
                corrente = corrente.successivo
    # costruttore per copia
    # prende per argomento una lista e copia ogni singolo nodo nodi della lista presa in ingresso
    def _inizializza(self):
        self._testa = None
        self._coda = None
        self._lunghezza = 0
    
    def __len__(self):
        return self._lunghezza

    def aggiungi_in_coda(self, valore):
        nuovo = Nodo(valore)
        if self._lunghezza == 0:
            # se è il primo valore la coda e la testa avranno lo stesso valore
            self._testa = nuovo
        else:
            # cambio il successore dell'attuale coda
            self._coda.successivo = nuovo
        # modifica il valore della coda
        self._coda = nuovo
        self._lunghezza += 1
    def aggiungi_in_testa(self, valore):
        nuovo = Nodo(valore)
        # passo il puntatore dell'attuale testa a successivo del nuovo valore
        nuovo.successivo = self._testa
        # modifico il valore di testa
        self._testa = nuovo
        # se la coda era uguale alla testa cambio il suo valore
        if self._lunghezza == 0:
            self._coda = nuovo
        #aggiorno il contatore della lunghezza
        self._lunghezza += 1
    # presa una lista rimuove l'elemento che sta in testa
    def rimuovi_testa(self):
        if self._lunghezza == 0:
            # lancio eccezione
            raise Exception('Lista vuota')
        if self._lunghezza == 1:
            self._inizializza()
        else:
            self._testa = self._testa.successivo
            self._lunghezza -=1
    
    def rimuovi_coda(self):
        if self._lunghezza == 0:
            raise Exception('Lista vuota')
        if self._lunghezza == 1:
            self._inizializza()
        else:
            # iteratore su linked lists, un nodo che contiene l'attuale valore
            corrente = self._testa
            while corrente is not None:
                if corrente.successivo is self._coda:
                    corrente.successivo = None
                    self._coda = corrente.successivo
                corrente = corrente.successivo
            self._lunghezza -=1
    
    def rimuovi_posizione(self, posizione):
        if self._lunghezza == 0:
            raise Exception('Lista vuota')
        if self._lunghezza == 1:
            self._inizializza()
        else:
            corrente = self._testa
            for _ in range(0, posizione-1):
                corrente = corrente.successivo
            nuovo = corrente.successivo
            corrente.successivo = nuovo.successivo
            self._lunghezza -= 1


    # dato un elemento e un indice inserisce il valore nella posizione dell'indice
    def inserimento(self, valore, posizione):
        if posizione<0 or posizione>(self._lunghezza-1):
            raise IndexError('Indice errato')
        # scorro la lista e mi fermo nel momento in cui il mio iteratore è nella posizione precedente e modificare il successivo del corrente, poi modifico il successivo del mio valore (che ho messo prima in un nodo) e metto il successivo del corrente nel successivo del nodo del mio valore
        if posizione == 0:
            self.aggiungi_in_testa(valore)
            return
        corrente = self._testa
        # se non utilizzo l'indice nel for si può usare _ (variabile generica che non verrà più richiamata all'interno del programma)
        for _ in range(1, posizione):
            corrente = corrente.successivo
        NuovoNodo = Nodo(valore)
        NuovoNodo.successivo = corrente.successivo
        corrente.successivo = NuovoNodo
        self._lunghezza += 1
    
    # restituzione di un elemento in una certa posizione
    # con __getitem__ possiamo utilizzare le []
    # non supporta l'assegnamento (fa solo la get, non la set)
    # __setitem__ non esiste perchè la possibilità di modificare una struttura di una classe è rimandata al programmatore (effettivamente non sappiamo cosa contiene un determinato valore all'interno della classe, quindi la modifica di quel valore dipende dal valore da modificare, per questo vengono utilizzati metodi con forme diverse)
    # non esiste di base (come per es. __eq__), per essere utilizzato va per forza ridefinito
    def __getitem__(self, i):
        if i<0 or i>self._lunghezza-1:
            raise IndexError('indice errato')
        corrente = self._testa
        for _ in range(1, i+1):
            corrente = corrente.successivo
        return corrente.info
        
    def __repr__(self):
        ret = "["
        # scandire una linked list (il nostro iteratore è il nodo corrente)
        corrente = self._testa
        while corrente is not None: # condizione per il quale la lista si è conclusa
            ret += str(corrente)
            if corrente.successivo != None:
                ret += "->"
            corrente = corrente.successivo
        ret += "]"
        return ret
    
    def __eq__(self, other):
        # verifichiamo solo other perchè self non può essere None (in quel caso verrebbe restituito un errore di sistema)
        if other is None or other._lunghezza != self._lunghezza or not isinstance(other, ListaConcatenata):
            return False
        if other is self:
            return True
        corrente_other = other._testa
        corrente_self = self._testa
        while corrente_self is not None:
            if corrente_self.info != corrente_other.info:
                return False
            corrente_self = corrente_self.successivo
            corrente_other = corrente_other.successivo
        return True

    def minimo(self):
        if self._lunghezza == 0:
            raise Exception("La lista è vuota")
        corrente = self._testa.successivo
        minimo = self._testa.info
        while corrente is not None:
            if minimo > corrente.info:
                minimo = corrente.info
            corrente = corrente.successivo
        return minimo
    def minimoRicorsivo(self, corrente = None):
        if self._lunghezza == 0:
            raise Exception("La lista è vuota")
        return self._minimo_da(self._testa)
    def _minimo_da(self, Nodo):
        if Nodo.successivo == None:
            return Nodo.info
        if self.info < self._minimo_da(Nodo.successivo):
            return self.info
        return self._minimo_da(Nodo.successivo)
    
        
    def massimo(self):
        if self._lunghezza == 0:
            raise Exception("La lista è vuota")
        if self._lunghezza == 1:
            return self._testa.info
        corrente = self._testa.successivo
        massimo = self._testa.info
        while corrente is not None:
            if massimo < corrente.info:
                massimo = corrente.info
            corrente = corrente.successivo
        return massimo
    def massimooRicorsivo(self, corrente = None):
        if self._lunghezza == 0:
            raise Exception("La lista è vuota")
        return self._massimo_da(self._testa)
    def _massimo_da(self, Nodo):
        if Nodo.successivo == None:
            return Nodo.info
        if self.info > self._massimo_da(Nodo.successivo):
            return self.info
        return self._massimo_da(Nodo.successivo)
    
    def somma(self):
        return self._somma_da_v2(self._testa, 0)
    def _somma_da(self, nodo):
        if nodo is None:
            return 0
        return nodo.info + self._somma_da(nodo.successivo)
    # versione più efficiente
    # il valore di sommaCorrente iniziale deve essere 0
    # quando la chiamata ricorsiva è l'unico argomento della returno il controllo non passa mai alla funzione chiamante e il record di attivazione della funzione chiamante viene già liberato (ottimizzazione)
    # di conseguenza con una funzione di questo tipo risulta molto più efficiente in quanto la chiamata ricorsiva sarà l'unica funzione a rimanere nello stack, nella v1 invece la funzione chiamante iniziale rimane in attesa dei valori risultanti dalla ricorsione
    # nello stack la funzione chiamante viene sovrascritta, così rispettiamo anche il last in first out dello stack
    # TALE RECURSION
    def _somma_da_v2(self, nodo, sommaCorrente):
        if nodo is None:
            return sommaCorrente
        return self._somma_da_v2(nodo.successivo, sommaCorrente + nodo.info)
    
    
    # la linked list principalmente utilizzata come pila o coda -> se faccio inserimenti/rimozioni da testa o coda
    # sempre in coda o testa
    # pop = estrazione
    # push = inserimento
    # top = osserva la testa della pila

    # USO DELLA LISTA COME PILA
    def push(self, valore):
        self.aggiungi_in_testa(valore)
    def pop(self):
        if self._lunghezza == 0:
            raise Exception("Lista vuota")
        # [...]
    
    # USO DELLA LISTA COME CODA

    # dunder method iterativo
    # dentro il main posso scrivere una variabile it=Iter(l)
    def __iter__(self):
        return Iteratore(self)
    
    # un metodo di ricerca di un elemento all'interno della lista dato la lista e un valore restituisce il numero di occorrenze di quel valore nella lista (sia iterativo che ricorsivo)
    def indice_di(self, valore):
        i = 0
        corrente = self._testa
        while corrente is not None:
            if corrente.info == valore:
                return i
            corrente = corrente.successivo
            i+=1
        return -1
    # converrebbe avere una lista ordinata, ma bisogna valutare il costo dell'inserimento ordinato di elementi, che avrebbe lo stesso costo computazionale della ricerca
    # conviene quindi (nel caso in cui abbiamo finito di aggiungere dati ad una lista) ordinare questa lista, se sappiamo di dover cercare numerose volte elementi al suo interno
    def indice_di_ord(self, valore):
        i = 0
        corrente = self._testa
        while corrente is not None and corrente.info <= valore:
            if corrente.info == valore:
                return i
            corrente = corrente.successivo
            i+=1
        return -1
    # inserimento ordinato per poter utilizzare indice_di_ord()
    def inserisci_ord(self, val):
        if self._lunghezza == 0 or self._testa.info >= val: # i controlli vengono fatti in ordine, altrimenti se la lista è vuota non può fare il confronto di maggioranza essendo self._testa = None
            self.aggiungi_in_testa(val)
            return
        curr = self._testa.successivo
        prec = self._testa
        while curr is not None and curr.info <= val:
            curr = curr.successivo
            prec = prec.successivo
        new = Nodo(val)
        new.successivo = curr
        prec.successivo = new
        self._lunghezza += 1
        if curr is None:
            self._coda = new
    # fallo in modo ricorsivo

    # ricerca binaria (diamo per scontato che la lista sia ordinata) O(x) = log_2(n) per liste normali, ma nelle liste concatenate fa schifo, perchè utilizzo il getitem ogni iterazione
    # in questi casi conviene usare le liste normali, d'altra parte modificare spesso quella lista (essendo dinamica) vuol dire (superato un certo limite) ricopiare l'intera lista. Invece è conveniente usare liste concatenate come pila/coda.
    # Struttura dinamica come la lista, ma gli inserimenti e cancellazioni sono più efficienti -> albero




class Iteratore:
    def __init__(self, lista):
        self._nodo_corrente = lista._testa
    def __next__(self):
        # stop iteratio
        if self._nodo_corrente is None:
            raise Exception("Non ci sono più elementi")
        valore = self._nodo_corrente.info
        self._nodo_corrente = self._nodo_corrente.successivo
        return valore
    # metood che verifica se la lista è terminata
    def finito(self):
        return self._nodo_corrente is None
    # con questo metodo facciamo capire a python che anche iter è una classe iterabile
    def __iter__(self):
        return self


            

# l'ultimo elemento punta a None
# l'aggiunta di elementi è molto più efficiente, ma l'accesso a elementi di mezzo alla lista è molto più oneroso, nelle liste normali python aggiunge semplicemente all'indirizzo n volte la dimensione di una cella, essendo composta da celle contigue.
# heap = mucchio
# stack: last in first out 


