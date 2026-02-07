def fatt(n):
    if n==1:
        return 1
    f=fatt(n-1)
    return n*f

intero=int(input('Dammi un intero: '))
print('Il suo fattoriale è: ', fatt(intero))

# in memoria quasi come in c viene allocato nuovo spazio nello stack
# viene allocata prima la variabile intero, poi quando viene richiamata la funzione, viene allocato il record di attivazione, viene creata una nuova cella in cui viene copiato il valore del puntatore passato. Viene creata la variabile f, ma non viene allocata, viene prima creato un nuovo record di attivazione legato alla ricorsione. Lo spazio allocato per le ricorsioni vengono eliminate man mano che vengono concluse, a retroso