package Prova_ufficioPostale_10_11_2023;

public class Cliente extends Thread{
    private UfficioPostale ufficio;
    private int id;
    private String op;

    public Cliente(UfficioPostale ufficio, int id, int op) {
        this.ufficio = ufficio;
        this.id = id;
        switch (op) {
            case 0:
                this.op = "A";
                break;
            case 1:
                this.op = "B";
                break;
            case 2:
                this.op = "C";
                break;
        }
    }

    public int id() {return id;}

    @Override
    public void run(){
        try{
            if (ufficio.ritiraTicket(op)){
                ufficio.attendiSportello(op);
            }
        } catch (InterruptedException e){
            e.printStackTrace();
        }
    }
}
