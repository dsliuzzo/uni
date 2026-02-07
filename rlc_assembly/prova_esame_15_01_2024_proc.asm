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
    XOR DX, DX
    XOR ESI, ESI
    MOV SI, [EBP + n]
    SHR SI, 1          ;V[i]
    DEC SI
    XOR EDI, EDI
    MOV DI, [EBP + n]
    DEC DI    
    SUB DI, SI          ;V[i-n-1]


    MOV CX, [EAX + ESI * 2]
    SUB CX, [EAX + EDI * 2]
    JGE noNeg1
    NEG CX
noNeg1:
    MOV DX, SI
    DEC SI
    INC DI
ciclo:
    CMP SI, word 0
    JL fine
    MOV BX, [EAX + ESI * 2]
    SUB BX, [EAX + EDI * 2] ;V[i]-V[i-n-1]
    JGE noNeg2
    NEG BX
noNeg2:
    CMP BX, CX
    JL avanti
    MOV CX, BX  ;CX = massimo
    MOV DX, SI  ;DX = indice del massimo
avanti:
    DEC SI
    INC DI
    JMP ciclo
fine:
    MOV EAX, [EBP + ris]
    MOV [EAX], DX
    POPAD
    POP EBP
    RET 12