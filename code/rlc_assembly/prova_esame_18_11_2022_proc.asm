%include "utils.nasm"

section .data
    V equ 16
    n equ 12
    ris equ 8

section .text
    global proc
proc:
    PUSH EBP
    MOV EBP, ESP
    PUSHAD

    MOV EAX, [EBP + ris]
    MOV [EAX], word 1

    MOV EAX, [EBP + V]
    MOV EDI, [EBP + n]
    XOR ESI, ESI
    MOV BX, [EAX]
    INC ESI
ciclo:
    CMP ESI, EDI
    JGE fine
    MOV EDX, ESI
    AND EDX, dword 1
    JZ avanti ;ESI è pari
    MOV CX, [EAX + ESI * 2]
    CMP BX, CX
    JLE cambio
    MOV EAX, [EBP + ris]
    MOV [EAX], word 0
    JMP fine
cambio:
    XCHG BX, CX
avanti:
    INC ESI
    JMP ciclo
fine:
    POPAD
    POP EBP
    RET 12