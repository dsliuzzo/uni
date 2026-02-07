class Nodo:
    def __init__(self, info):
        self.info = info
        self.figlioDx = None
        self.figlioSx = None
    def __repr__(self):
        return str(self.info)

class AlberoBinarioRicerca:
    def __init__(self, other = None):
        self._inizializza()
    
    def _inizializza(self):
        self._radice = None
        self._card = 0
    
    # stampa
    def __repr__(self):
        return AlberoBinarioRicerca._converti_in_stringa_da(self._radice)
    
    @staticmethod
    def _converti_in_stringa_da(nodo):
        if nodo is None:
            return ""
        s = AlberoBinarioRicerca._converti_in_stringa_da(nodo.figlioSx)
        s += " " + str(nodo.info)
        s += AlberoBinarioRicerca._converti_in_stringa_da(nodo.figlioDx)
        return s
    
    # stampa iterativa
    def stampa_iterativa(self):
        pila = listaconcatenata.ListaConcatenata()
        pila.push((self._radice, False))
        while len(pila) > 0:
            (nodo, stampa) = pila.pop()
            if nodo is not None:
                if stampa:
                    print(nodo.info)
                else:
                    pila.push((nodo.figlioDx, False))
                    pila.push((nodo, True))
                    pila.push((nodo.figlioSx, False))

    
    # aggiunta dati iterativo
    # ogni passo cerco il passo adeguato per avere come figlio (dx o sx) la nuova info
    def aggiungi_Ite(self, valore):
        self._card += 1
        if self._radice is None:
            self._radice = Nodo(valore)
        else:
            padre = self._radice
            inserito = False
            while not inserito:
                if valore <= padre.info:
                    if padre.figlioSx is None:
                        padre.figlioSx = Nodo(valore)
                        inserito = True
                    else:
                        padre = padre.figlioSx
                else:
                    if padre.figlioDx is None:
                        padre.figlioDx = Nodo(valore)
                        inserito = True
                    else:
                        padre = padre.figlioDx

    # metodo che conta quante volte un elemento è presente in un albero
    def conta_it(self, valore):
        c = 0
        nodo = self._radice
        while nodo is not None:
            if nodo.info == valore:
                c += 1
            if valore <= nodo.info:
                nodo = nodo.figlioSx
            else:
                nodo = nodo.figlioDx
        return c
    def conta_ric(self, val):
        return self._conta_da(self._radice, val)
    def _conta_da(self, corrente, val):
        if corrente is None:
            return 0
        if corrente.info == val:
            return self._conta_da(corrente.figlioSx, val) + 1
        if val <= corrente.info:
            return self._conta_da(corrente.figlioSx, val)
        else:
            return self._conta_da(corrente.figlioDx, val)

    # minimo valore in un albero binario di ricerca
    def cerca_min(self):
        if self._card == 0:
            raise Exception("Albero vuoto")
        return AlberoBinarioRicerca._cerca_min_da(self._radice)
    @staticmethod
    def _cerca_min_da(nodo):
        if nodo.figlioDx is None and nodo.figlioSx is None:
            return nodo.info
        if nodo.figlioDx is None:
            return min(AlberoBinarioRicerca._cerca_min_da(nodo.figlioSx), nodo.info)
        if nodo.figlioSx is None:
            return min(AlberoBinarioRicerca._cerca_min_da(nodo.figlioDx), nodo.info)
        return min(AlberoBinarioRicerca._cerca_min_da(nodo.figlioSx), nodo.info, AlberoBinarioRicerca._cerca_min_da(nodo.figlioDx))

    # massimo valore in un albero binario di ricerca
    def cerca_max(self):
        if self._card == 0:
            raise Exception("Albero vuoto")
        return AlberoBinarioRicerca._cerca_max_da(self._radice)
    @staticmethod
    def _cerca_max_da(nodo):
        if nodo.figlioDx is None and nodo.figlioSx is None:
            return nodo.info
        if nodo.figlioDx is None:
            return max(AlberoBinarioRicerca._cerca_min_da(nodo.figlioSx), nodo.info)
        if nodo.figlioSx is None:
            return max(AlberoBinarioRicerca._cerca_min_da(nodo.figlioDx), nodo.info)
        return max(AlberoBinarioRicerca._cerca_min_da(nodo.figlioSx), nodo.info, AlberoBinarioRicerca._cerca_min_da(nodo.figlioDx))

    # aggiunta di un valore nell'albero
    def aggiungiBIS(self, valore):
        self._card += 1
        if self._radice is None:
            self._radice = Nodo(valore)
        else:
            self._aggiungi_da_BIS(self._radice, valore)

    def _aggiungi_da_BIS(self, nodo, valore):
        if valore <= nodo.info:
            if nodo.figlioSx is None:
                nodo.figlioSx = Nodo(valore)
            else:
                self._aggiungi_da_BIS(nodo.figlioSx, valore)
        else:
            if nodo.figlioDx is None:
                nodo.figlioDx = Nodo(valore)
            else:
                self._aggiungi_da_BIS(nodo.figlioDx, valore)
    
    # traduce un albero in una lista ordinata
    def converti_in_lista(self):
        return self._converti_in_lista_da(self._radice)
    def _converti_in_lista_da(self, nodo):
        if nodo is None:
            return None
        l = []
        l = self._converti_in_lista_da(self.figlioSx)
        l.append(nodo)
        # usiamo extend perchè l'append avrebbe creato una sottolista, mentre extend fa l'append di ogni singolo valore della lista che passiamo come parametro
        # l = [1,2,3] -> l.append([4,5,6]) -> l = [1,2,3,[4,5,6]]
        # l = [1,2,3] -> l.extend([4,5,6]) -> l = [1,2,3,4,5,6]
        l.extend(self._converti_in_lista_da(self.figlioDx))
        return l
    
    # cosa intendiamo per uguale -> hanno gli stessi elementi, anche disposti in maniera diversa
    # per far questo convertiamo prima gli alberi in lista
    def __eq__(self, other):
        if self is other:
            return True
        if other is None or not isinstance(other, AlberoBinarioRicerca) or self._card != other._card:
            return False
        return self.converti_in_lista() == other.converti_in_lista()
    
    # ES ESAME
    # arrichiamo un albero con un metodo che restituisce True se e solo se il valore passato come argomento si trova ad un valore di profondità passato come argomento
    def cercaValProf(self, val, prof):
        return self._cerca_val_da(self._radice, val, prof, 1)
    
    @staticmethod
    def _cerca_val_da(nodo, val, prof, i):
        if nodo is None or i > prof:
            return False
        return AlberoBinarioRicerca._cerca_val_da(nodo._figlioSx, val, prof, i+1) or (nodo.info == val and prof == i) or AlberoBinarioRicerca._cerca_val_da(nodo._figlioDx, val, prof, i+1)

    @staticmethod
    def _cerca_val_da_v2(nodo, val, prof, i):
        if nodo is None:
            return False
        if i == prof:
            if nodo.info == val:
                return True
            else:
                return False
        if val <= nodo.info:
            return AlberoBinarioRicerca._cerca_val_da_v2(nodo, val, prof, i+1)
        else:
            return AlberoBinarioRicerca._cerca_val_da_v2(nodo, val, prof, i+1)
    '''   
    def rimuovi(self, info):
        if self._card == 0:
            raise Exception('Albero vuoto')
        padre = None
        nodo = self._radice
        trovato = info == nodo.info
        while not trovato and nodo is not None:
            padre = nodo
            if info < nodo.info:
                nodo = nodo.figlioSx
                figlio_sinistro = True
            else:
                nodo = nodo.figlioDx
                figlio_sinistro = False
            trovato = nodo is not None and info == nodo.info
        if not trovato:
            return False
        if nodo.figlioSx is None or nodo.figlioDx is None:
            unico_figlio = nodo.figlioSx
            if unico_figlio is None:
                unico_figlio = nodo.figlioDx
            if padre is None:
                self._radice = unico_figlio
            else:
                if figlio_sinistro:
                    padre.figlioSx = unico_figlio
                else:
                    padre.figlioDx = unico_figlio
        else:
            padre_nodo_minimo.figlio_sinistro = nodo_minimo.figlio [...]
        nodo.info = valore_minimo # finale mancante
        '''

    # presi due alberi verifica se sono uguali in contenuto e struttura
    def eq_struttura(self, other):
        if self._card != other._card:
            return False
        return AlberoBinarioRicerca._eq_struttura_da(self._radice, other._radice)
    @staticmethod
    def _eq_struttura_da(nodo1, nodo2):
        # verifico prima i none perchè in caso di confronto con None restituirebbe errore altrimenti
        if nodo1 is None:
            if nodo2 is None:
                return True
            else:
                return False
        if nodo2 is None:
            return False
        if nodo1.info != nodo2.info:
            return False
        return AlberoBinarioRicerca._eq_struttura_da(nodo1.figlioSx, nodo2.figlioSx) and AlberoBinarioRicerca._eq_struttura_da(nodo1.figlioDx, nodo2.figlioDx)
    
    # verifica se per ogni nodo la differenza tra il valore massimo del sottoalbero di sinistra e il valore minimo del sottoalbero di destra (se esistono entrambi) è minore di k
    def verifica_differenza_k(self, k):
        if self._radice is None:
            return True
        return AlberoBinarioRicerca._verifica_differenza_k_da(self._radice, k)
    @staticmethod
    def _verifica_differenza_k_da(nodo, k):
        if nodo.figlioSx is None or nodo.figlioDx is None:
            return True
        max = AlberoBinarioRicerca._estrai_massimo_da(nodo.figlioSx)
        min = AlberoBinarioRicerca._estrai_minimo_da(nodo.figlioDx)
        if min - max >= k:
            return False
        return AlberoBinarioRicerca._verifica_differenza_k_da(nodo.figlioSx, k) and AlberoBinarioRicerca._verifica_differenza_k_da(nodo.figlioDx, k)
    @staticmethod
    def _estrai_massimo_da(nodo):
        if nodo.figlioDx is None:
            return nodo.info
        return AlberoBinarioRicerca._estrai_massimo_da(nodo.figlioDx)
    @staticmethod
    def _estrai_minimo_da(nodo):
        if nodo.figlioSx is None:
            return nodo.info
        return AlberoBinarioRicerca._estrai_massimo_da(nodo.figlioSx)
    
    # restituisce una lista ordinata che contiene tutte le foglie di un albero
    def lista_foglie(self):
        return AlberoBinarioRicerca._lista_foglie_da(self._radice)
    @staticmethod
    def _lista_foglie_da(nodo):
        if nodo is None:
            return []
        if nodo.figlioDx is None and nodo.figlioSx is None:
            return [nodo.info]
        return AlberoBinarioRicerca._lista_foglie_da(nodo.figlioSx) + AlberoBinarioRicerca._lista_foglie_da(nodo.figlioDx)
    
    # dato un albero qual è il numero massimo di foglie?
    # 2^(nLivelli-1)

    # albero visualizzato per livelli
    def stampa_iterativa_per_livelli(self):
        if self._radice is None:
            print("Albero vuoto")
            return
        coda = listaconcatenata.ListaConcatenata()
        coda.enqueue((self._radice, 1))
        while len(coda) > 0:
            (nodo, livello) = coda.dequeue()
            print(nodo.info, " al livello ", livello)
            if nodo.figlioSx is not None:
                coda.enqueue((nodo.figlioSx, livello+1))
            if nodo.figlioDx is not None:
                coda.enqueue((nodo.figlioDx, livello+1))
    def stampa_iterativa_per_livelli_v2(self):
        if self._radice is None:
            print("Albero vuoto")
            return
        codaNodi = listaconcatenata.ListaConcatenata()
        codaLivelli = listaconcatenata.ListaConcatenata()
        codaPadri = listaconcatenata.ListaConcatenata()
        codaSxDx = listaconcatenata.ListaConcatenata()
        codaNodi.enqueue(self._radice)
        codaLivelli.enqueue(1)
        codaPadri.enqueue(None)
        codaSxDx.enqueue(None)
        livelloCorr = 0
        while len(codaNodi) > 0:
            nodo = codaNodi.dequeue()
            livello = codaLivelli.dequeue()
            padre = codaPadri.dequeue()
            SxDx = codaSxDx.dequeue()
            if livello > livelloCorr:
                print()
                print("Livello", livello, ": ", end="")
                livelloCorr += 1
            if livello == 1:
                print(nodo.info, end="; ")
            else:
                if SxDx:
                    print(nodo.info, "figlio sinistro di", end = " ")
                else:
                    print(nodo.info, "figlio destro di", end = " ")
                print(padre, end = "; ")
            if nodo.figlioSx is not None:
                codaNodi.enqueue(nodo.figlioSx)
                codaLivelli.enqueue(livello + 1)
                codaPadri.enqueue(nodo.info)
                codaSxDx.enqueue(True)
            if nodo.figlioDx is not None:
                codaNodi.enqueue(nodo.figlioDx)
                codaLivelli.enqueue(livello + 1)
                codaPadri.enqueue(nodo.info)
                codaSxDx.enqueue(False)

    #PROVA ESAME 30/06/2025
    def verifica_esame(self):
        return AlberoBinarioRicerca._verifica_esame_ric(self._radice)
    @staticmethod
    def _verifica_esame_ric(nodo):
        if nodo is None:
            return True
        if nodo.figlioSx is not None and nodo.figlioDx is not None:
            if nodo.info%2 == 0:
                return AlberoBinarioRicerca._verifica_pari_da(nodo.figlioSx) and AlberoBinarioRicerca._verifica_esame_ric(nodo.figlioSx) and AlberoBinarioRicerca._verifica_esame_ric(nodo.figlioDx)
            else:
                return AlberoBinarioRicerca._verifica_dispari_da(nodo.figlioDx) and AlberoBinarioRicerca._verifica_esame_ric(nodo.figlioSx) and AlberoBinarioRicerca._verifica_esame_ric(nodo.figlioDx)
        return AlberoBinarioRicerca._verifica_esame_ric(nodo.figlioSx) and AlberoBinarioRicerca._verifica_esame_ric(nodo.figlioDx)
    @staticmethod
    def _verifica_pari_da(nodo):
        if nodo is None:
            return False
        if nodo.info%2 == 0:
            return True
        return AlberoBinarioRicerca._verifica_pari_da(nodo.figlioSx) or AlberoBinarioRicerca._verifica_pari_da(nodo.figlioDx)
    @staticmethod
    def _verifica_dispari_da(nodo):
        if nodo is None:
            return False
        if nodo.info%2 == 1:
            return True
        return AlberoBinarioRicerca._verifica_dispari_da(nodo.figlioSx) or AlberoBinarioRicerca._verifica_dispari_da(nodo.figlioDx)

    #Almeno un nodo è uguale alla somma dei suoi figli
    #Controlla ricorsivamente se esiste un nodo il cui valore sia uguale alla somma dei suoi due figli (se esistenti).
    def uguale_somma_figli(self):
        return self.uguale_somma_figli_ric(self._radice)
    def uguale_somma_figli_ric(self, nodo):
        if nodo.figlioDx is not None and nodo.figlioSx is not None:
            if nodo.info == (nodo.figlioDx + nodo.figlioSx):
                return True
            return self.uguale_somma_figli_ric(nodo.figlioSX) or self.uguale_somma_figli_ric(nodo.figlioDx)
        return False

    # ES AI CHAT
    # converti l'albero in una normale lista
    def albero_to_lista(self):
        return self._albero_to_lista_ric(self._radice)
    def _albero_to_lista_ric(self, nodo):
        if nodo is None:
            return []
        if nodo.figlioDx is None and nodo.figlioSx is None:
            return [nodo.info]
        if nodo.figlioDx is None:
            lista = self._albero_to_lista_ric(nodo.figlioSx)
            lista.append(nodo.info)
            return lista
        if nodo.figlioSx is None:
            lista = [nodo.info]
            lista.extend(self._albero_to_lista_ric(nodo.figlioDx))
            return lista
        lista = self._albero_to_lista_ric(nodo.figlioSx)
        lista.append(nodo.info)
        lista.extend(self._albero_to_lista_ric(nodo.figlioDx))
        return lista

    # calcolare la massima profondità dell'albero
    def profondita(self):
        return self._profondita_ric(self._radice)
    def _profondita_ric(self, nodo):
        if nodo.figlioSx is None and nodo.figlioDx is None:
            return 1
        if nodo.figlioDx is None:
            return 1 + self._profondita_ric(nodo.figlioSx)
        if nodo.figlioSx is None:
            return 1 + self._profondita_ric(nodo.figlioDx)
        return 1 + max(self._profondita_ric(nodo.figlioSx), self._profondita_ric(nodo.figlioDx))

    # somma di tutti gli elementi a livello k
    def somma_elementi_livello(self, k):
        return self._somma_elementi_livello_ric(self._radice, k, 0)
    def _somma_elementi_livello_ric(self, nodo, k, attuale):
        if k == attuale:
            return nodo.info
        if nodo.figlioDx is None and nodo.figlioSx is None:
            return 0
        if nodo.figlioDx is None:
            return self._somma_elementi_livello_ric(nodo.figlioSx, k, attuale + 1)
        if nodo.figlioSx is None:
            return self._somma_elementi_livello_ric(nodo.figlioDx, k, attuale + 1)
        return self._somma_elementi_livello_ric(nodo.figlioSx, k, attuale + 1) + self._somma_elementi_livello_ric(nodo.figlioDx, k, attuale + 1)

    # verifica completezza (se tutti i nodi sono completi di figlio destro e sinistro)
    def verifica_completezza(self):
        return self._verifica_completezza_ric(self._radice)
    def _verifica_completezza_ric(self, nodo):
        if nodo.figlioDx is None and nodo.figlioSx is None:
            return True
        if nodo.figlioDx is None or nodo.figlioDx is None:
            return False
        return self._verifica_completezza_ric(nodo.figlioSx) and self._verifica_completezza_ric(nodo.figlioDx)

    # diametro dell'albero
    def diametro_max(self):
        nodi_max = self.nNodi(self._radice, 1, 1)
        livello_max = 1
        for livello in range(2, self.profondita()+1):
            if self.nNodi(self._radice, livello, 1) > nodi_max:
                nodi_max = self.nNodi(self._radice, livello, 1)
                livello_max = livello
        print(f"Diametro di {nodi_max} al livello {livello_max}")
    def nNodi(self, nodo, k, attuale):
        if k == attuale:
            return 1
        if nodo.figlioSx is None and nodo.figlioDx is None:
            return 0
        if nodo.figlioSx is None:
            return self.nNodi(nodo.figlioDx, k, attuale + 1)
        if nodo.figlioDx is None:
            return self.nNodi(nodo.figlioSx, k, attuale + 1)
        return self.nNodi(nodo.figlioSx, k, attuale + 1) + self.nNodi(nodo.figlioDx, k, attuale + 1)

    # root-to-leaf, restituisce il percorso dalla radice a k
    def root_to_node(self, k):
        return AlberoBinarioRicerca._root_to_node(self._radice, k)
    @staticmethod
    def _root_to_node(nodo, k):
        ret = [nodo.info]
        if k < nodo.info:
            if nodo.figlioSx is None:
                raise Exception("Elemento non trovato")
            ret.extend(AlberoBinarioRicerca._root_to_node(nodo.figlioSx, k))
        if k > nodo.info:
            if nodo.figlioDx is None:
                raise Exception("Elemento non trovato")
            ret.extend(AlberoBinarioRicerca._root_to_node(nodo.figlioDx, k))
        return ret

    # elimina l'elemento k dall'albero
    def elimina(self, k):
        return AlberoBinarioRicerca._elimina_da(self._radice, k)
    @staticmethod
    def _elimina_da(nodo, k):
        if nodo is None:
            raise Exception("Albero vuoto")
        if k == nodo.info:
            if nodo.figlioSx is None and nodo.figlioDx is None:
                return None
            if nodo.figlioSx is None:
                return nodo.figlioDx
            if nodo.figlioDx is None:
                return nodo.figlioSx
            nodo.info = AlberoBinarioRicerca._massimo_da(nodo.figlioSx)
            AlberoBinarioRicerca._elimina_da(nodo.figlioSx, nodo.info)
            return nodo
        if k < nodo.info:
            if nodo.figlioSx is None:
                raise Exception("elemento non trovato")
            nodo.figlioSx = AlberoBinarioRicerca._elimina_da(nodo.figlioSx, k)
        if k > nodo.info:
            if nodo.figlioDx is None:
                raise Exception("elemento non trovato")
            nodo.figlioDx = AlberoBinarioRicerca._elimina_da(nodo.figlioDx, k)
        return 1
    @staticmethod
    def _massimo_da(nodo):
        if nodo.figlioDx is None:
            return nodo.info
        return AlberoBinarioRicerca._massimo_da(nodo.figlioDx)

    # crea il codice per visualizzare l'albero tramite mermaid
    def abr_to_mermaid(self):
        ret = "graph TB\n\tclassDef ground fill:#00000000, stroke:#00000000, color:#00000000\n"
        ret += AlberoBinarioRicerca._abr_to_mermaid_da(self._radice, "0")
        print(ret)
        return 1
    @staticmethod
    def _abr_to_mermaid_da(nodo, id_padre):
        # traccia : sx = 1, dx = 0, radice = 0
        ret = "\tid" + id_padre + "((" + str(nodo.info) + "))\n"
        if nodo.figlioSx is None and nodo.figlioDx is None:
            ret += ""
        elif nodo.figlioDx is None:
            ret += "\tid" + id_padre + "-->" + "id" + id_padre + "1\n"
            ret += "\tid" + id_padre + "~~~" + "id" + id_padre + '0(("⏚")):::ground\n'
            ret += AlberoBinarioRicerca._abr_to_mermaid_da(nodo.figlioSx, id_padre + "1")
        elif nodo.figlioSx is None:
            ret += "\tid" + id_padre + "~~~" + "id" + id_padre + '1[["⏚"]]:::ground\n'
            ret += "\tid" + id_padre + "-->" + "id" + id_padre + "0\n"
            ret += AlberoBinarioRicerca._abr_to_mermaid_da(nodo.figlioDx, id_padre + "0")
        else:
            ret += "\tid" + id_padre + "-->" + "id" + id_padre + "1\n"
            ret += "\tid" + id_padre + "-->" + "id" + id_padre + "0\n"
            ret += AlberoBinarioRicerca._abr_to_mermaid_da(nodo.figlioDx, id_padre + "0")
            ret += AlberoBinarioRicerca._abr_to_mermaid_da(nodo.figlioSx, id_padre + "1")
        return ret

    # NOTEBOOK 1
    def calcola_somma_valori_foglie_intervallo(self, min_val, max_val):
        return AlberoBinarioRicerca._csvfi_ric(self._radice, min_val, max_val)
    @staticmethod
    def _csvfi_ric(nodo, min_val, max_val):
        if nodo.figlioSX is None and nodo.figlioDx is None:
            if nodo.info >= min_val and nodo.info <= max_val:
                return nodo.info
            else:
                return 0
        if nodo.figlioSx is None:
            return AlberoBinarioRicerca._csvfi_ric(nodo.figlioDx, min_val, max_val)
        if nodo.figlioDx is None:
            return AlberoBinarioRicerca._csvfi_ric(nodo.figlioSx, min_val, max_val)
        return AlberoBinarioRicerca._csvfi_ric(nodo.figlioSx, min_val, max_val) + AlberoBinarioRicerca._csvfi_ric(nodo.figlioDx, min_val, max_val)

    def visita_in_order(self): # sx - padre - dx
        return AlberoBinarioRicerca._visita_in_order_ric(self._radice)
    @staticmethod
    def _visita_in_order_ric(nodo):
        ret = []
        if nodo is not None:
            ret.extend(AlberoBinarioRicerca._visita_in_order_ric(nodo.figlioSx))
            ret.append(nodo.info)
            ret.extend(AlberoBinarioRicerca._visita_in_order_ric(nodo.figlioDx))
        return ret

    def visita_pre_order(self): # padre - sx - dx
        return AlberoBinarioRicerca._visita_pre_order_ric(self._radice)
    @staticmethod
    def _visita_pre_order_ric(nodo):
        ret = []
        if nodo is not None:
            ret.append(nodo.info)
            ret.extend(AlberoBinarioRicerca._visita_pre_order_ric(nodo.figlioSx))
            ret.extend(AlberoBinarioRicerca._visita_pre_order_ric(nodo.figlioDx))
        return ret

    def visita_post_order(self): # sx - dx - padre
        return AlberoBinarioRicerca._visita_post_order_ric(self._radice)
    @staticmethod
    def _visita_post_order_ric(nodo):
        ret = []
        if nodo is not None:
            ret.extend(AlberoBinarioRicerca._visita_post_order_ric(nodo.figlioSx))
            ret.extend(AlberoBinarioRicerca._visita_post_order_ric(nodo.figlioDx))
            ret.append(nodo.info)
        return ret

    def verifica_avl(self):
        if self._radice is None:
            return True
        return AlberoBinarioRicerca._verifica_avl_da(self._radice)
    @staticmethod
    def _verifica_avl_da(nodo):
        if nodo is None:
            return True
        if abs(AlberoBinarioRicerca._altezza_da_nodo(nodo.figlioSx)-AlberoBinarioRicerca._altezza_da_nodo(nodo.figlioDx)) > 1:
            return False
        return True
    @staticmethod
    def _altezza_da_nodo(nodo):
        if nodo is None:
            return 0
        if nodo.figlioSx is None and nodo.figlioDx is None:
            return 1
        if nodo.figlioSx is None:
            return 1 + AlberoBinarioRicerca._altezza_da_nodo(nodo.figlioDx)
        if nodo.figlioDx is None:
            return 1 + AlberoBinarioRicerca._altezza_da_nodo(nodo.figlioSx)
        return 1 + max(AlberoBinarioRicerca._altezza_da_nodo(nodo.figlioSx), AlberoBinarioRicerca._altezza_da_nodo(nodo.figlioDx))

    def verifica_bilanciato(self):
        if self._radice is None:
            return True
        return self._verifica_bil_ric(self._radice)

    def _verifica_bil_ric(self, nodo):
        if nodo is None:
            return True
        if not self._verifica_bil_ric(nodo.figlioSx):
            return False
        if not self._verifica_bil_ric(nodo.figlioDx):
            return False

        if nodo.figlioDx is None and nodo.figlioSx is not None:
            return self._calcola_altezza(nodo.figlioSx)<=1
        if nodo.figlioDx is not None and nodo.figlioSx is None:
            return self._calcola_altezza(nodo.figlioDx)<=1
        else:
            return abs(self._calcola_altezza(nodo.figlioSx)-self._calcola_altezza(nodo.figlioDx))<=1

    def _calcola_altezza(self, nodo):
        if nodo is None:
            return 0
        if nodo.figlioSx is None and nodo.figlioDx is not None:
            return 1+self._calcola_altezza(nodo.figlioDx)
        if nodo.figlioDx is None and nodo.figlioSx is not None:
            return 1+self._calcola_altezza(nodo.figlioSx)
        return 1+ max(self._calcola_altezza(nodo.figlioSx), self._calcola_altezza(nodo.figlioDx))

    @staticmethod
    def merge(rad1, rad2):
        albero = AlberoBinarioRicerca()
        albero._crea_da_nodo(rad1)
        albero._crea_da_nodo(rad2)
        return albero

    def _crea_da_nodo(self, nodo):
        if nodo is None:
            return
        self.aggiungi_Ite(nodo.info)
        self._crea_da_nodo(nodo.figlioDx)
        self._crea_da_nodo(nodo.figlioSx)
        return




abr = AlberoBinarioRicerca()
abr.aggiungi_Ite(100)
abr.aggiungi_Ite(51)
abr.aggiungi_Ite(300)
abr.aggiungi_Ite(10)
abr.aggiungi_Ite(80)
abr.aggiungi_Ite(203)
abr.aggiungi_Ite(500)
abr.aggiungi_Ite(25)
abr.aggiungi_Ite(73)
abr.aggiungi_Ite(150)
abr.aggiungi_Ite(407)