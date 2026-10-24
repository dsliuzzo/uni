# Prova esame 29 giugno 2018
## Esercizio 1
### A
![[prova esame 29.06.2018 es 1]]
### B
$$
\begin{array}{l}
\text{Convenzione}(\underline{\text{cod}}, \text{percentuale, nome, descrizione}) \\
\text{Pagamento}(\underline{\text{dataInizio, nomeA, nascitaA, anno}}, \text{importo, data, numeroMesi}, \overset{\text{NULL}}{\text{convenzione}}) \\
\text{Iscrizione}(\underline{\text{nomeA, nascitaA, anno}}\text{, nomeMedico, dataRilascio, maestroNome, maestroNascita}) \\
\text{Allievo}(\underline{\text{nome, nascita}}) \\
\text{Maestro}(\underline{\text{nome, nascita}}\text{, dan, dataDan, nominaNome, nominaNascita}) \\
\text{Persona}(\underline{\text{nome, nascita}}, \text{residenza}) \\
\text{Interno}(\underline{\text{nome, nascita}}) \\
\text{Esterno}(\underline{\text{nome, nascita}}) \\
\text{Promozione}(\underline{\text{allievoNome, allievoNascita, colore}}\text{, giornoE, nomeMaestro, nascitaMaestro}) \\
\\
\text{Pagamento}[\text{convenzione}] \sqsubseteq_{FK} \text{Convenzione}[\text{cod}] \\
\text{Pagamento}[\text{nomeA, nascitaA, anno}] \sqsubseteq_{FK} \text{Iscrizione}[\text{nomeA, nascitaA, anno}] \\
\text{Allievo}[\text{nome, nascita}] \sqsubseteq_{FK} \text{Persona}[\text{nome, nascita}] \\
\text{Maestro}[\text{nome, nascita}] \sqsubseteq_{FK} \text{Persona}(\text{nome, nascita}) \\
\text{Maestro}[\text{nominaNome, nominaNascita}] \sqsubseteq_{FK} \text{Maestro}[\text{nome, nascita}] \\
\text{Interno}(\text{nome, nascita}) \sqsubseteq_{FK} \text{Maestro}(\text{nome, nascita}) \\
\text{Iscrizione}(\text{maestroNome, maestroNascita}) \sqsubseteq_{FK} \text{Interno}(\text{nome, nascita}) \\
\text{Esterno}(\text{nome, nascita}) \sqsubseteq_{FK} \text{Maestro}(\text{nome, nascita}) \\
\text{Promozione}(\text{nomeMaestro, nascitaMaestro}) \sqsubseteq_{FK} \text{Esterno}(\text{nome, nascita}) \\
\text{Promozione}(\text{allievoNome, allievoNascita}) \sqsubseteq_{FK} \text{Allievo}(\text{nome, nascita}) \\
\text{Allievo}(\text{nomeA, nascitaA}) \sqsubseteq_{FK} \text{Allievo}(\text{nome, nascita})
\end{array}
$$

# Prova esame 17 giugno 2019
## Esercizio 1
### A
![[prova esame 17.06.2019 es 1]]
### B
$$
\begin{array}{l}
\text{Tipologia}(\underline{\text{cod}}\text{, denominazione, descrizione}) \\
\text{Intervista}(\underline{\text{tipologiaCod, indagineNum, indaginePiva}}\text{, nPersone}) \\
\text{Indagine}(\underline{\text{num, piva}}\text{, dataI, dataF}\overset{\text{NULL}}{\text{, documentoTitolo}}\text{, documentoData}) \\
\text{Cliente}(\underline{\text{piva}}\text{, sede, denominazione}) \\
\text{Domanda}(\underline{\text{num, indagineNum, indaginePiva}}\text{, testo, r1, nR1, r2, nR2, r3, nR3}) \\
\text{Dipendente}(\underline{\text{matricola}}\text{, nome, genere, dataN}) \\
\text{Intervistatore}(\underline{\text{matricola}}) \\
\text{Analizzatore}(\underline{\text{matricola}}) \\
\text{Documento}(\underline{\text{titolo, data}}\text{, matricola}) \\
\text{Coinvolgimento}(\underline{\text{matricola, indagineNum, indaginePiva}}) \\
 \\
\text{Intervista}(\text{tipologiaCod}) \sqsubseteq_{FK} \text{Tipologia}(\text{cod}) \\
\text{Intervista}(\text{indagineNum, indaginePiva}) \sqsubseteq_{FK} \text{Indagine}(\text{num, piva}) \\
\text{Indagine}(\text{piva}) \sqsubseteq_{FK} \text{Cliente}(\text{piva}) \\
\text{Indagine}(\text{documentoTitolo, documentoData}) \sqsubseteq_{FK} \text{Documento}(\text{titolo, data}) \\
\text{Domanda}(\text{indagineNum, indaginePiva}) \sqsubseteq_{FK} \text{Indagine}(\text{num, piva}) \\
\text{Intervistatore}(\text{matricola}) \sqsubseteq_{FK} \text{Dipendente}(\text{matricola}) \\
\text{Analizzatore}(\text{matricola}) \sqsubseteq_{FK} \text{Dipendente}(\text{matricola}) \\
\text{Documento}(\text{matricola}) \sqsubseteq_{FK} \text{Analizzatore}(\text{matricola}) \\
\text{Coinvolgimento}(\text{matricola}) \sqsubseteq_{FK} \text{Intervistatore}(\text{matricola}) \\
\text{Coinvolgimento}(\text{indagineNum, indaginePiva}) \sqsubseteq_{FK} \text{Indagine}(\text{num, piva})
\end{array}
$$

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
![[prova esame 06.09.2016 es 1]]
### B
$$
\begin{array}{l}
\text{Personale}(\underline{\text{CF}}\text{, nome, nascita}) \\
\text{Autista}(\underline{\text{CF}}\text{, patente}) \\
\text{Infermiere}(\underline{\text{CF}}) \\
\text{Medico}(\underline{\text{CF}}\text{, specializzazione}) \\
\text{Postazione}(\underline{\text{città, indirizzo}}\text{, nome}) \\
\text{PostazioneM}(\underline{\text{città, indirizzo}}\text{, targa}) \\
\text{PostazioneF}(\underline{\text{città, indirizzo}}) \\
\text{Donazione}(\underline{\text{dataOra, postazioneCittà, postazioneIndirizzo}}\text{, nTessera, medicoCF}) \\
\text{Donatore}(\underline{\text{nTessera}}\text{, nome, gruppoS}) \\
\text{Abilitazione}(\underline{\text{autistaCF, postazioneCittà, postazioneIndirizzo}}) \\
\text{Assistenza}(\underline{\text{donazioneDataOra, donazioneCittà, donazioneIndirizzo, infermiereCF}}) \\
\text{Analisi}(\underline{\text{nome}}\text{, descrizione}) \\
\text{Laboratorio}(\underline{\text{analisiNome, donazioneDataOra, donazioneCittà, donazioneIndirizzo}}\text{, nomeLab, risultato}) \\
\text{Incarico}(\underline{\text{data, postazioneCittà, postazioneIndirizzo}}\text{, medicoCF}) \\

 \\
\text{Autista}[\text{CF}] \sqsubseteq_{FK} \text{Personale}[\text{CF}] \\
\text{Infermiere}[\text{CF}] \sqsubseteq_{FK} \text{Personale}[\text{CF}] \\
\text{Medico}[\text{CF}] \sqsubseteq_{FK} \text{Personale}[\text{CF}] \\
\text{PostazioneM}[\text{città, indirizzo}] \sqsubseteq_{FK} \text{Postazione}[\text{città, indirizzo}] \\
\text{PostazioneF}[\text{città, indirizzo}] \sqsubseteq_{FK} \text{Postazione}[\text{cittò, indirizzo}] \\
\text{Donazione}[\text{postazioneCittà, postazioneIndirizzo}] \sqsubseteq_{FK} \text{Postazione}[\text{città, indirizzo}] \\
\text{Donazione}[\text{nTessera}]\sqsubseteq_{FK} \text{Donatore}[\text{nTessera}] \\
\text{Donazione}[\text{medicoCF}] \sqsubseteq_{FK} \text{Medico}[\text{CF}] \\
\text{Abilitazione}[\text{autistaCF}] \sqsubseteq_{FK} \text{Autista}[\text{CF}] \\
\text{Abilitazione}[\text{postazioneCittà, postazioneIndirizzo}] \sqsubseteq_{FK} \text{PostazioneM}[\text{città, indirizzo}] \\
\text{Assistenza}[\text{donazioneDataOra, donazioneCittà, donazioneIndirizzo}] \sqsubseteq_{FK} \text{Donazione}[\text{dataOra, postazioneCittà, postazioneIndirizzo}] \\
\text{Assistenza}[\text{infermiereCF}] \sqsubseteq_{FK} \text{Infermiere}[\text{CF}] \\
\text{Laboratorio}[\text{analisiNome}] \sqsubseteq_{FK} \text{Analisi}[\text{nome}] \\
\text{Laboratorio}[\text{donazioneDataOra, donazioneCittà, donazioneIndirizzo}] \sqsubseteq_{FK} \text{Donazione}[\text{dataOra, postazioneCittà, postazioneIndirizzo}] \\
\text{Incarico}[\text{postazioneCittà, postazioneIndirizzo}] \sqsubseteq_{FK} \text{PostazioneF}[\text{città, indirizzo}] \\
\text{Incarico}[\text{medico}] \sqsubseteq_{FK} \text{Medico}[\text{CF}]
\end{array}
$$


