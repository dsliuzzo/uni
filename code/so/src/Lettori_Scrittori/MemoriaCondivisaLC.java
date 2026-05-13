package Lettori_Scrittori;

import java.util.concurrent.locks.*;

public class MemoriaCondivisaLC extends MemoriaCondivisa {
    private int numLettoriInLettura = 0;
    private boolean scrittoreInScrittura = false;

    private Lock l = new ReentrantLock();
    private Condition possoScrivere = l.newCondition();
    private Condition possoLeggere = l.newCondition();

    public void inizioScrittura() throws InterruptedException {
        l.lock();
        try {
            while (numLettoriInLettura > 0 || scrittoreInScrittura) {
                possoScrivere.await(); // fermo lo scrittore se ci sono lettori o un altro scrittore
            }
            scrittoreInScrittura = true;
        } finally {
            l.unlock();
        }
    }
    public void fineScrittura() throws InterruptedException {
        l.lock();
        try {
            scrittoreInScrittura = false;
            possoLeggere.signalAll(); // segnala a tutti i lettori che possono continuare a leggere
            possoScrivere.signal(); // segnala a un altro scrittore che può scrivere
        } finally {
            l.unlock();
        }
    }

    public void inizioLettura() throws InterruptedException {
        l.lock();
        try {
            while (scrittoreInScrittura) {
                possoLeggere.await(); // se ci sono scrittori nella zona critica attendo fino a quando non escono
            }
            numLettoriInLettura++;
        } finally {
            l.unlock();
        }
    }
    public void fineLettura() throws InterruptedException {
        l.lock();
        try {
            numLettoriInLettura--;
            if (numLettoriInLettura == 0) {
                possoScrivere.signal(); // se non ci sono più lettori segnalo a uno scrittore che può scrivere
            }
        } finally {
            l.unlock();
        }
    }
}
