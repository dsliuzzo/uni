package ristrutturazioni;

public record MetriQuadri(double metriQuadri) implements Quantita{
    public MetriQuadri{
        if (metriQuadri < 0.0) throw new IllegalArgumentException("valore non valido");
    }
    @Override
    public double quantita() {
        return metriQuadri();
    }
}
