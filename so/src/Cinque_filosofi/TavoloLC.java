package Cinque_filosofi;

import java.util.concurrent.locks.*;

public class TavoloLC extends Tavolo {
    protected boolean[] bacchette = new boolean[NUM_FILOSOFI];
    private Lock lock = new ReentrantLock();
    private Condition[] possoMangiare = new Condition[NUM_FILOSOFI];

    public TavoloLC() {
        for (int i = 0; i < NUM_FILOSOFI; i++) {
            possoMangiare[i] = lock.newCondition();
        }
    }

    public void prendiBacchette(int i) throws InterruptedException {
        lock.lock();
        try {
            // se c'è almeno una bacchetta già in uso da qualcun altro si mette in attesa in una delle condition
            while (bacchette[i] || bacchette[(i+1) % NUM_FILOSOFI]) {
                if (bacchette[i]) {
                    possoMangiare[i].await();
                } else {
                    possoMangiare[(i+1) % NUM_FILOSOFI].await();
                }
            }
            bacchette[i] = true;
            bacchette[(i+1) % NUM_FILOSOFI] = true;
        } finally {
            lock.unlock();
        }
    }

    public void rilasciaBacchette(int i) {
        lock.lock();
        try {
            // imposta a false l'uso delle bacchette e segnala ai filosofi che stanno aspettando che le bacchette sono state rilasciate
            bacchette[i] = false;
            bacchette[(i+1) % NUM_FILOSOFI] = false;
            possoMangiare[i].signal();
            possoMangiare[(i+1) % NUM_FILOSOFI].signal();
        } finally {
            lock.unlock();
        }
    }

    public static void main(String[] args) {
        TavoloLC tavolo = new TavoloLC();
        tavolo.test();
    }

}
