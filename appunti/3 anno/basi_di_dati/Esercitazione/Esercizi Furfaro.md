# Istanza usata negli esempi
**Fornitore**

| piva | nome | città |
| ---- | ---- | ----- |
| F1   | A    | CS    |
| F2   | B    | RC    |
| F3   | C    | CS    |

**Merce**

| cod | nome | marca    |
| --- | ---- | -------- |
| M1  | x    | $\alpha$ |
| M2  | y    | $\beta$  |

**Fornitura**

| fornitore | merce | prezzo |
| --------- | ----- | ------ |
| F1        | M1    | 10     |
| F1        | M2    | 5      |
| F2        | M1    | 8      |


# 1
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
# 2
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
3. 
$$
\Pi_{\$3}\left[\sigma_{\$2 = 'y'}(\text{Merce})\right]\cup \Pi_{\$9}\left\{\sigma_{\$5 = 'B'}\left[ \left( \text{Fornitura}\underset{\$1 = \$1}{\bowtie} \text{Fornitore} \right) \underset{\$2 = \$1}{\bowtie} \text{Merce} \right]\right\}
$$
4. 
$$
\Pi_{\$8}\left\{\sigma_{\$6 = 'RC' \ \wedge \ \$3 < 10}\left[ \left( \text{Fornitura}\underset{\$1 = \$1}{\bowtie} \text{Fornitore} \right) \underset{\$2 = \$1}{\bowtie} \text{Merce} \right]\right\}
$$
5. 
$$
\Pi_{\$1}(\text{Merce}) - \Pi_{\$2}\left[\sigma_{\$1 = 'F 1'}(\text{Fornitura})\right]
$$
6. 
$$
\Pi_{\$2}(\text{Merce}) - \Pi_{\$8}\left\{\sigma_{\$6 = 'RC'}\left[ \left( \text{Fornitura}\underset{\$1 = \$1}{\bowtie} \text{Fornitore} \right) \underset{\$2 = \$1}{\bowtie} \text{Merce} \right]\right\}
$$
giusto ma fragile
scomposizione in sotto problemi
cod delle merci fornite a RC
$$
\Pi_{\$7}\left\{\sigma_{\$6 = 'RC'}\left[ \left( \text{Fornitura}\underset{\$1 = \$1}{\bowtie} \text{Fornitore} \right) \underset{\$2 = \$1}{\bowtie} \text{Merce} \right]\right\}
$$
cod delle merci non fornite a RC
$$
\Pi_{\$1}(\text{Merce})-\Pi_{\$7}\left\{\sigma_{\$6 = 'RC'}\left[ \left( \text{Fornitura}\underset{\$1 = \$1}{\bowtie} \text{Fornitore} \right) \underset{\$2 = \$1}{\bowtie} \text{Merce} \right]\right\}
$$
nome delle merci non fornite a RC
$$
\Pi_{\$3}\left[\left(\Pi_{\$1}(\text{Merce})-\Pi_{\$7}\left\{\sigma_{\$6 = 'RC'}\left[ \left( \text{Fornitura}\underset{\$1 = \$1}{\bowtie} \text{Fornitore} \right) \underset{\$2 = \$1}{\bowtie} \text{Merce} \right]\right\}\right)\underset{\$1 = \$1}{\bowtie} \text{Merce}\right]
$$
