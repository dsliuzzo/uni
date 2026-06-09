package Prova_stabilimentoBalneare_09_09_2024;

public class Bagnante extends Thread {
    private Stabilimento s;
    private int id;

    public Bagnante(Stabilimento s, int id) {
        this.s = s;
        this.id = id;
    }

    @Override
    public void run() {
        try {
            s.scegliAccesso();
            s.paga();
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public int id() {
        return id;
    }
}
