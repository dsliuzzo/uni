package ospedale;

import java.util.*;
import java.io.*;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public final class OspedaleUtil {
    public static void stampaReportOspedaliero(List<? extends Ospedale> ospedali, PrintWriter pw) {
        int count = 1;
        for (Ospedale o : ospedali) {
            pw.println("OSPEDALE " + String.valueOf(count));
            pw.println(" - ratio medici pazienti" + String.valueOf(o.calcolaRatioMediciPazienti()));
            pw.println("--- informazioni per reparto ---");
            for (Reparto r : o) {
                pw.println(r);
            }
            pw.println("__________________________________________________________");
            pw.println();
            count++;
        }
    }

    //Il file di ingresso fileIngresso contiene l'elenco dei pazienti in attesa, formato: CODICE_FISCALE;NOME;CODICE_COLORE Dove CODICE_COLORE è un intero: 1 (Rosso/Urgente), 2 (Giallo), 3 (Verde/Bianco).
    //Compito: Leggere il file di ingresso riga per riga.
    //Se il codice colore è 1, scrivere l'intera riga nel fileUrgenze.
    //Se il codice colore è 2 o 3, scrivere l'intera riga nel fileOrdinari.

    public static void smistaPazienti(String fileIngresso, String fileUrgenze, String fileOrdinari) throws IOException {
        BufferedReader br = null;
        PrintWriter pwUrgenze = null;
        PrintWriter pwOrdinari = null;
        try{
            br = new BufferedReader(new FileReader(fileIngresso));
            pwUrgenze = new PrintWriter(new BufferedWriter(new FileWriter(fileUrgenze)));
            pwOrdinari = new PrintWriter(new BufferedWriter(new FileWriter(fileOrdinari)));

            String riga;
            String reg = "^(\\w{16});\\s+([A-Za-z\\s]+);\\s+(\\d)$";
            Pattern pattern = Pattern.compile(reg);
            while ((riga = br.readLine()) != null){
                Matcher m = pattern.matcher(riga);
                if (m.find()){
                    if(Integer.parseInt(m.group(3)) == 1){
                        pwUrgenze.println(riga);
                    } else if (Integer.parseInt(m.group(3)) == 2 || Integer.parseInt(m.group(3)) == 3){
                        pwOrdinari.println(riga);
                    }
                }
            }

            pwUrgenze.flush();
            pwOrdinari.flush();

        } catch (Exception e) {
            e.printStackTrace();
        } finally{
            br.close();
            pwUrgenze.close();
            pwOrdinari.close();
        }

    }
}
