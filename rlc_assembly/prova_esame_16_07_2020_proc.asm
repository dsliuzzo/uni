%include "utils.nasm"

section .data
    V equ 20
    n equ 16
    d equ 12
    ris equ 8

section .text
    global proc
proc:
    PUSH EBP
    MOV EBP, ESP
    PUSHAD
    MOV ESI, [EBP + n]  ;n
    XOR EDI, EDI        ;indice array
    MOV EAX, [EBP + V]  ;vettore V
    MOV BX, [EAX]       ;V[i]
    MOV CX, [EBP + d]   ;d
    XOR DX, DX          ;risultato

ciclo1:
    CMP BX, 0
    JE ciclo2
    CMP BX, CX
    JG somma
    NEG BX
    CMP BX, CX
    JG nsomma
successivo1:
    INC EDI
    MOV BX, [EAX + EDI * 2]
    JMP ciclo1
nsomma:
    NEG BX
somma:
    ADD DX, BX
    JMP successivo1
ciclo2:
    CMP ESI, EDI
    JE fine
    MOV BX, [EAX + EDI * 2]
    CMP BX, CX
    JG successivo2
    NEG BX
    CMP BX, CX
    JG successivo2
    NEG BX
    SUB DX, BX
successivo2:
    INC EDI
    JMP ciclo2
fine:
    MOV EAX, [EBP + ris]
    MOV [EAX], DX
    POPAD
    POP EBP
    RET 16
