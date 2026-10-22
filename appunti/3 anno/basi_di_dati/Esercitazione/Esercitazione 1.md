# Prova esame 29 giugno 2018
## Esercizio 1
### A
![[prova esame 29.06.2018 es 1]]
### B

# Prova esame 17 giugno 2019
## Esercizio 1
### A
![[prova esame 17.06.2019 es 1]]
### B

# Prova esame 4 febbraio 2020
## Esercizio 1
### A
![[prova esame 04.02.2020 es 1]]

### B
$$
\begin{array}{l}
\text{Annuncio}(\underline{\text{dataC, utente}}) \\
\text{Utente}(\underline{\text{username}}, \text{nome, dataN, recapito}) \\
\text{Oggetto} (\underline{\text{nome, marca}}, \text{descrizione}, \text{tipologia}) \\
\text{Tipologia}(\underline{\text{nome}}, \text{descrizione, } \overset{\text{NULL}}{\text{sottotipo}}) \\
\text{Proposta}(\underline{\text{id}}, \text{data\_ora, Adata1, Autente1, Adata2, Autente2}) \\
\text{PropostaA}(\underline{\text{id}}, \text{matching}) \\
\text{PropostaO}(\underline{\text{id}}, \text{operatore}) \\
\text{PropostaF}(\underline{\text{id}}, \text{dataF, } \overset{\text{NULL}}{\text{senior}}) \\
\text{Operatore}(\underline{\text{id}}, \text{nome, dataA}) \\
\text{Senior}(\underline{\text{id}}, \text{dataT}) \\

\\
\text{Offerta}(\underline{\text{data, utente, nome, marca}}, \text{quantità})\\
\text{Richiesta}(\underline{\text{data, utente, nomeT}}) \\

\\
\text{Annuncio}[\text{utente}] \sqsubseteq_{FK} \text{Utente}[\text{username}] \\
\text{Oggetto}[\text{tipologia}] \sqsubseteq_{FK} \text{Tipologia}[\text{nome}] \\
\text{Offerta}[\text{data, utente}] \sqsubseteq_{FK} \text{Utente}[\text{dataC, utente}] \\
\text{Offerta}[\text{nome, marca}] \sqsubseteq_{FK} \text{Oggetto}[\text{nome, marca}] \\
\text{Richiesta}[\text{data, utente}] \sqsubseteq_{FK} \text{Annuncio}[\text{dataC, utente}] \\
\text{Richiesta}[\text{nomeT}] \sqsubseteq_{FK} \text{Tipologia}[\text{nome}] \\
\text{Tipologia}[\text{sottotipo}] \sqsubseteq_{FK} \text{Tipologia}[nome]  \\
\text{PropostaA}[\text{id}] \sqsubseteq_{FK} \text{Proposta}[\text{id}] \\
\text{PropostaO}[\text{id}] \sqsubseteq_{FK} \text{Proposta}[\text{id}] \\
\text{PropostaF}[\text{id}] \sqsubseteq_{FK} \text{Proposta}[\text{id}] \\
\text{PropostaO}[\text{operatore}] \sqsubseteq_{FK} \text{Operatore}[\text{id}] \\
\text{Senior}[\text{id}] \sqsubseteq_{FK} \text{Operatore}[\text{id}] \\
\text{PropostaF}[\text{senior}] \sqsubseteq_{FK} \text{Senior}[\text{id}] \\
\text{Proposta}[\text{Adata1, Autente1}] \sqsubseteq_{FK} \text{Annuncio}[\text{dataC, utente}] \\
\text{Proposta}[\text{Adata2, Autente2}] \sqsubseteq_{FK} \text{Annuncio}[dataC, utente]
\end{array}
$$


# Prova esame 6 settembre 2016
## Esercizio 1
### A
