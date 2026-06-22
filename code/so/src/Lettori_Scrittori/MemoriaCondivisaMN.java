package Lettori_Scrittori;

public class MemoriaCondivisaMN extends MemoriaCondivisa {
    private int numLettori = 0;
    private boolean scrittoreDentro = false;

    @Override
    public synchronized void inizioScrittura() throws InterruptedException {
        while(scrittoreDentro || numLettori > 0) {
            wait();
        }
        scrittoreDentro = true;
    }

    @Override
    public synchronized void fineScrittura() throws InterruptedException {
        scrittoreDentro = false;
        notifyAll();
    }

    @Override
    public synchronized void inizioLettura() throws InterruptedException {
        while ( scrittoreDentro ) {
            wait();
        }
        numLettori ++;
    }

    @Override
    public synchronized void fineLettura() throws InterruptedException {
        numLettori --;
        notifyAll();
    }
}
