pari(N):-
    N mod 2 =:= 0.
pariList([],[]).
pariList([Testa|Coda], [Testa|Risultato]):-
    pari(Testa),
    pariList(Coda,Risultato).
pariList([_|Coda], Risultato):-
    pariList(Coda,Risultato).
maggiore([],_,[]).
maggiore([Testa|Coda],N,[Testa|Risultato]):-
    Testa>N,
    maggiore(Coda,N,Risultato).
maggiore([Testa|Coda],N,Risultato):-
    Testa=<N,
    maggiore(Coda,N,Risultato).
parsoglialist(L,R,N,K):-
    pariList(L,L1),
    maggiore(R,N,L2),
    append(L1,L2,K).