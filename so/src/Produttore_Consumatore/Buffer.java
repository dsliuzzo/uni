package Produttore_Consumatore;
// tesst git

import java.util.Arrays;

public abstract class Buffer {
    protected int[] buffer;
    protected int in = 0;
    protected int out = 0;

    // costruttore
    public Buffer(int dimensione) {
        buffer = new int[dimensione];
        Arrays.fill(buffer, 0);
    }

    // metodi principali per l'utilizzo
    public abstract void put(int i) throws InterruptedException; // usato dal produttore
    public abstract int get() throws InterruptedException; // usato dal consumatore

    // crea i thread dei produttori e dei consumatori
    public void test (int numProduttori, int numConsumatori) {
        for (int i = 0; i < numProduttori; i++) {
            new Thread (new Produttore(this)).start();
        }
        for (int i = 0; i < numConsumatori; i++) {
            new Thread (new Consumatore(this)).start();
        }
    }
}
