package FlottaNavale;

import java.util.*;

public class FlottaImpl implements Flotta{
    private List<Nave> navi = new ArrayList<>();

    public List<Nave> navi() {
        return navi;
    }

    @Override
    public void aggiungiNave(Nave v) {
        navi.add(v);
    }

    @Override
    public int size() {
        return navi.size();
    }

    @Override
    public Iterator<Nave> iterator() {
        return navi.iterator();
    }
}
