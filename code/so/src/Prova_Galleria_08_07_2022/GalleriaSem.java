package Prova_Galleria_08_07_2022;

import java.util.concurrent.Semaphore;
import java.util.concurrent.TimeUnit;

public class GalleriaSem extends Galleria{
    private Semaphore mutex = new Semaphore(1);
    private Semaphore possoEntrare = new Semaphore(maxGalleria, true);
    private Semaphore[] lingue = new Semaphore[numGuida];
    private Semaphore[] fineVisita = new Semaphore[numGuida];
    private Semaphore[] attesaGuida = new Semaphore[numGuida];
    private int[] codaLingua = new int[numGuida];
    private int[] visitatoriDentro = new int[numGuida];


    public GalleriaSem(){
        for (int i = 0; i < numGuida; i++) {
            lingue[i] = new Semaphore(0, true);
            attesaGuida[i] = new Semaphore(0);
            fineVisita[i] = new Semaphore(0);
        }
    }


    @Override
    public void iniziaVisita(int lingua) throws InterruptedException {
        possoEntrare.acquire();
        mutex.acquire();
        codaLingua[lingua]++;
        mutex.release();
        lingue[lingua].acquire();
        mutex.acquire();
        visitatoriDentro[lingua]++;
        codaLingua[lingua]--;
        System.out.println("Visitatore " + ((Visitatore) Thread.currentThread()).id() + " è pronto ad iniziare la visita " + lingua);
        mutex.release();
    }

    @Override
    public void esci(int lingua) throws InterruptedException {
        fineVisita[lingua].acquire();
        attesaGuida[lingua].release();
        mutex.acquire();
        visitatoriDentro[lingua]--;
        System.out.println("Visitatore " + ((Visitatore) Thread.currentThread()).id() + " uscito da " + lingua + " | rimasti: " + visitatoriDentro[lingua]);
        possoEntrare.release();
        mutex.release();
    }

    @Override
    public void attendiVisitatori(int lingua) throws InterruptedException {
        TimeUnit.MILLISECONDS.sleep(20);
        mutex.acquire();
        if (codaLingua[lingua] < maxVisita) {
            System.out.println("La visita " + lingua + " può iniziare con " + codaLingua[lingua] + " visitatori" );
            lingue[lingua].release(codaLingua[lingua]);
        } else {
            System.out.println("La visita " + lingua + " può iniziare con " + maxVisita + " visitatori" );
            lingue[lingua].release(maxVisita);
        }
        mutex.release();
    }

    @Override
    public void terminaVisita(int lingua) throws InterruptedException {
        mutex.acquire();
        System.out.println("Finita la visita " + lingua);
        fineVisita[lingua].release(visitatoriDentro[lingua]);
        mutex.release();
        attesaGuida[lingua].acquire(visitatoriDentro[lingua]);
    }

    static void main(String[] args){
        new GalleriaSem().test();
    }
}
