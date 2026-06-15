package Prova_MuseoC_07_02_2022;

import java.util.concurrent.Semaphore;

public class MuseoSemVar extends MuseoSem {
    private Semaphore mutex = new Semaphore(1);
    private Semaphore puoiEntrare = new Semaphore(0);
    private int count = 0;
    private boolean occupato = false;

    @Override
    public void visitaSD() throws InterruptedException {
        SD.acquire();
        mutex.acquire();
        if (count != 4) {
            count++;
            mutex.release();
            puoiEntrare.acquire();
        } else {
            count = 0;
            System.out.println("Entra un gran bel gruppo in SD");
            puoiEntrare.release(4);
            mutex.release();
        }
    }

    static void main(String[] args) {
        new MuseoSemVar().test();
    }

}
