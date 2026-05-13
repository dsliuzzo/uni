%include "utils.nasm"

section .data
    V dw 2,6,9,4,10,9,1,2,4,11
    W dw 8,3,6,5,9,5,3,2,10,12
    n equ ($-W)/2

section .text
    global _start
    extern proc
_start:
    PUSH V
    PUSH W
    PUSH n
    CALL proc

    XOR ESI, ESI
    MOV EDI, n
ciclo:
    CMP ESI, EDI
    JGE fine
    printw word [W + ESI * 2]
    INC ESI
    JMP ciclo
fine:
    exit 0