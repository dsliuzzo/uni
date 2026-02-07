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

    MOV EAX, [EBP + V]  ; vettore V
    MOV EBX, [EBP + W]  ; vettore W
    MOV EDI, [EBP + n]  ; n
    XOR ESI, ESI        ; i

    ADD EAX, EDI    ; V partirà da V[n/2 + 1]
    SHR EDI, 1      ; n/2
ciclo1:
    CMP ESI, EDI
    JGE secondameta
    MOV CX, [EBX + ESI * 2] ; CX = W[i]
    MOV DX, [EAX + ESI * 2] ; DX = V[n/2 + i]
    CMP CX, DX
    JG somma1
    MOV [EBX + ESI * 2], word 0
    JMP avanti1
somma1:
    ADD CX, DX
    MOV [EBX + ESI * 2], CX
avanti1:
    INC ESI
    JMP ciclo1

secondameta:
    MOV EAX, [EBP + V]  ; vettore V
    MOV EBX, [EBP + W]  ; vettore W
    MOV EDI, [EBP + n]  ; n
    XOR ESI, ESI        ; i

    ADD EBX, EDI        ; W partità da W[n/2 + 1]
    SHR EDI, 1          ; n/2
ciclo2:
    CMP ESI, EDI
    JGE fine
    MOV CX, [EBX + ESI * 2] ; CX = W[n/2 + i]
    MOV DX, [EAX + ESI * 2] ; DX = V[i]
    CMP CX, DX
    JG somma2
    MOV [EBX + ESI * 2], word 0
    JMP avanti2
somma2:
    ADD CX, DX
    MOV [EBX + ESI * 2], CX
avanti2:
    INC ESI
    JMP ciclo2

fine:
    POPAD
    POP EBP
    RET 12