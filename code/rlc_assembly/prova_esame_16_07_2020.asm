%include "utils.nasm"

section .data
    V dw 2,-10,13,5,0,1,-9,3
    n equ ($-V)/2
    d equ 7

section .bss
    ris resw 1

section .text
    global _start
    extern proc
_start:
    PUSH V
    PUSH n
    PUSH d
    PUSH ris
    CALL proc
    MOV AX, [ris]
    printw word AX
    exit 0