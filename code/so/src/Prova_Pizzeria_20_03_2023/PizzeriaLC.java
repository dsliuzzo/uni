package Prova_Pizzeria_20_03_2023;

import java.util.LinkedList;
import java.util.Random;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.locks.*;

public class PizzeriaLC extends Pizzeria {
    private Lock l = new ReentrantLock();

    private Condition attesaEntrata = l.newCondition();
    private LinkedList<Thread> coda = new LinkedList<>();
    private int dentro = 0;
    private Random r = new Random();

    private Condition attesaPizza = l.newCondition();
    private boolean pizzaPronta = false;

    private Condition tavoloCompleto = l.newCondition(); // bloccato da dentro < dimT

    private Condition attesaFine = l.newCondition(); // bloccato su dentro > 0


    @Override
    public void entra() throws InterruptedException {
        l.lock();
        try {
            coda.add(Thread.currentThread());
            while (!possoEntrare()) {
                attesaEntrata.await();
            }
            System.out.println("Cliente " + ((Cliente) Thread.currentThread()).id() + " seduto");
            coda.removeFirst();
            dentro++;
            if (dentro == dimT) {
                tavoloCompleto.signal();
            }
        } finally {
            l.unlock();
        }
    }
    private boolean possoEntrare() {
        return dentro < dimT && coda.getFirst() == Thread.currentThread();
    }

    @Override
    public void mangiaPizza() throws InterruptedException {
        l.lock();
        try {
            while (!pizzaPronta) {
                attesaPizza.await();
            }
            System.out.println("Cliente " + ((Cliente) Thread.currentThread()).id() + " mangia la pizza");
            TimeUnit.MILLISECONDS.sleep(50 + r.nextInt(100 - 50 -10));
            dentro--;
            if (dentro == 0){
                pizzaPronta = false;
                attesaFine.signal();
                attesaEntrata.signalAll();
            }
        } finally {
            l.unlock();
        }
    }

    @Override
    public void preparaPizza() throws InterruptedException {
        l.lock();
        try {
            while (dentro < dimT) {
                tavoloCompleto.await();
            }
            System.out.println("Preparo la pizza");
        } finally {
            l.unlock();
        }
    }

    @Override
    public void serviPizza() throws InterruptedException {
        l.lock();
        try {
            System.out.println("Servo la pizza");
            pizzaPronta = true;
            attesaPizza.signalAll();
            while (pizzaPronta) {
                attesaFine.await();
            }
            System.out.println("Tavolo finito");
        } finally {
            l.unlock();
        }
    }

    static void main(String[] args) {
        new PizzeriaLC().test();
    }
}
