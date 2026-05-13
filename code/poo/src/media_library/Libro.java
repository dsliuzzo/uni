package media_library;

import java.util.*;

public class Libro implements Support{
    private Titolo titolo;
    private Anno annoEdizione;
    private Anno annoAcquisto;
    private Nominativo autore;
    private Genere<Libro> genere;

    public Libro(Titolo titolo, Anno annoEdizione, Anno annoAcquisto, Nominativo autore, Genere genere){
        this.titolo = titolo;
        this.annoEdizione = annoEdizione;
        this.annoAcquisto = annoAcquisto;
        this.autore = autore;
        this.genere = genere;
    }
    public Libro(){}

    @Override
    public Titolo getTitolo(){
        return titolo;
    }
    @Override
    public Anno getAnnoEdizione(){
        return annoEdizione;
    }
    @Override
    public Anno getAnnoAcquisto(){
        return annoAcquisto;
    }
    @Override
    public Nominativo getAutore(){
        return autore;
    }
    @Override
    public Genere getGenere(){
        return genere;
    }

    @Override
    public String toString(){
        StringBuilder s = new StringBuilder();
        s.append("Libro: ");
        s.append(titolo).append(", ");
        s.append(annoEdizione).append(", ");
        s.append(annoAcquisto).append(", ");
        s.append(autore).append(", ");
        s.append(genere).append(";\n");
        return s.toString();
    }

    @Override
    public boolean equals(Object o){
        if (o == null) return false;
        if (this == o) return true;
        if (!(o instanceof Libro that)) return false;
        return this.getTitolo().equals(that.getTitolo()) && this.getAnnoEdizione().equals(that.getAnnoEdizione()) && this.getAnnoAcquisto().equals(that.getAnnoAcquisto()) && this.getAutore().equals(that.getAutore()) && this.getGenere().equals(that.getGenere());
    }

    @Override
    public int compareTo(Support altro){
        int ris = this.getTitolo().compareTo(altro.getTitolo());
        if (ris != 0) return ris;

        ris = this.getAnnoEdizione().compareTo(altro.getAnnoEdizione());
        if (ris != 0) return ris;

        ris = this.getAnnoAcquisto().compareTo(altro.getAnnoAcquisto());
        if (ris != 0) return ris;

        return 0;
    }

    @Override
    public int hashCode() {
        return Objects.hash(titolo, annoEdizione, annoAcquisto);
    }
}
