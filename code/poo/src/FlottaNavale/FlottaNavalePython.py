import re
from functools import total_ordering
from enum import Enum

@total_ordering
class codice_nave:
    def __init__(self, codice):
        if not isinstance(codice, str): raise Exception();
        if not re.match("^[A-Za-z]{3}-\d{4}$", codice): raise Exception();
        self._codice = codice

    @property
    def codice(self): return self._codice

    def __eq__(self, other):
        if other is None: return False;
        if self is other: return True;
        if not isinstance(other, codice_nave): return False;
        return self.codice == other.codice

    def __lt__(self, other):
        if other is None or self is other or not isinstance(other, codice_nave): return False;
        return self.codice < other.codice

    def __str__(self): return f'{self.codice}'


class nome_nave:
    def __init__(self, nome):
        if not isinstance(nome, str): raise Exception()
        if not re.match("^\w{3,30}$", nome): raise Exception()
        self._nome = nome

    @property
    def nome(self): return self._nome

    def __eq__(self, other):
        if other is None: return False
        if other is self: return True
        if not isinstance(other, nome_nave): return False
        return self.nome == other.nome

    def __str__(self): return f'{self.nome}'

class anno:
    def __init__(self, anno):
        if not isinstance(anno, int): raise Exception()
        if anno < 1950: raise Exception()
        self._anno = anno

    @property
    def anno(self):
        return self._anno

    def __eq__(self, other):
        if other is None: return False
        if other is self: return True
        if not isinstance(other, anno): return False
        return self.anno == other.anno

    def __str__(self): return f'{self.anno}'

class stato(Enum):
    IN_SERVIZIO = ("in servizio", True)
    IN_MANUTENZIONE = ("in manutenzione", False)
    DISMESSA = ("dismessa", False)

    def __init__(self, stringa, operativo):
        if not isinstance(stringa, str) or not isinstance(operativo, bool): raise Exception()
        self._stringa = stringa
        self._operativo = operativo

    @property
    def stringa(self): return self._stringa
    @property
    def operativo(self):
        return self._operativo

    def __eq__(self, other):
        if other is None: return False
        if other is self: return True
        if not isinstance(other, stato): return False
        return self.stringa == other.stringa



class nave:
    def codice(self): pass
    def nome(self): pass
    def anno_varo(self): pass
    def stazza(self): pass
    def capacita_carico(self): pass
    def stato(self): pass

@total_ordering
class nave_abstract(nave):
    def __init__(self, codice, nome, anno_varo, stazza, capacita_carico, stato):
        if not isinstance(stazza, float) or not isinstance(capacita_carico, float): raise Exception
        if stazza < 0 or capacita_carico < 0: raise Exception
        self._codice = codice
        self._nome = nome
        self._anno_varo = anno_varo
        self._stazza = stazza
        self._capacita_carico = capacita_carico
        self._stato = stato

    @property
    def codice(self): return self._codice
    @property
    def nome(self): return self._nome
    @property
    def anno_varo(self): return self._anno_varo
    @property
    def stazza(self): return self._stazza
    @property
    def capacita_carico(self): return self._capacita_carico
    @property
    def stato(self): return self._stato

    def __eq__(self, other):
        if other is None: return False
        if other is self: return True
        if not isinstance(other, nave_abstract): return False
        return self.codice == other.codice

    def __lt__(self, other):
        if other is None or other is self or not isinstance(other, nave_abstract): raise Exception
        return self.codice < other.codice

    def __str__(self):
        return f'nave: {self.codice}\n - nome: {self.nome}\n - anno varo: {self.anno_varo}\n - stazza: {self.stazza}\n - capacità carico: {self.capacita_carico}\n - {self.stato}'

class porta_container(nave_abstract):
    def __init__(self, codice, nome, anno_varo, stazza, capacita_carico, stato):
        if capacita_carico < 5000: raise Exception()
        super().__init__(codice, nome, anno_varo, stazza, capacita_carico, stato)



# MANCA TUTTO L'ESERCIZIO 2