package Prova_parcoAttrazioni_09_06_2025;

import java.util.Comparator;
import java.util.LinkedList;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.locks.*;

public class ParcoAttrazioniLC extends ParcoAttrazioni {
    private Lock l = new ReentrantLock();
    private Condition[] attesaG = new Condition[Op]; // coda dei bambini
    private LinkedList<Bambino>[] code = new LinkedList[Op];
    private int countCoda[] = new int[Op];
    private Condition[] attesaO = new Condition[Op]; // blocca l'operatore che attende l'arrivo di un bambino
    private Condition[] attesaUscita = new Condition[Op]; // blocca l'operatore che attende la fine del giro
    private boolean[] dentro = new boolean[Op]; // true se c'è un bambino dentro
    private boolean[] aperto = new boolean[Op]; // blocca i cancelli della giostra per non fare entrare bambini
    private Condition[] avvia = new Condition[Op];
    private boolean[] avviata = new boolean[Op];
    private int[] serviti = new int[Op];


    public ParcoAttrazioniLC() {
        for (int i = 0; i < Op; i++) {
            attesaG[i] = l.newCondition();
            code[i] = new LinkedList<>();
            attesaO[i] = l.newCondition();
            attesaUscita[i] = l.newCondition();
            aperto[i] = true;
            avvia[i] = l.newCondition();
        }
    }

    @Override
    public void accodaBEta() throws InterruptedException {
        Bambino b = (Bambino) Thread.currentThread();
        l.lock();
        try {
            code[b.giostra()].add(b);
            code[b.giostra()].sort(Comparator.comparing(Bambino::eta));
            countCoda[b.giostra()]++;
            attesaO[b.giostra()].signal();
            while(!possoEntrare(b)) {
                attesaG[b.giostra()].await();
            }
            dentro[b.giostra()] = true;
            aperto[b.giostra()] = false;
            serviti[b.giostra()]++;
            code[b.giostra()].removeFirst();
            while(!avviata[b.giostra()]) {
                avvia[b.giostra()].await();
            }
            avviata[b.giostra()] = false;
            countCoda[b.giostra()]--;
            System.out.println("Bambino " + b.id() + " entra nella giostra " + b.giostra());
        } finally {
            l.unlock();
        }
    }
    private boolean possoEntrare(Bambino b) {
        return code[b.giostra()].getFirst() == b && aperto[b.giostra()];
    }

    @Override
    public void avviaGiostra() throws InterruptedException {
        int g = ((OperatoreGiostra) Thread.currentThread()).giostra();
        l.lock();
        try {
            while (countCoda[g] == 0) {
                attesaO[g].await();
            }
            avviata[g] = true;
            avvia[g].signal();
        } finally {
            l.unlock();
        }
    }

    @Override
    public void terminaGiroB() throws InterruptedException {
        Bambino b = (Bambino) Thread.currentThread();
        l.lock();
        try {
            System.out.println("Bambino " + b.id() + " esce dalla giostra " + b.giostra());
            dentro[b.giostra()] = false;
            attesaUscita[b.giostra()].signal();
        } finally {
            l.unlock();
        }
    }

    @Override
    public void prossimoBseT() throws InterruptedException {
        int g = ((OperatoreGiostra) Thread.currentThread()).giostra();
        l.lock();
        try {
            while(dentro[g]) {
                attesaUscita[g].await();
            }
            if ((serviti[g] % 15) == 0) {
                System.out.println("PAUSA " + g);
                l.unlock();
                TimeUnit.MILLISECONDS.sleep(20);
                l.lock();
            }
            aperto[g] = true;
            attesaG[g].signalAll();

        } finally {
            l.unlock();
        }
    }

    public static void main(String[] args) {
        new ParcoAttrazioniLC().test();
    }
}
