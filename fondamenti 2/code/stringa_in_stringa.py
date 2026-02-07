#scrivi una funzione che prende in ingresso 2 stringhe e verifica se la 2a è contenuta nella 1a

def contenuta(s1, s2):
    c=0
    for i in range(0, len(s1)):
        if(s1[i]!=s2[c]):
            c=0
        if(s1[i]==s2[c]):
            c+=1
        if(c==(len(s2)-1)):
            return True
    return False

print(contenuta("sccsah", "csa"))