package Prova_Salto_09_09_2022;

import java.util.concurrent.TimeUnit;

public class Giudice extends Thread {
    private Salto s;

    public Giudice(Salto s) {
        this.s = s;
    }

    @Override
    public void run() {
        try {
            while(s.successivo()) {
                TimeUnit.SECONDS.sleep(1);
            }
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }
}
