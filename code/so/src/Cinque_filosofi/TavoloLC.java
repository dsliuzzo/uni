package Cinque_filosofi;

import java.util.concurrent.locks.*;

public class TavoloLC extends Tavolo {
    private Lock l = new ReentrantLock();
    private Condition attesa = l.newCondition(); // si potrebbe fare anche con l'array di condition, ma in realtà basta fare anche così tanto riverificano la condizione
    private boolean[] disponibile = new boolean[NUM_FILOSOFI];

    public TavoloLC() {
        for (int i = 0; i < NUM_FILOSOFI; i++) {
            disponibile[i] = true;
        }
    }

    @Override
    public void prendiBacchette(int i) throws InterruptedException {
        l.lock();
        try {
            while (!disponibile[i] || !disponibile[(i+1) % 5]) {
                attesa.await();
            }
            disponibile[(i+1) % 5] = false;
            disponibile[i] = false;
        } finally {
            l.unlock();
        }
    }

    @Override
    public void rilasciaBacchette(int i) {
        l.lock();
        try {
            disponibile[i] = true;
            disponibile[(i+1) % 5] = true;
            attesa.signalAll();
        } finally {
            l.unlock();
        }
    }
}
