package Prova_aeroporto_08_11_2024;

import java.util.Random;
import java.util.concurrent.TimeUnit;

public class Passeggero extends Thread {
    private static final int maxBag = 3;

    private BancoCheckIn banco;
    private Random random = new Random();
    private int N;
    private int id;

    public Passeggero(BancoCheckIn b, int  i) {
        id = i;
        banco = b;
    }

    @Override
    public void run() {
        try {
            N = 1 + random.nextInt(maxBag);
            TimeUnit.MILLISECONDS.sleep(N * 15);
            banco.deponeBagagli(N);
            banco.riceviCartaImbarco();
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

    }

    public int id() {
        return id;
    }
}
