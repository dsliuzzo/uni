package Prova_esame_05_02_2025;

import java.util.concurrent.Semaphore;

public class MainCinema {
    public static void main(String[] args) {
        int clientiTot = 20;
        CinemaSem cinema = new CinemaSem(clientiTot);

        // creazione dell'addetto
        Addetto addetto = new Addetto(cinema);

        // creazione dei clienti
        Cliente[] clienti = new Cliente[clientiTot];

        // runniamo i thread
        addetto.start();
        for (int i = 0; i < clientiTot; i++) {
            clienti[i] = new Cliente(cinema);
            clienti[i].start();
        }

        // attesa della terminazione degli altri thread
        try {
            addetto.join();
            for (int i = 0; i < clientiTot; i++) {
                clienti[i].join();
            }
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        System.out.println("Programma terminato con successo");
    }
}
