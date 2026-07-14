# Blocco A: Definizioni e leggi
## 1. Descrivi le grandezze elettriche fondamentali tensione e corrente e le grandezze da esse derivate, potenza ed energia
[...]
## 2. Elenca gli elementi circuitali passivi di base, descrivi le loro relazioni costitutive e le espressioni per la potenza istantanea e l'energia
[...]
## 3. Descrivi i generatori indipendenti e le loro proprietà. Descrivi anche il corto circuito e il circuito aperto e il loro utilizzo come casi limite degli elementi circuitali
[...]
## 4. Introduci i concetti topologici di ramo, nodo, maglia, anello e grafo e descrivi le due leggi di Kirchhoff e le loro proprietà
[...]
## 5. Elenca i metodi di analisi che conosci e descrivi brevemente come si arriva a questi metodi partendo dalle leggi di Kirchhoff e dalla topologia dei circuiti
Dato un circuito di $R$ rami e $N$ nodi, il suo comportamento è determinato una volta note tutte le $2R$ grandezze elettriche (tensioni/correnti). Per calcolarle possiamo sfruttare:
- relazioni costitutive
- relazioni topologiche (KCL, KVL)
Per risolvere un circuito possiamo determinare una KVL per ogni maglia e una KCL per ogni nodo.

I metodi di analisi sono degli algoritmi che permettono di ridurre la complessità dei sistemi risolutivi.

**Metodo dei nodi**
Sapendo che per ogni nodo possiamo scrivere una KCL
$$
\sum_{n=1}^N \pm i_{n} = 0
$$
possiamo ottenere un sistema di $N$ equazioni, esprimibile sotto forma di matrice $\hat{A} \cdot \vec{i} = \vec{0}$, dove la matrice di incidenza $\hat{A}$ ha dimensioni $(N \times R)$. Di conseguenza, il numero di equazioni necessarie per risolvere il circuito non diminuisce. Esprimendo invece le correnti di ramo in funzione della loro tensione nodale, applicando la legge di Ohm si ottiene:
$$
\sum_{n=1}^N G_j (e_{An} - e_{Bn}) = 0
$$
Portando a secondo membro le correnti note dei generatori e fissando un nodo di riferimento a potenziale nullo si ottiene un sistema lineare a $N-1$ incognite, i potenziali nodali:
$$
\hat{G} \cdot \vec{e} = \vec{I}
$$
Pertanto, il metodo dei nodi consiste esattamente nella risoluzione di questo sistema matriciale.

**Metodo degli anelli**
Sapendo che per ogni maglia può essere definita una KVL
$$
\sum_{i=1}^{R-N+1} 
$$
## 6. Descrivi il concetto di elementi in serie e parallelo e dimostra le formule dei valori equivalenti di più elementi in serie e parallelo
Va dimostrata utilizzando le leggi di Kirchoff e ne derivi le formule
[...]
## 7. Descrivi il funzionamento dei seguenti circuiti: partitore di tensione e partitore di corrente e le loro relazioni con i concetti di generatore reale di tensione e generatore reale di corrente
[...]
## 8. Analisi di circuiti a regime sinusoidale: concetti di fasore, impedenza e ammettenza e regole per la combinazione di impedenze e ammettenze
[...]
## 9. Metodo dei fasori: come si passa dal circuito nel tempo al circuito simbolico e per quali ragioni continuano a valere i metodi di analisi anche per il circuito simbolico
[...]

---


# Blocco B: Teoremi e applicazioni
## 1. Descrivi cosa è l'equazione di porta, come si può ricavare e in particolare descrivi l'equazione di porta per circuiti lineari, ovvero la retta di carico, e le sue proprietà
[...]
## 2. Enunciato e dimostrazione del teorema di Thevenin e sua relazione con il partitore di tensione
[...]
## 3. Enunciato e dimostrazione del teorema di Norton e sua relazione il partitore di corrente
[...]
## 4. Equivalenza tra circuito di Thevenin e circuito di Norton, ovvero equivalenza tra generatore reale di tensione e generatore reale di corrente: formulazione e dimostrazione
[...]
## 5. Enuncia e dimostra il teorema del massimo trasferimento di potenza per reti resistive, e spiega la differenza tra rendimento e massimo trasferimento di potenza
[...]
## 6. Enunciato di dimostrazione di Millman
[...]
## 7. Potenza in regime sinusoidale: definizione di potenza attiva, reattiva, apparente e complessa e relazione con la potenza istantanea in regime sinusoidale
[...] %% se esce questa foldo l'esame%%
## 8. Teorema di Tellegen e conservazione della potenza istantanea e della potenza complessa: da quale principio fisico deriva, come si può dimostrare per i circuiti a costanti concentrate, che implicazioni ha nel caso della potenza complessa
[...] %% se esce questa prima faccio un pene sul foglio e poi mi ritiro %%
## 9. Teorema del massimo trasferimento di potenza attiva e rifasamento: illustra almeno uno di questi due argomenti e le sue implicazioni
[...]