package Prova_reparto_15_01_2024;

import java.util.Random;
import java.util.concurrent.TimeUnit;

public class Visitatore extends Thread {
    private final int minAttesa = 10;
    private final int maxAttesa = 15;

    private Reparto reparto;
    private int id;

    private Random random = new Random();

    public Visitatore (Reparto r, int i) {
        reparto = r;
        id = i;
    }

    @Override
    public void run() {
        try {
            int stanza = random.nextInt(reparto.getNumStanze());
            reparto.entraVisitatore(stanza);
            attendi(minAttesa, maxAttesa);
            reparto.esciVisitatore(stanza);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    private void attendi (int min, int max) throws InterruptedException {
        TimeUnit.SECONDS.sleep(min + random.nextInt(max - min + 1));
    }

    public int id() { return id; }
    public String tipo() { return "Visitatore"; }
}
