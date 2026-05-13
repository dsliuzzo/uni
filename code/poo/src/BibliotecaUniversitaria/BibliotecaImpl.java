package BibliotecaUniversitaria;

import java.util.*;

public class BibliotecaImpl implements Biblioteca{
    private List<Volume> volumi;

    public BibliotecaImpl() {
        this.volumi = new ArrayList<Volume>();
    }

    public List<Volume> volumi() {
        return volumi;
    }

    @Override
    public void aggiungiVolume(Volume v) {
        volumi.add(v);
    }

    @Override
    public Iterator<Volume> iterator() {
        return volumi.iterator();
    }

    @Override
    public int size() {
        return volumi.size();
    }
}
