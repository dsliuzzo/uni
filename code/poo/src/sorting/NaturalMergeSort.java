package sorting;

import java.io.*;
import java.util.*;

public class NaturalMergeSort {
    public static void fileCasuale(String nomeFile) {
        try (FileOutputStream file = new FileOutputStream(nomeFile)) {
            Random random = new Random();
            for(int i = 0; i < 1000; i++){
                file.write(random.nextInt(254));
            }
        } catch (IOException e) {
            System.out.println("File non trovato");
        }
    }

    public static void printFile(String nomeFile) {
        try {
            BufferedInputStream file = new BufferedInputStream(new FileInputStream(nomeFile));
            int current = file.read();
            while (current != -1) {
                System.out.print((int) current);
                System.out.print(" - ");
                current = file.read();
            }
            System.out.println();
            file.close();
        } catch (IOException e) {
            System.out.println("Errore di I/O nel print");
        }
    }

    public static void clearFile(String nomeFile) {
        try (FileOutputStream file = new FileOutputStream(nomeFile)) {
            file.write(0);
            System.out.println("File pulito");
        } catch (IOException e) {
            System.out.println("Errore di I/O nella pulizia del file");
        }
    }

    // prende interi da input e li scrive su support1 e support2 in ordine crescente alternato
    public static void _scritturaSupport(String nomeInput, String nomeSupport1, String nomeSupport2) {
        try {
            BufferedInputStream input = new BufferedInputStream(new FileInputStream(nomeInput));
            BufferedOutputStream support1 = new BufferedOutputStream(new FileOutputStream(nomeSupport1));
            BufferedOutputStream support2 = new BufferedOutputStream(new FileOutputStream(nomeSupport2));
            int current = input.read();
            int pnt1 = -1;
            int pnt2 = -1;
            boolean flip = true;
            while (current != -1) {
                if (flip) {
                    if (pnt1 == -1 || current >= pnt1) {
                        pnt1 = current;
                        support1.write(current);
                    } else {
                        pnt2 = current;
                        support2.write(current);
                        flip = false;
                    }
                } else {
                    if (current >= pnt2) {
                        pnt2 = current;
                        support2.write(current);
                    } else{
                        pnt1 = current;
                        support1.write(current);
                        flip = true;
                    }
                }
                current = input.read();
            }
            input.close();
            support1.flush();
            support2.flush();
            support1.close();
            support2.close();
        } catch (IOException e) {
            System.out.println("Errore di I/O nella scrittura dei supporti");
        }
    }
    
    public static void _merge(String nomeOutput, String nomeSupport1, String nomeSupport2 ) {
        try {
            BufferedOutputStream output = new BufferedOutputStream(new FileOutputStream(nomeOutput));
            BufferedInputStream support1 = new BufferedInputStream(new FileInputStream(nomeSupport1));
            BufferedInputStream support2 = new BufferedInputStream(new FileInputStream(nomeSupport2));
            int pnt1 = support1.read();
            int pnt2 = support2.read();
            int prec1 = -1;
            int prec2 = -1;
            boolean primo = true; // true se abbiamo nuove sequenze da leggere
            while (pnt1 != -1 && pnt2 != -1) {
                // verifichiamo se si sono concluse le sottosequenze
                boolean fineSequenza1 = !primo && (pnt1 < prec1);
                boolean fineSequenza2 = !primo && (pnt2 < prec2);

                // se entrambe le sequenze sono finite
                if (fineSequenza1 && fineSequenza2) {
                    // reset delle sequenze
                    prec1 = -1;
                    prec2 = -1;
                    primo = true;
                }

                // scriviamo da support1 se è finita la sequenza2 oppure se !fineSequenza1 e pnt1 è il minimo dei due pnt
                if (fineSequenza2 || (!fineSequenza1 && pnt1 < pnt2)) {
                    output.write(pnt1);
                    prec1 = pnt1;
                    pnt1 = support1.read();
                } else {
                    output.write(pnt2);
                    prec2 = pnt2;
                    pnt2 = support2.read();
                }

                // aggiorniamo primo perchè non è più il primo elemento delle sequenze
                primo = false;
            }

            // copia dei residui
            while (pnt1 != -1) {
                output.write(pnt1);
                pnt1 = support1.read();
            }
            while (pnt2 != -1) {
                output.write(pnt2);
                pnt2 = support2.read();
            }

            output.flush();
            output.close();
            support1.close();
            support2.close();
        } catch (IOException e) {
            System.out.println("Errore di I/O nel merge :" + e.getMessage());
        }
    }

    public static void naturalMergeSort(String nomeFile) {
        boolean ordinato = false;
        while (!ordinato) {
            _scritturaSupport(nomeFile, "support1.txt", "support2.txt");

            // verifica ordinamento
            try (BufferedInputStream verifica = new BufferedInputStream(new FileInputStream("support2.txt"))) {
                if (verifica.read() == -1) {
                    ordinato = true;
                }
            } catch (IOException e) {
                System.out.println("Errore di I/O nel verifica ordinamento");
            }

            if (!ordinato) {
                _merge(nomeFile, "support1.txt", "support2.txt");
            }
        }

        // --- NUOVA PARTE: PULIZIA FILE ---
        File s1 = new File("support1.txt");
        File s2 = new File("support2.txt");

        if (s1.delete()) {
            System.out.println("Support1 eliminato correttamente.");
        } else {
            System.out.println("Impossibile eliminare Support1 (forse è ancora aperto?).");
        }

        if (s2.delete()) {
            System.out.println("Support2 eliminato correttamente.");
        } else {
            System.out.println("Impossibile eliminare Support2.");
        }
        // ---------------------------------

        System.out.println("Ordinamento completato.");
    }

    public static void main(String[] args) {
        fileCasuale("test.txt");
        printFile("test.txt");
        naturalMergeSort("test.txt");
        System.out.println("----------------------------------------");
        System.out.println("ordered");
        printFile("test.txt");
    }
}