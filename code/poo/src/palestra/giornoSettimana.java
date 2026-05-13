package palestra;

public enum giornoSettimana {
    LUN(0),
    MAR(1),
    MER(2),
    GIO(3),
    VEN(4),
    SAB(5),
    DOM(6);

    private final int valore;

    giornoSettimana (int valore) { this.valore = valore; }

    public int valore() { return valore;}
}
