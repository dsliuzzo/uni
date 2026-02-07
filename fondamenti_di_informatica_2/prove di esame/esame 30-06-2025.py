from listaconcatenata import ListaConcatenata

class Attore:
    def __init__(self, nome, generi):
        self._nome = nome
        self._generi = generi
    def get_nome(self):
        return self._nome
    def get_generi_preferiti(self):
        return self._generi
    def __eq__(self, other):
        if other is None or not isinstance(other, Attore):
            return False
        if other is self:
            return True
        return self.get_nome() == other.get_nome()
    def __repr__(self):
        ret = f"- {self.get_nome()} ( "
        for genere in self.get_generi_preferiti():
            ret += f"{genere} "
        ret += ")"
        return ret
class Film:
    def __init__(self, titolo, attori, apparizioni, genere, durata):
        self._titolo = titolo
        self._attori = attori
        self._apparizioni = apparizioni
        self._genere = genere
        self._durata = durata
    def get_titolo(self):
        return self._titolo
    def get_attori(self):
        return self._attori
    def get_apparizioni(self):
        return self._apparizioni
    def get_genere(self):
        return self._genere
    def get_durata(self):
        return self._durata
    def __eq__(self, other):
        if other is None or not isinstance(other, Film):
            return False
        if other is self:
            return True
        return self.get_titolo() == other.get_titolo()
    def __repr__(self):
        ret = f"\nTITOLO: {self.get_titolo()}\nDURATA: {self.get_durata()}\nGENERE: {self.get_genere()}"
        for i in range(len(self.get_attori())):
            ret += f"\n- {self.get_attori()[i]}: {self.get_apparizioni()[i]}"
        return ret

class Sistema:
    def __init__(self, listaAttori, listaFilm):
        self.listaAttori = listaAttori
        self.listaFilm = listaFilm
    def __repr__(self):
        ret = ""
        for attore in self.listaAttori:
            ret += f"\n{attore}"
        ret += "\n"
        for film in self.listaFilm:
            ret += f"\n{film}"
        return ret
    # ES 1
    def durata_complessiva(self, attore, gen):
        tot = 0
        for film in self.listaFilm:
            if film.get_genere() == gen:
                for nome, durata in zip(film.get_attori(), film.get_apparizioni()):
                    if nome == attore.get_nome():
                        tot += durata
        return tot
    def attore_max_durata(self, gen):
        max_attore = None
        max_durata = None
        for attore in self.listaAttori:
            if max_durata is None or max_durata < self.durata_complessiva(attore, gen):
                max_durata = self.durata_complessiva(attore, gen)
                max_attore = attore.get_nome()
        return max_attore
    # ES 2
    def nome_attore(self, nome):
        for attore in self.listaAttori:
            if nome == attore.get_nome():
                return attore
        raise Exception("attore non trovato")
    def film_cast_adeguato(self, film):
        for attore in film.get_attori():
            if film.get_genere() not in self.nome_attore(attore).get_generi_preferiti():
                return False
        return True
    def cast_adeguati(self):
        ret = []
        for film in self.listaFilm:
            if self.film_cast_adeguato(film):
                ret.append(film.get_titolo())
        return ret
    # ES 3
    def lista_partecipazioni(self, nome_attore):
        ret = []
        for film in self.listaFilm:
            if nome_attore in film.get_attori():
                ret.append(film.get_titolo())
        return ret
    @staticmethod
    def sottoinsieme(l1, l2):
        #restituisce true se lista1 è sottoinsieme di lista2
        if len(l1) > len(l2):
            return False
        for element in l1:
            if element not in l2:
                return False
        return True
    def attori_simili(self, nome_attore):
        ret = []
        film_attore_1 = self.lista_partecipazioni(nome_attore)
        for attore in self.listaAttori:
            if not attore.get_nome() == nome_attore and Sistema.sottoinsieme(film_attore_1, self.lista_partecipazioni(attore.get_nome())):
                ret.append(attore.get_nome())
        return ret





# Creazione degli attori
attori = ListaConcatenata()
attori.aggiungi_in_coda(Attore("Hanks", ["Commedia", "Drammatico", "Thriller", "Fantascienza"]))
attori.aggiungi_in_coda(Attore("De Niro", ["Drammatico", "Thriller"]))
attori.aggiungi_in_coda(Attore("Roberts", ["Commedia", "Drammatico"]))
attori.aggiungi_in_coda(Attore("Eastwood", ["Western", "Thriller"]))

# Creazione dei film
film = ListaConcatenata()
film.aggiungi_in_coda(Film("F1", ["Hanks", "De Niro"], [40, 30], "Thriller", 120))
film.aggiungi_in_coda(Film("F2", ["De Niro", "Roberts", "Hanks", "Eastwood"], [25, 30, 10, 30], "Commedia", 140))
film.aggiungi_in_coda(Film("F3", ["De Niro", "Eastwood", "Hanks"], [25, 30, 30], "Commedia", 140))
film.aggiungi_in_coda(Film("F4", ["Roberts", "Hanks"], [50, 40], "Thriller", 90))
film.aggiungi_in_coda(Film("F5", ["Eastwood", "Hanks"], [50, 40], "Western", 100))

# Creazione del sistema
sistema = Sistema(attori, film)

# Stampa del sistema
print(sistema)
print("\n\n")
print(sistema.lista_partecipazioni("Hanks"))
print(sistema.attori_simili("Roberts"))
