# I campi di un oggetto possono essere creati dinamicamente dalla funzione __init__, quindi richiamando Persona() richiamo la funzione __init__ e assegnerò come risultato a p un puntatore che punta ad una porzione di memoria che contiene un insieme di variabili/funzioni
# self è un place holder della classe che verrà generata. In questo caso self verrà sostituita con l'indirizzo di p. È anche implicito, non c'è bisogno di inserirlo come parametro
# ogni nuovo oggetto è mutabile tramite dot notation, ma se un programmatore non crea le funzioni get questi campi diventano immutabili
class Persona:
    # funzione di inizializzazione o costruttore (campi privati)
    # dunder methods (metodi di sistema)
    def __init__(self, nome = '', età = 0, lista = None):
        self.nome=nome
        if età < 130: 
            self.età=età
        else:
            self.età = 0
        if lista == None:
            self.lista = [1,2,3]
        else:
            self.lista = lista
        
    # altre funzioni di manipolazione
    def get_età(self):
        return self.età
    def get_nome(self):
        return self.nome
    def set_nome(self, nome):
        self.nome = nome
    def set_età(self, età):
        if età < 130:
            self.età = età
    # representation metod
    # dunder methods (metodi di sistema)
    def __repr__(self):
        return f"Nome: {self.nome}\tetà: {self.età}\tnumeri: {self.lista}"
    # si possono ridefinire i metodi di base solo per la classe di riferimento, ridefiniamo ==
    # se io volessi continuare ad usare == anche se è stato ridefinito e quindi sovrascritto posso usare is (verifica se due oggetti hanno lo stesso indirizzo)
    def __eq__(self, other):
        # isinstance() prende in argomento un oggetto e una classe e verifica se l'oggetto è della classe inserita
        # other is None è superfluo dato che è un confronto fatto anche da isinstance
        if other is None or not isinstance(other, Persona):
            return False
        # verifica prima se l'indirizzo è uguale per ottimizzazione
        if self is other:
            return True
        #return self.get_nome == other.get_nome and self.get_età == other.get_età
        return self.nome == other.nome and self.età == other.età
    
    def cercaNumeroDinamico(self, n):
        return n in self.lista
    
    @staticmethod
    def cercaNumeroStatico(p,n):
        return n in p.lista
    
    @staticmethod
    def cercaPersonaPerEtà(l, e):
        '''
        for p in l:
            if p.get_età()==e:
                return p'
        '''
        for i in l:
            if l[i].get_età() == e:
                return True
        return None

'''
# riceve in ingresso un nuovo elemento di tipo persona lo crea e lo restituisce
def leggi_persona():
    nome=input('Inserire un nome: ')
    età=int(input("Inserire l'età: "))
    return Persona(nome, età)

# presa una lista restituisce true o false se esiste una persona che si chiama come quella passata per argomento

def cercaPersonaInLista(l, p):
    for pCorr in l:
        # == verifica una uguaglianza del puntatore, quindi il paragone va fatto creando un metodo all'interno della classe oppure confrontando i singoli elementi
        
        #if pCorr.get_nome() == p.get_nome() and pCorr.get_età() == #p.get_età():
        #    return True
        if pCorr == p:
            return True
    return False'

'''
# se io creo due due oggetti di classe Persona diversi, contenendo una lista come parametro con dei valori di default, cambiando il contenuto della lista di uno dei due oggetti cambia su tutti gli oggetti
# il valore di default viene creato solo una volta e python ogni nuova istanza creata di oggetti di default assegna solamente il puntatore a quel valore, non il valore stesso
#buona norma: se usiamo parametri di default mutabili mettere come parametro di default lista = None e poi assegnare il valore di default all'interno dell'__init__() con un if lista = None
# se vogliamo assegnare valori solo a parametri successivi al primo utilizziamo il nome : es. p=Persona(lista=[2,3,4])

# quelli con l'oggetto puntato a sinistra del metodo sono metodi dinamici, cambiano in base al tipo di oggetto che viene inserito prima del . e si possono utilizzare solo su oggetti effettivamente creati in runtime
# quindi in una classe possiamo definire dei metodi che si possono invocare solo per il fatto che è presente il codice di quella classe: metodi statici. Il primo parametro di questi metodi non sarà interpretato come self @staticmethod (vedi sopra)

#quando viene creato un metodo statico mettiamo a sinistra il nome della classe, oppure un oggetto di tipo della classe, solo che l'oggetto non verrà effettivamente passato all'interno del metodo, ma genera confusione, non usare

# creando una classe tipicamente viene setuppata su un file diverso dal main e vengono inserite quindi all'interno della classe tutte le funzioni relative a quella classe, in quel caso all'inozio del file uso il comando import seguito dal nome del file su cui è salvata la classe
# poi nel main per richiamare un qualsiasi oggetto del file su cui è salvata la classe utilizzo la dot notation con primo elemento il nome del file
# viene creata anche una cartella __pycache__ nella directory dei due file, al suo interno è contenuto il bytecode del file classi_Persona (vedi appunti iniziali del funzionamento di python) per ottimizzazione, le classi sono intese come moduli non modificabili frequentemente, quindi non le ricompila ogni run del programma