package ospedale;

import java.util.Iterator;

public interface Ospedale extends Iterable<Reparto>{
    void aggiungiReparto(Reparto r);

    default boolean rimuoviReparto(Reparto r) {
        Iterator<Reparto> it = iterator();
        while (it.hasNext()) {
            Reparto curr = it.next();
            if (curr == r) {
                it.remove();
                return true;
            }
        }
        return false;
    }

    default Reparto getReparto(int index) {
        int curr = 0;
        for (Reparto r : this) {
            if (index == curr) {
                return r;
            }
        }
        throw new IllegalStateException("reparto non trovato");
    }

    default double calcolaRatioMediciPazienti() {
        int totMedici = 0;
        int totPazienti = 0;
        for (Reparto r : this) {
            totMedici += r.medici();
            totPazienti += r.capacita().capacitaPazienti();
        }
        return (double)totMedici / (double)totPazienti;
    }

    default boolean verificaStandard() {
        boolean trovatoTI = false;
        double totSuperficie = 0;
        for (Reparto r : this) {
            if (r instanceof TerapiaIntensiva) trovatoTI = true;
            if (r.criticita().valore() > 3) {
                if (r.medici() < 3) return false;
            }
            totSuperficie += r.superficie().superficie();
        }
        return trovatoTI && (totSuperficie > 5000) && (this.calcolaRatioMediciPazienti() > 0.15);
    }
}
