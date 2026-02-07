from listaconcatenata import ListaConcatenata

class Automobile:
    def __init__(self, modello, colore, casa_produttrice, cilindrata, prezzo, numero_telaio):
        self.modello = modello
        self.colore = colore
        self.casa_produttrice = casa_produttrice
        self.cilindrata = cilindrata
        self.prezzo = prezzo
        self.numero_telaio = numero_telaio
    def __eq__(self, other):
        if other is None or not isinstance(other, Automobile):
            return False
        if self is other:
            return True
        return self.numero_telaio == other.numero_telaio
    def __repr__(self):
        return f"AUTOMOBILE\nModello: {self.modello}\nColore: {self.colore}\nCasa produttrice: {self.casa_produttrice}\nCilindrata: {self.cilindrata}\nPrezzo: {self.prezzo} €\nNumero di telaio: {self.numero_telaio}"
class Concessionaria:
    def __init__(self):
        self.automobili = ListaConcatenata()
    def __repr__(self):
        ret = ""
        for automobile in self.automobili:
            ret += f"{automobile}"
            ret += "\n\n"
        return ret
    def aggiungi_auto(self, modello, colore, casa_produttrice, cilindrata, prezzo, numero_telaio):
        self.automobili.aggiungi_in_coda(Automobile(modello, colore, casa_produttrice, cilindrata, prezzo, numero_telaio))
    def elimina_auto(self, num):
        automobile = self.automobili._testa
        if automobile.info.numero_telaio == num:
            self.automobili.rimuovi_testa()
            return
        while automobile.successivo is not None:
            aut_successiva = automobile.successivo
            if aut_successiva.info.numero_telaio == num:
                automobile.successivo = aut_successiva.successivo
                return
            automobile = automobile.successivo
        raise Exception("Auto non presente nel magazzino")
    def somma_prezzi(self):
        ris = 0
        for automobile in self.automobili:
            ris += automobile.prezzo
        return ris
    def cc_prezzo_basso(self):
        min_cc = None
        auto_ris = None
        for automobile in self.automobili:
            if automobile.prezzo <= 10000:
                if min_cc == None or automobile.cilindrata <= min_cc:
                    min_cc = automobile.cilindrata
                    auto_ris = automobile
        if auto_ris == None:
            raise Exception("Nessuna auto trovata")
        return auto_ris
    def media_prezzi(self):
        media = 0
        for automobile in self.automobili:
            media += automobile.prezzo
        media = media/len(self.automobili)
        return media
    def cc_prezzo_sopra_media(self):
        max_cc = 0
        auto_ris = None
        for automobile in self.automobili:
            if automobile.prezzo >= self.media_prezzi() and automobile.cilindrata >= max_cc:
                max_cc = automobile.cilindrata
                auto_ris = automobile
        if auto_ris == None:
            raise Exception("Nessuna auto trovata")
        return auto_ris
    def lista_case_produttrici(self):
        ris = []
        for automobile in self.automobili:
            if automobile.casa_produttrice not in ris:
                ris.append(automobile.casa_produttrice)
        return ris
    def casa_sotto_media(self, casa):
        media = self.media_prezzi()
        for automobile in self.automobili:
            if automobile.casa_produttrice == casa and automobile.prezzo >= media:
                return False
        return True
    def prezzo_inferiore_media(self):
        case_produttrici = self.lista_case_produttrici()
        ret = ListaConcatenata()
        for casa in case_produttrici:
            if self.casa_sotto_media(casa):
                ret.aggiungi_in_testa(casa)
        return ret
    def stessa_cc(self, casa):
        cc = None
        for automobile in self.automobili:
            if automobile.casa_produttrice == casa:
                if cc == None:
                    cc = automobile.cilindrata
                elif automobile.cilindrata != cc:
                    return False
        return True
    def case_stessa_cc(self):
        ret = ListaConcatenata()
        case_produttrici = self.lista_case_produttrici()
        for casa in case_produttrici:
            if self.stessa_cc(casa):
                ret.aggiungi_in_testa(casa)
        return ret
                        




c = Concessionaria()
c.aggiungi_auto("punto", "nero", "fiat", 95, 5000, 123456)
c.aggiungi_auto("f40", "rosso", "ferrari", 200, 120000, 422341)
c.aggiungi_auto("golf", "bianco", "volkswagen", 110, 8000, 654321)
c.aggiungi_auto("a4", "grigio", "audi", 150, 15000, 789123)
c.aggiungi_auto("clio", "blu", "renault", 90, 4500, 321654)
c.aggiungi_auto("model 3", "nero", "ferrari", 283, 35000, 852369)
c.aggiungi_auto("panamera", "grigio scuro", "porsche", 330, 70000, 963258)
c.aggiungi_auto("civic", "rosso", "honda", 130, 10000, 147258)
c.aggiungi_auto("500", "verde", "fiat", 69, 3000, 369741)
c.aggiungi_auto("giulia", "bianco perla", "alfa romeo", 210, 27000, 753159)
c.aggiungi_auto("focus", "argento", "ford", 120, 6500, 951357)
c.aggiungi_auto("rav4", "blu notte", "toyota", 175, 22000, 147369)