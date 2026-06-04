package Prova_esame_21_06_2023;

import java.util.concurrent.TimeUnit;

public class Piastrellista extends Thread {
    private Pavimento pavimento;
    private int tipo;

    public Piastrellista(Pavimento p, int t) {
        pavimento = p;
        tipo = t;
    }

    @Override
    public void run() {
        while (true) {
            try {
                TimeUnit.MILLISECONDS.sleep(1);
                String res = pavimento.inizia(tipo);
                if (res == null) break;
                pavimento.finisci(tipo, res);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
        System.out.printf("\nPiastrellista " + tipo + " terminato\n");
    }
}
