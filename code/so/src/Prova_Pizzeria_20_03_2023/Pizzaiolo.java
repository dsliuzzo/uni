package Prova_Pizzeria_20_03_2023;

public class Pizzaiolo extends Thread {
    private Pizzeria pizzeria;

    public Pizzaiolo(Pizzeria p ) {
        pizzeria = p;
    }

    @Override
    public void run() {
        while(true) {
            try {
                pizzeria.preparaPizza();
                Thread.sleep(1000);
                pizzeria.serviPizza();
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
    }
}
