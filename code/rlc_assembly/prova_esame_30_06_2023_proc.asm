%include "utils.nasm"

section .data
    V equ 20
    n equ 16
    X equ 12
    ris equ 8

section .text
    global proc
proc:
    PUSH EBP
    MOV EBP, ESP
    PUSHAD

    MOV EAX, [EBP + V]  ;V
    MOV EBX, [EBP + X]  ;X
    MOV BX, [EBX]       ;[X]
    MOV EDI, [EBP + n]
    XOR ESI, ESI
    XOR DX, DX          ;risultato

ciclo:
    CMP ESI, EDI
    JGE fine
    MOV CX, [EAX + ESI * 2] ;V[i]
    SHL BX, 1
    INC BX  ;2*X+1
    CMP CX, BX
    JE avanti
    DEC BX
    SHR BX, 2
    NEG BX  ;-X/2
    CMP CX, BX
    JE avanti
    INC DX
avanti:
    MOV EBX, [EBP + X]
    MOV BX, [EBX]
    INC ESI
    JMP ciclo
fine:
    MOV EAX, [EBP + ris]
    MOV [EAX], DX
    POPAD
    POP EBP
    RET 16