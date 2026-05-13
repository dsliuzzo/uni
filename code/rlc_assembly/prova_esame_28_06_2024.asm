%include "utils.nasm"

section .data
    V dw 5,18,2,6,52
    W dw 21,34,2,22,4
    n equ ($-W)/2

section .bss
    ris resb 1

section .text
    global _start
    extern proc
_start:
    PUSH V
    PUSH W
    PUSH n
    PUSH ris
    CALL proc
    MOV AX, [ris]
    printw word AX
    exit 0