package BibliotecaUniversitaria;

public abstract class VolumeAbstract implements Volume{
    private final CodiceVolume cod;
    private final Titolo titolo;
    private final Autore autore;
    private final Anno anno;
    private final int pagine;
    private final Genere genere;

    public VolumeAbstract(CodiceVolume cod, Titolo titolo, Autore autore, Anno anno, int pagine, Genere genere) {
        if (pagine < 10 || pagine > 2000) throw new IllegalArgumentException("numero pagine non valido");
        this.cod = cod;
        this.titolo = titolo;
        this.autore = autore;
        this.anno = anno;
        this.pagine = pagine;
        this.genere = genere;
    }

    @Override
    public CodiceVolume codice() { return cod; }
    @Override
    public Titolo titolo() { return titolo; }
    @Override
    public Autore autore() { return autore; }
    @Override
    public Anno annoPubblicazione() { return anno; }
    @Override
    public int pagine() { return pagine; }
    @Override
    public Genere genere() { return genere; }

    @Override
    public boolean equals(Object o) {
        if (o == null) return false;
        if (o == this) return true;
        if (!(o instanceof VolumeAbstract that)) return false;
        return this.codice().equals(that.codice());
    }

    @Override
    public String toString() {
        StringBuilder str = new StringBuilder("Volume: ").append(codice());
        str.append("\n - titolo: ").append(titolo());
        str.append("\n - autore: ").append(autore());
        str.append("\n - anno di pubblicazione: ").append(annoPubblicazione());
        str.append("\n - numero di pagine: ").append(pagine());
        str.append("\n - genere: ").append(genere());
        return str.toString();
    }

    @Override
    public int hashCode() {
        return codice().hashCode();
    }
}
