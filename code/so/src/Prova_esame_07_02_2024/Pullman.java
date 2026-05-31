package Prova_esame_07_02_2024;

public abstract class Pullman {
    protected static final int POSTI_PRIMA = 5;
    protected static final int POSTI_SECONDA = 10;
    protected int nPosti;
    protected int nPasseggeri;
    protected int postiOccupati = 0;

    public Pullman(int nPosti, int nPasseggeri) {
        this.nPosti = nPosti;
        this.nPasseggeri = nPasseggeri;
    }

    public abstract void sali() throws InterruptedException;
    public abstract void controllaBiglietto() throws InterruptedException;
    public abstract void prendiPosto() throws InterruptedException;
    public abstract boolean prossimoPasseggero() throws InterruptedException;

    public void test(int nPasseggeri1, int nPasseggeri2) {
        Autista autista = new Autista(this);
        autista.setDaemon(true);
        autista.start();

        for (int i = 0; i < nPasseggeri1; i++){
            new Passeggero(this, i, "classe_1" ).start();
        }

        for (int i = 0; i < nPasseggeri2; i++){
            new Passeggero(this, i, "classe_2" ).start();
        }
    }
}
