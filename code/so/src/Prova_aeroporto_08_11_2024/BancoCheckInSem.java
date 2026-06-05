package Prova_aeroporto_08_11_2024;

import java.util.concurrent.Semaphore;
import java.util.concurrent.TimeUnit;

public class BancoCheckInSem extends BancoCheckIn {
    private int nastro;
    private Semaphore mutex = new Semaphore(1);

    private Semaphore ingresso = new Semaphore(1);
    private Semaphore attendiCliente = new Semaphore(0);
    private Semaphore attendiBiglietto = new Semaphore(0);
    private Semaphore attendiConferma = new Semaphore(0);


    @Override
    public void deponeBagagli(int N) throws  InterruptedException {
        ingresso.acquire();
        mutex.acquire();
        nastro = N;
        mutex.release();
        attendiCliente.release();
        attendiBiglietto.acquire();
    }

    @Override
    public void pesaERegistra() throws InterruptedException {
        attendiCliente.acquire();
        mutex.acquire();
        TimeUnit.MILLISECONDS.sleep(nastro * 10);
        mutex.release();
        attendiBiglietto.release();
        attendiConferma.acquire();
    }

    @Override
    public void riceviCartaImbarco() throws InterruptedException {
        System.out.println("Cliente ha ricevuto la carta di imbarco");
        attendiConferma.release();
    }

    @Override
    public void prossimoPasseggero() throws InterruptedException {
        ingresso.release();
    }

    public static void main(String[] args) throws InterruptedException {
        BancoCheckInSem banco = new BancoCheckInSem();
        banco.test();
    }
}
