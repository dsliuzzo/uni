#include <stdio.h>
#include <stdbool.h>
#include <string.h>
#define DIMCF 4
#define DIMB 10
#define DIMP 5

typedef enum{
    tribuna,
    curva
} settore;

char *printSet(settore set){
    if(set==tribuna){
        return "tribuna";
    } else {
        return "curva";
    }
}

typedef struct{
    char cf[DIMCF]; //codice fiscale
    char *s1; //squadra di casa
    char *s2; //squadra ospite
    settore set; //settore
} biglietti;

typedef struct{
    char *sq; //squadra
    int pC; //prezzo curva
    int pT; //prezzo tribuna
} prezzi;

//funzione che dato un cf calcola il numero di partite per cui ha acquistato un biglietto
int acquisti_cf(biglietti B[], int dim, char cf[DIMCF]){
    int count =0;
    for(int i=0; i<dim; i++){
        if(strcmp(B[i].cf, cf) == 0){
            count++;
        }
    }
    return count;
}
//funzione che dato un cf calcola il numero di partite per cui ha acquistato un biglietto in un determinato settore set
int acquisti_cf_set(biglietti B[], int dim, char cf[DIMCF], settore set){
    int count =0;
    for(int i=0; i<dim; i++){
        if(strcmp(B[i].cf, cf) == 0 && B[i].set==set){
            count++;
        }
    }
    return count;
}
//restituisce il settore da cui cf ha assistito al maggior numero di partite
settore set_prefe(biglietti B[], int dim, char cf[DIMCF]){
    if(acquisti_cf_set(B, dim, cf, curva)>(acquisti_cf(B, dim, cf)/2)){
        return curva;
    }
    return tribuna;
}
//1 restituisce true se due clienti sono simili
bool clienti_simili(biglietti B[], int dim, char cf1[DIMCF], char cf2[DIMCF]){
    if(set_prefe(B, dim, cf1)==set_prefe(B, dim, cf2)){
        return true;
    }
    return false;
}

//dato un cf ne calcola la spesa media sostenuta
int sp_media(biglietti B[], int dimB, prezzi P[], int dimP, char cf[3]){
    int media=0;
    for(int i=0; i<dimB; i++){
        if(strcmp(B[i].cf, cf)==0){
            for(int j=0; j<dimP; j++){
                if(strcmp(B[i].s1, P[j].sq)==0){
                    if(B[i].set==curva){
                        media+=P[j].pC;
                    } else {
                        media+=P[j].pT;
                    }
                }
            }
        }
    }
    media = media / acquisti_cf(B, dimB, cf);
    return media;
}
//restituisce true se il carattere c è presente nell'array arr
bool presente(char c, char arr[], int dim){
    for(int i=0; i<dim; i++){
        if(c==arr[i]){
            return true;
        }
    }
    return false;
}
//2 stampa una tabella che associa ad ogni cliente la spesa media sostenuta
void spesa_media_clienti(biglietti B[], int dimB, prezzi P[], int dimP){
    char elenco[dimB];
    int count=0;
    for(int i=0; i<dimB; i++){
        if(!presente(B[i].cf[2], elenco, dimB)){
            printf("\n%s\t%d", B[i].cf, sp_media(B, dimB, P, dimP, B[i].cf));
            elenco[count]=B[i].cf[2];
            count++;
        }
    }
    return;
}

//restituisce true se la squadra sq ha giocato almeno una partita in casa
bool casa(biglietti B[], int dim, char *sq){
    for(int i=0; i<dim; i++){
        if(strcmp(B[i].s1, sq) == 0){
            return true;
        }
    }
    return false;
}
//data una squadra sq ne restituisce l'incasso totale
int incassi(biglietti B[], int dimB, prezzi P[], int dimP, char* sq){
    int tot=0;
    for(int i=0; i<dimB; i++){
        if(strcmp(B[i].s1, sq)==0){
            for(int j=0; j<dimP; j++){
                if(strcmp(P[j].sq, sq)==0){
                    if(B[i].set==curva){
                        tot+=P[j].pC;
                    } else {
                        tot+=P[j].pT;
                    }
                }
            }
        }
    }
    return tot;
}
//3 stampa una tabella con tutti gli incassi per ogni squadra che ha giocato almeno una partita in casa
void statistiche(biglietti B[], int dimB, prezzi P[], int dimP){
    for(int i=0; i<dimP; i++){
        if(casa(B, dimB, P[i].sq)){
            printf("\n%s\t%d", P[i].sq, incassi(B, dimB, P, dimP, P[i].sq));
        }
    }
    return;
}

//verifica se un cliente ha assistito ad almeno n partite
bool nPartite(biglietti B[], int dim, char cf[DIMCF], int n){
    int count =0;
    for(int i=0; i<dim; i++){
        if(strcmp(B[i].cf, cf)==0){
            count++;
        }
    }
    if(dim>=n){
        return true;
    } else {
        return false;
    }
}
//verifica se un cliente ha acquistato biglietti solo per la tribuna
bool cf_tribuna(biglietti B[], int dim, char cf[DIMCF]){
    for(int i=0; i<dim; i++){
        if(strcmp(B[i].cf, cf)==0 && B[i].set==curva){
            return false;
        }
    }
    return true;
}
//4 stampa i clienti vip
void clienti_vip(biglietti B[], int dim, int n){
    char elenco[dim];
    int count=0;
    for(int i=0; i<dim; i++){
        if(!presente(B[i].cf[2], elenco, count) && nPartite(B, dim, B[i].cf, n) && cf_tribuna(B, dim, B[i].cf)){
            printf("\n%s", B[i].cf);
            elenco[count] = B[i].cf[2];
            count++;
        }
    }
    return;
}

int main(){
    biglietti B[DIMB]={
        {"CF1", "Milan", "Inter", tribuna},
        {"CF2", "Milan", "Inter", curva},
        {"CF3", "Milan", "Inter", tribuna},
        {"CF4", "Milan", "Inter", curva},
        {"CF1", "Juve", "Napoli", curva},
        {"CF2", "Juve", "Napoli", curva},
        {"CF3", "Juve", "Napoli", tribuna},
        {"CF1", "Inter", "Lazio", curva},
        {"CF2", "Inter", "Lazio", curva},
        {"CF4", "Inter", "Lazio", tribuna},
    };

    prezzi P[DIMP]={
        {"Milan", 30, 50},
        {"Inter", 30, 50},
        {"Napoli", 35, 45},
        {"Juve", 35, 60},
        {"Lazio", 25, 50},
    };

    int choice;
    printf("== Biglietti del campionato ==");
    do{
        printf("\n\n1) clienti simili\n2) spesa media per cliente\n3) statistiche\n4) clienti vip\n0) uscire");
        printf("\nQuale operazione si vuole compiere? ");
        scanf("%d", &choice);
        while(getchar()!=10);
        switch(choice){
            case 1:
                char cf1[DIMCF]; char cf2[DIMCF];
                printf("\nInserire il primo cliente: ");
                scanf("%s", &cf1);
                printf("Inserire il secondo cliente: ");
                scanf("%s", &cf2);
                if(clienti_simili(B, DIMB, cf1, cf2)){
                    printf("\nI due clienti inseriti sono simili");
                } else {
                    printf("\nI due clienti inseriti non sono simili");
                }
                break;
            case 2:
                printf("\n");
                spesa_media_clienti(B, DIMB, P, DIMP);
                break;
            case 3:
                printf("\n");
                statistiche(B, DIMB, P, DIMP);
                break;
            case 4:
                int n;
                printf("\nInserire il minimo di biglietti acquistati per considerare un cliente vip: ");
                scanf("%d", &n);
                clienti_vip(B, DIMB, n);
                break;
            case 0:
                printf("\nGrazie per aver usato il programma");
                break;
            default:   
                printf("\nCodice inserito non valido, riprovare");
                break;
        }
    } while (choice!=0);
    return 0;
}