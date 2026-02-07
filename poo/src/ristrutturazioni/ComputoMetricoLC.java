package ristrutturazioni;

import java.util.*;

public class ComputoMetricoLC implements ComputoMetrico{
    private class Node<E>{
        private E info;
        private Node<E> next;

        Node(){
            this.info = null;
            this.next = null;
        }

        Node(E info, Node<E> next){
            this.info = info;
            this.next = next;
        }

        Node(E info){
            this.info = info;
            this.next = null;
        }
    }

    public Node<Voce> head;
    public Node<Voce> last;
    public int size;

    @Override
    public void aggiungiVoce(String descrizione, Quantita quantita, double prezzoUnitario, int operai) {
        Voce v = new Voce(descrizione, quantita, prezzoUnitario, operai);
        last.next = new Node<Voce>(v);
        size++;
    }

    public Iterator<Voce> iterator(){
        return new ComputoMetricoLCIterator();
    }


    public final class ComputoMetricoLCIterator implements Iterator<Voce> {
        private Node<Voce> prec;
        private Node<Voce> curr;
        private boolean removeOk;

        public ComputoMetricoLCIterator() {
            prec = null;
            curr = null;
            removeOk = false;
        }

        @Override
        public boolean hasNext() {
            if (curr == null) {
                return head != null;
            }
            return curr.next == null;
        }

        @Override
        public Voce next(){
            if (!hasNext()) throw new NoSuchElementException("finito");
            prec = curr;
            if (curr == null){
                curr = head;
            } else {
                curr = curr.next;
            }
            removeOk = true;
            return curr.info;
        }

        @Override
        public void remove(){
            if (!removeOk) throw new IllegalStateException("remove non ok");
            if (curr == head && curr == last){
                head = null;
                last = null;
            } else if (curr == head) {
                head = head.next;
            } else {
                prec.next = curr.next;
            }
            curr = prec;
            size--;
        }
    }
}
