/*
Write a C program that takes an integer N as input and
uses a loop to calculate and print the factorial of N.
*/

#include<stdio.h>

int main()
{
    int N, i;
    int factorial = 1;
    scanf("%d",&N);
    if (N < 0) {
        printf("Factorial is not defined for negative numbers.\n");
    }
    else {
        i = 1;
        while (i <= N) {
            factorial = factorial * i;
            i++;
        }
        printf("%d",factorial);
    }

    return 0;

}
