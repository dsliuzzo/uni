; Scrivere una funzione assembly che, dato un vettore di word V restituisce l'ultimo multiplo di 4 ma non di 8 presente in esso e la sua posizione nel vettore. Se non è presente nessun multiplo restituisce <-1;-1>

%include "utils.nasm"

section .data
    V dw 3,6,10,12,5,1
    n equ ($-V)/2

section .bss
    c resw 1
    p resw 1

section .text
        global _start
_start: XOR ESI, ESI ; i = 0
        MOV BX, -1
        MOV EDI, -1
ciclo:  CMP ESI, n
        JE fine
        MOV AX, [V+ESI*2]
        AND AX, 3
        JNZ avanti
        MOV AX, [V+ESI*2]
        AND AX, 7 ;verifichiamo se è multiplo di 8
        JZ avanti
        MOV BX, [V+ESI*2]
        MOV EDI, ESI
avanti: INC ESI
        JMP ciclo
fine:   MOV [c], BX
        printw word [c]
        MOV [p], EDI
        printd dword [p]
        exit 0