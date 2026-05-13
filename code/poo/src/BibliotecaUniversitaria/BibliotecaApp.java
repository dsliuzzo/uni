package BibliotecaUniversitaria;

import java.io.PrintWriter;
import java.util.*;

public class BibliotecaApp {
    public static void main(String[] strings) {
        Volume v1 = new Tesi(new CodiceVolume("UNI-12345"), new Titolo("il mondo al contrario"), new Autore("Jonny", "Riccio"), new Anno(1855), 200, Genere.valueOf("GIALLO"));
        Volume v2 = new Tesi(new CodiceVolume("UNI-54321"), new Titolo("bubble league"), new Autore("Alessandro", "Commisso"), new Anno(2025), 85, Genere.valueOf("SCIENTIFICO"));

        BibliotecaLC b1 = new BibliotecaLC();

        b1.aggiungiVolume(v1);
        b1.aggiungiVolume(v2);

        List<Biblioteca> biblioteche = new ArrayList<>();
        biblioteche.add(b1);

        try (PrintWriter pw = new PrintWriter(System.out)){
            BibliotecaUtil.stampaCatalogo(biblioteche, pw);
        } catch (Exception e) {
            System.out.println("ERRORE DI IO");
        }
    }
}
