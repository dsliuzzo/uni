#include <stdio.h>
#include <stdbool.h>
#define DIM 30

bool verifica(int n, int v[]){
    for(int i=0; i<DIM; i++){
        if(v[i]==n){
            return true;
        }
    }
    return false;
}


int main() {
    int vettore[DIM] = {1, 3, 5, 7, 9, 11, 20, 19, 4, 7, 2, 15, 21, 28, 64, 51, 56, 78, 5, 9, 12, 2, 24, 25, 26, 27, 36, 70, 80, 10};
    int n;
    // Stampa i valori del vettore
    for (int i = 0; i < 30; i++) {
        printf("%d - ", vettore[i]);
    }
    printf("\n");

    

    do{
        printf("\nInserire un numero: ");
        scanf("%d", &n);
        if(verifica(n, vettore)){
            printf("\nIl valore è presente nel vettore");
        } else {
            printf("\n Il valore non è presente nel vettore");
        }
    } while(verifica(n, vettore));
    

    return 0;
}