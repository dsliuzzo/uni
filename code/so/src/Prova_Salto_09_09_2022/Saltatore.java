package Prova_Salto_09_09_2022;

import java.util.Random;

public class Saltatore extends Thread implements Comparable<Saltatore> {
    private Salto s;
    private int numero;
    private float altezza;
    private boolean entrato = false;
    private Random r = new Random();

    public Saltatore(Salto s, int numero) {
        this.s = s;
        this.numero = numero;
    }

    public void entra() {entrato = true;}

    public float altezza() {return altezza;}

    public int numero() {return numero;}

    public void setAltezza(float altezza) {this.altezza = altezza;}

    @Override
    public void run() {
        try {
            s.inizio(this);
            System.out.println("Saltatore " + numero + " arrivato in posizione " + s.arrivo(this));
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

    }

    @Override
    public int compareTo(Saltatore o) {
        return Float.compare(this.altezza(), o.altezza());
    }
}

