entity CSA is
    port(
        A, B    : in bit_vector(15 downto 0);
        Cin     : in bit;
        S       : out bit_vector(16 downto 0)
    );
end CSA;

architecture MyCSA of CSA is
component RCA8 is
    port(
        A, B: in bit_vector (7 downto 0);
        Cin : in bit;
        S   : out bit_vector(7 downto 0);
        Cout: out bit
    );
end component;

signal S0, S1 : bit_vector (8 downto 0);
signal c8  : bit;

begin
    ModLSB: RCA8 port map (A(7 downto 0), B(7 downto 0), Cin, S (7 downto 0), c8);
    ModMSB0: RCA8 port map (A(15 downto 8), B(15 downto 8), '0', S0 (7 downto 0), S0(8));
    ModMSB1: RCA8 port map (A(15 downto 8), B(15 downto 8), '1', S1 (7 downto 0), S1(8));
    S(16 downto 8) <= S0 when c8 = '0' else S1;
end MyCSA;