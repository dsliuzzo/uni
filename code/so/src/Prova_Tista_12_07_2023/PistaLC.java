package Prova_Tista_12_07_2023;

import java.util.Random;
import java.util.concurrent.locks.*;
import java.util.LinkedList;

public class PistaLC extends Pista {
    protected Lock l = new ReentrantLock();

    // code
    private Condition conditionL = l.newCondition();
    private LinkedList<Thread> codaL = new LinkedList<>();

    private Condition conditionS = l.newCondition();
    private LinkedList<Thread> codaS = new LinkedList<>();

    private Condition conditionM = l.newCondition();
    private LinkedList<Thread> codaM = new LinkedList<>();

    // variabili
    private int countL = 0;
    private int countS = 0;
    private int countM = 0;

    // random
    protected Random r = new Random();

    @Override
    public void noleggia() throws InterruptedException {
        l.lock();
        try {
            if (((Pilota) Thread.currentThread()).maggiorenne()) {
                codaL.addLast(Thread.currentThread());
                System.out.println("Pilota maggiorenne " + ((Pilota) Thread.currentThread()).id() + " attende il suo turno");
                while (attesaL()) {
                    conditionL.await();
                }
                codaL.removeFirst();
                countL++;
            } else {
                codaS.addLast(Thread.currentThread());
                System.out.println("Pilota maggiorenne " + ((Pilota) Thread.currentThread()).id() + " attende il suo turno");
                while (attesaS()) {
                    conditionS.await();
                }
                codaS.removeFirst();
                countS++;
            }
        } finally {
            l.unlock();
        }
    }

    private boolean attesaL() {
        return countL < L && codaL.getFirst() == Thread.currentThread();
    }
    private boolean attesaS() {
        return countS < S && codaS.getFirst() == Thread.currentThread();
    }

    @Override
    public int entraInPista() throws InterruptedException {
        l.lock();
        try {
            int giri = 1 + r.nextInt(10-3+1);
            codaM.addLast(Thread.currentThread());
            while (attesaM()) {
                conditionM.await();
            }
            System.out.println("Pilota " + ((Pilota) Thread.currentThread()).id() + " entra nella pista con " + giri + " giri");
            codaM.removeFirst();
            countM++;
            return giri;
        } finally {
            l.unlock();
        }
    }
    private boolean attesaM() {
        return countM < maxG && codaM.getFirst() == Thread.currentThread();
    }


    @Override
    public void lasciaPista() {
        l.lock();
        try {
            countM--;
            conditionM.signalAll();
            System.out.println("Pilota " + ((Pilota) Thread.currentThread()).id() + " lascia la pista");
        } finally {
            l.unlock();
        }
    }

    @Override
    public void riconsegna() {
        l.lock();
        try {
            if (((Pilota) Thread.currentThread()).maggiorenne()) {
                countL--;
                conditionL.signalAll();
            } else {
                countS--;
                conditionS.signalAll();
            }
        } finally {
            l.unlock();
        }
    }

    public static void main(String[] args) {
        PistaLC p = new PistaLC();
        p.test();
    }
}
