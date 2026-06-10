package Prova_universita_17_07_2024;

public class Studente extends Thread {
    private Esame e;
    private int id;

    public Studente(Esame e, int id) {
        this.e = e;
        this.id = id;
    }

    @Override
    public void run() {
        try {
            e.prendiPosto();
            e.consegnaCompito();
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public int id() { return id; }
}
