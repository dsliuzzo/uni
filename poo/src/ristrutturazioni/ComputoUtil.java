package ristrutturazioni;

import java.io.*;
import java.util.*;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class ComputoUtil {
    public static ComputoMetrico leggiComputoDaFile(File file) throws IOException {
        // Per leggere testo, useremo un Reader (spesso avvolto in un BufferedReader per l'efficienza)
        ComputoMetrico cm = new ComputoMetricoLC();
        try (BufferedReader br = new BufferedReader(new FileReader(file))) {
            String riga;
            String str = "^(\\w{2,40}),(\\d*.\\d*),(\\d*.\\d*),(\\d*)$";
            var pattern = Pattern.compile(str);
            while ((riga = br.readLine()) != null) {
                var m = pattern.matcher(riga);
                if (m.find()) {
                    cm.aggiungiVoce(m.group(0), new Metri(Double.parseDouble(m.group(1))), Double.parseDouble(m.group(2)), Integer.parseInt(m.group(3)));
                }
            }
        }
        return cm;
    }

    //Si vuole verificare se nel file dei preventivi archiviati esiste già un preventivo con un certo codice, per evitare duplicati.
    //Scrivere il metodo: boolean esistePreventivo(String nomeFile, String codiceDaCercare)
    //Il file ha formato: ID_PREVENTIVO;CLIENTE;IMPORTO.

    public static boolean esistePreventivo(String nomeFile, String codiceDaCercare){
        try(BufferedReader br= new BufferedReader(new FileReader(nomeFile))){
            String riga;
            String reg = "^(\\w+);\\s*([A-Za-z\\s]+);\\s*(\\d+(?:\\.\\d+)?)$";
            Pattern pattern = Pattern.compile(reg);
            while((riga = br.readLine())!= null){
                Matcher m = pattern.matcher(riga);
                if(m.find()){
                    if(m.group(1).equals(codiceDaCercare)){
                        return true;
                    }
                }

            }
        } catch (IOException e){
            System.out.println("errore di lettura nel file" + e.getMessage());
            e.printStackTrace();
        }
        return false;
    }
}
