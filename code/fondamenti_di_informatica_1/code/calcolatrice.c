//calcolatrice con somma, sottrazione, moltiplicazione, divisione ed elevamento a potenza
//consideriamo operandi interi e maggiori di 0
//necessaria porzione di codice per leggere un singolo operando
//funzioni -> necessario sapere cosa ha bisogno in ingresso e quale sarà il risultato
//l'utente può effettuare più operazione prima di chiudere il programma
//gestione degli errori

#include <stdio.h>

#define bool int
#define true 1
#define false 0

//signature/prototipo (un segnaposto, la logica verrà definita successivamente)
int somma(int a, int b); 
int sottrazione(int a, int b);
int moltiplicazione(int a, int b);
int divisione(int a, int b);
int elevamento_potenza(int a, int b);
int lettura_operando();

//DEFINIZIONE DELLE FUNZIONI
int somma(int a, int b){
    //utilizziamo la ricorsione, considerando solo incremento e decremento di 1
    //aggiungiamo 1 all'operatore a e togliamo 1 all'operatore b, fino a che b==0
    return (b==0)?a:somma(a+1, b-1);
}

int sottrazione(int a, int b){
    return (b==0)?a:sottrazione(a-1, b-1);
}

int moltiplicazione(int a, int b){
    return (b==0)?0:a + moltiplicazione(a, b-1);
}

int divisione(int a, int b){
    if (b==0){
        printf("Errore: il secondo operando deve essere >0");
        return -1;
    }
    return (a<b)?0: 1+divisione(sottrazione(a, b), b);
}
/**int elevamento_potenza(int a, int b){

}**/
int lettura_operando(){
    int o;
    int ok;
    bool lettura=false;
    

    do {
        printf("Inserire un valore positivo intero\n>");
        ok = scanf("%d", &o);
        if(ok>0 && o>0){
            lettura = true;
        }
        else {
            printf("Valore inserito non corretto!\n");
        }
        //svuotiamo il buffer con una operazione di while vuota
        //getchar() preleva un singolo carattere dal buffer di lettura, se restituisce 10 vuol dire che ha letto linebrak e quindi può terminare la nostra operazione di svuotamento del buffer
        while(getchar()!=10);
    } while(lettura==false);

    return o;
}

//parola di uscita EOF (end of file)
int main(void){
    int a, b, r;
    char c;
    do{
        c = getchar();
        switch(c){
            case '+':
                a = lettura_operando();
                b = lettura_operando();
                r = somma(a, b);
                printf("Il risultato della somma è: %d", r);
                break;
            case '-':
                a = lettura_operando();
                b = lettura_operando();
                r = sottrazione(a, b);
                printf("Il risultato della sottrazione è: %d", r);
                break;
            case '*':
                a = lettura_operando();
                b = lettura_operando();
                r = moltiplicazione(a, b);
                printf("Il risultato della moltiplicazione è: %d", r);
                break;
            case '/':
                a = lettura_operando();
                b = lettura_operando();
                r = divisione(a, b);
                printf("Il risultato della divisione è: %d", r);
                break;
            /**case '^':
                a = lettura_operando();
                b = lettura_operando();
                r = elevamento_potenza(a, b);
                printf("Il risultato della potenza è: %d", r);
                break;**/
            case EOF:
                break;
            default:
                printf("Operazione non riconosciuta! \n");
                break;
        };

        while(c != EOF && getchar()!=10);
    }while (c != EOF);

    printf("Alla prossima! \n");
}