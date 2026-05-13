package BibliotecaUniversitaria;

import java.time.Year;

public record Anno(int anno) {
    public Anno {
        if (anno < 1500 || anno > Year.now().getValue()) throw new IllegalArgumentException("anno non valido");
    }
}
