%include "utils.nasm"

section .data
    W dw 12,-7,8,6
    n equ ($-W)/2
    n1 dw 4
    n2 dw 5
    n3 dw 3
    n4 dw -9
    V dd n1,n2,n3,n4

section .bss
    Q resw n
    R resw n

section .text
    global _start
    extern proc
_start:
    PUSH W
    PUSH V
    push n
    PUSH Q
    PUSH R
    CALL proc

    XOR ESI, ESI
ciclo:
    CMP ESI, n
    JGE fine
    printw word [Q + ESI * 2]
    printw word [R + ESI * 2]
    INC ESI
    JMP ciclo
fine:
    exit 0