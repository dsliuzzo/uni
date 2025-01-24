#include <stdio.h>  //includere libreria che mi permetta di usare le operazione di lettura e scrittura printf e scanf

 int main(){
    //corpo della funzione
    //dichiarazione variabili
    int n; //variabile utile a memorizzare il fattoriale
    int f; //variabile utile a immagazzinare il risultato
    int n1; //contatore

    //input
    printf("Inserire un valore di n ");
    scanf("%d"/*ci aspettiamo di leggere un singolo intero*/, &n/*memorizzare il valore della variabile all'interno di n*/);
    //calcolo
    f=1;
    n1=1;
    while(n1<=n){
        f=f*n1;
        n1++;
    }
    //output
    printf("Il fattoriale di %d è %d", n, f); //%d verrà rimpiazzato dalle variabili messe come argomento del printf
    return 0;
 }