%{
Generate the following signals:  
y1 = sin(2*pi*5*t)    
y2 = cos(2*pi*3*t)    
y3 = sin(2*pi*3*t)  
Create a single figure with 3 subplots. Generate the values of t, from 0 to 2 seconds with 200 points.
%}


clc;
close all;
clear all;

t = linspace(0,2,200);
y1 = sin(2*pi*5*t);
y2 = cos(2*pi*3*t);
y3 = sin(2*pi*3*t);

figure

subplot(3,1,1);
plot(t,y1)
xlabel('t')
ylabel('y1')
title('y1 = sin(2*pi*5*t)')
grid on

subplot(3,1,2);
plot(t,y2)
xlabel('t')
ylabel('y2')
title('y2 = cos(2*pi*3*t)')
grid on

subplot(3,1,3);
plot(t,y3)
xlabel('t')
ylabel('y3')
title('y3 = sin(2*pi*3*t)')
grid on

