package FlottaNavale;

public class PortaContainer extends NaveAbstract {
    public PortaContainer(CodiceNave codice, NomeNave nome, Anno annoVaro, double stazza, double capacitaCarico, Stato stato) {
        if (capacitaCarico < 5000) throw new IllegalArgumentException("capacità di carico non sufficiente per porta container");
        super(codice, nome, annoVaro, stazza, capacitaCarico, stato);
    }
    public PortaContainer(CodiceNave codice, NomeNave nome, Anno annoVaro, double stazza, double capacitaCarico, String stato) {
        if (capacitaCarico < 5000) throw new IllegalArgumentException("capacità di carico non sufficiente per porta container");
        super(codice, nome, annoVaro, stazza, capacitaCarico, stato);
    }
}
