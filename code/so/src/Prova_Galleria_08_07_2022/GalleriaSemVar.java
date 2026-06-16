package Prova_Galleria_08_07_2022;

import java.util.concurrent.Semaphore;
import java.util.concurrent.TimeUnit;

public class GalleriaSemVar extends GalleriaSem {
    private static final int numSale = 3;
    private Semaphore[][] fineVisita = new Semaphore[numSale][numGuida];

    public GalleriaSemVar(){
        super();
        for (int i = 0; i < numSale; i++) {
            for (int j = 0; j < numGuida; j++) {
                fineVisita[i][j] = new Semaphore(0);
            }
        }
    }

    @Override
    public void esci(int lingua) throws InterruptedException {
        for (int i = 0; i < numSale; i++) {
            fineVisita[i][lingua].acquire();
        }
        attesaGuida[lingua].release();
        mutex.acquire();
        visitatoriDentro[lingua]--;
        System.out.println("Visitatore " + ((Visitatore) Thread.currentThread()).id() + " uscito da " + lingua + " | rimasti: " + visitatoriDentro[lingua]);
        possoEntrare.release();
        mutex.release();
    }

    @Override
    public void terminaVisita(int lingua) throws InterruptedException {
        for (int i = 0; i < numSale; i++) {
            TimeUnit.MILLISECONDS.sleep(30 + r.nextInt( 60 - 30 + 1));
            mutex.acquire();
            System.out.println("Finita la visita " + lingua + " nella sala " + i);
            fineVisita[i][lingua].release(visitatoriDentro[lingua]);
            mutex.release();
        }
        attesaGuida[lingua].acquire(visitatoriDentro[lingua]);
    }

    static void main(String[] args){
        new GalleriaSemVar().test();
    }
}
