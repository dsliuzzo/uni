package Prova_aeroporto_08_11_2024;

public class Addetto extends Thread {
    private BancoCheckIn banco;

    public Addetto(BancoCheckIn banco) {
        this.banco = banco;
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
}
