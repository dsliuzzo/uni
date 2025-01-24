#include <stdio.h>

int main(){
    int n, success = 0, cancel = 0;
    do{
        printf("inserire un intero: ");
        success = scanf("%d", &n);
        if(success == 0){
            char op;
            printf("Il valore non è intero\n");
            printf("Annullare?(s/n)");
            while(getchar()!=10);
            scanf("%c",& op);
            getchar();
            cancel=((op=='s')||(op == 'S'));
        }
    } while ((success == 0) && (!cancel));
}