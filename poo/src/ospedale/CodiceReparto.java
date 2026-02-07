package ospedale;

public record CodiceReparto(String codiceReparto) {
    public CodiceReparto {
        if (!codiceReparto.matches("^[A-Za-z]{3}\\d{3}$")) throw new IllegalArgumentException("codice reparto non valido");
    }
}
