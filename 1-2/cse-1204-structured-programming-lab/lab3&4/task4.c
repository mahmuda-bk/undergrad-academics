/*
Write a C program that reads an integer N then output
the maximum digits in N.
*/

#include<stdio.h>

int main()
{
    int N, R;
    scanf("%d",&N);
    int maxD = 0;
    while (N!=0)
    {
        R = N % 10;
        N = N / 10;
        if(R > maxD)
        {
            maxD = R;
        }
    }
    printf("%d",maxD);
    return 0;
}
