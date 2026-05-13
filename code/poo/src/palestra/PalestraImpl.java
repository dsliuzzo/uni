package palestra;

import java.util.*;

public class PalestraImpl extends PalestraAbstract{
    private final List<Corso> corsi;

    public PalestraImpl () {this.corsi = new ArrayList<>();}

    public void aggiungiCorso(Corso c) {
        corsi.add(c);
    }

    public boolean rimuoviCorso(Corso c) {
        return corsi.remove(c);
    }

    @Override
    public Iterator<Corso> iterator() {
        return corsi.iterator();
    }
}
