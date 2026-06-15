package Prova_ufficioPostale_10_11_2023;

public class Impiegato extends Thread{
    private UfficioPostale ufficio;
    private int tipo;

    public Impiegato(UfficioPostale ufficio, int tipo) {
        this.ufficio = ufficio;
        this.tipo = tipo;
    }

    public int tipo() {return tipo;}

    @Override
    public void run(){
        while(true){
            try {
                ufficio.prossimoCliente();
                ufficio.eseguiOperazione();
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
    }
}
