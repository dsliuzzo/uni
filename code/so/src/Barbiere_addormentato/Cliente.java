package Barbiere_addormentato;

public class Cliente extends Thread {
    private Sala sala;
    private int ID;

    public Cliente (Sala s, int i) {
        sala = s;
        ID = i;
    }

    public void run() {
        try {
            System.out.format("Il cliente %d vuole tagliarsi i capelli%n", ID);
            boolean ret = sala.attendiTaglio(); // attendi taglio restituisce false se la sala è piena
            if (ret) {
                System.out.format("Il cliente %d è riuscito a tagliare i capelli%n", ID);

            } else {
                System.out.format("Il cliente %d lascia la sala, è piana%n", ID);
            }
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public int getID() {
        return ID;
    }
}
