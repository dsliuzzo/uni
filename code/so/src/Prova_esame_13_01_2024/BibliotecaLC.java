package Prova_esame_13_01_2024;

import java.util.LinkedList;
import java.util.Random;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.locks.*;

public class BibliotecaLC extends Biblioteca{
    protected Random random = new Random();

    private int idUtente;
    private String libro;
    private int counter = 0;

    private Lock l = new ReentrantLock();

    private Condition conditionEsterni = l.newCondition();
    private Condition conditionTesserati = l.newCondition();
    private LinkedList<Thread> codaEsterni = new LinkedList<>();
    private LinkedList<Thread> codaTesserati = new LinkedList<>();

    private Condition bancone = l.newCondition();
    private boolean utenteDentro = false;
    private Condition attesaRegistrazione = l.newCondition();
    private boolean attesaUtente = false;
    private Condition attesaUscita = l.newCondition();

    @Override
    public void richiediPrestito() throws InterruptedException {
        l.lock();
        try {
            String cod =  String.valueOf(1000 + random.nextInt(9999 - 1000 + 1));
            boolean tesserato = ((Utente) Thread.currentThread()).tesserato();
            if (tesserato) {
                codaTesserati.add(Thread.currentThread());
                while (!possoEntrare()) {
                    conditionTesserati.await();
                }
                codaTesserati.removeFirst();
            } else {
                codaEsterni.add(Thread.currentThread());
                while (!possoEntrare()) {
                    conditionEsterni.await();
                }
                codaEsterni.removeFirst();
            }
            System.out.println("Richiesta di prestito: " + cod);
            idUtente = ((Utente)Thread.currentThread()).id();
            libro = cod;
            utenteDentro = true;
            bancone.signal();
        } finally {
            l.unlock();
        }
    }

    private boolean possoEntrare() {
        if (utenteDentro) return false;
        if (((Utente) Thread.currentThread()).tesserato()) {
            return codaTesserati.getFirst() == Thread.currentThread();
        } else {
            return codaTesserati.isEmpty() && codaEsterni.getFirst() == Thread.currentThread();
        }
    }

    @Override
    public void registraPrestito() throws InterruptedException {
        l.lock();
        try {
            while (!utenteDentro) {
                bancone.await();
            }
            System.out.println("Prestito registrato: utente " + idUtente + ", libro " + libro);
            attesaUtente = true;
            attesaRegistrazione.signal();
        } finally {
            l.unlock();
        }
    }

    @Override
    public void esci() throws InterruptedException {
        l.lock();
        try {
            while (!attesaUtente) {
                attesaRegistrazione.await();
            }
            utenteDentro = false;
            attesaUscita.signal();
        } finally {
            l.unlock();
        }
    }

    @Override
    public void prossimoUtente() throws InterruptedException {
        l.lock();
        try {
            while(utenteDentro) {
                attesaUscita.await();
            }
            attesaUtente = false;
            counter++;
            if (counter % 15 == 0) {
                TimeUnit.SECONDS.sleep(10);
                System.out.println("Il bro sta pausando");
            }
            conditionEsterni.signalAll();
            conditionTesserati.signalAll();
        } finally {
            l.unlock();
        }
    }

    public static void main(String[] args) {
        BibliotecaLC bib = new BibliotecaLC();
        bib.test();
    }
}
