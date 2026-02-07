package BibliotecaUniversitaria;

import java.util.*;

public class BibliotecaLC implements Biblioteca{
    private static class Node<T> {
        private T info;
        private Node<T> successivo;

        private Node() {
            this.info = null;
            this.successivo = null;
        }
        private Node(T info) {
            this.info = info;
            this.successivo = null;
        }
        private Node(T info, Node<T> successivo) {
            this.info = info;
            this.successivo = successivo;
        }
    }

    private Node<Volume> head;
    private int size;

    @Override
    public int size() {return size;}

    public BibliotecaLC () {
        head = null;
        size = 0;
    }

    @Override
    public void aggiungiVolume( Volume v ) {
        Node<Volume> nodo = new Node<>(v);
        if (head == null) {
            head = nodo;
        } else {
            Node<Volume> curr = head;
            while (curr.successivo != null) {
                curr = curr.successivo;
            }
            curr.successivo = nodo;
        }
        size++;
    }

    public Iterator<Volume> iterator() {return new BibliotecaLCIterator();}

    private class BibliotecaLCIterator implements Iterator<Volume> {
        private Node<Volume> curr;
        private Node<Volume> prec;
        private boolean removeOk;

        @Override
        public boolean hasNext() {
            if (curr == null) {
                return head != null;
            }
            return curr.successivo != null;
        }

        @Override
        public Volume next() {
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
            if (curr == null) {
                head = head.successivo;
            } else {
                prec.successivo = curr.successivo;
            }
            curr = prec;
            removeOk = false;
            size--;
        }
    }

}
