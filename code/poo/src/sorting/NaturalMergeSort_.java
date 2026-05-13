package nms;

import java.io.*;
import java.util.Random;
import java.util.*;

public class NaturalMergeSort_ {
    private final static int numeri = 10;
    private static int maxIterazioni = 0;

     static void main() {
        for (int i = 0; i < 100; i++) {
            int tempIterazioni = 0;
            fileCasuale("test.txt");
            //stampaFile("test.txt");
            while (!scritturaSupport("test.txt", "support1.txt", "support2.txt")) {
                merge("test.txt", "support1.txt", "support2.txt");
                tempIterazioni++;
            }
            //stampaFile("test.txt");
            if (tempIterazioni > maxIterazioni) {
                maxIterazioni = tempIterazioni;
            }

        }
        stampaFile("test.txt");
        System.out.println("Expected: " + ((Math.log(numeri)/Math.log(2))));
        System.out.println("Reale: " + maxIterazioni);
//        int tempIterazioni = 0;
//        scritturaCasoPeggiore("test.txt");
//        stampaFile("test.txt");
//        while (!scritturaSupport("test.txt", "support1.txt", "support2.txt")) {
//            merge("test.txt", "support1.txt", "support2.txt");
//            tempIterazioni++;
//        }
//        stampaFile("test.txt");
//        System.out.println("Expected: " + ((Math.log(numeri)/Math.log(2))));
//        System.out.println("Reale: " + tempIterazioni);
    }

    public static void fileCasuale(String nomeFile) {
        try (PrintWriter pw = new PrintWriter(new BufferedWriter(new FileWriter(nomeFile)))) {
            Random random = new Random();
            for(int i = 0; i < numeri; i++){
                int range = 1 << 4; //shift sx
                pw.println(random.nextInt(range)); //mettiamo il doppio del bound cosi abbiamo valori compresi tra -256, 256
            }
        } catch (IOException e) {
            System.out.println("File non trovato");
        }
    }

    public static void scritturaCasoPeggiore(String nomeFile) {
        try (PrintWriter pw = new PrintWriter(new BufferedWriter(new FileWriter(nomeFile)))) {
            for(int i = 1028; i > 0; i--){//shift sx
                pw.println(i); //mettiamo il doppio del bound cosi abbiamo valori compresi tra -256, 256
            }
        } catch (IOException e) {
            System.out.println("File non trovato");
        }
    }

    public static void stampaFile(String nomeFile){
        try(BufferedReader br = new BufferedReader(new FileReader(nomeFile))){
            String riga;
            while ((riga = br.readLine()) != null){
                System.out.print(riga + "  ");
            }
        } catch(IOException e){
            System.out.println("file non trovato");
        }
        System.out.println();
    }

    public static boolean isEmpty(String nomeFile) {
        try (FileReader reader = new FileReader(nomeFile)) {
            return reader.read() == -1;
        } catch (Exception e) {
            System.out.println(e.getMessage());
        }
        throw new IllegalStateException();
    }

    private static boolean scritturaSupport(String nomeFile, String sup1, String sup2){
        int prev;
        int curr;
        String riga;
        boolean w1 = true; // se stiamo scrivendo sul pw1 è true
        try(
                BufferedReader br = new BufferedReader(new FileReader(nomeFile));
                PrintWriter pw1 = new PrintWriter(new BufferedWriter(new FileWriter(sup1)));
                PrintWriter pw2 = new PrintWriter(new BufferedWriter(new FileWriter(sup2)))
        ){
            prev = Integer.parseInt(br.readLine());
            pw1.println(prev);
            while((riga = br.readLine()) != null){
                curr = Integer.parseInt(riga);
                if (w1){
                    if(prev > curr){
                        w1 = false;
                        pw2.println(curr);
                    }else{
                        pw1.println(curr);
                    }
                }else{
                    if(prev > curr){
                        w1 = true;
                        pw1.println(curr);
                    }else{
                        pw2.println(curr);
                    }
                }
                prev = curr;
            }
        }catch(Exception e){
            System.out.println(e.getMessage());
        }
        return isEmpty(sup2);
    }

    private static void merge(String nomeFile, String sup1, String sup2){
        int prev1 = Integer.MIN_VALUE;
        int prev2 = Integer.MIN_VALUE;
        int curr1;
        int curr2;
        boolean first = true;

        try(
                BufferedReader br1 = new BufferedReader(new FileReader(sup1));
                BufferedReader br2 = new BufferedReader(new FileReader(sup2));
                PrintWriter pw = new PrintWriter(new BufferedWriter(new FileWriter(nomeFile)))
        ){
            String riga1 = br1.readLine() ;
            String riga2 = br2.readLine();
            while (riga1 != null && riga2 != null){
                curr1 = Integer.parseInt(riga1);
                curr2 = Integer.parseInt(riga2);
                // verifichiamo se si sono concluse le sotto sequenze
                boolean fineSequenza1 = !first && (curr1 < prev1);
                boolean fineSequenza2 = !first && (curr2 < prev2);

                // se entrambe le sequenze sono finite
                if(fineSequenza1 && fineSequenza2){
                    first = true;
                    prev1 = Integer.MIN_VALUE;
                    prev2 = Integer.MIN_VALUE;
                }

                // scriviamo da supp1 se seq2 è finita oppure (seq1 non è finita e curr1 < curr2)
                if (fineSequenza2 || (!fineSequenza1 && (curr1 < curr2))) {
                    pw.println(curr1);
                    prev1 = curr1;
                    riga1 = br1.readLine();
                } else {
                    pw.println(curr2);
                    prev2 = curr2;
                    riga2 = br2.readLine();
                }
            }
            // copia dei residui
            if(riga1 == null){
                do {
                    pw.println(riga2);
                } while ((riga2 = br2.readLine()) != null);
            } else {
                do {
                    pw.println(riga1);
                } while ((riga1 = br1.readLine()) != null);
            }
        } catch(Exception e){
            System.out.println(e.getMessage());
        }
    }





}
