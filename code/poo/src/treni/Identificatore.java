package treni;

import java.io.Serializable;

public record Identificatore(String identificatore) implements Serializable {
    public Identificatore(String identificatore) {
        String str = "^[A-Za-z]{3}\\d{8}$";
        if (!identificatore.matches(str)) throw new IllegalArgumentException("identificatore non disponibile " + identificatore);
        this.identificatore = identificatore;
    }
}
