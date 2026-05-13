package FlottaNavale;

public interface Nave extends Comparable<Nave>{
    CodiceNave codice();
    NomeNave nome();
    Anno annoVaro();
    double stazza();
    double capacitaCarico();
    Stato stato();
}
