package Prova_Cantiere_04_07_22;

import java.util.HashMap;
import java.util.Map;
import java.util.concurrent.Semaphore;

public class CantiereFerroviarioSem extends CantiereFerroviarioA {
    private Semaphore mutex = new Semaphore(1);
    private Semaphore attesa0 = new Semaphore(1);
    private Semaphore attesa1 = new Semaphore(0);
    private boolean[] dentro = new boolean[M];
    private int[] stato = new int[M];
    private Map<Integer, Integer> idBin = new HashMap<>();

    public CantiereFerroviarioSem() {
        for (int i = 0; i < M; i++) {
            stato[i] = 1;
        }
    }

    @Override
    public void lavora(int t) throws InterruptedException {
        int id = ((Operaio) Thread.currentThread()).id();
        int bin;
        if (t == 0) {
            attesa0.acquire();
            mutex.acquire();
            bin = ricercaBin(0);
            dentro[bin] = true;
            idBin.put(id, bin);
            stato[bin] = 0;
            mutex.release();
        } else {
            attesa1.acquire();
            mutex.acquire();
            bin = ricercaBin(1);
            dentro[bin] = true;
            idBin.put(id, bin);
            stato[bin] = 1;
            mutex.release();
        }
        System.out.println("Operaio " + id + " di tipo " + t + " inizia a lavorare su " + bin);
    }
    private int ricercaBin(int t) {
        for (int i = 0; i < M; i++) {
            if (stato[i] == ((t % 2) + 1) && !dentro[i]) {
                return i;
            }
        }
        return -1;
    }

    @Override
    public void termina(int t) throws InterruptedException {
        mutex.acquire();
        int bin = idBin.get(((Operaio) Thread.currentThread()).id());
        dentro[bin] = false;
        mutex.release();
        System.out.println("Operaio " + ((Operaio) Thread.currentThread()).id() + " di tipo " + t + " finisce di lavorare su " + bin);
        if (t == 0) {
            attesa1.release();
        } else {
            attesa0.release();
        }
    }
}
