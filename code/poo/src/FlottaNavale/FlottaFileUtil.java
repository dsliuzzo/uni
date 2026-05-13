package FlottaNavale;

import java.io.*;
import java.util.regex.*;

public class FlottaFileUtil {
    private FlottaFileUtil () {}

    public static void salvaFlottaSuFile(File file, Flotta flotta) {
        try (PrintWriter pw = new PrintWriter(new BufferedWriter(new FileWriter(file)))) {
            for (Nave n : flotta) {
                if (n instanceof PortaContainer) {
                    pw.print("PORTACONTAINER;");
                    pw.print(n.codice().codice() + ";");
                    pw.print(n.nome().nome() + ";");
                    pw.print(n.annoVaro().anno() + ";");
                    pw.print(n.stazza() + ";");
                    pw.print(n.capacitaCarico() + ";");
                    pw.println(n.stato().name());
                }
            }
        } catch (Exception e) {
            System.out.println("Errore di io " + e.getMessage());
        }
    }

    public static Flotta caricaFlottaDaFile(File file) {
        FlottaLC flotta = new FlottaLC();
        try (BufferedReader reader = new BufferedReader(new FileReader(file))) {
            Pattern pattern = Pattern.compile("^([A-Za-z]*);([A-Za-z]{3}-\\d{4});(\\w*);(\\d{4});(\\d*.\\d*);(\\d*.\\d*);(\\w*)$");
            String stringa = reader.readLine();
            while (stringa != null) {
                Matcher m = pattern.matcher(stringa);
                if (m.find()) {
                    if (m.group(1).equals("PORTACONTAINER")) {
                        flotta.aggiungiNave(new PortaContainer(new CodiceNave(m.group(2)), new NomeNave(m.group(3)), new Anno(Integer.parseInt(m.group(4))), Double.parseDouble(m.group(5)), Double.parseDouble(m.group(6)), Stato.valueOf(m.group(7))));
                    }
                }
                stringa = reader.readLine();
            }
        } catch (Exception e) {
            System.out.println("Errore di io "+e.getMessage());
        }
        return flotta;
    }
}
