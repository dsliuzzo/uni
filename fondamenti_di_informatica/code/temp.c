#include <stdio.h>

typedef enum{
    sasso,
    forbice,
    carta
} segno;


int main(){
    segno a = carta;
    printf("%d", a);
    a=a+1;
    printf("%d", a);
}