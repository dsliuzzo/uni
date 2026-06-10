package Prova_universita_17_07_2024;

import java.util.Random;
import java.util.Map;
import java.util.HashMap;
import java.util.concurrent.Semaphore;

public class EsameSem extends Esame {
    Random r = new Random();

    private Map<Integer, Integer> idTraccia = new HashMap<>();

    private Semaphore mutex = new Semaphore(1);
    private Semaphore seduto = new Semaphore(1, true);
    private Semaphore attendiFine = new Semaphore(0);
    private Semaphore inizioEsameDocente = new Semaphore(0);

    private Semaphore tracciaA = new Semaphore(1, true);
    private Semaphore tracciaB = new Semaphore(1, true);
    private Semaphore tracciaC = new Semaphore(1, true);
    private Semaphore tracciaD = new Semaphore(1, true);

    @Override
    public void prendiPosto() throws InterruptedException {
        mutex.acquire();
        int traccia = r.nextInt(3);
        idTraccia.put(((Studente) Thread.currentThread()).id(), traccia);
        mutex.release();
        seduto.acquire();
        System.out.println("Lo studente " + ((Studente) Thread.currentThread()).id() + " ha preso il posto con traccia " + traccia);
        seduto.release();
        inizioEsameDocente.release();
        attendiFine.acquire();
    }

    @Override
    public void consegnaCompito() throws InterruptedException {
        mutex.acquire();
        int traccia = idTraccia.get(((Studente) Thread.currentThread()).id());
        mutex.release();
        switch (traccia) {
            case 0:
                tracciaA.acquire();
                System.out.println("Lo studente " + ((Studente) Thread.currentThread()).id() + " ha consegnato il compito A");
                tracciaA.release();
                break;
            case 1:
                tracciaB.acquire();
                System.out.println("Lo studente " + ((Studente) Thread.currentThread()).id() + " ha consegnato il compito B");
                tracciaB.release();
                break;
            case 2:
                tracciaC.acquire();
                System.out.println("Lo studente " + ((Studente) Thread.currentThread()).id() + " ha consegnato il compito C");
                tracciaC.release();
                break;
            case 3:
                tracciaD.acquire();
                System.out.println("Lo studente " + ((Studente) Thread.currentThread()).id() + " ha consegnato il compito D");
                tracciaD.release();
                break;
        }
    }

    @Override
    public void iniziaEsame() throws InterruptedException {
        inizioEsameDocente.acquire(N);
        System.out.println("Esame iniziato");
    }

    @Override
    public void fineEsame() throws InterruptedException {
        attendiFine.release(N);
    }

    static void main(String[] args) {
        EsameSem es = new EsameSem();
        es.test();
    }
}
