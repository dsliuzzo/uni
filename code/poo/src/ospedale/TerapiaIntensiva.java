package ospedale;

import ristrutturazioni.Superficie;

public class TerapiaIntensiva extends RepartoAbstract{
    private TipoMonitoraggio tipoMonitoraggio;

    public TipoMonitoraggio tipoMonitoraggio() {
        return tipoMonitoraggio;
    }

    public TerapiaIntensiva (CodiceReparto codiceReparto, NomeReparto nomeReparto, CapacitaPazienti capacitaPazienti, int medici, Superficie superficie, Criticita criticita, TipoMonitoraggio tipoMonitoraggio) {
        if (medici < 15) throw new IllegalArgumentException("numero medici non sufficiente per terapia intensiva");
        this.tipoMonitoraggio = tipoMonitoraggio;
        super(codiceReparto, nomeReparto, capacitaPazienti, medici, superficie, criticita);
    }
}
