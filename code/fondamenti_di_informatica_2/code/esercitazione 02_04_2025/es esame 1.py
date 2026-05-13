'''
Città
 - nome
 - provincia
 - regione
Tratta
 - codice
 - nome
 - città di partenza
 - città di arrivo
 - distanza
Autoveicolo
 - targa
 - marca
 - cilindrata
Percorrenza
 - tratta
 - autoveicolo
 - data
Gestione Rete Autostradale
 - città[]
 - tratta[]
 - autoveicolo[]
 - percorrenza[]
'''

class Città:
    def __init__(self, nome, provincia, regione):
        self.nome = nome
        self.provincia = provincia
        self.regione = regione
    def __eq__(self, other):
        if not isinstance(other, Città) or other is None:
            return False
        if other is self:
            return True
        return self.nome == other.nome and self.provincia == other.provincia
    def __repr__(self):
        return f'città({self.nome}, {self.provincia}, {self.regione})'
        # pass non farebbe accadere nulla

class Tratta:
    def __init__(self, codice, nome, città_partenza, città_destinazione, distanza):
        self.codice = codice
        self.nome = nome
        self.città_partenza = città_partenza
        self.città_destinazione = città_destinazione
        self.distanza = distanza
    def __eq__(self, other):
        if other is None or not isinstance(other, Tratta):
            return False
        if other is self:
            return True
        return self.codice == other.codice
    def __repr__(self):
        return f'tratta({self.codice}, {self.nome}, {self.città_partenza}, {self.città_destinazione}, {self.distanza})'

class Autoveicolo:
    def __init__(self, targa, marca, cilindrata):
        self.targa = targa
        self.marca = marca
        self.cilindrata = cilindrata
    def __eq__(self, other):
        if other is None or not isinstance(other, Autoveicolo):
            return False
        if other is self:
            return True
        return self.targa == other.targa
    def __repr__(self):
        return f'Autoveicolo({self.targa}, {self.marca}, {self.cilindrata})'

class Percorrenza:
    def __init__(self, tratta, autoveicolo, data):
        self.tratta = tratta
        self.autoveicolo = autoveicolo
        self.data = data
    def __eq__(self, other):
        if other is None or not isinstance(other, Percorrenza):
            return False
        if other is self:
            return True
        return self.tratta == other.tratta and self.autoveicolo == other.autoveicolo and self.data == other.data
    def __repr__(self):
        return f'percorrenza({self.tratta}, {self.autoveicolo}, {self.data})'

class GestioneReteA:
    def __init__(self):
        self.lista_città = []
        self.lista_tratte = []
        self.lista_autoveicoli = []
        self.lista_percorrenze = []
    def __eq__(self, other):
        if other is None or not isinstance(other, GestioneReteA):
            return False
        if other is self:
            return True
        return self.lista_città == other.lista_città and self.lista_tratte == other.lista_tratte and self.lista_autoveicoli == other.lista_autoveicoli and self.lista_percorrenze == other.lista_percorrenze
    def repr(self):
        return f'Gestione Rete Autostradale:\n{self.lista_città}\n{self.lista_tratte}\n{self.lista_autoveicoli}\n{self.lista_percorrenze}'
    # AGGIUNTA DATI
    def aggiunta_città(self, città):
        self.lista_città.append(città)
    def aggiundi_tratta(self, tratta):
        self.lista_tratte(tratta)
    def aggiungi_autoveicolo(self, autoveicolo):
        self.lista_autoveicoli.append(autoveicolo)
    def aggiungi_percorrenze(self, percorrenza):
        self.lista_percorrenze.append(percorrenza)
    # METODI DELL'ESAME
    # ES 1
    # numero di percorrenze che hanno come destinazione la città c
    def accessi(self, c):
        count = 0
        for p in self.lista_percorrenze:
            if p.tratta.città_destinazione == c:
                count+=1
        return count
    # caso particolare. Memorizziamo solo gli ID.
    # quindi p.tratta è una stringa (codice tratta)
    def accessi_v2(self, c):
        count = 0
        for p in self.lista_percorrenze:
            tratta = self.trova_tratta(p.tratta)
            if tratta.città_destinazione == c:
                count+=1
        return count
    def trovata_tratta(self, tratta):
        for t in self.lista_tratte:
            if t.codice == tratta.codice:
                return t
        return None
    # ES 2
    # lista di autoveicoli che non hanno mai percorso tratte autostradali più lunghe di x km
    def trova_autoveicoli(self, x):
        # ragionamento negativo perchè basta anche solo una condizione non rispettata per non aggiungere l'autoveicolo alla lista
        auto_no = [] # autoveicoli che non rispettano la condizione
        for p in self.lista_percorrenze:
            if p.tratta.distanza > x and p.autoveicolo not in auto_no:
                auto_no.append(p.autoveicolo)
        # sintassi per restituire l'insieme complementare di auto_no in cui l'insieme U è self.lista_autoveicoli
        return [a for a in self.lista_autoveicoli if a not in auto_no]
        # versione estesa
        '''
        auto_si = []
        for a in self.lista_autoveicoli:
            if not a in auto_no:
                auto_si.append(a)
        return auto_si
        '''
    # ES 3
    # restituisce l'autoveicolo che ha percorso il maggior numero di tratte nell'intervallo di date d1 e d2
    def trova_auto_frequenti(self, d1, d2):
        max_auto = None
        max_tratte = 0
        for a in self.lista_autoveicoli:
            count = 0
            for p in self.lista_percorrenze:
                if p.autoveicolo == a and p.data >= d1 and p.data <= d2:
                    count+=1
            if count > max_tratte:
                max_tratte = count
                max_auto = a
        return max_auto
    # ^ inefficiente
    # scorriamo percorrenze e memorizziamo in una lista il numero di occorrenze per ogni autoveicolo, poi ne ricaviamo il max
    def trova_auto_frequenti_v2(self, d1, d2):
        count_tratte = [0]*len(self.lista_autoveicoli)
        for p in self.lista_percorrenze:
            if p.data >= d1 and p.data <= d2:
                auto = p.autoveicolo
                index_auto = self.lista_autoveicoli.index(auto)
                count_tratte[index_auto]+=1
        count_max = max(count_tratte)
        index_max = count_tratte.index(count_max)
        return self.lista_autoveicoli.index(index_max)
    # ES 4
    # restituisce la lista ordinata di città in maniera decrescente in base al numero di accessi per come definito dall'es 1
    def città_gettonate(self):
        count_accessi = []
        for c in self.lista_città:
            count_accessi.append(self.accessi(c))
        lista_città2 = self.lista_città.copy()
        return sorted(lista_città2, key = lambda k: count_accessi[lista_città2.index(k)], reverse=True)
    # sort agisce sulla lista su cui viene invocato lista.sort() applicando l'ordinamento direttamente su lista
    # sorted ritorna una nuova lista ordinata, inoltre possiamo utilizzare altri parametri: funzione di ordinamento, stabilire ordinamento crescente o decrescente in base a un booleano