class Citta:
    def __init__(self, nome, provincia, regione):
        self.nome = nome
        self.provincia = provincia
        self.regione = regione

    def __eq__(self, other):
        if other is None or not isinstance(other, Citta):
            return False
        if other == self:
            return True
        return self.nome == other.nome and \
            self.provincia == other.provincia
    
    def __repr__(self):
        pass


class Tratta:

    def __init__(self, codice, nome, citta_partenza, \
                 citta_destinazione, distanza):
        self.codice = codice
        self.nome = nome
        self.citta_partenza = citta_partenza
        self.citta_destinazione = citta_destinazione
        self.distanza = distanza

    def __eq__(self, other):
        if other is None or not isinstance(other, Tratta):
            return False
        if self == other:
            return True
        return self.codice == other.codice
    
    def __repr__(self):
        pass


class Autoveicolo:

    def __init__(self, targa, marca, cilindrata):
        self.targa = targa
        self.marca = marca
        self.cilindrata = cilindrata

    def __eq__(self, other):
        if other is None or not isinstance(other, Autoveicolo):
            return False
        if self == other:
            return True
        return self.targa == other.targa
    
    def __repr__(self):
        pass


class Percorrenza:

    def __init__(self, tratta, autoveicolo, data):
        self.tratta = tratta
        self.autoveicolo = autoveicolo
        self.data = data

    def __eq__(self, other):
        if other is None or not isinstance(other, Percorrenza):
            return False
        if self == other:
            return True
        return self.tratta == other.tratta and \
            self.autoveicolo == other.autoveicolo and \
            self.data == other.data
    
    def __repr__(self):
        pass


class GestioneReteAS:

    def __init__(self):
        self.lista_citta = []
        self.lista_tratte = []
        self.lista_autoveicoli = []
        self.lista_percorrenze = []

    def __eq__(self, other):
        if other is None or not isinstance(other, GestioneReteAS):
            return False
        if other == self:
            return True
        return self.lista_citta == other.lista_citta and \
            self.lista_tratte == other.lista_tratte and \
            self.lista_autoveicoli == other.lista_autoveicoli and \
            self.lista_percorrenze == other.lista_percorrenze
    
    def __repr__(self):
        pass

    def aggiungi_citta(self, citta):
        self.lista_citta.append(citta)

    def aggiungi_tratta(self, tratta):
        self.lista_tratte.append(tratta)

    def aggiungi_autoveicolo(self, autoveicolo):
        self.lista_autoveicoli.append(autoveicolo)

    def aggiungi_percorrenza(self, percorrenza):
        self.lista_percorrenze.append(percorrenza)


    def accessi(self, c):
        cont = 0
        for p in self.lista_percorrenze:
            if p.tratta.citta_destinazione == c:
                cont += 1
        return cont 
    
    #caso particolare. Memorizziamo solo gli id
    #quindi p.tratta è una stringa (codice tratta)
    def accessi(self, c):
        cont = 0
        for p in self.lista_percorrenze:
            tratta = self.trova_tratta(p.tratta)
            if tratta.citta_destinazione == c:
                cont += 1
        return cont 
    
    def _trova_tratta(self, tratta):
        for t in self.lista_tratte:
            if t.codice == tratta.codice:
                return t
        return None 
    

    def trova_autoveicoli(self, x):
        auto_no = [] #autoveicoli che NON rispettano cond.
        for p in self.lista_percorrenze:
            if p.tratta.distanza > x and \
                p.autoveicolo not in auto_no:
                    auto_no.append(p.autoveicolo)
        #return [a for a in self.lista_autoveicoli if a not in auto_no]
        auto_si = []
        for a in self.lista_autoveicoli:
            if not a in auto_no:
                auto_si.append(a)
        return auto_si
    

    def trova_auto_frequente(self, d1, d2):
        max_auto = None
        max_tratte = 0
        for a in self.lista_autoveicoli:
            cont = 0
            for p in self.lista_percorrenze:
                if p.autoveicolo == a and \
                    p.data >= d1 and p.data <= d2:
                        cont += 1
            if cont > max_tratte:
                max_tratte = cont
                max_auto = a
        return max_auto
    

    def trova_auto_frequente_v2(self, d1, d2):
        cont_tratte = [0]*len(self.lista_autoveicoli)
        for p in self.lista_percorrenze:
            if p.data >= d1 and p.data <= d2:
                auto = p.autoveicolo
                indice_auto = self.lista_autoveicoli.index(auto)
                cont_tratte[indice_auto] += 1
        cont_max = max(cont_tratte)
        indice_max = cont_tratte.index(cont_max)
        return self.lista_autoveicoli.index(indice_max)
    

    def citta_gettonate(self):
        cont_accessi = [] 
        for c in self.lista_citta:
            cont_accessi.append(self.accessi(c))
        lista_citta_nostra = self.lista_citta.copy()
        return sorted(lista_citta_nostra, 
                      key=lambda k: cont_accessi[lista_citta_nostra.index(k)], 
                      reverse=True)
