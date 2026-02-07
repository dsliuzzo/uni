more([],_,[]).
more([Testa|Coda],C,[Testa|Risultato]):-
    Testa>C,
    more(Coda,C,Risultato).
more([Testa|Coda],C,Risultato):-
    Testa=<C,
    more(Coda,C,Risultato).

less([],_,[]).
less([Testa|Coda],C,[Testa|Risultato]):-
    Testa=<C,
    less(Coda,C,Risultato).
less([Testa|Coda],C,Risultato):-
    Testa>C,
    less(Coda,C,Risultato).

split(L,C,SX,DX):-
    less(L,C,SX),
    more(L,C,DX).