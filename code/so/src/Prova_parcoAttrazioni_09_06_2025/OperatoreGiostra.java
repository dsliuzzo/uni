package Prova_parcoAttrazioni_09_06_2025;

import java.util.Random;
import java.util.concurrent.TimeUnit;

public class OperatoreGiostra extends Thread {
    private ParcoAttrazioni parco;
    private int giostra;
    private Random r = new Random();

    public OperatoreGiostra(ParcoAttrazioni p, int i) {
        parco = p;
        giostra = i;
    }

    public int giostra() {return giostra;}

    @Override
    public void run() {
        while(true){
            try {
                parco.avviaGiostra();
                parco.prossimoBseT();
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
    }
}
