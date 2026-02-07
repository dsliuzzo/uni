package treni;

import java.util.*;
import java.io.Serializable;

public class VagonePasseggeri extends VagoneAbstract {
    private List<Passeggero> listaPasseggeri = new ArrayList<>();
    private int capienzaPasseggeri;

    public VagonePasseggeri(Identificatore identificatore, Lunghezza lunghezza, Velocita velocitaMax, Massa massa, Massa massaFrenata, int capienzaPasseggeri, ArrayList<Passeggero> listaPasseggeri) {
        super(identificatore, lunghezza, velocitaMax, massa, massaFrenata);
        this.capienzaPasseggeri = capienzaPasseggeri;
        this.listaPasseggeri = listaPasseggeri;
    }

    public int capienzaPasseggeri() {
        return capienzaPasseggeri;
    }

    public List<Passeggero> listaPasseggeri() {
        return listaPasseggeri;
    }

    @Override
    public String toString() {
        StringBuilder str = new StringBuilder(super.toString()).append("\n - capienza massima passeggeri: ").append(capienzaPasseggeri);
        return str.toString();
    }
}
