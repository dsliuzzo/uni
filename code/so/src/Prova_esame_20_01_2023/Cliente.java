package Prova_esame_20_01_2023;

import java.util.Random;
import java.util.concurrent.TimeUnit;

public class Cliente extends Thread{
    private CallCenter cc;
    private int id;
    private Random TEMPO_ATTENDERE = new Random();
    private static final int MIN_TEMPO_ATTENDERE = 2;
    private static final int MAX_TEMPO_ATTENDERE = 6;
    
    public Cliente(CallCenter cc, int i) {
        this.cc = cc;
        id = i;
    }

    public void run() {
        try{
            System.out.println("[Cliente " + id + "] Inizia esecuzione");
            cc.richiediAssistenza();
            System.out.println("[Cliente " + id + "] Assistenza ricevuta, applico soluzione...");
            attendi(MIN_TEMPO_ATTENDERE, MAX_TEMPO_ATTENDERE);
            cc.terminaChiamata();
            System.out.println("[Cliente " + id + "] Chiamata terminata");
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
