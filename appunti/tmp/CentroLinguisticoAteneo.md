# Modello client-server
Quando apri un sito nel browser succede questo:
1. **Browser (client)** manda una **richiesta HTTP** a un **server**
2. Server elabora la richiesta e manda indietro una **risposta**
3. Browser interpreta la risposta (di solito HTML) e la mostra

>[!question] Fondamentale
>Il **server non "sa" niente tra una richiesta e l'altra**. HTTP è _stateless_ (senza stato). Ogni richiesta è indipendente. Questo è controintuitivo all'inizio, perché nella vita reale un sito "sembra" ricordarsi che sei loggato — ma è un trucco (cookie/sessioni) che vedremo più avanti, non è HTTP che lo fa di suo.
### Metodi utilizzati

| Metodi        | A cosa serve                  |
| ------------- | ----------------------------- |
| `GET`         | Leggere/richiedere dati       |
| `POST`        | Creare qualcosa di nuovo      |
| `PUT`/`PATCH` | Modificare qualcosa esistente |
| `DELETE`      | Cancellare                    |
### Status code
Il server risponde sempre con un numero che indica l'esito:
- $2xx$ = successo
- $3xx$ = redirect
- $4xx$ = errore del client
- $5xx$ = errore del server

### Frontend vs Backend, chi fa cosa

- **Frontend** (HTML/CSS/JS nel browser): mostra l'interfaccia, raccoglie l'input dell'utente (es. "vorrei un appuntamento martedì alle 15"), lo manda al backend
- **Backend** (Flask, Python): riceve la richiesta, verifica se è possibile (lo slot è libero? il salone è aperto?), salva/legge dal database, risponde

La logica "di fiducia" sta sempre sul **backend** Il **frontend** può controllare le cose per dare un feedback veloce all'utente, ma il backend deve _ricontrollare_ tutto, perché chiunque può mandare richieste dirette al server bypassando il frontend. Se non ricontrolli lato server al momento del **salvataggio**, un utente smaliziato potrebbe prenotare due volte lo stesso slot manipolando le richieste.

# HTML
**HTML** è il linguaggio che descrive cosa c'è nelle pagina e non come appare (`CSS`).
``` html
<!DOCTYPE html> 
<html lang="it"> 

<!-- informazioni sulla pagina invisibili-->
<head> 
	<meta charset="UTF-8"> 
	<title>Centro Estetico Bella</title> 
</head>


<body>
<!-- informazioni visibili-->
</body> 
</html>
```
HTML ha un tag "contenitore" per la lista, e un tag per ogni singolo elemento dentro di essa:
``` html
<ul> <!-- UNORDERED LIST -->
  <li>Manicure</li> <!-- list item -->
  <li>Pedicure</li>
  <li>Trattamento viso</li>
</ul>

Per poter mostrare le caratteristiche di ogni elemento della lista si utilizza `<div>` ovvero un generico contenitore che li ragruppa solo per poterli trattaere come un blocco unico:

<div>
  <h3>Manicure</h3>
  <p>Durata: 30 minuti</p>
  <p>Prezzo: 25€</p>
</div>
``` 
Etichettando ogni `<div>` con attributo `class` non dovrò scrivere 3 volte stesso codice
# CSS
`CSS` definisce come appare ogni **blocco** all'interno della pagina

# JavaScript
`Javascript` definisce come si comporta ogni singolo blocco
