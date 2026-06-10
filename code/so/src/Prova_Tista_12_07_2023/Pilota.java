package Prova_Tista_12_07_2023;

import java.util.Random;
import java.util.concurrent.TimeUnit;

public class Pilota extends Thread {
    private Pista p;
    private int id;
    private boolean maggiorenne;
    private Random r = new Random();

    public Pilota (Pista p, boolean m, int i) {
        this.p = p;
        maggiorenne = m;
        id = i;
    }

    @Override
    public void run() {
        try {
            p.noleggia();
            int giri = p.entraInPista();
            for (int i = 0; i < giri; i++) {
                TimeUnit.SECONDS.sleep(1 + r.nextInt(2));
            }
            p.lasciaPista();
            p.riconsegna();
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public boolean maggiorenne() { return maggiorenne; }
    public int id() { return id; }
}
