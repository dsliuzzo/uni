from listaconcatenata import ListaConcatenata

class Dipendente:
    def __init__(self, nome, argomenti):
        self._nome = nome
        self._argomenti = argomenti
    def __eq__(self, other):
        if other is None or not isinstance(other, Dipendente):
            return False
        if other is self:
            return True
        return self._nome == other._nome
    def __repr__(self):
        return f"{self._nome}, {self._argomenti}"
    def get_nome(self):
        return self._nome
    def get_argomenti_interesse(self):
        return self._argomenti
    
class Riunione:
    def __init__(self, cod, partecipanti, argomenti, data, durata):
        self._cod = cod
        self._partecipanti = partecipanti
        self._argomenti = argomenti
        self._data = data
        self._durata = durata
    def __eq__(self, other):
        if other is None or not isinstance(other, Riunione):
            return False
        if self is other:
            return True
        return self._cod == other._cod
    def __repr__(self):
        return f"codice: {self._cod}\npartecipanti: {self._partecipanti}\nargomenti: {self._partecipanti}\ndata: {self._data}\ndurata: {self._durata}"
    def get_codice(self):
        return self._cod
    def get_partecipanti(self):
        return self._partecipanti
    def get_argomenti(self):
        return self._argomenti
    def get_data(self):
        return self._data
    def get_durata(self):
        return self._durata
    
class Sistema:
    def __init__(self, listaDipendenti, listaRiunioni):
        self.listaDipendenti = listaDipendenti
        self.listaRiunioni = listaRiunioni
    def __repr__(self):
        ret = "DIPENDENTI\n"
        for dipendente in self.listaDipendenti:
            ret += f"{dipendente}\n"
        ret += "\nRIUNIONI\n"
        for riunione in self.listaRiunioni:
            ret += f"{riunione}\n"
        return ret
    
    #ES 1
    def lista_argomenti(self):
        ret = []
        for dipendente in self.listaDipendenti:
            for argomento in dipendente.get_argomenti_interesse():
                if argomento not in ret:
                    ret.append(argomento)
        return ret
    def argomento_trattato(self, a, d):
        for riunione in self.listaRiunioni:
            count = 0
            if riunione.get_data() < d:
                for argomento in riunione.get_argomenti():
                    if argomento == a:
                        count += 1
        return count
    def argomento_frequente(self, d):
        argomenti = self.lista_argomenti()
        argomento_max = None
        count_max = None
        for argomento in argomenti:
            if argomento_max is None or count_max < self.argomento_trattato(argomento, d):
                argomento_max = argomento
                count_max = self.argomento_trattato(argomento, d)
        return argomento_max
    
    #ES 2
    def somma_durate_riunioni(self, nome_dip):
        tot = 0
        for riunione in self.listaRiunioni:
            if nome_dip in riunione.get_partecipanti():
                tot += riunione.get_durata()
        return tot
    def esperti(self, X, Y):
        for argomento in Y.get_argomenti_interesse():
            if argomento not in X.get_argomenti_interesse():
                return False
        return True
    def nome_dipendente(self, nome_dip):
        for dipendente in self.listaDipendenti:
            if dipendente.get_nome() == nome_dip:
                return dipendente
        raise Exception("Dipendente non trovato")
    def dipendenti_piu_attivi(self, nome_dip):
        ret = []
        dipendente2 = self.nome_dipendente(nome_dip)
        for dipendente1 in self.listaDipendenti:
            if self.somma_durate_riunioni(dipendente1.get_nome()) > self.somma_durate_riunioni(nome_dip) and self.esperti(dipendente1, dipendente2):
                ret.append(dipendente1.get_nome())
        return ret
    
    #ES 3
    def trattati_giornata(self, d):
        ret = []
        for riunione in self.listaRiunioni:
            if riunione.get_data() == d:
                for argomento in riunione.get_argomenti():
                    if argomento not in ret:
                        ret.append(argomento)
        return ret
    def argomenti_no(self, nome_dip, d):
        ret = []
        for argomento in s.nome_dipendente(nome_dip).get_argomenti_interesse():
            if argomento not in s.trattati_giornata(d):
                ret.append(argomento)
        return ret

        

    
dipendenti = ListaConcatenata()
dipendenti.aggiungi_in_coda(Dipendente("Rossi", ["A", "B", "C"]))
dipendenti.aggiungi_in_coda(Dipendente("Verdi", ["A", "D", "E"]))
dipendenti.aggiungi_in_coda(Dipendente("Neri", ["A", "B", "C", "E", "F"]))

riunioni = ListaConcatenata()
riunioni.aggiungi_in_coda(Riunione("R1", ["Rossi", "Verdi"], ["B", "D", "F"], 15, 1))
riunioni.aggiungi_in_coda(Riunione("R2", ["Rossi", "Verdi", "Neri"], ["A", "B"], 18, 3))
riunioni.aggiungi_in_coda(Riunione("R3", ["Verdi", "Neri"], ["E", "F"], 21, 2))
riunioni.aggiungi_in_coda(Riunione("R4", ["Rossi", "Verdi", "Neri"], ["A", "C", "E"], 12, 2))
riunioni.aggiungi_in_coda(Riunione("R5", ["Rossi", "Neri"], ["B", "C", "F"], 21, 1))

s = Sistema(dipendenti, riunioni)

print(s.argomenti_no("Verdi", 21))
