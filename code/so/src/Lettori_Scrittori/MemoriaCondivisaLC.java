package Lettori_Scrittori;

import java.util.concurrent.locks.*;

public class MemoriaCondivisaLC extends MemoriaCondivisa {
    private Lock l = new  ReentrantLock();
    private Condition scrittore = l.newCondition();
    private Condition lettore = l.newCondition();

    private boolean scrittoreDentro;
    private int lettoriDentro;

    @Override
    public void inizioScrittura() throws InterruptedException {
        l.lock();
        try {
            while (scrittoreDentro || lettoriDentro > 0) {
                scrittore.await();
            }
            scrittoreDentro = true;
        } finally {
            l.unlock();
        }
    }

    @Override
    public void fineScrittura() throws InterruptedException {
        l.lock();
        try {
            scrittoreDentro = false;
            scrittore.signal();
            lettore.signalAll();
        } finally {
            l.unlock();
        }
    }

    @Override
    public void inizioLettura() throws InterruptedException {
        l.lock();
        try {
            while (scrittoreDentro) {
                lettore.await();
            }
            lettoriDentro++;
        } finally {
            l.unlock();
        }
    }

    @Override
    public void fineLettura() throws InterruptedException {
        l.lock();
        try {
            lettoriDentro--;
            if (lettoriDentro == 0) {
                scrittore.signal();
            }
            lettore.signalAll();
        } finally {
            l.unlock();
        }
    }
}
