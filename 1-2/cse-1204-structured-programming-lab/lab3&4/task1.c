/*
Write a C program a program that checks if a given
number is divisible by both 3 and 5.
*/

#include<stdio.h>

int main()
{
    int num;
    scanf("%d",&num);
    if(num % 3 == 0 && num % 5 == 0)
    {
        printf("Divisible\n");
    }
    else
    {
        printf("Not Divisible\n");
    }

    return 0;
}
