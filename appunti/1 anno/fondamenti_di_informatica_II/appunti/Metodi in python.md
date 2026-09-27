#appunti 
#fondamenti2 
- `ogg.copy()`
	copia il riferimento di `ogg`, ma se modifichiamo qualcosa in `ogg` viene modificato anche il nuovo oggetto a cui abbiamo assegnato `ogg.copy()`
- `ogg.deepcopy()`
	alloca nuovo spazio e ricopia il contenuto di `ogg`
# Liste
Ovunque venga usato uno #shift sono metodi abbastanza pesanti
- `l.append(var)`
  aggiunge var alla fine di l
- `l.insert(indx, var)`
  inserirà l'elemento var nella posizione indx e fa lo #shift di tutti gli elementi rimanenti
- `l.pop(indx)`
  elimina l'elemento in posizione indx, lo restituisce ed effettua lo #shift degli elementi rimanenti nella lista, se non è presente nessun argomento succede con l'ultimo elemento. 
- `l.remove(var)`
  ricerca var all'interno di l e lo rimuove
# Stringhe
### Formattazione
- `s.upper()`
	converte tutti i caratteri di `s` in maiuscolo
- `s.lower()`
  converte tutti i caratteri di `s` in minuscolo
- `s.capitalize()`
  converte il primo carattere di `s` in maiuscolo
- `s.title()`
  data una frase converte tutte le prime lettere in maiuscolo
- `s.strip()`
  rimuove tutti gli spazi iniziali e finali
- `s.lstrip()`/`s.rstrip()`
  rimuove tutti gli spazi a sinistra/destra
- `s.replace(new, old)`
  sostituisce tutte le occorrenze di old con new
### Ricerca
- `s.find(sub, start, end)`
  restituisce l'indice della prima occorrenza di sub dall'indice start all'indice end, se non è presente restituisce -1
- `s.index(sub, start, end)`
  funziona come `find`, ma se non trova nessun valore restituisce `Value error`
- `s.rfind`/`s.rindex`
  come `find` e `index`, ma iniziano la ricerca dal lato opposto
- `s.count(sub, start, end)`
  restituisce il numero di occorrenze di sub
- `s.startswith(prefix, start, end)`
  verifica se la stringa inizia per prefix
- `s.endswith(suffix, start, end)`
  verifica se la stringa finisce per suffix
### Divisione e unione
- `s.split(sep=None)`
  divide la stringa in una lista di sottostringhe formata dalle singole parole divise da  ' ', si può anche modificare il separatore predefinito con `sep=''`
- `s.rsplit()`
  come split, ma la divisione inizia da destra
- `s.partition(sep)`
  divide la stringa in 3, prima di sep, sep e dopo di sep
- `s.rpartition(sep)`
  come partition ma inizia da destra
- `s.join(iterable)`
  unisce gli elementi di iterable in una sola stringa separati dalla stringa chiamante (s diventa il separatore della nuova stringa)
### Verifica
- `s.isalpha()`
  restituisce True se contiene solo lettere
- `s.isdigit()`
  restituisce True se contiene solo numeri
- `s.isalnum()`
  restituisce True se contiene solo lettere e numeri
- `s.islower()`/`s.isupper()`
  restituisce True se contiene solo lettere minuscole/maiuscole