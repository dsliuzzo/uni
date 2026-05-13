; usiamo IDIV sia per la divisione che per il resto
; posizioniamo X in AX ed effettuiamo IDIV Y
; AX conterrà il risultato della divisione
; DX conterrà il resto

section .data
    W equ 24
    V equ 20
    n equ 16
    Q equ 12
    R equ 8

section .text
    global proc

proc:
    PUSH EBP
    MOV EBP, ESP
    PUSHAD
    XOR ESI, ESI ;i
ciclo:
    CMP ESI, [EBP + n]
    JGE fine
    MOV EBX, [EBP + W]
    MOV AX, [EBX + ESI * 2] ;AX = W[i]
    CWD ;sposta il bit meno significativo di AX in tutto DX per predisporlo alla divisione
    MOV EDI, [EBX + ESI * 4] ;EDI = V[i]
    MOV CX, [EDI] ;CX = [V[i]]
    IDIV CX ;W[i]/V[i]
    MOV EBX, [EBP + Q] ;predispongo Q in EBX
    MOV [EBX + ESI * 2], AX ;sposto il risultato della divisione in Q[i]
    MOV EBX, [EBP + R] ;faccio lo stesso per R
    MOV [EBX + ESI * 2], DX ;sposto il resto in R[i]
    INC ESI
    JMP ciclo
fine:
    POPAD
    POP EBP
    ret 20
