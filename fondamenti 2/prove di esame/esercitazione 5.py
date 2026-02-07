from listaconcatenata import ListaConcatenata

class Citta:
    def __init__(self, nome, provincia, regione):
        self.nome = nome
        self.provincia = provincia
        self.regione = regione
    def __eq__(self, other):
        if other is None or not isinstance(other, Citta):
            return False
        if other is self:
            return True
        return self.nome == other.nome and self.provincia == other.provincia
    def __repr__(self):
        return f"{self.nome}, {self.provincia}, {self.regione}"

class Tratta:
    def __init__(self, cod, nome, citta_partenza, citta_destinazione, distanza):
        self.cod = cod
        self.nome = nome
        self.citta = {"partenza": citta_partenza, "destinazione": citta_destinazione}
        self.distanza = distanza
    def __eq__(self, other):
        if other is None or not isinstance(other, Tratta):
            return False
        if other is self:
            return True
        return self.cod == other.cod
    def __repr__(self):
        return f"TRATTA n.{self.cod}\nnome: {self.nome}\ncittà: {self.citta["partenza"]} -> {self.citta["destinazione"]}\ndistanza: {self.distanza}"

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
        return f"AUTOVEICOLO\ntarga: {self.targa}\nmarca: {self.marca}\ncilindrata: {self.cilindrata}"

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
        return f"PERCORRENZA\ntratta: {self.tratta}\nautoveicolo: {self.autoveicolo}\ndata: {self.data}"
    
class GestioneReteAS:
    def __init__(self):
        self.citta = []
        self.tratte = []
        self.autoveicoli = []
        self.percorrenze = []
    def __repr__(self):
        ret = "CITTA'\n"
        for citta in self.citta:
            ret += f"{citta}\n"
        ret += "\nTRATTE\n"
        for tratta in self.tratte:
            ret += f"{tratta}\n"
        ret += "\nAUTOVEICOLI\n"
        for autoveicolo in self.autoveicoli:
            ret += f"{autoveicolo}\n"
        ret += "\nPERCORRENZE\n"
        for percorrenza in self.percorrenze:
            ret += f"{percorrenza}\n"
        return ret
    #ES 1
    def accessi(self, c):
        count = 0
        for percorrenza in self.percorrenze:
            if percorrenza.tratta.citta["destinazione"] == c:
                count += 1
        return count
    #ES 2
    def trova_Autoveicoli(self, x):
        ret = []
        for autoveicolo in self.autoveicoli:
            trovato = False
            for percorrenza in self.percorrenze:
                if percorrenza.autoveicolo == autoveicolo:
                    if percorrenza.tratta.distanza >= x:
                        trovato = True
            if not trovato:
                ret.append(autoveicolo)
        return ret
    #ES 3
    def trova_auto_frequente(self, d1, d2):
        autoveicolo_max = None
        tratte_max = 0
        for autoveicolo in self.autoveicoli:
            count = 0
            for percorrenza in self.percorrenze:
                if percorrenza.autoveicolo == autoveicolo and percorrenza.data >= d1 and percorrenza.data <= d2:
                    count += 1
            if count > tratte_max:
                autoveicolo_max = autoveicolo
                tratte_max = count
        return autoveicolo_max
    #ES 4
    def citta_gettonate(self):
        lista = []
        for citta in self.citta:
            lista.append((citta, self.accessi(citta)))
        lista.sort(key = lambda x: x[1], reverse = True)
        ret = []
        for citta in lista:
            ret.append(citta[0])
        return ret



gestore = GestioneReteAS()

# Creazione istanza del gestore
gestore = GestioneReteAS()

# AUTOVEICOLI
a0 = Autoveicolo("XXX", "ALF", 2400)
a1 = Autoveicolo("YYY", "MER", 1600)
a2 = Autoveicolo("ZZZ", "VOL", 1900)
a3 = Autoveicolo("WWW", "REN", 1600)

gestore.autoveicoli.extend([a0, a1, a2, a3])

# CITTA'
c0 = Citta("Lamezia Terme", "CZ", "Calabria")
c1 = Citta("Rende", "CS", "Calabria")
c2 = Citta("Milano", "MI", "Lombardia")
c3 = Citta("Roma", "RM", "Lazio")
c4 = Citta("Firenze", "FI", "Toscana")
c5 = Citta("Torino", "TO", "Piemonte")

gestore.citta.extend([c0, c1, c2, c3, c4, c5])

# TRATTE
t0 = Tratta("cod00", "tratta0", c0, c1, 80.5)
t1 = Tratta("cod01", "tratta1", c3, c1, 516.5)
t2 = Tratta("cod02", "tratta2", c3, c4, 277.0)
t3 = Tratta("cod03", "tratta3", c4, c2, 302.0)
t4 = Tratta("cod04", "tratta4", c5, c2, 141.0)

gestore.tratte.extend([t0, t1, t2, t3, t4])

# PERCORRENZE
p0 = Percorrenza(t0, a0, 1)
p1 = Percorrenza(t0, a1, 1)
p2 = Percorrenza(t1, a1, 2)
p3 = Percorrenza(t2, a2, 2)
p4 = Percorrenza(t3, a3, 2)
p5 = Percorrenza(t4, a0, 2)
p6 = Percorrenza(t2, a2, 3)
p7 = Percorrenza(t3, a3, 3)
p8 = Percorrenza(t4, a3, 4)

gestore.percorrenze.extend([p0, p1, p2, p3, p4, p5, p6, p7, p8])

print(gestore.citta_gettonate())