package ospedale;

import ristrutturazioni.Superficie;

public abstract class RepartoAbstract implements Reparto{
    private CodiceReparto codiceReparto;
    private NomeReparto nomeReparto;
    private CapacitaPazienti capacitaPazienti;
    private int medici;
    private Superficie superficie;
    private Criticita criticita;

    public RepartoAbstract(CodiceReparto codiceReparto, NomeReparto nomeReparto, CapacitaPazienti capacitaPazienti, int medici, Superficie superficie, Criticita criticita) {
        if (medici < 1 || medici > 50) throw new IllegalArgumentException("numero medici non valido");
        this.codiceReparto = codiceReparto;
        this.nomeReparto = nomeReparto;
        this.capacitaPazienti = capacitaPazienti;
        this.medici = medici;
        this.superficie = superficie;
        this.criticita = criticita;
    }

    public CodiceReparto codice() {
        return codiceReparto;
    }
    public NomeReparto nome() {
        return nomeReparto;
    }
    public CapacitaPazienti capacita() {
        return capacitaPazienti;
    }
    public int medici() {
        return medici;
    }
    public Superficie superficie() {
        return superficie;
    }
    public Criticita criticita() {
        return criticita;
    }

    @Override
    public int compareTo(Reparto altro) {
        return this.codice().codiceReparto().compareTo(altro.codice().codiceReparto());
    }

    @Override
    public boolean equals(Object o) {
        if (o == null) return false;
        if (o == this) return true;
        if (!(o instanceof RepartoAbstract that)) return false;
        return codice().codiceReparto().equals(that.codice().codiceReparto());
    }

    @Override
    public String toString() {
        StringBuilder str = new StringBuilder("Reparto: ").append(codice());
        str.append("\n - nome: ").append(nome());
        str.append("\n - capacità: ").append(capacita());
        str.append("\n - medici: ").append(medici());
        str.append("\n - superficie: ").append(superficie());
        str.append("\n - criticità: ").append(criticita().stringa());
        return str.toString();
    }

    @Override
    public int hashCode() {
        return codice().codiceReparto().hashCode();
    }
}
