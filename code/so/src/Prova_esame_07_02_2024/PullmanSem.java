package Prova_esame_07_02_2024;

import java.util.Random;
import java.util.concurrent.Semaphore;
import java.util.concurrent.TimeUnit;

public class PullmanSem extends Pullman{
    private int[] statoP = new int[nPasseggeri];
    private int postiPrimaOcc = 0;
    private int postiSecondaOcc = 0;
    private Random tempo = new Random();


    private Semaphore mutex = new Semaphore(1);
    private Semaphore coda = new Semaphore(1,true);
    private Semaphore controllore = new Semaphore(0);
    private Semaphore attesaPasseggero = new Semaphore(0);
    private Semaphore attesaAutista = new Semaphore(0);


    public PullmanSem(int nPosti, int nPasseggeri) {
        super(nPosti, nPasseggeri);
        for (int i = 0; i < nPasseggeri; i++) {
            statoP[i] = -3;
        }
    }

    @Override
    public void sali() throws InterruptedException {
        coda.acquire();
        mutex.acquire();
        int id = ((Passeggero) Thread.currentThread()).id();
        String classe = ((Passeggero) Thread.currentThread()).tipo();
        if(classe.equals("classe_1")){
            statoP[id] = -1;
        }
        else{
            statoP[id] = -2;
        }
        mutex.release();
        controllore.release();
        attesaPasseggero.acquire();
    }

    @Override
    public void controllaBiglietto() throws InterruptedException {
        controllore.acquire();

        mutex.acquire();
        for (int i = 0; i < nPasseggeri; i++) {
            if(statoP[i] == -1){
                statoP[i] = postiPrimaOcc;
                System.out.println("Passeggero: " + i + " collocato al posto in prima classe " + postiPrimaOcc);
                postiPrimaOcc++;
                break;
            }
            else if(statoP[i] == -2){
                statoP[i] = postiSecondaOcc + (nPosti / 2);
                System.out.println("Passeggero: " + i + " collocato al posto in seconda classe " + (postiSecondaOcc + (nPosti / 2)));
                postiSecondaOcc++;
                break;
            }
        }
        mutex.release();

        attesaPasseggero.release();
        attesaAutista.acquire();

    }

    @Override
    public void prendiPosto() throws InterruptedException {
        TimeUnit.MILLISECONDS.sleep( 3 + tempo.nextInt(6));

        attesaAutista.release();
    }

    @Override
    public boolean prossimoPasseggero() throws InterruptedException {
        mutex.acquire();
        postiOccupati++;
        if(postiOccupati == (POSTI_PRIMA + POSTI_SECONDA )){
            mutex.release();
            return false;
        }
        mutex.release();
        coda.release();
        return true;
    }

    public static void main(String[] args){
        Pullman pullman = new PullmanSem(20, 15);
        pullman.test(POSTI_PRIMA, POSTI_SECONDA);
    }

    // Variante: Concettualmente, ecco come realizzare questa implementazione:
    //
    //## Struttura
    //
    //1. **Array di Pullman**: Creare un array di K pullman invece di un singolo pullman
    //2. **Array di Autisti**: Creare K autisti, ognuno associato al proprio pullman
    //3. **Scelta casuale**: Ogni passeggero genera un numero random tra 0 e K-1 per scegliere il pullman
    //
    //## Modifiche principali
    //
    //**Classe principale (Main)**:
    //- Inizializzare K pullman
    //- Inizializzare K autisti, passando a ciascuno il proprio pullman
    //- Avviare tutti gli autisti
    //- I passeggeri ricevono l'array di pullman e scelgono casualmente
    //
    //**Classe Passeggero**:
    //- Riceve l'array di pullman nel costruttore
    //- Nel `run()`, fa `int scelta = random.nextInt(K)`
    //- Chiama `pullman[scelta].saleSulPullman()` o metodo equivalente
    //
    //**Classe Pullman**:
    //- Rimane sostanzialmente uguale, gestisce i propri passeggeri
    //
    //**Classe Autista**:
    //- Rimane uguale, ogni autista lavora solo sul proprio pullman
    //
    //## Sincronizzazione
    //
    //Ogni pullman ha la propria sincronizzazione indipendente - non c'è bisogno di sincronizzare tra pullman (operano in parallelo)
    //
    //## Terminazione
    //
    //Ogni autista termina quando il proprio pullman è pieno, indipendentemente dagli altri pullman.
}
