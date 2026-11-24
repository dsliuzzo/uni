#appunti 
#basi_di_dati
# Algebra relazionale
Fino ad ora abbiamo visto linguaggi che permettono di rappresentare un problema in termini di for e if, mentre SQL è un **linguaggio dichiarativo**: si descrive quale informazione estrarre, senza scrivere esplicitamente iteratori e condizioni, e per questo non è Turing completo; quando serve una logica più complessa, SQL va richiamato all’interno di un programma scritto in un linguaggio imperativo.

Dato il cambio di paradigma per motivi didattici ha senso definire le query sql prima tramite algebra relazionale: un insieme di un insieme di operatori che, composti tra loro, descrivono passo per passo come ricavare un risultato da una o più relazioni.

## Operatore di selezione

Dati di esempio usati negli appunti:

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

>[!important] Selezione ($\sigma$)
>Operatore che, data una tabella, restituisce solo le righe (tuple) che soddisfano una determinata condizione.
>$$\sigma_{\text{condizione}}(\text{Tabella})$$
>- **argomento**: una sola tabella, quindi è un operatore **monadico**
>- **pedice**: la condizione che ogni tupla restituita deve rispettare

La condizione è una formula booleana, anche complessa e parentesizzata, composta da confronti tra attributi e costanti. Il filtraggio avviene **una tupla per volta**, e i confronti riguardano solo i campi della tupla stessa. La selezione viene valutata sull'istanza della relazione.

*Esempio:* dettagli dei fornitori che stanno a CS.
$$
\sigma_{\text{città = 'CS'}}(\text{Fornitore})
$$

| piva | nome | città |
| ---- | ---- | ----- |
| F1   | A    | CS    |
| F3   | C    | CS    |

*Esempio:* merci che si chiamano x oppure sono prodotte dalla marca $\beta$.
$$
\sigma_{\text{nome = 'x'} \,\vee\, \text{marca = '}\beta\text{'}}(\text{Merce})
$$

| cod | nome | marca    |
| --- | ---- | -------- |
| M1  | x    | $\alpha$ |
| M2  | y    | $\beta$  |

### Proprietà

>[!important] Operatore rientrante
>Un operatore è rientrante se agisce su un dominio e restituisce un elemento dello stesso dominio. Qui il dominio sono le tabelle: il risultato di una selezione è ancora una tabella.

- La tabella risultato ha la **stessa struttura**: stessa arità e stessi attributi.
- Le righe del risultato sono un sottoinsieme di quelle dell'argomento, quindi la cardinalità del risultato è $\leq$ quella dell'argomento.

>[!important] Arità e cardinalità
>- **Arità**: numero di colonne di una tabella
>- **Cardinalità**: numero di righe di una tabella

> In un linguaggio di programmazione tradizionale la selezione corrisponde a un `for` con un `if`; in SQL entrambi sono "precablati".
## Operatore di proiezione
La selezione filtra le righe, ma non permette di filtrare le **colonne**. Serve un altro operatore.

>[!important] Proiezione ($\Pi$)
>Operatore che, data una tabella, restituisce una nuova tabella contenente solo le colonne indicate.
>$$\Pi_{\text{attributi}}(\text{Tabella})$$
>Anche la proiezione è un operatore **monadico** e **rientrante**.

*Esempio:* partita IVA dei fornitori.
$$
\Pi_{\text{piva}}(\text{Fornitore})
$$

| piva |
| ---- |
| F1   |
| F2   |
| F3   |

È possibile proiettare più colonne:
$$
\Pi_{\text{piva, città}}(\text{Fornitore})
$$

*Esempio:* nomi delle merci.
$$
\Pi_{\text{nome}}(\text{Merce})
$$

### Proprietà
- **L'arità cambia**: diventa pari al numero di attributi proiettati.
- **La cardinalità può variare**, perché il risultato è per definizione un insieme e non ammette duplicati.

$$
\Pi_{\text{città}}(\text{Fornitore})
$$

| città |
| ----- |
| CS    |
| RC    |

### Costo computazionale

In un linguaggio tradizionale la proiezione sarebbe un `for` senza `if`, ma deve anche controllare se il valore è già presente nel risultato, per eliminare i duplicati. Questo la rende più costosa:
$$
(n-1)+(n-2)+\dots+2+1 = \frac{n(n-1)}{2} = \Theta(n^2)
$$
La selezione non ha bisogno di questo controllo: l'argomento è già un insieme, quindi un suo sottoinsieme non può contenere duplicati.

### Composizione di operatori
Essendo rientranti, il risultato di un operatore può essere l'ingresso di un altro.

*Esempio:* nomi dei fornitori che stanno a CS.
$$
\Pi_{\text{nome}}\left[\sigma_{\text{città = 'CS'}}(\text{Fornitore})\right]
$$

>[!warning] L'ordine conta
>Se si proiettasse prima, si eliminerebbe l'attributo `città` necessario alla selezione.

*Esempio:* codici delle merci di nome x prodotte da $\alpha$.
$$
\Pi_{\text{cod}}\left[\sigma_{\text{nome = 'x'} \,\wedge\, \text{marca = '}\alpha\text{'}}(\text{Merce})\right]
$$

*Esempio:* codici dei fornitori che forniscono la merce M1.
$$
\Pi_{\text{fornitore}}\left[\sigma_{\text{merce = 'M1'}}(\text{Fornitura})\right]
$$
>[!important] Innestando le operazioni la complessità è una somma, non un prodotto
## Operatore join
Spesso l'informazione richiesta è distribuita su **più tabelle**. Ad esempio, per ottenere i *nomi dei fornitori che forniscono M1* servono sia `Fornitura` (chi fornisce cosa) sia `Fornitore` (il nome). Le tabelle vengono unite solo al momento dell'interrogazione.

>[!important] Join ($\bowtie$)
>Operatore **binario** che prende in input due tabelle e ne restituisce una, ottenuta prolungando ogni riga della prima con tutte le righe della seconda che rispettano la condizione di join.
>$$T_1 \underset{\text{condizione}}{\bowtie} T_2$$

Nel pedice di una join, $\$i = \$j$ indica l'$i$-esimo attributo dell'operando di **sinistra** e il $j$-esimo attributo dell'operando di **destra**. Nelle selezioni applicate a un prodotto cartesiano gli indici sono invece **assoluti** sulla tupla concatenata.

Concettualmente si considerano tutte le coppie possibili di righe, e si tengono solo quelle per cui la condizione vale.

*Esempio:*
$$
\text{Fornitura} \underset{\text{fornitore = piva}}{\bowtie} \text{Fornitore}
$$

| fornitore | merce | prezzo | piva | nome | città |
| --------- | ----- | ------ | ---- | ---- | ----- |
| F1        | M1    | 10     | F1   | A    | CS    |
| F1        | M2    | 5      | F1   | A    | CS    |
| F2        | M1    | 8      | F2   | B    | RC    |

- il massimo numero di tuple che risultano da una join è $m \cdot n$
- l'**arità** è $m+n$
### Proprietà
- Per convenzione, nella condizione l'attributo a sinistra dell'uguaglianza appartiene alla tabella di sinistra, e viceversa.
- L'ordine delle tabelle non cambia il risultato.
- Il risultato è una tabella, quindi si può comporre con altri operatori.

*Esempio:* nomi dei fornitori che forniscono M1.
$$
\Pi_{\text{nome}}\left[\sigma_{\text{merce = 'M1'}}\left(\text{Fornitura} \underset{\text{fornitore = piva}}{\bowtie} \text{Fornitore}\right)\right]
$$

| nome |
| ---- |
| A    |
| B    |

### Notazione posizionale
Per evitare formule troppo lunghe e attributi omonimi, d'ora in poi ogni attributo è identificato dalla **posizione** (`$1`, `$2`, ...). Nel risultato di una join le colonne della prima tabella vengono prima di quelle della seconda.
$$
\Pi_{\$5}\left[\sigma_{\$2=\text{'M1'}}\left(\text{Fornitura} \underset{\$1 = \$1}{\bowtie} \text{Fornitore}\right)\right]
$$
Nella condizione `$1 = $1` il primo `$1` si riferisce a `Fornitura` (`fornitore`), il secondo a `Fornitore` (`piva`).
### Cardinalità del risultato
In generale, con $|T_1| = m$ e $|T_2| = n$:
$$
0 \le |T_1 \bowtie T_2| \le m \cdot n
$$
($0$ se nessuna coppia rispetta la condizione, $m \cdot n$ se la rispettano tutte, come nel [[#Prodotto cartesiano]]).

>[!important] Join chiave esterna - chiave primaria
>Se la condizione è solo *chiave esterna = chiave primaria* e vale il [[Modello relazionale#Vincolo di integrità referenziale|vincolo di integrità referenziale]], ogni riga della tabella con la chiave esterna si prolunga con **esattamente una** riga dell'altra (la chiave primaria è unica, la chiave esterna punta sempre a una riga esistente). Il risultato ha quindi la cardinalità della **tabella che contiene la chiave esterna**:
>$$|\text{Fornitura} \underset{\$2 = \$1}{\bowtie} \text{Merce}| = |\text{Fornitura}|$$

Non è detto che sia la tabella più grande: se `Fornitura` avesse 1 riga e `Merce` 100, il risultato avrebbe 1 riga. Inoltre basta aggiungere altre condizioni per ridurre il risultato: nell'esempio *nomi delle marche fornite da fornitori che risiedono nella loro città* le prime due join danno 3 righe ($= |\text{Fornitura}|$), mentre l'ultima join con `Marca`, che ha anche la condizione `$3 = $2`, ne lascia 1.

La join è commutativa ($T_1 \bowtie T_2 \equiv T_2 \bowtie T_1$) **a meno dell'ordine delle colonne**: con la notazione posizionale, scambiando gli operandi vanno aggiornati gli indici nelle condizioni e nelle proiezioni.
### Tipi di join
- **$\theta$-join (inner join)**: la join con una condizione $\theta$ nel pedice. È quella usata finora.
- **natural join**: la join **senza pedice**. Lega le tuple di $A$ con quelle di $B$ che hanno lo stesso valore negli **attributi omonimi**. Si basa sull'assunzione che gli attributi di chiave esterna abbiano lo stesso nome di quelli a cui fanno riferimento.
- **left / right / full outer join**: il simbolo della join ha dei trattini sui vertici. Se una tupla di $A$ non trova nessuna tupla di $B$ con cui legarsi, viene messa comunque nel risultato e le colonne mancanti vengono riempite con `NULL`.
	- **left**: si tengono le tuple di $A$ senza corrispondenza
	- **right**: si tengono quelle di $B$
	- **full**: si tengono quelle di entrambe
- **semi-join**: il simbolo della join ha la linea verticale solo da un lato. Equivale a una join tra $A$ e $B$ proiettata solo sugli attributi della relazione dal lato della linea verticale. Corrisponde all'[[SQL#EXISTS e NOT EXISTS|EXISTS]] di SQL.
## Operatori insiemistici
L'algebra relazionale è un'estensione dell'algebra insiemistica, quindi possiamo usare anche gli operatori sugli insiemi: **prodotto cartesiano**, **unione**, **intersezione** e **sottrazione**. Poiché una tabella è un insieme di tuple, anche questi operatori sono **rientranti**: il risultato è ancora una tabella.
### Prodotto cartesiano
> [!important] Prodotto cartesiano ($\times$) Operatore **binario** che, date due tabelle, restituisce tutte le possibili combinazioni di una tupla della prima con una tupla della seconda. $$T_1 \times T_2$$

- la cardinalità del risultato è $m \cdot n$
- l'arità del risultato è la somma delle arità: $m+n$

_Esempio:_ coppie di nomi di fornitori. $$ \Pi_{$2, $5}(\text{Fornitore} \times \text{Fornitore}) $$

> [!bug] Differenza con il prodotto cartesiano insiemistico Dati due insiemi $A$ e $P$, $A \times P$ contiene **coppie** (un elemento di $A$, un elemento di $P$). Nell'algebra relazionale invece il risultato è un insieme di **tuple** "piatte" (le due tuple vengono concatenate), non una coppia di tuple: altrimenti l'operatore non sarebbe rientrante.

>[!question] Relazione con la join
>La join deriva dal prodotto cartesiano: si considerano tutte le coppie di tuple e si mantengono solo quelle che soddisfano la condizione. $$ T_1 \underset{\text{cond}}{\bowtie} T_2 \quad \equiv \quad \sigma_{\text{cond}}(T_1 \times T_2) $$

_Esempio:_ nomi dei fornitori e delle merci che forniscono, usando solo $\times$, $\sigma$ e $\Pi$. $$\Pi_{\$5, \$8} \left\{\sigma_{\$2 = \$7}\left\{\left[\sigma_{\$1 = \$4}\left( \text{Fornitura} \times \text{Fornitore} \right) \right] \times \text{Merce} \right\} \right\}$$

- $\sigma_{\$1=\$4}$ tiene le coppie in cui `Fornitura.fornitore` coincide con `Fornitore.piva`
- il secondo prodotto aggiunge `Merce` e $\sigma_{\$2=\$7}$ tiene le righe in cui `Fornitura.merce` coincide con `Merce.cod`
- $\Pi_{\$5,\$8}$ estrae il nome del fornitore e il nome della merce
### Unione e intersezione
> [!important] Compatibilità
> L'unione ($\cup$) e l'intersezione ($\cap$) si possono applicare solo a relazioni con lo **stesso schema**, cioè **compatibili**.

_Esempio:_ partita IVA dei fornitori che stanno a RC **oppure** che forniscono M2. $$ \Pi_{$1}\left[\sigma_{$3 = \text{'RC'}}(\text{Fornitore})\right] \cup \Pi_{$1}\left[\sigma_{$2 = \text{'M2'}}(\text{Fornitura})\right] $$

|$$1$|
|---|
|F1|
|F2|

> [!warning] Nomi degli attributi
> Alcuni interpreti potrebbero dare errore perché gli attributi, seppur semanticamente uguali, hanno nomi diversi ($\to$ operatore di **renaming**). Per convenzione useremo la notazione posizionale, senza renaming.

- l'**unione** non è esprimibile tramite gli altri operatori dell'algebra relazionale
- l'**intersezione** invece sì: $A \cap B = A - (A - B)$

### Sottrazione
> [!important] Sottrazione ($-$)
> Restituisce le tuple della prima relazione che **non** compaiono nella seconda. Anche qui le relazioni devono essere compatibili.

*es.* partita IVA dei fornitori che non forniscono alcuna merce (non compaiono in Fornitura). $$ \Pi_{$1}(\text{Fornitore}) - \Pi_{$1}(\text{Fornitura}) $$

|$$1$|
|---|
|F3|

>[!question] Perché non si può riscrivere con la join
>**NON** posso scrivere questa interrogazione con la join. Due tentativi tipici, *sbagliati*:
>$$
>\text{(a)} \quad \Pi_{\$1} \left[ \Pi_{\$1} (\text{Fornitore}) \underset{\$1 \neq \$1}{\bowtie} \Pi_{\$1} (\text{Fornitore}) \right]
>$$
>$$
>\text{(b)} \quad \Pi_{\$1} \left[ \Pi_{\$1} (\text{Fornitore}) \underset{\$1 \neq \$1}{\bowtie} \Pi_{\$1} (\text{Fornitura}) \right]
>$$
>- **(a)**: prolunga ogni fornitore con tutti gli *altri fornitori* (quelli con P.IVA diversa): restituisce tutte le P.IVA, purché in Fornitore ci siano almeno due tuple. Non guarda mai Fornitura, quindi non può dire chi non fornisce merci.
>- **(b)**: prolunga ogni fornitore con le forniture *di qualcun altro*, e lo conserva se *esiste almeno una* fornitura con P.IVA diversa dalla sua. Ma noi vogliamo che *tutte* le forniture abbiano P.IVA diversa dalla sua: $\exists s \,(s \neq t)$ non equivale a $\forall s \,(s \neq t)$.

> [!important] $\exists$ contro $\forall$
> 
> - la **join** prolunga una tupla della prima relazione quando **esiste almeno una** riga nella seconda che fa matching $\to$ condizione esistenziale $\exists$
> - la **sottrazione** tiene una tupla quando **nessuna** riga della seconda coincide con essa $\to$ condizione universale $\forall$ (equivalente a $\neg\exists$)
> 
> Una join può solo verificare l'esistenza di una corrispondenza, mai la sua assenza: per questo $-$ è un operatore necessario.

*Esempio:* le due query seguenti sono diverse.
$$
\Pi_{\$1}(\text{Merce}) - \Pi_{\$2}\left[\sigma_{\$1 = \text{'F1'}}(\text{Fornitura})\right]
$$
$$
\Pi_{\$1}(\text{Merce}) \underset{\$1 \neq \$1}{\bowtie} \Pi_{\$2} \left[\sigma_{\$1 = \text{'F1'}}(\text{Fornitura})\right]
$$
- **sottrazione**: restituisce le merci **non fornite** da F1. Una merce viene restituita se è diversa da *tutte* le merci fornite da F1 ($\forall$)
- **join**: ogni merce viene prolungata con le merci fornite da F1 di codice diverso dal suo. Una merce appartiene al risultato se è possibile prolungarla, cioè se esiste *almeno una* merce fornita da F1 con codice diverso ($\exists$)

## Quantificazioni
Per contare quante volte un'entità compare in una relazione si sfrutta la join, che traduce proprio il concetto di **almeno**. L'algebra relazionale non ha operatori di conteggio ([[SQL#Operatori di aggregazione|esistono in SQL]]): ogni quantificazione va quindi espressa confrontando tra loro più copie della stessa tabella.

>[!important] Più occorrenze della stessa relazione
>In una query la stessa relazione può occorrere più volte: ogni occorrenza viene sostituita con una copia dell'istanza di quella relazione.

### Almeno 1
*Esempio:* fornitori che forniscono **almeno una** merce.
$$
\text{Almeno1} = \Pi_{\$1}(\text{Fornitura})
$$

### Almeno 2
*Esempio:* fornitori che forniscono **almeno due** merci.

Si uniscono due copie di `Fornitura`, prolungando ogni riga con quelle dello stesso fornitore ma con merce diversa:
$$
\text{Almeno2} = \Pi_{\$1}\left[\text{Fornitura} \underset{\$1 = \$1 \,\wedge\, \$2 \neq \$2}{\bowtie} \text{Fornitura}\right]
$$
Il risultato della join contiene coppie di forniture con lo stesso fornitore e merci diverse. Poiché le coppie sono ordinate, un fornitore con tre forniture compare più volte (se F1 fornisce M1, M2 e M3, compare $3 \cdot 2 = 6$ volte): sarà la proiezione a eliminare i duplicati.

| fornitore | merce |
| --------- | ----- |
| F1        | M1    |
| F1        | M2    |
| F1        | M3    |

### Almeno 3
Servono due join, per confrontare tre copie di `Fornitura`:
$$
\text{Almeno3} = \Pi_{\$1}\left[\left(\text{Fornitura} \underset{\$1 = \$1 \,\wedge\, \$2 \neq \$2}{\bowtie} \text{Fornitura}\right) \underset{\$1 = \$1 \,\wedge\, \$2 \neq \$2 \,\wedge\, \$4 \neq \$2}{\bowtie} \text{Fornitura}\right]
$$
Si ottengono terne di forniture dello stesso fornitore con merci tutte diverse tra loro: nella seconda join la merce della terza copia (`$2` a destra) deve differire sia dalla merce della prima copia (`$2`) sia da quella della seconda (`$4`).

### Esattamente k e al più k
*Esattamente $k$* equivale ad *almeno $k$* ma *non più di $k$*, quindi si ottiene per sottrazione.

*Esempio:* fornitori che forniscono **esattamente una** merce.
$$
\text{Esattamente1} = \text{Almeno1} - \text{Almeno2}
$$

*Esempio:* fornitori che forniscono **al più una** merce (anche nessuna). Si sottraggono a *tutti* i fornitori quelli che ne forniscono almeno 2:
$$
\text{AlPiu1} = \text{Tutti} - \text{Almeno2} \qquad \text{dove} \qquad \text{Tutti} = \Pi_{\$1}(\text{Fornitore})
$$

### Quantificazioni annidate
Questo tipo di query verifica se si è in grado di ragionare correttamente sulla join.

*Esempio:* nomi dei fornitori che forniscono almeno 2 merci, **ciascuna delle quali è fornita da almeno 2 fornitori**.

Si scompone il problema: prima si individuano le merci fornite da almeno due fornitori, poi si cercano i fornitori che forniscono almeno due di *queste* merci.
$$
\displaylines{
\text{Merci2F} = \Pi_{\$2}\left(\text{Fornitura} \underset{\$2 = \$2 \,\wedge\, \$1 \neq \$1}{\bowtie} \text{Fornitura}\right) \\
\text{FornMerci2F} = \text{Fornitura} \underset{\$2 = \$1}{\bowtie} \text{Merci2F} \\
Q = \Pi_{\$2} \left\{\text{Fornitore} \underset{\$1 = \$1}{\bowtie} \left[ \text{FornMerci2F} \underset{\$1 = \$1 \,\wedge\, \$2 \neq \$2}{\bowtie} \text{FornMerci2F} \right] \right\}
}
$$

>[!bug] Errore tipico
>Fornitori che forniscono almeno 2 merci *speciali* (merci con una determinata proprietà), con `MerciSpeciali` relazione di una sola colonna:
>$$\left(\text{Fornitura} \underset{\$2 = \$1}{\bowtie} \text{MerciSpeciali}\right) \underset{\$2 = \$1 \,\wedge\, \$4 \neq \$1}{\bowtie} \text{MerciSpeciali}$$
>È sbagliata: la prima join tiene le forniture la cui merce è speciale, e `$4` coincide con `$2`. La seconda join prolunga ogni riga con una merce speciale uguale a `$2` (`$2 = $1`), ma richiede anche che sia diversa da `$4`, cioè da `$2` stessa: la condizione non si verifica mai e il risultato è la relazione vuota.
>
>La soluzione corretta confronta due copie di `Fornitura ⋈ MerciSpeciali`, come nell'esempio precedente.

## Negazioni
*Esempio:* fornitori che **non forniscono** la marca $\alpha$.

Si sottraggono a tutti i fornitori quelli che forniscono almeno una merce di marca $\alpha$:
$$
\displaylines{
\text{merciAlpha} = \sigma_{\$3 = \text{'}\alpha\text{'}}(\text{Merce}) \\
\text{fornisconoAlpha} = \Pi_{\$1} \left( \text{Fornitura} \underset{\$2 = \$1}{\bowtie} \text{merciAlpha} \right) \\
Q = \Pi_{\$1}(\text{Fornitore}) - \text{fornisconoAlpha}
}
$$

>[!bug] Errore
>$$\Pi_{\$1} \left[ \text{Fornitura} \underset{\$2 = \$1}{\bowtie} \sigma_{\$3 \neq \text{'}\alpha\text{'}}(\text{Merce}) \right]$$
>Restituisce anche i fornitori che forniscono sia $\alpha$ sia $\beta$: la join verifica solo che *esista* una merce di marca diversa da $\alpha$, non che non ne esista nessuna di marca $\alpha$.

*Esempio:* fornitori che forniscono **solo** (al più) la marca $\alpha$, cioè che potrebbero non fornire nulla, ma se forniscono qualcosa deve essere di marca $\alpha$.

Si sottraggono a tutti i fornitori quelli che forniscono almeno una marca diversa da $\alpha$:
$$
\displaylines{
\text{fornisconoAltri} = \Pi_{\$1}\left[ \text{Fornitura} \underset{\$2 = \$1}{\bowtie} \sigma_{\$3 \neq \text{'}\alpha\text{'}} (\text{Merce}) \right] \\
Q = \Pi_{\$1} (\text{Fornitore}) - \text{fornisconoAltri}
}
$$

## Minimo e massimo
L'algebra relazionale non ha operatori di aggregazione (`MIN`, `MAX` [[SQL#MIN e MAX|esistono in SQL]]): il minimo si ottiene come negazione, cioè un valore è **minimo** se **non esiste** un valore più piccolo.
1. Con una join di theta tra due copie della relazione si trovano i valori che **non** sono minimi, cioè quelli per cui esiste un valore minore
2. Si sottraggono a tutti i valori

*Esempio:* prezzo minimo a cui viene fornita la merce M1 (supponendo che anche F3 fornisca M1 a 6).
$$
\displaylines{
\text{prezziM1} = \Pi_{\$3}\left[\sigma_{\$2 = 'M1'}(\text{Fornitura})\right] \\
Q = \text{prezziM1}-\Pi_{\$1}\left( \text{prezziM1} \underset{\$1 > \$1}{\bowtie} \text{prezziM1} \right)
}
$$

>[!multi-column]
>
>>[!check] prezziM1
>>
>>| prezzo |
>>| ------ |
>>| 10     |
>>| 8      |
>>| 6      |
>
>>[!check] join $\$1 > \$1$
>>
>>| prezzo1 | prezzo2 |
>>| ------- | ------- |
>>| 10      | 8       |
>>| 10      | 6       |
>>| 8       | 6       |
>
>>[!check] Q
>>
>>| prezzo |
>>| ------ |
>>| 6      |

La proiezione su `$1` prende i prezzi che hanno almeno un prezzo più basso (10 e 8), quindi la sottrazione lascia solo il minimo. Se più forniture hanno lo stesso prezzo minimo, il risultato lo contiene comunque (una sola volta).

Se serve l'intera tupla (es. anche il fornitore che offre il prezzo minimo), il confronto si fa sulle forniture complete e si proietta solo alla fine:
$$
\displaylines{
\text{fornituraM1} = \sigma_{\$2 = 'M1'}(\text{Fornitura}) \\
Q = \Pi_{\$3}\left[\text{fornituraM1} - \Pi_{\$1, \$2, \$3}\left(\text{fornituraM1} \underset{\$3 > \$ 3}{\bowtie} \text{fornituraM1}\right)\right]
}
$$

>[!multi-column]
>
>>[!check] join $\$3 > \$3$
>>
>>| fornitore | merce | prezzo | fornitore | merce | prezzo |
>>| --------- | ----- | ------ | --------- | ----- | ------ |
>>| F1        | M1    | 10     | F2        | M1    | 8      |
>>| F1        | M1    | 10     | F3        | M1    | 6      |
>>| F2        | M1    | 8      | F3        | M1    | 6      |
>
>>[!check] fornituraM1 $-$ non minimi
>>
>>| fornitore | merce | prezzo |
>>| --------- | ----- | ------ |
>>| F3        | M1    | 6      |

`Π_{$1,$2,$3}` serve a riportare la join allo schema di `fornituraM1`, altrimenti la sottrazione non è definita. Prima del $\Pi_{\$3}$ finale la tupla dice anche **chi** fornisce al prezzo minimo (F3).

>[!question] Massimo
>Il **massimo** si ottiene allo stesso modo invertendo la condizione della join: $\text{prezziM1}-\Pi_{\$1}\left( \text{prezziM1} \underset{\$1 < \$1}{\bowtie} \text{prezziM1} \right)$.

## Quantificazione universale
*Esempio:* nomi dei fornitori che forniscono **tutte** le merci della marca x.

>[!bug] Errore
>$$\text{Fornitore}\underset{\$1 = \$1}{\bowtie}\left[\text{Fornitura} \underset{\$2 = \$1}{\bowtie}\sigma_{\$3 = 'x'}(\text{Merce}) \right]$$
>La join traduce $\exists$: restituisce i fornitori che forniscono **almeno una** merce di marca x, non tutte.

L'algebra relazionale non ha un operatore per il $\forall$: lo si riscrive come negazione di un $\exists$
$$
\forall m : P(m) \equiv \nexists m : \neg P(m)
$$
Fornitori che forniscono tutte le merci di marca x $\equiv$ fornitori per cui **non esiste** una merce di marca x che **non** forniscono. Un fornitore va scartato se esiste una merce di marca x tale che la coppia fornitore-merce **non** sta in `Fornitura`.

1. Tutte le coppie possibili fornitore - merce di marca x, meno quelle che esistono davvero: restano le coppie (fornitore, merce x che **non** fornisce)
$$
\text{FornituraNO} = \left\{\Pi_{\$1}(\text{Fornitore}) \times \Pi_{\$1}\left[\sigma_{\$3 = 'x'}(\text{Merce})\right]\right\} - \Pi_{\$1, \$2}(\text{Fornitura})
$$
2. Fornitori "buoni" = tutti i fornitori meno quelli che compaiono in `FornituraNO`
$$
\text{FornitoriSI} = \Pi_{\$1}(\text{Fornitore}) - \Pi_{\$1}(\text{FornituraNO})
$$
3. Nomi
$$
Q = \Pi_{\$3}\left(\text{FornitoriSI} \underset{\$1 = \$1}{\bowtie} \text{Fornitore}\right)
$$

*Esempio* senza filtro sulla marca (fornitori che forniscono **tutte** le merci): $\{F1,F2,F3\} \times \{M1,M2\}$ ha 6 coppie, tolte le 3 di `Fornitura` restano

| fornitore | merce |
| --------- | ----- |
| F2        | M2    |
| F3        | M1    |
| F3        | M2    |

il fornitore `$1` non fornisce la merce `$2` $\implies$ `FornitoriSI` $= \{F1, F2, F3\} - \{F2, F3\} = \{F1\}$, $Q = \{A\}$.

Con marca $\alpha$ (solo M1): `FornituraNO` $= \{(F3, M1)\}$, `FornitoriSI` $= \{F1, F2\}$, $Q = \{A, B\}$.

## Coppie con lo stesso insieme
*Esempio:* **coppie di fornitori** che forniscono **lo stesso insieme** di merci.

Due insiemi sono uguali se ognuno è contenuto nell'altro, quindi la richiesta si riscrive con il $\forall$ e poi con la negazione dell'$\exists$, come nella [[#Quantificazione universale|quantificazione universale]]:
- coppie $(F', F'')$ tali che **tutte** le merci fornite da $F'$ sono fornite da $F''$ e viceversa
- $\equiv$ coppie $(F', F'')$ tali che **non esiste** alcuna merce fornita da $F'$ che **non** è fornita da $F''$, e viceversa

>[!bug] Errore
>Confrontare due copie di `Fornitura` cercando coppie in cui il primo fornitore fornisce una merce e il secondo ne fornisce una **diversa** non funziona. Se F1 e F2 forniscono entrambi $\{M1, M2\}$, le righe $(F1, M1)$ e $(F2, M2)$ formano comunque una coppia con merci diverse, e F1, F2 verrebbero scartati.
>Se gli insiemi hanno più di un elemento è normale trovare righe con merci diverse: la verifica va fatta sull'**intero insieme**, non su una sola riga.

1. Coppie fornitore - merce **non** fornita: tutte le combinazioni possibili meno quelle che esistono davvero (come in [[#Quantificazione universale|FornituraNO]], ma senza filtro sulla marca)
$$
\text{FornituraNo} = \left[\Pi_{\$1}(\text{Fornitore}) \times \Pi_{\$1}(\text{Merce})\right] - \Pi_{\$1, \$2}(\text{Fornitura})
$$
2. Coppie da scartare: si prolunga ogni fornitura con le righe di `FornituraNo` **sulla stessa merce**
$$
\text{coppieNo} = \Pi_{\$1, \$4}\left( \text{Fornitura} \underset{\$2 = \$2}{\bowtie} \text{FornituraNo} \right)
$$
La join ha 5 colonne: `$1` è il fornitore $F'$ che fornisce la merce `$2`, `$4` è il fornitore $F''$ che **non** la fornisce. Quindi $(F', F'') \in \text{coppieNo}$ se $F'$ fornisce almeno una merce che $F''$ non fornisce.
3. Tutte le coppie di fornitori, meno quelle in `coppieNo` e meno quelle in `coppieNo` invertite (il *viceversa*)
$$
Q = \left\{\left[\Pi_{\$1}(\text{Fornitore}) \underset{\$1 < \$1}{\bowtie} \Pi_{\$1}(\text{Fornitore})\right] - \text{coppieNo}\right\} - \Pi_{\$2, \$1}(\text{coppieNo})
$$
- la condizione $\$1 < \$1$ esclude le coppie $(F, F)$ e tiene una sola tra $(F', F'')$ e $(F'', F')$
- la prima sottrazione scarta $(F', F'')$ se $F'$ fornisce qualcosa che $F''$ non fornisce
- la seconda scarta $(F', F'')$ se è $F''$ a fornire qualcosa che $F'$ non fornisce: in `coppieNo` questa coppia compare come $(F'', F')$, per questo va invertita con $\Pi_{\$2, \$1}$

>[!check] Esempio
>Supponiamo che F1 e F2 forniscano entrambi M1 e M2, e che F3 non fornisca nulla.
>
>>[!multi-column]
>>
>>>[!blank] Fornitura
>>>
>>>| fornitore | merce |
>>>| --------- | ----- |
>>>| F1        | M1    |
>>>| F1        | M2    |
>>>| F2        | M1    |
>>>| F2        | M2    |
>>
>>>[!blank] FornituraNo
>>>
>>>| fornitore | merce |
>>>| --------- | ----- |
>>>| F3        | M1    |
>>>| F3        | M2    |
>>
>>>[!blank] coppieNo
>>>
>>>| $F'$ | $F''$ |
>>>| ---- | ----- |
>>>| F1   | F3    |
>>>| F2   | F3    |
>
>Le coppie con $\$1 < \$1$ sono $(F1, F2)$, $(F1, F3)$, $(F2, F3)$. La prima sottrazione toglie $(F1, F3)$ e $(F2, F3)$, la seconda non toglie nulla (in $\Pi_{\$2,\$1}(\text{coppieNo})$ ci sono $(F3, F1)$ e $(F3, F2)$), quindi $Q = \{(F1, F2)\}$.
>
>Con l'istanza degli appunti (F1 fornisce M1, M2 e F2 solo M1) invece $(F1, F2) \in \text{coppieNo}$, perché F1 fornisce M2 e F2 no, e $Q$ è vuota.
