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
        
    def _inizializza(self):
        self._testa = None
        self._coda = None
        self._lunghezza = 0

    def svuota(self):
        self._inizializza()
       
    @staticmethod
    def costruisci_da_lista_semplice(lista):
        ret = ListaConcatenata()
        for n in lista:
            ret.aggiungi_in_coda(n)
        return ret

    def converti_in_lista_semplice(self):
        ret = []
        corrente = self._testa
        while corrente is not None:
            ret.append(corrente.info)
            corrente = corrente.successivo
        return ret
    
    def aggiungi_in_coda(self, valore):
        nuovo = Nodo(valore)
        if self._lunghezza == 0:
            self._testa = nuovo
        else:
            self._coda.successivo = nuovo
        self._coda = nuovo
        self._lunghezza += 1

    def aggiungi_in_testa(self, valore):
        nuovo = Nodo(valore)
        nuovo.successivo = self._testa
        self._testa = nuovo
        if self._lunghezza == 0:
             self._coda = nuovo
        self._lunghezza += 1

    def rimuovi_testa(self):
        if self._lunghezza == 0:
            raise Exception('Lista vuota!')
        if self._lunghezza == 1:
            self.svuota()
        else:
            self._testa = self._testa.successivo
            self._lunghezza -= 1
            
    def rimuovi_coda(self):
        if self._lunghezza == 0:
            raise Exception('Lista vuota!')
        if self._lunghezza == 1:
            self.svuota()
        else:
            corrente = self._testa
            while corrente is not None:
                if corrente.successivo is self._coda:
                    corrente.successivo = None
                    self._coda = corrente
                corrente = corrente.successivo
            self._lunghezza -= 1

    def rimuovi(self, indice):
        if indice < 0 or indice >= self._lunghezza:
             raise IndexError('Indice non valido!')
        if indice == 0:
            self.rimuovi_testa()
            return
        if indice == self._lunghezza - 1:
            self.rimuovi_coda()
            return
        corrente = self._testa
        for _ in range(1, indice):
            corrente = corrente.successivo
        corrente.successivo = corrente.successivo.successivo
        self._lunghezza -= 1
    
    def inserisci(self, indice, valore):
        if indice < 0 or indice >= self._lunghezza:
             raise IndexError('Indice non valido!')
        if indice == 0:
            self.aggiungi_in_testa(valore)
            return
        corrente = self._testa
        for _ in range(1, indice):
            corrente = corrente.successivo
        nuovo = Nodo(valore)
        nuovo.successivo = corrente.successivo
        corrente.successivo = nuovo
        self._lunghezza += 1
    
    def rimuovi_primo(self, valore): # Restituisce True sse ha rimosso un elemento
        if self._lunghezza == 0:
             raise Exception('Lista vuota!')
        if self._testa.info == valore:
            self.rimuovi_testa
            return True
        corrente = self._testa
        while corrente is not None:
            successivo = corrente.successivo
            if successivo is not None and successivo.info == valore:
                corrente.successivo = successivo.successivo
                if successivo is self._coda:
                    self._coda = corrente
                self._lunghezza -= 1
                return True
            corrente = corrente.successivo
    
    def indice_di(self, valore):
        i = 0
        corrente = self._testa
        while corrente is not None:
            if corrente.info == valore:
                return i
            corrente = corrente.successivo
            i += 1
        return -1
    
    def lista_invertita(self):
        ret = ListaConcatenata()
        corrente = self._testa
        while corrente is not None:
            ret.aggiungi_in_testa(corrente.info)
            corrente = corrente.successivo
        return ret
    
    def __len__(self):
        return self._lunghezza
    
    def __repr__(self):
        ret = '['
        corrente = self._testa
        while corrente is not None:
            ret += str(corrente)
            if corrente.successivo != None:
                ret += ' -> '
            corrente = corrente.successivo
        ret += ']'
        return ret

    def __contains__(self, valore):
        return self.indice_di(valore) != -1
    
    def __getitem__(self, i):
        if i < 0 or i >= self._lunghezza:
             raise IndexError('Indice non valido!')
        corrente = self._testa
        for _ in range(1, i + 1):
             corrente = corrente.successivo
        return corrente.info
    
    def __eq__(self, other):
        if other is None or not isinstance(other, ListaConcatenata):
            return False
        if other is self:
            return True
        if self._lunghezza != other._lunghezza:
            return False
        corrente = self._testa
        correnteO = other._testa
        while corrente is not None:
            if corrente.info != correnteO.info:
                return False
            corrente = corrente.successivo
            correnteO = correnteO.successivo
        return True

    def _conta_da(self, nodo, valore):
         if nodo is None:
              return 0
         if nodo.info == valore:
              return 1 + self._conta_da(nodo.successivo, valore)
         return self._conta_da(nodo.successivo, valore)

    def conta(self, valore):
        return self._conta_da(self._testa, valore)
	
    def _somma_da(self, nodo):
        if nodo is None:
            return 0
        return nodo.info + self._somma_da(nodo.successivo)
    
    def somma(self):
        return self._somma_da(self._testa)

    def _minimo_da(self, nodo):
        if nodo.successivo is None:
            return nodo.info
        return min(nodo.info, self._minimo_da(nodo.successivo))
    
    def minimo(self):
        if self._lunghezza == 0:
            raise Exception('Lista vuota!')
        return self._minimo_da(self._testa)

    def _massimo_da(self, nodo):
        if nodo.successivo is None:
            return nodo.info
        return max(nodo.info, self._massimo_da(nodo.successivo))
    
    def massimo(self):
        if self._lunghezza == 0:
            raise Exception('Lista vuota!')
        return self._massimo_da(self._testa)
    
    ## USO DELLA LISTA CONCATENATA COME PILA ##
    
    def push(self, valore):
        self.aggiungi_in_testa(valore)
    
    def pop(self):
        if self._lunghezza == 0:
             raise Exception('Lista vuota!')
        ret = self._testa.info
        self.rimuovi_testa()
        return ret
            
    def top(self):
        if self._lunghezza == 0:
             raise Exception('Lista vuota!')
        return self._testa.info
    
    ## USO DELLA LISTA CONCATENATA COME CODA ##
    
    def enqueue(self, valore):
        self.aggiungi_in_coda(valore)
        
    def dequeue(self):
        return self.pop()
    
    def peek(self):
        return self.top()

    ## COSTRUZIONE DI ITERATORI ##
        
    def __iter__(self):
        return Iteratore(self)


class Iteratore:
    def __init__(self, lista):
         self._nodo_corrente = lista._testa
    
    def __iter__(self):
        return self
    
    def __next__(self):
        if self._nodo_corrente is None:
            raise StopIteration('Non ci sono più elementi.')
        valore = self._nodo_corrente.info
        self._nodo_corrente = self._nodo_corrente.successivo
        return valore

    def finito(self):
        return self._nodo_corrente is None
    