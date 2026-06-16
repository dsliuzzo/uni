package Prova_Galleria_08_07_2022;

import java.util.Random;
import java.util.concurrent.TimeUnit;

public abstract class Galleria {
    private final int numVisitatori = 300;
    protected final int numGuida = 5;
    protected final int maxVisita = 60;
    protected final int maxGalleria = 200;
    protected Random r = new Random();

    public abstract void iniziaVisita(int lingua) throws InterruptedException;
    public abstract void esci(int lingua) throws InterruptedException;
    public abstract void attendiVisitatori(int lingua) throws InterruptedException;
    public abstract void terminaVisita(int lingua) throws InterruptedException;

    public void test() {
        Guida[] guide = new Guida[numGuida];
        for (int i = 0; i < numGuida; i++) {
            guide[i] = new Guida(this, i);
            guide[i].setDaemon(true);
            guide[i].start();
        }
        try {
            for (int i = 0; i < numVisitatori; i++) {
                new Visitatore(this, i, r.nextInt(numGuida)).start();
                TimeUnit.MILLISECONDS.sleep(1 + r.nextInt(2));
            }
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }
}
