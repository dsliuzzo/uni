package treni;

import java.io.*;
import java.util.*;

public class TrenoUtil {
    public static void StampaSchedeTreni(List<? extends Convoglio> convogli, PrintWriter pw) {
        pw.println("SCHEDE TRENI\n|----------------------------------------------|");
        int count = 0;

        for (Convoglio c : convogli) {
            pw.println("CONVOGLIO " + count);
            for (Vagone v : c) {
                pw.println(v);
            }
            pw.println("|----------------------------------------------|");
            count++;
        }
        pw.flush();
    }

    /* Si vuole salvare su disco la "formazione" del convoglio (ovvero l'ordine e il tipo dei vagoni) usando il minor spazio possibile, proprio come nel tuo NaturalMergeSort scrivi numeri interi grezzi. */
    public static boolean salvaConvoglio(Convoglio c, String fileName) {
        try (ObjectOutputStream out = new ObjectOutputStream(new FileOutputStream(fileName))) {
            out.writeObject(c);
            out.flush();
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
        return true;
    }

    public static Convoglio caricaConvoglio(String fileName){
        try (ObjectInputStream in = new ObjectInputStream(new FileInputStream(fileName))) {
            return (Convoglio) in.readObject();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }
}

