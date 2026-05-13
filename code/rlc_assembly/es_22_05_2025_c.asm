; Scrivere una procedura assembly che riceve due vettori V e W, entrambi di word. Siamo nv e nw rispettivamente le lunghezze dei due vettori, con nv > nw. La procedura opera su V le seguenti sostituzioni:
; V[i] + W[i%nw], per ogni i da 0 a nv-1.
; Scrivere inoltre il programma principale che invoca opportunamente la procedura descritta

%include "utils.nasm"

section .data
    V dw 1,19,19,3,13,2,12,25
    nv equ ($-V)/2
    W dw 18,12,3
    nw equ ($-W)/2

    posnv equ 20
    posV equ 16
    posnw equ 12
    posW equ 8

section .bss
    r resw 1

section .text
    GLOBAL _start
_start: 
    PUSH nv
    PUSH V
    PUSH nw
    PUSH W
    CALL proc
    XOR ESI, ESI
stampa:
    CMP ESI, nv
    JGE fine
    MOV EAX, [V + ESI * 2]
    MOV [r], EAX
    printw word [r]
    INC ESI
    JMP stampa
fine:
    exit 0



proc:
    PUSH EBP
    MOV EBP, ESP
    PUSHAD
    MOV EAX, [EBP + posV] ; iteratore per V
    MOV EBX, [EBP + posW] ; iteratore per W
    MOV ECX, [EBP + posnv] ; nv
    XOR ESI, ESI ; k
.ciclo:
    CMP ECX, 0
    JLE .fine
    MOV DX, [EAX] ;sposto il valore V[i] all'interno di EDX
    ADD DX, [EBX] ; EDX = V[i] + W[k]
    MOV [EAX], DX ; V[i] = V[i] + W[k]
    INC ESI ; k++
    ADD EBX, 2
    CMP ESI, [EBP + posnw] ; if k == kw
    JNE .avanti
    XOR ESI, ESI ; k = 0
    MOV EBX, [EBP + posW]
.avanti:
    DEC ECX
    ADD EAX, 2
    JMP .ciclo
.fine:
    POPAD
    MOV ESP, EBP
    POP EBP
    RET 16