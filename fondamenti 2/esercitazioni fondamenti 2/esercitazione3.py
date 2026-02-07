class NumeroTelefonico:

    def __init__(self, tipo, numero):
        self.tipo = tipo
        self.numero = numero

    def __eq__(self, other):
        if other is None or not isinstance(other, NumeroTelefonico):
            return False
        if other is self: #equiv: other == self
            return True
        return self.tipo == other.tipo and self.numero == other.numero
    
    # rappresentazione in stringa per l'utente (es: print)
    def __str__(self):
        #return f"{self.tipo}: {self.numero}"
        #return "Numero telefonico di tipo "+self.tipo+"e numero "+self.numero
        return f"Numero telefonico di tipo {self.tipo} e numero {self.numero}"
    
    # rappresentazione in stringa per il programmatore (es: debug)
    def __repr__(self):
        return f"NumeroTelefonico({self.tipo}, {self.numero})"
    

class Contatto:

    def __init__(self, nome, cognome, numeri=None):
        self.nome = nome
        self.cognome = cognome
        if numeri is None:
            self.numeri = []
        else:
            self.numeri = numeri

    def __eq__(self, other):
        if other is None or not isinstance(other, Contatto):
            return False
        if other is self: #equiv: other == self
            return True
        return self.nome == other.nome and \
        self.cognome == other.cognome and \
            self.numeri == other.numeri
    
    def __str__(self):
        #return f"Contatto: {self.nome} {self.cognome}"
        ret = f"Contatto: {self.nome} {self.cognome}\n"
        for numero in self.numeri:
            ret += f"{numero}\n" #ret += numero+"\n"
        return ret
    
    def __repr__(self):
        return f"Contatto({self.nome}, {self.cognome}, {self.numeri})"
    

    def aggiungi_numero(self, numero):
        self.numeri.append(numero)

    def elimina_numero(self, numero):
        self.numeri.remove(numero)

    def estrai_numero(self, tipo):
        for numero in self.numeri:
            if numero.tipo == tipo:
                return numero
        return None
    
    def copia_v1(self):
        return Contatto(self.nome, self.cognome, self.numeri.copy())


    def copia_v2(self): #stesso significato di v1
        ret = Contatto()  
        ret.nome = self.nome
        ret.cognome = self.cognome
        ret.numeri = self.numeri.copy()
        return ret
    

class Rubrica:

    def __init__(self):
        self.contatti = []

    def __eq__(self, other):
        if other is None or not isinstance(other, Rubrica):
            return False
        if other is self:
            return True
        return self.contatti == other.contatti
    
    def __str__(self):
        ret = "########## Rubrica ##########\n\n"
        for contatto in self.contatti:
            ret += f"{contatto}\n"
            ret += "--------------------------\n"
        return ret
    
    def __repr__(self):
        return f"Rubrica({self.contatti})"
    
    def aggiungi_contatto(self, contatto):
        self.contatti.append(contatto)

    def elimina_contatto(self, contatto):
        self.contatti.remove(contatto)

    def copia(self):
        ret = Rubrica()
        for contatto in self.contatti:
            ret.aggiungi_contatto(contatto.copia_v1())
        return ret
    

    def conta_contatti(self, nome, cognome):
        cont = 0
        for contatto in self.contatti:
            if contatto.nome == nome and \
                contatto.cognome == cognome:
                cont += 1
        return cont
    

    def estrai_contatti(self, nome, cognome):
        ret = []
        for contatto in self.contatti:
            if contatto.nome == nome and \
                contatto.cognome == cognome:
                ret.append(contatto)
        return ret

if __name__ == "__main__":
    c1 = Contatto("Mario", "Rossi")
    c1.aggiungi_numero(NumeroTelefonico("cellulare", "3331234567"))
    c1.aggiungi_numero(NumeroTelefonico("casa", "0419876543"))

    c2 = Contatto("Giuseppe", "Verdi")
    c2.aggiungi_numero(NumeroTelefonico("cellulare", "3337654321"))
    c2.aggiungi_numero(NumeroTelefonico("ufficio", "0411234567"))

    rubrica = Rubrica()
    rubrica.aggiungi_contatto(c1)
    rubrica.aggiungi_contatto(c2)

    print(rubrica)

"""    
c1 = Contatto("Mario", "Rossi")
c1.aggiungi_numero(NumeroTelefonico("cellulare", "3331234567"))
c1.aggiungi_numero(NumeroTelefonico("casa", "0419876543"))

c2 = Contatto("Giuseppe", "Verdi")
c2.aggiungi_numero(NumeroTelefonico("cellulare", "3337654321"))
c2.aggiungi_numero(NumeroTelefonico("ufficio", "0411234567"))

rubrica = Rubrica()
rubrica.aggiungi_contatto(c1)
rubrica.aggiungi_contatto(c2)

print(rubrica)"
"""