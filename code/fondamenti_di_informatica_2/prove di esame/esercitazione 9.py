from listaconcatenata import ListaConcatenata

class Personale:
    def __init__(self, nome, tipo, unita):
        self._nome = nome
        self._tipo = tipo
        self._unita = unita
    def get_nome(self):
        return self._nome
    def get_tipo(self):
        return self._tipo
    def get_unita_sotto_controllo(self):
        return self._unita
    def __eq__(self, other):
        if other is None or not isinstance(other, Personale):
            return False
        if other is self:
            return True
        return self.get_nome() == other.get_nome() and self.get_tipo() == other.get_tipo() and self.get_unita_sotto_controllo() == other.get_unita_sotto_controllo()
    def __repr__(self):
        ret = f"{self.get_nome()}, "
        if self.get_tipo(): ret += "medico, "
        else: ret += "infermiere, "
        ret += f"{self.get_unita_sotto_controllo()}"
        return ret
    
class Intervento:
    def __init__(self, codice, equipe, ruoli, durata):
        self._cod = codice
        self._equipe = equipe
        self._ruoli = ruoli
        self._durata = durata
    def get_codice(self):
        return self._cod
    def get_equipe(self):
        return self._equipe
    def get_ruoli(self):
        return self._ruoli
    def get_durata(self):
        return self._durata
    def __eq__(self, other):
        if other is None or not isinstance(other, Intervento):
            return False
        if self is other:
            return True
        return self.get_codice() == other.get_codice()
    def __repr__(self):
        ret = f"{self.get_codice()} --- {self.get_durata()} h\n"
        for i in range(len(self.get_equipe())):
            ret += f"{self.get_equipe()[i]}, {self.get_ruoli()[i]}\n"
        return ret
    
class Sistema:
    def __init__(self, listaPersonale, listaInterventi):
        self.listaPersonale = listaPersonale
        self.listaInterventi = listaInterventi
    def __repr__(self):
        ret = "LISTA PERSONALE\n"
        for persona in self.listaPersonale:
            ret += f"{persona}\n"
        ret += "\nLISTA INTERVENTI\n"
        for intervento in self.listaInterventi:
            ret += f"{intervento}\n"
        return ret
    #ES 1
    def verifica_acc(self, persona):
        if not persona.get_unita_sotto_controllo():
            for sotto in persona.get_unita_sotto_controllo():
                if (persona.get_tipo() and not sotto.get_tipo()) or (not persona.get_tipo() and sotto.get_tipo()):
                    return False
        return True
    def verifica(self):
        for persona in self.listaPersonale:
            if not self.verifica_acc(persona):
                return False
        return True
    #ES 2
    def nInterventi(self, medico, ruolo):
        tot = 0
        for intervento in self.listaInterventi:
            if medico.get_nome() in intervento.get_equipe():
                for i in range(0, len(intervento.get_equipe())):
                    if intervento.get_equipe()[i] == medico.get_nome() and intervento.get_ruoli()[i] == ruolo:
                        tot += 1
        return tot
    def medico_frequente_con_ruolo(self, ruolo):
        maxInt = None
        maxMed = None
        for medico in self.listaPersonale:
            if medico.get_tipo() and (maxInt is None or self.nInterventi(medico, ruolo) > maxInt):
                maxInt = self.nInterventi(medico, ruolo)
                maxMed = medico.get_nome()
        return maxMed
    #ES 3
    def solo_medici(self, lp):
        nl = []
        for persona in lp:
            if persona.get_tipo():
                nl.append(persona)
        return nl
    def durata_media(self, lp):
        media = 0
        count = 0
        controllati = []
        lp = self.solo_medici(lp)
        for intervento in self.listaInterventi:
            for medico in lp:
                if intervento not in controllati and medico.get_nome() in intervento.get_equipe():
                    controllati.append(intervento)
                    media += intervento.get_durata()
                    count += 1
        return media/count



# Creazione del personale
P1 = Personale("Rossi", True, ["Bianchi"])
P2 = Personale("Bianchi", True, ["Rossi"])
P3 = Personale("Verdi", False, ["Bruni", "Neri"])
P4 = Personale("Neri", False, ["Bruni", "Verdi"])
P5 = Personale("Bruni", False, [])

# Aggiunta del personale alla lista concatenata
lista_personale = ListaConcatenata()
lista_personale.aggiungi_in_coda(P1)
lista_personale.aggiungi_in_coda(P2)
lista_personale.aggiungi_in_coda(P3)
lista_personale.aggiungi_in_coda(P4)
lista_personale.aggiungi_in_coda(P5)

# Creazione degli interventi
I1 = Intervento("C1", ["Rossi", "Bianchi"], ["Chirurgo", "Anestesista"], 3)
I2 = Intervento("C2", ["Rossi", "Verdi", "Bruni"], ["Chirurgo", "Anestesista", "Strumentista chirurgo"], 2)
I3 = Intervento("C3", ["Bianchi", "Verdi", "Neri"], ["Chirurgo", "Anestesista", "Assistente"], 4)

# Aggiunta degli interventi alla lista concatenata
lista_interventi = ListaConcatenata()
lista_interventi.aggiungi_in_coda(I1)
lista_interventi.aggiungi_in_coda(I2)
lista_interventi.aggiungi_in_coda(I3)

# Creazione del sistema con le due liste
sistema = Sistema(lista_personale, lista_interventi)

# Stampa del sistema per verifica
print(sistema)
lp = [P1, P4, P5]
print(sistema.durata_media(lp))