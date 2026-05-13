package treni;

import java.io.Serializable;

public interface Vagone extends Comparable<Vagone>, Serializable {
    Identificatore identificatore();
    Lunghezza lunghezza();
    Massa massa();
    Massa massaFrenata();
    Velocita velocitaMax();

    default int compareTo(Vagone altro) {
        return this.identificatore().identificatore().compareTo(altro.identificatore().identificatore());
    }
}
