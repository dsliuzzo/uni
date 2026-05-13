package palestra;

public record CodiceCorso(String cod) implements Comparable<CodiceCorso>{
    public CodiceCorso(String cod) {
        if (cod == null) throw new IllegalArgumentException("codice vuoto");
        String str = "^\\w{2}-\\d{3}\\w{1}$";
        if (!cod.matches(str)) throw new IllegalArgumentException("codice errato");
        this.cod = cod;
    }

    public int compareTo(CodiceCorso altro) {
        return this.cod().compareTo(altro.cod());
    }
}
