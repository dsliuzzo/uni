import random

# Dizionario per contenere le flashcards
flashcards = {
  1: { "fronte": "Quali sono alcune delle grandezze fondamentali del Sistema Internazionale?", "retro": "Le grandezze fondamentali includono: lunghezza (metri, m), massa (chilogrammi, kg), tempo (secondi, s), temperatura (kelvin, K), quantità di materia (mole, mol), intensità di corrente e intensità luminosa." },
  2: { "fronte": "Come si definisce una particella ferma e qual è la sua equazione di posizione?", "retro": "Una particella ferma è un oggetto che occupa sempre la stessa posizione nello spazio al passare del tempo. La sua equazione è x(t) = A, con x che rappresenta la posizione, t il tempo e A una costante." },
  3: { "fronte": "Qual è la formula per la velocità media e cosa non permette di capire?", "retro": "La formula per la velocità media è vm = Δx / Δt. La velocità media non permette di capire cosa accade durante il percorso." },
  4: { "fronte": "Come si calcola la velocità istantanea e cosa permette di analizzare?", "retro": "La velocità istantanea si calcola come la derivata dello spazio rispetto al tempo, ovvero vx = lim(Δt→0) Δx/Δt = dx/dt. Permette di analizzare l'andamento della velocità al variare del tempo." },
  5: { "fronte": "Quali sono le equazioni che descrivono un moto uniforme e qual è l'accelerazione?", "retro": "Le equazioni per un moto uniforme sono x = x0 + v0t e v = v0, dove v0 è una costante. In un moto uniforme, l'accelerazione (a) è pari a 0." },
  6: { "fronte": "Qual è la formula per l'accelerazione media?", "retro": "L'accelerazione media è definita come am = Δv / Δt." },
  7: { "fronte": "Come si calcola l'accelerazione istantanea?", "retro": "L'accelerazione istantanea si calcola come la derivata della velocità rispetto al tempo, ovvero a = lim(Δt→0) Δv/Δt = dv/dt." },
  8: { "fronte": "Qual è l'equazione della velocità per un moto uniformemente accelerato?", "retro": "L'equazione della velocità per un moto uniformemente accelerato è v = v0 + a(t - t0). Se si ipotizza t0 = 0, l'equazione diventa v = v0 + at." },
  9: { "fronte": "Qual è l'equazione della posizione per un moto uniformemente accelerato, ipotizzando t0 = 0?", "retro": "L'equazione della posizione per un moto uniformemente accelerato, ipotizzando t0 = 0, è x = x0 + v0t + 1/2 at^2, che graficamente rappresenta un arco di parabola." },
  10: { "fronte": "Qual è la relazione che lega la velocità finale, la velocità iniziale, l'accelerazione e lo spostamento in un moto uniformemente accelerato?", "retro": "La relazione è v^2x = v^20x + 2a(x - x0), dove vx è la velocità finale, v0x la velocità iniziale, a l'accelerazione, e (x - x0) lo spostamento." },
  11: { "fronte": "Qual è il valore e la direzione dell'accelerazione di gravità sulla superficie terrestre?", "retro": "Sulla superficie terrestre, l'accelerazione di gravità (|–g|) è una costante pari a 9,81 m/s^2 ed è sempre diretta verso il basso, perpendicolare al suolo." },
  12: { "fronte": "Come si calcola il tempo necessario a un corpo per raggiungere il suolo partendo dall'altezza massima (con velocità iniziale verticale nulla)?", "retro": "Il tempo di caduta è dato da t = √(2h/g), dove h è l'altezza iniziale e g è l'accelerazione di gravità. Questa equazione è identica a quella per calcolare il tempo per raggiungere il punto più alto." },
  13: { "fronte": "Come sono rappresentati i vettori di spostamento, velocità e accelerazione nel moto bidimensionale?", "retro": "Nel moto bidimensionale, si utilizzano vettori completi: spostamento r = xî + yĵ, velocità v = vxî + vyĵ = (dx/dt)î + (dy/dt)ĵ, e accelerazione a = axî + ayĵ = (dvx/dt)î + (dvy/dt)ĵ." },
  14: { "fronte": "Cos'è una traiettoria e come si relaziona il vettore velocità ad essa?", "retro": "Una traiettoria è formata dal luogo dei vettori posizione (–r) in funzione del tempo. Il vettore velocità (–v) ad un qualsiasi istante di tempo è un vettore di modulo |–v| tangente alla traiettoria." },
  15: { "fronte": "Come si descrive il moto di un corpo sull'asse x in un moto parabolico (in assenza di attrito)?", "retro": "Sull'asse x, il moto è un moto rettilineo uniforme, definito dalle formule: 1. vx = v0x e 2. x = x0 + v0xt." },
  16: { "fronte": "Come si descrive il moto di un corpo sull'asse y in un moto parabolico?", "retro": "Sull'asse y, il moto è un moto uniformemente accelerato a causa della gravità. Le formule che lo descrivono sono: 3. vy = v0y − gt e 4. y = y0 + v0yt− 1/2 gt^2." },
  17: { "fronte": "Cos'è la gittata e qual è la sua formula nel moto parabolico?", "retro": "La gittata è la distanza che percorre la palla rimanendo sopra il livello del suolo. La formula per la gittata (R) è R = (v0^2 sin 2α) / g." },
  18: { "fronte": "Come si calcola l'altezza massima raggiunta in un moto parabolico?", "retro": "L'altezza massima (ymax) si calcola nel punto in cui la velocità verticale (vy) è 0. La formula per l'altezza massima è ymax = v^20y / 2g." },
  19: { "fronte": "Cos'è il moto circolare uniforme?", "retro": "Il moto circolare uniforme si ha quando una particella percorre una traiettoria circolare a velocità costante, intendendo il modulo della velocità." },
  20: { "fronte": "Cos'è la velocità angolare e qual è la sua relazione con la velocità lineare?", "retro": "La velocità angolare (w) indica quanto rapidamente l'angolo varia in funzione del tempo (w = dθ/dt). La velocità lineare (v) è legata alla velocità angolare dalla relazione v = Rw." },
  21: { "fronte": "Cos'è il periodo in un moto circolare e qual è la sua formula in relazione alla velocità angolare?", "retro": "Il periodo (T) è il tempo (in s) necessario a percorrere un giro completo. La sua relazione con la velocità angolare (ω) è T = 2π / ω." },
  22: { "fronte": "Perché esiste l'accelerazione centripeta nel moto circolare uniforme e dove è diretta?", "retro": "Nel moto circolare uniforme, la velocità è costante solo nel suo modulo, ma cambia direzione e verso, pertanto esiste l'accelerazione centripeta. È sempre diretta verso il centro della circonferenza." },
  23: { "fronte": "Quali sono le formule per l'accelerazione centripeta?", "retro": "Le formule per l'accelerazione centripeta (ac) sono ac = - (v^2 / r) r̂ o ac = ω^2 r r̂." },
  24: { "fronte": "Cosa caratterizza il moto circolare non uniforme e cos'è l'accelerazione tangenziale?", "retro": "Nel moto circolare non uniforme, la velocità non è costante. L'accelerazione tangenziale (aT) è diretta come la velocità (tangente alla traiettoria) ma con dimensione variabile. La sua formula è aT = dv/dt = Rα, dove α è l'accelerazione angolare." },
  25: { "fronte": "Come può essere descritta la posizione di un punto materiale nel moto armonico semplice?", "retro": "La posizione x(t) può essere descritta come una funzione seno o coseno: x(t) = A sin(ωt + δ), dove A rappresenta l'ampiezza massima dell'oscillazione e δ è la fase iniziale." },
  26: { "fronte": "Quali sono le equazioni per la velocità e l'accelerazione nel moto armonico semplice?", "retro": "Le equazioni sono: velocità v(t) = Aω cos(ωt + δ) e accelerazione a(t) = −Aω^2 sin(ωt + δ) = −ω^2x(t)." },
  27: { "fronte": "Qual è la legge che descrive la forza elastica in una molla e cosa indica il segno meno?", "retro": "La forza elastica è descritta dalla Legge di Hooke: F = -kx. Il segno '−' indica che la forza è parallela alla deformazione ma ha verso opposto (è una forza di richiamo)." },
  28: { "fronte": "Da cosa dipende il periodo del moto armonico di una molla?", "retro": "Il periodo del moto è indipendente dall'ampiezza di vibrazione, ma dipende solo dalle proprietà della molla: T = 2π√(m/k)." },
  29: { "fronte": "Quale approssimazione si può fare per l'angolo in un pendolo semplice per angoli molto piccoli?", "retro": "Se si considera un angolo θ molto piccolo, si può approssimare sin θ ≈ θ." },
  30: { "fronte": "Da cosa dipende il periodo del moto armonico di un pendolo semplice?", "retro": "Nel moto armonico del pendolo semplice, il periodo dipende unicamente dalla lunghezza del filo (l) e dall'accelerazione di gravità (g): T = 2π√(l/g)." },
  31: { "fronte": "Cos'è la dinamica?", "retro": "La dinamica è lo studio delle cause del moto, ovvero le forze che agiscono su un corpo a provocarne le variazioni." },
  32: { "fronte": "Enuncia la prima legge di Newton.", "retro": "La prima legge di Newton afferma che ciascun corpo preserva il suo stato di quiete o di moto rettilineo uniforme salvo che sia costretto a mutare questo stato da forze applicate ad esso." },
  33: { "fronte": "Enuncia la seconda legge di Newton e scrivi la sua formula generale.", "retro": "La seconda legge di Newton afferma che il cambiamento di moto di un corpo è proporzionale alla forza risultante (F_ris) applicata ed avviene lungo la linea retta secondo cui la forza è applicata. La sua formula è F_ris = ma." },
  34: { "fronte": "Qual è l'unità di misura della forza e come è definita in termini di unità fondamentali del SI?", "retro": "L'unità di misura della forza è il Newton (N). È definita come 1N = 1kg m/s^2." },
  35: { "fronte": "Enuncia la terza legge di Newton e scrivi la sua formula.", "retro": "La terza legge di Newton, o principio di azione e reazione, afferma che 'A ogni azione è sempre opposta una uguale reazione', uguale in modulo ma opposta in verso. La formula è F_AB = -F_BA." },
  36: { "fronte": "Qual è la formula della forza peso e qual è la sua direzione?", "retro": "La formula della forza peso è Fp = m*g, dove g è l'accelerazione di gravità (9,81m/s^2). È una forza sempre perpendicolare al terreno." },
  37: { "fronte": "Cos'è la forza normale (reazione vincolare) e come agisce rispetto alla superficie?", "retro": "La forza normale è una forza opposta alla forza di gravità (o ad altre forze che premono su una superficie). Agisce sempre perpendicolare alla superficie su cui il corpo è appoggiato e verso il suo esterno." },
  38: { "fronte": "Cos'è la forza di attrito e da cosa dipende la sua intensità?", "retro": "La forza di attrito è una forza di contatto che ostacola lo scivolamento dei corpi. La sua intensità (Fa) è proporzionale alla normale (N) ed è indipendente dalle dimensioni e dall'area di contatto del corpo: Fa = μN." },
  39: { "fronte": "Cos'è la forza centripeta nel contesto del moto circolare e qual è la sua formula?", "retro": "La forza centripeta (Fc) è la forza risultante necessaria per tenere una massa in moto circolare uniforme. La sua formula è Fc = mac = mv^2/R o Fc = mω^2R." },
  40: { "fronte": "Cosa afferma il principio della relatività galileiana?", "retro": "Il principio della relatività galileiana afferma che in tutti i sistemi di riferimento inerziali (che si muovono a velocità costante) le leggi della dinamica di Newton restano invariate." },
  41: { "fronte": "Cos'è il momento torcente (momento di una forza) e qual è la sua formula?", "retro": "Il momento torcente (τ) è il prodotto della forza per il braccio, ed è ciò che causa un'accelerazione angolare. La sua formula è τ = |–r||F| sin θ, dove –r è il braccio (distanza dall'asse di rotazione) e F la forza." },
  42: { "fronte": "Qual è l'equivalente della seconda legge di Newton per il moto rotatorio?", "retro": "La sommatoria dei momenti torcenti (Στ) è uguale al prodotto del momento d'inerzia (I) per l'accelerazione angolare (α): Στ = Iα." },
  43: { "fronte": "Cosa afferma il teorema degli assi paralleli per il momento d'inerzia?", "retro": "Il momento di inerzia di un corpo relativo a un asse qualsiasi (I) è uguale alla somma del momento di inerzia calcolato rispetto a un asse parallelo e passante per il centro di massa (IcM) e del prodotto tra la massa del corpo (m) e il quadrato della distanza (h) tra i due assi: I = IcM + mh^2." },
  44: { "fronte": "Cos'è il lavoro in meccanica e qual è la sua formula generale?", "retro": "Il lavoro (L) è l'energia trasferita al corpo. La sua formula è il prodotto scalare tra la forza applicata (F) e lo spostamento (s): L = F ⋅ s = |F||s| cos θ, dove θ è l'angolo tra i due vettori." },
  45: { "fronte": "Cos'è l'energia cinetica e qual è la sua formula?", "retro": "L'energia cinetica (Ec) è l'energia di un corpo in movimento. La sua formula è Ec = 1/2 mv^2, ed è misurata in Joule (J)." },
  46: { "fronte": "Cosa afferma il teorema dell'energia cinetica (lavoro-energia)?", "retro": "Il teorema afferma che l'impulso del lavoro (L) della forza risultante che agisce su una particella è uguale alla variazione di quantità di moto in quell'intervallo di tempo. La formula è L = ΔEc = Ecf - Eci." },
  47: { "fronte": "Come si definiscono le forze conservative e quali sono le loro caratteristiche riguardo al lavoro?", "retro": "Le forze conservative sono quelle forze il cui lavoro fatto lungo una traiettoria chiusa è pari a 0. Il lavoro fatto da una forza conservativa nel muovere un corpo da una posizione all'altra è indipendente dalla traiettoria eseguita, ma dipende solo dalle posizioni iniziale e finale." },
  48: { "fronte": "Cos'è l'energia potenziale e come è legata al lavoro di una forza conservativa?", "retro": "L'energia potenziale (U) è associata alla configurazione del sistema. La variazione di energia potenziale (ΔU) è definita come l'opposto del lavoro fatto dalla forza conservativa: ΔU = Uf - Ui = -L." },
  49: { "fronte": "Cos'è l'energia meccanica e quando si conserva?", "retro": "L'energia meccanica (Em) è definita come la somma di energia cinetica e potenziale che agisce su un corpo. L'energia meccanica del sistema si conserva (Emf = Emi) se sul corpo agiscono solo forze conservative." },
  50: { "fronte": "Cos'è la quantità di moto e qual è la sua formula?", "retro": "La quantità di moto (p) è un vettore il cui verso coincide con quello della velocità. La sua formula è p = m–v, dove m è la massa e –v è la velocità." },
  51: {"fronte": "condizioni in cui l'energia meccanica si conserva", "retro": "se al sistema vengono applicate solo forze conservative e non ci sono forze dissipative"},
  52: {"fronte": "definizione di forza conservativa", "retro": "definiamo come conservativa una forza il cui lavoro compiuto non dipende dalla traiettoria eseguita"},
  53: {"fronte": "dimostrare che il lavoro della forza di gravità è nullo", "retro": "Il lavoro della forza peso è uguale all'integrale di F_p in ds, con F_p = mg e ds uguale a y iniziale - y finale; in una traiettoria chiusa y iniziale e y finale coincidono, di conseguenza il lavoro è nullo"},
  54: {"fronte": "teorema delle forze vive", "retro": "Il lavoro è uguale alla variazione di Energia cinetica, facciamo l'integrale di F (ma) in ds"},
  55: {"fronte": "primo principio della termodinamica e principio della termodinamica associata alle trasformazioni", "retro": "la variazione di energia interna è uguale al calore - il lavoro:\n - trasformazione isocora: il lavoro è nullo quindi la variazione di energia è uguale al calore\n - trasformazione isoterma: la variazione di energia interna è 0, quindi il lavoro e il calore sono uguali\n - trasformazione adiabatica: il calore è uguale a 0, quindi la variazione di energia interna è uguale al lavoro"},
  56: {"fronte": "moto parabolico", "retro": "è un moto composto da un moto rettilineo uniforme in x e un moto gravitazionale quindi uniformemente decelerato in y"},
  57: {"fronte": "momento di inerzia per massa puntiforme e per massa estesa", "retro": "il momento di inerzia misura quanto un corpo si oppone a cambiare il proprio stato di rotazione attorno ad un asse, per le massi puntiformi si indica come la sommatoria delle masse per i relativi raggi alla seconda, mentre per le masse estese dobbiamo calcolare l'integrale del raggio alla seconda in dm"},
  58: {"fronte": "condizioni affinchè un corpo sia in equilibrio", "retro": "la sommatoria delle forze è pari a 0 (2° legge di Newton)"},
  59: {"fronte": "calore specifico", "retro": "il calore specifico è la quantità di calore necessaria a innalzare la temperatura di un gradi di un chilo di massa"},
  60: {"fronte": "impulso", "retro": "misura il cambiamento della quantità di moto nel tempo e corrisponde alla forza media durante l'urto moltiplicata per delta t"},
  61: {"fronte": "oscillatore armonico", "retro": "l'oscillatore armonico è un sistema che compie un movimento periodico, le sue equazioni sono:\n - posizione:  x(t) = A cos(omega t + delta), con A ampiezza dell'oscillazione, e omega velocità angolare\n - velocità: v(t) = A omega cos(omega t + delta)\n - accelerazione: a = -omega^2 x(t)"},
  62: {"fronte": "lavoro in termodinamica", "retro": "il lavoro in termodinamica consiste nel lavoro compiuto dalle singole molecole di gas che muovendosi urtano le pareti del recipiente con una certe forza, graficamente possiamo definirla come l'area sottesa al grafico della funzione che rappresenta la trasformazione del gas"},
  63: {"fronte": "energia elastica", "retro": "1/2 k x^2"},
  64: {"fronte": "forza elastica", "retro": "k x"},
  65: {"fronte": "calore latente di fusione", "retro": "il calore necessario per far passare un chilogrammo di massa dallo stato solido allo stato liquido"},
  66: {"fronte": "momento torcente", "retro": "prodotto tra forza e raggio in dimanica rotazione, si rappresenta con tau"},
  67: {"fronte": "accelerazione centripeta", "retro": "in un moto circolare uniforme, nonostante la particella abbiamo una velocità costante nel suo modulo, la sua direzione cambia durante lo spostamento, per questo la sua traiettoria viene deviata da un accelerazione verso il centro della traiettoria in modo che il corpo possa continuare a percorrere la sua traiettoria lungo la circonferenza"},
  68: {"fronte": "classificazione degli urti", "retro": " - urto elastico, si conserva quantità di moto ed energia cinetica\n - urto anelastico, si conserva solo quantità di moto\n - urto completamente anelastico, si conserva solo la quantità di moto e i due corpi rimangono incastrati"},
  69: {"fronte": "gas perfetti", "retro": "sono gas le cui molecole possono urtare tra di loro senza perdere energia"},
  70: {"fronte": "perchè si dice moto parabolico", "retro": "perchè la relazione tra x e y può essere assimilato ad una parabola"},
}

# Lista per tenere traccia delle flashcards già estratte
flashcards_estratte = []

# Inizializza il contatore
contatore = 0

# Funzione per estrarre una flashcard randomicamente
def estrai_flashcard():
    global flashcards_estratte, contatore
    contatore += 1

    if len(flashcards_estratte) == len(flashcards):
        flashcards_estratte = []  # Reset della lista se tutte le flashcards sono state estratte

    chiave_random = random.choice(list(flashcards.keys()))
    while chiave_random in flashcards_estratte:
        chiave_random = random.choice(list(flashcards.keys()))
    
    flashcards_estratte.append(chiave_random)

    print("\n"f"FLASHCARD {contatore}:\n{flashcards[chiave_random]['fronte']}\n")
    input("Premi Invio per vedere il retro...")
    print(f"RETRO:\n{flashcards[chiave_random]['retro']}")

# Ciclo principale per ripetere l'estrazione
while True:
    estrai_flashcard()
    if contatore % len(flashcards) == 0 and contatore != 0:
        print("\nDOMANDE FINITE\n")
    input("\nPremi invio per continuare...")
    '''continua = input("Vuoi continuare? (s/n): ")
    if continua.lower() != 's':
        break'''