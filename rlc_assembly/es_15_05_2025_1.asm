; se V[i] è pari verificare se V[i] < V[i+1] + V[i+2]
; se V[i] è dispari verificare se V[i] > V[i+1] - V[i   ]

%include "utils.nasm"

section .data
    V dw 3, 4, -2, 8, 1, 5, 6
    n equ (5-V)/2

section .bss
    c resw 1

section .text
        global _start
_start: XOR ESI, ESI    ; azzeriamo il registro che useremo come indice facendo lo XOR del registro con se stesso, qui   essendo necessario effettuare dei calcoli con degli indirizzi utilizziamo il registro extended
        XOR DI, DI ; facciamo lo stesso con un altro registro che useremo come contatore
        MOV EDX, n ; passo la lunghezza del vettore in un registro
        SUB, EDX, 2 ; sottraggo 2 a edx in quanto devo arrivare all indice n-2
ciclo:  CMP ESI, EDX
        JGE fine ; entriamo nell etichetta fine quando abbiamo finito il vettore
        MOV AX, [V + ESI*2] ; V[i]
        MOV BX, [V + ESI*2+2] ; V[i+1]
        ROR AX, 1 ; rotazione destra di AX per capire se è pari o dispari tramite il JNC successivo
        JNC pari
        SUB BX, [V+ESI*2+4] ; sottraggo V[i+2] a BX che è V[i+1]
        ROL AX, 1 ; riporto AX alla situazione prima del ROR, così che ho anche V[i]
        CMP AX, BX
        JLE avanti
        JMP incr ; ci porta all incremento
pari:   ADD BX, [V+ESI*2+4]
        ROL AX, 1
        CMP AX, BX
        JGE avanti
incr:   INC DI ; incremento del contatore
avanti: INC ESI ; incremento il registro che contiene l indice
        JMP ciclo
fine:   MOV [c], DI
        printw word [c]
        exit 0

