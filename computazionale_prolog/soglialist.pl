% Predicato principale
soglialist(L, R, M, N, K) :-
    sogliaM(L, M, MinoriM),
    sogliaN(R, N, MaggioriN),
    append(MinoriM, MaggioriN, K).

% Predicato per trovare elementi minori di M
sogliaM([], _, []).
%se devo aggiungere il valore
sogliaM([Testa|Coda], M, [Testa|Risultato]) :- 
    Testa < M, 
    sogliaM(Coda, M, Risultato).
%se non devo aggiungere il valore
sogliaM([_|Coda], M, Risultato) :- 
    sogliaM(Coda, M, Risultato).

% Predicato per trovare elementi maggiori di N
sogliaN([], _, []).
sogliaN([Testa|Coda], N, [Testa|Risultato]) :- 
    Testa > N, 
    sogliaN(Coda, N, Risultato).
sogliaN([_|Coda], N, Risultato) :- 
    sogliaN(Coda, N, Risultato).
