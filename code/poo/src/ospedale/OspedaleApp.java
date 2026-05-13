package ospedale;

import java.util.*;
import java.io.*;
import ristrutturazioni.Superficie;

public class OspedaleApp {
    public static void main(String[] args) {
        // creazione degli ospedali
        List<Ospedale> ospedali = new ArrayList<>();

        Ospedale o1 = new OspedaleLC();
        o1.aggiungiReparto(new Chirurgia(
                new CodiceReparto("CHI001"),
                new NomeReparto("ChirurgiaGenerale"),
                new CapacitaPazienti(50),
                10,
                new Superficie(50),
                Criticita.MEDIO,
                5
        ));
        o1.aggiungiReparto(new TerapiaIntensiva(
                new CodiceReparto("TIN001"),
                new NomeReparto("TerapiaIntensiva1"),
                new CapacitaPazienti(20),
                20,
                new Superficie(30),
                Criticita.ALTISSIMO,
                TipoMonitoraggio.CONTINUO
        ));

        Ospedale o2 = new OspedaleLC();
        o2.aggiungiReparto(new Chirurgia(
                new CodiceReparto("CHI002"),
                new NomeReparto("ChirurgiaDUrgenza"),
                new CapacitaPazienti(30),
                15,
                new Superficie(40),
                Criticita.ALTO,
                3
        ));

        ospedali.add(o1);
        ospedali.add(o2);

        // test
        OspedaleUtil.stampaReportOspedaliero(ospedali, new PrintWriter(System.out, true));
    }
}
