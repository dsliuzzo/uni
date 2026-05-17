
%%ragiono su figli ipotetici, S e D possono essere anche vuoti --> i metodi che andiamo a utilizzare sui figli devono considerare anche il caso in cui sono vuoti%%
%%devo assicurarmi di richiamare visita() su alberi più piccoli del chiamante, altrimenti non converge ad un risultato%%

| a                                    |                                    |
| ------------------------------------ | ---------------------------------- |
| None                                 | return                             |
| ![[Pasted image 20260327115836.png]] | visita(s)<br>print(v)<br>visita(d) |


altro metodo
![[Pasted image 20260327122844.png]]
```
def cerca(a:AlberoBin, x:int) -> bool:
	// caso base
	if a is None:
		return False
	return x == a.val or cerca(a.sin) or cerca(a.des)
```


metodo che restituisce true se e solo se nell'albero parametro c'è una foglia il cui valore è più piccolo di tutti i suoi antenati, restituisce false se l'albero contiene solo la radice.
```
def fogliaPiccola(a:AlberoBin) -> Bool:
	if a is None or eFiglio(a):
		return False
	return fogliaPiccola2(a.sin, a.val) or fogliaPiccola2
```

metodo di appoggio, mi porto il minimo trovato

```
def fogliaPiccola2(a:AlberoBin, m:int):
	
```




![[tldraw/Tldraw 27-03-2026 11.46AM.md]]

```
def visitaLivelli(a: AlberoBin):
	coda = [a]
	while len(coda) != 0:
		curr = coda.pop(0)
		l.append(curr.val)
		if curr.sin is not None:
			coda.append(curr.sin)
		if curr.des is not None:
			coda.append(curr.des)
	return l
```
