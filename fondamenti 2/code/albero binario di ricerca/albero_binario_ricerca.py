import listaconcatenata as lc

class Nodo:
    def __init__(self, info):
        self.info = info
        self.figlio_sinistro = None
        self.figlio_destro = None

    def __repr__(self):
        return str(self.info)

class AlberoBinarioRicerca:
    def __init__(self,other=None):
        self._inizializza()
        if other is not None:
            self._card=other._card
            self._radice=AlberoBinarioRicerca._copia_ric(self._radice)

    def _inizializza(self):
        self._radice = None
        self._card = 0

    def svuota(self):
        self._inizializza()



    def __len__(self):
        return self._card


    @staticmethod
    def _copia_ric(nodo):
        if nodo is None:
            return None
        copia = Nodo(nodo.info)
        copia.figlio_sinistro = AlberoBinarioRicerca._copia_ric(nodo.figlio_sinistro)
        copia.figlio_destro = AlberoBinarioRicerca._copia_ric(nodo.figlio_destro)
        return copia
   
    def copia(self):
        ret = AlberoBinarioRicerca()
        ret._card=self._card
        ret._radice = AlberoBinarioRicerca._copia_ric(self._radice)
        return ret

 
    @staticmethod
    def _converti_in_stringa_da(nodo):  # restituisce la stringa corrispondente
                                        # alla sequenza ordinata 
                                        # (corrisponde alla visita "in ordine")
        if nodo is None:
            return ''
        s = AlberoBinarioRicerca._converti_in_stringa_da(nodo.figlio_sinistro)
        s += " "+str(nodo.info)
        s += AlberoBinarioRicerca._converti_in_stringa_da(nodo.figlio_destro)
        return s

    def __repr__(self):
         return AlberoBinarioRicerca._converti_in_stringa_da(self._radice)

    def stampaIterativa(self):  # esegue la stampa della sequenza ordinata dei valori
                                # in modo iterativo 
                                # (visita "in ordine" usando una pila)
        pila=lc.ListaConcatenata()
        pila.push( (self._radice, False) )
        while len(pila)>0:
            (nodo,stampa)=pila.pop()
            if nodo is not None:
                if stampa:
                    print(nodo.info)
                else:
                    pila.push( (nodo.figlio_destro, False) )
                    pila.push( (nodo,True) )
                    pila.push( (nodo.figlio_sinistro,False) )    

    def stampaIterativaPerLivelli(self): # esegue una stampa per livelli 
                                         # da cui è facile capire la struttura dell'albero
        if self._radice is None:
            print("Albero vuoto!")
            return
        codaNodi=lc.ListaConcatenata()
        codaLivelli=lc.ListaConcatenata()
        codaPadri=lc.ListaConcatenata()
        codaSxDx=lc.ListaConcatenata()
        codaNodi.enqueue( self._radice )
        codaLivelli.enqueue( 1 )
        codaPadri.enqueue(None)
        codaSxDx.enqueue(None)
        livelloCorrente=0
        while len(codaNodi)>0:
            nodo  =codaNodi.dequeue()
            livello = codaLivelli.dequeue()
            padre = codaPadri.dequeue()
            sxdx = codaSxDx.dequeue()
            if livello>livelloCorrente:
                print()
                print("Livello",livello,":")
                livelloCorrente+=1
            if livello==1:
                print(nodo.info,end="; ")
            else:
                print(nodo.info, end="")
                if sxdx:
                    print(" figlio sinistro di ",end="")
                else:
                    print(" figlio destro di ",end="")
                print( padre, end="; ")
            if nodo.figlio_sinistro is not None:
                codaNodi.enqueue( nodo.figlio_sinistro  )
                codaLivelli.enqueue( livello+1 )
                codaPadri.enqueue( nodo.info)
                codaSxDx.enqueue(True)
            if nodo.figlio_destro is not None:
                codaNodi.enqueue( nodo.figlio_destro  )
                codaLivelli.enqueue( livello+1 )
                codaPadri.enqueue( nodo.info)
                codaSxDx.enqueue(False)
    

    def converti_in_lista_semplice(self):
        return AlberoBinarioRicerca._converti_in_lista_semplice_da(self._radice)
        
    @staticmethod
    def _converti_in_lista_semplice_da(nodo):
        if nodo is None:
            return []
        l = AlberoBinarioRicerca._converti_in_lista_semplice_da(nodo.figlio_sinistro)
        l.append(nodo.info)
        l=l+AlberoBinarioRicerca._converti_in_lista_semplice_da(nodo.figlio_destro)
        return l    









    def aggiungi(self, valore):
        self._card += 1
        self._radice = self._aggiungi_da(self._radice, valore)

    def _aggiungi_da(self, nodo, valore):
        if nodo is None:
            return Nodo(valore)
        else:
            if valore <= nodo.info:
                nodo.figlio_sinistro = self._aggiungi_da(nodo.figlio_sinistro, valore)
            else:
                nodo.figlio_destro = self._aggiungi_da(nodo.figlio_destro, valore)
        return nodo
    
    def aggiungi_versione_iterativa(self, valore): 
        self._card += 1
        if self._radice is None:
            self._radice = Nodo(valore)
        else:
            padre = self._radice
            inserito = False
            while not inserito:
                if valore <= padre.info:
                    if padre.figlio_sinistro is None:
                        padre.figlio_sinistro = Nodo(valore)
                        inserito = True
                    else:
                        padre = padre.figlio_sinistro
                else:
                    if padre.figlio_destro is None:
                        padre.figlio_destro = Nodo(valore)
                        inserito = True
                    else:
                        padre = padre.figlio_destro







    #VERSIONE RICORSIVA ALTERNATIVA DI aggiungi
    def aggiungi_versione_ricorsiva_BIS(self,valore):
        self._card+=1
        if self._radice is None:
            self._radice=Nodo(valore)
        else:
            self._aggiungi_da_BIS(self._radice,valore)    

    def _aggiungi_da_BIS(self,nodo,valore):
        if valore<=nodo.info:
            if nodo.figlio_sinistro is None:
                nodo.figlio_sinistro=Nodo(valore)
            else:
                self._aggiungi_da_BIS(nodo.figlio_sinistro,valore)        
        else:
            if nodo.figlio_destro is None:
                nodo.figlio_destro=Nodo(valore)
            else:
                self._aggiungi_da_BIS(nodo.figlio_destro,valore)    





    def conta_iterativa(self, valore):
  
        c = 0
        nodo = self._radice
        while nodo is not None:
            if nodo.info == valore:
                c += 1
            if valore <= nodo.info:
                nodo = nodo.figlio_sinistro
            else:
                nodo = nodo.figlio_destro
        return c






    def conta(self, valore):
        return self._conta_da(self._radice, valore)
    
    def _conta_da(self, nodo, valore):
        if nodo is None:
            return 0
        if valore < nodo.info:
            return self._conta_da(nodo.figlio_sinistro, valore)
        elif valore==nodo.info: 
            return 1+ self._conta_da(nodo.figlio_sinistro, valore)
        else:    
            return self._conta_da(nodo.figlio_destro, valore)
        

    def rimuovi(self, info):
        if self._card == 0:
             raise Exception('Albero vuoto!')
        # cerco la prima occorrenza di info
        # il nodo contenente tale occorrenza si chiamerà "nodo"
        # il padre di tale nodo si chiamerà "padre"
        padre = None
        nodo = self._radice
        trovato = info == nodo.info
        while not trovato and nodo is not None:
            padre = nodo
            if info < nodo.info:
                nodo = nodo.figlio_sinistro
                figlio_sinistro = True
            else:    
                nodo = nodo.figlio_destro
                figlio_sinistro = False
            trovato = nodo is not None and info == nodo.info
        if not trovato:
            return False
        # se nodo non ha figlio destro o sinistro, faccio sì che il padre di nodo punti all'unico figlio di nodo, anzichè a nodo
        if nodo.figlio_sinistro is None or nodo.figlio_destro is None:
            unico_figlio = nodo.figlio_sinistro
            if unico_figlio is None:
                unico_figlio = nodo.figlio_destro      
            if padre is None:
                self._radice = unico_figlio
            else:
                if figlio_sinistro:
                    padre.figlio_sinistro = unico_figlio
                else:
                    padre.figlio_destro = unico_figlio
        # altrimenti, se nodo ha entrambi i figli, cerco il valore minimo del sottoalbero destro,
        # lo cancello dal sottoalbero destro, e lo sostituisco al nodo con info
        else:
            padre_nodo_minimo = nodo
            nodo_minimo = nodo.figlio_destro
            while nodo_minimo.figlio_sinistro is not None:
                padre_nodo_minimo = nodo_minimo
                nodo_minimo = nodo_minimo.figlio_sinistro
            valore_minimo = nodo_minimo.info
            if padre_nodo_minimo is nodo:
                nodo.figlio_destro = nodo_minimo.figlio_destro
            else:
                padre_nodo_minimo.figlio_sinistro = nodo_minimo.figlio_destro
            nodo.info = valore_minimo 
        #diminuisco la cardinalità
        self._card -= 1
        return True

    @staticmethod
    def _verifica_bilanciamento(nodo):  # Restituisce coppia (b, p) dove:
                                        #    b è un booleano che indica se l'albero radicato in "nodo" è bilanciato
                                        #    p è la profondità dell'albero radicato in "nodo"
                                        # Per convenzione, un albero vuoto è bilanciato
        if nodo is None:
            return (True, 0)
        (bilanciato_sinistra, profondita_sinistra) = AlberoBinarioRicerca._verifica_bilanciamento(nodo.figlio_sinistro)
        (bilanciato_destra, profondita_destra) = AlberoBinarioRicerca._verifica_bilanciamento(nodo.figlio_destro)
        bilanciato = bilanciato_sinistra and bilanciato_destra and abs(profondita_sinistra - profondita_destra) <= 1
        profondita_max = max(profondita_sinistra, profondita_destra)
        return (bilanciato, 1 + profondita_max)
               
    def e_bilanciato(self):
        (b, _) = AlberoBinarioRicerca._verifica_bilanciamento(self._radice)
        return b    

    def profondita(self):
        (_, p) = AlberoBinarioRicerca._verifica_bilanciamento(self._radice)
        return p    


    def __contains__(self, valore):
        return self._contiene_da(self._radice, valore)
    
    def _contiene_da(self, nodo, valore):
        if nodo is None:
            return False
        if nodo.info == valore:
            return True
        if valore <= nodo.info:
            return self._contiene_da(nodo.figlio_sinistro, valore)
        else:
            return self._contiene_da(nodo.figlio_destro, valore)

    def contiene_iterativa(self, valore):
        nodo = self._radice
        while nodo is not None:
            if nodo.info == valore:
                return True
            if valore <= nodo.info:
                 nodo = nodo.figlio_sinistro
            else:
                nodo = nodo.figlio_destro
        return False




    def __eq__(self, other):
        if other is None or not isinstance(other, AlberoBinarioRicerca):
            return False
        if other is self:
            return True
        return self._card == other._card and self.converti_in_lista_semplice() == other.converti_in_lista_semplice()

    def uguali_in_struttura(self,other):
        if self._card != other._card:
            return False
        self._uguali_in_struttura_da(self._radice, other._radice)

    def _uguali_in_struttura_da(self, nodo1, nodo2):
        if nodo1 is None:
            if nodo2 is None:
                return True
            else:
                return False
        if nodo2 is None:
            return False
        if nodo1.info != nodo2.info:
            return False    
        return self._uguali_in_struttura_da(nodo1.figlio_sinistro,nodo2.figlio_sinistro) and self._uguali_in_struttura_da(nodo1.figlio_destro,nodo2.figlio_destro)

    

