package ospedale;

import java.util.*;

public class OspedaleLC implements Ospedale{
    private Node<Reparto> head;
    private Node<Reparto> tail;
    private int size;

    public class Node<E> {
        private E info;
        private Node<E> successivo;

        public Node() {
            this.info = null;
            this.successivo = null;
        }
        public Node(E info) {
            this.info = info;
            this.successivo = null;
        }
        public Node(E info, Node<E> successivo) {
            this.info = info;
            this.successivo = successivo;
        }
    }

    public OspedaleLC () {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    @Override
    public void aggiungiReparto(Reparto r) {
        Node<Reparto> nodo = new Node<>(r);
        if (size == 0){
            head = nodo;
            tail = nodo;
        } else {
            tail.successivo = nodo;
            tail = nodo;
        }
        size++;
    }

    public Iterator<Reparto> iterator() {return new OspedaleLCIterator();}

    public class OspedaleLCIterator implements Iterator<Reparto> {
        public Node<Reparto> curr;
        public Node<Reparto> prec;
        public boolean removeOk;

        public OspedaleLCIterator() {
            curr = null;
            prec = null;
            removeOk = false;
        }

        @Override
        public boolean hasNext(){
            if (curr == null) {
                return head != null;
            }
            return curr.successivo != null;
        }

        @Override
        public Reparto next() {
            if (!hasNext()) throw new NoSuchElementException();
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
            if (!removeOk) throw new IllegalStateException();
            if (head == tail) {
                head = null;
                tail = null;
                prec = null;
            } else if (curr == tail) {
                prec.successivo = null;
                tail = prec;
            } else if (curr == head) {
                head = curr.successivo;
            } else {
                prec.successivo = curr.successivo;
            }
            curr = prec;
            size--;
        }
    }
}
