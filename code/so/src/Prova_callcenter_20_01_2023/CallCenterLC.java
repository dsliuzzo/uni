package Prova_callcenter_20_01_2023;

import java.util.LinkedList;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.locks.*;

public class CallCenterLC extends CallCenter{
    private LinkedList<Cliente> clienti = new LinkedList<>(); //coda FIFO di attesa per clienti
    private static final int PAUSA = 5;

    private int[] operatoriClienti = new int[numOperatori]; //array di operatori liberi
    private int[] numChiamate = new int[numOperatori]; //array di num chiamate per ogni operatore
    private int operatoriLiberi = numOperatori;
    private boolean[] soluzioneTrovata = new boolean[numOperatori]; //false se operatore non ha risolto problema, true se ha risolto
    private boolean[] soluzioneApplicata = new boolean[numOperatori]; //false se cliente non ha applicato soluzione, true se ha applicato

    private Lock l = new ReentrantLock();
    private Condition attesaCliente = l.newCondition(); //cliente è in attesa che operatore sia libero
    private Condition attesaOperatore = l.newCondition(); //operatore è in attesa che arrivi cliente
    private Condition clienteChiamata = l.newCondition(); //cliente in attesa che operatore risolva problema
    private Condition operatoreChiamata = l.newCondition(); //operatore in attesa che cliente effettui risoluzione

    public CallCenterLC(int numOper, int numCli) {
        super(numOper, numCli);
        for (int i = 0; i < numOper; i++) {
            operatoriClienti[i] = -1; //tutti gli operatori sono liberi
        }
        for (int i = 0; i < numOper; i++){
            numChiamate[i] = 0;
        }
    }
    @Override
    void richiediAssistenza() throws InterruptedException {
        int id = ((Cliente) Thread.currentThread()).id();
        l.lock();
        try{
            System.out.println("[DEBUG] Cliente " + id + " richiede assistenza (operatori liberi: " + operatoriLiberi + ")");
            clienti.addLast((Cliente)Thread.currentThread());
            while(!turnoCliente()){
                System.out.println("[DEBUG] Cliente " + id + " in attesa (posizione coda: " + clienti.indexOf((Cliente)Thread.currentThread()) + ")");
                attesaCliente.await();
            }
            clienti.removeFirst();
            operatoriLiberi--;
            attesaOperatore.signalAll();
            int mioOperatore = -1;
            for (int i = 0; i < numOperatori; i++){
                if (operatoriClienti[i] == -1){
                    operatoriClienti[i] = id;
                    numChiamate[i]++;
                    mioOperatore = i;
                    System.out.println("[DEBUG] Cliente " + id + " assegnato a Operatore " + i + " (chiamate: " + numChiamate[i] + ")");
                    break;
                }
            }
            while(!soluzioneTrovata[mioOperatore]){
                clienteChiamata.await();
            }
            System.out.println("[DEBUG] Cliente " + id + " soluzione trovata dall'operatore " + mioOperatore);
        } finally {
            l.unlock();
        }
    }

    private boolean turnoCliente() {
        return Thread.currentThread() == clienti.getFirst() && operatoriLiberi > 0;
    }

    @Override
    void fornisciAssistenza() throws InterruptedException {
        l.lock();
        try{
            int id = ((Operatore) Thread.currentThread()).id();
            System.out.println("[DEBUG] Operatore " + id + " in attesa di cliente");
            while (operatoriClienti[id] == -1){
                attesaOperatore.await();
            }
            System.out.println("[DEBUG] Operatore " + id + " ha ricevuto Cliente " + operatoriClienti[id]);
            soluzioneTrovata[id] = true;
            clienteChiamata.signalAll();
            while(!soluzioneApplicata[id]){
                operatoreChiamata.await();
            }
            System.out.println("[DEBUG] Operatore " + id + " - Cliente ha applicato la soluzione");
        } finally {
            l.unlock();
        }
    }

    @Override
    void terminaChiamata() {
        l.lock();
        try{
            int idCliente = ((Cliente) Thread.currentThread()).id();
            // Trova l'operatore che sta servendo questo cliente
            for (int i = 0; i < numOperatori; i++){
                if (operatoriClienti[i] == idCliente){
                    soluzioneApplicata[i] = true;
                    System.out.println("[DEBUG] Cliente " + idCliente + " ha applicato soluzione (Operatore " + i + ")");
                    break;
                }
            }
            operatoreChiamata.signalAll();
        } finally {
            l.unlock();
        }
    }



    @Override
    void prossimoCliente() throws InterruptedException {
        l.lock();
        try{
            int id = ((Operatore) Thread.currentThread()).id();
            if(numChiamate[id] > 14){
                System.out.println("[DEBUG] Operatore " + id + " in pausa (15 chiamate effettuate)");
                //pausa
                TimeUnit.SECONDS.sleep(PAUSA);
                numChiamate[id] = 0;
                System.out.println("[DEBUG] Operatore " + id + " pausa terminata");
            }
            soluzioneTrovata[id] = false;
            soluzioneApplicata[id] = false;
            operatoriClienti[id] = -1;
            operatoriLiberi++;
            System.out.println("[DEBUG] Operatore " + id + " libero (operatori liberi: " + operatoriLiberi + ")");
            attesaCliente.signalAll();

        } finally {
            l.unlock();
        }
    }

    public static void main(String[] args) {
        System.out.println("=== AVVIO CALL CENTER ===");
        System.out.println("Operatori: 20, Clienti: 50");
        CallCenterLC cc = new CallCenterLC(20, 50);
        cc.test(20, 50);
        System.out.println("=== CALL CENTER AVVIATO ===");
    }
}
