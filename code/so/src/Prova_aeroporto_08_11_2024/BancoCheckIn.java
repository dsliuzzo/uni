package Prova_aeroporto_08_11_2024;

public abstract class BancoCheckIn {
    protected final int nP = 10;

    public abstract void deponeBagagli(int N) throws InterruptedException;
    public abstract void pesaERegistra() throws  InterruptedException;
    public abstract void riceviCartaImbarco() throws InterruptedException;
    public abstract void prossimoPasseggero() throws InterruptedException;

    public void test(){
        try {
            Addetto a = new Addetto(this);
            a.setDaemon(true);
            a.start();
            for (int i = 0; i < nP; i++) {
                Thread.sleep(2000);
                new Passeggero(this, i).start();
            }
        } catch (InterruptedException e){
            e.printStackTrace();
        }
    }
}
