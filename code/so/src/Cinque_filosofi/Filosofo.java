package Cinque_filosofi;

public class Filosofo extends Thread {
    private Tavolo tavolo;
    private int posizione;

    public Filosofo(Tavolo t, int p) {
        tavolo = t;
        posizione = p;
    }

    public void run() {
        try {
            while(true) { // definiamo cosa deve fare un filosofo
                tavolo.prendiBacchette(posizione);
                System.out.println("Il filosofo " + posizione + " ha iniziato a mangiare");
                mangia();
                System.out.println("Il filosofo " + posizione + " ha finito di mangiare");
                tavolo.rilasciaBacchette(posizione);
                pensa();
            }
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    // simuliamo il funzionamento
    private void mangia() throws InterruptedException {
        Thread.sleep(1000);
    }
    private void pensa() throws InterruptedException {
        Thread.sleep(3000);
    }
}
