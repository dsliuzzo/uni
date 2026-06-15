package Prova_MuseoC_07_02_2022;

import java.util.concurrent.Semaphore;

public class MuseoSem extends MuseoC{
    protected Semaphore SA = new Semaphore(nSA, true);
    protected Semaphore SD = new Semaphore(nSD, true);


    @Override
    public void visitaSA() throws InterruptedException {
        SA.acquire();
        System.out.println("Visitatore " + ((Visitatore)Thread.currentThread()).id() + " entra nella sala Archeologica");
    }

    @Override
    public void terminaVisitaSA() {
        SA.release();
        System.out.println("Visitatore " + ((Visitatore)Thread.currentThread()).id() + " esce dalla sala Archeologica");
    }

    @Override
    public void visitaSD() throws InterruptedException {
        SD.acquire();
        System.out.println("Visitatore " + ((Visitatore)Thread.currentThread()).id() + " entra nella sala della Dama");
    }

    @Override
    public void terminaVisitaSD() {
        SD.release();
        System.out.println("Visitatore " + ((Visitatore)Thread.currentThread()).id() + " esce dalla sala della Dama");

    }

    static void main(String[] args){
        new MuseoSem().test();

    }
}
