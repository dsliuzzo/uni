class Nodo:
    def __init__(self, info):
        self.info = info
        self.successivo = None

    def __repr__(self):
        return f"{self.info}"
    
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
    
    # ESERCITAZIONE 8
    def verifica8(self, k):
        return self._verifica_ric8(self._testa, k, 0, 0)
    def _verifica_ric8(self, iter, k, somma1, somma2):
        if k > 0:
            somma1 += iter.info
            return self._verifica_ric8(iter.successivo, k-1, somma1, somma2)
        else:
            if iter.successivo is None:
                somma2 += iter.info
                return somma1 == somma2
            somma2 += iter.info
            return self._verifica_ric8(iter.successivo, k-1, somma1, somma2)

    # ESERCITAZIONE 9
    def verifica9(self):
        return self._verifica_ric9(self._testa.successivo, self._testa)
    def _verifica_ric9(self, iter, prec):
        if iter.successivo is None:
            return False
        if prec.info > iter.successivo.info:
            if iter.info == prec.info:
                return True
        else:
            if iter.info == iter.successivo.info:
                return True
        return self._verifica_ric9(iter.successivo, iter)

    # PROVA ESAME 17/06/2022
    def conta_elementi_speciali(self, b):
        return self._conta_elementi_speciali(self._testa, b, 0)
    def _conta_elementi_speciali(self, corrente, b, s):
        if corrente.successivo is None:
            if corrente.info > (b - s):
                return 1
            else:
                return 0
        if corrente.info > (b - s):
            return 1 + self._conta_elementi_speciali(corrente.successivo, b, s + corrente.info)
        else:
            return self._conta_elementi_speciali(corrente.successivo, b, s + corrente.info)

    # PROVA ESAME 15/09/2025
    def conta_terne(self):
        return ListaConcatenata._conta_terne_ric(self._testa, None)
    @staticmethod
    def _conta_terne_ric(nodo, precedente):
        if nodo.successivo is None:
            return 0
        if precedente is None:
            return ListaConcatenata._conta_terne_ric(nodo.successivo, nodo.info)
        if nodo.info == precedente + nodo.successivo.info:
            return 1 + ListaConcatenata._conta_terne_ric(nodo.successivo, nodo.info)
        return ListaConcatenata._conta_terne_ric(nodo.successivo, nodo.info)

    # mermaid
    def lc_to_mermaid(self):
        ret = "graph LR\n"
        ret += ListaConcatenata._lc_to_mermaid_da(self._testa, 0)
        print(ret)
        return
    @staticmethod
    def _lc_to_mermaid_da(nodo, id_padre):
        ret = "\tid" + str(id_padre) + "((" + str(nodo.info) + "))"
        if nodo.successivo is not None:
            ret += " an" + str(id_padre) + "@==> " + "id" + str(id_padre+1) + "\n"
            ret += "\tan" + str(id_padre) + "@{ animate: true}\n"
            ret += ListaConcatenata._lc_to_mermaid_da(nodo.successivo, id_padre + 1)
        return ret

    # PROVA ESAME 28/06/2023
    def verifica_dispari_pari(self):
        return ListaConcatenata._verifica_dispari_pari_ric(self._testa, 0)
    @staticmethod
    def _verifica_dispari_pari_ric(nodo, precedente):
        if nodo.successivo is None:
            return True
        if precedente == nodo.info and (nodo.info%2) == 1 and (nodo.successivo.info%2) == 0:
            return False
        return ListaConcatenata._verifica_dispari_pari_ric(nodo.successivo, nodo.info)


    # NOTEBOOK 1
    def verifica_pari_dispari(self, k):
        return ListaConcatenata._verifica_pari_dispari_ric(self._testa, k, True)
    @staticmethod
    def _verifica_pari_dispari_ric(nodo, k, pari):
        if (pari and nodo.info >= k) or (not pari and nodo.info < k):
            return False
        if nodo.successivo is None:
            return True
        if pari:
            return ListaConcatenata._verifica_pari_dispari_ric(nodo.successivo, k, False)
        return ListaConcatenata._verifica_pari_dispari_ric(nodo.successivo, k, True)



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

