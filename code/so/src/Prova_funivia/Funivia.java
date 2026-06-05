package Prova_funivia;

public abstract class Funivia {
    abstract void pilotaStart() throws InterruptedException;
    abstract void pilotaEnd() throws InterruptedException;
    abstract void turistaSali(int tipo) throws InterruptedException;
    abstract void turistaScendi(int tipo) throws InterruptedException;

    void test(int numPiedi, int numBici) {
        Pilota p = new Pilota(this);
        p.setDaemon(true);
        p.start();

        for (int i = 0; i < numPiedi; i++) {
            new Turista(this, 0).start();
        }
        for (int i = numPiedi; i < (numPiedi + numBici); i++) {
            new Turista(this, 1).start();
        }
    }
}
