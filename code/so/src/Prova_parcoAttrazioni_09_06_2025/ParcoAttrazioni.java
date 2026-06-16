package Prova_parcoAttrazioni_09_06_2025;

import java.util.Random;

public abstract class ParcoAttrazioni {
    protected static final int M = 20;
    protected static final int Op = 3;
    protected Random r = new Random();
    public int Op() { return Op; }

    public abstract void accodaBEta() throws InterruptedException;
    public abstract void avviaGiostra() throws InterruptedException;
    public abstract void terminaGiroB() throws InterruptedException;
    public abstract void prossimoBseT() throws InterruptedException;

    public void test() {
        OperatoreGiostra[] operatori = new OperatoreGiostra[Op];
        for (int i = 0; i < Op; i++) {
            operatori[i] = new OperatoreGiostra(this, i);
            operatori[i].setDaemon(true);
            operatori[i].start();
        }
        for (int i = 0; i < M; i++) {
            new Bambino(this, i).start();
        }

    }
}
