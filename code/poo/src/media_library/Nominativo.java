package media_library;

public record Nominativo (String nome, String cognome) implements Comparable<Nominativo>{
    public Nominativo(String nome, String cognome){
        if (nome == null || cognome == null){
            throw new IllegalArgumentException("nome o cognome nulli");
        }
        String s = "^\\w{1,30}$";

        if(!nome.matches(s) || !cognome.matches(s)){
            throw new IllegalArgumentException("nome o cognome non disponibili");
        }

        this.nome = nome;
        this.cognome = cognome;
    }

    @Override
    public String toString(){
        return nome() + " " + cognome();
    }

    @Override
    public int compareTo(Nominativo altro){
        int r = nome().compareTo(altro.nome());
        if (r != 0){
            return r;
        }
        r = cognome().compareTo(altro.cognome());
        if (r != 0){
            return r;
        }
        return 0;
    }
}