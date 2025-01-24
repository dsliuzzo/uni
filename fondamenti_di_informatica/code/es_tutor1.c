#include <stdio.h>
#include <stdbool.h>

#define DIM1 4
#define DIM2 6

int pari(int m[DIM1][DIM2]){
    int count =0;
    int countPari=0;
    for(int i=0; i<DIM1; i++){
        count =0;
        for(int j=0; j<DIM2; j++){
            if((m[i][j]%2)==0){
                count++;
            }
        }
        if(count>=(DIM2/2)){
            countPari++;
        }
    }
    return countPari;
}

int colonne(int m[DIM1][DIM2]){
    int prodotto=DIM1*DIM2;
    int count=0;
    for(int i=0; i<DIM2; i++){
        int somma=0;
        for(int j=0; j<DIM1; j++){
            somma=somma+m[j][i];
        }
        if(somma<prodotto){
            count++;
        }
    }
    return count;
}

int main(){
    int m[DIM1][DIM2]={
        {3,5,1,6,3,2}, //D //19
        {2,8,9,15,3,9}, //D //8
        {4,2,10,21,23,8}, //P
        {1,4,2,2,4,5} //D
    };

    printf("Numero di righe che hanno almeno la metà degli elementi pari:%d", pari(m));
    printf("\nNumero di colonne la cui somma è minore del prodotto di riga e colonna:%d", colonne(m));

    return 0;
}