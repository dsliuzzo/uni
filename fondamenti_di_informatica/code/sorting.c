#include <stdio.h>

#define DIM 10

void selection(int v[], int dim){
    int minIndex;
    int buffer;
    for(int i=0; i<dim; i++){
        minIndex = i;
        for(int j=i; j<dim; j++){
            if(v[j]<v[minIndex]){
                minIndex = j;
            }
        }
        buffer = v[i];
        v[i] = v[minIndex];
        v[minIndex] = buffer;
    }
    return;
}

void bubble(int v[], int dim){
    int buffer;
    for(int i=dim-1; i>=0; i--){
        for(int j=0; j<dim-1; j++){
            if(v[j]>v[j+1]){
                buffer = v[j];
                v[j] = v[j+1];
                v[j+1] = buffer;
            }
        }
    }
    return;
}

void insertion(int v[], int dim){
    int buffer;
    for(int i=1; i<dim; i++){
        for(int j=i; j>0; j--){
            if(v[j]<v[j-1]){
                buffer = v[j];
                v[j] = v[j-1];
                v[j-1] = buffer;
            }
        }
    }
    return;
}

int main(){
    int v[DIM]={4,5,2,3,7,8,0,1,6,9};
    printf("Array:\n");
    for(int i=0; i<DIM; i++){
        printf("%d ", v[i]);
    }

    insertion(v, DIM);

    printf("\n\nSorted:\n");
    for(int i=0; i<DIM; i++){
        printf("%d ", v[i]);
    }
}