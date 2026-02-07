package ristrutturazioni;

public record Unita(double unita) implements Quantita{
    public Unita{
        if (unita < 0) {
            throw new IllegalArgumentException("valore non valido");
        }
    }

    @Override
    public double quantita(){
        return unita;
    }
}
