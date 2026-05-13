#include <stdio.h>

void hanoi(int n, int x, int y, int z){
    if(n==1){
        printf("muovi da %d a %d \n", x, y);
    }
    else {
        hanoi(n-1,x,z,y);
        printf("muovi da %d a %s \n", x, y);
        hanoi(n-1, z, y, x);
    }
}
int main(){
    int nDischi;
    char x='x';
    char y='y';
    char z='z';

    printf("Quanti dischi ci saranno? ");
    scanf("%d", &nDischi);
    printf("\n");
    hanoi(nDischi,x,y,z);
    
    return 0;
}