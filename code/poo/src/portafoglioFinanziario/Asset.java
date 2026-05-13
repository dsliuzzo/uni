package portafoglioFinanziario;

public interface Asset extends Comparable<Asset>{
    ISIN isin();
    double valore();
    Rischio rischio();

    @Override
    default int compareTo(Asset altro) {
        return isin().compareTo(altro.isin());
    }
}
