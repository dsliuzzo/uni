entity FA is
    port(
        A, B, Cin   : in bit;
        S, Cout     : out bit
    );
end FA;

architecture MyFA of FA is
signal p : bit;
begin
    p <= A xor B;
    S <= Cin xor p;
    Cout <= A when p = '0' else Cin;
end MyFA;