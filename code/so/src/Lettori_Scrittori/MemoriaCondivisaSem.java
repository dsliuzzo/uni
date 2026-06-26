package Lettori_Scrittori;

import java.util.concurrent.Semaphore;

public class MemoriaCondivisaSem extends MemoriaCondivisa{
    private int numLettori;
    private Semaphore lock = new Semaphore(1);
    private Semaphore lettori = new Semaphore(1);

    public void inizioScrittura() throws InterruptedException{
        lock.acquire();
    }
    public void fineScrittura() throws InterruptedException{
        lock.release();
    }

    public void inizioLettura() throws InterruptedException{
        lettori.acquire();
        if (numLettori == 0) {
            lock.acquire();
        }
        numLettori++;
        lettori.release();
    }

    public void fineLettura() throws InterruptedException{
        lettori.acquire();
        numLettori--;
        if (numLettori == 0) {
            lock.release();
        }
        lettori.release();
    }

}
