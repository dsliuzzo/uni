package Prova_Salto_09_09_2022;

import java.util.Random;
import java.util.TreeSet;
import java.util.concurrent.Semaphore;

public class SaltoSem extends Salto {
    private Random r = new Random();
    private TreeSet<Saltatore> classifica = new TreeSet<>();
    private int count = 0; // numero di salti effettuati

    private Semaphore mutex = new Semaphore(1);
    private Semaphore[] attesaMaglia = new Semaphore[N];
    private Semaphore attesaSalto = new Semaphore(0);

    public SaltoSem(){
        attesaMaglia[0] = new Semaphore(1);
        for(int i = 1; i < N; i++){
            attesaMaglia[i] = new Semaphore(0);
        }
    }

    @Override
    public void inizio(Saltatore s) throws InterruptedException {
        attesaMaglia[s.numero()].acquire();
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
        System.out.println("Numero di salti effettuati: " + count);
        if (count == N) {
            System.out.println(stampaClassifica());
            mutex.release();
            return false;
        }
        mutex.release();
        System.out.println("Saltatore " + count + " in attesa della maglia");
        attesaMaglia[count].release();
        return true;
    }

    private int ricercaPos (Saltatore s) {
        int pos = 0;
        for (Saltatore s1 : classifica) {
            if (s1.equals(s)) {
                break;
            }
            pos++;
        }
        return count - pos + 1;
    }

    private StringBuilder stampaClassifica() {
        StringBuilder sb = new StringBuilder().append("=== Classifica === \n");
        int pos = 1;
        while (!classifica.isEmpty()) {
            sb.append("Posizione ").append(pos++).append(" :");
            sb.append("Saltatore avente maglia numero ").append(classifica.pollLast().numero()).append(" \n");
        }
        return sb;
    }

    public static void main(String[] args) {
        new SaltoSem().test();
    }
}

