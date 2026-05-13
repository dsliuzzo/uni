package palestra;

import java.util.*;

public class Cardio extends AbstractCorso{
    private ArrayList<Attrezzatura> attrezzaturaRichiesta;
    private final String tipo = "Cardio";

    public Cardio(CodiceCorso codiceCorso, String nome, int capacitaMassima, int numeroIstruttori, Orario orario, int durataMinuti, Intensita intensita, ArrayList<Attrezzatura> attrezzaturaRichiesta) {
        super(codiceCorso, nome, capacitaMassima, numeroIstruttori, orario, durataMinuti, intensita);
        this.attrezzaturaRichiesta = attrezzaturaRichiesta;
        if (durataMinuti < 45) throw new IllegalArgumentException("durata non sufficiente per corso cardio");
    }

    // getter
    public ArrayList<Attrezzatura> attrezzaturaRichiesta() {
        return attrezzaturaRichiesta;
    }
    public String tipo() {
        return tipo;
    }

    // toString
    public String toString() {
        StringBuilder str = new StringBuilder("Corso cardio: ").append(codiceCorso());
        str.append("\nNome: ").append(nome());
        str.append("\nCapacità: ").append(capacitaMassima());
        str.append("\nIstruttori: ").append(numeroIstruttori());
        str.append("\nOrario: ").append(orario());
        str.append("\nDurata: ").append(durataMinuti());
        str.append("\nIntensità: ").append(intensita());
        str.append("\nAttrezzatura necessaria: ").append(attrezzaturaRichiesta());
        return str.toString();
    }
}
