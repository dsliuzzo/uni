package Lettori_Scrittori;

import java.util.Random;
import java.util.concurrent.TimeUnit;

public class Scrittore implements Runnable {
    private MemoriaCondivisa memoria;

    public Scrittore(MemoriaCondivisa m) {
        memoria = m;
    }

    @Override
    public void run() {
        try {
            while (true) {
                memoria.inizioScrittura();
                scrivi();
                memoria.fineScrittura();
                faiAltro();
            }
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    // metodi per simulare il funzionamento
    private final static int MIN_TEMPO_SCRITTURA = 1;
    private final static int MAX_TEMPO_SCRITTURA = 4;
    private final static int MIN_TEMPO_ALTRO = 6;
    private final static int MAX_TEMPO_ALTRO = 10;

    private final Random random = new Random();
    private void scrivi() throws InterruptedException {
        attendi(MIN_TEMPO_SCRITTURA, MAX_TEMPO_SCRITTURA);
    }
    private void faiAltro() throws InterruptedException {
        attendi(MIN_TEMPO_ALTRO, MAX_TEMPO_ALTRO);
    }
    private void attendi (int min, int max) throws InterruptedException {
        TimeUnit.SECONDS.sleep(min + random.nextInt(max - min + 1));
    }
}
