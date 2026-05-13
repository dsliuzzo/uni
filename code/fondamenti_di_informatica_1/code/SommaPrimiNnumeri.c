#include <stdio.h>

int sommaFinoA(int n){
    return (n==0)?0:n+sommaFinoA(n-1);
}

int main(){
    int num, somma;
    printf("Somma dei primi n numeri, inserisci n:");
    scanf("%d", &num);
    somma = sommaFinoA(num);
    printf("La somma dei primi %d numeri è uguale a %d", num, somma);
}
