# Creiamo una classe che ci permetta di rappresentare i _numeri razionali

class Razionali:
    def __init__(self, num, den):
        if den == 0:
            # exit(1)
            raise ZeroDivisionError()
        self._num = num
        self._den = den
        if den < 0:
            self._num*=-1
            self._den*=-1
        self._semplifica()

    def _semplifica(self):
        if self._num == 0:
            self._den == 1
            return
        if(abs(self._num)>self._den):
            for i in range(self._den, 1, -1):
                if (self._num % i) == 0 and (self._den % i) == 0:
                    self._num = self._num//i
                    self._den = self._den//i
                    return
        else:
            for i in range(self._num, 1, -1):
                if (self._num % i) == 0 and (self._den % i) == 0:
                    self._num = self._num//i
                    self._den = self._den//i
                    return
    def get_num(self):
        return self._num
    def get_den(self):
        return self._den
    def __repr__(self):
        return "Numeratore: " + str(self._num) + " Denominatore: " + str(self._den)
    def __eq__(self, other):
        if other is None or not isinstance(other, Razionali):
            return False
        if self is other:
            return True
        return self._num == other._den and self._den == other._den


n1 = Razionali(2,4)
n2 = Razionali(6,-4)

print(n2)

# possiamo ridefinire anche gli operatori algebrici

# es per casa completa tutti gli operatori