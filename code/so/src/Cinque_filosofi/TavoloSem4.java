package Cinque_filosofi;

import java.util.concurrent.Semaphore;

public class TavoloSem4 extends Tavolo {
    private static final int NUM_BACCHETTE = 5;
    Semaphore filosofi = new Semaphore(NUM_FILOSOFI-1);
    Semaphore bacchette[] = new Semaphore[NUM_BACCHETTE];
    Semaphore mutex = new Semaphore(1); // implementiamo un mutex per evitare deadlock

    // costruttore
    public TavoloSem4() {
        for (int i = 0; i < NUM_BACCHETTE; i++) {
            bacchette[i] = new Semaphore(1);
        }
    }

    // tentano di prendere i permessi per due bacchette
    @Override
    public void prendiBacchette(int i) throws InterruptedException {
        filosofi.acquire();
        bacchette[i].acquire();
        bacchette[(i+1) % NUM_BACCHETTE].acquire();
    }

    // rilasciano i permessi per due bacchette
    @Override
    public void rilasciaBacchette(int i)  {
        bacchette[i].release();
        bacchette[(i+1) % NUM_BACCHETTE].release();
        filosofi.release();
    }

    // main di test
    public static void main(String[] Args) {
        TavoloSem tavolo = new TavoloSem();
        tavolo.test();
    }
}
