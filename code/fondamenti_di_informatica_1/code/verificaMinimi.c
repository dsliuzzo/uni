/*
Si scriva in C una funzione verificaMinimi che riceva in ingresso una matrice M di dimensione n*n e restituisce true se e solo se la lista dei valori minimi di ciascuna colonna di M è ordinata in senso non crescente
*/

#include <stdio.h>

#define bool int
#define true 1
#define false 0

#define DIM 6

bool verificaMinimi(int m[][], int size){
    int min[size];
    for(int i=0; i<size; i++){
        min[i]=m[i][j];
        for(int j=0; j<size; j++){
            if(min[i]>m[i][j]){
                min[i]=m[i][j];
            }
        }
    }
    for(int i=1; i<size; i++){
        if(min[i-1]<min[i]){
            return false;
        }
    }
    return true;
}

/*
int main(void){
    int matrice[DIM][DIM] = {
        {23, 5, 18, 9, 12, 30},
        {14, 25, 3, 27, 6, 21},
        {8, 31, 2, 19, 17, 4},
        {20, 11, 13, 26, 7, 22},
        {1, 28, 10, 32, 16, 15},
        {24, 29, 33, 34, 35, 36}
    };
    bool res;
    res=verificaMinimi(matrice, DIM);

    if(res==true){
        printf("%s", "True");
    } else{
        printf("%s", "False");
    }
    return 0;
}
*/