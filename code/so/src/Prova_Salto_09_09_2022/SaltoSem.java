package Prova_Salto_09_09_2022;

import java.util.Random;
import java.util.TreeSet;
import java.util.concurrent.Semaphore;

public class SaltoSem extends Salto {
    private Random r = new Random();
    private TreeSet<Saltatore> classifica = new TreeSet<>();
    private int count = 0; // numero di salti effettuati

    private Semaphore mutex = new Semaphore(1);
    private Semaphore attesaMaglia = new Semaphore(0);
    private Semaphore attesaSalto = new Semaphore(1);

    @Override
    public void inizio(Saltatore s) throws InterruptedException {
        mutex.acquire();
        if (count == s.numero()){
            mutex.release();
            return;
        }
        mutex.release();
        attesaMaglia.acquire();
        }

    @Override
    public int arrivo(Saltatore s) throws InterruptedException {
        mutex.acquire();
        s.setAltezza((float) 4.5 + r.nextFloat(((float) (6.5 - 4.5 +  1.0))));
        System.out.println("Saltatore " + s.numero() + " ha saltato " + s.altezza());
        classifica.add(s);
        int pos = ricercaPos(s);
        mutex.release();
        attesaSalto.release();
        return pos;
    }

    @Override
    public boolean successivo() throws InterruptedException {
        attesaSalto.acquire();
        mutex.acquire();
        count++;
        if (count == N) {
            stampaClassifica();
            mutex.release();
            return false;
        }
        attesaMaglia.release(N - count);
        mutex.release();
        return true;
    }
}
    private int ricercaPos (Saltatore s) {
        int pos = 0;
        for (Saltatore s1 : classifica) {
            if (s1.equals(s)) {
                break;
            }
            pos++;
        }
        return pos;
    }

    private void stampaClassifica() {
        StringBuilder sb = new StringBuilder().append("Classifica: ");
        int pos = 0;
        while (!classifica.isEmpty()) {
            sb.append("Posizione ").append(pos++).append(" :");
            sb.append("Saltatore avente maglia numero ").append(classifica.pollLast().numero()).append(" \n");
        }
    }

    static void main(String[] args) {
        new SaltoSem().test();
    }
}
