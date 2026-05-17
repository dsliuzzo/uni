/* Supponiamo di avere un vettore */
#include<stdio.h>
#define DIM 5
#define bool int
#define true 1
#define false 0

int ricerca(int val, int v[DIM]){
    int k = 0;
    bool trovato=false;
    while(k<DIM && trovato==false){
        if(v[k]==val)
            trovato = true;
        else
            k++;
    }

    return (trovato==false)? -1: k;
}

int main(){
    int val;
    int v[DIM]={1,2,3,4,5};
    int indice;
    printf("Inserire un valore: ");
    scanf("%d", &val);
    indice = ricerca(val, v);
    printf("%d", indice);
}