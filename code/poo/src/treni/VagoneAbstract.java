package treni;

public abstract class VagoneAbstract implements Vagone{
    private Identificatore identificatore;
    private Lunghezza lunghezza;
    private Velocita velocitaMax;
    private Massa massa;
    private Massa massaFrenata;

    // costruttore
    public VagoneAbstract(Identificatore identificatore, Lunghezza lunghezza, Velocita velocitaMax, Massa massa, Massa massaFrenata) {
        if (massaFrenata.massa() < 0 || massaFrenata.massa() > massa.massa()) throw new IllegalArgumentException("massa frenata non disponibile");
        this.identificatore = identificatore;
        this.lunghezza = lunghezza;
        this.velocitaMax = velocitaMax;
        this.massa = massa;
        this.massaFrenata = massaFrenata;
    }

    // getter
    @Override
    public Identificatore identificatore() {
        return identificatore;
    }
    @Override
    public Lunghezza lunghezza() {
        return lunghezza;
    }
    @Override
    public Velocita velocitaMax() {
        return velocitaMax;
    }
    @Override
    public Massa massa() {
        return massa;
    }
    @Override
    public Massa massaFrenata() {
        return massaFrenata;
    }

    // equals
    @Override
    public boolean equals(Object o) {
        if (o == null) return false;
        if (!(o instanceof VagoneAbstract that)) return false;
        return this.identificatore().identificatore().equals(that.identificatore().identificatore());
    }

    // hash code
    @Override
    public int hashCode() {
        return this.identificatore().identificatore().hashCode();
    }

    // to string
    @Override
    public String toString() {
        StringBuilder str = new StringBuilder("Vagone ").append(identificatore());
        str.append("\n - lunghezza: ").append(lunghezza()).append(" m");
        str.append("\n - velocità massima: ").append(velocitaMax()).append(" km/h");
        str.append("\n - peso: ").append(massa()).append(" tonnellate");
        str.append("\n - massa frenata: ").append(massaFrenata()).append(" tonnellate");
        return str.toString();
    }
}
