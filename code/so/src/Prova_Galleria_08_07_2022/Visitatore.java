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

    public int id() { return id; }

    @Override
    public void run(){
        try{
            galleria.iniziaVisita(lingua);
            galleria.esci(lingua);
        } catch(InterruptedException e){
            e.printStackTrace();
        }
    }
}
