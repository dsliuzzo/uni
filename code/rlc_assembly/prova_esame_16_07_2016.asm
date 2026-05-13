%include "utils.nasm"

section .data
    V dw 2,6,9,4,10,9,1,2,4,11
    W dw 8,3,6,5,8,5,3,2,10,2
    n equ ($-W)/2

section .bss
    T resw n*2

section .text
    global _start
    extern proc
_start:
    PUSH V
    PUSH W
    PUSH n
    PUSH T
    CALL proc

    XOR ESI, ESI
    MOV EDI, n
    SHL EDI, 1
ciclo:
    CMP ESI, EDI
    JGE fine
    MOV AX, [T + ESI * 2]
    printw word AX
    INC ESI
    JMP ciclo
fine:
    exit 0