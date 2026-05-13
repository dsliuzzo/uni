package ristrutturazioni;

import java.util.*;

public abstract class AbstractRistrutturazione implements Ristrutturazione{
    private final CodiceIdentificativo codiceIdentificativo;
    private final NomeProgetto nomeProgetto;
    private final CapacitaOperai capacitaOperai;
    private final Superficie superficie;
    private final Budget budget;
    private final LivelloComplessita complessita;
    private final ComputoMetrico computoMetrico;

    public AbstractRistrutturazione( CodiceIdentificativo codiceIdentificativo, NomeProgetto nomeProgetto, CapacitaOperai capacitaOperai, Superficie superficie, Budget budget, LivelloComplessita complessita, ComputoMetrico computoMetrico){
        this.codiceIdentificativo = codiceIdentificativo;
        this.nomeProgetto = nomeProgetto;
        this.capacitaOperai = capacitaOperai;
        this.superficie = superficie;
        this.budget = budget;
        this.complessita = complessita;
        this.computoMetrico = computoMetrico;
    }

    @Override
    public boolean equals(Object other){
        if (other == null) return false;
        if (other == this) return true;
        if (!(other instanceof AbstractRistrutturazione that)) return false;
        return that.codice().equals(this.codice());
    }

    @Override
    public CodiceIdentificativo codice() {
        return codiceIdentificativo;
    }
    @Override
    public NomeProgetto nome() {
        return nomeProgetto;
    }
    @Override
    public CapacitaOperai capacitaOperai() {
        return capacitaOperai;
    }
    @Override
    public Superficie superficie() {
        return superficie;
    }
    @Override
    public Budget budget() {
        return budget;
    }
    @Override
    public LivelloComplessita complessita() {
        return complessita;
    }
    @Override
    public ComputoMetrico computoMetrico() {
        return computoMetrico;
    }


    @Override
    public int hashCode() {
        return codice().hashCode();
    }

    @Override
    public String toString() {
        StringBuilder str = new StringBuilder("Ristrutturazione: ").append(codice());
        str.append("\n - nome: ").append(nome());
        str.append("\n - capacità operai: ").append(capacitaOperai());
        str.append("\n - superficie: ").append(superficie());
        str.append("\n - budget: ").append(budget());
        str.append("\n - complessità: ").append(complessita());
        str.append("\n - computo metrico: ").append(computoMetrico());
        return str.toString();
    }

    @Override
    public int compareTo(Ristrutturazione r) {
        return this.codice().compareTo(r.codice());
    }
}
