/*scrivere un programma che permetta di gestire un registro di studenti. Ogni studente ha:
- nome
- età
- lista dinamica di voti

Il programma deve permettere di:
a) inserire un nuovo studente con i suoi dati
b) aggiungere un voto ad uno studente specifico
c) stampare i dati di tutti gli studenti ivi inclusa la media dei voti
d) liberare correttamente la memoria allocata dinamicamente prima della chiusura del programma

Si devono utilizzare array dinamici di struct per rappresentare registro degli studenti. */

#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#define LUNG_NOME 50

typedef struct{
    char nome[LUNG_NOME];
    int età;
    int *voti;
    int num_voti;
} Studente;

Studente *NewStud(Studente *stud, int *count, const char* name, int age){ 
    //il tipo della funzione è la struct studente perchè restituirà la struct creata (suppongo che nel main andrà inserita all'interno di un array di struct contenente tutto il database)
    //gli elementi richiesti per la funzione li passiamo tramite parametro
    stud = realloc(stud, (*count+1)*sizeof(Studente)); //locazione di memoria nulla se non può essere allocata NULL = 0 = false
    //codice di errore se il realloc() non ha funzionato per spazio finito
    if(!stud){
        printf("Errore di allocazione memoria\n");
        exit(1); //termina l'intero programma ovunque si trovi
    }
    //count = variabile che contiene il numero di struct presenti nella struttura e viene passato tramite puntatore cosìche sia modificato anche per il main
    //passaggio di valori alla nuova struct creata, per la stringa del nome bisogna usare la funzione strcpy(), per gli altri valori essendo int è sufficiente =
    strcpy(stud[*count].nome, name); 
    stud[*count].età = age;
    stud[*count].voti = NULL;
    stud[*count].num_voti = 0;
    //aumenta la conta di count
    (*count)++;
    //restituisce la struct al main
    return stud;
}

//prova a modificare il codice per ricevere come parametro il nome dello studente invece dell'indice
//funzione di appoggio findStudent() che trova l'indice dato uno studente
void addGrade(Studente *stud, int studentIndex, int grade){
    //passiamo alla funzione il puntatore alla struct e l'indice dello studente a cui aggiungere il voto e il voto stesso
    if(studentIndex<0)return; //se l'index è minore di 0 interrompe la funzione
    Studente *studente = &stud[studentIndex];
    studente->voti=realloc(studente->voti,(studente->num_voti+1)*sizeof(int)); //riallochiamo voti aggiungendo lo spazio per un intero
    if(!studente->voti){ //stesso codice di errore di prima (se non riesce ad allocare il calloc())
        printf("%s\n", "Errore");
        exit(1);
    }
    //aggiunge il voto
    studente->voti[studente->num_voti]=grade;
    //aggiunge 1 alla conta dei voti
    studente->num_voti++;
}

void printStudents(const Studente *stud, int count){
    //passaggio di stud usando const -> concetto del minimo privilegio
    for(int i=0; i<count; i++){
        printf("Studente &d \n", i+1); //usiamo i+1 perchè l'indicizzazione di inizia da 0
        printf("Nome: %s\n", stud[i].nome);
        printf("Età: %d\n", stud[i].età);
        if(stud[i].num_voti==0){
            printf("Nessun voto\n");
        } else {
            //creazione variabile per calcolo della media
            double s=0;
            //print dei voti e somma per la media
            for(int j=0; j<stud[i].num_voti; j++){
                printf("%d ", stud[i].voti[j]);
                s+=stud[i].voti[j];
            }
            //stampa della media - utilizzo di %.2f per riferimento a un float con 2 cifre decimali
            printf("\nMedia: %.2f\n", s/stud[i].num_voti);
        }
        
    }
}

void freeStrudents(Studente *stud, int count){
    for(int i=0; i<count; i++){
        free(stud[i].voti); //liberiamo prima le singole posizioni dell'array creato
    }
    free(stud); //infine liberiamo l'array di per se
}

int main(void){
    Studente *stud=NULL; //inizializziamo la struttura
    int stCount = 0; //inizializziamo una variabile che conta gli studenti
    char choice;

    //aggiunta di studente di base
    stud=addStudent(stud, &stCount, "Alice", 20);
    stud=addStudent(stud, &stCount, "Bob", 22);
    addGrade(stud, 0, 28);
    addGrade(stud, 0, 30);
    addGrade(stud, 1, 27);
    addGrade(stud, 1, 25);

    printf("%s", "--- REGISTRO STUDENTI ---\n");
    printf("%s", "Quale operazione si vuole compiere?:\n");
    printf("%s\n%s\n%s",
    "a) Inserire un nuovo studente",
    "b) Aggiungere un voto",
    "c) Stampare i voti degli studenti e la loro media");
    do{
        printf("\n%s", "Operazione:");
        choice = getchar();
        switch(choice){
            case 'a':
                //NewStud();
                break;
            case 'b':
                //NewVoto();
                break;
            case 'c':
                printStudent(stud, stCount);
                break;
            default:
                printf("ERRORE - operazione non riconosciuta\n");
                break;
    };
    while(choice != EOF && getchar()!=10);
    }while(choice=='a' || choice=='b' || choice=='c');

    freeStudent(stud, stCount);
    
    return 0;
}


