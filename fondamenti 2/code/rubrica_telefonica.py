class numeroTelfonico:
    # costruttore, metodo che permette di creare una nuova instanza dell'oggetto
    def __init__(self, tipo, numero):
        self.tipo = tipo
        self.numero = numero
    # metodo per stabilire l'uguaglianza tra self e un altro oggetto sovrascrivendo il significato di base di ==
    def __eq__(self, other):
        if other is None or not isinstance(other, numeroTelfonico):
            return False
        if self is other:
            return True
        return self.tipo == other.tipo and self.numero == other.numero
    # rappresentazione di stringhe (per l'utente)
    def __str__(self):
        # return "Tipo: " + str(self.tipo) + " numero: " + str(self.numero)
        # string formatting: (variabili inserite all'interno di parentesi graffe, che verranno convertite atutomaticamente in string)
        return f"Tipo: {self.tipo}\tnumero: {self.numero}"
    # rappresentazione di stringhe (per il programmatore, di debug)
    # per convenzione così formattata nomeClasse(par1, par2,...)
    def __repr__(self):
        return f"numeroTelefonico({self.tipo}, {self.numero})"

class Contatto:
    # inizializzazione di default delle variabili, dalla vriabili inizializzata in poi tutte le variabili devono essere inizializzate
    def __init__(self, nome, cognome, numeri = None):
        self.nome = nome
        self.cognome = cognome
        if numeri is None:
            self.numeri = []
        else:
            self.numeri = numeri
    def __eq__(self, other):
        if other is None or not isinstance(other, numeroTelfonico):
            return False
        if self is other:
            return True
        return self.tipo == other.tipo and self.numero == other.numero
    def __str__(self):
        ret = f"Contatto: {self.nome} {self.cognome}\n"
        for numero in self.numeri:
            ret+=f"{numero}\n"
        return ret
    def __repr__(self):
        return f"Contatto({self.nome}, {self.cognome})"
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
        # copia superficiale .copy() per gli oggetti copia il riferimento (ma essendo la lista mutabile un cambiamento nell'oggetto originale modificherà anche quello nuovo, ma non è per niente oneroso)
        # copia profonda .deepcopy() invece crea un nuovo oggetto
        return Contatto(self.nome, self.cognome, self.numeri.copy())
    def copia_v2(self):
        # oppure creo un oggetto senza parametri e li assegno manualmente, assegnando una copia dell'oggetto numero
        ret = Contatto()
        ret.nome = self.nome
        ret.cognome = self.cognome
        ret.numeri = self.numeri.copy()

class Rubrica:
    def __init__(self):
        self.contatti = []
    def __eq__(self, other):
        if other is None or not isinstance(other, Rubrica):
            return False
        if self is other:
            return True
        return self.contatti == other.contatti
    def __str__(self):
        ret = "######### Rubrica #########\n\n"
        for contatto in self.contatti:
            ret+=f"{contatto}\n"
            ret+="---------------------------\n"
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
    # contare i contatti
    def conta_contatti(self, nome, cognome):
        count=0
        for contatto in self.contatti:
            if contatto.nome == nome and contatto.cognome == cognome:
                count+=1
        return count
    # estrarre i contatti dato un certo nome e cognome
    def estrai_contatti(self, nome, cognome):
        ret = []
        for contatto in self.contatti:
            if contatto.nome == nome and contatto.cognome == cognome:
                ret.append(contatto)
        return ret


# per isolare il codice del main abbiamo la possibilità di definire esplicitamente il costrutto main (specialmente in progetti più complesso)
if __name__ == "__main__":
    c1 = Contatto("Mario", "Rossi")
    c1.aggiungi_numero(numeroTelfonico("cellulare", "3336756587"))
    c1.aggiungi_numero(numeroTelfonico("casa", "0965826544"))

    c2 = Contatto("Giuseppe", "Verdi")
    c2.aggiungi_numero(numeroTelfonico("cellulare", "3467557511"))
    c2.aggiungi_numero(numeroTelfonico("ufficio", "0402356857"))

    rubrica = Rubrica()
    rubrica.aggiungi_contatto(c1)
    rubrica.aggiungi_contatto(c2)

    print(rubrica)