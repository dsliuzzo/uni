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
[...]

# Fase di progettazione
![[Porte logiche-1790682915073.webp|center]]