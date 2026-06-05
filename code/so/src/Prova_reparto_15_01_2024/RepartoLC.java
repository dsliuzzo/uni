package Prova_reparto_15_01_2024;

import java.util.LinkedList;
import java.util.concurrent.locks.*;

public class RepartoLC extends Reparto {
    private Lock[] stanze = new Lock[numStanze];
    private Condition[] accessoMedico = new Condition[numStanze];
    private Condition[] accessoVisitatore = new Condition[numStanze];
    private LinkedList<Thread>[] coda = new LinkedList[numStanze];

    private int[] visitatoriDentro = new int[numStanze];
    private boolean[] medicoDentro = new boolean[numStanze];

    public RepartoLC() {
        for (int i = 0; i < numStanze; i++) {
            stanze[i] = new ReentrantLock();
            accessoMedico[i] = stanze[i].newCondition();
            accessoVisitatore[i] = stanze[i].newCondition();
            coda[i] = new LinkedList<>();
        }
    }


    @Override
    public void entraMedico(int s) throws InterruptedException {
        stanze[s].lock();
        coda[s].add(Thread.currentThread());
        try {
            while (!medicoPuoEntrare(s)) {
                accessoMedico[s].await();
            }
            coda[s].removeFirst();
            System.out.println("Medico " + ((Medico) Thread.currentThread()).id() + " entra nella stanza " + s);
            stampaStatoStanza();
            medicoDentro[s] = true;
        } finally {
            stanze[s].unlock();
        }
    }

    @Override
    public void esciMedico(int s) throws InterruptedException {
        stanze[s].lock();
        try {
            medicoDentro[s] = false;
            accessoMedico[s].signalAll();
            accessoVisitatore[s].signalAll();
        } finally {
            stanze[s].unlock();
        }
    }

    @Override
    public void entraVisitatore(int s) throws InterruptedException {
        stanze[s].lock();
        coda[s].add(Thread.currentThread());
        try {
            while (!visitatorePuoEntrare(s)) {
                accessoVisitatore[s].await();
            }
            coda[s].removeFirst();
            System.out.println("Visitatore " + ((Visitatore) Thread.currentThread()).id() + " entra nella stanza " + s);
            stampaStatoStanza();
            visitatoriDentro[s]++;
        } finally {
            stanze[s].unlock();
        }
    }

    @Override
    public void esciVisitatore(int s) throws InterruptedException {
        stanze[s].lock();
        try {
            visitatoriDentro[s]--;
            if (visitatoriDentro[s] == 0) {
                accessoVisitatore[s].signalAll();
                accessoMedico[s].signalAll();
            } else {
                accessoVisitatore[s].signalAll();
            }
        } finally {
            stanze[s].unlock();
        }
    }

    private boolean medicoPuoEntrare(int s) {
        if (visitatoriDentro[s] > 0 || medicoDentro[s] || ((Medico) coda[s].getFirst()).id() != ((Medico) Thread.currentThread()).id()) {
            return false;
        }
        return true;
    }

    private boolean visitatorePuoEntrare(int s) {
        if (visitatoriDentro[s] > 5 || medicoDentro[s] || ((Visitatore) coda[s].getFirst()).id() != ((Visitatore) Thread.currentThread()).id()) {
            return false;
        }
        return true;
    }

    private void stampaStatoStanza() {
        for (int i = 0; i < numStanze; i++) {
            System.out.println("\tMedico " + i + ": " + medicoDentro[i] + " Visitatori " + visitatoriDentro[i]);
        }
    }

    public static void main(String[] args) {
        Reparto reparto = new RepartoLC();
        reparto.test();
    }
}
