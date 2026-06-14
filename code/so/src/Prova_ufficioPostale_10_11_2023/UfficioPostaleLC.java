package Prova_ufficioPostale_10_11_2023;

import java.util.LinkedList;
import java.util.concurrent.locks.*;

public class UfficioPostaleLC extends UfficioPostale{
    private Lock l = new ReentrantLock();

    private int countA = 0;
    private int countB = 0;
    private int countC = 0;

    private Condition attesaT = l.newCondition();
    private LinkedList<Thread> codaT = new LinkedList<>();
    private Condition attesaA = l.newCondition();
    private LinkedList<Thread> codaA = new LinkedList<>();
    private boolean dentroA = true;
    private Condition attesaB = l.newCondition();
    private LinkedList<Thread> codaB = new LinkedList<>();
    private boolean dentroB = true;
    private Condition attesaC = l.newCondition();
    private LinkedList<Thread> codaC = new LinkedList<>();
    private boolean dentroC = true;

    private Condition[] attesaImp = new Condition[3];
    private boolean arrivatoA = false;
    private boolean arrivatoB = false;
    private boolean arrivatoC = false;

    private Condition attesaOpA = l.newCondition();
    private boolean finitoA = false;
    private Condition attesaOpB = l.newCondition();
    private boolean finitoB = false;
    private Condition attesaOpC = l.newCondition();
    private boolean finitoC = false;

    public UfficioPostaleLC() {
        for (int i = 0; i < 3; i++) {
            attesaImp[i] = l.newCondition();
        }
    }

    @Override
    public boolean ritiraTicket(String op) throws InterruptedException {
        l.lock();
        try {
            codaT.add(Thread.currentThread());
            while (codaT.getFirst() != Thread.currentThread()) {
                attesaT.await();
            }
            codaT.removeFirst();
            attesaT.signalAll();
            switch (op) {
                case "A":
                    if (countA >= MAX_TICKET) {
                        System.out.println("Ticket A non disponibile");
                        return false; }
                    countA++;
                    System.out.println("Ticket A ritirato: " + op + "; " + countA);
                    return true;
                case "B":
                    if (countB >= MAX_TICKET) {
                        System.out.println("Ticket B non disponibile");
                        return false;
                    }
                    countB++;
                    System.out.println("Ticket B ritirato: " + op + "; " + countB);
                    return true;
                case "C":
                    if (countC >= MAX_TICKET) {
                        System.out.println("Ticket C non disponibile");
                        return false;
                    }
                    countC++;
                    System.out.println("Ticket C ritirato: " + op + "; " + countC);
                    return true;
            }

        } finally {
            l.unlock();
        }
        return false;
    }


    @Override
    public void attendiSportello(String op) throws InterruptedException {
        l.lock();
        try {
            switch(op) {
                case "A":
                    codaA.add(Thread.currentThread());
                    while (!(dentroA && codaA.getFirst() == Thread.currentThread())) {
                        attesaA.await();
                    }
                    System.out.println("Sportello A entro");
                    codaA.removeFirst();
                    dentroA = false;
                    arrivatoA = true;
                    attesaImp[0].signal();
                    while(!finitoA){
                        attesaOpA.await();
                    }
                    finitoA = false;
                    dentroA = true;
                    break;
                case "B":
                    codaB.add(Thread.currentThread());
                    while (!(dentroB && codaB.getFirst() == Thread.currentThread())) {
                        attesaB.await();
                    }
                    System.out.println("Sportello B entro");
                    codaB.removeFirst();
                    dentroB = false;
                    arrivatoB = true;
                    attesaImp[1].signal();
                    while(!finitoB){
                        attesaOpB.await();
                    }
                    finitoB = false;
                    dentroB = true;
                    break;
                case "C":
                    codaC.add(Thread.currentThread());
                    while (!(dentroC && codaC.getFirst() == Thread.currentThread())) {
                        attesaC.await();
                    }
                    System.out.println("Sportello C entro");
                    codaC.removeFirst();
                    dentroC = false;
                    arrivatoC = true;
                    attesaImp[2].signal();
                    while(!finitoC){
                        attesaOpC.await();
                    }
                    finitoC = false;
                    dentroC = true;
                    break;
            }
        } finally {
            l.unlock();
        }
    }

    @Override
    public void prossimoCliente() {
        l.lock();
        try {
            switch (((Impiegato)Thread.currentThread()).tipo()) {
                case 0:
                    attesaA.signalAll();
                    break;
                case 1:
                    attesaB.signalAll();
                    break;
                case 2:
                    attesaC.signalAll();
                    break;
            }
        } finally {
            l.unlock();
        }
    }

    @Override
    public void eseguiOperazione() throws InterruptedException {
        l.lock();
        try {
            switch (((Impiegato)Thread.currentThread()).tipo()) {
                case 0:
                    while (!arrivatoA) {
                        attesaImp[0].await();
                    }
                    Thread.sleep(30);
                    System.out.println("Sportello A finito");
                    countA--;
                    System.out.println("Rimanenti A: " + countA);
                    finitoA = true;
                    arrivatoA = false;
                    attesaOpA.signal();
                    attesaA.signalAll();
                    break;
                case 1:
                    while (!arrivatoB) {
                        attesaImp[1].await();
                    }
                    Thread.sleep(50);
                    System.out.println("Sportello B finito");
                    countB--;
                    System.out.println("Rimanenti B: " + countB);
                    finitoB = true;
                    arrivatoB = false;
                    attesaOpB.signal();
                    attesaB.signalAll();
                    break;
                case 2:
                    while (!arrivatoC) {
                        attesaImp[2].await();
                    }
                    Thread.sleep(70);
                    System.out.println("Sportello C finito");
                    countC--;
                    System.out.println("Rimanenti C: " + countC);
                    finitoC = true;
                    arrivatoC = false;
                    attesaOpC.signal();
                    attesaC.signalAll();
                    break;
            }
        } finally {
            l.unlock();
        }
    }

    static void main(String[] args) {
        new UfficioPostaleLC().test();
    }
}
