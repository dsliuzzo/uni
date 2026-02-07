package treni;

import java.io.Serializable;

public record Massa(int massa) implements Serializable {
    public Massa(int massa) {
        if (massa < 1 || massa > 325) throw new IllegalArgumentException("massa non disponibile");
        this.massa = massa;
    }
}
