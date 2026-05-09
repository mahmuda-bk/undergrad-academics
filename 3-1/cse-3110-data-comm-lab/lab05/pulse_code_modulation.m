clc;
close all;
clear all;

n=input('enter number of bits: ');
fs=input('Sampling frequency: ');

L=2^n;
Vmax=input('enter Vmax: ');
Vmin=-Vmax;

t=0:1/fs:0.4;

f=input('enter frequency: ');
x=Vmax*sin(2*pi*f*t);

figure;
subplot(4,1,1);
plot(t,x);
title('Analog signal');

subplot(4,1,2);
stem(t,x);
title('Sampled signal');

%quantization
q_level=linspace(Vmin,Vmax,L);

q_signal=zeros(size(x));
index=zeros(size(x));

for i=1:length(x)
    [~,idx]=min(abs(q_level-x(i)));
    q_signal(i)=q_level(idx);
    index(i)=idx-1;
end

subplot(4,1,3);
stairs(t,q_signal);
title('Quantized signal');

%encode
encode=de2bi(index,n,'left-msb');
fprintf('encoded value: \n')
disp(encode)

%decode
decode=bi2de(encode,'left-msb');
decoded_signal=q_level(decode+1)

subplot(4,1,4);
plot(t,decoded_signal);
title('Reconstructed signal');
