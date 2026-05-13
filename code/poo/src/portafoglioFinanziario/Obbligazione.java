package portafoglioFinanziario;

public class Obbligazione extends AbstractAsset{
    private final int durataMesi;

    public int durataMesi() { return durataMesi; }

    public Obbligazione (ISIN isin, double valore, Rischio rischio, int durataMesi) {
        if (durataMesi > 120 && rischio.value() < 3) throw new IllegalArgumentException();
        this.durataMesi = durataMesi;
        super(isin, valore, rischio);
    }

    @Override
    public String toString() {
        return super.toString() + String.format("\n - durata: %d mesi", durataMesi());
    }
}
