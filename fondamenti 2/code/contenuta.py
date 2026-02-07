def contenuta(s1, s2):
    c=0
    if(len(s1)<len(s2)):
        return False
    else:
        for i in range(0,len(s1)):
            if(s1[i]!=s2[c]):
                c=0
            if(s1[i]==s2[c]):
                c+=1
            if(c==len(s2)):
                return True
        return False
        
print(contenuta("sccsahcaAbcaiauwa","csa"))
            