package Prova_Pizzeria_20_03_2023;

import java.util.HashMap;
import java.util.LinkedList;
import java.util.Map;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.locks.*;

public class PizzeriaLCb extends PizzeriaLC {
    private static final int N = 5;

    private Condition attesaEntrata = l.newCondition();
    private LinkedList<Thread> coda = new LinkedList<>();

    // gestione dei tavoli
    private Condition[] attesaTavolo = new Condition[N];
    private int[] posti = new int[N];
    private Map<Integer, Integer> idTavolo = new HashMap<>();
    private Condition[] attesaPizza = new Condition[N];
    private boolean[] pizzaPronta = new boolean[N];

    private Condition svegliaPizzaiolo = l.newCondition();
    private boolean[] ordinato = new boolean[N];

    private boolean qualcuno;

    public PizzeriaLCb() {
        for (int i = 0; i < N; i++) {
            attesaTavolo[i] = l.newCondition();
            attesaPizza[i] = l.newCondition();
        }
    }

    @Override
    public void entra() throws InterruptedException {
        l.lock();
        try {
            coda.add(Thread.currentThread());
            while (coda.getFirst() != Thread.currentThread()) {
                attesaEntrata.await();
            }
            System.out.println("Cliente " + ((Cliente) Thread.currentThread()).id() + " entra i pizzeria");
            coda.removeFirst();
            attesaEntrata.signalAll();
            int t = scegliTavolo();
            idTavolo.put(((Cliente) Thread.currentThread()).id(), t);
            while (posti[t] > dimT) {
                attesaTavolo[t].await();
            }
            posti[t]++;
            System.out.println("Cliente " + ((Cliente) Thread.currentThread()).id() + " si siede al tavolo " + t);
            if (posti[t] == dimT) {
                qualcuno = true;
                ordinato[t] = true;
                svegliaPizzaiolo.signal();
            }
        } finally {
            l.unlock();
        }
    }
    private int scegliTavolo() {
        for (int i = 0; i < N; i++) {
            if (posti[i] < dimT) return i;
        }
        return r.nextInt(dimT);
    }

    @Override
    public void mangiaPizza() throws InterruptedException {
        l.lock();
        try {
            int t = idTavolo.get(((Cliente) Thread.currentThread()).id());
            idTavolo.remove(((Cliente) Thread.currentThread()).id());
            while (!pizzaPronta[t]) {
                attesaPizza[t].await();
            }
            System.out.println("Cliente " + ((Cliente) Thread.currentThread()).id() + " mangia la pizza al tavolo " + t);
            TimeUnit.MILLISECONDS.sleep(50 + r.nextInt(100 - 50 -10));
            posti[t]--;
            if (posti[t] == 0) {
                pizzaPronta[t] = false;
                attesaTavolo[t].signalAll();
            }
        } finally {
            l.unlock();
        }
    }

    @Override
    public void preparaPizza() throws InterruptedException {
        l.lock();
        try {
            while (!qualcuno) {
                svegliaPizzaiolo.await();
            }
            System.out.println("Preparo una pizza");
        } finally {
            l.unlock();
        }
    }

    @Override
    public void serviPizza() throws InterruptedException {
        l.lock();
        try {
            int t = cercaTavolo();
            System.out.println("Servo la pizza al tavolo " + t);
            pizzaPronta[t] = true;
            attesaPizza[t].signalAll();
            System.out.println("Tavolo successivo");
        } finally {
            l.unlock();
        }
    }
    private int cercaTavolo() {
        for (int i = 0; i < N; i++) {
            if (ordinato[i]) {
                ordinato[i] = false;
                for (int j = 0; j < N; j++) {
                    if (ordinato[j]) {
                        return i;
                    }
                }
                qualcuno = false;
                return i;
            }
        }
        return -1;
    }

    static void main (String[] args) {
        new PizzeriaLCb().test();
    }
}
