package Produttore_Consumatore;

public class BufferMN extends Buffer {
    private int numElementi = 0;

    public BufferMN (int dimensione) {
        super(dimensione);
    }

    @Override
    public synchronized void put(int i) throws InterruptedException {
        while (numElementi == buffer.length) {
            wait();
        }
        buffer[in] = i;
        in = (in + 1) % buffer.length;
        numElementi++;
        notifyAll();
    }

    @Override
    public synchronized int get() throws InterruptedException {
        while (numElementi == 0) {
            wait();
        }
        int i = buffer[out];
        out = (out + 1) % buffer.length;
        numElementi--;
        notifyAll();
        return i;
    }
}
