package prova_esame_e;

public class Turista extends Thread {
    Funivia funivia;
    private int tipo;

    public Turista(Funivia f, int t) {
        funivia = f;
        tipo = t;
    }

    @Override
    public void run() {
        try {
            funivia.turistaSali(tipo);
            funivia.turistaScendi(tipo);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public int getTipo() {
        return tipo;
    }
}
