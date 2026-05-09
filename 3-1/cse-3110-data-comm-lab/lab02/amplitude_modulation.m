clc;
clear;
close all;

% Given Parameters
Am = 2;
Ac = 5;
fm = 20;
fc = 200;
fs = 10000;

t = 0:1/fs:1;

% Message Signal
m = Am*cos(2*pi*fm*t);

% Carrier Signal
c = Ac*cos(2*pi*fc*t);

% Different Modulation Indices
mu_values = [0.5 1 1.5];

for i = 1:length(mu_values)
    mu = mu_values(i);

    % AM Signal
    s = Ac*(1 + mu*cos(2*pi*fm*t)).*cos(2*pi*fc*t);

    figure;

    subplot(3,1,1);
    plot(t,m);
    title('Message Signal');

    subplot(3,1,2);
    plot(t,c);
    title('Carrier Signal');

    subplot(3,1,3);
    plot(t,s);
    title(['AM Signal (mu = ' num2str(mu) ')']);
end

% Calculations
mu = Am/Ac;

% Bandwidth of AM
BW = 2*fm;

% Total Power
Pt = (Ac^2/2)*(1 + (mu^2)/2);

disp(['Modulation Index = ', num2str(mu)]);
disp(['Bandwidth = ', num2str(BW), ' Hz']);
disp(['Total Power = ', num2str(Pt), ' W']);
