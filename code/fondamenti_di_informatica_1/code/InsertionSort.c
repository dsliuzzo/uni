#include<stdio.h>
#define DIM 5

void InsertionSort(int arr[], int size){
    int i, j, buffer;
    for(i=0; i<size; i++){
        j=i+1;
        while(j>0 && arr[j]<arr[j-1]){
            buffer=arr[j-1];
            arr[j-1]=arr[j];
            arr[j]=buffer;
            j--;
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
    int arr[DIM]={4,1,8,5,3};
    printf("array:\n");
    PrintArray(arr, DIM);
    InsertionSort(arr, DIM);
    printf("array ordinato:\n");
    PrintArray(arr, DIM);
    return 0;
}