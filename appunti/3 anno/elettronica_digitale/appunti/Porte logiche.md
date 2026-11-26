#appunti
#elettronica_digitale
[[1. Reti logiche]]

# Porte logiche
## Funzioni logiche elementari
![[Pasted image 20250518173634.png|center|539]]
![[Pasted image 20250518174321.png|center|269]]

|      | Simbolo  | Equazione                                        | Costo |
| ---- | -------- | ------------------------------------------------ | ----- |
| NOT  | $\neg$   | $O \Longleftarrow\text{not} \ I$                 |       |
| AND  | $\wedge$ | $O \Longleftarrow \ I_{0} \ \text{and} \ I_{1}$  |       |
| NAND |          | $O \Longleftarrow \ I_{0} \ \text{nand} \ I_{1}$ |       |
| OR   | $\vee$   | $O \Longleftarrow \ I_{0} \ \text{or} \ I_{1}$   |       |
| NOR  |          | $O \Longleftarrow \ I_{0} \ \text{nor} \ I_{1}$  |       |
| XOR  | $\oplus$ | $O \Longleftarrow \ I_{0} \ \text{xor} \ I_{1}$  |       |
| NXOR |          | $O \Longleftarrow \ I_{0} \ \text{nxor} \ I_{1}$ |       |

# Circuiti combinatori
Insieme di porte logiche collegate in maniera opportuna per rispondere ad una determinata esigenza.

## MUX / DEMUX
![[1. Reti logiche#Multiplexer (MUX)]]

![[1. Reti logiche#Demultiplexer (DEMUX)]]

![[1. Reti logiche#Decodificatore (DECODEX)]]

## CODEX / DECODEX
![[1. Reti logiche#Codificatore (CODEX)]]

## Circuiti aritmetici
### Ripple carry adder
![[1. Reti logiche#Circuiti aritmetici]]

### Carry select adder
Una prima idea di ottimizzazione potrebbe essere quella di suddividere in due la cascata di full adder.
In questo modo raddoppiamo i full adder della seconda metà e utilizziamo come $C_{in}$ le uniche due possibilità 0 o 1. In questo modo possiamo eseguire parallelamente tutti e tre i circuiti risultanti. Solo dopo aver ricevuto l'output del reale $C_3$ lo utilizzeremo come selettore di una serie di mutex che permetterà di decidere quale output sarà quello reale.
![[Porte logiche-1790688898054.webp|center|625]]

Il principale svantaggio è che aumentano i full adder totali e quindi la complessità del circuito finale, a cui vanno aggiunti anche i mutex.
Inoltre se volessimo suddividere ancora di più ricorsivamente il circuito otterremo un numero esponenziale di full adder, quindi non è una soluzione realmente applicabile.
### Carry look ahead
Partendo dalla tabella del full adder, il riporto in uscita si scrive come:
$$C_{i+1} = \underbrace{A_i \cdot B_i}_{g_i\ \text{(generazione)}} + \underbrace{(A_i \oplus B_i)}_{p_i\ \text{(propagazione)}} \cdot C_i = g_i + p_i \cdot C_i$$
- se $g_i = 1 \Rightarrow C_{i+1} = 1$
- se $p_i = 1 \Rightarrow C_{i+1} = C_i$

Per calcolare $C_{i+1}$ bisogna conoscere $C_i$; ma $g_i$ e $p_i$ si calcolano subito da $A$ e $B$, quindi sostituendo si ottiene ogni riporto direttamente in funzione di $C_0$:
$$\begin{cases}
C_1 = g_0 + p_0 \cdot C_0 \\
C_2 = g_1 + p_1 g_0 + p_1 p_0 C_0 \\
C_3 = g_2 + p_2 g_1 + p_2 p_1 g_0 + p_2 p_1 p_0 C_0 \\
C_4 = g_3 + p_3 g_2 + p_3 p_2 g_1 + p_3 p_2 p_1 g_0 + p_3 p_2 p_1 p_0 C_0
\end{cases}$$

![[Porte logiche-cla-pg.svg|center|560]]

Il circuito finale è molto complesso (molte AND e OR), quindi poco utilizzato; in compenso il ritardo diventa **logaritmico** rispetto al numero di bit. All'aumentare dei bit crescono però gli ingressi delle porte (**fan-in**) e il numero di porte pilotate da uno stesso segnale, es. $p_0$ (**fan-out**).

### Carry-save adder
Somma tra più operandi, caso base con 3 operandi: $A+B+C$, numeri a 8 bit in complemento a 2.
$$
A = 01100111\ (+103) \qquad B = 10011000\ (-104) \qquad C = 00000001\ (+1)
$$

**Approccio elementare** (slide 1–2): due sommatori in cascata. Prima $D = A+B$, che va rappresentato su 9 bit (quindi `A` e `B` vanno estesi con segno). Poi $Ris = D + C$, su 10 bit (estendendo `C` e `D` con segno). Se i numeri sono unsigned l'estensione non serve.
Generalizzando a più operandi, una cascata di adder diventa molto complessa e lenta.

**Carry-save adder**: metodo alternativo, pensato per rendere il più veloce possibile la somma tra più operandi. Si divide in 3 step fondamentali:
1. si considerano le **terne di bit** dei 3 operandi a parità di peso (stessa colonna) e si processano come se fossero indipendenti tra loro: ogni terna entra in un full adder, che ne calcola somma e riporto. Si ottengono la **somma parziale** $SP$ e il **vettore dei riporti** $VR$. Tutte le terne sono processate **in parallelo**;
2. ogni bit di riporto va portato nella posizione successiva (più significativa): si fa uno **shift a sinistra** di $VR$ (entra uno `0`) e si **estende con segno** $SP$ (si ricopia l'ultimo bit);
3. si sommano i due vettori allineati ed estesi con un normale sommatore **a propagazione del riporto** (RCA, carry select, carry look ahead) a 10 bit.

```
  01100111 +      (+103)
  10011000 +      (-104)
  00000001 =      (+001)
 --------- STEP 1
  11111110 SP     --> somma parziale
  00000001 VR     --> vettore dei riporti
 --------- STEP 2
 111111110 SP     (esteso con segno)
 000000010 VR     (shift a sinistra)
 --------- STEP 3
0000000000 (0)
```

La somma parziale viene e
stesa con segno **due volte**: una per effetto dello shift e una per il completamento della somma finale (il risultato va su 10 bit).

**Ritardi**, con $\tau$ ritardo di un full adder e sommatori RCA:

|                            | Approccio elementare               | Carry-save                          |
| -------------------------- | ---------------------------------- | ----------------------------------- |
| primo livello              | sommatore a 9 bit: $9\tau$         | step 1, FA in parallelo: $1\tau$    |
| shift / estensione         | —                                  | step 2: tempo costante (solo collegamenti) |
| somma finale               | sommatore a 10 bit: $10\tau$       | step 3, sommatore a 10 bit: $10\tau$ |
| **totale**                 | $T_p = T_{sum9} + T_{sum10} = 19\tau$ | $T_{pCS} = T_{sum1} + T_{sum10} = 11\tau$ |

In generale, con 3 operandi a $n$ bit:
$$
T_p = T_{sum\,n+1} + T_{sum\,n+2} \qquad T_{pCS} = T_{sum1} + T_{sum\,n+2}
$$

>[!attention] AGGIUNTA
>Dalle slide 6–7 di `Parte6.pdf`, non presente negli appunti di lezione: **albero di somma a 9 operandi** a $n$ bit.
>- *Approccio elementare*: 4 livelli di somma (4 sommatori a $n+1$ bit, 2 a $n+2$, 1 a $n+3$, 1 a $n+4$), quindi $T_p = T_{sum\,n+1} + T_{sum\,n+2} + T_{sum\,n+3} + T_{sum\,n+4}$.
>- *Carry-save*: ogni blocco "step 1 & 2" riduce 3 vettori a 2 ($SP$ e $VR$). Livello 1: $3n$ full adder ($SP$, $VR$ a $n+1$ bit); livello 2: $2(n+1)$ FA ($n+2$ bit); livello 3: $n+2$ FA ($n+3$ bit); livello 4: $n+3$ FA ($n+4$ bit); livello 5: un solo sommatore a $n+4$ bit. Quindi $T_{pCS} = 4\,T_{sum1} + T_{sum\,n+4}$.

# Fase di progettazione
![[Porte logiche-1790682915073.webp|center]]

