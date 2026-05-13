package ristrutturazioni;

public record CodiceIdentificativo(String cod) implements Comparable<CodiceIdentificativo>{
    public CodiceIdentificativo {
        if (!cod.matches("^[A-Z]\\d{3}-\\d{4}$")) throw new IllegalArgumentException("identificativo non valido");
    }

    public int compareTo(CodiceIdentificativo other){
        return this.cod.compareTo(other.cod);
    }
}
