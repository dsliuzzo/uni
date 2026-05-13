mcd(A,B,A):-
    A=:=B.
mcd(A,B,M):-
    A<B,
    B1 is B-A,
    mcd(A,B1,M).
mcd(A,B,M):-
    A>B,
    A1 is A-B,
    mcd(A1, B, M).