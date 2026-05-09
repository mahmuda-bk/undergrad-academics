%{
Plot 50 data values of cos(x) function evaluated between 0 and 2pi. Plot the figure.
%}

clc;
close all;
clear all;

x = linspace(0,2*pi,50);
y = cos(x);

plot(x,y)
xlabel('x values')
ylabel('cos(x)')
title('Cosine Wave')
grid on
