package Prova_MuseoC_07_02_2022;

public abstract class MuseoC {
    public static final int nVis = 180;
    public static final int nSA = 40;
    public static final int nSD = 5;

    public abstract void visitaSA() throws InterruptedException;
    public abstract void terminaVisitaSA();

    public abstract void visitaSD() throws InterruptedException;
    public abstract void terminaVisitaSD();

    public void test(){
        try{
            Visitatore[] vis = new Visitatore[nVis];
            for (int i = 0; i < nVis; i++) {
                vis[i] = new Visitatore(this, i);
                vis[i].start();
            }

            for (int i = 0; i < nVis; i++) {
                vis[i].join();
            }
            System.out.println("==== MUSEO CHIUSO ====");
        } catch (InterruptedException e){
            e.printStackTrace();
        }
    }
}
