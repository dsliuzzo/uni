//Si scriva una funzione estrai_lista che riceve in ingresso due liste di interi L1 ed L2 e restituisce una lista contenente alcuni degli elementi di L1. In particolare, la lista restituita contiene l'elemento L1[i] = v se e solo se il valore v compare almeno v volte in L2 in posizioni aventi indice maggiore o uguale ad i.

#include <stdio.h>
#include <stdbool.h>

#define DIM1 5
#define DIM2 8

//funzione che vonta quante volte compare un numero v in un array, dalla posizione v in poi
int nVolte(int a[], int sizeA, int v, int p){
    int count=0;
    for(int i=p; i<sizeA; i++){
        if(a[i] == v){
            count++;
        }
    }

    return count;
}

//la funzione restituisce il numero di elementi che compongono l'array finale
int estrai_lista(int a1[], int size1, int a2[], int size2, int r[]){
    int count = 0;
    for(int i=0; i<size1; i++){
        if(a1[i]<=nVolte(a2, size2, a1[i], i)){
            r[count]=a1[i];
            count++;
        }
    }

    return count;
}

int main(void){
    int a1[DIM1]={2,3,4,2,1};
    int a2[DIM2]={1,2,3,2,3,1,3,3};

    int r[DIM1];
    int sizeR=estrai_lista(a1, DIM1, a2, DIM2, r);

    printf("array1:\n");
    for(int i=0; i<DIM1; i++){
        printf("%d ", a1[i]);
    }
    printf("\narray2:\n");
    for(int i=0; i<DIM2; i++){
        printf("%d ", a2[i]);
    }
    printf("\nRisultato:\n");
    for(int i=0; i<sizeR; i++){
        printf("%d ", r[i]);
    }

    return 0;
}