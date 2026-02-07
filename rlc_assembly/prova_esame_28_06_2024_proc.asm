%include "utils.nasm"

section .data
    V equ 20
    W equ 16
    n equ 12
    ris equ 8

section .text
    global proc
proc:
    PUSH EBP
    MOV EBP, ESP
    PUSHAD

    MOV EAX, [EBP + ris]
    MOV [EAX], byte 1

    MOV EDI, [EBP + n]
    XOR ESI, ESI

ciclo:
    CMP ESI, EDI
    JGE fine

    MOV EBX, [EBP + V]
    MOV AX, [EBX + ESI * 2]
    XOR DX, DX
    MOV CX, 16
    IDIV CX

    MOV EBX, [EBP + W]
    MOV AX, [EBX + ESI * 2]
    MOV BX, DX
    XOR DX, DX
    MOV CX, 16
    IDIV CX

    CMP BX, DX
    JE avanti
    MOV EAX, [EBP + ris]
    MOV [EAX], byte 0
avanti:
    INC ESI
    JMP ciclo

fine:
    POPAD
    POP EBP
    RET 16