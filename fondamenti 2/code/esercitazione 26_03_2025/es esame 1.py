class Automobile:
    def __init__(self, modello = "", colore = "", casa_produttrice = "", cilindrata = None, prezzo = None, numero_telaio = None):
        if modello == "" and colore == "" and casa_produttrice == "" and cilindrata == "" and prezzo == None and numero_telaio == None:
            self._inizializza()
        else:
            self.modello = modello
            self.colore = colore
            self.casa_produttrice = casa_produttrice
            self.cilindrata = cilindrata
            self.prezzo = prezzo
            self.numero_telaio = numero_telaio
    def _inizializza(self):
        self.modello = ""
        self.colore = ""
        self.casa_produttrice = ""
        self.cilindrata = None
        self.prezzo = None
        self.numero_telaio = None
    def __eq__(self, other):
        if other is None or not isinstance(other, Automobile):
            return False
        if self is other:
            return True
        # essendo da traccia il numero di telaio identificativo di ogni macchina è sufficiente confrontare quello
        return self.numero_telaio == other.numero_telaio
    def __repr__(self):
        return f"Automobile:\nModello:\t{self.modello}\nColore:\t{self.colore}\nCasa produttrice\t{self.casa_produttrice}\nCilindrata\t{self.cilindrata}\nPrezzo:\t{self.prezzo}\nNumero di telaio\t{self.numero_telaio}"

class Concessionaria:
    # in sede di esame basta ridefinire solo il costruttore, poi si può passare ai metodi
    # non passiamo nulla come parametro perchè nel momento in cui apriamo la concessionaria non ci sono automobili
    def __init__(self):
        self.magazzino = []
    # aggiunta di un auto
    def aggiungi_auto(self, auto):
        # controlla se l'auto è già presente nel magazzino
        if auto not in self.magazzino:
            self.magazzino.append(auto)
    # rimozione di un auto
    def rimuovi_auto(self, auto):
        if auto in self.magazzino:
            self.magazzino.remove(auto)
    # stampa di tutte le auto
    def stampa_magazzino(self):
        for auto in self.magazzino:
            print(auto)
    # calcolare la somma dei prezzi di tutte le auto
    def somma_prezzi(self):
        tot = 0
        for auto in self.magazzino:
            tot += auto.prezzo
        return tot
    # casa produttrice più ricorrente (top traccia di esame)
    def casa_produttrice_ricorrente(self):
        case_produttrici = estrai_case_produttrici_v2(self)
        # inizializzazione fittizia (max = 0) o inizializziamo con il primo elemento
        # max = 0
        # casa_produttrice_max = None
        max = conta_occorrenze(self, case_produttrici[0])
        casa_produttrice_max = case_produttrici[0]
        # iniziamo dalla posizione 1 in poi utilizzando lo slicing
        for casa_produttrice in case_produttrici[1:]:
            occ = conta_occorrenze(self, casa_produttrice)
            if occ > max:
                max = occ
        return casa_produttrice_max
    # controllo accessorio
    @staticmethod
    def estrai_case_produttrici(concessionaria):
        case_produttrici = []
        for auto in concessionaria.magazzino:
            if auto.casa_produttrice not in case_produttrici:
                case_produttrici.append(auto.casa_produttrice)
        return case_produttrici
    # controllo accessorio con set
    # set: struttura dati che non ammette duplicati e non mantiene un ordinamento degli elementi
    # si dichiara con set={} e si aggiungono elementi con set.add()
    @staticmethod
    def estrai_case_produttrici_v2(concessionaria):
        case_produttrici = {}
        for auto in concessionaria.magazzino:
            case_produttrici.add(auto.casa_produttrice)
        return case_produttrici
    # conta accessoria (metodo count in python)
    @staticmethod
    def conta_occorrenze(concessionaria, casa_produttrice):
        occorrenze = 0
        for auto in concessionaria:
            if auto.casa_produttrice == casa_produttrice:
                occorrenze += 1
        return occorrenze
    # trovare auto con cilindrata più alta tra quelle con un prezzo inferiore ai 10.000€
    def cilindrata_prezzo_minore(self):
        auto_min = None
        # costrutto di python che ci permette di inizializzare una variabile fittizia al numero più grande possibile possibile
        cilindrata_min = int('inf') # restituisce il più grande numero intero rappresentabile per gli interi (infinito)
        for auto in self.magazzino:
            if auto.prezzo < 10000 and auto.cilindrata <cilindrata_min:
                auto_min = auto
                cilindrata_min = auto.cilindrata
        return auto_min
    # trovare l'auto con la cilindrata più alta tra quelle con un prezzo superiore alla media
    def auto_cilindrata_maggiore(self):
        media = calcola_media_prezzi(self)
        auto_max = None
        cilindrata_max = 0
        for auto in self.magazzino:
            if auto.prezzo > media and auto.cilindrata > cilindrata_max:
                auto_max = auto
                cilindrata_max = auto.cilindrata
        return auto_max
    # metodo che calcola la media accessorio
    @staticmethod
    def calcola_media_prezzi(concessionaria):
        return somma_prezzi(concessionaria)/len(concessionaria.magazzino)
    # trovare le case produttrici che producono solo auto con un prezzo inferiore alla media dei prezzi delle auto
    def case_prezzi_sottomedia(self):
        media = calcola_media_prezzi(self)
        case_produttrici = []
        tutte_case_produttrici = estrai_case_produttrici_v2(self)
        for casa_prod in tutte_case_produttrici:
            if tutti_prezzi_inferiori(self, casa_prod, media):
                case_produttrici.append(casa_prod)
        return case_produttrici
    # metodo accessorio
    @staticmethod
    def tutti_prezzi_inferiori(concessionaria, casa_prod, media):
        for auto in concessionaria.magazzino:
            if auto.casa_produttrice == casa_prod and auto.prezzo >= media:
                return False
        return True
    # trovare le case produttrici che producono solo auto con la stessa cilindrata
    def case_stessa_cilindrata(self):
        case_produttrici = []
        tutte_case_produttrici = estrai_case_produttrici_v2(self)
        for casa_prod in tutte_case_produttrici:
            if stessa_cilindrata(self, casa_prod):
                case_produttrici.append(casa_prod)
        return case_produttrici
    # metodo accessorio
    def stessa_cilindrata(concessionaria, casa_prod):
        prima = None
        for auto in concessionaria.magazzino:
            if auto.casa_produttrice == casa_prod:
                if prima == None:
                    prima = auto.cilindrata
                elif auto.cilindrata != prima:
                    return False
        return True