package Prova_Tour_16_06_2021;

import java.util.Random;

public class Guida extends Thread {
    private TourFirenze t;
    private Random r = new Random();

    public Guida(TourFirenze t) {
        this.t = t;
    }

    @Override
    public void run() {
        while(true) {
            try {
                t.attendiFormazioneGruppo();
                Thread.sleep(15);
                t.visitaInizia();
                attendi(40,50);
                attendi(10,20);
                attendi(40,50);
                t.visitaFine();
                Thread.sleep(60);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
    }

    private void attendi(int min, int max) throws InterruptedException {
        Thread.sleep(min + r.nextInt(max - min + 1));
    }
}
