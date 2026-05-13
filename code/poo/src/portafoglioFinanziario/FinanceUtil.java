package portafoglioFinanziario;

import java.io.*;
import java.util.*;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class FinanceUtil {
    private FinanceUtil() {}

    public static Portafoglio<Asset> caricaDaFile(File file) throws IOException {
        PortafoglioLC<Asset> portafoglio = new PortafoglioLC<>();
        try (BufferedReader input = new BufferedReader(new FileReader(file))) {
            String str;
            Pattern p = Pattern.compile("^([A-Z]);(\\w{11});(\\d*.\\d*);(^;);(^;)$");
            while ((str = input.readLine()) != null) {
                Matcher m = p.matcher(str);
                if (m.find()) {
                    ISIN i = new ISIN(m.group(2));
                    double v = Double.parseDouble(m.group(3));
                    Rischio r = Rischio.valueOf(m.group(4));
                    if (m.group(1).equals("AZIONE")) {
                        String s = m.group(5);
                        portafoglio.inserisci(new Azione(i,v,r,s));
                    } else if (m.group(1).equals("OBBLIGAZIONE")) {
                        int d = Integer.parseInt(m.group(5));
                        portafoglio.inserisci(new Obbligazione(i,v,r,d));
                    }
                }
            }
        } catch (Exception e) {

        }
        return portafoglio;
    }
}
