clc;
clear;
close all;

% Parameters
Ac = 5;
fm = 20;
fc = 200;
fs = 10000;

t = 0:1/fs:1;

% Message Signal
m = cos(2*pi*fm*t);

beta_values = [0.5 2 10];

for i = 1:length(beta_values)
    beta = beta_values(i);

    % FM Signal
    s = Ac*cos(2*pi*fc*t + beta*sin(2*pi*fm*t));

    figure;

    subplot(2,1,1);
    plot(t,m);
    title('Message Signal');

    subplot(2,1,2);
    plot(t,s);
    title(['FM Signal (beta = ' num2str(beta) ')']);
end
