package Barbiere_addormentato;

import java.util.concurrent.locks.*;
import java.util.LinkedList;

public class SalaLC extends Sala{
    Lock lock = new ReentrantLock();
    Condition clienteDisponibile = lock.newCondition();
    Condition poltrona = lock.newCondition();
    LinkedList<Cliente> clienti = new LinkedList<Cliente>();
    protected boolean poltronaLibera = false;

    public SalaLC (int numSedie) {
        super(numSedie);
    }

    @Override
    public void tagliaCapelli() throws InterruptedException {
        lock.lock();
        try {
            while (numSedie == sedieLibere) {
                clienteDisponibile.await();
            }
            poltronaLibera = true;
            poltrona.signalAll();
        } finally {
            lock.unlock();
        }
    }

    @Override
    public boolean attendiTaglio() throws InterruptedException {
        lock.lock();
        Cliente c = (Cliente) Thread.currentThread();
        try {
            if (sedieLibere == 0) {
                return false;
            }
            clienti.addLast(c);
            sedieLibere--;
            clienteDisponibile.signal();
            while (!mioTurno(c.getID())) {
                poltrona.await();
            }
            clienti.removeFirst();
            poltronaLibera = false;
            sedieLibere++;
            return true;
        } finally {
            lock.unlock();
        }
    }



    private boolean mioTurno(int id) {
        return clienti.getFirst().getID() == id && poltronaLibera;
    }

}
