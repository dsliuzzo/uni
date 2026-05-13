package palestra;

import java.util.*;

public class Forza extends AbstractCorso{
    private ArrayList<gruppoMuscolare> gruppiMuscolari;
    private boolean corpoLibero;
    private final String tipo = "Forza";

    public Forza(CodiceCorso codiceCorso, String nome, int capacitaMassima, int numeroIstruttori, Orario orario, int durataMinuti, Intensita intensita, ArrayList<gruppoMuscolare> gruppiMuscolari, boolean corpoLibero) {
        super(codiceCorso, nome, capacitaMassima, numeroIstruttori, orario, durataMinuti, intensita);
        if (gruppiMuscolari.size() > 3) throw new IllegalArgumentException("troppi gruppi muscolari");
        this.gruppiMuscolari = gruppiMuscolari;
        this.corpoLibero = corpoLibero;
    }

    public ArrayList<gruppoMuscolare> gruppiMuscolari() {
        return gruppiMuscolari;
    }
    public boolean corpoLibero() {
        return corpoLibero;
    }
    public String tipo() {
        return tipo;
    }

    public String toString() {
        StringBuilder str = new StringBuilder("Corso di forza ");
        if (corpoLibero()) {
            str.append("a corpo libero");
        } else {
            str.append("con attrezzi");
        }
        str.append(": ").append(codiceCorso());
        str.append("\nNome: ").append(nome());
        str.append("\nCapacità: ").append(capacitaMassima());
        str.append("\nIstruttori: ").append(numeroIstruttori());
        str.append("\nOrario: ").append(orario());
        str.append("\nDurata: ").append(durataMinuti());
        str.append("\nIntensità: ").append(intensita());
        str.append("\nGruppi muscolari allenati: ").append(gruppiMuscolari());
        return str.toString();
    }
}
