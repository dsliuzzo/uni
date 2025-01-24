#include<stdio.h>
#define DIM 5

void BubbleSort(int arr[], int size){
    int i, j, buffer;
    for(i=0; i<size; i++){
        for(j=0; j<(size-i); j++){
            if(arr[j] > arr[j+1]){
                buffer = arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=buffer;
            }
        }
    }
}

void PrintArray(int arr[], int size){
    for(int i=0; i < size; i++){
        printf("%d ", arr[i]);
    }
    printf("\n");
}

int main(){
    int arr[DIM]={2,5,8,6,3};
    printf("array:\n");
    PrintArray(arr, DIM);
    BubbleSort(arr, DIM);
    printf("array ordinato:\n");
    PrintArray(arr, DIM);
    return 0;
}