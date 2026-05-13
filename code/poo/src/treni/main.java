package treni;

import java.io.*;
import java.util.*;

public class main {
    /* public static void main(String[] args) {
        System.out.println("== Test package treni (ConvoglioLC) ==\n");

        // Costruisco alcuni oggetti di base riutilizzabili
        Identificatore idM1 = new Identificatore("MOT12345678");
        Identificatore idV1 = new Identificatore("VAG12345678");
        Identificatore idV2 = new Identificatore("VAG87654321");

        Lunghezza lM = new Lunghezza(20);
        Lunghezza lV = new Lunghezza(24);

        Velocita vMaxAlta = new Velocita(180);
        Velocita vMaxMedia = new Velocita(120);

        Massa massaMotrice = new Massa(120);
        Massa massaVagone = new Massa(80);
        Massa massaFrenataM = new Massa(100);
        Massa massaFrenataV = new Massa(60);
        Massa trazioneBuona = new Massa(300); // sufficiente a trainare 1-2 vagoni leggeri
        Massa trazioneDebole = new Massa(90); // insufficiente

        // Passeggeri di esempio per i vagoni passeggeri
        ArrayList<Passeggero> listaP1 = new ArrayList<>(Arrays.asList(
                new Passeggero("PAS12345", "MarcoRossi", TipoBiglietto.standard),
                new Passeggero("PAS54321", "LuigiBianchi", TipoBiglietto.premium)
        ));
        ArrayList<Passeggero> listaP2 = new ArrayList<>(List.of(
                new Passeggero("PAS22222", "AnnaVerdi", TipoBiglietto.business)
        ));

        // Creo una motrice e due vagoni passeggeri
        Motrice motriceBuona = new Motrice(idM1, lM, vMaxAlta, massaMotrice, massaFrenataM, trazioneBuona);
        VagonePasseggeri vp1 = new VagonePasseggeri(idV1, lV, vMaxMedia, massaVagone, massaFrenataV, 80, listaP1);
        VagonePasseggeri vp2 = new VagonePasseggeri(idV2, lV, vMaxMedia, massaVagone, massaFrenataV, 60, listaP2);

        // 1) Creo un convoglio valido (motrice in testa + 1 vagone)
        ConvoglioLC convoglio1 = new ConvoglioLC();
        convoglio1.add(motriceBuona);
        convoglio1.add(vp1);

        System.out.println("Convoglio 1 creato. Itero e stampo i vagoni:");
        for (Vagone v : convoglio1) {
            System.out.println("- " + v.identificatore().identificatore());
        }

        // Test getVagone
        System.out.println("\ngetVagone(0): " + convoglio1.getVagone(0).identificatore().identificatore());
        System.out.println("getVagone(1): " + convoglio1.getVagone(1).identificatore().identificatore());

        // Test calcolaRappFrenante
        double rapp1 = convoglio1.calcolaRappFrenante();
        System.out.println("\nRapporto frenante convoglio1: " + String.format("%.3f", rapp1));

        // Test controllo
        System.out.println("Controllo convoglio1 (atteso true): " + convoglio1.controllo());

        // Test remove (rimuovo il vagone passeggeri)
        boolean removed = convoglio1.remove(vp1);
        System.out.println("\nRimozione vp1: " + removed);
        System.out.println("Contenuto dopo rimozione:");
        for (Vagone v : convoglio1) {
            System.out.println("- " + v.identificatore().identificatore());
        }

        // 2) Creo un convoglio non valido per testare controllo=false (trazione insufficiente)
        Motrice motriceDebole = new Motrice(new Identificatore("MOT00000001"), lM, vMaxAlta, massaMotrice, massaFrenataM, trazioneDebole);
        ConvoglioLC convoglio2 = new ConvoglioLC();
        convoglio2.add(motriceDebole);
        convoglio2.add(vp2);
        System.out.println("\nControllo convoglio2 (atteso false): " + convoglio2.controllo());

        // 3) Stampo le schede treni usando TrenoUtil
        System.out.println("\n== Stampa schede con TrenoUtil ==");
        List<Convoglio> lista = new ArrayList<>();
        lista.add(convoglio1);
        lista.add(convoglio2);
        TrenoUtil.StampaSchedeTreni(lista, new PrintWriter(System.out));

        // Test rimozione della motrice da convoglio2 tramite remove su elemento che esiste
        boolean removedM = convoglio2.remove(motriceDebole);
        System.out.println("\nRimozione motrice da convoglio2: " + removedM);
        System.out.println("Contenuto convoglio2 dopo rimozione:");
        for (Vagone v : convoglio2) {
            System.out.println("- " + v.identificatore().identificatore());
        }

        System.out.println("\n== Fine test ==");
    } */


     static void main(String[] args) {

         System.out.println("== Test package treni (ConvoglioLC) ==\n");

         // Costruisco alcuni oggetti di base riutilizzabili
         Identificatore idM1 = new Identificatore("ASD12345678");
         Identificatore idV1 = new Identificatore("VAG12345678");
         Identificatore idV2 = new Identificatore("VAG87654321");

         Lunghezza lM = new Lunghezza(20);
         Lunghezza lV = new Lunghezza(24);

         Velocita vMaxAlta = new Velocita(180);
         Velocita vMaxMedia = new Velocita(120);

         Massa massaMotrice = new Massa(120);
         Massa massaVagone = new Massa(80);
         Massa massaFrenataM = new Massa(100);
         Massa massaFrenataV = new Massa(60);
         Massa trazioneBuona = new Massa(300); // sufficiente a trainare 1-2 vagoni leggeri
         Massa trazioneDebole = new Massa(90); // insufficiente

         // Passeggeri di esempio per i vagoni passeggeri
         ArrayList<Passeggero> listaP1 = new ArrayList<>(Arrays.asList(
                 new Passeggero("PAS12345", "MarcoRosi", TipoBiglietto.standard),
                 new Passeggero("PAS54321", "LuigiBianchi", TipoBiglietto.premium)
         ));
         ArrayList<Passeggero> listaP2 = new ArrayList<>(List.of(
                 new Passeggero("PAS22222", "AnnaVerdi", TipoBiglietto.business)
         ));

         // Creo una motrice e due vagoni passeggeri
         Motrice motriceBuona = new Motrice(idM1, lM, vMaxAlta, massaMotrice, massaFrenataM, trazioneBuona);
         VagonePasseggeri vp1 = new VagonePasseggeri(idV1, lV, vMaxMedia, massaVagone, massaFrenataV, 80, listaP1);
         VagonePasseggeri vp2 = new VagonePasseggeri(idV2, lV, vMaxMedia, massaVagone, massaFrenataV, 60, listaP2);

         // 1) Creo un convoglio valido (motrice in testa + 1 vagone)
         ConvoglioLC convoglio1 = new ConvoglioLC();
         convoglio1.add(motriceBuona);
         convoglio1.add(vp1);

         File file = new File("convoglio.txt");
         TrenoUtil.salvaConvoglio(convoglio1, "convoglio.txt");
         Convoglio c = TrenoUtil.caricaConvoglio("convoglio.txt");
         for (Vagone v : c) {
             System.out.println(v);
         }
     }
}
