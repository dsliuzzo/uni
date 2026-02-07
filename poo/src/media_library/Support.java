package media_library;

public interface Support extends Comparable<Support>{
    Titolo getTitolo();
    Anno getAnnoEdizione();
    Anno getAnnoAcquisto();
    Nominativo getAutore();
    Genere getGenere();
}
