%{
Create a stem plot of 50 data values between -2pi and 2pi. Use any function.
%}

clc;
close all;
clear all;

x = linspace(-2*pi,2*pi,50);
y = sin(x);

stem(x,y)

xlabel('x values')
ylabel('sin(x)')
title('Stem Plot of Sine Function')
grid on
