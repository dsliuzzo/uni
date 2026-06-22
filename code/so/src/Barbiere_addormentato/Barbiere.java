package Barbiere_addormentato;

import java.util.concurrent.TimeUnit;

public class Barbiere extends Thread {
    private Sala sala;

    public Barbiere (Sala s) {
        sala = s;
    }

    public void run() {
        while (true) {
            try {
                sala.tagliaCapelli();
                System.out.println("Taglio in corso...");
                taglia();
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
    }

    private void taglia() throws InterruptedException {
        TimeUnit.SECONDS.sleep(3);
    }
}
