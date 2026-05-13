package palestra;

import java.util.*;

public class PalestraLC extends PalestraAbstract{
    public static class Node<E> {
        private E info;
        private Node<E> successivo;

        public Node() {
            info = null;
            successivo = null;
        }
        public Node(E e, Node<E> successivo) {
            info = e;
            this.successivo = successivo;
        }
    }

    private Node<Corso> head;
    private Node<Corso> tail;
    private int size;

    public PalestraLC() {
        head = null;
        tail = null;
        size = 0;
    }

    public PalestraLC(Node<Corso> head, Node<Corso> tail, int size) {
        if (head == null || tail == null || size <= 0) {
            throw new IllegalArgumentException();
        }
        this.head = head;
        this.tail = tail;
        this.size = size;
    }

    @Override
    public void aggiungiCorso(Corso c) {
        Node<Corso> nodo = new Node<>(c, null);
        if (head == null) {
            head = nodo;
            tail = nodo;
        } else {
            tail.successivo = nodo;
            tail = tail.successivo;
        }
        size++;
    }

    @Override
    public Iterator<Corso> iterator() {return new PalestraLCIterator();}

    public final class PalestraLCIterator implements Iterator<Corso>{
        private Node<Corso> curr;
        private Node<Corso> prev;
        private boolean removeOk;

        public PalestraLCIterator () {
            curr = null;
            prev = null;
            removeOk = false;
        }

        @Override
        public boolean hasNext() {
            if (curr == null) {
                return head != null;
            }
            return curr.successivo != null;
        }

        @Override
        public Corso next() {
            if (!hasNext()) throw new NoSuchElementException();
            prev = curr;
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
            if (!removeOk) throw new IllegalStateException();
            removeOk = false;
            if (curr == head && curr == tail){
                head = null;
                tail = null;
                prev = null;
            } else if (curr == head) {
                head = head.successivo;
            } else if(curr == tail) {
                prev.successivo = null;
                tail = prev;
            } else {
                prev.successivo = curr.successivo;
            }
            curr = prev;
            size--;
        }
    }
}
