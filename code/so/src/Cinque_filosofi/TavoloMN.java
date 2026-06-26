package Cinque_filosofi;

public class TavoloMN extends Tavolo {
    private boolean[] disponibile = new boolean[NUM_FILOSOFI];

    public TavoloMN() {
        for (int i = 0; i < NUM_FILOSOFI; i++) {
            disponibile[i] = true;
        }
    }

    @Override
    public synchronized void prendiBacchette(int i) throws InterruptedException {
        while (!disponibile[i] || !disponibile[(i+1) % 5]) {
            wait();
        }
        disponibile[i] = false;
        disponibile[(i+1) % 5] = true;
    }

    @Override
    public synchronized void rilasciaBacchette(int i) {
        disponibile[i] = false;
        disponibile[(i+1) % 5] = false;
        notifyAll();
    }
}
