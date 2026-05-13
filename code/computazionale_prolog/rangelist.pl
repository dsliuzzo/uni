rangelist(_,_,[]).
rangelist(I,J,[Testa|Coda]):-Testa>=I, Testa=<J, rangelist(I,J,Coda).