%include "utils.nasm"

section .data
    V dw 15,-5,-3,-3,6
    n equ($-V)/2
    X dw 7

section .bss
    ris resw 1

section .text
    global _start
    extern proc
_start:
    PUSH V
    PUSH n
    PUSH X
    PUSH ris
    CALL proc
    MOV AX, [ris]
    printw word AX
    exit 0