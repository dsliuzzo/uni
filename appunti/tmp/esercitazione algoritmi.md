solo per email candida.greco@dimes.unical.it
analisi asintotica e per casi sono cose diverse
il caso migliore non è quando l'array è vuoto, il caso migliore non consiste nel cambiare $n$

---

```
def ex1(n):
	i = 1
	while i <= n:
		print(i)
		i = i * 2
```

| operazione       | cost | time           |
| ---------------- | ---- | -------------- |
| inizializzazione | C1   | 1              |
| while            | C2   | $\log_2 n+1+1$ |
| print            | C3   | $\log_2 n$     |
| aggiornamento    | C4   | $\log_2 n$     |
caso migliore e caso peggiore coincidono
$$
CTM = CTP = \Theta(\log_2 n)
$$
complessità spaziale:
Abbiamo solo l'inizializzazione di $i$
anche qui coincidono
$$
CSM = CSP = \Theta(1)
$$

---
```
def ex2(n):
	i = n
	while i > 0:
		for k in range(n):
			print("*")
		i = i/2
```

| operazione       | cost | time        |
| ---------------- | ---- | ----------- |
| inizializzazione | C1   | 1           |
| while            | C2   | $\log(n)$   |
| for              | C3   | $n \log(n)$ |
| print            | C4   | $n\log(n)$  |
| aggiornamento    | C5   | $\log(n)$   |
Istruzione dominante $n \log (n)$
$$
CTM = CTP = \Theta(n \log_2(n))
$$
$$
CSM = CSP = \Theta(1)
$$

---

