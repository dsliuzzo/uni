package BibliotecaUniversitaria;

public record CodiceVolume(String cod) implements Comparable<CodiceVolume>{
    public CodiceVolume {
        if (cod == null || !cod.matches("UNI-\\d{5}")) throw new IllegalArgumentException("codice non valido");
    }

    @Override
    public int compareTo(CodiceVolume altro) {
        return this.cod.compareTo(altro.cod);
    }
}
