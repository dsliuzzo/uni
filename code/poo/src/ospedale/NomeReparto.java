package ospedale;

public record NomeReparto(String nome) {
    public NomeReparto {
        if (!nome.matches("^[A-Za-z]\\w{3,49}$")) throw new IllegalArgumentException("nome reparto non valido");
    }
}
