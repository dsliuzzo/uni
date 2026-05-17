#appunti 
#elettromagnetismo_ed_elettrotecnica
$$
\newcommand{\oiint}{{\subset\!\supset} \mathllap{\iint}}\newcommand{\oiiint}{{\Large{\subset\!\supset}} \mathllap{\iiint}}
$$
# Introduzione
L'elettromagnetismo è un ramo della fisica che si occupa dello studio di fenomeni elettrici e magnetici.

>[!info] Campo elettromagnetico
>Definiamo come campo un'entità che descrive una grandezza fisica, nel caso specifico di **campi elettromagnetici** osserviamo il comportamento di grandezze elettriche, magnetiche e la loro interazione.

>[!info] Segnale
>Definiamo come **segnale** una funzione che modella una grandezza fisica

Il **campo elettromagnetico** è una funzione periodica che si ripete quindi ad intervalli regolari:
![[Pasted image 20250924165629.png|center|500]]
![[Pasted image 20250924165558.png|center|500]]
il periodo viene chiamato **lunghezza d'onda** $\lambda$
$$
\lambda = \frac{v_p}{f}
$$
con $v_p$ velocità propagazione ($3*10^8$ nel vuoto) ed $f$ frequenza.

Prendiamo per esempio il caso di due masse $m_1$ ed $m_2$ e studiamo il loro campo gravitazionale:
![[Pasted image 20250924170055.png|center|300]]
chiamiamo $R_{1,2}$ l'intensità della ed $î_{R_{1,2}}$ il versore di direzione e verso della forza gravitazionale.
Essendo la forza di gravità di natura attrattiva possiamo scrivere la sua formula come:
$$
\vec{F}_{g21} = -î_{R_{1,2}} \frac{G m_{1}m_{2}}{R_{1,2}^2}
$$
$$
\vec{F}_{g12} = î_{R_{1,2}} \frac{G m_{1}m_{2}}{R_{1,2}^2}
$$
con $G$ costante gravitazionale universale.

Si crea in questo modo un campo gravitazionale attorno ad ogni massa:
![[Pasted image 20250924170741.png|center|300]]
$$
\vec{\psi} = î_{R} \frac{Gm_{1}}{R^2}
$$
Descriviamo così l'attrazione che ha il corpo $m_1$ su altri corpi a distanza (senza contatto)
Per calcolare ora la forza che agisce su $m_2$ sarà sufficiente:
$$
F_{g21} = \vec{\psi} *m_{2}
$$

# Elettrostatica
I due corpi sono anche trasportatori di cariche; prendiamo quindi in esame solo le loro cariche elettriche, che si comportano analogamente e prenderanno il nome di $q_{1}$ e $q_{2}$. Esse verranno descritte inoltre dalla loro repulsione o attrazione che dipende dalla loro carica positiva o negativa (dimostrato empiricamente).
![[Pasted image 20250924171818.png|center|300]]
>[!info] Legge di Coulomb
>Possiamo rappresentare la forza di interazione tra queste due cariche (**forza di coulomb**) con la seguente formula in forma vettoriale:
>$$\vec{F}_{e}=î_{R_{12}} \frac{q_{1}q_{2}}{4 \pi \epsilon_0 R_{12}^2}$$
>con $\epsilon_0$ permittività elettrica nel vuoto (se presa solo $\epsilon$ si riferisce alla permittività elettrica, ma dipende dal mezzo in cui si propaga il campo), $4\pi$ rappresenta la superficie di una sfera di raggio unitario.

>[!question] Osservazione
>La forza elettrica è
>- direttamente proporzionale alle cariche
>- inversamente proporzionale al quadrato della distanza tra le due

>[!quote] Notazione
>Utilizziamo i Joule ($J$) per misurare l'energia elettrica di un sistema

Il segno di questa forza ovviamente dipende dalle cariche dei due corpi.
Analogamente alla forza gravitazionale, la forza elettrica crea un campo:
$$
\vec{E}=î_{R}\frac{q}{4\pi \epsilon_0 R^2}
$$
![[Pasted image 20250924173521.png|center|200]]
Questa è una grandezza radiale, di conseguenza a parità di raggio $R$ il campo è costante.
A questo punto possiamo definire $q_1$ come **sorgente** del campo e $q_2$ come **punto di osservazione** e calcolare la forza elettrica in $q_2$ come:
$$
\vec{F}_e = q_{2} \vec{E}
$$

## Distribuzione di cariche
Analizziamo ora il caso in cui abbiamo un **insieme discreto di sorgenti**. Se il mezzo è lineare (come nel vuoto) il campo elettrico sarà la somma di tutti i campi delle singola cariche per il **principio di sovrapposizione degli effetti**.
>[!important] Principio di sovrapposizione degli effetti
>La propagazione di campi elettromagnetici nel vuoto è calcolata usando la somma dei campi delle singole cariche che compongono il campo. Questo perché il vuoto è un mezzo lineare.

$$
\vec{E} = \sum_{i=1}^n \vec{E}_i = \sum_{i=1}^n î_{R}\frac{q_i}{4\pi \epsilon_0 R^2}
$$
![[Pasted image 20250924174452.png|center|300]]
In questo esempio viene evidenziato il vettore tra la **sorgente** $q_1$ e il **punto di osservazione** $P$, essa è descritta dalla formula $\vec{R}-\vec{R}_1$.  per trovare solo il versore quindi dividiamo il vettore per il modulo:
$$
\frac{\vec{R}-\vec{R}_i}{|\vec{R}-\vec{R}_i|} = î_{R_i}
$$
Il campo elettrico della carica $q_1$ sarà quindi:
$$
\vec{E}_1 = \frac{\vec{R}-\vec{R}_1}{|\vec{R}-\vec{R}_1|} \frac{q_1}{4 \pi \epsilon_0 |\vec{R}-\vec{R}_1|^2}
$$
possiamo quindi generalizzare la formula per trovare il campo elettrico totale
$$
\vec{E} = \sum_{i=1}^n \frac{\vec{R}-\vec{R}_i}{|\vec{R}-\vec{R}_i|}\frac{q_i}{4 \pi \epsilon_0 |\vec{R}-\vec{R}_i|^2} = \frac{1}{4 \pi \epsilon_0} \sum_{i=1}^n \frac{q_i(\vec{R}-\vec{R}_i)}{|\vec{R}-\vec{R}_i|^3}
$$
## Propagazione del campo
L'entità del campo elettrico dipende dal materiale in cui sono poste le sorgenti, di conseguenza non esiste un unico campo.

| ![[Pasted image 20251002171058.png\|center\|400]] | <br><br>Supponiamo di avere un materiale in stato di equilibrio elettrico<br><br><br><br><br>Supponiamo di inserire una carica sorgente, che creerà un campo e quindi delle forze che agiranno su altre cariche<br><br><br><br><br><br>- Il sistema di deforma elettricamente<br><br>- si formano bipoli elettrici<br><br>- il materiale si polarizza |
| ------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
>[!important] Costante dielettrica / permittiva
Il **grado di polarizzazione** del materiale è misurato attraverso il parametro $\epsilon$
Per un generico materiale
>$$\epsilon = \epsilon_r \epsilon_0$$
con $\epsilon_r$ costante dielettrica relativa e $\epsilon_0$ costante dielettrica nel vuoto.

$\epsilon_r$ è necessariamente $\leq 1$ altrimenti la propagazione supererebbe la velocità della luce.
Definiamo infatti $v_p$ come la **velocità di propagazione**
$$
v_p = \frac{1}{\sqrt{ \epsilon \mu }}
$$
con $\mu$ **permeabilità magnetica**
che nel vuoto diventa
$$
c = \frac{1}{\sqrt{ \epsilon_0 \mu_0 }} = 3*10^8 m/s
$$
che non è altro che la velocità della luce.
## Induzione elettrica
Definiamo come $\vec{D}$ l'**induzione elettrica**
$$
\vec{D} = \epsilon \vec{E}
$$
Questa relazione ha valore solo per i mezzi lineari.

Sostituiamo $\vec{E}$ con la sua [[#Elettrostatica|definizione]] come $î_{R}\frac{q}{4\pi \epsilon R^2}$
$$
\displaylines{
\vec{D} = \epsilon î_{R}\frac{q}{4\pi \epsilon R^2} = î_{R}\frac{q}{4\pi R^2} \\
\implies \vec{D} 4 \pi R^2 = î_R q \\
\implies |\vec{D}| 4 \pi R^2=q
}
$$
Abbiamo definito così l'**espressione vettoriale** dell'induzione elettrica.

>[!info] Legge di Gauss
>La legge di Gauss definisce la **carica totale** $Q$ come
>$$Q = \oiint_S \vec{D}\cdot\hat{n} ds$$
>
> La carica totale $Q$ contenuta in un certo volume $V$ limitato da una superficie chiusa $S$ è dato dal flusso (integrale) di induzione elettrica $\vec{D}$ uscente dalla superficie.

>[!quote] Notazione
>La **carica** si misura in Coulomb ($C$)

#dimostrazione 
[...]
## Densità di carica
Fino ad ora abbiamo considerato distribuzioni discrete di cariche di cui conosciamo posizione e possiamo quantificarle.
A livello macroscopico per usiamo la **densità di carica** per quantificare la quantità di cariche discrete a livello spaziale.
Distinguiamo quindi 3 tipi di densità di carica:
1. **densità lineare**
   $$\rho_l=\lim_{ \Delta l \to 0 } \frac{\Delta Q}{\Delta l}$$
   ![[Pasted image 20251011192602.png|center|30]]
2. **densità superficiale**
   $$\rho_s=\lim_{ \Delta S \to 0 }  \frac{\Delta Q}{\Delta S}$$
   ![[Pasted image 20251011193011.png|center|200]]
3. **densità volumetrica**
   $$\rho_v = \lim_{ \Delta V \to 0 } \frac{\Delta Q}{\Delta V}$$
   ![[Pasted image 20251011193258.png|center|200]]

Essendo una distribuzione discreta di cariche e non più singole cariche per calcolare $Q$ è necessario l'utilizzo dell'integrale.
$$
Q=\int_0^l \rho_l dz
$$
## Campi elettrici nello spazio materiale
### Parametri dei materiali elettromagnetici
1. **Permittività**
   $$\epsilon = \epsilon_0 \epsilon_r$$
2. **Permeabilità magnetica**
   $$\mu = \mu_0 \mu_r$$
3. **Conducibilità**
   $$\sigma$$
## Potenziale elettrico
>[!important] Energia potenziale elettrica
>L'energia potenziale elettrica ($U_E$) è una forma di energia immagazzinata che un sistema di cariche elettriche possiede **a causa della loro configurazione spaziale** (cioè, della loro posizione reciproca).

Dato un sistema
![[Pasted image 20251018190917.png|center|600]]
con $\vec{E}=-\hat{y}E_y$
Possiamo dire che $\exists \vec{F}_e =q \vec{E}$ una forza che agisce sulla carica $q$.
Se vogliamo spostare $q$ nel lato opposto dobbiamo applicare una forza esterna opposta a $\vec{F}_e$
$$
\vec{F}_{ext}=-\vec{F}_e=-q \vec{E}
$$
>[!important] Energia potenziale infinitesima
>$$dW = \vec{F}_{ext}*d \vec{l}=-q \vec{E} * d \vec{l}$$
>chiamiamo $dW$ l'energia necessaria per spostare la carica di un tratto $dl$

>[!important] Potenziale elettrico infinitesimo
>chiamiamo invece **energia potenziale elettrica infinitesima per unità di carico**
>$$dV = \frac{dW}{q} \implies dV = - \vec{E}* d \vec{l}$$
>che sarà uno scalare

Data la sua definizione non si può definire la potenziale in un solo punto, ma solo la differenza tra due o più punti (integrale di linea).
Dati due punti $p_{1}$ e $p_{2}$ la loro potenziale sarà:
$$
V_{21} = V_{2}-V_{1} = \int_{p_{1}}^{p_{2}} - \vec{E} * d \vec{l}
$$
Essa non dipende dal cammino/percorso di conseguenza possiamo parlare di **campo conservativo** questo perché vale il [[4. Lavoro ed energia#Forze conservative|principio di conservazione dell'energia]].

Quindi avendo una configurazione in cui $p_{1}=p_{2}$
![[Pasted image 20251018192534.png|center|200]]
$$
V_{21}=V_{2}-V_{1} = \oint_C -\vec{E} * d \vec{l} = 0
$$
La circuitazione lungo un percorso è sempre 0.

>[!info] Legge di Kirchoff per le tensioni
>La somma algebrica delle tensioni in un circuito chiuso è uguale a 0

Grazie a questa legge possiamo collegare il campo elettrico $\vec{E}$ generato da una carica $q$ e il corrispondente potenziale elettrico $V$
$$
\displaylines{
V(P)=V(P)-V(P\to \infty)= \\
\int_\infty^r -\vec{E} * d \vec{l} = \int_\infty^r \left( -\hat{i}_R \frac{q}{4 \pi \epsilon R^2} \right)*(\hat{i}_R dR) = \\
=- \frac{q}{4\pi \epsilon} \int_\infty^r \frac{dR}{R^2} = - \frac{q}{4\pi \epsilon}*\left( \left. -\frac{1}{R} \right|_\infty^r\right) = \\
= - \frac{q}{4\pi \epsilon} \left( -\frac{1}{r}+ \lim_{ R \to \infty } \frac{1}{R}  \right) = \\
= - \frac{q}{4\pi \epsilon} *\left( -\frac{1}{r} \right) = \frac{q}{4 \pi \epsilon r}
}
$$
Per il [[#Distribuzione di cariche|principio di sovrapposizione degli effetti]] nel caso in cui ho $n$ cariche sarà sufficiente fare la sommatoria delle differenze di potenziale
$$
V(P) = \sum_{i=1}^n V_i(P) = \sum_{i=1}^n \frac{q_i}{4 \pi \epsilon |\vec{R}-\vec{R}_{si}|}
$$
con $\vec{R}_{si}$ posizione della $i$esima carica.

### Potenziale elettrico di un dipolo
Nel caso di un dipolo elettrico (due cariche con la stessa intensità ma segno opposto) otteniamo
$$
V(P) = \frac{q}{4 \pi \epsilon R_1}-\frac{q}{4 \pi \epsilon R_2} = \frac{q}{4 \pi \epsilon}\left( \frac{1}{R_{1}}-\frac{1}{R_2} \right) = \frac{q}{4 \pi \epsilon}\left( \frac{R_2-R_1}{R_{1}R_{2}}\right) 
$$
![[Pasted image 20251019133714.png]]

Supponendo di avere il punto di osservazione $P$ posto ad una grande distanza dalla sorgente (dipolo) possiamo considerare $R_{1}/ / R_{2}$
Di conseguenza otteniamo le seguenti approssimazioni
$$
\displaylines{
R_{2}-R_{1} \approx d \cos \theta \\
R_{1}R_{2} \approx R^2
}
$$
Quindi il nostro $V(P)$ diventa
$$
\implies V(P) = \frac{q}{4 \pi \epsilon} * \frac{d\cos \theta}{R^2}
$$
**Il potenziale elettrico è analogo al campo elettrico**

>[!question] Osservazione
>Definendo la distanza come vettore $d \cos \theta = \vec{d}* \hat{i}_R$
>$$\implies V(P) = \frac{q\vec{d}}{4 \pi \epsilon R^2}\hat{i}_R$$

# Elettrodinamica
## Corrente e densità di corrente
>[!important] Densità continue di cariche
>Definiamo la **corrente** come un flusso di cariche in movimento all'interno di un materiale conduttore con cariche libere al suo interno che sotto l'azione di un campo elettrico si muovono

![[Pasted image 20251019135225.png|center|400]]
con
$$
\displaylines{
\rho V \hspace{4ex} \text{densità di corrente} \\
\vec{u} \hspace{4ex} \text{vettore velocità di deriva} \\
\Delta V = \Delta l \Delta S \hspace{4ex} \text{differenza di potenziale (tensione)} \\
\Delta l = \vec{u} \Delta t \hspace{4ex} \text{spazio percorso}\\
\Delta q = \rho V \Delta V = \rho V \Delta l \Delta S = \rho \vec{u} \Delta t \Delta S\hspace{4ex} \text{quantità di carica} \\
\Delta i = \frac{\Delta q}{\Delta t} = \rho V * \vec{u}*\Delta S \hspace{4ex} \text{densità di corrente media}
}
$$
>[!quote] Notazione
>La **differenza di potenziale** (tensione) si misura in volt ($V$)

Infine indichiamo con $J=\rho V u$ la **densità superficiale di corrente**
$$
\displaylines{
\rho V u \\ \left[ \frac{C}{m^3} \right]\left[ \frac{m}{s} \right]=\left[ \frac{C}{m^2s} \right] = \left[ \frac{A}{m^2} \right]
}
$$
![[Pasted image 20251019140441.png|center|300]]
$$
\vec{J} = \rho V \vec{u}
$$
>[!important] Flusso del vettore densità di corrente ($J$) attraverso una superficie ($S$)
>$$I = \oiint_S (J*\hat{n})dS$$

### Trasporto di carica
La velocità degli elettroni ($\vec{u}_e$) all'interno di un materiale a cui è applicato un campo elettrico e quindi ha una corrente è definita come
$$
\vec{u}_e = -m_e \vec{E}
$$
con $m_e$ mobilità degli elettroni, che è considerata negativamente in quanto stiamo prendendo in esame degli elettroni
![[Pasted image 20251019142745.png|center|300]]
Se questo avviene il trasporto di carica elettrica è affidato a due tipi di portatori di carica di tipo opposto:
- Gli **elettroni** ($e^-$)
- Le **lacune** ($h^+$)
Definiamo

>[!info] Legge di Ohm
>la densità superficiale di corrente sarà quindi
>$$\displaylines{
\vec{J} = \vec{J}_e + \vec{J}_h = \\
= \rho_{v_e} \vec{u}_e + \rho_{v_h} \vec{u}_h = \\
=-\rho_{v_e} m_e \vec{E} + \rho_{v_h} m_h \vec{E} = \\
= (-\rho_{v_e}m_e+\rho_{v_h}m_h) \vec{E}
}$$
$-\rho_{v_e}m_e+\rho_{v_h}m_h$ si definisce **conducibilità** $\sigma$ e ne consegue
>$$\vec{J} = \sigma \vec{E}$$
>>[!question] Conducibilità
>>La conducibilità ($\sigma$) è definita come la capacità di spostamento degli elettroni all'interno di un materiale
>>- $\sigma = 0$, materiale **dielettrico senza perdite** (ideale)
>>- $\sigma \neq 0$, materiale **dielettrico con perdite**
>>- $\sigma \to \infty$, materiale **conduttore**

### Relazione tra corrente e densità di corrente
![[Pasted image 20251019152013.png|center|400]]
$$
\vec{E}=\hat{x} E_x
$$
$$
\displaylines{
V = V_{1}-V_{2} = \int_{x_{2}}^{x_{1}}-\vec{E} *d \vec{l} = \int_{x_{1}}^{x_{2}} \vec{E} * d \vec{l} = \int_{x_{1}}^{x_{2}}(\hat{x} E_x)* \hat{x} dx =\\= \int_{x_{1}}^{x_{2}} E_x dx = E_x(x_{2}-x_{1})= E_x*l}
$$
$$
I = \oiint_S \vec{J} * \hat{n} ds = \oiint_S \sigma \vec{E} * \hat{n}ds = \oiint_S \hat{x}\sigma E_x * \hat{x} ds = \oiint_S \sigma E_x ds = \sigma E_x A
$$
$$
\implies \left\{\begin{array}{l}V=E_xl\\ I = \sigma E_x A \end{array}\right.\implies \frac{V}{I} = \frac{E_xl}{\sigma E_x A} = \frac{l}{\sigma A}
$$
Questa relazione prende il nome di **resistenza** del conduttore, dipendente dalle caratteristiche del materiale e indipendente dal campo elettrico applicato.

>[!important] Resistenza
>Grandezza data dal rapporto tra differenza di potenziale $V$ e intensità di corrente $I$:
>$$R = \frac{\oint_l-\vec{E}*d \vec{l}}{\oiint_S \vec{J} * \hat{n} dS}$$

Definiamo quindi
>[!info] Legge di Ohm nel caso circuitale
>$$V=RI$$
>>[!question] Osservazione
>>Il componente circuitale associato alla resistenza è detto **resistore** e si indica con:
>>![[Pasted image 20251019153352.png|center|200]]

### Legge di Joule in forma volumetrica
$$
\displaylines{
\vec{F}_e = q \vec{E} = \rho V_e \Delta V \vec{E} \hspace{4ex} \Delta W (\text{lavoro})=\vec{F}_e \Delta l \\
\Delta P (\text{potenza}) = \frac{\Delta W}{\Delta t}=\vec{F}_e* \frac{\Delta \vec{l}}{\Delta t} = \vec{F}_e \Delta \vec{u} = \rho V_e \Delta \vec{u} \Delta V \vec{E} = \\
= \vec{J} \Delta V \vec{E} = \sigma \vec{E} \vec{E} \Delta V(\vec{J} = \sigma \vec{E})=\sigma |\vec{E}|^2 \Delta V = \\
\implies P= \oint \oint \oint_V \sigma |\vec{E}|^2 dV
}
$$
## Potenza dissipata da un conduttore
Il passaggio di corrente all'interno di un conduttore ha come effetto il riscaldamento del conduttore, questa trasformazione prende il nome di **effetto Joule**.
Gli elettroni che si spostano all'interno del reticolo cristallino urtano gli atomi del reticolo cristallino, facendoli vibrare aumentando l'energia interna, dissipando il lavoro svolto all'interno del conduttore, manifestando un aumento di temperatura a livello macroscopico.
Definiamo quindi la **potenza dissipata** come
$$
dp = \sigma|\vec{E}|^2
$$
che ci permette di riformulare la [[#Legge di Joule in forma volumetrica|legge di Joule in forma volumentrica]] come
$$
P = \iiint_V p dV
$$
## Anello carico
![[Pasted image 20251116111022.png|center|300]]
Viene dato un anello carico elettricamente di cui viene preso un tratto infinitesimo $dl$ dalla cui metà viene tirato un raggio al punto $P$ chiamato $\vec{R}_1$.
Si ha che $dl = \theta d \phi$ per cui $dq = \rho_e*dl = \rho_e \theta d \phi$, da ciò ne deriva che
$$
dE_1= \hat{i}R_1 * \frac{dq}{4 \pi \epsilon R_1^2}
$$
esplicitando $R_1$ otteniamo
$$
\vec{R}_1 =  -\hat{r} \theta + \hat{z}h \implies |\vec{R}_1| = \sqrt{ \theta^2+h^2 }
$$
pertanto
$$
d \vec{E}_1 = \frac{-\hat{r} \theta + \hat{z} h}{\sqrt{ \theta^2+h^2 }} * \frac{\rho_e \theta d \phi}{4 \pi \epsilon(\theta^2+h^2)} = d \vec{E}_2
$$
con $\vec{E}_2$ campo generato in maniera diametralmente opposta.
Poiché $d \vec{E}= d \vec{E}_1 + d \vec{E}_2$ allora
$$
d\vec{E}=2d\vec{E}_1 = \frac{\hat{z} \rho_e \theta h}{2\pi \epsilon(\theta^2+h^2)^{\frac{3}{2}}}d \phi
$$
basta quindi integrare per ottenere $\vec{E}$
$$
\vec{E} = \int_0^\pi d\vec{E} = \frac{\hat{z}\rho_e\theta h}{2 \epsilon (\theta^2+h^2)^{\frac{3}{2}}}
$$
sapendo che $Q=2 \pi \rho_e \theta$ allora il campo finale sarà
$$
\vec{E} = \hat{z} \frac{h}{4 \pi \epsilon (\theta^2 + h^2)^{\frac{3}{2}}}
$$
## Disco carico
![[Pasted image 20251116112324.png|center|300]]
Sapendo che $ds = 2 \pi r dr$ e che $dq = \rho_s ds = 2 \pi r \rho_s dr$
$$
d \vec{E} = \hat{z} \frac{h}{4 \pi \epsilon (r^2+h^2)^{\frac{3}{2}}}dq = \hat{z} \frac{h}{4 \pi \epsilon (r^2 + h^2)^{\frac{3}{2}}}2 \pi r \rho_s dr
$$
integriamo quindi per ricavare il campo
$$
\vec{E} = \int_0^a d \vec{E} =\int_0^a  \frac{\hat{z}h2 \pi r \rho_s dr}{4 \pi \epsilon (r^2 + h^2)^{\frac{3}{2}}} = \frac{\hat{z} h \rho_s}{2 \epsilon} \int_0^a \frac{rdr}{(r^2+h^2)^{\frac{3}{2}}} = 
$$
integriamo per sostituzione con $x = r^2+h^2$
$$
\frac{1}{2} \int x ^{-\frac{3}{2}} dx = \frac{1}{2} \frac{x^{\frac{3}{2}-1}}{-\frac{3}{2}+1} = -x^{-\frac{1}{2}}
$$
risostituendo $x$ otteniamo quindi
$$
\int_0^a \frac{rdr}{(r^2+h^2)^{\frac{3}{2}}} = -\frac{1}{\sqrt{ r^2+h^2 }} \int_0^a = -\frac{1}{\sqrt{ a^2+h^2 }}+\frac{1}{h}
$$
la formula completa sarà quindi
$$
\vec{E} = \frac{\hat{z} \rho_s}{2 \epsilon} \left( 1- \frac{h}{\sqrt{ a^2 +h^2}} \right)
$$
## Capacità di un condensatore
La **capacità di un condensatore** è data dal rapporto tra la carica $Q$ immagazzinata e la differenza di potenziale $V$
$$
C = \frac{Q}{V}
$$
>[!quote] Notazione
>La **capacità** si misura in Farad ($F$)

![[Pasted image 20251116114830.png|center|300]]
Notiamo come
- L'induzione elettrica
  $$\vec{D} = \epsilon * \vec{E}$$
- la carica per la [[#Induzione elettrica|legge di Gauss]]
  $$Q = \oiint_S \vec{D} * \vec{u} ds = \oiint_S \epsilon \vec{E} \vec{u} dS $$
- la tensione
  $$V = V_{1}-V_{2}=\int_2^1 - \vec{E} dl$$
Di conseguenza
$$
C = \frac{\oiint_S \epsilon \vec{E} \hat{u} dS}{-\int_2^1 \vec{E} dl}
$$
>[!important]
>La capacità di un condensatore non dipende dal campo ma solo dalle caratteristiche geometriche del condensatore
# Magnetostatica
Rispetto all'elettrostatica, la carica si muove a velocità $\vec{v}$. Se è presente un campo elettrico allora una particella $q$ subisce una forza elettrica $\vec{F}_e=q \vec{E}$ mentre se è presente una induzione magnetica $\vec{B}$ allora essa è soggetta a una forza magnetica $\vec{F}_m = q \vec{v} \vec{B}$.
Inoltre, data la permeabilità magnetica $\mu$ e un campo magnetico $\vec{H}$, l'induziona magnetica (duale a quella elettrica) è data da $\vec{B} = \mu \vec{H}$.
![[Pasted image 20251116175429.png|center|300]]
**Differenze tra forza elettrica e magnetica**
- $\vec{F}_e/ /\vec{E}$ mentre $\vec{F}_m \perp \vec{B}$
- $\vec{F}_e$ agisce su cariche stazionarie o in moto mentre $\vec{F}_m$ solo su cariche in modo
- $\vec{F}_e$ dissipa energia mentre la forza magnetica non compie lavoro, infatti
  $$d\omega = \vec{F}_m * d \vec{l} = \vec{F}_m * \vec{v} dt$$
  poiché $\vec{v} = \frac{d\vec{l}}{dt}$, ma anche $\vec{F}_m \perp \vec{v}$ allora
  $$\vec{F}_m *\vec{v} = 0$$
  e dunque $d\omega = 0$

## Forza magnetica
Si considera un filo conduttore sospeso tra due piani attraversato da una corrente $I$ che genera l'induzione magnetica $\vec{B} = -\hat{x}B_x$ con $dQ = \rho_v dV = \rho_v A dl$
![[Pasted image 20251116180847.png|center|600]]
dove $\rho_{v}=-N_e*e$ con $N_e$ **densità elettronica**, dunque $dQ = -N_e e A dl$
$$
d \vec{F}_m = dQ * \vec{v} * \vec{B} = -N_eeAdl *\vec{v} * \vec{B}
$$
Ponendo $dl \vec{v} = -dl *v$ otteniamo
$$
d \vec{F}_m = \underset{I\;}{\underbrace{N_eeA v}} d\vec{l}*\vec{B} = I * d\vec{l} * \vec{B}
$$
Consideriamo quindi la configurazione
![[Pasted image 20251116182502.png|center|300]]
$$
\vec{F}_m = \int_a^b I d\vec{l} * \vec{B}
$$
nell'ipotesi di $I$ costante otteniamo
$$
\vec{F}_m = I \int_a^b d\vec{l} * \vec{B}
$$
e se $\vec{B}$ è uniforme
$$
\vec{F}_m = I \vec{B} \int_a^b d\vec{l} = I \vec{l} *\vec{B}
$$
Questa formula è valida solo nel caso in cui
- $I$ costante
- $\vec{B}$ uniforme

### Forza magnetica in un circuito chiuso
Supponiamo ora che $a=b$
Otteniamo quindi una **spira**, un percorso di corrente costante immersa in un campo magnetico uniforme (primo esempio di circuito elettrico):
$$
\vec{F}_m = I \vec{B}\times \oint d\vec{l} = I \vec{B} \times 0 = 0
$$
## Legge di Biot-Savart
Supponiamo di avere un campo percorso da corrente e isoliamo una carica $q$ che percorre $d \vec{l}$. Il campo magnetico generato in nel punto è
$$
d \vec{H} = \frac{I}{4 \pi} \frac{d\vec{l} \times \hat{i} R}{R^2}
$$
da cui il campo magnetico totale:
$$
\vec{H} = \frac{I}{4 \pi} \int_l \frac{d\vec{l} \times \hat{i} R}{R^2}
$$

![[Screenshot_20251116_192840.jpg|center|200]]
Nel caso in cui sia data la densità di corrente allora
$$
\vec{H} = \frac{1}{4 \pi} \iiint_V \frac{\vec{J} \times \hat{i} R}{R^2} dV
$$
![[Screenshot_20251116_193238.jpg|center|200]]

Nel caso di una lamiera si ha che
$$
\vec{H} = \frac{1}{4 \pi} \iint_S \frac{J_s \times \hat{i} R}{R^2} dS
$$
![[Screenshot_20251116_193607.jpg|center|200]]
## Legge di Ampere
Supponiamo di avere un conduttore cilindrico di lunghezza $l$, percorso da $V$ (differenza di potenziale) a corrente costante $I$. Consideriamo $P$ come punto di osservazione posto sull'asse a distanza $R$
![[Pasted image 20251219144350.png|center|400]]
Stiamo assumendo che il raggio del conduttore sia molto più piccolo rispetto a $l$
- la distanza $R$ da $P$ al conduttore
Vogliamo calcolare $\vec{H}$ in $P$
$$
d \vec{H} = \frac{I}{4 \pi} \frac{d \vec{l} \times \hat{i}_R}{R^2}
$$
con $d\vec{l} = \hat{z} dz$
e $d\vec{l} \times \hat{i} R = (\hat{z} \times \hat{i}_R)dz = \hat{\phi} \sin \theta dz$
$$
\displaylines{
\implies H = \int_{-\frac{l}{2}}^{\frac{l}{2}} d \vec{H} = \int_{-\frac{l}{2}}^{\frac{l}{2}} \frac{I}{4 \pi} \frac{\hat{\phi} dz}{R^2} \sin \theta = \\
= \hat{\phi} \frac{I}{4 \pi} \int_{-\frac{l}{2}}^{\frac{l}{2}} \frac{\sin \theta}{R^2} dz
}
$$
Tramite passaggi algebrici possiamo riscrivere tutto l'integrale solo in funzione di $\theta$
$$
\left\{\begin{array}{l}r = R \sin \theta \to R = \frac{r}{\sin \theta} \\ r = -z \tan \theta \to z = \frac{-r}{\tan \theta} \to dz = \frac{r}{\sin ^2 \theta}\end{array}\right.
$$
sostituendo al passaggio precedente
$$
\displaylines{
H = \hat{\phi} \frac{I}{4 \pi} \int_{\theta_1}^{\theta_2} \frac{sin \theta}{r^2} \cdot \sin^2 \theta \cdot \frac{r}{\sin^2 \theta} d \theta = \\
= \hat{\phi} \frac{I}{4 \pi r} \int_{\theta_1}^{\theta_2} \sin \theta d \theta = \\
= \hat{\phi} \frac{I}{4 \pi r}\left.(-\cos \theta)\right|_{\theta_1}^{\theta_2} = \\
\hat{\phi} \frac{I}{4 \pi r} (\cos \theta_1 - \cos \theta_2)
}
$$
dove
$$
\cos \theta_1 = \frac{\frac{l}{2}}{\sqrt{ \left( \frac{l}{2} \right)^2 + r^2 }} = \frac{l}{2} \cdot \frac{1}{\sqrt{ \frac{l^2 + 4r^2}{4} }} = \frac{l}{2} \cdot \frac{2}{\sqrt{ l^2 + 4r^2 }} = \frac{l}{\sqrt{ l^2 + 4r^2 }}
$$
siccome $\theta_2 = \pi - \theta_1$ allora
$$
\cos \theta_2 = -\cos \theta_1 = -\frac{l}{\sqrt{ l^2 + 4 r^2 }}
$$
tornando ad $H$
$$
\displaylines{
\implies \vec{H} = \hat{\phi} \frac{I}{4 \pi r} \cdot \frac{2l}{\sqrt{ l^2 + 4r^2 }} =  \\
=\hat{\phi} \frac{Il}{2 \pi r} \cdot \frac{1}{\sqrt{ l^2 + 4r^2 }}
}
$$
Per assunzione $l\gg r$ di conseguenza possiamo approssimare
$$
\vec{H} \approx \hat{\phi} \frac{Il}{2 \pi r} \cdot \frac{1}{l} \approx \hat{\phi} \frac{I}{2 \pi r}
$$
>[!question] Osservazione
>1. Avendo un filo percorso da corrente $\implies$ campo magnetico $\vec{H}$ "avvolge il filo" (infatti $\vec{H}$ è diretto lungo $\hat{\phi}$)
>2. Considerando l'approssimazione ($l\gg r$) $\implies$ campo magnetico $\vec{H}$ è il rapporto tra corrente e circonferenza
>   $\implies$ possiamo ricavare la corrente
>   $$\displaylines{\vec{H} \cdot 2\pi r = \hat{\phi} I \\ |\vec{H}| \cdot 2 \pi r = I}$$

Da questa definizione di corrente ricaviamo l'enunciato della **legge di Ampere**
$\implies$ considerando $I = \oint_c \vec{H} \cdot d \vec{l}$
$$
\vec{B} = \mu \vec{H} = \hat{\phi} \mu \frac{I}{2 \pi r}
$$
### Forza magnetica su un conduttore
#### Spira
Considerando una Spira di raggio $a$ percorsa da corrente costante e $P$ (molto lontano) punto di osservazione tale che $d_P \gg a$
![[Pasted image 20251219153759.png|center|300]]
Il **momento di dipolo magnetico** quantifica la forza del dipolo
$$
m = N I A
$$
con $N$ numero di spire e $A$ area ($\pi a^2$).

La spira si comporta come un dipolo magnetico poiché $\vec{B}$ si comporta come quello di un magnete
![[Pasted image 20251219154307.png|center|100]]
#### Solenoide
Il solenoide è un oggetto che genera un campo magnetico costituito da $n$ spire: ogni spira anche da sola genera induzione magnetica.
Avvicinandolo ad un materiale si sollecitano gli elettroni e si formano quindi degli anelli di corrente di dimensione atomica.
L'avvicinamento crea quindi un fenomeno di **magnetizzazione**.
Gli anelli si formano per effetto di due fenomeni
1. movimento degli elettroni attorno al nucleo $\implies$ corrente atomica con $m$ momento di dipolo
2. rotazione attorno a sé di elettroni
## Induttore
L'induttore è un componente circuitale duale del condensatore.
Immagazzina energia magnetica nel nucleo attorno alla bobina.
### Flusso magnetico
Il flusso che si concatena con la singola spira si calcola come
$$
\Phi = \iint_S \vec{B} \cdot \hat{n} ds = \iint_S \left( \hat{z} \mu\frac{ NI}{l} \right) \cdot \hat{z} ds = \mu\frac{NI}{l} \cdot A
$$
$$
\Phi_{tot} = N \Phi = \mu \frac{N^2 I }{l} A
$$
>[!important] Induttanza
>L'induttanza è la quantità
>$$l = \frac{\Phi_{tot}}{I} = \mu \frac{N^2 A}{l}$$
>Distinguiamo
>- **autoinduttanza**: si ottiene dal flusso magnetico concatenato con circuito che produce $\vec{H}$ stesso
>- **mutuainduttanza**: è associata al solenoide (a cui induco corrente indotta generata da $II$ solenoide)

>[!important] Forza elettromotrice
[...]
# Onde elettromagnetiche
Se consideriamo un regime dinamico avremo variazioni **temporali** e **spaziali** di campi elettrici e magnetici.
L'unione dei due campi genera un **campo elettromagnetico** che corrisponde ad un'onda.

>[!important] Segnale ondoso
>Segnale a cui è associata un'onda elementare
>$$u(z,t) = A \cos( wt - kz)$$
>$\to$ soluzione elementare di segnale ondoso, $f(x)$ a cui è associato un significato fisico

**Caratteristiche matematiche**
- Espressione semplificata in termini di
	  1. **funzione scalare**, si ipotizza che il segnale si riferisca a grandezze con un solo componente $z$
	  2. **variabili spaziali**, consideriamo 3 componenti di $u(x,y,z)$ e $t \implies u(x,y,z,t)$
- $A$ ampiezza onda
- $\cos(wt-kz)$ dipende da $t$ e $z$

**Graficamente**
Separando l'osservazione di variabili in 2 grafici bidimensionali

1. Fisso un punto nello spazio $z= z_{0}$   $$u(z_{0},t) = A \cos (\omega t -kz_0) = A \cos( \omega t + \alpha_{1} )$$Otteniamo una **funzione periodica temporalmente** con periodo temporale legato a $\omega = 2 \pi f = \frac{2\pi}{T} \implies T = \frac{2\pi}{\omega}$
   $\to T$ è inverso alla frequenza e descrive come il segnale oscilla nel tempo ![[Pasted image 20251219184423.png|center|300]]
2. Fisso un punto nel tempo $t = t_{0}$ $$u(z,t_{0}) = A \cos (\omega t_{0}-kz) = A \cos (kz -\omega t_0 ) = A \cos (kz + \alpha_{2})$$Otteniamo una **funzione periodica spazialmente** con periodo spaziale
   $\to \lambda$ lunghezza d'onda, che indica la **velocità di propagazione**
   $\to$ da essa dipende la capacità di osservazione dell'onda: la dimensione di visibilità dell'onda è di uguale ordine di $\lambda$
	   - riducendo $\lambda$ riduciamo la capacità di attraversamento del tessuto

$\implies$ Il segnale quindi è doppiamente periodico
## Calcolo velocità di propagazione
Consideriamo un istante di tempo successivo a $t_{0}$ ($t_{0} + \Delta t$), osserviamo l'onda corrispondente e la sua propagazione sull'asse $z$:

![[Pasted image 20251219185446.png|center|300]]

Per il calcolo della velocità tracciamo una retta parallela all'asse $z$ e prendiamo due punti di intersezione:
- $P_{1}(z_{0},t_{0})$, sulla $I$ onda
- $P_{2}(z_{0}+\Delta z, t_{0} + \Delta z)$, sulla $II$ onda
imponiamo $u(P_{1}) = u(P_{2}) \to$ **assenza di deformazione**
$$
\displaylines{
A \cos(\omega t_{0}-kz_{0}) = A \cos(\omega t_{0} + \omega \Delta t - kz_{0} - k\Delta z) \\
\omega t_{0}-kz_{0} = \omega t_{0} + \omega \Delta t - kz_{0} - k \Delta z \\
\omega \Delta t- k\Delta z = 0
}
$$
La velocità di fase
$$
\displaylines{
v_p = \frac{\Delta z}{\Delta t} = \frac{\omega}{k} \hspace{4ex} \text{ con } \omega = \frac{2\pi}{T} \text{ e } k = \frac{2\pi}{\lambda} \hspace{4ex} \text{ costanti di propagazione} \\
\to v_p = \frac{2\pi}{T} \cdot \frac{\lambda}{ 2\pi} = \frac{\lambda}{ T} = \lambda f
}
$$
da cui otteniamo
$$
\lambda = \frac{v_p}{f} \hspace{8ex} v_p = \frac{1}{\sqrt{ \epsilon \mu}}
$$
Possiamo quindi esprimere
$$
\lambda = \frac{1}{\sqrt{ \epsilon \mu }} \cdot \frac{1}{f} = \frac{1}{\sqrt{ \epsilon \mu }} \cdot \frac{1}{\frac{\omega}{2 \pi}} = \frac{1}{\sqrt{ \epsilon \mu }} \cdot \frac{2 \pi}{\omega}
$$
>[!question] Osservazione
>Quindi all'aumentare di $\lambda \implies f$ diminuisce (e viceversa)
>- a parità di $f$, cambiando le caratteristiche del materiale di propagazione il segnale cambia velocità $v_p$
## Equazioni di Maxwell
Vediamo le equazioni di Maxwell in forma esponenziale (derivate rispetto a spazio e tempo)
$$
\left\{\begin{array}{l}
\nabla \times \vec{e} = -\frac{\partial \vec{b}}{\partial t} \\
\nabla \times \vec{h} = \frac{\partial \vec{b}}{\partial t} + \vec{J} \\
\nabla \cdot \vec{d} = \rho \\
\nabla \cdot \vec{b} = 0
\end{array}\right.
$$
dove $\nabla$ operatore nabla
$$
\nabla \triangleq \left(\begin{array}{c}
\frac{\partial}{\partial x} , \frac{\partial}{\partial y}, \frac{\partial}{\partial z}
\end{array}\right)
$$
identifica il verso della variazione spaziale lungo le 3 direzioni.

**Grandezze coinvolte**
- $\vec{e}, \vec{h}$, sono i campi, rispettivamente elettrico e magnetico
- $\vec{d}, \vec{b}$, sono induzioni
- $\vec{J}, \rho$, sono sorgenti
Dove le sorgenti sono **termini noti**, mentre campi e induzioni sono **incognite**

>[!question] Osserviamo che il numero di equazioni non basta per calcolare tutte le incognite

1. Se abbiamo **variazioni spaziali** $(\nabla \times \vec{e})$ del campo elettrico $\implies$ abbiamo **variazioni temporali** $\left( -\frac{\partial \vec{b}}{\partial t} \right)$ del campo magnetico
   $\to$ è estensione della legge di Faraday dell'induzione
2. Se ho **variazioni spaziali** del campo magnetico è perché
   - **corrente** (flusso di cariche) : $\vec{J}$
   - variazione **temporale** di induzione elettrica: $\frac{\partial \vec{d}}{\partial t}$

Quindi una variazione temporale del campo elettrico genera variazioni spaziali del campo magnetico $\to$ legge di Ampere generalizzata

### Operatore nabla
$\to$ Consideriamo un campo vettoriale a funzione vettoriale di $x, y, z$
$$
A(x,y,z) = \hat{x} A_x (x,y,z) + \hat{y} A_y (x,y,z) + \hat{z} A_z (x,y,z)
$$

Tramite l'operatore $\nabla$ possiamo analizzare:
1. **divergenza**: prodotto scalare
   $$\displaylines{\nabla \cdot A = \left(\hat{x} \frac{\partial}{\partial x} + \hat{y} \frac{\partial}{\partial y} + z \frac{\partial}{\partial z}\right) \cdot \left(\hat{x} A_x(x,y,z) + \hat{y} A_y(x,y,z) + \hat{z} A_z(x,y,z)\right) = \\ = \frac{\partial A_x}{\partial x} + \frac{\partial A_y}{\partial y} + \frac{\partial A_z}{\partial z} = \Phi (x,y,z)}$$
   Otteniamo un **campo scalare**
   >[!important] Applicazione
   >Consideriamo un campo vettoriale descritto dalle linee di forza
   >$\to$ facendo il prodotto scalare, otteniamo la sua divergenza (distanza da sorgente di natura elettrica)
   >L'effetto di $\nabla$ è
   >- **elevato** (in $\vec{a}$): campo diverge bruscamente
   >- **basso** (in $\vec{b}$): a grande distanza dalla sorgente $\implies$ l'effetto diminuisce e le linee diventano parallele
   >![[Pasted image 20251219193309.png|center|200]]
   
2. **rotore**: prodotto vettoriale
   $\nabla \times \vec{A} = \vec{B} \to$ otteniamo un campo vettoriale ortogonale a $\nabla$ e $\vec{A}$
   >[!important] Applicazione
   >Consideriamo un campo vettoriale descritto dalle linee di forza
   >$\to$ facendo il prodotto vettoriale, otteniamo la sua **vorticosità** (quanto si avvolge la sorgente)
   >L'effetto di $\nabla$ è
   >- **elevato** (in $\vec{a}$), vorticoso
   >- **basso** (in $\vec{b}$), aumenta la distanza dal centro $\implies$ meno vorticoso
   >![[Pasted image 20251219193430.png|center|200]]

$\to$ Consideriamo ora invece un campo scalare: $\Phi(x,y,z)$
possiamo fare solo prodotto scalare - vettore
$$
\nabla \Phi = \hat{x} \frac{\partial \Phi}{\partial x} + \hat{y} \frac{\partial \Phi}{\partial y} + \hat{z} \frac{\partial \Phi}{\partial z}
$$
Otteniamo un campo vettoriale di 3 elementi (ogni componente rappresenta la **distribuzione della variazione spaziale** di $\Phi$)
$$
\left.\begin{array}{l}
\text{lungo }x \to \text{variazione di }\Phi \text{ su }\hat{x} \\
\text{lungo }y \to \text{variazione di }\Phi \text{ su }\hat{y} \\
\text{lungo }z \to \text{variazione di }\Phi \text{ su }\hat{z}
\end{array}\right\} \to \text{Gradiente:   }
\begin{array}{l}
\text{direzione max variazione} \\
\text{del campo scalare}
\end{array}
$$
Grazie al gradiente possiamo rappresentare una distribuzione di generica $q$.

**Applicazione**
Potenziale elettrico (operazione inversa di $\nabla$) è un esempio di campo scalare per cui vale
$$
V = \int_C -\vec{E} \cdot d \vec{l}
$$
applicando $\nabla$ otteniamo proprio $\vec{E}$
### dalla sorgente ai campi
Nelle equazioni di Maxwell mancano nozioni sulle caratteristiche del mezzo ($\neq$ materiale $\implies \neq$ velocità di propagazione).
Introduciamo quindi le **relazioni costitutive**
$$
\left\{\begin{array}{l}\vec{D} = \epsilon \vec{E} \\ \vec{B} = \mu \vec{H} \\ \vec{J} = \sigma \vec{E}\end{array}\right.
$$
Le quantità $\vec{E}$ e $\vec{H}$ dipendono dal tempo $\implies$ appartengono al dominio dei fasori, mentre nelle equazioni di Maxwell $\vec{e}$ e $\vec{h}$ sono quantità che dipendono da un $t=t_{0}$, sono quindi istantanei.

Quindi per sostituire relazioni passiamo al dominio dei fasori usando numeri complessi.

Riscriviamo l'equazione d'onda con notazione dei complessi:
$$
\displaylines{
u(z,t) = A \cos (\omega t- kz) \\
= A \mathrm{Re}\{e^{j(\omega t - kz)}\}\\
= \mathrm{Re}\{A e ^{-jkz} \cdot e^{j\omega t}\}
}
$$
otteniamo così una espressione istantanea; abbiamo inoltre diviso le quantità spazio e tempo.
>[!important] Definiamo $u(z)$ come un **fasore**: funzione vettoriale complessa delle sole coordinate spaziali 

$$
u(z,t) = \mathrm{Re}\{u(z) \cdot e^{j\omega t}\}
$$

Esprimiamo le equazioni di Maxwell nel dominio dei fasori sfruttando la notazione:
$$
\begin{array}{rrl}
\vec{e} (x,y,z,t) = \mathrm{Re}\{\vec{E}(x,y,z)e^{j \omega t}\} \implies
& \nabla \times \mathrm{Re} \{\vec{E} e^{j \omega t}\} & = -\frac{\partial}{\partial t} \mathrm{Re}\{\vec{B} e^{j \omega t}\} \\
& & = -\frac{\partial}{\partial t} \mathrm{Re} \{\mu \vec{H} e^{j \omega t}\} \\
&\mathrm{Re} \{\nabla \times \vec{E} \cdot e^{j \omega t}\} &= \mathrm{Re} \{-j \omega \mu \vec{H} e^{j \omega t}\} \\
&\mathrm{Re} \{\nabla \times \vec{E}\} &= \mathrm{Re}\{-j \omega \mu \vec{H}\}
\end{array}
$$
Possiamo imporre come uguali i termini interni 
$$
\nabla \times \vec{E} = -j \omega \mu \vec{H}
$$
Passiamo a $\vec{h}$
$$
\begin{array}{rrl}
\vec{h}(x,y,z,t) = \mathrm{Re}\{\vec{E}(x,y,z)e^{j \omega t}\} \implies
 & \nabla \times \mathrm{Re}\{\vec{H} e^{j \omega t}\} & = + \frac{\partial}{\partial t} \mathrm{Re}\{\vec{D} e ^{j \omega t}\} \\
 & & =+\frac{\partial}{\partial t} \mathrm{Re}\{\epsilon \vec{E} e^{j \omega t}\} \\
 & \mathrm{Re}\{\nabla \times \vec{H} \cdot e^{j \omega t}\} & = \mathrm{Re}\{+j \omega \epsilon \vec{E} e^{j \omega t}\} \\
 & \mathrm{Re}\{\nabla \times \vec{H}\} & = \mathrm{Re}\{+j \omega \epsilon \vec{E}\}
\end{array}
$$
Possiamo imporre come uguali i termini interni
$$
\nabla \times \vec{H} = + j \omega \epsilon \vec{E}
$$

Analizziamo quindi la propagazione dell'onda in una regione di spazio priva di sorgenti $(\vec{J}= 0$ e $\rho = 0)$ in condizione di regime sinusoidale. In questa zona l'onda si "autosostiene": la variazione temporale del campo elettrico genera il campo magnetico e viceversa. Questo meccanismo di induzione reciproca permette all'onda di viaggiare nello spazio autonomamente sena più bisogno della corrente $\vec{J}$ che l'ha originata inizialmente.

$$
\begin{array}{ll}
\text{Dominio del tempo} & \text{Dominio dei fasori} \\ \\
\left\{\begin{array}{l}\nabla \times \vec{e} = -\frac{\partial \vec{b}}{\partial t}  \\
\nabla \times \vec{h} = \frac{\partial \vec{d}}{\partial t} \\
\nabla \cdot \vec{d} = 0 \\
\nabla \cdot \vec{b} = 0\end{array}\right. \hspace{16 ex}&
\left\{\begin{array}{l}\nabla \times \vec{E} = -j \omega \mu \vec{H} \\
\nabla \times \vec{H} = j \omega \epsilon \vec{E} \\
\nabla \cdot \vec{D} = 0 \\
\nabla \cdot \vec{B} = 0 \end{array}\right.
\end{array}
$$

### Calcolo soluzione equazioni di Maxwell
#### Ipotesi
**Ipotesi 1**
Caratteristiche del mezzo
$$
\left\{\begin{array}{l}\vec{D} = \epsilon \vec{E} \\
\vec{B} = \mu \vec{H}\end{array}\right. \hspace{4ex} \text{[N.B]: } \sigma = 0 \implies \vec{J} = 0
$$
**Ipotesi 2**
campo elettrico e campo magnetico hanno un solo componente che dipende solo da $z$
$$
\displaylines{
\vec{E} = \hat{x} E_x(z) \hspace{8ex} z \implies \frac{\partial E_x}{\partial y} = \frac{\partial E_x}{\partial x} = 0 \\
\vec{H} = \hat{y} H_y(z) \hspace{8ex} z \implies \frac{\partial H_j}{\partial y} = \frac{\partial H_y}{\partial x} = 0
}
$$
questo vale perché 
- calcolo del rotore$$
\nabla \times \vec{E} = \left|\begin{array}{ccc}\hat{x} & \hat{y} & \hat{z} \\ \frac{\partial}{\partial x} & \frac{\partial}{\partial y} & \frac{\partial}{\partial z} \\ E_x & E_y & E_z\end{array}\right| = \left|\begin{array}{ccc}\hat{x} & \hat{y} & \hat{z} \\ 0 & 0 & \frac{d}{dz} \\ E_x & 0 & 0\end{array}\right| = \hat{y} \frac{dE_x}{dz}
$$
- imponiamo la prima equazione di Maxwell$$\begin{array}{rl}\nabla \times \vec{E} = \hat{y} \frac{dE_x}{dz} &= -j \omega \mu \vec{H}\\ & = -j \omega \mu (\hat{x} H_x + \hat{y} H_y + \hat{z} H_z)\end{array}$$
- calcoliamo il valore delle 3 componenti$$\left.\begin{array}{r}\hat{x} \to 0 = -j \omega \mu H_x \\ \hat{y} \to \hat{y} \frac{dE_x}{dz} = -j \omega \mu H_y \\ \hat{z} \to 0 = -j \omega \mu H_z\end{array}\right\} \to \vec{H} = \hat{y} H_y(z)$$
Abbiamo quindi ottenuto una nuova forma della prima equazione
$$
\frac{dE_x}{dz} = -j \omega \mu H_y
$$
Sfruttiamo ora l'ipotesi per trasformare la seconda equazione
- calcolo del rotore$$\nabla \times \vec{H} = \left|\begin{array}{ccc}\hat{x} & \hat{y} & \hat{z} \\ \frac{\partial}{\partial x} & \frac{\partial}{\partial y} & \frac{\partial}{\partial z} \\ H_x & H_y & H_z\end{array}\right| = \left|\begin{array}{ccc}\hat{x} & \hat{y} & \hat{z} \\ 0 & 0 & \frac{d}{d z} \\ 0 & H_y & 0\end{array}\right| = -\hat{x} \frac{dH_y}{dz}$$
- imponiamo la seconda equazione di Maxwell$$\nabla \times \vec{H} = -\hat{x} \frac{dH_y}{dz} = j \omega \epsilon \hat{x} E_x$$
Otteniamo quindi la nuova forma della seconda equazione
$$
\frac{dH_y}{dz} = -j \omega \epsilon E_x
$$
Ipotizzando quindi di essere nel caso **monodimensionale** le equazioni di Maxwell diventano
$$
\left\{\begin{array}{l} \frac{dE_x}{dz} = -j \omega \mu H_y \\ \nabla \cdot \vec{D} = 0 \\ \frac{dH_y}{dz} = -j \omega \epsilon E_x \\ \nabla \cdot \vec{B} = 0\end{array}\right.
$$
#### Risoluzione
Grazie a queste ipotesi semplificative sarà più semplice arrivare ad una soluzione

Iniziamo derivando tutto rispetto a $z$
$$
\begin{array}{ll}
\frac{d^2E_x}{dz^2} = -j \omega \mu \frac{d H_y}{dz}
& \frac{d^2H_y}{dz^2}=-j \omega \epsilon \frac{dE_x}{dz} \\
\frac{d^2 E_x}{dz^2} = (-j \omega \mu)(-j \omega \epsilon E_x) \to j^2 =-1 \hspace{8ex}
& \frac{d^2 H_y}{dz^2} = (-j \omega \epsilon)(-j \omega \mu H_y) \to j^2=-1 \\
\frac{d^2 E_x}{dz^2} = - \omega ^2 \epsilon \mu E_x \hspace{4ex} \text{con }k \triangleq \sqrt{  \mu \epsilon }
& \frac{d^2H_y}{dz^2}=- \omega^2 \epsilon \mu H_y \hspace{4ex} \text{con }k \triangleq \sqrt{  \mu \epsilon } \\
\frac{d^2E_x}{dz^2} +k^2 \omega^2 E_x = 0
& \frac{d^2 H_y}{dz^2} + k^2 \omega^2 H_y = 0
\end{array}
$$
Abbiamo quindi dimostrato che $\vec{E}$ e $\vec{H}$ soddisfano **equazione differenziale d'onda**
$$
\displaylines{
E_x(z) = E_x^+ \cdot e^{-j kz} + E_x^- \cdot e^{-jkz}\\
H_y(z) = H_y^+ \cdot e^{-jkz} + H_y^- \cdot e^{-j kz}
}
$$
![[Pasted image 20251220123555.png|center|300]]

>[!important] Significato
>I campi si propagano lungo un'onda che quando incontro un ostacolo (con $\sigma = 0$) l'onda si divide in onda **diretta** e onda **riflessa**.
>L'equazione generale è data dalla somma di ogni possibile suddivisione dell'impatto

>[!question] Osservazione
>Se avessimo conducibilità ($\sigma \neq 0$) ci sarebbe un'attenuazione di ampiezza, il materiale reagisce assorbendo energia.
>Quindi l'energia non può trasferirsi oltre una certa distanza, cioè quella relativa alla massima attenuazione che non superi il rumore sovrapposto.

Supponiamo di essere in assenza di ostacoli:
$$
\left\{\begin{array}{l}E_x(z)  = E_x^+ \cdot e^{-jkz} \\ H_y(z) = H_y^+ \cdot e^{-jkz}\end{array}\right. \hspace{3ex} \to \hspace{3ex} \left\{\begin{array}{l}e_x(z,t) = \mathrm{Re}\{E_x^+\cdot e^{-jkz} \cdot e^{j \omega t}\} = E_x^+ \cos (\omega t - kz) \\ h_y(z,t) = \mathrm{Re}\{H_y^+ \cdot e^{-jkz} \cdot e^{j \omega t}\} = H_j^+ \cos (\omega t - kz)\end{array}\right.
$$
Due onde si propagano con uguale modalità ma ampiezza diversa.