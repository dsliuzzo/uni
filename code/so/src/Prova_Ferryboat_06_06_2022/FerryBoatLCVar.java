package Prova_Ferryboat_06_06_2022;

public class FerryBoatLCVar extends FerryboatLC{

    @Override
    public void parcheggiatiEScendi() throws InterruptedException {
       l.lock();
       try{
           count++;
           finePark = true;
           attesaAddetto.signal();

           while(!uscita()){
               attesaUscita.signal();
           }
           finePark = false;
           lifo.removeFirst();
           count--;
           System.out.println("Autovettura" + ((Autovettura) Thread.currentThread()).id() + " uscito");
           if (count == 0){
               finePark = true;
               attesaAddetto.signal();
           }
       } finally{
           l.unlock();
       }
    }

    static void main(String[] args) {
        new FerryBoatLCVar().test();
    }
}
