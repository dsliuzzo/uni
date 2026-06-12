package Prova_Cantiere_04_07_22;

import java.util.concurrent.TimeUnit;

public class Operaio extends Thread{
    private CantiereFerroviarioA cantiere;
    private int id;
    private int tipo;

    public Operaio(CantiereFerroviarioA cantiere, int id, int tipo) {
        this.cantiere = cantiere;
        this.id = id;
        this.tipo = tipo;
    }

    public int id(){return id;}

    @Override
    public void run() {
        while(true){
            try{
                TimeUnit.SECONDS.sleep(tipo == 0? 2:3);
                cantiere.lavora(tipo);
                cantiere.termina(tipo);
                TimeUnit.SECONDS.sleep(1);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
    }
}
