package Produttore_Consumatore;

import java.util.concurrent.TimeUnit;

public class Consumatore implements Runnable{
    private Buffer buffer;

    // costruttore
    public Consumatore (Buffer b) {
        buffer = b;
    }

    // implementiamo il run della classe runnable
    // Preleva un prodotto dal buffer se ci sono degli elementi nel buffer. Altrimenti, il consumatore deve essere sospeso finché non ci saranno dei prodotti nel buffer.
    public void run() {
        try {
            while (true) {
                int i = buffer.get();
                consuma(i);
            }
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }
    private void consuma(int i) throws InterruptedException {
        TimeUnit.SECONDS.sleep(i);
    }
}
