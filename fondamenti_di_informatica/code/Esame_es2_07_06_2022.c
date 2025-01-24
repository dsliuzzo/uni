#include <stdio.h>
#include <stdbool.h>

//dato un intero e un'array restituisce true se l'intero è presente nell'array
bool presente(int n, int v[], int dim){
    for(int i=0; i<dim; i++){
        if(v[i]==n){
            return true;
        }
    }
    return false;
}

//somma gli elementi di un array con indice minore o uguale ad un intero
int somma(int a[], int i){
    int somma=0;
    for(int j=0; j<=i; j++){
        somma+=a[j];
    }
    return somma;
}

void verifica_presenza(int a[], int dimA, int b[], int dimB, int v[]){
    for(int i=0; i<dimA; i++){
        if(presente(a[i], b, dimB)){
            v[i]=a[i];
        } else {
            v[i] = somma(a, i);
        }
    }
    return;
}

int main(){
    int a[6]={5,2,3,5,9,3};
    int b[3]={3,5,7};
    int v[6];
    verifica_presenza(a, 6, b, 3, v);

    for(int i=0; i<6; i++){
        printf("%d ", v[i]);
    }
    return 0;
}