package palestra;

public record Orario(giornoSettimana giorno, int ora, int minuti) {
    public Orario(giornoSettimana giorno, int ora, int minuti) {
        if (ora < 0 || ora > 23) throw new IllegalArgumentException("ora non disponibile");
        if (minuti < 0 || minuti > 45 || minuti % 15 != 0) throw new IllegalArgumentException("minuti non disponibili");
        this.giorno = giorno;
        this.ora = ora;
        this.minuti = minuti;
    }
}
