package ristrutturazioni;

import java.util.*;

public class ComputoMetricoImpl implements ComputoMetrico{
    private final List<Voce> voci = new ArrayList<>();

    public List<Voce> voci() {
        return voci;
    }

    public ComputoMetricoImpl() { }

    @Override
    public void aggiungiVoce(String descrizione, Quantita quantita, double prezzoUnitario, int operai) {
        Voce v = new Voce(descrizione, quantita, prezzoUnitario, operai);
        this.voci.add(v);
    }

    public Iterator<Voce> iterator() {
        return voci.iterator();
    }
}
