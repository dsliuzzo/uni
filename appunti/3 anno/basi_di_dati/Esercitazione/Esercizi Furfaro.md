# 1
*es.* per casa
1. i dati delle forniture della merce M2
2. le piva dei fornitori che forniscono qualcosa (è presente nella tabella fornitura)
3. la marca delle merci di cod M2
4. i nomi delle merci fornite da F1
5. le città in cui è fornita la merce M2
6. le coppie nome_merce - nome_fornitore t.c. il fornitore con quel nome fornisce la merce con quel nome (collegare 3 tabelle usa le parentesi per evitare ambiguità nella notazione posizionale)

fatti

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

---
