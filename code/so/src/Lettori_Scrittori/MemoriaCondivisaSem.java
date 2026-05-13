package Lettori_Scrittori;

import java.util.concurrent.Semaphore;

public class MemoriaCondivisaSem extends MemoriaCondivisa{
    private int numLettori;

    // creazione dei semafori
    private Semaphore lettura = new Semaphore(1); // semaforo per garantire la mutua esclusione su numLettori e gestione di lock da parte dei lettori
    private Semaphore lock = new Semaphore(1); // garantisce la mutua esclusione per la scrittura

    public void inizioScrittura() throws InterruptedException {
        lock.acquire();
    }
    public void fineScrittura() throws InterruptedException {
        lock.release();
    }

    public void inizioLettura() throws InterruptedException {
        lettura.acquire();
        // se è il primo lettore blocca l'ingresso agli scrittori
        if (numLettori == 0) {
            lock.acquire();
        }
        numLettori++;
        lettura.release();
    }
    public void fineLettura() throws InterruptedException {
        lettura.acquire();
        numLettori--;
        // se è l'ultimo lettore libera l'ingresso agli scrittori
        if (numLettori == 0) {
            lock.release();
        }
        lettura.release();
    }
}
