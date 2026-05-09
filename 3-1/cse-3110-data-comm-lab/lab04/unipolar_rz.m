clc;
clear;
close all;

bits = [1 0 1 1 0 1 1 0 1 1 1 1 1 0 0 1 1 0 1 1 0 0 1 1 1 0 1 0 1 0 1 0 1 0];
fs = 100;
t = 0:1/fs:length(bits);

y = zeros(1, length(t));

for i = 1:length(bits)
   if bits(i) == 1
       y((i-1)*fs+1 : (i-0.5)*fs) = 1;
   end
end

figure;
subplot(2,1,1); 
stem(bits, 'LineWidth', 2); 
title('Digital Data');

subplot(2,1,2); 
plot(t, y, 'LineWidth', 2); 
title('Unipolar RZ Signal');
grid on;
