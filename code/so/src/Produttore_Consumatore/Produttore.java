package Produttore_Consumatore;

import java.util.Random;

public class Produttore implements Runnable{
    private static final int MIN_TEMPO_PRODUZIONE = 500;  // ms
    private static final int MAX_TEMPO_PRODUZIONE = 2000; // ms
    private static final int MAX_RANDOM = 10;
    private Random random = new Random();
    private Buffer buffer;

    // costruttore
    public Produttore (Buffer b) {
        buffer = b;
    }

    // implementiamo il run della classe runnable
    // Aggiungi un prodotto nel buffer se ha delle posizioni vuote. Altrimenti, il produttore deve essere sospeso finché non ci saranno delle posizioni vuote
    public void run() {
        try {
            while (true) {
                int i = produci();
                buffer.put(i);
            }
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }
    private int produci() throws InterruptedException {
        attendi(MIN_TEMPO_PRODUZIONE, MAX_TEMPO_PRODUZIONE);
        return random.nextInt(MAX_RANDOM + 1) + 1;
    }
    private void attendi (int min, int max) throws InterruptedException {
        int ms = min + random.nextInt(max - min + 1);
        Thread.sleep(ms);
    }
}
