#fisica 
# Vettori

| modulo         | $\|\overline{a}\|=\sqrt{ a_x^2+a_y^2 }$      |
| -------------- | -------------------------------------------- |
| coordinate $x$ | $a_x=a\cos(\alpha)$                          |
| coordinate $y$ | $a_y=a\sin(\alpha)$                          |
| angolo         | $\alpha=\arctan\left(\frac{a_y}{a_x}\right)$ |

| prodotto scalare    | $\vec{A}*\vec{B} = \|\vec{A}\|\|\vec{B}\|\cos \theta$       |
| ------------------- | ----------------------------------------------------------- |
| prodotto vettoriale | $\vec{A}\times \vec{B} = \|\vec{A}\|\|\vec{B}\|\sin \theta$ |

# Cinematica
## Particella ferma

| spostamento | $x=x_0$ |
| ----------- | ------- |
| velocità    | $v=0$   |

## Moto rettilineo uniforme

| velocità media | $v_m=\frac{\Delta x}{\Delta t}$ |
| -------------- | ------------------------------- |

| accelerazione | $a=0$              |     |
| ------------- | ------------------ | --- |
| velocità      | $v_x=v_{0x}$       | 1   |
| spostamento   | $x=x_0 + v_{0x} t$ | 2   |
## Moto uniformemente accelerato

| accelerazione media | $a_m=\frac{\Delta v}{\Delta t}$ |
| ------------------- | ------------------------------- |

| accelerazione | $a=a_0$                         |     |
| ------------- | ------------------------------- | --- |
| velocità      | $v_x=v_{0x}+at$                 | 3   |
| spostamento   | $x=x_0+v_{0x}t+\frac{1}{2}at^2$ | 4   |

| velocità/accelerazione/spostamento | $v_x^2=v_{0x}^2+2a(x-x_0)$ |
| ---------------------------------- | -------------------------- |
### Moto del grave
Considerando l'accelerazione di gravità ($\overline{g}=9,81 m/s$) che spinge il corpo in direzione contraria al sistema di riferimento.

| velocità    | $v_y=v_{0y}-gt$                 |
| ----------- | ------------------------------- |
| spostamento | $y=y_0+v_{0y}t-\frac{1}{2}gt^2$ |
tempo per raggiungere il punto più alto / il suolo

| tempo | $t=\sqrt{\frac{2h}{g}}$ |
| ----- | ----------------------- |
## Moto in 2 dimensioni
in $y$ [[#Moto del grave]]
in $x$ [[#Moto rettilineo uniforme]]

| tempo di volo | $t=\frac{2v_{0y}}{g}$               |
| ------------- | ----------------------------------- |
| gittata       | $R=v_{0x}t=v_{0x}\frac{2v_{0y}}{g}$ |
### Moto circolare uniforme

| posizione                   | $\theta=\theta_0+\omega t$ |
| --------------------------- | -------------------------- |
| velocità                    | $v=\omega R$               |
| periodo/velocità angolare   | $T=\frac{2\pi}{\omega}$    |
| velocità angolare/frequenza | $\omega=2\pi f$            |

| accelerazione centripeta | $\overline{a}_c=\omega^2r$ | $a_c = \frac{v^2}{r}$ |
| ------------------------ | -------------------------- | --------------------- |
### Moto circolare uniformemente accelerato

| posizione         | $\theta=\theta_0+\omega_0t+\frac{1}{2}\alpha t^2$ |
| ----------------- | ------------------------------------------------- |
| velocità angolare | $\omega=\omega_0+\alpha t$                        |

### Moto periodico
#### Moto armonico semplice

| Posizione     | $x(t) = A \sin (\omega t + \delta)$       |
| ------------- | ----------------------------------------- |
| Velocità      | $v(t) = A\omega \cos (\omega t + \delta)$ |
| Accelerazione | $a(t) = -\omega^2 x(t)$                   |

| Velocità angolare | $\omega = \frac{2\pi}{T}$ | $\omega = 2\pi f$ |
| ----------------- | ------------------------- | ----------------- |

# Dinamica

| 1° legge di Newton | $\overline{F}_{ris}=\overline{F}_1+\overline{F}_2+\dots+\overline{F}_n=\sum_{i=1}^n \overline{F}_i$ |
| ------------------ | --------------------------------------------------------------------------------------------------- |
| 2° legge di Newton | $\overline{F}_{ris}=m\overline{a}$                                                                  |
| 3° legge di Newton | $\overline{F}_{AB}=-\overline{F}_{BA}$                                                              |
## Forze

| Forza di gravità | $\overline{F}_p=m\overline{g}$    |
| ---------------- | --------------------------------- |
| Forza normale    | $\overline{N}=-\overline{F}_g$    |
| Forza di attrito | $\overline{F}_a=\mu \overline{N}$ |
| Forza elastica   | $F_e=-kx$                         |

### Forza circolare uniforme

| Forza centripeta | $\overline{F}_c=m a_c$ |
| ---------------- | ---------------------- |

# Lavoro ed energia

| Lavoro                            | $L=\overline{F}*\overline{s}$ |
| --------------------------------- | ----------------------------- |
| Teorema dell'energia cinetica     | $L=\Delta E_c$                |
| Energia cinetica                  | $E_c = \frac{1}{2} m v^2$     |
| Energia potenziale gravitazionale | $U_g = mgh$                   |
| Energia potenziale elastica       | $U_e = \frac{1}{2}kx^2$       |
| Conservazione energia meccanica   | $E_{mf} = E_{mi}$             |

# Quantità di moto e centro di massa
 
# Termodinamica

| Trasformazioni | Restrizioni                          | $I°$ Legge       | Altro                                          |
| -------------- | ------------------------------------ | ---------------- | ---------------------------------------------- |
| Tutte          |                                      | $\Delta E = Q-L$ | $\Delta E_{int} =n C_v \Delta T$, $L=\int pdV$ |
| Isocora        | $\Delta V = 0$, $L =0$               | $\Delta E = Q$   | $Q = n C_v \Delta T$                           |
| Isobara        | $\Delta p = 0$                       | $\Delta E = Q-L$ | $Q = n C_p \Delta T$, $L=p\Delta V$            |
| Isoterma       | $\Delta T = 0$, $\Delta E_{int} = 0$ | $Q=L$            | $L=nRT \ln \frac{V_f}{V_i}$                    |
| Adiabatiche    | $Q = 0$                              | $\Delta E = -L$  | $PV^\gamma = cost$, $TV^{\gamma-1} = cost$     |
| Cicliche       | $\Delta E_{int} = 0$                 |                  |                                                |
