package Prova_Ferryboat_06_06_2022;

import java.util.LinkedList;
import java.util.concurrent.locks.*;

public class FerryboatLC extends Ferryboat {
    protected Lock l = new ReentrantLock();
    private Condition attesaEntrata = l.newCondition();
    protected Condition attesaUscita = l.newCondition();
    private LinkedList<Thread> fifo = new LinkedList<>();
    protected LinkedList<Thread> lifo = new LinkedList<>();
    private boolean possoEntrare = false;
    private boolean possoUscire = false;
    protected Condition attesaAddetto = l.newCondition();
    protected boolean finePark = true;
    private boolean presente = false;
    protected int count = 0;

    @Override
    public void sali() throws InterruptedException {
        l.lock();
        try {
            fifo.addLast(Thread.currentThread());
            presente = true;
            attesaAddetto.signal();
            while(!ingresso()) {
                attesaEntrata.await();
            }
            fifo.removeFirst();
            lifo.addFirst(Thread.currentThread());
            finePark = false;
            possoEntrare = false;
            System.out.println("Auto " + ((Autovettura) Thread.currentThread()).id() + " entra");
        } finally {
            l.unlock();
        }
    }
    protected boolean ingresso() {
        return Thread.currentThread() == fifo.getFirst() && possoEntrare;
    }

    @Override
    public void imbarca() throws InterruptedException {
        l.lock();
        try {
            while (count < numPosti) {
                while(!entraAuto()) {
                    attesaAddetto.await();
                }
                System.out.println("Entra");
                possoEntrare = true;
                attesaEntrata.signalAll();
            }
        } finally {
            l.unlock();
        }
    }
    protected boolean entraAuto() {
        return presente && finePark;
    }

    @Override
    public void parcheggiatiEScendi() throws InterruptedException {
        l.lock();
        try {
            finePark = true;
            count ++;
            attesaAddetto.signal();
            while(!uscita()) {
                attesaUscita.await();
            }
            lifo.removeFirst();
            System.out.println("Auto " + ((Autovettura) Thread.currentThread()).id() + " uscita");
            attesaUscita.signalAll();
        } finally {
            l.unlock();
        }
    }
    protected boolean uscita() {
        return Thread.currentThread() == lifo.getFirst() && possoUscire;
    }

    @Override
    public void terminaTraghettata() {
        l.lock();
        try {
            possoUscire = true;
            attesaUscita.signalAll();
        } finally {
            l.unlock();
        }
    }

    static void main(String[] args) {
        new FerryboatLC().test();
    }
}
