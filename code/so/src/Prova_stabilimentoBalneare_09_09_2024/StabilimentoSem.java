package Prova_stabilimentoBalneare_09_09_2024;

import java.util.HashMap;
import java.util.Map;
import java.util.Random;
import java.util.concurrent.Semaphore;
import java.util.concurrent.TimeUnit;

public class StabilimentoSem extends Stabilimento {
    private int importoTot = 0;
    private Map<Integer, Integer> idCosto = new HashMap<>();
    private Random r = new Random();

    private Semaphore mutex = new Semaphore(1);
    private Semaphore postazione = new Semaphore(0);
    private Semaphore codaPaga = new Semaphore(0, true);
    private Semaphore chiusura = new Semaphore(0);

    @Override
    public void scegliAccesso() throws InterruptedException {
        mutex.acquire();
        idCosto.put(((Bagnante) Thread.currentThread()).id(), (r.nextBoolean())? 15: 10);
        System.out.println("Accesso effettuato | id: " + ((Bagnante) Thread.currentThread()).id());
        mutex.release();
        postazione.release();
    }

    @Override
    public void preparaPostazione() throws InterruptedException {
        postazione.acquire(N);
        int attesa = 0;
        mutex.acquire();
        for (int i : idCosto.values()) {
            attesa += (i == 10)?1:2;
        }
        System.out.println("Preparazione postazioni | Tempo di preparazione " + attesa);
        mutex.release();
        TimeUnit.MILLISECONDS.sleep(attesa);
        codaPaga.release();
    }

    @Override
    public void paga() throws InterruptedException {
        codaPaga.acquire();
        mutex.acquire();
        int val = idCosto.get(((Bagnante) Thread.currentThread()).id());
        idCosto.remove(((Bagnante) Thread.currentThread()).id());
        importoTot += val;
        System.out.println("Pagamento effettuato di " + val + " | tot cassa: " + importoTot);
        mutex.release();
        codaPaga.release();
        chiusura.release();
    }

    @Override
    public void chiusura() throws InterruptedException {
        chiusura.acquire(N);
        System.out.println("Chiusura effettuata | tot cassa: " + importoTot);
    }

    public static void main(String[] args) {
        StabilimentoSem stabilimento = new StabilimentoSem();
        stabilimento.test();
    }
}
