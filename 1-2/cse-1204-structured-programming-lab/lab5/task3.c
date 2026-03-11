/*
Write a C program that reads two integers X and N, then
print Nth digit of X from Least Significant Digit (LSD) to
Most Significant Digit (MSD)
*/

#include <stdio.h>

int main()
{
    int X, N, R;
    scanf("%d %d", &X, &N);
    int i = 1;
    while(i < N)
    {
        X = X / 10;
        i++;
    }
    R = X % 10;
    printf("%d", R);
    return 0;
}

