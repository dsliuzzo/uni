#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>

#define DIM_SCACCHIERA 8

//definisce il tipo di valore che può essere contenuto in una casella
typedef enum{
    v,
    b, //bianco
    n //nero
} c;
const char* casella[] = { "v", "b", "n"};
void stampaScacchiera(c s[DIM_SCACCHIERA][DIM_SCACCHIERA], int sizeS){
    printf("%s", "Scacchiera:\n");
    for(int i=0; i<sizeS; i++){
        for(int j=0; j<sizeS; j++){
            printf("%s ", casella[s[i][j]]);
        } 
        printf("\n");
    }
}


int main(void){
    c s[DIM_SCACCHIERA][DIM_SCACCHIERA] = {0};

    s[2][1]=b;

    stampaScacchiera(s, DIM_SCACCHIERA);
}