#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>
#include <ctype.h>

#define DIM 20

//conta il numero di lettere del vettore inserito
int nLettere(char v[DIM]){
    int count=0;
    for(int i=0;v[i]!='\0'; i++){
        count++;
    }
    return count;
}

//stampa la parola con le lettere oscurate se non sono state indovinate
void stampaParola(char v[], int mask[], int const dim){
    printf("\n");
    for(int i=0; i<dim; i++){
        if(mask[i]==0){
            printf("_ ");
        } else {
            printf("%c ", v[i]);
        }
    }
    return;
}

//verifica se la lettera l è presente nel vettore v e aggiorna la mask in quella posizione, se era presente restituisce true
bool verificaLettera(char v[], int mask[], int const dim, char l){
    bool trovato=false;
    for(int i=0; i<dim; i++){
        if(v[i]==l){
            mask[i]='1';
            trovato = true;
        }
    }
    return trovato;
}

//verifica chi ha vinto e stampa il risultato
void risultati(int const errori){
    if(errori<10){
        printf("\n\nHAI INDOVINATO LA PAROLA\nIL VINCITORE E' IL GIOCATORE 2");
    } else {
        printf("\n\nLA PAROLA NON E' STATA INDOVINATA\nIL VINCITORE E' IL GIOCATORE 1");
    }
    return;
}

int main(void){
    char v[DIM];
    int mask[DIM]={0};
    int errori=0;
    int punti=0;
    char l;
    bool presente=false;

    printf("\nGIOCATORE 1\nInserisci una parola: ");
    scanf("%s", &v);
    printf("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n");

    int dim=nLettere(v);

    while(getchar()!=10)
    stampaParola(v, mask, dim);
    while(errori<10 && punti<dim){
        printf("\n\nGIOCATORE 2\nInserisci una lettera: ");
        scanf("%c", &l);
        presente = verificaLettera(v, mask, dim, l);
        if(presente){
            printf("\nLa lettera inserita e' presente nella parola");
            punti++;
        } else {
            printf("\nLa lettera inserita non e' presente nella parola");
            errori++;
        }
        printf("\nErrori commessi: %d\n", errori);
        stampaParola(v, mask, dim);
        while(getchar()!=10){}
    }
    risultati(errori);
    return 0;
}