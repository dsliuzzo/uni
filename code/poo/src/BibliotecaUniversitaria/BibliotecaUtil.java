package BibliotecaUniversitaria;

import java.util.*;
import java.io.*;

public class BibliotecaUtil {
    private BibliotecaUtil() {}

    public static void stampaCatalogo (List <? extends Biblioteca> biblioteche, PrintWriter pw) {
        int curr = 1;
        for (Biblioteca b : biblioteche) {
            pw.println("BIBLIOTECA :" + curr);
            for (Volume v : b) {
                pw.println(v);
            }
            pw.println("------------------------------------------------------");
        }
    }
}