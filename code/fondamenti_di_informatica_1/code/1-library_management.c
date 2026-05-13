// 1) Definire un programma di gestione di una biblioteca (intesa come una lista di libri).
//   Sono consentite le seguenti operazioni:
//   - Inserimento di un nuovo libro
//   - Prestito di un libro
//   - Restituzione di un libro
//   - Visualizzazione di un libro

#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#define MAX_SIZE 100

typedef enum {
    ROMANZO,
    SAGGIO,
    FANTASCIENZA,
    GIALLO,
    BIOGRAFIA,
    STORIA
} CategoriaLibro;

typedef enum {
    DISPONIBILE, //0
    IN_PRESTITO, //1
    IN_MANUTENZIONE //2
} StatoLibro;

typedef struct {
    int giorno;
    int mese;
    int anno;
} Data;

typedef struct {
    int codice;
    char titolo[MAX_SIZE];
    char autore[MAX_SIZE];
    CategoriaLibro categoria;
    StatoLibro stato;
    Data dataPrestito;
    char prestatoA[MAX_SIZE];
} Libro;

char* categoriaToString (CategoriaLibro categoria) {
    switch(categoria) {
        case ROMANZO: return "Romanzo";
        case SAGGIO: return "Saggio";
        case FANTASCIENZA: return "Fantascienza";
        case GIALLO: return "Giallo";
        case BIOGRAFIA: return "Biografia";
        case STORIA: return "Storia";
        default: return "Sconosciuto";
    }
}

char* statoToString (StatoLibro stato) {
    switch(stato) {
        case DISPONIBILE: return "Disponibile";
        case IN_PRESTITO: return "In prestito";
        case IN_MANUTENZIONE: return "In manutenzione";
        default: return "Sconosciuto";
    }
}

Libro inserisciLibro(Libro biblioteca[], int numLibri) {
    Libro libro;
    int codiceEsistente = 1;

    do {
        codiceEsistente = 0;
        
        printf("Codice: ");
        scanf("%d", &libro.codice);

        for (int i = 0; i < numLibri; i++) {
            if (biblioteca[i].codice == libro.codice) {
                codiceEsistente = 1;
                printf("Codice gia' esistente. Riprova.\n");
                break;
            }
        }

    } while (codiceEsistente);

    printf("Titolo: ");
    scanf("%s", &libro.titolo);

    printf("Autore: ");
    scanf("%s", &libro.autore);

    printf("Categoria (0=Romanzo, 1=Saggio, 2=Fantascienza, 3=Giallo, 4=Biografia, 5=Storia): ");
    int cat;
    scanf("%d", &cat);
    libro.categoria = (CategoriaLibro) cat;

    libro.stato = DISPONIBILE;

    return libro;
}

void prestaLibro(Libro* libro) {
    if (libro->stato != DISPONIBILE) {
        printf("Libro non disponibile per il prestito!\n");
        return;
    }

    printf("Nome del richiedente: ");
    scanf("%s", &libro->prestatoA);

    printf("Data del prestito (gg mm aaaa): ");
    scanf("%d %d %d", &libro->dataPrestito.giorno,
                      &libro->dataPrestito.mese,
                      &libro->dataPrestito.anno);

    libro->stato = IN_PRESTITO;

    printf("Prestito effettuato con successo.\n");
}

void restituisciLibro(Libro* libro) {
    if (libro->stato != IN_PRESTITO) {
        printf("Il libro non risulta in prestito.\n");
        return;
    }

    libro->stato = DISPONIBILE;
    strcpy(libro->prestatoA ,"");
    printf("Restituzione effettuata con successo.\n");
}

void visualizzaLibro(Libro* libro) {
    printf("\nDettagli libro.\n");
    printf("Codice: %d\n", libro->codice);
    printf("Titolo: %s\n", libro->titolo);
    printf("Autore: %s\n", libro->autore);
    printf("Categoria: %s\n", categoriaToString(libro->categoria));
    printf("Stato: %s\n", statoToString(libro->stato));

    if (libro->stato == IN_PRESTITO) {
        printf("Prestato a: %s\n", libro->prestatoA);
        printf("Data del prestito: %02d/%02d/%d\n", libro->dataPrestito.giorno,
                                                    libro->dataPrestito.mese,
                                                    libro->dataPrestito.anno);
    }

}

int main() {
    Libro biblioteca[MAX_SIZE];
    int numLibri = 0;
    int scelta;

    do {
        printf("\n=== GESTIONE BIBLIOTECA ===\n");
        printf("1. Inserisci nuovo libro\n");
        printf("2. Presta un libro\n");
        printf("3. Restituisci un libro\n");
        printf("4. Visualizza un libro\n");
        printf("5. Esci.\n");

        printf("Scelta: ");
        scanf("%d", &scelta);

        switch(scelta) {
            case 1: {
                if (numLibri < MAX_SIZE) {
                    biblioteca[numLibri] = inserisciLibro(biblioteca, numLibri);
                    numLibri++;
                    printf("Libro inserito con successo.\n");
                } else {
                    printf("Biblioteca piena.!");
                }
                break;
            }
            case 2: {
                int codice;
                printf("Inserisci il codice del libro da prestare: ");
                scanf("%d", &codice);

                int trovato = 0; // false
                for (int i = 0; i < numLibri; i++) {
                    if (biblioteca[i].codice == codice) {
                        trovato = 1;
                        prestaLibro(&biblioteca[i]);
                        break;
                    }
                }
                if (!trovato) {
                    printf("Non esiste un libro con codice %d\n", codice);
                    // break;
                }
                break;
            }
            case 3: {
                int codice;
                printf("Inserisci il codice del libro da restituire: ");
                scanf("%d", &codice);

                int trovato = 0; // false
                for (int i = 0; i < numLibri; i++) {
                    if (biblioteca[i].codice == codice) {
                        trovato = 1;
                        restituisciLibro(&biblioteca[i]);
                        break;
                    }
                }
                if (!trovato) {
                    printf("Non esiste un libro con codice %d\n", codice);
                    // break;
                }
                break;
            }
            case 4: {
                int codice;
                printf("Inserisci il codice del libro da visualizzare: ");
                scanf("%d", &codice);

                int trovato = 0; // false
                for (int i = 0; i < numLibri; i++) {
                    if (biblioteca[i].codice == codice) {
                        trovato = 1;
                        visualizzaLibro(&biblioteca[i]);
                        break;
                    }
                }
                if (!trovato) {
                    printf("Non esiste un libro con codice %d\n", codice);
                    // break;
                }
                break;
            }
            case 5:
                printf("Arrivederci.\n");
                break;
            default:
                printf("Scelta non valida.\n");
        }

    } while (scelta != 5);

    return 0;
}