package Cinque_filosofi;

import java.util.concurrent.Semaphore;

public class TavoloSem extends Tavolo {
    private Semaphore[] bacchette = new Semaphore[5];
    private Semaphore posti = new Semaphore(4);

    public TavoloSem() {
        for (int i = 0; i < bacchette.length; i++) {
            bacchette[i] = new Semaphore(1);
        }
    }

    public void prendiBacchette(int i) throws InterruptedException {
        posti.acquire();
        bacchette[i].acquire();
        bacchette[(i+1) % 5].acquire();
    }

    public void rilasciaBacchette(int i) {
        bacchette[(i+1) % 5].release();
        bacchette[i].release();
        posti.release();
    }
}
