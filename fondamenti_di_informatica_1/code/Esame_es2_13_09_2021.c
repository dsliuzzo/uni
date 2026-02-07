#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

//prende in ingresso un'array e un numero e verifica se ci sono coppie di quel numero all'interno dell'array, ne restituisce il numero
int count_coppie(int l[], int size, int num){
    int count=0;
    for(int i=0;i<size; i++){
        if(l[i]==l[i+1] && l[i]==num){
            count++;
        }
    }
    return count;
}

int verifica_coppie(int l[], int size, int k){
    //numero di coppie trovate
    int n=0;
    int i;
    for(i=0; i<size && n<k; i++){
        n=count_coppie(l, size, l[i]);
    }
    return(n>=k)?l[i]:-1;
}

int main(void){
    int l[14]={5, 5, 7, 1, 1, 7, 5, 7, 5, 5, 5, 1, 1, 3};
    int k=3;
    int n=verifica_coppie(l, sizeof(l)/sizeof(int), k);
    printf("%d", n);
    return 0;
}  