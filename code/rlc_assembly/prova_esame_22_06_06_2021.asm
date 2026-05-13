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

    MOV EAX, [EBP + V]
    MOV EDI, [EBP + n]
    DEC EDI
    XOR ESI, ESI
    XOR DX, DX

ciclo:
    CMP ESI, EDI
    JGE fine
    MOV BX, [EAX + ESI * 2]
    INC ESI
    MOV CX, [EAX + ESI * 2]
    SAL CX, 2
    CMP BX, CX
    JG aggiorna
    JMP avanti
aggiorna:
    SAR CX, 2
    MOV [EAX + ESI * 2], BX
    DEC ESI
    MOV [EAX + ESI * 2], CX
    INC ESI
    INC DX
avanti:
    JMP ciclo
fine:
    MOV EAX, [EBP + ris]
    MOV [EAX], DX
    POPAD
    POP EBP
    RET 12