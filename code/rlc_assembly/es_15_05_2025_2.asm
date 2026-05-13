; Dato un vettore V di dimensione n, per ogni posizione i di V si definisce la posizione complementare i' che è pari a n-1-i. Scrivere una funzione che conta il numero di coppie (V[i], V[i']), con i <= i' tali che il prodotto V[i]*v[i'] è multiplo di 4.

%include "utils.nasm"

section .data
    V dw -2,3,8,2,1,-6,2
    n equ ($ - V)/2
section .bss
    c resw 1

section .text
        global _start
_start: XOR DI, DI ; contatore
        MOV EBX, V
        LEA ECX, [EBX+n*2-2]; load effective address, prende un oggetto e restituisce l'indirizzo, moltiplico tutto per 2 perchè sto lavorando con dw
ciclo:  CMP EBX, ECX
        JG fine ; se ECX è più grande vai alla fine
        MOV AX, [EBX]
        MOV DX, [ECX]
        IMUL AX, DX ; li moltiplico
        AND AX, 3 ; verifica se è multiplo di 4 tramite maschera
        JNZ avanti ; se lo zf è True (1) sono tutti 0, quindi prima verifichiamo il not zf e se positivo (non è multiplo di 4) andiamo avanti
        INC DI
avanti: ADD EBX, 2 ; incrementiamo i, di 2 sempre perchè sono dw
        SUB ECX, 2 ; decrementiamo i'
        JMP ciclo
fine:   MOV [c], DI
        printw word [c]
        exit 0