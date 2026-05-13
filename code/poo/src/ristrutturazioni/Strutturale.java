package ristrutturazioni;

public class Strutturale extends AbstractRistrutturazione{
    private final String codiceProgetto;
    private final String CILA;

    public Strutturale (CodiceIdentificativo codiceIdentificativo, NomeProgetto nomeProgetto, CapacitaOperai capacitaOperai, Superficie superficie, Budget budget, LivelloComplessita complessita, ComputoMetrico computoMetrico, String codiceProgetto, String CILA){
        super(codiceIdentificativo, nomeProgetto, capacitaOperai, superficie, budget, complessita, computoMetrico);
        if(codiceProgetto.matches("^\\w{4,24}$") && (CILA.matches("^\\w{4,24}$"))){
            this.codiceProgetto = codiceProgetto;
            this.CILA = CILA;
        } else{
            throw new IllegalArgumentException("parametri non validi");
        }
    }



    public String codiceProgetto() {
        return codiceProgetto;
    }
    public String CILA() {
        return CILA;
    }

    @Override
    public String toString() {
        StringBuilder str = new StringBuilder(super.toString());
        str.append("\n - codice progetto: ").append(codiceProgetto());
        str.append("\n - CILA: ").append(CILA());
        return str.toString();
    }
}
