package palestra;

public enum Intensita {
    BASSA(1),
    MEDIA_BASSA(2),
    MEDIA(3),
    ALTA(4),
    ALTISSIMA(5);

    private final int valore;

    Intensita (int valore) { this.valore = valore; }

    public int valore() { return valore; }
}
