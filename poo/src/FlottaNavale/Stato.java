package FlottaNavale;

public enum Stato {
    IN_SERVIZIO("in servizio", true),
    IN_MANUTENZIONE("in manutenzione", false),
    DISMESSA("dismessa", false);

    private final String valore;
    private final boolean operativo;
    public boolean operativo() {return operativo;}
    public String toString() {return valore;}
    Stato (String valore, boolean operativo) {
        this.valore = valore;
        this.operativo = operativo;
    }
}
