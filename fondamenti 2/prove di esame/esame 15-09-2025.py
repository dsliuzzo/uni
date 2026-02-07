from listaconcatenata import ListaConcatenata

class Piatto:
    def __init__(self, cod, nome, ingredienti, dosi):
        self._cod = cod
        self._nome = nome
        self._ingredienti = ingredienti
        self._dosi = dosi
    def get_codice(self):
        return self._cod
    def get_nome(self):
        return self._nome
    def get_ingredienti(self):
        return self._ingredienti
    def get_dosi(self):
        return self._dosi
    def __eq__(self, other):
        if other is None or not isinstance(other, Piatto):
            return False
        if self is other:
            return True
        return self.get_codice() == other.get_codice()
    def __repr__(self):
        ret = f"{self.get_nome()} ({self.get_codice()})"
        for ingrediente, dose in zip(self.get_ingredienti(), self.get_dosi()):
            ret += f"\n - {ingrediente} {dose}"
        return ret

class Ingrediente:
    def __init__(self, cod, nome, costo_unitario, adatto_vegetariani):
        self._cod = cod
        self._nome = nome
        self._costo_unitario = costo_unitario
        self._adatto_vegetariani = adatto_vegetariani
    def get_codice(self):
        return self._cod
    def get_nome(self):
        return self._nome
    def get_costo_unitario(self):
        return self._costo_unitario
    def get_adatto_vegetariani(self):
        return self._adatto_vegetariani
    def __eq__(self, other):
        if other is None or not isinstance(other, Ingrediente):
            return False
        if other is self:
            return True
        return self.get_codice() == other.get_codice()
    def __repr__(self):
        ret = f"{self.get_nome()} ({self.get_codice()})\n{self.get_costo_unitario()} €\n"
        if self.get_adatto_vegetariani():
            ret += "ingrediente adatto ai vegetariani"
        else:
            ret += "ingrediente non adatto ai vegetariani"
        return ret

class Sistema:
    def __init__(self, lista_piatti, lista_ingredienti):
        self.lista_piatti = lista_piatti
        self.lista_ingredienti = lista_ingredienti
    def __repr__(self):
        ret = "PIATTI"
        for piatto in self.lista_piatti:
            ret += f"\n{piatto}\n"
        ret += "\n\nINGREDIENTI"
        for ingrediente in self.lista_ingredienti:
            ret += f"\n{ingrediente}\n"
        return ret
    # ES 1
    def verifica_piatti_vegetariani(self, n):
        count = 0
        for piatto in self.lista_piatti:
            if self._piatto_vegetariano(piatto):
                count += 1
        if count >= n:
            return True
        return False
    def _piatto_vegetariano(self, p):
        for ingrediente in p.get_ingredienti():
            if not self._nome_to_ingrediente(ingrediente).get_adatto_vegetariani():
                return False
        return True
    def _nome_to_ingrediente(self, nome):
        for ingrediente in self.lista_ingredienti:
            if ingrediente.get_nome() == nome:
                return ingrediente
        raise Exception("ingrediente non trovato")
    # ES 2
    def piatti_con_ingrediente(self, nome_ingrediente, k):
        ret = ListaConcatenata()
        for piatto in self.lista_piatti:
            if Sistema._ing_in_piatto(piatto, nome_ingrediente, k):
                ret.aggiungi_in_coda(piatto)
        return ret
    @staticmethod
    def _ing_in_piatto(piatto, nome_ingrediente, k):
        for ingrediente, dose in zip(piatto.get_ingredienti(), piatto.get_dosi()):
            if ingrediente == nome_ingrediente and dose >= k:
                return True
        return False
    # ES 3
    def piatti_costosi(self, n):
        ret = ListaConcatenata()
        for piatto in self.lista_piatti:
            if self._costo_piatto(piatto) >= n:
                ret.aggiungi_in_coda(piatto)
        return ret
    def _costo_piatto(self, piatto):
        costo = 0
        for ingrediente, dose in zip(piatto.get_ingredienti(), piatto.get_dosi()):
            costo += self._nome_to_ingrediente(ingrediente).get_costo_unitario() * dose
        return costo


l_piatti = ListaConcatenata()
l_piatti.aggiungi_in_coda(Piatto("P1", "Carbonara", ListaConcatenata.costruisci_da_lista_semplice(["Uovo", "Pancetta"]), ListaConcatenata.costruisci_da_lista_semplice([20, 30])))
l_piatti.aggiungi_in_coda(Piatto("P2", "Fagiolata", ListaConcatenata.costruisci_da_lista_semplice(["Fagioli", "Pomodoro"]), ListaConcatenata.costruisci_da_lista_semplice([60, 50])))

l_ingredienti = ListaConcatenata()
l_ingredienti.aggiungi_in_coda(Ingrediente("I1", "Uovo", 0.5, False))
l_ingredienti.aggiungi_in_coda(Ingrediente("I2", "Pancetta", 0.8, False))
l_ingredienti.aggiungi_in_coda(Ingrediente("I3", "Fagioli", 0.3, True))
l_ingredienti.aggiungi_in_coda(Ingrediente("I4", "Pomodoro", 0.1, True))

sistema = Sistema(l_piatti, l_ingredienti)

print(sistema)


print("\n\n", sistema.verifica_piatti_vegetariani(2))

print("\n\n", sistema.piatti_con_ingrediente("Pancetta", 10))

print("\n\n", sistema.piatti_costosi(30))

