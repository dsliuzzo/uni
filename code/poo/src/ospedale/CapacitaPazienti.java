package ospedale;

public record CapacitaPazienti(int capacitaPazienti) {
    public CapacitaPazienti {
        if (capacitaPazienti < 2 || capacitaPazienti > 120) throw new IllegalArgumentException("capacità pazienti non valida");
    }
}
