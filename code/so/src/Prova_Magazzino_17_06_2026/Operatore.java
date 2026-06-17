package Prova_Magazzino_17_06_2026;

import java.util.Random;
import java.util.concurrent.TimeUnit;

public class Operatore extends Thread{
    private Magazzino magazzino;
    private Random r = new Random();

    public Operatore(Magazzino magazzino) {
        this.magazzino = magazzino;
    }

    @Override
    public void run(){
        while(true){
            try{
                int c = magazzino.inizioRiordino();
                TimeUnit.MILLISECONDS.sleep(5 + r.nextInt(10-5+1));
                magazzino.fineRiordino(c);
            } catch(InterruptedException e){
                e.printStackTrace();
            }
        }
    }
}
