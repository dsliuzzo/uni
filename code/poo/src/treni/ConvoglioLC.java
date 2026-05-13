package treni;

import java.util.*;
import java.io.Serializable;

public class ConvoglioLC implements Convoglio {
    public class Node<T> implements Serializable{
        private T info;
        private Node<T> successivo;

        public Node(){}
        public Node(T info) {
            this.info = info;
            this.successivo = null;
        }
        public Node(T info, Node<T> successivo) {
            this.info = info;
            this.successivo = successivo;
        }

    }

    private Node<Vagone> head;
    private Node<Vagone> tail;
    private int size;

    public ConvoglioLC(Node<Vagone> head, Node<Vagone> tail, int size) {
        this.head = head;
        this.tail = tail;
        this.size = size;
    }
    public ConvoglioLC(){}
    public ConvoglioLC(Vagone info) {
        var temp = new ConvoglioLC();
        temp.add(info);
        this.head = temp.head;
        this.tail = temp.tail;
        this.size = temp.size;
    }

    @Override
    public void add(Vagone v) {
        Node<Vagone> nuovo = new Node<>(v);
        if (head == null && tail == null) {
            head = nuovo;
            tail = head;
        } else  {
            tail.successivo = nuovo;
            tail = tail.successivo;
        }
        size++;
    }

    @Override
    public Iterator<Vagone> iterator() { return new ConvoglioLCIterator();}

    public final class ConvoglioLCIterator implements Iterator<Vagone>, Serializable {
        private Node<Vagone> curr;
        private Node<Vagone> prev;
        private boolean removeOk;

        @Override
        public boolean hasNext() {
            if (curr == null) return head != null;
            return (curr.successivo != null);
        }

        @Override
        public Vagone next() {
            if (!hasNext()) throw new IndexOutOfBoundsException();
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
            if (curr == head && curr == tail) {
                head = null;
                tail = null;
                prev = null;
            } else if (curr == tail) {
                prev.successivo = null;
            } else if (curr == head){
                head = head.successivo;
            } else {
                prev.successivo = curr.successivo;
            }
            curr = prev;
            removeOk = false;
            size--;
        }

    }
}
