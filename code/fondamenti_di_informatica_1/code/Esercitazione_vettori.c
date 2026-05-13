/*dati 2 vettori m ed n di interi restituire un vettore r di interi contenenti i valori x in m : numero di elementi <x in n siano almeno x*/

#include <stdio.h>
#include <stdlib.h>

#define bool int
#define true 1
#define false 0

typedef enum{
    SUCCESSO, //almeno un elemento nel vettore
    NESSUN_VALORE
} Stato;

int contaMinori(int arr[], int size, int x){
    int count=0;
    for(int i=0; i<size; i++)
        if(arr[i]<x)
            count++;
    return count;
}

Stato calcoloArrayR(int m[], int sizeM, int n[], int sizeN, int r[], int *sizeR){
    int index=0;
    int count;
    Stato s=NESSUN_VALORE;

    for(int i=0; i<sizeM; i++){
        count = contaMinori(n, sizeN, m[i]);
        if(count>=m[i]){
            r[index] = m[i];
            index++;
            s = SUCCESSO;
        }
    }
    //operatore di dereference
    *sizeR = index;
    return s;
}

int main(void){
    Stato s;
    int m[4] = {2,3,1,4};
    int dim_m = sizeof(m)/sizeof(int);
    int n[7] = {0,1,5,3,6,3,1};
    int dim_n = sizeof(n)/sizeof(int);

    int *r= (int*) malloc(sizeof(n)*sizeof(int)); //faccio il casting perchè malloc restituisce un puntatore di tipo void, quindi ho bisogno del casting per inserire il valore all'interno di un int *
    if(r==NULL){
        printf("%s", "Errore di allocazione memoria");
        exit(1);
    }

    int dim_r = 0;
    s = calcoloArrayR(m, dim_m, n, dim_n, r, &dim_r);

    switch (s){
        case SUCCESSO:
            printf("%s%d\n[", "Dimensione r: ", dim_r);
            for(int i = 0; i<dim_r; i++)
                printf("%d ", r[i]);
            printf("]\n");
            break;
        default:
            printf("%s", "Nessun valore soddisfa la condizione.\n");
    }

    free(r);

    exit(0);
}