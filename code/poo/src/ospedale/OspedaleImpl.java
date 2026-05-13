package ospedale;

import java.util.*;

public class OspedaleImpl implements Ospedale{
    private List<Reparto> reparti = new ArrayList<>();

    public List<Reparto> reparti() {return reparti;}

    public OspedaleImpl (ArrayList<Reparto> reparti) {
        this.reparti = reparti;
    }
    public OspedaleImpl(){}

    public Iterator<Reparto> iterator() {
        return reparti().iterator();
    }

    @Override
    public void aggiungiReparto(Reparto r) {
        reparti.add(r);
    }
}
