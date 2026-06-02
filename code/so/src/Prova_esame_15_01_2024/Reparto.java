package Prova_esame_15_01_2024;

public abstract class Reparto {
    protected final int numMedici = 4;
    protected final int numVisitatori = 20;
    protected final int numStanze = 3;

    public abstract void entraMedico(int s) throws InterruptedException;
    public abstract void esciMedico(int s) throws InterruptedException;
    public abstract void entraVisitatore(int s) throws InterruptedException;
    public abstract void esciVisitatore(int s) throws InterruptedException;

    public void test() {
        for (int i = 0; i < numMedici; i++) {
            new Medico(this, i).start();
        }
        for (int i = 0; i < numVisitatori; i++) {
            new Medico(this, i).start();
        }
    }

    public int getNumStanze() { return numStanze; }
}
