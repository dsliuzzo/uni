# [...]

class Abbonamento:
    def __init__(self, cod_servizio, mesi, settimane):
        self.cod_servizio = cod_servizio
        self.mesi = mesi
        self.settimane = settimane

# [...]

class centroSportivo:
    # [...]
    # ESERCIZIO 1
    def aggiorna(self, codice_fiscale, cod_servizio, mesi, settimane):
        # verifica_codice_fiscale
        tesserato = None
        for t in self.tesserati:
            if t.codice_fiscale == codice_fiscale:
                tesserato = t
                break
        if tesserato is None:
            return False
        
        # verifica disponibilità posti
        servizio = None
        for s in self.servizi:
            if s.codice == cod_servizio:
                servizio = s
                break
        if servizio is None or servizio.posti_disponibili < 1:
            return False
        
        # aggiornamento
        a = Abbonamento(cod_servizio, mesi, settimane)
        tesserato.abbonamenti.append(a)
        servizio.posti_disponibile -= 1
        return True
    
    def aggiorna_v2(self, codice_fiscale, cod_servizio, mesi, settimane):
        # metodo next (iterazione implicita)
        tesserato = next((t for t in self.tesserati if t.codice_fiscale == codice_fiscale), None)
        servizio = next((s for s in self.servizi if s.codice == cod_servizio), None)
        if tesserato is None or servizio is None or servizio.posti_disponibili < 1:
            return False
        
        # aggiornamento
        a = Abbonamento(cod_servizio, mesi, settimane)
        tesserato.abbonamenti.append(a)
        servizio.posti_disponibile -= 1
        return True
    
    def aggiorna_ListaConcatenata(self, codice_fiscale, cod_servizio, mesi, settimane):
        tesserato = None
        tesseratoCorr = self.tesserati._testa
        while tesseratoCorr is not None:
            if tesseratoCorr.codice_fiscale == codice_fiscale:
                tesserato = tesseratoCorr
                break
            tesseratoCorr = tesseratoCorr.successivo
        if tesserato is None:
            return False
        
        servizio = None
        servizioCorr = self.servizi._testa
        while servizioCorr is not None:
            if servizioCorr.codice == cod_servizio:
                servizio = servizioCorr
                break
            servizioCorr = servizioCorr.successivo
        if servizio is not None or servizio.posti_disponibili < 1:
            return False
        
        a = Abbonamento(cod_servizio, mesi, settimane)
        tesserato.abbonamenti.aggiungi_in_coda(a)
        servizio.posti_disponibili -= 1
        return True
    
    # ESERCIZIO 2
    def servizi_ordinati(self):
        turni_order = ['senior', 'advanced', 'junior']
        servizi_copia = self.servizi[:]
        for i in range(len(servizi_copia)):
            for j in range(i+1, len(servizi_copia)):
                s1, s2 = servizi_copia[i], servizi_copia[j]
                if turni_order.index(s1.turno) > turni_order.index(s2.turno) or turni_order.index(s1.turno) == turni_order.index(s2.turno) and s1.costo_settimanale*4 < s2.costo_settimanale*4:
                    tmp = s1
                    servizi_copia[i] = s2
                    servizi_copia[j] = tmp
        return servizi_copia
    
    def servizi_ordinati_v2(self):
        turni_order = ['senior', 'advanced', 'junior']
        # funzione sorted prende in ingresso una struttura dati composta da ordinare
        # key ci dice sulla base di cosa dobbiamo ordinare
        # utilizzando il costrutto lambda ci permette di specificare una variabile da riordinare (s) e dopo i : specifichiamo le condizioni da verificare per l'ordinamento, nel nostro caso l'indice della lista turni order, inoltre avendo anche un criterio secondario utilizziamo una tupla che contiene tutti i criteri in ordine invece di avere un solo valore. Dato che vogliamo l'ordinamento al contrario per il costo lo precediamo con un -
        return sorted(self.servizi, key = lambda s: [turni_order.index(s.turno), -s.costo_settimanale*4])
    
    # ESERCIZIO 3
    def report_iscritti(self, mese):
        report = [] # codice_tessera - costo_totale
        for t in self.tesserati:
            costo_t = 0
            for a in t.abbonamenti:
                cod_servizio = a.codice_servizio
                servizio = None
                for s in self.servizi:
                    if s.codice == cod_servizio:
                        servizio = s
                        break
                if servizio is None:
                    # continue va direttamente all'iterazione successiva del ciclo superiore (nel nostro caso passerà al prossimo abbonamento)
                    continue
                costo_settimanale = servizio.costo_settimanale
                # la somma utilizzata in questo modo restituisce il numero di volte che compare un valore True all'interno di un iterabile
                num_settimane = sum(a.settimane[mese])
                costo_t = costo_settimanale * num_settimane
            report.append([t.codice_tessera, costo_t])
        return report


