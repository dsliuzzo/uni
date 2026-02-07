%include "utils.nasm"
%include "es_23_05_2025_1_proc.asm"

section .data
    A dw 2,3,1
    na equ ($-A)/2
    B dw 3,4,-1,2

section .bss
    ris resb 1

section .text
    global _start:
    extern verifica

_start:
    PUSH A
    PUSH na
    PUSH B
    PUSH ris
    CALL verifica
    printb byte [ris]
    exit 0

