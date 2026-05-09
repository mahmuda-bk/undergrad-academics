clc;
clear all;

data = [1 1 1 1 0 1 1 0 ];
fc = 2;
t = 0:0.01:3;

digital = [];
carrier = [];
ask_signal = [];

for i = 1:length(data)
    % Digital signal (1 or 0)
    d = data(i) * ones(size(t));
    
    % Carrier signal
    c = sin(2*pi*fc*t);
    
    % ASK modulation
    if data(i) == 1
    y = c;
    else
    y = 0*t;
    end
    
    % Concatenate
    digital = [digital d];
    carrier = [carrier c];
    ask_signal = [ask_signal y];
end

% Plot using subplot
subplot(3,1,1)
plot(digital)
title('Digital Signal')

subplot(3,1,2)
plot(carrier)
title('Carrier Signal')

subplot(3,1,3)
plot(ask_signal)
title('ASK Output Signal')
