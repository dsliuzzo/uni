package treni;

import java.util.*;
import java.io.Serializable;

public record Velocita(int velocita) implements Serializable {
    public static final List<Integer> valoriAmmessi = List.of(60,80,120,180,250,300);
    public Velocita{
        if (!(valoriAmmessi.contains(velocita))) throw new IllegalArgumentException("velocità non ammessa");
    }
}
