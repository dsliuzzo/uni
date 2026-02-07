%include "utils.nasm"

section .data
    V equ 16
    W equ 12
    n equ 8

section .text
    global proc
proc:
    PUSH EBP
    MOV EBP, ESP
    PUSHAD
    MOV EAX, [EBP + V]
    MOV EBX, [EBP + W]
    MOV EDI, [EBP + n]
    XOR ESI, ESI

ciclo:
    CMP ESI, EDI
    JGE fine
    MOV CX, [EAX + ESI * 2]
    IMUL CX, [EBX + ESI * 2]
    AND CX, word 1
    JZ avanti
    MOV CX, [EAX + ESI * 2]
    XCHG [EBX + ESI * 2], CX
    XCHG [EAX + ESI * 2], CX
avanti:
    INC ESI
    JMP ciclo
fine:
    POPAD
    POP EBP
    RET 12