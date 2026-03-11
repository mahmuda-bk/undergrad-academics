/*
C program that inputs two integers 𝐴 and 𝐵, and prints all
the numbers between 𝐴 and 𝐵 (inclusive) that are divisible
by either 3 or 5 but not both.
*/

#include <stdio.h>

int main()
{
    int A, B;
    scanf("%d %d", &A, &B);

    for (int i = A; i <= B; i++)
    {
        if ((i%3 == 0 || i%5 == 0) && !(i%3 == 0 && i%5 == 0))
        {
            printf("%d\n", i);
        }
    }
    return 0;
}

