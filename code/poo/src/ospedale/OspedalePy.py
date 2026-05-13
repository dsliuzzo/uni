import re

from functools import total_ordering

from enum import Enum

@total_ordering
class codice_reparto:
    def __init__(self, codice_reparto):
        if codice_reparto is None or not re.match(r"^[A-Za-z]{3}\d{3}$", codice_reparto): raise Exception("codice reparto non valido")
        self._codice_reparto = codice_reparto

    @property
    def valore(self):
        return self._codice_reparto

    def __eq__(self, other):
        if other is None: return False
        if other is self: return True
        if not isinstance(other, codice_reparto): return False
        return self.valore == other.valore

    def __lt__(self, other):
        if other is None or other is self or not isinstance(other, codice_reparto): return False
        return self.valore < other.valore

    def __str__(self):
        return self.valore

class nome_reparto:
    def __init__(self, nome):
        if not re.match(r"^[A-Za-z]\w{3,49}$", nome): raise Exception("nome reparto non valido")
        self._nome_reparto = nome

    @property
    def valore(self):
        return self._nome_reparto

    def __eq__(self, other):
        if other is None: return False
        if other is self: return True
        if not isinstance(other, nome_reparto): return False
        return other.valore == self.valore

    def __str__(self):
        return self.valore

class capacita_pazienti:
    def __init__(self, capacita):
        if capacita < 2 or capacita > 120: raise Exception("capacità pazienti non valida")
        self._capacita_pazienti = capacita

    @property
    def valore(self):
        return self._capacita_pazienti

    def __eq__(self, other):
        if other is None: return False
        if other is self: return True
        if not isinstance(other, capacita_pazienti): return False
        return other.valore == self.valore

    def __str__(self):
        return self.valore

class superficie:
    def __init__(self, superficie):
        if superficie < 20 or superficie > 2000: raise Exception("superficie non valida")
        self._superficie = superficie

    @property
    def valore(self):
        return self._superficie

    def __eq__(self, other):
        if other is None: return False
        if other is self: return True
        if not isinstance(other, superficie): return False
        return self.valore == other.valore

class Criticita(Enum):
    # Definizione: (valore_int, descrizione)
    BASSO = (1, "basso")
    MEDIOBASSO = (2, "medio basso")
    MEDIO = (3, "medio")
    ALTO = (4, "alto")
    ALTISSIMO = (5, "altissimo")

    def __init__(self, valore, stringa):
        self._valore = valore
        self._stringa = stringa

    @property
    def valore(self):
        return self._valore

    @property
    def stringa(self):
        return self._valore

    def __lt__(self, other):
        if self.__class__ is other.__class__:
            return self.value < other.value
        return NotImplemented

    def __str__(self):
        return f"{self.name} ({self.descrizione})"


class reparto:
    def codice(self): pass
    def nome(self): pass
    def capacita(self): pass
    def medici(self): pass
    def superficie(self): pass
    def criticita(self): pass

@total_ordering
class reparto_abstract (reparto):
    def __init__(self, codice, nome, capacita, medici, superficie, criticita):
        if medici < 1 or medici > 50: raise Exception("numero medici non valido")
        self._codice = codice
        self._nome = nome
        self._capacita = capacita
        self._medici = medici
        self._superficie = superficie
        self._criticita = criticita

    @property
    def codice(self): return self._codice
    @property
    def nome(self): return self._nome
    @property
    def capacita(self): return self._capacita
    @property
    def medici(self): return self._medici
    @property
    def superficie(self): return self._superficie
    @property
    def criticita(self): return self._criticita

    def __eq__(self, other):
        return self.codice.equals(other.codice)

    def __str__(self):
        return f"Reparto: {self.codice}\n - nome: {self.nome}\n - capacità: {self.capacita}\n - medici: {self.medici}\n - superficie: {self.superficie}\n - criticità: {self.criticita}"

    def __lt__(self, other):
        if other is None or other is self or not isinstance(other, reparto_abstract): return False
        return self.codice < other.codice

class tipo_monitoraggio(Enum):
    CONTINUO = "continuo"
    INTERMITTENTE = "intermittente"
    BASE = "base"

    @property
    def stringa(self):
        return self.value

class terapia_intensiva(reparto_abstract):
    def __init__(self, codice, nome, capacita, medici, superficie, criticita, tipo_monitoraggio):
        if medici < 15: raise Exception("medici non sufficienti per terapia intensiva")
        self._tipo_monitoraggio = tipo_monitoraggio
        super().__init__(codice, nome, capacita, medici, superficie, criticita)

    @property
    def tipo_monitoraggio(self): return self._tipo_monitoraggio

class chirurgia:
    def __init__(self, codice, nome, capacita, medici, superficie, criticita, sale_operatorie):
        if sale_operatorie < 1 or sale_operatorie > 100: raise Exception("sale operatorie non valide")
        self._sale_operatorie = sale_operatorie
        super().__init__(codice, nome, capacita, medici, superficie, criticita)

    @property
    def sale_operatorie(self): return self._sale_operatorie



# manca tutto l'esercizio 2