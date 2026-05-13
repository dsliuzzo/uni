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

    MOV EBX, [EBP + V]
    XOR ESI, ESI
    MOV EDI, [EBP + n]
    XOR CX, CX ;somma

ciclo:
    CMP ESI, EDI
    JGE fine
    XOR EDX, EDX
    XOR EAX, EAX
    MOV AX, [EBX + ESI * 2] ;V[i]
    IDIV DI ;V[i]%n
    MOV AX, [EBX + EDX * 2] ;V[V[i]%n]
    ADD CX, AX
    INC ESI
    JMP ciclo
fine:
    MOV EAX, [EBP + ris]
    MOV [EAX], CX
    POPAD
    POP EBP
    RET 12