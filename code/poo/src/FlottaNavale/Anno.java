package FlottaNavale;

public record Anno(int anno) {
    public Anno {
        if (anno < 1950) throw new IllegalArgumentException("anno non valido");
    }
}
