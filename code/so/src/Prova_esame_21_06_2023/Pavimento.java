package Prova_esame_21_06_2023;

public abstract class Pavimento {
    protected int numA = 8;
    protected int numB = 8;

    public abstract String inizia(int T) throws InterruptedException;
    public abstract void finisci(int T, String B) throws InterruptedException;

    public void test() {
        for (int i = 0; i < numA; i++) {
            new Piastrellista(this, 0).start();
        }
        for (int i = 0; i < numB; i++) {
            new Piastrellista(this, 1).start();
        }
    }
}
