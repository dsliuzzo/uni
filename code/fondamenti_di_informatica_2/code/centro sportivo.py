class Tesserato:
    def __init__(self, nome, cognome, d_nascita, cf, cod_tessera, data_scadenza, abbonamenti):
        self._nome = nome
        self._cognome = cognome
        self._d_nascita = d_nascita
        self._cf = cf
        self._cod_tessera = cod_tessera
        self._data_scadenza = data_scadenza
        self._abbonamenti = abbonamenti
    
    def __eq__(self, other):
        if other is None or not isinstance(other, Tesserato):
            return False
        if self is other:
            return True
        return self._cf == other._cf
    
    def __repr__(self):
        return f"\n\nTESSERATO\n- Nome e cognome: {self._nome} {self._cognome}\n- Data di nascita: {self._d_nascita}\n- Codice fiscale: {self._cf}\n- Codice tessera: {self._cod_tessera}\n- Data scadenza: {self._data_scadenza}\n- Abbonamenti: {self._abbonamenti}"
    
    def aggiungi_servizio(self, cs, mese, settimane):
        self._abbonamenti.append(Abbonamento(cs, mese, settimane))

class Servizio:
    LIVELLI_DISPONIBILI = {"junior" : 1, "advanced" : 2, "senior" : 3}

    def __init__(self, cod, posti_disp, turno, costo):
        if turno not in self.LIVELLI_DISPONIBILI:
            raise Exception("turno non valido")
        self._cod = cod
        self._posti_disp = posti_disp
        self._turno = turno
        self._costo = costo
    
    def __eq__(self, other):
        if other is None or not isinstance(other, Servizio):
            return False
        if self is other:
            return True
        return self._cod == other._cod

    def __repr__(self):
        return f"\nSERVIZIO\n- Codice: {self._cod}\n- Posti disponibili: {self._posti_disp}\n- turno: {self._turno}\n- costo: €{self._costo}"
    
    def aggiungi_posti(self, num):
        self._posti_disp += num
    def rimuovi_posti(self, num):
        self._posti_disp -= num
    def posti_disponibili(self):
        return self._posti_disp

class Abbonamento:
    def __init__(self, cod, mese, settimane):
        self._cod = cod
        self._settimane = [[False] * 4 for _ in range(12)]
        for i in range(4):
            if settimane[i]:
                self._settimane[mese-1][i] = True
    
    def __eq__(self, other):
        if other is None or not isinstance(other, Abbonamento):
            return False
        if other is self:
            return True
        return self._cod == self._cod
    
    def __repr__(self):
        ret = f"\nCodice servizio: {self._cod}\nCalendario: "
        for i in range(12):
            if i % 4 == 0:
                ret += "\n"
                if i < 4:
                    ret += "Gen\tFeb\tMar\tApr"
                elif i < 8:
                    ret += "Mag\tGiu\tLug\tAgo"
                else:
                    ret += "Set\tOtt\tNov\tDic"
                ret += "\n"
            for j in range(4):
                if self._settimane[i][j]:
                    ret += "1"
                else:
                    ret += "0"
            ret += "\t"
        return ret

class CentroSportivo:
    def __init__(self, tesserati = [], servizi = []):
        self.tesserati = tesserati
        self.servizi = servizi
    
    def __repr__(self):
        return f'{self.tesserati}\n\n{self.servizi}'

    # ES 1
    def verifica_tesserato(self, cf):
        for tesserato in self.tesserati:
            if tesserato._cf == cf:
                return True
        return False

    def verifica_disponibili(self, cs):
        for servizio in self.servizi:
            if servizio._cod == cs:
                if servizio._posti_disp > 0:
                    return True
                else:
                    return False
    
    def aggiorna(self, cf, cs, mese, settimane):
        if self.verifica_tesserato(cf) and self.verifica_disponibili(cs):
            for tesserato in self.tesserati:
                if tesserato._cf == cf:
                    tesserato.aggiungi_servizio(cs, mese, settimane)
                    return True
        return False

    # ES 2
    def servizi_ordinati(self):
        return sorted(self.servizi, key = lambda s: (-Servizio.LIVELLI_DISPONIBILI[s._turno], - s._costo*4))

    # ES 3
    def spesa(self, cf, mese):
        spesa_totale = 0
        for tesserato in self.tesserati:
            if tesserato._cf == cf:
                for abbonamento in tesserato._abbonamenti:
                    for servizio in self.servizi:
                        if abbonamento._cod == servizio._cod:
                            costo_settimanale = servizio._costo
                    spesa_totale += costo_settimanale * sum(abbonamento._settimane[mese-1])
        return spesa_totale

    def report_iscritti(self, mese):
        m = []
        for tesserato in self.tesserati:
            m.append([tesserato._cod_tessera, self.spesa(tesserato._cf, mese)])
        return m




#--------------------------------------------------------------------#
# TEST

# Creiamo alcuni servizi offerti dal centro sportivo
servizi = [
    Servizio("S1", 5, "senior", 50),   # Servizio senior con costo settimanale di 50€
    Servizio("S2", 10, "junior", 30),  # Servizio junior con costo settimanale di 30€
    Servizio("S3", 7, "advanced", 40)  # Servizio advanced con costo settimanale di 40€
]

# Creiamo alcuni tesserati iscritti al centro sportivo
tesserati = [
    Tesserato("Mario", "Rossi", "01/01/1990", "MRORSS90A01H501U", "T001", "31/12/2025", []),
    Tesserato("Anna", "Bianchi", "15/05/1985", "ANNBNC85E15F205X", "T002", "30/06/2025", []),
    Tesserato("Luigi", "Verdi", "22/10/2000", "LGIVRD00T22F205Z", "T003", "31/12/2026", [])
]

# Creiamo un centro sportivo con questi dati
centro_sportivo = CentroSportivo(tesserati, servizi)

# Aggiungiamo abbonamenti ai tesserati
centro_sportivo.aggiorna("MRORSS90A01H501U", "S1", 5, [True, False, True, True])  # Mario si abbona al servizio "S1" nel mese 5 (Maggio), settimane 1, 3, 4
centro_sportivo.aggiorna("ANNBNC85E15F205X", "S2", 5, [True, True, False, False])  # Anna si abbona al servizio "S2" nel mese 5 (Maggio), settimane 1 e 2
centro_sportivo.aggiorna("LGIVRD00T22F205Z", "S3", 5, [False, True, True, False])  # Luigi si abbona al servizio "S3" nel mese 5 (Maggio), settimane 2 e 3

print(centro_sportivo)

print("\n\n\n---------------------------------\n\n\n")

print("\nServizi ordinati per turno e costo decrescente:")
for serv in centro_sportivo.servizi_ordinati():
    print(serv)

print("\n\n\n---------------------------------\n\n\n")

print("\nReport iscritti per il mese di Maggio:")
for riga in centro_sportivo.report_iscritti(5):
    print(f"Tessera: {riga[0]}, Spesa totale: €{riga[1]}")

