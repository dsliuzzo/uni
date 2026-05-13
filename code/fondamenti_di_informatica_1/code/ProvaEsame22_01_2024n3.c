//Prova di esame 22 Gennaio 2024 esercizio numero 3

#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

#define erroreAllocazione Printf("%s", "Errore di allocazione memoria");exit(1);

typedef struct{
    char * nServizio;
    int pBase;
    int dCreazione;
} Serv;

typedef enum{
    privato,
    commerciale
} TipoS;

typedef struct{
    char *nUtente;
    char *nServizio;
    int dAttivazione;
    TipoS tipo;
} Abb;

typedef struct{
    char *nUtente;
    int c_attivazione;
} Stat;

bool verifica(Serv s[], int sizeS, Abb a[], int sizeA){
    bool ok = true;
    bool trovato;
    int id_ser;

    for(int i=0; i<sizeA && ok; i++){ //iteriamo sugli abbonamenti
        trovato = false;
        for(int j=0; j<sizeS && !trovato; j++){
            if(a[i].nServizio == s[j].nServizio){
                //Servizio esistente
                trovato = false;
                id_ser = j;
            }
        }
        if(trovato == true){
            //Verifica data attivazione abbonamento
            if(a[i].dAttivazione >= s[id_ser].dCreazione){
                for(int j=i+1; j<sizeA; j++){
                    if(a[i].nUtente==a[j].nUtente && a[i].nServizio==a[j].nServizio){
                        ok = false;
                    }
                }
            } else {
                ok = false;
            }
        } else {
            ok = false;
        }
    }

    return ok;
}

int guadagno_servizio(Abb a[], int sizeA, char *nServizio, int p_base){
    int guadagno = 0;

    for(int i=0; i<sizeA; i++){
        if(a[i].nServizio == nServizio){
            switch(a[i].tipo){
                case commerciale:
                    guadagno += 2*p_base;
                    break;
                default:
                    guadagno += p_base;
            };
        }
    }

    return guadagno;
}

char *servizio_redditizio(Serv s[], int sizeS, Abb a[], int sizeA){
    char *s_max = s[0].nServizio;
    int g_max = guadagno_servizio(a, sizeA, s[0].nServizio, s[0].pBase);
    int g_serv;

    for(int i=0; i<sizeS; i++){
        g_serv= guadagno_servizio(a, sizeA, s[i].nServizio, s[i].pBase);
        if(g_serv>g_max){
            s_max=s[i].nServizio;
            g_max=g_serv;
        }
    }

    return s_max; //nome del servizio a guadagno massimo
}

int p_base_servizio(Serv s[], int sizeS, char *n_servizio){
    int p_b=-1;

    for(int i=0; i<sizeS && p_b==-1; i++){
        if(s[i].nServizio == n_servizio){
            p_b=s[i].pBase;
        }
    }

    return p_b;
}

int trova_utente(Stat s[], int sizeS, char* nUtente){
    int index=-1;

    for(int i=0; i<sizeS && index==-1; i++){
        if(s[i].nUtente == nUtente){
            index = i;
        }
    }

    return index; //se index == -1 l'utente non è stato trovato
}

void statistiche(Abb a[], int sizeA, int d1, int d2, Stat s[], int* sizeS){
    int count = 0;

    for(int i=0; i<sizeA; i++){
        int index= trova_utente(s, *sizeS, a[i].nUtente);

        if(index<0){
            Stat S = {a[index].nUtente, 0};
            s[count] = S;
            index = count;
            count++;
        }

        
        if(a[i].dAttivazione >= d1 && a[i].dAttivazione <= d2){
            s[index].c_attivazione += 1;
        }
    }

    *sizeS = count;
    return;
}

char* utente_attivo(Abb a[], int sizeA){
    int dMin = 0;
    int dMax = -1;

    for(int i = 0; i<sizeA; i++){
        if(a[i].dAttivazione >= dMax){
            dMax = a[i].dAttivazione;
        }
    }

    Stat* S = (Stat*) malloc(sizeA*sizeof(Stat));
    if(S==NULL){
        printf("%s", "Errore di allocazione memoria");
        exit(1);
    }

    int sizeS = 0;
    statistiche(a, sizeA, dMin, dMax, S, &sizeS);
    S = (Stat*) realloc(S, sizeS*sizeof(Stat));
    if(S==NULL){
        printf("%s", "Errore di allocazione memoria");
        exit(1);
    }

    int aMax = -1;
    char* uMax;

    for(int i=0; i<sizeS; i++){
        if(S[i].c_attivazione>aMax){
            aMax=S[i].c_attivazione;
            uMax=S[i].nUtente;
        }
    }

    free(S);
    return uMax;
}

int main(void){
    //inizializzazione delle struct
    Serv s[4]={{"Servizio A", 15, 10},
                {"Servizio B", 10, 30},
                {"Servizio C", 12, 30},
                {"Servizio D", 10, 20}};
    int sizeS=sizeof(s)/sizeof(Serv);

    Abb a[4]={{"Bianchi", "Servizio A", 12, privato},
                {"Rossi", "Servizio B", 40, commerciale},
                {"Verdi", "Servizio C", 35, privato},
                {"Bianchi", "Servizio C", 30, commerciale}};
    int sizeA=sizeof(a)/sizeof(Abb);

    bool ver = verifica(s, sizeS, a, sizeA);
    char* serv_redd = servizio_redditizio(s, sizeS, a, sizeA);
    Stat* stat = (Stat*) malloc(sizeA*sizeof(Stat));
    if(stat==NULL){
        printf("%s", "Errore di allocazione memoria");
        exit(1);
    }
    int sizeStat = 0;
    statistiche(a, sizeA, 15, 30, stat, &sizeStat);
    stat = (Stat*) realloc(stat, sizeStat*sizeof(Stat));

    char* uAttivo = utente_attivo(a, sizeA);

    printf("\nVerifica: %d\n", ver);
    printf("\nServizio redditizio: %s\n", serv_redd);
    printf("\nStatistiche:\n");
    for(int i=0; i<sizeStat; i++){
        printf("\t%s: %d\n", stat[i].nUtente, stat[i].c_attivazione);
    }
    printf("\nUtente attivo: %s\n", uAttivo);

    exit(0);
}