package Cinque_filosofi;

import java.util.concurrent.Semaphore;

public class TavoloSem extends Tavolo {
    private static final int NUM_BACCHETTE = 5;
    Semaphore bacchette[] = new Semaphore[NUM_BACCHETTE];
    Semaphore mutex = new Semaphore(1); // implementiamo un mutex per evitare deadlock

    // costruttore
    public TavoloSem() {
        for (int i = 0; i < NUM_BACCHETTE; i++) {
            bacchette[i] = new Semaphore(1);
        }
    }

    // tentano di prendere i permessi per due bacchette
    @Override
    public void prendiBacchette(int i) throws InterruptedException {
        mutex.acquire();
        bacchette[i].acquire();
        bacchette[(i+1) % NUM_BACCHETTE].acquire();
        mutex.release();
    }

    // rilasciano i permessi per due bacchette
    @Override
    public void rilasciaBacchette(int i)  {
        // nel rilascio non è necessaria la mutua esclusione
        bacchette[i].release();
        bacchette[(i+1) % NUM_BACCHETTE].release();
    }

    // main di test
    public static void main(String[] Args) {
        TavoloSem tavolo = new TavoloSem();
        tavolo.test();
    }
}
