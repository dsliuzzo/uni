package media_library;

public record Anno(int anno) implements Comparable<Anno>{
    public Anno(int anno){
        if (anno<1453 || anno>2100){
            throw new IllegalArgumentException("anno deve essere compreso tra 1453 e 2100");
        }
        this.anno = anno;

    }

    @Override
    public String toString(){
        return "" + anno;
    }

    @Override
    public int compareTo(Anno altro){
        return anno() - altro.anno();
    }
}
