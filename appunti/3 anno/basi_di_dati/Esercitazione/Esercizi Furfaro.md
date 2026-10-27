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
\text{merciCS-10} = \sigma_{\$3 = 'CS'} (\text{Fornitori}) \underset{\$1 = \$1}{\bowtie} \sigma_{\$3 < 10}(\text{Fornitura}) \\
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
Q = \Pi_{\$3}\left[\text{fornituraM1} - \Pi_{\$1, \$2, \$3}\left(\text{fornituraM1} \underset{\$2 = \$2 \wedge \$1 \neq \$ 1 \wedge \$3 > \$ 3}{\bowtie} \text{fornituraM1}\right)\right]
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
