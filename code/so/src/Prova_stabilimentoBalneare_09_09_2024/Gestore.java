package Prova_stabilimentoBalneare_09_09_2024;

public class Gestore extends Thread {
    private Stabilimento s;

    public Gestore(Stabilimento s) {
        this.s = s;
    }

    @Override
    public void run() {
        try {
            s.preparaPostazione();
            s.chiusura();
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }
}
