package Prova_esame_21_06_2023;

import java.util.Random;
import java.util.concurrent.Semaphore;
import java.util.concurrent.TimeUnit;
import java.util.regex.*;

public class PavimentoSemA extends Pavimento{
    private final int nRighe;
    private final int nColonne;

    // indice per scorrere sulla matrice
    private int indexA = 0;
    private int indexB = 0;

    private int[][] pavimento; // 0 = vuoto, 1 = colla passata, 2 = piastrella posata

    // semafori
    private Semaphore mutex = new Semaphore(1);

    private Semaphore[] semaforiA;
    private Semaphore[] semaforiB;

    // random
    Random random = new Random();



    public PavimentoSemA(int nRighe, int nColonne) {
        this.nRighe = nRighe;
        this.nColonne = nColonne;
        pavimento = new int[nRighe][nColonne];
        for (int i = 0; i < nRighe; i++) {
            for (int j = 0; j < nColonne; j++) {
                pavimento[i][j] = 0;
            }
        }

        semaforiA = new Semaphore[nRighe];
        semaforiB = new Semaphore[nColonne];
        for (int i = 0; i < nColonne; i++) {
            semaforiA[i] = new Semaphore(1);
            semaforiB[i] = new Semaphore(0);
        }
    }

    @Override
    public String inizia(int T) throws InterruptedException {
        String res;
        int index;
        mutex.acquire();
        if (T == 0) {
            System.out.println("Tipo " + T + " mette colla. IndexA: " + indexA);
            if (indexA >= nRighe * nColonne ) {
                System.out.println("FINITO " + indexA);
                mutex.release();
                return null;
            }
            index = indexA;
            indexA++;
            mutex.release();
            semaforiA[index % 4].acquire();
            attendi(4, 6);
            mutex.acquire();
            pavimento[index / 4][index % 4] = 1;
            res = "B_" + (index / 4) + "_" + (index % 4);
        } else {
            System.out.println("Tipo " + T + " mette piastrella. IndexB: " + indexB);
            if (indexB >= nRighe * nColonne ) {
                System.out.println("FINITO " + indexB);
                mutex.release();
                return null;
            }
            index = indexB;
            indexB++;
            mutex.release();
            semaforiB[index % 4].acquire();
            attendi(4, 6);
            mutex.acquire();
            pavimento[index / 4][index % 4] = 2;
            res = "B_" + (index / 4) + "_" + (index % 4);
        }
        mutex.release();
        return res;
    }

    @Override
    public void finisci(int T, String B) throws InterruptedException {
        int riga;
        int colonna;
        Pattern p = Pattern.compile("B_(\\d{1})_(\\d{1})");
        Matcher m = p.matcher(B);
        if (m.find()) {
            riga = Integer.parseInt(m.group(1));
            colonna = Integer.parseInt(m.group(2));
        } else {
            return;
        }
        mutex.acquire();
        System.out.printf("\nTipo " + T + " ha concluso sul blocco " + B + "\n");
        stampaPavimento();
        if (T == 0) {
            semaforiB[colonna].release();
        } else {
            semaforiA[colonna].release();
        }
        mutex.release();
    }

    private void attendi(int min, int max) throws InterruptedException {
        TimeUnit.MILLISECONDS.sleep(min + random.nextInt(max - min + 1));
    }

    private void stampaPavimento() {
        System.out.println("    0 1 2 3");
        System.out.printf("    -------");
        for (int i = 0; i < nRighe; i++) {
            System.out.printf("\n" + i + " | ");
            for (int j = 0; j < nColonne; j++) {
                System.out.print(pavimento[i][j] + " ");
            }
        }
    }

    public static void main(String[] args) {
        PavimentoSemA pavimento = new PavimentoSemA(8, 4);
        pavimento.test();
    }
}
