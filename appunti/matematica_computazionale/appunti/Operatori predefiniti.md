#computazionale 
#appunti 
Gli operatori predefiniti consistono in funzioni o predicati che sono già presenti all’interno del programma e possono essere utilizzati senza bisogno di ridefinirli
# `is_lista(X)`
Restituisce True se `X` è una lista, False altrimenti
```Prolog
is_lista([]).
is_lista([_|Coda]):-
	is_lista(Coda).
```
# `member(X,L)`
restituisce True se `X` è un elemento della lista `L`
```Prolog
member(X,[X|_]).
member(X,[_|Coda]):-
	membro(X,Coda).
```
# `lenght(L,N)`
`N` sarà il numero di elementi della lista `L`
```Prolog
lenght([],0).
lenght([_|Coda], N):-
	lenght(Coda,M), N is M+1.
```
# `append(L1,L2,L3)`
Unisce due liste (`L1,L2`) in un’unica lista `L3`
```Prolog
append([], L, L).
append([X|L1], L2, [X|L3]):-
	append(L1,L2,L3).
```