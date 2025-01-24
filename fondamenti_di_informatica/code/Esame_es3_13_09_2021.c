#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>
#include <string.h>

#define dimR 5
#define dimL 3
#define dimN 40

typedef enum{
    prestito, //0
    restituzione //1
} op;

typedef struct{
    char nome_cl[dimN];
    op oper;
    int cod_libro;
} pren;

typedef struct{
    int cod_libro;
    int scaffale;
    int n_copie;
} dizionario;

//FUNZIONE 1
// Prende in ingresso l'array di struct e stabilisce qual è il numero più alto di operazioni compiute dallo stesso cliente
int max_op(const pren R[], const int sizeR){
    int max = 0;
    for(int i = 0; i < sizeR; i++){
        int count = 0;
        for(int j = 0; j < sizeR; j++){
            if(strcmp(R[i].nome_cl, R[j].nome_cl) == 0){
                count++;
            }
        }
        if(count > max){
            max = count;
        }
    }
    return max;
}
// Verifica se un certo cliente compie n operazioni
bool verifica_num(const pren R[], const int sizeR, const char nome_cl[dimN], int n){
    int count = 0;
    for(int i = 0; i < sizeR; i++){
        if(strcmp(R[i].nome_cl, nome_cl) == 0){
            count++;
        }
    }
    return (count == n);
}
// Verifica se un certo cliente è già presente nella lista
bool verifica_nome(const char nome_cl[], char **list, const int sizeList){
    for(int i = 0; i < sizeList; i++){
        if(strcmp(nome_cl, list[i]) == 0){
            return true;
        }
    }
    return false;
}
// Aggiunge il cliente alla lista
void aggiunta_cliente(char nome_cl[], char ***list, int *sizeList){
    *list = realloc(*list, sizeof(char *) * (*sizeList + 1));
    if(*list == NULL){
        printf("Errore di allocazione memoria\n");
        exit(1);
    }
    (*list)[*sizeList] = malloc(dimN * sizeof(char));
    if((*list)[*sizeList] == NULL){
        printf("Errore di allocazione memoria\n");
        exit(1);
    }
    strcpy((*list)[*sizeList], nome_cl);
    (*sizeList)++;
}
//Funzione clienti attivi
char **clienti_attivi(pren R[], const int sizeR, int *sizeList){
    int max = max_op(R, sizeR);
    char **list = malloc(sizeof(char *)); // Allocazione iniziale per un elemento
    if(list == NULL){
        printf("Errore di allocazione memoria\n");
        exit(1);
    }

    for(int i = 0; i < sizeR; i++){
        if(verifica_num(R, sizeR, R[i].nome_cl, max) && !verifica_nome(R[i].nome_cl, list, *sizeList)){
            aggiunta_cliente(R[i].nome_cl, &list, sizeList);
        }
    }
    return list;
}

//FUNZIONE 2
//cerca un certo codice all'interno di un array, se lo trova restituisce true
bool trovato_scaffale(int cod, int scaffali[], int sizeS){
    for(int i=0; i<sizeS; i++){
        if(cod == scaffali[i]){
            return true;
        }
    }
    return false;
}
//prende in ingresso l'array di struct L e restituisce un array (passato come parametro) di codici corrispondenti agli scaffali presi una singola volta e ne restituisce la dimensione
int estrai_scaffali(dizionario L[], const int sizeL, int scaffali[]){
    int sizeS=0;
    for(int i=0; i<sizeL; i++){
        if(i==0){
            scaffali[sizeS]=L[i].scaffale;
            sizeS++;
        } else if(!trovato_scaffale(L[i].scaffale, scaffali, sizeS)){
            scaffali[sizeS]=L[i].scaffale;
            sizeS++;
        }
    }
    return sizeS;
}
//dato il codice di uno scaffale verifica quanti libri ci sono e ne restituisce il numero
int n_copie(dizionario L[], const int sizeL, int codS){
    int n_copie=0;
    for(int i=0; i<sizeL; i++){
        if(L->scaffale==codS){
            n_copie=n_copie+(L->cod_libro*L->n_copie);
        }
    }
    return n_copie;
}
//per ogni elemento di estrai scaffale verifica quale ha il numero di copie più alto e lo restituisce
int scaffale_occupato(dizionario L[], const int sizeL){
    int codMax=0;
    int scaffali[sizeL];
    int sizeS = estrai_scaffali(L, sizeL, scaffali);
    for(int i=0; i<sizeS; i++){
        if(i==0){
            codMax = scaffali[i];
        } else if(n_copie(L, sizeL, scaffali[i])>n_copie(L, sizeL, codMax)){
            codMax=scaffali[i];
        }
    }
    return codMax;
}

//ESERCIZIO 3
//somma il numero di copie prenotate per la restituzione di un determinato libro
int pren_restituzione(pren R[], int sizeR, int codLibro){
    int numC=0;
    for(int i=0; i<sizeR; i++){
        if(R[i].oper==restituzione && R[i].cod_libro==codLibro){
            numC++;
        }
    }
    return numC;
}
//somma il numero di copie prenotate per il prestito di un determinato libro
int pren_prestito(pren R[], int sizeR, int codLibro){
    int numC=0;
    for(int i=0; i<sizeR; i++){
        if(R[i].oper==prestito && R[i].cod_libro==codLibro){
            numC++;
        }
    }
    return numC;
}
//confronta il numero di copie in biblioteca/restituite con il numero di copie da dare in prestito e restituisce true se è un'operazione possibile
bool gestibili(pren R[], int sizeR, dizionario L[], int sizeL){
    for(int i=0; i<sizeL; i++){
        if((L[i].n_copie+pren_restituzione(R, sizeR, L[i].cod_libro))<pren_prestito(R, sizeR, L[i].cod_libro)){
            return false;
        }
    }
    return true;
}

//FUNZIONE 4
//cerca all'interno di una lista se è già presente un cliente passato come parametro, se si restituisce true
bool trovato_cliente(char nome_cl[dimN], char *clienti[dimN], const int sizeC){
    for(int i=0; i<sizeC; i++){
        if(strcmp(clienti[i], nome_cl)==0){
            return true;
        }
    }
    return false;
}
//crea una lista di clienti passata come parametro ne restituisce la dimensione (l'array va precedentemente creato con dimensione dimR)
int estrai_clienti(pren R[], int sizeR, char *clienti[dimN]){
    int sizeC=0;
    for(int i=0; i<sizeR; i++){
        if(i==0 || !trovato_cliente(R[i].nome_cl, clienti, sizeC)){
            clienti[sizeC]=(char *)malloc(dimN*sizeof(char));
            if(clienti[sizeC]==NULL){
                printf("Errore di allocazione memoria");
                exit(1);
            }
        }
        if(i==0){
            strcpy(clienti[i], R[i].nome_cl);
            sizeC++;
        } else if(!trovato_cliente(R[i].nome_cl, clienti, sizeC)){
            strcpy(clienti[sizeC], R[i].nome_cl);
            sizeC++;
        }
    }
    return sizeC;
}
//verifica per un cliente di una lista se ha effettuato lo stesso tipo di operazioni, se si restituisce true
bool verifica_operazioni(char cliente[], pren R[], const int sizeR){
    op setOper = 0;
    bool trovato=false;
    for(int i=0; i<sizeR && trovato == false; i++){
        if(strcmp(R[i].nome_cl, cliente)==0){
            op setOper = R[i].oper;
        }
    }
    for(int i=0; i<sizeR; i++){
        if(strcmp(R[i].nome_cl, cliente)==0 && R[i].oper!=setOper){
            return false;
        }
    }
    return true;
}
//verifica se un cliente ha effettuato operazioni su un determinato libro
bool verifica_operazioni_su_libro(char cliente[], const int codL, pren R[], int sizeR){
    for(int i=0; i<sizeR; i++){
        if(strcmp(cliente, R[i].nome_cl)==0 && codL==R[i].cod_libro){
            return true;
        }
    }
    return false;
}
//crea un array di libri su cui un cliente ha effettuato operazioni (l'array va creato prima di dimensioni dimL e passato come parametro), verrà restituita la dimensione dell'array
int estrai_libri(char cliente[], int libri[dimL], dizionario L[], int sizeL, pren R[], int sizeR){
    int sizeLibri=0;
    for(int i=0; i<sizeL; i++){
        if(verifica_operazioni_su_libro(cliente, L[i].cod_libro, R, sizeR)){
            libri[sizeLibri]=L[i].cod_libro;
            sizeLibri++;
        }
    }
    return sizeLibri;
}
//verifica per un cliente se tutti i libri per cui ha effettuato operazioni sono sullo stesso scaffale
bool verifica_cliente_libri_scaffale(char cliente[], pren R[], int sizeR, dizionario L[], int sizeL){
    int libri[sizeL];
    int sizeLibri=estrai_libri(cliente, libri, L, sizeL, R, sizeR);
    int scaffale=L[libri[0]-1].scaffale;
    for(int i=1; i<sizeLibri;i++){
        if(L[libri[i]-1].scaffale!=scaffale){
            return false;
        }
    }
    return true;
}
//verifica quello sopra per ogni cliente e crea un array contenente tutti i clienti che rispettano quelle condizioni
int clienti_veloci(pren R[], int sizeR, dizionario L[], int sizeL, char *clientiV[]){
    int sizeClientiV=0;
    char *clienti[sizeR];
    int sizeC = estrai_clienti(R, sizeR, clienti);
    for(int i=0; i<sizeC; i++){
        if(verifica_cliente_libri_scaffale(clienti[i], R, sizeR, L, sizeL) && verifica_operazioni(clienti[i], R, sizeR)){
            clientiV[sizeClientiV]=(char *)malloc(dimN*sizeof(char));
            if(clientiV[sizeClientiV]==0){
                printf("Errore di allocazione memoria");
                exit(1);
            }
            strcpy(clientiV[sizeClientiV], clienti[i]);
            sizeClientiV++;
        }
    }
    return sizeClientiV;
}


//MAIN
int main(void){
    //nome
    //operazione
    //cod del libro
    pren R[dimR] = {
        {"Verdi", prestito, 1},
        {"Rossi", restituzione, 2},
        {"Verdi", prestito, 3},
        {"Bianchi", prestito, 2},
        {"Rossi", prestito, 1}
    };

    //cod_libro
    //scaffale
    //n_copie
    dizionario L[dimL] = {
        {1, 1, 2},
        {2, 2, 1},
        {3, 1, 2}
    };
    
    /*
    //TEST STAMPA clienti_attivi
    int sizeList = 0;
    char **list = clienti_attivi(R, dimR, &sizeList);
    for(int i = 0; i < sizeList; i++){
        printf("%s\n", list[i]);
    }

    for(int i = 0; i < sizeList; i++){
        free(list[i]);
    }
    free(list);

    printf("\n----------------------------------------------------\n");

    //TEST STAMPA SCAFFALE_OCCUPATO
    printf("\n%d", scaffale_occupato(L, dimL));

    printf("\n----------------------------------------------------\n");

    //TEST STAMPA estrai_scaffali
    int scaffali[dimR];
    int sizeS=estrai_scaffali(L, dimL, scaffali);
    for(int i=0; i<sizeS; i++){
        printf("\n%d", scaffali[i]);
    }

    printf("\n----------------------------------------------------\n");

    //TEST STAMPA estrai_clienti
    char *clienti[dimN];
    int sizeC=estrai_clienti(R, dimR, clienti);
    for(int i=0; i<sizeC; i++){
        printf("\n%s", clienti[i]);
    }

    printf("\n----------------------------------------------------\n");

    //TEST STAMPA verifica_operazioni
    printf("\n%d", verifica_operazioni("Rossi", R, dimR));

    printf("\n----------------------------------------------------\n");

    //TEST STAMPA estrali_libri di interesse
    int libri[dimL];
    int sizeLibri=estrai_libri("Verdi", libri, L, dimL, R, dimR);
    for(int i=0; i<sizeLibri; i++){
        printf("\n%d", libri[i]);
    }

    printf("\n----------------------------------------------------\n");

    //TEST STAMPA verifica_cliente_libri_scaffale
    printf("\n%d\n", verifica_cliente_libri_scaffale("Verdi", R, dimR, L, dimL));

    printf("\n----------------------------------------------------\n");

    //TEST STAMPA clienti_veloci
    char *clientiV[dimR];
    int dimClientiV = clienti_veloci(R, dimR, L, dimL, clientiV);
    for(int i=0; i<dimClientiV; i++){
        printf("\n%s", clientiV[i]);
    }

    printf("\n----------------------------------------------------\n");

    //TEST STAMPA pren_restituzione/pren_prestito
    printf("%d", pren_prestito(R, dimR, 1));

    printf("\n----------------------------------------------------\n");

    //TEST STAMPA gestibili
    printf("%d", gestibili(R, dimR, L, dimL));

    */

    printf("%s", "-- GESTIONE BIBLIOTECA --");
    printf("%s", "\n\nQuale operazione si vuole compiere?");
    printf("%s", "\n1) Lista dei clienti attivi \n2) Lo scaffale con il maggior numero di libri al suo interno\n3) Verificare se le operazioni della giornata sono gestibili\n4) Lista dei clienti veloci\n");

    bool ok;
    int operazione;
    do{
        ok=true;
        scanf("%d", &operazione);
        switch (operazione)
        {
        case 1:
            int sizeList = 0;
            char **list = clienti_attivi(R, dimR, &sizeList);
            for(int i = 0; i < sizeList; i++){
                printf("%s%s\n", "- ", list[i]);
            }
            for(int i = 0; i < sizeList; i++){
                free(list[i]);
            }
            free(list);
            break;
        case 2:
            printf("%s%d", "Lo scaffale con il maggior numero di libri è: S", scaffale_occupato(L, dimL));
            break;
        case 3:
            if(gestibili(R, dimR, L, dimL)){
                printf("%s", "Le operazioni di oggi sono gestibili");
            } else {
                printf("%s", "Le operazioni di oggi non sono gestibili");
            }
            break;
        case 4:
            char *clientiV[dimR];
            int dimClientiV = clienti_veloci(R, dimR, L, dimL, clientiV);
            for(int i=0; i<dimClientiV; i++){
                printf("%s%s\n","- ", clientiV[i]);
            }
            break;
        default:
            printf("%s", "\nValore inserito non valido, riprovare:");
            ok=false;
            break;
        }
    } while(!ok);

    return 0;
}
