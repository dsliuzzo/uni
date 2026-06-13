package Prova_Ferryboat_06_06_2022;

import java.util.concurrent.TimeUnit;

public class Addetto extends Thread{
    private Ferryboat ferry;

    public Addetto(Ferryboat f) {
        ferry = f;
    }

    @Override
    public void run(){
        try{
            ferry.imbarca();
            TimeUnit.MILLISECONDS.sleep(20);
            ferry.terminaTraghettata();
        } catch(InterruptedException e){
            e.printStackTrace();
        }
    }
}
