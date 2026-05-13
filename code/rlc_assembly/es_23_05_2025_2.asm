%include "utils.nasm"
section .data
    V dw -1,-3,2,-1,8,3,-2,9
    nv equ ($-V)/2
    k equ 60

section .bss
    ris resb 1

section .text
    PUSH V
    PUSH word nv
    PUSH word k
    PUSH ris
    CALL proc
    printb byte [ris]
    exit 0