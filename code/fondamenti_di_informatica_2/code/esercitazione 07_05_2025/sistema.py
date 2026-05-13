from listaconcatenata import ListaConcatenata
from listaconcatenata import Iteratore
class sistema:
    '''[...]'''
    # anche nell'es 1 in esame le liste utilizzate di solito sono liste concatenate
    dipendenti = ListaConcatenata()
    riunioni = ListaConcatenata()
    # ES 1
    def argomento_frequente(self, d):
        # creiamo una lista di tutti gli argomenti trattati senza duplicati
        tutti_argomenti = ListaConcatenata()
        contatore_argomenti = ListaConcatenata()
        it = Iteratore(self.riunioni)
        while not it.finito():
            riunione = it.next()
            if riunione.get_data() < d:
                it2 = Iteratore(riunione.get_argomenti_trattati())
                while not it2.finito():
                    argomento = it2.next()
                    if not tutti_argomenti.contains(argomento):
                        tutti_argomenti.aggiungi_in_coda(argomento)
                        contatore_argomenti.aggiungi_in_coda(1)
                    else:
                        it3 = Iteratore(tutti_argomenti)
                        it4 = Iteratore(contatore_argomenti)
                        indice = -1
                        while not it3.finito():
                            argomento_corrente = it3.next()
                            contatore_corrente = it4.next()
                            indice += 1
                            if argomento_corrente == argomento:
                                contatore_argomenti.rimuovi(indice)
                                contatore_argomenti.inserisci(indice, contatore_corrente+1)
        # trovare l'argomento in corrispondenza di max contatore
        max_tmp = 0
        arg_max = None
        it5 = Iteratore(contatore_argomenti)
        it6 = Iteratore(tutti_argomenti)
        while not it5.finito():
            contatore = it5.next()
            argomento = it6.next()
            if contatore > max_tmp:
                max_tmp = contatore
                arg_max = argomento
        return arg_max
    # ES 2
    def dipendenti_piu_attivi(self, nome_dip):
        it = Iteratore(self.dipendenti)
        dip = None
        while not it.finito():
            dipendente = it.next()
            if dipendente._get_nome() == nome_dip:
                dip = dipendente
                break
        if dip == None:
            return []
        argomenti = dip.get_argomenti_interesse()
        somma_durate_riunioni = self.calcola_durata_riunioni(dip)
        dipendenti_attivi = ListaConcatenata()
        it2 = Iteratore(self.dipendenti)
        while not it2.finito():
            argomento = it2.next()
            if dipendente != dip:
                somma_durate_riunioni_altro = self._calcola_durata_riunioni(dipendente)
                if somma_durate_riunioni_altro > somma_durate_riunioni:
                    argomenti_interesse_altro = dipendente.get_argomenti_interesse()
                    if sistema._esperto_tutti_argomenti(dipendente.get_argomenti_interesse(), argomenti):
                        dipendenti_attivi.aggiungi_in_coda(dipendente.get_nome())
        return dipendenti_attivi


    def _calcola_durata_riunioni(self, dip):
        somma = 0
        it = Iteratore(self.riunioni)
        while not it.finito():
            riunione = it.next()
            if riunione.get_partecipanti().contains(dip):
                somma += riunione.get_durata()
        return somma
    # check che X è esperto in tutti gli argomenti di Y
    @staticmethod
    def _esperto_tutti_argomenti(argomenti_X, argomenti_Y):
        it = Iteratore(argomenti_Y)
        while not it.finito():
            argomento = it.next()
            if not argomenti_X.containts(argomento):
                return False
        return True
    
    # ES 3
    def argomenti_no(self, nome_dip, d):
        it = Iteratore(self.dipendenti)
        dip = None
        while not it.finito():
            dipendente = it.next()
            if dipendente.get_nome() == nome_dip:
                dip = dipendente
                break
        if dip == None:
            return []
        argomenti_ok = ListaConcatenata(dip.get_argomenti_interesse())
        indici_da_rimuovere = ListaConcatenata()
        indice = -1
        it = Iteratore(argomenti_ok)
        while not it.finito():
            arg = it.next()
            indice += 1
            if self._argomento_trattato_in_data(arg, d):
                indici_da_rimuovere.aggiungi_in_testa(indice)
        it = Iteratore(indici_da_rimuovere)
        while not it.finito():
            indice = it.next()
            argomenti_ok.rimuovi(indice)
        return argomenti_ok
    
    def _argomento_trattato_in_data(self, argomento, d):
        it = Iteratore(self.riunioni)
        while not it.finito():
            riunione = it.next()
            if riunione.get_data() == d:
                if riunione.get_argomenti_trattati().contains(argomento):
                    return True
        return False