package FlottaNavale;

public record NomeNave(String nome) {
    public NomeNave {
        if (!nome.matches("\\w{3,30}")) throw new IllegalArgumentException("nome nave non valido");
    }
}
