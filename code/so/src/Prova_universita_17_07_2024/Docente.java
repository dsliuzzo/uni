package Prova_universita_17_07_2024;

import java.util.concurrent.TimeUnit;

public class Docente extends Thread {
    Esame e;

    public Docente(Esame e) {
        this.e = e;
    }

    @Override
    public void run() {
        try {
            e.iniziaEsame();
            TimeUnit.SECONDS.sleep(2);
            System.out.println("Esame terminato, inizia la consegna");
            e.fineEsame();
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }
}
