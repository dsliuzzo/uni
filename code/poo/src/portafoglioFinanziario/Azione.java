package portafoglioFinanziario;

public class Azione extends AbstractAsset{
    private final String settore;

    public String settore() { return this.settore; }

    public Azione(ISIN isin, double valore, Rischio rischio, String settore) {
        if (rischio.value() < 4) throw new IllegalArgumentException();
        this.settore = settore;
        super(isin, valore, rischio);
    }

    @Override
    public String toString() {
        return super.toString() + "\n - settore: " + settore();
    }
}
