package Produttore_Consumatore;

import java.util.LinkedList;

public class BufferLCFifo extends BufferLC {
    private LinkedList<Thread> codaProduttori = new LinkedList<>();
    private LinkedList<Thread> codaConsumatori = new LinkedList<>();

    public BufferLCFifo (int dimensione) {
        super(dimensione);
    }

    @Override
    public void put(int i) throws InterruptedException {
        l.lock();
        try {
            codaProduttori.add(Thread.currentThread());
            while (!possoInserire()) {
                bufferPieno.await();
            }
            codaProduttori.remove();
            buffer[in] = i;
            in = (in + 1) % buffer.length;
            numElementi++;
            bufferVuoto.signalAll();
        } finally {
            l.unlock();
        }
    }

    @Override
    public int get() throws InterruptedException {
        int i;
        l.lock();
        try {
            codaConsumatori.add(Thread.currentThread());
            while (!possoPrelevare()) {
                bufferVuoto.await();
            }
            codaProduttori.remove();
            i = buffer[out];
            out = (out + 1) % buffer.length;
            numElementi--;
            bufferPieno.signalAll();
        } finally {
            l.unlock();
        }
        return i;
    }

    private boolean possoInserire() {
        return numElementi < buffer.length && Thread.currentThread() == codaProduttori.getFirst();
    }

    private boolean possoPrelevare() {
        return numElementi > 0 && Thread.currentThread() == codaConsumatori.getFirst();
    }
}