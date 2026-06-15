package Prova_MuseoC_07_02_2022;

import java.util.Random;

public class Visitatore extends Thread{
    private static final int maxSA = 40;
    private static final int minSA = 20;
    private static final int maxSD = 8;
    private static final int minSD = 5;

    private Random r = new Random();

    private MuseoC museo;
    private int id;

    public Visitatore(MuseoC m, int i){
        museo = m;
        id = i;
    }

    public int id(){
        return id;
    }

    @Override
    public void run(){
        try{
            museo.visitaSA();
            Thread.sleep(minSA + r.nextInt(maxSA - minSA + 1));
            museo.terminaVisitaSA();
            museo.visitaSD();
            Thread.sleep(minSD + r.nextInt(maxSD - minSD + 1));
            museo.terminaVisitaSD();

        } catch (InterruptedException e){
            e.printStackTrace();
        }
    }

}
