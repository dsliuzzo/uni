package Barbiere_addormentato;

import java.util.LinkedList;

public class SalaMN extends Sala {
    private int occupati;
    private static final int NUM_SEDIE = 10;
    private boolean poltronaLibera;
    private LinkedList<Thread> coda = new LinkedList<>();

    public synchronized void tagliaCapelli() throws InterruptedException {
        while (occupati == 0) {
            wait();
        }
        poltronaLibera = true;
        notifyAll();
    }

    public synchronized boolean attendiTaglio() throws InterruptedException {
        if (occupati == NUM_SEDIE) {
            return false;
        }
        coda.addLast(Thread.currentThread());
        occupati++;
        notifyAll();
        while (!poltronaLibera || coda.getFirst() != Thread.currentThread()) {
            wait();
        }
        poltronaLibera = false;
        coda.removeFirst();
        occupati--;
        notifyAll();
        return true;
    }

}
