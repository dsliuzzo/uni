#appunti 
#reti_logiche_e_calcolatori 
# Trasferimento
## MOV
Non si possono fare MOV da memoria a memoria
```
MOV <dest>, <sorg>;
```
8, 16, 32 bit

1. **Da immediato a registro**
```
   MOV EAX, 2
   MOV EAX, 10110b
   MOV EAX, FFFE0Ah
   MOV EAX, 0xA2
   MOV BX, FFFFh
```

2. **Da registro a registro**
   I registri devono avere la stessa dimensione
```
   MOV AX, BX
   MOV ESI, EDI
   MOV CL, BH
```

3. **Da memoria a registro**
   `SECTION.DATA`
```
   A DD 2500
   VAR DW 100
   W DB 51
```
	`SECTION.TEXT`
```
	MOV EAX, [A]
	MOV BX, [VAR]
	MOV CL, [W]
```

4. **Da registro a memoria**
```
   MOV EAX, 1
   MOV [A], EAX
   MOV [VAR], AX
   MOV [W], AH ;W=0
   MOV [W], AL ;W=1
```

5. **Da immediato a memoria**
   Quando si scrive un immediato nella memoria bisogna specificare il tipo di valore con delle **keywords**
```
   MOV [VAR], WORD 2
   MOV [A], DWORD 5
   MOV [W], BYTE 20
   MOV [A], DWORD -1
   MOV AL, 35h
   MOV [A], AL
   MOV BX, 0
   MOV [A], BX
```

## MOVZX
Estende un registro con degli 0

## MOVSX
Come `MOVZX` ma con il segno
## LEA
Un funzionamento simile a `MOV` è svolto dal comando `LEA`, che però non sposta il valore punto dal secondo parametro ma l'indirizzo stesso
# Operatori aritmetici
## ADD
Somma tra due operandi e copia del risultato nel primo dei due, il quale deve necessariamente essere un registro
## SUB
Sottrazione tra due operandi e copia del risultato nel primo dei due, il quale deve necessariamente essere un registro
## CMP
Sottrazione tra due operandi che però non sovrascrive il registro di destinazione
## INC
Incremento del registro
## DEC
Decremento del registro
## NEG
Inverte il segno dell'operando, inteso come numero in complemento a 2
## MUL
Moltiplicazione senza segno
## IMUL
Moltiplicazione con segno
## DIV
Divisione senza segno
## IDIV
Divisione con segno
# Operatori booleani
[[1. Reti logiche#Algebra di Boole]]
## AND
AND logico bit a bit
## OR
OR logico bit a bit
## XOR
XOR logico bit a bit, spesso utilizzato per azzerare un registro
## NOT
Negazione logica
# Scorrimento
[[1. Reti logiche#Registri a scorrimento]]
## SHL
## SHR
## ROL
## ROR
# Jump
Comandi seguiti da una etichetta verso il quale verrà effettuato il salto.
I salti condizionati spesso fanno riferimento al [[2. Sistemi di elaboratori#Salti|registro delle flags]]
## JMP
salto incondizionato

---
## JZ
Salto se la **zero flag** è pari a 1
## JNZ
Salto se la **zero flag** è pari a 0
## JC
Salto se il **carry flag** è pari a 1
## JNC
Salto se il **carry flag** è pari a 0
## JS
Salto se il **sign flag** è pari a 1
## JNS
Salto se il **sign flag** è pari a 0
## JO
Salto se il **overflow flag** è pari a 1
## JNO
Salto se il **overflow flag** è pari a 0

---
Nel caso in cui i comandi di salto vengono posti dopo un comando [[#CMP]] possiamo utilizzare anche i seguenti salti
## JE
Salto se i due valori confrontati sono uguali
## JNE
Salto se i due valori confrontati non sono uguali
## JG
$X>Y$
## JGE
$X \geq Y$
## JL
$X<Y$
## JLE
$X \leq Y$
# Interruzioni (interrupt) software
```
INT <numero-interruzione> ;byte
```
Istruzione che interrompe l'esecuzione del programma per richiedere dei servizi al sistema operativo
- `INT 80h` "service dispatcher", con `EAX=num.servizio`
- `EXIT SERVICE`
```
  MOV EAX, 1 ;EXIT
  MOV EBX, 0 ;EXIT CODE=0
  INT 80h
```
# Utilizzo dello stack
## PUSH
permette di immagazzinare valori nello stack
`PUSH <reg/imm/mem 16-32>`
che è equivalente a
`SUB ESP, DIM(<op>)`
`MOV [ESP], <op>`
con `<op>` che in questo caso è il registro `EAX`
![[Pasted image 20250521160507.png|center|300]]
## POP
Permette di leggere l'ultimo valore dello stack
`POP <reg 16-32>`
che è equivalente a
`MOV <reg>, [ESP]`
`ADD ESP, DIM(<reg>)`
I valori non vengono propriamente eliminati, ma cambiando il valore di ESP, verranno sovrascritti dal valore successivo
![[Pasted image 20250521160923.png|center|300]]
# Chiamata a procedure
## CALL
```
CALL <indirizzo>
```
Sposta nello stack il contenuto del registro EIP (program counter), in modo da memorizzare il punto in cui riprendere il funzionamento del programma principale e successivamente effettua un salto all'etichetta che lo segue.
```
PUSH EIP
JMP <indizizzo>
```
![[Pasted image 20250521163122.png|center|200]]
## RET
```
RET n
```
É l'istruzione speculare alla `CALL`, ritorna al programma principale, prendendo dallo stack il valore da inserire nell'EIP.
Inoltre possiamo aggiungere un parametro opzionale contenente il numero di byte da eliminare dallo stack per esempio utilizzato per dei parametri passati tramite stack.
```
JMP [ESP]
SUB ESP, DIM(<indirizzo>)
SUB ESP, n
```

## PUSHAD
Permette di salvare nello stack i valori di tutti i registri
## POPAD
Permette di ristabilire i registri al loro valore originario, prima dell'utilizzo di una procedura per esempio, prelevandoli dallo stack