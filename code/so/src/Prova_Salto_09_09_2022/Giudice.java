package Prova_Salto_09_09_2022;

public class Giudice extends Thread{
    private Salto salto;
    private volatile boolean giudizio = true;

    public Giudice(Salto s){
        salto = s;
    }

    @Override
    public void run(){
        while(giudizio){
            try {
                Thread.sleep(10);
                giudizio = salto.successivo();
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
    }
}
