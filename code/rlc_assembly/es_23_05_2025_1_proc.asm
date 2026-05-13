%include "utils.nasm"
section .data
    A equ 20
    na equ 16
    B equ 12
    ris equ 8

section .text
    global verifica

verifica:
    PUSH EBP
    MOV EBP, ESP
    PUSHAD

    MOV EAX, [EBP + A]
    MOV EBX, [EBP + B]
    MOV EDI, [EBP + ris]

    MOV DX, [EAX]
    MOVZX EDX, DX ;sposto il valore di DX in un registro più grande
    MOV CX, [EBX + EDX * 2] ;non si può fare EBX + DX * 2
    ADD EAX, 2
    MOV ESI, [EBP + na]
    DEC ESI

ciclo:
    CMP ESI, 0
    JLE fine
    MOV DX, [EAX]
    MOVZX EDX, DX
    CMP CX, [EBX + EDX * 2]
    JG esci
    MOV CX, [EBX + EDX * 2]
    ADD EAX, 2
    DEC ESI
    JMP ciclo
fine:
    MOV AL, 1
    MOV [EDI], AL
    JMP avanti
esci:
    MOV AL, 0
    MOV [EDI], AL
    JMP avanti
avanti:
    POPAD
    POP EBP
    RET 16

