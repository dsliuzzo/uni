#include<stdio.h>

void main(){
    int *x;
    int y=2;
    x=&y;
    printf("%d\n", x); //stampa l'indirizzo
    printf("%d", *x); //stampa la variabile puntata
}