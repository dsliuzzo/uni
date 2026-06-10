package Prova_Tista_12_07_2023;

import java.util.LinkedList;
import java.util.concurrent.locks.*;

public class PistaOggetto {
    private Condition condition;
    private LinkedList<Thread> coda = new LinkedList<>();
    private LinkedList<Thread> piloti = new LinkedList<>();
    private int numPiloti;

    public PistaOggetto(int max, Lock l) {
        condition = l.newCondition();
    }

    public int size() {
        return coda.size();
    }

    public Condition condition() {
        return condition;
    }

    public void aggiungi(Thread t) {
        coda.addLast(t);
    }

    public void rimuovi(Thread t) {
        coda.removeFirst();
    }

    public Thread primo() {
        return coda.getFirst();
    }

    public int numPiloti() {
        return numPiloti;
    }

    public void setNumPiloti(int num) {
        numPiloti = num;
    }

    public void addPiloti(Thread t) {
        piloti.add(t);
    }

    public void removePiloti(Thread t) {
        piloti.remove(t);
    }

    public boolean cerca( Thread t ) {
        if ( piloti.isEmpty() ) return false;
        for ( Thread p : piloti ) {
            if ( p == t ) return true;
        }
        return false;
    }
}
