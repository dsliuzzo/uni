package Cinque_filosofi;

public class TavoloMN extends Tavolo {
    private boolean[] bacchette = new boolean[NUM_FILOSOFI];

    @Override
    public synchronized void prendiBacchette(int i) throws InterruptedException {
        while(bacchette[i] || bacchette[(i+1) % NUM_FILOSOFI]) {
            wait();
        }
        bacchette[i] = true;
        bacchette[(i+1) % NUM_FILOSOFI] = true;
    }

    @Override
    public synchronized void rilasciaBacchette(int i) {
        bacchette[i] = false;
        bacchette[(i+1) % NUM_FILOSOFI] = false;
        notifyAll();
    }
}
