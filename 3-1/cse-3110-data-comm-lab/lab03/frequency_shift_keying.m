clc;
clear; 

data = [1 1 1 1 0 1 1 0 ];
f1 = 2; % Frequency for bit 1
f0 = 5; % Frequency for bit 0
A=500;
t = 0:0.01:1; % Time for one bit

digital = [];
fsk_signal = [];
carrier_signal_1 = [];
carrier_signal_0 = [];

for i = 1:length(data)
    % Digital signal
    d = data(i) * ones(size(t));
    
    %carrier signals
    c1 = sin(2*pi*f1*t);
    c0 = sin(2*pi*f0*t);
    
    % FSK modulation
    if data(i) == 1
    y = A*c1; % High frequency for 1
    else
    y = A*c0; % Low frequency for 0
    end
    
    % Concatenate
    digital = [digital d];
    fsk_signal = [fsk_signal y];
    carrier_signal_1 = [carrier_signal_1 c1]
    carrier_signal_0 = [carrier_signal_0 c0]
end

% Plot
subplot(4,1,1)
plot(digital)
title('Digital Signal')

subplot(4,1,2)
plot(carrier_signal_0)
title('carrier signal 0')

subplot(4,1,3)
plot(carrier_signal_1)
title('carrier signal 1')

subplot(4,1,4)
plot(fsk_signal)
title('FSK Signal')
