package Biblioteca;
import java.util.*;

public class Biblioteca {
    private ArrayList<Libro> catalogo;
    private HashSet<Autore> autori;

    // print
    public String toString() {
        var s = "CATALOGO\n";
        s += catalogo.toString();
        s += "\nAUTORI\n";
        s += autori.toString();
        return s;
    }

    // metodi
    public void aggiungiLibro(Libro l) {
        catalogo.add(l);
        autori.add(l.getAutore());
    }
    public void rimuoviLibro(Libro l) {
        catalogo.remove(l);
        autori.remove(l.getAutore());
    }
    public List<Libro> cercaPerAutore(String cognome) {
        List<Libro> filtrati = new LinkedList<>();
        for (var l : catalogo) {
            if (l.getAutore().getCognome().equals(cognome)) {
                filtrati.add(l);
            }
        }
        return filtrati;
    }
    public List<Libro> ordinaPerTitolo() {
        catalogo.sort(Comparator.comparing(Libro::getTitolo));
        return catalogo;
    }
    public List<Libro> ordinaPerAnno() {
        catalogo.sort(Comparator.comparing(Libro::getAnnoPubblicazione));
        return catalogo;
    }
    public void prestaLibro (String titolo, String utente) {
        for (var l : catalogo) {
            if (l.getTitolo().equals(titolo)) {
                l.presta(utente);
                return;
            }
        }
        System.out.println("Libro non trovato");
    }
    public void restituisciLibro (String titolo) {
        for (var l : catalogo) {
            if (l.getTitolo().equals(titolo)) {
                l.restituisci();
                return;
            }
        }
        System.out.println("Libro non trovato");
    }
}
