package portafoglioFinanziario;

public record ISIN(String value) implements Comparable<ISIN>{
    public ISIN {
        if (!value.matches("[A-Za-z]{2}\\w{8}\\d")) throw new IllegalArgumentException();
    }

    @Override
    public int compareTo(ISIN altro) {
        return this.value().compareTo(altro.value());
    }
}