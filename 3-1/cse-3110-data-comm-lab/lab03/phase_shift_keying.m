clc;
clear; 

data = [1 1 1 1 0 1 0 1];
fc = 5; % Carrier frequency
t = 0:0.01:1; % Time for one bit

digital = [];
psk_signal = [];
carrier = [];

for i = 1:length(data)
    % Digital signal
    d = data(i) * ones(size(t));
   
    % Carrier signal
    c = sin(2*pi*fc*t);
   
    % BPSK modulation
    if data(i) == 1
    y = sin(2*pi*fc*t); % Phase = 0
    else
    y = sin(2*pi*fc*t + pi); % Phase = 180° shift
    end
    
    % Concatenate signals
    digital = [digital d];
    psk_signal = [psk_signal y];
    carrier = [carrier c];
end

% Plot
subplot(3,1,1)
plot(digital)
title('Digital Signal')

subplot(3,1,2)
plot(carrier)
title('Carrier Signal')

subplot(3,1,3)
plot(psk_signal)
title('BPSK Signal')
