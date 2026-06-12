package Prova_Cantiere_04_07_22;

public class CantiereFerroviarioB extends CantiereFerroviarioSem {
    private static final int N = 3;
    private int[] traversa = new int[N];

    @Override
    public void lavora(int t) throws InterruptedException {
        int id = ((Operaio) Thread.currentThread()).id();
        int bin;
        if (t == 0) {
            attesa0.acquire();
            mutex.acquire();
            bin = ricercaBin(0);
            if (bin == -1) {
                mutex.release();
                System.out.println("Opeario " + id + " ha completato");
                ((Operaio) Thread.currentThread()).finito();
                return;
            }
            dentro[bin] = true;
            idBin.put(id, bin);
            stato[bin] = 0;
            mutex.release();
        } else {
            attesa1.acquire();
            mutex.acquire();
            bin = ricercaBin(1);
            if (bin == -1) {
                mutex.release();
                System.out.println("Opeario " + id + " ha completato");
                ((Operaio) Thread.currentThread()).finito();
                return;
            }
            dentro[bin] = true;
            idBin.put(id, bin);
            stato[bin] = 1;
            mutex.release();
        }
        System.out.println("Operaio " + id + " di tipo " + t + " inizia a lavorare su " + bin);
    }
    private int ricercaBin(int t) {
        for (int i = 0; i < M; i++) {
            if (stato[i] == ((t + 1) % 2) && !dentro[i] && traversa[i] < N) {
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
        System.out.println("Operaio " + ((Operaio) Thread.currentThread()).id() + " di tipo " + t + " finisce di lavorare su " + bin);
        if (t == 0) {
            attesa1.release();
            traversa[bin]++;
        } else {
            attesa0.release();
        }
        mutex.release();
    }

    static void main(String[] args) {
        new CantiereFerroviarioB().test();
    }
}
