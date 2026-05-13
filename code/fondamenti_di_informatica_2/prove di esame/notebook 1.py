'''
Prova d'Esame di Fondamenti di Informatica II – Nuova Traccia 1
Esercizio 1: Gestione di un Centro Commerciale
Si vuole implementare in Python la gestione di un centro commerciale, includendo negozi e clienti. Si supponga che siano definite le classi Negozio e Cliente, che forniscono i seguenti metodi:
Classe Negozio:
• get_codice(self): che restituisce il codice che identifica il negozio (univoco)
• get_nome(self): che restituisce il nome del negozio
• get_categoria(self): che restituisce la categoria merceologica del negozio (es. "Abbigliamento", "Elettronica", "Ristorazione").
• get_incasso_giornaliero(self): che restituisce l'incasso del giorno (un intero)
• __eq__(self, other): per confrontare due oggetti Negozio
• __repr__(self): per una rappresentazione stringa dell'oggetto
Classe Cliente:
• get_codice_fiscale(self): che restituisce il codice fiscale che identifica il cliente (univoco)
• get_nome(self): che restituisce il nome del cliente
• get_lista_acquisti(self): che restituisce una lista di tuple (codice_negozio, importo_speso) per ogni acquisto effettuato dal cliente.
• __eq__(self, other): per confrontare due oggetti Cliente
• __repr__(self): per una rappresentazione stringa dell'oggetto
La classe CentroCommerciale contiene le liste listaNegozi e listaClienti. Oltre a eventuali metodi di supporto che si ritengano necessari, si includano almeno i seguenti metodi nella classe CentroCommerciale:
• negozio_piu_redditizio_per_categoria(self, categoria): Il metodo restituisce il nome del negozio che ha registrato l'incasso giornaliero più alto tra quelli della categoria specificata
Se più negozi soddisfano la condizione, il metodo restituisce uno qualsiasi di essi.
• clienti_fedeli(self, codice_fiscale_cliente): Il metodo restituisce la lista dei codici fiscali distinti dei clienti che risultano essere più fedeli del cliente con codice_fiscale_cliente. Un cliente X è più fedele di un cliente Y quando sono soddisfatte entrambe le seguenti condizioni
    ◦ la somma degli importi spesi da X è maggiore della somma degli importi spesi da Y;
    ◦ X ha effettuato acquisti in tutti i negozi in cui ha acquistato Y.
• categorie_non_visitare(self, codice_fiscale_cliente, importo_minimo): Il metodo restituisce la lista delle categorie merceologiche in cui il cliente con codice_fiscale_cliente non ha effettuato acquisti di importo superiore a importo_minimo
Esempio: Si assuma che i dati a disposizione siano i seguenti:
• Negozi:
    ◦ {"N1", "MediaWorld", "Elettronica", 1500}
    ◦ {"N2", "Zara", "Abbigliamento", 1200}
    ◦ {"N3", "Gamestop", "Elettronica", 800}
    ◦ {"N4", "H&M", "Abbigliamento", 1300}
    ◦ {"N5", "McDonald's", "Ristorazione", 2000}
• Clienti:
    ◦ {"RSSMRA", "Mario Rossi", [("N1", 300), ("N2", 150), ("N5", 50)]}
    ◦ {"VRDFNC", "Francesca Verdi", [("N1", 200), ("N3", 100)]}
    ◦ {"BNCLCA", "Luca Bianchi", [("N1", 400), ("N2", 200), ("N3", 50), ("N4", 250), ("N5", 100)]}
Allora:
• negozio_piu_redditizio_per_categoria("Elettronica") restituisce "MediaWorld" (poiché ha incassato 1500, superiore a Gamestop 800).
• clienti_fedeli("RSSMRA") restituisce la lista ["BNCLCA"] perché:
    ◦ "RSSMRA" ha speso (300+150+50 = 500) euro, mentre "BNCLCA" ha speso (400+200+50+250+100 = 1000) euro;
    ◦ "RSSMRA" ha acquistato in N1, N2, N5. "BNCLCA" ha acquistato in N1, N2, N3, N4, N5, che include tutti i negozi visitati da "RSSMRA".
• categorie_non_visitare("VRDFNC", 150) restituisce la lista ["Abbigliamento", "Ristorazione"] perché:
    ◦ "VRDFNC" è interessato a [("N1", 200), ("N3", 100)] cioè categorie "Elettronica";
    ◦ Non ha fatto acquisti superiori a 150€ in categorie "Abbigliamento" o "Ristorazione".
'''


from listaconcatenata import ListaConcatenata

class Negozio:
    def __init__(self, cod, nome, categoria, incasso):
        self._codice = cod
        self._nome = nome
        self._categoria = categoria
        self._incasso_giornaliero = incasso
    def get_codice(self):
        return self._codice
    def get_nome(self):
        return self._nome
    def get_categoria(self):
        return self._categoria
    def get_incasso_giornaliero(self):
        return self._incasso_giornaliero
    def __eq__(self, other):
        if other is None or not isinstance(other, Negozio):
            return False
        if other is self:
            return True
        return self.get_codice() == other.get_codice()
    def __repr__(self):
        return f"{self.get_nome()} ({self.get_codice()}), {self.get_categoria()}, {self.get_incasso_giornaliero()} € giornalieri"
class Cliente:
    def __init__(self, cod, nome, acquisti):
        self._codice = cod
        self._nome = nome
        self._lista_acquisti = acquisti
    def get_codice(self):
        return self._codice
    def get_nome(self):
        return self._nome
    def get_lista_acquisti(self):
        return self._lista_acquisti
    def __eq__(self, other):
        if other is None or not isinstance(other, Cliente):
            return False
        if other is self:
            return True
        return self.get_codice() == other.get_codice()
    def __repr__(self):
        ret = f"{self.get_nome()} ({self.get_codice()})"
        for acquisto in self.get_lista_acquisti():
            ret += f"\n - {acquisto}"
        return ret
class CentroCommerciale:
    def __init__(self, lista_negozi, lista_clienti):
        self.lista_negozi = lista_negozi
        self.lista_clienti = lista_clienti
    def __repr__(self):
        ret = "NEGOZI"
        for negozio in self.lista_negozi:
            ret += f"\n{negozio}"
        ret += "\n"
        for cliente in self.lista_clienti:
            ret += f"\n{cliente}"
        return ret

    def negozio_piu_redditizio_per_categoria(self, c):
        max_incasso = None
        max_negozio = None
        for negozio in self.lista_negozi:
            if negozio.get_categoria() == c and (max_incasso is None or negozio.get_incasso_giornaliero() > max_incasso):
                max_incasso = negozio.get_incasso_giornaliero()
                max_negozio = negozio.get_nome()
        return max_negozio


    def somma_importi_spesi(self, cf):
        tot = 0
        for cliente in self.lista_clienti:
            if cliente.get_codice() == cf:
                for acquisto in cliente.get_lista_acquisti():
                    tot += acquisto[1]
        if tot != 0:
            return tot
        raise Exception("codice fiscale non trovato")
    def lista_negozi_acquisti(self, cf):
        ret = []
        for cliente in self.lista_clienti:
            if cliente.get_codice() == cf:
                for acquisto in cliente.get_lista_acquisti():
                    if acquisto[0] not in ret:
                        ret.append(acquisto[0])
            return ret
        raise Exception("codice fiscale non trovato")
    def ha_acquistato(self, x, y): # restituisce true se X ha acquistato in tutti i negozi in cui ha acquistato Y
        lx = self.lista_negozi_acquisti(x)
        ly = self.lista_negozi_acquisti(y)
        for negozio in lx:
            if negozio not in ly:
                return False
        return True
    def clienti_fedeli(self, cf):
        ret = []
        spesa_cf = self.somma_importi_spesi(cf)
        for cliente in self.lista_clienti:
            print(self.somma_importi_spesi(cliente.get_codice()))
            if cliente.get_codice() != cf and self.somma_importi_spesi(cliente.get_codice()) > spesa_cf and self.ha_acquistato(cliente.get_codice(), cf):
                ret.append(cliente.get_nome())
        return ret

    def cf_to_cliente(self, cf):
        for cliente in self.lista_clienti:
            if cliente.get_codice() == cf:
                return cliente
        raise Exception("Cliente non trovato")
    def cod_negozio_to_categoria(self, cod):
        for negozio in self.lista_negozi:
            if negozio.get_codice() == cod:
                return negozio.get_categoria()
        raise Exception("negozio non trovato")
    def spesa_cliente_per_categoria(self, cl, cat):
        tot = 0
        for acquisto in cl.get_lista_acquisti():
            if self.cod_negozio_to_categoria(acquisto[0]) == cat:
                tot += acquisto[1]
        return tot
    def lista_categorie(self):
        ret = []
        for negozio in self.lista_negozi:
            if negozio.get_categoria() not in ret:
                ret.append(negozio.get_categoria())
        return ret
    def categorie_non_visitate(self, cf, importo_minimo):
        ret = []
        l_cat = self.lista_categorie()
        for categoria in l_cat:
            if self.spesa_cliente_per_categoria(self.cf_to_cliente(cf), categoria) < importo_minimo:
                ret.append(categoria)
        return ret




l_negozi = ListaConcatenata()
l_negozi.aggiungi_in_coda(Negozio("N1", "MediaWorld", "Elettronica", 1500))
l_negozi.aggiungi_in_coda(Negozio("N2", "Zara", "Abbigliamento", 1200))
l_negozi.aggiungi_in_coda(Negozio("N3", "Gamestop", "Elettronica", 800))
l_negozi.aggiungi_in_coda(Negozio("N4", "H&M", "Abbigliamento", 1300))
l_negozi.aggiungi_in_coda(Negozio("N5", "McDonald's", "Ristorazione", 2000))

l_clienti = ListaConcatenata()
l_clienti.aggiungi_in_coda(Cliente("RSSMRA", "Mario Rossi", [("N1", 300), ("N2", 150), ("N5", 50)]))
l_clienti.aggiungi_in_coda(Cliente("VRDFNC", "Francesca Verdi", [("N1", 200), ("N3", 100)]))
l_clienti.aggiungi_in_coda(Cliente("BNCLCA", "Luca Bianchi", [("N1", 400), ("N2", 200), ("N3", 50), ("N4", 250), ("N5", 100)]))

centro_commerciale = CentroCommerciale(l_negozi, l_clienti)

print(centro_commerciale)
print(centro_commerciale.lista_categorie())
print(centro_commerciale.categorie_non_visitate("VRDFNC", 150))

