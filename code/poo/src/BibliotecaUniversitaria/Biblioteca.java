package BibliotecaUniversitaria;

import java.util.*;

public interface Biblioteca extends Iterable<Volume>{
    void aggiungiVolume(Volume v);

    default boolean rimuoviVolume(Volume v) {
        Iterator<Volume> it = iterator();
        while (it.hasNext()) {
            Volume curr = it.next();
            if (curr.equals(v)) {
                it.remove();
                return true;
            }
        }
        throw new NoSuchElementException("nessun elemento trovato");
    }

    default Volume getVolume(int index) {
        if (index < 0 || index > size()) throw new IllegalArgumentException("indice non valido");
        int curr = 0;
        for (Volume v : this) {
            if (curr == index) {
                return v;
            }
            curr++;
        }
        throw new NoSuchElementException("nessun volume trovato in posizione " + index);
    }

    default double mediaPagine() {
        int totPagine = 0;
        for (Volume v : this) {
            totPagine += v.pagine();
        }
        return (double)totPagine / size();
    }

    int size();

    default boolean verificaStandard() {
        Set<Genere> generi = new HashSet<>();
        boolean trovatoTesi = false;
        for (Volume v : this) {
            if (v instanceof Tesi) trovatoTesi = true;
            generi.add(v.genere());
        }
        return generi.size() > 2 && trovatoTesi && mediaPagine() > 149;
    }
}
