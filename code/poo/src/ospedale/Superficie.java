package ospedale;

public record Superficie(double superficie) {
    public Superficie {
        if (superficie < 20 || superficie > 2000) throw new IllegalArgumentException("superficie non valida");
    }
}
