package treni;

import java.io.Serializable;

public class Motrice extends VagoneAbstract {
    private Massa trazione;

    public Motrice(Identificatore identificatore, Lunghezza lunghezza, Velocita velocitaMax, Massa massa, Massa massaFrenata, Massa trazione) {
        super(identificatore, lunghezza, velocitaMax, massa, massaFrenata);
        this.trazione = trazione;
    }

    public Massa trazione() {
        return trazione;
    }

    @Override
    public String toString() {
        StringBuilder str = new StringBuilder(super.toString()).append("\n - trazione: ").append(trazione()).append(" tonnellate");
        return str.toString();
    }
}
