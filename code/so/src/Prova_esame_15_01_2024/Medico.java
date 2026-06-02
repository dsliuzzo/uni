package Prova_esame_15_01_2024;

import java.util.Random;
import java.util.concurrent.TimeUnit;

public class Medico extends Thread {
    private final int minAttesa = 3;
    private final int maxAttesa = 5;

    private Reparto reparto;
    private int id;

    private Random random = new Random();

    public Medico (Reparto r, int i) {
        reparto = r;
        id = i;
    }

    @Override
    public void run() {
        try {
            while (true) {
                int stanza = random.nextInt(reparto.getNumStanze());
                attendi(5, 10);
                reparto.entraMedico(stanza);
                attendi(minAttesa, maxAttesa);
                reparto.esciMedico(stanza);
            }
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    private void attendi (int min, int max) throws InterruptedException {
        TimeUnit.SECONDS.sleep(min + random.nextInt(max - min + 1));
    }

    public int id() { return id; }
    public String tipo() { return "Medico"; }
}
