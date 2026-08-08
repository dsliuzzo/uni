# Modello client-server
Quando apri un sito nel browser succede questo:
1. **Browser (client)** manda una **richiesta HTTP** a un **server**
2. Server elabora la richiesta e manda indietro una **risposta**
3. Browser interpreta la risposta (di solito HTML) e la mostra

>[!question] Fondamentale
>Il **server non "sa" niente tra una richiesta e l'altra**. HTTP è _stateless_ (senza stato). Ogni richiesta è indipendente. Questo è controintuitivo all'inizio, perché nella vita reale un sito "sembra" ricordarsi che sei loggato — ma è un trucco (cookie/sessioni) che vedremo più avanti, non è HTTP che lo fa di suo.


| Metodi        | A cosa serve                  |
| ------------- | ----------------------------- |
| `GET`         | Leggere/richiedere dati       |
| `POST`        | Creare qualcosa di nuovo      |
| `PUT`/`PATCH` | Modificare qualcosa esistente |
| `DELETE`      | Cancellare                    |
