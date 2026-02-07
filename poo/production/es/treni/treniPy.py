# serve per le regex
import re

# implementare comparable scrivendo solo __eq__ e __lt__
from functools import total_ordering

class Identificatore:
    def __init__(self, valore):
        if valore is None or not re.match(r"^[A-Za-z]{3}\d{8}$", str(valore)):
            raise ValueError("identificatore non valido")
        self._id = valore

    @property
    def valore(self):
        return self._id

    def __eq__(self, other):
        return self.valore == other.valore

    def __str__(self):
        return str(self.valore)


@total_ordering
class Lunghezza:
    def __init__(self, valore):
        if valore < 5 or valore > 35: raise ValueError("lunghezza non valida")
        self._lunghezza = valore

    @property
    def valore(self):
        return self._lunghezza

    def __eq__(self, other):
        if other is None: return False
        if self is other: return True
        if not isinstance(other, Lunghezza): return False
        return self.valore== other.valore

    def __lt__(self, other):
        if other is None: return False
        if self is other: return True
        if not isinstance(other, Lunghezza): return False
        return self.valore < other.valore

    def __str__(self):
        return str(self.valore)


@total_ordering
class Massa:
    def __init__(self, valore):
        if valore < 1 or valore > 225: raise ValueError("massa non valida")
        self._massa = valore

    @property
    def valore(self):
        return self._massa

    def __eq__(self, other):
        if other is None: return False
        if self is other: return True
        if not isinstance(other, Massa): return False
        return self.valore == other.valore

    def __lt__(self, other):
        if other is None: return False
        if self is other: return True
        if not isinstance(other, Massa): return False
        return self.valore < other.valore

    def __str__(self):
        return str(self.valore)


@total_ordering
class Velocita:
    def __init__(self, velocita):
        ammessi = [60,80,120,180,250,300]
        if velocita not in ammessi: raise ValueError("velocità non ammessa")
        self._velocita = velocita

    @property
    def valore(self):
        return self._velocita

    def __eq__(self, other):
        if other is None: return False
        if self is other: return True
        if not isinstance(other, Velocita): return False
        return self.valore == other.valore

    def __lt__(self, other):
        if other is None: return False
        if self is other: return True
        if not isinstance(other, Velocita): return False
        return self.valore < other.valore

    def __str__(self):
        return str(self.valore)


@total_ordering
class Vagone:
    def identificatore(self):
        pass
    def lunghezza(self):
        pass
    def massa(self):
        pass
    def massa_frenata(self):
        pass
    def velocita_max(self):
        pass
    def __eq__(self, other):
        if other is None: return False
        if self is other: return True
        if not isinstance(other, Vagone): return False
        return self.identificatore == other.identificatore
    def __lt__(self, other):
        if other is None: return False
        if self is other: return True
        if not isinstance(other, Vagone): return False
        return self.identificatore < other.identificatore

class VagoneAbstract(Vagone):
    def __init__(self, id, lunghezza, massa, massa_frenata, velocita_max):
        self._id = id
        self._lunghezza = lunghezza
        self._massa = massa
        if massa_frenata.valore < 0 or massa_frenata.valore > massa.valore: raise ValueError("massa frenata non ammessa")
        self._massa_frenata = massa_frenata
        self._velocita_max = velocita_max

    @property
    def identificatore(self):
        return self._id

    @property
    def lunghezza(self):
        return self._lunghezza

    @property
    def massa(self):
        return self._massa

    @property
    def massa_frenata(self):
        return self._massa_frenata

    @property
    def velocita_max(self):
        return self._velocita_max

    def __eq__(self, other):
        if other is None: return False
        if self is other: return True
        if not isinstance(other, VagoneAbstract): return False
        return self.identificatore == other.identificatore

    def __str__(self):
        return f'Vagone: {self.identificatore}\n - lunghezza: {self.lunghezza} metri\n - massa: {self.massa} tonnellate\n - massa frenata: {self.massa_frenata} tonnellate\n - velocità massima: {self.velocita_max} km/h'


class Motrice(VagoneAbstract):
    def __init__(self, identificatore, lunghezza, massa, massa_frenata, velocita_max, trazione):
        super().__init__(identificatore, lunghezza, massa, massa_frenata, velocita_max)
        self._trazione = trazione

    @property
    def trazione(self):
        return self._trazione

    def __str__(self):
        return super().__str__() + f"\n - trazione: {self.trazione} tonnellate"
