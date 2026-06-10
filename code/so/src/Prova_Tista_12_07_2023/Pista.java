package Prova_Tista_12_07_2023;

public abstract class Pista {
    private final int Nmag = 15;
    private final int Nmin = 5;
    protected final int S = 4;
    protected final int L = 8;
    protected final int maxG = 6;

    public abstract void noleggia() throws InterruptedException;
    public abstract int entraInPista() throws InterruptedException;
    public abstract void lasciaPista();
    public abstract void riconsegna();

    public void test() {
        for (int i = 0; i < Nmag; i++) {
            new Pilota(this, true, i).start();
        }
        for (int i = Nmag; i < (Nmag + Nmin); i++) {
            new Pilota(this, false, i).start();
        }
    }
}
