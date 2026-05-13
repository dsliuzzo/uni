; Scrivere una gunzione Assembly che, dato un vettore di word V conta il numero di multipli di 4 ma non di 8

%include "utils.nasm"

section .data
    V dw 3,6,10,12,5,1 ; vettore di esempio
    n equ ($-V)/2 ; definiamo una costante come lunghezza del vettore

section .bss ; definiamo le variabili che conterranno il risultato della funzione
    c resw 1 ; riserviamo lo spazio necessario a contenere una word

section .text
    GLOBAL _start
_start: XOR ESI, ESI ; i = 0
        XOR EDI, EDI ; count = 0
ciclo:  CMP ESI, n
        JE fine ; se ESI ed n sono uguali salta a fine
        MOV AX, [V+ESI*2] ; sposto il valore del vettore di questo ciclo in AX
        AND AX, 3 ; con una maschera (3) prendo solo i bit che mi interessano di AX
        JNZ avanti ; salto se il valore risultante non è uguale a 0 (AX non è multiplo di 4)
        MOV AX, [V+ESI*2] ; risposto il valore dal vettore ad AX
        AND AX, 7 ; prendo i primi 3 bit meno significativi di AX
        JZ avanti ; salto se questi sono tutti 0 (in quel caso AX sarebbe anche multiplo di 8)
        INC EDI ; incremento il contatore
avanti: INC ESI ; incremento l'indice
        JMP ciclo ; torno all'inizio del ciclo
fine:   MOV [c], EDI
        printw word [c]
        exit 0