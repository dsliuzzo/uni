package Prova_esame_20_01_2023;

import java.util.Random;
import java.util.concurrent.TimeUnit;

public class Operatore extends Thread{
    private CallCenter cc;
    private int id;
    private Random TEMPO_ATTENDERE = new Random();
    private static final int MIN_TEMPO_ATTENDERE = 1;
    private static final int MAX_TEMPO_ATTENDERE = 10;

    public Operatore(CallCenter c, int i) {
        this.cc = c;
        id = i;
    }

    public void run() {
        try{
            System.out.println("[Operatore " + id + "] Avviato, in attesa di clienti");
            while (true) {
                cc.fornisciAssistenza();
                System.out.println("[Operatore " + id + "] Cliente assegnato, fornisco assistenza...");
                attendi(MIN_TEMPO_ATTENDERE, MAX_TEMPO_ATTENDERE);
                cc.prossimoCliente();
                System.out.println("[Operatore " + id + "] Pronto per prossimo cliente");
            }
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public int id() {
        return id;
    }

    public void attendi(int min, int max) throws InterruptedException {
        TimeUnit.SECONDS.sleep(min + TEMPO_ATTENDERE.nextInt(max - min + 1));
    }
}
