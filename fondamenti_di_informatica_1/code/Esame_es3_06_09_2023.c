#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>
#include <string.h>

#define DIMM 7
#define DIMT 4

typedef enum{
    persona, //0
    tenda, //1
    camper, //2
    bungalow //3
} modal;
const char* modalita[]={"persona", "tenda", "camper", "bungalow"};

typedef struct{
    modal mod;
    int num; //totale persone
    int bamb; //numero di bambini
    int checkG; //giorno del check in
    int checkM; //mese del check in
    int giorni;
} info;

typedef struct{
    modal key;
    int valL; //valore per luglio
    int valA; //valore per agosto
    int valS; //valore per settembre
} tarif; //tariffario

//funzione che mi calcola il numero di giorni nel mese m (inserito come intero) per la riga i
int calcGiorni(info M[], int m, int i){
    int giorno = M[i].checkG;
    int mese = M[i].checkM;
    int count7 = 0;
    int count8 = 0;
    int count9 = 0;
    for(int j=0; j<M[i].giorni;j++){
        if(giorno > 31){
            giorno = 1;
            mese++;
        }
        giorno++;
        switch(mese){
            case 7:
                count7++;
                break;
            case 8:
                count8++;
                break;
            case 9:
                count9++;
                break;
        }
    }
    switch(m){
        case 7:
            return count7;
        case 8:
            return count8;
        case 9:
            return count9;
    }
}

//1 CALCOLA COSTO
//dato un indice calcola il costo totale del soggiorno
int calcola_costo(info M[],tarif T[], int i){
    int giorniL = calcGiorni(M, 7, i);
    int giorniA = calcGiorni(M, 8, i);
    int giorniS = calcGiorni(M, 9, i);
    int valPersL = T[0].valL;
    int valPersA = T[0].valA;
    int valPersS = T[0].valS;
    int costoMod=0;
    int nPersone = M[i].num - M[i].bamb;
    switch(M[i].mod){
        case tenda:
            costoMod = ((T[1].valL)*giorniL)+((T[1].valA)*giorniA)+((T[1].valS)*giorniS);
            break;
        case camper:
            costoMod = ((T[2].valA)*giorniA)+((T[2].valL)*giorniL)+((T[2].valS)*giorniS);
            break;
        case bungalow:
            costoMod = ((T[3].valA)*giorniA)+((T[2].valL)*giorniL)+((T[2]).valS*giorniS);
            break;
    }
    int costoPer = ((nPersone*valPersL*giorniL) + (nPersone*valPersA*giorniA) + (nPersone*valPersS*giorniS));
    int costoTot = costoPer + costoMod;
    return costoTot;
}

//2 STATISTICHE
//restituisce la media di persone adulte all'interno della chiave selezionata
int statistiche(info M[], modal chiave){
    int media=0;
    int count=0;
    for(int i=0; i<DIMM; i++){
        if(M[i].mod==chiave){
            count++;
            media=media+(M[i].num-M[i].bamb);
        }
    }
    media=media/count;
    return media;
}

//verifica se n è contenuto in v e restituisce true se non c'è
bool assente (int v[], int n){
    for(int i=0;i<DIMM;i++){
        if(v[i]==n){
            return false;
        }
    }
    return true;
}
//3 CLASSIFICA
//restituisce in v gli indici delle righe di M ordinate per costo della permanenza
void classifica(info M[], tarif T[], int v[]){
    int max;
    int maxPrec;
    for(int i=0; i<DIMM; i++){
        max=0;
        for(int j=0; j<DIMM; j++){
            if((j==0 || max<calcola_costo(M,T,j)) && assente(v, j)){
                max = calcola_costo(M,T,j);
            }
        }
        for(int j=0; j<DIMM; j++){
            if(calcola_costo(M, T, j)==max){
                v[i]=j;
            }
        }
    }
    return;
}

//4 PERSONE MESE
//calcola il numero di persone presenti nel camping nel mese m
int persone_mese(info M[], int m){
    int count=0;
    for(int i=0;i<DIMM;i++){
        if(calcGiorni(M, m, i)!=0){
            count+=M[i].num;
        }
    }
    return count;
}

int main(){
    info M[DIMM]={
        {tenda, 4, 2, 29, 7, 10},
        {camper, 2, 0, 20, 7, 10},
        {bungalow, 5, 3, 1, 8, 7},
        {bungalow, 10, 6, 1, 8, 15},
        {tenda, 3, 1, 26, 8, 9},
        {camper, 4, 0, 29, 8, 5},
        {tenda, 2, 0, 1, 9, 10}
    };
    tarif T[DIMT]={
        {persona, 10, 15, 8},
        {tenda, 5, 10, 3},
        {camper, 10,15,8},
        {bungalow, 20, 25, 18}
    };

    printf("%d\n", calcola_costo(M, T, 4));
    printf("%d\n\n", statistiche(M, tenda));
    int v[DIMM]={9,9,9,9,9,9,9};
    classifica(M, T, v);
    for(int i=0; i<DIMM; i++){
        printf("%d ", v[i]);
    }

    printf("\nPersone nel camping nel mese %d : %d", 9, persone_mese(M, 9));

    return 0;
}