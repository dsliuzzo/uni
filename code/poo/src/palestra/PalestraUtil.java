package palestra;

import java.util.*;
import java.io.*;

public class PalestraUtil {
    public static void stampaReportAttivita(List<? extends Palestra> palestre, PrintWriter pw) {
        int counter = 1;
        for (Palestra p : palestre) {
            pw.println("Palestra numero: " + counter);
            pw.println("Rapporto istruttori/partecipanti: " + p.rapportoIstrPartecipanti());
            pw.println("ELENCO CORSI:");
            for (Corso c : p) {
                pw.println(c);
            }
            pw.println("----------------------------------------------------------\n");
            counter++;
        }
        pw.flush();
    }

    //5. (4 punti) Classe PalestraUtil, metodo di reportistica. Si implementi il metodo statico: void generaReportIstruttori(List<Corso> corsi, String nomeFile)
    //
    //Invece di stampare i dettagli dei corsi, si vuole un file riassuntivo che mostri il carico di lavoro. Il metodo deve scrivere su file:
    //
    //Una riga di intestazione: CODICE CORSO : RAPPORTO
    //
    //Per ogni corso, una riga contenente il codice del corso e il risultato della divisione capacità / numeroIstruttori.
    //
    //Alla fine del file, una riga: TOTALE CORSI: [numero]
    //
    //La sfida qui: Mescolare la scrittura di stringhe con il risultato di un calcolo matematico (double) fatto al volo durante l'iterazione. Bisogna gestire il flush() e la chiusura corretta per assicurarsi che l'ultima riga di totale venga scritta davvero.

    public static void generaReportIstruttori(List<? extends Corso> corsi, String nomeFile){
        try(PrintWriter pw = new PrintWriter(new BufferedWriter(new FileWriter(nomeFile)))){
            int count = 0;
            pw.println("CODICE CORSO : RAPPORTO");
            for (Corso c : corsi){
                pw.println(c.codiceCorso().cod() + Double.toString((double) c.capacitaMassima() / c.numeroIstruttori()));
                count ++;
            }
            pw.println("TOTALE CORSI: " + Integer.toString(count));

        } catch (IOException e){
            System.out.println("errore" + e.getMessage());
        }

    }
}
