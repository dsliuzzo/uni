package BibliotecaUniversitaria;

public class Tesi extends VolumeAbstract{
    public Tesi (CodiceVolume cod, Titolo titolo, Autore autore, Anno anno, int pagine, Genere genere) {
        if (pagine < 80) throw new IllegalArgumentException("pagine non sufficienti per una tesi");
        super(cod, titolo, autore, anno, pagine, genere);
    }
}