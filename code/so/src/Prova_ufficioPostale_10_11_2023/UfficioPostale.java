package Prova_ufficioPostale_10_11_2023;

import java.util.Random;

public abstract class UfficioPostale {
    protected static final int NUM_CLIENTI = 200;
    protected static final int NUM_IMPIEGATI = 3;
    protected static final int MAX_TICKET = 50;
    protected static final Random r = new Random();

    public abstract boolean ritiraTicket(String op) throws InterruptedException;
    public abstract void attendiSportello(String op) throws InterruptedException;
    public abstract void prossimoCliente() ;
    public abstract void eseguiOperazione() throws InterruptedException;

    public void test(){
        Impiegato[] impiegati = new Impiegato[NUM_IMPIEGATI];
        for (int i = 0; i < NUM_IMPIEGATI; i++) {
            impiegati[i] = new Impiegato(this, i);
            impiegati[i].setDaemon(true);
            impiegati[i].start();
        }
        for (int i = 0; i < NUM_CLIENTI; i++) {
            new Cliente(this, i, r.nextInt(3) ).start();
        }
    }
}
