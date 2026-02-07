package ospedale;

public enum Criticita {
    BASSO(1, "basso"),
    MEDIOBASSO(2, "medio basso"),
    MEDIO(3, "medio"),
    ALTO(4, "alto"),
    ALTISSIMO(5, "altissimo");

    private final int valore;
    private final String stringa;
    public int valore() {return this.valore;}
    public String stringa() {return this.stringa;}

    Criticita (int valore, String stringa) {
        this.valore = valore;
        this.stringa = stringa;
    }

}
