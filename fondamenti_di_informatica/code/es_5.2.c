#include <stdio.h>
#include <stdbool.h>

int main(){
    bool trovato=true;
    int N;
    do{
        printf("Quanti valori saranno inseriti?\n");
        scanf("%d", &N);
    } while (N>=30);
    
    int v[N];
    for(int i=0; i<N; i++){
        printf("Inserire un valore: ");
        scanf("%d", &v[i]);
        printf("\n");
    }

    for(int i=1; i<N; i++){
        if(v[i]!=v[i-1]){
            trovato = false;
        }
    }

    if(trovato){
        printf("\nTutti gli elementi inseriti sono uguali");
    } else {
        printf("\nGli elementi inseriti non sono tutti uguali");
    }
}