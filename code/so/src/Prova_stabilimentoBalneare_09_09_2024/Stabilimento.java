package Prova_stabilimentoBalneare_09_09_2024;

public abstract class Stabilimento {
    protected static final int N = 10;

    public abstract void scegliAccesso() throws InterruptedException;
    public abstract void preparaPostazione() throws InterruptedException;
    public abstract void paga() throws InterruptedException;
    public abstract void chiusura() throws InterruptedException;

    public void test() {
        new Gestore(this).start();
        for (int i = 0; i < N; i++) {
            new Bagnante(this, i).start();
        }
    }
}