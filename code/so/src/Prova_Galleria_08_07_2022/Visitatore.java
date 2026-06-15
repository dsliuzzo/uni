package Prova_Galleria_08_07_2022;

public class Visitatore extends Thread{
    private Galleria galleria;
    private int id;
    private int lingua;

    public Visitatore(Galleria galleria, int id, int lingua) {
        this.galleria = galleria;
        this.id = id;
        this.lingua = lingua;
    }

    @Override
    public void run(){
        try{
            Thread.sleep(5);
        } catch(InterruptedException e){
            e.printStackTrace();
        }
    }
}
