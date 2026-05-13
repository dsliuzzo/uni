#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

void agg(int **v, int n, int *dim) {
    *v = (int *)realloc(*v, (*dim + 1) * sizeof(int));
    if (!*v) {
        printf("\nErrore di allocazione memoria\n");
        exit(1);
    }
    (*v)[*dim] = n;
    (*dim)++;
}

bool verifica(int **v, int n, int dim){
    for(int i; i<dim; i++){
        if((*v)[i]==n){
            return true;
        }
    }
    return false;
}

int main() {
    int* v = NULL;
    int dim = 0;
    int n = 0;

    while (n != -1) {
        printf("Inserire un valore: ");
        scanf("%d", &n);
        if (n != -1) {
            agg(&v, n, &dim);
        }
    }

    printf("dimensione: %d\n\n", dim);
    for (int i = 0; i < dim; i++) {
        printf("%d ", v[i]);
    }
    printf("\n");

    printf("Inserire un numero: ");
    scanf("%d", &n);
    if(verifica(&v, n, dim)){
        printf("\nIl numero inserito è presente");
    } else {
        printf("\nIl numero inserito non è presente");
    }

    free(v);
    return 0;
}