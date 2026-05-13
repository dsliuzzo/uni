package treni;

import java.io.Serializable;

public record Lunghezza(double lunghezza) implements Serializable {
    public Lunghezza(double lunghezza) {
        if (lunghezza < 5 || lunghezza > 35) throw new IllegalArgumentException("lunghezza non disponibile");
        this.lunghezza = lunghezza;
    }
}
