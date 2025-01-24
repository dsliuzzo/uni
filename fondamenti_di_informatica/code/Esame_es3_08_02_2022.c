#include <stdio.h>
#include <stdbool.h>
#include <string.h>

#define DIMM 10
#define DIMF 6

typedef struct{
    char filiale;
    int data;
    int prezzo;
    int data_prevista;
} operazioni;

typedef struct{
    char filiale;
    char *citta;
} filiali;

//calcola il ritardo dell'operazione con indice i
int ritardo_operazione(operazioni M[], int i){
    int ritardo=0;
    ritardo = M[i].data-M[i].data_prevista;
    return ritardo;
}
//calcola il ritardo complessivo di una determinata filiale
int ritardo_complessivo(operazioni M[], char filiale){
    int ritardo=0;
    for(int i=0; i<DIMM; i++){
        if(M[i].filiale==filiale){
            ritardo=ritardo+ritardo_operazione(M, i);
        }
    }
    return ritardo;
}
//calcola il ritardo massimo dalla lista di operazioni
int calcolo_maxRitardo(operazioni M[]){
    int max;
    for(int i=0; i<DIMM; i++){
        if(i==0 || max < ritardo_complessivo(M, M[i].filiale)){
            max = ritardo_complessivo(M, M[i].filiale);
        }
    }
    return max;
}
//1 FILIALI RITARDATARIE
//stampa a video le filiali con il massimo ritardo
void filiali_ritardatarie(operazioni M[], filiali F[]){
    int max = calcolo_maxRitardo(M);
    for(int i=0; i<DIMF; i++){
        if(max == ritardo_complessivo(M, F[i].filiale)){
            printf("\n- Filiale %c", F[i].filiale);
        }
    }
    return;
}

//data una certa filiale calcola il totale dei prezzi pagati
int prezzo_filiale(operazioni M[], char f){
    int somma = 0;
    for(int i=0; i<DIMM; i++){
        if(M[i].filiale==f){
            somma+=M[i].prezzo;
        }
    }
    return somma;
}
//data una certa città calcola il totale dei prezzi pagati per ogni sua filiale
int prezzo_citta(operazioni M[], filiali F[], char* citta){
    int tot=0;
    for(int i=0; i<DIMF; i++){
        if(!strcmp(citta, F[i].citta)){
            tot+=prezzo_filiale(M, F[i].filiale);
        }
    }
    return tot;
}
//2 STATISTICHE CITTA'
//stampa a video le città con accanto il totale dei prezzi per quella città
void statistiche_citta(operazioni M[], filiali F[]){
    for(int i=0; i<DIMF; i++){
        printf("\n%s\t%d", F[i].citta, prezzo_citta(M, F, F[i].citta));
    }
    return;
}

//3 FILIALE MIGLIORE
//calcola una filiale (fm) migliore di f (inserita come parametri) in base a:
//1)ritardo complessivo minore o uguale a f;
//2)prezzo totale pagato per le consegne di fm sono superiori a quelle di f 
char filiale_migliore(operazioni M[], filiali F[], char f){
    int rit = ritardo_complessivo(M, f);
    int prezzo = prezzo_filiale(M, f);
    for(int i=0; i<DIMF; i++){
        if(F[i].filiale != f && ritardo_complessivo(M, F[i].filiale)<=rit && prezzo_filiale(M, F[i].filiale) >= prezzo){
            return F[i].filiale;
        }
    }
    return ' ';
}

//calcola il numero di consegne per una determinata filiale fino alla data d
int nConsegne_filiale(operazioni M[], char f, int d){
    int count=0;
    for(int i=0; i<DIMM; i++){
        if(M[i].filiale==f && M[i].data<=d){
            count++;
        }
    }
    return count;
}
//calcola il numero di consegne per una determinata citta' fino alla data d
int nConsegne_citta(operazioni M[], filiali F[], char *citta, int d){
    int tot=0;
    for(int i=0; i<DIMF; i++){
        if(!strcmp(F[i].citta, citta)){
            tot+=nConsegne_filiale(M, F[i].filiale, d);
        }
    }
    return tot;
}
//4 CITTA' LIMITATE
//stampa a video l'elenco di città le cui filiali hanno complessivamente effettuato meno di k consegne fino alla data d
void citta_limitate(operazioni M[], filiali F[], int d, int k){
    for(int i=0; i<DIMF;i++){
        if(nConsegne_citta(M, F, F[i].citta, d)<k){
            printf("Filiale: %s\tNumero di consegne: %d\n", F[i].citta, nConsegne_citta(M, F, F[i].citta, d));
        }
    }
    return;
}

int main(){
    operazioni M[DIMM]={
        {'A', 10, 5, 8},
        {'B', 12, 10, 12},
        {'C', 6, 5, 4},
        {'D', 4, 5, 4},
        {'E', 8, 10, 7},
        {'F', 6, 15, 5},
        {'A', 10, 10, 9},
        {'B', 11, 5, 11},
        {'C', 6, 5, 5},
        {'D', 11, 10, 10}
    };

    filiali F[DIMF]={
        {'A', "Cosenza"},
        {'B', "Rende"},
        {'C', "Reggio Calabria"},
        {'D', "Rende"},
        {'E', "Catanzaro"},
        {'F', "Catanzaro"}
    };

    int choice=1;
    printf("== Filiali ==\n");
    printf("1 - Elencare le filiali ritardatarie\n2 - Elencare le statistiche per ogni città\n3 - Trovare filiale migliore\n4 - Elencare le filiali limitate\n0 - Uscire");

    while(choice!=0){
        printf("\nQuale operazione si vuole compiere: ");
        scanf("%d", &choice);

        switch(choice){
            case 1:
                filiali_ritardatarie(M, F);
                break;
            case 2:
                statistiche_citta(M, F);
                break;
            case 3:
            char f;
                printf("\nInserire una filiale: ");
                scanf("%c", &f);
                printf("\nFiliale migliore: %c", filiale_migliore(M, F, f));
                break;
            case 4:
                int d; int k;
                printf("\nFino a quale data: ");
                scanf("%d", &d);
                printf("\nMassimo di operazioni: ");
                scanf("%d", &k);
                citta_limitate(M, F, d, k);
                break;
            default:
                printf("Valore inserito non valido");
                break;
        }
    }

    printf("\nGrazie per aver usato il programma");
    return 0;
}