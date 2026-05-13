#include <stdio.h>

int main (){
   int a,b, somma;
   printf ("%s","Scrivi un numero");
   scanf("%d", &a);
   printf ("%s","Scrivi un altro numero");
   scanf("%d", &b);
   somma=a+b;
   printf ("%d", somma);

   return 0;
}