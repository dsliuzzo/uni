# Istanza usata negli esempi

|          | **Fornitore** |           |
| -------- | ------------- | --------- |
| **piva** | **nome**      | **città** |
| F1       | A             | CS        |
| F2       | B             | RC        |
| F3       | C             | CS        |

|     | **Merce** |          |
| --- | --------- | -------- |
| **cod** | **nome**      | **marca**    |
| M1  | x         | $\alpha$ |
| M2  | y         | $\beta$  |

|           | **Fornitura** |        |
| --------- | ------------- | ------ |
| **fornitore** | **merce**         | **prezzo** |
| F1        | M1            | 10     |
| F1        | M2            | 5      |
| F2        | M1            | 8      |

| **Marca** |          |
| --------- | -------- |
| **nome**  | **sede** |
| $\alpha$  | CS       |
| $\beta$   | RC       |

# Esercizi 1
*es.* per casa
1. i dati delle forniture della merce M2
2. le piva dei fornitori che forniscono qualcosa (è presente nella tabella fornitura)
3. la marca delle merci di cod M2
4. i nomi delle merci fornite da F1
5. le città in cui è fornita la merce M2
6. le coppie nome_merce - nome_fornitore t.c. il fornitore con quel nome fornisce la merce con quel nome (collegare 3 tabelle usa le parentesi per evitare ambiguità nella notazione posizionale)

**fatti**

1. 
$$
\sigma_{\$2 = 'M2'}(\text{Fornitura})
$$
2. 
$$
\Pi_{\$1}(\text{Fornitura})
$$
3. 
$$
\Pi_{\$3}(\sigma_{\$1 = 'M 2'}(\text{Merce}))
$$
4. non è detto che le due notazioni abbiano costi differenti: ottimizzatore di query che analizza la query e trova il modo più efficiente di effettuare la query
$$
\Pi_{\$5} \left(\sigma_{\$1 = 'F1'} (\text{Forniture}) \underset{\$2 = \$1}{\bowtie} \text{Merce}\right) \quad \equiv \quad \Pi_{\$ 5} \left[\sigma_{\$1 = 'F1'} \left(\text{Forniture} \underset{\$2 = \$1}{\bowtie} \text{Merce}\right)\right] 
$$
5. 
$$
\Pi_{\$6} \left[\sigma_{\$ 2='M 2'}\left( \text{Fornitura} \underset{\$1 = \$1}{\bowtie} \text{Fornitore} \right)\right] \quad \equiv \quad \Pi_{\$6} \left[\sigma_{\$2='M 2'}\left( \text{Fornitura}\right) \underset{\$1 = \$1}{\bowtie} \text{Fornitore} \right]
$$
6. 
$$
\Pi_{\$5, \$8}\left[ \left( \text{Fornitura} \underset{\$1 = \$1}{\bowtie} \text{Fornitore} \right) \underset{\$2 = \$1}{\bowtie} \text{Merce} \right]
$$
# Esercizi 2
*es.* per casa
1. prezzo al quale il fornitore F1 fornisce la merce M2
2. marche che sono fornite da fornitori di CS
3. marche di merci di nome $y$ o merci fornite da un fornitore di nome B
4. nomi di merci che sono fornite a RC a meno di 10 euro
5. merci che non sono fornite da F1
6. nomi delle merci che non sono fornite a RC

**fatti**
1. 
$$
\Pi_{\$3}[\sigma_{\$1 = 'F 1'\ \wedge \  \$2 = 'M 2'}(\text{Fornitura})]
$$
2. 
$$
\Pi_{\$9}\left\{\sigma_{\$6 = 'CS'}\left[ \left( \text{Fornitura}\underset{\$1 = \$1}{\bowtie} \text{Fornitore} \right) \underset{\$2 = \$1}{\bowtie} \text{Merce} \right]\right\} 
$$
altra soluzione possibile
$$
\Pi_{\$9}\left\{\left[\sigma_{\$3 = 'CS'}(\text{Fornitore}) \underset{\$1 = \$1}{\bowtie} \text{Fornitura}\right] \underset{\$ 5 = \$1}{\bowtie} \text{Merce}\right\}
$$
join: prolungate le tuple di sinistra se **esiste almeno** un fornitore a destra che rispetta la proprietà
3. 
$$
\Pi_{\$3}\left[\sigma_{\$2 = 'y'}(\text{Merce})\right]\cup \Pi_{\$9}\left\{\sigma_{\$5 = 'B'}\left[ \left( \text{Fornitura}\underset{\$1 = \$1}{\bowtie} \text{Fornitore} \right) \underset{\$2 = \$1}{\bowtie} \text{Merce} \right]\right\}
$$
variabile nelle query = **vista** (risultato parziale)
$$
\displaylines{
\text{MarcheMerciY} = \Pi_{\$3}\left[\sigma_{\$2 = 'y'}(\text{Merce})\right] \\
\text{MarcheMerciForniteB} = \Pi_{\$9}\left\{\sigma_{\$5 = 'B'}\left[ \left( \text{Fornitura}\underset{\$1 = \$1}{\bowtie} \text{Fornitore} \right) \underset{\$2 = \$1}{\bowtie} \text{Merce} \right]\right\} \\
Q = \text{MarcheMerciY} \cup \text{MarcheMerciForniteB}
}
$$
4. 
$$
\Pi_{\$8}\left\{\sigma_{\$6 = 'RC' \ \wedge \ \$3 < 10}\left[ \left( \text{Fornitura}\underset{\$1 = \$1}{\bowtie} \text{Fornitore} \right) \underset{\$2 = \$1}{\bowtie} \text{Merce} \right]\right\}
$$
altra soluzione possibile
$$
\Pi_{\$6}\left\{\left\{\left[\sigma_{\$3 < 10} (\text{Fornitura})\right] \underset{\$2 = \$1}{\bowtie} \text{Merce}\right\} \underset{\$1 = \$1}{\bowtie} \sigma_{\$3 = 'RC'}(\text{Fornitore})\right\}
$$
5.  i due operandi devono essere compatibili
$$
\Pi_{\$1}(\text{Merce}) - \Pi_{\$2}\left[\sigma_{\$1 = 'F 1'}(\text{Fornitura})\right]
$$
6.  
$$
\Pi_{\$2}(\text{Merce}) - \Pi_{\$8}\left\{\sigma_{\$6 = 'RC'}\left[ \left( \text{Fornitura}\underset{\$1 = \$1}{\bowtie} \text{Fornitore} \right) \underset{\$2 = \$1}{\bowtie} \text{Merce} \right]\right\}
$$
giusto ma fragile (stiamo confrontando il nome, che non è chiave, e non il codice)
$\implies$ dobbiamo fare le sottrazioni sulle chiavi altrimenti la possibile omonimia porta ad errori

scomposizione in sotto problemi
cod delle merci fornite a RC
$$
\text{codMerciFornite} = \Pi_{\$7}\left\{\sigma_{\$6 = 'RC'}\left[ \left( \text{Fornitura}\underset{\$1 = \$1}{\bowtie} \text{Fornitore} \right) \underset{\$2 = \$1}{\bowtie} \text{Merce} \right]\right\}
$$
cod delle merci non fornite a RC
$$
\text{codMerciNonFornite} = \Pi_{\$1}(\text{Merce})- \text{codMerciFornite}
$$
nome delle merci non fornite a RC
$$
Q = \Pi_{\$3}\left[\left(\text{codMerciNonFornite}\right)\underset{\$1 = \$1}{\bowtie} \text{Merce}\right]
$$





$$
\Pi_{\$1}(\text{Merce}) - \Pi_{\$2}\left[\sigma_{\$1 = 'F 1'}(\text{Fornitura})\right]
$$
$$
\Pi_{\$1}(\text{Merce}) \underset{\$1 \neq \$2}{\bowtie} \Pi_{\$2} \left[\sigma_{\$1 = 'F 1'} (\text{Fornitura})\right]
$$
--- 
queste due query sono diverse: 
- join: ogni riga di sinistra viene prolungata con le righe di destra con cui c'è la relazione (una merce appartiene al risultato quando è possibile prolungarla, c'è almeno una fornitura fatta da F1 con un codice diverso, basta che ce n'è una: la join traduce $\exists$)
- sottrazione: merci non fornite da F1 (traduce $\forall$, prendo una merce e la restituisco se è diversa da tutte le merci che sono a destra)



## Quantificazioni
### Almeno 1
Voglio conoscere i fornitori che forniscono **almeno una** merce
$$
\text{Almeno1} = \Pi_{\$1}(\text{Fornitura})
$$

### Almeno 2
Fornitori che forniscono **almeno due** merci
La join traduce proprio **almeno**
È necessario un meccanismo di conteggio
Prendiamo due copie di fornitura e le prolungo: fornitore uguale, merce diversa
$$
\text{Almeno2} = \Pi_{\$1}\left[\text{Fornitura} \underset{\$1 = \$ 1 \wedge \$2 \neq \$2}{\bowtie} \text{Fornitura}\right]
$$
Otteniamo coppie di righe con lo stesso fornitore ma merce diverse
Il dbms non calcola tutte le coppie possibili.
Se avessimo

| F1  | M1  |
| --- | --- |
| F1  | M2  |
| F1  | M3  |
In $\text{Fornitura} \underset{\$1 = \$ 1 \wedge \$2 \neq \$2}{\bowtie} \text{Fornitura}$ F1 compare 6 volte
[...] da capire

### Almeno 3
dobbiamo fare 2 join
$$
\text{Almeno3} = \Pi_{\$1}\left[\left(\text{Fornitura} \underset{\$1 = \$ 1 \wedge \$2 \neq \$2}{\bowtie} \text{Fornitura}\right) \underset{\$1 = \$ 1 \wedge \$2 \neq \$2 \wedge \$4 \neq \$2}{\bowtie} \text{Fornitura}\right]
$$
terne di forniture che riguardano lo stesso fornitore ma merci diverse.
Esistono altri operatori che effettuano il conteggio, ma non li vedremo in algebra relazionale, ma direttamente in SQL.
In una query può occorrere più volte la stessa relazione: ogni occorrenza viene sostituita con una copia dell'istanza di quella relazione.
### Esattamente 1
esattamente $k$ = almeno $k$ ma non più di $k$
Fornitori che forniscono **esattamente** una merce
$$
\text{Esattamente1} = \text{Almeno1} - \text{Almeno2}
$$
### Al più 1
sottraggo a **tutti** i fornitori quelli che ne forniscono **almeno 2**
$$
\text{AlPiu1} = \text{Tutti}- \text{Almeno2}
$$
dove
$$
\text{Tutti} = \Pi_{\$1} (\text{Fornitore})
$$
### Almeno innestato
livello difficoltà prima query di prova di esame (capire se siamo in grado di ragionare sulla join in modo corretto).
Nomi dei fornitori che forniscono almeno 2 merci, ciascuna delle quali è fornita da almeno 2 fornitori
$$
\displaylines{
\text{fAlmeno2} = \text{Fornitura} \underset{\$1 = \$ 1 \wedge \$2 \neq \$2}{\bowtie} \text{Fornitura} \\
\text{mAlmeno2} = \text{Fornitura} \underset{\$2 = \$ 2 \wedge \$1 \neq \$1}{\bowtie} \text{Fornitura} \\
\text{codFornitori} = \Pi_{\$1}\left(\text{fAlmeno2} \underset{\$1 = \$1 \wedge \$2 = \$2}{\bowtie} \text{mAlmeno2}\right) \\
Q = \Pi_{\$3}\left(\text{codFornitori} \underset{\$1 = \$1}{\bowtie} \text{Fornitore}\right)
}
$$

$$
\displaylines{
\text{Merci2F} = \Pi_{\$2}\left(\text{Fornitura} \underset{\$ 2 = \$2 \wedge \$1 \neq \$1}{\bowtie} \text{Fornitura}\right) \\
\Pi_{\$2} \left\{\text{Fornitore} \underset{\$1 = \$1}{\bowtie} \left[ \left( \text{Fornitura} \underset{\$2 = \$1}{\bowtie} \text{Merci2F} \right) \underset{\$1 = \$1 \wedge \$2 \neq \$2}{\bowtie} \left( \text{Fornitura} \underset{\$2 = \$1}{\bowtie} \text{Merci2F} \right) \right] \right\}
}
$$


>[!bug] Tipico errore
>fornitori che forniscono almeno 2 merci speciali (merci con una determinata proprietà)
>$$\left(\text{Fornitura} \underset{\$2 = \$1}{\bowtie} \text{MerciSpeciali}\right) \underset{\$2 = \$1 \wedge \$ 4 \neq \$1}{\bowtie} \text{MerciSpeciali}$$
>È sbagliata perchè:
>per ogni riga di fornitura effettua la prima join con MerciSpeciali quando la MerceSpeciale è quella fornita. Per ciascuna di queste righe prova a prolungarla con un altra MerceSpeciale, ma non può mai verificarsi la condizione della seconda join: $\$2$ data la condizione della prima join sarà sempre uguale a $\$4$ se è presente nella tabella. Il risultato sarebbe quindi una relazione vuota.

## Negazioni
Fornitori che non forniscono la marca $\alpha$
$$
\displaylines{
\text{merciAlpha} = \sigma_{\$3 = \alpha}(\text{Merce}) \\
\text{fornisconoAlpha} = \Pi_{\$1} \left( \text{Fornitura} \underset{\$2 = \$2}{\bowtie} \text{merciAlpha} \right) \\
Q = \Pi_{\$1}(\text{Fornitore}) - \text{fornisconoAlpha}
}
$$


>[!bug] Errore
>$$\Pi_{\$1} \left[  \text{Fornitura} \underset{\$2 = \$ 1}{\bowtie} \sigma_{\$3 \neq \alpha}(\text{Merce}) \right] \implies \text{Minchiata}$$
>se  fornisce sia $\alpha$ che $\beta$ viene restituito comunque


Fornitori che forniscono solo/**al più la marca $\alpha$** (potrebbero non fornire niente, ma se forniscono qualcosa deve essere alpha).
tutti i fornitori - fornitori che forniscono marche $\neq \alpha$
$$
\displaylines{
\text{fornisconoAltri} = \Pi_{\$1}\left[ \text{Fornitura} \underset{\$2 = \$2}{\bowtie} \sigma_{\$3 \neq '\alpha'} (\text{Merce}) \right] \\
Q = \Pi_{\$1} (\text{Fornitore}) - \text{fornisconoAltri}
}
$$


---
# Esercizi 3
**Query per casa**
1. coppie nome fornitore - nome marca che hanno sede nella stessa città
2. nomi delle marche che sono fornite da fornitori che risiedono nella loro città
3. marche che producono almeno 2 merci, che sono fornite a meno di 10 euro da almeno 2 fornitori di CS
4. fornitori che non forniscono merci prodotte a CS
5. fornitori che forniscono solo merci prodotte a CS
6. prezzo minimo a cui viene fornita la merce M1 (è minimo quando gli altri prezzi sono più alti)

**fatti**
1) coppie nome fornitore - nome marca che hanno sede nella stessa città
$$
\Pi_{\$2, \$4}\left(\text{Fornitore} \underset{\$ 3 = \$2}{\bowtie} \text{Marca}\right)
$$

| piva | nome | città | nome     | sede |
| ---- | ---- | ----- | -------- | ---- |
| F1   | A    | CS    | $\alpha$ | CS   |
| F2   | B    | RC    | $\beta$  | RC   |
| F3   | C    | CS    | $\alpha$ | CS   |

| nome | nome     |
| ---- | -------- |
| A    | $\alpha$ |
| B    | $\beta$  |
| C    | $\alpha$ |

2) nomi delle marche che sono fornite da fornitori che risiedono nella loro città
$$
\Pi_{\$9}\left\{\left[\left( \text{Fornitore} \underset{\$ 1 = \$ 1}{\bowtie} \text{Fornitura}\right)\underset{\$5 = \$1}{\bowtie} \text{Merce}\right] \underset{\$9 = \$1 \wedge \$ 3 = \$2}{\bowtie} \text{Marca}\right\}
$$

| piva | nome | città | fornitore | merce | prezzo | cod | nome | marca    |
| ---- | ---- | ----- | --------- | ----- | ------ | --- | ---- | -------- |
| F1   | A    | CS    | F1        | M1    | 10     | M1  | x    | $\alpha$ |
| F1   | A    | CS    | F1        | M2    | 5      | M2  | y    | $\beta$  |
| F2   | B    | RC    | F2        | M1    | 8      | M1  | x    | $\alpha$ |

| piva | nome | città | fornitore | merce | prezzo | cod | nome | marca    | nome     | sede |
| ---- | ---- | ----- | --------- | ----- | ------ | --- | ---- | -------- | -------- | ---- |
| F1   | A    | CS    | F1        | M1    | 10     | M1  | x    | $\alpha$ | $\alpha$ | CS   |

| marca    |
| -------- |
| $\alpha$ |


3) marche che producono almeno 2 merci, che sono fornite a meno di 10 euro da almeno 2 fornitori di CS
$$
\displaylines{
\text{merciCS-10} = \sigma_{\$3 = 'CS'} (\text{Fornitore}) \underset{\$1 = \$1}{\bowtie} \sigma_{\$3 < 10}(\text{Fornitura}) \\
\text{merciAlmeno2} = \Pi_{\$5}\left(\text{merciCS-10} \underset{\$1 \neq \$1 \wedge \$5 = \$ 5}{\bowtie} \text{merciCS-10}\right) \\
Q = \Pi_{\$3}\left[\left(\text{Merce} \underset{\$1 = \$1}{\bowtie} \text{merciAlmeno2}\right) \underset{\$1 \neq \$1 \wedge \$3 = \$3}{\bowtie} \left(\text{Merce} \underset{\$1 = \$1}{\bowtie} \text{merciAlmeno2}\right)\right]
}
$$
supponiamo che il primo record di Fornitura abbia un costo di 9

| piva | nome | città | fornitore | merce | prezzo |
| ---- | ---- | ----- | --------- | ----- | ------ |
| F1   | A    | CS    | F1        | M1    | 9      |
| F1   | A    | CS    | F1        | M2    | 5      |

| cod | nome | marca    | merce |
| --- | ---- | -------- | ----- |
| M1  | x    | $\alpha$ | M1    |
| M2  | y    | $\beta$  | M2    |
supponiamo che M2 abbia marca $\alpha$

| marca    |
| -------- |
| $\alpha$ |
4) fornitori che non forniscono merci prodotte a CS
$$
\displaylines{
\text{fornisconoCS} = \Pi_{\$1}\sigma_{\$ 11 = 'CS'}\left\{ \left[ \left( \text{Fornitore} \underset{\$1 = \$1}{\bowtie} \text{Fornitura} \right) \underset{\$5 = \$1}{\bowtie} \text{Merce} \right] \underset{\$9 = \$1}{\bowtie} \text{Marca}\right\}\\
Q = \Pi_{\$1}(\text{Fornitore}) - \text{fornisconoCS}
}
$$

| piva | nome | città | fornitore | merce | prezzo | cod | nome | marca    | nome     | sede |
| ---- | ---- | ----- | --------- | ----- | ------ | --- | ---- | -------- | -------- | ---- |
| F1   | A    | CS    | F1        | M1    | 10     | M1  | x    | $\alpha$ | $\alpha$ | CS   |
| F2   | B    | RC    | F2        | M1    | 8      | M1  | x    | $\alpha$ | $\alpha$ | CS   |

| piva |
| ---- |
| F3   |

5) fornitori che forniscono solo merci prodotte a CS
$$
\displaylines{
\text{fornisconoAltro} =  \Pi_{\$1}\sigma_{\$ 11 \neq 'CS'}\left\{ \left[ \left( \text{Fornitore} \underset{\$1 = \$1}{\bowtie} \text{Fornitura} \right) \underset{\$5 = \$1}{\bowtie} \text{Merce} \right] \underset{\$9 = \$1}{\bowtie} \text{Marca}\right\}\\
Q = \Pi_{\$1}(\text{Fornitore}) - \text{fornisconoAltro}
}
$$
6) prezzo minimo a cui viene fornita la merce M1 (è minimo quando gli altri prezzi sono più alti)
$$
\displaylines{
\text{fornituraM1} = \sigma_{\$2 = 'M1'}(\text{Fornitura}) \\
Q = \Pi_{\$3}\left[\text{fornituraM1} - \Pi_{\$1, \$2, \$3}\left(\text{fornituraM1} \underset{\$3 > \$ 3}{\bowtie} \text{fornituraM1}\right)\right]
}
$$


| fornitore | merce | prezzo |
| --------- | ----- | ------ |
| F1        | M1    | 10     |
| F2        | M1    | 8      |
| F3        | M1    | 6      |

| fornitore | merce | prezzo | fornitore | merce | prezzo |
| --------- | ----- | ------ | --------- | ----- | ------ |
| F1        | M1    | 10     | F2        | M1    | 8      |
| F1        | M1    | 10     | F3        | M1    | 6      |
| F2        | M1    | 8      | F3        | M1    | 6      |

| fornitore | merce | prezzo |
| --------- | ----- | ------ |
| F1        | M1    | 10     |
| F2        | M1    | 8      |

| fornitore | merce | prezzo |
| --------- | ----- | ------ |
| F3        | M1    | 6      |

| prezzo |
| ------ |
| 6      |

6.2)
$$
\displaylines{
\text{prezziM1} = \Pi_{\$3}\left[\sigma_{\$2 = 'M1'}(\text{Fornitura})\right] \\
Q = \text{prezziM1}-\Pi_{\$1}\left( \text{prezziM1} \underset{\$1 > \$1}{\bowtie} \text{prezziM1} \right)
}
$$

| prezzo |
| ------ |
| 10     |
| 8      |
| 6      |

| prezzo1 | prezzo2 |
| ------- | ------- |
| 10      | 8       |
| 10      | 6       |
| 8       | 6       |

| prezzo |
| ------ |
| 6      |

# Esercizi 4
**Query per casa**
1. Nomi delle merci prodotte a CS che sono fornite da almeno due fornitori, ciascuno dei quali fornisce almeno 2 merci prodotte a RC
2. Città delle marche che producono esattamente due merci fornite da qualche fornitore di CS
3. Per ogni nome di merce restituire il prezzo massimo di fornitura della merce (due colonne \[nome merce | prezzo di fornitura] dove il prezzo è il massimo prezzo di fornitura per quella merce)
4. Merci fornite da tutti i fornitori
5. Merci di marca $\alpha$ fornite da tutti i fornitori di CS

**fatti**
1) Nomi delle merci prodotte a CS che sono fornite da almeno due fornitori, ciascuno dei quali fornisce almeno 2 merci prodotte a RC
$$
\begin{array}{l}
\text{fornitureRC} = \Pi_{\$ 1, \$ 2}\left\{\text{Fornitura} \underset{\$ 2 = \$ 1}{\bowtie}\left[ \text{Merce} \underset{\$ 3 = \$ 1}{\bowtie} \sigma_{\$ 2 = 'RC}(\text{Marca})\right]\right\} \\
\text{fornitoreRC} = \text{fornitureRC} \underset{\$ 1 = \$ 1 \wedge \$ 2 \neq \$ 2}{\bowtie} \text{fornitureRC} \\
\text{fornitureOK} = \Pi_{\$ 1, \$ 2}\left\{\left( \text{Fornitura} \underset{\$ 1 = \$ 1}{\bowtie} \text{fornitoreRC} \right) \underset{\$ 2 = \$ 1}{\bowtie} \left[ \sigma_{\$ 5 = 'CS'}\left( \text{Merce} \underset{\$ 3 = \$ 1}{\bowtie} \text{Marca} \right) \right]\right\} \\
Q =\Pi_{\$ 2} \left[\text{Merce} \underset{\$ 1 = \$ 2}{\bowtie}\left( \text{fornitureOK} \underset{\$ 2 = \$ 2 \wedge \$ 1 \neq \$ 1}{\bowtie} \text{fornitureOK}\right)  \right]
\end{array}
$$
2) Città delle marche che producono esattamente due merci fornite da qualche fornitore di CS
$$
\begin{array}{l}
\text{MerciForCS} = \Pi_{\$1,\$3}\left\{\sigma_{\$6=\text{'CS'}}\left[\text{Merce} \underset{\$1=\$5}{\bowtie} \left(\text{Fornitore} \underset{\$1=\$1}{\bowtie} \text{Fornitura}\right)\right]\right\} \\
\text{Almeno2} = \text{MerciForCS} \underset{\$2=\$2 \,\wedge\, \$1\neq\$1}{\bowtie} \text{MerciForCS} \\
\text{Almeno3} = \text{Almeno2} \underset{\$2=\$2 \,\wedge\, \$1\neq\$1 \wedge\, \$3\neq\$1}{\bowtie} \text{MerciForCS} \\
\text{Esatt2} = \Pi_{\$2}(\text{Almeno2}) - \Pi_{\$2}(\text{Almeno3}) \\
Q = \Pi_{\$2}\left(\text{Marca} \underset{\$1=\$1}{\bowtie} \text{Esatt2}\right)
\end{array}
$$
3) Per ogni nome di merce restituire il prezzo massimo di fornitura della merce (due colonne \[nome merce | prezzo di fornitura] dove il prezzo è il massimo prezzo di fornitura per quella merce)
$$
\begin{array}{l}
\text{Listino} = \Pi_{\$2, \$3}(\text{Fornitura}) \\
\text{Max} = \text{Listino} - \Pi_{\$1, \$2} \left( \text{Listino} \underset{\$1 = \$1 \wedge \$2 < \$ 2}{\bowtie} \text{Listino}\right) \\
Q = \Pi_{\$2, \$5}\left( \text{Merce} \underset{\$1 = \$1}{\bowtie} \text{Max}\right)
\end{array}
$$
4) Merci fornite da tutti i fornitori
$$
m|\forall f \in \text{Fornitore} : (f,m) \in \text{Fornitura}
$$
la proprietà è che tutti i fornitori forniscono $m$ $\equiv$ non esiste alcun fornitore che non fornisce $m$
il complemento di fornitura mi restituisce chi non è fornito
merci - (tutte le possibili combinazioni merce|fornitore - quelle che esistono davvero)
$$
\begin{array}{l}
\text{FornituraNo} = [\Pi_{\$ 1}(\text{Fornitore}) \times \Pi_{\$ 1}(\text{Merce})] - \Pi_{\$ 1, \$ 2}(\text{Fornitura}) \\
\text{MerciSi} = \Pi_{\$ 1}(\text{Merce}) - \Pi_{\$ 2}(\text{FornituraNo})
\end{array}
$$
5) Merci di marca $\alpha$ fornite da tutti i fornitori di CS
$$
\begin{array}{l}
\text{Mercia} = \Pi_{\$ 1}[\sigma_{\$ 3 = '\alpha'} (\text{Merce})] \\
\text{FornitoriCS} = \Pi_{\$ 1}[\sigma_{\$ 3 = 'CS'}(\text{Fornitore})] \\
\text{MerciNo} = (\text{FornitoriCS} \times \text{Mercia}) - \Pi_{\$ 1, \$ 2}(\text{Fornitura}) \\
\text{MerciSi} = \text{Mercia} - \Pi_{\$ 2}(\text{MerciNo})
\end{array}
$$
# Esercizi 5
1) coppie di fornitori che forniscono lo stesso insieme di merci
$\equiv$ coppie di fornitori tali che **tutte** le merci fornite da $F'$ sono fornite da $F''$ e viceversa
$\equiv$ coppie di fornitori tali che **non esiste** alcuna merce fornita da $F'$ che **non** è fornita da $F''$ e viceversa
$$
\begin{array}{l}
\text{coppieNo} = \Pi_{\$ 1, \$ 4}\left( \text{Fornitura} \underset{\$ 2 = \$ 2}{\bowtie} \text{FornituraNo} \right) \\
Q = \left[ \Pi_{\$ 1}(\text{Fornitore}) \underset{\$ 1 < \$ 1}{\bowtie} \Pi_{\$ 1}(\text{Fornitore}) - \text{coppieNo} \right] - \Pi_{\$ 2, \$ 1}(\text{coppieNo})
\end{array}
$$
Fornitura join Fornitura trova coppie di fornitori tali che il primo fornisce una merce, il secondo fornisce una merce diversa
```
F1 M1
F1 M2
F2 M1
F2 M2
```
Se l'insieme è formato da elementi diversi è normale trovare coppie che forniscono cose diverse, ma la verifica va fatta sull'intero insieme, non solo su una.
L'ultimo `- coppieNo` è il viceversa
`FornituraNo` restituisce le coppie fornitore|merce non presenti in `Fornitura`
`CoppieNo` restituisce la join se la merce è uguale
`Q` restituisce tutte le possibili coppie di fornitori tranne quelli presenti in `CoppieNo` (anche con il viceversa)

**Query per casa**
1) conoscere i nomi delle merci di marca $\alpha$ o $\beta$ e il cui nome non è X
$$
\Pi_{\$ 2}[\sigma_{\$ 2 \neq 'X' \wedge (\$ 3 = \alpha \vee \$ 3 = \beta)}(\text{Merce})]
$$
``` sql
SELECT nome
FROM Merce
WHERE   nome != 'X'
	AND (marca = 'alpha' OR marca = 'beta')
```

2) coppie `nomeFornitore|nomeMarca` tali che il fornitore e la marca stanno nella stessa città e il fornitore fornisce almeno una merce di quella marca
$$
\Pi_{\$ 2, \$ 7}\left\{ \left[ \text{Fornitore}\underset{\$ 3 = \$ 8}{\bowtie} \left( \text{Merce} \underset{\$ 3 = \$ 1}{\bowtie} \text{Marca} \right) \right] \underset{\$ 1 = \$ 1 \wedge \$ 4 = \$ 2}{\bowtie} \text{Fornitura} \right\}
$$
``` sql
SELECT F.nome, MA.nome
FROM Fornitore F, Merce ME, Marca MA, Fornitura X
WHERE   F.citta = MA.sede
	AND ME.marca = MA.nome
	AND F.piva = X.fornitore
	AND ME.cod = X.merca
```

3) nome delle marche di CS, che producono almeno 2 merci ciascuna delle quali è fornita a più di 10 euro da due fornitori di RC
$$
\begin{array}{l}
\text{fornituraOk} = \Pi_{\$ 1, \$ 2, \$ 3}\left\{ [\sigma_{\$ 3 > 10} (\text{Fornitura})] \underset{\$ 1 = \$ 1}{\bowtie}[\sigma_{\$ 3 = 'RC'}(\text{Fornitore})] \right\} \\
\text{merceOk} = \Pi_{\$ 1, \$ 3}\left[ \text{Merce} \underset{\$ 1 = \$ 2}{\bowtie} \left( \text{fornituraOk} \underset{\$ 1 \neq \$ 1 \wedge \$ 2 = \$ 2}{\bowtie} \text{fornituraOk} \right) \right] \\
\text{marcaOk} = \Pi_{\$ 1}\left[ \sigma_{\$ 2 = 'CS'}(\text{Marca}) \underset{\$ 1 = \$ 2}{\bowtie} \left( \text{merceOk} \underset{\$ 2 = \$ 2 \wedge \$ 1 \neq \$ 1}{\bowtie} \text{merceOk} \right) \right]
\end{array}
$$
``` sql
CREATE VIEW fornituraOk(fornitore, merce, prezzo) AS (
	SELECT X.fornitore AS fornitore, X.merce AS merce, X.prezzo AS prezzo
	FROM Fornitura AS X, Fornitore AS F
	WHERE   X.fornitore = F.piva
		AND X.prezzo > 10
		AND F.citta = 'RC'
);
CREATE VIEW merceOk(cod, marca) AS (
	SELECT M.cod AS cod, M.marca AS marca
	FROM Merce AS M, fornituraOk AS F1, fornituraOk AS F2
	WHERE   F1.fornitore != F2.fornitore
		AND F1.merce = F2.merce
		AND M.cod = F1.merce
);

SELECT MA.nome
FROM Marca AS MA, merceOk AS M1, merceOk AS M2
WHERE   MA.sede = 'CS'
	AND M1.marca = M2.marca
	AND M1.cod != M2.cod
	AND MA.nome = M1.marca
```

4) nomi delle merci che sono fornite da esattamente 2 fornitori di CS
almeno 2 - almeno 3
$$
\begin{array}{l}
\text{fornituraOk} = \Pi_{\$ 1, \$ 2} \left[ \sigma_{\$ 6 = 'CS'}\left( \text{Fornitura} \underset{\$ 1 = \$ 1}{\bowtie} \text{Fornitore}\right) \right] \\
\text{almeno2} = \text{fornituraOk} \underset{\$ 2 = \$ 2 \wedge \$ 1 \neq \$ 1}{\bowtie}\text{fornituraOk} \\
\text{almeno3} = \text{almeno2} \underset{\$2 = \$ 2 \wedge \$ 1 \neq \$ 1 \wedge \$ 3 \neq \$ 1}{\bowtie} \text{fornituraOk} \\
Q = \Pi_{\$ 2}\left\{\text{Merce}\underset{\$ 1 = \$ 1}{\bowtie}[\Pi_{\$ 2}(\text{almeno2}) - \Pi_{\$ 2}(\text{almeno3})]\right\}
\end{array}
$$
``` sql
CREATE VIEW fornituraOk (fornitore, merce) AS (
	SELECT X.fornitore AS fornitore, X.merce AS merce
	FROM Fornitura AS X, Fornitore AS F
	WHERE   F.citta = 'CS'
		AND X.fornitore = F.piva
);
CREATE VIEW almeno2 (f1, m1, f2, m2) AS (
	SELECT X1.fornitore AS f1, X1.merce AS m1, X2.fornitore AS f2, X2.merce AS m2
	FROM fornituraOk AS X1, fornituraOk AS X2
	WHERE   X1.merce = X2.merce
		AND X1.fornitore != X2.fornitore
);
CREATE VIEW almeno3 (f1,m1,f2,m2,f3,m3) AS (
	SELECT almeno2.f1 AS f1, almeno2.m1 AS m1, almeno2.f2 AS f2, almeno2.m2 AS m2, X.fornitore AS f3, X.merce AS m3
	FROM almeno2, fornituraOk AS X
	WHERE   almeno2.m1 = X.merce
		AND almeno2.f1 != X.fornitore
		AND almeno2.f2 != X.fornitore
);
CREATE VIEW esatt2 (cod) AS (
	SELECT almeno2.m1
	FROM almeno2
	EXCEPT
	SELECT almeno3.m1
	FROM almeno3
);

SELECT M.nome
FROM Merce AS M, esatt2
WHERE M.cod = esatt2.cod;
```
5) nomi dei fornitori che non forniscono merci di marca $\alpha$
$$
\begin{array}{l}
\text{FornitoriNo} = \Pi_{\$ 4, \$ 5, \$ 6}\left[ \left( \text{Fornitura} \underset{\$ 1 = \$ 1}{\bowtie} \text{Fornitore} \right)\underset{\$ 2 = \$ 1}{\bowtie} \sigma_{\$ 3 = \alpha}(\text{Merce})\right]\\
\text{Q5} = \Pi_{\$ 2}(\text{Fornitore} - \text{FornitoriNo})
\end{array}
$$
``` sql
CREATE VIEW FornitoreSi (piva, nome, citta) AS (
	SELECT *
	FROM Fornitore
	
	EXCEPT
	
	SELECT F.*
	FROM Fornitura X, Fornitore F, Merce M
	WHERE   X.fornitore = F.piva
		AND X.merce = M.cod
		AND M.marca = 'alpha'
);

SELECT nome
FROM FornitoreSi
```

6) nomi dei fornitori che forniscono solo merci di marca $\alpha$
$$
\begin{array}{l}
\text{FornitoriNo} = \Pi_{\$ 4, \$ 5, \$ 6}\left[ \left( \text{Fornitura} \underset{\$ 1 = \$ 1}{\bowtie} \text{Fornitore} \right)\underset{\$ 2 = \$ 1}{\bowtie} \sigma_{\$ 3 \neq \alpha}(\text{Merce})\right]\\
\text{Q6} = \Pi_{\$ 2}(\text{Fornitore} - \text{FornitoriNo})
\end{array}
$$
``` sql
CREATE VIEW FornitoreSi (piva, nome, citta) AS (
	SELECT *
	FROM Fornitore
	
	EXCEPT
	
	SELECT F.*
	FROM Fornitura X, Fornitore F, Merce M
	WHERE   X.fornitore = F.piva
		AND X.merce = M.cod
		AND M.marca != 'alpha'
);

SELECT nome
FROM FornitoreSi
```

7) per ogni fornitore di RC restituire il prezzo più basso a cui fornisce qualche merce
$$
\begin{array}{l}
\text{fornituraRC} = \Pi_{\$ 1, \$ 3}\left[ \text{Fornitura} \underset{\$ 1 = \$ 1}{\bowtie}\sigma_{\$ 3 = 'RC'}(\text{Fornitore}) \right] \\
\text{Q7} = \text{fornituraRC} - \Pi_{\$ 1, \$ 2}\left( \text{fornituraRC} \underset{\$ 1 = \$ 1  \wedge \$ 2 > \$ 2}{\bowtie} \text{fornituraRC}\right)
\end{array}
$$
``` sql
CREATE VIEW fornituraRC (fornitore, prezzo) AS (
	SELECT X.fornitore AS fornitore, X.prezzo AS prezzo
	FROM Fornitura X, Fornitore F
	WHERE   X.fornitore = F.piva
		AND F.citta = 'RC'
);

SELECT *
FROM fornituraRC

EXCEPT

SELECT X1.fornitore AS fornitore, X1.prezzo AS prezzo
FROM fornituraRC AS X1, fornituraRC AS X2
WHERE   X1.fornitore = X2.fornitore
	AND X1.prezzo > X2.prezzo
```

8) merci prodotte a CS che sono fornite da tutti i fornitori
`fornitoreNo` = fornitore tale che esiste qualche merce di CS che non fornisce = complementare di fornituraCS
`MerceCS-fornitoreNo`
$$
\begin{array}{l}
\text{MerceCS} = \Pi_{\$ 1}\left[ \text{Merce} \underset{\$ 3 = \$ 1}{\bowtie} \sigma_{\$ 2 = 'CS'}(\text{Marca}) \right] \\
\text{FornituraNo} = \Pi_{\$ 1, \$ 4}(\text{Fornitore} \times \text{MerceCS}) - \Pi_{\$ 1, \$ 2}(\text{Fornitura}) \\
\text{Q8} = \text{MerceCS} - \Pi_{\$ 2}(\text{FornituraNo})
\end{array}
$$
``` sql
CREATE VIEW FornituraNo (fornitore, merce) AS (
	SELECT F.piva AS fornitore, M.cod AS merce
	FROM Fornitore F, Merce M, Marca MA
	WHERE   MA.sede = 'CS'
		AND M.marca = MA.nome
	
	EXCEPT
	
	SELECT fornitore, merce
	FROM Fornitura
);

SELECT M.cod AS merce
FROM Merce AS M, Marca MA
WHERE   M.marca = MA.nome
	AND MA.sede = 'CS'
	
EXCEPT

SELECT merce
FROM FornituraNo
```

9) coppie di merci prodotte nella stessa città che sono fornite dallo stesso insieme di fornitori

%%
Interpretazione insiemistica - non ha senso, la stessa merce non può essere prodotta da marche diverse (e quindi in città diverse)
`coppieNo1` le coppie di merci prodotte in città diverse
tutte le possibili coppie merce|città di produzione - quelle che esistono davvero
coppie merce|merce che sono prodotte in insiemi di città diverse
$$
\begin{array}{l}
\text{mcNo} = \Pi_{\$ 1, \$ 5}(\text{Merce} \times \text{Marca}) - \Pi_{\$ 1, \$ 5}\left( \text{Merce}\underset{\$ 3 = \$ 1}{\bowtie} \text{Marca} \right) \\[2ex]
\text{coppieNo1} = \Pi_{\$ 1, \$ 6}\left[ \left( \text{Merce}\underset{\$ 3 = \$ 1}{\bowtie} \text{Marca} \right) \underset{\$ 5 = \$ 2}{\bowtie} \text{fcNo} \right]
\end{array}
$$
%%

Interpretazione esistenziale
coppie $(m_{1}|m_{2})$ tali che la marca che produce $m_{1}$ ha sede $c$ e la marca che produce $m_{2}$ ha sede $c$
$$
\begin{array}{l}
\text{mc} = \Pi_{\$ 1, \$ 5}\left( \text{Merce} \underset{\$ 3 = \$ 1}{\bowtie} \text{Marca} \right) \\[2ex]
\text{mmSede} = \Pi_{\$ 1, \$ 3}\left( \text{mc} \underset{\$ 1 < \$ 1 \wedge \$ 2 = \$ 2}{\bowtie} \text{mc} \right)
\end{array}
$$

`coppieNo` le coppie merci fornite da insiemi di fornitori diversi
tutte le possibili coppie fornitore|merce - quelle che esistono davvero
coppie $(m_{1}|m_{2})$ tali che $m_{1}$ è in `Fornitura` ed $m_{2}$ è in `mfNo` e il fornitore è uguale
$$
\begin{array}{l}
\text{fmNo} = \Pi_{\$ 1, \$ 4}(\text{Fornitura} \times \text{Merce}) - \Pi_{\$ 1, \$ 2}(\text{Fornitura}) \\[2ex]
\text{coppieNo} = \Pi_{\$ 2, \$ 5}\left( \text{Fornitura} \underset{\$ 1 = \$ 1}{\bowtie} \text{fmNo}\right)
\end{array}
$$
query finale coppie di merci prodotte nello stesso posto - merci fornite da insiemi di fornitori diversi
$$
\text{Q9} = (\text{mmSede} - \text{coppieNo}) - \Pi_{\$ 2, \$ 1}(\text{coppieNo})
$$

``` sql
CREATE VIEW mmSede (m1, m2) AS (
	SELECT M1.cod AS m1, M2.cod AS m2
	FROM Merce M1, Marca MA1, Merce M2, Marca MA2
	WHERE   M1.marca = MA1.nome
		AND M2.marca = MA2.nome
		AND M1.cod < M2.cod
		AND MA1.sede = MA2.sede
);

CREATE VIEW fmNo (f, m) AS (
	SELECT X.fornitore AS f, M.cod AS m
	FROM Fornitura AS X, Merce AS M
	
	EXCEPT
	
	SELECT fornitore AS f, merce AS m
	FROM Fornitura
);

CREATE VIEW coppieNo (m1, m2) AS (
	SELECT X.merce AS m1, fmNo.m AS m2
	FROM Fornitura AS X, fmNo
	WHERE X.fornitore = fmNo.f
);

SELECT *
FROM mmSede

EXCEPT

SELECT m1, m2
FROM coppieNo

EXCEPT

SELECT m2, m1
FROM coppieNo
```




---


testare l'appartenenza di un elemento ad un insieme
predicato `IN` $\in$ e `NOT IN` $\notin$

*es.* nomi dei fornitori che forniscono qualche merce
$$
\Pi_{\$ 2}\left( \text{Fornitore} \underset{\$ 1 = \$ 1}{\bowtie} \text{Fornitura} \right)
$$
manteniamo solo i fornitori che forniscono qualcosa

``` sql
SELECT F.nome
FROM Fornitore F, Fornitura X
WHERE F.piva = X.fornitore;
```

concettualmente è esagerata.
testiamo se una tupla sta in una select
``` sql
SELECT F.nome
FROM Fornitore F
WHERE F.piva IN (SELECT fornitore FROM Fornitura);
```
dentro la parentesi esprimo la query in cui si deve trovare l'elemento che precede `IN`
```
<tupla> IN (<query>)
```

tramite il `NOT IN` possiamo evitare di effettuare tutte quelle operazioni di sottrazione che abbiamo usato in algebra

*es.* nomi dei fornitori che non forniscono nulla
$$
\Pi_{\$ 2}\left\{ \text{Fornitore} \underset{\$ 1 = \$ 1}{\bowtie} [\Pi_{\$ 1}(\text{Fornitore}) - \Pi_{\$ 1}(\text{Fornitura})]\right\}
$$

questa query prende il nome di **formulazione procedurale**. In sql invece la query segue l'enunciato, è una **formulazione dichiarativa**
``` sql
SELECT F.nome
FROM Fornitore F
WHERE F.piva NOT IN (SELECT fornitore FROM Fornitura);
```

errori tipici
``` sql
SELECT F.nome
FROM Fornitore F
WHERE F.piva IN Fornitura
```
ma non possiamo dire se una tupla appartiene ad una tabella: il predicato IN vuole a sinistra una tupla e a destra una query, non una tabella, anche se prendiamo tutte le colonne di Fornitura.

Inoltre dovremmo rinominare gli attributi in modo tale che abbiano lo stesso nome, stesso discorso della sottrazione.

Se confrontiamo un numero maggiore di attributi sql non saprebbe nemmeno come mappare i due elementi.


*es.* voglio conoscere le città in cui risiedono marche che non producono merci fornite a cosenza
``` sql
SELECT sede
FROM Marca
WHERE nome NOT IN (
	SELECT M.marca AS nome
	FROM Fornitura X, Fornitore F, Merce M
	WHERE   X.fornitore = F.piva
		AND X.merce = M.cod
		AND F.citta = 'Cosenza'
	);
```


predicato che testa se il risultato di una query è vuoto o no (è verificato se esiste almeno una tupla in un irsultato)
`EXISTS` $\exists$ e `NOT EXISTS` $\nexists$

*es.* insieme dei fornitori che forniscono qualche merce
``` sql
SELECT F.nome
FROM Fornitore F
WHERE EXISTS (
	SELECT *
	FROM Fornitura X
	WHERE X.fornitore = F.piva
);
```

non ha un argomento che lo precede
```
EXISTS (<query>)
```
è verificato se esiste almeno una tupla in `<query>`

la visibilità degli attributi verso l'interno è valida, verso l'esterno no. Quindi in questo caso possiamo usare `F.piva`, ma prima non c'erano problemi di omonimia perché quelle esterne non vedono quelle interne.


*es.* nomi dei fornitori che forniscono tutte le merci
nomi dei fornitori tali che non esiste alcuna merce che essi non forniscono
``` sql
SELECT F.nome
FROM Fornitore F
WHERE NOT EXISTS ( -- non esiste una merce che essi non forniscono
	SELECT *
	FROM Merce M
	WHERE F.piva NOT IN ( -- elenco delle merci da essi fornite
		SELECT X.fornitore
		FROM Fornitura X
		WHERE X.merce = M.cod
	)
);
```

che essi non forniscono $\equiv$ che non appartiene alla lista delle merci da essi fornite

``` sql
SELECT F.nome
FROM Fornitore F
WHERE NOT EXISTS ( -- non esiste una merce che essi non forniscono
	SELECT *
	FROM Merce M
	WHERE M.cod NOT IN ( -- elenco delle merci da essi fornite
		SELECT X.merce
		FROM Fornitura X
		WHERE X.fornitore = F.piva
	)
);
```

*es.* coppie di fornitori $(f', f'')$ che forniscono lo stesso insieme di merci
coppie $(f', f'')$ tali che non esiste alcuna merce fornita da $f'$ e non da $f''$ o viceversa
non esiste alcuna merce $m$ che $\in$ alla lista di merci di $f'$ e $\notin$ alla lista di merci fornite da $f''$

``` sql
SELECT F1.piva, F2.piva
FROM Fornitore F1, Fornitore F2
WHERE F1.piva < F2.piva
AND NOT EXISTS (
	SELECT *
	FROM Merce M
	WHERE M.cod IN (
		SELECT X.merce AS cod
		FROM Fornitura X
		WHERE X.fornitore = F1.piva
	) AND M.cod NOT IN (
		SELECT X.merce AS cod
		FROM Fornitura X
		WHERE X.fornitore = F2.piva
	)
) AND NOT EXISTS (
	SELECT *
	FROM Merce M
	WHERE M.cod IN (
		SELECT X.merce AS cod
		FROM Fornitura X
		WHERE X.fornitore = F2.piva
	) AND M.cod NOT IN (
		SELECT X.merce AS cod
		FROM Fornitura X
		WHERE X.fornitore = F1.piva
	)
);
```


versione molto più pulita:
``` sql
SELECT F1.piva, F2.piva
FROM Fornitore F1, Fornitore F2
WHERE F1.piva < F2.piva
AND NOT EXISTS (
	SELECT *
	FROM Merce M
	WHERE (F1.piva, M.cod) IN (
		SELECT fornitore, merce
		FROM Fornitura X
	) AND (F2.piva, M.cod) NOT IN (
		SELECT fornitore, merce
		FROM Fornitura X
	)
) AND NOT EXISTS (
	SELECT *
	FROM Merce M
	WHERE (F2.piva, M.cod) IN (
		SELECT fornitore, merce
		FROM Fornitura X
	) AND (F1.piva, M.cod) NOT IN (
		SELECT fornitore, merce
		FROM Fornitura X
	)
);
```

in algebra il risultato di tutte le operazioni sono relazioni, in sql no:
``` sql
SELECT citta
FROM Fornitore;
```
in algebra restituisce tante righe quante sono le città (le città uguali non vengono riportate)
in sql non è così: vengono restituite tante righe tante quante sono le righe originali, non accorpa i duplici
usa multi insiemi di tuple (insieme in cui ogni elemento è associato ad una molteplicità)
Se tutti i fornitori sono di Cosenza apparirà una tabella con Cosenza tante volte tante quanti sono gli elementi di fornitori
eliminare i duplicati ha un costo, la query diventa quadratica
- clausola `DISTINCT`
aggiungendo la keyword tra la SELECT e gli attributi, restituisce solo righe diverse
la query diventa più lenta, ma elimina tutti i duplicati


query che richiedono ragionamenti di aggregazione
Operatori di aggregazione
prese più tuple restituisce una unica tupla che li rappresenta
supponiamo di avere uno schema in cui rappresentiamo le fatture all'interno di un'azienda
$$
\begin{array}{l}
\text{Cliente}(\underline{\text{CF}}\text{, nome, eta, citta}) \\
\text{Fattura}(\underline{\text{numero, anno}}\text{, cliente}) \\
\text{Composizione}(\underline{\text{fattura\_numero, fattura\_anno, prodotto}}\text{, qnt, prezzoU})
\end{array}
$$

| CF  | nome | età | città   |
| --- | ---- | --- | ------- |
| 1   | A    | 18  | CS      |
| 2   | B    | 20  | RC      |
| 3   | C    | 22  | CS      |
| 4   | D    | 26  | $\perp$ |


($\neq$ operatori algebrici, hanno significato diverso) se volessi trasformare Composizione
$$
\text{Composizione} (\underline{\text{fattura\_numero, fattura\_anno, prodotto}}\text{, importo})
$$
questa non è una operazione di aggregazione, ma semplicemente utilizza operatori algebrici
``` sql
SELECT fattura_numero, fattura_anno, prodotto, qnt * prezzo AS importo
FROM Composizione;
```
La parola aggregazione è riservata agli operatori che prendono più tuple e ne restituiscono una in loro rappresentanza, questa operazione sta effettuando operazioni algebriche per unire degli attributi, non delle tuple.

*es.* voglio conoscere il numero di clienti che ho registrato
``` sql
SELECT COUNT(CF)
FROM Cliente;
```
restituirà

| COUNT(CF) |
| --------- |
| 4         |
per eseguirla non possiamo osservare una tupla per volta, ma dobbiamo guardarle prima tutte.
Possiamo anche usare `COUNT(*)` se non vogliamo specificare l'attributo e contare semplicemente le righe
Se usiamo * o un attributo chiave il risultato è uguale
Se invece usiamo il `COUNT()` su un attributo non chiave potrebbe restituire un numero minore se per esempio per quell'attributo passato come parametro non è presente in una determinata tupla (*es.* se facciamo `COUNT(citta)` restituisce 3).
Possiamo anche cercare il numero di elementi diversi
``` sql
SELECT COUNT(DISTINCT nome)
FROM Cliente
```

esistono altri operatori di aggregazione
- `SUM`
- `AVG`
- `MIN` e `MAX`

due aggregazioni possono essere messi nella stessa tabella, ma solo se ha senso semanticamente, non posso mettere l'età massima dei clienti di Cosenza e l'età minima dei clienti di reggio.

Possiamo aggiungere clausole nel `WHERE`
quando aggiungiamo un operatore di aggregazione la `SELECT` viene svolta come ultima istruzione

non ha senso inserire sia operatori di aggregazione che normali attributi all'interno della `SELECT`, a meno che non sia comune a tutto l'insieme.

*es.* numero di fatture intestate al cliente Pippo
``` sql
SELECT COUNT(*)
FROM Fatture F, Cliente C
WHERE   F.cliente = C.CF
	AND C.nome = 'Pippo'
```
