package Prova_esame_07_02_2024;

import java.util.concurrent.TimeUnit;

public class Passeggero extends Thread{
    private Pullman pullman;
    private int id;
    private String tipo;

    public Passeggero(Pullman pullman, int id, String tipo) {
        this.pullman = pullman;
        this.id = id;
        this.tipo = tipo;
    }

    @Override
    public void run(){
        try{
            pullman.sali();
            pullman.prendiPosto();
        } catch (InterruptedException e){
            e.printStackTrace();
        }
    }

    public int id(){
        return id;
    }
    public String tipo(){
        return tipo;
    }
}
