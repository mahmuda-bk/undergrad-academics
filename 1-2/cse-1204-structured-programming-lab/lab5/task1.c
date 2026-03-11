/*
Write a C program that input an integer N, then print N
lines from 1 to N such that for N=4, the output is
1
22
333
4444
*/

#include <stdio.h>

int main()
{
    int N, cnt;
    scanf("%d",&N);
    cnt = 1;
    while(cnt <= N)
    {
        int j = 1;
        while(j <= cnt)
        {
            printf("%d",cnt);
            j++;
        }
        printf("\n");
        cnt++;
    }
    return 0;
}
