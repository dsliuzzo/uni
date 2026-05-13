package Produttore_Consumatore;

import java.util.concurrent.Semaphore;

public class BufferSem extends Buffer{
    // creazione dei semafori
    private Semaphore ciSonoElementi = new Semaphore(0); // contatore degli elementi inizializzato a 0
    private Semaphore ciSonoPostiVuoti; // contatore dei posti vuoti, non inizializzare, dipende dalla dimensione del buffer
    private Semaphore mutex = new Semaphore(1); // semaforo per la mutua esclusione

    // costruttore
    public BufferSem(int dimensione) {
        super(dimensione); // chiamata al costruttore della classe astratta, quindi creazione degli indici e dell'array di buffer
        ciSonoPostiVuoti = new Semaphore(dimensione); // creazione del semaforo dei posti vuoti che può essere ora inizializzato alla dimensione corretta
    }

    // implementazione dei metodi astratti
    @Override
    public void put(int i) throws InterruptedException {
        ciSonoPostiVuoti.acquire(); // decremento dei posti vuoti, se non ci sono posti vuoti (0 permessi rimanenti) il thread chiamante viene sospeso
        mutex.acquire(); // acquire del mutex per implementare la mutua esclusione
        buffer[in] = i; // aggiunta dell'elemento al buffer
        in = (in + 1) % buffer.length; // incremento di in e implementazione dell'array circolare
        // stampa per verifica
        System.out.println("[P] put: " + i
                + " | elementi=" + ciSonoElementi.availablePermits()
                + "/" + buffer.length
                + " | buffer=" + stampaBuffer());
        mutex.release(); // fine della mutua esclusione
        ciSonoElementi.release(); // incremento dei posti occupati
    }

    @Override
    public int get() throws InterruptedException {
        ciSonoElementi.acquire(); // decremento dei posti occupati, se non ci sono posti occupati (0 permessi rimanenti) il thread chiamante viene sospeso
        mutex.acquire(); // incremento del mutex per la mutua esclusione
        int i = buffer[out]; // recupero dell'elemento dal buffer
        out = (out + 1) % buffer.length; // incremento di out e implementazione dell'array circolare
        // stampa elementi per verifica
        System.out.println("[C] get: " + i
                + " | elementi=" + ciSonoElementi.availablePermits()
                + "/" + buffer.length
                + " | buffer=" + stampaBuffer());
        mutex.release(); // fine della mutua esclusione
        ciSonoPostiVuoti.release(); // incremento dei posti vuoti
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
        Buffer buffer = new BufferSem(dimensione);
        int numProduttori = 10;
        int numConsumatori = 10;
        buffer.test(numProduttori, numConsumatori);
    }
}
