package ristrutturazioni;

public record NomeProgetto(String nome) {
    public NomeProgetto {
        if (!nome.matches("^\\w{4,24}$")) throw new IllegalArgumentException("nome progetto non valido");
    }
}
