package ristrutturazioni;

public record Metri(double metri) implements Quantita{
    public Metri{
        if (metri < 0.0) throw new IllegalArgumentException("valore non valido");
    }

    @Override
    public double quantita() {
        return metri();
    }
}
