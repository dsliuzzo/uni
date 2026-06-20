package Barbiere_addormentato;

import java.util.concurrent.TimeUnit;

public abstract class Sala {
    protected final int numSedie;
    protected int sedieLibere;

    public Sala(int sedie) {
        numSedie = sedie;
        sedieLibere = sedie;
    }

    // metodi utilizzati dai thread
    public abstract void tagliaCapelli() throws InterruptedException; // usato dal barbiere
    public abstract boolean attendiTaglio() throws InterruptedException; // usato dai clienit

    // metodi di test
    public void test(int numClienti) {
        try {
            // creiamo il barbiere e i clienti a cui passiamo come parametro la sala
            Barbiere b = new Barbiere(this);
            b.setDaemon(true); // se tutti i clienti hanno tagliato i capelli il barbiere può terminare la sua esecuzione
            b.start();
            Cliente[] c = new Cliente[numClienti];
            for (int i = 0; i < numClienti; i++) {
                c[i] = new Cliente(this, i);
                c[i].start();
                TimeUnit.SECONDS.sleep(2);
            }
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }
}
