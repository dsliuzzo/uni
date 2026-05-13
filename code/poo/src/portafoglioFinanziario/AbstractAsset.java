package portafoglioFinanziario;

import java.util.*;

public abstract class AbstractAsset implements Asset{
    private final ISIN isin;
    private final double valore;
    private final Rischio rischio;

    public AbstractAsset(ISIN isin, double valore, Rischio rischio) {
        this.isin = isin;
        this.valore = valore;
        this.rischio = rischio;
    }

    // getter
    @Override
    public ISIN isin() { return this.isin; }
    @Override
    public double valore() { return this.valore; }
    @Override
    public Rischio rischio() { return this.rischio; }

    @Override
    public String toString() {
        StringBuilder str = new StringBuilder("Asset: ").append(isin());
        str.append(String.format("\n - valore: %.2f €", valore()));
        str.append("\n - rischio: ").append(rischio().toString());
        return str.toString();
    }

    @Override
    public int hashCode() {
        return isin().hashCode();
    }

    @Override
    public boolean equals(Object o) {
        if (o == null) return false;
        if (o == this) return true;
        if (!(o instanceof Asset that)) return false;
        return this.isin().equals(that.isin());
    }
}
