package Prova_Tour_16_06_2021;

public abstract class TourFirenze {
    private static final int N = 100;
    protected static final int maxG = 20;

    public abstract void attendiFormazioneGruppo() throws InterruptedException;
    public abstract void visitaInizia();
    public abstract void visitaFine();
    public abstract void turistaInizia() throws InterruptedException;
    public abstract void turistaFine() throws InterruptedException;

    public void test() {
        Guida g = new Guida(this);
        g.setDaemon(true);
        g.start();
        for (int i = 0; i < N; i++) {
            new Turista(this, i).start();
        }
    }

}
