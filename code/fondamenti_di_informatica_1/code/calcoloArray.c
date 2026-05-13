/*
Scrivere una funzione calcolaArray che riceve in ingresso un array di interi L ed un intero x e restituisce un array di array contenente parte degli elementi dell'array in ingresso tali che:
- il numero dei suoi elementi è pari ad x
- contiene solo elementi maggiori o uguali ad x
- la somma dei suoi elementi è divisibile per x

Gli elementi dei sottoarray sono contigui
*/

#include<stdio.h>
#include <stdlib.h>
#define bool int
#define true
#define false 0

//dato un vettore (passo il riferimento dell'indice iniziale) e x verifica se la somma degli elementi è multiplo di x e se ogni elemento del vettore è >= x, restituendo true o false
bool verificaSomma(int v[], int i, int x){
    int s=0;
    for(int j=i; j<(i+x); j++){
        s+=v[j];
    }
    return (s%x==0)?true:false;
}

bool verificaMaggiore(int v[], int i, int x){
    for(int j=i; j<(i+x); j++){
        if(v[j]<=x){
            return false;
        }
    }
    return true;
}

//data la matrice risultato dinamica, e l'indice di base e la lunghezza aggiunge gli elementi dell'array al risultato
void aggiungi(int *r[], int i, int x, const int v[]){
    r=realloc(*r, (sizeof(*r)+(sizeof(int)*x)));
    //FONDAMENTALE - verificare che sia andata a buon fine
    if(r==0){
        printf("Errore di allocazione memoria\n");
        exit(1);
    }
    for(int j=i; j<(i+x); j++){
        r[(sizeof(*r)/(sizeof(int)*x))-1][j-i]=v[j];
    }
}

//per ogni sottoarray utilizzo le funzioni per fare i controlli e successivamente le inserisco nell'array di risultato
void calcoloArray(int l[], int x, int dim){
    int *r=NULL;
    int i;
    //VECCHIA VERSIONE -> for(i=0; i<sizeof(l)/sizeof(int)-x; i++){...}
    //utilizzare il sizeof() su un array passato a funzione restituirà la dimensione del puntatore (perchè c passa gli array alle funzioni tramite puntatori), ho ovviato a questo problema passando alla funzione anche la dimensione, calcolata nel main e passata dalla variabile dim
    for(i=0; i<(dim-x); i++){
        if(verificaSomma(l, i, x) && verificaMaggiore(l, i, x)){
            aggiungi(r, i, x, l);
        }
    }
    printf("%s", "Risultato: \n");
    for(int j=0; j<sizeof(*r)*i;j++){
        printf("%d  ", r[j]);
    }
}

int main(){
    int array[20] = {1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2};
    int x=3;

    calcoloArray(array, x, sizeof(array)/sizeof(int));
}