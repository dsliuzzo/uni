package media_library;

import java.util.*;

public class ScaffaleConcreto<S extends Support> implements Scaffale<S>{
    private final List<S> scaffaleList = new LinkedList<>();
    private final int dimensioneScaffale;
    private final int dimensioneMensola;
    private final Genere<S> genere;

    public ScaffaleConcreto (int dimensioneScaffale, int dimensioneMensola, Genere genere) {
        if (dimensioneScaffale < 0 || dimensioneMensola < 0) throw new IllegalArgumentException("dimensioni negative");
        this.dimensioneScaffale = dimensioneScaffale;
        this.dimensioneMensola = dimensioneMensola;
        this.genere = genere;
    }

    @Override
    public void add(S item) {
        if (this.scaffaleList.size() + 1 > dimensioneScaffale) {
            throw new RuntimeException("spazio insufficiente");
        }
        if (item.getGenere().equals(genere)) {
            throw new IllegalArgumentException("genere diverso");
        }
        scaffaleList.add(item);
        Collections.sort(scaffaleList);
    }

    @Override
    public boolean remove(S item) {
        return scaffaleList.remove(item);
    }

    @Override
    public List<S> mensola(int index) {
        int start = index * dimensioneMensola;
        int end = start + dimensioneMensola;

        if (scaffaleList.size() / dimensioneMensola < index || index < 0) {
            throw new IllegalArgumentException("index non valido");
        }

        List<S> ret = new LinkedList<>();
        int currentIndex = 0;

        for (S current : this.scaffaleList) {
            if (current == null || currentIndex > end ) return ret;
            if ( currentIndex >= start ) {
                ret.add(current);
            }
            currentIndex++;
        }
        return ret;
    }

    @Override
    public Iterator<S> iterator() {
        return scaffaleList.iterator();
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null) return false;
        if (!(o instanceof ScaffaleConcreto<?> that)) return false;
        return dimensioneMensola == that.dimensioneMensola && dimensioneScaffale == that.dimensioneScaffale && genere == that.genere && scaffaleList == that.scaffaleList;
    }

    @Override
    public int hashCode() {
        return Objects.hash(dimensioneMensola, dimensioneScaffale, genere, scaffaleList);
    }

    @Override
    public String toString() {
        StringBuilder s = new StringBuilder ("Scaffale di ");
        s.append(genere).append(" grande [").append(dimensioneScaffale).append("*").append(dimensioneScaffale).append("]");
        int currentIndex = 0;
        for (S current : this.scaffaleList) {
            if (currentIndex % dimensioneMensola == 0) {
                s.append("\n");
            }
            s.append(current).append("; ");
            currentIndex++;
        }
        return s.toString();
    }

}
