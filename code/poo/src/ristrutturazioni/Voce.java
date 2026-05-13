package ristrutturazioni;

public record Voce(String descrizione, Quantita quantita, double prezzoUnitario, int numOperai) {
    public Voce {
        if (!descrizione.matches("^\\w{2,40}$")) throw new IllegalArgumentException("descrizione non valida");
        if (prezzoUnitario < 0) throw new IllegalArgumentException("prezzo unitario non valido");
        if (numOperai < 0) throw new IllegalArgumentException("numero operai non valido");
    }
}
