//Dati al più 10 temperature, delimitati dal valore -1
#include<stdio.h>
#define DIM 4

int main(){
    int temp[DIM];
    int k=0; int media=0;
    do{
        printf("Inserire un valore:");
        scanf("%d", &temp[k]);
        printf("K=%d \n", k);
        if(temp[k]!=-1){
            media+=temp[k];
            k++;
        }
    }while((k<DIM)&&(temp[k]!=-1));

    media=media/k;
    printf("La media è:%d", media);
}