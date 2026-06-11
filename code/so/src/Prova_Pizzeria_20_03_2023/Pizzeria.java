package Prova_Pizzeria_20_03_2023;

public abstract class Pizzeria {
    protected static final int dimT = 5;
    protected static final int numClienti = 15;

    public abstract void entra() throws InterruptedException;
    public abstract void mangiaPizza() throws InterruptedException;
    public abstract void preparaPizza() throws InterruptedException;
    public abstract void serviPizza() throws InterruptedException;

    public void test() {
        Pizzaiolo p = new Pizzaiolo(this);
        p.setDaemon(true);
        p.start();
        for (int i = 0; i < numClienti; i++) {
            new Cliente(this,i).start();
        }
    }
}
