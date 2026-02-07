from listaconcatenata import ListaConcatenata

class Contratto:
    def __init__(self, squadra, calciatore, prezzo, premi):
        self._squadra = squadra
        self._calciatore = calciatore
        self._prezzo = prezzo
        self._premi = premi
    def get_squadra(self):
        return self._squadra
    def get_calciatore(self):
        return self._calciatore
    def get_prezzo(self):
        return self._prezzo
    def get_premi(self):
        return self._premi
    def __eq__(self, other):
        if other is None or not isinstance(other, Contratto):
            return False
        if other is self:
            return True
        return self.get_squadra() == other.get_squadra() and self.get_calciatore() == other.get_calciatore() and self.get_prezzo() == other.get_prezzo() and self.get_premi() == other.get_premi()
    def __repr__(self):
        return f"CONTRATTO\nsquadra: {self.get_squadra()}\ncalciatore: {self.get_calciatore()}\nprezzo: {self.get_prezzo()} €\npremi: {self.get_premi()}"

class Calciatore:
    def __init__(self, nome, squadra_attuale):
        self._nome = nome
        self._squadra_attuale = squadra_attuale

    def get_nome(self):
        return self._nome

    def get_squadra_attuale(self):
        return self._squadra_attuale

    def __eq__(self, other):
        if other is None or not isinstance(other, Calciatore):
            return False
        if other is self:
            return True
        if other.get_nome() == self._nome and other.get_squadra_attuale() == self._squadra_attuale:
            return True
        return False

    def __repr__(self):
        return f"Nome: {self._nome}, Squadra attuale: {self._squadra_attuale}"

class Sistema:
    def __init__(self, lista_contratti, lista_calciatori):
        self.listaContratti = lista_contratti
        self.listaCalciatori = lista_calciatori
    def __repr__(self):
        ret = ""
        for contratto in self.listaContratti:
            ret += f"{contratto}"
        ret += "\n\nCALCIATORI\n"
        for calciatore in self.listaCalciatori:
            ret += f"{calciatore}\n"
        return ret

    # Restituisce True se e solo se in nessun contratto la squadra che ha effettuato l'acquisto è la squadra attuale
    # del calciatore acquistato
    def nome_calciatore(self, nome):
        for calciatore in self.listaCalciatori:
            if nome == calciatore.get_nome():
                return calciatore
        raise Exception("calciatore non trovato")
    def verifica_dati(self):
        for contratto in self.listaContratti:
            if contratto.get_squadra() == self.nome_calciatore(contratto.get_calciatore()).get_squadra_attuale():
                return False
        return True
    # il metodo restituisce la lista dei nomi delle squadre che:
    # - hanno acquistato calciatori da almeno 3 squadre diverse
    # - hanno speso in totale (per tutti gli acquisti) almeno pMin
    def squadreAttive(self, pMin):
        squadre = []
        for contratto in self.listaContratti:
            if contratto.get_squadra() not in squadre:
                squadre.append(contratto.get_squadra())
        ret = ListaConcatenata()
        for squadra in squadre:
            if self.squadre_diverse(squadra) >= 3 and self.squadre_spesa(squadra) >= pMin:
                ret.aggiungi_in_coda(squadra)
        return ret
    def squadre_spesa(self, squadra):
        spesa_totale = 0
        for contratto in self.listaContratti:
            if contratto.get_squadra() == squadra:
                spesa_totale+=contratto.get_prezzo()
        return spesa_totale
    def squadre_diverse(self, squadra):
        acquirenti = []
        for contratto in self.listaContratti:
            if contratto.get_squadra() == squadra and self.nome_calciatore(contratto.get_calciatore()).get_squadra_attuale() not in acquirenti:
                acquirenti.append(self.nome_calciatore(contratto.get_calciatore()).get_squadra_attuale())
        return len(acquirenti)
    # Il metodo restituisce la lista dei nomi dei calciatori il cui contratto non prevede premi superiori a pMax
    @staticmethod
    def max_premio(l):
        massimo = None
        for premio in l:
            if massimo is None or premio > massimo:
                massimo = premio
        return massimo
    def calciatoriPocoPremiati(self, pMax):
        ret = ListaConcatenata()
        for contratto in self.listaContratti:
            if Sistema.max_premio(contratto.get_premi()) <= pMax:
                ret.aggiungi_in_coda(contratto.get_calciatore())
        return ret



contratti = ListaConcatenata()
contratti.aggiungi_in_coda(Contratto("Juventus", "Bianchi",   10000, ListaConcatenata.costruisci_da_lista_semplice([300, 200, 300])))
contratti.aggiungi_in_coda(Contratto("Inter",    "Neri",      5000,  ListaConcatenata.costruisci_da_lista_semplice([100,  50, 100])))
contratti.aggiungi_in_coda(Contratto("Juventus", "Verdi",     10000, ListaConcatenata.costruisci_da_lista_semplice([300, 200, 300])))
contratti.aggiungi_in_coda(Contratto("Juventus", "Rossi",      5000, ListaConcatenata.costruisci_da_lista_semplice([100, 100])))
contratti.aggiungi_in_coda(Contratto("Napoli",   "Rossetti",  20000, ListaConcatenata.costruisci_da_lista_semplice([100, 200, 200, 200])))

# Creazione dei calciatori
calciatori = ListaConcatenata()
calciatori.aggiungi_in_coda(Calciatore("Bianchi","Inter"))
calciatori.aggiungi_in_coda(Calciatore("Verdi","Napoli"))
calciatori.aggiungi_in_coda(Calciatore("Rossi","Roma"))
calciatori.aggiungi_in_coda(Calciatore("Rossetti","Inter"))
calciatori.aggiungi_in_coda(Calciatore("Neri","Napoli"))

s = Sistema(contratti, calciatori)

print(s)
    


