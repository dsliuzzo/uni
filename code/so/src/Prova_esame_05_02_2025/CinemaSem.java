package Prova_esame_05_02_2025;

import java.util.concurrent.Semaphore;
import java.util.Random;

public class CinemaSem implements Cinema {
    // variabili di stato
    private final int clientiTot;
    private int acquistati;
    private int usciti;

    // variabile per la generazione di numeri casuali
    private final Random random = new Random();

    // SEMAFORI
    // mutua esclusione
    Semaphore mutex = new Semaphore(1); // semaforo per la mutua esclusione che permette l'utilizzo di un thread alla volta

    // sincronizzazione dei thread (semafori contatori)
    Semaphore clientePronto = new Semaphore(0); // semaforo per segnalare all'addetto che un cliente è pronto
    Semaphore bigliettoConsegnato = new Semaphore(0, true); // semaforo per "risvegliare" il cliente alla consegna del biglietto
    // la fairness permette di implementare una coda FIFO

    // barriere
    Semaphore inizioFilm = new Semaphore(0); // permette di attendere che tutti i clienti abbiano un biglietto
    Semaphore attesaChiusura = new Semaphore(0); // permette di attendere che tutti i clienti siano usciti dal cinema

    // costruttore
    public CinemaSem(int clientiTot) {
        this.clientiTot = clientiTot;
        this.acquistati = 0;
        this.usciti = 0;
    }

    // metodi
    public void acquistaBiglietto() {
        try {
            // segnalo all'addetto che c'è un cliente
            clientePronto.release();

            // aspetto che l'addetto consegni il biglietto
            bigliettoConsegnato.acquire();

            // IO protetto
            mutex.acquire();
            System.out.println("Cliente" + Thread.currentThread().getId() + " ha acquistato un biglietto.");
            mutex.release();
        } catch (InterruptedException e) {
            System.out.println("Errore: " + e.getMessage());
            e.printStackTrace();
        }
    }

    public boolean consegnaBiglietto(){
        boolean finito = false;

        try {
            // aspetto che ci sia un cliente in coda
            clientePronto.acquire();

            // l'addetto assegna il posto
            int posto = random.nextInt(60) + 1;
            // IO protetto
            mutex.acquire();
            System.out.println("Posto " + posto + " assegnato al cliente");
            mutex.release();

            // sblocco il cliente
            bigliettoConsegnato.release();

            Thread.sleep(50); // problemi nella sincronizzazione, si potrebbe risolvere con lock and condition, da capire

            // aggiorno le variabili di stato in mutua esclusione
            mutex.acquire();
            acquistati++;

            if (acquistati == clientiTot) {
                finito = true; // diventa true se tutti i clienti hanno il loro biglietto
                System.out.println("Tutti i biglietti sono stati acquistati. Il film può iniziare.");

                // inizia il film
                inizioFilm.release(clientiTot); // aggiunge clientiTot permessi al semaforo inizioFilm - sblocco della barriera per tutti i thread cliente
            }
            mutex.release();

            Thread.sleep(10); // tempo di sincronizzazione dell'output

        } catch (InterruptedException e) {
            System.out.println("Errore: " + e.getMessage());
            e.printStackTrace();
        }

        return finito;
    }

    public void vediFilm() {
        try {
            // IO protetto
            mutex.acquire();
            System.out.println("Cliente " + Thread.currentThread().getId() + " attende l'inizio del film...");
            mutex.release();

            // aspetta che l'addetto inizi il film
            inizioFilm.acquire();

            // IO protetto
            mutex.acquire();
            System.out.println("Cliente " + Thread.currentThread().getId() + " sta guardando il film.");
            mutex.release();

            // simuliamo il tempo di visione
            Thread.sleep(120);

            // aggiornamento del contatore
            mutex.acquire();
            usciti++;
            System.out.println("Cliente " + Thread.currentThread().getId() + " è uscito dal cinema. (Usciti: " + usciti + "/" + clientiTot + ")");
            if (usciti == clientiTot){
                System.out.println("Cliente " + Thread.currentThread().getId() + " è l'ultimo ad uscire");
                attesaChiusura.release(); // sveglia l'addetto
            }
            mutex.release();

        } catch (InterruptedException e) {
            System.out.println("Errore: " + e.getMessage());
            e.printStackTrace();
        }
    }

    public void chiudiCinema() {
        try {
            // IO protetto
            mutex.acquire();
            System.out.println("L'addetto attende che tutti i clienti siano usciti");
            mutex.release();

            // attesa
            attesaChiusura.acquire();

            // IO protetto
            mutex.acquire();
            System.out.println("La sala è vuota, il cinema è chiuso");
            mutex.release();
        } catch (InterruptedException e) {
            System.out.println("Errore: " + e.getMessage());
            e.printStackTrace();
        }
    }
}
