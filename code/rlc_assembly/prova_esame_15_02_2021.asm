%include "utils.nasm"

section .data
    V dw 8,10,0,5,-1,3,-4,3,7,12
    n equ ($-V)/2

section .bss
    W resw 2

section .text
    global _start
    extern proc
_start:
    MOV AX, 0
    MOV [W], AX
    MOV [W + 2], AX
    PUSH V
    PUSH word n
    PUSH W
    CALL proc

    MOV AX, [W]
    printw word AX
    MOV AX, [W + 2]
    printw word AX
    exit 0