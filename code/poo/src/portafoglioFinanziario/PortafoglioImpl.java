package portafoglioFinanziario;

import java.util.*;

public class PortafoglioImpl<T extends Asset> implements Portafoglio<T>{
    private List<T> assets = new ArrayList<T>();

    @Override
    public Iterator<T> iterator() {
        return assets.iterator();
    }

    @Override
    public void inserisci(T asset) {
        if (assets.contains(asset)) return;
        assets.add(asset);
    }

    @Override
    public int size() {
        return assets.size();
    }
}
