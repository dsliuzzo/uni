from listaconcatenata import ListaConcatenata

class viaggio:
    def __init__(self, cod, destinazione, durata, passeggeri):
        self._cod = cod
        self._destinazione = destinazione
        self._durata = durata
        self._passeggeri = passeggeri
    def getCodice(self):
        return self._cod
    def getDestinazione(self):
        return self._destinazione
    def getDurata(self):
        return self._durata
    def getNumPasseggeri(self):
        return self._passeggeri
    def __eq__(self, other):
        if other is None or not isinstance(other, viaggio):
            return False
        if other is self:
            return True
        return self.getCodice() == other.getCodice()
    def __repr__(self):
        ret = "cod: "
        ret += self.getCodice()
        ret += "\tdest: "
        ret += self.getDestinazione()
        ret += "\tdurata: "
        ret += str(self.getDurata())
        ret += " h\tpasseggeri: "
        ret += str(self.getNumPasseggeri())
        return ret
    
class conducente:
    def __init__(self, nome, Lviaggi):
        self._nome = nome
        self._viaggi = Lviaggi
    def getNome(self):
        return self._nome
    def getViaggi(self):
        return self._viaggi
    def __eq__(self, other):
        if other is None or not isinstance(other, conducente):
            return False
        if self is other:
            return True
        return self.getNome() == other.getNome()
    def __repr__(self):
        ret = "Nome: "
        ret += self.getNome()
        ret += "\nviaggi: "
        for viaggio in self.getViaggi():
            ret += viaggio
            ret += ", "
        return ret

class sistema:
    def __init__(self, Lviaggi, Lconducenti):
        self.listaViaggi = Lviaggi
        self.listaConducenti = Lconducenti
    def __repr__(self):
        ret = "VIAGGI\n"
        for v in self.listaViaggi:
            ret += str(v)
            ret += "\n"
        ret += "\n\nCONDUCENTI\n"
        for c in self.listaConducenti:
            ret += str(c)
            ret += "\n"
        return ret
    #ES 1
    def complessivoOre(self, c):
        tot = 0
        for cod in c.getViaggi():
            for viaggio in self.listaViaggi:
                if cod == viaggio.getCodice():
                    tot += viaggio.getDurata()
        return tot
    def verifica(self, oreMin, passeggeriMax):
        for c in self.listaConducenti:
            if self.complessivoOre(c) < oreMin:
                return False
        for v in self.listaViaggi:
            if v.getNumPasseggeri() > passeggeriMax:
                return False
        return True
    #ES 2
    def nViaggi(self, destinazione):
        n = 0
        for viaggio in self.listaViaggi:
            if viaggio.getDestinazione() == destinazione:
                n += 1
        return n
    def sommaPasseggeri(self, destinazione):
        tot = 0
        for viaggio in self.listaViaggi:
            if viaggio.getDestinazione() == destinazione:
                tot += viaggio.getNumPasseggeri()
        return tot
    def destinazioniRichieste(self, passeggeriMin):
        lista = []
        for viaggio in self.listaViaggi:
            if viaggio.getDestinazione() not in lista and self.nViaggi(viaggio.getDestinazione()) > 1 and self.sommaPasseggeri(viaggio.getDestinazione()) > passeggeriMin:
                lista.append(viaggio.getDestinazione())
        return lista
    #ES 3
    def destinazioniConducente(self, nome):
        ret = []
        for c in self.listaConducenti:
            if c.getNome() == nome:
                for cod in c.getViaggi():
                    for viaggio in self.listaViaggi:
                        if cod == viaggio.getCodice() and viaggio.getDestinazione() not in ret:
                            ret.append(viaggio.getDestinazione())
        return ret
    def conducentiDiversi(self, nome):
        ret = []
        for c in self.listaConducenti:
            if c.getNome() != nome:
                destinazioni = self.destinazioniConducente(c.getNome())
                aggiunta = True
                for dest in destinazioni:
                    if dest in self.destinazioniConducente(nome):
                        aggiunta = False
                if aggiunta:
                    ret.append(c.getNome())
        return ret




viaggi = ListaConcatenata()
viaggi.aggiungi_in_coda(viaggio("V1", "Roma", 5, 70))
viaggi.aggiungi_in_coda(viaggio("V2", "Roma", 6, 40))
viaggi.aggiungi_in_coda(viaggio("V3", "Salerno", 4, 50))
viaggi.aggiungi_in_coda(viaggio("V4", "Salerno", 4, 70))
viaggi.aggiungi_in_coda(viaggio("V5", "Reggio", 3, 50))
viaggi.aggiungi_in_coda(viaggio("V6", "Roma", 5, 40))

conducenti = ListaConcatenata()
conducenti.aggiungi_in_coda(conducente("Rossi", ["V1", "V3", "V6"]))
conducenti.aggiungi_in_coda(conducente("Bianchi", ["V2"]))
conducenti.aggiungi_in_coda(conducente("Verdi", ["V4", "V5"]))

sis = sistema(viaggi, conducenti)

print(sis)

print("\nES 1")
print(sis.verifica(6,80))
print("\nES 2")
print(sis.destinazioniRichieste(130))
print("\nES 3")
print(sis.conducentiDiversi("Bianchi"))
