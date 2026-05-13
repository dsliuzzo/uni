package Prova_esame_05_02_2025;

import java.util.concurrent.Semaphore;

public class Cliente extends Thread{
    // riferimento al cinema
    private CinemaSem cinema;

    public Cliente(CinemaSem cinema) {
        this.cinema = cinema;
    }

    @Override
    public void run() {
        System.out.println("Cliente " + Thread.currentThread().getId() + " è entrato nel cinema.");
        cinema.acquistaBiglietto();
        cinema.vediFilm();
    }
}
