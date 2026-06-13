package Prova_Ferryboat_06_06_2022;

public abstract class Ferryboat {
    protected static final int numPosti = 50;
    protected static final int numAuto = 50;

    public abstract void sali() throws InterruptedException;
    public abstract void parcheggiatiEScendi() throws InterruptedException;
    public abstract void imbarca() throws InterruptedException;
    public abstract void terminaTraghettata();

    public void test(){
        Addetto a = new Addetto(this);
        a.setDaemon(true);
        a.start();

        for(int i = 0; i < numAuto; i++){
            new Autovettura(this,i).start();
        }
    }

}
