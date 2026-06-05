package Prova_cinema_05_02_2025;

public class Addetto extends Thread{
    // riferimento all'istanza del cinema
    private CinemaSem cinema;

    public Addetto(CinemaSem cinema) {
        this.cinema = cinema;
    }

    // override del funzionamento del thread
    @Override
    public void run() {
        System.out.println("Addetto pronto, in attesa di clienti");

        boolean finito = false; // variabile utile per continuare il ciclo finchè non conclude il suo lavoro
        while (!finito) {
            finito = cinema.consegnaBiglietto();
        }

        // il ciclo finisce quando il film è finito, quindi possiamo avviare chiudiCinema()
        cinema.chiudiCinema();

        System.out.println("l'addetto ha terminato il suo lavoro");
    }

}
