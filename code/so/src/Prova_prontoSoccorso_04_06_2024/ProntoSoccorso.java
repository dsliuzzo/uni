package Prova_prontoSoccorso_04_06_2024;

public abstract class ProntoSoccorso {
    protected static final int NUM_PAZIENTI = 12;

    public abstract void iniziaVisita() throws InterruptedException;
    public abstract void terminaVisita() throws InterruptedException;
    public abstract void accediPaziente() throws InterruptedException;
    public abstract void esciPaziente() throws InterruptedException;

    public void test() {
        Medico m = new Medico(this);
        m.setDaemon(true);
        m.start();
        for (int i = 0; i < NUM_PAZIENTI; i++) {
            try {
                Thread.sleep(20);
                new Paziente(this, i).start();
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
    }
}
