#appunti 
#basi_di_dati
# Modello relazionale (progettazione logica)
In questa fase definiamo quali siano le **tabelle** più opportune per rappresentare le informazioni (concetti) del modello ER, passando quindi a **dati** (codifica dei concetti secondo un linguaggio). Per farlo utilizzeremo il **modello relazionale**.

>[!bug] Relazione
>Nonostante abbiano lo stesso nome, nel modello relazionale il termine **relazione** non indica un sottoinsieme di coppie di entità, ma una qualsiasi tabella: la relazione è tra i domini degli attributi.

Riprendendo l'esempio Fornitore-Merce trattato fino ad ora e il suo [[Modello ER|modello ER]]:
![[DBMS-1790947194394.webp|center|517]]

dobbiamo per prima cosa fare una distinzione, il modello relazionale consiste nella rappresentazione/descrizione della struttura dei dati, elencando **schemi di relazione** più adeguati a descrivere il modello ER definito nella fase precedente
>[!multi-column]
>
>>[!important] Istanza di relazione
>>Istanza della tabella
>>
>>| P.iva    | Nome     | Città    |
>>| -------- | -------- | -------- |
>>| F1       | A        | CS       |
>>| F2       | B        | RC       |
>>| $\vdots$ | $\vdots$ | $\vdots$ |
>
>>[!important] Schema di relazione
>>Elenco delle intestazioni (senza le singole istanze)
>>```
>>Fornitore(p.iva:string, nome:string, città:string)
>>```

>[!important] Tupla
>Singola riga dell'istanza di relazione

*es.* F1 fornisce M1,M2 e F2 fornisce M2,M3
L'intero modello ER potrebbe essere rappresentato con un'unica tabella

| P.iva | nome | città | codM | nomeM | marca    |
| ----- | ---- | ----- | ---- | ----- | -------- |
| F1    | A    | CS    | M1   | x     | $\alpha$ |
| F1    | A    | CS    | M2   | y     | $\beta$  |
| F2    | B    | RC    | M2   | y     | $\beta$  |
| F2    | B    | RC    | M3   | z     | $\alpha$ |
Concettualmente questa rappresentazione è corretta
>[!bug] Problemi
>Ripetiamo la stessa informazione più volte innecessariamente (ridondanza)
>1. Rischio di fare errori: non possiamo garantire la consistenza del dato
>2. La modifica diventa molto complessa e rischia di essere costosissima

Inoltre avere i dati in un unica tabella $\nRightarrow$ efficienza di estrazione

>[!check] Creiamo 3 tabelle distinte

rappresentazione istanza di relazione:
>[!multi-column]
>
>>[!blank]
>>| P.iva | nome | città |
>>| ----- | ---- | ----- |
>>| F1    | A    | CS    |
>>| F2    | B    | RC    |
>
>>[!blank]
>>| Cod | nome | marca    |
>>| --- | ---- | -------- |
>>| M1  | x    | $\alpha$ |
>>| M2  | y    | $\beta$  |
>>| M3  | z    | $\alpha$ |
>
>>[!blank]
>>| Fornitore | Merce |
>>| --------- | ----- |
>>| F1        | M1    |
>>| F1        | M2    |
>>| F2        | M2    |
>>| F2        | M3    |

Utilizziamo una tabella per rappresentare la relazione associando dei riferimenti univoci: le **chiavi primarie**, non come coppie di concetti.
Rappresentazione schema di relazione:
$$
\displaylines{
\text{Fornitore}(\underline{\text{p.iva}} \text{: string}, \text{nome: string},\text{ città: string}) \\
\text{Merce}(\underline{\text{Cod}}\text{: number}, \text{ nome: string}, \text{ marca: string}) \\
\text{Fornitura}(\underline{\text{Fornitore}}\text{: string},\text{ }\underline{Merce}\text{: number})
}
$$
In questo modo evitiamo la ridondanza e quindi è minore il rischio di inconsistenze.
In questo caso se un attributo non è necessario possiamo segnalarlo con `null` sopra l'attributo.

Avendo definito tutto questo possiamo rappresentare qualsiasi versione della realtà, ma dobbiamo aggiungere delle restrizioni presenti nel modello ER:
1. chiave candidata
2. vincoli di cardinalità
## Vincoli di integrità
### Vincolo di chiave primaria
Quella che nel modello ER era una caratteristica identificativa ora deve diventare un vero e proprio vincolo.
>[!important] Chiave primaria (primary key)
>Dato uno schema di relazione
>$$R_{1}(A_{1},\dots,A_n)$$
>Definiamo la **chiave primaria** come la specifica di un insieme di attributi
>$$k = \{A_{1}',\dots,A_k'\} \subseteq \{A_{1},\dots,A_n\}$$

Una istanza di relazione soddisfa il vincolo di chiave se non esistono tuple distinte che coincidono negli attributi che compongono l'insieme chiave.

>[!attention] In questo caso non parliamo di minimale
>Il concetto di minimale non appartiene a questa progettazione, in quanto viene definita come caratteristica degli identificatori della progettazione concettuale.
>Nella progettazione logica stiamo solo traducendo le caratteristiche/proprietà che abbiamo identificato nella progettazione concettuale.

Nel modello relazionale (nello schema di relazione) indichiamo la chiave sottolineando gli attributi che compongono l'insieme di attributi chiave.

#### Chiavi secondarie
Se nel modello ER sono presenti più chiavi candidate nella traduzione nel modello relazionale una di esse diventerà la **chiave primaria**, mentre le altre saranno **chiavi secondarie**.
Indichiamo la chiave secondaria con `UNIQUE`
$$
\text{Fornitore} ( \underline{\text{P.iva}}, \overbrace{\text{nome, città}}^{\text{UNIQUE}})
$$
La scelta della chiave primaria avviene in base al fatto che poi verrà utilizzata come meccanismo principale di organizzazione nella rappresentazione della tabella.
### Vincolo di integrità referenziale
Un vincolo di integrità referenziale impone che i valori di riferimento a un'altra tabella (chiave esterna) siano sempre presenti nella tabella referenziata, mantenendo coerenti i legami che nel modello ER erano relazioni tra entità
Nell'esempio precedente dobbiamo fare in modo che nella tabella Fornitura non possano essere inseriti elementi non presenti nelle tabelle Fornitore e Merce.

>[!important] Chiave esterna (foreign key)
>Dati 2 schemi di relazione
>$$R_{1}(A_{1},\dots,A_n) \hspace{4ex} R_{2}(B_{1},\dots,B_n)$$
>la **chiave esterna** è una espressione del tipo
>$$R_{1}[A_{1}',\dots,A_k'] \sqsubseteq_{FK} R_{2}[B_{1}',\dots,B_k']$$
>Dove $\{B_{1}',\dots,B_k'\}$ è chiave di $R_{2}$ e $\{A_{1}',\dots,A_k'\} \subseteq \{A_{1},\dots,A_m\}$

Sia $r_{1}$ una istanza di $R_{1}$ ed $r_{2}$ una istanza di $R_{2}$, $r_{1}$ ed $r_{2}$ soddisfano il vincolo di chiave esterna solo se
$$
\forall t_{1} \in r_{1}, \exists t_{2} \in r_{2} \ : \ t_{1}[A_{1}'] = t_{2}[B_{1}'] \wedge \dots \wedge t_{1}[A_k'] = t_{2}[B_k']
$$

>[!bug] Seppur il nome coincida il concetto di chiave esterna è profondamente diverso da quanto detto per la progettazione concettuale.

Nello schema relazionale codifichiamo il legame con le altre tabelle come segue
$$
\displaylines{
\text{Fornitura[Fornitore]}\sqsubseteq_{FK}\text{Fornitore [p.iva]} \\
\text{Fornitura[Merce]} \sqsubseteq_{FK} \text{Merce[cod]}
}
$$
#### Chiavi candidate esterne in chiavi
>[!multi-column]
>
>>[!blank]
>>Se nel modello ER abbiamo delle chiavi esterne nel modello relazionale nel momento in cui definiamo la foreign key dobbiamo fare attenzione a legare tutti gli attributi che compongono la chiave interna di Merce e inserire tutti gli attributi all'interno della relazione Produzione
>>$$\begin{array}{c}
>>\text{Fornitore}(\underline{\text{p.iva}}, \text{nome}, \text{città}) \\
>>\text{Merce}(\underline{\text{nome}}, \underline{\text{marca}}) \\
>>\text{Marca}(\underline{\text{nome}}, \text{sede}) \\ \\
>>\text{Fornitura}(\underline{\text{fornitore}}, \underline{\text{nomeM}}, \underline{\text{marcaM}}, \text{prezzo}) \\ \\
>>\text{Fornitura}[\text{fornitore}] \sqsubseteq_{FK} \text{Fornitore}[\text{p.iva}] \\
>>\text{Fornitura}[\text{nomeM}, \text{marcaM}] \sqsubseteq_{FK}\text{Merce}[\text{nome}, \text{marca}]
>>\end{array}$$
>
>>[!blank]
>>![[DBMS-1791804621439.webp|491]]
### Vincolo di cardinalità
In base alla [[Modello ER#Cardinalità|cardinalità]] descritta nel modello ER possono esistere vari modi di rappresentarlo nel modello relazionale
![[DBMS-1791643675437.webp|center|555]]
#### Vincolo uno a molti
1:1 --- 0:n
Per definire un vincolo 1:1 possiamo agire in due modi

**Metodo 1**
Possiamo creare una nuova relazione e usare solo Merce come chiave
$$
\displaylines{
\text{Fornitore}(\underline{p.iva}, \text{nome}, \text{città}) \\
\text{Merce}(\underline{\text{cod}}, \text{nome}) \\
\text{Marca}(\underline{\text{nome}}, \text{sede}) \\ \\
\text{Produzione}(\underline{\text{Merce}}, \text{Marca}) \\
\text{Produzione}[\text{Merce}] \sqsubseteq_{FK} \text{Merce}[\text{cod}] \\
\text{Produzione}[\text{Marca}] \sqsubseteq_{FK} \text{Marca}[\text{nome}]
}
$$
**Metodo 2**
Non creiamo una nuova relazione, ma usiamo la foreign key, accorpando la relazione all'entità
$$
\displaylines{
\text{Fornitore}(\underline{p.iva}, \text{nome}, \text{città}) \\
\text{Merce}(\underline{\text{cod}}, \text{nome}, \text{marca}) \\
\text{Marca}(\underline{\text{nome}}, \text{sede}) \\ \\
\text{Marca}[\text{marca}] \sqsubseteq_{FK} \text{Marca}(\text{nome})
}
$$
#### Vincolo 0 a molti
0:1 --- 0:n
Nel caso in cui l'attributo marca all'interno di Merce può non essere usato (0:1), possiamo usare il [[#Vincolo uno a molti|metodo 1]], ma con l'attributo `NULL`
$$
\displaylines{
\text{Fornitore}(\underline{p.iva}, \text{nome}, \text{città}) \\
\text{Merce}(\underline{\text{cod}}, \text{nome}, \overbrace{\text{marca}}^{\text{NULL}}) \\
\text{Marca}(\underline{\text{nome}}, \text{sede}) \\ \\
\text{Merce}[\text{marca}] \sqsubseteq_{FK} \text{Marca}[\text{nome}]
}
$$
#### Vincolo molti a molti
0:n --- 0:n
Nel caso in cui i vincoli da entrambi i lati sono $0:n$ dobbiamo obbligatoriamente creare una nuova relazione
$$
\displaylines{
\text{Fornitore}(\underline{p.iva}, \text{nome}, \text{città}) \\
\text{Merce}(\underline{\text{cod}}, \text{nome}) \\
\text{Marca}(\underline{\text{nome}}, \text{sede}) \\ \\
\text{Fornitura}(\underline{\text{Fornitore}}, \underline{\text{Merce}}, \text{prezzo}) \\
\text{Fornitura}[\text{Fornitore}] \sqsubseteq_{FK} \text{Fornitore}[\text{p.iva}] \\
\text{Fornitura}[\text{Merce}] \sqsubseteq_{FK} \text{Merce}[\text{cod}]
}
$$
#### Vincolo 1:n
0:n --- 1:n
*es.* Ogni merce è fornita da almeno un fornitore
Nel modello relazionale per rappresentare il vincolo 1:n non esiste un modo pulito privo di errori:
potremmo definire la prima istanza messa in relazione come attributo dell'entità e tutti gli altri tramite relazione
$$
\displaylines{
\text{Merce}(\underline{\text{nome}}, \underline{\text{marca}},\text{fornitore}, \text{prezzo}) \\
\text{Merce}[\text{fornitore}] \sqsubseteq_{FK} \text{Fornitore}[\text{p.iva}]
}
$$
causando in questo modo ridondanza: il fornitore presente come attributo potrebbe anche essere presente nella relazione vera e propria.

Se vogliamo evitare questo problema rilassiamo il vincolo 1:n trattandolo come 0:n.
#### Vincolo 2:2
In questo caso è spesso sufficiente aggiungere due attributi alla relazione. Se la cardinalità del vincolo è troppo grande decidiamo di rilassare la struttura e trattarlo come 0:n.
Rimane il problema però che i due attributi non possono essere uguali, per questo definiamo dei **check**.

>[!important] Check
>Dei vincoli che verranno verificati solo tra gli attributi di ciascuna tupla

questi verificheranno che il fornitore1 sia diverso dal fornitore2
$$
\text{Merce}(\underline{\text{nome}}, \underline{\text{marca}}, \text{fornitore1}, \text{fornitore2}, \text{prezzo1}, \text{prezzo2}) \hspace{8ex} \text{fornitore1} \overset{\text{CHECK}}{\neq} \text{fornitore2}
$$
#### Vincolo 2:3
Ci comportiamo in modo analogo al 2:2, ma aggiungendo un terzo attributo, che dichiariamo come NULL.

In questo caso non è necessario mettere il prezzo3 a NULL, così evitiamo di implementare la possibilità di inserire un fornitore3 senza prezzo3.

#### Vincolo uno a uno
In questi casi tipicamente le due entità possono essere accorpate in una unica relazione
>[!multi-column]
>
>>[!blank]
>>![[DBMS-1791829956609.webp]]
>
>>[!blank]
>>$$\text{Cliente}(\underline{\text{CF}}, \text{nome}, \text{dataR}, \text{tipo})$$

Dobbiamo fare attenzione alle [[#Chiavi secondarie]] nel caso in cui siano presenti delle chiavi candidate diverse dalla relazione stessa e dobbiamo decidere quale delle due chiavi candidate sarà la chiave primaria della relazione e quale la secondaria
>[!multi-column]
>
>>[!blank]
>>![[DBMS-1791829813851.webp]]
>
>>[!blank]
>>$$\text{ClienteConTessera}(\underline{\text{CF}}, \overbrace{\text{ID}}^{\text{UNIQUE}}, \text{nome}, \text{dataR}, \text{tipo})$$

Se invece abbiamo uno dei due lati a 0:1 tipicamente definiamo una nuova relazione
>[!multi-column]
>
>>[!blank]
>>![[DBMS-1791829829708.webp]]
>
>>[!blank]
>>$$\displaylines{
>>\text{Cliente}(\underline{\text{CF}}, \text{nome}) \\
>>\text{Tessera}(\underline{\text{ID}}, \text{dataR}, \text{tipo}, \overbrace{\text{cliente}}^\text{UNIQUE}) \\
>>\text{Tessera}[\text{cliente}] \sqsubseteq_{FK} \text{Cliente}[\text{CF}]
>>}$$
### ISA (modello relazionale)
![[DBMS-1791808941122.webp|center|143]]
In questo caso è sufficiente aggiungere un attributo con NULL: se un operaio ha la specializzazione allora sarà un operaio specializzato, altrimenti no
$$\text{Operaio}(\underline{\text{matr}}, \text{nome}, \overset{\text{NULL}}{\text{specializzazione}})$$

Se invece sono presenti delle relazioni specifiche per la sotto entità allora dobbiamo definire separatamente altre relazioni
![[DBMS-1791827446802.webp|center|481]]
$$
\displaylines{
\text{Certificazione(\underline{operaioSpecializzato, data}, descrizione)} \\
\text{Certificazione[operaioSpecializzato]} \sqsubseteq_{FK} \text{Operaio[matricola]}
}
$$

Tuttavia posso inserire anche operai non specializzati, perché i valori sono presi dalla chiave di Operaio. Serve quindi un'altra soluzione: se non divido le entità non riesco a distinguere la classe generale dalla specifica. Per questo trasformo l'ISA in relazione:
![[DBMS-1791827618776.webp|center|710]]
$$
\displaylines{
\text{Operaio}(\underline{\text{matr.}}, \text{nome}) \\
\text{OperaioSpecializzato}(\underline{\text{operaio}}, \text{specializzazione}) \\
\text{Certificazione}(\underline{\text{operaioSpecializzato}}, \underline{\text{data}}, \text{descrizione}) \\ \\
\text{Certificazioe}[\text{operaioSpecializzato}] \sqsubseteq_{FK} \text{OperaioSpecializzato}[\text{operaio}] \\
\text{OperaioSpecializzato}[\text{operaio}] \sqsubseteq_{FK} \text{Operaio}[\text{matr}]
}
$$

Tipicamente se la sotto entità non è collegata ad altro possiamo accorparla, se invece:
- la maggior parte degli operai non sono specializzati
- gli operai specializzati hanno molti attributi
- ci sono delle relazioni con la sotto entità
creiamo una nuova relazione.
### Generalizzazione (modello relazionale)
![[DBMS-1791828394851.webp|center|793]]


**Metodo 1 - Unica relazione con attributo tipo**
Esprimendo il tipo ($0$: docente, $1$: studente, $2$: solo persona, $3$: docente e studente), si ignora l'altro campo. Garantisce quindi totalità ed esclusività (volendo si possono rappresentare anche gli altri vincoli).
$$
\text{Persona}(\underline{CF}, \text{nome}, \text{tipo}, \text{SSD}, \text{CDL})
$$
Tuttavia, se sono presenti relazioni, sia per studente/docente sia per persona, il problema si ripresenta: non possiamo rappresentare la relazione di Studente con Titolo di studio.

**Metodo 2 - Relazione per il padre e per ogni figlio**
Va bene se docente e studente hanno molti attributi e altre relazioni. Consiste nel trasformare la generalizzazione in più relazioni, senza garantire né l'esclusività né la totalità:
$$
\displaylines{
\text{Persona}(\underline{\text{CF}}, \text{nome}) \\
\text{Studente}(\underline{\text{persona}}, \text{CDL}) \\
\text{Docente}(\underline{\text{persona}}, \text{SSD}) \\
\text{Titolo}(\underline{\text{numero progressivo}}, \underline{\text{studente}}, \text{descrizione}) \\ \\
\text{Studente}[\text{persona}] \sqsubseteq_{FK} \text{Persona} (\text{CF}) \\
\text{Docente}[\text{persona}] \sqsubseteq_{FK} \text{Persona} (\text{CF}) \\
\text{Titolo}[\text{studente}] \sqsubseteq_{FK} \text{Studente} (\text{persona}) \\
}
$$
**Metodo 3 - Eliminazione del padre**
Si elimina Persona ripetendo i campi comuni nelle entità
$$
\displaylines{
\text{Studente}(\underline{\text{CF}}, \text{nome}, \text{CDL}) \\
\text{Docente}(\underline{\text{CF}}, \text{nome}, \text{SSD}) \\
\text{Titolo}(\underline{\text{numero progressivo}}, \underline{\text{studente}}, \text{descrizione}) \\ \\
\text{Titolo}[\text{studente}] \sqsubseteq_{FK} \text{Studente}[\text{CF}]
}
$$
Con questa soluzione garantisco la totalità, ma non l'esclusività. Supponendo inoltre che Persona abbia relazioni:
$$
\displaylines{
\text{IndirizzoS(\underline{ID}, descrizione, studente)} \\
\text{IndirizzoD(\underline{ID}, descrizione, docente)} \\ \\
\text{IndirizzoS[studente]} \sqsubseteq_{FK} \text{Studente[CF]} \\
\text{IndirizzoD[docente]} \sqsubseteq_{FK} \text{Docente[CF]}
}
$$
Ma perdendo l'esclusività si perde anche negli indirizzi: posso avere più indirizzi con ID diversi.

**In conclusione**

|              | **Totalità** | **Esclusività** | **Relazioni** |
| ------------ | ------------ | --------------- | ------------- |
| **Metodo 1** | ✅            | ✅               | Solo padre    |
| **Metodo 2** | ❌            | ❌               | ✅             |
| **Metodo 3** | ✅            | ❌               | Solo figli    |
