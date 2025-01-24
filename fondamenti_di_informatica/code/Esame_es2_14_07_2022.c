#include <stdio.h>
#include <stdbool.h>

bool valori_crescenti(int v[], int dim){
    for(int i=0; i<(dim-1); i++){
        if(v[i]>v[i+1]){
            return false;
        }
    }
    return true;
}

bool verifica_lista(int v[], int dim, int k){
    int temp[k];
    for(int i=0; i<(dim-k); i++){
        for(int j=0; j<k; j++){
            temp[j] = v[i+j];
        }
        if(valori_crescenti(temp, k)){
            return true;
        }
    }
    return false;
}

int main(){
    int v[10]={4, 5, 5, 6, 1, 1, 2, 2, 5, 3};

    printf("%d", verifica_lista(v, 10, 3));
}