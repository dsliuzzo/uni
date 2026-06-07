package Prova_prontoSoccorso_04_06_2024;

public class Medico extends Thread {
    ProntoSoccorso ps;

    public Medico(ProntoSoccorso p) {
        ps = p;
    }

    @Override
    public void run() {
        while(true) {
            try {
                ps.iniziaVisita();
                ps.terminaVisita();
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
    }
}
