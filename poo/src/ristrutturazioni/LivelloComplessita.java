package ristrutturazioni;

public enum LivelloComplessita {
    BASSO(1),
    MEDIO_BASSO (2),
    MEDIO (3),
    ALTO (4),
    MOLTO_ALTO (5);

    private final int valore;
    LivelloComplessita(int valore){
        this.valore = valore;
    }
    public int valore() { return valore;}


}
