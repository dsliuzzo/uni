#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>

#define DIM_SCACCHIERA 8

//definisce il tipo di valore che può essere contenuto in una casella
typedef enum{
    v, //vuoto
    b, //bianco
    n  //nero
} c;
const char* casella[] = { "v", "b", "n"};

//funzioni che contano il numero di punti ottenuti in ogni singola direzione
int  conta_righe_destra(c s[DIM_SCACCHIERA][DIM_SCACCHIERA], int dimScacchiera, c colore, int i, int j){
    int pt=0;
    bool trovato=false;
    for(int k=j+1; k<DIM_SCACCHIERA && trovato == false; k++){
        if((s[i][k]==b && colore==n)||(s[i][k]==n && colore==b)){
            pt++;
        } else if((s[i][k]==b && colore==b)||(s[i][k]==n && colore==n)){
            trovato = true;
        }
    }
    return pt;
}
int conta_righe_sinistra(c s[DIM_SCACCHIERA][DIM_SCACCHIERA], int dimScacchiera, c colore, int i, int j){
    int pt=0;
    bool trovato=false;
    for(int k=j-1; k>=0 && trovato == false; k--){
        if((s[i][k]==b && colore==n)||(s[i][k]==n && colore==b)){
            pt++;
        } else if((s[i][k]==b && colore==b)||(s[i][k]==n && colore==n)){
            trovato = true;
        }
    }
    return pt;
}
int conta_colonne_giu(c s[DIM_SCACCHIERA][DIM_SCACCHIERA], int dimScacchiera, c colore, int i, int j){
    int pt=0;
    bool trovato=false;
    for(int k=i+1; k<DIM_SCACCHIERA && trovato == false; k++){
        if((s[k][j]==b && colore==n)||(s[k][j]==n && colore==b)){
            pt++;
        } else if((s[k][j]==b && colore==b)||(s[k][j]==n && colore==n)){
            trovato = true;
        }
    }
    return pt;
}
int conta_colonne_su(c s[DIM_SCACCHIERA][DIM_SCACCHIERA], int dimScacchiera, c colore, int i, int j){
    int pt=0;
    bool trovato=false;
    for(int k=j-1; k>=0 && trovato == false; k--){
        if((s[k][j]==b && colore==n)||(s[k][j]==n && colore==b)){
            pt++;
        } else if((s[k][j]==b && colore==b)||(s[k][j]==n && colore==n)){
            trovato = true;
        }
    }
    return pt;
}
int conta_diagonale_destra(c s[DIM_SCACCHIERA][DIM_SCACCHIERA], int dimScacchiera, c colore, int i, int j){
    int pt=0;
    bool trovato=false;
    i++;
    for(int k=j+1; k<DIM_SCACCHIERA && i<DIM_SCACCHIERA && trovato == false; k++){
        if((s[i][k]==b && colore==n)||(s[i][k]==n && colore==b)){
            pt++;
        } else if((s[i][k]==b && colore==b)||(s[i][k]==n && colore==n)){
            trovato = true;
        }
        i++;
    }
    return pt;
}
int conta_diagonale_sinistra(c s[DIM_SCACCHIERA][DIM_SCACCHIERA], int dimScacchiera, c colore, int i, int j){
    int pt=0;
    bool trovato=false;
    i--;
    for(int k=j-1; k>=0 && i>=0 && trovato == false; k--){
        if((s[i][k]==b && colore==n)||(s[i][k]==n && colore==b)){
            pt++;
        } else if((s[i][k]==b && colore==b)||(s[i][k]==n && colore==n)){
            trovato = true;
        }
        i--;
    }
    return pt;
}

//funzione che verifica se un posto e già occupato, se non lo è calcola il numero di punti ottenuti da quella mossa
int conta_catture(c s[DIM_SCACCHIERA][DIM_SCACCHIERA], int dimScacchiera, c colore, int i, int j){
    int tot;
    if(s[i][j]==b || s[i][j]==n){
        return -1;
    }
    tot = conta_righe_destra(s, dimScacchiera, colore, i, j) + conta_righe_sinistra(s, dimScacchiera, colore, i, j) + conta_colonne_giu(s, dimScacchiera, colore, i, j) + conta_colonne_su(s, dimScacchiera, colore, i, j) + conta_diagonale_destra(s, dimScacchiera, colore, i, j) + conta_diagonale_sinistra(s, dimScacchiera, colore, i, j);
    return tot;
}

//funzione che cambia il valore di ogni singola casella se sono stati ottenuti punti (controlla anche se una mossa è valida o no e lo notifica all'utente)
bool mossa(c s[DIM_SCACCHIERA][DIM_SCACCHIERA], int dimScacchiera, c colore, int i, int j){
    if(conta_catture(s, DIM_SCACCHIERA, colore, i, j)==0){
        printf("\n%s\n", "Mossa non valida");
        return false;
    }
    if(conta_righe_destra(s, DIM_SCACCHIERA, colore, i, j)>0){
        s[i][j]=colore;
        for(int k=j+1; k< DIM_SCACCHIERA && s[i][k]!=colore; k++)
            s[i][k]=colore;
    }
    if(conta_righe_sinistra(s, DIM_SCACCHIERA, colore, i, j)>0){
        s[i][j]=colore;
        for(int k=j-1; k>=0 && s[i][k]!=colore; k--)
            s[i][k]=colore;
    }
    if(conta_colonne_giu(s, DIM_SCACCHIERA, colore, i, j)>0){
        s[i][j]=colore;
        for(int k=i+1; k<DIM_SCACCHIERA && s[k][j]!=colore; k++)
            s[k][j]=colore;
    }
    if(conta_colonne_su(s, DIM_SCACCHIERA, colore, i, j)>0){
        s[i][j]=colore;
        for(int k=j-1; k>=0 && s[k][j]!=colore; k--)
            s[k][j]=colore;
    }
    if(conta_diagonale_destra(s, DIM_SCACCHIERA, colore, i, j)>0){
        s[i][j]=colore;
        i++;
        for(int k=j+1; k<DIM_SCACCHIERA && i<DIM_SCACCHIERA && s[i][k]!=colore; k++){
            s[i][k]=colore;
            i++;
        }
    }
    if(conta_colonne_su(s, DIM_SCACCHIERA, colore, i, j)>0){
        s[i][j]=colore;
        i--;
        for(int k=j-1; k>=0 && i>=0 && s[k][j]!=colore; k--){
            s[k][j]=colore;
            i--;
        }
    }
    return true;
}

//verifica se è possibile ottenere k punti da una qualsiasi mossa di un determinato colore
bool esiste_mossa_valida(c s[DIM_SCACCHIERA][DIM_SCACCHIERA], int dimScacchiera, c colore, int k){
    int tot=0;
    for(int i=0; i<DIM_SCACCHIERA; i++){
        for(int j=0; j<DIM_SCACCHIERA; j++){
            tot=tot+conta_catture(s, DIM_SCACCHIERA, colore, i, j);
        }
    }
    return (tot==k)?true:false;
}

//verifica se la partita è finita e restituisce il vincitore
c vittoria(c s[DIM_SCACCHIERA][DIM_SCACCHIERA], int dimScacchiera){
    int countB=0, countN=0;
    if(esiste_mossa_valida(s, DIM_SCACCHIERA, b, 0) && esiste_mossa_valida(s, DIM_SCACCHIERA, n, 0)){
        printf("\n%s\n", "Partita terminata");
        for(int i=0; i<DIM_SCACCHIERA; i++){
            for(int j=0; j<DIM_SCACCHIERA; j++){
                if(s[i][j]==b){
                    countB++;
                }
                if(s[i][j]==n){
                    countN++;
                }
            }
        }
    } else {
        printf("\n%s", "Partita non terminata");
        return v;
    }

    if(countB>countN){
        return b;
    } else if(countN>countB){
        return n;
    } else{
        return v;
    }
}

//funzione accessoria che stampa la scacchiera
void stampaScacchiera(c s[DIM_SCACCHIERA][DIM_SCACCHIERA], int sizeS){
    printf("\n%s\n", "    Scacchiera:\n");
    printf("%s\n", "    0 1 2 3 4 5 6 7");
    printf("%s\n", "    ---------------");
    for(int i=0; i<sizeS; i++){
        printf("%d%s", i, " | ");
        for(int j=0; j<sizeS; j++){
            printf("%s ", casella[s[i][j]]);
        } 
        printf("\n");
    }
}

void setup(c s[DIM_SCACCHIERA][DIM_SCACCHIERA], int dimScacchiera){
    int i,j;
    printf("%s\n", "  -- OTHELLO --");
    stampaScacchiera(s, DIM_SCACCHIERA);
    printf("\n%s\n", "b inserisci il primo valore (indice di colonna e indice di riga):");
    scanf("%d", &i);
    scanf("%d", &j);
    s[i][j]=b;
    stampaScacchiera(s, DIM_SCACCHIERA);
    do{
        printf("\n%s\n", "n inserisci il primo valore (indice di colonna e indice di riga):");
        scanf("%d", &i);
        scanf("%d", &j);
        if(s[i][j]==b){
            printf("\n%s\n", "Posizione già occupata, riprovare");
        } else {
            s[i][j]=n;
        }
    } while(s[i][j]==b);
    stampaScacchiera(s, DIM_SCACCHIERA);
    return;
}

int main(void){
    c s[DIM_SCACCHIERA][DIM_SCACCHIERA]={0};
    /*={
        {b, b, b, b, b, b, b, b},
        {b, b, b, b, b, b, b, b},
        {b, b, b, b, b, b, b, b},
        {b, b, b, b, b, b, b, b},
        {b, b, b, b, b, b, b, b},
        {b, b, b, b, b, b, b, b},
        {b, b, b, b, b, b, b, b},
        {b, b, b, b, b, b, b, b},
    };*/
    int turno=1;
    bool ok=false;
    int i=0, j=0;

    setup(s, DIM_SCACCHIERA);

    while(vittoria(s, DIM_SCACCHIERA)==v){
        do{
            printf("\n%s%s\n", casella[turno], " dove vuoi posizionare la pedina? (indice di colonna e indice di riga)");
            scanf("%d", &i);
            scanf("%d", &j);
            if(s[i][j]==v){
                ok = mossa(s, DIM_SCACCHIERA, (c)turno, i, j);
                stampaScacchiera(s, DIM_SCACCHIERA);
            } else {
                printf("\n%s\n", "Posizione già occupata, riprovare");
            }
        } while(s[i][j]==v || !ok);
        if(turno==1)
            turno=2;
        else turno=1;
    }

    printf("\n%s%s", "Il vincitore è: ", casella[vittoria(s, DIM_SCACCHIERA)]);

    return 0;
}