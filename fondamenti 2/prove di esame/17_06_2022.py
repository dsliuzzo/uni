from listaconcatenata import ListaConcatenata

class Volo:
    def __init__(self, partenza, arrivo, prezzo_economica, prezzo_business):
        self._partenza = partenza
        self._arrivo = arrivo
        self._prezzo_economica = prezzo_economica
        self._prezzo_business = prezzo_business
    def get_partenza(self):
        return self._partenza
    def get_arrivo(self):
        return self._arrivo
    def get_prezzo_economica(self):
        return self._prezzo_economica
    def get_prezzo_business(self):
        return self._prezzo_business
    def __eq__(self, other):
        if other is None or not isinstance(other, Volo):
            return False
        if other is self:
            return True
        return self.get_partenza() == other.get_partenza() and self.get_arrivo() == other.get_arrivo() and self.get_prezzo_economica() == other.get_prezzo_economica() and self.get_prezzo_business() == other.get_prezzo_business()
    def __repr__(self):
        return f"partenza: {self.get_partenza()}\t arrivo: {self.get_arrivo()}\teconomy: {self.get_prezzo_economica()} €\tbusiness: {self.get_prezzo_business()} €"

class Prenotazione:
    def __init__(self, percorso, nome_cliente, classe):
        self._percorso = percorso
        self._nome_cliente = nome_cliente
        self._classe = classe
    def get_percorso(self):
        return self._percorso
    def get_nome_cliente(self):
        return self._nome_cliente
    def get_classe(self):
        return self._classe
    def __eq__(self, other):
        if other is None or not isinstance(other, Prenotazione):
            return False
        if other is self:
            return True
        return self.get_percorso() == other.get_percorso() and self.get_nome_cliente() == other.get_nome_cliente() and self.get_classe == other.get_classe()
    def __repr__(self):
        return f"nome: {self.get_nome_cliente()}\tclasse: {self.get_classe()}\tpercorso:{self.get_percorso()}"

class Sistema:
    def __init__(self, lista_voli, lista_prenotazioni):
        self.lista_voli = lista_voli
        self.lista_prenotazioni = lista_prenotazioni
    def __repr__(self):
        ret = "VOLI\n"
        for volo in self.lista_voli:
            ret += f"{volo}\n"
        ret += "\nPRENOTAZIONI\n"
        for prenotazione in self.lista_prenotazioni:
            ret += f"{prenotazione}\n"
        return ret

    # ES 1
    def verifica_prenotazioni(self):
        for prenotazione in self.lista_prenotazioni:
            if not self.verifica_correttezza(prenotazione.get_percorso()):
                return False
        return True
    def verifica_correttezza(self, lista):
        corrente = lista._testa
        for _ in lista:
            if not self.esiste_volo(corrente.info, corrente.successivo.info):
                return False
        return True
    def esiste_volo(self, partenza, arrivo):
        for volo in self.lista_voli:
            if volo.get_partenza() == partenza and volo.get_arrivo() == arrivo:
                return True
        return False
    # ES 2
    def volo_max(self):
        incasso_max = None
        volo_max = None
        for volo in self.lista_voli:
            if incasso_max is None or self.incasso(volo) > incasso_max:
                incasso_max = self.incasso(volo)
                volo_max = volo
        return volo_max
    def incasso(self, volo):
        tot = 0
        for prenotazione in self.lista_prenotazioni:
            if Sistema.volo_in_percorso(prenotazione.get_percorso(), volo.get_partenza(), volo.get_arrivo()):
                if prenotazione.get_classe() == "economica":
                    tot += volo.get_prezzo_economica()
                elif prenotazione.get_classe() == "business":
                    tot += volo.get_prezzo_business()
        return tot
    @staticmethod
    def volo_in_percorso(percorso, partenza, arrivo):
        corrente = percorso._testa
        while corrente.successivo is not None:
            if corrente.info == partenza and corrente.successivo.info == arrivo:
                return True
            corrente = corrente.successivo
        return False
    # ES 3
    def destinazione_comune(self, nome_cliente):
        destinazioni = self.lista_destinazioni(nome_cliente)
        clienti = self.lista_clienti()
        ret = ListaConcatenata()
        for cliente in clienti:
            if cliente != nome_cliente and Sistema.verifica_destinazione(self.lista_destinazioni(cliente), destinazioni):
                ret.aggiungi_in_coda(cliente)
        return ret
    @staticmethod
    def verifica_destinazione(l1, l2):
        for destinazione in l1:
            if destinazione in l2:
                return True
        return False
    def lista_clienti(self):
        ret = []
        for prenotazione in self.lista_prenotazioni:
            if prenotazione.get_nome_cliente() not in ret:
                ret.append(prenotazione.get_nome_cliente())
        return ret
    def lista_destinazioni(self, nome_cliente):
        ret = []
        for prenotazione in self.lista_prenotazioni:
            if prenotazione.get_nome_cliente() == nome_cliente:
                ret.append(prenotazione.get_percorso()._coda.info)
        return ret




# creo e popolo la lista dei voli
voli = ListaConcatenata()
voli.aggiungi_in_coda(Volo("Roma",    "Milano", 150, 300))
voli.aggiungi_in_coda(Volo("Lamezia", "Roma",   120, 200))
voli.aggiungi_in_coda(Volo("Lamezia", "Milano", 130, 240))
voli.aggiungi_in_coda(Volo("Roma",    "Londra", 250, 450))
voli.aggiungi_in_coda(Volo("Milano",  "Parigi", 200, 350))

# creo e popolo la lista delle prenotazioni
prenotazioni = ListaConcatenata()
prenotazioni.aggiungi_in_coda(Prenotazione(ListaConcatenata.costruisci_da_lista_semplice(["Lamezia", "Roma", "Londra"]), "Rossi", "business"))
prenotazioni.aggiungi_in_coda(Prenotazione(ListaConcatenata.costruisci_da_lista_semplice(["Roma", "Milano", "Parigi"]), "Rossi", "business"))
prenotazioni.aggiungi_in_coda(Prenotazione(ListaConcatenata.costruisci_da_lista_semplice(["Milano",  "Parigi"]), "Bianchi", "economica"))
prenotazioni.aggiungi_in_coda(Prenotazione(ListaConcatenata.costruisci_da_lista_semplice(["Lamezia", "Milano", "Parigi"]), "Bianchi", "economica"))
prenotazioni.aggiungi_in_coda(Prenotazione(ListaConcatenata.costruisci_da_lista_semplice(["Lamezia", "Roma"]), "Verdi", "economica"))

# istanzio il sistema e lo stampo
sistema = Sistema(voli, prenotazioni)
print(sistema)
print(sistema.destinazione_comune("Rossi"))

