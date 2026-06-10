package Prova_universita_17_07_2024;

public abstract class Esame {
    protected static final int N = 60;

    public abstract void prendiPosto() throws InterruptedException;
    public abstract void consegnaCompito() throws InterruptedException;
    public abstract void iniziaEsame() throws InterruptedException;
    public abstract void fineEsame() throws InterruptedException;

    public void test() {
        Docente d = new Docente(this);
        d.setDaemon(true);
        d.start();
        for (int i = 0; i < N; i++) {
            new Studente(this, i).start();
        }
    }

    public void testB() {
        Docente d1 = new Docente(this);
        Docente d2 = new Docente(this);
        d1.setDaemon(true);
        d2.setDaemon(true);
        d1.start();
        d2.start();
        for (int i = 0; i < N; i++) {
            new Studente(this, i).start();
        }
    }
}
