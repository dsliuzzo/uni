package BibliotecaUniversitaria;

public interface Volume extends Comparable<Volume>{
    CodiceVolume codice();
    Titolo titolo();
    Autore autore();
    Anno annoPubblicazione();
    int pagine();
    Genere genere();

    @Override
    default public int compareTo(Volume altro) {
        return codice().compareTo(altro.codice());
    }
}