package Prova_parcoAttrazioni_09_06_2025;

import java.util.Random;
import java.util.concurrent.TimeUnit;

public class Bambino extends Thread {
    private ParcoAttrazioni parco;
    private int id;
    private int giostra;
    private Random r = new Random();
    private int eta = 4 + r.nextInt(10 - 4 + 1);

    public Bambino(ParcoAttrazioni p, int i) {
        parco = p;
        id = i;
    }

    public int id() {return id;}
    public int giostra() {return giostra;}
    public int eta() {return eta;}

    @Override
    public void run() {
        int nGiri = 2 + r.nextInt( 10 - 2 + 1);
        for (int i = 0; i < nGiri; i++) {
            giostra = r.nextInt(parco.Op());
            try {
                parco.accodaBEta();
                TimeUnit.MILLISECONDS.sleep(10 + r.nextInt(30 - 10 + 10));
                parco.terminaGiroB();
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
    }
}
