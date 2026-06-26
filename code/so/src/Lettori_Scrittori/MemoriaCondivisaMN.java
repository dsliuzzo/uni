package Lettori_Scrittori;

public class MemoriaCondivisaMN extends MemoriaCondivisa {
    private boolean scrittoreDentro;
    private int lettoriDentro;

    @Override
    public synchronized void inizioScrittura() throws InterruptedException {
        while (scrittoreDentro || lettoriDentro > 0) {
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
        while (scrittoreDentro) {
            wait();
        }
        lettoriDentro++;
    }

    @Override
    public synchronized void fineLettura() throws InterruptedException {
        lettoriDentro--;
        notifyAll();
    }
}
