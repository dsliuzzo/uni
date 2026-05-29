package prova_esame_e;

import java.util.concurrent.TimeUnit;

public class Pilota extends Thread {
    Funivia funivia;

    public Pilota (Funivia f) {
        funivia = f;
    }

    @Override
    public void run() {
        try {
            while (true) {
                funivia.pilotaStart();
                attendi(3);
                funivia.pilotaEnd();
                attendi(1);
            }
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    private void attendi(int i) throws InterruptedException {
        TimeUnit.SECONDS.sleep(i);
    }
}
