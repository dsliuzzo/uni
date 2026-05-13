%include "utils.nasm"

section .data
    V dw 12,2,6,3,8
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
    exit 0