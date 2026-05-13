package FlottaNavale;

import java.time.Year;
import java.util.Iterator;

public interface Flotta extends Iterable<Nave>{
    void aggiungiNave(Nave n);

    default boolean rimuoviNave(Nave n) {
        Iterator<Nave> it = iterator();
        while (it.hasNext()) {
            Nave curr = it.next();
            if (curr.equals(n)) {
                it.remove();
                return true;
            }
        }
        throw new IllegalStateException("nave non trovata per la rimozione");
    }

    default Nave getNave(int index) {
        if (index < 0 || index >= size()) throw new IndexOutOfBoundsException("index out of bound");
        int curr = 0;
        for (Nave v : this) {
            if (curr == index) {
                return v;
            }
            curr++;
        }
        throw new IllegalStateException("elemento non trovato");
    }

    public int size();

    default double etaMedia () {
        double media = 0;
        for (Nave v : this) {
            media += (double)Year.now().getValue() - (double)v.annoVaro().anno();
        }
        return media / size();
    }

    default boolean verificaOperativita() {
        int naviServizio = 0;
        for (Nave v : this) {
            if (v.stato() == Stato.IN_SERVIZIO) { naviServizio++;}
        }
        return size() > 4 && (double)naviServizio > ((double)size()/2) && etaMedia() < 20;
    }
}
