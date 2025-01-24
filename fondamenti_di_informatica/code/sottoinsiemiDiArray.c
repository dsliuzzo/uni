/*
Scrivere un programma in c che dati due array di interi generi un'array dinamico che contenga tutti e soli gli elementi del primo array che sono > di metà degli elementi pari del secondo array e contemporaneamente < della metà di quelli dispari
*/

// elementi del primo array maggiori di metà degli elementi pari del secondo
// elementi del primo array minori di metà degli elementi dispari del secondo

#include <stdio.h>
#include <stdlib.h>

#define DIM1 20
#define DIM2 15

/*
int trovaPari(int v[], int size){
    int pari[size];
    int i;
    for(i=0; i<size; i++){
        if(v[i]%2==0){
            pari[i] = v[i];
        }
    }
    return pari[i/2];
}

int trovaDispari(int v[], int size){
    int dispari[size];
    int i;
    for(i=0; i<size; i++){
        if(v[i]%2!=0){
            dispari[i] = v[i];
        }
    }
    return dispari[i/2];
}

int main(void){
    int *res;
    int array1[DIM1];
    int array2[DIM2];

    for(int i=0; i<(sizeof(array1)/sizeof(int)); i++){
        if(array1[i]>trovaPari(array2, DIM2) && array2[i]<trovaDispari(array2, DIM2)){
            res= realloc(res, sizeof(*res)+sizeof(int));
            if(res==NULL){
                printf("ERRORE - allocazione di memoria fallita");
                exit(1);
            }
            res[i]=array1[i];
        }
    }
    return 0;
}

*/


int contaPari(int a[]){
    int x = 0;
    for(int i = 0; i<(sizeof(a)/sizeof(int));i++){
        if(a[i]%2==0)
            x++;
    }
    return x;
}

int contaDispari(int a[]){
    return (sizeof(a)/sizeof(int))-contaPari(a);
}

//dato un elemento conta quanti sono gli elementi pari/dispari di cui quell'array è maggiore/minore

int contaMagPari(int a[], int x){
    int count=0;
    for(int i=0; i < sizeof(a)/sizeof(int); i++){
        if(a[i]%2==0 && x>=a[i])
            count++;
    }
    return count;
}

int contaMagDisp(int a[], int x){
    int count=0;
    for(int i=0; i<sizeof(a)/sizeof(int); i++){
        if(a[i]%2==0 && x<=a[i])
            count++;
    }
    return count;
}

void main(void){
    int primo[DIM1], secondo[DIM2];
    //<lettura di primo e secondo>
    int *res=NULL;
    int m_nPari=contaPari(secondo)/2;
    int m_nDisp=contaDispari(secondo)/2;
    for(int i=0; i<DIM1; i++){
        if(contaMagPari(secondo,primo[i])/*numero di elementi pari del secondo vettore maggiorati dall'iesimo elemento del primo vettore*/>=m_nPari && contaMagDispari(secondo, primo[i])<=m_nDisp){
            res=realloc(*res, sizeof(res)+sizeof(int));
            if(res==NULL){
                printf("%s", "Errore di allocazione memoria");
                exit(1);
            }
            res[(sizeof(*res)/sizeof(int))-1] = primo[i];
        }
    }
    //<stampa res[]>
    return;
}