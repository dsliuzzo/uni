#include <stdio.h>
#include <stdbool.h>
#define dimL2 14
#define dimL1 3

int count_elementi(int x, int L[], int size){
    int count=1;
    for(int i=0; i<size; i++){
        if(L[i]==x){
            count++;
            for(int j=i+1; j<size && L[j]==x; j++){
                count++;
            }
        } else {
            count=0;
        }
        if(count==x)
            return count;
    }
}
bool verifica_array(int L1[], int size1, int L2[], int size2){
    for(int i=0; i<size1; i++){
        if(count_elementi(L1[i], L2, size2)==L1[i]){
            return true;
        }
    }
    return false;
}

int main(void){
    int L1[dimL1]={3,1,4};
    int L2[dimL2]={-3,2,1,5,4,4,4,4,-1,2,3,3,3,3};

    printf("%d", verifica_array(L1, dimL1, L2, dimL2));
}