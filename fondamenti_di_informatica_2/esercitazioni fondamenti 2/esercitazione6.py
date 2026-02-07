from esercitazione6.listaconcatenata import ListaConcatenata


class Abbonamento:
    def __init__(self, cod_servizio, mese, settimane):
        self.cod_servizio = cod_servizio
        self.settimane = [[False]*4 for _ in range(12)]
        for settimana in settimane:
            self.settimane[mese][settimana] = True

    def __repr__(self):
        return f"Abbonamento(servizio={self.cod_servizio})"

    def __eq__(self, other):
        if other is None or not isinstance(other, Abbonamento): return False
        if other == self: return True
        return self.cod_servizio == other.cod_servizio and self.settimane == other.settimane


class Servizio:
    def __init__(self, codice, posti_disponibili, turno, costo_settimanale):
        self.codice = codice
        self.posti_disponibili = posti_disponibili
        self.turno = turno  # 'senior', 'advanced', 'junior'
        self.costo_settimanale = costo_settimanale

    def __repr__(self):
        return f"Servizio({self.codice}, {self.turno}, €{self.costo_settimanale}/sett)"

    def __eq__(self, other):
        if other is None or not isinstance(other, Servizio): return False
        if other == self: return True
        return self.codice == other.codice


class Tesserato:
    def __init__(self, nome, cognome, data_nascita, codice_fiscale, codice_tessera, data_scadenza):
        self.nome = nome
        self.cognome = cognome
        self.data_nascita = data_nascita
        self.codice_fiscale = codice_fiscale
        self.codice_tessera = codice_tessera
        self.data_scadenza = data_scadenza
        self.abbonamenti = []

    def __repr__(self):
        return f"Tesserato({self.nome} {self.cognome}, Tessera {self.codice_tessera})"

    def __eq__(self, other):
        if other is None or not isinstance(other, Tesserato): return False
        if other == self: return True
        return self.codice_fiscale == other.codice_fiscale


class CentroSportivo:
    def __init__(self):
        self.tesserati = []  # lista di Tesserato
        self.servizi = []    # lista di Servizio


    def aggiorna(self, codice_fiscale, cod_servizio, mesi, settimane):

        #verifica codice fiscale
        tesserato = None
        for t in self.tesserati:
            if t.codice_fiscale == codice_fiscale:
                tesserato = t
                break
        if tesserato is None:
            return False

        #verifica disponibilità posti
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
        servizio.posti_disponibili -= 1
        return True

    def aggiorna_opt(self, codice_fiscale, cod_servizio, mesi, settimane):
        tesserato = next((t for t in self.tesserati if t.codice_fiscale == codice_fiscale), None)
        servizio = next((s for s in self.servizi if s.codice == cod_servizio), None)

        if tesserato is None or servizio is None or servizio.posti_disponibili < 1:
            return False

        # aggiornamento
        a = Abbonamento(cod_servizio, mesi, settimane)
        tesserato.abbonamenti.append(a)
        servizio.posti_disponibili -= 1
        return True


    def aggiorna_LC(self, codice_fiscale, cod_servizio, mesi, settimane):
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
        if servizio is None or servizio.posti_disponibili < 1:
            return False

        a = Abbonamento(cod_servizio, mesi, settimane)
        tesserato.abbonamenti.aggiungi_in_coda(a)
        servizio.posti_disponibili -= 1
        return True


    def servizi_ordinati(self):
        turni_order = ['senior', 'advanced', 'junior']
        servizi_copia = self.servizi[:]
        for i in range(len(servizi_copia)):
            for j in range(i+1, len(servizi_copia)):
                s1, s2 = servizi_copia[i], servizi_copia[j]
                if turni_order.index(s1.turno) > turni_order.index(s2.turno) or \
                    turni_order.index(s1.turno) == turni_order.index(s2.turno) and \
                    s1.costo_settimanale*4 < s2.costo_settimanale*4:
                    tmp = s1
                    servizi_copia[i] = s2
                    servizi_copia[j] = tmp
        return servizi_copia


    def servizi_ordinati_opt(self):
        turni_order = ['senior', 'advanced', 'junior']
        return sorted(self.servizi, key=lambda s: (turni_order.index(s.turno), -s.costo_settimanale*4))


    def report_iscritti(self, mese):
        report = [] #codice_tessera - costo_totale
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
                    continue
                costo_settimanale = servizio.costo_settimanale
                #num_settimane = sum(a.settimane[mese])
                num_settimane = 0
                for settimana in a.settimane[mese]:
                    if settimana:
                        num_settimane += 1
                costo_t += costo_settimanale * num_settimane

            report.append([t.codice_tessera, costo_t])

        return report

    def report_iscritti_LC(self, mese):
        report = ListaConcatenata()  # codice_tessera - costo_totale
        tesserato_corr = self.tesserati._testa
        while tesserato_corr is not None:
            costo_t = 0
            abbonamento_corr = tesserato_corr.abbonamenti._testa
            while abbonamento_corr is not None:
                cod_servizio = abbonamento_corr.codice_servizio
                servizio = None
                servizio_corr = self.servizi._testa
                while servizio_corr is not None:
                    if servizio_corr.codice == cod_servizio:
                        servizio = servizio_corr
                        break
                    servizio_corr = servizio_corr.successivo
                if servizio is None:
                    continue
                costo_settimanale = servizio.costo_settimanale
                # num_settimane = sum(a.settimane[mese])
                num_settimane = 0
                for settimana in abbonamento_corr.settimane[mese]:
                    if settimana:
                        num_settimane += 1
                costo_t += costo_settimanale * num_settimane
                abbonamento_corr = abbonamento_corr.successivo

            report.append([tesserato_corr.codice_tessera, costo_t])
            tesserato_corr = tesserato_corr.successivo

        return report


