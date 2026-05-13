#include <stdio.h>
#include <stdbool.h>

#define N 5
#define A 8

bool trovato(int n, int arr[][A]){
    int trovato_riga=0;
    for(int i=0; i<N; i++){
        for(int j=0; j<A; j++){
            if(n==arr[i][j]){
                trovato_riga++;
                break;
            }
        }
    }
    if(trovato_riga==N){
        return true;
    } else {
        return false;
    }
}

int calcolo_elementi_comuni(int arr[][A], int res[]){
    int count=0;
    for(int i=0; i<4; i++){
        if(trovato(arr[1][i], arr)==true){
            res[count] = arr[1][i];
            count++;
        }
    }
    return count;
}

int main(void){
    int arr[N][A]={
        {4,9,15,22},
        {3,4,9,15,18,22,27,55},
        {4,9,10,15,18,22},
        {4,9,15,19,22},
        {4,5,6,9,15,16}
    };
    int res[A];
    int size = calcolo_elementi_comuni(arr, res);

    printf("%d\n", size);
    for(int i=0; i<size; i++){
        printf("%d\t", res[i]);
    }

    return 0;
}