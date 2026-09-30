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



---

# VHDL
[...]

## Entity
``` VHDL
entity FullAdd is
	port(
		A,B,C : in bit;
		S, Co : out bit;
end FullAdd;
```
il bit è un tipo standard e viene riconosciuto senza integrare librerie e sono sotto intesi range e operatori

capita di dover usare dei segnali di output all'interno di circuiti stessi $*_{1}$
in questi casi utilizzo la direzione `inout`

## Architecture
è obbligatorio descrivere prima la [[#Entity]] e poi l'architecture.

``` VHDL
architecture MyFA of FullAdd is

begin
	
end
```
tra `architecture` e `begin` possiamo dichiarare tutto ciò che può essere utile a definire la funzione (segnali e non variabili)
tra begin ed end abbiamo una descrizione **strutturale** (in cui possiamo richiamare delle entity descritte in un altra parte del codice) e **comportamentale** (utilizzare un approccio più ad alto livello - slegato dallo schematic del circuito)

>[!important] Segnale
>per definire il funzionamento interno bisogna dare un nome ai collegamenti che avranno un corrispettivo fisico

![[Porte logiche-1790763513846.webp|center|401]]
``` vhdl
entity FullAdd is
	port(
		A,B,C : in bit;
		S, Co : out bit;
end FullAdd;

architecture MyFA of FullAdd is

signal p : bit;
signal x,y : bit;

begin
	p <= A xor B;
	x <= p nand C;
	y <= A nand B;
	S <= C xor p;
	Co <= x nand y;
end MyFA
```

`<=` statement di assegnazione
- congruenza tra i membri
- a sinistra non possono essere presenti porte di ingresso
- i segnali possono sia ricevere che cedere il valore
>[!Important] Le istruzioni sono concorrenti
>non importa l'ordine in cui vengono scritti gli statement dell'architecture perché sono interpretati in parallelo, stiamo descrivendo lo schema circuitale.

Possiamo utilizzare le funzioni già definite in altre funzioni
``` vhdl
entity RCA2 is
	port(
		A1,A0: in bit;
		B1,B0: in bit;
		Cin: in bit;
		Cout: out bit;
		S1,S0: out bit;
	)
end RCA2;

architecture MyRCA2 of RCA2 is

signal C1: bit;

component FullAdd --ricercato nella directory di lavoro
	port(
		A,B,C: in bit;
		S, Cout: out bit
	);
end component;

begin
	FA0: FullAdd port map (A0, B0, Cin, S0, C1);
	FA1: FullAdd port map (A1, B1, C1, S1, Cout);
end MyRCA2
```

bisogna dichiarare prima le funzioni esterne da utilizzare tramite la keyword `component`. Successivamente nel `begin` assegnamo una label per poterlo richiamare, una volta per ogni volta che un componente viene utilizzato.
Nella fase di ricerca nella directory e di definizione della label è importante l'ordine in cui vengono passati gli attributi.
I nomi dei parametri del component hanno **visibilità locale**.