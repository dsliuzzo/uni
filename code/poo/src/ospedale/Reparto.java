package ospedale;

import ristrutturazioni.Superficie;

public interface Reparto extends Comparable<Reparto>{
    CodiceReparto codice();
    NomeReparto nome();
    CapacitaPazienti capacita();
    int medici();
    Superficie superficie();
    Criticita criticita();
}
