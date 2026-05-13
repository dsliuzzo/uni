package Lettori_Scrittori;

import java.util.Random;
import java.util.concurrent.TimeUnit;

public class Lettore implements Runnable{
    private MemoriaCondivisa memoria;

    public Lettore(MemoriaCondivisa m) {
        memoria = m;
    }

    @Override
    public void run() {
        try {
            while (true) { // tutto ciò che è racchiuso tra inizio lettura e fine lettura avverrà solo se non ci sono scrittori attualmente attivi in memoria
                memoria.inizioLettura();
                leggi();
                memoria.fineLettura();
                faiAltro();
            }
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    // metodi per simulare il funzionamento
    private final static int MIN_TEMPO_LETTURA = 1;
    private final static int MAX_TEMPO_LETTURA = 4;
    private final static int MIN_TEMPO_ALTRO = 6;
    private final static int MAX_TEMPO_ALTRO = 10;

    private final Random random = new Random();
    private void leggi() throws InterruptedException {
        attendi(MIN_TEMPO_LETTURA, MAX_TEMPO_LETTURA);
    }
    private void faiAltro() throws InterruptedException {
        attendi(MIN_TEMPO_ALTRO, MAX_TEMPO_ALTRO);
    }
    private void attendi (int min, int max) throws InterruptedException {
        TimeUnit.SECONDS.sleep(min + random.nextInt(max - min + 1));
    }
}
