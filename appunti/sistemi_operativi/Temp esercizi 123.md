# Foto 1 (Prova del 10 Novembre 2023)
## Prova 1
Si supponga di avere tre processi che vengono accodati per l'esecuzione al tempo di arrivo specificato nella seguente tabella, dove sono indicati anche i tempi totali di CPU burst:

| **Processo** | **Tempo di Arrivo** | **CPU Burst (msec)** |
| ------------ | ------------------- | -------------------- |
| P0           | 1                   | 8                    |
| P1           | 4                   | 7                    |
| P2           | 8                   | 6                    |

Si mostri la sequenza di esecuzione e si calcoli il tempo di attesa di ognuno dei processi considerando uno scheduling circolare (Round-robin) che usa un quanto di tempo pari a 3 msec.

## Prova 2
Si descriva sinteticamente cosa è la matrice di accesso, a cosa serve e quali sono le principali modalità usate per la sua implementazione.

## Prova 3
Si descriva brevemente (i) il funzionamento della seguente applicazione Java, (ii) l'output che può produrre (indicare se l'output è deterministico o meno), e (iii) se l'applicazione termina.
``` java
public class Prova3_20231110 {
    public static void main(String[] args) {
        int n = 10;
        MyThread[] threads = new MyThread[n];
        for (int i = 0; i < n; i++)
            threads[i] = new MyThread(i, threads);
        for (int i = 0; i < n; i++)
            threads[i].start();
    }

    static class MyThread extends Thread {
        private int id;
        private MyThread[] threads;

        public MyThread(int id, MyThread[] threads) {
            this.id = id;
            this.threads = threads;
        }

        @Override
        public void run() {
            try {
                int p = threads.length - id - 1;
                if (p >= threads.length / 2) {
                    threads[p].join();
                    System.out.printf("Thread-%d Thread-%d %s\n", id, p, threads[p].getState());
                }
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
    }
}
```

# Foto 2 (Prova del 18 settembre 2023)
## Prova 1
Si supponga di disporre di un disco composto da 1000 cilindri numerati da 0 a 999. Il disco sta attualmente servendo una richiesta relativa al cilindro 360 e la richiesta precedente era relativa al cilindro 620, la coda di richieste inevase in ordine FIFO è composta delle seguenti richieste:
```
155, 670, 860, 110, 726, 508, 945, 770, 430
```
Assumendo come punto di partenza la posizione attuale della testina, indicare la sequenza, e calcolare la relativa distanza totale (in cilindri), che il braccio del disco percorre per soddisfare tutte le richieste inevase usando l'algoritmo di scheduling **SSTF**.

## Prova 2
Si spieghi la differenza tra lo scheduling della CPU con preemption e quello senza preemption. In particolare, nel caso dell'algoritmo SJF chiarire in quale dei due casi si ha un numero maggiore di context switch e perché.

## Prova 3
``` java
public class Prova3_20230918 {
    public static void main(String[] args) throws InterruptedException {
        Thread t0 = new Thread(new MyThread(true));
        Thread t1 = new Thread(new MyThread(false));
        t1.start(); // NIENTE
        t1.join(); // si ferma il main finchè non finisce t1
        System.out.printf("%s, %s\n", t0.getState(), t1.getState());
        Thread t2 = new Thread(new MyThread(true));
        t2.start();
        System.out.printf("%s, %s", t2.getState(), Thread.currentThread().getState());
    }

    static class MyThread implements Runnable {
        private boolean flag;

        public MyThread(boolean flag) {
            this.flag = flag;
        }

        public void run() {
            try {
                while (flag)
                    Thread.sleep(500);
            } catch (InterruptedException e) {}
        }
    }
}
```

# Foto 3 (Prova del 12 Luglio 2023)
## Prova 1
Si supponga di avere quattro processi che arrivano nel sistema negli istanti di arrivo specificati nella seguente tabella, dove sono indicate anche le durate dei CPU burst:

| **Processo** | **Tempo di Arrivo** | **CPU Burst** |
| ------------ | ------------------- | ------------- |
| P1           | 1                   | 11            |
| P2           | 4                   | 6             |
| P3           | 7                   | 5             |
| P4           | 13                  | 14            |

Si mostri la sequenza di esecuzione e si calcolino il tempo di attesa e il tempo di completamento di ciascun processo, considerando l'algoritmo di scheduling **SJF senza prelazione**.

## Prova 2
Illustrare in dettaglio, anche attraverso schemi, il funzionamento dell'allocazione indicizzata dei file realizzata dal file system sul disco anche nel caso di file di grandi dimensioni.

## Prova 3
Si descriva brevemente (i) il funzionamento della seguente applicazione Java, (ii) l'output che può produrre (indicare se l'output è deterministico o meno), e (iii) se l'applicazione termina.
``` java
public class Prova3_20230712 {
    private static Semaphore[] sems = new Semaphore[] { new Semaphore(1), new Semaphore(0) };

    static class MyThread extends Thread {
        private int tipo;

        public MyThread(int tipo) {
            this.tipo = tipo;
        }

        public void run() {
            try {
                sems[tipo].acquire();
                System.out.print(tipo);
                sems[1 - tipo].release();
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
    }

    public static void main(String[] args) {
        int N = 10;
        for (int i = 0; i < N; i++) {
            new MyThread(0).start();
            new MyThread(1).start();
        }
    }
}
```

# Foto 4 (Prova del 21 Giugno 2023)
## Prova 1
Si consideri la seguente sequenza di riferimenti a pagine in memoria centrale:
```
1,4,3,2,6,5,4,2,6,3,5,1,4,6
```
Indicare quali e quante assenze di pagine (page fault) si verificano se si usano 4 frame di memoria con gli algoritmi di sostituzione delle pagine **FIFO** e **LRU**.

## Prova 2
Descrivere brevemente, anche tramite un semplice esempio, l'algoritmo di scheduling del disco a scansione circolare (C-SCAN).

## Prova 3
Si descriva brevemente (i) il funzionamento della seguente applicazione Java, (ii) l'output che può produrre (indicare se l'output è deterministico o meno), e (iii) se l'applicazione termina.
``` java
public class Prova3_20230621 {
    public static Lock l = new ReentrantLock();
    public static Condition c = l.newCondition();
    public static int turno;

    public static void main(String[] args) {
        int n = 10;
        turno = n;
        for (int i = 1; i <= n; i++)
            new MyThread(i).start();
    }

    static class MyThread extends Thread {
        private int myId;

        public MyThread(int id) {
            this.myId = id;
        }

        @Override
        public void run() {
            l.lock();
            try {
                while (myId != turno)
                    c.await();
                System.out.printf("Thread %d %s\n", myId, getState());
                TimeUnit.SECONDS.sleep(2);
                turno--;
                c.signalAll();
            } catch (InterruptedException e) { e.printStackTrace();
            } finally { l.unlock(); }
        }
    }
}
```

# Foto 5 (Prova del 20 Gennaio 2023)
## Prova 1
Si supponga di avere tre processi che arrivano nel sistema al tempo di arrivo specificato nella seguente tabella, dove sono indicati anche i tempi totali di CPU burst:

| **Processo** | **Tempo di Arrivo** | **CPU Burst (msec)** |
| ------------ | ------------------- | -------------------- |
| P1           | 1                   | 20                   |
| P2           | 3                   | 11                   |
| P3           | 5                   | 7                    |

Si mostri la sequenza di esecuzione e si calcoli il tempo di completamento di ognuno dei processi considerando uno scheduling **SJF con prelazione**.

## Prova 2
Si descriva, anche mediante una figura opportunamente commentata, le caratteristiche e il funzionamento dell'allocazione indicizzata dei file da parte del file system.

## Prova 3
Si descriva brevemente (i) il funzionamento della seguente applicazione Java, (ii) l'output che può produrre (indicare se l'output è deterministico o meno), e (iii) se l'applicazione termina.
``` java
public class Prova3_20230120 {
    private static Semaphore[] sems;

    public static void main(String[] args) throws InterruptedException {
        int n = 10;
        sems = new Semaphore[n];
        MyThread[] threads = new MyThread[n];
        for (int i = 0; i < sems.length; i++)
            sems[i] = new Semaphore(0);
        for (int i = 0; i < threads.length; i++) {
            threads[i] = new MyThread(i, n);
            threads[i].start();
        }
    }

    static class MyThread extends Thread {
        private int i, n;

        public MyThread(int i, int n) {
            this.i = i; this.n = n;
        }

        @Override
        public void run() {
            try {
                if (i > n / 2) {
                    sems[n - 1 - i].release();
                }
                else {
                    sems[i].acquire();
                    System.out.println("Thread " + i + " " +
                                       Thread.currentThread().getState());
                }
            } catch (Exception e) { e.printStackTrace(); }
        }
    }
}
```

# Foto 6 (Prova del 09 Settembre 2022)
## Prova 1
Si supponga di disporre di un disco composto da 1500 cilindri numerati da 0 a 1499. Il disco sta attualmente servendo una richiesta relativa al cilindro 840 e la richiesta precedente era relativa al cilindro 1020, la coda di richieste inevase in ordine FIFO è composta delle seguenti richieste:
```
375, 970, 1260, 210, 1026, 708, 1345, 1070, 630
```
Assumendo come punto di partenza la posizione attuale della testina, indicare la sequenza, e calcolare la relativa distanza totale (in cilindri), che il braccio del disco percorre per soddisfare tutte le richieste inevase usando l'algoritmo di scheduling **SSTF**.

## Prova 2
Si spieghi la differenza tra lo scheduling della CPU con prelazione e quello senza prelazione. In particolare, nel caso dell'algoritmo SJF chiarire in quale dei due casi si ha un numero maggiore di context switch e perché.

## Prova 3
Si descriva brevemente (i) il funzionamento della seguente applicazione Java, (ii) l'output che può produrre (indicare se l'output è deterministico o meno e la politica di risveglio dei thread che viene seguita), e (iii) se l'applicazione termina.
``` java
public class Prova3_20220909 {
    static Lock l = new ReentrantLock();
    static Condition c = l.newCondition();
    static boolean sleep = true;

    static class ThreadA extends Thread {
        public void run() {
            l.lock();
            try {
                sleep = false;
                c.signal();
                System.out.println("A");
            } finally { l.unlock(); } } }

    static class ThreadB extends Thread {
        public void run() {
            l.lock();
            try {
                while(sleep) {
                    c.await();
                }
                System.out.println("B");
            } catch (InterruptedException e) {
            } finally { l.unlock(); } } }

    public static void main(String[] args) {
        new ThreadB().start();
        new ThreadA().start();
    }
}
```

# Foto 7 (Prova dell'8 Luglio 2022)
## Prova 1
Si consideri la seguente serie di riferimenti alle pagine di memoria di un processo in un sistema con memoria virtuale:
```
1 3 4 7 3 8 7 9 3 1 9 4 2 9 3 5 2
```
e si descriva la sequenza di allocazione delle pagine dell'algoritmo di sostituzione delle pagine **LRU** con una memoria fisica di 3 blocchi. Si calcoli il numero di page fault che si verificano, includendo anche quelli iniziali.

## Prova 2
Si spieghi il compito che svolge il DMA (Direct Memory Access) nella gestione delle operazioni di I/O e i vantaggi prestazionali che le sue azioni possono portare nel funzionamento di un computer.

## Prova 3
Si descriva brevemente (i) il funzionamento della seguente applicazione Java, (ii) l'output che può produrre (indicare se l'output è deterministico o meno), e (iii) se l'applicazione termina.
``` java
public class Prova3_20220708_ {
    public static void main(String[] args) throws InterruptedException {
        Thread t1 = new Thread(new MyThread());
        t1.start();
        t1.join();
        System.out.printf("%s\n", t1.getState().equals(State.RUNNABLE));
        Thread t2 = new Thread(new MyThread());
        t2.start();
        System.out.printf("%s, %s", t2.getState(), Thread.currentThread().getState());
    }

    static class MyThread implements Runnable {
        public void run() {
            try {
                Thread.sleep(500);
            } catch (InterruptedException e) { }
        }
    }
}
```

# Foto 8 (Prova del 14 Gennaio 2022)
## Prova 1
Si supponga di disporre di un disco composto da 1000 cilindri numerati da 0 a 999. Il disco sta attualmente servendo una richiesta relativa al cilindro 630 e la richiesta precedente era relativa al cilindro 770, la coda di richieste inevase in ordine FIFO è composta delle seguenti richieste:

Assumendo come punto di partenza la posizione attuale della testina, indicare la sequenza, e calcolare la relativa distanza totale (in cilindri), che il braccio del disco percorre per soddisfare tutte le richieste inevase usando l'algoritmo di scheduling **LOOK**.

## Prova 2
Si spieghi sinteticamente il problema del **trashing** e le tecniche adottate dai sistemi operativi (ad es., Solaris, Windows) per risolverlo.

## Prova 3
Si descriva l'output che può produrre la seguente applicazione Java (output + breve commento) e dire se l'applicazione termina oppure no.
``` java
public class Prova3_202201 {
    public static Semaphore sem = new Semaphore(0);

    public static void main(String[] args) throws InterruptedException {
        MyThread[] threads = new MyThread[10];
        for (int i = 0; i < threads.length; i++) {
            threads[i] = new MyThread(i, threads);
            threads[i].start();
        }
    }

    static class MyThread extends Thread {
        private int myId;
        private MyThread[] threads;

        public MyThread(int id, MyThread[] t) {
            this.myId = id;
            this.threads = t;
        }

        public void run() {
            try {
                Thread.sleep((long) (Math.random()*2000));
                if (myId % 2 == 1) {
                    sem.acquire();
                }
                else {
                    System.out.println("T" + myId + " " + getState());
                }
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
    }
}
```

# Foto 9 (Prova del 08 Settembre 2025)
## Prova 1
Si consideri la seguente sequenza di riferimenti a pagine in memoria centrale:

Indicare quali e quante assenze di pagine (page fault) si verificano se si usano 3 frame di memoria con gli algoritmi di sostituzione delle pagine FIFO e LRU.

## Prova 2
Descrivere brevemente, anche tramite un semplice esempio, l'algoritmo di scheduling del disco Shortest Seek Time First (**SSTF**), indicando anche se può causare starvation.

## Prova 3
Si descriva (i) il funzionamento della seguente applicazione Java, (ii) l'output che può produrre (indicare se deterministico o meno), e (iii) se l'applicazione termina.
``` java
public class Prova3_20250908 {

    private static final Object lock = new Object();
    private static int k = 0;
    private static final int N = 10;

    public static void main(String[] args) {
        Worker[] threads = new Worker[N];
        for (int i = 0; i < N; i++) {
            threads[i] = new Worker(i);
            threads[i].start();
        }
    }

    static class Worker extends Thread {
        private int id;

        public Worker(int id) {
            this.id = id;
        }

        public void run() {
            synchronized (lock) {
                while (k != id) {
                    try {
                        lock.wait();
                    } catch (InterruptedException e) {
                        e.printStackTrace();
                    }
                }
                System.out.printf("Thread %d [%s]\n", id, this.getState());
                k++;
                lock.notifyAll();
            }
        }
    }
}
```

# Foto 10 (Prova del 08 Novembre 2024)
## Prova 1
Si consideri la seguente sequenza di riferimenti a pagine in memoria centrale:

Indicare quali e quante assenze di pagine (page fault) si verificano se si usano 3 frame di memoria con gli algoritmi di sostituzione delle pagine **Ottimale** e **LRU**.

## Prova 2
Si descriva brevemente cosa sono i **domini di protezione**, cosa stabilisce il **principio del privilegio minimo** e se questo è implementato nei sistemi Linux.

## Prova 3
Si descriva (i) il funzionamento della seguente applicazione Java, (ii) l'output che può produrre (indicare se deterministico o meno), e (iii) se l'applicazione termina.

``` java
public class Prova3_20241108 {

    public static void main(String[] args) {
        int n = 10;
        MyThread[] threads = new MyThread[n];
        for (int i = 0; i < n; i++)
            threads[i] = new MyThread(i, threads);
        for (int i = 0; i < n; i++)
            threads[i].start();
    }

    static class MyThread extends Thread {
        private int id;
        private MyThread[] threads;

        public MyThread(int id, MyThread[] threads) {
            this.id = id;
            this.threads = threads;
        }

        @Override
        public void run() {
            try {
                int p = (id + 1) % threads.length;
                threads[p].join();
                TimeUnit.SECONDS.sleep(id);
                System.out.printf("Thread-%d aspetta Thread-%d %s\n", id, p, threads[p].getState());
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
    }
}
```
