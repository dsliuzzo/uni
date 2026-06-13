package Prova_Salto_09_09_2022;

public abstract class Salto {
    protected static final int N = 50;

    public abstract void inizio(Saltatore s) throws InterruptedException;
    public abstract int arrivo(Saltatore s) throws InterruptedException;
    public abstract boolean successivo() throws InterruptedException;

    public void test() {
        new Giudice(this).start();
        for (int i = 0; i < N; i++) {
            new Saltatore(this, i).start();
        }
    }
}
