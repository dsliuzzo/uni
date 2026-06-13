package Prova_Ferryboat_06_06_2022;

import java.util.Random;
import java.util.concurrent.TimeUnit;

public class Autovettura extends Thread{
    private Ferryboat ferry;
    private int id;
    private Random r = new Random();

    public Autovettura(Ferryboat f, int i) {
        ferry = f;
        id = i;
    }

    public int id() {
        return id;
    }

    @Override
    public void run(){
        try{
            ferry.sali();
            TimeUnit.MILLISECONDS.sleep(1 + r.nextInt(1));
            ferry.parcheggiatiEScendi();
        } catch (InterruptedException e){
            e.printStackTrace();
        }
    }

}
