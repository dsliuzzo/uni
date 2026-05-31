package Prova_esame_07_02_2024;

public class Autista extends Thread{
    private Pullman pullman;

    public Autista(Pullman pullman) {
        this.pullman = pullman;
    }

    @Override
    public void run(){
        try{
            while(true){
                pullman.controllaBiglietto();
                boolean finito = !pullman.prossimoPasseggero();
                if(finito){
                    System.out.println("Si parte");
                }
            }
        } catch (InterruptedException e){
            e.printStackTrace();
        }
    }
}
