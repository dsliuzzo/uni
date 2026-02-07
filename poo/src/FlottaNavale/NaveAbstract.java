package FlottaNavale;

public abstract class NaveAbstract implements Nave{
    private CodiceNave codice;
    private NomeNave nome;
    private Anno annoVaro;
    private double stazza;
    private double capacitaCarico;
    private Stato stato;

    public NaveAbstract (CodiceNave codice, NomeNave nome, Anno annoVaro, double stazza, double capacitaCarico, Stato stato) {
        if (stazza < 0) throw new IllegalArgumentException("stazza non valida");
        if (capacitaCarico < 0) throw new IllegalArgumentException("capacità di carico non valida");
        this.codice = codice;
        this.nome = nome;
        this.annoVaro = annoVaro;
        this.stazza = stazza;
        this.capacitaCarico = capacitaCarico;
        this.stato = stato;
    }
    public NaveAbstract (CodiceNave codice, NomeNave nome, Anno annoVaro, double stazza, double capacitaCarico, String stato) {
        Stato s = Stato.valueOf(stato);
        this(codice, nome, annoVaro, stazza, capacitaCarico, s);
    }

    // getter
    @Override
    public CodiceNave codice() { return codice; }
    @Override
    public NomeNave nome() { return nome; }
    @Override
    public Anno annoVaro() { return annoVaro; }
    @Override
    public double stazza() { return stazza; }
    @Override
    public double capacitaCarico() { return capacitaCarico; }
    @Override
    public Stato stato() { return stato; }

    @Override
    public String toString() {
        StringBuilder str = new StringBuilder("Nave: ").append(codice());
        str.append("\n - nome: ").append(nome());
        str.append("\n - anno varo: ").append(annoVaro());
        str.append("\n - stazza lorda: ").append(stazza()).append(" GT");
        str.append("\n - capacità di carico: ").append(capacitaCarico()).append(" t");
        str.append("\n - stato: ").append(stato().toString());
        return str.toString();
    }

    @Override
    public boolean equals(Object o) {
        if (o == null) return false;
        if (o == this) return true;
        if (!(o instanceof NaveAbstract that)) return false;
        return that.codice() == this.codice();
    }

    @Override
    public int hashCode() {
        return this.codice().hashCode();
    }

    @Override
    public int compareTo(Nave altro) {
        return this.codice().compareTo(altro.codice());
    }
}
