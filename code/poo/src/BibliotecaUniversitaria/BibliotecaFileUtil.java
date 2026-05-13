package BibliotecaUniversitaria;

import java.util.*;
import java.io.*;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class BibliotecaFileUtil {
    private BibliotecaFileUtil () {}

    public Biblioteca leggiBibliotecaDaFile(File file) throws IOException {
        BufferedReader reader = new BufferedReader(new FileReader(file));
        Biblioteca b = new BibliotecaLC();
        String riga = reader.readLine();
        Pattern pattern = Pattern.compile("^([^;]*);(UNI-\\d{5});([^;]*);(\\w*) (\\w*);(\\d*);(\\d*);(\\w*)$");
        while (riga != null) {
            Matcher m = pattern.matcher(riga);
            if (m.find()) {
                if (m.group(1).equals("TESI")) {
                    b.aggiungiVolume(new Tesi(new CodiceVolume(m.group(2)), new Titolo(m.group(3)), new Autore(m.group(4), m.group(5)), new Anno(Integer.parseInt(m.group(6))), Integer.valueOf(m.group(7)), Genere.valueOf(m.group(8))));
                }
            }
            riga = reader.readLine();
        }
        reader.close();
        return b;
    }
}
