%include "utils.nasm"

section .data
    V equ 22
    n equ 18
    A equ 16
    B equ 14
    K equ 12
    W equ 8

section .text
    global proc
proc:
    PUSH EBP
    MOV EBP, ESP
    PUSHAD
    XOR ESI, ESI        ;i
    MOV EDI, [EBP + n]  ;n
    DEC EDI
    MOV ECX, [EBP + V]  ;vettore V
    MOV EDX, [EBP + W]  ;vettore W

ciclo:
    CMP ESI, EDI
    JGE fine
    MOV AX, [EBP + A]
    IMUL AX, [ECX + ESI * 2]
    INC ESI
    MOV BX, [EBP + B]
    IMUL BX, [ECX + ESI * 2]
    ADD AX, BX
    CMP AX, [EBP + K]
    JLE avanti
    DEC ESI
    MOV BX, 1
    MOV [EDX + ESI * 2], BX
    INC ESI
avanti:
    JMP ciclo
fine:
    POPAD
    POP EBP
    RET 18