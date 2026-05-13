%include "utils.nasm"

section .data
    Tmax dw 16
    Tmin dw 14
    n dw 12
    med dw 10
    max dw 8

section .text
    global proc
proc:
    PUSH EBP
    MOV EBP, ESP
    PUSHAD
    MOV ESI, 0
ciclo:
    CMP ESI, [EBP + n]
    JGE fine
    MOV AX, [EBP + ESI * 2 + Tmax]
    SUB AX, [EBP + ESI * 2 + Tmin] ;AX contiene l'escursione termica
    CMP AX, [EBP + max]
    JGE avanti
    MOV [EBP + Tmax], AX
avanti:
    ADD [EBP + med], AX
    ADD ESI, 2
    JMP ciclo
fine:
    MOV AX, [EBP + med] ;AX = somma delle temperature
    MOV BX, [EBP + n] ;totale degli elementi del vettore
    SHR BX, 1 ;n/2
    DIV BX
    MOV [EBP + med], AX
    POPAD
    POP EBP
    RET 12
