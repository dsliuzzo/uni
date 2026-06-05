package Prova_esame_13_01_2025;

public class Bibliotecario extends Thread{
    private Biblioteca biblioteca;

    public Bibliotecario(Biblioteca biblioteca) {
        this.biblioteca = biblioteca;
    }

    @Override
    public void run() {
        while (true) {
            try {
                biblioteca.registraPrestito();
                biblioteca.prossimoUtente();
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
    }
}
