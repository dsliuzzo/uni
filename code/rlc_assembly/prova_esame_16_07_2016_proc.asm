%include "utils.nasm"

section .data
    V equ 20
    W equ 16
    n equ 12
    T equ 8

section .text
    global proc
proc:
    PUSH EBP
    MOV EBP, ESP
    PUSHAD
    
    MOV EAX, [EBP + V]
    MOV EBX, [EBP + W]
    MOV ECX, [EBP + T]
    XOR ESI, ESI
    MOV EDI, [EBP + n]

ciclo:
    CMP ESI, EDI
    JGE fine
    MOV DX, [EAX + ESI * 2] ;V[i]
    AND DX, 1
    JNZ aggiornaneg
    MOV DX, [EBX + ESI * 2] ;W[i]
    AND DX, 1
    JNZ aggiornaneg
    JMP aggiorna
aggiorna:
    MOV DX, [EAX + ESI * 2]     ;V[i]
    MOV [ECX + ESI * 4], DX     ;ESI * 2
    MOV DX, [EBX + ESI * 2]     ;W[i]
    MOV [ECX + ESI * 4 + 2], DX ;ESI * 2 + 1
    INC ESI
    JMP ciclo
aggiornaneg:
    MOV DX, [EAX + ESI * 2]
    NEG DX
    MOV [ECX + ESI * 4], DX
    MOV DX, [EBX + ESI * 2]
    NEG DX
    MOV [ECX + ESI * 4 + 2], DX
    INC ESI
    JMP ciclo
fine:
    POPAD
    POP EBP
    RET 16