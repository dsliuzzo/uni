from listaconcatenata import ListaConcatenata

class Pilota:
    def __init__(self, nome, eta, compenso):
        self._nome = nome
        self._eta = eta
        self._compenso = compenso
    def get_nome(self):
        return self._nome
    def get_eta(self):
        return self._eta
    def get_compenso_per_gara(self):
        return self._compenso
    def __eq__(self, other):
        if other is None or not isinstance(other, Pilota):
            return False
        if other is self:
            return True
        return self.get_nome() == other.get_nome()
    def __repr__(self):
        return f"{self.get_nome()} ({self.get_eta()}), {self.get_compenso_per_gara()} €"

class Scuderia:
    def __init__(self, nome, citta, compenso):
        self._nome = nome
        self._citta = citta
        self._compenso = compenso
    def get_nome(self):
        return self._nome
    def get_citta(self):
        return self._citta
    def get_compenso_extra(self):
        return self._compenso
    def __eq__(self, other):
        if other is None or not isinstance(other, Scuderia):
            return False
        if other is self:
            return True
        return self.get_nome() == other.get_nome()
    def __repr__(self):
        return f"Scuderia {self.get_nome()}, {self.get_citta()} (compenso extra: {self.get_compenso_extra()})"

class Gara:
    def __init__(self, id, luogo, piloti, scuderie):
        self._id = id
        self._luogo = luogo
        self._piloti = piloti
        self._scuderie = scuderie
    def get_id(self):
        return self._id
    def get_luogo(self):
        return self._luogo
    def get_piloti(self):
        return self._piloti
    def get_scuderie(self):
        return self._scuderie
    def __eq__(self, other):
        if other is None or not isinstance(other, Gara):
            return False
        if other is self:
            return True
        return self.get_id() == other.get_id()
    def __repr__(self):
        ret = f"{self.get_luogo()} ({self.get_id()})"
        for scuderia, pilota in zip(self.get_scuderie(), self.get_piloti()):
            ret += f"\n - {scuderia}, {pilota}"
        return ret

class Sistema:
    def __init__(self, lista_piloti, lista_scuderie, lista_gare):
        self.lista_piloti = lista_piloti
        self.lista_scuderie = lista_scuderie
        self.lista_gare = lista_gare
    def __repr__(self):
        ret = "PILOTI"
        for pilota in self.lista_piloti:
            ret += f"\n - {pilota}"
        ret += "\n\nSCUDERIE"
        for scuderia in self.lista_scuderie:
            ret += f"\n - {scuderia}"
        ret += "\n\nGARE"
        for gara in self.lista_gare:
            ret += f"\n{gara}"
        return ret

    def _nome_to_pilota(self, nome):
        for pilota in self.lista_piloti:
            if nome == pilota.get_nome():
                return pilota
        raise Exception("Pilota non trovato")
    def _nome_to_scuderia(self, nome):
        for scuderia in self.lista_scuderie:
            if nome == scuderia.get_nome():
                return scuderia
        raise Exception("Scuderia non trovata")
    def _pilota_to_scuderia(self, p):
        for gara in self.lista_gare:
            for pilota, scuderia in zip(gara.get_piloti(), gara.get_scuderie()):
                if pilota == p:
                    return self._nome_to_scuderia(scuderia)
        raise Exception("Scuderia non trovata")

    # ES 1
    def verifica_scuderia_eta(self, s, e):
        piloti = self._lista_piloti_partecipanti(s)
        for pilota in piloti:
            if sistema._nome_to_pilota(pilota).get_eta() == e:
                return False
        return True
    def _lista_piloti_partecipanti(self, s):
        ret = []
        for gara in self.lista_gare:
            for scuderia, pilota in zip(gara.get_scuderie(), gara.get_piloti()):
                if scuderia == s and pilota not in ret:
                    ret.append(pilota)
        return ret

    # ES 2
    def numero_scuderie(self, c, e):
        count = 0
        for scuderia in self.lista_scuderie:
            if self._partecipazioni_citta(scuderia.get_nome(), c, e):
                count += 1
        return count
    def _partecipazioni_citta(self, s, c, e): # restituisce True se la scuderia s ha partecipato a una gara nelle città c con un pilota di eta e
        if not self._scuderia_c(s, c):
            return False
        elif e in self._scuderia_c(s, c):
            return True
        return False
    def _scuderia_c(self, s, c): # restituisce la lista delle età dei piloti se la scuderia s ha partecipato a una gara nella città c, altrimenti la lista è vuota
        ret = []
        for gara in self.lista_gare:
            if gara.get_luogo() == c and s in gara.get_scuderie():
                for pilota in gara.get_piloti():
                    ret.append(self._nome_to_pilota(pilota).get_eta())
        return ret

    # ES 3
    def compenso_totale_pilota(self, p):
        pilota = self._nome_to_pilota(p)
        tot = pilota.get_compenso_per_gara() * self._partecipazioni(p)
        tot += self._pilota_to_scuderia(p).get_compenso_extra() * self._vincite(p)
        return tot
    def _partecipazioni(self, p): # restituisce il numero di partecipazioni del pilota di nome p
        count = 0
        for gara in self.lista_gare:
            if p in gara.get_piloti():
                count += 1
        return count
    def _vincite(self, p): # restituisce il numero di vittore del pilota di nome p
        count = 0
        for gara in self.lista_gare:
            if p == gara.get_piloti()[0]:
                count += 1
        return count

P1 = Pilota("Anna", 20, 100)
P2 = Pilota("Gino", 20, 150)
P3 = Pilota("Renata", 21, 200)
l_piloti = ListaConcatenata.costruisci_da_lista_semplice([P1, P2, P3])

S1 = Scuderia("Ferrari", "Bologna", 10)
S2 = Scuderia("Lamborghini", "Bologna", 15)
S3 = Scuderia("Mercedes", "Firenze", 12)
l_scuderie = ListaConcatenata.costruisci_da_lista_semplice([S1, S2, S3])

G1 = Gara("G1", "Milano", ListaConcatenata.costruisci_da_lista_semplice(["Anna", "Renata"]), ListaConcatenata.costruisci_da_lista_semplice(["Ferrari", "Mercedes"]))
G2 = Gara("G2", "Cosenza", ListaConcatenata.costruisci_da_lista_semplice(["Gino", "Renata"]), ListaConcatenata.costruisci_da_lista_semplice(["Lamborghini", "Lamborghini"]))
G3 = Gara("G3", "Roma", ListaConcatenata.costruisci_da_lista_semplice(["Anna", "Gino"]), ListaConcatenata.costruisci_da_lista_semplice(["Ferrari", "Lamborghini"]))
G4 = Gara("G4", "Milano", ListaConcatenata.costruisci_da_lista_semplice(["Renata", "Gino", "Anna"]), ListaConcatenata.costruisci_da_lista_semplice(["Ferrari", "Lamborghini", "Mercedes"]))
l_gare = ListaConcatenata.costruisci_da_lista_semplice([G1, G2, G3, G4])

sistema = Sistema(l_piloti, l_scuderie, l_gare)

print(sistema)

print("\n\n", sistema.verifica_scuderia_eta("Ferrari", 21))

print("\n\n", sistema.numero_scuderie("Milano", 20))

print("\n\n", sistema.compenso_totale_pilota("Gino"))