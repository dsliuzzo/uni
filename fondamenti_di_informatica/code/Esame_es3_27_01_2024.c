#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <stdbool.h>
#define dimM 9
#define dimC 4
#define CAR 40

typedef struct{
    int cc;
    int data;
    float amm;
} mov;

typedef struct{
    int cc;
    char *citta;
    char *nome_cl;
} dizionario;

typedef struct{
    int cc;
    char *nome_cl;
    float saldo;
} situazione;

typedef struct{
    char *nome_cl;
    float saldo;
} saldo_cl;

//Data in ingresso un codice e una data restituisce il saldo per quel determinato codice fino alla data inserita, se la data è -1 non considera la data
float somma_mov_cc(mov M[], int sizeM, int cc, int data){
    float tot=0.00;
    for(int i=0; i<sizeM; i++){
        if(M[i].cc==cc && (data==-1 || M[i].data <= data)){
            tot+=M[i].amm;
        }
    }
    return tot;
}

//dato in ingresso un nome fa la somma di tutti i movimenti intestati a lui
float somma_mov_cl(mov M[], int sizeM, dizionario C[], int sizeC, char *nome_cl){
    float tot=0.00;
    for(int i=0; i<sizeC; i++){
        if(strcmp(nome_cl, C[i].nome_cl)==0){
            tot+=somma_mov_cc(M, sizeM, C[i].cc, -1);
        }
    }
    return tot;
}

//gli si passa come parametro un nome e un arraydi struct, se il nome è già presente restituisce true altrimenti false
bool verifica_cl(char *nome_cl, saldo_cl SC[], int sizeSC){
    for(int i=0; i<sizeSC; i++){
        if(strcmp(nome_cl, SC[i].nome_cl)==0){
            return true;
        }
    }
    return false;
}

//aggiungi cl e il suo saldo a un array di struct dinamico
saldo_cl *aggiungi_cl(saldo_cl *SC, int *sizeSC, char *nome_cl, float saldo){
    SC=(saldo_cl *)realloc(SC, (*sizeSC+1)*sizeof(saldo_cl));
    if(SC==NULL){
        printf("Errore di allocazione memoria");
        exit(1);
    }
    SC[*sizeSC].nome_cl=malloc(sizeof(char)*CAR);
    if(SC[*sizeSC].nome_cl==NULL){
        printf("Errore di allocazione memoria");
        exit(1);
    }
    strcpy(SC[*sizeSC].nome_cl, nome_cl);
    SC[*sizeSC].saldo = saldo;
    (*sizeSC)++;
    return SC;
}

//associa ad una filiale passata per parametro un codice e lo restituisce
int cod_città(dizionario C[], int sizeC, char *citta){
    for(int i=0;i<sizeC;i++){
        if(strcmp(citta, C[i].citta)==0){
            return C[i].cc;
        }
    }
    return -1;
}
//conta il numero di movimenti relativi ad una specifica filiale
int n_mov(mov M[], int sizeM, dizionario C[], int sizeC, char *citta){
    int nMov=0;
    for(int i=0; i<sizeM; i++){
        if(M[i].cc==cod_città(C, sizeC, citta)){
            nMov++;
        }
    }
    return nMov;
}

//conta il più piccolo numero di movimenti fatti per filiale
int min_mov(mov M[], int sizeM, dizionario C[], int sizeC){
    int minMov;
    for(int i=0; i<sizeC; i++){
        if(i==0){
            minMov=n_mov(M, sizeM, C, sizeC, C[i].citta);
        } else if(minMov>n_mov(M,sizeM,C,sizeC,C[i].citta)){
            minMov=n_mov(M,sizeM,C,sizeC,C[i].citta);
        }
    }
    return minMov;
}

//dato un codice verifica se ha saldo positivo
bool saldo_P(mov M[], int sizeM, int cc){
    if(somma_mov_cc(M, sizeM, cc, -1)>=0){
        return true;
    }
    return false;
}

//verifica se un cliente è già presente nella lista
bool verifica_cl_target(char *nome_cl, char *cl_target[], int sizeTarget){
    for(int i=0; i<sizeTarget; i++){
        if(strcmp(nome_cl, cl_target[i])==0){
            return true;
        }
    }
    return false;
}

//FUNZIONE 1
void meno_movimenti(mov M[], int sizeM, dizionario C[], int sizeC, char meno_mov[CAR]){
    for(int i=0; i<sizeC; i++){
        if(n_mov(M, sizeM, C, sizeC, C[i].citta)==min_mov(M, sizeM, C, sizeC)){
            strcpy(meno_mov, C[i].citta);
        }
    }
    return;
}

//FUNZIONE 2
void clienti_target(mov M[], int sizeM, dizionario C[], int sizeC, char ***cl_target, int *sizeTarget){
    for(int i=0; i<sizeC; i++){
        int num_P=0;
        for(int j=0; j<sizeC; j++){
            if(strcmp(C[j].nome_cl, C[i].nome_cl)==0 && saldo_P(M, sizeM, C[j].cc)){
                num_P++;
            }
        }
        if(num_P>=2){
            if (!verifica_cl_target(C[i].nome_cl, *cl_target, *sizeTarget)) {
                *cl_target = realloc(*cl_target, (*sizeTarget + 1) * sizeof(char *));
                if(*cl_target==NULL){
                    printf("Errore di allocazione memoria");
                    exit(1);
                }
                (*cl_target)[*sizeTarget] = malloc(sizeof(char) * CAR);
                if ((*cl_target)[*sizeTarget] == NULL) {
                    printf("Errore di allocazione memoria\n");
                    exit(1);
                }
                strcpy((*cl_target)[*sizeTarget], C[i].nome_cl);
                (*sizeTarget)++; 
            }
        }
    }
}

//FUNZIONE 3
void statistiche(mov M[], int sizeM, dizionario C[], int sizeC, saldo_cl **SC, int *sizeSC){
    for(int i=0; i<sizeC; i++){
        if(i==0){
            *SC=aggiungi_cl(*SC, sizeSC, C[i].nome_cl, somma_mov_cl(M, sizeM, C, sizeC, C[i].nome_cl));
        } else {
            if(!verifica_cl(C[i].nome_cl, *SC, *sizeSC)){
                *SC=aggiungi_cl(*SC, sizeSC, C[i].nome_cl, somma_mov_cl(M, sizeM, C, sizeC, C[i].nome_cl));
            }
        }
    }
    return;
}

//FUNZIONE 4
void situazione_alla_data(mov M[], int sizeM, dizionario C[], int sizeC, situazione S[], int data){
    for(int i=0; i<sizeC; i++){
        S[i].cc=C[i].cc;
        S[i].nome_cl=malloc(sizeof(char)*CAR);
        if(S[i].nome_cl==NULL){
            printf("Errore allocazione di memoria");
            exit(1);
        }
        strcpy(S[i].nome_cl, C[i].nome_cl);
        S[i].saldo=somma_mov_cc(M, sizeM, S[i].cc, data);
    }
    return;
}



int main(void){
    mov M[dimM]={
        {0,1,100.00},
        {3,1,100.00},
        {2,2,200.00},
        {0,2,-300.00},
        {2,3,-400.00},
        {0,4,100.00},
        {0,5,200.00},
        {1,9,-100.00},
        {2,9,400.00}
    };
    dizionario C[dimC]={
        {0, "Rende", "Rossi"},
        {1, "Cosenza", "Verdi"},
        {2, "Crotone", "Rossi"},
        {3, "Rossano", "Verdi"}
    };

    //TEST FUNZIONE 1
    printf("FUNZIONE 1\n");
    char meno_mov[CAR];
    meno_movimenti(M, dimM, C, dimC, meno_mov);
    printf("%s\n", meno_mov);

    printf("\n-------------------------------------------------\n\n");

    //TEST FUNZIONE 2
    printf("FUNZIONE 2\n");
    char **cl_target = NULL;
    int sizeTarget=0;
    clienti_target(M, dimC, C, dimC, &cl_target, &sizeTarget);
    for(int i=0; i<sizeTarget; i++){
        printf("%s\t", cl_target[i]);
    }

    printf("\n-------------------------------------------------\n\n");

    //TEST FUNZIONE 3
    printf("FUNZIONE 3\n");
    saldo_cl *SC=NULL;
    int sizeSC=0;
    statistiche(M, dimM, C, dimC, &SC, &sizeSC);
    for(int i=0; i<sizeSC; i++){
        printf("%s\t", SC[i].nome_cl);
        printf("%.2lf\n", SC[i].saldo);
    }

    for(int i=0; i<sizeSC; i++){
        free(SC[i].nome_cl);
    }
    free(SC);
    
    printf("\n-------------------------------------------------\n\n");

    //TEST FUNZIONE 4
    printf("FUNZIONE 4\n");
    situazione SD[dimC];
    situazione_alla_data(M, dimM, C, dimC, SD, 9);
    for(int i=0; i<dimC; i++){
        printf("%d\t", SD[i].cc);
        printf("%s\t", SD[i].nome_cl);
        printf("%.2lf\n", SD[i].saldo);
    }

    return 0;
}