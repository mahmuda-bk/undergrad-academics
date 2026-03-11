/*
Write a C program and input a integer number, N in
decimal form and converts to its hexadecimal
representation.
*/

#include<stdio.h>
#include<string.h>

int main()
{
    int N, i=0, rem=0;
    scanf("%d", &N);
    char result[100];
    while(N!=0)
    {
        rem = N%16;
        if(rem < 10)
        {
            result[i] = rem + '0';
        }
        else
        {
            result[i] = rem - 10 + 'A';
        }
        N = N/16;
        i++;
    }
    for(int j = i-1; j>=0; j--)
    {
        printf("%c", result[j]);
    }
    return 0;
}
