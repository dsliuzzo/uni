package Prova_Ferryboat_06_06_2022;

import java.util.LinkedList;
import java.util.concurrent.locks.*;

public class FerryboatLC extends Ferryboat {
    private Lock l = new ReentrantLock();
    private Condition attesaEntrata = l.newCondition();
    private Condition attesaUscita = l.newCondition();
    private LinkedList<Thread> fifo = new LinkedList<>();
    private LinkedList<Thread> lifo = new LinkedList<>();
    private boolean possoEntrare 
}
