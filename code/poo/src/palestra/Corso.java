package palestra;

public interface Corso extends Comparable<Corso>{
    CodiceCorso codiceCorso();
    String nome();
    int capacitaMassima();
    int numeroIstruttori();
    Orario orario();
    int durataMinuti();
    Intensita intensita();
    String tipo();
    // comparable
    default int compareTo(Corso altro) {
        return this.codiceCorso().compareTo(altro.codiceCorso());
    }
}
