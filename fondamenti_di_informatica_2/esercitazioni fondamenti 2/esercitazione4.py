class Automobile:

    def __init__(self, modello, colore, casa_produttrice, cilindrata, prezzo, numero_telaio):
        self.modello = modello
        self.colore = colore
        self.casa_produttrice = casa_produttrice
        self.cilindrata = cilindrata
        self.prezzo = prezzo
        self.numero_telaio = numero_telaio


    def __eq__(self, other):
        if other is None or not isinstance(other, Automobile):
            return False
        if other is self: #equiv. if other==self
            return True
        return self.numero_telaio == other.numero_telaio
    

    def __repr__(self):
        return f"Automobile di modello {self.modello} \
        e colore {self.colore} e casa produttrice \
              {self.casa_produttrice}, con cilindrata {self.cilindrata}, \
              costo {self.prezzo} e numero di telaio \
                  {self.numero_telaio}"
    

class Concessionaria:

    def __init__(self):
        self.magazzino = []

    #aggiungere un’auto al magazzino;
    def aggiungi_auto(self, auto):
        if auto not in self.magazzino:
            self.magazzino.append(auto)
            

    #rimuovere un’auto dal magazzino;
    def rimuovi_auto(self, auto):
        if auto in self.magazzino:
            self.magazzino.remove(auto)
    
    
    #stampare tutte le auto;
    def stampa_tutte_auto(self):
        for auto in self.magazzino:
            print(auto)

    # calcolare la somma dei prezzi di tutte le auto;
    def somma_prezzi(self):
        somma = 0
        for auto in self.magazzino:
            somma += auto.prezzo
        return somma
    
    
    #trovare la casa produttrice più ricorrente;
    def casa_produttrice_ricorrente(self):
        case_produttrici = estrai_case_produttrici(self)
        #max = 0
        #casa_produttrice_max = None
        max = conta_occorrenze(self, case_produttrici[0])
        casa_produttrice_max = case_produttrici[0]
        for casa_prod in case_produttrici[1:]:
            occ = conta_occorrenze(self, casa_prod)
            if occ > max:
                max = occ
                casa_produttrice_max = casa_prod
        return casa_produttrice_max
            


    def estrai_case_produttrici(concessionaria):
        case_produttrici = []
        for auto in concessionaria.magazzino:
            if auto.casa_produttrice not in case_produttrici:
                case_produttrici.append(auto.casa_produttrice)
        return case_produttrici

    def estrai_case_produttrici_v2(concessionaria):
        case_produttrici = {}
        for auto in concessionaria.magazzino:
            case_produttrici.add(auto.casa_produttrice)
        return case_produttrici


    def conta_occorrenze(concessionaria, casa_produttrice):
        cont = 0
        for auto in concessionaria.magazzino:
            if auto.casa_produttrice == casa_produttrice:
                cont += 1
        return cont
        #return concessionaria.magazzino.count(casa_produttrice)
        
    #trovare l’auto con la cilindrata più bassa \
    # tra quelle con un prezzo inferiore a 10.000 euro
    def auto_cilindrata_minore(self):
        auto_min = None
        cilindrata_min = int('inf') #infinito 
        for auto in self.magazzino:
            if auto.prezzo < 10000 and \
                auto.cilindrata < cilindrata_min:
                auto_min = auto
                cilindrata_min = auto.cilindrata
        return auto_min
    

    # trovare l’auto con la cilindrata più alta tra 
    # quelle con un prezzo superiore alla media dei 
    # prezzi delle auto;
    def auto_cilindrata_maggiore(self):
        media = calcola_media_prezzi(self)
        auto_max = None
        cilindrata_max = 0
        for auto in self.magazzino:
            if auto.prezzo > media and \
                auto.cilindrata > cilindrata_max:
                auto_max = auto
                cilindrata_max = auto.cilindrata
        return auto_max


    def calcola_media_prezzi(concessionaria):
        return somma_prezzi(concessionaria) / len(concessionaria.magazzino)
    
    
    #trovare le case produttrici che producono solo 
    #auto con un prezzo inferiore alla media dei 
    #prezzi delle auto;
    def case_produttrici_prezzi_inferiori(self):
        case_produttrici = []
        media = calcola_media_prezzi(self)
        tutte_case_produttrici = estrai_case_produttrici(self)
        for casa_prod in tutte_case_produttrici:
            if tutti_prezzi_inferiori(self, casa_prod, media):
                case_produttrici.append(casa_prod)
        return case_produttrici
    
    def tutti_prezzi_inferiori(concessionaria, casa_prod, media):
        for auto in concessionaria.magazzino:
            if auto.casa_produttrice == casa_prod and \
                auto.prezzo >= media:
                return False
        return True
	
    

    #trovare le case produttrici che producono solo 
    # auto con la stessa cilindrata. 
    def case_produttrici_cilindrata_uguale(self):
        case_produttrici_ret = []
        tutte_case_produttrici = estrai_case_produttrici(self)
        for casa_prod in tutte_case_produttrici:
            if tutte_cilindrate_uguali(self, casa_prod):
                case_produttrici_ret.append(casa_prod)
        return case_produttrici_ret


    def tutte_cilindrate_uguali(concessionaria, casa_prod):
        cilindrata_uguale = None
        for auto in concessionaria.magazzino:
            if auto.casa_produttrice == casa_prod:
                #prima auto che troviamo di quella casa_prod
                if cilindrata_uguale is None:
                    cilindrata_uguale = auto.cilindrata
                #abbiamo già trovato un'altra auto di quella casa_prod
                elif auto.cilindrata != cilindrata_uguale:
                    return False
        return True

    