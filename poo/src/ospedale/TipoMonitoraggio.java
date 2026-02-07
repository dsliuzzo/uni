package ospedale;

public enum TipoMonitoraggio {
    CONTINUO("continuo"),
    INTERMITTENTE("intermittente"),
    BASE("base");

    private String stringa;

    public String stringa() {
        return this.stringa;
    }

    TipoMonitoraggio(String stringa) {
        this.stringa = stringa;
    }
}
