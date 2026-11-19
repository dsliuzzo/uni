#appunti #telecomunicazioni 
![[Reti di telecomunicazioni-1791128904735.webp|center|274]]

In realtà collegamento-fisico sono un unico livello di accesso alla rete.
Prende il nome da due protocolli (anche se ne contiene in realtà di più):
- **TCP**
- **IP**

# Livello di accesso alla rete (livello 1)
Il livello di accesso alla rete comprende sia il livello di:
- [[Modello ISO OSI#Livello collegamento (livello 2)]]
  punto-punto (ppp, ethernet)
- [[Modello ISO OSI#Livello fisico (livello 1)]]
  forme d'onda
# Livello di rete (livello 2)
[[Modello ISO OSI#Livello rete (livello 3)]]
Protocolli che permettono di andare da un certo sistema (sorgente) della rete ad un altro (destinazione).
Avendo una gestione gerarchica dei centri di smistamento non è necessario conoscere tutto l'indirizzo, ma solo a quale centro di smistamento è necessario inviare il dato

Le sue principali funzioni sono:
- **interfunzionamento delle reti**
  questo livello consente a varie reti componenti di funzionare insieme. Sostanzialmente, maschera le differenze hardware sottostanti impacchettando i dati in un formato universale.
- **servizio senza connessione**
  il livello fornisce un servizio di strato senza connessione. I dati (datagrammi) vengono inviati nella rete senza stabilire preventivamente un canale dedicato.

Protocolli: [[Protocolli#IPv4|IP]] (formato del datagramma, frammentazione), [[Protocolli#ARP e RARP]], [[Protocolli#IGP (protocolli di routing)|IGP]]

## Indirizzamento
Per far comunicare tra loro tutti i sistemi connessi a Internet serve un metodo **globalmente accettato** per identificare e indirizzare in modo univoco ogni sistema. È stato quindi definito un nuovo schema di indirizzamento, perché le sottoreti pre-esistenti avevano schemi propri, diversi tra loro e non univoci globalmente (indirizzi Ethernet, indirizzi X.25, numeri telefonici…).
Un indirizzo IP è una stringa di 32 bit, che identifica la connessione di una interfaccia di un sistema (host o router) ad una rete e non uno specifico utente.
Per garantire l'unicità c'è un'autorità centrale, **INTER-NIC**, controllata dalla **IANA**, che distribuisce gli indirizzi a blocchi ai provider. Se un host deve connettersi ad internet contatta il server DHCP del provider, che gli assegnerà l'indirizzo IP pubblico specifico.

Ogni indirizzo IP è caratterizzato da due parti:
- **net-id**
  identifica una porzione di inter-rete, che può coincidere con una sotto-rete fisica, o comprendere più sotto-reti fisiche o essere un sottoinsieme di una sotto-rete fisica; nel seguito indicheremo la porzione individuata da Net-ID col nome di “rete logica”
- **host-id**
  identifica il sistema (host o router) nella rete logica
### Classi di indirizzi IP
>[!important] Maschere
>La **maschera** mette a 1 i bit di rete (i più significativi) e a 0 quelli di host:
>
>| Classe | Maschera |
>|---|---|
>| A | /8 → 255.0.0.0 |
>| B | /16 → 255.255.0.0 |
>| C | /24 → 255.255.255.0 |

Nella distribuzione degli indirizzi (schema **classful**) lo spazio è diviso così: A 50%, B 25%, C 12,5%, D 6,25%, E 6,25%.

>[!multi-column]
>
>>[!blank]
>>- **Classe A**: poche reti molto grandi (Net_Id 7 bit, Host_Id 24 bit → fino a $2^{24}-2$ host per rete).
>>- **Classe B**: reti di medie dimensioni (Net_Id 14 bit, Host_Id 16 bit → fino a $2^{16}-2 = 65\,534$ host).
>>- **Classe C**: tante reti piccole (Net_Id 21 bit, Host_Id 8 bit → fino a $2^8-2 = 254$ host).
>>- **Classe D**: un gruppo multicast (Multicast group id, 28 bit) corrisponde a una pluralità di host; si usa un protocollo aggiuntivo, **IGMP** (*Internet Group Management Protocol*).
>>- **Classe E**: riservata (27 bit).
>
>>[!blank]
>>![[classi-ip-torta.svg|center|317]]


![[Protocolli-1794076412811.webp]]

>[!important] Indirizzo di rete e broadcast
>- Bit di host **tutti a 0** → **indirizzo della rete**.
>- Bit di host **tutti a 1** → **indirizzo broadcast** della rete (pacchetto a tutti gli host).
>
>Quindi nella parte host non sono assegnabili tutti gli indirizzi: gli host possibili sono $2^{\#\text{bit host}} - 2$ (es. classe A: $2^{24}-2$, B: $2^{16}-2$, C: $2^{8}-2$).

>[!check] Esempio
>Dato l'indirizzo di classe B **132.125.18.36**:
>
>| | |
>|---|---|
>| Net_Id | 132.125 |
>| Host_Id | 18.36 |
>| Indirizzo della rete | 132.125.0.0 |
>| Indirizzo broadcast | 132.125.255.255 |
>| Indirizzi possibili | da 132.125.0.1 a 132.125.255.254 |
>| Numero di host | $256 \cdot 256 - 2 = 65\,534$ |

Gli indirizzi IPv4 (32 bit) sono **limitati**, mentre i dispositivi connessi in rete sono sempre di più: con lo schema a classi gli indirizzi si sono esauriti in fretta. Per questo si è passati allo schema **classless**, con le soluzioni descritte di seguito ([[#Subnetting|subnetting]], [[#Subnetting|CIDR]], [[#Supernetting|supernetting]]), e a lungo termine a IPv6 (128 bit).
### Subnetting
>[!important] Subnetting (RFC 950, 1985)
>Divisione di una rete di classe A, B o C in sottoreti più piccole, aggiungendo un terzo livello gerarchico: **netid + subnetid + hostid** (netid + subnetid = *network prefix*).
>- risolve la crescita delle tabelle di routing: le sottoreti **non sono visibili all'esterno**, i router di Internet hanno un'unica entry per tutte le sottoreti di una rete;
>- risolve la continua richiesta di indirizzi: un'organizzazione riceve uno (o pochi) indirizzi di rete e poi assegna liberamente i numeri di sottorete.

All'inizio il subnetting era **fisso**: tutte le sottoreti uguali, dimensionate sulla rete che chiede di più (tra una rete da 100 e una da 50 si dà 100 a entrambe). Poi si è passati alla subnet **variabile** (100 a una e 50 all'altra).

**Netmask**
- ha bit a 1 sui campi network e subnet, a 0 sul campo host;
- per sapere la subnet di un host si fa l'**AND bit a bit** tra netmask e indirizzo IP;
- se due indirizzi sono nella stessa subnet → routing **diretto**, altrimenti → routing **indiretto** verso un router (vedi [[#Instradamento diretto e indiretto]]) (si assume che a ogni rete logica corrisponda una rete fisica);
- esaminando la maschera un host capisce come è suddiviso il suo indirizzo (es. classe B: senza subnet `255.255.0.0`; con Host_Id diviso a metà in Sub_Net_Id e Sub_Host_Id `255.255.255.0`).

>[!question] Osservazione: la maschera non sta nell'header IP
>Con lo schema **classful** la maschera si ricavava dai primi bit dell'indirizzo: `0` → A (/8), `10` → B (/16), `110` → C (/24).
>Con subnetting e CIDR non è più così, ma la maschera non serve nel pacchetto perché chi la usa la conosce già:
>- l'**host** ha la propria maschera (configurata o ricevuta via DHCP): fa l'AND con l'IP di destinazione e, se è nella sua rete, consegna direttamente, altrimenti manda al gateway;
>- il **router** ha rete e maschera in ogni voce della tabella di routing e sceglie la voce con il prefisso più lungo (*longest prefix match*).
>
>La maschera è quindi un'informazione **locale**: viaggia solo nei messaggi dei protocolli di routing (RIPv2, OSPF, BGP), non in RIPv1 che era classful.

>[!check] Esempio
>Indirizzo **193.205.102.36** con maschera **255.255.255.248**: quante macchine può avere la subnet?
>248 = `11111000` → gli ultimi **3 bit** sono di host, cioè $2^3 = 8$ indirizzi:
>
>| ultimi 3 bit | host | quarto numero IP |
>|---|---|---|
>| 000 | subnet | 32 |
>| 001 – 110 | disponibili | 33 – 38 |
>| 111 | broadcast | 39 |
>
>Tolti indirizzo di subnet e broadcast restano al massimo **6 macchine**. Tutti i router di Internet instradano in base alla rete di classe C (193.205.102); il router responsabile di quella rete instrada poi verso le subnet guardando gli altri 5 bit (informazione presa dalla maschera).

Convenzione per assegnare gli indirizzi in una rete (es. `192.168.0.0/24`, broadcast `192.168.0.255`): o si parte dal **primo** utilizzabile, `192.168.0.1` (di solito il router), in ordine crescente, o dall'**ultimo** utilizzabile, `192.168.0.254` (subito prima del broadcast), in ordine decrescente.

>[!check] Esempio
>Subnetting fisso: dalla classe C **192.168.0.0/24** servono **due reti da 100**.
>Uso il primo bit della parte host: /24 → **/25** (255.255.255.128):
>- `192.168.0.0/25` → da .0 a .127;
>- `192.168.0.128/25` → da .128 a .255.
>
>In ogni sottorete il primo (.0 / .128) e l'ultimo indirizzo (.127 / .255) non sono assegnabili. La maschera si può allargare ancora:
>```
>192.168.0.0/24 ─┬─ 192.168.0.0/25   ─┬─ 192.168.0.0/26
>                │                    └─ 192.168.0.64/26
>                └─ 192.168.0.128/25 ─┬─ 192.168.0.128/26
>                                     └─ 192.168.0.192/26
>```

>[!important] Collegamento punto-punto: /30
>Con /30 ho 4 indirizzi, il minimo che serve: indirizzo della rete, 2 indirizzi disponibili (i due estremi del collegamento) e broadcast (anche se non lo uso).

L'efficienza dipende anche da quanti indirizzi sono occupati nella rete: si tende a lasciarne almeno il **10% vuoto**.

**Variable Length Subnet Masks (VLSM)**
>[!check] Esempio
>Da **192.168.0.0/24** ricavare tre reti da **60**, **30** e **20** host.
>- `192.168.0.0/26` → 64 indirizzi per la LAN da 60;
>- `192.168.0.64/26` per 30 host sono troppi → divido il blocco in 2 (32 indirizzi bastano) → **/27**.
>
>| LAN | Blocco | Indirizzi |
>|---|---|---|
>| LAN 1 | /26 | 0 – 63 |
>| LAN 2 | /27 | 64 – 95 |
>| LAN 3 | /27 | 96 – 127 |
>| libero | | 128 – 255 (2 blocchi /26) |
>
>Se la terza rete fosse stata da 10 host avrei potuto dividere ancora con una /28.

>[!important] CIDR
>Questa rappresentazione di classi flessibili è il **CIDR** (*Classless Inter-Domain Routing*).
### Supernetting
Interviene quando una classe C è troppo piccola ma una B è troppo grande: si mettono insieme indirizzi di classe C **contigui** e si sposta la maschera verso sinistra.

>[!check] Esempio
>Unire **192.168.0.0/24** e **192.168.1.0/24**: la maschera passa da /24 a **/23** (la parte host passa da 8 a 9 bit, varia il 3° ottetto). Con 4 reti (192.168.0–3.0) prendo un altro bit → **/22**.
### Indirizzi privati
La IANA ha riservato tre blocchi per le reti IP **private** (non interconnesse a Internet):

| Classe | Range | Notazione |
|---|---|---|
| A | 10.0.0.0 – 10.255.255.255 | 10.0.0.0/8 |
| B | 172.16.0.0 – 172.31.255.255 | 172.16.0.0/12 |
| C | 192.168.0.0 – 192.168.255.255 | 192.168.0.0/16 |

- Il blocco A è un'intera classe A.
- Il blocco B sono **16 reti di classe B contigue** (172.16.0.0/16 – 172.31.0.0/16): nel secondo ottetto si va da 16 = `0001 0000` a 31 = `0001 1111`, i primi 4 bit restano fissi → $8+4 = 12$ bit fissi → **/12**.
- Il blocco C sono **256 reti di classe C** contigue (192.168.0.0/24 – 192.168.255.0/24), i primi 16 bit sono fissi → **/16**.

Gli indirizzi privati sono assegnati all'interno della rete dal router (che fa da server DHCP) e **non** vengono instradati verso il mondo esterno.

>[!important] NAT
>Traduce gli indirizzi **privati in pubblici**; è implementato da un dispositivo di livello 3. Così non si saturano gli indirizzi: c'è 1 indirizzo pubblico associato a tutti i dispositivi che comunicano con l'esterno, e su richiesta gli indirizzi vengono tradotti.

Es. gli indirizzi di casa sono di solito di classe C, del tipo `192.168.1.x`.
### Indirizzamento dinamico
Un dispositivo non connesso alla rete non tiene occupato il suo indirizzo: gli indirizzi vengono assegnati **dinamicamente** dal server **DHCP** gestito dall'operatore.
- l'operatore dispone di un **pool** di indirizzi, che assegna ai dispositivi in **leasing** (cioè per un tempo limitato)
- se per un certo periodo non vengono trasmessi dati, l'indirizzo torna nel pool ed è pronto per essere assegnato a un altro dispositivo

In questo modo con **meno indirizzi** si servono **più utenti**, perché non sono tutti connessi nello stesso momento: si considera un **fattore di contemporaneità** del 10–15%.
## Instradamento
>[!important] Instradamento
>L'**instradamento** è una funzione di **natura logica** che ha lo scopo di **guidare l'informazione** di utente verso la **destinazione** desiderata.

In Internet ogni **datagramma IP** attraversa un **cammino** composto da **sotto-reti** (ognuna con la sua [[#Classi di indirizzi IP|classe di IP]]) **interconnesse da router**.
I **router** IP ricevono datagrammi IP da un'interfaccia e li **inoltrano** su un'altra: sono gli unici dispositivi che possono fare instradamento.
I router IP hanno (normalmente) **un indirizzo IP per ogni interfaccia**.

>[!check] Esempio
>![[Protocolli-router-IP.svg|center|600]]
>
>- "Marte" e "Saturno" sono **multi-homed host**, in quanto connessi sia alla Token Ring che a Ethernet: hanno quindi **due indirizzi**.
>- Il **gateway** "Mercurio" interconnette la Token Ring a un'altra rete (ARPANET) e quindi anch'esso ha due indirizzi.
>- Siccome gli indirizzi sono utilizzati per l'instradamento, se ci si riferisce a "Marte" con l'indirizzo `192.5.48.3` il messaggio arriva tramite la **Token Ring**; se invece si usa `128.10.2.3` arriva tramite l'**Ethernet**.

>[!question] Osservazione
>L'[[#Indirizzamento|indirizzo IP]] identifica un'**interfaccia**, non un dispositivo: i nodi collegati a più reti (interfacce di rete distinte) hanno più indirizzi IP, uno per interfaccia.

![[Protocolli-interconnessione-router.svg|center|680]]

- I router lavorano al **livello 3** OSI (livello di rete).
- Sono **indirizzati esplicitamente**.
- I nodi della rete **devono** conoscere l'indirizzo del router.

Quando un router consegna un datagramma a una sotto-rete, questo diventa l'**unità di dati di servizio** ([[Reti di telecomunicazioni#Informazioni utente e di controllo, PDU, SAP|SDU]]) propria dello strato immediatamente inferiore a IP di quella sotto-rete.
La sotto-rete consegna tale unità dati al **prossimo router** o alla destinazione (se questa è all'interno della sotto-rete) con le stesse modalità con cui tratta le unità dati a essa "appartenenti".

**Incapsulamento del datagramma IP**
![[Protocolli-incapsulamento-IP.svg|center|680]]

In ogni sotto-rete attraversata il datagramma ([[#Indirizzamento|Net_id]] + `Data`) resta lo stesso, mentre cambiano le intestazioni (PCI) aggiunte dalla tecnologia della sotto-rete: PCI di livello 2 e 3 in X.25, PCI non nota nella sotto-rete B, LLC e MAC nelle LAN collegate dal bridge.
### Instradamento diretto e indiretto

>[!multi-column]
>
>>[!important] Instradamento diretto
>>Si applica quando la trasmissione di un datagramma IP avviene tra due host connessi alla **stessa sotto-rete**.
>
>>[!important] Instradamento indiretto
>>Si applica quando la trasmissione di un datagramma IP deve attraversare **almeno un router**, cioè avviene tra due host connessi su **differenti sotto-reti**.

La decisione tra instradamento diretto e indiretto viene presa in base alla corrispondenza tra l’indirizzo di destinazione e gli indirizzi delle sottoreti a cui il nodo è direttamente connesso.
- **caso 1**: la sottorete logica **coincide** con la sottorete fisica
  l'host mittente confronta la parte del proprio indirizzo corrispondente a **[[#Indirizzamento|Net-id]] + [[#Subnetting|Subnet-id]]** con la stessa parte dell'indirizzo dell'host di destinazione (se non si usano le [[#Subnetting|subnet]] il confronto avviene solo sul Net-id)
- **caso 2**: la sottorete logica è **una parte** della sottorete fisica
  l'host mittente usa l'instradamento diretto solo per gli host della **stessa sotto-rete logica**; l'host è configurato con l'elenco delle sotto-reti logiche direttamente raggiungibili

**Come decide il mittente: AND con la subnet mask**
In pratica il confronto dei due casi si fa con un **AND logico bit a bit** con la [[#Subnetting|subnet mask]]. La [[#Classi di indirizzi IP|maschera]] ha **1** in corrispondenza di Net-id + Subnet-id e **0** sulla parte host, quindi:
$$\text{indirizzo IP}\ \text{AND}\ \text{subnet mask} = \text{indirizzo della sotto-rete}$$
(i bit di rete restano invariati, quelli dell'host vengono azzerati: si ottiene l'indirizzo con host-id tutto a 0, cioè l'[[#Classi di indirizzi IP|indirizzo della rete]]).

Il mittente calcola l'indirizzo di sotto-rete **della destinazione** e **il proprio** (con la propria maschera) e li confronta:
- **uguali** → la destinazione sta nella stessa sotto-rete → **instradamento diretto**: il datagramma viene inviato direttamente al destinatario
- **diversi** → la destinazione sta in un'altra sotto-rete → **instradamento indiretto**: il datagramma viene inviato (sempre localmente) al **router** che porta verso quella rete

```
IF bitwise_and(dg.ip_dest, my_ip_mask) = bitwise_and(my_ip_addr, my_ip_mask)
THEN send_dg_locally(dg, dg.ip_dest)
ELSE send_dg_locally(dg, gateway_to(bitwise_and(dg.ip_dest, my_ip_mask)))
```

>[!check] Esempio
>![[Protocolli-instradamento-decisione.svg|center|700]]
>
>Maschera `255.255.255.192` ([[#Subnetting|/26]]): i primi 3 ottetti sono tutti 1 e restano uguali, conta solo l'ultimo (`192` = `11000000`).
>
>| | ultimo ottetto | AND `11000000` | sotto-rete |
>|---|---|---|---|
>| destinazione `194.27.3.48` | `00110000` | `00000000` | `194.27.3.0` |
>| mittente `194.27.3.131` | `10000011` | `10000000` | `194.27.3.128` |
>
>I risultati sono **diversi**: il datagramma passa per il router (`194.27.3.160` sulla rete `194.27.3.128/26`, `194.27.3.16` sulla rete `194.27.3.0/26`) → instradamento indiretto. Se il mittente fosse `194.27.3.16` (stessa sotto-rete `194.27.3.0/26` della destinazione) l'AND darebbe lo stesso risultato → instradamento diretto.

**Instradamento diretto**
Lo scambio di datagrammi tra host connessi alla stessa sottorete **non coinvolge i router**.
L'host IP sorgente incapsula il datagramma nell'unità dati tipica della sotto-rete, **traduce l'indirizzo IP** di destinazione nel corrispondente **indirizzo locale** di quella sotto-rete e lo invia direttamente all'host di destinazione.
L'instradamento all'interno della sotto-rete usa i meccanismi propri della rete stessa e può essere qualunque e non significativo globalmente.

Per consegnare un datagramma a un altro host attraverso una sottorete comune, l'host sorgente deve conoscere l'**indirizzo di sottorete** del destinatario: serve quindi una traduzione da indirizzi IP (livello 3) a indirizzi di livello 2 (MAC nelle LAN, identificatori di circuito virtuale in X.25, Frame Relay e ATM, ecc.), gestita dal protocollo [[Protocolli#ARP e RARP|ARP]].

![[Protocolli-instradamento-diretto-esempio.svg|center|600]]

**Instradamento indiretto**
1. L'host mittente identifica il **router più vicino** a cui inviare il datagramma, usando la sotto-rete fisica a cui è connesso (instradamento diretto).
2. Il router esamina il datagramma e decide verso quale altro router (**next-hop router**) indirizzarlo, nel cammino verso la rete logica di destinazione.
3. Il router usa un instradamento diretto per inoltrare il datagramma al router successivo, attraverso la sottorete a cui sono entrambi collegati (secondo i meccanismi di quella sottorete).
4. Il processo si ripete di router in router, finché il datagramma arriva a un router collegato alla stessa sotto-rete dell'host di destinazione, che glielo invia con un instradamento diretto.

L'instradamento indiretto è quindi una **successione di instradamenti diretti coordinata dai router**; i router non si occupano dell'instradamento all'interno delle sotto-reti.

![[Protocolli-instradamento-indiretto-esempio.svg|center|700]]
Gli indirizzi di **livello 3 non cambiano mai** durante il tragitto di un datagramma, mentre quelli di **livello 2** individuano gli apparati interessati alla trasmissione del pacchetto all'interno di una particolare sottorete.
Nell'ultima fase tra il router e il sistema finale c'è corrispondenza tra indirizzo fisico e logico, come nell'instradamento diretto: un instradamento indiretto si riduce ad un instradamento diretto per l'ultimo tratto.
### Tabelle di instradamento
>[!important] Tabella di instradamento (routing)
>Il meccanismo operativo dell'instradamento IP si basa su una **tabella di instradamento** che ogni host/router mantiene per conoscere le possibili destinazioni e i modi per raggiungerle.
>Contiene le coppie $(N, R)$:
>- $N$ è l'indirizzo della **rete di destinazione**
>- $R$ è l'indirizzo IP del **prossimo router** (*next-hop router*) verso la rete di destinazione; solo nella rete di destinazione $R$ diventa l'indirizzo IP dell'**host** destinazione

La tabella specifica solo **un passo** lungo il cammino verso la destinazione: un router non conosce il cammino completo del datagramma ma solo il **passo successivo**. Quindi la tabella contiene indirizzi $R$ raggiungibili attraverso una **singola sottorete** (con un [[#Instradamento diretto e indiretto|instradamento diretto]]).

**Architettura logica di un router**
![[Protocolli-architettura-router.svg|center|420]]

>[!check] Esempio
>![[Protocolli-tabelle-routing-esempio.svg|center|700]]
>
>Ipotizziamo che le sottoreti fisiche coincidano con le reti logiche.
>**Tabella di instradamento di R2**
>
>| Per raggiungere host indirizzati alla rete (`Net_id`) | indirizzare i datagrammi verso questa strada o router (`Router_id`) |
>|:---:|:---:|
>| `20.0.0.0` | inoltrare direttamente |
>| `30.0.0.0` | inoltrare direttamente |
>| `10.0.0.0` | `20.0.0.5` |
>| `40.0.0.0` | `30.0.0.7` |
>
>R2 è collegato direttamente alle reti `20.0.0.0` e `30.0.0.0`; per le altre indica l'interfaccia del router vicino (R1 o R3) sulla rete che ha in comune con lui.

La dimensione della tabella di routing dipende dal **numero di reti logiche** interconnesse, ma **non dal numero degli host**.
Le tabelle contengono solo informazioni sulle reti logiche di destinazione ([[#Indirizzamento|Net-id]]) e non sui singoli host, al fine di:
- nascondere i dettagli interni della inter-rete
- mantenere **piccole** le tabelle di instradamento
- consentire un instradamento **efficiente**

#### Metriche del protocollo
Una tabella di routing può contenere anche una **metrica**, che definisce la **distanza dalla destinazione** espressa secondo varie unità di misura: distanza fisica, numero di sottoreti da attraversare o numero di salti (*hop*), costo del percorso in termini di affidabilità, tempo di attraversamento o integrità informativa, ecc.
La metrica può essere usata (opzionalmente) nel decidere l'instradamento, per soddisfare i requisiti dell'utente espressi nel campo [[Protocolli#Formato dell'unità dati|Service Type]] del datagramma o per ottimizzare le decisioni degli algoritmi di routing.

>[!question] Metriche del protocollo e metriche amministrative
>
>- **Metrica del protocollo**: è il valore che il protocollo di routing **calcola da solo** per scegliere il percorso migliore tra quelli che conosce verso la stessa destinazione.
>- **Metrica amministrativa**: è un valore **fissato a mano dall'amministratore** di rete, che non riflette le caratteristiche tecniche del collegamento ma le sue **politiche**.
>
>In breve: la metrica del protocollo è **tecnica e automatica**, quella amministrativa è una **scelta di policy** dell'amministratore.


Il router sceglie il percorso che **minimizza il costo** (*percorso a costo minimo*) in base ad **algoritmi di routing**. Per determinarlo deve però avere informazioni sui costi dei percorsi alternativi nella rete di cui fa parte, e per acquisirle si usano i **protocolli di routing**.

>[!question] Protocolli e algoritmi
>- L'**algoritmo di routing** è il *calcolo*: a partire dai costi dei rami trova il percorso a costo minimo e quindi riempie la tabella di instradamento.
>- Il **protocollo di routing** è la *comunicazione*: definisce come i router si scambiano le informazioni sui costi dei percorsi, cioè i dati su cui l'algoritmo lavora.
>
>Prima il protocollo raccoglie le informazioni, poi l'algoritmo le usa per decidere.

>[!check] Esempio
>![[Protocolli-tabelle-routing-metrica.svg|center|700]]
>
>**Tabella di routing di G** (metrica = numero di hop)
>aggiungiamo quindi una colonna di metrica alla tabella di routing
>
>| Network Prefix | Next Hop | Metrica |
>|:---:|:---:|:---:|
>| `30.0.0.0/8` | Direct | 0 |
>| `20.0.0.0/8` | Direct | 0 |
>| `10.0.0.0/8` | `20.0.0.5` | 1 |
>| `40.0.0.0/8` | `30.0.0.7` | 1 |
>
>Le reti a cui G è collegato direttamente hanno metrica 0; per `10.0.0.0` e `40.0.0.0` bisogna passare per un altro router (F o H), quindi metrica 1.
#### Router di default
Se un router non trova un instradamento nella sua tabella, indirizza i datagrammi verso un **router di default** (generalmente una macchina più potente, destinata principalmente alle operazioni di instradamento).
Il meccanismo del router di default è usato:
- da **piccoli host**, che possono anche non avere una tabella propria e inviano al router di default tutti i datagrammi non diretti alla rete/sottorete logica a cui sono collegati
- da **router** con una tabella di discrete dimensioni, che però non copre tutte le possibili destinazioni

>[!important] Rotta di default
>Nella tabella di routing di un host/router deve essere presente una riga con $N =$ "tutte le altre" e $R =$ default router.

>[!check] Esempio
>![[Protocolli-routing-cisco-esempio.svg|center|700]]
>
>Tabella di routing del router B (router CISCO, comando `show ip route`):
>
>| Network Prefix | Metrica | Next Hop |
>|:---:|:---:|:---:|
>| `192.106.248.0/24` | | is directly connected |
>| `192.168.1.0/24` | | is directly connected |
>| `192.168.2.0/24` | | is directly connected |
>| `192.168.3.0/24` | | is directly connected |
>| `193.205.102.0/24` | `[120/1]` | via `192.168.1.2` |
>| `193.205.103.0/24` | `[120/1]` | via `192.168.2.2` |
>| `192.168.4.0/24` | `[120/1]` | via `192.168.3.2` |
>| `0.0.0.0 0.0.0.0` | `[1/0]` | via `192.106.248.24` |
>
>L'ultima riga è la **rotta di default**: con indirizzo e maschera `0.0.0.0` ("tutte le altre" destinazioni) i datagrammi vanno al router A (`.24`), che porta verso Internet.
### Algoritmo di instradamento
L'algoritmo descrive cosa fa un nodo X quando riceve (o genera) un datagramma con indirizzo IP di destinazione $Y$. È teoricamente valido sia per **host** che per **router**, ma tra i due ci sono differenze: un host non contiene tutti i protocolli di un router e la sua tabella di routing è tipicamente **configurata dall'amministratore** di rete, non aggiornata dinamicamente come nei router.

**Router X: datagramma ricevuto**
1. Estrai l'indirizzo IP di destinazione $Y$ dal datagramma in arrivo.
2. Se nel campo **Source Route Option** è stata richiesta una strada specifica, invia il datagramma su quella strada (trascurando la tabella di routing).
3. Se $Y$ coincide con l'indirizzo di X, estrai il contenuto informativo e consegnalo agli strati superiori (vale anche per i datagrammi broadcast).
4. Decrementa il **Time to live**; se è arrivato a zero, scarta il datagramma e comunicalo all'host mittente (tramite **ICMP**).
5. Altrimenti determina la componente `Net_Id.Subnet_id` di $Y$ (usando la [[#Subnetting|maschera di sottorete]]).
6. Se `Net_Id.Subnet_id` coincide con quella di X, invia il datagramma con [[#Instradamento diretto e indiretto|instradamento diretto]]: traduci $Y$ nell'indirizzo locale e incapsula il datagramma nell'unità dati della sottorete (si considera anche la componente `SubHost_id`).
7. Altrimenti consulta la [[#Tabelle di instradamento|tabella di instradamento]]: se contiene `Net_Id.Subnet_id`, instrada il datagramma come indicato.
8. Altrimenti verifica se in tabella c'è almeno la componente `Net_id`; in tal caso instrada come indicato (se `Subnet_id` ha dimensione zero i passi 7 e 8 coincidono).
9. Altrimenti, se è specificata una strada di default, invia il datagramma al [[#Router di default|default router]].
10. Altrimenti dichiara un **errore di instradamento** (eventualmente invocando ICMP) e scarta il datagramma.

**Host X: datagramma ricevuto**
Si tende a evitare che un host rilanci datagrammi non diretti a sé stesso: se li riceve vuol dire che c'è stato un errore di instradamento, e se l'host vi pone rimedio diventa difficile per il gestore di rete individuare l'errore. L'algoritmo si semplifica così:
1. Estrai l'indirizzo IP di destinazione $Y$ dal datagramma in arrivo.
2. Se $Y$ coincide con l'indirizzo di X, estrai il contenuto informativo e consegnalo agli strati superiori.
3. Altrimenti dichiara un errore di instradamento e scarta il datagramma.

**Nodo X (host o router): datagramma generato da X**
1. Se nel campo Source Route Option è stata richiesta una strada specifica, invia il datagramma su quella strada.
2. Se $Y$ coincide con l'indirizzo di X, estrai il contenuto informativo e consegnalo agli strati superiori (può succedere in casi particolari, es. controllo).
3. Altrimenti determina la componente `Net_Id.Subnet_id` di $Y$ (usando la maschera di sottorete).
4. Se coincide con quella di X, invia il datagramma con instradamento diretto (traduci $Y$ nell'indirizzo locale e incapsula nell'unità dati della sottorete, considerando anche `SubHost_id`).
5. Altrimenti consulta la tabella di instradamento: se contiene `Net_Id.Subnet_id`, instrada come indicato.
6. Altrimenti verifica se in tabella c'è almeno `Net_id`; in tal caso instrada come indicato (se `Subnet_id` ha dimensione zero i passi 5 e 6 coincidono).
7. Altrimenti, se è specificata una strada di default, invia il datagramma al default router.
8. Altrimenti dichiara un errore di instradamento, notificandolo agli strati superiori di X, e scarta il datagramma.
### Instradamento statico
Le tabelle di routing possono essere costruite in modo **statico** o **dinamico**.
>[!important] Instradamento statico
>Le tabelle sono **definite manualmente** dal gestore di rete e restano invariate fino al suo intervento successivo.
>Si usano negli **host** e nei **router di piccole dimensioni**, in zone della inter-rete relativamente **stabili** (sia per configurazione fisica che per tipo e carico di traffico).
>
>Gli algoritmi di routing statici (**non adattativi**, deterministici) usano **criteri fissi** di instradamento:
>- tra ogni coppia origine–destinazione si individua un **unico cammino permanente**
>- l'instradamento cambia **solo se cambia la topologia** della rete
>- la scelta del cammino è **indipendente dal carico** istantaneo sulla rete
>
>**Vantaggi**: semplicità implementativa.
>**Svantaggi**: scarsa flessibilità.

I due tipi di instradamento possono convivere. Ad oggi l'instradamento statico ha senso solo in alcune porzioni di rete molto limitate

>[!check] Esempio (instradamento statico)
>![[Protocolli-instradamento-statico-esempio.svg|center|780]]
>
>Tabelle di instradamento statiche (per ogni rete di destinazione, il router a cui inoltrare; `-` = rete collegata direttamente):
>
>| Net | Router A | Router B | Router C | Router D | Router E | Router F | Router G | Router H | Host X |
>|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
>| 1 | D | - | - | B | D | H | B | C | - |
>| 2 | D | - | B | - | D | H | - | G | B |
>| 3 | D | G | - | G | - | H | - | - | B |
>| 4 | - | D | A | - | - | - | D | G | A |
>| 5 | F | G | H | F | H | - | H | - | A |
### Instradamento dinamico
>[!important] Instradamento dinamico
>Le tabelle sono **calcolate dinamicamente** in funzione della **topologia** della rete e dello **stato dei link**.
>
>Gli algoritmi di routing dinamici (**adattativi**, non deterministici) usano criteri adattativi: si adattano alle **variazioni di topologia e di traffico** in rete.
>
>**Vantaggi**: migliorano le prestazioni e contribuiscono al controllo della congestione.
>**Svantaggi**:
>- decisione di instradamento più complessa → aumenta il carico elaborativo nei router
>- richiedono lo scambio di informazioni sullo stato della rete tra i nodi (algoritmi distribuiti): è traffico aggiuntivo, ma più informazioni si scambiano e più spesso, migliori sono le scelte di routing (overhead maggiore)
>- rischio di **oscillazioni** (reazioni troppo rapide) o di **inefficacia** (reazioni troppo lente). Non è detto che tutti gli algoritmi usati dai protocolli garantiscono una convergenza immediata, potrebbe esserci un transitorio. Nel transitorio potrebbero essere prese delle decisioni sbagliate prima di arrivare a regime.
>- rischio di effetti collaterali (es. **loop**). Nonostrante la creazione di alberi ricoprenti, il calcolo potrebbe essere effettuato su dei dati che non rispecchiano lo stato effettivo della rete. Incoerenza tra momento in cui facciamo il calcolo e la dinamica reale della rete (più veloce). Si creano quindi delle **incoerenze**
>- parte della banda del canale viene usato per il mantenimento della topologia

All'accensione un host/router **inizializza** la sua tabella di routing con le informazioni contenute in una memoria di massa o interrogando opportuni server (**warm up**).
In seguito ogni router **aggiorna** o incrementa le informazioni di instradamento dialogando con gli altri router tramite i **protocolli di routing**, che sono implementati nei router e si occupano di:
- acquisire automaticamente nuove informazioni di instradamento (esaminando lo stato della rete a intervalli regolari)
- comunicare le informazioni aggiornate agli altri router, che aggiornano le tabelle di conseguenza
(a prescindere dal tipo di protocollo [[Protocolli#link state]] o [[Protocolli#distance vector]], i dati degli adiacenti possono sempre essere aggiornate nell'immediato)

Le tabelle vanno aggiornate **continuamente** (anche a intervalli di pochi secondi), perché:
- Internet non è stabile: nuovi host e sottoreti vengono aggiunti ed eliminati di frequente, e molti percorsi diventano disponibili o no (in caso di guasti alcuni cammini non sono utilizzabili)
- lo stato di occupazione delle risorse di rete varia continuamente: anche se la topologia (nodi e link) resta la stessa, il **traffico** cambia, e con metriche più complesse del semplice numero di hop (es. metriche legate al traffico) cambiano anche le priorità tra i cammini, che vanno quindi ricalcolati

>[!check] Esempio (instradamento dinamico)
>![[Protocolli-instradamento-dinamico-esempio.svg|center|600]]
>I router A, B e C dialogano tramite il **protocollo di routing**: ciascuno prende alcune righe della propria tabella di routing, le codifica in pacchetti e le invia ai router vicini. Il vicino usa queste informazioni per costruire il proprio grafo della rete e calcolare i percorsi ottimali verso gli altri nodi, aggiornando così la sua tabella.

I protocolli di routing sono usati dai router per determinare il percorso verso le reti **non direttamente connesse**; ne esistono diversi, ciascuno con caratteristiche più o meno vantaggiose.

![[Protocolli-routing-update.svg|center|650]]
Terminata la fase iniziale (warm up), il router non si basa più solo sulla sua **percezione diretta** (le reti a cui è collegato): sono i vicini a fargli conoscere il resto della rete. Quando riceve una nuova informazione di instradamento (es. «posso raggiungere una nuova rete»), la **propaga ai propri vicini**, che sapranno così di poter inoltrare a lui i pacchetti destinati a quella rete.
#### Sistemi autonomi
L'organizzazione di Internet è **gerarchica** (per scalabilità) e **disomogenea**: i sistemi autonomi permettono di gestire questa struttura. Internet può essere vista come un insieme di sistemi autonomi distinti interconnessi, di pari livello o a livelli diversi, e negli anni sono nati protocolli di instradamento pensati per lavorare su questa suddivisione.

>[!important] Sistema autonomo (AS)
>Un **sistema autonomo** (AS) è una porzione di rete (insieme di host, router e sottoreti) amministrata da un **unico gestore**.
>- **router interni**: instradano i messaggi all'interno dell'AS
>- **router di frontiera**: instradano i messaggi tra AS diversi

L'AS è libero di scegliere qualsiasi protocollo di routing (uno o più) da usare tra i suoi router interni. Il protocollo può quindi essere diverso da un AS all'altro, e un AS può avere più algoritmi di instradamento, uno per l'interno e uno verso gli altri AS; di conseguenza anche le tabelle possono essere diverse per le destinazioni interne ed esterne.

Anche se un AS usa diversi IGP e diverse metriche, verso gli altri AS appare come se avesse un **unico piano di routing interno** coerente e presenta un quadro consistente delle reti che può raggiungere.

>[!important] In sintesi
>Un AS è un **gruppo connesso di uno o più prefissi IP** assegnati a uno o più operatori di rete, che ha una **politica di routing unica e chiaramente definita**.

Per **politica di routing** si intende il modo in cui vengono fatte le scelte di routing; è lo scambio di informazioni di routing **tra gli AS** a essere soggetto a politiche di routing.
- Le politiche non si configurano per ogni prefisso, ma per **gruppi di prefissi**, e questi gruppi sono proprio gli AS.
- Senza eccezioni, un AS **deve avere una sola** politica di routing.

L'AS sceglie la propria politica per lo scambio di informazioni con il resto della rete: decide quali informazioni di routing **accettare** e quali **inoltrare**, cioè come gestire il traffico verso l'esterno (es. quali AS attraversare per raggiungere una destinazione remota).
Gli AS sono identificati da un **AS number**, univoco a livello mondiale. Un AS può contenere uno o più **domini di routing**.

![[Protocolli-AS-domini.svg|center|600]]

>[!important] Border router
>Tutti i nodi dell'AS devono essere raggiungibili con **percorsi interni**; per raggiungere un nodo esterno si passa dai router "di confine" (**border router**), in cui sono implementate le politiche di routing scelte dall'AS.
>Il border router possiede le rotte verso i sistemi esterni, quindi deve avere protocolli di instradamento sia **interni** che **esterni**.

- Ogni AS affida a uno o più dei suoi router interni il ruolo di border router, con lo scopo di **informare il mondo esterno** della sua topologia.
- I border router di un AS comunicano con i border router degli altri AS, che tipicamente usano protocolli di routing interno diversi tra loro.

>[!question] Osservazione
>Avere tabelle di instradamento diverse per protocolli di instradamento diversi migliora la **scalabilità**: se tutti avessero tutto, il numero di righe nelle tabelle esploderebbe. I domini hanno tabelle proprie, i router di frontiera mantengono solo le informazioni verso l'esterno e l'effetto di propagazione degli aggiornamenti rimane **confinato all'AS**.

>[!important] IGP ed EGP
>- **Interior Gateway Protocols** (IGP): gestiscono le informazioni di instradamento sui cammini **all'interno** di un AS e la raccolta dei dati da inviare ai core router
>- **Exterior Gateway Protocols** (EGP): gestiscono le informazioni sui cammini che coinvolgono **più di un AS**
>
>I messaggi di tutti i protocolli di routing viaggiano dentro datagrammi IP.

>[!check] Esempio
>![[Protocolli-AS-domini-IGP-EGP.svg|center|780]]
>I protocolli dell'esempio sono protocolli **standardizzati**: tra gli IGP ci sono quelli *distance vector* (RIP, RIPv2, IGRP, E-IGRP) e quelli *link state* (OSPF), tra gli EGP c'è BGP.

#### Grafi
Per la teoria dei grafi vedi gli appunti di ASD: [[Strutture dati#Grafi|grafi]] e [[Algoritmi#Prim - minimo albero ricoprente|albero ricoprente]].

Rispetto agli appunti di ASD, nelle slide ci sono queste precisazioni:

**Grafo e rete**
Una qualsiasi rete a pacchetto può essere modellata come un **grafo orientato e pesato**: i **nodi** sono i commutatori e/o router, i **rami** sono le linee trasmissive. L'**instradamento** di un pacchetto equivale alla **ricerca di un cammino** nel grafo associato alla rete. Il grafo che rappresenta la rete viene costruito dall'algoritmo, e da questo si determina il sottografo di costo minimo, che dà il percorso ottimale.

>[!important] Ordine e dimensione
>Dato un grafo $G(V,E)$:
>- $|V|$ (numero di nodi) è l'**ordine** del grafo
>- $|E|$ (numero di rami) è la **dimensione** del grafo

>[!multi-column]
>
>>[!important] Rami paralleli
>>Due rami incidenti sulla stessa coppia di vertici.
>
>>[!important] Loop
>>Ramo incidente su un solo vertice.
>
>>[!important] Grafo semplice
>>Grafo senza loop né rami paralleli.

>[!important] Distanza e lunghezza
>- **distanza** tra due nodi $i$ e $j$: il **minimo numero di rami** di un cammino tra $i$ e $j$
>- **lunghezza** di un cammino (in un grafo pesato): la **somma dei pesi** dei rami del cammino
>
>>[!attention] Attenzione
>>In ASD la "distanza" è invece il [[Strutture dati#Costo di un cammino|costo]] del cammino minimo, cioè la somma dei pesi: qui corrisponde alla **lunghezza minima**.

Quindi:
- **cammino a minima distanza** → grafo **non pesato** (*minimum hop count*: ogni hop vale 1)
- **cammino a minima lunghezza** → grafo **pesato** (costo, congestione, capacità, ecc.)

>[!check] Esempio
>![[Protocolli-grafo-distanza-lunghezza.svg|center|370]]
>Il cammino a distanza minima e quello a lunghezza minima non sempre coincidono:
>- distanza minima tra V1 e V6: $(V_1, V_3, V_6)$, 2 rami (lunghezza $5+5=10$)
>- lunghezza minima tra V1 e V6: $(V_1, V_4, V_5, V_6)$, lunghezza $1+1+2=4$ (3 rami)

>[!question] Osservazione
>Non tutte le metriche si sommano lungo il cammino: dipende se la metrica è **cumulativa** o no (metriche *concave* e *convesse*). Se il peso è la **banda** e voglio il percorso che la massimizza, sommare le bande non ha senso: la banda del cammino è quella del ramo più lento, quindi si guarda il **minimo**.
>È la stessa idea della portata delle tubature nei [[Strutture dati#Grafi pesati sugli archi|grafi pesati]] di ASD: il peso del ramo è una capacità, non un costo da sommare.
>**Widest path** (cammino più largo): è il cammino che **massimizza il minimo** delle bande dei rami (problema *max-min*):
>$$B(P) = \min_{\ell \in P} b(\ell) \qquad P^* = \arg\max_{P} B(P)$$
>Si risolve con una variante di Dijkstra: invece di "sommo i pesi e scelgo il cammino col totale **minimo**", si fa "prendo il **minimo** lungo il cammino e scelgo il cammino col valore **massimo**".

>[!important] Albero (come grafo)
>Un grafo semplice è un **albero** se:
>- tra ogni coppia di nodi $i$ e $j$ esiste un **unico cammino semplice**
>- detto $N$ il numero di nodi, ha $N-1$ rami ed è **connesso e senza cicli**
>
>Un nodo qualsiasi può essere scelto come **radice** (livello 0); i nodi adiacenti alla radice stanno al I livello, quelli adiacenti ai nodi del I livello al II, e così via. Ogni nodo tranne la radice ha un solo **padre**, ogni nodo ha zero o più **figli**, un nodo senza figli è una **foglia**.

>[!important] Sottografo
>Un **sottografo** di $G(V,E)$ si ottiene scegliendo un sottoinsieme di rami e di nodi di $G$, includendo per ogni ramo scelto i nodi su cui è incidente.

Uno **spanning tree** ([[Algoritmi#^albero-ricoprente|albero ricoprente]]) di $G$ è un sottografo che è un albero e include tutti i nodi di $G$: si ottiene rimuovendo archi in modo da eliminare i cicli, creando così una **topologia logica** che ignora alcuni archi. Lo spanning tree di un grafo **non è unico**.

# Livello di trasporto (livello 3)
[[Modello ISO OSI#Livello trasporto (livello 4)]]
Trasferimento dati host-host.

[[Modello ISO OSI#Controllo degli errori]]
>[!important] Internet checksum
>Il trasmittente somma il contenuto dei segmenti e fa il complemento ad 1 della somma. Il trasmittente mette il valore della checksum nel campo checksum dell’UDP.
>Il ricevitore calcola la checksum del segmento ricevuto. Considera se la checksum calcolata è uguale al valore del campo checksum.


Protocollo: [[Protocolli#TCP]]

Protocollo: [[Protocolli#UDP]]


# Livello applicazione (livello 4)
[[Modello ISO OSI#Livello sessione (livello 5)]] [[Modello ISO OSI#Livello presentazione (livello 6)]] [[Modello ISO OSI#Livello applicazione (livello 7)]]
Supporto delle applicazioni di rete.
Ogni specifica applicazione avrà i suoi protocolli (telnet, ftp, smtp, http, dns).
