package Produttore_Consumatore;

import java.util.concurrent.locks.*;

public class BufferLC extends Buffer {
    protected int numElementi = 0;

    protected Lock l = new ReentrantLock();
    // inizializziamo due condition, una per i produttori in attesa che il buffer non sia pieno e uno per i consumatori in attesa che ci sia qualcosa nel buffer
    protected Condition bufferPieno = l.newCondition();
    protected Condition bufferVuoto = l.newCondition();

    public BufferLC(int dimensione) {
        super(dimensione);
    }

    public void put(int i) throws InterruptedException {
        l.lock(); // chiudiamo il lucchetto -> mutua esclusione del metodo
        try {
            while (numElementi == buffer.length) {
                bufferPieno.await(); // se il buffer è pieno il thread chiamante viene spostato nella condition (coda) e attende che si svuoti
            }
            buffer[in] = i;
            in = (in + 1) % buffer.length;
            numElementi++;
            bufferVuoto.signal(); // manda un segnale a chi (se presente) è in attesa che ci sia qualcosa nel buffer
            // stampa per verifica
            System.out.println("[P] put: " + i
                    + " | elementi=" + numElementi
                    + "/" + buffer.length
                    + " | buffer=" + stampaBuffer());
        } finally {
            l.unlock();
        }
    }

    public int get() throws InterruptedException {
        int i;
        l.lock(); // chiusura del lucchetto
        try {
            while (numElementi == 0) {
                bufferVuoto.await();
            }
            i = buffer[out];
            out = (out + 1) % buffer.length;
            numElementi--;
            bufferPieno.signal(); // manda un segnale a chi (se presente) è in attesa che il buffer non sia pieno
            // stampa per verifica
            System.out.println("[C] get: " + i
                    + " | elementi=" + numElementi
                    + "/" + buffer.length
                    + " | buffer=" + stampaBuffer());
        } finally {
            l.unlock();
        }
        return i;
    }


    private String stampaBuffer() {
        StringBuilder sb = new StringBuilder("[");
        for (int i = 0; i < buffer.length; i++) {
            sb.append(buffer[i]);
            if (i < buffer.length - 1) sb.append(", ");
        }
        sb.append("]");
        return sb.toString();
    }

    // creazione del main per test
    public static void main(String[] args) {
        int dimensione = 10;
        Buffer buffer = new BufferLC(dimensione);
        int numProduttori = 10;
        int numConsumatori = 10;
        buffer.test(numProduttori, numConsumatori);
    }
}
