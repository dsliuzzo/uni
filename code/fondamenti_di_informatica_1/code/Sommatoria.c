//calcolare la sommatoria di 1/i con i che va da 1 a n

#include <stdio.h>

double somm(double n){
    return (n==1)?1:1.0/n + somm(n-1);
}

int main(){
    double n, sommatoria;
    printf("Inserire n, verrà calcolata la sommatoria di 1/i con i che va da 1 a n:");
    scanf("%d", & n);
    sommatoria = somm(n);
    printf("Risultato: %d", sommatoria);
}