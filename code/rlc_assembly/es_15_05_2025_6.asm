; Scrivere una funzione Assembly che, dato un vettore di word V, restituisce l'indirizzo del più piccolo valore multiplo di 4 ma non di 8 presente in esso

%include "utils.nasm"

section .data
    V dw 3,4,6,10,12,5,1 ; vettore di esempio
    n equ ($-V)/2 ; definiamo una costante come lunghezza del vettore

section .bss ; definiamo le variabili che conterranno il risultato della funzione
    c resw 1 ; riserviamo lo spazio necessario a contenere una word

section .text
    GLOBAL _start
_start: XOR ESI, ESI ; i = 0
        ; AX contiene il valore corrente del vettore
        MOV EDI, -1 ; indirizzo del minimo corrente
        ; BX minimo corrente
        XOR ECX, ECX ; counter
ciclo:  CMP ESI, n
        JE fine ; se il vettore è finito jumpa
        MOV AX, [V+ESI*2]
        AND AX, 3
        JNZ avanti
        MOV AX, [V+ESI*2]
        AND AX, 7
        JZ avanti
        MOV AX, [V+ESI*2]
        CMP ECX, 0
        JE update
        CMP BX, AX
        JGE update
        JMP avanti
update: MOV BX, AX
        INC ECX
        LEA EDI, [V+ESI*2]
avanti: INC ESI
        JMP ciclo
fine:   mov [c], EDI
        printw word [c]
        exit 0

