package palestra;

import java.util.*;

public interface Palestra extends Iterable<Corso> {
    void aggiungiCorso(Corso c);

    default boolean rimuoviCorso(Corso c) {
        if (c == null) throw new NullPointerException();
        Iterator<Corso> it = this.iterator();
        while(it.hasNext()) {
            Corso corso = it.next();
            if (corso.equals(c)) {
                it.remove();
                return true;
            }
        }
        return false;
    }

    default Corso getCorso(int index) {
        int i = 0;
        for (Corso c : this) {
            if (i == index) return c;
            i++;
        }
        throw new IndexOutOfBoundsException("indice non trovato");
    }

    default double rapportoIstrPartecipanti () {
        int numIstr = 0;
        int capCorsi = 0;
        for (Corso c : this) {
            numIstr += c.numeroIstruttori();
            capCorsi += c.capacitaMassima();
        }
        if (capCorsi == 0) throw new ArithmeticException("capacità corsi uguale a 0");
        return (double)numIstr/capCorsi;
    }

    default int numTipiCorsi () {
        Set<String> tipi = new HashSet<>();
        for (Corso c : this) {
            tipi.add(c.tipo());
        }
        return tipi.size();
    }

    default boolean corsiAttiviSettimana () {
        Set<giornoSettimana> giorni = new HashSet<>();
        for (Corso c : this) {
            if (c != null && c.orario() != null) giorni.add(c.orario().giorno());
            if (giorni.size() == 7) return true;
        }
        return false;
    }

    default int capTotale () {
        int capCorsi = 0;
        for (Corso c : this) {
            capCorsi += c.capacitaMassima();
        }
        return capCorsi;
    }

    default boolean intensitaIstruttori () {
        for (Corso c : this) {
            if (c.intensita().valore() == 5 && c.numeroIstruttori() < 2) return false;
        }
        return true;
    }

    default boolean verificaStandardQualita () {
        return numTipiCorsi() >= 3 && corsiAttiviSettimana() && capTotale() >= 100 && rapportoIstrPartecipanti() >= 0.1 && intensitaIstruttori();
    }
}