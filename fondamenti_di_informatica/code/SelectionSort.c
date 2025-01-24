#include <stdio.h>
#define DIM 5

void SelectionSort(int arr[], int size){
    int min, buffer, i, j;
    //imposto min=i, confronto arr[min] con arr[j], se arr[j] è più piccolo allora min=j, finchè j<size, a quel punto faccio swap tra arr[min] e arr[i]
    for(i=0; i<size; i++){
        min=i;
        for(j=i+1; j<size; j++){
            if(arr[j]<arr[min]){
                min=j;
            }
        }
        buffer=arr[i];
        arr[i]=arr[min];
        arr[min]=buffer;
    }
}

void PrintArray(int arr[], int size){
    for(int i=0; i < size; i++){
        printf("%d ", arr[i]);
    }
    printf("\n");
}

int main(){
    int arr[DIM]={9,5,1,6,3};
    printf("array:\n");
    PrintArray(arr, DIM);
    SelectionSort(arr, DIM);
    printf("array ordinato:\n");
    PrintArray(arr, DIM);
    return 0;
}