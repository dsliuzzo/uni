package Prova_prontoSoccorso_04_06_2024;

import java.util.HashMap;
import java.util.LinkedList;
import java.util.Map;
import java.util.Random;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.locks.*;

public class ProntoSoccorsoLC extends ProntoSoccorso {
    private final int MIN_ROSSO = 20;
    private final int MAX_ROSSO = 40;
    private final int MIN_GIALLO = 20;
    private final int MAX_GIALLO = 20;
    private final int MIN_VERDE = 20;
    private final int MAX_VERDE = 20;

    private Random r = new Random();

    private Lock ps = new ReentrantLock();

    private Condition rosso = ps.newCondition();
    private LinkedList<Thread> codaR = new LinkedList<>();

    private Condition giallo = ps.newCondition();
    private LinkedList<Thread> codaG = new LinkedList<>();

    private Condition verde = ps.newCondition();
    private LinkedList<Thread> codaV = new LinkedList<>();

    // Mappa che associa a ogni id il numero di turni attesi, serve solo per i gialli
    private Map<Integer, Integer> idTurno = new HashMap<>();

    private Condition psVuoto = ps.newCondition(); // il medico attende cha arrivi un paziente
    private boolean pazienteDentro = false; // true se il paziente è dentro la sala

    private Condition attesaMedico = ps.newCondition();
    private boolean visitaPaziente = false;
    private Condition attesaPaziente = ps.newCondition();
    private boolean visitaMedico = false; // true se il medico sta visitando

    private int codiceCurr; // contiene il codice del paziente attuale

    @Override
    public void accediPaziente() throws InterruptedException {
        ps.lock();
        try {
            int cod = 1 + r.nextInt(3);
            int pazienteId = ((Paziente) Thread.currentThread()).id();
            if (cod == 1) { // ROSSO
                codaR.addLast(Thread.currentThread());
                while (!turnoR()) {
                    rosso.await();
                }
                codaR.removeFirst();
                codiceCurr = cod;
            } else if (cod == 2) { // GIALLO
                codaG.addLast(Thread.currentThread());
                idTurno.put(pazienteId, 0);
                while (!turnoG()) {
                    giallo.await();
                }
                codaG.removeFirst();
                idTurno.remove(pazienteId);
                codiceCurr = cod;
            } else { // VERDE
                codaV.addLast(Thread.currentThread());
                while (!turnoV()) {
                    verde.await();
                }
                codaV.removeFirst();
                codiceCurr = cod;
            }
            stampaCode();
            System.out.println("Paziente " + codiceCurr + " entrato");
            pazienteDentro = true;
            psVuoto.signal();

            while (!visitaPaziente) {
                attesaMedico.await();
            }
        } finally {
            ps.unlock();
        }
    }

    private boolean turnoR() {
        if (codaR.getFirst() != Thread.currentThread()) {
            return false;
        }
        for (int id : idTurno.values()) {
            if (id >= 5) {
                return false;
            }
        }
        return !pazienteDentro;
    }
    private boolean turnoG() {
        if (codaG.getFirst() != Thread.currentThread()) {
            return false;
        }
        return (codaR.isEmpty() || idTurno.get(((Paziente) Thread.currentThread()).id()) >= 5) && !pazienteDentro;
    }
    private boolean turnoV() {
        return codaR.isEmpty() && codaG.isEmpty() && codaV.getFirst() == Thread.currentThread() && !pazienteDentro;
    }

    @Override
    public void iniziaVisita() throws InterruptedException {
        ps.lock();
        try {
            while (!pazienteDentro || visitaPaziente) {
                psVuoto.await();
            }
            visitaPaziente = true;
            attesaMedico.signal();
        } finally {
            ps.unlock();
        }
    }
    private void attendi(int min, int max) throws InterruptedException {
        TimeUnit.MILLISECONDS.sleep(min + r.nextInt(max - min + 1));
    }

    @Override
    public void terminaVisita() throws InterruptedException {
        ps.lock();
        try {
            System.out.println("Paziente " + codiceCurr + " inizia la visita");
            if (codiceCurr == 1) {
                attendi(MIN_ROSSO, MAX_ROSSO);
            } else if (codiceCurr == 2) {
                attendi(MIN_GIALLO, MAX_GIALLO);
            } else {
                attendi(MIN_VERDE, MAX_VERDE);
            }
            visitaMedico = true;
            attesaPaziente.signal();
        } finally {
            ps.unlock();
        }
    }

    @Override
    public void esciPaziente() throws InterruptedException {
        ps.lock();
        try {
            int pazienteId = ((Paziente) Thread.currentThread()).id();
            while (!visitaMedico) {
                attesaPaziente.await();
            }

            // aggiornamento dei gialli
            for (int i: idTurno.keySet()) {
                idTurno.put(i, idTurno.get(i) + 1);
            }
            System.out.println("Paziente " + codiceCurr + " uscito");
            pazienteDentro = false;
            visitaPaziente = false;
            visitaMedico = false;
            psVuoto.signal();
            rosso.signalAll();
            giallo.signalAll();
            verde.signalAll();
        } finally {
            ps.unlock();
        }
    }

    private void stampaCode() {
        System.out.println("Rossi: " + codaR.size() + ", Gialli: " + codaG.size() + ", Verdi: " + codaV.size());
    }

    public static void main(String[] args) {
        ProntoSoccorsoLC ps = new ProntoSoccorsoLC();
        ps.test();
    }
}
