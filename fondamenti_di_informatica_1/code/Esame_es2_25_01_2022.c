#include <stdio.h>
#include <stdbool.h>
#include <string.h>

#define DIMMAX 50

typedef struct{
    char *chiave;
    int val;
} dizionario;

bool verifica_dati(char L[][DIMMAX], int dimL, dizionario D[], int dimD){
    int count = 0;
    for(int i=0; i<dimD;i++){
        for(int j=0;j<dimL;j++){
            if(strcmp(D[i].chiave, L[j])==0 && j!= D[i].val){
                count++;
            }
        }
    }
    if(count==dimD){
        return true;
    } else {
        return false;
    }
}


int main(){
    int dimL = 3;
    char L[3][DIMMAX]={
        "ciao",
        "mondo",
        "luce"
    };
    int dimD = 2;
    dizionario D[2]={
        {"ciao", 1},
        {"mondo", 2}
    };

    printf("%d", verifica_dati(L, dimL, D, dimD));

    return 0;
}