package treni;

import java.util.*;
import java.io.Serializable;

public class ConvoglioImpl implements Convoglio, Serializable{
    private List<Vagone> vagoni = new LinkedList<>();

    @Override
    public void add(Vagone v) {
        vagoni.add(v);
    }

    public Iterator<Vagone> iterator() {
        return vagoni.iterator();
    }
}
