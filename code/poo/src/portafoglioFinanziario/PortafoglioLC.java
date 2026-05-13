package portafoglioFinanziario;

import java.util.*;

public class PortafoglioLC<T extends Asset> implements Portafoglio<T>{
    private class Node<E> {
        E info;
        Node<E> succ;

        public Node() {}
        public Node(E info) {
            this.info = info;
        }
        public Node(E info, Node<E> succ) {
            this.info = info;
            this.succ = succ;
        }
    }

    private Node<T> head;
    private int size;

    @Override
    public Iterator<T> iterator() {
        return new PortafoglioLCIterator();
    }

    @Override
    public int size() {
        return this.size;
    }

    @Override
    public void inserisci(T a) {
        if (this.contains(a)) return;
        Node<T> nodo = new Node<>(a);
        if (head == null) {
            head = nodo;
        } else {
            Node<T> curr = head;
            while(curr.succ != null && curr.succ.info.rischio().value() <= a.rischio().value()) {
                curr = curr.succ;
            }
            nodo.succ = curr.succ;
            curr.succ = nodo;
        }
        size++;
    }

    public boolean contains(Asset a) {
        for (Asset curr : this) {
            if (curr.equals(a)) {
                return true;
            }
        }
        return false;
    }

    private class PortafoglioLCIterator implements Iterator<T> {
        private Node<T> curr;
        private Node<T> prec;
        private boolean removeOk;

        @Override
        public boolean hasNext() {
            if (curr == null) {
                return head != null;
            }
            return curr.succ != null;
        }

        @Override
        public T next() {
            if (!hasNext()) throw new NoSuchElementException();
            prec = curr;
            if (curr == null) {
                curr = head;
            } else {
                curr = curr.succ;
            }
            removeOk = true;
            return curr.info;
        }

        @Override
        public void remove() {
            if (!removeOk) throw new IllegalStateException();
            if (curr == head) {
                head = head.succ;
            } else {
                prec.succ = curr.succ;
            }
            curr = prec;
            removeOk = false;
        }
    }
}
