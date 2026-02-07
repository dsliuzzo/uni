package media_library;

import java.util.*;

public interface Scaffale<S extends Support> extends Iterable<S>{
    /* Aggiunge in ordine un item nello scaffale, solleva
    un’eccezione se non c’è spazio a sufficienza; */
    void add (S item);

    /* Rimuove se presente l’item specificato restituendo true.
    Restituisce false in caso contrario; */
    boolean remove (S item);

    /* Restituisce una lista contenente i supporti collocati sulla mensola
    avente indice index. Solleva un’eccezione se l’indice non è valido. */
    List<S> mensola (int index);

    /* Restituisce una lista con tutti i supporti i cui titoli contengono la keyword
    specificata. La keyword ha lunghezza massima di 10 caratteri ed è alfanumerica. */
    default List<S> cerca (String keyword) {
        List<S> ret = new ArrayList<>();
        for (S val : this) {
            if (val.getTitolo().titolo().contains( keyword )) ret.add( val );
        }
        return ret;
    }
}
