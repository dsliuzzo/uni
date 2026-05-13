%include "utils.nasm"

section .data
    V dw 3,-1,-2,6,-12,5
    W dw 3,7,5,13,-3,-9
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
    MOV AX, [V + ESI * 2]
    MOV BX, [W + ESI * 2]
    printw word AX
    printw word BX
    INC ESI
    JMP ciclo

fine:
    exit 0