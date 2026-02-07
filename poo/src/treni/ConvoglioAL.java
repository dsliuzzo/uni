package treni;

import java.util.*;

public class ConvoglioAL implements Convoglio{
    private Vagone[] vagoni;
    private int indexTop;

    public ConvoglioAL(int capacity) {
        if (capacity < 0) throw new IllegalArgumentException("indice < 0");
        vagoni = new Vagone[capacity];
        indexTop = 0;
    }
    public ConvoglioAL() {
        this(10);
    }

    private boolean isFull() {
        return indexTop >= vagoni.length;
    }

    @Override
    public void add(Vagone v) {
        if (isFull()) {
            Vagone[] n = new Vagone[vagoni.length * 2];
            System.arraycopy(vagoni, 0, n,0, vagoni.length);
            vagoni = n;
        }
        vagoni[indexTop] = v;
        indexTop++;
    }

    @Override
    public Iterator<Vagone> iterator() {
        return new ConvoglioALIterator();
    }

    private class ConvoglioALIterator implements Iterator<Vagone> {
        private int index;
        private boolean removeOk;

        public ConvoglioALIterator() {
            index = -1;
            removeOk = false;
        }

        @Override
        public boolean hasNext() {
            return index + 1 < indexTop;
        }

        @Override
        public Vagone next() {
            if (!hasNext()) throw new NoSuchElementException();
            index++;
            removeOk = true;
            return vagoni[index];
        }

        /*
        @Override
        public void remove() {
            if (!removeOk) throw new IllegalStateException();
            removeOk = false;
            for (int i = index; i+1 < indexTop; i++) {
                vagoni[i] = vagoni[i+1];
            }
            index--;
            vagoni[indexTop--] = null;
        }
        */

        @Override
        public void remove() {
            if (!removeOk) throw new IllegalStateException();
            removeOk = false;
            System.arraycopy(vagoni, index+1, vagoni, index, indexTop-index-1);
            index--;
            vagoni[indexTop--] = null;
        }
    }
}
