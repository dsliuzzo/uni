package Prova_esame_13_01_2024;

import java.util.Random;

public class Utente extends Thread {
    private Biblioteca biblioteca;
    private int id;
    private boolean tesserato;
    private Random random = new Random();

    public Utente(Biblioteca biblioteca, int id) {
        this.biblioteca = biblioteca;
        this.id = id;
        this.tesserato = random.nextBoolean();
    }

    @Override
    public void run() {
        try {
            biblioteca.richiediPrestito();
            biblioteca.esci();
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public boolean tesserato() {
        return tesserato;
    }
    public int id() {
        return id;
    }
}
