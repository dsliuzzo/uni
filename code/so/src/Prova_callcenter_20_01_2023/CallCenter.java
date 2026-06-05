package Prova_callcenter_20_01_2023;

public abstract class CallCenter {
    protected int numOperatori;
    protected int numClienti;

    abstract void richiediAssistenza() throws InterruptedException;
    abstract void terminaChiamata() throws InterruptedException;
    abstract void fornisciAssistenza() throws InterruptedException;
    abstract void prossimoCliente() throws InterruptedException;

    public CallCenter(int numOper, int numCli) {
        numOperatori = numOper;
        numClienti = numCli;
    }

    public void test(int numOperatori, int numClienti) {
        Operatore[] operatori = new Operatore[numOperatori];
        for (int i = 0; i < numOperatori; i++) {
            operatori[i] = new Operatore(this, i);
            operatori[i].setDaemon(true);
            operatori[i].start();
        }
        for (int i = 0; i < numClienti; i++) {
            new Cliente(this, i).start();
        }
    }
}
