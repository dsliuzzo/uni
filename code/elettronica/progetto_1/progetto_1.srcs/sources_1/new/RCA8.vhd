entity RCA8 is
    port (
        A, B: in bit_vector(7 downto 0);
        Cin : in bit;
        S   : out bit_vector (7 downto 0);
        Cout: out bit
    );
end RCA8;

architecture MyRCA8 of RCA8 is
component FA is 
    port(
        A, B, Cin   : in bit;
        S, Cout     : out bit
    );
end component;

signal c: bit_vector (8 downto 0);

begin
    FAgen: for i in 0 to 7 generate
        fullAdd: FA port map (A(i),B(i),c(i),s(i),c(i+1));
    end generate;
    c(0) <= Cin;
    Cout <= c(8);
end MyRCA8;
