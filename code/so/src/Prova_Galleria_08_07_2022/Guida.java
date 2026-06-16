package Prova_Galleria_08_07_2022;

import java.util.Random;
import java.util.concurrent.TimeUnit;

public class Guida extends Thread{
    private Galleria galleria;
    private int id;
    private Random r = new Random();

    public Guida(Galleria galleria, int id) {
        this.galleria = galleria;
        this.id = id;
    }

    public int id() { return id; }

    @Override
    public void run() {
        while(true) {
            try {
                galleria.attendiVisitatori(id);
                TimeUnit.SECONDS.sleep(2 + r.nextInt(2));
                galleria.terminaVisita(id);
                TimeUnit.MILLISECONDS.sleep(30);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
    }
}
