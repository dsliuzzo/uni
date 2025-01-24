#include <stdio.h>
#include <string.h>
#include <stdbool.h>
#include <stdlib.h>

#define ORA 4

typedef struct{
    char *cf;
    char *cognome;
    char *tipo;
} prenotati;

void printC(char *C[ORA][7]){
    printf("\n\n===================== Calendario =====================");
    printf("\nLun\tMar\tMer\tGio\tVen\tSab\tDom");
    printf("\n======================================================");
    for(int i=0; i<ORA; i++){
        printf("\n");
        for(int j=0; j<7; j++){
            if(strcmp(C[i][j], "")==0){
                printf("------\t");
            } else {
                printf("%s\t", C[i][j]);
            }
        }
    }
    return;
}

void printP(prenotati P[], int dim){
    printf("\n\n===== Prenotazioni =====");
    printf("\nCF\tCognome\tTipo");
    printf("\n=========================");
    for(int i=0; i<dim; i++){
        printf("\n%s\t%s\t%s", P[i].cf, P[i].cognome, P[i].tipo);
    }
    return;
}

//1 elimina la prenotazione di cf e cambia il numero aggiornato di prenotati
void annulla_prenotazione(char *C[ORA][7], prenotati *P, int *nPren, char *cf){
    for(int i=0; i<ORA; i++){
        for(int j=0; j<7; j++){
            if(C[i][j] == cf){
                C[i][j]="";
            }
        }
    }
    for(int i=0; i<*nPren; i++){
        if(P[i].cf == cf){
            for(int j=i; j<(*nPren-1); j++){
                P[j].cf = P[j+1].cf;
                P[j].cognome = P[j+1].cognome;
                P[j].tipo = P[j+1].tipo;
            }            
        }
    }
    (*nPren)--;
    
    return;
}

//dato un produttore calcola il numero di dosi necessarie per la settimana
int dosi_produttore(prenotati P[], int dim, char *prod){
    int count=0;
    for(int i=0; i<dim; i++){
        if(!strcmp(P[i].tipo, prod)){
            count++;
        }
    }
    return count;
}
//conta il numero di volte che una determinata stringa è presente nell'array di stringhe
int presente(char *s, char *v[], int dim){
    int count=0;
    for(int i=0; i<dim; i++){
        if(s == v[i]){
            count++;
        }
    }
    return count;
}
//2 stampa per ogni produttore il numero di dosi totale per la settimana
void approvvigionamenti(prenotati P[], int dim){
    char *temp[dim];
    int count=0;
    printf("\n\n== Approvvigionamenti ==\n");
    printf("Fornitore\tdosi");
    printf("\n========================");
    for(int i=0; i<dim; i++){
        if(i==0 || presente(P[i].tipo, temp, count)==0){
            printf("\n%s\t\t%d", P[i].tipo, dosi_produttore(P, dim, P[i].tipo));
            temp[count] = P[i].tipo;
            count++;
        }
    }
    return;
}

//dato un cf restituisce il tipo di vaccino
char *tipo_cf(prenotati P[], int nPren, char *cf){
    for(int i=0; i<nPren; i++){
        if(P[i].cf==cf){
            return P[i].tipo;
        }
    }
}

//riceve in ingresso una giornata (un indice i) e restituisce true se è omogenea
int giornata_omogenea(char *C[ORA][7], prenotati P[], int dim){
    char *tipo;
    bool ok;
    for(int i=0; i<7; i++){
        ok = true;
        for(int j=0; j<ORA; j++){
            if(C[j][i]!=""){
                tipo = tipo_cf(P, dim, C[j][i]);
            }
        }
        for(int j=0; j<ORA; j++){
            if(C[j][i]!="" && tipo_cf(P, dim, C[j][i])!=tipo){
                ok=false;
            }
        }
        if(ok==true){
            return i;
        }

    }
    return -1;
}

//confronta due stringhe restituisce true se s1 è precedente alfabeticamente a s2
bool confronto(char *s1, char *s2){
    int n = strcmp(s1, s2);
    if(n<0){
        return true;
    }
    if(n>0){
        return false;
    }
}
//dato un cf ne restituisce il cognome
char *cf_cognome(prenotati P[], int dim, char *cf){
    for(int i=0; i<dim; i++){
        if(cf==P[i].cf){
            return P[i].cognome;
        }
    }
}
//dato un indice del giorno i verifica se per quel giorno i cognomi sono in ordine alfabetico
bool verifica_giorno(char *C[ORA][7], prenotati P[], int nPren, int i){
    char *temp;
    bool trovato = false;
    for(int j=0; j<ORA; j++){
        if(C[j][i]!="" && trovato==false){
            trovato=true;
            temp = cf_cognome(P, nPren, C[j][i]);
        } else if(C[j][i]!="" && trovato == true){
            if(!confronto(temp, cf_cognome(P, nPren, C[j][i]))){
                return false;
            } else {
                temp = cf_cognome(P, nPren, C[j][i]);
            }
        }
    }
    return true;
}
//verifica se per ogni giorno della settimana i prenotati si vaccinano in ordina alfabetico
bool prenotazioni_ordinate(char *C[ORA][7], prenotati P[], int nPren){
    for(int i=0; i<7; i++){
        if(verifica_giorno(C, P, nPren, i)==false){
            return false;
        }
    }
    return true;
}


int main(){
    char *C[ORA][7]={
        {"", "NRI789", "CHR123", "", "", "", ""},
        {"LLG234", "", "", "MNC789", "VLA987", "BRN345", ""},
        {"BNC123", "RSS123", "PLI123", "SRR987", "", "CNT654", ""},
        {"", "VRD456", "RSS456", "", "", "", "RSS765"}
    };
    int nPren = 14;

    prenotati P[14] = {
        {"RSS456", "Rossi", "Moderna"},
        {"VRD456", "Verdi", "Moderna"},
        {"NRI789", "Neri", "Moderna"},
        {"BNC123", "Bianchi", "Astra"},
        {"VLA987", "Viola", "Astra"},
        {"RSS765", "Russo", "J&J"},
        {"BRN345", "Bruno", "J&J"},
        {"CHR123", "Chiari", "Pfizer"},
        {"CNT654", "Conte", "Pfizer"},
        {"MNC789", "Mancini", "Pfizer"},
        {"LLG234", "Allegri", "Pfizer"},
        {"SRR987", "Sarri", "Astra"},
        {"RSS123", "Rossi", "Moderna"},
        {"PLI123", "Pioli", "Moderna"}
    };

    int choice;
    printf("== Vaccinazioni ==");
    do{
        printf("\n\n1) mostrare il calendario\n2) mostrare le prenotazioni\n3) annullare una prenotazione\n4) visualizzare gli approvvigionamenti\n5) giornata omogenea\n6) prenotazioni ordinate\n0) Uscire");
        printf("\nQuale operazione si vuole compiere? ");
        scanf("%d", &choice);
        while(getchar()!=10);
        switch(choice){
            case 0:
                break;
            case 1:
                printC(C);
                break;
            case 2:
                printP(P, nPren);
                break;
            case 3:
            char *cf;
                printf("\n\nInserire il codice fiscale della prenotazione da cancellare: ");
                scanf("%s", &cf);
                annulla_prenotazione(C, P, &nPren, cf);
                printf("\nPrenotazione cancellata\n");
                break;
            case 4:
                approvvigionamenti(P, nPren);
                break;
            case 5:
                printf("\n\nGiornata omogenea: %d", giornata_omogenea(C, P, nPren));
                break;
            case 6:
                if(prenotazioni_ordinate(C, P, nPren)){
                    printf("\n\nLe prenotazioni sono in ordine alfabetico");
                } else {
                    printf("\n\nLe prenotazioni non sono in ordine alfabetico");
                }
                break;
            default:
                printf("\n\nCodice inserito non valido");
                break;
        }
    }while(choice!=0);
    return 0;
}