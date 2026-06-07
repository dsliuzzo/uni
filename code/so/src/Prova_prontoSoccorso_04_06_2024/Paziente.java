package Prova_prontoSoccorso_04_06_2024;

public class Paziente extends Thread {
    private ProntoSoccorso ps;
    private int id;

    public Paziente(ProntoSoccorso p, int i) {
        ps = p;
        id = i;
    }

    @Override
    public void run() {
        try {
            ps.accediPaziente();
            ps.esciPaziente();
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public int id() { return id; }
}
