package Prova_esame_13_01_2024;

public abstract class Biblioteca {
    protected final int numUtenti = 25;

    public abstract void richiediPrestito() throws InterruptedException;
    public abstract void registraPrestito() throws InterruptedException;
    public abstract void esci() throws InterruptedException;
    public abstract void prossimoUtente() throws InterruptedException;

    public void test() {
        Bibliotecario b = new Bibliotecario(this);
        b.setDaemon(true);
        b.start();
        for (int i = 0; i < numUtenti; i++) {
            new Utente(this, i).start();
        }
    }
}