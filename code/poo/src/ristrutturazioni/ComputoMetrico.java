package ristrutturazioni;

import java.util.*;

public interface ComputoMetrico extends Iterable<Voce> {
    void aggiungiVoce(String descrizione, Quantita quantita, double prezzoUnitario, int operai);

    default boolean rimuoviVoce(String descrizione){
        Iterator<Voce> it = this.iterator();
        while(it.hasNext()){
            Voce v = it.next();
            if (v.descrizione().equals(descrizione)){
                it.remove();
                return true;
            }
        }
        return false;
    }

    default double getPrezzo(int index) {
        int i = 0;
        for (Voce v : this) {
            if ( i == index){
                return v.prezzoUnitario();
            }
            i++;
        }
        return -1.0;
    }

    default int getOperai(int index){
        int i = 0;
        for (Voce v : this){
            if (i == index) {
                return v.numOperai();
            }
            i++;
        }
        return -1;
    }

    default double calcolaCostoTotale(){
        double costoTot = 0;
        for (Voce v : this) {
            costoTot += v.prezzoUnitario() * v.quantita().quantita();
        }
        return costoTot;
    }
}
