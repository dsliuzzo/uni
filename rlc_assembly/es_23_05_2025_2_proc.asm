%include "utils.nasm"
section .data
    V equ 16
    nv equ 14
    k equ 12
    ris equ 8

section .text
    global proc
proc:
    PUSH EBP
    MOV EBP, ESP
    PUSHAD

    MOV EDI, [EBP + V]
    MOV SI, [EBP + nv]
    SUB SI, 2 ;verifichiamo coppie, quindi l'iteratore deve arrivare ad un elemento in meno
    MOV AL, 0
ciclo:
    CMP SI, 0
    JL fine
    MOV BX, [EDI] ;primo elemento
    MOV CX, [EDI + 2] ;elemento successivo

    XOR BX, CX ;verifico il segno utilizzando lo XOR
    JNS avanti
    MOV DX, [EDI + 4] ;successivo del successivo
    XOR CX, DX
    JS verifica
    ADD EDI, 2
    DEC SI
    
avanti:
    ADD EDI, 2
    DEC SI
    JMP ciclo

verifica:
    MOV BX, [EDI]
    ADD BX, [EDI + 2]
    ADD BX, CX
    CMP BX, [EBP + k]
    JG escibene
    JMP avanti

escibene:
    MOV AL, 1
    MOV EDI, [EBP + ris]
    MOV [EDI], AL

fine:
    POPAD
    POP EBP
    RET 14