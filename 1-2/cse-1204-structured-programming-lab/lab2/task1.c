/*
Write a C program that declares variables of the following
types: int, float, double, and char. Initialize each variable
with a value and print their values to the console.
*/

#include <stdio.h>

int main()
{
    int I = 10;
    float F = 3.14;
    double D = 9.876543;
    char Ch = 'A';

    printf("Integer: %d\n", I);
    printf("Float: %.2f\n", F);
    printf("Double: %lf\n", D);
    printf("Character: %c\n", Ch);

    return 0;
}

