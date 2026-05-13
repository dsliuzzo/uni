package FlottaNavale;

import java.util.*;

public record CodiceNave(String codice) implements Comparable<CodiceNave>{
    public CodiceNave {
        if (!codice.matches("[A-Za-z]{3}-\\d{4}")) throw new IllegalArgumentException("codice nave non valido");
    }

    @Override
    public int compareTo(CodiceNave altro) {
        return codice().compareTo(altro.codice());
    }
}
