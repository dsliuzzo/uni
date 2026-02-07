# scrivere una funzione ricorsiva che data una stringa s restituisca la stringa ottenuta da s eliminando le vocali

def elimina_vocali(s):
    if len(s) == 0: return s
    return elimina_vocali(s)

def elimina_vocali_ric(s_corr):
    vocali = "aeiouAEIOU"
    if len(s_corr) == 0 : return s_corr
    if s_corr[0] in vocali:
        return elimina_vocali_ric(s_corr[1:])
    return s_corr[0] + elimina_vocali_ric(s_corr[1:])
