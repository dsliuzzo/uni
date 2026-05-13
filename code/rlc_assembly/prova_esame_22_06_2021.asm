%include "utils.nasm"

section .data
    V dw -2, 5, 1, 3, -1, 1, -6
    n equ ($-V)/2

section .bss
    ris resw 1

section .text
    global _start
    extern proc
_start:
    PUSH V
    PUSH n
    PUSH ris
    CALL proc
    MOV AX, [ris]
    printw word AX
    XOR ESI, ESI
    MOV EDI, n
ciclo:
    CMP ESI, EDI
    JGE fine
    printw word [V + ESI * 2]
    INC ESI
    JMP ciclo
fine:
    exit 0