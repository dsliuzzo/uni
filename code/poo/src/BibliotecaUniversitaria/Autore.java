package BibliotecaUniversitaria;

public record Autore(String nome, String cognome) {
    public Autore {
        if (nome == null || cognome == null || !nome.matches("\\w{2,30}") || !cognome.matches("\\w{2,30}")) throw new IllegalArgumentException("nome o cognome autore non valido");
    }

    @Override
    public String toString() {
        return nome() + " " + cognome();
    }
}
