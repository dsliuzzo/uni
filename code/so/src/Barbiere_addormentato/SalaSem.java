package Barbiere_addormentato;

import java.util.concurrent.Semaphore;

public class SalaSem extends Sala {
    private Semaphore poltrona = new Semaphore(0, true);
    private Semaphore clienteDisponibile = new Semaphore(0);
    private Semaphore mutex = new Semaphore(1);

    private static final int NUM_SEDIE = 10;
    private int occupati = 0;

    @Override
    public void tagliaCapelli() throws InterruptedException {
        clienteDisponibile.acquire();
        poltrona.release();
    }

    @Override
    public boolean attendiTaglio() throws InterruptedException {
        mutex.acquire();
        if (occupati == NUM_SEDIE) {
            mutex.release();
            return false;
        }
        occupati++;
        mutex.release();
        clienteDisponibile.release();
        poltrona.acquire();
        mutex.acquire();
        occupati--;
        mutex.release();
        return true;
    }
}
