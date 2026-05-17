#appunti 
#automatica 
# Cruise control
>[!quote] "fare in modo" che l'automezzo "raggiunga" una velocità prefissata senza intervento dell'uomo
#### Definizione dell'obbiettivo
Per prima cosa definiamo il nostro **obbiettivo** come la velocità prefissata.
#### Formalizzazione del modello
Possiamo quindi iniziare a creare un **modello** formale del problema:
$$
\displaylines{
\text{inerzia + attrito} = Forza esterna \\
M \dot{v} + bv = F_e(t)
}
$$

| CAUSA                     | EFFETTO             |
| ------------------------- | ------------------- |
| applico una forza esterna | il veicolo si muove |
L'effetto viene valutato da uno strumento, nel nostro caso il tachimetro, più in generale un sensore.
Le nostre variabile sono $F_e(t)$ e $v$ che hanno una **interdipendenza** definita dalla precedente equazione.

Definiamo il [[1. Sistemi dinamici|sistema dinamico]]

![[Pasted image 20260307174125.png]]
Poniamo per ipotesi $v_{REF}(t) = \overline{v}_{REF}$

Definiamo un algoritmo che gestisce il sistema di controllo come segue
$$
\left\{\begin{array}{l}M \dot{v}(t) + b v(t) = F_e(t) \\ F_e(t) = k(\overline{v}-v(t))\end{array}\right.
$$
questo è un esempio di come può essere formalizzato il sistema di controllo del cruise control a livello astratto tramite l'utilizzo di formule matematiche.
La forza esterna applicata è proporzionale alla differenza tra velocità obbiettivo $\overline{v}$ e velocità reale $v(t)$ e un'altra variabile chiamata $k$, quindi se $\overline{v}>v(t)$ e $k>0$ allora $F_e>0$ abbiamo un'accelerazione.
Chiamiamo $(\overline{v}-v(t))$ **errore di inseguimento**.
Questo è un sistema di controllo in **retroazione** (feedback), vale a dire che il flusso di informazioni non va solo verso l'esterno ma torna indietro per rientrare nel sistema, nel nostro caso tramite il controllo della velocità misurata dal sensore.
#### Risoluzione del problema
Partendo dalle equazioni dell'algoritmo di controllo
$$M \dot{v}(t) + bv(t) = k(\overline{v}-v(t))$$
se $v$ è costante $\dot{v}(t) = 0$
$v(t) \to \hat{v}$ è effettivamente una costante
$$
\displaylines{
b \hat{v} = k(\overline{v}-\hat{v})\\
b \hat{v} + k \hat{v} =  k \overline{v}\\
(b+k) \hat{v} = k \overline{v} \\
\hat{v} = \frac{k}{b+k}\overline{v}
}
$$
Possiamo agire solo su $k$
# Diga
Se l'acqua raggiunge una soglia di guardia agisce sulla diga facendo defluire l'acqua
![[Pasted image 20260317153028.png]]
- ingresso esogeno
- ingresso manipolabile
## Algoritmo di controllo
basato su connessioni logiche
![[Pasted image 20260317153606.png|center|300]]
è come un [[1. Reti logiche#FLIP-FLOP RS (reset-set)|FF-RS]] se nessuno dei due contatti è attivo allora il sistema rimane nello stato precedente.
# Corrente che attraversa un circuito
![[Pasted image 20260317155107.png|center|300]]
**Identifichiamo causa-effetto**
- causa - $v(t)$
- effetto - dipende dallo strumento utilizzato scelto - amperometro che misura la corrente che attraversa il circuito in un determinato punto
**Rappresentazione astratta**
$$
v(t) = v_R(t) + v_C(t)
$$
Possiamo utilizzare le relazioni costitutive del circuito per formalizzare il problema
- [[Elettrotecnica#Resistore|legge di Ohm]] $v_R(t)=R \cdot i(t)$
- [[Elettrotecnica#Condensatore|relazione tensione-corrente sulla capacità]] $i(t)= C \frac{d v_c}{dt}$
$$
v_R(t) = R \cdot i(t) = R \cdot C \cdot \frac{dv_c}{dt} \implies v(t) = RC \frac{dv_c}{dt} + v_c(t)
$$
## Rappresentazione I-S-U
noto il profilo temporale di $v(t)$ e la condizione iniziale $v_c(t_0)$ determiniamo $v_c(t),t \geq t_{0}$
$$
\text{Rappresentazione I-S-U }\left\{\begin{array}{l}
\left.\begin{array}{ll}
v(t) = RC \frac{d v_c}{dt} + v_c(t) \\
v_c(t_{0}) = v_{c,0}
\end{array}\right\}\text{ Equazioni di stato} \\
\hdashline
\left.i(t) = \frac{v(t)-v_c(t)}{R}\right\} \text{ Equazione di uscita}
\end{array}\right.
$$
### Anonimizzazione
Ne deriva la fase di anonimizzazione: assegno ad ogni variabile un simbolo per astrarre il fenomeno
$$
\left\{\begin{array}{l}v(t) \to v(t) \text{ ingresso} \\ v_c(t) \to x(t) \text{ stato} \\ i(t) \to y(t) \text{ uscita}\end{array}\right.
$$
$\therefore$ otteniamo
$$
\left\{\begin{array}{l}
RC \frac{dx}{dt} + x(t) = u(t) \longrightarrow \frac{dx}{dt} = \overbrace{-\frac{1}{RC} x(t)}^{\text{Stato}} + \overbrace{\frac{1}{RC}u(t)}^{\text{ingresso}} \\
x(t_{0}) = v_{c,0} \\
y(t) = -\frac{1}{R} x(t) + \frac{1}{R} u(t) \longrightarrow \text{funzione di uscita è una combinazione lineare}
\end{array}\right.
$$
$\frac{dx}{dt} = -\frac{1}{RC}x(t) + \frac{1}{RC} u(t)$ è chiamata **funzione generatrice** $F(x(t), u(t))$

>[!question] Osservazioni
>1. $R,C$ sono parametri del sistema per ipotesi sono costanti
>   in caso contrario vanno esplicitati in $F(t,x(t), u(t))$
>2. La **funzione generatrice** è la combinazione lineare dei suoi parametri $\implies$ il sistema è lineare
### Rappresentazione I-U
Possiamo eliminare la variabile di stato realizzando una nuova rappresentazione del sistema equivalente.
Partendo dalla seconda equazione
$y(t) = -\frac{1}{R} x(t) + \frac{1}{R}u(t)$ derivo ogni termine e ricavo $x(t)$
$$
\left\{\begin{array}{l}
\dot{y}(t) = -\frac{1}{R}\dot{x}(t) + \frac{1}{R} \dot{u}(t) \\
x(t) = - R y(t) + y(t)
\end{array}\right.
$$
sostituiamo $\dot{x}(t)$ dalla prima relazione
$$
\dot{y}(t) = -\frac{1}{R} \left( -\frac{1}{RC} x(t) + \frac{1}{RC} u(t) \right) + \frac{1}{R} \dot{u}(t)
$$
sostituisco $x(t)$, per eliminare stato:
$$
\displaylines{
\dot{y}(t) = -\frac{1}{R} \left( -\frac{1}{RC} (-R y(t) + u(t)) + \frac{1}{RC} u(t) \right) + \frac{1}{R} \dot{u}(t)
\\
= -\frac{1}{R} \left( +\frac{1}{RC} R y(t) - \frac{1}{RC} u(t) + \frac{1}{RC} u(t) \right) + \frac{1}{R} \dot{u}(t)
\\
= \frac{1}{R} \dot{u}(t) - \frac{1}{RC} y(t)}
$$
$$
\implies \left\{\begin{array}{l} \dot{y}(t) = \frac{1}{R} \dot{u}(t) - \frac{1}{RC} y(t) \\ y(t_{0}) = - \frac{1}{R} v_{c,0} + \frac{1}{R}v(t_{0})\end{array}\right.
$$
$\therefore$ ho ottenuto la rappresentazione I-U (ingresso - uscita)
# Sistema meccanico in traslazione
![[Pasted image 20260317173129.png|center|300]]
Punto vincolato a pareti da 2 effetti: elastico ($k$) e attrito ($b$)
dove $F(t)$ ingresso sollecitato.
Definiamo stato associato al punto materiale $\left(\begin{array}{c}p\\ v \end{array}\right)$ vettore posizione - velocità
$\therefore$ per definire le equazioni di stato le relazioni della cinematica che lega le variabili:
$$
\left\{\begin{array}{l}
\dot{p}(t) = v(t)  \\
F_i(t) + F_a(t) + F_e(t) = F(t) \to m \dot{v}(t) + b v(t) + k p(t) = F(t)
\end{array}\right.
$$
Otteniamo un sistema di equazioni differenziali di cui devo conoscere le condizioni iniziali
[[1. Equazioni differenziali#Problema di Cauchy associato ad EDO del 2° ordine lineari|problema di Cauchy]]
Passiamo all'anonimizzazione del sistema
$$
\left\{\begin{array}{l}
F(t) \to u(t)  \\
v(t) \to y(t) \\
p(t) \to x_1(t) \\
v(t) \to x_2(t)
\end{array}\right.
$$
Possiamo quindi rappresentare il sistema come una ISU
$$
\left\{\begin{array}{l}
\dot{x}_{1}(t) = x_{2}(t) \\
m \dot{x}_2(t) + bx_{2}(t) + k x_{1}(t) = u(t) \implies \dot{x}_2(t) = -\frac{b}{m} x_2(t) -\frac{k}{m}x_1(t) + \frac{1}{m} u(t)  \\
x_{1}(t_{0})=p_{0}, \quad x_{2}(t_{2})=v_{0} \\
y(t) = x_{2}(t)
\end{array}\right.
$$
Dalla rappresentazione ISU passiamo alla rappresentazione IU
$$
\displaylines{
y(t) = x_{2}(t) \\
\dot{y}(t) = \dot{x}_2(t) = -\frac{b}{m} x_{2}(t) - \frac{k}{m}x_1(t) + \frac{1}{m}u(t) \\
\therefore \text{sostituisco }x_{2}\to y \text{ e calcolo la derivata seconda} \\
\ddot{y}(t) = -\frac{b}{m} \dot{y}(t) -\frac{k}{m} \dot{x}_{1}(t) + \frac{1}{m} \dot{u}(t)\\
\text{sapendo che }\dot{x}_1(t) = x_{2}(t) = y(t) \\
\left\{\begin{array}{l} 
\ddot{y}(t) = -\frac{b}{m} \dot{y}(t) - \frac{k}{m} y(t) + \frac{1}{m} \dot{u}(t) \\
y(t_{0}) = v_{0} \\
\dot{y}(t_{0}) = \dot{x}_2(t_{0}) = -\frac{k}{m} p_0 - \frac{b}{m}v_{0} +\frac{1}{m} u(t_{0})
\end{array}\right.
}
$$
$\frac{1}{m}u(t_{0})$ è trascurabile
Quindi note le condizioni iniziali e il profilo temporale della forza posso ricavare il profilo della velocità.
Possiamo quindi scrivere due funzioni generatrici:
Siano $F_{1}(x_{1},x_{2},u)$ e $F_{2}(x_{1},x_{2},u) \implies$ otteniamo
$$
F= \left[\begin{array}{c}F_{1} \\ F_{2}\end{array}\right] \in \mathbb{R} \to \text{è uno scalare}
$$
$$
x= \left[\begin{array}{c}x_{1} \\ x_{2}\end{array}\right] \in \mathbb{R}^2
$$
Definiamo quindi la **funzione generatrice come**
$$
F:\mathbb{R}^2 \times \mathbb{R} \to \mathbb{R}^2
$$
- $\mathbb{R}^2$ per il vettore di ingresso $\left(\begin{array}{c}p \\ v\end{array}\right)$
- $\mathbb{R}$ forza in ingresso
- $\mathbb{R}^2$ in uscita abbiamo due funzioni generatrici

La funzione generatrice è lineare se le due funzioni generatrici che compongono il vettore sono combinazioni lineari.
Inoltre il sistema è **stazionario** sotto ipotesi di $b$ e $k$ costanti nel tempo.
# Sistema preda-predatore
**Sistema  a tempo discreto**
Sistema in cui lo stato è dato dal numero di prede e predatori (contati periodicamente - tempo di campionamento).
Siano
- $x_{1}(k):$ prede
- $x_{2}(k):$ predatori
dove $k=0,1,2,\dots$ quota isomorfa (si comporta come gli interi $c \cdot T_c = k$ con $T_c$ tempo di campionamento)
Allora possiamo descrivere lo stato successivo con le seguenti relazioni:
$$
\left\{\begin{array}{l}
x_{1}(k+1) = x_{1}(k) + \alpha x_{1}(k) = x_{1}(k)(1+\alpha) =: F_{1}(k) \\
x_{2}(k+2) = x_{2}(k) - \beta x_{2}(k) = x_{2}(k)(1-\beta) =: F_{2}(k)
\end{array}\right.
$$
con
- $0<\alpha<1$ tasso di natalità
- $0<\beta<1$ tasso di mortalità

aggiungiamo interazione tra 2 stati:
$$
\text{ISU} \left\{\begin{array}{l}
x_{1}(k+1) = x_{1}(k) + \alpha x_{1}(k) - \gamma x_{1}(k) x_{2}(k) \\
x_{2}(k+1) = x_{2}(k) - \beta x_{2}(k) + \delta x_{1}(k)x_{2}(k) \\
y_{1}(0) = x_{1,0} \\
y_{2}(0) = x_{2,0}
\end{array}\right.
$$
con
- $-\gamma x_{1}(k)x_{2}(k)$ perdita di entità dovuta alle prede
- $+\gamma x_{1}(k)x_{2}(k)$ rimodulazione tasso di mortalità dovuto al cibarsi delle prede
Il sistema è **chiuso**, non presenta ingressi $\to$ potrei averne se occasionalmente aggiungessi: prede ($+u_{1}(t)$) o predatori ($+u_{2}(t)$)
Le uscite saranno:
$$
\left\{\begin{array}{l}
y_1(x) = x_{1}(k) \\
y_{2}(x) = x_{2}(k)
\end{array}\right.
$$
Le uscite sono singoli valori dati se noti:
- profili temporali di ripopolazione
- condizioni iniziali
- $\alpha,\beta,\gamma,\delta$
# Sistema semaforico
**Sistema ad eventi discreti**
semaforo a richiesta
Insieme degli stati:
$$
X = \{\text{green, yellow, red}\}
$$
Spazio degli eventi:
$$
E = \{G \to Y, Y \to R, R \to G\}
$$
Gli eventi sostituiscono gli ingressi perché il sistema è asincrono.
Usiamo un automa per rappresentare il sistema:
![[Pasted image 20260317231435.png|center|400]]
la funzione generatrice del sistema è $F(x,e)=x^+$
con $x$ stato corrente, $e$ evento e $x^+$ stato successivo.
$\therefore$ applicando $F(\cdot)$ agli stati:
1. $F(G, G\to Y) = Y$
2. $F(Y, Y\to R) = R$
3. $F(R,R\to G) = G$
$F(\cdot)$ non è definita per ogni coppia stato-evento


# Stabilità del pendolo
Prendiamo in esame il [[2. Cinematica#Pendolo semplice|pendolo]], definiamo una coppia $\tau$ che agisce su di esso e le altre coppie che agiscono sul corpo opponendosi a $\tau$: l'inerzia $m l^2 \ddot{\theta}$, l'attrito viscoso (per semplicità) $b \dot{\theta}$ e la gravità $mgl \sin(\theta)$.
![[Pasted image 20260329185428.png|center|150]]
Definiamo il sistema dinamico tramite la seguente equazione differenziale
$$
ml^2 \ddot{\theta} + b \dot{\theta} + mgl \sin(\theta) = \tau
$$
L'equazione differenziale che abbiamo definito non è lineare, in quanto abbiamo $\sin$, quindi non possiamo utilizzare Laplace.
I parametri ($m, l, b, g$) le definiamo come costanti, pertanto il sistema è non lineare, ma stazionario.
Nell'ipotesi di coppia costante e pari a $0$ (ingresso di equilibrio) cerchiamo quanti e quali sono (se esistono) gli equilibri (posizioni angolari costanti) del pendolo.
1. $\theta_{eq} = 0$ abbiamo equilibrio $\tau_{eq}=0$ **stabile asintoticamente**
2. $\theta_{eq} = \pi$ abbiamo equilibrio $\tau_{eq} = 0$ **non stabile**
## Approssimazione per piccole oscillazioni
$$
\begin{array}{c}
\theta(t) = \theta_{eq} + \delta \theta(t) \\
\tau(t) = \tau_{eq}+ \delta \tau(t)
\end{array}
$$
Non essendo il sistema lineare lo approssimiamo per piccole oscillazioni così $\sin(\theta) \approx \theta$.
>[!important] La linearizzazione è una approssimazione attorno al punto di equilibrio 
>(analogia con la derivata, la FdT è il coefficiente angolare).
>Studiando la FdT possiamo capire se il sistema è stabile.
### 1. Analisi per piccoli segnali con equilibrio in verticale verso il basso
$$
\theta(t) \cong \delta \theta(t) \hspace{8ex} \tau(t) \cong \delta \tau(t) \hspace{8ex} \sin(\delta \theta) \cong \delta \tau(t)
$$
La nostra equazione differenziale diventa quindi
$$
m l^2 \delta \ddot{\theta}(t) + b \delta \dot{\theta}(t) + mgl \delta \theta = \delta \tau(t)
$$
Abbiamo quindi definito un **sistema dinamico che approssima il comportamento** del pendolo nell'intorno dell'equilibrio verso il basso (**sistema linearizzato**).

La FdT sarà quindi
$$
G_1(s) = \frac{1}{ml^2s^2 + bs + mgl}
$$
### 2. Analisi per piccoli segnali con equilibrio in verticale verso l'alto
$$
\theta(t) \cong \pi + \delta \theta (t) \hspace{8ex} \tau \cong \delta \tau(t)
$$
analizziamo le derivata di nostro interesse
$$
\ddot{\theta}(t) = \delta \ddot{\theta} \hspace{8ex} \dot{\theta}(t) = \delta \dot{\theta}
$$
per quanto riguarda invece il $\sin$
$$
\sin(\pi + \delta \theta) = - \sin(\delta \theta) \cong - \delta \theta
$$
La nostra equazione differenziale diventa quindi
$$
ml^2 \delta \ddot{\theta} + b \delta \dot{\theta} - mgl \delta \theta = \delta \tau
$$
La FdT sarà quindi
$$
G_2(t) = \frac{1}{ml^2s^2+bs-mgl}
$$
