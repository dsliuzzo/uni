package Prova_Cantiere_04_07_22;

public class CantiereFerroviarioSemVar extends CantiereFerroviarioSem{
    private int[] traversa = new int[M];
    private int N = 3; // numero di traverselimitate

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
                attesa1.release();
                return;
            }
            dentro[bin] = true;
            idBin.put(id, bin);
            stato[bin] = 0;
            traversa[bin]++;
            System.out.println("Operaio " + id + " ha scaricato una traversa sul binario " + bin + " : siamo a " + traversa[bin]);
            mutex.release();
        } else {
            attesa1.acquire();
            mutex.acquire();
            bin = ricercaBin(1);
            if (bin == -1) {
                mutex.release();
                attesa0.release();
                return;
            }
            dentro[bin] = true;
            idBin.put(id, bin);
            stato[bin] = 1;
            mutex.release();
        }
        mutex.acquire();
        if (tutteN()) {
            ((Operaio) Thread.currentThread()).finito();
        }
        mutex.release();
        System.out.println("Operaio " + id + " di tipo " + t + " inizia a lavorare su " + bin);
    }

    private boolean tutteN() {
        for (int i = 0; i < M; i++) {
            if (traversa[i] < N) {
                return false;
            }
        }
        System.out.println("tutte le traverse sono state completate");
        return true;
    }

    @Override
    public void termina(int t) throws InterruptedException {
        mutex.acquire();
        int bin = idBin.get(((Operaio) Thread.currentThread()).id());
        if (traversa[bin] < N){
            dentro[bin] = false;
            System.out.println("Operaio " + ((Operaio) Thread.currentThread()).id() + " di tipo " + t + " finisce di lavorare su " + bin);
            if (t == 0) {
                attesa1.release();
            } else {
                attesa0.release();
            }
        } else {
            ((Operaio) Thread.currentThread()).finito();
        }
        mutex.release();
    }

    static void main(String[] args){
        new CantiereFerroviarioSemVar().test();
    }
}
