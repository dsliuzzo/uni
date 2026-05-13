potenza(N,0,0).
potenza(0,X,1).
potenza(N,X,P):-
    N>0,
    N1 is N-1,
    potenza(N1,X,P1),
    P is X*P1.

