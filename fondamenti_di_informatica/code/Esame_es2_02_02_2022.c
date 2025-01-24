#include <stdio.h>
#include <stdbool.h>

#define DIM 5
#define NLET 20

//restituisce true se L1 e L2 hanno lettere in comune
bool lettere_uguali(char L1[], char L2[]){
    for(int i=0; i<NLET && L1[i]!='\0'; i++){
        for(int j=0; j<NLET && L2[j]!='\0'; j++){
            if(L1[i]==L2[j]){
                return true;
            }
        }
    }
    return false;
}

bool verifica_lista(char L[][NLET], int k){
    if(k>DIM){
        printf("Errore: numero inserito maggiore del numero di stringhe");
        return false;
    }
    for(int i=0; i<(DIM-k); i++){
        for(int j=1; j<=k; j++){
            if(lettere_uguali(L[i], L[i+j])){
                return false;
            }
        }
    }
    return true;
}

int main(){
    char L[DIM][NLET]={
        {"abcd"},
        {"efgh"},
        {"ijk"},
        {"ab"},
        {"cdef"}
    };

    for(int i=0; i<DIM; i++){
        printf("%s\n", L[i]);
    }

    printf("\n%d", verifica_lista(L, 2));

    return 0;
}