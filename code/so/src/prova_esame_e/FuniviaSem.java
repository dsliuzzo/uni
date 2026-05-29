package prova_esame_e;

import java.util.ArrayList;
import java.util.concurrent.Semaphore;

public class FuniviaSem extends Funivia {
    private Semaphore mutex = new Semaphore(1);

    private Semaphore permessoIngressoP = new Semaphore(0);
    private Semaphore permessoIngressoB = new Semaphore(0);

    private Semaphore pilotaAttendi = new Semaphore(0);

    private Semaphore permessoUscitaP = new Semaphore(0);
    private Semaphore permessoUscitaB = new Semaphore(0);

    private int numViaggio = -1;
    private int postiOccupati = 0;

    private Semaphore permettiFine = new Semaphore(0);

    private ArrayList<Long> idTuristi = new ArrayList<>();


    @Override
    void pilotaStart() throws InterruptedException {
        numViaggio++;

        if (numViaggio % 2 == 0) {
            permessoIngressoP.release(6);
        } else {
            permessoIngressoB.release(3);
        }

        pilotaAttendi.acquire();
    }

    @Override
    void pilotaEnd() throws InterruptedException {
        System.out.println("Viaggio numero " + (numViaggio));
        for (int i = 0; i < idTuristi.size(); i++) {
            System.out.print(idTuristi.get(i) + " ");
        }

        System.out.println("\n");

        if (numViaggio % 2 == 0) {
            permessoUscitaP.release(6);
        } else {
            permessoUscitaB.release(3);
        }

        permettiFine.acquire();
        idTuristi.clear();
    }

    @Override
    void turistaSali(int tipo) throws InterruptedException {
        if (tipo == 0) {
            permessoIngressoP.acquire();
            mutex.acquire();
            postiOccupati++;
            idTuristi.add(Thread.currentThread().getId());
            if (postiOccupati == 6) {
                pilotaAttendi.release();
            }
            mutex.release();
        } else {
            permessoIngressoB.acquire();
            mutex.acquire();
            postiOccupati+=2;
            idTuristi.add(Thread.currentThread().getId());
            if (postiOccupati == 6) {
                pilotaAttendi.release();
            }
            mutex.release();
        }
    }

    @Override
    void turistaScendi(int tipo) throws InterruptedException {
        if (tipo == 0) {
            permessoUscitaP.acquire();
            mutex.acquire();
            postiOccupati--;
            if (postiOccupati == 0) {
                permettiFine.release();
            }
            mutex.release();
        } else {
            permessoUscitaB.acquire();
            mutex.acquire();
            postiOccupati-=2;
            if (postiOccupati == 0) {
                permettiFine.release();
            }
            mutex.release();
        }
    }

    public static void main(String[] args) {
        Funivia fun = new FuniviaSem();
        fun.test(18,9);
    }
}
