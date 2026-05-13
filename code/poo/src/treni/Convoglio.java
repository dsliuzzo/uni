package treni;

import java.io.*;
import java.util.*;

public interface Convoglio extends Iterable<Vagone>, Serializable{
    void add(Vagone v);

    /* usiamo un iteratore esplicito per evitare ConcurrentModificationException
     perchè abbiamo bisogno dell'iteratore per fare it.remove() */
    default boolean remove(Vagone v) {
        Iterator<Vagone> it = this.iterator();
        while (it.hasNext()) {
            Vagone current = it.next();
            if (current.equals(v)) {
                it.remove();
                return true;
            }
        }
        return false;
    }

    default Vagone getVagone(int index) {
        int count = 0;
        for (Vagone v : this) {
            if (count == index) {
                return v;
            }
            count++;
        }
        throw new IndexOutOfBoundsException("vagone non trovato");
    }

    default double calcolaRappFrenante() {
        int massaFrenata = 0;
        int massa = 0;
        for (Vagone v : this) {
            massaFrenata += v.massaFrenata().massa();
            massa += v.massa().massa();
        }
        return (double)massaFrenata / (double)massa;
    }

    default boolean controllo() {
        int massaTrainata = 0;
        int nMotrici = 0;
        int trazione = 0;
        int index = 0;
        Iterator<Vagone> it = this.iterator();
        while (it.hasNext()) {
            Vagone v = it.next();
            if ((index != 0 && it.hasNext()) && v instanceof Motrice) return false;
            index++;
            if (v instanceof Motrice) {
                nMotrici++;
                trazione += ((Motrice) v).trazione().massa();
            } else {
                massaTrainata += v.massa().massa();
            }
            if (nMotrici > 2 || massaTrainata > 1800) return false;
        }
        return calcolaRappFrenante() > 0.60 && massaTrainata < trazione;
    }
}
