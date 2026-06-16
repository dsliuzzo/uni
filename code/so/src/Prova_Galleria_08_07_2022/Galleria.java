package Prova_Galleria_08_07_2022;

public abstract class Galleria {
    private final int numVisitatori = 100;
    private final int numGuida = 5;
    protected final int maxVisita = 30;
    protected final int maxGalleria = 200;

    public abstract void iniziaVisita(int lingua) throws InterruptedException;
    public abstract void esci(int lingua) throws InterruptedException;
    public abstract void attendiVisitatori() throws InterruptedException;
    public abstract void terminaVisita() throws InterruptedException;

    public void test()
        for (int i = 0; i < numGuida; i++) {

        }
    }
}
