package media_library;

public record Titolo(String titolo) implements Comparable<Titolo>{
    public Titolo(String titolo){
        if (titolo == null){
            throw new IllegalArgumentException("titolo non può essere vuoto");
        }

        String s = "^\\w{1,30}$";

        if (!titolo.matches(s)){
            throw new IllegalArgumentException("titolo non ammesso");
        }

        this.titolo = titolo;
    }

    @Override
    public String toString(){
        return titolo();
    }

    @Override
    public int compareTo(Titolo altro){
        return titolo().compareTo(altro.titolo());
    }
}
