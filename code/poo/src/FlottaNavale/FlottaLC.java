package FlottaNavale;

import java.util.*;

public class FlottaLC implements Flotta {
    private Node<Nave> head;
    private int size;

    private class Node<T> {
        private T info;
        private Node<T> successivo;

        public Node () {
            info = null;
            successivo = null;
        }
        public Node (T info) {
            this.info = info;
            this.successivo = null;
        }
        public Node(T info, Node<T> successivo) {
            this.info = info;
            this.successivo = successivo;
        }
    }

    public FlottaLC () {
        head = null;
        size = 0;
    }

    @Override
    public Iterator<Nave> iterator() { return new FlottaLCIterator(); }

    @Override
    public int size() {
        return size;
    }

    @Override
    public void aggiungiNave(Nave n) {

    }

    private class FlottaLCIterator implements Iterator<Nave> {
        private Node<Nave> curr;
        private Node<Nave> prec;
        private boolean removeOk;

        @Override
        public boolean hasNext() {
            if (curr == null) {
                return head != null;
            }
            return curr.successivo != null;
        }

        @Override
        public Nave next() {
            if (!hasNext()) { throw new NoSuchElementException("nessun elemento trovato"); }
            prec = curr;
            if (curr == null) {
                curr = head;
            } else {
                curr = curr.successivo;
            }
            removeOk = true;
            return curr.info;
        }

        @Override
        public void remove() {
            if (!removeOk) { throw new IllegalStateException("impossibile rimuovere l'elemento"); }
            removeOk = false;
            if (prec == null) {
                head = head.successivo;
            } else {
                prec.successivo = curr.successivo;
            }
            curr = prec;
            size--;
        }
    }
}
