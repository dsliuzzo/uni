package Barbiere_addormentato;

import java.util.concurrent.Semaphore;

public class SalaSem extends Sala {
    private static int NUM_POSTI = 5;

    // creazione dei semafori necessari
    Semaphore mutex = new Semaphore(1); // mutua esclusione necessaria
    Semaphore clienteDisponibile = new Semaphore(0, true); // contatore del numero di clienti nel buffer
    Semaphore poltrona = new Semaphore(0, true);

    public SalaSem (int s) {
        super(s);
    }

    @Override
    public void tagliaCapelli() throws InterruptedException {
        clienteDisponibile.acquire(); // se ci sono clienti disponibili sottraggo 1, altrimenti aspetto che ci siano disponibili
        poltrona.release(); // la poltrona è occupata
    }

    @Override
    public boolean attendiTaglio() throws InterruptedException {
        mutex.acquire();
        if (sedieLibere == 0) {
            mutex.release();
            return false; // se non ci sono sedie libere restituiamo false, il cliente se ne va
        }
        // se non entro nell'if ancora il mutex è in acquire e quindi possiamo aggiornare il numero di sedie
        sedieLibere--;
        mutex.release();
        clienteDisponibile.release(); // aggiunge 1 al contatore del numero di clienti disponibili
        poltrona.acquire(); // richiede la poltrona, se è occupata rimane in attesa e attende il suo turno
        // richiedo di nuovo il mutex per aumentare il numero di sedie libere, il cliente sta uscendo
        mutex.acquire();
        sedieLibere++;
        mutex.release();
        return true;
    }

    public static void main(String[] args) {
        try {
            Sala s = new SalaSem(NUM_POSTI);
            s.test(30);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }
}
