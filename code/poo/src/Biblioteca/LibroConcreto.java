package Biblioteca;

import java.util.Objects;

public class LibroConcreto implements Libro, Comparable<LibroConcreto>{
    private String titolo;
    private Autore autore;
    private int anno;
    private String genere;
    private boolean disponibile;
    private String nomeLettore;

    // Costruttore
    public LibroConcreto(String titolo, Autore autore, int anno, String genere) {
        this.titolo = titolo;
        this.autore = autore;
        this.anno = anno;
        this.genere = genere;
        this.disponibile = true;
        this.nomeLettore = null;
    }
    public LibroConcreto() {}

    // getter
    @Override
    public String getTitolo() {return titolo;}
    @Override
    public Autore getAutore() {return autore;}
    @Override
    public int getAnnoPubblicazione() {return anno;}
    public String getGenere() {return genere;}
    @Override
    public boolean isDisponibile() {return disponibile;}
    public String getNomeLettore() {return nomeLettore;}

    // setter
    public void setDisponibile(boolean disponibile) {this.disponibile = disponibile;}
    public void setNomeLettore(String nomeLettore) {this.nomeLettore = nomeLettore;}

    // varie
    @Override
    public String toString() {return titolo;}
    @Override
    public boolean equals(Object o) {
        if (o == null) {return false;}
        if (this == o) {return true;}
        if (!(o instanceof LibroConcreto that)) return false;
        return this.getTitolo().equals(that.getTitolo()) && this.getAutore().equals(that.getAutore()) && this.getAnnoPubblicazione() == that.getAnnoPubblicazione();
    }
    @Override
    public int hashCode() {
        return Objects.hash(titolo, autore, anno);
    }
    @Override
    public int compareTo(LibroConcreto that) {
        return this.getTitolo().compareTo(that.getTitolo());
    }

    // metodi
    @Override
    public void presta(String utente) {
        if (!isDisponibile()) {
            System.out.println("Libro non disponibile");
        } else {
            setNomeLettore(utente);
            setDisponibile(false);
            System.out.println("Libro prestato a " + utente);
        }
    }
    @Override
    public void restituisci(){
        if (isDisponibile()){
            System.out.println("Libro non prestato");
        } else {
            setNomeLettore(null);
            setDisponibile(true);
            System.out.println("Libro restituito");
        }
    }
}
