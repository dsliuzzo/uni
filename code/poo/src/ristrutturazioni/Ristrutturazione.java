package ristrutturazioni;

import java.util.*;

public interface Ristrutturazione extends Comparable<Ristrutturazione> {
    CodiceIdentificativo codice();
    NomeProgetto nome();
    CapacitaOperai capacitaOperai();
    Superficie superficie();
    Budget budget();
    LivelloComplessita complessita();
    ComputoMetrico computoMetrico();

    default boolean verifica() {
         int totOperai = 0;
         for (Voce v : this.computoMetrico()) {
             totOperai += v.numOperai();
         }
         return totOperai < capacitaOperai().cap() && computoMetrico().calcolaCostoTotale() < budget().budget();
    }
}
