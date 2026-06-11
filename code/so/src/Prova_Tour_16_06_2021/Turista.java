package Prova_Tour_16_06_2021;

public class Turista extends Thread {
    private TourFirenze tour;
    private int id;

    public Turista(TourFirenze tour, int id) {
        this.tour = tour;
        this.id = id;
    }

    @Override
    public void run() {
        try {
            tour.turistaInizia();
            tour.turistaFine();
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public int id() {
        return id;
    }
}
