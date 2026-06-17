package Prova_Magazzino_17_06_2026;

import java.util.LinkedList;
import java.util.concurrent.locks.*;

public class MagazzinoLC extends Magazzino{
    private Lock l = new ReentrantLock();
    private Condition attesaOp = l.newCondition();
    private Condition[] attesaM = new Condition[K];
    private Condition attesaEntrata = l.newCondition();
    private LinkedList<Thread> codaM = new LinkedList<>();
    private boolean[] riordina = new boolean[K];
    private boolean almenoUno = false;
    private int[] corsiaM = new int[K];
    private int[] numCode = new int[K];
    private int[] numP = new int[K];

    public MagazzinoLC() {
        for (int i = 0; i < K; i++) {
            attesaM[i] = l.newCondition();
            numP[i] = P;
        }
    }

    @Override
    public int entraMuletto() throws InterruptedException {
        l.lock();
        try{
            codaM.add(Thread.currentThread());
            while(codaM.getFirst() != Thread.currentThread()){
                attesaEntrata.await();
            }
            codaM.removeFirst();
            attesaEntrata.signalAll();
            int c = Integer.MAX_VALUE;
            int min = Integer.MAX_VALUE;
            for (int i = 0; i < K; i++) {
                if (numCode[i] < min){
                    min = numCode[i];
                    c = i;
                }
            }
            numCode[c]++;
            while(!possoEntrare(c)){
                attesaM[c].await();
            }
            System.out.println("Muletto entra in corsia " + c);
            numCode[c]--;
            corsiaM[c]++;
            numP[c]--;
            return c;
        } finally{
            l.unlock();
        }
    }

    private boolean possoEntrare(int c) {
        return corsiaM[c] < M  && !riordina[c] && numP[c] > 0;
    }

    @Override
    public void esciMuletto(int c) {
        l.lock();
        try{
            corsiaM[c]--;
            if (numP[c] == 0 && corsiaM[c] == 0){
                almenoUno = true;
                riordina[c] = true;
                attesaOp.signal();
                return;
            }
            System.out.println("Muletto esce dalla corsia " + c);
            attesaM[c].signal();
        } finally{
            l.unlock();
        }

    }

    @Override
    public int inizioRiordino() throws InterruptedException {
        l.lock();
        try{
            while(!almenoUno){
                attesaOp.await();
            }
            almenoUno = false;
            int c = Integer.MAX_VALUE;
            for(int i = 0; i < K; i++){
                if (numP[i] == 0){
                    c = i;
                    break;
                }
            }
            riordina[c] = true;
            System.out.println("Operatore inizia il riordino in corsia " + c);
            return c;
        } finally{
            l.unlock();
        }
    }

    @Override
    public void fineRiordino(int c) throws InterruptedException {
        l.lock();
        try{
            riordina[c] = false;
            numP[c] = P;
            attesaM[c].signalAll();
            int corsia = -1;
            for(int i = 0; i < K; i++){
                if (numP[i] == 0){
                    corsia = i;
                    break;
                }
            }
            if(corsia != -1){
                almenoUno = true;
            }
        } finally{
            l.unlock();
        }
    }

    static void main(String[] args) {
        new MagazzinoLC().test();
    }
}
