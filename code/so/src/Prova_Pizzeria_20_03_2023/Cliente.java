package Prova_Pizzeria_20_03_2023;

public class Cliente extends Thread {
    private Pizzeria pizzeria;
    private int id;

    public Cliente(Pizzeria p, int i) {
        pizzeria = p;
        id = i;
    }

    @Override
    public void run() {
        try {
            pizzeria.entra();
            pizzeria.mangiaPizza();
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public int id() {
        return id;
    }
}
