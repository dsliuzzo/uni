package Barbiere_addormentato;

import java.util.concurrent.locks.*;
import java.util.LinkedList;

public class SalaLC extends Sala{
    private Lock l = new ReentrantLock();
    private Condition poltrona = l.newCondition();
    private Condition clienteDisponibile = l.newCondition();
    private LinkedList<Thread> coda = new LinkedList<>();
    private boolean poltronaLibera;
    private int occupati;
    private static final int NUM_SEDIE = 10;

    public void tagliaCapelli() throws InterruptedException {
        l.lock();
        try {
            while (occupati == 0) {
                clienteDisponibile.await();
            }
            poltronaLibera = true;
            poltrona.signal();
        } finally {
            l.unlock();
        }
    }

    public boolean attendiTaglio() throws InterruptedException {
        l.lock();
        try {
            if (occupati == NUM_SEDIE) {
                return false;
            }
            occupati++;
            coda.addLast(Thread.currentThread());
            clienteDisponibile.signal();
            while (!poltronaLibera || coda.getFirst() != Thread.currentThread()) {
                poltrona.await();
            }
            poltronaLibera = false;
            coda.removeFirst();
            occupati--;
            return true;
        } finally {
            l.unlock();
        }
    }
}
