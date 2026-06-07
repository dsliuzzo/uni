package Prova_aeroporto_08_11_2024;

import java.util.HashMap;
import java.util.Map;
import java.util.concurrent.Semaphore;
import java.util.concurrent.TimeUnit;

public class BancoCheckInB extends BancoCheckIn {
    private Semaphore mutex = new Semaphore(1);

    private Semaphore[] banco = new Semaphore[nBanchi];

    private Semaphore[] passeggeri = new Semaphore[nBanchi];
    private int[] inCoda = new int[nBanchi];

    private Semaphore[] attendiCliente = new Semaphore[nBanchi];
    private Semaphore[] attendiBiglietto = new Semaphore[nBanchi];
    private Semaphore[] attendiConferma = new Semaphore[nBanchi];

    private Map<Integer, Integer> passeggeroBanco = new HashMap<>(); // id del cliente - indice banco scelto
    private int[] nastri = new int[nBanchi];


    public BancoCheckInB() {
        for (int i = 0; i < nBanchi; i++) {
            banco[i] = new Semaphore(0);
            passeggeri[i] = new Semaphore(1);
            attendiBiglietto[i] = new Semaphore(0);
            attendiConferma[i] = new Semaphore(0);
        }
    }

    @Override
    public void deponeBagagli(int N) throws InterruptedException {
        mutex.acquire();
        int codaScelta = codaMin();
        inCoda[codaScelta] ++;
        mutex.release();
        passeggeri[codaScelta].acquire();
        mutex.acquire();
        inCoda[codaScelta] --;
        passeggeroBanco.put(((Passeggero) Thread.currentThread()).id(), codaScelta);
        nastri[codaScelta] = N;
        mutex.release();
        banco[codaScelta].release();
        attendiBiglietto[codaScelta].acquire();
    }

    @Override
    public void pesaERegistra() throws InterruptedException {
        int id = ((Addetto) Thread.currentThread()).id();
        banco[id].acquire();
        mutex.acquire();
        TimeUnit.MILLISECONDS.sleep(nastri[id] * 10);
        mutex.release();
        attendiBiglietto[id].release();
        attendiConferma[id].acquire();
    }

    @Override
    public void riceviCartaImbarco() throws InterruptedException {
        int id = ((Passeggero) Thread.currentThread()).id();
        System.out.println("Il cliente " + id + " ha ricevuto il biglietto");
        mutex.acquire();
        int banco = passeggeroBanco.get(id);
        passeggeroBanco.remove(id);
        mutex.release();
        attendiConferma[banco].release();
    }

    @Override
    public void prossimoPasseggero() throws InterruptedException {
        passeggeri[((Addetto) Thread.currentThread()).id()].release();
    }

    private int codaMin() {
        int min = Integer.MAX_VALUE;
        int res = -1;
        for (int i = 0; i < nBanchi; i++) {
            if (inCoda[i] < min) {
                res = i;
                min = inCoda[i];
            }
        }
        return res;
    }

    public static void main(String[] args) throws InterruptedException {
        BancoCheckInB banco = new BancoCheckInB();
        banco.test();
    }
}
