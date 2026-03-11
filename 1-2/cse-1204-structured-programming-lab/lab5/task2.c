/*
Write a C program that takes two integers, base and
exponent, as input and uses a while loop to calculate
base raised to the power of exponent.
*/

#include <stdio.h>

int main()
{
    int base, expo, result = 1;
    scanf("%d %d",&base, &expo);
    int count = 1;
    while(count <= expo)
    {
        result = result * base;
        count++;
    }
    printf("%d",result);
    return 0;
}
