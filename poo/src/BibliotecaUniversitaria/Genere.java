package BibliotecaUniversitaria;

public enum Genere {
    GIALLO("giallo"),
    FANTASY("fantasy"),
    STORICO("storico"),
    POLITICO("politico"),
    ROMANZO("romanzo"),
    SCIENTIFICO("scientifico");

    private final String nome;
    public String toString(){
        return nome;
    }
    Genere(String nome){
        this.nome = nome;
    }
}
