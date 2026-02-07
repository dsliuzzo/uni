%include 'utils.nasm'

section .data
    ris equ 16
    V equ 12
    n equ 8

section .text
    global proc
proc:
    PUSH EBP
    MOV EBP, ESP
    PUSHAD

    MOV EAX, [EBP + V] ;prendo l'indirizzo di V[0]
    MOV EDI, [EBP + n] ;numero di elementi dell'array
    XOR ESI, ESI ;indice
    XOR BX, BX ;somma valore assoluto degli elementi pari di V
    XOR CX, CX ;somma elementi di posizione dispari di V

ciclo:
    CMP ESI, EDI
    JGE fine
    MOV DX, [EAX + ESI * 2] ;V[i]
    ;vefichiamo se i è pari
    ROR ESI, 1
    JNC posPari
    ADD CX, DX
posPari:
    ROL ESI, 1 ;sistemiamo esi
    ;verifichiamo se V[i] è pari o dispari
    ROR DX, 1
    JC avanti ;se dipari andiamo avanti
    ROL DX, 1
    ;verifichiamo se è positivo o negativo
    CMP DX, 0
    JGE somma
    IMUL DX, -1 ;rendo positivo il valore nagativo
somma:
    ADD BX, DX
avanti:
    INC ESI
    JMP ciclo
fine:
    MOV AX, BX
    CMP BX, CX
    JGE esci
    MOV AX, CX
esci:
    MOV [EBP + ris], AX
    POPAD
    POP EBP
    RET 8

