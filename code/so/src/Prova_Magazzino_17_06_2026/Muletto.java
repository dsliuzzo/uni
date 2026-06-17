package Prova_Magazzino_17_06_2026;

import java.util.Random;
import java.util.concurrent.TimeUnit;

public class Muletto extends Thread{
    private Magazzino magazzino;
    private int id;
    private Random r = new Random();

    public Muletto(Magazzino magazzino, int id) {
        this.magazzino = magazzino;
        this.id = id;
    }

    public int id() {return id;}

    @Override
    public void run(){
        while(true){
            try{
                int c = magazzino.entraMuletto();
                TimeUnit.MILLISECONDS.sleep(1+ r.nextInt(3-1+1));
                magazzino.esciMuletto(c);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
    }
}
