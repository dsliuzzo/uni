package ristrutturazioni;

public record Budget(int budget) {
    public Budget {
        if(budget < 10000) throw new IllegalArgumentException("budget insufficiente");
    }
}
