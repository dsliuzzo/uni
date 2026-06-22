package Barbiere_addormentato;

import java.util.LinkedList;

public class SalaMN extends Sala {
    protected static int NUM_POSTI = 5;

    protected LinkedList<Cliente> clienti = new LinkedList<Cliente>();
    protected boolean poltronaLibera = false;

    public SalaMN (int numSedie) {
        super(numSedie);
    }

    @Override
    public synchronized void tagliaCapelli() throws InterruptedException {
        while (numSedie == sedieLibere) {
            wait();
        }
        poltronaLibera = true;
        notifyAll();
    }

    @Override
    public synchronized boolean attendiTaglio() throws InterruptedException {
        Cliente c = (Cliente) Thread.currentThread();
        if (sedieLibere == 0) {
            System.out.println("Sala piena");
            return false;
        }
        clienti.addLast(c);
        sedieLibere--;
        notifyAll();
        System.out.println("Cliente " + c.getID() + " in attesa");
        while (!mioTurno(c.getID()) ) {
            wait();
        }
        System.out.println("Cliente " + c.getID() + " sta tagliando i capelli");
        clienti.removeFirst();
        poltronaLibera = false;
        sedieLibere++;
        return true;
    }
    private boolean mioTurno(int i) {
        return clienti.getFirst().getID() == i && poltronaLibera;
    }

    static void main (String[] args) { new SalaMN(NUM_POSTI).test(30); }
}
