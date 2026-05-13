package treni;

import java.io.Serializable;

public record Passeggero(String id, String nome, TipoBiglietto tipo)implements Serializable  {
    public Passeggero (String id, String nome, TipoBiglietto tipo) {
        String str = "^[A-Za-z]{3}\\d{5}$";
        if (!id.matches(str)) throw new IllegalArgumentException("id passeggero non disponibile");
        str = "^\\w{4,25}$";
        if (!nome.matches(str)) throw new IllegalArgumentException("nome passeggero non disponibile");
        this.id = id;
        this.nome = nome;
        this.tipo = tipo;
    }
}
