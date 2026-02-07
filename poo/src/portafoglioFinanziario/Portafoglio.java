package portafoglioFinanziario;

import java.util.*;

public interface Portafoglio<T extends Asset> extends Iterable<T>{
    void inserisci(T asset);

    default boolean rimuovi(ISIN isin) {
        Iterator<T> it = iterator();
        while (it.hasNext()) {
            T curr = it.next();
            if (curr.isin().equals(isin)) {
                it.remove();
                return true;
            }
        }
        return false;
    }

    default T getAsset(int index) {
        if (index < 0 || index > size()) throw new IndexOutOfBoundsException();
        int curr = 0;
        for (T a : this) {
            if (curr == index) {
                return a;
            }
            curr++;
        }
        return null;
    }

    int size();

    default double valoreTotale() {
        double tot = 0;
        for (T a : this) {
            tot += a.valore();
        }
        return tot;
    }

    default double mediaRischio() {
        double res = 0;
        for (T a : this) {
            res += a.rischio().value();
        }
        return res / size();
    }

    default boolean verificaCompliance() {
        return size() < 5 && mediaRischio() < 5;
    }
}
