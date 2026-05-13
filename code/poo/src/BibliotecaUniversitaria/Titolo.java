package BibliotecaUniversitaria;

public record Titolo(String titolo) {
    public Titolo {
        if (titolo == null || !titolo.matches("[^;]{5,50}")) throw new IllegalArgumentException("titolo non valido");
    }
}
