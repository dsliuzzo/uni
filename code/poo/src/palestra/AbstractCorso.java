package palestra;

import java.util.*;

public abstract class AbstractCorso implements Corso {
    private CodiceCorso codiceCorso;
    private String nome;
    private int capacitaMassima;
    private int numeroIstruttori;
    private Orario orario;
    private int durataMinuti;
    private Intensita intensita;

    public AbstractCorso (CodiceCorso codiceCorso, String nome, int capacitaMassima, int numeroIstruttori, Orario orario, int durataMinuti, Intensita intensita) {
        String str = "^\\w{5,20}$";
        if (!nome.matches(str)) throw new IllegalArgumentException("nome non valido");
        if (capacitaMassima < 5 || capacitaMassima > 25) throw new IllegalArgumentException("capacità massima non valida");
        if (numeroIstruttori < 1 || numeroIstruttori > 5) throw new IllegalArgumentException("numero di istruttori non valido");
        if (durataMinuti < 30 || durataMinuti > 120) throw new IllegalArgumentException("durata allenamento non valida");
        this.codiceCorso = codiceCorso;
        this.nome = nome;
        this.capacitaMassima = capacitaMassima;
        this.numeroIstruttori = numeroIstruttori;
        this.orario = orario;
        this.durataMinuti = durataMinuti;
        this.intensita = intensita;
    }

    // getter
    public CodiceCorso codiceCorso() {
        return codiceCorso;
    }
    public String nome() {
        return nome;
    }
    public int capacitaMassima() {
        return capacitaMassima;
    }
    public int numeroIstruttori() {
        return numeroIstruttori;
    }
    public Orario orario() {
        return orario;
    }
    public int durataMinuti() {
        return durataMinuti;
    }
    public Intensita intensita() {
        return intensita;
    }

    // equals
    @Override
    public boolean equals(Object o) {
        if (o == null) return false;
        if (!(o instanceof AbstractCorso that)) return false;
        return this.codiceCorso().equals(that.codiceCorso());
    }

    // hashCode
    @Override
    public int hashCode() {
        return Objects.hash(codiceCorso.cod());
    }

    // toString
    @Override
    public String toString() {
        StringBuilder str = new StringBuilder("Corso: ").append(codiceCorso());
        str.append("\nNome: ").append(nome());
        str.append("\nCapacità: ").append(capacitaMassima());
        str.append("\nIstruttori: ").append(numeroIstruttori());
        str.append("\nOrario: ").append(orario());
        str.append("\nDurata: ").append(durataMinuti());
        str.append("\nIntensità: ").append(intensita());
        return str.toString();
    }
}
