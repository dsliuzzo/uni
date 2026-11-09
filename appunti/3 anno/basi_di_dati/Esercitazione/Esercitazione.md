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


# Prova esame 24 marzo 2022
## Esercizio 4
- I condomini di Rende che hanno almeno due appartamenti, ciascuno dei quali è stato fittato ad almeno due inquini diversi nell'anno 2021
- I condomini di Rende che non hanno affittato alcun appartamento nell'anno 2020
- I condomini di Rende che hanno affittato appartamenti solo ad inquilini della città di Cosenza
- Le coppie di nomi di inquilini che hanno affittato lo stesso insieme di appartamenti nella città di Cosenza

# Prova esame 8 luglio 2019
## Esercizio 1
### A
![[prova esame 08.07.2019 es 1]]
![[prova esame 08.07.2019 es 1]]
### B
$$
\begin{array}{l}
\text{Organizzatore}(\underline{\text{CF}}\text{, nome, dataN, disponibilità}) \\
\text{Giocatore}(\underline{\text{CF}}\text{, nome, dataN, dataS, abbonamento}) \\
\text{Giocatore}[\text{abbonamento}] \sqsubseteq_{FK} \text{Abbonamento}[\text{cod}] \\
\text{Abbonamento} (\underline{\text{cod}}\text{, nome, descrizione}) \\
\text{Squadra} (\underline{\text{nome, dataF}}\text{,}\overset{\text{NULL}}{\text{capitano}}) \\
\text{Squadra}[\text{capitano}] \sqsubseteq_{FK} \text{Giocatore}[\text{CF}] \\
\text{Componente}(\underline{\text{giocatore, squadraN, squadraD}}\text{, nickname}) \\
\text{Componente}[\text{giocatore}] \sqsubseteq_{FK} \text{Giocatore}[\text{CF}] \\
\text{Componente}[\text{squadraN, squadraD}] \sqsubseteq_{FK} \text{Squadra}[\text{nome, dataF}] \\
\text{Incontro}(\underline{\text{data, fascia, salaP, salaN}}\text{, rossaN, rossaD, giallaN, giallaD, organizzatore}) \\
\text{Incontro}[\text{salaP, salaN}] \sqsubseteq_{FK} \text{Sala}[\text{piano, numero}] \\
\text{Incontro}[\text{rossaN, rossaD}] \sqsubseteq_{FK} \text{Squadra}[\text{nome, dataF}] \\
\text{Incontro}[\text{giallaN, giallaD}] \sqsubseteq_{FK} \text{Squadra}[\text{nome, dataF}] \\
\text{Incontro}[\text{organizzatore}] \sqsubseteq_{FK} \text{Organizzatore}[\text{CF}] \\
\text{Sala}(\underline{\text{piano, numero}}\text{, capienza}) \\
\text{Colpo}(\underline{\text{data/ora, incD, incF, incP, incN, colpisce}}\text{, zona, colpito}) \\
\text{Colpo}[\text{incD, incF, incP, incN}] \sqsubseteq_{FK} \text{Incontro}[\text{data, fascia, salaP, salaN}] \\
\text{Colpo}[\text{colpisce}] \sqsubseteq_{FK} \text{Giocatore}[\text{CF}] \\
\text{Colpo}[\text{colpito}] \sqsubseteq_{FK} \text{Giocatore}[\text{CF}]
\end{array}
$$
# Prova esame 4 settembre 2018
## Esercizio 1
### A
![[prova esame 04.09.2018 es 1]]
### B
$$
\begin{array}{l}
\text{Cliente}(\underline{\text{piva}}\text{, nome, residenza}) \\
\text{Contratto}(\underline{\text{numero, data}}\text{, cliente}) \\
\text{Contratto}[\text{cliente}] \sqsubseteq_{FK} \text{Cliente}[\text{piva}] \\
\text{Singolo}(\underline{\text{numero, data}}\text{, localeC, localeI}) \\
\text{Singolo}[\text{numero, data}] \sqsubseteq_{FK} \text{Contratto}[\text{numero, data}] \\
\text{Singolo}[\text{localeC, localeI}] \sqsubseteq_{FK} \text{Locale}[\text{comune, indirizzo}] \\
\text{Periodico}(\underline{\text{numero, data}}\text{, periodicità}) \\
\text{Periodico}[\text{numero, data}] \sqsubseteq_{FK} \text{Contratto}[\text{numero, data}] \\
\text{ListaL}(\underline{\text{periodicoN, periodicoD, localeC, localeI}}) \\
\text{ListaL}[\text{periodicoN, periodicoD}] \sqsubseteq_{FK} \text{Periodico}[\text{numero, data}] \\
\text{ListaL}[\text{localeC, localeI}] \sqsubseteq_{FK} \text{Locale}[\text{comune, indirizzo}] \\
\text{Locale}(\underline{\text{comune, indirizzo}}\text{, descrizione}) \\
\text{Intervento}(\underline{\text{localeC, localeI, data}}\text{, oraI/oraF, }\overset{\text{NULL}}{\text{caposquadraN,}}\overset{\text{NULL}}{\text{caposquadraD}}) \\
\text{Intervento}[\text{localeC, localeI}] \sqsubseteq_{FK} \text{Locale}[\text{comune, indirizzo}] \\
\text{Intervento}[\text{caposquadraN, caposquadraD}] \sqsubseteq_{FK} \text{Caposquadra}[\text{nome, dataN}] \\
\text{Caposquadra}(\underline{\text{nome, dataN}}\text{, dataI}) \\
\text{Caposquadra}[\text{nome, dataN}] \sqsubseteq_{FK} \text{Operaio}[\text{nome, dataN}] \\
\text{Semplice}(\underline{\text{nome, dataN}}) \\
\text{Semplice}[\text{nome, dataN}] \sqsubseteq_{FK} \text{Operaio}[\text{nome, dataN}] \\
\text{ListaO}(\underline{\text{sempliceN, sempliceD, interventoC, interventoI, interventoD}}) \\
\text{ListaO}[\text{sempliceN, sempliceD}] \sqsubseteq_{FK} \text{Semplice}[\text{nome, dataN}] \\
\text{ListaO}[\text{interventoC, interventoI, interventoD}] \sqsubseteq_{FK} \text{Intervento}[\text{localeC, localeI, data}] \\
\text{Operaio}(\underline{\text{nome, dataN}}) \\
\text{Variazione}(\underline{\text{operaioN, operaioD, giorno, dataD}}\text{, nuoveO}) \\
\text{Variazione}[\text{operaioN, operaioD}] \sqsubseteq_{FK} \text{Operaio}[\text{nome, dataN}]
\end{array}
$$
# Prova esame 6 marzo 2018
## Esercizio 1
### A
![[prova esame 06.03.2018 es 1 1]]
### B
$$
\begin{array}{l}
\text{Rilevazione}(\underline{\text{dataOra, serraId, serraCom, serraCoo}}\text{, valore}) \\
\text{Rilevazione}[\text{serraId, serraCom, serraCoo}] \sqsubseteq_{FK} \text{Serra}[\text{id, terrenoCom, terrenoCoo}] \\
\text{Serra}(\underline{\text{id, terrenoCom, terrenoCoo}}\text{, dimensione}) \\
\text{Serra}[\text{terrenoCom, terrenoCoo}] \sqsubseteq_{FK} \text{Terreno}[\text{comune, coordinate}] \\
\text{Terreno}(\underline{\text{comune, coordinate}}\text{, estensione}) \\
\text{Intervento}(\underline{\text{cod}}\text{, data, motivo}) \\
\text{Installazione}(\underline{\text{intervento}}\text{, materiale, }\overbrace{\text{serraId, serraCom, serraCoo}}^{\text{UNIQUE}}) \\
\text{Installazione}[\text{intervento}] \sqsubseteq_{FK} \text{Intervento}[\text{cod}] \\
\text{Installazione}[\text{serraId, serraCom, serraCoo}] \sqsubseteq_{FK} \text{Serra}[\text{id, terrenoCom, terrenoCoo}] \\
\text{Manutenzione}(\underline{\text{intervento}}\text{, serraId, serraCom, serraCoo}) \\
\text{Manutenzione}[\text{intervento}] \sqsubseteq_{FK} \text{Intervento}[\text{cod}] \\
\text{Manutenzione}[\text{serraId, serraCom, serraCoo}] \sqsubseteq_{FK} \text{Serra}[\text{id, terrenoCom, terrenoCoo}] \\
\text{Outsourcing}(\underline{\text{intervento}}\text{, }\overset{\text{NULL}}{\text{dittaN, }}\overset{\text{NULL}}{\text{dittaI}}) \\
\text{Outsourcing}[\text{intervento}] \sqsubseteq_{FK} \text{Intervento}[\text{cod}] \\
\text{Outsourcing}[\text{dittaN, dittaI}] \sqsubseteq_{FK} \text{Ditta}[\text{nome, indirizzo}] \\
\text{Ditta}(\underline{\text{nome, indirizzo}}) \\
\text{Interno}(\underline{\text{intervento}}) \\
\text{Interno}[\text{intervento}] \sqsubseteq_{FK} \text{Intervento}[\text{cod}] \\
\text{Operaio}(\underline{\text{matr}}\text{, nome}) \\
\text{Partecipazione}(\underline{\text{operaioM, internoC}}\text{, ruolo}) \\
\text{Partecipazione}[\text{operaioM}] \sqsubseteq_{FK} \text{Operaio}[\text{matr}] \\
\text{Partecipazione}[\text{internoC}] \sqsubseteq_{FK} \text{Interno}[\text{intervento}]
\end{array}
$$

# Prova esame 4 settembre 2020
## Esercizio 3
Sia dato il seguente schema di database:
- $\text{SOTTOSCRIZIONE}(\underline{\text{Cliente}}, \underline{\text{Investimento}}, \text{NumeroQuote})$
- $\text{INVESTIMENTO}(\underline{\text{Nome}}, \text{SocietàFinanziaria}, \text{TipoInvestimento}, \text{ValoreSingolaQuota})$
- $\text{SOCIETA}(\underline{\text{Nome}}, \text{Citta}, \text{AnnoFondazione})$
- $\text{CLIENTE}(\underline{\text{CodiceFiscale}}, \text{Nome}, \text{Citta})$

Ed i seguenti vincoli di chiave esterna:
- $\text{SOTTOSCRIZIONE}[\text{Cliente}] \subseteq_{FK} \text{CLIENTE}[\text{CodiceFiscale}]$
- $\text{SOTTOSCRIZIONE}[\text{Investimento}] \subseteq_{FK} \text{INVESTIMENTO}[\text{Nome}]$
- $\text{INVESTIMENTO}[\text{SocietàFinanziaria}] \subseteq_{FK} \text{SOCIETA}[\text{Nome}]$

1) I clienti della città di Cosenza che hanno sottoscritto un investimento con una società finanziaria fondata nel 1990
$$
\begin{array}{l}
\text{clientiCS} = \sigma_{\$3 = \text{'CS'}} (\text{cliente}) \\
\text{fondate1990} = \sigma_{\$3 = 1990}(\text{societa}) \\
\text{Q1} = \Pi_{\$4, \$5, \$6}\left\{\left[ \left(\text{sottoscrizione} \underset{\$1 = \$1}{\bowtie} \text{clientiCS}\right) \underset{\$2 = \$1}{\bowtie} \text{investimento}\right] \underset{\$8 = \$1}{\bowtie} \text{fondate1990}\right\}
\end{array}
$$
2) I clienti della città di Cosenza che hanno sottoscritto almeno due investimenti
$$
\begin{array}{l}
\text{almeno2inv} = \Pi_{\$1}\left(\text{sottoscrizione} \underset{\$1 = \$1 \wedge \$2 \neq \$2}{\bowtie} \text{sottoscrizione}\right) \\
\text{Q2} = \Pi_{\$1, \$2, \$3} \left( \text{clientiCS} \underset{\$1 = \$1}{\bowtie} \text{almeno2inv} \right)
\end{array}
$$
3) I clienti della città di Cosenza che hanno sottoscritto investimenti di almeno due società finanziarie
$$
\begin{array}{l}
\text{sottSoc} = \text{sottoscrizione} \underset{\$2 = \$1}{\bowtie} \text{investimento} \\
\text{almeno2soc} = \Pi_{\$1}\left( \text{sottSoc} \underset{\$1 = \$1 \wedge \$5 \neq \$ 5}{\bowtie} \text{sottSoc} \right) \\
\text{Q3} = \Pi_{\$1, \$2, \$3} \left( \text{clientiCS} \underset{\$1 = \$1}{\bowtie} \text{almeno2soc} \right)
\end{array}
$$
4) Il nome dei clienti della città di Cosenza che hanno sottoscritto investimenti di almeno due società finanziarie, ciascuna delle quali è curatrice di almeno due investimenti;
$$
\begin{array}{l}
\text{curatrici2} = \Pi_{\$2}\left( \text{investimento} \underset{\$1 \neq \$1 \wedge \$2 = \$2}{\bowtie} \text{investimento} \right) \\
\text{sottCur} = \text{sottSoc} \underset{\$5 = \$1}{\bowtie} \text{curatrici2} \\
\text{pippo} = \Pi_{\$1} \left( \text{sottCur} \underset{\$1 = \$1 \wedge \$5 \neq \$5}{\bowtie} \text{sottCur} \right) \\
\text{Q4} = \Pi_{\$2} \left( \text{clientiCS} \underset{\$1 = \$1}{\bowtie} \text{pippo} \right)
\end{array}
$$
5) I clienti che hanno sottoscritto almeno un investimento di tipo “obbligazione” curati da società finanziarie di Cosenza
$$
\begin{array}{l}
\text{societaCS} = \sigma_{\$2 = \text{'CS'}}(\text{societa}) \\
\text{invObbCS} = \Pi_{\$1}\left[ \sigma_{\$3 = \text{'obbligazione'}}(\text{investimento}) \underset{\$2 = \$1}{\bowtie} \text{societaCS}\right] \\
\text{Q5} = \Pi_{\$1}\left( \text{sottoscrizione} \underset{\$2 = \$1}{\bowtie} \text{invObbCS} \right)
\end{array}
$$
6) I clienti che non hanno sottoscritto alcun investimento di tipo “obbligazione”
$$
\begin{array}{l}
\text{Q6} = \Pi_{\$1}(\text{cliente}) - \Pi_{\$1}\left[ \sigma_{\$6 = \text{'obbligazione'}}\left( \text{sottoscrizione} \underset{\$2 = \$1}{\bowtie} \text{investimento}\right) \right]
\end{array}
$$
7) Le città dei clienti che non hanno sottoscritto alcun investimento di tipo “obbligazione”
$$
\text{Q7} = \Pi_{\$3} \left( \text{cliente} \underset{\$1 = \$1}{\bowtie} \text{Q6} \right)
$$
8) Le città che non hanno nessun cliente che ha sottoscritto almeno un investimenti di tipo “obbligazione”
$$
\begin{array}{l}
\text{clienteObb} = \Pi_{\$1}\left[ \sigma_{\$6 = \text{'obbligazione'}}\left( \text{sottoscrizione} \underset{\$2 = \$1}{\bowtie} \text{investimento}\right) \right] \\
\text{Q8} = \Pi_{\$3}(\text{cliente}) - \Pi_{\$3}\left( \text{cliente} \underset{\$1 = \$1}{\bowtie} \text{clienteObb} \right)
\end{array}
$$
9) Le città dei clienti che hanno sottoscritto investimenti, ma non di tipo “obbligazione”
$$
\begin{array}{l}
\text{clientiNoObb} = \Pi_{\$1}(\text{sottoscrizione}) - \text{clienteObb} \\
\text{Q9} = \Pi_{\$3}\left( \text{cliente} \underset{\$1 = \$1}{\bowtie} \text{clientiNoObb} \right)
\end{array}
$$
10) I clienti che hanno sottoscritto tutti gli investimenti di tipo “obbligazione” curati da società finanziarie di Cosenza.
tutti i clienti - clienti(tutte le possibili coppie (cliente|investimento) - quelle reali)
$$
\begin{array}{l}
\text{clientiNo} = \Pi_{\$1}\left\{[\Pi_{\$1}(\text{cliente}) \times \text{invObbCS}] - \Pi_{\$1, \$2}(\text{sottoscrizione})\right\} \\
\text{Q10} = \Pi_{\$1}(\text{cliente}) - \text{clientiNo}
\end{array}
$$
11) Coppie di clienti `<C1,C2>` che hanno sottoscritto investimenti curati dallo stesso insieme di società finanziarie
tutte le possibili coppie di clienti - clienti che hanno sottoscritto investimenti curati da società finanziarie diverse
$$
\begin{array}{l}
\text{coppieNo} = \left( \text{Sottoscrizione} \underset{\$ 2 = \$ 1}{\bowtie} \text{Investimento} \right) \underset{\$ 5 \neq \$ 5 \wedge \$ 1 \neq \$ 1}{\bowtie} \left( \text{Sottoscrizione} \underset{\$ 2 = \$ 1}{\bowtie} \text{Investimento} \right) \\
\text{Q11} = \Pi_{\$ 1, \$ 4}(\text{Sottoscrizione} \times \text{Sottoscrizione}) - \Pi_{\$ 1, \$ 8}(\text{coppieNo})
\end{array}
$$
[...] da rivedere
# Prova esame 8 luglio 2019
## Esercizio 4
Sia dato il seguente schema di database:
- $\text{Tratta}(\underline{\text{codice}}, \text{stazionePartenza}, \text{stazioneDestinazione}, \text{distanza})$
- $\text{Autobus}(\underline{\text{codice}}, \text{trattaCoperta}, \text{tipologiaAutobus}, \text{data}, \text{durata})$
- $\text{Stazione}(\underline{\text{codice}}, \text{nome}, \text{città}, \text{nazione})$

con i seguenti vincoli di chiave esterna:
- $\text{Tratta}[\text{stazionePartenza}] \sqsubseteq_{FK} \text{Stazione}[\text{codice}]$
- $\text{Tratta}[\text{stazioneDestinazione}] \sqsubseteq_{FK} \text{Stazione}[\text{codice}]$
- $\text{Autobus}[\text{trattaCoperta}] \sqsubseteq_{FK} \text{Tratta}[\text{codice}]$

1) I nomi delle stazioni della città di Torino
$$
\text{Q1} = \Pi_{\$ 2}[\sigma_{\$ 3 = \text{'Torino'}}(\text{Stazione})]
$$
``` sql
SELECT nome
FROM Stazione
WHERE citta = 'Torino'
```
2) I nomi delle stazioni che sono il punto di partenza di almeno due tratte
$$
\text{Q2} = \Pi_{\$ 2}\left[ \text{Stazione} \underset{\$ 1 = \$ 2}{\bowtie} \left( \text{Tratta} \underset{\$ 2 = \$ 2 \wedge \$ 1 \neq \$ 1}{\bowtie}\text{Tratta} \right) \right]
$$
``` sql
SELECT S.nome
FROM Stazione S, Tratta T1, Tratta T2
WHERE   T1.stazionePartenza = T2.stazionePartenza
	AND T1.codice != T2.codice
	AND S.codice = T1.stazionePartenza
```

3) Le tratte coperte da almeno due autobus di uguale tipologia (NB: una stazione è coperta da una tratta se ne è stazione di partenza o di destinazione).
$$
\text{Q3} = \Pi_{\$ 1}\left[ \text{Tratta} \underset{\$ 1 = \$ 2 \wedge \$ 1 = \$ 7}{\bowtie} \left( \text{Autobus} \underset{\$ 1 \neq \$ 1 \wedge \$ 3 = \$ 3}{\bowtie} \text{Autobus}\right) \right]
$$
``` sql
SELECT T.codice
FROM Tratta T, Autobus A1, Autobus A2
WHERE   A1.codice != A2.codice
	AND A1.tipologiaAutobus = A2.tipologiaAutobus
	AND T.codice = A1.trattaCoperta
	AND T.codice = A2.trattaCoperta
```

4) I nomi delle stazioni che sono il punto di partenza di almeno due tratte, ciascuna delle quali è coperta da almeno due autobus di uguale tipologia (NB: una stazione è coperta da una tratta se ne è stazione di partenza o di destinazione).
$$
\begin{array}{l}
\text{TrattaOk} = \Pi_{\$ 1, \$ 2}\left[ \text{Tratta} \underset{\$ 1 = \$ 2 \wedge \$ 1 = \$ 7}{\bowtie} \left( \text{Autobus} \underset{\$ 1 \neq \$ 1 \wedge \$ 3 = \$ 3}{\bowtie} \text{Autobus}\right) \right]\\
\text{Q4} = \Pi_{\$ 2}\left[ \text{Stazione} \underset{\$ 1 = \$ 2}{\bowtie} \left( \text{TrattaOk} \underset{\$ 2 = \$ 2 \wedge \$ 1 \neq \$ 1}{\bowtie}\text{TrattaOk} \right) \right]
\end{array}
$$
``` sql
CREATE VIEW TrattaOk (codice, stazionePartenza) AS (
	SELECT T.codice, T.stazionePartenza
	FROM Tratta T, Autobus A1, Autobus A2
	WHERE   A1.codice != A2.codice
		AND A1.tipologiaAutobus = A2.tipologiaAutobus
		AND T.codice = A1.trattaCoperta
		AND T.codice = A2.trattaCoperta
);

SELECT S.nome
FROM Stazione S, TrattaOk T1, TrattaOk T2
WHERE   T1.stazionePartenza = T2.stazionePartenza
	AND T1.codice != T2.codice
	AND S.codice = T1.stazionePartenza
```


5) Le tipologie di autobus per le quali almeno un autobus copre una tratta di distanza superiore a 500km
$$
\text{Q5} = \Pi_{\$ 3}\left\{\text{Autobus} \underset{\$ 2 = \$ 1}{\bowtie} [\sigma_{\$ 4 > 500}(\text{Tratta})]\right\}
$$
``` sql
SELECT A.tipologia
FROM Autobus AS A, Tratta AS T
WHERE   A.trattaCoperta = T.
```


6) Le tipologie di autobus delle quali non esiste alcun autobus che copra una tratta che parte dalla città di Roma e che copre una distanza inferiore a 200 km.
[...]


7) Le coppie di stazioni tali che gli insiemi di tipologie di autobus che partono da ciascuna di esse sono uguali.
[...]
# Prova esame 24 marzo 2022
## Esercizio 4
Sia dato il seguente schema di database:
- $\text{APPARTAMENTO}(\underline{\text{condominio}}, \underline{\text{interno}}, \text{superficie})$
- $\text{CONDOMINIO}(\underline{\text{nome}}, \text{indirizzo}, \text{citta})$
- $\text{INQUILINO}(\underline{\text{codicefiscale}}, \text{nome}, \text{cognome}, \text{città}, \text{età})$
- $\text{AFFITTO}(\text{inquilino}, \text{appCondominio}, \text{appInterno}, \text{dataInizio}, \text{durataMesi}, \text{importoMensile})$

con i seguenti vincoli di chiave esterna:
- $\text{APPARTAMENTO}[\text{condominio}] \sqsubseteq_{FK} \text{CONDOMINIO}[\text{nome}]$
- $\text{AFFITTO}[\text{inquilino}] \sqsubseteq_{FK} \text{INQUILINO}[\text{codicefiscale}]$
- $\text{AFFITTO}[\text{appCondominio}, \text{appInterno}] \sqsubseteq_{FK} \text{APPARTAMENTO}[\text{condominio}, \text{interno}]$

1) I condomini di Rende che hanno almeno due appartamenti, ciascuno dei quali è stato fittato ad almeno due inquilini diversi nell'anno 2021
[...]
2) I condomini di Rende che non hanno affittato alcun appartamento nell'anno 2020
[...]
3) I condomini di Rende che hanno affittato appartamenti solo ad inquilini della città di Cosenza
[...]
4) Le coppie di nomi di inquilini che hanno affittato lo stesso insieme di appartamenti nella città di Cosenza
[...]

# Prova esame 30 giugno 2022
## Esercizio 3
Sia dato il seguente schema di database:
- $\text{CATEGORIA}(\underline{\text{id}}, \text{nome}, \text{descrizione})$
- $\text{SCRITTORE}(\underline{\text{codicefiscale}}, \text{nome}, \text{cognome}, \text{città}, \text{età})$
- $\text{ACCREDITATO}(\underline{\text{scrittore}}, \underline{\text{categoria}})$
- $\text{ARTICOLO}(\text{scrittore}, \text{categoria}, \text{titolo}, \text{data})$

con i seguenti vincoli di chiave esterna:
- $\text{ACCREDITATO}[\text{scrittore}] \sqsubseteq_{FK} \text{SCRITTORE}[\text{codicefiscale}]$
- $\text{ACCREDITATO}[\text{categoria}] \sqsubseteq_{FK} \text{CATEGORIA}[\text{id}]$
- $\text{ARTICOLO}[\text{scrittore}] \sqsubseteq_{FK} \text{SCRITTORE}[\text{codicefiscale}]$
- $\text{ARTICOLO}[\text{categoria}] \sqsubseteq_{FK} \text{CATEGORIA}[\text{id}]$

dove la relazione ACCREDITATO riporta le coppie $S, C$ tali che lo scrittore $S$ è accreditato a scrivere articoli della categoria $C$.

1) I nomi degli scrittori che hanno redatto almeno due articolo di categoria “Cronaca”
$$
\begin{array}{l}
\text{artC} = \Pi_{\$1, \$2, \$3, \$4}\left[\sigma_{\$6 = \text{'cronaca'}}\left( \text{articolo} \underset{\$2 = \$1}{\bowtie} \text{categoria} \right)\right] \\
Q = \Pi_{\$2}\left[\text{scrittori} \underset{\$1 = \$1}{\bowtie}\left(\text{artC} \underset{\$ 1 = \$ 1 \wedge \$2 \neq \$2}{\bowtie} \text{artC}\right)\right]
\end{array}
$$
2)  I nomi delle categorie di cui esiste una coppia di articoli redatti da scrittori diversi accreditati per tale categoria, dove ciascuno di tali scrittori ha scritto articoli di almeno due categorie differenti nell'anno 2018
$$
\begin{array}{l}
\text{catDiff2018} = \Pi_{\$1}\left\{[\sigma_{\$4 = 2018}(\text{articolo})] \underset{\$1 = \$1 \wedge \$2 \neq \$2}{\bowtie} [\sigma_{\$4 = 2018}(\text{articolo})]\right\} \\
\text{acc2018} = \Pi_{\$1, \$2}\left( \text{accreditato} \underset{\$1 = \$1}{\bowtie} \text{catDiff2018}\right) \\
Q = \Pi_{\$2}\left(\text{categoria} \underset{\$1 = \$2}{\bowtie}\left\{\left[\left(\text{articolo} \underset{\$1 \neq \$1 \wedge \$2 = \$2}{\bowtie} \text{articolo}\right) \underset{\$1 = \$1 \wedge \$2 = \$2}{\bowtie} \text{acc2018}\right] \underset{\$5 = \$1 \wedge \$6 = \$2}{\bowtie} \text{acc2018}\right\}\right)
\end{array}
$$
3)  Gli scrittori della città di Genova che hanno scritto solo articoli di categorie per le quali non sono accreditati
[...]
4) Le coppie di scrittori `<S1,S2>` che hanno scritto articoli per lo stesso insieme di categorie
[...]