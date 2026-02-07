# Funzione conta_vocali che riceve in ingresso una stringa e restituisce il numero di vocali in essa presenti
# (sia maiuscole che minuscole)

def conta_vocali(s):
    vocali = "aeiouèéùàò"
    count = 0
    s = s.lower()       
    for c in s: 
        if c in vocali:
            count +=1
    return count

stringa = "adkbcèekpuiejàfekvùdory"
print(conta_vocali(stringa))

# E' possibile compattare la parte iterativa della funzione conta_vocali:
def conta_vocali_v2(s):
    vocali = "aeiouèéùàò"
    return len([c for c in s.lower() if c in vocali])
# Quest'ultima riga di codice crea prima una lista in cui sono contenute tutte le vocali della stringa s e poi restituisce la sua dimensione

stringa = "adkbcèekpuiejàfekvùdory"
print(conta_vocali_v2(stringa))

# Versione ulteriormente compattata:
def conta_vocali_v3(s):
    vocali = "aeiouèéùàò"
    return sum(1 for c in s.lower() if c in vocali)

stringa = "adkbcèekpuiejàfekvùdory"
print(conta_vocali_v3(stringa))