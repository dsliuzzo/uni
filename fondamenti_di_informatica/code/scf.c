#include <stdio.h>
#include <stdbool.h>

typedef enum{
    carta,
    forbice,  // ^
    sasso    // |
} segno;

#define DIM 3

int scf(segno g1, segno g2){
    if(g1==0 && g2==(DIM-1)) return 1;
    if(g2==0 && g1==(DIM-1)) return 2;
    if(g1>g2) return 1;
    if(g2>g1) return 2;
    return 0;
}

int main(){
    char temp;
    segno g1;
    segno g2;
    char continuare;
    printf("== SASSO CARTA FORBICE ==");
    do{
        printf("\nGiocatore 1: ");
        temp = getchar();
        while(getchar()!=10);
        switch(temp){
            case 's': g1 = sasso; break;
            case 'c': g1 = carta; break;
            case 'f': g1 = forbice; break;
        }
        printf("\nGiocatore 2: ");
        temp = getchar();
        while(getchar()!=10);
        switch(temp){
            case 's': g2 = sasso; break;
            case 'c': g2 = carta; break;
            case 'f': g2 = forbice; break;
        }
        int winner = scf(g1, g2);
        switch(winner){
            case 0:
                printf("\nPareggio");
                break;
            case 1:
                printf("\nVince il giocatore 1");
                break;
            case 2:
                printf("\nVince il giocatore 2");
                break;
        }
        printf("\n\nContinuare a giocare? (s/n)\n");
        continuare = getchar();
        while(getchar()!=10);
    } while (continuare == 's');
    return 0;
}
