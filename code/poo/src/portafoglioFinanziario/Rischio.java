package portafoglioFinanziario;

public enum Rischio {
    MOLTO_BASSO(1),
    BASSO(2),
    MEDIO_BASSO(3),
    MEDIO(4),
    MEDIO_ALTO(5),
    ALTO(6),
    ALTISSIMO(7);

    private final int value;
    public int value() { return value; }
    Rischio(int value) { this.value = value; }
    @Override
    public String toString() {
        return name().toLowerCase().replace("_", " ");
    }
}
