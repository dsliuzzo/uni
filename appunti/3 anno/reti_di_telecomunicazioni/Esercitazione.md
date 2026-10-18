# Esercitazione 1

## Esercizio 1: scambio dati tra due stazioni su Ethernet asimmetrico
### Dati

|Parametro|Valore|
|---|---|
|Flusso da trasferire|$F = 2\ \text{Mbit}$|
|Sorgente / Ricevente|A / B|
|Capacità A→B|$C(A,B) = 800\ \text{kbps}$|
|Capacità B→A|$C(B,A) = 400\ \text{kbps}$|
|Distanza|$d = 1\ \text{km}$|
|$PDU_R$|$1500\ \text{B}$|
|Tempo di elaborazione|$T_E = 1\ \text{ms}$|
|Buffer|$\infty$|
|Header|$H_p = H_R = 20\ \text{B}$, $H_D = 26\ \text{B}$|
|Trama minima|uguale all'header (26 B)|

### Richieste

1. Dimensione totale della trama Ethernet
2. Tempo di ciclo $T_c$
3. Time-out $= 2,T_c$
4. Durata della trasmissione dell'intero flusso

### Svolgimento
![[Modello ISO OSI-1792074489171.webp|center|446]]

#### 1. Dimensione della trama Ethernet

$$L = PDU_R + H_D = 1500 + 22 + 4 = 1526\ \text{B}$$

Sottraendo l'header di livello 3 si ottengono:

- PDU di livello 2: $1500 - 20 = 1480\ \text{B}$
- Payload: $1480 - 20 = 1460\ \text{B}$

#### 2. Tempo di ciclo

$$  
\begin{aligned}  
\tau &= \frac{d}{v_p} = \frac{1000}{2\cdot10^{8}} = 5\cdot10^{-6}\ \text{s} \\ 
T_R &= \frac{L}{C(A,B)} = \frac{1526\cdot 8}{800000} = 0{,}01526\ \text{s} \\
T_A &= \frac{L_A}{C(B,A)} = \frac{26\cdot 8}{400000} = 0{,}00052\ \text{s}  
\end{aligned}  
$$

$$T_c = 2T_E + 2\tau + T_R + T_A = 0{,}017785\ \text{s}$$

#### 3. Time-out

$$T_{out} = 2\cdot T_c = 0{,}03556\ \text{s}$$

#### 4. Durata dell'intero flusso

Numero di trame necessarie:

$$n = \left\lceil \frac{2,000,000}{1460\cdot 8} \right\rceil = \lceil 171{,}223 \rceil = 172$$

Durata totale:

$$D = n \cdot T_c = 172 \cdot 0{,}017785 = 3{,}05902\ \text{s}$$
### Altra roba bho: canale con perdite
![[Modello ISO OSI-1792074469525.webp|center|348]]
$$
\displaylines{
x \cdot T_c \leq T_{ON} \\ 
x \leq \frac{T_{ON}}{T_c}= \frac{2}{0,017785} = \lfloor 111,82 \rfloor = 111 
}
$$
tempo di invio del 112 esimo frame che mi determina il tempo non ok
$$
t(112)_{\text{NOK}} = 111 \cdot T_c = 1,9741 \ s
$$
calcoliamo il T off del canale
$$
t_{OFF} = t(\text{e, OFF})- t(112)_{\text{NOK}} = 3 - 1,9741 = 1,025865 \ s
$$
numero di ritrasmissioni che avvengono
$$
\displaylines{
y \cdot T_{out} \geq t_{\text{OFF}} \\
y = \left\lceil \frac{t_{\text{OFF}}}{T_{out}}  \right\rceil = \left\lceil  \frac{1,025865}{0.03556}  \right\rceil  = \lceil 28,88 \rceil = 29
}
$$
tempo di invio del 112 esimo frame
$$
t(112)_{\text{OK}} = 1,9741 \ s + y \cdot T_{out} = 1,9741 + 1,03124 = 3,00534 \ s
$$
durata ritrasmissione
$$
\begin{align*}
D & = x \cdot T_c + y \cdot T_o + (n-x) \cdot T_c \\
& = n \cdot T_c + y \cdot T_o \\
& = 4,09026
\end{align*}
$$

## Esercizio 2: go back N
Utilizzando un protocollo ARQ di tipo Go-Back-N con ACK cumulativi indicare la durata
complessiva della trasmissione. Si consideri una finestra al trasmettitore pari a 3 trame
($Ws = 3$). Le due stazioni che intendono attivare una trasmissione distano $3 \ Km$ e
utilizzano un canale simmetrico con capacità pari a $250 \ Kbps$.
La sorgente dei dati è la stazione A e genera un flusso dati con un rate pari a $400 \ Kbps$. La
stazione genera dati per 3 secondi. Si conoscono i seguenti dati:
- MTU di livello IP $576 \ Byte$;
- Header di livello trasporto $20 \ Byte$;
- Header di livello rete $20 \ Byte$;
- Header di livello collegamento $26 \ Byte$;
- Velocità del mezzo pari a $3,5 \cdot 10^6 m/s$;
- Dimensione minima della trama $64 \ Byte$;
- Tempo di elaborazione pari a $473 \ ms$;
Inoltre si devono calcolare anche i seguenti dati:
- Dimensione della trama;
- Dimensione del segmento trasporto;
- Dimensione totale del flusso dati;
- Il numero di trame che dovranno essere trasmesse;


Per la trama partiamo da maximum transfer unit MTU (header + payload) di livello IP
$$
MTU + H_D = 256 + 26
$$
dimensione del segmento di trasporto (maximum segment size)
$$
MSS = 576 - 20 - 20 = 536 \ Byte
$$
[...]

sistema se è in pipe oppure no
se il tempo impiegato a inviare la finestra è maggiore del tempo di invio del singolo frame + la propagazione allora il sistema è in pipe
se invece è minore il tau arriva dopo dell'invio di tutti e tre i frame della finestra: l'invio della finestra è così veloce che l'arrivo del primo ack arriva dopo dell'arrivo dei frame -> sistema non in pipe
$$
W_s \lessgtr 1 + 2a
$$
nel go back N se si perde l'ack di un frame n comunque arriverà alla destinazione il frame n+1 e la sorgente invierà l'ack n+1, quindi se la sorgente riceve l'ack n+1 capisce che la destinazione ha ricevuto sia n che n+1 anche se non riceve l'ack n.

[...] recupera distanza di hamming
