; Dato un vettore V di word, scrivere un programma che conti il numero di elementi la cui codifica binaria ha esattamente k bit pari a 1

%include "utils.nasm"

section .data
    V dw 3,6,10,12,5,-1
    n equ ($-V)/2
    k equ 16
section .bss
    c resw 1

section .text
        global _start:
_start: XOR ESI, ESI ; indice
        XOR DI, DI ; count = 0
ciclo1: CMP ESI, n
        JE fine1
        MOV AX, [V+ESI*2]
        XOR CL, CL ; count_k contare quanti 1 ci sono nel numero
ciclo2: CMP AX, 0 ; controllo se il numero è finito
        JE fine2 ; se il numero è finito vado alla fine2
        SHR AX, 1 ; shifto il numero
        JNC zero ; verifico se sto carryando il bit che ho shiftato, se si jumpo a zero
        INC CL
zero:   JMP ciclo2
fine2:  CMP CL, k ; ho finito di vedere tutti i bit
        JNE avanti ; jumpo se il numero di bit pari a 1 è diverso da k (JNE)
        INC DI ; incremento se il numero di bit pari a 1 è uguale a k
avanti: INC ESI
        JMP ciclo1
fine1:  MOV [c], DI
        print word [c]
        exit 0