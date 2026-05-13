# verificare se due stringhe coincidono in modo ricorsivo

def coinc(s1, s2, i):
    if i==len(s1):
        return True
    return s1[i]==s2[i] and coinc(s1, s2, i+1)

def stringhe_coincidenti(s1, s2):
    if len(s1)==len(s2):
        return coinc(s1, s2, 0)
    return False

stringa1 ='ciao'
stringa2 ='ciao'

print('Le due stringhe coincidono? ', stringhe_coincidenti(stringa1, stringa2))