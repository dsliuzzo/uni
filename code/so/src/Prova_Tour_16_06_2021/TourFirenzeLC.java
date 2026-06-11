package Prova_Tour_16_06_2021;

import java.util.LinkedList;
import java.util.concurrent.locks.*;

public class TourFirenzeLC extends TourFirenze {
    private Lock l = new ReentrantLock();

    private int gruppo = 0;

    private Condition guidaAttendeFormazione = l.newCondition();
    private boolean formazione = false;
    private Condition turistaAttendeTurno = l.newCondition();
    private LinkedList<Thread> coda = new LinkedList<>();
    private Condition turistaAttendeInizio = l.newCondition();
    private Condition turistaAttendeFine = l.newCondition();
    private boolean vInCorso = false;


    @Override
    public void attendiFormazioneGruppo() throws InterruptedException {
        l.lock();
        try {
            while (!formazione) {
                guidaAttendeFormazione.await();
            }
        } finally {
            l.unlock();
        }
    }

    @Override
    public void visitaInizia() {
        l.lock();
        try {
            System.out.println("GRUPPO FORMATO");
            vInCorso = true;
            turistaAttendeInizio.signalAll();
        } finally {
            l.unlock();
        }
    }

    @Override
    public void visitaFine() {
        l.lock();
        try {
            System.out.println("VISITA FINITA");
            formazione = false;
            vInCorso = false;
            turistaAttendeFine.signalAll();
        } finally {
            l.unlock();
        }
    }

    @Override
    public void turistaInizia() throws InterruptedException {
        l.lock();
        try {
            coda.add(Thread.currentThread());
            while(!puoEntrare()) {
                turistaAttendeTurno.await();
            }
            System.out.println("Turista " + ((Turista) Thread.currentThread()).id() + " entra nel gruppo");
            coda.removeFirst();
            gruppo++;
            if (gruppo == maxG) {
                formazione = true;
                guidaAttendeFormazione.signal();
            }
            while (!vInCorso) {
                turistaAttendeInizio.await();
            }
        } finally {
            l.unlock();
        }
    }
    private boolean puoEntrare() {
        return gruppo < maxG && coda.getFirst() == Thread.currentThread();
    }


    @Override
    public void turistaFine() throws InterruptedException {
        l.lock();
        try {
            while (vInCorso) {
                turistaAttendeFine.await();
            }
            System.out.println("Turista " + ((Turista) Thread.currentThread()).id() + " esce dal gruppo");
            gruppo--;
            if (gruppo == 0) {
                turistaAttendeTurno.signalAll();
            }
        } finally {
            l.unlock();
        }
    }

    static void main(String[] args) {
        new TourFirenzeLC().test();
    }


    /*
    * Per il punto b bisogna spostare l'attendi dei 15 min all'interno di iniziaVisita() ed aggiungere una variabile inizializzata a true,
    * che verrà impostata a false solo dopo l'attendi, che permetta di bloccare l'ingresso dei turisti.
    * Va di conseguenza aggiornato il metodo puoEntrare().
    * Andrebbe gestito anche il fatto che il programma potrebbe non terminare se rimangono fuori dal gruppo un numero minore di maxG
    */
}
