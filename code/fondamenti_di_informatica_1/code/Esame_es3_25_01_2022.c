#include <stdio.h>
#include <stdbool.h>
#include <string.h>

#define DIMC 10
#define DIMD 10

typedef struct{
    char *sq1;
    char *sq2;
    int g1;
    int g2;
    int data;
} calendario;

typedef struct{
    char * sq;
    char * citta;
    int cod;
} dizionario;

//calcola il punteggio di una squadra sq fino alla data d
int pt(calendario C[], int dim, char *sq, int d){
    int pt=0;
    for(int i=0; i<dim; i++){
        if(strcmp(sq, C[i].sq1)==0 && C[i].data <= d){
            if(C[i].g1>C[i].g2){
                pt+=3;
            } else if (C[i].g1 == C[i].g2){
                pt+=1;
            }
        } else if(strcmp(sq, C[i].sq2)==0 && C[i].data <= d){
            if(C[i].g2>C[i].g1){
                pt+=3;
            } else if (C[i].g2 == C[i].g1){
                pt+=1;
            }
        }
    }
    return pt;
}
//1 CLASSIFICA
void calcola_classifica(calendario C[], int dimC, dizionario D[], int dimD, int d){
    for(int i=0; i<dimD; i++){
        printf("\n%s\t%d", D[i].sq, pt(C, dimC, D[i].sq, d));
    }
    return;
}

//data una sqadra sq mi calcola il numero di goal segnati in partite con quella squadra
int goal_sq_casa(calendario C[], int dim, char* sq){
    int tot=0;
    for(int i=0; i<dim; i++){
        if(strcmp(C[i].sq1, sq)==0){
            tot= tot + C[i].g1 + C[i].g2;
        }
    }
    return tot;
}
//associa alla citta c il totale dei goal segnati al suo interno
int goal_citta(calendario C[], int dimC, dizionario D[], int dimD, char *c){
    int tot=0;
    for(int i=0; i<dimD; i++){
        if(strcmp(D[i].citta, c)==0){
            tot+=goal_sq_casa(C, dimC, D[i].sq);
        }
    }
    return tot;
}
//massimo dei goal segnati tra tutte città
int max_goal_citta(calendario C[], int dimC, dizionario D[], int dimD){
    int max;
    for(int i=0; i<dimD; i++){
        if(i==0 || max <goal_citta(C, dimC, D, dimD, D[i].citta)){
            max = goal_citta(C, dimC, D, dimD, D[i].citta);
        }
    }
    return max;
}
//2 CITTA' CON IL MASSIMO DEI GOAL
char *citta(calendario C[], int dimC, dizionario D[], int dimD){
    for(int i=0; i<dimD;i++){
        if(max_goal_citta(C, dimC, D, dimD)==goal_citta(C, dimC, D, dimD, D[i].citta)){
            return D[i].citta;
        }
    }
    return "";
}

//data una squadra mi calcola il numero di goal fatti da essa
int tot_goal_sq(calendario C[], int dim, char* sq){
    int tot=0;
    for(int i=0; i<dim; i++){
        if(strcmp(C[i].sq1, sq)==0){
            tot+= C[i].g1;
        } else if(strcmp(C[i].sq2, sq)==0){
            tot+= C[i].g2;
        }
    } 
    return tot;
}
//data una squadra mi calcola il numero di goal subiti da essa
int tot_sub_sq(calendario C[], int dim, char* sq){
    int tot=0;
    for(int i=0; i<dim; i++){
        if(strcmp(C[i].sq1, sq)==0){
            tot+= C[i].g2;
        } else if(strcmp(C[i].sq2, sq)==0){
            tot+= C[i].g1;
        }
    } 
    return tot;
}
//3 DIFFERENZA RETI
void differenza_goal(calendario C[], int dimC, dizionario D[], int dimD){
    for(int i=0; i<dimD; i++){
        printf("\n%s\t%d", D[i].sq, (tot_goal_sq(C, dimC, D[i].sq)-tot_sub_sq(C, dimC, D[i].sq)));
    }
    return;
}

//creazione array di array cod pt
void cod_pt(calendario C[], int dimC, dizionario D[], int dimD, int v[][2]){
    for(int i=0; i<dimD; i++){
        v[i][0] = D[i].cod;
        v[i][1] = pt(C, dimC, D[i].sq, 31);
    }
    return;
}
//ordina cod_pt
void ord_cod_pt(int v[][2], int dim){
    int buffer[2];
    for(int i=1; i<dim; i++){
        for(int j=0; j<(dim-i); j++){
            if(v[j][1]<v[j+1][1]){
                buffer[0]=v[j][0];
                buffer[1]=v[j][1];
                v[j][0]=v[j+1][0];
                v[j][1]=v[j+1][1];
                v[j+1][0]=buffer[0];
                v[j+1][1]=buffer[1];
            }
        }
    }
    return;
}
//4 riordina D per punteggio decrescente
void classifica_ordinata(calendario C[], int dimC, dizionario D[], int dimD){
    int v[DIMD][2];
    cod_pt(C, DIMC, D, DIMD, v);
    ord_cod_pt(v, DIMD);
    for(int i=0; i<DIMD; i++){
        for(int j=0; j<DIMD; j++){
            if(D[j].cod == v[i][0]){
                printf("\n%s\t%d", D[j].sq, v[i][1]);
            }
        }
    }
    return;
}

int main(){
    calendario C[DIMC]={
        {"Milan", "Sassuolo", 1, 2, 1},
        {"Inter", "Lazio", 2, 2, 1},
        {"Napoli", "Udinese", 1, 0, 1},
        {"Juve", "Spezia", 3, 2, 1},
        {"Fiorentina", "Roma", 1, 1, 1},
        {"Sassuolo", "Juve", 1, 1, 2},
        {"Udinese", "Inter", 0, 0, 2},
        {"Roma", "Napoli", 2, 0, 2},
        {"Fiorentina", "Milan", 1, 1, 2},
        {"Lazio", "Spezia", 2, 2, 2}
    };
    dizionario D[DIMD]={
        {"Milan", "Milano", 0},
        {"Juve", "Torino", 1},
        {"Inter", "Milano", 2},
        {"Roma", "Roma", 3},
        {"Napoli", "Napoli", 4},
        {"Udinese", "Udine", 5},
        {"Fiorentina", "Firenze", 6},
        {"Sassuolo", "Sassuolo", 7},
        {"Lazio", "Roma", 8},
        {"Spezia", "La Spezia", 9}
    };

    printf("== Serie A ==");
    int choice;
    do{
        printf("\n\n1) classifica\n2) città con il massimo dei goal\n3) differenza reti\n4) classifica per punteggio\n0) Uscire");
        printf("\nQuale operazione si vuole compiere? ");
        scanf("%d", &choice);
        switch(choice){
            case 1:
                int d;
                printf("\nFino a quale data si vuole visualizzare la classifica? ");
                scanf("%d", &d);
                calcola_classifica(C, DIMC, D, DIMD, d);
                break;
            case 2:
                printf("\nLa città con il massimo dei goal è: %s", citta(C, DIMC, D, DIMD));
                break;
            case 3:
                printf("\nDifferenza reti:");
                differenza_goal(C, DIMC, D, DIMD);
                break;
            case 4:
                printf("\nClassifica in ordine di punteggio:\n");
                classifica_ordinata(C, DIMC, D, DIMD);
                break;
            case 0:
                printf("\nAlla prossima");
                break;
            default:
                printf("\nCodice inserito non valido, riprovare\n");
                break;
        }
    }while (choice!=0);

    return 0;

}