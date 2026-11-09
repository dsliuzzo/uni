#appunti #elettronica_digitale 

# Reti combinatorie e sommatori
*Fonte: Terza lezione, pp. 1–5; Quarta lezione, pp. 1–3.*

## Sintesi di una rete combinatoria
Una rete logica è composta da due elementi fondamentali: le **porte logiche** e i **collegamenti**. I tre parametri che ne misurano la complessità sono **velocità**, **dissipazione di potenza** e **utilizzo di risorse**.
La sintesi di una rete combinatoria si può fare con le **mappe di Karnaugh** e serve a trovare il minimo numero possibile di elementi (minimo di porte logiche e di collegamenti). La prima forma che si ricava è la **somma di prodotti**.

>[!check] Esempio (slide 34)
>Dalla mappa si ottengono tre gruppi:
>- gruppo 2: $\overline{C} \cdot D$ (AND)
>- gruppo 1: $\overline{B} \cdot \overline{D}$ (NOT sugli ingressi)
>- gruppo 3: $B \cdot D$
>
>$$f = \overline{C} \cdot D + \overline{B} \cdot \overline{D} + B \cdot D$$

La funzione ricavata potrebbe non essere ridotta al minimo: in quel caso si ripetono le mappe di Karnaugh.

>[!attention] CORREZIONE
>Nel manoscritto c'è scritto "mintermine = bit che non cambiano". Più precisamente: in un gruppo della mappa compaiono nel prodotto (**implicante**) le variabili che **non cambiano** all'interno del gruppo; un mintermine è invece un prodotto che contiene *tutte* le variabili.

## Somma binaria
Il bit alto vale 1, il bit basso vale 0. La somma binaria si esegue con lo stesso metodo della somma decimale (riporto compreso): $1 + 1 = 10_2$.

>[!check] Esempio (unsigned)
>$A(3:0) = 0001_2 = 1_{10}$ e $B(3:0) = 0111_2 = 7_{10}$
>$$0001 + 0111 = 01000_2 = 8_{10}$$

Per eseguire questa somma non basta l'half adder: serve un **full adder**, che ha **tre bit in ingresso** ($A$, $B$ e il riporto in ingresso $C_i$) e **due uscite** (somma $S$ e riporto $C_o$).

## Full adder #dafare
| $C_i$ | $A$ | $B$ | $C_o$ | $S$ |
|---|---|---|---|---|
| 0 | 0 | 0 | 0 | 0 |
| 0 | 0 | 1 | 0 | 1 |
| 0 | 1 | 0 | 0 | 1 |
| 0 | 1 | 1 | 1 | 0 |
| 1 | 0 | 0 | 0 | 1 |
| 1 | 0 | 1 | 1 | 0 |
| 1 | 1 | 0 | 1 | 0 |
| 1 | 1 | 1 | 1 | 1 |

$$S = A \oplus B \oplus C_i$$

Per scrivere $C_o$ ragioniamo su due condizioni:
1. **Generazione** del riporto: dipende solo da $A$ e $B$. Se $A = B$ allora $C_o = A = B$.
2. **Propagazione** del riporto: se $A \neq B$ allora $C_o = C_i$.

$$C_o = \underbrace{A \cdot B}_{\text{generate}} + \underbrace{(A \oplus B)}_{\text{propagate}} \cdot C_i$$

Chiamando $p = A \oplus B$ e $g = A \cdot B$: $S = p \oplus C_i$ e $C_o = g + p \cdot C_i$.

![[Marietto-fa-pg.svg|center|560]]

Data una rete logica ci possono essere più soluzioni diverse, quindi trovare quella migliore è un metodo a tentativi.

**Altra soluzione**: poiché $C_o = C_i$ se $p = 1$ e $C_o = A = B$ se $p = 0$, il riporto si può ottenere con un **multiplexer** pilotato da $p$.

![[Marietto-fa-mux.svg|center|470]]

Nello schema a blocchi il full adder (FA) ha $A_i$, $B_i$ e $C_i$ in ingresso, $S_i$ e $C_{i+1}$ in uscita. Lo stesso blocco si usa anche per la sottrazione:

- $A - B = A + \overline{B} + 1$ (complemento a 2: si somma $\overline{B}$ con riporto iniziale $C_0 = 1$)
- $A \times B$: sommare $A$ a se stesso $B$ volte
- $A / B$: contare quante volte si può sottrarre $B$ da $A$

>[!attention] CORREZIONE
>Nel manoscritto moltiplicazione e divisione sono scritte come $(A+A)^B$ e $(A-A)^B\ ?$ (con il punto interrogativo). Le notazioni non sono corrette: $A \times B = \underbrace{A + A + \dots + A}_{B\ \text{volte}}$ e la divisione $A / B$ conta **quante volte $B$ si può sottrarre da $A$** (non si sottrae $A$ da se stesso).

Per sommare/sottrarre numeri a 4 bit $A(3:0) = A_3 A_2 A_1 A_0$ e $B(3:0) = B_3 B_2 B_1 B_0$ servono tanti full adder quanti sono i bit. Il riporto iniziale è $C_0 = 0$ se si somma, $C_0 = 1$ se si sottrae.

## Ripple Carry Adder (RCA) #dafare
Il **Ripple Carry Adder** è il sommatore più semplice: usa $n$ full adder (uno per bit) collegati **in cascata**, con il riporto di uno che entra nel successivo.

![[Marietto-rca4.svg|center|540]]

Sommando due numeri a $n$ bit il risultato ha $n+1$ bit: il bit in più è il riporto dell'FA più significativo. Il massimo numero rappresentabile con $n$ bit è $2^n - 1$, cioè l'intervallo $[0,\ 2^n - 1]$.

>[!check] Esempio
>$$\begin{array}{r} 1111 \\ 0001 \\ +\ 1111 \\ \hline 10000 \end{array}$$
>(la riga in alto contiene i riporti; $1 + 15 = 16$)

**Limite**: ogni FA deve aspettare il riporto di quello precedente, quindi il ritardo cresce **linearmente** con il numero di bit. Se $\tau_{FA} \approx \tau_{carry} = 100\ ps$, per $m$ bit il ritardo è $m \cdot \tau_{carry}$ e la frequenza massima è $f = 1/T$.

>[!check] Esempio: RCA a 64 bit
>$$64 \cdot 100\ ps = 6400\ ps = 6.4\ ns$$

L'RCA è il più semplice ma è lento: si usa solo per particolari architetture.

## Carry Select (CSel)
Il problema dell'RCA è che i riporti sono in cascata. Il **carry select** spezza la catena in due metà e calcola **in parallelo** i due risultati possibili della metà alta, uno per $C_{in} = 0$ e uno per $C_{in} = 1$. Alla fine un **multiplexer** per ogni bit, pilotato dal riporto reale $C_4$ della metà bassa, sceglie il risultato corretto.

![[Marietto-carry-select.svg|center|820]]

>[!check] Esempio: $A = 00000001_2$ (1), $B = 11111111_2$ (255), unsigned
>- metà alta con riporto "0": $0000 + 1111 = 01111$
>- metà alta con riporto "1": $0000 + 1111 + 1 = 10000$
> - metà bassa: $0001 + 1111 = 10000$, quindi $C_4 = 1$ e i multiplexer scelgono il risultato "1"
>
>$$S(8:4) = 10000 \quad\Rightarrow\quad 1 + 255 = 256$$

Con 8 bit servono **12 FA** (4 + 4 + 4) e **5 multiplexer** (4 per $S_7 \dots S_4$ + 1 per il riporto $C_8$). Il numero di multiplexer è pari al numero di bit della metà alta (più uno per il riporto finale).

Si guadagna in velocità, ma il circuito costa di più: più porte logiche e collegamenti, quindi **maggiore dissipazione di potenza**. Con 8 bit si dimezza il ritardo, ma è ancora troppo lento: si può applicare la tecnica **ricorsivamente** e conviene farlo fino a 16 bit. Vedi anche [[Porte logiche#Carry select adder|carry select adder]].

## Carry Look Ahead (CLA) #dafare
Riprendiamo la tabella del full adder aggiungendo le colonne di propagate e generate:

| $C_i$ | $A_i$ | $B_i$ | $C_{i+1}$ | $S_i$ | $P_i$ | $G_i$ |
|---|---|---|---|---|---|---|
| 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 0 | 0 | 1 | 0 | 1 | 1 | 0 |
| 0 | 1 | 0 | 0 | 1 | 1 | 0 |
| 0 | 1 | 1 | 1 | 0 | 0 | 1 |
| 1 | 0 | 0 | 0 | 1 | 0 | 0 |
| 1 | 0 | 1 | 1 | 0 | 1 | 0 |
| 1 | 1 | 0 | 1 | 0 | 1 | 0 |
| 1 | 1 | 1 | 1 | 1 | 0 | 1 |

$$P_i = A_i \oplus B_i \qquad G_i = A_i \cdot B_i \qquad C_{i+1} = G_i + P_i \cdot C_i$$

>[!attention] CORREZIONE
>Nel manoscritto la tabella dei riporti $C_{i+1}$ e delle colonne $P_i$/$G_i$ è scritta a mano con qualche cifra poco leggibile: i valori sopra sono stati ricalcolati dalle formule.

L'idea: $G_i$ e $P_i$ si calcolano **subito**, a partire da $A$ e $B$, senza aspettare i riporti. Sostituendo ricorsivamente $C_{i+1} = G_i + P_i C_i$ si esprime ogni riporto **direttamente** in funzione di $C_0$:

$$\begin{aligned}
C_1 &= G_0 + P_0 \cdot C_0 && \text{(porta a 2 ingressi)} \\
C_2 &= G_1 + P_1 G_0 + P_1 P_0 C_0 && \text{(3 ingressi)} \\
C_3 &= G_2 + P_2 G_1 + P_2 P_1 G_0 + P_2 P_1 P_0 C_0 && \text{(4 ingressi)} \\
C_4 &= G_3 + P_3 G_2 + P_3 P_2 G_1 + P_3 P_2 P_1 G_0 + P_3 P_2 P_1 P_0 C_0 && \text{(5 ingressi)} \\
S_i &= P_i \oplus C_i
\end{aligned}$$

>[!check] Esempio: $A = 0001$, $B = 1111$, $C_0 = 0$
>$P_3 P_2 P_1 P_0 = 1110$, $G_3 G_2 G_1 G_0 = 0001$
>$C_1 = G_0 + P_0 C_0 = 1$, $C_2 = G_1 + P_1 C_1 = 1$, $C_3 = 1$, $C_4 = 1$ e $S = 0000$, quindi $1 + 15 = 10000_2$.

>[!attention] CORREZIONE
>Nel manoscritto la riga dei generate è scritta $G_3 = 0,\ G_2 = 0,\ G_0 = 0,\ G_0 = 1$: il terzo è un refuso per $G_1 = 0$.

Per calcolare l'$i$-esimo riporto servono porte a $i+1$ ingressi.

>[!question] Osservazione
>Questa è una **limitazione** perché ogni porta logica ammette un numero massimo di ingressi (a lezione l'ipotesi è di al massimo due ingressi, quindi le porte più larghe vanno scomposte). Il **fan-in** è proprio il numero massimo di ingressi ammessi da una porta ([[Circuiti integrati digitali#Fan-in|fan-in]]).

### Fan-out e buffer
Il **fan-out** è il numero di volte in cui un segnale viene usato come ingresso di altre porte, e anche su di esso c'è una limitazione: un segnale con fan-out elevato **si muove molto lentamente**, la velocità cala all'aumentare del fan-out e si dissipa più energia.
Per ridurre il problema si usa il **buffer**, un circuito che aggiunge potenza al segnale: possiamo immaginarlo come **due inverter collegati in cascata**. Il fan-out massimo assunto nel nostro circuito è 4.

![[Marietto-buffer.svg|center|520]]

Grazie ai buffer il tempo di calcolo del CLA diventa **logaritmico**, mentre il ripple carry ha tempo di calcolo **lineare**.

Perché un segnale elettronico funzioni bene devono essere tutti **sincronizzati**, e per farlo si usa il segnale di **clock**. Il clock deve arrivare dappertutto, quindi avrebbe sicuramente problemi di sovraccarico: per risolverlo si usa un sistema di bufferizzazione complicato. Un sistema di bufferizzazione serve a replicare il segnale quante volte serve per evitare il sovraccarico.

# Flusso di progettazione e introduzione al VHDL
*Fonte: Quinta lezione, pp. 1–6; Sesta lezione, pp. 1–2.*

## Fasi di realizzazione di un circuito logico
![[Marietto-flusso-progetto.svg|center|760]]

1. **Descrizione**: descrizione della funzione del circuito (si usa il **VHDL**, linguaggio usato per la descrizione di circuiti digitali).
2. **Simulazione logica**: verifica che la descrizione precedente sia corretta (simile al testing di un linguaggio ad alto livello). Deve essere **esaustiva**: verifica per tutti i possibili input.
3. Ci si chiede se la simulazione logica è andata a buon fine: se sì si va avanti, se no si torna alla descrizione individuando e correggendo gli errori.
4. **Mapping (sintesi)**: traduce la funzione in elementi circuitali (porte logiche, porte input e porte output). Si stabilisce quanti e quali elementi servono per eseguire la funzione e le porte per comunicare con l'esterno. Un altro elemento reale considerato nel mapping è il collegamento tra l'uscita di una porta e l'ingresso di un'altra (**segnali**).
5. **Simulazione post-sintesi**: mette in gioco le caratteristiche reali del circuito (ad esempio il ritardo che le porte logiche introducono nel calcolo). Si usa il tool per la sintesi, non c'è bisogno di farlo a mano: possiamo anche dare dei comandi al tool.
6. Ci si chiede se la simulazione post-sintesi è andata a buon fine: se sì si va avanti, se no si torna spesso al mapping (può non essere sufficiente: allora si torna alla descrizione e si sistemano le cose).
7. **Place & Route**: prende le porte scelte e le collega fra loro. Va a stimare il contributo dei collegamenti. Man mano che si va avanti ci si avvicina al circuito reale.
8. **Simulazione post P&R**: sia le porte sia i collegamenti sono considerati con le loro caratteristiche reali.
9. Ci si chiede se la simulazione post P&R è andata a buon fine: se sì si va avanti, se no si torna indietro al P&R; se non è ancora sufficiente, si torna al mapping, e se non basta ancora alla descrizione del circuito.
10. **Layout**: dipende dalla piattaforma di realizzazione (**ASIC** = Application Specific Integrated Circuit; **FPGA** = Field Programmable Gate Array).

>[!question] Osservazione
>Non è detto che a una risposta positiva della sintesi logica corrisponda una positiva della simulazione post-sintesi.

I circuiti elettronici sono realizzati su silicio. Successivamente avremo il **chip** di silicio da mettere nell'applicazione: va testato in **laboratorio**. Può non funzionare: c'è un danno, un errore della ditta, un difetto. Ci chiediamo se funziona: se sì, bene; se no, ritorno alla descrizione.

- **ASIC**: Application Specific Integrated Circuit, **non programmabile**.
- **FPGA**: Field Programmable Gate Array, **programmabile**.

Vedi anche [[Circuiti integrati digitali#Approcci progettuali|approcci progettuali]].

## Processore, microcontrollore e acceleratori hardware
Un **processore** è provvisto di un'unità centrale di elaborazione (**CPU**). Nella CPU è presente la **ALU** (hardware che esegue le istruzioni). Nella memoria vengono depositate tutte le informazioni che servono al processore. Il collegamento tra processore e memoria esterna non ammette una certa velocità. Il processore è **general purpose**: dissipa molto ed ha una velocità limitata perché, anche se abbiamo parallelismo, alla fine è sequenziale.

Il **microcontrollore** (µP) è una struttura ridotta di un processore general purpose e serve a semplificare la struttura di calcolo. Anche nel microprocessore si usa un software (per poter "usare" o "progettare" il circuito; si programma in C/C++). Nei moderni FPGA si integra nello stesso chip sia il microprocessore sia la memoria.
Quando ci sono situazioni complesse viene progettato un circuito **hardware** e non un software. Negli FPGA, per ridurre il problema di dissipazione e velocità, si usano gli **acceleratori hardware** (Acc HW). Il VHDL ci darà gli elementi per progettare un acceleratore hardware.

## Il VHDL #dafare
Il VHDL è un semplice **linguaggio di testo** e bisogna usarlo per qualsiasi tool (ASIC o FPGA), mentre senza VHDL non è così: andrebbe modificato, anche solo aggiornando, il software. Il VHDL può essere usato a diversi **livelli di astrazione**. Con la stessa sintassi si specificano i circuiti e i **test bench** (input utili per la simulazione). Vedi [[VHDL#Test bench|test bench]].

![[Marietto-testbench.svg|center|620]]

In VHDL vanno descritte:
- le **porte di ingresso/uscita** (**Entity** = elenco delle porte di ingresso e di uscita)
- gli **operatori** (descrivono l'**architettura**, cioè quali porte usiamo e come sono collegate tra loro)

**Architecture** = gates, operatori (quali porte usiamo) + signals (come sono collegate).
**Library** = architetture già predefinite. **Package** = dichiarazioni fatte da noi.

Il VHDL **non è un linguaggio di programmazione** in quanto ogni volta che scriviamo qualcosa esso verrà convertito fisicamente in silicio.

### Esempio 1: AND
Il tipo `bit` ha due valori ammissibili: `'0'` e `'1'`. Sono ammessi gli operatori semplici `not`, `and`, `nand`, `nor`, `or`, `xor`, `xnor`. Definiamo l'**entity** e dopo questa parola scegliamo un nome arbitrario (a parte le parole chiave): anche il nome di una porta è arbitrario.

```vhdl
entity myAND is
  port (A : in bit;
        B : in bit;
        O : out bit);        -- equivale a: port (A, B : in bit; O : out bit);
end myAND;

architecture Cnc1 of myAND is
begin
  O <= A and B;
end Cnc1;
```

- `of myAND` **lega** l'architecture alla entity; `begin` inizia la funzione.
- Gli **statement** sono istruzioni **concorrenti**: l'ordine con cui le scriviamo è indifferente.
- L'AND così va bene perché `A` e `B` sono di tipo `bit`, che è un tipo standard. Il tipo a destra dell'assegnazione deve essere uguale al tipo a sinistra; a sinistra ci sono solo porte `out`, a destra solo porte `in`.

### Esempio 2: signal
![[Marietto-vhdl-es2.svg|center|480]]

```vhdl
entity Ex2 is
  port (A, B, C : in bit;
        O1, O2  : out bit);
end Ex2;

architecture Cnc2 of Ex2 is
  signal S1 : bit;              -- dichiarazione del tipo signal
begin
  O1 <= (C or S1);              -- definizione delle operazioni svolte
  O2 <= (B xor S1);
  S1 <= (A and B);
end Cnc2;
```

>[!important] Behavioral e structural
>- **Behavioral** = descrizione comportamentale (ci sono le equazioni logiche): vedi Esempio 1.
>- **Structural** = descrizione strutturale: come sono collegati tra loro i vari elementi del circuito. Vedi sotto.
>- **Istanziazione** = chiamata di funzione al full adder. L'istanza è definita da una **label**.

## Ripple carry a 4 bit in VHDL (structural) #dafare
*(tipo 1 d'esame: esempio structural; nella lezione precedente gli esempi behavioral)*

Servono quattro full adder. Descriviamo prima il full adder (con $p$ e $g$), poi lo richiamiamo come una funzione.

```vhdl
entity FA is
  port (A, B, Cin : in bit;
        S, Cout   : out bit);
end FA;

architecture ArcFA of FA is
  signal P, g : bit;
begin
  S    <= P xor Cin;
  Cout <= g or (P and Cin);
  g    <= A and B;
  P    <= A xor B;
end ArcFA;
```

Le due $P$ nel circuito sono collegate elettricamente tra loro. Una volta descritto il full adder lo richiamiamo come se fosse una funzione, con delle regole: $C_1$ e $C_2$ sono segnali interni e nell'entity riportiamo solo quello che esce/entra dall'esterno.

```vhdl
entity RCA4 is
  port (C0, A0, A1, A2, A3, B0, B1, B2, B3 : in bit;
        C4, S3, S2, S1, S0 : out bit);
end RCA4;

architecture my_ADD of RCA4 is
  signal C1, C2, C3 : bit;

  component FA                      -- richiamo di funzione (sintassi)
    port (A, B, Cin : in bit;
          S, Cout   : out bit);
  end component;
begin
  FA0 : FA port map (A0, B0, C0, S0, C1);
  FA1 : FA port map (A1, B1, C1, S1, C2);
  FA2 : FA port map (A2, B2, C2, S2, C3);
  FA3 : FA port map (A3, B3, C3, S3, C4);
end my_ADD;
```

- Il `component` ha il **nome della entity** che richiamiamo; i parametri devono essere nello **stesso ordine** della entity, con lo **stesso tipo** e la stessa dimensione.
- `port map` prende l'elenco nelle tonde e lo mappa sulle porte del full adder (**nell'ordine** da rispettare).
- La **label** (`FA0`, `FA1`, …) è obbligatoria.
- Non è necessario un ordine prestabilito: le istanze sono **concorrenti**.

>[!attention] CORREZIONE
>Nel manoscritto la quarta istanza è etichettata `FA3` ma usa gli ingressi $A_2, B_2, C_2, S_2, C_3$, e la label `FA3` compare due volte (le label devono essere uniche). Qui l'istanza con $A_2, \dots$ è `FA2` e `FA3` è quella con $A_3, \dots, C_4$.

## Costrutti `when` e `with select` #dafare
```vhdl
-- porta x : in bit;   signal S : bit;
S <= '0' when X = '1' else
     '1';                        -- vale '1' quando X = '0'
```
Dove sta `X` può esserci una porta in ingresso o un signal; dove sta `S` una porta `out` o un signal. Nel `when ... else` si usa `else`; il simbolo `'` serve per i valori dei bit. Si può usare anche `when others` nel `with select`:

```vhdl
with X select
  S <= '0' when '1',
       '1' when others;
```
`with select` e `when` sono **intercambiabili**.

>[!attention] CORREZIONE
>Nel manoscritto la seconda alternativa è scritta come `'1' when x='0'` seguita da "`when others`". In VHDL il `when ... else` deve terminare con un `else` (valore di default), mentre il `when others` è proprio del `with select`: ho scritto le due forme separate.

### Full adder con propagate e multiplexer
Entity `FA2`: ingressi $A, B, C_{in}$, uscite $C_{out}, S$.

![[Marietto-fa-mux-vhdl.svg|center|470]]

```vhdl
architecture myFA2 of FA2 is
  signal p : bit;
begin
  p    <= A xor B;
  S    <= p xor Cin;                    -- AGGIUNTA: serve per la porta S
  Cout <= A when p = '0' else Cin;      -- altro modo per troncare il when
  -- equivalente con with-select:
  -- with p select
  --   Cout <= A   when '0',
  --           Cin when others;
end myFA2;
```
Se $p = 0$ allora $A = B$ e il riporto vale $A$; se $p = 1$ il riporto è $C_{in}$.

>[!attention] AGGIUNTA
>La riga `S <= p xor Cin;` non è nel manoscritto (la pagina si interrompe prima), ma è necessaria perché l'uscita $S$ è pilotata dalla seconda XOR del circuito.

## RCA e CLA in un'unica architecture #dafare
Ipotesi: $A$ e $B$ sono numeri a 3 bit **unsigned**. Il riporto del CLA si scrive:

$$\begin{aligned}
C_1 &= g_0 + p_0 \cdot C_{in} \\
C_2 &= g_1 + p_1 g_0 + p_1 p_0 C_{in} \\
C_3 &= g_2 + p_2 g_1 + p_2 p_1 g_0 + p_2 p_1 p_0 C_{in}
\end{aligned}$$

Mettiamo nella stessa architecture sia l'FA (RCA) sia il CLA. Poiché si vuole una descrizione **behavioral** non si usano component, ma servono i signal generate e propagate.

![[Marietto-rca4.svg|center|540]]

```vhdl
entity ADD_RCA_CLA is
  port (A, B : in bit_vector(2 downto 0);     -- bit di ingresso uguali
        Cin  : in bit;
        CoutRCA, CoutCLA : out bit;           -- bit di uscita diversi
        SRCA, SCLA : out bit_vector(2 downto 0));
end ADD_RCA_CLA;

architecture my_ADD of ADD_RCA_CLA is
  signal p, g : bit_vector(2 downto 0);
  signal CRCA : bit_vector(3 downto 0);
  signal CCLA : bit_vector(3 downto 0);
begin
  CRCA(0) <= Cin;  CCLA(0) <= Cin;
  p <= A xor B;    g <= A and B;

  -- descriviamo la logica dell'RCA
  CRCA(3 downto 1) <= g or (p and CRCA(2 downto 0));
  SRCA    <= p xor CRCA(2 downto 0);
  CoutRCA <= CRCA(3);

  -- descriviamo la logica del CLA
  CCLA(1) <= g(0) or (p(0) and CCLA(0));
  CCLA(2) <= g(1) or (p(1) and g(0))
             or (p(1) and p(0) and CCLA(0));
  CCLA(3) <= g(2) or (p(2) and g(1))
             or (p(2) and p(1) and g(0))
             or (p(2) and p(1) and p(0) and CCLA(0));
  SCLA    <= p xor CCLA(2 downto 0);        -- AGGIUNTA
  CoutCLA <= CCLA(3);                       -- AGGIUNTA
end my_ADD;
```

>[!attention] CORREZIONE
>Nel manoscritto il terzo termine di `CCLA(3)` è `(p(2) and p(2) and g(0))`: è un refuso, deve essere `p(2) and p(1) and g(0)` (come nell'espressione $C_3$ sopra). Inoltre nell'equazione di $C_1$ il foglio sembra riportare $p_1$ invece di $p_0$; nel codice (e nella formula corretta) è `p(0)`.

>[!attention] AGGIUNTA
>`SCLA` e `CoutCLA` non compaiono nel foglio (la pagina finisce a `CCLA(3)`): le ho aggiunte per analogia con l'RCA.

## Shift e concatenazione con gli array
L'operatore `&` concatena vettori e permette di realizzare gli **shift**.

```vhdl
signal V  : bit_vector(3 downto 0);   -- signal o porta in ingresso
signal SV : bit_vector(4 downto 0);   -- signal o porta in uscita

V  <= "0001";
SV <= V & '0';        -- shift a sinistra di 1 posizione (costo: aggiunge uno 0)
-- SV <= V & "0000";  -- shift di 4 posizioni: SV va dichiarato (7 downto 0)
```
Per **dividere** per 2 si sposta lo 0 dall'altra parte (**shift destro**):
```vhdl
SV <= '0' & V(3 downto 1);
```
Supponiamo di avere tre vettori a 4 bit `S_MSB_1`, `S_MSB_0`, `S_LSB`: a partire da questi generiamo due vettori da 8 bit, utili per il carry select a 16 bit.
```vhdl
signal S1, S0 : bit_vector(7 downto 0);
S1 <= S_MSB_1 & S_LSB;
S0 <= S_MSB_0 & S_LSB;
```

## Progetto 1
Progettare un sommatore **Carry Select a 16 bit** unsigned. Dobbiamo avere:
- codice VHDL del circuito e **test bench** (testare i singoli elementi e scrivere nella relazione figura e spiegazione)
- **simulazione logica**

Relazione in **PDF**, senza il pacchetto del progetto: va tutto nel PDF. Scadenza: 15 giorni. Basta che la invii uno solo del gruppo, mettendo gli altri partecipanti in copia. L'email è `s.perri@unical.it` (vedi [[Elettronica digitale#Progetto 1|Progetto 1]]).

# Circuiti CMOS: da funzione logica a interruttori
*Fonte: Decima lezione, pp. 1–6.*

## Dalla XNOR alla XOR senza inverter finale
Questa è la **XNOR** a interruttori. Per ottenere la XOR non serve un inverter all'uscita: ci basta tenere d'occhio le combinazioni degli ingressi che danno lo 0 logico e l'1 logico. Partendo dalla XNOR, per ottenere l'1 logico ($V_{DD}$) scambiamo $\overline{A}$ con $A$ (o $\overline{B}$ con $B$) negli interruttori della rete di pull-up (quelli indicati con $Z$); per lo 0 logico ($0\ V$) facciamo lo stesso scambio nella rete di pull-down.

>[!multi-column]
>
>>[!important] XNOR
>>![[Marietto-xnor-cmos.svg|center|330]]
>
>>[!important] XOR
>>![[Marietto-xor-cmos.svg|center|330]]

Gli inverter a lato servono a ottenere $\overline{A}$ e $\overline{B}$. All'esame verrà chiesta anche la **tabella degli stati** (come nella lezione precedente); la facciamo per la XOR. Per comodità si usano gli stessi pedici fra $\overline{A}$ di $Z$ e $\overline{A}$ di $U$ e così via. `ON` = interruttore chiuso, `OFF` = aperto.

| $A$ | $B$ | $Z_1$ | $Z_2$ | $Z_3$ | $Z_4$ | $U_1$ | $U_2$ | $U_3$ | $U_4$ | $out$ |
|---|---|---|---|---|---|---|---|---|---|---|
| $0\ V$ | $0\ V$ | OFF | ON | ON | OFF | ON | OFF | OFF | ON | $0\ V$ |
| $0\ V$ | $V_{DD}$ | OFF | OFF | ON | ON | ON | ON | OFF | OFF | $V_{DD}$ |
| $V_{DD}$ | $0\ V$ | ON | ON | OFF | OFF | OFF | OFF | ON | ON | $V_{DD}$ |
| $V_{DD}$ | $V_{DD}$ | ON | OFF | OFF | ON | OFF | ON | ON | OFF | $0\ V$ |

## Struttura e regole #dafare
Un circuito combinatorio può assumere o $0\ V$ o $V_{DD}$. Regole da tenere a mente:

![[Marietto-pun-pdn.svg|center|330]]

1. Il circuito è diviso in due porzioni: in una si usano soltanto interruttori di **tipo 0** (per $V_{DD}$), nell'altra soltanto interruttori di **tipo 1** (per $0\ V$). La rete di soli interruttori di tipo 0 è la **rete di pull-up** (**PUN**, Pull Up Network: porta *su* l'uscita); quella di soli interruttori di tipo 1 è la **rete di pull-down** (**PDN**, Pull Down Network: porta *giù* l'uscita). Le due reti sono collegate nel **nodo d'uscita**, dove si vede il valore logico del circuito.
2. Il numero di interruttori di tipo 0 è uguale a quello di tipo 1.
3. Le reti sono **duali**: se in una rete c'è un collegamento in parallelo, nell'altra c'è un collegamento in serie.
4. Le reti di pull-up e pull-down sono **complementari**, per questo la tecnologia si chiama **CMOS** (Complementary MOS).

>[!important] Regole per passare da funzione logica a circuito ad interruttori
>1. **AND** → collegamento **serie** nella PDN e **parallelo** nella PUN
>2. **OR** → collegamento **serie** nella PUN e **parallelo** nella PDN
>3. Se la funzione è **negata** abbiamo finito; se è **diretta** va aggiunto un **inverter sull'uscita**

Vedi anche [[Circuiti integrati digitali#Regole di progettazione|regole di progettazione]].

### Esercizio da traccia d'esame #dafare
$f = e + d \cdot (a + b \cdot c)$, con $+$ = OR e $\cdot$ = AND. La priorità è: prima l'AND e poi l'OR, tenendo conto delle parentesi. La professoressa preferisce partire dalla **rete di pull-down**. Ci sono più termini e $e$ si riferisce solo alla prima OR. La funzione è diretta, quindi serve l'inverter in uscita ($f'$ è il nodo prima dell'inverter).

![[Marietto-es-esame-1.svg|center|420]]

### Altro esempio #dafare
$f = \overline{a} + b \cdot \overline{c}$

Pur esserci degli ingressi negati la funzione è **diretta** (non sono tutti negati), quindi basta ipotizzare due inverter per calcolare $\overline{a}$ e $\overline{c}$ e un inverter in uscita.

![[Marietto-es-esame-2.svg|center|420]]

Tabella degli stati (il numero di righe lo sceglie la prof, le combinazioni le scegliamo noi; usare $f'$ è una scelta, non è obbligatorio, serve a facilitare se c'è un inverter prima della fine):

| $A$ | $B$ | $C$ | $Z_3$ ($\overline{a}$) | $Z_1$ ($b$) | $Z_2$ ($\overline{c}$) | $U_3$ ($\overline{a}$) | $U_1$ ($b$) | $U_2$ ($\overline{c}$) | $f'$ | $f$ |
|---|---|---|---|---|---|---|---|---|---|---|
| $0\ V$ | $0\ V$ | $0\ V$ | OFF | ON | OFF | ON | OFF | ON | $0\ V$ | $V_{DD}$ |
| $V_{DD}$ | $V_{DD}$ | $V_{DD}$ | ON | OFF | ON | OFF | ON | OFF | $V_{DD}$ | $0\ V$ |
| $0\ V$ | $V_{DD}$ | $0\ V$ | OFF | OFF | OFF | ON | ON | ON | $0\ V$ | $V_{DD}$ |

# Dal circuito alla funzione, full adder a interruttori
*Fonte: Undicesima lezione, pp. 1–8.*

## Dal circuito alla funzione logica #dafare
Esercizio: dato il circuito, ricavare la funzione logica e poi la tabella degli stati.

![[Marietto-aoi-cmos.svg|center|360]]

La PDN è $a \,\|\, (b \cdot c) \,\|\, (d \cdot e)$, quindi la funzione è **negata** (non c'è l'inverter):

$$f = \overline{a + b \cdot c + d \cdot e}$$

| $a$ | $b$ | $c$ | $d$ | $e$ | $Z_1$ | $Z_2$ | $Z_3$ | $Z_4$ | $Z_5$ | $U_1$ | $U_2$ | $U_3$ | $U_4$ | $U_5$ | $f$ |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| $0\ V$ | $0\ V$ | $0\ V$ | $0\ V$ | $0\ V$ | ON | ON | ON | ON | ON | OFF | OFF | OFF | OFF | OFF | $V_{DD}$ |
| $V_{DD}$ | $V_{DD}$ | $V_{DD}$ | $V_{DD}$ | $V_{DD}$ | OFF | OFF | OFF | OFF | OFF | ON | ON | ON | ON | ON | $0\ V$ |
| $0\ V$ | $V_{DD}$ | $0\ V$ | $V_{DD}$ | $0\ V$ | ON | OFF | ON | OFF | ON | OFF | ON | OFF | ON | OFF | $V_{DD}$ |


### Dove va l'inverter #dafare
Esercizio simile per capire dove va collegato l'inverter che ci consente di avere un **segnale negato**: $f = \overline{a} + b \cdot c + d \cdot e$.

![[Marietto-aoi-inv-cmos.svg|center|380]]

>[!attention] CORREZIONE
>Nel manoscritto l'interruttore $Z_1$ della PUN è pilotato da $\overline{a}$ (con un inverter su $a$) ma l'interruttore $U_1$ della PDN è ancora pilotato da $a$: le due reti non sarebbero complementari (con $a = 1$ sarebbero entrambe chiuse, cortocircuito). Lo schema qui sopra usa $\overline{a}$ su **entrambi** ($Z_1$ e $U_1$) ed è stato verificato su tutte le combinazioni: la PUN e la PDN sono complementari e il nodo prima dell'inverter vale $\overline{f}$.

## Full adder con circuiti a interruttori
Come full adder usiamo quello che sfrutta un **multiplexer con propagate e generate**:

![[Marietto-fa-mux.svg|center|470]]

La XOR si può scrivere come XNOR negata:
$$p = a \oplus b = \overline{a \cdot b + \overline{a} \cdot \overline{b}}$$

Ci sono **due possibilità** per disegnare la XOR, con la **stessa PDN**:

>[!multi-column]
>
>>[!important] Primo modo
>>![[Marietto-fa-xor-1.svg|center|300]]
>
>>[!important] Secondo modo
>>![[Marietto-fa-xor-2.svg|center|300]]

La XOR e il multiplexer sono due funzioni logiche equivalenti a cui cambiamo i segnali di ingresso. Il carry è la funzione del multiplexer:

$$f_{MUX} = \overline{p} \cdot b + p \cdot C_{in}$$

![[Marietto-fa-mux-cmos.svg|center|380]]

($\overline{p}$ si ottiene con un inverter sull'uscita $p$ della XOR.) Invece di fare tanti collegamenti difficili da seguire usiamo direttamente le **etichette con lo stesso nome** per rendere lo schema più leggibile.

La **XOR finale** completa il full adder: $S = p \oplus C_{in}$.

![[Marietto-fa-xor-s.svg|center|300]]

# Non idealità e caratteristiche statiche
*Fonte: Undicesima lezione, pp. 9–16; Tredicesima lezione, p. 1.*

## Interruttori reali
Ricapitoliamo il modello **ideale** degli interruttori:

![[Marietto-interruttore-ideale.svg|center|520]]

Tipo 0: se $V_{C} = 0\ V$ è ON (corto circuito, $R_{ON} = 0\ \Omega$), se $V_C = V_{DD}$ è OFF (circuito aperto, $R_{OFF} = \infty$). Tipo 1: se $V_C = 0\ V$ è OFF, se $V_C = V_{DD}$ è ON.

Questa casistica nel mondo reale non è possibile, in quanto non esiste un materiale con resistenza uguale a 0. Questa è la prima non idealità; la seconda è che la resistenza non può essere uguale a infinito:

1. **non idealità**: $R_{ON} > 0\ \Omega$
2. **non idealità**: $R_{OFF} \neq \infty$

Adesso si fa anche l'**analisi dinamica** oltre a quella statica. Vedi [[Circuiti integrati digitali#Interruttori reali|interruttori reali]].

## Fan-in
La prima caratteristica statica dei circuiti CMOS è il **fan-in**. Quando un interruttore è ON si sostituisce con $R_{ON}$, quando è OFF con $R_{OFF}$. Due casistiche critiche sulla NAND a quattro ingressi: tutti $0$ oppure tutti $V_{DD}$.

![[Marietto-nand4-cmos.svg|center|320]]

>[!multi-column]
>
>>[!check] Caso $a = b = c = d = 0\ V$
>>![[Marietto-fanin-0.svg|center|380]]
>>$$out = 4 R_{OFF} \cdot I \qquad I = \frac{V_{DD}}{4 R_{OFF} + \frac{R_{ON}}{4}}$$
>
>>[!check] Caso $a = b = c = d = V_{DD}$
>>![[Marietto-fanin-1.svg|center|380]]
>>$$out = 4 R_{ON} \cdot I \qquad I = \frac{V_{DD}}{4 R_{ON} + \frac{R_{OFF}}{4}}$$

Nel primo caso con 16 ingressi invece di 4 sembrerebbe che più ingressi siano meglio, perché $out$ si avvicina sempre di più a $V_{DD}$. Nell'altro caso (tutti a $V_{DD}$) invece diminuisce la $R_{OFF}$ equivalente (che dovrebbe tendere a infinito) e aumenta la $R_{ON}$ equivalente (che dovrebbe tendere a 0): ci allontaniamo dal circuito ideale.

>[!important] Problema del fan-in
>Se il numero di ingressi è troppo alto $V(\text{'1'}) < V_{DD}$ e $V(\text{'0'}) > 0\ V$: si perde la rappresentazione nominale dei valori logici.

>[!attention] AGGIUNTA
>Il manoscritto riporta le formule solo per $n = 4$. Con la stessa scomposizione, per $n$ ingressi nel caso "tutti a $V_{DD}$" si ha $out = V_{DD} \cdot \dfrac{n R_{ON}}{n R_{ON} + R_{OFF}/n}$, che cresce con $n$ (cioè lo "0" si allontana da $0\ V$).

Vedi [[Circuiti integrati digitali#Fan-in|fan-in]].

## Margine di rumore
Terza non idealità: l'uscita di un circuito viene data come ingresso a un altro circuito (come nel full adder), che potrebbe non interpretarla come $V_{DD}$ o $0\ V$. Per risolvere si introduce una **tolleranza**, il **margine di rumore**. Se $V_C = V_{DD}$ in realtà basta $V_C \geq V_{soglia}$ ⇒ ON; se $V_C = 0\ V$ in realtà basta $V_C \leq V_{soglia}$ ⇒ OFF. Abbiamo una $V_{soglia,U}$ per gli interruttori di tipo 1 e una $V_{soglia,Z}$ per quelli di tipo 0.

| | tipo 1 ($V_{CU}$) | tipo 0 ($V_{CZ}$) |
|---|---|---|
| ON | $V_{CU} \geq V_{soglia,U}$ | $V_{CZ} \leq V_{soglia,Z}$ |
| OFF | $V_{CU} \leq V_{soglia,U}$ | $V_{CZ} \geq V_{soglia,Z}$ |

Esempio banale per introdurre la terminologia: la NAND è la **porta pilota** (driver), l'inverter è il **carico** (load).

![[Marietto-pilota-carico.svg|center|500]]

Se il margine di rumore non viene rispettato i segnali assumono valori diversi da quelli attesi e il carico può assumere valori errati. Il pilota genera una certa $V_{out}$, che può essere:
- $V_{OH}$ (V out high): tensione di uscita per l'**1** logico
- $V_{OL}$ (V out low): tensione di uscita per lo **0** logico

Per il carico:
- $V_{IL}$ (V in low): **massimo** valore di tensione che il carico interpreta correttamente come 0 logico (se lo si sorpassa carico e pilota non si capiscono più)
- $V_{IH}$ (V in high): **minimo** valore di tensione che il carico interpreta correttamente come 1 logico

Se $V_{OH} \geq V_{IH}$ e $V_{OL} \leq V_{IL}$ non ci sono problemi e da queste condizioni si ricavano i **margini di rumore**:

$$NM_H = V_{OH} - V_{IH} \qquad NM_L = V_{IL} - V_{OL}$$

Entrambi devono essere $\geq 0$. Se il fan-in è troppo elevato si rischia di non rispettare questo vincolo. Si chiamano margini di rumore perché all'interno del circuito ci possono essere variazioni non volute che non possiamo controllare. Un circuito con margine di rumore molto alto è **robusto**: risponde bene sia a un fan-in alto sia a un elevato rumore. Vedi [[Circuiti integrati digitali#Margini di rumore|margini di rumore]].

## Dissipazione di potenza statica
Ultima caratteristica statica, collegata al circuito dell'inverter.

![[Marietto-inverter-statica-reale.svg|center|640]]

- **Caso ideale**: qualsiasi sia la combinazione logica non c'è corrente ($I_{DD} = 0$), quindi $P_{DD} = I_{DD} \cdot V_{DD} = 0$. Nel caso statico e ideale non c'è dissipazione di potenza.
- **Caso reale**: con $V_{in} = V_{DD}$ o $V_{in} = 0\ V$ c'è sempre una corrente $I'_{DD}$ che attraversa le resistenze non ideali, quindi $P_{DD} = I'_{DD} \cdot V_{DD} \neq 0$: nel caso statico e reale c'è **sempre** dissipazione di potenza.

Le caratteristiche statiche di un circuito logico sono quindi: **dissipazione di potenza statica**, **fan-in** e **margini di rumore**. Vedi [[Circuiti integrati digitali#Dissipazione di potenza statica|dissipazione di potenza statica]].

# Dentro l'interruttore: il MOSFET
*Fonte: Dodicesima lezione, pp. 1–7. Teoria già presente in [[MOSFET]]; qui la versione dalla lezione.*

Per **dinamico** si intende che gli ingressi variano nel tempo. Si vede cosa c'è dentro un interruttore: prima il **tipo 1**, poi la differenza con il tipo 0.

## Silicio e drogaggio
Il circuito è realizzato in **silicio**, elemento **tetravalente**: ogni atomo ha 4 elettroni sull'ultimo livello energetico. La struttura che si forma è molto stabile: per completare l'ottetto ogni atomo si lega a quattro atomi di silicio vicini, mettendo in condivisione un elettrone per legame.

![[Marietto-reticolo-silicio.svg|center|440]]

Per condurre corrente servono elettroni **liberi**. I legami **covalenti** occupano gli elettroni, quindi il silicio non conduce: per liberarli servirebbe un'energia molto alta. Il silicio è un **semiconduttore**. Per far passare corrente si effettua il **drogaggio** sul reticolo, di due tipi:

- **Tipo N**: atomi di silicio sostituiti con atomi **pentavalenti** (ad esempio fosforo, 5 elettroni sull'ultimo livello): rimane un elettrone libero per ogni atomo sostituito, e questi $N$ elettroni sostengono il passaggio di corrente.
- **Tipo P**: si sostituisce con atomi **trivalenti** (ad esempio boro). La mancanza di un elettrone si modella con una carica positiva detta **lacuna** (legame covalente non completato): la lacuna attrae un elettrone vicino e il suo spostamento permette di far circolare corrente.

Per indicare un drogaggio alto si usano i $+$ ($N^+$, $N^{++}$, …); la notazione vale anche per il tipo P. Più $+$ ci sono, più atomi sono sostituiti. L'interruttore di **tipo 1** è basato (prevalentemente) sul drogaggio **N**, quello di **tipo 0** sul drogaggio **P**.

## Struttura dell'interruttore di tipo 1
Si parte da un blocchetto di semiconduttore drogato P (il disegno è una rappresentazione 3D). Con processi di **fotolitografia** si creano due zone isolate (**sacche** o **pozzi**) molto drogate N. All'esterno le sacche hanno **contatti metallici** che corrispondono ai nodi $N_1$ e $N_2$ dell'interruttore. Il sottostrato (**body**) di tipo P è sempre collegato a massa ma nel simbolo non è visibile. Il segnale di controllo è depositato (cioè messo come contatto metallico) su uno strato di **isolante** ricavato dal silicio ($SiO_2$).

![[Marietto-mosfet-struttura.svg|center|520]]

## Il canale: $R_{ON}$ e $R_{OFF}$
Per far circolare corrente si deve far muovere un elettrone da una sacca all'altra, ma nel passare viene attratto dal sottostrato P. Per non dare distrazioni agli elettroni si **isolano le lacune** applicando il segnale di controllo: gli elettroni si muovono in verso opposto al campo elettrico, le lacune nello stesso verso, quindi le lacune vengono spinte verso il basso. Il campo elettrico si ottiene applicando una tensione. La strada che si libera si chiama **canale** (la strada degli elettroni da una sacca all'altra).
La presenza del canale è il motivo per cui nei circuiti reali c'è la resistenza $R_{ON}$: questa resistenza consente di liberare il canale. Con la resistenza $R_{OFF}$ si rappresenta l'opposizione elevata del canale al passaggio della corrente.

![[Marietto-mosfet-canale.svg|center|820]]

## Capacità di gate
Per l'analisi dinamica c'è un altro elemento circuitale: il materiale deve rimanere **elettricamente neutro**, ma così si spostano lacune in basso ed elettroni in alto (caso con $V_C$ applicata). **Metallo – isolante – semiconduttore** formano una struttura modellabile come un **condensatore**: tra il terminale $C$ e la massa c'è un condensatore, quindi nell'analisi dinamica bisogna considerare anche la capacità. Prima non serviva: senza frequenza non c'è impedenza e i condensatori sono sostituiti da circuiti aperti.

$$Z_C = \frac{1}{j \omega C} \qquad \omega = 2 \pi f$$

($\omega$ = pulsazione, $C$ = capacità, $Z_C$ = impedenza del condensatore, $f$ = frequenza.)

## NMOS e PMOS
L'interruttore di **tipo 0** è **duale** al tipo 1: il processo è lo stesso, ma si invertono i campi elettrici e i due drogaggi.
- **MOSFET a canale N** (NMOS) = interruttore di **tipo 1**
- **MOSFET a canale P** (PMOS) = interruttore di **tipo 0**

NMOS = N (tipo di drogaggio) + **M**etal **O**xide **S**emiconductor (nome del dispositivo).

![[Marietto-mosfet-simboli.svg|center|640]]

I dispositivi sono **simmetrici**: si può girare l'interruttore. Storicamente nel simbolo c'è anche il quarto morsetto (body), che non si disegna perché è dato per scontato. I morsetti hanno nomi specifici (uguali in NMOS e PMOS; il pallino distingue NMOS e PMOS):
- **gate**: morsetto a cui si passa il segnale di controllo
- **source**: sacca da cui gli elettroni partono
- **drain**: sacca dove gli elettroni devono arrivare

## Inverter con NMOS e PMOS
Sul morsetto di gate si vedono gli effetti capacitivi.

![[Marietto-inverter-capacita-gate.svg|center|700]]

Su $O_1$ si vedono **due** effetti capacitivi: uno del PMOS ($C_{gp}$) e uno dell'NMOS ($C_{gn}$) del carico. Ogni effetto capacitivo si modella come un condensatore tra il gate e la massa. Dovunque ci sia un interruttore, sul suo morsetto di gate ci sarà un effetto capacitivo: in un circuito complesso ogni porta logica vede l'effetto capacitivo introdotto dal suo **carico**.

Nell'analisi AC (da seguire applicando il **principio di sovrapposizione degli effetti**) al posto di $V_{DD}$ si ha la **massa** (condizione in cui entrano in gioco i condensatori), quindi le due capacità risultano **in parallelo** e si sostituiscono con la capacità equivalente, la somma:

$$C_{tot} = C_{gn} + C_{gp}$$

Su ogni nodo del circuito si considera un solo condensatore che ha come capacità la **somma delle capacità di gate** che ricevono come ingresso quel nodo.

# Analisi dinamica
*Fonte: Tredicesima lezione, pp. 1–8. Vedi anche [[Circuiti integrati digitali#Analisi dinamica|analisi dinamica]].*

Le caratteristiche dinamiche si studiano sull'**inverter** (quello che vale per l'inverter vale per tutti i circuiti logici).

![[Marietto-inverter-cl.svg|center|420]]

## Tempi di salita e discesa
Il grafico di una forma d'onda **ideale** ha tempo di salita uguale a 0. Su una forma d'onda **reale** il tempo di salita si definisce con due punti di riferimento, il 90% e il 10% del valore massimo: è la differenza tra l'istante in cui il valore arriva al 90% e l'istante in cui è al 10%. Il **tempo di discesa** si calcola al contrario; normalmente i due assumono valori diversi.

![[Marietto-forma-onda.svg|center|820]]

$$t_{SAL} = t_{90\%} - t_{10\%} \qquad t_{DIS} = t_{10\%} - t_{90\%}$$

(sulla discesa il 10% si raggiunge *dopo* il 90%).

## Tempo di propagazione
Un inverter introduce un **tempo di ritardo** (anche detto tempo di risposta, di propagazione o di calcolo). Vediamo le due commutazioni.

**1ª commutazione** ($0 \to 1$ in ingresso): la rete di pull-up è ON ($R_{ON}$) e quella di pull-down è OFF ($R_{OFF}$). Poiché $R_{OFF} \gg R_{ON}$ si può sostituire $R_{OFF}$ con un **circuito aperto**.

![[Marietto-commutazione-rc.svg|center|640]]

La capacità $C_L$ si carica tramite $R_{ON}$ con un tempo di ritardo pari alla **costante di tempo** $\tau$. Per semplicità si assume che le due $R_{ON}$ siano uguali (interruttori di tipo 0 o di tipo 1):

$$\tau = R_{ON} \cdot C_L$$

**Altra commutazione** ($1 \to 0$): la capacità si scarica, ma la formula di $\tau$ è la stessa. La risposta dell'inverter dipende quindi dalla costante di tempo.

- $t_{p,HL}$: tempo con cui l'inverter produce in uscita una commutazione da $V_{DD}$ a $0\ V$ in risposta a una commutazione dell'ingresso da $0\ V$ a $V_{DD}$
- $t_{p,LH}$: il duale

![[Marietto-tempo-propagazione.svg|center|700]]

$t_{p,HL} = t'' - t'$ (istante in cui $out$ raggiunge $V_{DD}/2$ meno istante in cui $in$ raggiunge $V_{DD}/2$) e $t_{p,LH} = t_1 - t_0$.

Per definire il **tempo di calcolo** si usa un unico valore, il **massimo** fra i due:

$$t_p = \max\{t_{p,HL},\ t_{p,LH}\}$$

HL = commutazione da $V_{DD}$ a $0\ V$; LH = commutazione da $0\ V$ a $V_{DD}$.

>[!question] Osservazione
>Nel corso si usa il **massimo**. Sui libri di testo si trova spesso la **media** dei due tempi: secondo la lezione è sbagliata perché i due tempi sono diversi e con la media l'inverter potrebbe lavorare male. Convenzione del professore, riportata così com'è.

Il tempo di propagazione determina la **frequenza di funzionamento** (la frequenza è l'inverso del tempo).

## Fan-out
Seconda caratteristica dinamica. Il **fan-out** è il numero di carichi (porte logiche) pilotati dall'uscita della nostra porta: $C_L$ dipende dal fan-out. Il primo effetto di un carico incrementato si vede sul **tempo di propagazione**: la capacità aumenta incrementando il numero di porte logiche, quindi $\tau' = R_{ON} \cdot C_L'$ con $C_L' > C_L$.

![[Marietto-fan-out.svg|center|640]]

## Dissipazione di potenza dinamica
Terza caratteristica dinamica. Le due che assillano di più i progettisti sono il **tempo di propagazione** e la **dissipazione di potenza dinamica**.

**Potenza di switching.** Caso iniziale $V_{in} = V_{DD} \to 0\ V$: $C_L$ si carica attraverso $R_{ON}$ dal generatore.

![[Marietto-potenza-switching.svg|center|760]]

Mentre $C_L$ si carica $i(t) \neq 0$ e

$$i(t) = C_L \cdot \frac{dV_{out}}{dt} \qquad p(t) = v(t) \cdot i(t) = V_{DD} \cdot C_L \cdot \frac{dV_{out}}{dt}$$

L'energia erogata dal generatore è l'integrale (sostituendo i valori di integrazione con i valori assunti da $V_{out}$ agli istanti $t = 0$ e $t = \infty$, cioè $V_{out}(0) = 0\ V$ e $V_{out}(\infty) = V_{DD}$):

$$E = \int_{0}^{\infty} V_{DD} \cdot C_L \cdot \frac{dV_{out}}{dt}\, dt = V_{DD} \cdot C_L \int_{0\ V}^{V_{DD}} dV_{out} = V_{DD}^2 \cdot C_L$$

$R_{ON}$ dissipa una quota di energia per effetto Joule, mentre $C_L$ ne immagazzina una parte: supponiamo che l'energia immagazzinata sia un'aliquota $\alpha$ di $E$, cioè $E_{imm} = \alpha\, C_L V_{DD}^2$ con $\alpha < 1$.

>[!attention] AGGIUNTA
>Non è nel manoscritto ma si dimostra: l'aliquota vale $\alpha = \tfrac{1}{2}$, cioè $E_{imm} = \tfrac{1}{2} C_L V_{DD}^2$ (energia immagazzinata in un condensatore); l'altra metà è dissipata su $R_{ON}$ per effetto Joule, indipendentemente dal valore di $R_{ON}$.

Con una **commutazione completa** ($V_{in}$ prima è 1, poi 0 e alla fine ritorna a 1; la capacità prima si carica e poi si scarica) si dissipa tutto ciò che il generatore aveva messo in gioco all'inizio, ma in due step:

$$E_{diss} = C_L \cdot V_{DD}^2$$

Per passare da energia a potenza si divide per il tempo: $P = E / T$, dove $T$ è il tempo di osservazione (tempo di una commutazione completa). Con $f = 1/T$ (tempo di ripetizione di una commutazione completa):

$$P = f \cdot E = f \cdot C_L \cdot V_{DD}^2$$

**Potenza di corto circuito.** C'è un'altra fonte di dissipazione dinamica; quella appena vista si chiama **dissipazione di potenza di switching**. Gli interruttori reali sono dispositivi **a soglia**: con tempi di salita e discesa reali (non nulli) ci saranno alcuni valori di tensione in cui **entrambe le reti** (PUN e PDN) sono chiuse e viene dissipata una **potenza di corto circuito** (temporanea).

![[Marietto-potenza-corto-circuito.svg|center|520]]

Più i tempi di salita e discesa sono ripidi e meno incide la potenza di corto circuito. La dissipazione di potenza dinamica totale dipende da entrambe, ma si cerca di tenere il tempo di salita e di discesa il più ripido possibile.

## Esercizio d'esame #dafare
*Tredicesima lezione, p. 8.* $f = a + (b + c \cdot (d + e))$. Funzione diretta: PDN $a \,\|\, b \,\|\, \big(c \cdot (d \,\|\, e)\big)$, PUN duale e inverter in uscita.

![[Marietto-es-esame-3.svg|center|400]]

| $a$ | $b$ | $c$ | $d$ | $e$ | $Z_1$ | $Z_2$ | $Z_3$ | $Z_4$ | $Z_5$ | $U_1$ | $U_2$ | $U_3$ | $U_4$ | $U_5$ | $f$ |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| $0\ V$ | $0\ V$ | $0\ V$ | $0\ V$ | $0\ V$ | ON | ON | ON | ON | ON | OFF | OFF | OFF | OFF | OFF | $0\ V$ |
| $V_{DD}$ | $V_{DD}$ | $V_{DD}$ | $V_{DD}$ | $V_{DD}$ | OFF | OFF | OFF | OFF | OFF | ON | ON | ON | ON | ON | $V_{DD}$ |
| $0\ V$ | $0\ V$ | $V_{DD}$ | $V_{DD}$ | $V_{DD}$ | ON | ON | OFF | OFF | OFF | OFF | OFF | ON | ON | ON | $V_{DD}$ |

>[!attention] CORREZIONE
>Nel disegno originale i nomi dei tre interruttori della PDN sono scritti in modo ambiguo: l'interruttore in serie al parallelo $d \| e$ è pilotato da $c$ ($U_3$), e quello di $a$ è $U_1$ (il foglio riporta "$U_2$" e "e"). Le reti sono state verificate su tutte le 32 combinazioni: PUN e PDN sono complementari e il nodo prima dell'inverter vale $\overline{f}$.

>[!question] Osservazione
>A pagina 5 della decima lezione la traccia riporta $f = e + d \cdot (a + b \cdot c)$, a pagina 8 della tredicesima $f = a + (b + c \cdot (d + e))$: sono due esercizi diversi.

# Moltiplicatori
*Fonte: Ventunesima lezione, pp. 1–6.*

## Prodotto con carta e penna
Il prodotto fra due numeri si fa calcolando **tanti prodotti parziali quante sono le cifre del moltiplicatore**, ciascuno **shiftato** di una posizione.

>[!check] Esempio decimale: $A = 2314$ (moltiplicando), $B = 232$ (moltiplicatore)
>$$\begin{array}{r} 2314 \times \\ 232 = \\ \hline 4628 \\ 6942\phantom{0} \\ 4628\phantom{00} \\ \hline 536848 \end{array}$$

Si eseguono le stesse operazioni in **binario**, dove si usano i bit invece delle cifre, shiftando di 1 posizione a sinistra per ogni prodotto parziale. Prima il caso più semplice: $A$ e $B$ a 4 bit **unsigned** (sarà più difficile gestire numeri con segno). Il **prodotto parziale** si fa con un **AND**; per moltiplicare per 2 (il peso) basta uno **shift a sinistra**.

>[!check] Esempio: $A = B = 1111_2 = 15$ (tutti i bit a 1)
>```
>        1 1 1 1  ×
>        1 1 1 1  =
>  ---------------
>  0 0 0 0 1 1 1 1      (PP0 = A · b0)
>  0 0 0 1 1 1 1 0      (PP1 = A · b1, shift di 1)
>  0 0 1 1 1 1 0 0      (PP2 = A · b2, shift di 2)
>  0 1 1 1 1 0 0 0      (PP3 = A · b3, shift di 3)
>  ---------------
>  1 1 1 0 0 0 0 1      = 225  (15 × 15)
>```

Ogni prodotto parziale ha un numero di bit diverso dagli altri: per **uniformarli** alla dimensione dell'ultimo prodotto parziale si **estendono a sinistra** con 0 (numero unsigned). Se $A$ ha $m$ bit e $B$ ha $n$ bit il prodotto richiede **$n + m$ bit** (vale sia per unsigned sia per complemento a due). Con i segni le cose cambiano un po'.

## Moltiplicando in complemento a due
$A = 1111_2$ in complemento a due vale $-1$; $B = 1111_2$ unsigned vale $15$. Il prodotto è $-15$. Tutti i prodotti parziali vanno portati ad 8 bit: ogni prodotto parziale **eredita il segno di $A$**, quindi è in complemento a due e l'estensione a sinistra si fa **copiando il bit più significativo** tante volte quanti sono i bit mancanti per arrivare alla dimensione dell'ultimo prodotto parziale. Il riporto in eccesso viene buttato.

```
  1 1 1 1 1 1 1 1       (-1 · b0)
  1 1 1 1 1 1 1 0       (-1 · b1, shift di 1)
  1 1 1 1 1 1 0 0       (-1 · b2, shift di 2)
  1 1 1 1 1 0 0 0       (-1 · b3, shift di 3)
  ---------------
  1 1 1 1 0 0 0 1       = -15 (riporto buttato)
```
($-1 - 2 - 4 - 8 = -15$.) Se il moltiplicando è unsigned si estende con 0, se è in complemento a due si estende con il bit più significativo.

## Moltiplicatore in complemento a due
Se anche $B$ è in complemento a due, su $n$ bit vale:

$$B_{DEC} = -2^{n-1} \cdot b_{n-1} + \sum_{j=0}^{n-2} \left( b_j \cdot 2^j \right)$$

>[!attention] CORREZIONE
>Nel manoscritto l'espressione è scritta con $m$ ($-2^{m-1} b_{m-1} + \sum_{j=0}^{m-2}$), ma $B$ è il numero a $n$ bit (il moltiplicando $A$ ha $m$ bit). Ho unificato con $n$.

Sostituendo nel prodotto:

$$A \cdot B = -2^{n-1} \cdot b_{n-1} \cdot A + \underbrace{A \cdot \sum_{j=0}^{n-2} b_j 2^j}_{\text{prodotto } A \cdot B_{unsigned}}$$

Quindi: sugli $n-1$ bit meno significativi di $B$ si fa la stessa operazione di prima (prodotto unsigned); sul bit più significativo, se il segno di $B$ è negativo, il termine diventa

$$2^{n-1} \cdot (-A)$$

$2^{n-1}$ si calcola con lo **shift a sinistra**, e $-A$ si riscrive come $\overline{A} + 1$.

>[!check] Esempio: $A = 1111_2$ ($-1$), $B = 1111_2$ ($-1$)
>```
>  1 1 1 1 1 1 1 1       (A · b0)
>  1 1 1 1 1 1 1 0       (A · b1, shift di 1)
>  1 1 1 1 1 1 0 0       (A · b2, shift di 2)
>  0 0 0 0 1 0 0 0       (-A · b3, shift di 3: -A = +1 → 0001, poi shift)
>  ---------------
>  0 0 0 0 0 0 0 1       = +1   ((-1) × (-1))
>```
>Come estensione a sinistra dell'ultimo prodotto parziale si scrive $-A$ in codifica binaria e si estende il bit più significativo; per gli altri si fa l'estensione a sinistra nello stesso modo del complemento a due.

I prodotti parziali si fanno con un **AND** e poi si usa l'**albero di somma**. Questo metodo si chiama **algoritmo carta e penna**.

>[!attention] AGGIUNTA
>Il manoscritto non riporta il valore del prodotto nell'ultimo esempio: l'ho calcolato per verifica ($-1 \times -1 = 1$; $-1 - 2 - 4 + 8 = 1$ ✓).

## Struttura circuitale
Per un prodotto fra due numeri a **otto bit**, nel disegno originale i rami rossi rappresentano gli **shift a sinistra** e i rami blu l'**estensione con segno** (replica dei bit più significativi) per portare i singoli prodotti parziali allo stesso numero di bit: queste operazioni diventano degli **statement da scrivere in VHDL**.

>[!question] Figura mancante
>Questa figura (circuito a 8 bit con rami rossi e blu) non è presente nel PDF: non l'ho ridisegnata per non inventarla.

Si può **semplificare** la struttura (PP = prodotto parziale). Serve un sommatore per calcolare $\overline{A} + 1$, ma questo **rompe la struttura** della somma fra tutti i prodotti parziali:

```
  PP0 +
  PP1 +
  PP2 +
  PP3 +
  PP4 +
  PP5 +
  PP6 +
  PP7
  ---
  risultato
```

Allora si semplifica il circuito passando all'**albero di somma** direttamente $A$ oppure $\overline{A}$ e poi uno $0$ (nel caso di $A$) o un $1$ (nel caso di $\overline{A}$): il "$+1$" diventa un ingresso in più dell'albero invece di un sommatore a parte. La scelta fra $A$ e $\overline{A}$ si fa con un AND seguito da una XOR:

![[Marietto-moltiplicatore-cella.svg|center|560]]

La XOR serve a **negare $A$** nel caso in cui $b(7) = 1$ (l'AND con $b(7)$ dà $A$ oppure tutti zeri; la XOR con $b(7) = 1$ complementa i bit).

## Progetto 2
Si lavora con numeri **unsigned**: va fatto un **moltiplicatore a 16 bit unsigned**, e il risultato ha **32 bit**. Nel circuito devono esserci:
- **registri** di ingresso e di uscita
- **albero di somma** con logica del **carry save**
- valutazione dell'occupazione di **risorse**
- valutazione del **tempo di calcolo** ($T_{clock}$)

**Data di scadenza: 6 gennaio.**
