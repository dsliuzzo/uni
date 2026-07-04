#appunti 
#elettromagnetismo_ed_elettrotecnica
# Teoremi delle reti
## Serie e parallelo
### Serie
Resistenza equivalente
$$
R_{eq} = R_{1}+ R_{2}
$$
#### Partitore di tensione
$$
v_{1} = v \frac{R_{1}}{R_{1}+R_{2}} \hspace{8ex} v_{2} = v \frac{R_2}{R_{1}+R_{2}}
$$
### Parallelo
Resistenza equivalente parallelo
$$
R_{eq} = \frac{R_1 \cdot R_{2}}{R_{1}R_{2}} \hspace{8ex} R_{eq} = \frac{1}{\frac{1}{R_{1}}+\dots+\frac{1}{R_{n}}}
$$
#### Partitore di corrente
$$
i_1 = i \frac{R_{2}}{R_{1}+R_{2}} \hspace{8ex} i_{2} = i \frac{R_{1}}{R_{1}+R_{2}}
$$
## Generatori equivalenti
![[Formulario - elettrotecnica-1777211670284.webp]]
$$
v_s = R i_s \hspace{8ex} i_s = \frac{v_s}{R}
$$
## Sovrapposizione degli effetti
**Spegnere generatori**
Generatore di tensione $\to$ cortocircuito
Generatore di corrente $\to$ circuito aperto
## Thevenin
Permette di sostituire porzioni di circuito con un generatore reale di tensione
- $R_{Th}$ spengo tutti i generatori e calcolo la resistenza rimanente
- $V_{Th}$ calcolo la tensione a vuoto sui morsetti
## Norton
Permette di sostituire porzioni di circuito con un generatore reale di corrente
- $R_{N}$ spengo tutti i generatori e calcolo la resistenza rimanente
- $I_{N}$ calcolo la corrente di cortocircuito ai morsetti
## Millman
>[!multi-column]
>
>>[!blank]
>>![[Formulario - elettrotecnica-1777815235673.webp|center|300]]
>
>>[!blank]
>>$$v_{0} = \frac{\sum_{i} \frac{V_{Ai}}{R_{Ai}} + \sum_{j} I_{Bj}}{\sum_{i} \frac{1}{R_{Ai}} + \sum_{k} \frac{1}{R_{Ck}}}$$
>




# Fasori
$$
Z_R = R [\Omega] \hspace{8ex} Z_L = j \omega L \hspace{8ex} Z_C = \frac{1}{j \omega C}
$$

