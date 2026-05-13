package FlottaNavale;

import java.util.*;
import java.io.*;

public class FlottaUtil {
    private FlottaUtil() {}

    public static void stampaReportFlotta (List<? extends Flotta> flotte, PrintWriter pw) {
        int count = 1;
        for (Flotta f: flotte) {
            pw.println("Flotta " + count);
            pw.println("Numero di navi: " + f.size());
            for (Nave v : f) {
                pw.println(v);
            }
            pw.println("-------------------------------------------------------");
        }
    }
}
