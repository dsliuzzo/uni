package palestra;

import java.util.*;

public abstract class PalestraAbstract implements Palestra{
    @Override
    public String toString() {
        StringBuilder s = new StringBuilder();
        for (Corso c : this) {
            s.append(c).append("\n");
        }
        return s.toString();
    }
}
