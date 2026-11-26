#materia 
#elettronica_digitale
# Appunti
[[Circuiti integrati digitali]]
[[Porte logiche]]
[[VHDL]]
[[MOSFET]]
[[Appunti Marietto]]
## Discretizzazione del segnale
![[Elettronica digitale-1790023683012.webp|center|378]]
Per rendere discreto un segnale analogico dobbiamo effettuare due operazioni:
1. **campionamento**
   rileviamo una misurazione ad ogni intervallo $\Delta t$ e non osserviamo il comportamento infinitesimale del segnale, collezionando in questo modo un numero finito di valori
2. **quantizzazione**
   i valori trovati, anche se in numero finito, sono ugualmente di grandezza infinita. Per ovviare a questo problema effettuiamo la quantizzazione: stabiliamo una soglia e `A>s?1:0` (binarizzazione). Nei casi più complessi possiamo aumentare il numero di soglie e definire numerosi valori che può assumere la misurazione.

## Rappresentazione dei numeri in binario
[[Notazione binaria#$ mathbb{N}$|notazione binaria]]
[[Notazione binaria#Modulo e segno]]
[[Notazione binaria#Complemento a 2|complemento a 2]]

## Porte logiche
[[Porte logiche]]

# Esame
Esame scritto, 2 esercizi, uno di progettazione ad alto livello ed una a basso livello. Si passa almeno con 18, poi ci sono al massimo 3 punti dati dai progetti durante l'anno, che verranno fatti ogni fine capitolo.

## Progetto 1
Progettare un sommatore carry select che lavora su numeri in binario naturale a 16 bit (simulazioni: spezzettare le possibili combinazioni in intervallo - 4 pacchetti da 256 combinazioni)
prepariamo alla fine dei test una relazione da inviare per email s.perri@unical.it in formato pdf con elenco nominativi
entro il 27 ottobre

## Progetto 2
Dati `A` e `B` a 8 bit in complemento a 2 e i segnali di controllo $C_1 C_0$, il circuito calcola:

| $C_{1}$ | $C_{0}$ | Risultato                         |
| ------- | ------- | --------------------------------- |
| 0       | 0       | $A+B$                             |
| 0       | 1       | $A - B = A + \text{not } B + 1$   |
| 1       | 0       | $2A + B$                          |
| 1       | 1       | $2A - B = 2A + \text{not } B + 1$ |

**Moltiplicazione per 2**: è uno shift a sinistra, quindi non richiede componenti circuitali né risorse aggiuntive. Basta introdurre un segnale con un bit in più (da 8 a 9 bit) e, nell'architettura, uno statement di [[VHDL#Concatenazione|concatenazione]]:
``` vhdl
signal dueA: std_logic_vector(8 downto 0);
...
dueA <= A & '0'; -- 2A
```
Non richiama nessuna porta logica, è solo un collegamento: lo `'0'` c'è già perché è la massa.

- Allo stesso modo $4A$ si ottiene concatenando due zeri: `A & "00"` (10 bit). Claudia scrive `'00'`, ma un vettore di più bit va tra virgolette doppie.
- Si lavora prima solo sull'aspetto **combinatorio**, senza aggiungere registri. Poi si aggiungono i registri e si fa la sintesi; solo alla fine si calcola la dissipazione di potenza.
