package Biblioteca;

import java.util.Objects;

public class Autore {
    private String nome;
    private String cognome;
    private String nazionalita;

    // costruttore
    public Autore(String nome, String cognome, String nazionalita) {
        this.nome = nome;
        this.cognome = cognome;
        this.nazionalita = nazionalita;
    }
    public Autore() {}

    // getter
    public String getNome() {return nome;}
    public String getCognome() {return cognome;}
    public String getNazionalita() {return nazionalita;}

    // varie
    @Override
    public String toString() {return nome + " " + cognome;}
    @Override
    public boolean equals(Object o) {
        if (o == null) {return false;}
        if (this == o) {return true;}
        if (!(o instanceof Autore that)) return false;
        return this.getNome().equals(that.getNome()) && this.getCognome().equals(that.getCognome()) && this.getNazionalita().equals(that.getNazionalita());
    }
    @Override
    public int hashCode() {
        return Objects.hash(nome, cognome, nazionalita);
    }

}
