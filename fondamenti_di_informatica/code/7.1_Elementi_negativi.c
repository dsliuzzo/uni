/*Data una matrice di dimensione uguale a 10 righe per 10 colonne contenente elementi
reali, scrivere un programma in linguaggio C per individuare se esistono righe o colonne
composte solo da elementi negativi.*/

#include<stdio.h>

#define bool int
#define true 1
#define false 0
#define DIM 10

bool control(float m[DIM][DIM]){
    int nNeg=0;

    for(int i=0; i < DIM; i++){
        nNeg=0;
        for(int j=0; j < DIM; j++){
            if(m[i][j]<0)
                nNeg += 1;
        }
        if(nNeg == DIM)
            return true;
    }
    for(int j=0; j < DIM; j++){
        nNeg=0;
        for(int i=0; i < DIM; i++){
            if(m[i][j]<0)
                nNeg += 1;
        }
        if(nNeg == DIM)
            return true;
    }
    return false;
}

int main(){
    bool trovato;
    float matrice[DIM][DIM] = {
        { -1.1, -2.2, 3.3, -4.4, 5.5, -6.6, 7.7, -8.8, 9.9, -10.0},
        { -1.1, 2.2, -3.3, 4.4, -5.5, 6.6, -7.7, 8.8, -9.9, 10.0},
        { -9.8, -8.7, 7.6, -6.5, 5.4, -4.3, 3.2, -2.1, 1.0, -0.9},
        { -0.9, 1.8, -2.7, 3.6, -4.5, 5.4, -6.3, 7.2, -8.1, 9.0},
        { -8.1, -7.2, 6.3, -5.4, 4.5, -3.6, 2.7, -1.8, 0.9, -0.8},
        { -0.7, 0.6, -0.5, 0.4, -0.3, 0.2, -0.1, 0.0, 0.1, -0.2},
        { -0.3, -0.4, 0.5, -0.6, 0.7, -0.8, 0.9, -1.0, 1.1, -1.2},
        { -1.3, 1.4, -1.5, 1.6, -1.7, 1.8, -1.9, 2.0, -2.1, 2.2},
        { -2.3, -2.4, 2.5, -2.6, 2.7, -2.8, 2.9, -3.0, 3.1, -3.2},
        { -3.3, 3.4, -3.5, 3.6, -3.7, 3.8, -3.9, 4.0, -4.1, 4.2}
    };

    trovato = control(matrice);

    if(trovato==true)
        printf("La matrice contiene almeno una riga o una colonna contenente solo valori negativi");
    else
        printf("La matrice non contiene righe o colonne interamente negative");
    
    return 0;
}