#appunti 
#matematica2 
# EDO
### es.1
$y''=y$      EDO del 2° ordine in forma esplicita
$$
\begin{array}{cc}
y_{1}(t) = e^t & y_{2}(t) = e^{-t} \\
y_{1}'(t) = e^t & y_{2}'(t) = e^{-t} \\
y_{1}''(t) = e^t & y_{2}''(t) = e^{-t}
\end{array}
$$
facciamo la combinazione lineare di queste due soluzioni possibili
$$
\displaylines{
y(t) = c_{1}y_{1}(t)*c_{2}y_{2}(t) = c_{1}e^t+c_{2}e^{-t} \\
y'(t) = c_{1}e^t-c_{2}e^{-t} \hspace{4ex} \forall c_{1},c_{2} \in \mathbb{R}
}
$$
questo non sarà altro che l'integrale generale che dipende da due parametri $c_1$ e $c_2$.

---
### es.2
$t*y'(t)+y(t) = 0$   EDO del 1° ordine in forma implicita

$$
y(t)=\frac{c}{t} \hspace{4ex} \mathbb{R} \backslash \left\{0\right\} = (-\infty, 0) \cup (0,+\infty)
$$
abbiamo definito questa funzione che sarà poi l'integrale generale dell'EDO negli insiemi $I_1=(-\infty, 0)$ e $I_2=(0,+\infty)$
proviamo a trovare la sua derivata:
$$
y'(t) = -\frac{c}{t^2}
$$
sostituiamo ora la funzione e la sua derivata all'equazione iniziale:
$$
\displaylines{
t*\left(-\frac{c}{t^2}\right)+\frac{c}{t} = 0 \\
-\frac{c}{t}+\frac{c}{t} = 0
}
$$
la condizione è verificata quindi possiamo confermare che $y(t)=\frac{c}{t}$ è l'integrale generale.

Proviamo ora ad associare una condizione iniziale, per esempio $y(3)=1$, otterremo il sistema seguente
$$
\left\{\begin{array}{l}
t*y'(t)+y(t) = 0 \\ y(3)=1
\end{array}\right.
$$
$t_0$ è uguale a $3$ che appartiene all'insieme precedentemente definito come $I_2$, di conseguenza
$$
y(t)=\frac{c}{t} \hspace{2ex} \forall t \in (0,+\infty)
$$
quindi possiamo ora sostituire la nostra $t_0=3$ alla $t$ incognita dell'integrale generale:
$$
y(3)=\frac{c}{3}=1 \implies c=3
$$
possiamo quindi concludere che
$$
y(t)=\frac{3}{t} \hspace{4ex} \forall t \in (0,+\infty)
$$

---

## EDO del 1° ordine
### separabili es.1
$$
y'(t) = \frac{1}{t}(y-1)
$$
$$
a(t) = \frac{1}{t} \hspace{4ex} \begin{array}{l}
\to \in C(0,+\infty) = I_{1} \\ \to \in C(-\infty, 0) = I_{2}
\end{array}$$
$$
b(y) = y-1\hspace{4ex} \to \in C(-\infty, +\infty) = J
$$
### risoluzione passo 1
$$
y'(t)+\frac{1}{t}y(t) =  0
$$
troviamo l'integrale generale
$$
\displaylines{
\begin{array}{cc}
a(t) = \frac{1}{t} & \begin{array}{c}
\in C(0,+\infty) \\ \in C(-\infty, 0)
\end{array}
\end{array} \\

f(t) = 0
}
$$
$$
\displaylines{
A(t) = \int a(t)dt \implies A(t) = \ln|t| \\
\left\{
\begin{array}{c}
\ln t \hspace{4ex} \text{per }t\in(0,+\infty) \\
\ln -t \hspace{4ex} \text{per }t\in(-\infty,0)
\end{array}
\right.
}
$$
calcoliamo ora $z(t)$
$$
\displaylines{
z(t)=k^{-\ln t} = ke^{\ln(t^{-1})} = kt^{-1} = \frac{k}{t} \\
z(t)=k^{-\ln -t} = ke^{\ln(-t^{-1})} =k(-t^{-1})=-\frac{k}{t}
}
$$
## EDO del 2° ordine
### 1° caso
$$
y''(t) + 3y(t) = t
$$
Equazione caratteristica
$$
\displaylines{
\lambda^2 + a \lambda + b = 0 \implies \lambda^2 + 3  =0 \\
\lambda_{1,2} = \pm i\sqrt{ 3 }
}
$$
**soluzione della omogenea associata**
$$
z(t) = k_{1} \cos(\sqrt{ 3 }t)+k_{2} \sin (\sqrt{ 3 }t)
$$
**soluzione caratteristica**
$f(t) = t$ polinomio di grado 1
$$
\lambda_{1,2} \neq 0 \implies \overline{y}(t) =At+B
$$
deve soddisfare la EDO
$$
\overline{y}'(t) = A \hspace{4ex} \overline{y}''(t) = 0
$$
sostituzione nella EDO
$$
\displaylines{
0+3(At+B)=t \\
3At + 3B = t \\
\left\{\begin{array}{l}
3A = 1 \\ 3B = 0 
\end{array}\right. \implies
\left\{\begin{array}{l}
A = \frac{1}{3} \\ B= 0
\end{array}\right. \implies \overline{y}(t)=\frac{1}{3}t
}
$$
**soluzione integrale generale**
$$
y(t) = k_{1}\cos(\sqrt{ 3 }t)+k_{2} \sin (\sqrt{ 3 }t)+\frac{1}{3}t \hspace{4ex} k_{1},k_{2} \in \mathbb{R} \hspace{4ex} t \in (-\infty, + \infty)
$$


### 2° caso
$$
y''(t) +2y'(t) +3y(t) = 2e^{3t}
$$
$$
\lambda^2+2 \lambda +3 = 0 \implies \lambda_{1,2} = -1 \pm i \sqrt{ 2 }
$$
**soluzione particolare omogenea**
$$
z(t) = e^{-t}(k_{1} \cos(\sqrt{ 2 }t)+k_{2} \sin (\sqrt{ 2 }t))
$$
**soluzione particolare completa**
$$
\overline{y}(t) = A e^{3t} \hspace{6ex}
\overline{y}'(t) = 3Ae^{3t} \hspace{6ex}
\overline{y}''(t) = 9Ae^{3t}
$$
sostituiamo nella EDO
$$
\displaylines{
9Ae^{3t}+6Ae^{3t}+3Ae^{3t}=2e^{3t} \\
9A +6A+3A = 2 \\
A = \frac{1}{9}
}
$$
$$
\overline{y}(t) = \frac{1}{9}e^{3t}
$$
**soluzione integrale generale**
$$
y(t) = e^{-t}(k_{1}\cos(\sqrt{ 2 }t)+k_{2} \sin(\sqrt{ 2 }t))+\frac{1}{9}e^{3t}
$$
### 3° caso
$$
y''(t) -4y'(t) +4y(t) = \cos(t)
$$
$\beta = 1$
$$
\lambda^2 -4 \lambda + 4 = 0 \hspace{4ex} \lambda_{1,2} = 2 \neq \pm i
$$
**soluzione particolare omogenea**
$$
z(t) = k_{1} e^{2t}+k_{2} t e ^{2t}
$$
**soluzione particolare completa**
$$
\displaylines{
\overline{y}(t) = A \cos t + B \sin t \\
\overline{y}'(t) = -A \sin t+B \cos t \\
\overline{y}''(t) = -A \cos t-B \sin t
}
$$
sostituiamo nella EDO
$$
\displaylines{
-A \cos t-B \sin t -4(-A \sin t+B \cos t) +4(A \cos t + B \sin t)= \cos t\\
\cos t(-A-4B+4A)+\sin t(-B+4A+4B) = 1*\cos t+0 * \sin t \\
\left\{\begin{array}{l}3A -4B = 1 \\ 4A + 3B = 0\end{array}\right. \implies\left\{\begin{array}{l}9A-12B=3 \\ 16A + 12B = 0\end{array}\right. \implies \left\{\begin{array}{l}A = \frac{3}{25} \\ B = -\frac{4}{25}\end{array}\right.
}
$$
$$
\overline{y}(t) = \frac{3}{25} \cos t - \frac{4}{25} \sin t
$$
**soluzione integrale generale**
$$
y(t) = k_{1} e^{2t}+k_{2} t e^{2t}+\frac{3}{25} \cos t - \frac{4}{25} \sin t
$$
$k_{1},k_{2} \in \mathbb{R}$
$\forall t \in (-\infty, +\infty)$

# Funzioni vettoriali di più variabili
### Superfici in forma parametrica (sfera)
Sfera con centro in $(0,0,0)$ e raggio $R>0$
$$
\left\{\begin{array}{l}x = R \sin \varphi \cos \theta \\ t = R \sin \varphi \sin \theta \\ R \cos \varphi\end{array}\right.
$$
$R$ è finito, $\varphi \in [0,\pi]$ **colatitudine**, $\theta \in [0, 2\pi]$ **longitudine**
Dato il centro $C(x_{0},y_{0},z_{0})$ e raggio $R$ possiamo rappresentare la sfera con l'equazione
$$
(x-x_{0})^2+(y-y_{0})^2+(z-z_{0})^2 = R^2
$$
Nel nostro caso il centro è nell'origine, quindi otteniamo
$$
x^2+y^2+z^2 = R^2
$$
dimostriamo la forma parametrica come segue
$$
\displaylines{
x^2+y^2+z^2 = R^2\sin^2 \varphi \cos^2 \theta + R^2 \sin^2 \varphi \sin ^2 \theta + R^2 \cos^2 \varphi =\\
=R^2[\sin^2 \varphi(\cos^2 \theta + \sin^2 \theta) + \cos^2 \varphi] = \\
= R^2 [\sin^2 \varphi+ \cos^2 \varphi] = R^2
}
$$
