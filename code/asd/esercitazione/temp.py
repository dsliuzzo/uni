close all; clear; clc;

s = zpk('s');
G = 900/(s*(s^2+42*s+441))

% scelgo k della C(s)
C = 21

% definiamo la funzione di anello
L = series(C,G);
% plot di Bode con i margini
margin(L)
grid on;

% calcolo del delta critico
delta_critico = smorz_Mr(3)

% calcolo dei parametri obbiettivo
[wc_des, phim_des] = M_wB_calcola_wc_phim(3,15,20)

wc_des = 10
phim_des = 45

% calcolo dei valori di modifica
[m,theta] = tiporete(L,wc_des,phim_des)

% calcoliamo i parametri necessari alla costruzione della sella
[alpha, T1, T2] = sella(wc_des, m, phim_des, 7);

% disegnamo il controllore
Csella = ((1+alpha*T1*s)/(1+T1*s))*((1+T2*s)/(1+alpha*T2*s))

% funzione di anello con sella
Lnew = Csella * C * G

bode(L,Csella,Lnew)
legend(["L non corretta", "C sella", "L corretta"])
grid on;

% verifichiamo i margini della nuova L
margin(Lnew)

% chiudiamo la retroazione per verificare che sia tutto corretto
T  = feedback(Lnew, 1)

% Analisi - permette di verificare se valori ottenuti corrispondono a
% ricercati
info = evidenziaModuloPassaBasso(T);

disp(info);

%% ==========================================================
% Funzione locale
% ==========================================================
function info = evidenziaModuloPassaBasso(T)

    % Guadagno statico
    T0 = abs(dcgain(T));

    if ~isfinite(T0) || T0 <= 0
        error('Il guadagno statico T(0) deve essere finito e positivo.');
    end

    T0_dB = 20*log10(T0);

    % Soglie esatte corrispondenti a sqrt(2)
    delta_dB = 20*log10(sqrt(2));   % circa 3.0103 dB

    soglia_inf = T0_dB - delta_dB;
    soglia_sup = T0_dB + delta_dB;

    % Costruzione automatica del vettore di pulsazioni
    poli = pole(T);
    zeri = zero(T);

    freq_caratt = abs([poli(:); zeri(:)]);
    freq_caratt = freq_caratt(freq_caratt > 0 & isfinite(freq_caratt));

    if isempty(freq_caratt)
        w_min = 1e-3;
        w_max = 1e3;
    else
        w_min = min(freq_caratt)/1000;
        w_max = max(freq_caratt)*1000;
    end

    w_min = max(w_min, 1e-6);

    if w_max <= w_min
        w_max = 1e3*w_min;
    end

    N = 20000;
    w = logspace(log10(w_min), log10(w_max), N);

    % Calcolo modulo
    mag = squeeze(abs(freqresp(T, w)));
    mag_dB = 20*log10(mag);

    % ======================================================
    % Picco di risonanza
    % ======================================================
    [Mr_dB, idx_picco] = max(mag_dB);
    wr = w(idx_picco);
    Mr = 10^(Mr_dB/20);

    % ======================================================
    % Ricerca estremo destro della banda passante
    %
    % Banda passante:
    % soglia_inf <= |T(jw)|_dB <= soglia_sup
    %
    % Per un passa basso si parte da w = 0.
    % L'estremo destro e' la prima uscita dalla fascia.
    % ======================================================

    dentro = (mag_dB >= soglia_inf) & (mag_dB <= soglia_sup);

    wb = NaN;
    soglia_intersecata = NaN;

    for k = 2:length(w)

        if dentro(k-1) && ~dentro(k)

            y1 = mag_dB(k-1);
            y2 = mag_dB(k);

            x1 = log10(w(k-1));
            x2 = log10(w(k));

            if mag_dB(k) > soglia_sup
                soglia_intersecata = soglia_sup;
            elseif mag_dB(k) < soglia_inf
                soglia_intersecata = soglia_inf;
            end

            % Interpolazione lineare in scala logaritmica sulle pulsazioni
            if y2 ~= y1
                x_cross = x1 + (soglia_intersecata - y1)*(x2 - x1)/(y2 - y1);
                wb = 10^x_cross;
            else
                wb = w(k);
            end

            break;
        end
    end

    % ======================================================
    % Grafico solo dei moduli
    % ======================================================

    figure;
    semilogx(w, mag_dB, 'LineWidth', 1.8);
    grid on;
    hold on;

    xlabel('\omega [rad/s]');
    ylabel('|T(j\omega)| [dB]');
    title('Diagramma dei moduli con picco di risonanza e banda passante');

    yline(T0_dB, '--', 'T(0)', 'LineWidth', 1.2);
    yline(soglia_inf, ':', 'T(0) - 3 dB', 'LineWidth', 1.2);
    yline(soglia_sup, ':', 'T(0) + 3 dB', 'LineWidth', 1.2);

    % Evidenziazione banda passante
    if ~isnan(wb)

        yl = ylim;

        patch( ...
            [w_min wb wb w_min], ...
            [yl(1) yl(1) yl(2) yl(2)], ...
            [0.8 0.9 1], ...
            'FaceAlpha', 0.25, ...
            'EdgeColor', 'none');

        uistack(findobj(gca, 'Type', 'line'), 'top');

        xline(wb, '--', ...
            sprintf('\\omega_B = %.4g rad/s', wb), ...
            'LineWidth', 1.3);

    else
        warning('Nessuna intersezione trovata nel range di pulsazioni considerato.');
    end

    % Evidenziazione picco di risonanza
    plot(wr, Mr_dB, 'o', ...
        'MarkerSize', 8, ...
        'LineWidth', 1.8);

    text(wr, Mr_dB, ...
        sprintf('  Picco: %.2f dB a %.4g rad/s', Mr_dB, wr), ...
        'VerticalAlignment', 'bottom');

    legend( ...
        'T(0)', ...
        'T(0) - 3 dB', ...
        'T(0) + 3 dB', ...
        'Banda Passante', ...
        '|T(j\omega)|', ...
        '\omega_B', ...
        'Picco di risonanza', ...
        'Location', 'best');

    hold off;

    % ======================================================
    % Output
    % ======================================================

    info.T0 = T0;
    info.T0_dB = T0_dB;

    info.soglia_inferiore_dB = soglia_inf;
    info.soglia_superiore_dB = soglia_sup;

    info.picco_risonanza_modulo = Mr;
    info.picco_risonanza_dB = Mr_dB;
    info.pulsazione_picco_risonanza = wr;

    info.pulsazione_banda_passante = wb;
    info.soglia_intersecata_dB = soglia_intersecata;

end