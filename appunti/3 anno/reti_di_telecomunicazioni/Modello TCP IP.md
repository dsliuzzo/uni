![[Reti di telecomunicazioni-1791128904735.webp|center|274]]

In realtà collegamento-fisico sono un unico livello di accesso alla rete.
Prende il nome da due protocolli (anche se ne contiene in realtà di più):
- **TCP**
- **IP**

# Livello di accesso alla rete (livello 1)
Il livello di accesso alla rete comprende sia il livello di:
- [[#Livello collegamento (livello 2)]]
  punto-punto (ppp, ethernet)
- [[#Livello fisico (livello 1)]]
  forme d'onda
# Livello di rete (livello 2)
[[#Livello rete (livello 3)]]
Protocolli che permettono di andare da un certo sistema (sorgente) della rete ad un altro (destinazione).
Avendo una gestione gerarchica dei centri di smistamento non è necessario conoscere tutto l'indirizzo, ma solo a quale centro di smistamento è necessario inviare il dato

Le sue principali funzioni sono:
- **interfunzionamento delle reti**
  questo livello consente a varie reti componenti di funzionare insieme. Sostanzialmente, maschera le differenze hardware sottostanti impacchettando i dati in un formato universale.
- **servizio senza connessione**
  il livello fornisce un servizio di strato senza connessione. I dati (datagrammi) vengono inviati nella rete senza stabilire preventivamente un canale dedicato.

>[!protocollo] IP
>Il protocollo utilizzato è l'Internet Protocol (IP), il quale provvede a instradare i dati attraverso reti multiple collegate in cascata. In pratica, si assicura di trovare il percorso giusto per trasferire informazioni tra sistemi terminali che appartengono a reti diverse.

# Livello di trasporto (livello 3)
[[#Livello trasporto (livello 4)]]
Trasferimento dati host-host.

[[#Controllo degli errori (cause, ripetizione, FEC/ARQ, parità, CRC)]]
>[!important] Internet checksum
>Il trasmittente somma il contenuto dei segmenti e fa il complemento ad 1 della somma. Il trasmittente mette il valore della checksum nel campo checksum dell’UDP.
>Il ricevitore calcola la checksum del segmento ricevuto. Considera se la checksum calcolata è uguale al valore del campo checksum.


>[!protocollo] TCP
>Protocollo di trasporto orientato alla connessione

>[!protocollo] UDP
>Protocollo di trasporto non orientato alla connessione


# Livello applicazione (livello 4)
[[#Livello sessione (livello 5)]] [[#Livello presentazione (livello 6)]] [[#Livello applicazione (livello 7)]]
Supporto delle applicazioni di rete.
Ogni specifica applicazione avrà i suoi protocolli (telnet, ftp, smtp, http, dns).
