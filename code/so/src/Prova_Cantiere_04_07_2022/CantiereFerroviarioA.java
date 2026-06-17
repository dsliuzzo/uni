package Prova_Cantiere_04_07_2022;

public abstract class CantiereFerroviarioA {
    public static final int M = 3;
    public static final int nT = 4;
    public static final int nR = 4;

    public abstract void lavora(int t) throws InterruptedException;
    public abstract void termina(int t) throws InterruptedException;

    public void test(){
        for(int i = 0; i < nT; i++){
            new Operaio(this, i,0).start();
        }
        for(int i = nT; i < nT + nR; i++){
            new Operaio(this,i,1).start();
        }
    }
}
