package Prova_Tista_12_07_2023;

import java.util.HashMap;
import java.util.LinkedList;
import java.util.Map;

public class PistaLCb extends PistaLC {
    private final int K = 4;

    // array di linkedList per le K code
    private Map<Integer, PistaOggetto> piste = new HashMap<>();

    public PistaLCb () {
        super();
        for ( int i = 0; i < K; i++ ) {
            piste.put(i, new PistaOggetto(maxG, l));
        }
    }

    @Override
    public int entraInPista() throws InterruptedException {
        l.lock();
        try {
            int giri = 1 + r.nextInt(10-3+1);
            int idMin = minPiste(piste);
            piste.get(idMin).aggiungi(Thread.currentThread());
            while (piste.get(idMin).primo() != Thread.currentThread() || piste.get(idMin).numPiloti() > maxG) {
                piste.get(idMin).condition().await();
            }
            piste.get(idMin).rimuovi(Thread.currentThread());
            piste.get(idMin).setNumPiloti(piste.get(idMin).numPiloti() + 1);
            System.out.println("Pilota " + ((Pilota) Thread.currentThread()).id() + " entra nella pista " + idMin  + " con " + giri + " giri");
            return giri;
        } finally {
            l.unlock();
        }
    }
    private int minPiste(Map<Integer, PistaOggetto> piste) {
        int min = Integer.MAX_VALUE;
        int res = -1;
        for ( int p : piste.keySet() ) {
            if (piste.get(p).size() < min) {
                min = piste.get(p).size();
                res = p;
            }
        }
        return res;
    }

    @Override
    public void lasciaPista() {
        int idPista = ricerca();
        piste.get(idPista).rimuovi(Thread.currentThread());
        piste.get(idPista).setNumPiloti(piste.get(idPista).numPiloti() - 1);
        piste.get(idPista).condition().signalAll();
        System.out.println("Pilota " + ((Pilota) Thread.currentThread()).id() + " lascia la pista " + idPista);
    }
    private int ricerca() {
        for ( int p : piste.keySet() ) {
            if ( piste.get(p).cerca(Thread.currentThread()) ) {
                return p;
            }
        }
        System.out.println("Problemi enormi");
        return -1;
    }
}
