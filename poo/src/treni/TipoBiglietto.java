package treni;

import java.io.Serializable;

public enum TipoBiglietto implements Serializable {
    standard(1),
    premium(2),
    business(3),
    luxury(4);

    public final int valore;

    TipoBiglietto(int valore) { this.valore = valore;}

    public int valore() {return valore;}
}
