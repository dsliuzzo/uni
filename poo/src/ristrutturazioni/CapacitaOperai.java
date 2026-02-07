package ristrutturazioni;

public record CapacitaOperai(int cap) {
    public CapacitaOperai {
        if (cap < 0) throw new IllegalArgumentException("capacità operai non valida");
    }
}
