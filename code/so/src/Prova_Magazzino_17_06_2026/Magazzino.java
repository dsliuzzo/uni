package Prova_Magazzino_17_06_2026;

public abstract class Magazzino {
    protected static final int K = 3;
    protected static final int M = 3;
    protected static final int nMul = 10;
    protected static final int P = 10;

    public abstract int entraMuletto() throws InterruptedException;
    public abstract void esciMuletto(int corsia) throws InterruptedException;
    public abstract int inizioRiordino() throws InterruptedException;
    public abstract void fineRiordino(int corsia) throws InterruptedException;

    public void test(){
        new Operatore(this).start();

        for(int i = 0; i < nMul; i++){
            new Muletto(this, i).start();
        }

    }
}
