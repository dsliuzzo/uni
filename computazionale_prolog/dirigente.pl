%T se il dirigente X dirige la squadra Z
%dirige(X,Z).
%T se il calciatore Y gioca nella squadra Z
%gioca(Y,Z).

dirige(maldini, milan).
dirige(leonardo, milan).
dirige(percassi, atalanta).
dirige(totti, roma).
dirige(sabatini, roma).
gioca(dzeko, roma).
gioca(cristante, roma).
gioca(ibra, milan).
gioca(gomez, atalanta).
gioca(rebic, milan).

%T se X è il dirigente di un giocatore Y
dirigente(X,Y):-
	dirige(X,Z),
	gioca(Y,Z).

%1) ?-dirigente(X, ibra)
%2) ?-dirige(X, roma).
%3) ?-dirige(X, atalanta).