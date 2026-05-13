import random

# Dizionario per contenere le flashcards
flashcards = {
  1: {
    "fronte": "Ordinamento a bolle (Bubble Sort)",
    "retro": "Confronta elementi adiacenti e li scambia se fuori posto, spostando il numero più grande verso destra ad ogni iterazione. Complessità temporale (caso peggiore): O(n²)"
  },
  2: {
    "fronte": "Ordinamento Heap (Heap Sort)",
    "retro": "Crea un max-heap (albero binario ordinato dove il genitore è maggiore dei figli), scambia il massimo con l'ultimo elemento, e ripete su heap ridotto. Utilizza le funzioni `build max heap` e `heapify`. Complessità temporale: O(n log n)"
  },
  3: {
    "fronte": "Ordinamento a inserzione (Insertion Sort)",
    "retro": "Esamina ogni elemento confrontandolo con gli elementi alla sua sinistra e lo inserisce nella posizione corretta, costruendo una partizione ordinata man mano che avanza. Complessità temporale (caso peggiore): O(n²)"
  },
  4: {
    "fronte": "Ordinamento Merge (Merge Sort)",
    "retro": "Algoritmo ricorsivo che divide l'array a metà, ordina le metà e le unisce. Complessità temporale: O(n log n)"
  },
  5: {
    "fronte": "Ordinamento Quick (Quick Sort)",
    "retro": "Algoritmo ricorsivo che utilizza un \"pivot\" per dividere l'array in due partizioni, elementi minori a sinistra e maggiori a destra, poi ordina ricorsivamente le partizioni. Complessità temporale (caso peggiore): O(n²), caso medio: O(n log n)"
  },
  6: {
    "fronte": "Ordinamento a selezione (Selection Sort)",
    "retro": "Trova l'elemento più piccolo nella partizione non ordinata e lo sposta nella partizione ordinata. Complessità temporale: O(n²)"
  },
  7: {
    "fronte": "Algoritmo",
    "retro": "Espressione che descrive la risoluzione automatica di un problema tramite un numero finito di istruzioni non ambigue, ognuna eseguibile in tempo finito. Corrispondenza tra input e output."
  },
  8: {
    "fronte": "Programma",
    "retro": "Traduzione di un algoritmo in un linguaggio di programmazione per essere eseguito."
  },
  9: {
    "fronte": "Linguaggi di programmazione di basso livello",
    "retro": "Sintassi e lessico strettamente legati alla macchina fisica, come il linguaggio macchina (codice binario) e assembly."
  },
  10: {
    "fronte": "Linguaggi di programmazione di alto livello",
    "retro": "Linguaggi più comprensibili dall'uomo, costruiti basandosi su linguaggi naturali."
  },
  11:{
      "fronte": "Traduttore e differenza tra compilatore e interprete",
      "retro": "Il traduttore traduce il linguaggio di alto livello in linguaggio macchina, in modo che il programma sia eseguibile su un calcolatore. Esistono due tipi di traduttori:\n - compilatore, traduzione del codice per intero ad un codice equivalente in linguaggio macchina\n - interprete, traduzione della porzione di codice necessaria al momento dell'esecuzione (più orientato alla portabilità del software)"
  },
  12:{
      "fronte": "Per ogni / esiste",
      "retro": "Generalmente un problema per ogni va risolto in base ottimista definendo una variabile di tipo booleana come true, che si aggiornerà con false all'interno di un ciclo se al suo interno si verifica la condizione richiesta nella consegna. L'esiste funziona in modo analogo, ma su base pessimista"
  },
  13: {
    "fronte": "Algoritmi di ricerca, normale e binaria",
    "retro": "Ricerca di un determinato elemento in un vettore, che se presente verrà restituito l'indice della posizione, altrimenti -1. Nella ricerca binaria abbiamo bisogno di un vettore ordinato, in cui verrà controllato l'elemento di mezzo, a questo punto ci si potrà concentrare sulla porzione di array in cui è presente il numero da cercare"
  },
  14: {
    "fronte": "Stack (in programmazione)",
    "retro": "Parte della memoria utilizzata per la gestione di funzioni, organizzata come una struttura dati LIFO."
  },
  15: {
    "fronte": "Heap (in programmazione)",
    "retro": "Parte della memoria dinamica, usata per allocare dati a runtime."
  },
  16: {
    "fronte": "Puntatore",
    "retro": "Variabile che contiene l'indirizzo di memoria di un'altra variabile."
  },
  17: {
    "fronte": "Passaggio per valore",
    "retro": "Quando una funzione riceve un valore, questo viene copiato in una nuova variabile all'interno della funzione stessa."
  },
  18: {
    "fronte": "Passaggio per riferimento",
    "retro": "Quando una funzione riceve un puntatore ad una variabile, la funzione può modificare il valore originale di quella variabile."
  },
  19: {
    "fronte": "Struct",
    "retro": "Tipo di dato composto da elementi di tipo disomogeneo."
  },
  20: {
    "fronte": "#include",
    "retro": "Direttiva del pre-processore che include il testo di un file specificato (es. librerie)."
  },
  21: {
    "fronte": "#define",
    "retro": "Direttiva del pre-processore che sostituisce un identificatore di testo con un altro testo."
  },
  22: {
    "fronte": "malloc()",
    "retro": "Funzione che alloca dinamicamente memoria in byte."
  },
  23: {
    "fronte": "calloc()",
    "retro": "Funzione simile a malloc() che alloca memoria contigua e la inizializza a zero."
  },
  24 : {
    "fronte": "free()",
    "retro": "Funzione che dealloca memoria allocata dinamicamente."
  },
  25 : {
    "fronte": "Type Casting",
    "retro": "Conversione del tipo di una variabile, implicita (automatica) o esplicita (tramite operatore di cast)."
  },
  26 : {
    "fronte": "Array",
    "retro": "Collezione di variabili omogenee memorizzate in locazioni di memoria contigue."
  }
  
}

# Lista per tenere traccia delle flashcards già estratte
flashcards_estratte = []

# Inizializza il contatore
contatore = 0

# Funzione per estrarre una flashcard randomicamente
def estrai_flashcard():
    global flashcards_estratte, contatore
    contatore += 1

    if len(flashcards_estratte) == len(flashcards):
        flashcards_estratte = []  # Reset della lista se tutte le flashcards sono state estratte

    chiave_random = random.choice(list(flashcards.keys()))
    while chiave_random in flashcards_estratte:
        chiave_random = random.choice(list(flashcards.keys()))
    
    flashcards_estratte.append(chiave_random)

    print("\n"f"Flashcard {contatore}: {flashcards[chiave_random]['fronte']}")
    input("Premi Invio per vedere il retro...")
    print(f"Retro: {flashcards[chiave_random]['retro']}")

# Ciclo principale per ripetere l'estrazione
while True:
    estrai_flashcard()
    continua = input("Vuoi continuare? (s/n): ")
    if continua.lower() != 's':
        break