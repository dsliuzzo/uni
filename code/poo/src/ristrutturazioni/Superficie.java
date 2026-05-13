package ristrutturazioni;

public record Superficie(int superficie) {
    public Superficie {
        if (superficie < 10 || superficie > 100) throw new IllegalArgumentException("superficie invalida");
    }
}
