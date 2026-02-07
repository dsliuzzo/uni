class ListaConcatenata:
    # [...]
    def verifica(self, k):
        return self._somma_parziale(self._testa, k, 0) == self._somma_dal(self._testa, k, 0)
    
    def _somma_parziale(self, nodo, limite, contatore):
        if nodo is None or contatore == limite:
            return 0
        return nodo.info + self._somma_parziale(nodo.successivo, limite, contatore + 1)
    
    def _somma_dal(self, nodo, limite, contatore):
        if nodo is None:
            return 0
        if contatore < limite:
            return self._somma_dal(nodo.successivo, limite, contatore + 1)
        return nodo.info + self._somma_dal(nodo.successivo, limite, contatore + 1)
