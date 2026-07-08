#elettromagnetismo_ed_elettrotecnica 
#appunti 
L’elettrotecnica è una scienza applicata che studia gli aspetti teorici e sperimentali dell’elettromagnetismo e ne promuove le relative applicazioni all'ingegneria.
Le aree di ricerca di interesse comprendono i fondamenti fisici dei circuiti elettrici e dei campi elettromagnetici e lo sviluppo di modelli e metodi teorici, numerici e sperimentali utili alla progettazione e caratterizzazione di dispositivi. In questo corso verranno introdotti i fondamenti della teoria dei circuiti, in particolare i fondamenti delle tecniche di analisi dei circuiti stazionari e in regime sinusoidale.

>[!important] La teoria dei circuiti
>Nell’ambito dell’elettrotecnica, la teoria dei circuiti si occupa di sviluppare a partire dalle equazioni di Maxwell modelli teorici che siano allo stesso tempo sufficientemente generali, semplici e accurati per descrivere, progettare e caratterizzare dispositivi elettrici realizzati dall'interconnessione di singoli elementi rappresentati da modelli fisici semplificati.
>L’approccio circuitale non si limita poi alla trattazione dei soli fenomeni elettromagnetici ma è stato esteso a svariati ambiti (circuiti meccanici, termici, acustici, etc…)

Per sviluppare dei modelli utilizzabili in elettrotecnica quindi affrontiamo un processo di astrazione.

# Equazioni di Maxwell
[[Elettromagnetismo#Equazioni di Maxwell]]
I fenomeni elettromagnetici sono descritti dalle eq. di Maxwell che legano tra loro le varie grandezze fisiche vettoriali e le proprietà dei materiali (vuoto compreso).
Conoscendo le proprietà dei materiali:
- $\epsilon$ permettività dielettrica
- $\mu$ permeabilità magnetica
- $\sigma$ conducibilità elettrica
- $\rho$ densità spaziale di carica
## 1° equazione - legge di Gauss per il campo elettrico
$$
\oint \vec{E} \cdot d \vec{A} = \frac{Q}{\epsilon_0}
$$
che rappresenta il flusso di campo elettrico in una superficie chiusa
## 2° equazione - legge di Gauss per il campo magnetico
$$
\oint \vec{B} \cdot d \vec{A} =0
$$
che rappresenta il flusso di campo magnetico in una superficie chiusa, che è uguale a 0 in quanto il campo magnetico è conservativo.
## 3° equazione - legge di Faraday sull'induzione elettromagnetica
$$
\oint \vec{E} \cdot d \vec{l} = - \frac{d \Phi_B}{dt}
$$
L'integrale di linea del campo elettrico su un percorso è uguale all'opposto della rapidità di variazione temporale del flusso magnetico attraverso il percorso.
## 4° equazione - legge di Ampere con corrente di spostamento
$$
\oint \vec{B} \cdot d \vec{l} = \mu_0 \left( i_C + \epsilon_0 \frac{d \Phi_E}{dt} \right)
$$
L'integrale di linea del campo magnetico su un percorso è uguale alla corrente $i_C$ sommata alla corrente di spostamento attraverso la superficie $\epsilon_0 \frac{d \Phi_E}{dt}$ tutto moltiplicato per la costante magnetica $\mu_0$
## Equazioni in forma differenziale
$$
\begin{align*}
\nabla \cdot D &= \rho_{lib} \\
\nabla  \cdot B &= 0 \\
\nabla \times E & = - \frac{\partial B}{\partial t} \\
\nabla \times H &= J + \frac{\partial D}{\partial t}
\end{align*}
$$
La soluzione completa di un problema elettromagnetico (nel limite classico) richiederebbe la soluzione delle equazioni di Maxwell in tutto il volume di spazio di interesse (in tutti i punti dello spazio per ogni istante di tempo).
Troviamo quindi un modello semplificato che descriva con elevata approssimazione il funzionamento del circuito dal punto di vista funzionale non entrando nel dettaglio dei singoli componenti.
# Modello circuitale
Un circuito è costituito da un insieme di componenti (detti anche elementi, o blocchi o dispositivi), appartenenti a un insieme noto di tipi, collegati fra loro attraverso dei collegamenti (detti anche morsetti, o fili o conduttori) e tutti descritti dalla stesse grandezze o variabili di interfaccia.
>[!important] Componente
>Un componente è un elemento circuitale caratterizzato da un particolare insieme di morsetti (di ingresso/uscita) e da un opportuno insieme di equazioni fra le variabili di interfaccia (relazioni costitutive) dipendenti da un numero finito di costanti numeriche (parametri circuitali del componente).

>[!important] Collegamento
>Un collegamento è una linea orientata o non orientata (a seconda dei tipi di circuiti) che collega fra loro i morsetti dei componenti circuitali. Essa impone sempre sia l’omogeneità (stessa unità di misura) che la continuità (stesso valore) alle variabili di interfaccia in corrispondenza dei morsetti. Costituisce quindi una equazione di vincolo.

>[!important] Variabili di interfaccia
>Le variabili di interfaccia (o grandezze descrittive) sono grandezze fisiche e/o segnali definibili sui collegamenti fra i componenti e sono sottoposte sia alle equazioni di vincolo generate dai collegamenti che alle equazioni (relazioni costitutive) dei componenti.
>Tutte le variabili di interfaccia usualmente sono funzioni di una o più variabili indipendenti comuni (in genere il tempo).
>La dipendenza temporale delle variabili può essere principalmente di 2 tipi:
>1.  “a tempo continuo”
>2.  “a tempo discreto”

Tendenzialmente le variabili di interfaccia utilizzate saranno
- **Tensione** $v$ o differenza di potenziale
- **Corrente** $i$
A partire da queste definiamo anche la potenza come
$$
p = v \times i
$$
Distinguiamo due tipi di circuiti
- **Circuiti a costanti concentrate**
  è un circuito dove tutte le tensioni e le correnti sono funzioni solamente della variabile tempo, ovvero non si considera la variazione spaziale delle grandezze.
  Gli elementi di base sono resistori, condensatori, induttori, generatori indipendenti e dipendenti.
- **Circuiti a costanti distribuite**
  è un circuito dove le tensioni e le correnti sono funzioni sia del tempo che dello spazio. Le linee di trasmissione sono un esempio di circuiti a costanti distribuite.
# Variabili d'interfaccia
Si impongono limitazioni su:
- Frequenze di lavoro (campi e.m. lentamente variabili) → la corrente di spostamento è nulla → non si generano onde elettromagnetiche
- Natura dei componenti (presenza in un componente di un solo fenomeno e.m. per volta, tempo-invarianza delle sue caratteristiche, etc..)
Si ipotizza che:
- Le dimensioni geometriche della struttura sede del fenomeno e.m. siano sufficientemente piccole da essere trascurate → Approccio Topologico
- La velocità di propagazione del fenomeno e.m. può considerarsi infinita → individuazione di regioni tipiche dove è presente un solo fenomeno
- Il tempo di trasmissione del fenomeno e.m. all’interno della struttura è nullo per cui le grandezze dipendono solo dal tempo → Costanti concentrate

Se le dimensioni del circuito sono trascurabili rispetto alla lunghezza d'onda delle tensioni e delle correnti 
$$
\frac{x}{\lambda} \ll 1 \to E(t,x) \sim E_0 \cos (2 \pi ft)
$$
con $\lambda$ lunghezza d'onda e $f$ frequenza
Non ci sono fenomeni di propagazione, le grandezze dipendono solo dal tempo.

Le grandezze descrittive / variabili di interfaccia sono la tensione (d.d.p.) e la corrente.
- Date le approssimazioni fatte, da queste grandezze si possono derivare tutte le altre grandezze di interesse (carica su un condensatore, flusso del campo magnetico, etc
- Con le lettere minuscole solitamente si indicano le grandezze variabili nel tempo v(t), i(t). Si usano lettere maiuscole quando le grandezze sono o costanti nel tempo o a regime
## Corrente
[[Elettromagnetismo#Corrente e densità di corrente]]
>[!important] Corrente
>La corrente elettrica è il fluire di cariche elettriche attraverso una superficie. Rappresenta il numero di cariche elettriche che fluiscono attraverso una sezione nell’unità di tempo.

La carica è una proprietà delle particelle che costituiscono la materia. Essa si misura in Coulomb \[C].
In natura esistono soltanto cariche che hanno come valori in modulo, multipli interi della carica dell’elettrone.
La carica elettrica contenuta in una data regione di spazio è la somma delle cariche positive e negative contenute in essa: ciascuna carica deve essere sommata con il proprio segno. Si ha cioè:
$$Q_t = Q_+ + Q_−$$
>[!important] Legge di conservazione delle cariche
>la carica elettrica non si può né creare né distruggere, ma solo trasferire. Se all'interno di un volume la carica complessiva varia nel tempo, ci deve essere un flusso di cariche sulla superficie del volume. Questo flusso prende il nome di **corrente**.
>$$\Delta Q(t, t + \Delta t) = \sum_{i=0}^n (\pm) q_i$$
>Definiamo quindi la **corrente** come il rapporto incrementale
>$$i(t) = \lim_{ \Delta t \to 0 } \frac{\Delta Q(t,t+\Delta t)}{\Delta t}$$

### Intensità di corrente
Se consideriamo una sezione trasversale del filo, aspettiamo un tempo ΔT. Il rapporto tra la carica passata e il tempo trascorso si chiama intensità di corrente elettrica.
$$
i(t) = \lim_{ \Delta t \to 0 } \frac{\Delta Q}{\Delta t} [A]
$$
### Il verso della corrente
Anche se la corrente elettrica è una grandezza scalare, convenzionalmente le si attribuisce un verso che è quello che vede le cariche positive muoversi verso il polo negativo.
![[Pasted image 20260316130010.png|center|300]]
Questa convenzione si applica anche ai conduttori metallici nei quali la corrente è dovuta soltanto al movimento degli elettroni.
Dal punto di vista matematico la corrente di cariche positive è equivalente alla corrente di cariche negative dunque per i conduttori metallici si può ragionare in termini di cariche positive ipotetiche che si muovono nel verso della corrente convenzionale.
La corrente elettrica per convenzione rappresenta sempre un flusso di cariche positive e quindi opposta al moto degli elettroni. Essa può quindi essere positiva o negativa.
La corrente elettrica è la velocità di variazione nel tempo della carica. Essa si misura in Ampere (A). \[1A=1C/1s].
$$
i = \frac{dq}{dt} \implies q = \int_{t_0}^t i dt
$$
![[Pasted image 20260316130146.png|center|400]]
$$
i(t) = \iint_{\Sigma} \vec{J}(x,y,z,t) d \hat{\Sigma}
$$
## Differenza di potenziale
[[Elettromagnetismo#Potenziale elettrico]]
>[!important] Differenza di potenziale
>La differenza di potenziale fra due punti di un campo elettrico è il rapporto tra il lavoro necessario per spostare la carica da un punto all’altro e la carica stessa.

>[!important] Tensione
>La tensione o differenza di potenziale è energia per unità di carica. Essa si misura in Volt (V). \[1V=1J/1C].

La tensione VAB tra due punti A e B è il lavoro per unità di carica che deve compiere il campo elettrico per spostare la carica unitaria dal punto A al punto B.
$$
V_{AB} = \oint_A^B \vec{E} \cdot d \vec{l} = \oint_A^B E \cdot dl
$$
se il lavoro viene fornito da una sorgente esterna di forza elettromotrice (fem) che può essere una batteria, una dinamo, una turbina idroelettrica, etc.
$$
V_{AB} = \frac{d\epsilon}{dq} 
$$
Un campo elettrico uniforme è uguale in tutti i punti dello spazio In un campo elettrico uniforme la forza elettrica sposta una carica $q$ tra i punti $A$ a $B$.
Il lavoro compiuto dalle forze del campo è $\frac{L}{q}$ è $E \cdot s$ e non dipende dalla carica spostata, ma solamente dai punti $A$ e $B$.
$$
L_{AB} = F \cdot s \implies L_{AB} = q \cdot E \cdot s
$$
La forza elettrostatica è conservativa; il campo elettrico è un campo conservativo.
Quando una forza esterna compie lavoro positivo su una carica in un campo elettrico, fa aumentare l’energia potenziale elettrica della carica.
L’energia potenziale guadagnata viene restituita come energia cinetica, quando la carica si muove sotto l’azione delle forze del campo.
## Potenza ed energia
>[!important] La potenza
>La potenza è la rapidità di assorbimento o di emissione di energia nel tempo. Essa si misura in Watt $(W)$.
>$$p = \frac{d\epsilon(t)}{dt} = \frac{d\epsilon(t)}{dq(t)} \frac{dq(t)}{dt} = v(t) i(t)$$

Per il principio di conservazione dell'energia, in un sistema isolato
$$
\sum p = 0
$$
Distinguiamo due modi di notare la potenza:

| **Convenzione degli utilizzatori**                                                | **Convenzione dei generatori**                                                     |
| --------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| ![[Pasted image 20260316131156.png\|center\|200]]                                 | ![[Pasted image 20260316131232.png\|center\|180]]                                  |
| $p>0 \implies$ il bipolo assorbe potenza<br>$p<0\implies$ il bipolo eroga potenza | $p>0 \implies$ il bipolo eroga potenza<br>$p<0 \implies$ il bipolo assorbe potenza |
Normalmente facciamo riferimento alla convenzione degli utilizzatori.

>[!important] Energia
>L’energia è la capacità di eseguire un lavoro. Essa si misura in Joule $(J)$.

L’energia assorbita o erogata da un elemento dall’istante $t_0$ all’istante $t$ è:
$$
\epsilon(t_{0},t_{1}) = \int_{t_{0}}^{t_{1}} p(t) dt = \int_{t_{0}}^{t_1} v(t) i(t) dt
$$
# Componenti di base
Distinguiamo due tipi di elementi
- **attivi**
  Gli elementi attivi possono generare energia
- **passivi**
  Gli elementi passivi non possono generare energia, solo assorbirla o scambiarla
In un dato circuito un elemento attivo può anche assorbire potenza oltre che cederla, ad esempio quando carichiamo una batteria.
## Resistore
>[!important] Resistore
>Resistività r: attitudine di un materiale a opporsi al passaggio di corrente elettrica
>![[Pasted image 20260316133227.png|center|300]]
>$$v(t) = R i(t)$$

>[!info] [[Elettromagnetismo#Trasporto di carica|legge di Ohm]]
>$$ V=RI $$
>La legge di Ohm afferma che la tensione v su un resistore è direttamente proporzionale alla corrente i che scorre nel resistore.
>$$R = \rho \frac{l}{A} [\Omega]$$

In un mezzo conduttore, la tensione ai capi e la corrente che lo attraversa, sono linearmente proporzionali
$$
V_{AB} = \frac{l}{\sigma S}I = \frac{\rho l}{S}I = RI
$$
$$
I = \frac{\sigma S}{l} V_{AB} = \frac{S}{\rho l} V_{AB} = \frac{1}{R}V_{AB} = G V_{AB}
$$
$R$ è la resistenza che si misura in Ohm $[\Omega]$, mentre $G$ è l'**induttanza** che si misura in $[\Omega^{-1}]$ ovvero Simens $[S]$.
>[!important] La resistenza R di un elemento denota la sua proprietà di opporsi al passaggio di corrente elettrica e si misura in ohm (Ω).
>$$R = \frac{v}{i}$$

>[!important] La conduttanza G è la capacità di un elemento di condurre la corrente elettrica e si misura in siemens (S) o in mho (Ω-1).
>$$G = \frac{1}{R} = \frac{i}{v}$$
### Relazione costitutiva (resistore)

$$
\displaylines{v(t) = R \cdot i(t) \\ 
i(t)=\frac{1}{R}\cdot v(t)=G \cdot v(t)}
$$
### Potenza assorbita (resistore)
$$
\begin{align*}
p(t) = v(t) \cdot i(t) = [R \cdot i(t)] \cdot i(t) = i^2(t) \cdot R\\
p(t) = v(t) \cdot i(t) = v(t) \cdot [G \cdot v(t)] = v^2(t) \cdot G
\end{align*}
$$
### Energia assorbita (resistore)
$$
E(t_{0},t_{1}) = \int_{t_{0}}^{t_{1}} p(t) dt = R \int_{t_{0}}^{t_{1}} i^2(t)dt = G \int_{t_{0}}^{t_{1}} v^2(t) dt
$$
## Condensatore
>[!important] [[Elettromagnetismo#Capacità di un condensatore|Condensatore]]
>Il condensatore è un dispositivo capace di accumulare energia sotto forma di campo elettrico, tramite accumulo di cariche;
>Capacità C: mette in relazione il valore di tensione applicato sulle armature e l’entità di carica accumulata. C si misura in Farad \[F].
>Nel caso di condensatore ad armature piane e parallele la capacità dipende in modo semplice da superficie A e distanza d delle armature e dalla costante dielettrica $\epsilon$;
>![[Pasted image 20260316134627.png|center|300]]
>$$i(t) = C \frac{dv(t)}{dt}$$

### Relazione costitutiva (condensatore)
$$
q(t) = Cv(t) \implies i(t) = \frac{dq(t)}{dt} = C \frac{dv(t)}{dt}
$$
### Potenza assorbita (condensatore)
$$
p(t) = v(t) \cdot i(t) = v(t) \cdot C \frac{dv(t)}{dt} = Cv(t) \frac{dv(t)}{dt}
$$
### Energia assorbita (condensatore)
$$
E(t) = \int_{- \infty}^t \rho(\tau) d \tau = \int_{-\infty}^t i(\tau) v(\tau) d \tau = C \int_{-\infty}^t v(\tau) \frac{dv(\tau)}{d\tau} d \tau = \frac{1}{2}Cv^2(t)
$$
Se $C>0$ l'elemento è passivo (accumula energia sotto forma di campo elettrico)
## Induttore
>[!important] Induttore
>È un dispositivo capace di accumulare energia sotto forma magnetica, ovvero sotto forma di flusso del campo magnetico;
>Induttanza $L$: mette in relazione il flusso magnetico totale concatenato all’avvolgimento con la corrente che vi scorre. $L$ si misura in Henry \[H]
>![[Pasted image 20260316135503.png|center|300]]
>$$\Phi_B = L \cdot i(t)$$

Un induttore consiste di un filo (tipicamente avvolto in più spire) percorso da corrente ed è in grado di accumulare energia magnetica.
$$
\begin{array}{c}
\Phi = \int_S \vec{B} \cdot \vec{n} dS\\
\begin{array}{cc}
L \equiv \frac{\Phi}{i} \quad & \quad 1H \equiv 1 \frac{Vs}{A}
\end{array}
\end{array}
$$
$$
L = \frac{N^2 \mu A}{d}
$$
con $N$ numero di spire
>[!info] [[Elettromagnetismo#Legge di Ampere|Legge di Ampere]]
>L'integrale di linea di $\vec{B}$ lungo una linea chiusa qualsiasi concatenata con una corrente $I$ è pari a
>$$\displaylines{\oint_{\Gamma} d \vec{B} = \mu_0 I\\ \nabla \times \vec{B} = \mu_0 \vec{J}}$$

[[Elettromagnetismo#Solenoide]]
![[Pasted image 20260316144052.png|center|400]]
Viene generato un campo principalmente confinato all'interno del solenoide.
![[Pasted image 20260316144137.png|center|350]]
$$
\displaylines{
\oint \vec{B} \cdot d \vec{s} \approx \int_a^b B \cdot ds = B \cdot h = \mu_0 \cdot i \cdot (n \cdot h) \\
\implies B = \mu_0 \cdot i \cdot n\\
B= I \frac{\mu_0 \cdot N_s}{l}
}
$$
con $n$ numero di spire per unità di lunghezza e $N_s = n l =$ numero di spire totali

>[!info] Legge di Faraday
>$$v(t) = \frac{d\Phi_B}{dt} = L \cdot \frac{di}{dt}$$
>La variazione del flusso del campo magnetico concatenato nel tempo genera una differenza di potenziale ai capi dell'induttore

### Relazione costitutiva (induttore)
$$
\Phi(t) = Li(t) \implies v(t) = \frac{d\Phi(t)}{dt} = L \frac{di(t)}{dt}
$$
### Potenza assorbita (induttore)
$$
p(t) = v(t) \cdot i(t) = L \frac{di(t)}{dt} \cdot i(t) = L i(t) \frac{di(t)}{dt}
$$
### Energia assorbita (induttore)
$$
E(t) = \int_{-\infty}^t \rho(\tau) d \tau = \int_{-\infty}^t i(\tau) v(\tau) d \tau = L \int_{-\infty}^t i(\tau) \frac{di(\tau)}{d \tau} d \tau = \frac{1}{2} Li^2(t)
$$
Se $L>0$ l'elemento è passivo (accumula energia sotto forma di campo magnetico)
## Generatori indipendenti
>[!important] Un generatore ideale indipendente è un elemento attivo che mantiene una tensione o corrente specificata che è completamente indipendente dalle altre variabili del circuito.

>[!important] Un generatore ideale dipendente è un elemento attivo la cui tensione o corrente è controllata da un’altra tensione o corrente.

>[!important] Generatore di tensione
>![[Pasted image 20260316171411.png|center|450]]

>[!important] Generatore di corrente
>![[Pasted image 20260316171436.png|center|450]]
### Circuiti aperti e circuiti chiusi
**Cortocircuito ideale:** È definito come un bipolo in cui la tensione ai terminali è costantemente nulla, indipendentemente dall'intensità o dalla direzione della corrente che lo attraversa. $$v(t)=0 \quad \forall i(t)$$
**Circuito aperto ideale:** È definito come un bipolo in cui la corrente che lo attraversa è costantemente nulla, indipendentemente dalla differenza di potenziale applicata ai suoi terminali.$$i(t) = 0 \quad \forall v(t)$$
1. **Resistore**
   $V = R \cdot I$ per $R \to \infty$ abbiamo $\frac{V}{R}=I=0$, abbiamo quindi un **circuito aperto**
   $V=R \cdot I$ per $R \to 0$ abbiamo $V=0$, abbiamo quindi un **circuito chiuso**
2. **Condensatore**
   $i(t) = C \frac{d v(t)}{dt}$ se $\frac{dv(t)}{dt} = \text{const} \implies i(t) = 0$ **circuito aperto**
3. **Induttore**
   $v(t) = L \frac{di(t)}{dt}$ se $\frac{di(t)}{dt}= \text{const} \implies v(t)=0$ **circuito chiuso**
4. **Generatori**
   spegnendo un generatore
   - di tensione
     $V_g = V_A - V_B \implies V_A -V_B = 0$ **cortocircuito**
   - di corrente
     $I_g = 0$ **circuito aperto**

# Topologia dei circuiti
Per semplificare lo studio dei circuiti definiamo delle ipotesi semplificative:
1. Le tensioni variano solo ai capi dei componenti, le correnti solo dove si incontrano più “rami” del circuito;
2. Ogni componente ha una caratteristica tensione-corrente univoca;
3. i componenti sono considerati privi di dimensioni
4. i collegamenti sono considerati conduttori perfetti (conducibilità infinita)→ niente caduta di potenziale lungo i conduttori né dissipazione di energia;
5. nello spazio che circonda i componenti non ci sono cariche, il campo elettrico è conservativo, il campo magnetico è nullo
Lo schema di un circuito è la rappresentazione astratta di un circuito fisico.
La disposizione degli elementi di un circuito nello schema può non avere relazione con la loro disposizione fisica (le dimensioni non contano).
Possiamo modificare e deformare lo schema di un circuito a piacere purché la disposizione delle connessioni tra i vari elementi rimanga la stessa.
![[Pasted image 20260316185440.png|center|500]]
>[!important] Un **ramo** rappresenta un singolo elemento attivo o passivo, quale ad esempio un generatore di tensione o un resistore
>È un tratto caratterizzato dall’essere attraversato in ogni suo punto dalla stessa corrente

>[!important] Un **nodo** è un punto di connessione tra 2 o più rami
>È un punto **equipotenziale**, tutti i collegamenti attaccati al nodo stanno allo stesso potenziale del nodo (ricorda: la tensione varia solo all’interno degli elementi che sono inaccessibili in quanto privi di dimensioni)

>[!important] Una **maglia** è un qualsiasi percorso chiuso in un circuito
>Una maglia è un qualsiasi percorso chiuso all’interno di un circuito in cui nessun nodo è percorso più di una volta.
>Un **anello** è un particolare tipo di maglia tale che non contiene al suo interno altre maglie (si dice anche “maglia di area minima”)

Dato che la topologia di un circuito non dipende dal tipo di elementi ma solo dale loro connessioni reciproche, è utile introdurre il concetto di **grafo**, ovvero lo schema dei rami del circuito senza riportare gli elementi.
![[Pasted image 20260316185922.png|center|500]]
Un grafo orientato è un grafo su cui si assegnano i versi delle percorrenze (e delle tensioni in accordo con la convenzione degli utilizzatori).

Solo elementi che appartengono a una maglia, ovvero solo gli elementi in cui scorre della corrente, contribuiscono alla funzionalità del circuito.
![[Pasted image 20260316190116.png|center|500]]
>[!important] Messa a terra - Ground ⏚
>di solito si usa assumere un punto (nodo) come riferimento per tutti gli altri per esprimere le differenze di potenziale tra diversi punti del circuito.
>Al nodo di riferimento viene assegnato un potenziale nullo.
>(NOTA: le forze dipendono dalla derivate del potenziale → l’aggiunta di una costante non cambia le forze in gioco)


Se si conoscono tutti i potenziali dei nodi rispetto al potenziale del nodo preso come riferimento, allora tutte le grandezze elettriche del circuito possono essere determinate.
Lo stesso vale se conosciamo tutte le correnti degli anelli.
Potenziale dei nodi e correnti di anello sono due insieme di variabili indipendenti. Dai loro valori, tutti gli altri possono essere determinati.
Come trovare i valori delle variabili indipendenti (e come stabilire l’effettiva indipendenza) è lo scopo dei **metodi di analisi dei circuiti**.
## Leggi di Kirchhoff
Le leggi di Kirchhoff delle correnti (Kirchhoff’s Current Law - KCL) e delle tensioni (Kirchhoff’s Voltage Law - KVL) sono le leggi fondamentali per l’analisi dei circuiti a partire dalla topologia degli stessi.
### Legge di Kirchhoff delle correnti (KCL)
La KCL è alla base del Metodo dei nodi, in cui le incognite da trovare sono le tensioni dei nodi del circuito.
Dalla legge di conservazione della carica deriva la prima legge di Kirchhoff.
>[!info] La legge di Kirchhoff delle correnti (KCL) stabilisce che la somma algebrica delle correnti che entrano in un nodo (o in una superficie chiusa) è zero.
>$$\sum_{n=1}^N \pm i_n = 0$$
>con $N$ rami connessi al nodo e $i_n$ n-esima corrente che entra o esce dal nodo

Possiamo quindi concludere che la somma delle correnti entranti al nodo è uguale alla somma delle correnti uscenti da esso.

>[!important] Definizione di porta
>coppia di morsetti tali che la corrente che entra in uno esce nell’altro
>![[Pasted image 20260316191127.png|center|400]]
>Applicando la KCL è immediato verificare che $i_1=i_2$

### Legge di Kirchhoff delle tensioni (KVL)
La KVL è alla base del Metodo degli anelli, in cui le incognite da trovare sono le correnti di anello.
Dalla legge di conservazione dell'energia deriva la seconda legge di Kirchhoff.
>[!info] La legge di Kirchhoff delle tensioni (KVL) stabilisce che la somma algebrica delle tensioni lungo un percorso chiuso (o maglia) è zero.
>$$\sum_{m=1}^M \pm v_m = 0 $$
>con $M$ numero di tensioni (o rami) della maglia e $v_m$ m-esima tensione

Possiamo quindi concludere che la somma delle cadute di tensione è uguale alla somma degli aumenti di tensione.
## Elementi in serie e parallelo
![[Pasted image 20260320205431.png]]

>[!important] Elementi in serie
>Due elementi sono in serie quando condividono un nodo in maniera esclusiva, nessun altro elemento è connesso al nodo comune
>Due elementi in serie sono attraversati dalla **stessa corrente**.

>[!important] Elementi in parallelo
>Quando i due terminali di due o più bipoli sono connessi alla stessa coppia di nodi, tutti i bipoli vedono la stessa differenza di potenziale ai capi e gli elementi sono detti essere in parallelo.
### Resistenze in serie
La relazione tensione-corrente ai capi delle due resistenze non cambia se sostituiamo le due resistenze in serie con una singola **resistenza equivalente** di valore:
$$
R_{eq} = R_{1} + R_{2}
$$
![[Pasted image 20260318180145.png|center|400]]

Per $N$ elementi in serie, la resistenza equivalente ha un valore dato da:
$$
R_{eq} = R_{1} + R_{2} +\dots + R_N
$$
#### Partitore di tensione
Considerando due resistori in serie con un generatore di tensione ideale $v(t)$ applicato ai loro capi otteniamo un partitore di tensione: la differenza di potenziale è distribuita sulle due resistenze come segue:
![[Pasted image 20260318180515.png|center|300]]
$$
\displaylines{
v_{1}(t) = v(t) \frac{R_{1}}{R_{1}+R_{2}} \\
v_{2}(t) = v(t) \frac{R_{2}}{R_{1}+R_{2}}
}
$$
In laboratorio viene utilizzato un partitore di tensione per cambiare la differenza di potenziale che agisce su un resistore.
### Resistenze in parallelo
Se abbiamo due resistenze in parallelo possiamo sostituirle con una singola **resistenza equivalente** senza cambiare la relazione tensione-corrente:
![[Pasted image 20260320193834.png|center|400]]
$$
R_{eq} = \frac{R_{1}R_{2}}{R_{1}+R_{2}} \hspace{8ex} \frac{\min(R_{1},R_{2})}{2} \leq R_{eq} < \min(R_{1},R_{2})
$$
$$
i = i_{1} + i_{2} = v\left( \frac{1}{R_{1}} + \frac{1}{R_{2}} \right) \hspace{4ex} i = \frac{v}{R_{eq}} \implies R_{eq} = \frac{R_{1}R_{2}}{R_{1}+R_{2}}
$$
Generalizzando la formula con $N$ resistori otteniamo:
$$
R_{eq} = \frac{1}{\frac{1}{R_{1}}+\frac{1}{R_{2}}+\frac{1}{R_{3}}+\dots+\frac{1}{R_N}}
$$
o anche utilizzando la somma di conduttanze
$$
G_{eq} = G_{1} + G_{2} + G_{3} +\dots+ G_N
$$
#### Partitore di corrente
Considerando due resistori in parallelo collegati ad un generatore di corrente otteniamo un partitore di corrente.
La corrente $i(t)$ si ripartisce sui due resistori in maniera linearmente proporzionale al valore della loro conduttanza (e quindi in maniera inversalmente proporzionale alla resistenza).
$$
\displaylines{
i_{1}(t) = i(t) \frac{G_{1}}{G_{1}+G_{2}} = i(t) \frac{R_{2}}{R_{1}+R_{2}}\\
i_{2}(t) = i(t) \frac{G_{2}}{G_{1}+G_{2}} = i(t) \frac{R_{1}}{R_{1}+R_{2}}
}
$$
![[Pasted image 20260320195125.png|center|300]]
#dimostrazione 
Utilizziamo [[#Legge di Kirchoff delle correnti (KCL)|KCL]] al circuito
$$
I_g = I_{R_{1}} + I_{R_{2}}
$$
Per la [[#Relazione costitutiva (resistore)|legge di Ohm]] $I_{R_{1}} = \frac{e_A-e_B}{R_{1}}$ e $I_{R_{2}} = \frac{e_A-e_B}{R_{2}}$, ma assumendo $B$ come noto a terra e quindi $e_B = 0$ otteniamo:
$$
I_g = e_A\left( \frac{1}{R_{1}} + \frac{1}{R_{2}}\right)
$$
tramite minimo comune multiplo calcoliamo:
$$
I_g = e_A \left( \frac{R_{1}+R_{2}}{R_{1}R_{2}} \right)
$$
isolando $e_A$ otteniamo
$$
e_A = I_g \left( \frac{R_{1}R_{2}}{R_{1}+R_{2}} \right)
$$
#### Casi limite partitori
![[Pasted image 20260320200053.png|center|500]]
### Condensatori in serie
>[!important] La capacità equivalente di $N$ condensatori in serie è pari al reciproco della somma dei reciproci delle singole capacità

![[Pasted image 20260320201618.png|center|400]]
$$
\frac{1}{C_{eq}} = \frac{1}{C_{1}} + \frac{1}{C_{2}} +\dots + \frac{1}{C_N}
$$
#dimostrazione
Per la [[#Legge di Kirchoff delle tensioni (KCL)|KCL]] sappiamo che:
$$
v = v_{1} + v_{2} + \dots + v_N
$$
e per la [[#Relazione costitutiva (condensatore)|relazione costitutiva]] dei condensatori sappiamo che per un singolo componente la corrente: $i(t) = C \frac{dv(t)}{dt} \implies \frac{dv(t)}{dt} = \frac{i(t)}{C} \implies v = \frac{1}{C} \int_{t_{0}}^t i(t) dt + v(t_{0})$
Possiamo quindi riscrivere la tensione generata $v$ come:
$$
v = \frac{1}{C_{1}} \int_{t_{0}}^t i(t) dt + v_{1}(t_{0}) + \frac{1}{C_{2}} \int_{t_{0}}^t i(t) dt + v_{2}(t_{0}) + \dots + \frac{1}{C_N} \int_{t_{0}}^t i(t) dt + v_N(t_{0})
$$
Raccogliamo quindi il reciproco delle capacità e l'integrale della corrente, che è comune a tutti i termini
$$
v = \left( \frac{1}{C_{1}} + \frac{1}{C_{2}} + \dots + \frac{1}{C_N} \right) \int_{t_{0}}^t i(t) dt + v_{1}(t_{0}) + v_{2}(t_{0}) + \dots v_N(t_{0})
$$
Definiamo quindi la capacità equivalente
$$
v = \frac{1}{C_{eq}} \int_{t_{0}}^t i(t) dt + v(t_{0})
$$
### Condensatori in parallelo
>[!important] La capacità equivalente di $N$ condensatori collegati in parallelo è pari alla somma delle singole capcità

![[Pasted image 20260320202834.png|center|400]]
$$
C_{eq} = C_{1} + C_{2} + \dots + C_N
$$
#dimostrazione 
Dalla [[#Legge di Kirchoff delle correnti (KCL)|KCL]] sappiamo che
$$
i = i_{1} + i_{2} + \dots + i_N
$$
utilizzando la [[#Relazione costitutiva (condensatore)|relazione costitutiva del condensatore]]
$$
i = C_{1} \frac{dv}{dt} + C_{2} \frac{dv}{dt} + \dots + C_N \frac{dv}{dt} = C_{eq} \frac{dv}{dt}
$$
### Induttori in serie
>[!important] L'induttanza equivalente di $N$ induttori collegati in serie è pari alla somma delle singole induttanze

![[Pasted image 20260320203242.png|center|400]]
$$
L_{eq} = L_{1} + L_{2} + \dots L_N
$$

#dimostrazione 
Per la [[#Legge di Kirchoff delle tensioni (KCL)|KCL]] sappiamo che:
$$
v = v_{1} + v_{2} + \dots + v_N
$$
e per la [[#Relazione costitutiva (induttore)|relazione costitutiva degli induttori]] e la [[#Induttore|Legge di Faraday]] sappiamo che per gli induttori possiamo calcolare $v$ come $v = L \frac{di}{dt}$
Otteniamo quindi
$$
v = L_{1} \frac{di}{dt} + L_{2} \frac{di}{dt} + \dots + L_N \frac{di}{dt}
$$
possiamo raccogliere $\frac{di}{dt}$
$$
v = (L_{1} + L_{2} + \dots + L_N) \frac{di}{dt}
$$
e possiamo definire l'induttanza equivalente
$$
L_{eq} = L_{1} + L_{2} + \dots + L_N
$$
### Induttori in parallelo
>[!important] L'induttanza equivalente di $N$ induttori collegati in parallelo è pari al reciproco della somma dei reciproci delle singole induttanze.

![[Pasted image 20260320204255.png|center|400]]
$$
\frac{1}{L_{eq}} = \frac{1}{L_{1}} + \frac{1}{L_{2}} + \dots + \frac{1}{L_N}
$$
#dimostrazione 
Per la [[#Legge di Kirchoff delle correnti (KCL)|KCL]]
$$
i = i_{1} + i_{2} + \dots + i_N
$$
Per la [[#Relazione costitutiva (induttore)|relazione costitutiva]] $v(t) = L \frac{di(t)}{dt} \implies \frac{di(t)}{dt} = \frac{v(t)}{L} \implies i(t) = \frac{1}{L} \int_{t_{0}}^t v(t) dt + i(t_{0})$
Otteniamo quindi
$$
\begin{align*}
i & = \frac{1}{L_{1}} \int_{t_{0}}^t v(t) dt + \frac{1}{L_{2}} \int_{t_{0}}^t v(t) dt + \dots + \frac{1}{L_N} \int_{t_{0}}^t v(t) dt =\\
& = \left( \frac{1}{L_{1}} + \frac{1}{L_{2}} + \dots + \frac{1}{L_N} \right) \int_{t_{0}}^t v(t) dt + i_{1}(t_{0}) + i_{2}(t_{0}) + \dots+ i_N(t_{0}) =\\
& = \frac{1}{L_{eq}} \int_{t_{0}}^t v(t) dt + i(t_{0})
\end{align*}
$$

>[!important] Equivalenza esterna
>Due bipoli (o reti) accessibili da una porta sono equivalenti se hanno la stessa caratteristica i-v (e.g.la stessa relazione costitutiva), per ogni valore di tensione/corrente di porta.
>Due bipoli (o reti) accessibili da una coppia di morsetti (porta) sono equivalenti se hanno la stessa caratteristica tensione-corrente (la stessa relazione costitutiva), per ogni valore di tensione/corrente.

### Generatori di tensione in serie
![[Pasted image 20260320210235.png|center|200]]
$$
V_S = V_{1} + V_{2} - V_{3}
$$
### Generatori di corrente in parallelo
![[Pasted image 20260320210311.png|center|300]]
$$
I_S = I_{1} - I_{2} +I_{3}
$$
## Generatori reali
### Incongruenze dei generatori ideali
Per il modello che abbiamo definito fino a questo momento se provassimo a utilizzare due generatori di tensione in parallelo
![[Pasted image 20260320210707.png|center|200]]
con tensioni generate $v_{1} \neq v_{2}$ pretenderei che gli stessi nodi si abbiano contemporaneamente due differenze di potenziale differenti.
Questo non consente di calcolare la corrente che scorre, rendendo **sbagliato topologicamente** utilizzare generatori di tensione in parallelo.

---
Inoltre se analizziamo un circuito composto da un generatore e una resistenza
![[Pasted image 20260320211218.png|center|200]]
Possiamo calcolare la tensione su $R$ come $V_R = V_g$ in quanto la tensione ai capi dei morsetti è costante.
Possiamo inoltre calcolare la [[#Potenza assorbita (resistore)|potenza assorbita]] come
$$
P_R = \frac{V_g^2}{R}
$$
Quindi se facciamo tendere la resistenza a $R\to0$ allora la potenza $P_R \to + \infty$.
Abbiamo quindi trovato una **incongruenza** a livello matematico, il generatore ideale può generare potenza infinita.

---
Prendendo in considerazione due generatori di corrente in parallelo
![[Pasted image 20260320211918.png|center|200]]
con due correnti diversi $i_1 \neq i_{2}$.
Anche in questo caso otteniamo una **incongruenza topologica** Data dal fatto che la [[#Legge di Kirchoff delle correnti (KCL)|KCL]] sui nodi $A$ e $B$ non è rispettata.
Non possiamo quindi calcolare la tensione ai capi dei generatori.

---
Analizziamo un circuito composto da un generatore di corrente e una resistenza:
![[Pasted image 20260320212111.png|center|200]]
La corrente $i_R = i_g$ e possiamo calcolare la [[#Potenza assorbita (resistore)|potenza]] come $P_R = (i_g)^2 \cdot R$.
facendo tendere la resistenza verso infinito $R\to \infty$ otteniamo ancora una volta $P_R \to \infty$ un generatore che può erogare potenza infinita.
### Generatori reali
Occorre quindi introdurre un modello più accurato, combinando più elementi ideali: 
- **generatore di tensione reale**
  colleghiamo in serie un generatore ideale e un resistore
- **generatore di corrente reale**
  colleghiamo in parallelo un generatore di corrente e un resistore
Questo modello più accurato consente di evitare le incongruenze e le limitazioni evidenziate.

| ![[Pasted image 20260320211709.png]] | ![[Pasted image 20260320212436.png]] |
| ------------------------------------ | ------------------------------------ |
- Un generatore reale di tensione non può mai erogare potenza infinita, un generatore reale ha sempre una resistenza interna che limita la corrente erogabile.
- Un generatore reale di corrente non può mai erogare potenza infinita, un generatore reale ha sempre una resistenza interna che limita la tensione ai morsetti.

>[!info] Teorema del massimo trasferimento di potenza
>Per un generatore reale di tensione abbiamo
>![[Pasted image 20260327145114.png|center|400]]
>La corrente è calcolabile come $i = \frac{V_g}{R_L + R_g}$, volendo quindi calcolare la potenza sul carico come $$P_{R_L} =R_L \cdot i^2 =  V_g^2 \frac{R_L}{(R_L + R_g)^2}$$
>Per trovare il [[4. Calcolo differenziale#Massimi e minimi relativi|massimo]] deriviamo la potenza rispetto alla resistenza:
>$$\begin{align*}\frac{dP_{R_L}}{dR_L} & = \frac{(R_L + R_g)^2 - 2R_L(R_L + R_g) }{(R_L + R_g)^4}\\ & = \frac{R_L^2 + R_g^2 + 2R_LR_g - 2R_L^2-2 R_LR_g}{(R_L+R_g)^4} \\ & = \frac{R_g^2 - R_L^2}{(R_L + R_g)^4}\end{align*}$$
>Lo poniamo uguale a 0 per trovare un punto stazionario$$\frac{R_g^2-R_L^2}{(R_L+R_g)^4} \implies R_g^2 = R_L^2 \implies R_g = R_L$$
### Confronto tra modelli e generatori reali
Confrontiamo il generatore ideale di tensione con il modello del generatore reale di tensione tramite la potenza erogata sul carico esterno
![[Pasted image 20260326185055.png]]
Calcoliamo la corrente e conseguentemente la potenza sul carico di entrambi i sistemi
$$
\begin{array}{cc}
i = \frac{V_g}{R_L} \hspace{8ex} & i = \frac{V_g}{R_g + R_L} \\
P_{R_L} = V_g \cdot i = \frac{V_g^2}{R_L} \hspace{8ex} & P_{R_L} = V \cdot i = (V_g-i R_g) \cdot i = V_g i - R_g i^2
\end{array}
$$
![[Pasted image 20260326185712.png|center|500]]
$$
\begin{align*}
\lim_{ R_L \to 0 } P_{R_L} (R_L) = +\infty  \hspace{8ex} \lim_{ R_L \to 0 } P_{R_L} (R_L) = 0 
\end{align*}
$$
$\therefore$ La massima corrente che il generatore reale può far circolare si ha per la chiusura in corto circuito e la corrente $i_{cc}$ (corrente di corto circuito) dipende solo dal generatore e dalla resistenza (del generatore reale).
$$
i_{max} = i_{cc} = \frac{V_g}{R_g} [A]
$$
A cui corrisponde una potenza erogata al carico $R_L=0$
$$
P_{R_L} (R_L = 0) = i^2 R_L = \left( \frac{V_g}{R_g} \right)^2 R_L = 0 [W]
$$
La potenza massima si ha per $i= \frac{i_{cc}}{2}$ e quindi la potenza sul carico sarà
$$P_{R_L} = \left( \frac{i_{cc}}{2} \right)^2 R_L = \left( \frac{V_g}{2 \cdot R_g} \right)^2 R_L$$
>[!important] Rendimento
>[[6. Termodinamica#Trasformazioni cicliche|rendimento]]
>$$\eta = \frac{\text{potenza assorbita dal carico}}{\text{potenza erogata dal generatore ideale}} = \frac{P_{R_L}}{P_{V_G}}$$

>[!info] Teorema del massimo rendimento
>Possiamo quindi massimizzare il rendimento
>$$\eta = \frac{p_{R_L}}{p_{V_g}} = \frac{V_{R_L} \cdot I}{V_g \cdot I} = 1- \frac{V_{R_g} \cdot I}{ V_g \cdot I} = 1- \frac{R_g \cdot I}{V_g}$$
>quindi per $I\to 0$ abbiamo il rendimento massimo $\eta = 1$

### Equivalenza dei generatori reali
I due generatori possono essere sostituiti tra loro in maniera equivalente. Dall'equazione di equilibrio delle correnti al generatore di corrente ho:
$$i + \frac{v}{R_i}-I_S = 0 \implies I_S - i = \frac{v}{R_i}$$
equivalente a quella del generatore di tensione se:
$$V_0 = R_i I_S \quad \text{e} \quad R_v = R_i$$
![[Pasted image 20260327152652.png]]
Vediamo in quale caso le potenze sono uguali:
#dimostrazione
$$
\begin{align*}
P_{R_L}^1 & = \frac{V_{R_L}^2}{R_L}= V_g^2\frac{ R_L^2}{(R_g + R_L)^2 R_L}& \hspace{10ex} P_{R_L}^2 &=  i^2_{R_L} \cdot R_L = I_g^2 \frac{R_{I_g}^2 \cdot R_L}{(R_L + R_g)^2}
\end{align*}
$$
li poniamo uguali
$$
V_g^2\frac{ R_L}{(R_g + R_L)^2 } = I_g^2 \frac{R_{I_g}^2 \cdot R_L}{(R_L + R_g)^2}
$$
Semplifico il denominatore e tutte le quantità in comune ottenendo:
$$
V_{g}^2=R_{g}^2 \cdot I_{g}^2 \implies V_{g}=R_{g} \cdot I_{g}
$$
Questo risultato conferma l'ipotesi iniziale:
- $R_g = R_L \to$  scambiando le resistenze il generatore eroga uguale potenza
- $V_g = R_g \cdot I_g$
# Teoremi delle reti lineari
>[!important] Linearità
>[[1. Sistemi dinamici#Linearità]]
>Un sistema è lineare se soddisfa le seguenti proprietà:
>- **omogeneità** $$L\{x(t)\}= y(t) \hspace{8ex} L\{kx(t)\} = ky(t)$$
>- **additività** $$L\{x_{1}(t)\} = y_{1}(t);\quad L\{x_{2}(t)\} = y_{2}(t) \hspace{8ex} L\{\alpha x_{1}(t) + \beta x_{2}(t)\} = \alpha y_{1}(t) + \beta y_{2}(t)$$
>Un sistema lineare è descritto da un sistema di equazioni lineari. Gli elementi che abbiamo studiato fino ad ora sono lineari (essendo le loro relazioni costitutive descritte da equazioni lineari) (resistori, condensatori, induttori)

>[!important] Tempo invarianza
>[[1. Sistemi dinamici#Tempo invarianza o stazionarietà]]
>Un sistema è tempo invariante quando la relazione causa–effetto non varia nel tempo, ovvero siano x(t) l’ingresso del sistema e y(t) l’uscita del sistema, per un sistema tempo invariante abbiamo:$$L\{x(t)\} = y(t) \hspace{8ex} L\{x(t-t_{0})\} = y(t-t_{0})$$

>[!important] Memoria
>Un sistema è con memoria quando l’uscita a un generico istante t dipende non solo dall’ingresso all’istante t ma anche da istanti precedenti o successivi
>*es.* i condensatori hanno memoria

>[!important] Causalità
>[[1. Sistemi dinamici#Causalità]]
>Un sistema con memoria è causale quando l’uscita dipende solo dall’ingresso a quell’istante di tempo o a istanti precedenti

Sono considerati teoremi delle reti:
- [[#Resistenze in serie]]
- [[#Resistenze in parallelo]]
- trasformazione stella-triangolo
- [[#Teorema di Thevenin]]
- [[#Teorema di Norton]]
- [[#Teorema di Millman]]
- [[#Equivalenza dei generatori reali]]
## Principio di sovrapposizione degli effetti (PSE)
[[elettromagnetismo#Distribuzione di cariche|principio di sovrapposizione degli effetti]]
Il principio di sovrapposizione degli effetti (PSE) afferma che l’effetto dovuto all’azione di più cause concomitanti è pari alla somma degli effetti che si ottengono quando ciascuna causa agisce da sola.
Esso coincide con la proprietà di [[#Teoremi delle reti lineari|additività]] pertanto è applicabile ai sistemi lineari.

>[!attention] La sovrapposizione è basata sul concetto di linearità e quindi non può essere applicata al calcolo della potenza su un elemento (la potenza dipende dal quadrato della tensione o della corrente, o dal loro prodotto)

Il PSE può essere usato in alternativa/concomitanza con i metodi di analisi per diminuire la complessità dei sistemi risolutivi degli stessi, soprattutto quando la soluzione del circuito con un singolo generatore alla volta è immediata.
Per applicarlo possiamo:
1. Spegnere tutti i generatori indipendenti eccetto uno
2. Calcolare il valore di uscita (tensione o corrente) dovuto al generatore
3. Ripetere i passi precedenti per ciascuno degli altri generatori
4. Trovare il contributo totale sommando i valori ottenuti
## Teorema di sostituzione ed equazione di porta
>[!important] Equazione di porta
>Consideriamo una parte di circuito accessibile da una porta composta dai terminali A-B. La tensione $v_{AB}(t)$ e la corrente $i_{AB}(t)$ sono descritti univocamente da una relazione che prende il nome di **equazione di porta**.
>Per i circuiti resistivi lineari abbiamo due casi possibili:
>- **Assenza di generatori**:$$\alpha v_{AB}(t) + \beta i_{AB}(t) = 0$$ da cui si ricava anche la legge di Ohm $$v_{AB}(t) = R_{AB} i_{AB}(t) \quad \text{ o } \quad i_{AB}(t) = G_{AB} v_{AB}(t)$$
>- **Presenza di generatori**
>  $$\alpha v_{AB}(t) + \beta i_{AB}(t) = \text{cost}$$

L'equazione di porta ci permette di definire un insieme di valori che possono assumere tensione e corrente, che prende il nome di **retta di carico** (nel caso di circuiti resistivi lineari).
$$
\alpha v_{AB}(t) + \beta i_{AB}(t) = \text{cost} \quad \implies \quad v_{AB} (t) = -\frac{\beta}{\alpha} i_{AB}(t) + \frac{\text{cost}}{\alpha}
$$
![[Pasted image 20260402144125.png|center|300]]

>[!question] Osservazione
>L'equazione di porta è applicabile per dimostrare l'[[#Equivalenza dei generatori reali]]

>[!info] Teorema di sostituzione
>Una parte di circuito accessibile da una porta composta dai terminali A-B può essere sostituita da un generatore di tensione che assicura la tensione di porta o da un generatore di corrente che imprime la corrente di porta senza alterare le grandezze elettriche nella parte del circuito esterna alla porta.

Il teorema di sostituzione è implicitamente legato ad una coppia di circuito - carico, cambiando uno di essi, l'equazione di porta non sarebbe più rispettata in quanto cambia il **punto di lavoro**.
## Teorema di Thevenin
>[!info] Teorema di Thevenin
>Il teorema di Thevenin afferma che un circuito **lineare** (o una porzione di circuito) accessibile da due terminali $a$ e $b$, può essere sostituito con un circuito equivalente formato da un generatore di tensione $V_{Th}$ in serie con un resistore $R_{Th}$, in cui $V_{Th}$ è la tensione a vuoto ai terminali $a$ e $b$ e $R_{th}$ è la resistenza di ingresso, o equivalente, vista agli stessi terminali, quando i generatori indipendenti sono spenti.

- $v_{Th}$ coincide con la tensione a vuoto (massima erogabile)

Per applicarlo quindi:
1. Calcolo della resistenza equivalente
   spegniamo i generatori: la resistenza ai capi sarà la nostra resistenza equivalente
2. Calcolo della tensione a vuoto tra A-B
   Ipotizziamo un verso
   Otteniamo un partitore di corrente

#dimostrazione 
Il nostro obbiettivo è sostituire la parte di circuito lineare mantenendo le proprietà del sistema.
![[Pasted image 20260402154223.png|center|300]]
Sostituiamo il resto del circuito con un generatore di corrente per il [[#Teorema di sostituzione ed equazione di porta|teorema di sostituzione]].
![[Pasted image 20260402154800.png|center|300]]
Il circuito lineare può essere rappresentato come 
![[Gemini_Generated_Image_b4k3s1b4k3s1b4k3 1.png|center|300]]
Applichiamo il [[#Principio di sovrapposizione degli effetti (PSE)|PSE]] (per cui necessitiamo di linearità) alla parte interna del circuito (da sostituire)
$$
v_{AB} = \sum_{i} A_i V_i + \sum_{j} B_jI_j + C i = v_{AB}^{int} + v_{AB}^{ext}
$$
$\sum_{i} A_iV_i$ e $\sum_{j}B_jV_j$ rappresentano la tensione ai morsetti generata esclusivamente da ciò che sta all'interno del circuito, mentre $Ci$ rappresenta la tensione generata dal generatore esterno.
- Spegnendo il generatore esterno la tensione ai morsetti dipende solo dalla parte interna del circuito, otteniamo la tensione a vuoto:
$$
v_{AB} = \sum_{i} A_i V_i + \sum_{j} B_j I_j = V_{Th}
$$
- Spegnendo invece i generatori interni rimane solo$$v_{AB} = Ci = R_{Th} i$$ con $C$ calcolato come la resistenza vista tra i due terminali
Tornando quindi alla formulazione completa
$$
v_{AB} = v_{AB}^{int} + v_{AB}^{ext} = V_{Th} + R_{Th} i
$$
## Teorema di Norton
>[!info] Teorema di Norton
>Il teorema di Norton afferma che un circuito lineare o una porzione di circuito accessibile da due terminali $a$ e $b$, può essere sostituito con un circuito equivalente formato da un generatore di corrente $I_N$ in parallelo a un resistore $R_N$, in cui la corrente $I_N$ è la corrente di corto circuito tra i terminali $a$ e $b$ e $R_N$ è la resistenza equivalente vista ai capi degli stesso terminali, quando i generatori indipendenti sono spenti.

- $I_N$ coincide con la corrente di corto circuito $i_{cc}$
- $R_N$ coincide con la resistenza di Thevenin $R_N = R_{Th}$

#dimostrazione 
La dimostrazione è duale a quella del teorema di Thevenin.
![[Pasted image 20260402154223.png|center|300]]
Rappresentiamo il carico come un generatore questa volta di tensione
![[Pasted image 20260402173418.png|center|300]]
Il circuito lineare può essere rappresentato come
![[Pasted image 20260402173541.png|center|300]]
Applichiamo quindi il PSE:
$$
i_{AB} = \sum_{i} a_i V_i + \sum_{j} b_j I_j + C_v = i_{AB}^{int} + i_{AB}^{ext}
$$
con $V_i$ e $I_j$ i generatori indipendenti di tensione e corrente interni al circuito.
- L’effetto dei generatori indipendenti interni alla rete coincide con la corrente di corto circuito a meno del verso (v=0 → porta ab in c.c.)$$i_{AB}^{int} = \sum_{i} a_i V_i + \sum_{j} b_j I_j = \left. i_{AB} \right|_{v=0} = -i_{cc} = -I_N$$pertanto coincide con la corrente di Norton.
- L'effetto dei generatori esterni coincide con la corrente generata dal generatore di tensione$$i_{AB}^{ext} = Cv = \left. i_{AB} \right|_{v_j = 0, I_j = 0}$$con $C$ calcolata come la conduttanza tra i due parametri $\frac{1}{R_N}$
 Tornando quindi alla formulazione completa: $$
i_{AB} = i_{AB}^{int} + i_{AB}^{ext} = -I_N + \frac{v_{AB}}{T_N}
$$
>[!question] Osservazione relazione tra Thevenin - Norton
>I teoremi di Thevenin e Norton sostituiscono parte del circuito rispettivamente con un generatore di tensione e un generatore di corrente, utilizzando quindi l'[[#Equivalenza dei generatori reali]] possiamo intercambiare i due teoremi, anche in quanto l'equazione di porta viene rispettata.
## Teorema di Millman
>[!info] Teorema di Millman
>Il teorema di Millman afferma che la tensione $V_{0}$ ai capi di un parallelo di:
>- generatori di tensione $V_{Ai}$ con in serie resistenze $R_{Ai}$,
>- generatori di corrente $I_{Bj}$ con eventualmente in serie resistenze $R_{Bj}$,
>- resistenze $R_{Ck}$,
>
>è data dal prodotto di una corrente Io per una resistenza $R_{0}$, $V_{0}=R_{0}I_{0}$, dove $I_{0}$ è la somma delle correnti $V_{Ai}/R_{Ai}$ e $I_{Bj}$ e $R_{0}$ è il parallelo delle resistenze $R_{Ai}$ e $R_{Ck}$.
>$$V_0 = R_{0}I_{0} = \frac{\sum_{i} \frac{V_{Ai}}{R_{Ai}} + \sum_{j} I_{Bj}}{\sum_{i} \frac{1}{R_{Ai}} + \sum_{k} \frac{1}{R_{Ck}}}$$

![[Pasted image 20260402202324.png]]
- $N_V$ numero di generatori di tensione
- $N_I$ numero di generatori di corrente
- $N_R$ numero di resistenze

#dimostrazione 1
Attraverso il bilancio delle correnti.
Ponendo la terra sul nodo $B$ ($e_B = 0$) e applichiamo [[#Legge di Kirchoff delle correnti (KCL)|KCL]] sul nodo $A$
- considerando le singole coppie generatore di tensione - resistenza per la legge di Ohm la corrente uscente è $\frac{e_A-V_{Ai}}{R_{Ai}}$
- considerando le singole coppie generatore di corrente - resistenza, la corrente è dettata dal generatore, a cui però va invertito il segno $-I_{Bj}$
- nei rami puramente resistivi la corrente $\frac{e_A-0}{R_{Ck}}=\frac{e_A}{R_{Ck}}$
$$
\displaylines{
\therefore \frac{e_A - V_{A1}}{R_{A1}} + \dots + \frac{e_A - V_{Ai}}{R_{Ai}} + \dots + \frac{e_A - V_{AN_V}}{R_{AN_V}} +\\+ (-I_{B1}) + \dots + (-I_{Bj}) + \dots + (-I_{BN_I}) +\\+ \frac{e_A}{R_{C1}} + \dots + \frac{e_A}{R_{Ck}} + \frac{e_A}{R_{CN_R}} = 0 }
$$
riscriviamo i termini tramite sommatoria
$$
\sum_{i=1}^{N_V} \frac{e_A - V_{Ai}}{R_{Ai}} - \sum_{j=1}^{N_I} I_{Bj} + \sum_{k=1}^{N_R} \frac{e_A}{R_{Ck}}=0
$$
dividiamo la prima sommatoria per i due termini $e_A$ e $V_{Ai}$, raccogliamo $e_A$ e spostiamo i termini negativi
$$
e_A\left( \sum_{i=1}^{N_V} \frac{1}{R_{Ai}} + \sum_{i=1}^{N_R} \frac{1}{R_{Ck}} \right) = \left( \sum_{i=1} \frac{V_{Ai}}{R_{Ai}} + \sum_{j=1}^{N_I} I_{Bj} \right)
$$
possiamo quindi concludere che
$$
V_{0} = R_{0}I_{0} = e_A = \frac{\sum_{i=1} \frac{V_{Ai}}{R_{Ai}} + \sum_{j=1}^{N_I} I_{Bj}}{\sum_{i=1}^{N_V} \frac{1}{R_{Ai}} + \sum_{i=1}^{N_R} \frac{1}{R_{Ck}}}
$$
#dimostrazione 2
Sfruttando l'equivalenza tra generatore reale di tensione e generatore reale di corrente.
1. trasformiamo i generatori reali di tensione in generatori reali di corrente
2. eliminiamo le resistenze $R_{Bj}$ in serie ai generatori di corrente $I_{bj}$ (teorema della sostituzione)
# Metodi di analisi
Dato un circuito di $R$ rami e $N$ nodi, il suo comportamento è completamente determinato una volta note tutte le $2R$ grandezze elettriche $2R$: $R$ tensioni e $R$ correnti di ramo.
Garantendo la linearità tra le equazioni possono essere semplificate :
- Utilizzando le relazioni costitutive che legano tensioni e correnti su ogni ramo sono sufficienti $R$ equazioni per descrivere un sistema.
- Essendo alcune di esse comuni possiamo semplificare ulteriormente il numero di equazioni utilizzando [[#Legge di Kirchoff delle tensioni (KVL)|KVL]] e [[#Legge di Kirchoff delle correnti (KCL)|KCL]]
>[!important] Metodi di analisi
>I metodi di analisi sono algoritmi che ci permettono di ridurre la complessità dei sistemi risolutivi, individuando il numero minimo di equazioni necessarie.

In presenza di elementi con memoria (capacità, induttori, detti anche elementi reattivi), le relazioni tra tensione e corrente sono in generale descritte da relazioni integro-differenziali e i sistemi risolutivi saranno sistemi di equazioni integro-differenziali e quindi riconducibili a un sistema di equazioni differenziali.
La soluzione di questi sistemi nel caso più generale (elementi con memoria con eccitazioni arbitrarie) richiede strumenti matematici avanzati quali la trasformata di Laplace.
In alcuni casi, come per lo studio dei circuiti a regime sinusoidale in cui tutte le eccitazioni sono sinusoidali, i sistemi possono essere ricondotti a sistemi algebrici con coefficienti in
generale rappresentati da numeri complessi ([[#metodo dei fasori]]).

Per risolvere un circuito posso quindi scrivere equazioni dalle [[#Topologia dei circuiti|relazioni topologiche]]: una KVL per ogni maglia o una KCL per ogni ramo.
Tramite scrittura matriciale possiamo poi individuare le $R$ equazioni linearmente indipendenti che caratterizzano il sistema.
## Metodo dei nodi
**1° equazione**
Le KCL su ogni nodo possono essere scritte in forma [[2. I vettori (algebra)#Prodotto tra matrice e vettore|matriciale]]:
Cerchiamo un insieme di KCL indipendenti riportando in una **matrice d'incidenza** $\hat{A}$ le KCL su tutti i nodi
$$
A_{ij} = \left\{\begin{array}{l}
+1 \text{ se il ramo }j\text{ esce dal nodo }i \\
-1 \text{ se il ramo }j\text{ esce dal nodo }i \\
0 \text{  se il ramo }j\text{ non è connesso al nodo }i
\end{array}\right.
$$
Sommando tutte le righe dobbiamo ottenere $0$.
*es.*
![[Elettrotecnica-1775921393150.webp|center|300]]

$$\displaylines{N\text{ nodi}\left\{ \begin{array}{c} A\\ B\\ C\\ D\\ E\\ F \end{array} \right.\overbrace{\left[\begin{array}{ccccccccc} -1&+1&+1&0&0&0&0&0&0 \\ 0&-1&0&+1&+1&0&0&0&0 \\ 0&0&-1&0&-1&+1&0&0&0 \\ +1&0&0&0&0&0&0&-1&-1 \\ 0&0&0&-1&0&0&-1&0&+1 \\ 0&0&0&0&0&-1&+1&+1&0 \end{array}\right]}^{R \text{ rami}}\overbrace{\left[\begin{array}{c}i_{1}\\ i_{2}\\ i_{3}\\ i_{4}\\ i_{5}\\ i_{6}\\ i_{7}\\ i_{8}\\ i_{9}\end{array}\right]}^{\vec{i}} = \left[\begin{array}{c}0\\ 0\\ 0\\ 0\\ 0\\ 0\end{array}\right] \\ \hat{A} \vec{i} = \vec{0}}$$

Possiamo quindi utilizzare questa relazione per ottenere un insieme di $N-1$ equazioni indipendenti, la cui somma darà come risultato la KCL sul nodo che abbiamo lasciato fuori (nodo di riferimento). Questo varrà per qualsiasi nodo di riferimento.
>[!important] scelto un nodo di riferimento, tutte le KCL possono essere espresse come combinazione delle KCL degli altri nodi.

![[Elettrotecnica-1775920772647.webp|center|200]]

>[!question] Per i rami resistivi utilizzo le relazioni costitutive per scrivere la corrente come differenza di potenziale divisa per la resistenza

**2° equazione**
Una volta preso un nodo come riferimento (con potenziale a 0) possiamo definire tutti gli altri potenziali nodali come $N-1$ incognite. Le KCL dei nodi, tramite relazioni costitutive scritte sotto forma di tensioni e resistenze, ci permettono di calcolare le tensioni rimanenti.
Data la corrente su un nodo $i_{jk}=(e_j-e_k)G_{jk}$.
Notiamo come ogni ramo ha la sua differenza di potenziale che può essere descritta in forma matriciale dal prodotto tra una matrice $\hat{B}$ e il vettore dei potenziali:
$$
\displaylines{R \text{ rami }\left\{\left[\begin{array}{c}
v_{1}\\ v_{2}\\ v_{3}\\ v_{4}\\ v_{5}\\ v_{6}\\ v_{7}\\ v_{8}\\ v_{9}
\end{array}\right]\right. = 
\overbrace{
\begin{array}{c}
e_A \hspace{2.5ex} e_B \hspace{2.5ex} e_C \hspace{2.5ex} e_D \hspace{2.5ex} e_E \hspace{2.5ex} e_F
\\
\left[\begin{array}{cccccc}
-1&0&0&+1&0&0 \\
+1&-1&0&0&0&0 \\
+1&0&-1&0&0&0 \\
0&+1&0&0&-1&0 \\
0&+1&-1&0&0&0 \\
0&0&+1&0&0&-1 \\
0&0&0&0&-1&+1 \\
0&0&0&-1&0&+1 \\
0&0&0&-1&+1&0
\end{array}\right]
\end{array}
}^{N \text{ nodi}} 
\left[\begin{array}{c}
e_A \\ e_B \\ e_C \\ e_D \\ e_E \\ e_F
\end{array}\right] \\ 
\vec{v} = \hat{B} \cdot \vec{e}
}
$$
Notiamo come la matrice $B$ sia la trasposta di $A$
$$
\hat{B} = \hat{A}^T
$$
>[!question] I generatori di tensione riducono il numero di tensioni incognite

**Unione**
Dividiamo quindi le correnti dei generatori (note) dai rami resistivi (la cui corrente dipende dalla tensione) a partire dalla 1° equazione$$\displaylines{\hat{A} \vec{i} = \vec{0} \implies \hat{A} (i_R + i_g) = \vec{0} \implies \hat{A} i_R = -\hat{A}i_g}$$
>[!multi-column]
>
>>[!blank]
>>Chiameremo $-\hat{A} i_g=I$, le correnti note.
>
>>[!blank]
>Riscriviamo invece le correnti resistive utilizzando la [[#Relazione costitutiva (resistore)|legge di Ohm]] $i = G \cdot v$$$i_R = \hat{G}_O \cdot \vec{v}$$

$$
\therefore \hat{A} (\hat{G} \cdot \vec{v}) = I
$$
Utilizziamo quindi la 2° equazione per riscrivere $\vec{v}$
$$
\hat{A} \cdot \hat{G}_O \cdot \hat{B} \cdot \vec{e} = I
$$
Chiameremo $\hat{G}$ la matrice composta da $\hat{A} \cdot \hat{G}_O \cdot \hat{B}$
$$
\hat{G} \cdot \vec{e} = I
$$

>[!quote] All'esame ci saranno al massimo matrici 2x2
>"se viene fuori un 3x3 state a sbaglià"

>[!quote] Devono capitare nella diagonale tutte le conduttanze almeno una volta

### Metodo dei nodi con generatori di tensione
Il generatore di tensione $V_g$ vincola la differenza di potenziale tra due nodi $\implies V_g=(e_j-e_k) \implies$ riduce il numero di potenziali incogniti: $e_j= V_g+e_k$
Riduce quindi il numero di KCL da scrivere a $N-1-N_{V_g}$, ma comunque le correnti dei rami dei generatori sono incognite e vanno trovate, quindi il numero di equazioni necessarie a risolvere il circuito rimane $N-1$.
>[!quote] Se è presente un solo generatore di tensione, scelgo come nodo di riferimento quello del generatore o, se ce ne sono di più, scelgo quello con più generatori
## Metodo degli anelli
**1° equazione**
Come per il metodo dei nodi cerchiamo un insieme di [[#Legge di Kirchoff delle tensioni (KVL)|KVL]] indipendenti, riportando in una matrice $\hat{L}$ le KVL di tutti gli anelli:
$$
L_{i,j} = \left\{\begin{array}{l}+1 \text{ se il ramo }j \text{ è nell'anello }i \text{ e ha lo stesso verso} \\ -1 \text{ se il ramo }j \text{ è nell'anello }i \text{ e ha verso opposto}\\0 \text{ se il ramo }j \text{ non appartiene all'anello }i\end{array}\right.
$$
*es.*
![[Elettrotecnica-1776526216899.webp|center|300]]
$$
\displaylines{R-N+1\left\{ \begin{array}{c} a \\ b \\ c \\ d \end{array} \right.\overbrace{\left[\begin{array}{ccccccccc}
 +1&+1&0&+1&0&0&0&0&+1 \\
 0&-1&+1&0&-1&0&0&0&0 \\
 0&0&0&-1&+1&+1&+1&0&0 \\
 0&0&0&0&0&0&-1&+1&+1 \\
\end{array}\right]}^{R \text{ rami}}
\overbrace{\left[\begin{array}{c}v_{1}\\ v_{2}\\ v_{3}\\ v_{4}\\ v_{5}\\ v_{6}\\ v_{7}\\ v_{8}\\ v_{9}\end{array}\right]}^{\vec{v}} = 
\left[\begin{array}{c}0\\ 0\\ 0\\ 0\\ 0\\ 0\end{array}\right]
\\
\hat{L} \vec{v} = \vec{0}}
$$
Scrivendo la somma di tutte le righe della matrice otteniamo la KVL della maglia esterna del circuito:
$$
\Gamma_{ext} = \sum_{j \text{ anelli}} \Gamma_j
$$
>[!question] Osservazione
>le equazioni trovate sono anche un insieme completo: possono essere usate per trovare la KVL di tutte le altre maglie del circuito

**2° equazione**
Introduciamo delle correnti di anello fittizie, supponendo che esse scorrano all'interno del rispettivo anello: le correnti di ramo saranno descritte dalla somma delle correnti di anello che scorrono in quel ramo.
Scriviamo in forma matriciale il vettore delle correnti di ramo $\vec{i}$ come una matrice $\hat{M}$ per il vettore delle correnti di anello fittizie $\vec{I}_a$
$$
\displaylines{R \text{ rami }\left\{\left[\begin{array}{c}
i_{1}\\ i_{2}\\ i_{3}\\ i_{4}\\ i_{5}\\ i_{6}\\ i_{7}\\ i_{8}\\ i_{9}
\end{array}\right]\right. =
\begin{array}{c}
i_a \hspace{3.5ex} i_b \hspace{3.5ex} i_c \hspace{3.5ex} i_d
\\
\left[\begin{array}{cccccc}
+1&0&0&0 \\
+1&-1&0&0 \\
0&+1&0&0 \\
+1&0&-1&0 \\
0&-1&+1&0 \\
0&0&+1&0 \\
0&0&+1&-1 \\
0&0&0&+1 \\
+1&0&0&-1
\end{array}\right]
\end{array} 
\left[\begin{array}{c}
i_a \\ i_b \\ i_c \\ i_d
\end{array}\right] \\ 
\vec{i} = \hat{M} \cdot \vec{I}_a
}
$$
Notiamo come $\hat{M}$ sia la trasposta di $\hat{L}$
$$
\hat{M} = \hat{L}^T
$$
**Unione**
Dividiamo quindi le tensioni dei generatori (note) dai rami resistivi (la cui tensione dipende dalla corrente) a partire dalla 1° equazione:
$$
\hat{L} \vec{v} = \vec{0} \implies \hat{L}(v_R + v_g) = \vec{0} \implies \hat{L} v_R = - \hat{L} v_g
$$
>[!multi-column]
>
>>[!blank]
>>Chiameremo $-\hat{L} v_g=\hat{V}$, le tensioni note.
>
>>[!blank]
>Riscriviamo invece le tensioni resistive utilizzando la [[#Relazione costitutiva (resistore)|legge di Ohm]] $v = R \cdot i$$$v_R = \hat{R}_O \cdot \vec{i}$$

$$
\therefore \hat{L}(\hat{R}_O\cdot \vec{i}) =\hat{V}
$$
utilizziamo quindi la 2° equazione per riscrivere $\vec{i}$
$$
\hat{L} \cdot \hat{R}_O \cdot \hat{M} \cdot \vec{I}_a = \hat{V}
$$
Chiameremo $\hat{R}$ la matrice composta da $\hat{L} \cdot \hat{R}_O \cdot \hat{M}$
$$
\hat{R} \cdot \vec{I}_a = \hat{V}
$$
>[!question] Osservazione
>Il metodo degli anelli si applica solo a circuiti planari

>[!question] Osservazione
>Tramite l'equivalenza tra generatori si può dimostrare il metodo degli anelli a partire dal metodo dei nodi e viceversa
### Metodo degli anelli con generatori di corrente
Il generatore di corrente $I_g$ vincola la corrente
Riduce il numero di KVL da scrivere a $R-N+1-N_{I_g}$

>[!quote] Se è presente un solo generatore di corrente, scelgo come nodo di riferimento quello del generatore o, se ce ne sono di più, scelgo quello con più generatori

## Applicazione del PSE
I metodi di analisi per circuiti resistivi scritti in forma matriciale sono:

1. **metodo dei nodi**
$$
\left[G_{jk}\right] \left[\begin{array}{c}e_{1} \\ e_{2} \\ \vdots \\ e_k\end{array}\right] = \underbrace{\left[\begin{array}{c}\sum_e \gamma_e V_{ge} + \sum_m \delta_m I_{gm} \\ \vdots \\ \vdots
\end{array}\right]}_{\begin{array}{c}
\text{vettore dei termini noti} \\ \text{contributo dei generatori}
\end{array}}
$$
2. **metodo degli anelli**
$$
\left[R_{jk}\right] \left[\begin{array}{c}i_{1} \\ i_{2} \\ \vdots \\ i_k\end{array}\right] = \underbrace{\left[\begin{array}{c}\sum_e \alpha_e V_{ge} + \sum_m \beta_m I_{gm} \\ \vdots \\ \vdots
\end{array}\right]}_{\begin{array}{c}
\text{vettore dei termini noti} \\ \text{contributo dei generatori}
\end{array}}
$$

$\therefore$ le grandezze incognite (corrente nodale / potenziale nodale) sono combinazione lineare del contributo dei generatori.
$\implies$ accendendo un generatore $e$ o $m$, sommando i risultati parziali otteniamo i valori.
## Teorema di Tellegen
In qualsiasi istante di tempo $t$ il **bilancio energetico** può essere espresso come
$$
\sum_{k=1}^R p_k(t) = \sum_{k=1}^R v_k(t) \cdot i_k(t) = 0
$$
dove $R$ numero di rami, $v_k$ tensione nel ramo $k$ e $i_k$ corrente nel ramo $k$.
In forma vettoriale otteniamo
$$
\sum_{k=1}^R v_k(t) \cdot i_k(t) = \underbrace{\vec{V} \cdot \vec{I}}_{\begin{array}{c}\text{prodotto} \\ \text{vettoriale}\end{array}} = \vec{V}^T \vec{I}
$$
con
$$
\vec{V} = \left[\begin{array}{c}v_{1}(t) \\ v_{2}(t) \\ \vdots \\ v_k(t)\end{array}\right] \hspace{8ex} \vec{I} = \left[\begin{array}{c}i_{1}(t) \\ i_{2}(t) \\ \vdots \\ i_k(t)\end{array}\right] 
$$

>[!important] Nella teoria dei circuiti ci permette di:
>- dimostrare la conservazione della potenza istantanea a partire da considerazioni topologiche
>- permette di effettuare analisi di sensibilità degli elementi circuitali tramite potenze virtuali

#dimostrazione 1
Scriviamo in forma matriciale le leggi di [[#Leggi di Kirchoff|Kirchoff]]
- **KCL**: $\hat{A} \vec{I} = \vec{0}$   dove $\hat{A}$ matrice di incidenza e $\vec{0}$, $\vec{I}$ vettori $[N\times1]$
- **KVL**: $\vec{V} = \hat{B} \vec{e} = \hat{A}^T \vec{e}$
Sostituendo questi elementi nella formula del bilancio energetico otteniamo
$$
\sum_{k=1}^R v_k(t) \cdot i_k(t) = \vec{V}^T \vec{I} = (\hat{A}^T \vec{e})^T \vec{I} = \vec{e}^T(\hat{A}\vec{I}) = \vec{e} \vec{0} = \vec{0}
$$
>[!question] Osservazione
>La conservazione delle potenze è assicurata dalla **matrice di incidenza** che rappresenta la topologia del circuito: **non** esiste ipotesi su tipi di componenti o eccitazioni del sistema

$\therefore$ circuito con diversi componenti ma con uguale topologia hanno uguale matrice di incidenza $\hat{A}$ 

#dimostrazione 2
considerando due circuiti $a$ e $b$
![[Elettrotecnica-1779038951934.webp|center|500]]
1. calcolando la potenza e scambiando i componenti dei circuiti si ha:
- **potenza virtuale**: $p_v = <\vec{v}_a^T(t),\vec{i}_b(t)> = <\vec{v}_b^T(t), \vec{i}_a(t)>$
2. possiamo verificare che le potenze per il principio di conservazione:
   $$\begin{array}{c}\vec{V}_a^T \vec{I}_b = \vec{0} = \vec{e}_a^T \hat{A} \vec{I}_b \\ \vec{V}_b^T \vec{I}_a = \vec{0} = \vec{e}_b^T \hat{A} \vec{I}_a\end{array}$$
   si basano entrambi sulla stessa matrice di incidenza $\hat{A} \implies$ anche la potenza virtuale si conserva
# Regime sinusoidale
>[!important] Una sinusoide è un segnale periodico elementare: $\sin(\cdot)$ o $\cos(\cdot)$
>$\therefore$ una corrente sinusoidale o alternata è una corrente descritta da un segnale periodico elementare

>[!question] Osservazione
>Analizziamo segnali ondosi in quanto in corrente continua tensione e corrente sono costanti, ma introducendo induttori e condensatori, che contengono le derivate di queste grandezze collasserebbero a $0$
>$\therefore$ in corrente alternata (AC) corrente e tensione sono funzioni del tempo $\frac{di,v}{st} \neq 0$
## Analisi di Fourier
Ogni variabile nel tempo è riconducibile a **somme di sinusoidali**.
Quindi ogni segnale può essere studiato:
- segnali periodici $\to$ serie di Fourier
- segnali non periodici $\to$ trasformata di Fourier

Nel passaggio dal dominio del tempo al dominio della frequenza l'operatore di Fourier ci permette di capire come si comporta il segnale.

Nella serie di Fourier ogni linea è un'onda elementare: sommandole riotteniamo il segnale originale.

Nello studio del circuito possiamo analizzare due fasi:
1. **Fase transitoria**
   considera l'assestamento all'accensione (caricamento lastre del condensatore)
   $\to$ il sistema è instabile per cui si usa la [[Trasformate#Trasformate di Laplace|trasformata di Laplace]]
2. **Fase di regime**
   al termine del transitorio il circuito è stabile e otteniamo oscillazioni costanti
## Segnali sinusoidali
Esprimeremo le grandezze fondamentali tensione e corrente in funzione del tempo:
$$
v(t) = V_m \cdot \cos (\omega t + \varphi) = V_m \cdot \sin\left( \omega t + \varphi - \frac{\pi}{2} \right)
$$
- $V_m$ **ampiezza**
- $\omega$ **pulsazione**
- $\varphi$ **sfasamento**

>[!quote] In elettrotecnica tendiamo a mantenere i segnali sottoforma di $\cos()$
>nei complessi il coseno è associato alla parte reale del segnale ondoso (usiamo segnali reali nella vita reale)

Definiamo inoltre:
- **periodo**
  tempo per compiere un ciclo $T = \frac{1}{f}$
- **frequenza**
  cicli compiuti per unità di tempo $f = \frac{\omega}{2 \pi}$

>[!important] Dato il segnale creato da un generatore con una determinata frequenza, tensioni e correnti sul circuito avranno uguale frequenza.

Introduciamo quindi l'uso dei **fasori** per semplificare lo studio di circuiti lineari.
## Fasori
>[!important] Un fasore è un numero complesso descritto da **ampiezza** e **fase**
>$$\displaylines{\overline{V} = V e^{j \varphi} \\ \overline{I} = I e^{j \varphi}}$$
>rappresentiamo in questo modo $v(t)$ alla pulsazione $\omega$, eliminando la dipendenza da $t$

Per ricavare il fasore partiamo dalla [[numeri complessi (automatica)#Formula di Eulero|formula di Eulero]]
$$
e^{\pm j \varphi} = \cos(\varphi) \pm j \sin(\varphi)
$$
Scriviamo la tensione/corrente nella sua forma sinusoidale
$$
v(t) = V_m \cos(\omega t + \varphi) = V_m \mathrm{Re}\left\{e^{j(\omega t + \varphi)}\right\} = \mathrm{Re} \{ \underbrace{V_m e^{j \varphi}}_{\overline{V}} \cdot e^{j \omega t}\}
$$
quindi sia $v(t) = V_m \cos(\omega t + \varphi)\implies$ il fasore $\in \mathbb{C}$ associato è:
$$
\overline{V} = V_m e^{j \varphi}
$$
con $|\overline{V}| = V_m$ e $\angle\overline{V} = \varphi$
### Proprietà dei fasori
#### Linearità
I fasori sono degli operatori lineari per cui vale la linearità:
dati
$$
\displaylines{
v_{1}(t) = V_{m 1} \cos(\omega t + \varphi_1) \to \overline{V}_1 = V_{m 1} e^{j \varphi_1} \\
v_2(t) = V_{m_{2}} \cos(\omega t + \varphi_2) \to \overline{V}_2 = V_{m 2} e^{j \varphi_2}
}
$$
avremo che
$$
v(t) = a_{1} \cdot v_{1}(t) + a_{2} \cdot v_2(t) \to \overline{V} = a_{1} \cdot \overline{V}_1 + a_{2} \cdot \overline{V}_2
$$
#dimostrazione 
$$
\begin{align*}
v(t) & = a_{1} \cdot v_{1}(t) + a_{2} \cdot v_{2}(t) = \\
& = a_{1} \cdot V_{m_{1}} \cos (\omega t + \varphi_{1}) + a_{2} \cdot V_{m_{2}} \cos(\omega t + \varphi_{2}) \\
& = \mathrm{Re}\{a_{1} V_{m_{1}} e^{j \varphi_{1}} \cdot e^{j \omega t}\} + \mathrm{Re} \{a_{2} V_{m_{2}} e^{j \varphi_2} \cdot e^{j \omega t}\} = \\
& = \mathrm{Re}\{(a_{1} V_{m_{1}}e^{j \varphi_1}+ a_{2} V_{m_{2}}e^{j \varphi_2})e^{j \omega t}\} = \\
&= \mathrm{Re}\{(\underbrace{ a_{1}\overline{V}_1 + a_{2} \overline{V}_2}_{\overline{V}})e^{j \omega t}\}
\end{align*}
$$
#### Derivazione
data
$$
v(t) = V_m \cos(\omega t + \varphi)  \to \overline{V} = V_m e^{j \varphi}
$$
$$
v_{1}(t) = \frac{dv(t)}{dt}\to \overline{V}_1= j \omega \overline{V}
$$
#### Integrazione
data
$$
v(t) = V_m \cos(\omega t + \varphi)  \to \overline{V} = V_m e^{j \varphi}
$$
$$
v_{1}(t) = \int v(t) dt \to \overline{V}_1 = \frac{\overline{V}}{j \omega}
$$
## Grandezze nel dominio dei fasori
### Impedenza
>[!important] Impedenza
>$$\overline{Z} = \frac{\overline{V}}{\overline{I}} = R+jX \quad [\Omega]$$

dove
- $R = \mathrm{Re}\{\overline{Z}\}$ **resistenza**
- $X = \mathrm{Im}\{\overline{Z}\}$ **reattanza**
- $|\overline{Z}| = \sqrt{ R^2 + X^2 }$
- $\angle \overline{Z} = \arctan\left( \frac{X}{R} \right)$
### Ammettenza
>[!important] Ammettenza
>È il reciproco dell'impedenza
>$$\overline{Y} = \frac{\overline{I}}{\overline{V}} = G+jB \quad [S]$$

dove
- $G = \mathrm{Re}\{\overline{Y}\}$ **conduttanza**
- $B = \mathrm{Im}\{\overline{Y}\}$ **suscettanza**
- $|\overline{Y}| = \sqrt{ G^2 + B^2 }$
- $\angle \overline{Y} = \arctan\left( \frac{B}{G} \right) = - \angle \overline{Z}$
## Componenti nel dominio dei fasori
![[Elettrotecnica-1777573944017.webp]]
### Legge di Ohm generalizzata
Per ogni componente possiamo considerare un resistore astratto per cui vale, rispetto alla propria impedenza:
$$
\overline{V} = Z \cdot \overline{I}
$$
dove $Z = Z_R + Z_C + Z_L$
>[!question] Osservazione
>Se ho circuiti dove i generatori emanano segnali con frequenze diverse risolvo le singole risposte e poi le sommo per linearità.
## Potenza in regime sinusoidale
>[!important] Potenza istantanea
>Anche nel regime sinusoidale la potenza istantanea è calcolabile come il prodotto tra tensione e corrente
>$$\displaylines{ v(t) = V_m \cos(\omega t + \varphi_v) \\ i(t) = I_m \cos(\omega t + \varphi_i)\\ p(t) = v(t) \cdot i(t) = V_m I_m \cos(\omega t + \varphi_v) \cos(\omega t + \varphi_i) }$$
>La potenza nel dominio del tempo:
> 1. al variare dello sfasamento tra tensione e corrente la potenza viene traslata
> 2. $\varphi_{I/V}$ è dato dalla natura del carico ed è compreso tra $-90°$ e $90°$, se fossero uguali avremmo il quadrato del $\cos(\cdot)$.
### Derivazione analitica
Date $v(t)$ e $i(t)$ possiamo calcolare la potenza istantanea a partire dalla formula:
$$
p(t) = v(t) \cdot i(t) = V_m I_m \cos(\overbrace{\omega t + \varphi_v}^{\alpha}) \cos(\overbrace{\omega t + \varphi_i}^{\beta})
$$
dalla formula
$$
\cos(\alpha) \cos(\beta) = \frac{\cos(\alpha - \beta)}{2} + \frac{\cos(\alpha + \beta)}{2}
$$
possiamo riscrivere $p(t)$ come
$$
\begin{align*}
p(t) &= \frac{V_mI_m}{2} \cos(\omega t + \varphi_v - \omega t - \varphi_i) + \frac{V_mI_m}{2} \cos( \omega t + \varphi_v + \omega t + \varphi_i) \\
& = \underbrace{\frac{V_mI_m}{2} \cos(\varphi_v - \varphi_i)}_{\begin{array}{c}
\text{non dipende dal tempo} \\ \text{ma solo dal carico}
\end{array}} + \frac{V_mI_m}{2} \underbrace{\cos(2 \omega t + \varphi_v+\varphi_i)}_{\begin{array}{c}
\text{raddoppia la pulsazione} \\ \text{e dipende dal tempo}
\end{array}}
\end{align*}
$$
chiamiamo **sfasamento** $\Phi = \varphi_v - \varphi_i$
e $\cos(\Phi)$ **fattore di potenza** (p.f.)

Analizziamo i due fattori separatamente
#### Potenza attiva
$$
\displaylines{
\underbrace{\frac{V_mI_m}{2} \cos(\Phi)}_{\begin{array}{c}
\text{potenza attiva} \\ \text{o potenza media} [W]
\end{array}} + \frac{V_mI_m}{2} \cos(2 \omega t + \varphi_v + \varphi_i)
}
$$
analizziamo il primo termine
>[!question] Potenza media
>per il teorema della media teorema della media integrale
>$$\hat{p}(t) =\lim_{ t_0 \to 0 }  \frac{1}{T-t_{0}} \int_{t_{0}}^{T} p(\tau) \cdot d\tau$$
>lo applichiamo a tutta la funzione
>$$\hat{p}(t) =\frac{1}{T} \left|\frac{V_mI_m}{2}\cos(\Phi) \cdot \tau\right|_{t_0=0}^T + \frac{1}{T} \int_{t_{0}}^T \frac{V_mI_m}{2} \cos(2 \omega t + \varphi_v + \varphi_i)$$
>Risolvendo il primo termine (sostituendo $T$ a $\tau$) otteniamo esattamente $\frac{V_mI_m}{2}\cos(\Phi)$.
>La funzione sinusoidale è simmetrica, quindi il suo integrale si annulla.
>Condensatore e induttore si caricano e si scaricano, quindi in un ciclo completo non possiamo notare il loro andamento solo dalla potenza media.

Definiamo quindi:
- **potenza apparente**
  $\frac{V_mI_m}{2} [V \cdot A]$
- **potenza attiva**
  $P_{app}\cdot \cos(\Phi)$

La **potenza attiva** sui vari componenti è definita come:
>[!multi-column]
>
>>[!important] Resistore
>>$$\displaylines{\Phi=\varphi_v-\varphi_i = 0 \to \cos(\Phi) = 1 \\ \to P_{app}\equiv P_{att}}$$
>
>>[!important] Condensatore
>>$$\displaylines{\Phi=\varphi_v - \varphi_i = -\frac{\pi}{2} \to \cos(\Phi) = 0 \\ \to P_{att} = 0}$$
>
>>[!important] Induttore
>>$$\displaylines{\Phi=\varphi_v - \varphi_i = \frac{\pi}{2} \to \cos(\Phi) = 0 \\ \to P_{att} = 0}$$

>[!question] Osservazione
>La potenza attiva è massima in reti resistive, mentre in presenza di soli condensatori e induttori è pari a $0$: in un ciclo completo la potenza è nulla, ma cambia durante il ciclo.

#### Potenza reattiva
$$
\displaylines{
\frac{V_mI_m}{2} \cos(\Phi) + \frac{V_mI_m}{2} \cos(2 \omega t + \varphi_v + \varphi_i)
}
$$
analizzando il secondo termine
partiamo dall'argomento del coseno:
$$
2 \omega t + \varphi_v + \varphi_i
$$
aggiungiamo e sottraiamo $\varphi_i$ ottenendo quindi
$$
2 \omega t + 2\varphi_i + \varphi_v - \varphi_i
$$
tornando al secondo termine completo
$$
\frac{V_mI_m}{2} \cos(\underbrace{2 \omega t + 2\varphi_i}_{\alpha} + \underbrace{\varphi_v- \varphi_i}_{\beta})
$$
ricordando $\cos(\alpha + \beta) = \cos(\alpha) \cos(\beta)-\sin(\alpha)\sin(\beta)$
$$
\frac{V_mI_m}{2} \left(\cos(2 \omega t + 2 \varphi_i) \cos(\varphi_v-\varphi_i) - \sin(2 \omega t +2\varphi_i) \sin(\varphi_v-\varphi_i)\right)
$$
analizzando separatamente la componente seno
$$
\frac{V_mI_m}{2} \sin(2 \omega t +\varphi_i) \sin(\varphi_v-\varphi_i) = \frac{V_mI_m}{2}  \sin(\Phi) = P_{\text{reattiva}} [\text{VAR}]
$$
Definiamo la **potenza reattiva** che nei vari componenti:
>[!multi-column]
>
>>[!important] Resistore
>>$$\sin(0) = 0 \implies P_{\text{reatt}} = 0$$
>
>>[!important] Condensatore
>>$$\sin\left( -\frac{\pi}{2} \right) \implies P_{\text{reatt}} < 0$$
>
>>[!important] Induttore
>>$$\sin\left( \frac{\pi}{2} \right) \implies P_{\text{reattiva}} >0$$

in carichi puramente induttivi o capacitiva abbiamo solo potenza reattiva

---
Tornando quindi alla formula completa della potenza:
$$
\begin{align*}
p(t) &= \frac{V_mI_m}{2} \cos(\Phi) + \frac{V_mI_m}{2} \cos(2 \omega t + \varphi_v + \varphi_i) \\
&= P_{app}\cos(\Phi) + P_{app} \cos(2 \omega t + \varphi_v + \varphi_i) \\
&= P_{att} + P_{app}\cos(2\omega t + \varphi_v + \varphi_i)
\end{align*}
$$
>[!important] la potenza attiva trasla in alto o in basso la sinusoide della potenza di un valore costante, su tutto il dominio (non dipende da $t$).

---
**Per riassumere**
$$
\begin{array}{c|c|c}
 & P_{\text{att}} & P_{\text{reatt}} \\
\hline -\backslash/\backslash/- & \text{Tutta} & 0 \\
-|\hspace{1ex}|- & 0 & <0 \quad -j Q\\
-\ell\ell\ell- & 0 & >0 \quad +j Q
\end{array}
$$

#### Relazione tra le fasi
partendo dalla legge di Ohm generalizzata
$$
\overline{V} = Z \cdot \overline{I} \implies |V_m| e^{j \varphi_v} = |Z| e^{j \varphi_z} \cdot |I_m|e^{j \varphi_i} 
$$
se due numeri complessi (in questo caso in forma polare) sono uguali lo sono anche le loro fasi
$$
\varphi_v = \varphi_z + \varphi_i
$$
Possiamo notare come la fase dell'induttanza sia pari allo sfasamento:
$$
\Phi = \varphi_z = \varphi_v - \varphi_i
$$
Tornando alla definizione precedente di potenza
$$
\begin{align*}
p(t) & = P_{att} + P_{app}\cos(2\omega t + \varphi_v + \varphi_i) = \\
& = P_{\text{att}} + P_{\text{app}} \cos(2 \omega t + \varphi_v - \varphi_i + 2 \varphi_i) =\\
& = P_{att} + P_{app} \cos(2 \omega t + \varphi_z + 2 \varphi_i)
\end{align*}
$$
>[!important] La fase dell'induttanza trasla lateralmente la sinusoide della potenza nel dominio del tempo

>[!question] Osservazione
>Nel caso di reti resistive l'impedenza è puramente reale, la sua fase è nulla e la differenza di fase tra tensione e corrente è nulla, di conseguenza non abbiamo nessuna traslazione sulla potenza.

![[potenza.gif]]
### Potenza complessa
introducing **Potenza complessa**
$\overline{S}$ di Stefano✨
Definiamo la potenza complessa come
$$
\overline{S} = \frac{1}{2}\overline{V} \overline{I}^*
$$
Ricordando la definizione dei fasori di tensione e corrente
$$
\overline{V} = V_m e^{j \varphi_v} \hspace{10ex} \overline{I} = I^*_m e^{-j \varphi_i}
$$
possiamo calcolare $\overline{S}$
$$
\overline{S} = \frac{1}{2} V_m e^{j \varphi_v} I_m^* e^{-j \varphi_i} = \frac{V_m I_m}{2} e^{j(\varphi_v-\varphi_i)}
$$
Applicando [[numeri complessi (automatica)#Formule di Eulero dirette|Eulero]]
>[!multi-column]
>
>>[!blank]
>>$$ \begin{align*}\overline{S} &= \frac{V_mI_m}{2} \left[\cos(\varphi_v-\varphi_i) + \sin(\varphi_v - \varphi_i)\right] \\ & = \underbrace{\frac{V_mI_m}{2} \cos(\Phi)}_{P_{att}} +j \underbrace{\frac{V_mI_m}{2}\sin(\Phi)}_{P_{reatt}} \\ & = P+jQ \end{align*} $$
>
>>[!blank]
>>![[Elettrotecnica-1778735631403.webp]]


>[!important] Esiste un legame tra potenza complessa, potenza attiva e potenza apparente

Possiamo quindi ricavare anche le seguenti relazioni:
$|\overline{S}| = \frac{V_mI_m}{2} = P_{app}$
$|S| \cos(\Phi) = P_{att} = \mathrm{Re}\{\overline{S}\}$
$\cos(\Phi) = \frac{\mathrm{Re}\{S\}}{|\overline{S}|} = \frac{P_{att}}{P_{app}}$
$P_{\text{reatt}} = \mathrm{Im}\{\overline{S}\}$

>[!important] La potenza attiva nel dominio del tempo è la parte reale della potenza complessa

#### Legame tra potenza complessa e impedenza
Tramite la legge di Ohm generalizzata possiamo calcolare la potenza complessa senza dover calcolare necessariamente il fasore della corrente o il fasore della tensione.

>[!multi-column]
>
>>[!blank]
>>**Potenza in termini di corrente**
>>$$\left\{\begin{array}{l} \overline{S} = \frac{1}{2} \overline{V} \overline{I} ^*  = \frac{1}{2} Z \overline{I} \overline{I}^* = \frac{1}{2} Z |\overline{I}|^2 \\ \overline{V} = Z \overline{I} \end{array}\right. $$
>
>>[!blank]
>>**Potenza in termini di tensione**
>>$$\left\{\begin{array}{l} \overline{S} = \frac{1}{2} \overline{V} \overline{I} ^*  = \frac{1}{2} \overline{V} \overline{V}^* Y^* = \frac{1}{2} Y^* |\overline{V}|^2\\ \overline{V} = Z \overline{I} \implies \overline{I} = \overline{V} \cdot Y \implies I^* = \overline{V}^* \cdot Y^* \end{array}\right. $$

%% un numero complesso moltiplicato per il suo complesso coniugato è pari al quadrata del modulo %%

>[!question] Osservazione
>Dalla natura del componente possiamo sapere a priori la natura della potenza complessa calcolata.
>Sapendo che:
>- $Z_R = R \to \mathrm{Re}(Z_R) >0 \wedge \mathrm{Im}(Z_R) = 0$
>- $Z_C = -j\frac{1}{\omega C} \to \mathrm{Re}(Z_C) = 0 \wedge \mathrm{Im}(Z_C) <0$
>- $Z_L = j \omega L \to \mathrm{Re}(Z_L) = 0 \wedge \mathrm{Im}(Z_L) >0$
>Dalla definizione della potenza complessa data con l'impedenza $\overline{S} = \frac{1}{2} Z |\overline{I}|^2$
>- $\overline{S}_R = \frac{1}{2} R \cdot |\overline{I}|^2 \to \mathrm{Re}(S_R) >0 \wedge \mathrm{Im}(S_R) = 0$
>- $\overline{S}_C = -\frac{j}{2} \frac{1}{\omega C} \cdot |\overline{I}|^2 \to \mathrm{Re}(S_C) =0 \wedge \mathrm{Im}(S_C) < 0$
>- $\overline{S}_L = \frac{j}{2} \omega L \cdot |\overline{I}|^2 \to \mathrm{Re}(S_L) =0 \wedge \mathrm{Im}(S_L) > 0$

## Leggi di Kirchhoff in regime sinusoidale
In DC sappiamo che
$$
\sum_{i=1}^R v_i(t) = 0
$$
in corrente alternata abbiamo
$$
v_i(t) = V_{m,i} \cos(\omega t + \varphi_i) = \mathrm{Re}(V_{m,i} e^{j \omega t} e ^{j \varphi_i}) = \mathrm{Re}(\overline{V}_i e^{j \omega t})
$$
applicando la sommatoria
$$
\therefore \sum_{i=1}^R \mathrm{Re}(\overline{V}_i e^{j \omega t}) = 0
$$
l'esponenziale non può mai andare a 0, quindi dobbiamo porre uguale a 0 il fasore
$$
\implies \sum_{i=1}^R \overline{V}_i = 0
$$
## Conservazione della potenza complessa
La somma di tutte le potenze complesse è pari a 0, di conseguenza anche potenza attiva e potenza reattiva.
$$
\sum_{n=1}^N \overline{S}_n = 0 \hspace{8ex} \sum_{n=1}^N P_n = 0 \hspace{8ex} \sum_{n=1}^N Q_n = 0 
$$
Non vale anche per la potenza apparente, in quanto è calcolata sul modulo (fa il pene che vuole)
$$
\sum_{n=1}^N P_{app,n} = \sum_{n=1}^N |\overline{S}_n| \neq 0
$$
#dimostrazione 
![[#Teorema di Tellegen]]

In regime sinusoidale il teorema continua a valere:
calcoliamo le variabili d'interfaccia nel dominio dei fasori e applichiamo il teorema rispetto al coniugato del sistema considerato.
![[Elettrotecnica-1779303524789.webp|center|400]]
A livello topologico i due sistemi sono equivalenti, possiamo quindi derivare le due condizioni
$$
<V^T, I > = 0 \hspace{8ex} <V^*,I^* > = 0
$$
quindi per il [[#teorema di Tellegen]] possiamo invertire i termini mantenendo la conservazione della potenza ottenendo quindi
$$
< V^T, I^* > = 0
$$
dalla definizione di prodotto scalare sappiamo che questa è la somma di tutte le potenze complesse (tensioni $\times$ correnti)
$$
\sum \frac{1}{2}V I^* = 0
$$
## Teorema del massimo trasferimento di potenza attiva
Dal [[#Generatori reali|teorema del massimo trasferimento]] sappiamo che in regime DC per ottenere il massimo trasferimento di potenza la resistenza del generatore $R_g$ deve essere uguale alla resistenza del carico $R_L$.
![[Elettrotecnica-1778747212101.webp|center|350]]

Per la potenza complessa
$$\displaylines{S_{ZL} = \frac{1}{2} \overline{V} \overline{I}^* = \frac{1}{2} Z_L \overline{I} \overline{I}^*= \frac{1}{2} Z_L |\overline{I}|^2 = \underbrace{\frac{1}{2} R_L |\overline{I}|^2}_{\text{Potenza attiva}}+ \frac{j}{2} X_L |\overline{I}|^2 \\ \overline{I} = \frac{\overline{V_g}}{Z_g + Z_L} = \frac{\overline{V_g}}{(R_g+R_L)+j(X_g+X_L)} \\ \implies S_{ZL} = \frac{1}{2}\cdot \frac{(R_L + j X_L) \cdot\overline{V_g^2}}{(R_g+R_L)^2+(X_g+X_L)^2}}$$

Per trovare il massimo calcoliamo le derivate parziali e le poniamo pari a 0
$$
\left\{\begin{array}{l}
\frac{\partial S_{Z_L}(R_L, X_L)}{\partial R_L} = 0 \\
\frac{\partial S_{Z_L}(R_L,X_L)}{\partial X_L} = 0
\end{array}\right.
$$
La parte immaginaria dell'impedenza del carico deve essere opposta a quella del generatore, quindi faccio in modo di avere solo la componente resistiva, che trasmette solo potenza attiva.
$$
Z_L = Z_g^* \hspace{8ex} \left\{\begin{array}{l}R_g = R_L \\ X_g = -X_L\end{array}\right.
$$
I resistori in serie saranno
$$
Z_g + Z_L = 2R_g = 2R_L
$$
abbiamo quindi solo potenza attiva (unica potenza che compia lavoro)
Quindi, avremo che la funzione di massima potenza attiva è:
$$
P_{att,max}=\frac{1}{2}R_g \frac{|\overline{V}|^2}{8R_g}
$$
dove:
- $\overline{I}=\frac{\overline{V_g}}{2R_g}$
- $R_L = R_g$
## Rifasamento
Nel mondo molti carichi domestici e industriali sono di tipo induttivo, hanno quindi un **fattore di potenza**
maggiore di $0$
$$
fp = \cos(\varphi_v - \varphi_i) = \cos (\Phi) = \frac{P_{att}}{P_{app}} > 0
$$
>[!multi-column]
>
>>[!blank]
>>Se è maggiore di $0$ vuol dire che $P_{att} \neq 0$ e quindi ci sono dei resistori all'interno del sistema, ma parte della potenza totale viene utilizzata nella carica degli induttori.
>Il nostro obbiettivo quindi è quello di massimizzare la potenza attiva, quella che effettivamente compie lavoro.
>
>>[!blank]
>>![[Elettrotecnica-1779306348471.webp|center|150]]

Se $\cos(\Phi)\ll 1$ la maggior parte della potenza complessa è trasformata in potenza reattiva per l'induttore (sprecando forze).
Quindi, devo effettuare operazione di **rifasamento** per massimizzare la quantità di potenza attiva.
Posso farlo mediante l'aggiunta di uno o più condensatori in parallelo al carico affinché la tensione vista dall'induttore e dal condensatore sia uguale:
$$
Z_L = aj \implies Z_C = -aj \to \text{controbilancio}
$$
>[!multi-column]
>
>>[!blank]
>>![[Elettrotecnica-1779306699595.webp|center|300]]
>
>>[!blank]
>>![[Elettrotecnica-1779306769001.webp|center|150]]

Dobbiamo però evitare di alterare la potenza reale $\color{red}P$:
se abbiamo un carico induttivo originale
$$
P = S_1 \cos(\varphi_1) \hspace{8ex} Q_{1} = S_{1} \sin(\varphi_1) =\frac{P}{\cos(\varphi_1)} \sin(\varphi_1)= P \cdot \tan(\varphi_1)
$$
dobbiamo aumentare il fattore di potenza da $\cos(\varphi_1)$ a $\cos(\varphi_2)$ senza alterare la potenza reale $P = S_{2} \cos(\varphi)$ per ottenere quindi $Q_2 = S_{2} \sin(\varphi_2) = P \cdot \tan (\varphi_2)$
quindi la potenza apparente del condensatore deve essere pari alla differenza delle due
$$
Q_C = Q_{1}-Q_{2} = P(\tan(\varphi_1)-\tan(\varphi_2))
$$
sapendo che la potenza apparente di un condensatore è calcolabile come
$$
Q_C = V_{eff}^2 \cdot Z_C = \omega C V^2
$$
quindi posso calcolare la capacità come
$$
C = \frac{Q_C}{\omega V^2_{eff}} = \frac{P(\tan \varphi_1 - \tan \varphi_2)}{\omega V_{eff}^2}
$$
