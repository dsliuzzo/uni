package Prova_aeroporto_08_11_2024;

import java.util.concurrent.Semaphore;

public class BancoCheckInB extends BancoCheckIn {
    // DA RIFARE USA LE MAPPE
    private Semaphore mutex = new Semaphore(1);

    private int[] code = new int[nBanchi];
    private int[] nastri = new int[nBanchi];

    private Semaphore[] ingressi = new Semaphore[nBanchi];
    private Semaphore[] attendiCliente = new Semaphore[nBanchi];
    private Semaphore[] attendiBiglietto = new Semaphore[nBanchi];
    private Semaphore[] attendiConferma = new Semaphore[nBanchi];

    public BancoCheckInB() {
        for (int i = 0; i < nBanchi; i++) {
            ingressi[i] = new Semaphore(1);
            code[i] = 0;
            nastri[i] = 0;
            attendiCliente[i] = new Semaphore(0);
            attendiBiglietto[i] = new Semaphore(0);
            attendiConferma[i] = new Semaphore(0);
        }
    }

    @Override
    public void deponeBagagli(int N) throws InterruptedException {
        int indexCoda = 0;
        int min = Integer.MIN_VALUE;
        mutex.acquire();
        for (int i = 0; i < nBanchi; i++) {
            if (code[i] < min) {
                min = code[i];
                indexCoda = i;
            }
        }
        code[indexCoda]++;
        mutex.release();
        ingressi[indexCoda].acquire();

    }

    @Override
    public void pesaERegistra() throws InterruptedException {

    }

    @Override
    public void riceviCartaImbarco() throws InterruptedException {

    }

    @Override
    public void prossimoPasseggero() throws InterruptedException {

    }
}
