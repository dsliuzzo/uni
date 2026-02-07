package palestra;

import java.io.PrintWriter;
import java.util.*;

public class main {
    public static void main(String[] args) {
        System.out.println("=== Demo package palestra (implementazione: PalestraLC) ===\n");

        // 1) Creazione palestra con implementazione Lista Collegata
        Palestra palestra = new PalestraLC();

        // 2) Creazione di alcuni corsi (Cardio e Forza) con parametri differenti
        //    Notare vincoli: 
        //    - CodiceCorso: formato AA-999X
        //    - Nome: 5..20 caratteri alfanumerici/underscore
        //    - Capacità: 5..25
        //    - Istruttori: 1..5 (>=2 se intensità ALTISSIMA)
        //    - Durata: 30..120 (>=45 per Cardio)
        //    - Orario: minuti multipli di 15

        Corso c1 = new Cardio(
                new CodiceCorso("CR-101A"),
                "CardioA",
                20,
                2,
                new Orario(giornoSettimana.LUN, 9, 0),
                60,
                Intensita.MEDIA,
                new ArrayList<>(Arrays.asList(Attrezzatura.Cyclette, Attrezzatura.TapisRoulant))
        );

        Corso c2 = new Forza(
                new CodiceCorso("FZ-202B"),
                "Forza_B",
                15,
                2,
                new Orario(giornoSettimana.MAR, 18, 30),
                75,
                Intensita.ALTA,
                new ArrayList<>(Arrays.asList(gruppoMuscolare.petto, gruppoMuscolare.braccia)),
                false
        );

        Corso c3 = new Cardio(
                new CodiceCorso("CR-303C"),
                "Cardio_C",
                20,
                2,
                new Orario(giornoSettimana.MER, 7, 45),
                45,
                Intensita.MEDIA_BASSA,
                new ArrayList<>(Collections.singletonList(Attrezzatura.Ellittica))
        );

        Corso c4 = new Forza(
                new CodiceCorso("FZ-404D"),
                "Forza_DD",
                15,
                2,
                new Orario(giornoSettimana.GIO, 12, 15),
                60,
                Intensita.ALTISSIMA, // intensità 5 -> almeno 2 istruttori
                new ArrayList<>(Arrays.asList(gruppoMuscolare.gambe, gruppoMuscolare.addome)),
                true
        );

        Corso c5 = new Forza(
                new CodiceCorso("FZ-505E"),
                "Forza_EE",
                20,
                1,
                new Orario(giornoSettimana.VEN, 16, 0),
                90,
                Intensita.MEDIA,
                new ArrayList<>(Arrays.asList(gruppoMuscolare.spalle)),
                false
        );

        Corso c6 = new Cardio(
                new CodiceCorso("CR-606F"),
                "Cardio_F",
                15,
                2,
                new Orario(giornoSettimana.SAB, 10, 15),
                75,
                Intensita.ALTA,
                new ArrayList<>(Arrays.asList(Attrezzatura.TapisRoulant))
        );

        Corso c7 = new Cardio(
                new CodiceCorso("CR-707G"),
                "Cardio_G",
                10,
                1,
                new Orario(giornoSettimana.DOM, 17, 45),
                60,
                Intensita.BASSA,
                new ArrayList<>(Arrays.asList(Attrezzatura.Ellittica))
        );

        // 3) Aggiungo i corsi alla palestra
        palestra.aggiungiCorso(c1);
        palestra.aggiungiCorso(c2);
        palestra.aggiungiCorso(c3);
        palestra.aggiungiCorso(c4);
        palestra.aggiungiCorso(c5);
        palestra.aggiungiCorso(c6);
        palestra.aggiungiCorso(c7);

        // 4) Stampa elenco corsi (usa PalestraAbstract.toString())
        System.out.println("-- Elenco corsi iniziale --");
        System.out.println(palestra);

        // 5) Test funzionalità principali dell'interfaccia Palestra
        System.out.println("Numero tipi di corsi: " + palestra.numTipiCorsi());
        System.out.println("Corsi attivi tutti i giorni della settimana? " + palestra.corsiAttiviSettimana());
        System.out.println("Capacità totale: " + palestra.capTotale());
        System.out.println("Rapporto istruttori/partecipanti: " + String.format(Locale.ITALY, "%.3f", palestra.rapportoIstrPartecipanti()));
        System.out.println("Regola intensità/istruttori rispettata? " + palestra.intensitaIstruttori());
        System.out.println("Standard qualità rispettato? " + palestra.verificaStandardQualita());

        // 6) Accesso tramite indice (getCorso)
        System.out.println("\n-- getCorso(2) --");
        try {
            Corso picked = palestra.getCorso(2);
            System.out.println(picked);
        } catch (IndexOutOfBoundsException ex) {
            System.out.println("Indice non valido: " + ex.getMessage());
        }

        // 7) Rimozione tramite metodo rimuoviCorso (usa l'iteratore interno di PalestraLC)
        System.out.println("\n-- Rimuovo un corso (c3) e ristampo le statistiche --");
        boolean removed = palestra.rimuoviCorso(c3);
        System.out.println("Rimosso c3? " + removed);
        System.out.println("Nuova capacità totale: " + palestra.capTotale());
        System.out.println("Nuovo rapporto istr./part.: " + String.format(Locale.ITALY, "%.3f", palestra.rapportoIstrPartecipanti()));

        // 8) Rimozione con iterator.remove() durante l'iterazione (prima occorrenza di un corso di Forza)
        System.out.println("\n-- Rimozione con iterator.remove() del primo corso di Forza --");
        Iterator<Corso> it = palestra.iterator();
        while (it.hasNext()) {
            Corso c = it.next();
            if (c.tipo().equals("Forza")) {
                it.remove();
                break;
            }
        }
        System.out.println("Elenco corsi dopo remove() su iteratore:\n" + palestra);

        // 9) Re-inserisco un corso per ripristinare la varietà
        palestra.aggiungiCorso(c3);
        System.out.println("Reinserito c3. Tipi di corsi ora: " + palestra.numTipiCorsi());

        // 10) Esempio di getCorso con indice errato per mostrare l'eccezione
        System.out.println("\n-- getCorso(100) (atteso errore) --");
        try {
            palestra.getCorso(100);
        } catch (IndexOutOfBoundsException ex) {
            System.out.println("Errore previsto: " + ex.getMessage());
        }

        // 11) Uso di PalestraUtil per creare un piccolo report su System.out
        System.out.println("\n-- Report tramite PalestraUtil --");
        PalestraUtil.stampaReportAttivita(Collections.singletonList(palestra), new PrintWriter(System.out, true));

        // 12) Dimostrazione ordinamento (Comparable su CodiceCorso) – copia in lista e sort
        System.out.println("-- Corsi ordinati per codice --");
        List<Corso> copia = new ArrayList<>();
        for (Corso c : palestra) copia.add(c);
        Collections.sort(copia);
        for (Corso c : copia) {
            System.out.println(c.codiceCorso().cod() + " -> " + c.nome());
        }

        System.out.println("\n=== Fine demo palestra ===");
    }
}
