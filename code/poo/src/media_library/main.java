package media_library;

import java.util.List;
import java.io.PrintWriter;

public class main {
    public static void main(String[] args) {
        // Demo rapido per testare il package media_library
        // NOTA: Titolo e Nominativo permettono solo caratteri alfanumerici/underscore (regex \w{1,30})
        // e GenereCD implementa Genere per i CD.
        try {
            // Creo uno scaffale per CD (dimensioneScaffale=10, dimensioneMensola=4)
            ScaffaleConcreto<CD> scaffaleCd = new ScaffaleConcreto<>(10, 4, GenereCD.pop);

            // Creo alcuni CD con generi diversi dal genere dello scaffale per evitare l'eccezione nel metodo add
            // (l'implementazione attuale lancia se il genere coincide).
            CD cd1 = new CD(
                    new Titolo("Album1"),
                    new Anno(2001),
                    new Anno(2005),
                    new Nominativo("Mario", "Rossi"),
                    GenereCD.rock
            );
            CD cd2 = new CD(
                    new Titolo("Album2"),
                    new Anno(1999),
                    new Anno(2000),
                    new Nominativo("Luca", "Bianchi"),
                    GenereCD.metal
            );
            CD cd3 = new CD(
                    new Titolo("BestOf"),
                    new Anno(2010),
                    new Anno(2011),
                    new Nominativo("Anna", "Verdi"),
                    GenereCD.jazz
            );

            // Aggiungo i CD allo scaffale
            scaffaleCd.add(cd1);
            scaffaleCd.add(cd2);
            scaffaleCd.add(cd3);

            // Stampo lo scaffale intero (usa il toString personalizzato)
            System.out.println("Contenuto scaffale CD:\n" + scaffaleCd);

            // Visualizzo la prima mensola (indice 0)
            List<CD> primaMensola = scaffaleCd.mensola(0);
            System.out.println("\nPrima mensola:");
            for (CD c : primaMensola) {
                System.out.print(c + "\n");
            }

            // Ricerca per keyword nel titolo
            List<CD> risultatoRicerca = scaffaleCd.cerca("Album");
            System.out.println("\nRisultati ricerca 'Album':");
            for (CD c : risultatoRicerca) {
                System.out.print(c);
            }

            // Rimuovo un CD e ristampo
            scaffaleCd.remove(cd2);
            System.out.println("\nDopo rimozione di Album2:\n" + scaffaleCd);

            // Stampa report con MediaUtil su PrintWriter (stdout)
            MediaUtil mu = new MediaUtil();
            mu.stampaReport(List.of(scaffaleCd), new PrintWriter(System.out, true));
        } catch (Exception e) {
            System.out.println("Si è verificato un errore durante il test: " + e.getMessage());
            e.printStackTrace();
        }
    }
}
