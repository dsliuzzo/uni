%include 'utils.nasm'

section .data
    V dw -2,3,7,6,2,-10,-3,5
    n equ ($-V)/2

section .bss
    ris resw 1

section .text
    global _start
    extern proc
_start:
    PUSH ris
    PUSH V
    PUSH n
    CALL proc
    POP word [ris]
    printw word [ris]
    exit 0