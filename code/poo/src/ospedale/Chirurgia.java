package ospedale;

import ristrutturazioni.Superficie;

public class Chirurgia extends RepartoAbstract{
    private int saleOperatorie;

    public int saleOperatorie() {
        return saleOperatorie;
    }

    public Chirurgia (CodiceReparto codiceReparto, NomeReparto nomeReparto, CapacitaPazienti capacitaPazienti, int medici, Superficie superficie, Criticita criticita, int saleOperatorie) {
        if (saleOperatorie < 1 || saleOperatorie > 100) throw new IllegalArgumentException("sale operatorie non valide");
        this.saleOperatorie = saleOperatorie;
        super(codiceReparto, nomeReparto, capacitaPazienti, medici, superficie, criticita);
    }
}
