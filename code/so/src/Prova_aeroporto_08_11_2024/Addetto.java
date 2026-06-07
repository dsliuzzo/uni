package Prova_aeroporto_08_11_2024;

public class Addetto extends Thread {
    private BancoCheckIn banco;
    private int id;

    public Addetto(BancoCheckIn banco, int i) {
        this.banco = banco;
        this.id = i;
    }

    @Override
    public void run() {
        while(true) {
            try {
                banco.pesaERegistra();
                banco.prossimoPasseggero();
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
    }

    public int id() {
        return id;
    }
}
